import config from "./config.js";
import { readdirSync } from "fs";
import { Routes } from "discord.js";
import { client, rest } from "./managers/setup.js";

const commandFolders = await readdirSync("./commands");
const eventFiles = await readdirSync("./events").filter(file => file.endsWith(".js"));

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}/`).filter(a => a.endsWith('.js'));
    commandFiles.forEach(async (file) => {
        const command = await import(`./commands/${folder}/${file}`);
        client.commands.set(file.split('.')[0], {
            data: command.default.data,
            execute: command.default.execute,
            permissions: command.default.permissions,
            interactions: command.default.interactions || {},
            category: folder,
            file
        });
    });
};

for (const file of eventFiles) {
    const event = await import(`./events/${file}`);
    client.on(file.split('.')[0], (...args) => event.default(...args));
}

setTimeout(() => {
    rest.put(Routes.applicationCommands(config.clientid), {
        body: Array.from(client.commands.keys()).map(key => client.commands.get(key).data.toJSON())
    }).then((c) => console.log(`Loaded ${c.length} bot commands.`)).catch(console.error);
}, 500);

client.login(config.token);

process.on('uncaughtException', (err) => console.log(err));