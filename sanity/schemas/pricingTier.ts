import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'priceFrom', title: 'Desde (MXN)', type: 'number', validation: r => r.required().min(0) }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'note', type: 'string' }),
    defineField({ name: 'order', type: 'number' }),
  ],
})