import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**',
      type: 'page',
      schema: z.object({
        translations: z.object({
          en: z.object({
          }),
          fr: z.object({
          })
        })
      })
    })
  },
})