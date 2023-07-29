import {
    SlashCommandBuilder,
    EmbedBuilder
} from "discord.js";
import hexToDecimal from "../utils/hexToDecimal.js";
import { client } from "../managers/setup.js";

export default {
    permissions: ['*'],
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Displays a list of commands."),
    
    async execute(interaction) {
        return await interaction.reply({
            embeds: [{
                title: "Bot Commands",
                color: hexToDecimal('#ff6bdc'),
                timestamp: new Date().toISOString(),
                fields: client.commands.filter(a => a.permissions.some(permission => interaction.member.roles.cache.has(permission)) || a.permissions.includes('*')).map(command => {
                    return {
                        name: command.data.name,
                        value: '➜ ' + command.data.description
                    }
                })
            }],
            ephemeral: true
        });
    }
}