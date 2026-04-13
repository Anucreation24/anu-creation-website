import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'Used for avatar placeholder',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Member Image URL / Local Path',
      type: 'string',
      description: 'Use a direct image URL or a local path (starts with /). Do not use Google Drive.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
