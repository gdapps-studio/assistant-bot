import {setWebhookCallback} from "vercel-grammy";
import {bot, secretToken} from "#bot";

// Handler to set webhook url based on request headers
export default setWebhookCallback(bot, {
    secret_token: secretToken,
    onError: "return"
});
