import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const settingsSchema = defineType({
  name: 'settings',
  title: 'Global Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL / Local Path',
      type: 'string',
      description: 'Use a direct image URL (e.g., https://host.com/logo.png) or a local path (e.g., /logo.png). Do not use Google Drive links.',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 3,
      description: 'The description text in the footer.',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' }),
        defineField({ name: 'whatsappUrl', title: 'WhatsApp URL', type: 'url' }),
        defineField({ name: 'address', title: 'Office Address', type: 'string' }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
    defineField({
      name: 'seo',
      title: 'Global SEO Defaults',
      type: 'seo',
    }),
  ],
})
