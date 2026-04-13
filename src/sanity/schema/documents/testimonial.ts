import { defineType, defineField } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Company',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'reviewSource',
      title: 'Review Source',
      type: 'string',
      initialValue: 'Google',
      options: {
        list: [
          { title: 'Google', value: 'Google' },
          { title: 'Direct', value: 'Direct' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'reviewUrl',
      title: 'Review URL',
      type: 'url',
      description: 'Link to the original review (e.g. Google Maps link)',
    }),
    defineField({
      name: 'profileImageUrl',
      title: 'Profile Image URL / Local Path',
      type: 'string',
      description: 'Use a direct image URL or a local path (starts with /). Do not use Google Drive.',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
