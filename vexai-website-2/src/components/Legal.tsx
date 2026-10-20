import { Link } from 'react-router'
import { useLang } from '../i18n'
import type { LegalArticle, LegalBlock } from '../i18n/legal'
import { LangSwitch } from '../sections/Nav'

/** Renders **bold** markers inside legal copy. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p))}
    </>
  )
}

function Block({ block }: { block: LegalBlock }) {
  if (Array.isArray(block)) {
    return (
      <ul>
        {block.map((li, i) => (
          <li key={i}>
            <Rich text={li} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p>
      <Rich text={block} />
    </p>
  )
}

export function LegalHeader() {
  const { t, lang } = useLang()
  const home = lang === 'en' ? '/en' : '/'
  return (
    <header className="legal-nav">
      <Link className="nav-logo" to={home} aria-label="Vexai">
        <span className="nav-mark" aria-hidden="true" />
        VEXAI
      </Link>
      <div className="legal-nav-right">
        <LangSwitch />
        <Link className="legal-back" to={home}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          <span>{t.legal.back}</span>
        </Link>
      </div>
    </header>
  )
}

export function LegalArticles({ articles }: { articles: LegalArticle[] }) {
  return (
    <>
      {articles.map((a) => (
        <article key={a.h}>
          <h2>{a.h}</h2>
          {a.body.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </article>
      ))}
    </>
  )
}

