## Telegram Bot Template for [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FgrammYVercel&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&envLink=https%3A%2F%2Fcore.telegram.org%2Fbots%2Ftutorial%23obtain-your-bot-token&project-name=grammy-vercel&repository-name=grammy-vercel) <—
this is the simplest way 🙂

### Run locally

> Please note that before launching locally, you need to create a project on the Vercel and set bot token in settings

#### 1. Install [Vercel CLI](https://vercel.com/docs/cli)

```bash
npm i -g vercel
```

#### 2. And run local dev server

```bash
vercel dev
```

Now you can make some changes in [src/bot.mjs](src/bot.mjs)

[Documentation for grammY](https://grammy.dev)

### Template structure:

- [src/start.mjs](src/start.mjs) — Starts bot in long polling mode
- [api/update.mjs](api/update.mjs) — Function for receiving webhooks
- [src/webhook.mjs](src/webhook.mjs) — Sets webhooks and saves bot info


Made with 💜 by [Vladislav Ponomarev](https://GitHub.com/PonomareVlad)
