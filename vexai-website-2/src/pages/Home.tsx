import { useEffect, useState } from 'react'
import Nav, { Hero } from '../sections/Nav'
import { StatementOne, Problems } from '../sections/Intro'
import { Founder, Pillars, Objections } from '../sections/Story'
import { Offers } from '../sections/Offers'
import Contact from '../sections/Contact'
import Faq from '../sections/Faq'
import { FinalCta, Footer } from '../sections/Footer'
import { StickyPill, CookieBanner } from '../sections/Chrome'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  const [cookies, setCookies] = useState(false)
  useReveal()

  useEffect(() => {
    // hero entrance: fade the scene in, then stagger the copy
    const t = window.setTimeout(() => document.body.classList.add('go'), 120)
    const c = window.setTimeout(() => setCookies(true), 1600)
    // arriving from a legal page with a section hash (#contact etc.): scroll there
    const h = window.location.hash
    if (h && !h.startsWith('#/') && h.length > 1) {
      const el = document.getElementById(h.slice(1))
      if (el) window.setTimeout(() => el.scrollIntoView({ behavior: 'instant' as ScrollBehavior }), 60)
    }
    return () => {
      window.clearTimeout(t)
      window.clearTimeout(c)
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatementOne />
        <Problems />
        <Founder />
        <Pillars />
        <Objections />
        <Offers />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer onCookies={() => setCookies(true)} />
      <StickyPill />
      <CookieBanner visible={cookies} onClose={() => setCookies(false)} />
    </>
  )
}
