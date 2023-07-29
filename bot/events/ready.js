import { ActivityType } from "discord.js";
import { client } from "../managers/setup.js";

export default (event) => {
    console.log(`Connected to ${event.user.tag}.`);

    client.user.setPresence({
        activities: [{
            name: 'You.',
            type: ActivityType.Watching
        }],
        status: 'dnd'
    });
}