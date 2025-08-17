import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroBlock',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Título' }),
    defineField({ name: 'subtitle', type: 'text', title: 'Subtítulo', rows: 3 }),
    defineField({ name: 'primaryCtaLabel', type: 'string', title: 'CTA primario — texto' }),
    defineField({ name: 'primaryCtaHref', type: 'url', title: 'CTA primario — URL' }),
    defineField({ name: 'secondaryCtaLabel', type: 'string', title: 'CTA secundario — texto' }),
    defineField({ name: 'secondaryCtaHref', type: 'url', title: 'CTA secundario — URL' }),
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle' } }
})