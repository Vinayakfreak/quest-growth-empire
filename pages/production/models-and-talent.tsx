import { Layout, ImageHero, SectionTitle, CTA } from '../../components/Site';
import ModelBookingForm from '../../components/ModelBookingForm';
export default function Models() {
  return (
    <Layout>
      <ImageHero
        kicker="MODELS & TALENT BOOKING"
        title="Find the right face for your next story."
        copy="Enquire about male and female models, commercial talent and creators for fashion, product, beauty, advertising and other shoots."
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <SectionTitle
          eyebrow="TALENT REQUIREMENTS"
          title="Tell us who you need and what you are shooting."
          copy="Share your shoot type, city, date and talent requirements. We will coordinate suitable profiles and availability through our network."
        />
        <div className="tagList">
          {[
            'Male models',
            'Female models',
            'Commercial talent',
            'Fashion',
            'Product',
            'Beauty',
            'Brand campaigns',
            'Music videos',
            'Portfolio shoots',
          ].map(x => (
            <span className="tag" key={x}>
              {x}
            </span>
          ))}
        </div>
        <div className="contentGrid">
          <div>
            <h3>How talent booking works</h3>
            <div className="listLine">01 — Share the brief and reference</div>
            <div className="listLine">
              02 — Confirm talent profile, availability and usage
            </div>
            <div className="listLine">
              03 — Agree rates, schedule and consent
            </div>
            <div className="listLine">04 — Coordinate the shoot</div>
            <p>
              Profiles, rates and availability are shared only after checking
              with the relevant talent. No model is booked until all parties
              confirm.
            </p>
          </div>
          <div>
            <ModelBookingForm />
          </div>
        </div>
      </section>
      <CTA title="Need a complete shoot team as well?" />
    </Layout>
  );
}
