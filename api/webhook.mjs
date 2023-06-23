import {setWebhookCallback} from "vercel-grammy";
import {bot, secretToken} from "../src/bot.mjs";

export default setWebhookCallback(bot, {
    secret_token: secretToken,
    catchErrors: true
});
