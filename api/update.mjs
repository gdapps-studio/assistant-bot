import {webhookCallback} from "grammy";
import {bot, secretToken} from "#bot";

// Default grammY handler for incoming updates via webhooks
export default webhookCallback(bot, "http", {secretToken});
