import SplitChars from '../components/SplitChars'
import { useSwell } from '../hooks/useSwell'
import { useLang } from '../i18n'

export function Offers() {
  const swell = useSwell<HTMLAnchorElement>()
  const { t } = useLang()
  return (
    <section id="aanbod" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SplitChars as="h2" className="h2" text={t.offers.h2} />
        <p className="lead-sub rv">{t.offers.sub}</p>

        <div className="offers">
          <a className="card big rv" href="#contact" onMouseMove={swell}>
            <span className="swell" aria-hidden="true" />
            <div>
              <h3>{t.offers.big.h3}</h3>
              <p>{t.offers.big.body}</p>
              <ul>
                {t.offers.big.li.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </a>

          <div className="side">
            <a className="card rv" style={{ ['--rvd' as string]: '90ms' }} href="#contact" onMouseMove={swell}>
              <span className="swell" aria-hidden="true" />
              <h3>{t.offers.kick.h3}</h3>
              <span className="tag">{t.offers.kick.tag}</span>
              <p>{t.offers.kick.body}</p>
            </a>
            <a className="card rv" style={{ ['--rvd' as string]: '180ms' }} href="#contact" onMouseMove={swell}>
              <span className="swell" aria-hidden="true" />
              <h3>{t.offers.team.h3}</h3>
              <span className="tag">{t.offers.team.tag}</span>
              <p>{t.offers.team.body}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
