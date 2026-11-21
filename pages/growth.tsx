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
        kicker="DIGITAL GROWTH"
        title="Make your marketing work harder."
        copy="Social media, paid advertising, SEO, content and lead-generation systems built around business goals and measurable activity."
        image={img('photo-1460925895917-afdab827c52f')}
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
              title: 'Social Media Management',
              copy: 'Content planning, publishing, community and reporting.',
              href: '/contact',
            },
            {
              title: 'Meta & Google Ads',
              copy: 'Campaign setup, creative, tracking and optimization.',
              href: '/contact',
            },
            {
              title: 'SEO & Local Visibility',
              copy: 'Search optimization, local presence and Google Business Profile.',
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
            <div className="listLine">01 — Audit and growth priorities</div>
            <div className="listLine">02 — Campaign and content execution</div>
            <div className="listLine">03 — Reporting and optimization</div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="DIGITAL GROWTH" />
      </section>
      <CTA />
    </Layout>
  );
}
