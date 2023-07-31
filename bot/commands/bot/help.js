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

        let menuBuilder = new StringSelectMenuBuilder()
        .setCustomId('help_menu')
        .setPlaceholder('choose a category...')
        .addOptions(
                categories.forEach((opt, index) => {

                    return new StringSelectMenuOptionBuilder()
                        .setLabel(categoryNames[index] )
                        .setDescription('test')
                        .setValue(opt)
                })
            );

        

        console.log(menuBuilder)

        let actionRow = new ActionRowBuilder(menuBuilder);

        return await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Command Menu')
                    .setColor('#ff6bdc')
                    /*
                    .addFields(client.commands.filter(a => a.permissions.some(permission => interaction.member.roles.cache.has(permission)) || a.permissions.includes('*')).map(command => {
                        return {
                            name: command.data.name,
                            value: '➜ ' + command.data.description
                        }
                    }))*/
                    .setTimestamp()
            ],
            components: [ actionRow ]
        });
    }
}