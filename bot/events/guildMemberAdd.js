import { EmbedBuilder } from "discord.js";

export default (event) => {
    event.user.send({
        embeds: [
            new EmbedBuilder()
            .setTitle("Welcome!")
            .setDescription(`Welcome to the Nebulet Discord server, <@${event.user.id}>!\n\nPlease read the <#1131299876383248514> and <#1131426638895251587> channels for more information.`)
            .setColor("#ff6bdc")
            .setThumbnail("https://media.zastix.club/nebulet/NebuletReal.png")
            .setTimestamp().toJSON()
        ]
    }).catch(_ => { // if they cannot be dmed
        client.channels.fetch("1132666714442698782").then(async channel => {
            let message = await channel.send({
                content: `<@${event.user.id}>`,
                embeds: [
                    new EmbedBuilder()
                    .setTitle("Welcome!")
                    .setDescription(`Welcome to the Nebulet Discord server, <@${event.user.id}>!\n\nPlease read the <#1131299876383248514> and <#1131426638895251587> channels for more information.`)
                    .setColor("#ff6bdc")
                    .setThumbnail("https://media.zastix.club/nebulet/NebuletReal.png")
                    .setTimestamp().toJSON()
                ]
            });

            setTimeout(() => message.delete(), 60000)
        });
    });

    event.roles.add('1132674117229871135')
}