import { Layout, ImageHero, SectionTitle, CTA } from '../components/Site';
export default function About() {
  return (
    <Layout>
      <ImageHero
        kicker="ABOUT QUEST GROWTH EMPIRE"
        title="People, craft and technology moving in one direction."
        copy="Quest Growth Empire is a multidisciplinary business growth, creative production and technology company. We bring specialist capabilities together around real business and creative requirements."
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="split">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2 className="sectionTitle">
              A connected team, not disconnected services.
            </h2>
            <p>
              We begin by understanding the brief, then assemble the right
              combination of strategy, creative, production and technology.
              Central coordination keeps communication, scope and quality
              aligned.
            </p>
          </div>
          <div>
            <div className="listLine">
              01 — Understand the business or creative challenge
            </div>
            <div className="listLine">
              02 — Define scope, timeline and deliverables
            </div>
            <div className="listLine">03 — Match the right specialists</div>
            <div className="listLine">04 — Execute, review and deliver</div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="OUR PRINCIPLES"
          title="Brand. Build. Automate. Grow."
          copy="We value clear communication, original work, responsible technology, reliable delivery and honest expectations. Our regional network grows through verified collaborators and project-by-project capability."
        />
        <div className="note">
          Our launch focus is Lucknow and Uttar Pradesh. We distinguish our
          central operations from local partners and do not represent service
          areas as physical branch offices.
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
