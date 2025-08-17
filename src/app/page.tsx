// src/app/page.tsx
import { client } from '../sanity/client'
import { pageBySlugQuery } from '../sanity/queries'
import Hero from '../components/Hero'
import Pricing, { PricingTier } from '../components/Pricing'
import FAQ from '../components/FAQ'

type Section =
  | ({ _type: 'heroBlock' } & {
      title?: string; subtitle?: string;
      primaryCtaLabel?: string; primaryCtaHref?: string;
      secondaryCtaLabel?: string; secondaryCtaHref?: string;
    })
  | ({ _type: 'pricingBlock' } & { note?: string; tiers?: PricingTier[] })
  | ({ _type: 'faqBlock' } & { items?: { question: string; answer: string }[] })

type Page = { title?: string; slug?: string; sections?: Section[] }

export default async function Home() {
  let page: Page | null = null

  try {
    page = await client.fetch<Page>(pageBySlugQuery, { slug: 'home' }, { next: { tags: ['page:home'] } })
  } catch {
    // si Sanity falla por cualquier motivo, seguimos con el fallback
  }

  // Fallback para que JAMÁS se vea en blanco aunque no exista la página en Sanity
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

  // Render del page-builder
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
                cta1Label={block.primaryCtaLabel}
                cta1Href={block.primaryCtaHref}
                cta2Label={block.secondaryCtaLabel}
                cta2Href={block.secondaryCtaHref}
              />
            )
          case 'pricingBlock':
            return <Pricing key={idx} tiers={block.tiers ?? []} />
          case 'faqBlock':
            return <FAQ key={idx} items={block.items ?? []} />
          default:
            return null
        }
      })}
    </main>
  )
}