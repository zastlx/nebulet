import { EmbedBuilder } from "discord.js";
import { client } from "../managers/setup.js";

export default async (event) => {
    if (event.isChatInputCommand()) {
        const command = client.commands.get(event.commandName);

        if (!command.permissions.some(permission => event.member.roles.cache.has(permission)) && !command.permissions.includes('*')) {
            return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("Insufficient Permissions")
                    .setDescription("You do not have permission to use this command.")
                    .setColor("#ff0000")
                    .setTimestamp().toJSON()
                ],
                ephemeral: true
            });
        }

        command.execute(event);
    } else if (event.isButton() || event.isModalSubmit()) {
        client.commands.forEach(cmd => Object.keys(cmd.interactions).forEach(int => {
            if (event.customId.startsWith(int)) cmd.interactions[int](event);
        }))
    };
};