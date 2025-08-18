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
type FaqItem = { question: string; answer: string }

type HeroBlock = { _type: 'heroBlock' } & HeroType
type PricingBlock = { _type: 'pricingBlock'; note?: string; tiers?: PricingTier[] }
type FaqBlock = { _type: 'faqBlock'; items?: FaqItem[] }

type Section = HeroBlock | PricingBlock | FaqBlock
type Page = { title?: string; slug?: string; sections?: Section[] }

export default async function Home() {
  const { isEnabled } = await draftMode()
  const c = isEnabled ? previewClient : client

  let page: Page | null = null
  try {
    page = await c.fetch<Page>(
      pageBySlugQuery,
      { slug: 'home' },
      { next: { tags: ['page:home'] } }
    )
  } catch {
    // seguimos con fallback
  }

  // Fallback para no dejar la home en blanco
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
      {page.sections.map((block, idx) => {
        switch (block._type) {
          case 'heroBlock': {
            const b: HeroBlock = block
            return (
              <Hero
                key={idx}
                title={b.title}
                subtitle={b.subtitle}
                cta1Label={b.primaryCtaLabel}
                cta1Href={b.primaryCtaHref}
                cta2Label={b.secondaryCtaLabel}
                cta2Href={b.secondaryCtaHref}
              />
            )
          }
          case 'pricingBlock': {
            const b: PricingBlock = block
            return <Pricing key={idx} tiers={b.tiers ?? []} />
          }
          case 'faqBlock': {
            const b: FaqBlock = block
            return <FAQ key={idx} items={b.items ?? []} />
          }
          default:
            return null
        }
      })}
    </main>
  )
}