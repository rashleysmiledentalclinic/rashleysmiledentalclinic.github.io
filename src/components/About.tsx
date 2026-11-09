import { CLINIC } from '../data/clinic'
import { CalendarIcon, CheckIcon, HeartIcon, MailIcon, PhoneIcon, PinIcon, StarIcon } from './Icons'
import { Reveal } from './Reveal'

/** DEMO: placeholder milestones for presentation. */
const MILESTONES = [
  {
    year: '2020',
    title: 'Opening in a difficult year',
    text: 'The clinic opens in June 2020 with strict sterilisation protocols and longer, calmer appointment slots.',
  },
  {
    year: '2022',
    title: 'Digital X-rays arrive',
    text: 'Low-dose digital imaging replaces film, making diagnosis faster and safer for every patient.',
  },
  {
    year: '2024',
    title: 'Family Saturdays',
    text: 'Saturday hours are set aside for families, with a gentler first-visit routine for children.',
  },
] as const

const VALUES = [
  {
    title: 'Clarity before treatment',
    text: 'You see the price range and the plan before you agree to anything.',
  },
  {
    title: 'Gentle by default',
    text: 'Topical numbing, a steady pace and a running explanation of what we are doing.',
  },
  {
    title: 'Prevention over repair',
    text: 'Cleanings, sealants and fluoride come first; fillings and crowns only when needed.',
  },
] as const

function getInitials(fullName: string): string {
  return fullName
    .split(/\s+/)
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export function About() {
  const yearsOpen = new Date().getFullYear() - CLINIC.establishedYear

  return (
    <section id="about" className="section section--tint" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <div>
            <Reveal>
              <div className="section__head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">About the clinic</span>
                <h2 id="about-title" className="h2">
                  Why we <span className="italic-accent">started</span>
                </h2>
                <p className="story">{CLINIC.story}</p>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <blockquote className="quote">
                &ldquo;{CLINIC.motto}&rdquo;
                <small>Dr. {CLINIC.doctor.fullName}, founder</small>
              </blockquote>
            </Reveal>

            <Reveal delay={100}>
              <ol className="timeline" aria-label="Clinic milestones">
                {MILESTONES.map((m) => (
                  <li key={m.year}>
                    <div className="timeline__year">{m.year}</div>
                    <h3 className="timeline__title">{m.title}</h3>
                    <p className="timeline__text">{m.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={140}>
              <ul className="values" aria-label="What we stand for">
                {VALUES.map((v) => (
                  <li key={v.title}>
                    <span className="values__check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <div>
                      <strong>{v.title}</strong>
                      <span>{v.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <article className="doctor" aria-label={`About Dr. ${CLINIC.doctor.fullName}`}>
                <div className="doctor__top">
                  <div className="doctor__portrait" aria-hidden="true">
                    <span className="doctor__initials">{getInitials(CLINIC.doctor.fullName)}</span>
                  </div>
                  <div className="doctor__ident">
                    <div className="doctor__kicker">Your dentist</div>
                    <h3 className="doctor__name">
                      Dr. {CLINIC.doctor.fullName}
                      <small>{CLINIC.doctor.title}</small>
                    </h3>
                    <p className="doctor__role">{CLINIC.doctor.role}</p>
                  </div>
                </div>
                <p className="doctor__bio">{CLINIC.doctor.bio}</p>

                <div className="doctor__contact">
                  <a className="contact-row" href={CLINIC.contact.phoneHref}>
                    <span className="contact-row__icon">
                      <PhoneIcon />
                    </span>
                    <span>
                      <span className="contact-row__label">Phone</span>
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
                      {CLINIC.name}, {CLINIC.address}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>

            <div className="facts">
              <Reveal delay={60}>
                <div className="fact">
                  <span className="fact__icon">
                    <CalendarIcon />
                  </span>
                  <div className="fact__label">Established</div>
                  <div className="fact__value">
                    {CLINIC.establishedMonth} {CLINIC.establishedYear}
                  </div>
                  <p className="fact__note">{yearsOpen} years of confident smiles</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="fact">
                  <span className="fact__icon">
                    <PinIcon />
                  </span>
                  <div className="fact__label">Location</div>
                  <div className="fact__value">{CLINIC.address}</div>
                  <p className="fact__note">Easy to reach, with parking nearby</p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="fact">
                  <span className="fact__icon">
                    <HeartIcon />
                  </span>
                  <div className="fact__label">Our promise</div>
                  <div className="fact__value">Gentle &amp; clear</div>
                  <p className="fact__note">A price range before any treatment begins</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="fact">
                  <span className="fact__icon">
                    <StarIcon />
                  </span>
                  <div className="fact__label">Patient rating</div>
                  <div className="fact__value">4.9 / 5</div>
                  <p className="fact__note">Based on patient feedback (demo figure)</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
