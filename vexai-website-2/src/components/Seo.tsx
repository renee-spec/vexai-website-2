import { useEffect } from 'react'
import type { Lang } from '../i18n/translations'

interface SeoOptions {
  lang: Lang
  title: string
  description: string
  canonical: string
  alternates: { nl: string; en: string; xDefault: string }
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`
  let el = document.head.querySelector<HTMLLinkElement>(sel)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Sets html lang, title, meta/og description and canonical + hreflang links per route. */
export function useSeo({ lang, title, description, canonical, alternates }: SeoOptions) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'nl_NL')
    upsertLink('canonical', canonical)
    upsertLink('alternate', alternates.nl, 'nl')
    upsertLink('alternate', alternates.en, 'en')
    upsertLink('alternate', alternates.xDefault, 'x-default')
  })
}
