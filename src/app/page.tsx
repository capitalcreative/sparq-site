import { draftMode } from 'next/headers'
import { client, previewClient } from '../sanity/client'
import { pageBySlugQuery } from '../sanity/queries'
import Hero from '../components/Hero'
import Pricing, { PricingTier } from '../components/Pricing'
import FAQ from '../components/FAQ'

type HeroType = {
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}
type Section =
  | ({ _type: 'heroBlock' } & HeroType)
  | ({ _type: 'pricingBlock' } & { note?: string; tiers?: PricingTier[] })
  | ({ _type: 'faqBlock' } & { items?: { question: string; answer: string }[] })
type Page = { title?: string; slug?: string; sections?: Section[] }

export default async function Home() {
  const { isEnabled } = await draftMode()
  const c = isEnabled ? previewClient : client

  let page: Page | null = null
  try {
    page = await c.fetch<Page>(
      pageBySlugQuery,
      { slug: 'home' },
      { next: { tags: ['page:home'] } } // ← aquí faltaban las llaves de cierre
    )
  } catch {
    // si falla Sanity, seguimos con el fallback
  }

  // Fallback para no ver la home en blanco nunca
  if (!page?.sections?.length) {
    return (
      <main className="p-8 max-w-5xl mx-auto">
        <Hero
          title="Contenido que enciende conversaciones"
          subtitle="Foto, video y social media que se entiende, luce y vende."
          cta1Label="Escríbenos por WhatsApp"
          cta1Href="https://wa.me/524431909673"
        />
        <Pricing tiers={[]} />
        <FAQ items={[]} />
      </main>
    )
  }

  return (
    <main className="p-8 max-w-5xl mx-auto">
      {page.sections!.map((block, idx) => {
        switch (block._type) {
          case 'heroBlock':
            return (
              <Hero
                key={idx}
                title={block.title}
                subtitle={block.subtitle}
                cta1Label={(block as any).primaryCtaLabel}
                cta1Href={(block as any).primaryCtaHref}
                cta2Label={(block as any).secondaryCtaLabel}
                cta2Href={(block as any).secondaryCtaHref}
              />
            )
          case 'pricingBlock':
            return <Pricing key={idx} tiers={(block as any).tiers ?? []} />
          case 'faqBlock':
            return <FAQ key={idx} items={(block as any).items ?? []} />
          default:
            return null
        }
      })}
    </main>
  )
}