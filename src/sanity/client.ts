import { createClient } from 'next-sanity'

const baseClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-07-01',
  useCdn: true,
  stega: { studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL },
})

export const client = baseClient

export const previewClient = baseClient.withConfig({
  useCdn: false,
  token: process.env.SANITY_VIEWER_TOKEN, 
  stega: { studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL },
})