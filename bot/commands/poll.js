import {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} from "discord.js";
import { db } from "../managers/setup.js";
import config from "../config.js";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Developer,
        config.roleConfig.Admin,
        config.roleConfig.Moderator,
        config.roleConfig.Artist
    ],
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Poll the server.")
        .addStringOption(o => o.setName('question').setDescription('What are you asking?').setRequired(true))
        .addStringOption(o => o.setName('option_1').setDescription('Option 1.').setRequired(true))
        .addStringOption(o => o.setName('option_2').setDescription('Option 2.').setRequired(true))
        .addStringOption(o => o.setName('option_3').setDescription('Option 3.').setRequired(false))
        .addStringOption(o => o.setName('option_4').setDescription('Option 4.').setRequired(false))
        .addStringOption(o => o.setName('option_5').setDescription('Option 5.').setRequired(false)),

    async execute(interaction) {
        if (interaction.channel.id !== '1132671152918122506') {
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`This command is for the <#1132671152918122506> channel.`)
                ],
                ephemeral: true
            });
        }

        const opts = interaction.options._hoistedOptions.filter(a => a.name !== 'question').map(a => a.value);
        const actionRow = new ActionRowBuilder();

        opts.forEach((opt, index) => {
            if (opt) {
                actionRow.addComponents(
                    new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setCustomId('poll_' + index)
                    .setLabel((index + 1).toString())
                );
            }
        });

        const fix = (number) => ['zero', 'one', 'two', 'three', 'four', 'five'][number];

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Sent Poll!`)
            ],
            ephemeral: true
        })

        let message = await interaction.channel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle(interaction.options.getString('question'))
                .setDescription(opts.map((opt, index) => {
                    return `:${fix(index + 1)}: — ${opt} — **0**`;
                }).join('\n'))
            ],
            components: [actionRow]
        });

        await db.query(`INSERT INTO polls(voted, msgId) VALUES (?, ?)`, [JSON.stringify([]), message.id]);
    },
    interactions: {
        'poll_': async (event) => {
            let sqlData = await db.query(`SELECT * FROM polls WHERE msgId = ?`, [event.message.id]);
            sqlData = sqlData[0][0];
            sqlData.voted = JSON.parse(sqlData.voted);
            if (sqlData.voted.includes(event.user.id)) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`You have already voted.`)
                ],
                ephemeral: true
            });
            sqlData.voted.push(event.user.id);
            await db.query(`UPDATE polls SET voted = ? WHERE msgId = ?`, [JSON.stringify(sqlData.voted), sqlData.msgId]);

            let oldEmbed = event.message.embeds[0];

            let reg = /(\d+)\*\*/;
            let match = oldEmbed.description.split('\n')[event.customId.split('_')[1]].match(reg);

            let oldValue = parseInt(match[1]);
            let newValue = oldValue + 1;
            let newDescription = oldEmbed.description.split('\n');
            newDescription[event.customId.split('_')[1]] = newDescription[event.customId.split('_')[1]].replace(reg, `${newValue}**`);
            newDescription = newDescription.join('\n');

            event.message.edit({
                embeds: [{
                    title: oldEmbed.title,
                    description: newDescription
                }]
            });

            event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Vote counted.`)
                ],
                ephemeral: true
            });
        }
    }
}