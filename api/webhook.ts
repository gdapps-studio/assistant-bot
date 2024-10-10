import {bot, secretToken} from "../src/bot.js";
import {setWebhookCallback} from "vercel-grammy";

// Handler to set webhook url based on request headers
export default setWebhookCallback(bot as any, {
    path: "api/update",
    onError: "return",
    allowedEnvs: [
        "development",
        "preview"
    ],
    secretToken
});
