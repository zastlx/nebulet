import { EmbedBuilder } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default async (oldMember, newMember) => {
    if (oldMember.nickname == newMember.nickname) return;

    client.channels.fetch(config.channelConfig.audit).then(channel => {
        channel.send({
            embeds: [
                new EmbedBuilder()
                .setDescription(`${newMember.user} changed their nickname from **${oldMember.nickname || oldMember.user.username}** to **${newMember.nickname || newMember.user.username}**.`)
            ]
        });
    });
}