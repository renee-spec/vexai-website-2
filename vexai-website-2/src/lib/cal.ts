/* Cal.com embed loader: queue-based snippet, loaded once per page. */

declare global {
  interface Window {
    Cal?: any
  }
}

let booted = false

export function isEn() {
  return window.location.pathname.startsWith('/en')
}

/* English site uses the discovery-call event; Dutch site keeps 30min. */
export function calNs() {
  return isEn() ? 'discovery-call' : '30min'
}

export function calLink() {
  return isEn() ? 'vexai-renee/discovery-call' : 'vexai-renee/30min'
}

export function initCal() {
  if (booted) return
  booted = true
  ;(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar)
    }
    const d = C.document
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments)
          }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ['initNamespace', namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
  })(window, 'https://app.cal.com/embed/embed.js', 'init')

  window.Cal('init', calNs(), { origin: 'https://app.cal.com' })
  window.Cal.config = window.Cal.config || {}
  window.Cal.config.forwardQueryParams = true
}

export function calLocale() {
  return isEn() ? 'en' : 'nl'
}

export function calInline() {
  window.Cal.ns[calNs()]('inline', {
    elementOrSelector: isEn() ? '#my-cal-inline-discovery-call' : '#my-cal-inline-30min',
    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', locale: calLocale() },
    calLink: calLink(),
  })
  calUi()
}

export function calUi() {
  window.Cal.ns[calNs()]('ui', {
    cssVarsPerTheme: { light: { 'cal-brand': '#ff4d00' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  })
}

export function calModal() {
  initCal()
  window.Cal.ns[calNs()]('modal', {
    calLink: calLink(),
    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', locale: calLocale() },
  })
}
