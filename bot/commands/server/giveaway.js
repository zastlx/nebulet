import {
    SlashCommandBuilder,
    EmbedBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";
import { client, db } from "../../managers/setup.js";
import config from "../../config.js";
import { check } from "../../managers/giveaway.js";
import moment from "moment";

export default {
    permissions: [
        config.roleConfig.Owner,
        config.roleConfig.Developer,
        config.roleConfig.Administrator,
        config.roleConfig.Moderator,
        config.roleConfig.Helper
    ],
    data: new SlashCommandBuilder()
        .setName("giveaway")
        .setDescription("Manage server giveaways.")
        .addSubcommand(o => o.setName('start').setDescription('Start a giveaway.'))
        .addSubcommand(o => o.setName('end').setDescription('End a giveaway early.')
            .addStringOption(o => o.setName('message-id').setDescription('The message ID to end.').setRequired(true)))
        .addSubcommand(o => o.setName('active').setDescription('List active giveaways.')
            .addBooleanOption(o => o.setName('ephemeral').setDescription('Should the list be ephemeral?')))
        .addSubcommand(o => o.setName('reroll').setDescription('Reroll a giveaway.')
            .addStringOption(o => o.setName('message-id').setDescription('The message ID to reroll.').setRequired(true))),
    
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'start') {
            const title = new TextInputBuilder()
                .setCustomId('giveaway_create_title')
                .setLabel('Title:')
                .setStyle(TextInputStyle.Short)
                .setMaxLength(200);

            const winners = new TextInputBuilder()
                .setCustomId('giveaway_create_winners')
                .setLabel('Winner Count:')
                .setStyle(TextInputStyle.Short)
                .setMaxLength(2);
            
            const length = new TextInputBuilder()
                .setCustomId('giveaway_create_length')
                .setLabel('Length (minutes):')
                .setStyle(TextInputStyle.Short)
                .setMaxLength(7);

            const sponsor = new TextInputBuilder()
                .setCustomId('giveaway_create_sponsor')
                .setLabel('Sponsor (discord ID) (optional):')
                .setStyle(TextInputStyle.Short)
                .setMaxLength(20)
                .setRequired(false);
            
            const role_req = new TextInputBuilder()
                .setCustomId('giveaway_create_reqrole')
                .setLabel('Required role (discord ID) (optional):')
                .setStyle(TextInputStyle.Short)
                .setRequired(false)
                .setMaxLength(20);

            let modal = new ModalBuilder()
                .setTitle('Giveaway Creator')
                .setCustomId('giveaway_create')
                .addComponents(
                    new ActionRowBuilder()
                        .addComponents(title),
                    new ActionRowBuilder()
                        .addComponents(winners),
                    new ActionRowBuilder()
                        .addComponents(length),
                    new ActionRowBuilder()
                        .addComponents(sponsor),
                    new ActionRowBuilder()
                        .addComponents(role_req)
                )
            
            interaction.showModal(modal);
        } else if (interaction.options.getSubcommand() === 'end') {
            let gwquery = await db.query('SELECT * FROM giveaways WHERE messageId = ?', [ interaction.options.getString('message-id') ]);
            if (!gwquery[0].length) return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`The specified message ID is not a giveaway.`)
                ],
                ephemeral: true
            });

            if (JSON.parse(gwquery[0][0].winners).length) return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`The specified has already ended.`)
                ],
                ephemeral: true
            })

            let gw = gwquery[0][0];

            let joined = JSON.parse(gw.joined);
            let joinCount = JSON.parse(gw.joined).length;
            let winners = [];

            let guild = await client.guilds.fetch(config.guild);
            let channel = await guild.channels.fetch(config.channelConfig.giveaways);
            let message = await channel.messages.fetch(gw.messageId);

            for (let calc = 0; calc < gw.winnerCount; calc++) {
                let winner = joined[joined.length * Math.random() | 0];
                joined.splice(joined.indexOf(winner), 1);
                winners.push(winner || 0);
            };
            await db.query(`UPDATE giveaways SET winners = ? WHERE messageId = ?`, [JSON.stringify(winners), gw.messageId]);
            winners = winners.map(winner => '<@' + winner + '>');

            await db.query(`UPDATE giveaways SET ending = ? WHERE messageId = ?`, [Date.now(), gw.messageId]);

            let joinButton = new ButtonBuilder()
                .setCustomId('giveaway_join')
                .setEmoji('1036038762519605303')
                .setStyle(ButtonStyle.Secondary)
                .setLabel(joinCount.toString())
                .setDisabled(true);
            
            let joineesButton = new ButtonBuilder()
                .setCustomId('giveaway_participants')
                .setEmoji('1137546186572701837')
                .setStyle(ButtonStyle.Secondary)
            
            let actionRow = new ActionRowBuilder()
                .addComponents(joinButton)
                .addComponents(joineesButton)

            message.edit({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(gw.name)
                    .setDescription(`╰ Sponsor: <@${gw.sponsor}>\n╰ Winners: **${gw.winnerCount}**\n╰ Ends <t:${Math.round(ends / 1000)}:R>`)
                ],
                components: [ actionRow ]
            })

            if (joinCount < gw.winnerCount) {
                message.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Giveaway Ended!`)
                        .setDescription(`Not enough people entered the giveaway.`)
                    ]
                })
            } else {
                message.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Giveaway Ended!`)
                        .setDescription(`Winner${gw.winnerCount > 1 ? 's' : ''}: ${winners.join(' ')}! <:giveaway:1137546182328066068>\nPlease DM the host, <@${gw.sponsor}>, for your prize.`)
                    ]
                })
            };

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('Ended giveaway.')
                ],
                ephemeral: true
            });
        } else if (interaction.options.getSubcommand() === 'active') {
            let q = await db.query(`SELECT * FROM giveaways WHERE winners = ?`, ['[]']);

            let active = [];
            q[0].forEach(g => active.push(`**${g.name}** (sponsor: <@${g.sponsor}>) [[Jump to Message](https://discord.com/channels/1131299260109967431/1134865662884450374/${g.messageId})]`));

            if (!active.length) return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`There are no active giveaways.`)
                ],
                ephemeral: true
            })

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Active Giveaways`)
                    .setDescription(active.join('\n'))
                    .setTimestamp()
                ],
                ephemeral: (interaction.options.getBoolean('ephemeral') === null || interaction.options.getBoolean('ephemeral') ? true : false)
            })
        } else if (interaction.options.getSubcommand() === 'reroll') {
            let gwquery = await db.query('SELECT * FROM giveaways WHERE messageId = ?', [ interaction.options.getString('message-id') ]);
            if (!gwquery[0].length) return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`The specified message ID is not a giveaway.`)
                ],
                ephemeral: true
            });

            let gw = gwquery[0][0];

            if (gw.winners === '[]') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`The specified giveaway has not ended.\n`)
                ],
                ephemeral: true
            });

            let joined = JSON.parse(gw.joined);
            let joinCount = JSON.parse(gw.joined).length;
            let winners = [];

            let guild = await client.guilds.fetch(config.guild);
            let channel = await guild.channels.fetch(config.channelConfig.giveaways);
            let message = await channel.messages.fetch(gw.messageId);

            for (let calc = 0; calc < gw.winnerCount; calc++) {
                let winner = joined[joined.length * Math.random() | 0];
                joined.splice(joined.indexOf(winner), 1);
                winners.push(winner);
            };
            await db.query(`UPDATE giveaways SET winners = ? WHERE messageId = ?`, [JSON.stringify(winners), gw.messageId]);
            winners = winners.map(winner => '<@' + winner + '>');

            if (joinCount < gw.winnerCount) return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`This giveaway cannot be rerolled because nobody entered.`)
                ],
                ephemeral: true
            })

            message.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Giveaway Rerolled!`)
                    .setDescription(`New Winner${gw.winnerCount > 1 ? 's' : ''}: ${winners.join(' ')}! <:giveaway:1137546182328066068>\nPlease DM the host, <@${gw.sponsor}>, for your prize.`)
                    .setFooter({
                        text: 'if this reroll is considered abuse of power, please open a ticket :)'
                    })
                ]
            })

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Rerolled giveaway.`)
                ]
            })
        }
    },
    interactions: {
        'giveaway_create': async (event) => {
            if (isNaN(event.fields.getTextInputValue('giveaway_create_length')) || isNaN(event.fields.getTextInputValue('giveaway_create_winners'))) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('Please make sure the giveaway length and winners are numbers.')
                ],
                ephemeral: true
            });

            if (Number(event.fields.getTextInputValue('giveaway_create_winners')) < 1 || Number(event.fields.getTextInputValue('giveaway_create_winners')) > 10) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('Giveaways can have between 1 and 10 winners.')
                ],
                ephemeral: true
            });

            if (Number(event.fields.getTextInputValue('giveaway_create_winners')) < 1 || Number(event.fields.getTextInputValue('giveaway_create_winners')) > 10) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('Giveaways can have between 1 and 10 winners.')
                ],
                ephemeral: true
            });

            if (Number(event.fields.getTextInputValue('giveaway_create_length')) < 1 || Number(event.fields.getTextInputValue('giveaway_create_length')) > 10080) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('Giveaways can be between 1 and 10080 (1 week) minutes long.')
                ],
                ephemeral: true
            });

            let sponsor = (event.fields.getTextInputValue('giveaway_create_sponsor') !== '') ? event.fields.getTextInputValue('giveaway_create_sponsor') : event.user.id;

            await event.guild.members.fetch(sponsor).then(async () => {
                let length = Number(event.fields.getTextInputValue('giveaway_create_length'));
                let ends = moment().add(length, 'minutes').valueOf();
            
                let joinButton = new ButtonBuilder()
                    .setCustomId('giveaway_join')
                    .setEmoji('1036038762519605303')
                    .setStyle(ButtonStyle.Primary)
                    .setLabel('0')
            
                let joineesButton = new ButtonBuilder()
                    .setCustomId('giveaway_participants')
                    .setEmoji('1137546186572701837')
                    .setStyle(ButtonStyle.Secondary)
            
                let actionRow = new ActionRowBuilder()
                    .addComponents(joinButton)
                    .addComponents(joineesButton)

                let em = new EmbedBuilder()
                    .setTitle(event.fields.getTextInputValue('giveaway_create_title'))
                    .setDescription(`╰ Sponsor: <@${sponsor}>\n╰ Winners: **${event.fields.getTextInputValue('giveaway_create_winners')}**\n╰ Ends <t:${Math.round(ends / 1000)}:R>`)
                    .setFooter({
                        text: 'created by @' + event.user.username
                    })

                if (event.fields.getTextInputValue('giveaway_create_reqrole') !== '') em.addFields({
                    name: 'Requirements',
                    value: `╰ Role: <@&${event.fields.getTextInputValue('giveaway_create_reqrole')}>`
                })
            
                let msg = await event.channel.send({
                    embeds: [ em ],
                    components: [ actionRow ]
                })

                await db.query(`INSERT into giveaways(messageId, name, winnerCount, sponsor, length, rolereq, ending, joined, winners) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                    msg.id, 
                    event.fields.getTextInputValue('giveaway_create_title'),
                    Number(event.fields.getTextInputValue('giveaway_create_winners')),
                    sponsor,
                    Number(event.fields.getTextInputValue('giveaway_create_length')),
                    event.fields.getTextInputValue('giveaway_create_reqrole'),
                    ends.toString(),
                    JSON.stringify([]),
                    JSON.stringify([])
                ]);

                event.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setDescription(`Created giveaway.`)
                    ],
                    ephemeral: true
                });

                await check();
            }).catch((e) => {
                event.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setDescription(`Please make sure the sponsor is a real member's ID.\nYou can leave it blank and it will default to you.`)
                    ],
                    ephemeral: true
                });
            });
        },
        'giveaway_join': async (event) => {
            let gw = await db.query(`SELECT * FROM giveaways WHERE messageId = ?`, [ event.message.id ]);
            gw = gw[0][0];

            let joined = JSON.parse(gw.joined);
            if (joined.includes(event.user.id)) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription('You have already joined this giveaway.')
                ],
                ephemeral: true
            });

            if (gw.rolereq !== '' && !event.member.roles.cache.has(gw.rolereq)) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`You must have the <@&${gw.rolereq}> role to enter this giveaway.`)
                ],
                ephemeral: true
            })

            joined.push(event.user.id);
            await db.query(`UPDATE giveaways SET joined = ? WHERE messageId = ?`, [ JSON.stringify(joined), event.message.id ])

            let message = await event.channel.messages.fetch(gw.messageId);

            let joinButton = new ButtonBuilder()
                .setCustomId('giveaway_join')
                .setEmoji('1036038762519605303')
                .setStyle(ButtonStyle.Primary)
                .setLabel(joined.length.toString())
            
            let joineesButton = new ButtonBuilder()
                .setCustomId('giveaway_participants')
                .setEmoji('1137546186572701837')
                .setStyle(ButtonStyle.Secondary)
            
            let actionRow = new ActionRowBuilder()
                .addComponents(joinButton)
                .addComponents(joineesButton)
            
            await message.edit({
                components: [ actionRow ]
            });

            event.reply({
                embeds: [
                    new EmbedBuilder()
                        .setDescription('You have joined the giveaway. Good luck!')
                ],
                ephemeral: true
            })
        },
        'giveaway_participants': async (event) => {
            let gw = await db.query(`SELECT * FROM giveaways WHERE messageId = ?`, [ event.message.id ]);
            gw = gw[0][0];

            let joins = JSON.parse(gw.joined);
            joins = joins.map(a => `${joins.indexOf(a) + 1}. <@${a}>`);

            if (!joins.length) return event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription((gw.winners !== '[]') ? 'Nobody joined this giveaway.' : 'Nobody has joined this giveaway.\nYou could be the first!')
                ],
                ephemeral: true
            })

            event.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle('Giveaway Joins')
                    .setDescription(`${joins.join('\n')}`)
                    .setFooter({
                        text: `Total: ${joins.length}`
                    })
                    .setTimestamp()
                ],
                ephemeral: true
            })
        }
    }
}