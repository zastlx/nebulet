import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { client } from "../../managers/setup.js";
import config from "../../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Developer,
        config.roleConfig.Administrator,
        config.roleConfig.Moderator
    ],
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Mass delete messages from a channel.")
        .addIntegerOption(option => option.setName("amount").setDescription("The amount of messages to delete.").setRequired(true)),
    
    async execute(interaction) {
        const amount = interaction.options.getInteger("amount");
        if (amount < 5 || amount > 100) {
            return await interaction.reply({
                content: "You must purge between 5 and 100 messages.",
                ephemeral: true
            });
        }

        await interaction.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            return interaction.reply({
                content: "There was an error purging messages.",
                ephemeral: true
            });
        });

        client.channels.fetch(config.channelConfig.actions).then(channel => {
            channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`${interaction.user} purged **${amount}** messages from ${interaction.channel}.`)
                ]
            })
        })

        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Purged **${amount}** messages!`)
            ],
            ephemeral: true
        });
    },
}