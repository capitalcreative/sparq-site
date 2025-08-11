import { revalidateTag } from 'next/cache'
export async function POST(req: Request) {
  const secret = req.headers.get('x-sanity-secret')
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) return new Response('Unauthorized', { status: 401 })
  ;['hero','services','pricing','faqs','projects','siteSettings'].forEach(tag => revalidateTag(tag))
  return new Response('OK', { status: 200 })
}