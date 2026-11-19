# promptjicode.com

The home of **PromptjiCode** and the personal page of **Yaman Mando**, in Arabic, English and Turkish.

- `/` — the PromptjiCode channel: series, every episode with a live “try it” page, and the tools.
- `/yaman` — Yaman Mando, Senior Frontend Developer: projects, skills, experience and contact.

Built with Nuxt 4, TypeScript, Tailwind CSS v4 and `@nuxtjs/i18n` (Arabic RTL by default), generated as a fully static site and served from Cloudflare Workers.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Deployed with **Cloudflare Workers Builds**: every push to `main` builds and deploys.

- Build command: `npm run generate`
- Deploy command: `npx wrangler deploy`

## Editing content

- Channel: `app/data/channel.ts` (series, episodes, social links)
- Personal page: `app/data/portfolio.ts` (projects, skills, experience)
- Short UI labels: `i18n/locales/{ar,en,tr}.json`
