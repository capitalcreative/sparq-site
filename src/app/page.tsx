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
  // Tomamos la "Página" con slug=home
  const page = await client.fetch<Page>(pageBySlugQuery, { slug: 'home' }, { next: { tags: ['page:home'] } })

  return (
    <main className="p-8 max-w-5xl mx-auto">
      {page?.sections?.map((block, idx) => {
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