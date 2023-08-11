import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { db } from "../../managers/setup.js";

export default {
    permissions: ['*'],
    data: new SlashCommandBuilder()
        .setName("members")
        .setDescription("Get the server and game member count."),
    
    async execute(interaction) {
        let gameusers = await db.query(`SELECT COUNT(*) AS game_users FROM users`);

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Server Members: **loading...**\nGame users: **${gameusers[0][0].game_users}**`)
            ],
            ephemeral: true
        });

        interaction.guild.members.fetch().then(async (memb) => {
            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Server Members: **${memb.filter(member => !member.user.bot).size}**\nGame players: **${gameusers[0][0].game_users}**`)
                ],
                ephemeral: true
            });
        });
    }
}