import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mineral',
  title: 'Minerals',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Mineral Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'minerals',
      readOnly: true, // Locks it to 'minerals'
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'video',
      title: 'Mineral Video',
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