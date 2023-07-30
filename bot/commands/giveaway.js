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
}