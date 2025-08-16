'use client'
import { motion } from 'framer-motion'

type Props = {
  title?: string
  subtitle?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
}

export default function Hero({
  title, subtitle, cta1Label, cta1Href, cta2Label, cta2Href,
}: Props) {
  return (
    <section className="py-20 md:py-28">
      <motion.h1
        className="text-4xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title ?? 'Título para atrapar la atención'}
      </motion.h1>

      <motion.p
        className="mt-3 max-w-2xl text-lg opacity-80"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {subtitle ?? 'Subtítulo breve que explique tu propuesta.'}
      </motion.p>

      <div className="mt-6 flex flex-wrap gap-3">
        {cta1Label && cta1Href && (
          <motion.a
            href={cta1Href}
            className="px-5 py-2.5 rounded-xl bg-black text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {cta1Label}
          </motion.a>
        )}
        {cta2Label && cta2Href && (
          <a href={cta2Href} className="px-5 py-2.5 rounded-xl border">
            {cta2Label}
          </a>
        )}
      </div>
    </section>
  )
}