// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-gtag'],
  gtag: {
    id: 'G-Q0XZLESPZ7',
    config: {
      page_title: 'Hello Events'
    }
  },
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hello-events.net',
      siteName: 'Hello Events',
      siteDescription: 'Welcome to Hello Events - Your premier event planning partner. Discover our expert event planning services, including social events, corporate event management, and charity event coordination. Contact us for unforgettable moments and memories.'
    }
  },
  
})
