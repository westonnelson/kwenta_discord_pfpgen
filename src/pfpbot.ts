import { Client, ClientOptions, Intents } from "discord.js";

require("dotenv").config();
const token = process.env.DISCORD_TOKEN;

import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log("Bot is starting...");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

ready(client);
interactionCreate(client);

client.login(token);

// console.log(client);
