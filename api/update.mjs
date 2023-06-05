import {webhookCallback} from "grammy";
import {bot, secretToken} from "../src/bot.mjs";

export default webhookCallback(bot, "http", {secretToken});
