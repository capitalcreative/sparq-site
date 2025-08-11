import {client} from '../sanity/client'
import {heroQuery, servicesQuery, pricingQuery, faqsQuery} from '../sanity/queries'

export default async function Home() {
  const [hero, services, pricing, faqs] = await Promise.all([
    client.fetch(heroQuery, {}, { next: { tags: ['hero'] } }),
    client.fetch(servicesQuery, {}, { next: { tags: ['services'] } }),
    client.fetch(pricingQuery, {}, { next: { tags: ['pricing'] } }),
    client.fetch(faqsQuery, {}, { next: { tags: ['faqs'] } }),
  ])

  return (
    <main className="p-8 max-w-3xl mx-auto space-y-12">
      <section>
        <h1 className="text-4xl font-bold">{hero?.title}</h1>
        <p className="mt-2 opacity-80">{hero?.subtitle}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <ul className="list-disc pl-6 mt-3">
          {services?.map((s:any)=>(
            <li key={s.name}><strong>{s.name}:</strong> {s.short}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Precios (desde)</h2>
        <ul className="list-disc pl-6 mt-3">
          {pricing?.map((p:any)=>(
            <li key={p.name}><strong>{p.name}</strong> — desde ${p.priceFrom} MXN</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <ul className="mt-3 space-y-3">
          {faqs?.map((f:any)=>(
            <li key={f.question}>
              <p className="font-medium">{f.question}</p>
              <p className="opacity-80">{f.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
