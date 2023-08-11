import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { db } from "../../managers/setup.js";
import config from "../../config.js";

export default {
    permissions: ['*'],
    data: new SlashCommandBuilder()
        .setName("blook")
        .setDescription("Get the server and game member count.")
        .addStringOption(o => o.setName('name').setDescription('The name of the Blook to search.').setRequired(true)),
    
    async execute(interaction) {
        let blook = await db.query(`SELECT * FROM blooks WHERE name = ?`, [ interaction.options.getString('name') ]);
        if (!blook[0][0]) blook = await db.query(`SELECT * FROM blooks WHERE displayName = ?`, [ interaction.options.getString('name') ]);
        
        if (!blook[0][0]) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`I can't find that Blook.`)
            ],
            ephemeral: true
        });

        let has = false;
        let query = await db.query(`SELECT * FROM users WHERE discord = ?`, [ interaction.user.id ]);
        if (query[0][0]) {
            let b = query[0][0].blooks;
            if (!b[blook[0][0].name]) has = 0;
            else has = b[blook[0][0].name]
        };

        let role = await interaction.guild.roles.fetch(config.roleConfig[blook[0][0].rarity])

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(blook[0][0].displayName)
                .setDescription(`> ${blook[0][0].funText}${has ? `\n\n You own **${has}** (on account **${query[0][0].username}**).` : ''}\n\n**Unboxing**\nPack: ${blook[0][0].pack || 'none'}\nSell Price: **${blook[0][0].value || 'cannot be sold'}**${blook[0][0].moreInfo && blook[0][0].moreInfo !== '' ? `\n\n**Additional Info**\n- ${blook[0][0].moreInfo.split(';;').join('\n- ')}` : ''}`)
                .setFooter({
                    text: `${blook[0][0].rarity} Blook`
                })
                .setThumbnail(`${config.game.host}${blook[0][0].image}`)
                .setColor(role.color)
            ]
        });
    }
}