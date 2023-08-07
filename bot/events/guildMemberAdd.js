import { EmbedBuilder } from "discord.js";
import { client } from "../managers/setup.js";
import config from "../config.js";

export default (event) => {
    event.user.send({
        embeds: [
            new EmbedBuilder()
            .setTitle("Welcome!")
            .setDescription(`Welcome to the Nebulet Discord server, <@${event.user.id}>!\n\nPlease read the <#${config.channelConfig.rules}> and <#${config.channelConfig.info}> channels for more information.`)
            .setColor("#ff6bdc")
            .setThumbnail(config.media.gameLogo)
            .setTimestamp().toJSON()
        ]
    }).catch(_ => { // if they cannot be dmed
        client.channels.fetch(config.channelConfig.chat).then(async channel => {
            let message = await channel.send({
                content: `<@${event.user.id}>`,
                embeds: [
                    new EmbedBuilder()
                    .setTitle("Welcome!")
                    .setDescription(`Welcome to the Nebulet Discord server, <@${event.user.id}>!\n\nPlease read the <#${config.channelConfig.rules}> and <#${config.channelConfig.info}> channels for more information.`)
                    .setColor("#ff6bdc")
                    .setThumbnail(config.media.gameLogo)
                    .setTimestamp().toJSON()
                ]
            });

            setTimeout(() => message.delete(), 60000)
        });
    });
}