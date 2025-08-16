'use client'
import { motion } from 'framer-motion'

export type PricingTier = {
  name: string
  priceFrom: number
  features?: string[]
  note?: string
}

export default function Pricing({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Precios (desde)</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tiers?.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border p-5"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-medium">{t.name}</h3>
              <div className="text-right">
                <div className="text-sm opacity-70">desde</div>
                <div className="text-2xl font-semibold">${t.priceFrom} MXN</div>
              </div>
            </div>
            {t.features?.length ? (
              <ul className="mt-4 list-disc pl-5 space-y-1">
                {t.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
            ) : null}
            {t.note ? <p className="mt-3 text-sm opacity-70">{t.note}</p> : null}
          </motion.div>
        ))}
      </div>
    </section>
  )
}