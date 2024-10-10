import { Bot, Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";

export const {
    // Telegram bot token from t.me/BotFather
    BOT_TOKEN: token,

    // Secret token to validate incoming updates
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()
} = process.env;

// Default grammY bot instance
export const bot = new Bot(token);

// Use the conversations plugin
bot.use(conversations());
// Create a greeting conversation
const greetingConversation = new Composer();

async function greeting(conversation, ctx) {
    await ctx.reply("Hello! What's your name?");
    const { message } = await conversation.wait();
    const name = message.text;
    await ctx.reply(`Nice to meet you, ${name}! How old are you?`);
    const { message: ageMessage } = await conversation.wait();
    const age = parseInt(ageMessage.text);
    await ctx.reply(`Wow, ${age} is a great age! Thanks for chatting with me, ${name}!`);
}

greetingConversation.command("start", async (ctx) => {
    await ctx.conversation.enter("greeting");
});

bot.use(createConversation(greeting, "greeting"));
bot.use(greetingConversation);

// Remove the sample echo handler
// bot.on("message:text", ctx => ctx.reply(ctx.msg.text));
