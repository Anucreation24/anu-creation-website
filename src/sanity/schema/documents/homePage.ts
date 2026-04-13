import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homePageSchema = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({ name: 'titleFirst', title: 'Title (First Line)', type: 'string' }),
        defineField({ name: 'titleGold', title: 'Title (Gold Line)', type: 'string' }),
        defineField({ name: 'titleLast', title: 'Title (Last Line)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', title: 'Primary CTA Text', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'brandQuote',
      title: 'Brand Quote Section',
      type: 'object',
      fields: [
        defineField({ name: 'quoteTextPart1', title: 'Quote Text (Part 1)', type: 'string' }),
        defineField({ name: 'quoteTextGold', title: 'Quote Text (Gold)', type: 'string' }),
        defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
      ],
    }),
    defineField({
      name: 'ctaBanner',
      title: 'Final CTA Banner',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'titleNormal', title: 'Title (Normal)', type: 'string' }),
        defineField({ name: 'titleGold', title: 'Title (Gold)', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
    }),
  ],
})
