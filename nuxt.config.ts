// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'service-worker'
  },
  devtools: { enabled: false },
  css: [
    '@/assets/styles/global.css',
  ]
})
