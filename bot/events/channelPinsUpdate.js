import { EmbedBuilder, AuditLogEvent } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (event) => {
    event.guild.fetchAuditLogs({
        type: AuditLogEvent.MessagePin,
        limit: 1
    }).then(async (audit) => {
        const pin = audit.entries.first();

        client.channels.fetch(config.channelConfig.audit).then(channel => {
            channel.send({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`${pin.executor} pinned a [message](https://discord.com/channels/${pin.extra.channel.guildId}/${pin.extra.channel.id}/${pin.extra.messageId}) in <#${pin.extra.channel.id}>.`)
                ]
            });
        });
    });
}