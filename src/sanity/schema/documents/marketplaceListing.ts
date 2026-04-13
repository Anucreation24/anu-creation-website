import { defineType, defineField } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export const marketplaceListingSchema = defineType({
  name: 'marketplaceListing',
  title: 'Marketplace Listings',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'businessName', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Interior Design, Craftsmanship, Retail',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoUrl',
      title: 'Business Logo URL / Local Path',
      type: 'string',
      description: 'URL or path (starts with /) for the company logo.',
    }),
    defineField({
      name: 'coverImageUrl',
      title: 'Cover Image URL / Local Path',
      type: 'string',
      description: 'URL or path (starts with /) for the profile cover image.',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Shown on the marketplace grid cards.',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      description: 'Detailed business bio shown on the detail page.',
    }),
    defineField({
      name: 'location',
      title: 'Location / Address',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Details',
      type: 'object',
      fields: [
        defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string', description: 'Include country code, e.g. 94771234567' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'websiteUrl', title: 'External Website URL', type: 'string' }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Service Title', type: 'string' }),
            defineField({ name: 'description', title: 'Service Description', type: 'text', rows: 2 }),
            defineField({ name: 'category', title: 'Category', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'products',
      title: 'Products Showcase',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Product Title', type: 'string' }),
            defineField({ name: 'description', title: 'Product Description', type: 'text', rows: 2 }),
            defineField({ name: 'imageUrl', title: 'Product Image URL', type: 'string' }),
            defineField({ name: 'price', title: 'Price (Optional)', type: 'string' }),
            defineField({ name: 'category', title: 'Category', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Listing',
      type: 'boolean',
      initialValue: false,
      description: 'Featured listings appear at the top of the marketplace.',
    }),
    defineField({
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to hide/show this business from the marketplace.',
    }),
  ],
})
