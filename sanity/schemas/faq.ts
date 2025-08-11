import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: r => r.required() }),
    defineField({ name: 'answer', type: 'text', validation: r => r.required() }),
    defineField({ name: 'order', type: 'number' }),
  ],
})