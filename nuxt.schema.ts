import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    Global: {
      en: group({
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
            type: 'string',
            title: 'NO',
            description: 'No translation',
            icon: 'i-ph-palette-fill',
          })
        }
      })
    },
    SecondPage: {
      translations: group({
        title: 'en',
        description: 'Translations',
        icon: 'i-ph-palette-fill',
        fields: {
          EN: field({
            type: 'object',
            title: 'En translations',
            description: 'No translation',
            icon: 'i-ph-palette-fill',
          })
        }
      }),
    },
  }
})
