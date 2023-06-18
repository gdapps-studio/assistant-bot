import {bot} from "../src/bot.mjs";
import {secretToken} from "../src/data.mjs";
import {setWebhookCallback} from "vercel-grammy";

export default setWebhookCallback(bot, {
    secret_token: secretToken,
    catchErrors: true
});
