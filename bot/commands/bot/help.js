import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder
} from "discord.js";
import { client } from "../../managers/setup.js";

export default {
    permissions: ['*'],
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Displays a list of commands."),
    
    async execute(interaction) {
        let allowedCommands = client.commands.filter(a => a.permissions.some(permission => interaction.member.roles.cache.has(permission)) || a.permissions.includes('*'));
        let categories = [...new Set(allowedCommands.map(a => a.category))].sort()
        let categoryNames = categories.map(a => a.charAt(0).toUpperCase() + a.slice(1));

        let options = [];
        categories.forEach((opt, index) => {
            options.push(new StringSelectMenuOptionBuilder()
                .setLabel(categoryNames[index] )
                .setValue(opt))
        });

        let menuBuilder = new StringSelectMenuBuilder()
        .setCustomId('help_menu')
        .setPlaceholder('choose a category...')
        .addOptions(options);

        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle('Help Menu')
                .setDescription('<:blank:1136427277354287186> ➜ Pick a category to get started!')
                .setColor('#ff6bdc')
                .setTimestamp()
            ],
            components: [ new ActionRowBuilder().addComponents(menuBuilder) ]
        });
    },
    interactions: {
        'help_menu': async (interaction) => {
            let commands = client.commands
                .filter(a => a.permissions.some(permission => interaction.member.roles.cache.has(permission)) || a.permissions.includes('*'))
                .filter(a => a.category === interaction.values[0]);
            
            let allowedCommands = client.commands.filter(a => a.permissions.some(permission => interaction.member.roles.cache.has(permission)) || a.permissions.includes('*'));
            let categories = [...new Set(allowedCommands.map(a => a.category))].sort()
            let categoryNames = categories.map(a => a.charAt(0).toUpperCase() + a.slice(1));
        
            interaction.message.edit({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(categoryNames[categories.indexOf(interaction.values[0])] + ' | Help Menu')
                    .setColor('#ff6bdc')
                    .addFields(commands.map(command => {
                        return {
                            name: command.data.name,
                            value: '➜ ' + command.data.description
                        }
                    }))
                    .setTimestamp()
                ]
            })

            interaction.reply({
                ephemeral: true
            }).catch(e => {})
        }
    }
}