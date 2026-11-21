import Link from 'next/link';
import { useState } from 'react';

export const phone = '919118474846';
export function wa(text: string) {
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
}

const nav = [
  {
    label: 'Production',
    href: '/production',
    children: [
      ['Events', '/production/events'],
      ['Weddings', '/production/weddings'],
      ['Models & Talent', '/production/models-and-talent'],
      ['Commercial Shoots', '/production/commercial'],
    ],
  },
  { label: 'Creative', href: '/creative' },
  { label: 'Growth', href: '/growth' },
  { label: 'Technology', href: '/technology' },
  { label: 'Strategy', href: '/strategy' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Locations', href: '/locations' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link href="/" className="brand">
        <img src="/quest-logo.svg" alt="Quest Growth Empire" />
        <span>QUEST GROWTH EMPIRE</span>
      </Link>
      <button
        className="menuToggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        <Link href="/">Home</Link>
        {nav.map(n => (
          <div className="navItem" key={n.label}>
            <Link href={n.href}>{n.label}</Link>
            {n.children && (
              <div className="dropdown">
                {n.children.map(c => (
                  <Link key={c[1]} href={c[1]}>
                    {c[0]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/about">About</Link>
        <Link href="/contact" className="navCta">
          Start a project ↗
        </Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div>
          <div className="footerBrand">
            QUEST <span>GROWTH EMPIRE</span>
          </div>
          <p>Turning Local Businesses into Powerful Brands.</p>
          <p className="muted">Brand. Build. Automate. Grow.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/production">Production House</Link>
          <Link href="/creative">Brand & Creative</Link>
          <Link href="/growth">Digital Growth</Link>
          <Link href="/technology">Technology</Link>
        </div>
        <div>
          <b>Production</b>
          <Link href="/production/events">Events</Link>
          <Link href="/production/weddings">Wedding Shoots</Link>
          <Link href="/production/models-and-talent">Models & Talent</Link>
          <Link href="/production/commercial">Commercial Shoots</Link>
        </div>
        <div>
          <b>Contact</b>
          <a href="tel:+919118474846">+91 91184 74846</a>
          <a
            href={wa(
              'Hello Quest Growth Empire. I would like to discuss a project.'
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us ↗
          </a>
          <Link href="/locations">Uttar Pradesh network</Link>
        </div>
      </div>
      <div className="footerBottom">
        <span>
          © {new Date().getFullYear()} Quest Growth Empire. All rights reserved.
        </span>
        <span>LEARN • BUILD • GROW • EARN</span>
      </div>
    </footer>
  );
}
export function Layout({
  children,
  eyebrow = 'QUEST GROWTH EMPIRE',
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        className="whatsappFloat"
        href={wa(
          'Hello Quest Growth Empire. I would like to enquire about your services.'
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="sectionTitle">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
export function ImageHero({
  image,
  kicker,
  title,
  copy,
  action = 'Discuss your project',
}: {
  image: string;
  kicker: string;
  title: string;
  copy: string;
  action?: string;
}) {
  return (
    <section
      className="imageHero"
      style={{
        backgroundImage:
          'linear-gradient(90deg,rgba(5,5,5,.9),rgba(5,5,5,.35)),url(' +
          image +
          ')',
      }}
    >
      <div className="imageHeroInner">
        <span className="eyebrow">{kicker}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        <a
          className="button gold"
          href={wa(
            'Hello Quest Growth Empire. I want to enquire about: ' +
              kicker +
              '. ' +
              copy
          )}
          target="_blank"
          rel="noreferrer"
        >
          {action} ↗
        </a>
      </div>
    </section>  );
}
export function WhatsAppForm({
  service = 'General enquiry',
}: {
  service?: string;
}) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('Lucknow');
  const [details, setDetails] = useState('');
  const [budget, setBudget] = useState('');
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      'Hello Quest Growth Empire!\nService: ' +
      service +
      '\nName: ' +
      name +
      '\nCity: ' +
      city +
      '\nBudget: ' +
      (budget || 'Not specified') +
      '\nProject details: ' +
      details;
    window.open(wa(msg), '_blank', 'noopener,noreferrer');
  }
  return (
    <form className="leadForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          Your name
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Full name"
          />
        </label>
        <label>
          City
          <select value={city} onChange={e => setCity(e.target.value)}>
            {[
              'Lucknow',
              'Raebareli',
              'Kanpur',
              'Prayagraj',
              'Noida',
              'Varanasi',
              'Agra',
              'Other Uttar Pradesh city',
            ].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Approximate budget
          <select value={budget} onChange={e => setBudget(e.target.value)}>
            <option value="">Select (optional)</option>
            <option>Under ₹10,000</option>
            <option>₹10,000–₹25,000</option>
            <option>₹25,000–₹50,000</option>
            <option>₹50,000–₹1,00,000</option>
            <option>₹1,00,000+</option>
            <option>Need guidance</option>
          </select>
        </label>
        <label className="wide">
          Tell us what you need
          <textarea
            required
            rows={4}
            value={details}
            onChange={e => setDetails(e.target.value)}
            placeholder="Share your brief, dates, location and deliverables..."
          />
        </label>
      </div>
      <button className="button gold" type="submit">
        Submit enquiry on WhatsApp ↗
      </button>
      <small>
        Submitting opens WhatsApp with your enquiry pre-filled. You can review
        and send it there.
      </small>
    </form>
  );
}
export function ServiceCards({
  items,
}: {
  items: { title: string; copy: string; href?: string; image?: string }[];
}) {
  return (
    <div className="serviceGrid">
      {items.map((item, i) => (
        <Link
          className="serviceCard"
          href={item.href || '/contact'}
          key={item.title}
        >
          <div
            className="serviceCardImage"
            style={
              item.image ? { backgroundImage: 'url(' + item.image + ')' } : {}
            }
          >
            <span>0{i + 1}</span>
          </div>
          <div className="serviceCardText">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <span className="textLink">Explore service ↗</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function CTA({
  title = 'Have a project in mind?',
  copy = 'Tell us what you are building. We will help shape the right team, scope and next step.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="ctaBand">
      <div>
        <span className="eyebrow">LET’S MAKE IT HAPPEN</span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link className="button gold" href="/contact">
        Start a project ↗
      </Link>
    </section>
  );
}
