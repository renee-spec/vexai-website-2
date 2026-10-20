import { useLang } from '../i18n'
import { terms } from '../i18n/legal'
import { LegalArticles, LegalHeader } from '../components/Legal'
import { useSeo } from '../components/Seo'
import { Footer } from '../sections/Footer'

export default function Terms() {
  const { lang } = useLang()
  const doc = terms[lang]
  const isEn = lang === 'en'
  useSeo({
    lang,
    title: `${doc.title} | Vexai`,
    description: isEn
      ? 'The general terms and conditions of Vexai, sole proprietorship of Renee de Ruijter in Capelle aan den IJssel.'
      : 'De algemene voorwaarden van Vexai, eenmanszaak van Renee de Ruijter in Capelle aan den IJssel.',
    canonical: isEn ? 'https://www.vexai.nl/en/terms' : 'https://www.vexai.nl/voorwaarden',
    alternates: {
      nl: 'https://www.vexai.nl/voorwaarden',
      en: 'https://www.vexai.nl/en/terms',
      xDefault: 'https://www.vexai.nl/voorwaarden',
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
          <p className="legal-updated">{doc.updated}</p>
          <LegalArticles articles={doc.articles} />
          <footer className="legal-sig">
            {doc.signature.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </footer>
        </div>
      </main>
      <Footer />
    </>
  )
}
