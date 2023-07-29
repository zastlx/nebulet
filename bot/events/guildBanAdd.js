import config from "../config.js"
import { AuditLogEvent, EmbedBuilder } from "discord.js";
import hexToDecimal from "../utils/hexToDecimal.js";
import { client } from "../managers/setup.js";

export default (event) => {
    if ([config.clientid, '253302259696271360', '1003477997728313405'].includes(event.user.id)) return;

    event.guild.fetchAuditLogs({
        type: AuditLogEvent.MemberBanAdd,
        limit: 1
    }).then(audit => {
        const ban = audit.entries.first();

        if (!ban || ban.target.id !== event.user.id) return;

        const executor = event.guild.members.cache.get(ban.executorId);
        if (!executor) return;
        executor.roles.cache.forEach(role => {
            if (Object.values(config.roleConfig).includes(role.id)) {
                executor.roles.remove(role);
            }
        });

        event.guild.members.unban(event.user.id);

        executor.send({
            embeds: [
                new EmbedBuilder()
                    .setTitle("You have been quarantined!")
                    .setDescription(`You have been quarantined in ${event.guild.name} for banning ${event.user.tag}.`)
                    .setColor(hexToDecimal("#ff0000"))
                    .setTimestamp().toJSON()
            ]
        });
        config.owners.forEach(owner => {
            client.users.cache.get(owner).send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Quarantine")
                        .setDescription(`${executor.user.tag} has been quarantined for banning ${event.user.tag} in ${event.guild.name}.`)
                        .setColor(hexToDecimal("#ff0000"))
                        .setTimestamp().toJSON()
                ]
            });
        });
    });

}