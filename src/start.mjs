import {writeFileSync} from "fs";
import {bot, secretToken as secret_token} from "./bot.mjs";

const {VERCEL_URL, VERCEL_ENV = "development"} = process.env;

switch (VERCEL_ENV) {

    case "development":

        console.info(`Starting a long polling ...`);

        await bot.start();

        break;

    default:

        if (!VERCEL_URL) throw "VERCEL_URL is required to set webhook";

        const infoPath = new URL("../info.json", import.meta.url);

        const info = await bot.api.getMe();

        console.info("Bot info:", info);

        writeFileSync(infoPath, JSON.stringify(info));

        const {href} = new URL("api/update", `https://${VERCEL_URL}`);
        const result = await bot.api.setWebhook(href, {secret_token});

        if (!result) throw "Failed to set webhook";

        console.info("Webhook set to URL:", href);
        console.info("Secret token:", secret_token);

}
