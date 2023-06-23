import {setWebhook} from "vercel-grammy/build";
import {bot, secretToken} from "./bot.mjs";

if (process.env.VERCEL_ENV === "development") process.exit();

if (await setWebhook(bot, {secret_token: secretToken})) {
    const {url} = await bot.api.getWebhookInfo();
    console.info("Secret token:", secretToken);
    console.info("Webhook set to URL:", url);
}
