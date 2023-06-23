import {safeStart} from "vercel-grammy";
import {bot} from "./bot.mjs";

await safeStart(bot);
