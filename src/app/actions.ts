'use server'
import { draftMode } from 'next/headers'

export async function disableDraftMode() {
  const d = await draftMode()
  await d.disable()
}