import { EmbedBuilder } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (message) => {
    if (message.author?.bot || message.author?.system) return;

    client.channels.fetch(config.channelConfig.audit).then(channel => {
        channel.send({
            embeds: [
                new EmbedBuilder()
                .setDescription(`${message.author}'s message was deleted in <#${message.channelId}>.`)
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
}