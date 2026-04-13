import { defineType, defineField } from 'sanity'

export const seoSchema = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Titles above 60 characters may be truncated in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Descriptions above 160 characters may be truncated in search results.'),
    }),
    defineField({
      name: 'shareImageUrl',
      title: 'Share Image URL / Local Path',
      type: 'string',
      description: 'Used for social previews. Use a direct URL or local path (starts with /). Do not use Google Drive.',
    }),
  ],
})
