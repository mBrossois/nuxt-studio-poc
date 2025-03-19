// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  css: ['~/assets/css/main.css'],
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UColorModeButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },
})