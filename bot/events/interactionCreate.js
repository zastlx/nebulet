import {
    ActionRowBuilder,
    EmbedBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ChannelType,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";

import moment from "moment";
import hexToDecimal from "../utils/hexToDecimal.js";
import { client, db } from "../managers/setup.js";

 // do I just make 3 files in a subfolder of events?
 // wait so more
 // i think I got it
 // no idea if it's gonna work though
 // if it works, it's not shit
export default async (event) => {
    if (event.isChatInputCommand()) {
        const command = client.commands.get(event.commandName);

        if (!command.permissions.some(permission => event.member.roles.cache.has(permission)) && !command.permissions.includes('*')) {
            return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("Insufficient Permissions")
                    .setDescription("You do not have permission to use this command.")
                    .setColor(hexToDecimal("#ff0000"))
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
    /*
    } else if (event.isModalSubmit()) {
        if (event.customId === 'ticket_modal') {
            
        }  else if (event.customId.startsWith('query_modal')) {
            try {
                let t = await db.query(event.fields.getTextInputValue('query_modal_input'));
                event.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setDescription('**Input:**\n```' + event.fields.getTextInputValue('query_modal_input') + '```\n**Output:**\n```' + JSON.stringify(t[0][0], null, 2) + '\n```')
                    ],
                    ephemeral: event.customId.endsWith('true')
                })
            } catch(e) {
                console.log(e)
                event.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setDescription('**Input:**\n```' + event.fields.getTextInputValue('query_modal_input') + '```\n**Output:**\n```diff\n- ' + e + '\n```')
                        .setFooter({
                            text: 'one or more errors is usually too big a query :)'
                        })
                    ],
                    ephemeral: event.customId.endsWith('true')
                })
            }*/
};