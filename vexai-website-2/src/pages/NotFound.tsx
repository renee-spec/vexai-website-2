import { Link, useLocation } from 'react-router'
import { LangProvider } from '../i18n'
import { LegalHeader } from '../components/Legal'
import { Footer } from '../sections/Footer'
import { useSeo } from '../components/Seo'

const copy = {
  nl: {
    code: '404',
    h: 'Deze pagina bestaat niet.',
    p: 'De link die je volgde is stuk of de pagina is verplaatst.',
    cta: 'Naar de homepage',
  },
  en: {
    code: '404',
    h: "This page doesn't exist.",
    p: 'The link you followed is broken or the page has been moved.',
    cta: 'Go to the homepage',
  },
}

function NotFoundInner({ lang }: { lang: 'nl' | 'en' }) {
  const c = copy[lang]
  useSeo({
    lang,
    title: `404 | Vexai`,
    description: c.h,
    canonical: lang === 'en' ? 'https://www.vexai.nl/en' : 'https://www.vexai.nl/',
    alternates: {
      nl: 'https://www.vexai.nl/',
      en: 'https://www.vexai.nl/en',
      xDefault: 'https://www.vexai.nl/',
    },
  })
  return (
    <>
      <LegalHeader />
      <main className="legal notfound">
        <div className="wrap legal-in">
          <p className="legal-kicker">{c.code}</p>
          <h1>{c.h}</h1>
          <p className="legal-note">{c.p}</p>
          <Link className="btn btn-accent notfound-btn" to={lang === 'en' ? '/en' : '/'}>
            {c.cta}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function NotFound() {
  const { pathname } = useLocation()
  const lang = pathname.startsWith('/en') ? 'en' : 'nl'
  return (
    <LangProvider lang={lang}>
      <NotFoundInner lang={lang} />
    </LangProvider>
  )
}
