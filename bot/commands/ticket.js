import {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

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
}