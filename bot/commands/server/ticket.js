import {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ChannelType
} from "discord.js";
import { db } from "../../managers/setup.js";
import config from "../../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Developer
    ],
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("Manage the server ticket channel.")
        .addSubcommand(s => s.setName('panel').setDescription('Send the ticket panel.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'panel') {
            const openTicket = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                .setLabel('Open a Ticket!')
                .setStyle(ButtonStyle.Primary)
                .setCustomId('ticket_open')
            );

            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Sent the ticket panel.`)
                ],
                ephemeral: true
            })

            await interaction.channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Tickets`)
                    .setDescription(`These tickets are for the following cases:`)
                    .addFields({
                        name: 'Bot Applications',
                        value: 'Requests to create or modify a chatbot.'
                    }, {
                        name: 'Critical Bugs',
                        value: 'Dupers, Crashers, etc.'
                    }, {
                        name: 'Purchase Issues',
                        value: 'Cannot purchase, bought and didn\'t recieve, etc.'
                    }, {
                        name: 'anything else important',
                        value: 'joke tickets = permanent ticket ban'
                    })
                ],
                components: [ openTicket ]
            });
        }
    },
    interactions: {
        'ticket_open': async (event) => {
            const modal = new ModalBuilder()
                .setCustomId('ticket_modal')
                .setTitle('Open a Ticket');

            const short = new TextInputBuilder()
                .setCustomId('ticket_modal_short')
                .setLabel('In 10 words or less, describe your issue.')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder(`I found a critical duping exploit.`)
                .setMinLength(10)
                .setMaxLength(150);

            const long = new TextInputBuilder()
                .setCustomId('ticket_modal_long')
                .setLabel('In 20 words or more, describe your issue.')
                .setPlaceholder(`You can dupe with the script at example.com/script.js, which makes it possible to dupe in a trade.`)
                .setStyle(TextInputStyle.Paragraph)
                .setMinLength(25);

            modal.addComponents(new ActionRowBuilder().addComponents(short), new ActionRowBuilder().addComponents(long));

            event.showModal(modal);
        },
        'ticket_modal': async (event) => {
            let vtQuery = await db.query(`SELECT * FROM tickets`);
            let validTickets = vtQuery[0].length += 1;
            let channel = await event.guild.channels.create({
                name: `ticket-${validTickets}`,
                type: ChannelType.GuildText,
                parent: config.categoryConfig.tickets
            });

            await channel.lockPermissions();
            await channel.permissionOverwrites.edit(event.user.id, { ViewChannel: true });

            const button = new ButtonBuilder()
                .setLabel('Close')
                .setStyle(ButtonStyle.Danger)
                .setCustomId('ticket_close_conf');

            let initMessage = await channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Ticket #${validTickets} (@${event.user.username})`)
                        .setDescription(`Reason: \`${event.fields.getTextInputValue('ticket_modal_short')}\`\nDescription: \n\`\`\`${event.fields.getTextInputValue('ticket_modal_long')}\n\`\`\``)
                        .setFooter({
                            text: 'Support will be with you shortly.'
                        })
                ],
                components: [ new ActionRowBuilder().addComponents(button) ]
            });

            await db.query(`INSERT INTO tickets(channelId, creatorId, closed, initMessageId) VALUES(?, ?, ?, ?)`, [
                channel.id,
                event.user.id,
                0,
                initMessage.id
            ])

            let ghostPing = await channel.send(`@here`);
            ghostPing.delete();

            event.reply({
                embeds: [
                    new EmbedBuilder().setDescription(`Ticket Created! ${channel}`)
                ],
                ephemeral: true
            })
        },
        'ticket_close_conf': async (event) => {
            const close = new ButtonBuilder()
            .setLabel('Close')
            .setStyle(ButtonStyle.Danger)
            .setCustomId('ticket_close_final');
        
        const leave_open = new ButtonBuilder()
            .setLabel('Cancel')
            .setStyle(ButtonStyle.Secondary)
            .setCustomId('ticket_close_wimp');
        
        event.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Are you sure you want to close this ticket?`)
                .setColor('#000000')
            ],
            ephemeral: true,
            components: [ new ActionRowBuilder().addComponents(close).addComponents(leave_open) ]
        })
        },
        'ticket_close_final': async (event) => {            
            await event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Closing ticket...`)
                ],
                ephemeral: true
            });

            await event.channel.lockPermissions();
            await db.query(`UPDATE tickets SET closed = 1 WHERE channelId = ?`, [event.channel.id]);
            
            let id = await db.query(`SELECT initMessageId FROM tickets WHERE channelId = ?`, [event.channel.id]);
            let message = await event.channel.messages.fetch(id[0][0].initMessageId);
            message.edit({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`${message.embeds[0].title}`)
                    .setDescription(`${message.embeds[0].description}\n**Ticket closed.**`)
                    .setFooter({
                        text: `Closed by @${event.user.username}`
                    })
                ],
                components: []
            });

            console.log(event.message);

            event.channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Ticket closed by ${event.user}.`)
                    .setColor(`#000000`)
                ]
            });

            await event.editReply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Ticket closed.`)
                ]
            });
        }
    }
}