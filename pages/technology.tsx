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
        kicker="DIGITAL & AI TECHNOLOGY"
        title="Technology that removes friction."
        copy="Websites, e-commerce, business applications, CRM, AI agents and automation designed around practical workflows."
        image={img('photo-1518770660439-4636190af475')}
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
              title: 'Websites & E-commerce',
              copy: 'Business websites, landing pages and Shopify stores.',
              href: '/contact',
            },
            {
              title: 'CRM & Business Systems',
              copy: 'Lead pipelines, client portals, dashboards and workflows.',
              href: '/contact',
            },
            {
              title: 'AI Agents & Automation',
              copy: 'Chat assistants, calling workflows and WhatsApp automation.',
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
              01 — Map the process and integrations
            </div>
            <div className="listLine">
              02 — Define access, safeguards and scope
            </div>
            <div className="listLine">03 — Build, test and hand over</div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="DIGITAL & AI TECHNOLOGY" />
      </section>
      <CTA />
    </Layout>
  );
}
