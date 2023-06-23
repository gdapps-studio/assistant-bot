# Telegram Bot Template for [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)

> 📖 [Documentation for grammY](https://grammy.dev)

## What does this template do for you

### Instant prototyping

Just click the blue button and change something in bot.mjs in newly minted repository

### Universal bootstrap

Use webhook or polling locally, even without a Vercel project or CLI

### Ready for production

Webhook will be automatically installed for every deployment on Vercel during the build step

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the template using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FgrammYVercel&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&envLink=https%3A%2F%2Fcore.telegram.org%2Fbots%2Ftutorial%23obtain-your-bot-token&project-name=grammy-vercel&repository-name=grammy-vercel)

### Clone and Deploy

Select the appropriate option and deploy it to the cloud with [Vercel](https://vercel.com/new)

#### As Vercel project

> Please note that you will need to create a Vercel project and [set the bot token](#as-local-project) in the settings

##### Using long polling

```bash
npm run polling
```

##### Using webhook with [CloudFlare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/) ([`cloudflared`](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)) :

```bash
npm run webhook
```

And open link from terminal (ends with `*.trycloudflare.com`) to set webhook URL

> If you want another tunnel, just use [`vercel dev`](https://vercel.com/docs/cli/dev)

#### As local project

Set environment variable or create `.env` file:

```dotenv
TELEGRAM_BOT_TOKEN="Telegram Bot Token from t.me/BotFather"
```

Run in long polling mode:

```bash
npm run start
```

> 💡 This command does not require a Vercel account or CLI installation to run

## Environment variables

- `TELEGRAM_BOT_TOKEN` — Telegram bot token
  from [@BotFather](https://core.telegram.org/bots/tutorial#obtain-your-bot-token)
- `TELEGRAM_SECRET_TOKEN` — [Secret token](https://core.telegram.org/bots/api#:~:text=secret_token) for incoming
  requests

## Template structure

- [src/bot.mjs](src/bot.mjs) — Bot initialization and logic
- [src/start.mjs](src/start.mjs) — Starts bot in long polling mode
- [src/build.mjs](src/build.mjs) — Sets webhook at Vercel build step
- [api/update.mjs](api/update.mjs) — Function for receiving webhooks
- [api/webhook.mjs](api/webhook.mjs) — Function for set webhook in dev

## Related templates

- [For Vercel Edge Functions](https://github.com/PonomareVlad/grammYVercelEdge)
- [For Vercel Edge Functions with streaming response](https://github.com/PonomareVlad/grammYVercelEdgeStream)
- [For Vercel Serverless Functions](https://github.com/PonomareVlad/grammYVercel)

Made with 💜 by [Vladislav Ponomarev](https://GitHub.com/PonomareVlad)
