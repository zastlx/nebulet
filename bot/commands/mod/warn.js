import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { client, db } from "../../managers/setup.js";
import config from "../../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Administrator,
        config.roleConfig.Moderator,
        config.roleConfig.Helper
    ],
    data: new SlashCommandBuilder()
        .setName("warn")
        .setDescription("Warn a member.")
        .addUserOption(option => option.setName("member").setDescription("The member to warn.").setRequired(true)),
    
    async execute(interaction) {
        
    },
    interactions: [

    ]
}