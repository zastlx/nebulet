import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { client } from "../../managers/setup.js";
import config from "../../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Administrator,
        config.roleConfig.Moderator,
        config.roleConfig.Helper
    ],
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDescription("Mute a member.")
        .addUserOption(option => option.setName("member").setDescription("The member to mute.").setRequired(true)),
    
    async execute(interaction) {
        
    },
    interactions: [

    ]
}