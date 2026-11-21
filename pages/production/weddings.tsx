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
        kicker="WEDDING PHOTOGRAPHY & FILMS"
        title="Your story, told with feeling."
        copy="Wedding photography, cinematic films and pre-wedding shoots planned around your functions, venue, people and story."
        image={img('photo-1519741497674-611481863552')}
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
              title: 'Wedding Photography',
              copy: 'Candid, traditional and editorial wedding coverage.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Cinematic Wedding Films',
              copy: 'Story-led films, teasers, trailers and highlight edits.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Pre-Wedding & Engagement',
              copy: 'Couple portraits, concepts and location-based shoots.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
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
              01 — Understand your dates and functions
            </div>
            <div className="listLine">
              02 — Plan photography and film coverage
            </div>
            <div className="listLine">
              03 — Confirm team, deliverables and album options
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="WEDDING PHOTOGRAPHY & FILMS" />
      </section>
      <CTA />
    </Layout>
  );
}
