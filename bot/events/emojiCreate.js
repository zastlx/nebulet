import { EmbedBuilder, AuditLogEvent } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (emoji) => {
    emoji.guild.fetchAuditLogs({
        type: AuditLogEvent.EmojiCreate,
        limit: 1
    }).then(async (audit) => {
        const creation = audit.entries.first();

        client.channels.fetch(config.channelConfig.audit).then(channel => {
            channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`${creation.executor} created emoji \`${emoji.name}\` <${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>.`)
                ]
            });
        });
    });
}