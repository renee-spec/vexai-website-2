import { Link, useLocation } from 'react-router'
import SplitChars from '../components/SplitChars'
import { useSwell } from '../hooks/useSwell'
import { useLang } from '../i18n'

export function FinalCta() {
  const swell = useSwell<HTMLAnchorElement>()
  const { t } = useLang()
  return (
    <section className="final" id="roadmap" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <SplitChars as="h2" text={t.final.text} className="" />
      <a className="btn btn-accent rv" href="#contact" onMouseMove={swell}>
        <span className="fill" aria-hidden="true" />
        {t.final.cta}
      </a>
    </section>
  )
}

export function Footer({ onCookies }: { onCookies?: () => void }) {
  const { t, lang } = useLang()
  const { pathname } = useLocation()
  const home = lang === 'en' ? '/en' : '/'
  const termsHref = lang === 'en' ? '/en/terms' : '/voorwaarden'
  const privacyHref = lang === 'en' ? '/en/privacy' : '/privacy'
  return (
    <footer>
      <div className="foot-row">
        <span>{t.footer.built}</span>
        <nav aria-label={t.footer.aria}>
          <a href="mailto:renee@vexai.nl">renee@vexai.nl</a>
          <a href="tel:+31613264124">+31 6 13264124</a>
          <a href="https://www.instagram.com/reneederuijterr/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/renee-de-ruijter-758788105/" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link to={termsHref}>{t.footer.terms}</Link>
          <Link
            to={`${home}#contact`}
            onClick={(e) => {
              if (pathname === home) {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t.footer.contact}
          </Link>
          <Link to={privacyHref}>{t.footer.privacy}</Link>
        </nav>
      </div>
      <div className="foot-sub">
        {onCookies ? <button onClick={onCookies}>{t.footer.cookies}</button> : null}
      </div>
    </footer>
  )
}
