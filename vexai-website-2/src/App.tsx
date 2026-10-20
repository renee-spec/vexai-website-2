import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import { LangProvider } from './i18n'
import { useSeo } from './components/Seo'
import type { Lang } from './i18n/translations'

const SITE = 'https://www.vexai.nl'

const homeSeo: Record<Lang, { title: string; description: string }> = {
  nl: {
    title: 'Vexai | AI-adviesbureau voor ondernemers en bedrijven in Rotterdam',
    description:
      'Vexai helpt ondernemers en bedrijven met AI, in hun eigen werk. Persoonlijk advies, een plan op maat en de bouw erachter.',
  },
  en: {
    title: 'Vexai | AI consultancy for entrepreneurs and businesses in Rotterdam',
    description:
      'Vexai helps entrepreneurs and businesses with AI, inside their own work. Personal advice, a tailored plan and the build behind it.',
  },
}

function HomePage({ lang }: { lang: Lang }) {
  const seo = homeSeo[lang]
  useSeo({
    lang,
    title: seo.title,
    description: seo.description,
    canonical: lang === 'en' ? `${SITE}/en` : `${SITE}/`,
    alternates: { nl: `${SITE}/`, en: `${SITE}/en`, xDefault: `${SITE}/` },
  })
  return (
    <LangProvider lang={lang}>
      <Home />
    </LangProvider>
  )
}

function TermsPage({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <Terms />
    </LangProvider>
  )
}

function PrivacyPage({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <Privacy />
    </LangProvider>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage lang="nl" />} />
        <Route path="/en" element={<HomePage lang="en" />} />
        <Route path="/voorwaarden" element={<TermsPage lang="nl" />} />
        <Route path="/privacy" element={<PrivacyPage lang="nl" />} />
        <Route path="/en/terms" element={<TermsPage lang="en" />} />
        <Route path="/en/privacy" element={<PrivacyPage lang="en" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
