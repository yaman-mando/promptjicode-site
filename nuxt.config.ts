import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },

  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ar',
    baseUrl: 'https://promptjicode.com',
    locales: [
      { code: 'ar', language: 'ar', name: 'عربي', dir: 'rtl', file: 'ar.json' },
      { code: 'en', language: 'en', name: 'EN', dir: 'ltr', file: 'en.json' },
      { code: 'tr', language: 'tr', name: 'TR', dir: 'ltr', file: 'tr.json' },
    ],
    // Static site: no automatic redirects, the language is in the URL
    detectBrowserLanguage: false,
  },

  // Fully static: every page is pre-rendered at build time
  nitro: {
    // Always a plain static build, even inside Cloudflare's CI (which would otherwise pick a server preset)
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/yaman', '/en', '/en/yaman', '/tr', '/tr/yaman'],
    },
  },
})
