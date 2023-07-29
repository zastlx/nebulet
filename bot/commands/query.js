import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from "discord.js";
import config from "../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Developer
    ],
    data: new SlashCommandBuilder()
        .setName("query")
        .setDescription("Run an SQL query.")
        .addBooleanOption(o => o.setName('ephemeral').setDescription('Should the reponse be ephemeral? (default: true)'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    async execute(interaction) {
        let ephemeral = interaction.options.getBoolean('ephemeral') !== null ? interaction.options.getBoolean('ephemeral') : true;

        const input = new TextInputBuilder()
            .setCustomId('query_modal_input')
            .setLabel('SQL:')
            .setStyle(TextInputStyle.Paragraph)

        const modal = new ModalBuilder()
            .setCustomId('query_modal_' + ephemeral)
            .setTitle('Run SQL')
            .addComponents(
                new ActionRowBuilder().addComponents(input)
            );

        interaction.showModal(modal);
    }
}