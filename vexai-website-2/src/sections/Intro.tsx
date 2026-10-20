import SplitChars from '../components/SplitChars'
import { useLang } from '../i18n'

export function StatementOne() {
  const { t } = useLang()
  return (
    <section className="statement">
      <div className="wrap">
        <SplitChars as="h2" className="big" text={t.statement.big} />
        <p className="sub rv">
          {t.statement.subPre}
          <strong>{t.statement.subStrong}</strong>
        </p>
      </div>
    </section>
  )
}

export function Problems() {
  const { t } = useLang()
  return (
    <section id="insights" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SplitChars as="h2" className="big" text={t.problems.h2} />
        <p className="lead-sub rv" style={{ maxWidth: '62ch' }}>
          {t.problems.sub}
        </p>
        <div className="nums">
          {t.problems.items.map((p, i) => (
            <article className="num rv" style={{ ['--rvd' as string]: `${i * 90}ms` }} key={p.n}>
              <span className="n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
