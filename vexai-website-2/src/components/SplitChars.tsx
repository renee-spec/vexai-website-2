import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Splits `text` into per-character spans and scrubs their
 * opacity in as the block travels through the viewport:
 * the signature "text materialises while scrolling" effect.
 */
export default function SplitChars({
  text,
  className,
  as: Tag = 'h2',
}: {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const chars = el.querySelectorAll('.char')
    const tween = gsap.fromTo(
      chars,
      { opacity: 0.1 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 34%',
          scrub: 0.4,
        },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [text])

  const words = text.split(' ')
  let key = 0
  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true">
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((c) => (
              <span className="char" key={key++}>
                {c}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? <span className="char">{' '}</span> : null}
        </span>
      ))}
    </Tag>
  )
}
