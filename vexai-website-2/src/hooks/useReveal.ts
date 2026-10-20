import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver that adds the `.on` class
 * to every `.rv` element when it enters the viewport.
 *
 * Failsafes guarantee no content ever stays hidden:
 *  - anything already in view at mount is revealed immediately
 *  - a scroll/resize re-check catches elements that enter view
 *    without the observer firing (e.g. after accordion layout shifts)
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv'))

    const reveal = (el: HTMLElement) => {
      if (!el.classList.contains('on')) el.classList.add('on')
    }

    // Immediately reveal anything already in the viewport at mount.
    const vh = window.innerHeight
    for (const el of els) {
      const r = el.getBoundingClientRect()
      if (r.top < vh * 0.92 && r.bottom > 0) reveal(el)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement)
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))

    // Re-check on scroll/resize so nothing can be missed (cheap, passive).
    let ticking = false
    const recheck = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const h = window.innerHeight
        for (const el of els) {
          if (el.classList.contains('on')) continue
          const r = el.getBoundingClientRect()
          if (r.top < h * 0.92 && r.bottom > 0) reveal(el)
        }
      })
    }
    window.addEventListener('scroll', recheck, { passive: true })
    window.addEventListener('resize', recheck)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', recheck)
      window.removeEventListener('resize', recheck)
    }
  }, [])
}
