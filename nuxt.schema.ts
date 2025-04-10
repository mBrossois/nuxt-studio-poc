import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    Global: {
      en: group({
        type: 'object',
        title: 'en',
        description: 'Translations',
        icon: 'i-ph-palette-fill',
        fields: {
          NO: field({
            type: 'string',
            title: 'NO',
            description: 'No translation',
            icon: 'i-ph-palette-fill',
          })
        }
      }),
      fr: group({
        title: 'fr',
        description: 'Translations',
        icon: 'i-ph-palette-fill',
        fields: {
          NO: field({
            type: 'Object',
            title: 'NO',
            description: 'No translation',
            icon: 'i-ph-palette-fill',
          })
        }
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
