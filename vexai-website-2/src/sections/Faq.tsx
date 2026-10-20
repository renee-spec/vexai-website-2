import { useEffect, useState } from 'react'
import SplitChars from '../components/SplitChars'
import { useLang } from '../i18n'

/**
 * The scroll-reveal (.rv) uses an IntersectionObserver that adds `.on`
 * directly to the DOM node. React re-renders wipe that class, which hid
 * opened answers. So we track revealed items in state and keep `rv on`
 * in the JSX for them, making the revealed state survive every render.
 */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const { t } = useLang()

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.faq-item'))
    const mark = (idx: number) =>
      setRevealed((prev) => (prev.has(idx) ? prev : new Set(prev).add(idx)))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = nodes.indexOf(e.target as HTMLElement)
            if (idx >= 0) mark(idx)
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [t])

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SplitChars as="h2" className="h2" text={t.faq.h2} />
        <div className="faq-list">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i
            const shown = revealed.has(i)
            return (
              <div
                className={`faq-item rv${shown ? ' on' : ''}${isOpen ? ' open' : ''}`}
                key={f.q}
                style={{ ['--rvd' as string]: `${i * 40}ms` }}
              >
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span className="plus" aria-hidden="true" />
                </button>
                <div className="faq-a" id={`faq-a-${i}`} role="region">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
