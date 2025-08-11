import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type=="hero"][0]{title,subtitle,primaryCtaLabel,primaryCtaHref,secondaryCtaLabel,secondaryCtaHref}`
export const servicesQuery = groq`*[_type=="service"]|order(order asc){name,short,includes}`
export const pricingQuery = groq`*[_type=="pricingTier"]|order(order asc){name,priceFrom,features,note}`
export const faqsQuery = groq`*[_type=="faq"]|order(order asc){question,answer}`