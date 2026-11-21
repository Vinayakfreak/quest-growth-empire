import Link from 'next/link';
import {
  Layout,
  SectionTitle,
  ServiceCards,
  CTA,
  wa,
} from '../components/Site';
const img = (id: string) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=1100&q=85';
export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="heroInner">
          <span className="eyebrow">
            STRATEGY · CREATIVE · PRODUCTION · TECHNOLOGY
          </span>
          <h1>
            We build brands.
            <br />
            <em>Create experiences.</em>
            <br />
            Engineer growth.
          </h1>
          <p>
            Quest Growth Empire brings business strategy, professional
            production, creative design and intelligent technology together to
            help ambitious businesses move forward.
          </p>
          <div className="heroActions">
            <Link className="button gold" href="/contact">
              Start a project ↗
            </Link>
            <Link className="button outline" href="/portfolio">
              Explore our work
            </Link>
          </div>
          <div className="statRow">
            <div className="stat">
              <b>01</b>
              <span>One coordinated team</span>
            </div>
            <div className="stat">
              <b>05</b>
              <span>Specialist departments</span>
            </div>
            <div className="stat">
              <b>UP</b>
              <span>Launch service region</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="WHAT WE BRING TOGETHER"
          title="More than an agency. A connected growth partner."
          copy="From the first impression to the systems behind the business, we bring the right specialists together around the outcome you need."
        />
        <div className="pillars">
          {[
            ['01', 'Strategy', 'Direction, positioning and business growth.'],
            ['02', 'Production', 'Events, weddings, films and photography.'],
            ['03', 'Creative', 'Brand identity, design and campaigns.'],
            ['04', 'Growth', 'Marketing, advertising and visibility.'],
            ['05', 'Technology', 'Websites, CRM, AI and automation.'],
          ].map(x => (
            <div className="pillar" key={x[1]}>
              <b>{x[0]}</b>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="SPECIALIST DEPARTMENTS"
          title="Find the team for your next project."
        />
        <ServiceCards
          items={[
            {
              title: 'Events & Experiences',
              copy: 'Professional coverage for corporate, cultural and private events.',
              href: '/production/events',
              image: img('photo-1492684223066-81342ee5ff30'),
            },
            {
              title: 'Weddings & Films',
              copy: 'Thoughtful wedding photography, films and pre-wedding shoots.',
              href: '/production/weddings',
              image: img('photo-1519741497674-611481863552'),
            },
            {
              title: 'Models & Talent',
              copy: 'Male and female models, artists and talent coordination.',
              href: '/production/models-and-talent',
              image: img('photo-1534528741775-53994a69daeb'),
            },
            {
              title: 'Brand & Creative',
              copy: 'Distinctive identity systems and creative communication.',
              href: '/creative',
              image: img('photo-1558655146-d09347e92766'),
            },
            {
              title: 'Digital Growth',
              copy: 'Marketing, lead generation, SEO and content systems.',
              href: '/growth',
              image: img('photo-1460925895917-afdab827c52f'),
            },
            {
              title: 'AI & Technology',
              copy: 'Websites, business software and practical automation.',
              href: '/technology',
              image: img('photo-1518770660439-4636190af475'),
            },
          ]}
        />
      </section>
      <section className="section">
        <div className="split">
          <div
            className="photoPanel"
            style={{
              backgroundImage:
                'url(' + img('photo-1497366754035-f200968a6e72') + ')',
            }}
          />
          <div className="copyPanel">
            <span className="eyebrow">ONE POINT OF CONTACT</span>
            <h2>
              Local execution.
              <br />
              Central coordination.
            </h2>
            <p>
              Our network model connects clients with suitable local production
              professionals and specialists, while project coordination and
              quality checks remain centralized.
            </p>
            <div className="listLine">01 — Understand the brief</div>
            <div className="listLine">02 — Assemble the right people</div>
            <div className="listLine">03 — Coordinate, review and deliver</div>
            <Link className="button outline" href="/locations">
              Explore our UP network ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="A CLEAR START"
          title="Tell us what you want to make happen."
          copy="Share the requirement, city and timeline. We will take the conversation forward directly on WhatsApp."
        />
        <div className="heroActions">
          <Link className="button gold" href="/contact">
            Discuss a project ↗
          </Link>
          <a
            className="button outline"
            href={wa(
              'Hello Quest Growth Empire. Please help me choose the right service.'
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp +91 91184 74846
          </a>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
