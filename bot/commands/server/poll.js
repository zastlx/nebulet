import {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} from "discord.js";
import { db } from "../../managers/setup.js";
import config from "../../config.js";

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
                .setFooter({
                    text: 'creator: @' + interaction.user.username
                })
            ],
            components: [actionRow]
        });

        await db.query(`INSERT INTO polls(msgId, options, votes) VALUES (?, ?, ?)`, [message.id, JSON.stringify(opts), JSON.stringify({})]);
    },
    interactions: {
        'poll_': async (event) => {
            let sqlData = await db.query(`SELECT * FROM polls WHERE msgId = ?`, [event.message.id]);
            sqlData = sqlData[0][0];
            sqlData.votes = JSON.parse(sqlData.votes);
            sqlData.options = JSON.parse(sqlData.options);

            if (Object.keys(sqlData.votes).includes(event.user.id) && sqlData.votes[event.user.id] === event.customId.split('_')[1]) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`You have already voted for this option.`)
                ],
                ephemeral: true
            });

            sqlData.votes[event.user.id] = event.customId.split('_')[1];
            await db.query(`UPDATE polls SET votes = ? WHERE msgId = ?`, [JSON.stringify(sqlData.votes), sqlData.msgId]);

            const actionRow = new ActionRowBuilder();

            sqlData.options.forEach((opt, index) => {
                if (opt) actionRow.addComponents(
                    new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setCustomId('poll_' + index)
                    .setLabel((index + 1).toString())
                );
            });

            const fix = (number) => ['zero', 'one', 'two', 'three', 'four', 'five'][number];

            const voteData = Object.values(sqlData.votes).reduce((acc, a) => {
                acc[a] = (acc[a] || 0) + 1;
                return acc;
            }, {});

            let message = await event.message.edit({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(event.message.embeds[0].title)
                    .setDescription(sqlData.options.map((opt, index) => {
                        return `:${fix(index + 1)}: — ${opt} — **${voteData[index.toString()] || 0}**`;
                    }).join('\n'))
                    .setFooter({
                        text: event.message.embeds[0].footer.text
                    })
                ],
                components: [actionRow]
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