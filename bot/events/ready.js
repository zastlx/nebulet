import { ActivityType, EmbedBuilder } from "discord.js";
import { client, db } from "../managers/setup.js";
import { check } from "../managers/giveaway.js";

export default async (event) => {
    console.log(`Connected to ${event.user.tag}.`);

    client.user.setPresence({
        activities: [{
            name: 'You.',
            type: ActivityType.Watching
        }],
        status: 'dnd'
    });

    await check();
}