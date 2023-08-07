import { EmbedBuilder, AuditLogEvent } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (emoji) => {
    emoji.guild.fetchAuditLogs({
        type: AuditLogEvent.EmojiDelete,
        limit: 1
    }).then(async (audit) => {
        const deletion = audit.entries.first();

        client.channels.fetch(config.channelConfig.audit).then(channel => {
            channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`${deletion.executor} deleted emoji \`${emoji.name}\`.`)
                ]
            });
        });
    });
}