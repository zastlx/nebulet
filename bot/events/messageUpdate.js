import { EmbedBuilder, AuditLogEvent } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (oldMessage, newMessage) => {
    if (newMessage.author?.bot || newMessage.author?.system) return;

    client.channels.fetch(config.channelConfig.audit).then(channel => {
        channel.send({
            embeds: [
                new EmbedBuilder()
                .setDescription(`${newMessage.author} edited a message in <#${newMessage.channelId}>.`)
                .addFields({
                    name: 'Old Message',
                    value: oldMessage.content || 'no text',
                    inline: true
                }, {
                    name: 'New Message',
                    value: newMessage.content || 'no text',
                    inline: true
                }, {
                    name: 'Old Media',
                    value: [...oldMessage.attachments.values()]?.map(a => `[${[[...oldMessage.attachments.values()].map(a => a.url).indexOf(a.url) + 1]}](${a.url})`).join(', ') || 'no attachments',
                    inline: false
                }, {
                    name: 'New Media',
                    value: [...newMessage.attachments.values()]?.map(a => `[${[[...newMessage.attachments.values()].map(a => a.url).indexOf(a.url) + 1]}](${a.url})`).join(', ') || 'no attachments',
                    inline: true
                })
            ]
        });
    });
}