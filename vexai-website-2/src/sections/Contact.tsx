import { useEffect, useRef } from 'react'
import SplitChars from '../components/SplitChars'
import { initCal, calInline, isEn } from '../lib/cal'
import { useLang } from '../i18n'

export default function Contact() {
  const mounted = useRef(false)
  const { t } = useLang()

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    initCal()
    calInline()
  }, [])

  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <SplitChars as="h2" className="h2" text={t.contact.h2} />
        <p className="lead-sub rv" style={{ margin: '18px auto 0', maxWidth: '56ch' }}>
          {t.contact.sub}
        </p>

        <div className="cal-wrap rv">
          <div
            id={isEn() ? 'my-cal-inline-discovery-call' : 'my-cal-inline-30min'}
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          />
        </div>

        <p className="form-note rv">
          {t.contact.note}{' '}
          <a href="https://wa.me/31613264124" target="_blank" rel="noreferrer">WhatsApp</a>{' '}
          <a href="mailto:renee@vexai.nl">renee@vexai.nl</a>
        </p>
      </div>
    </section>
  )
}
