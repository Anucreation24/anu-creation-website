import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const partnerSchema = defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL / Local Path',
      type: 'string',
      description: 'Use a direct image URL or a local path (e.g. /images/logo.png). Do not use Google Drive.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
