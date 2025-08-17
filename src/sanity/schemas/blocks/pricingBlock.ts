import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingBlock',
  type: 'object',
  title: 'Precios',
  fields: [
    defineField({
      name: 'tiers',
      type: 'array',
      title: 'Tiers (elige de PricingTier)',
      of: [{ type: 'reference', to: [{ type: 'pricingTier' }] }],
      validation: (Rule) => Rule.min(1).max(6)
    }),
    defineField({ name: 'note', type: 'string', title: 'Nota (opcional)' })
  ],
  preview: { select: { title: 'note' }, prepare: (sel) => ({ title: 'Precios', subtitle: sel.title }) }
})