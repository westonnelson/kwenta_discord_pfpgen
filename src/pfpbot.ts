import { Client, ClientOptions } from "discord.js";

require("dotenv").config();
const token = process.env.DISCORD_TOKEN;

import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(token);

// console.log(client);
