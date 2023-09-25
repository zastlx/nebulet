import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder
} from "discord.js";
import config from "../../config.js";

export default {
    permissions: [
        config.roleConfig.Owner
    ],
    data: new SlashCommandBuilder()
        .setName("eval")
        .setDescription("Run code.")
        .addStringOption(o => o.setName('code').setDescription('Code to run.').setRequired(true))
        .addBooleanOption(o => o.setName('ephemeral').setDescription('Should the output be ephemeral?'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        try {
            let logs = [];
            let log = (l) => logs.push(l);
            let then = Date.now();
            eval(interaction.options.getString('code'));
            let now = Date.now();
            if (!logs.length) log('- No output.')
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`Output:\n\`\`\`diff\n${logs.join('\n')}\n+ Finished in ${now-then}ms.\`\`\``)
                ],
                ephemeral: interaction.options.getBoolean('ephemeral') !== null ? interaction.options.getBoolean('ephemeral') : true
            })
        } catch(err) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`**Error!**\n\`\`\`diff\n- ${err}\n\`\`\``)
                ],
                ephemeral: interaction.options.getBoolean('ephemeral') !== null ? interaction.options.getBoolean('ephemeral') : true
            })
        }
    }
}