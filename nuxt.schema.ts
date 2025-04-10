import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    Global: {
      en: field({
        type: 'object',
        title: 'en',
        description: 'Translations',
        icon: 'i-ph-palette-fill'
      }),
      fr: group({
        title: 'fr',
        description: 'Translations',
        icon: 'i-ph-palette-fill'
      })
    },
    SecondPage: {
      en: group({
        title: 'en',
        description: 'Translations',
        icon: 'i-ph-palette-fill'
      }),
      fr: group({
        title: 'fr',
        description: 'Translations',
        icon: 'i-ph-palette-fill'
      })
    },
  }
})
