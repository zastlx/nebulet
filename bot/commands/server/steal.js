import {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits
} from "discord.js";
import config from "../../config.js";
import axios from "axios";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Administrator
    ],
    data: new SlashCommandBuilder()
        .setName("steal")
        .setDescription("Steal an emoji from another server.")
        .addStringOption(o => o.setName('emoji').setDescription(`Insert the emoji to add here.`).setRequired(true))
        .addStringOption(o => o.setName('server-name').setDescription(`The name for the emoji.`).setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuildExpressions),
    
    async execute(interaction) {
        await interaction.deferReply({
            ephemeral: true
        });

        let emoji = interaction.options.getString('emoji').trim();
        let name = interaction.options.getString('server-name');

        let id = emoji.match(/\d{15,}/g)?.[0];
        if (!id) return interaction.editReply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`What kind of idiot tries to steal default emojis?`)
            ],
            ephemeral: true
        });

        let type = await axios.get(`https://cdn.discordapp.com/emojis/${id}.gif`).then(() => 'gif').catch(() => 'png');
        let emojiURL = `https://cdn.discordapp.com/emojis/${id}.${type}?quality=lossless`;

        await interaction.guild.emojis.create({
            attachment: emojiURL,
            name
        }).then((addedEmoji) => {
            interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`# Added! ${addedEmoji.animated ? `<a:${addedEmoji.name}:${addedEmoji.id}>` : `<:${addedEmoji.name}:${addedEmoji.id}>`}`)
                ],
                ephemeral: true
            });
        }).catch(e => {
            if (e.message.includes('name[STRING_TYPE_REGEX]')) interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Emoji names must only include letters and underscores.`)
                ],
                ephemeral: true
            });
            else interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Unknown error: ${e.message}`)
                ],
                ephemeral: true
            });
        });
    }
}