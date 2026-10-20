import { useEffect, useRef, useState } from 'react'
import { initCal, calUi, calModal } from '../lib/cal'
import { useLang } from '../i18n'

export function StickyPill() {
  const [on, setOn] = useState(false)
  const calStarted = useRef(false)
  const { t } = useLang()

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > window.innerHeight * 0.55)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (calStarted.current) return
    calStarted.current = true
    initCal()
    calUi()
  }, [])

  return (
    <div className={`pillzone ${on ? 'on' : ''}`} role="complementary" aria-label={t.pill.aria}>
      <button type="button" onClick={calModal}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {t.pill.plan}
      </button>
      <a href="https://wa.me/31613264124" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        WhatsApp
      </a>
    </div>
  )
}

export function CookieBanner({
  visible,
  onClose,
}: {
  visible: boolean
  onClose: () => void
}) {
  const { t, lang } = useLang()
  const privacyHref = lang === 'en' ? '/en/privacy' : '/privacy'
  return (
    <div className={`consent ${visible ? 'on' : ''}`} role="dialog" aria-label={t.cookie.aria} aria-hidden={!visible}>
      {t.cookie.text}{' '}
      <a href={privacyHref}>{t.footer.privacy}</a>
      <div className="row">
        <button className="c-min" onClick={onClose}>{t.cookie.min}</button>
        <button className="c-all" onClick={onClose}>{t.cookie.all}</button>
      </div>
    </div>
  )
}
