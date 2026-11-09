import { CLINIC } from '../data/clinic'
import portraitUrl from '../assets/doctor-portrait.jpg'
import { CalendarIcon, CheckIcon, HeartIcon, MailIcon, PhoneIcon, PinIcon, StarIcon } from './Icons'
import { Reveal } from './Reveal'

/** DEMO: placeholder milestones for presentation. */
const MILESTONES = [
  {
    year: '2021',
    title: 'A single chair in Taguig',
    text: 'CazzASmile opens with one chair, one promise and a waiting list of nervous first-timers.',
  },
  {
    year: '2022',
    title: 'Digital X-rays and sterilisation suite',
    text: 'Low-dose imaging and a dedicated sterilisation area are added so care is safer and faster.',
  },
  {
    year: '2024',
    title: 'Kids and family hours',
    text: 'Saturday family slots launch, and the thousandth child receives a bravery sticker.',
  },
] as const

const VALUES = [
  {
    title: 'Prevention first',
    text: 'We would rather clean and seal today than drill tomorrow.',
  },
  {
    title: 'Price ranges, not surprises',
    text: 'Every service is listed with a range, and your quote is agreed before treatment starts.',
  },
  {
    title: 'Calm by design',
    text: 'Numbing gel, a gentle pace and plenty of explanation for anxious patients.',
  },
] as const

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
                  Why <span className="italic-accent">CazzASmile</span> was built.
                </h2>
                <p className="story">{CLINIC.story}</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
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

            <Reveal delay={120}>
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
                  <div className="doctor__portrait">
                    <img
                      className="doctor__photo"
                      src={portraitUrl}
                      width={640}
                      height={800}
                      alt={`Portrait of Dr. ${CLINIC.doctor.fullName}, ${CLINIC.doctor.title}`}
                      loading="lazy"
                      decoding="async"
                    />
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
                      <span className="contact-row__label">Clinic address</span>
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
                  <p className="fact__note">{yearsOpen} years serving Taguig families</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="fact">
                  <span className="fact__icon">
                    <PinIcon />
                  </span>
                  <div className="fact__label">Location</div>
                  <div className="fact__value">{CLINIC.address}</div>
                  <p className="fact__note">Ground floor, step-free access, parking nearby</p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="fact">
                  <span className="fact__icon">
                    <HeartIcon />
                  </span>
                  <div className="fact__label">Our promise</div>
                  <div className="fact__value">Gentle &amp; honest</div>
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
