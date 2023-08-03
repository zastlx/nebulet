import { EmbedBuilder, AuditLogEvent } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (message) => {
    if (message.author?.bot || message.author?.system) return;

    message.guild.fetchAuditLogs({
        type: AuditLogEvent.MessageDelete,
        limit: 1
    }).then(async (audit) => {
        const deletion = audit.entries.first();

        if (deletion.id !== message.id) client.channels.fetch(config.channelConfig.audit).then(channel => {
            channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`${message.author} deleted their own message in <#${message.channelId}>.`)
                    .addFields({
                        name: 'Content',
                        value: message.content || 'no text',
                        inline: true
                    }, {
                        name: 'Media',
                        value: [...message.attachments.values()]?.map(a => `[${[[...message.attachments.values()].map(a => a.url).indexOf(a.url) + 1]}](${a.url})`).join(', ') || 'no attachments',
                        inline: true
                    })
                ]
            });
        });
    });
}