import { defineType, defineField } from 'sanity'
import { BasketIcon } from '@sanity/icons'

export const productSchema = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'priceLabel',
      title: 'Price Label',
      type: 'string',
      description: 'e.g. From LKR 2,500',
    }),
    defineField({
      name: 'mainImageUrl',
      title: 'Product Main Image URL / Local Path',
      type: 'string',
      description: 'Use a direct image URL or a local path (starts with /). Do not use Google Drive.',
    }),
    defineField({
      name: 'features',
      title: 'Features / Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'size', title: 'Size', type: 'string' }),
            defineField({ name: 'finish', title: 'Finish', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
