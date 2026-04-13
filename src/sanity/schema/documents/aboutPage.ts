import { defineType, defineField } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export const aboutPageSchema = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({ name: 'titleNormal', title: 'Title (Normal)', type: 'string' }),
        defineField({ name: 'titleGold', title: 'Title (Gold)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        defineField({ name: 'titleNormal', title: 'Title (Normal)', type: 'string' }),
        defineField({ name: 'titleGold', title: 'Title (Gold)', type: 'string' }),
        defineField({ name: 'paragraphs', title: 'Story Paragraphs', type: 'array', of: [{ type: 'text', rows: 4 }] }),
        defineField({ name: 'establishedYear', title: 'Established Year', type: 'string', description: 'e.g. 2018' }),
        defineField({ name: 'mission', title: 'Mission', type: 'text', rows: 2 }),
        defineField({ name: 'vision', title: 'Vision', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
    }),
  ],
})
