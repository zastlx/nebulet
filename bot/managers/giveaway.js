import { EmbedBuilder } from "discord.js";
import { client, db } from "../managers/setup.js";

let intervals = [];

export const check = async () => {
    intervals = [];

    let query = await db.query(`SELECT * FROM giveaways WHERE winners = ?`, ['[]']);
    query[0].forEach(async (gw) => {
        intervals.push(setTimeout(async () => {
            let joined = JSON.parse(gw.joined);
            let winners = [];

            let guild = await client.guilds.fetch('1131299260109967431');
            let channel = await guild.channels.fetch('1134865662884450374');
            let message = await channel.messages.fetch(gw.messageId);

            for (let calc = 0; calc < gw.winnerCount; calc++) {
                let winner = joined[joined.length * Math.random() | 0];
                joined.splice(joined.indexOf(winner), 1);
                winners.push(winner);
            };
            await db.query(`UPDATE giveaways SET winners = ? WHERE messageId = ?`, [JSON.stringify(winners), gw.messageId]);
            winners = winners.map(winner => '<@' + winner + '>');

            if (joined.length < gw.winnerCount) return message.reply({
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
                    .setDescription(`Winner${gw.winnerCount > 1 ? 's' : ''}: ${winners.join(' ')}! <:giveaway:1135228169687937064>\nPlease DM the host, <@${gw.sponsor}>, for your prize.`)
                ]
            })
        }, Number(gw.ending) - Date.now()));
    });
}