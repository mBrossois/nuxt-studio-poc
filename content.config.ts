import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**',
      type: 'page',
    }),
    translations: defineCollection({
      type: 'data',
      source: 'translations/**.json',
      schema: z.object({
        en: z.object({}),
        fr: z.object({})
      })
    })
  },
})