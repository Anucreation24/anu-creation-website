import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactPageSchema = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({ name: 'titleNormal', title: 'Title (Normal)', type: 'string' }),
        defineField({ name: 'titleGold', title: 'Title (Gold)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
    }),
  ],
})
