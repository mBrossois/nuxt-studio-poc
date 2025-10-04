// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: './components/shared',
      prefix: 'Marketing'
    }
  ],
  modules: ['@nuxt/content', '@nuxt/ui'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  css: ['~/assets/css/main.scss'],
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UIcon'].includes(c.pascalName) || c.shortPath.startsWith('components/content/'))

      globals.forEach(c => c.global = true)
    }
  },
})