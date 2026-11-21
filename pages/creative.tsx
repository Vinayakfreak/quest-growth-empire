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
        kicker="BRAND & CREATIVE STUDIO"
        title="Build a brand people recognize."
        copy="Brand strategy, visual identity, graphic design and campaign creative that make your business clearer and more memorable."
        image={img('photo-1558655146-d09347e92766')}
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
              title: 'Brand Identity',
              copy: 'Logo systems, typography, colour and brand guidelines.',
              href: '/contact',
            },
            {
              title: 'Graphic & Advertising Design',
              copy: 'Campaign artwork, posters, social creatives and ads.',
              href: '/contact',
            },
            {
              title: 'Packaging & Print',
              copy: 'Packaging, labels, catalogues and company profiles.',
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
              01 — Discovery and creative direction
            </div>
            <div className="listLine">02 — Design concepts and refinement</div>
            <div className="listLine">03 — Final files and brand handover</div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="BRAND & CREATIVE STUDIO" />
      </section>
      <CTA />
    </Layout>
  );
}
