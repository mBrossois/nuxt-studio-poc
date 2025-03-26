import { group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    parent: group({
      title: 'translations',
      description: 'Translations',
      icon: 'i-ph-palette-fill',
    })
  }
})
