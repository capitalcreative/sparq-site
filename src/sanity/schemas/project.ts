import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'cover', type: 'image' }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'problem', type: 'text' }),
    defineField({ name: 'idea', type: 'text' }),
    defineField({ name: 'solution', type: 'text' }),
    defineField({ name: 'metrics', type: 'string' }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', type: 'number' }),
  ],
})
