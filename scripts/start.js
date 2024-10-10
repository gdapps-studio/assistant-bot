import {bot} from "../build/src/bot.js";

// Prevent error throw
bot.catch(console.error);

// Start bot in long-polling mode
await bot.start();
