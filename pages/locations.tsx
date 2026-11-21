import { Layout, ImageHero, SectionTitle, CTA } from '../components/Site';
const cities = [
  ['Lucknow', 'Primary coordination hub'],
  ['Raebareli', 'Priority service area'],
  ['Kanpur', 'Service area by project'],
  ['Prayagraj', 'Service area by project'],
  ['Noida', 'NCR service area by project'],
  ['Varanasi', 'Service area by project'],
  ['Agra', 'Service area by project'],
  ['Ghaziabad', 'Service area by project'],
  ['Gorakhpur', 'Availability confirmed per brief'],
  ['Jhansi', 'Availability confirmed per brief'],
];
export default function Locations() {
  return (
    <Layout>
      <ImageHero
        kicker="QUEST REGIONAL NETWORK"
        title="One coordinated team. Local project delivery."
        copy="Our launch focus is Lucknow and Uttar Pradesh. We coordinate projects centrally and work with suitable local professionals and production partners when availability and scope are confirmed."
        image="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <SectionTitle
          eyebrow="UTTAR PRADESH"
          title="Where we are building our network."
          copy="Choose your city when enquiring. We will confirm the service, local crew availability, travel and delivery plan before quoting."
        />
        <div className="cityGrid">
          {cities.map(c => (
            <div className="city" key={c[0]}>
              <strong>{c[0]}</strong>
              <span>{c[1]}</span>
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: 25 }}>
          These are service-area targets, not a claim of physical branch
          offices. Local delivery depends on confirmed partners, crew
          availability and project scope. Lucknow is the central coordination
          hub for the launch phase.
        </div>
      </section>
      <CTA title="Check availability in your city." />
    </Layout>
  );
}
