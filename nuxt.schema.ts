import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    translations: {
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
