'use client'

type Faq = { question: string; answer: string }

export default function FAQ({ items }: { items: Faq[] }) {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
      <div className="mt-4 space-y-3">
        {items?.map((f) => (
          <details key={f.question} className="rounded-2xl border p-4">
            <summary className="cursor-pointer font-medium list-none">
              {f.question}
            </summary>
            <p className="mt-2 opacity-80">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}