import {Bot} from "grammy";
import crypto from "node:crypto";
import botInfo from "../info.json" assert {type: "json"};

export const {
    TELEGRAM_BOT_TOKEN: token,
    TELEGRAM_SECRET_TOKEN: secretToken =
        crypto.createHash("sha1").update(token).digest("hex")
} = process.env;

export const bot = new Bot(token, {botInfo});

bot.on("message:text", async ctx => ctx.reply(ctx.msg.text));
