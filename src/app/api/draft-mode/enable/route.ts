import { NextResponse } from 'next/server'
import { draftMode } from 'next/headers'
import { previewClient } from '@/sanity/client'

export const dynamic = 'force-dynamic' // evita caching

export async function GET(request: Request) {
  // 1) Validación rápida del token
  if (!process.env.SANITY_VIEWER_TOKEN) {
    return new Response('Missing SANITY_VIEWER_TOKEN', { status: 500 })
  }

  // 2) Prueba de lectura a Sanity (con borradores)
  try {
    // Consulta mínima: intenta leer cualquier doc
    await previewClient.fetch(`*[_type == "page"][0]._id`)
  } catch (err: unknown) {
    const msg =
      err instanceof Error ? err.message : typeof err === 'string' ? err : 'Unknown error'
    return new Response('Sanity fetch failed: ' + msg, { status: 500 })
  }

  // 3) Si todo bien, activa draft mode y redirige a /
  const d = await draftMode()
  await d.enable()
  // redirige a home respetando el host actual
  const url = new URL('/', request.url)
  return NextResponse.redirect(url)
}