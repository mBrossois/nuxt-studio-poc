import { group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    translations: group({
      title: 'translations',
      description: 'Translations',
      icon: 'i-ph-palette-fill',
    })
  }
})
