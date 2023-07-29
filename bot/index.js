import config from "./config.js";
import {
    readdirSync
} from "fs";
import { Routes } from "discord.js";
import { client, rest } from "./managers/setup.js";
import socket from "./managers/intercom.js";

const commandFiles = await readdirSync("./commands").filter(file => file.endsWith(".js"));
const eventFiles = await readdirSync("./events").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    client.commands.set(file.split('.')[0], {
        data: command.default.data,
        execute: command.default.execute,
        permissions: command.default.permissions
    });
}

for (const file of eventFiles) {
    const event = await import(`./events/${file}`);
    client.on(file.split('.')[0], (data) => event.default(data));
}

setTimeout(() => {
    rest.put(Routes.applicationCommands(config.clientid), {
        body: Array.from(client.commands.keys()).map(key => client.commands.get(key).data.toJSON())
    }).then((c) => console.log(`Loaded ${c.length} bot commands.`)).catch(console.error);
}, 500);

client.login(config.token);

process.on('uncaughtException', (err) => console.error(err));