import { useMemo } from 'react'
import { BREAK_NOTE, CLINIC, WEEKLY_HOURS } from '../data/clinic'
import { useNow } from '../hooks/useNow'
import {
  formatHoursRange,
  formatMinutes,
  getOpenStatus,
  getZonedParts,
  minutesOfDay,
  MONTH_NAMES,
  WEEKDAY_NAMES,
  type Weekday,
} from '../lib/time'
import { scrollToSection } from '../lib/scroll'
import { ArrowRightIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'
import { LogoMark } from './Logo'
import { Reveal } from './Reveal'

const DAY_ORDER: Weekday[] = [1, 2, 3, 4, 5, 6, 0]

/** DEMO: presentation-only trust figures. */
const STATS = [
  { value: '5+', label: 'Years in Taguig' },
  { value: '4.9★', label: 'Average patient rating' },
  { value: '3,500+', label: 'Smiles cared for' },
] as const

export function Hero() {
  const now = useNow(15_000)
  const parts = useMemo(() => getZonedParts(now, CLINIC.timeZone), [now])
  const status = useMemo(() => getOpenStatus(parts, WEEKLY_HOURS), [parts])
  const clock = formatMinutes(minutesOfDay(parts))
  const dateLabel = `${WEEKDAY_NAMES[parts.weekday]}, ${MONTH_NAMES[parts.month - 1]} ${parts.day}`

  return (
    <>
      <section id="home" className="hero" aria-labelledby="home-title">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__rays" />
          <LogoMark className="hero__seal" large />
        </div>

        <div className="container hero__content">
          <Reveal>
            <div className={`status status--${status.state}`} role="status" aria-live="polite">
              <span className="status__dot" aria-hidden="true" />
              <span>{status.headline}</span>
              <span className="status__detail">· {status.detail}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 id="home-title" className="h1 hero__title">
              Casting smiles, <em>one tooth</em> at a time.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede">
              {CLINIC.name} is a general dentistry practice in {CLINIC.address}. Dr.{' '}
              {CLINIC.doctor.fullName}, {CLINIC.doctor.title}, offers honest price ranges, gentle
              hands and appointments that never feel rushed.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero__actions">
              <button type="button" className="btn btn--gold" onClick={() => scrollToSection('appointment')}>
                Book an appointment
                <ArrowRightIcon className="btn__icon" />
              </button>
              <button type="button" className="btn btn--outline-light" onClick={() => scrollToSection('services')}>
                See services &amp; prices
              </button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="hero__trust">
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="stat__value" style={{ margin: 0 }}>
                    {s.value}
                  </dd>
                  <dd className="stat__label" style={{ margin: 0 }}>
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <div className="container avail-wrap">
        <Reveal>
          <article className="avail" aria-labelledby="avail-title">
            <div className="avail__col">
              <div className="avail__label">Clinic availability</div>
              <h2 id="avail-title" className="avail__status">
                {status.headline}
              </h2>
              <p className="avail__detail">{status.detail}</p>
              <div className="avail__clock" aria-live="off">
                <span className="avail__time">{clock}</span>
                <span className="avail__date">{dateLabel} · Manila time</span>
              </div>
            </div>

            <div className="avail__col">
              <div className="avail__label">Weekly hours</div>
              <ul className="hours">
                {DAY_ORDER.map((day) => {
                  const hours = WEEKLY_HOURS[day]
                  const isToday = day === parts.weekday
                  return (
                    <li key={day} className={`hours__row ${isToday ? 'hours__row--today' : ''}`}>
                      <span className="hours__day">
                        {WEEKDAY_NAMES[day]}
                        {isToday ? <span className="hours__badge">Today</span> : null}
                      </span>
                      <span className={`hours__time ${hours ? '' : 'hours__time--closed'}`}>
                        {formatHoursRange(hours)}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <p className="avail__note">{BREAK_NOTE}. Walk-ins welcome when a chair is free.</p>
            </div>

            <div className="avail__col">
              <div className="avail__label">Reach us</div>
              <div className="avail__contact">
                <a className="contact-row" href={CLINIC.contact.phoneHref}>
                  <span className="contact-row__icon">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="contact-row__label">Call or text</span>
                    {CLINIC.contact.phoneDisplay}
                  </span>
                </a>
                <a className="contact-row" href={`mailto:${CLINIC.contact.email}`}>
                  <span className="contact-row__icon">
                    <MailIcon />
                  </span>
                  <span>
                    <span className="contact-row__label">Email</span>
                    {CLINIC.contact.email}
                  </span>
                </a>
                <div className="contact-row">
                  <span className="contact-row__icon">
                    <PinIcon />
                  </span>
                  <span>
                    <span className="contact-row__label">Address</span>
                    {CLINIC.address}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </>
  )
}

const MARQUEE_ITEMS = [
  'Honest price ranges',
  'Gentle general dentistry',
  'Kids welcome',
  'Digital X-rays',
  'Same-week appointments',
  'Teeth whitening',
  'Taguig, Manila',
]

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
