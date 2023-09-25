import { Socket } from "net";
import { EmbedBuilder } from "discord.js";
import { client, db } from "./setup.js";
import config from "../config.js";

const handlers = {
  discordOAuth: async (data) => {
    try {
      let user = (await (await client.guilds.fetch(config.guild)).members.fetch(data.user.id));
      let query = await db.query(`SELECT * FROM users WHERE discord = ?`, [ user.id ]);
      if (query[0][0]) return user.send({
        embeds: [
          new EmbedBuilder()
          .setDescription(`You have already linked a Nebulet account to your Discord account.`)
        ]
      })
      user.roles.add(config.roleConfig.Common);
      user.send({
        embeds: [
          new EmbedBuilder()
            .setTitle('Discord Linked!')
            .setDescription("You've linked your Discord to Nebulet.")
            .toJSON()
        ]
      });
    } catch (error) {
      console.error("Error processing discordOAuth:", error);
    }
  },
  altAccountAttempt: async (data) => {
    client.channels.fetch(config.channelConfig.altLog).then((channel) => {
      channel.send({
        embeds: [
          new EmbedBuilder()
            .setTitle(`Attempted Alt!`)
            .setDescription(`User **${data.user}** (ID: ${data.userId}) tried to create account **${data.newUser}**.`)
            .setTimestamp()
        ]
      })
    })
  }
};

let socket;

export const connectToSocket = () => {
  socket = new Socket();

  socket.connect(1337, "localhost", () => {
    console.log("Connected to local intercom server");
    socket.write(
      JSON.stringify({
        type: "init",
        identifer: "bot",
      }) + "\n");
  });

  let partialData = "";

  socket.on("data", (data) => {
    const combinedData = partialData + data.toString();
    const messages = combinedData.split("\n");

    for (let i = 0; i < messages.length - 1; i++) {
      const message = messages[i];
      if (message.trim() !== "") {
        try {
          const parsedMessage = JSON.parse(message);
          const { type } = parsedMessage;

          if (handlers[type]) return handlers[type](parsedMessage);
        } catch (err) {
          console.error("Error parsing message:", err);
        }
      }
    }

    partialData = messages[messages.length - 1];
  });

  socket.on("close", () => {
    console.log("Socket connection closed");
    connectToSocket();
  });

  socket.on("error", (err) => {});
};

connectToSocket();

export default socket;