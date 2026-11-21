import {
  Layout,
  ImageHero,
  SectionTitle,
  ServiceCards,
  CTA,
  WhatsAppForm,
} from '../components/Site';
const img = (id: string) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=1100&q=85';
export default function Page() {
  return (
    <Layout>
      <ImageHero
        kicker="BUSINESS STRATEGY"
        title="Start with the right direction."
        copy="Business audits, brand positioning, market research, sales systems and digital transformation planning for businesses ready to improve."
        image={img('photo-1521737711867-e3b97375f902')}
      />
      <section className="section">
        <SectionTitle
          eyebrow="OUR CAPABILITIES"
          title="A considered approach. A capable team."
          copy="We scope each project around the brief, the people required and the final deliverables. Availability and final pricing are confirmed before booking."
        />
        <ServiceCards
          items={[
            {
              title: 'Business Audit',
              copy: 'Review positioning, customer journey and operating gaps.',
              href: '/contact',
            },
            {
              title: 'Growth Consulting',
              copy: 'Priorities, channel choices, pricing and execution roadmap.',
              href: '/contact',
            },
            {
              title: 'Digital Transformation',
              copy: 'Select systems and automation based on real needs.',
              href: '/contact',
            },
          ]}
        />
      </section>
      <section className="section">
        <div className="contentGrid">
          <div>
            <span className="eyebrow">HOW WE WORK</span>
            <h2 className="sectionTitle">
              From first conversation to final delivery.
            </h2>
            <p>
              One coordinated point of contact keeps the brief, schedule,
              collaborators and approvals aligned.
            </p>
          </div>
          <div>
            <div className="listLine">
              01 — Understand the current situation
            </div>
            <div className="listLine">
              02 — Prioritize opportunities and constraints
            </div>
            <div className="listLine">03 — Create an actionable roadmap</div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="BUSINESS STRATEGY" />
      </section>
      <CTA />
    </Layout>
  );
}
