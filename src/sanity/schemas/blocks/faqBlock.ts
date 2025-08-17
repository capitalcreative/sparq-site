import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqBlock',
  type: 'object',
  title: 'FAQ',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Preguntas (elige de FAQ)',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
      validation: (Rule) => Rule.min(1)
    })
  ],
  preview: { prepare: () => ({ title: 'FAQ' }) }
})