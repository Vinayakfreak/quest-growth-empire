import { Layout, SectionTitle, CTA } from '../components/Site';
export default function Portfolio() {
  return (
    <Layout>
      <section className="pageIntro">
        <span className="eyebrow">SELECTED WORK</span>
        <h1>Work should speak for itself.</h1>
        <p>
          Explore production, creative, digital and technology capabilities.
          This portfolio will be populated with approved client work and
          original project material as each case study is cleared for
          publication.
        </p>
      </section>
      <section className="section">
        <div className="portfolioGrid">
          <div
            className="portfolioItem"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80)',
            }}
          >
            <div>
              <h3>Wedding & Celebration Films</h3>
              <p>Production capability showcase · illustrative image</p>
            </div>
          </div>
          <div
            className="portfolioItem"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80)',
            }}
          >
            <div>
              <h3>Brand & Visual Identity</h3>
              <p>Creative capability showcase · illustrative image</p>
            </div>
          </div>
          <div
            className="portfolioItem"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80)',
            }}
          >
            <div>
              <h3>Events & Experiences</h3>
              <p>Production capability showcase · illustrative image</p>
            </div>
          </div>
          <div
            className="portfolioItem"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80)',
            }}
          >
            <div>
              <h3>Digital & Technology</h3>
              <p>Digital capability showcase · illustrative image</p>
            </div>
          </div>
        </div>
        <p className="muted">
          These are illustrative category visuals, not claims of completed
          client projects or measured outcomes.
        </p>
      </section>
      <CTA />
    </Layout>
  );
}
