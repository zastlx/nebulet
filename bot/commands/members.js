import {
    SlashCommandBuilder,
    EmbedBuilder
} from "discord.js";
import { db } from "../managers/setup.js";

export default {
    permissions: ['*'],
    data: new SlashCommandBuilder()
        .setName("members")
        .setDescription("Get the server and game member count."),
    
    async execute(interaction) {
        let gameusers = await db.query(`SELECT COUNT(*) AS zastix_please_stop_using_children FROM users`);

        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Server Members: **${interaction.guild.members.cache.filter(member => !member.user.bot).size}**\nGame users: **${gameusers[0][0].zastix_please_stop_using_children}**`)
            ],
            ephemeral: true
        });
    }
}