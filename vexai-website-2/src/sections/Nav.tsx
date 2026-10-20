import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useSwell } from '../hooks/useSwell'
import { useLang } from '../i18n'

/** Same page in the other language: router links, real URLs, no JS text swapping. */
const COUNTERPART: Record<string, { nl: string; en: string }> = {
  '/': { nl: '/', en: '/en' },
  '/en': { nl: '/', en: '/en' },
  '/voorwaarden': { nl: '/voorwaarden', en: '/en/terms' },
  '/en/terms': { nl: '/voorwaarden', en: '/en/terms' },
  '/privacy': { nl: '/privacy', en: '/en/privacy' },
  '/en/privacy': { nl: '/privacy', en: '/en/privacy' },
}

export function LangSwitch() {
  const { lang, t } = useLang()
  const { pathname } = useLocation()
  const paths = COUNTERPART[pathname] ?? COUNTERPART['/']
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.langLabel}>
      <Link to={paths.nl} hrefLang="nl" aria-current={lang === 'nl' ? 'page' : undefined}>
        NL
      </Link>
      <Link to={paths.en} hrefLang="en" aria-current={lang === 'en' ? 'page' : undefined}>
        EN
      </Link>
    </div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  const close = () => setOpen(false)

  return (
    <>
      <header className="nav rv" style={{ ['--rvd' as string]: '500ms' }}>
        <a className="nav-logo" href="#top" aria-label={t.nav.top}>
          <span className="nav-mark" aria-hidden="true" />
          VEXAI
        </a>
        <nav className="nav-links" aria-label={t.nav.menu}>
          <a href="#aanbod">{t.nav.services}</a>
          <a href="#over-ons">{t.nav.about}</a>
          <a href="#insights">{t.nav.insights}</a>
        </nav>
        <div className="nav-right">
          <LangSwitch />
          <a className="nav-cta" href="#contact">
            {t.nav.cta}
          </a>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
        <a href="#aanbod" onClick={close}>{t.nav.services}</a>
        <a href="#over-ons" onClick={close}>{t.nav.about}</a>
        <a href="#insights" onClick={close}>{t.nav.insights}</a>
        <a href="#contact" onClick={close} style={{ color: 'var(--accent)' }}>
          {t.nav.cta}
        </a>
      </div>
    </>
  )
}

export function Hero() {
  const swell = useSwell<HTMLAnchorElement>()
  const { t } = useLang()
  return (
    <section className="hero" id="top" style={{ padding: 0 }}>
      <img className="bg" src="/img/atmos.jpg" alt="" fetchPriority="high" />
      <div className="hero-in">
        <h1>{t.hero.h1}</h1>
        <p className="lead">{t.hero.lead}</p>
        <a className="btn btn-light" href="#contact" onMouseMove={swell}>
          <span className="fill" aria-hidden="true" />
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}
