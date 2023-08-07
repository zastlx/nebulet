import {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";
import { client, db } from "../managers/setup.js";
import config from "../config.js";

let intervals = [];

export const check = async () => {
    intervals.forEach(a => clearInterval(a));
    intervals = [];

    let query = await db.query(`SELECT * FROM giveaways WHERE winners = ?`, ['[]']);
    query[0].forEach(async (giveaway) => {
        intervals.push(setTimeout(async () => {
            let gw = await db.query(`SELECT * FROM giveaways WHERE messageId = ?`, [giveaway.messageId]);
            gw = gw[0][0];
            if (gw.winners !== '[]') return;
            
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

            let joinButton = new ButtonBuilder()
                .setCustomId('giveaway_join')
                .setEmoji('1036038762519605303')
                .setStyle(ButtonStyle.Primary)
                .setLabel(joined.length.toString())
                .setDisabled(true)
            
            let joineesButton = new ButtonBuilder()
                .setCustomId('giveaway_participants')
                .setEmoji('1137546186572701837')
                .setStyle(ButtonStyle.Secondary)
            
            let actionRow = new ActionRowBuilder()
                .addComponents(joinButton)
                .addComponents(joineesButton)
            
            message.edit({
                components: [ actionRow ]
            })

            if (joinCount < gw.winnerCount) return message.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Giveaway Ended!`)
                    .setDescription(`Nobody entered the giveaway.`)
                ]
            })

            message.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Giveaway Ended!`)
                    .setDescription(`Winner${gw.winnerCount > 1 ? 's' : ''}: ${winners.join(' ')}! <:giveaway:1137546182328066068>\nPlease DM the host, <@${gw.sponsor}>, for your prize.`)
                ]
            })
        }, Number(giveaway.ending) - Date.now()));
    });
}