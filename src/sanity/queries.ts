import {groq} from 'next-sanity'

export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  sections[]{
    _type == "heroBlock" => {
      _type, title, subtitle, primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref
    },
    _type == "pricingBlock" => {
      _type, note,
      "tiers": tiers[]->{
        name, priceFrom, features, note
      }
    },
    _type == "faqBlock" => {
      _type,
      "items": items[]->{
        question, answer
      }
    }
  }
}
`