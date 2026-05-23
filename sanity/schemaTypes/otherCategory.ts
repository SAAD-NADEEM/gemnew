import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'otherCategory',
  title: 'Other Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
