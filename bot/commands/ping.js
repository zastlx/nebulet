import {
    SlashCommandBuilder,
    EmbedBuilder
} from "discord.js";
import { client } from "../managers/setup.js";

export default {
    permissions: ['*'],
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get the bot speed."),
    
    async execute(interaction) {
        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Bot Ping: **${Date.now() - interaction.createdTimestamp}ms**\nWS Ping: **${client.ws.ping}ms**`)
            ],
            ephemeral: true
        });
    }
}