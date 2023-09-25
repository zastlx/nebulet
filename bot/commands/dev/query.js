import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    EmbedBuilder
} from "discord.js";
import config from "../../config.js";
import { db } from "../../managers/setup.js";

export default {
    permissions: [
        config.roleConfig.Owner
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
    },
    interactions: {
        'query_modal': async (event) => {
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
        }
    }
}