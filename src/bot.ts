import { Bot, Composer, Context, session } from "grammy";
import { conversations, createConversation, type Conversation, type ConversationFlavor } from "@grammyjs/conversations";

// Define custom context type
export type MyContext = Context & ConversationFlavor;

export const {
    // Telegram bot token from t.me/BotFather
    BOT_TOKEN: token,

    // Secret token to validate incoming updates
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()
} = process.env;

if (!token) {
    throw new Error("BOT_TOKEN is not set");
}

// Default grammY bot instance with custom context type
export const bot = new Bot<MyContext>(token);

// Use session middleware
bot.use(session({ initial: () => ({}) }));

// Use the conversations plugin
bot.use(conversations());

// Create a greeting conversation
const greetingConversation = new Composer<MyContext>();

async function greeting(conversation: Conversation<MyContext>, ctx: MyContext) {
    await ctx.reply("Hello! What's your name?");
    const { message } = await conversation.wait();
    const name = message?.text ?? "friend";
    await ctx.reply(`Nice to meet you, ${name}! How old are you?`);
    const { message: ageMessage } = await conversation.wait();
    const age = parseInt(ageMessage?.text ?? "0");
    await ctx.reply(`Wow, ${age} is a great age! Thanks for chatting with me, ${name}!`);
}

greetingConversation.command("start", async (ctx) => {
    await ctx.conversation.enter("greeting");
});

bot.use(createConversation(greeting));
bot.use(greetingConversation);

// Remove the sample echo handler
// bot.on("message:text", ctx => ctx.reply(ctx.msg.text));
