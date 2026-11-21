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
        kicker="EVENTS & EXPERIENCES"
        title="Make your event impossible to forget."
        copy="Professional event photography and film coverage for corporate gatherings, launches, concerts, exhibitions and private celebrations."
        image={img('photo-1511795409834-ef04bbd61622')}
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
              title: 'Corporate Events',
              copy: 'Conferences, seminars, award ceremonies and company gatherings.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Concerts & Live Shows',
              copy: 'Stage, audience, backstage and multicamera coverage.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'Launches & Exhibitions',
              copy: 'Product launches, expos, stalls and brand activations.',
              href: '/contact',
              image:
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
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
            <div className="listLine">01 — Brief and event schedule</div>
            <div className="listLine">02 — Crew and equipment planning</div>
            <div className="listLine">03 — Coverage, editing and delivery</div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="PROJECT ENQUIRY"
          title="Let's discuss your requirement."
        />
        <WhatsAppForm service="EVENTS & EXPERIENCES" />
      </section>
      <CTA />
    </Layout>
  );
}
