


// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './src/sanity/schemas'

export default defineConfig({
  name: 'sparq_studio',
  title: 'Sparq Studio',
  projectId:'fibr4rh7',   
  dataset: 'production',        
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
})


