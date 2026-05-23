import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gem',
  title: 'Gems',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Gem Name',
      type: 'string',
      description: 'e.g., Emerald Crystals | Rough',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'gems',
      readOnly: true, // Locks it to 'gems' since it's the Gems schema
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'video',
      title: 'Gem Video',
      type: 'file',
      options: { accept: 'video/*' },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})