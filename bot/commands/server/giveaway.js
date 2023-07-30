import {
    SlashCommandBuilder,
    EmbedBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle, // all the code is in messageCreate or interactioNCreatw
    ActionRowBuilder
} from "discord.js";
import { db } from "../managers/setup.js";
import config from "../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Developer,
        config.roleConfig.Admin,
        config.roleConfig.Moderator
    ],
    data: new SlashCommandBuilder()
        .setName("giveaway")
        .setDescription("Manage server giveaways.")
        .addSubcommand(o => o.setName('start').setDescription('Start a giveaway.'))
        .addSubcommand(o =>o.setName('end').setDescription('End a giveaway early.')
            .addStringOption(o => o.setName('message-id').setDescription('The message ID to end.')))
        .addSubcommand(o => o.setName('active').setDescription('List active giveaways.')
            .addBooleanOption(o => o.setName('ephemeral').setDescription('Should the list be ephemeral?')))
        .addSubcommand(o => o.setName('reroll').setDescription('Reroll a giveaway.')
            .addStringOption(o => o.setName('message-id').setDescription('The message ID to reroll.'))),
    
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'start') {
            const title = new TextInputBuilder()
                .setCustomId('giveaway_create_title')
                .setLabel('Title:')
                .setStyle(TextInputStyle.Short);

            const winners = new TextInputBuilder()
                .setCustomId('giveaway_create_winners')
                .setLabel('Winner Count:')
                .setStyle(TextInputStyle.Short);

            const sponsor = new TextInputBuilder()
                .setCustomId('giveaway_create_sponsor')
                .setLabel('Sponsor (discord ID):')
                .setStyle(TextInputStyle.Short);
            
            const length = new TextInputBuilder()
                .setCustomId('giveaway_create_length')
                .setLabel('Length (minutes):')
                .setStyle(TextInputStyle.Short);

            let modal = new ModalBuilder()
                .setTitle('Giveaway Creator')
                .setCustomId('giveaway_create')
                .addComponents(
                    new ActionRowBuilder()
                        .addComponents(title),
                    new ActionRowBuilder()
                        .addComponents(winners),
                    new ActionRowBuilder()
                        .addComponents(sponsor),
                    new ActionRowBuilder()
                        .addComponents(length)
                )
            
            interaction.showModal(modal);
        }
    },
    interactions: {
        'giveaway_create': async (event) => {
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

            let create = await db.query(`INSERT into giveaways(messageId, name, winnerCount, sponsor, length, ending, joined, winners) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, [
                msg.id, 
                event.fields.getTextInputValue('giveaway_create_title'),
                Number(event.fields.getTextInputValue('giveaway_create_winners')),
                event.fields.getTextInputValue('giveaway_create_sponsor'),
                Number(event.fields.getTextInputValue('giveaway_create_length')),
                ends.toString(),
                JSON.stringify([]),
                JSON.stringify([])
            ]);

            event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Created giveaway.`)
                ],
                ephemeral: true
            })
        },
        'giveaway_join': async (event) => {
            let gw = await db.query(`SELECT * FROM giveaways WHERE messageId = ?`, [ event.message.id ]);
            gw = gw[0][0];
            let joined = JSON.parse(gw.joined);
            if (joined.includes(event.user.id)) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('You have already joined this giveaway.')
                ],
                ephemeral: true
            });
            joined.push(event.user.id);
            await db.query(`UPDATE giveaways SET joined = ? WHERE messageId = ?`, [ JSON.stringify(joined), event.message.id ])

            let message = await event.channel.messages.fetch(gw.messageId);

            let btn = new ButtonBuilder()
                .setCustomId('giveaway_join')
                .setEmoji('1036038762519605303')
                .setStyle(ButtonStyle.Primary)
                .setLabel(joined.length.toString())
            
            await message.edit({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(gw.name)
                    .setDescription(`╰ Sponsor: <@${gw.sponsor}>\n╰ Winners: **${gw.winnerCount}**\n╰ Ends <t:${Math.round(Number(gw.ending) / 1000)}:R>`)
                ],
                components: [ new ActionRowBuilder().addComponents(btn) ]
            });

            event.reply({
                embeds: [
                    new EmbedBuilder()
                        .setDescription('Joined Giveaway.')
                ],
                ephemeral: true
            })
        }
    }
}