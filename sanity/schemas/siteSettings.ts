import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'whatsApp', type: 'string' }),
    defineField({ name: 'calendly', type: 'url' }),
    defineField({ name: 'socials', type: 'array', of: [{ type: 'url' }] }),
    defineField({ name: 'ogImage', type: 'image' }),
  ],
})