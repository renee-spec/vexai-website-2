import { useLang } from '../i18n'
import { privacy } from '../i18n/legal'
import { LegalArticles, LegalHeader } from '../components/Legal'
import { useSeo } from '../components/Seo'
import { Footer } from '../sections/Footer'

export default function Privacy() {
  const { lang } = useLang()
  const doc = privacy[lang]
  const isEn = lang === 'en'
  useSeo({
    lang,
    title: `${doc.title} | Vexai`,
    description: isEn
      ? 'How Vexai handles personal data on vexai.nl.'
      : 'Hoe Vexai omgaat met persoonsgegevens op vexai.nl.',
    canonical: isEn ? 'https://www.vexai.nl/en/privacy' : 'https://www.vexai.nl/privacy',
    alternates: {
      nl: 'https://www.vexai.nl/privacy',
      en: 'https://www.vexai.nl/en/privacy',
      xDefault: 'https://www.vexai.nl/privacy',
    },
  })

  return (
    <>
      <LegalHeader />
      <main className="legal">
        <div className="wrap legal-in">
          <p className="legal-kicker">VEXAI</p>
          <h1>{doc.title}</h1>
          <p className="legal-note">{doc.note}</p>
          <LegalArticles articles={doc.sections} />
        </div>
      </main>
      <Footer />
    </>
  )
}
