import { EmbedBuilder, AuditLogEvent } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (emoji) => {
    console.log(emoji)
    emoji.guild.fetchAuditLogs({
        type: AuditLogEvent.EmojiCreate,
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