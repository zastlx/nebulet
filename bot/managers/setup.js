import mysql from "mysql2/promise";
import {
    Client,
    IntentsBitField,
    Collection,
    REST
} from "discord.js";
import config from "../config.js";

const db = mysql.createPool(config.mysql);

const client = new Client({
    intents: new IntentsBitField(131071)
});

client.commands = new Collection();

const rest = new REST({
    version: "10"
}).setToken(config.token);

export { db, rest, client };