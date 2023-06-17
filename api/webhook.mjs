import {bot} from "../src/bot.mjs";
import {secretToken as secret_token} from "../src/data.mjs";

const {VERCEL_URL, VERCEL_ENV} = process.env;

export default async ({headers}, {json}) => {
    try {
        if (VERCEL_ENV !== "development") return json({});
        const host = headers["x-forwarded-host"] || VERCEL_URL;
        const {href} = new URL("api/update", `https://${host}`);
        const ok = await bot.api.setWebhook(href, {secret_token});
        return json({ok});
    } catch (e) {
        console.error(e);
        return json(e);
    }
}
