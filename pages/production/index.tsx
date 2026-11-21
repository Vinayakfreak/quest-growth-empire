import Link from 'next/link';
import {
  Layout,
  ImageHero,
  SectionTitle,
  ServiceCards,
  CTA,
} from '../../components/Site';
const img = (id: string) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=1200&q=85';
export default function Production() {
  return (
    <Layout>
      <ImageHero
        kicker="QUEST PRODUCTION HOUSE"
        title="Stories worth seeing. Moments worth keeping."
        copy="Professional photography, videography and production coordination for weddings, events, brands and commercial projects."
        image={img('photo-1492684223066-81342ee5ff30')}
      />
      <section className="section">
        <SectionTitle
          eyebrow="PRODUCTION DEPARTMENTS"
          title="Choose the production you need."
        />
        <ServiceCards
          items={[
            {
              title: 'Events & Experiences',
              copy: 'Corporate events, concerts, launches, exhibitions and celebrations.',
              href: '/production/events',
              image: img('photo-1511795409834-ef04bbd61622'),
            },
            {
              title: 'Weddings & Films',
              copy: 'Wedding photography, cinematic films and pre-wedding shoots.',
              href: '/production/weddings',
              image: img('photo-1519741497674-611481863552'),
            },
            {
              title: 'Models & Talent',
              copy: 'Male and female models, artists and casting coordination.',
              href: '/production/models-and-talent',
              image: img('photo-1534528741775-53994a69daeb'),
            },
            {
              title: 'Commercial Shoots',
              copy: 'Product, food, fashion, beauty and business campaigns.',
              href: '/production/commercial',
              image: img('photo-1492619375914-88005aa9e8fb'),
            },
          ]}
        />
      </section>
      <section className="section">
        <div className="note">
          Crew size, equipment, shoot duration, location, travel, usage rights,
          editing and final deliverables are confirmed in the project quotation.
          Drone work is subject to applicable permissions.
        </div>
      </section>
      <CTA title="Planning a shoot or event?" />
    </Layout>
  );
}
