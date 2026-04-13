import { defineType, defineField } from 'sanity'

export const socialLinkSchema = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Email', value: 'email' },
          { title: 'Twitter / X', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    }),
    defineField({
      name: 'handle',
      title: 'Handle',
      type: 'string',
      description: 'e.g. @anu_creationofficial',
    }),
  ],
})
