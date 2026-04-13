import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const galleryItemSchema = defineType({
  name: 'galleryItem',
  title: 'Gallery Items',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frames', value: 'Frames' },
          { title: 'Fabric Art', value: 'Fabric Art' },
          { title: 'Clocks', value: 'Clocks' },
          { title: 'Key Tags', value: 'Key Tags' },
          { title: 'Design Work', value: 'Design Work' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      title: 'Gallery Image / Thumbnail URL',
      type: 'string',
      description: 'The main image or the thumbnail if this is a video.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
      description: 'Support YouTube, Vimeo or direct video links.',
      hidden: ({ document }) => document?.mediaType !== 'video',
      validation: (Rule) => Rule.custom((value, context) => {
        if (context.document?.mediaType === 'video' && !value) {
          return 'Video URL is required for video items'
        }
        return true
      }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Item',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible in Gallery',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
