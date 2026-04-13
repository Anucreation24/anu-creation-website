import { defineType, defineField } from 'sanity'
import { LaunchIcon } from '@sanity/icons'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: LaunchIcon,
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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Select a professional icon that represents this service.',
      options: {
        list: [
          { title: 'Palette (Design)', value: 'palette' },
          { title: 'Clapperboard (Video)', value: 'clapperboard' },
          { title: 'Film (Video/Film)', value: 'film' },
          { title: 'Mic (Voice/Audio)', value: 'mic' },
          { title: 'Megaphone (Marketing)', value: 'megaphone' },
          { title: 'Rocket (Growth)', value: 'rocket' },
          { title: 'Camera (Photography)', value: 'camera' },
          { title: 'Image (Photos)', value: 'image' },
          { title: 'Pen Tool (Illustrating)', value: 'pen-tool' },
          { title: 'Monitor Play (Editing)', value: 'monitor-play' },
          { title: 'Brush (Art)', value: 'brush' },
          { title: 'Layout Grid (UI/UX)', value: 'layout-grid' },
          { title: 'Sparkles (Premium)', value: 'sparkles' },
          { title: 'Briefcase (Business)', value: 'briefcase' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'palette',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
