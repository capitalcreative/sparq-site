import { client } from '../sanity/client'
import { heroQuery, servicesQuery, pricingQuery, faqsQuery } from '../sanity/queries'
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
type Faq = { question: string; answer: string }

export default async function Home() {
  const [hero, pricing, faqs] = await Promise.all([
    client.fetch<HeroType>(heroQuery, {}, { next: { tags: ['hero'] } }),
    client.fetch<PricingTier[]>(pricingQuery, {}, { next: { tags: ['pricing'] } }),
    client.fetch<Faq[]>(faqsQuery, {}, { next: { tags: ['faqs'] } }),
  ])

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <Hero
        title={hero?.title}
        subtitle={hero?.subtitle}
        cta1Label={hero?.primaryCtaLabel}
        cta1Href={hero?.primaryCtaHref}
        cta2Label={hero?.secondaryCtaLabel}
        cta2Href={hero?.secondaryCtaHref}
      />

      <Pricing tiers={pricing ?? []} />

      <FAQ items={faqs ?? []} />
    </main>
  )
}