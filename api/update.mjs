import {bot} from "../src/bot.mjs";
import {secretToken} from "../src/data.mjs";
import {webhookCallback} from "grammy";

export default webhookCallback(bot, "http", {secretToken});
