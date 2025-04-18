// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English',}, 
      { code: 'fr', name: 'French'}],
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  css: ['~/assets/css/main.css'],
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UIcon'].includes(c.pascalName) || c.shortPath.startsWith('components/content/'))

      globals.forEach(c => c.global = true)
    }
  },
})