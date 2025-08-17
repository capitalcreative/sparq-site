import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'page',
  type: 'document',
  title: 'Página',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Título' }),
    defineField({
      name: 'slug', type: 'slug', title: 'Slug',
      options: { source: 'title', maxLength: 96 }
    }),
    defineField({
      name: 'sections', type: 'array', title: 'Secciones',
      of: [{ type: 'heroBlock' }, { type: 'pricingBlock' }, { type: 'faqBlock' }]
    })
  ]
})