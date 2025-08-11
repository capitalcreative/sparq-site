import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'short', title: 'Breve', type: 'text' }),
    defineField({ name: 'includes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', type: 'number' }),
  ],
})
