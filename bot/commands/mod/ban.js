import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { client } from "../../managers/setup.js";
import config from "../../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Administrator,
        config.roleConfig.Moderator
    ],
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban a member.")
        .addUserOption(option => option.setName("member").setDescription("The member to ban.").setRequired(true)),
    
    async execute(interaction) {
        
    },
    interactions: [

    ]
}