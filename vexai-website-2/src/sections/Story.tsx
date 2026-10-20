import SplitChars from '../components/SplitChars'
import { useLang } from '../i18n'

export function Founder() {
  const { t } = useLang()
  return (
    <section id="over-ons">
      <div className="wrap story">
        <div className="copy">
          <SplitChars as="h2" className="h2" text={t.founder.h2} />
          <p className="rv">{t.founder.p1}</p>
          <p className="rv" style={{ ['--rvd' as string]: '80ms' }}>
            {t.founder.p2}
          </p>
          <p className="rv" style={{ ['--rvd' as string]: '160ms' }}>
            {t.founder.p3}
          </p>
        </div>
        <figure className="rv" style={{ ['--rvd' as string]: '120ms' }}>
          <div className="frame">
            <img src="/img/founder.jpg" alt={t.founder.alt} loading="lazy" />
          </div>
          <figcaption>{t.founder.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export function Pillars() {
  const { t } = useLang()
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SplitChars as="h2" className="h2" text={t.pillars.h2} />
        <p className="lead-sub rv">{t.pillars.sub}</p>
        <div className="rows">
          {t.pillars.items.map((p, i) => (
            <div className="row rv" style={{ ['--rvd' as string]: `${i * 70}ms` }} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Objections() {
  const { t } = useLang()
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap objections">
        <SplitChars as="h2" className="h2" text={t.objections.h2} />
        <div className="list">
          {t.objections.items.map((o, i) => (
            <div className="objection rv" style={{ ['--rvd' as string]: `${i * 80}ms` }} key={o.q}>
              <h3>{o.q}</h3>
              <p>{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
