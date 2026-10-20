import { createContext, useContext, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from './translations'

interface LangCtx {
  lang: Lang
  t: Translations
}

const Ctx = createContext<LangCtx>({ lang: 'nl', t: translations.nl })

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <Ctx.Provider value={{ lang, t: translations[lang] }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}
