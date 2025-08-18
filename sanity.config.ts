
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import schemas from './src/sanity/schemas'

export default defineConfig({
  name: 'sparq_studio',
  title: 'Sparq Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: '/',
        previewMode: { enable: '/api/draft-mode/enable' },
      },
    }),
    deskTool(),
    visionTool(),
  ],
  schema: { types: schemas },
})