import {bot, secretToken} from "../build/src/bot.js";
import {getURL} from "vercel-grammy";

const {VERCEL_ENV} = process.env;

// List of allowed environments
const allowedEnvs = [
    "production",
    // "preview"
];

await bot.init()

if (!allowedEnvs.includes(VERCEL_ENV)) process.exit();


if (await bot.api.setWebhook(getURL({path: "api/update"}), {secret_token: secretToken})) {

    const {url} = await bot.api.getWebhookInfo();

    console.info("Webhook set to URL:", url);

}
