import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subtitle', type: 'text' }),
    defineField({ name: 'primaryCtaLabel', type: 'string' }),
    defineField({ name: 'primaryCtaHref', type: 'string' }),
    defineField({ name: 'secondaryCtaLabel', type: 'string' }),
    defineField({ name: 'secondaryCtaHref', type: 'string' }),
  ],
})