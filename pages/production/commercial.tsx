import {
  Layout,
  ImageHero,
  SectionTitle,
  ServiceCards,
  CTA,
  WhatsAppForm,
} from '../../components/Site';
const img = (id: string) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=1100&q=85';
export default function Page() {
  return (
    <Layout>
      <ImageHero
        kicker="COMMERCIAL PRODUCTION"
        title="Commercial images with a clear purpose."
        copy="Product, food, fashion, beauty, real estate and corporate photography and videography for brands that need strong visual communication."
        image={img('photo-1492619375914-88005aa9e8fb')}
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
              title: 'Product & E-commerce',
              copy: 'Clean product images, catalogues and campaign visuals.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Food & Hospitality',
              copy: 'Menu, restaurant, food product and hospitality shoots.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Fashion & Beauty',
              copy: 'Apparel, cosmetics, jewellery and editorial campaigns.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
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
            <div className="listLine">01 — Creative brief and shot list</div>
            <div className="listLine">
              02 — Production plan and shoot execution
            </div>
            <div className="listLine">
              03 — Editing, usage and asset handover
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="COMMERCIAL PRODUCTION" />
      </section>
      <CTA />
    </Layout>
  );
}
