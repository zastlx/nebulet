import {
    ActionRowBuilder,
    EmbedBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ChannelType,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";

import moment from "moment";
import hexToDecimal from "../utils/hexToDecimal.js";
import { client, db } from "../managers/setup.js";

export default async (event) => {
    if (event.isChatInputCommand()) {
        const command = client.commands.get(event.commandName);

        if (!command.permissions.some(permission => event.member.roles.cache.has(permission)) && !command.permissions.includes('*')) {
            return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("Insufficient Permissions")
                    .setDescription("You do not have permission to use this command.")
                    .setColor(hexToDecimal("#ff0000"))
                    .setTimestamp().toJSON()
                ],
                ephemeral: true
            });
        }

        command.execute(event);
    } else if (event.isButton()) {
        if (event.customId === 'ticket_open') {
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
        } else if (event.customId === 'ticket_close') {
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
        } else if (event.customId === 'ticket_close_final') {
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
            })

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
        } else if (event.customId.startsWith('poll_')) {
          let sqlData = await db.query(`SELECT * FROM polls WHERE msgId = ?`, [event.message.id]);
          sqlData = sqlData[0][0];
          sqlData.voted = JSON.parse(sqlData.voted);
          if (sqlData.voted.includes(event.user.id)) return event.reply({
              embeds: [
                  new EmbedBuilder()
                  .setDescription(`You have already voted.`)
              ],
              ephemeral: true
          });
          sqlData.voted.push(event.user.id);
          await db.query(`UPDATE polls SET voted = ? WHERE msgId = ?`, [JSON.stringify(sqlData.voted), sqlData.msgId]);

          let oldEmbed = event.message.embeds[0];

          let reg = /(\d+)\*\*/;
          let match = oldEmbed.description.split('\n')[event.customId.split('_')[1]].match(reg);
                    
          let oldValue = parseInt(match[1]);
          let newValue = oldValue + 1;
          let newDescription = oldEmbed.description.split('\n');
          newDescription[event.customId.split('_')[1]] = newDescription[event.customId.split('_')[1]].replace(reg, `${newValue}**`);
          newDescription = newDescription.join('\n');

          event.message.edit({
              embeds: [{
                  title: oldEmbed.title,
                  description: newDescription
              }]
          });

          event.reply({
              embeds: [ // are u alive
                  new EmbedBuilder()
                  .setDescription(`Vote counted.`)
              ],
              ephemeral: true
          });
        };
    } else if (event.isModalSubmit()) {
        if (event.customId === 'ticket_modal') {
            let vtQuery = await db.query(`SELECT * FROM tickets`);
            let validTickets = vtQuery[0].length += 1;
            let channel = await event.guild.channels.create({
                name: `ticket-${validTickets}`,
                type: ChannelType.GuildText,
                parent: '1134801945597583364'
            });

            await channel.lockPermissions();
            await channel.permissionOverwrites.edit(event.user.id, { ViewChannel: true });

            const button = new ButtonBuilder()
                .setLabel('Close')
                .setStyle(ButtonStyle.Danger)
                .setCustomId('ticket_close');

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
                false,
                initMessage.id
            ])

            let ghostPing = await channel.send(`@everyone`);
            ghostPing.delete();

            event.reply({
                embeds: [
                    new EmbedBuilder().setDescription(`Ticket Created! ${channel}`)
                ],
                ephemeral: true
            })
        } else if (event.customId.startsWith('query_modal')) {
            try {
                let t = await db.query(event.fields.getTextInputValue('query_modal_input'));
                event.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setDescription('**Input:**\n```' + event.fields.getTextInputValue('query_modal_input') + '```\n**Output:**\n```' + JSON.stringify(t[0][0], null, 2) + '\n```')
                    ],
                    ephemeral: event.customId.endsWith('true')
                })
            } catch(e) {
                console.log(e)
                event.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setDescription('**Input:**\n```' + event.fields.getTextInputValue('query_modal_input') + '```\n**Output:**\n```diff\n- ' + e + '\n```')
                        .setFooter({
                            text: 'one or more errors is usually too big a query :)'
                        })
                    ],
                    ephemeral: event.customId.endsWith('true')
                })
            }
        } else if (event.customId === 'giveaway_create') {
            let length = Number(event.fields.getTextInputValue('giveaway_create_length'));
            let ends = moment().add(length, 'minutes').valueOf()

            let btn = new ButtonBuilder()
                .setCustomId('giveaway_join')
                .setEmoji('1036038762519605303')
                .setStyle(ButtonStyle.Primary)
                .setLabel('0')
            
            let msg = await event.channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(event.fields.getTextInputValue('giveaway_create_title'))
                    .setDescription(`╰ Sponsor: <@${event.fields.getTextInputValue('giveaway_create_sponsor')}>\n╰ Winners: **${event.fields.getTextInputValue('giveaway_create_winners')}**\n╰ Ends <t:${Math.round(ends / 1000)}:R>`)
                ],
                components: [ new ActionRowBuilder().addComponents(btn) ]
            })

            let create = await db.query(`INSERT into giveaways(messageId, name, winners, sponsor, length, ending, joined) VALUES(?, ?, ?, ?, ?, ?, ?)`, [
                msg.id, 
                event.fields.getTextInputValue('giveaway_create_title'),
                Number(event.fields.getTextInputValue('giveaway_create_winners')),
                event.fields.getTextInputValue('giveaway_create_sponsor'),
                Number(event.fields.getTextInputValue('giveaway_create_length')),
                ends.toString(),
                JSON.stringify([])
            ]);

            event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Created giveaway.`)
                ],
                ephemeral: true
            })
        }
    }
};