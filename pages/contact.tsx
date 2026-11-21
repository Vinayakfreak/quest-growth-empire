import {
  Layout,
  ImageHero,
  SectionTitle,
  WhatsAppForm,
  wa,
} from '../components/Site';
export default function Contact() {
  return (
    <Layout>
      <ImageHero
        kicker="START A PROJECT"
        title="Tell us what you have in mind."
        copy="Share a little about the project. Your enquiry will open in WhatsApp so you can review and send it directly to our team."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="contentGrid">
          <div>
            <SectionTitle
              eyebrow="PROJECT ENQUIRY"
              title="Let's start with a conversation."
              copy="Select the service on the relevant department page or describe your requirement below. We will coordinate the next step."
            />
            <div className="listLine">WhatsApp / Phone — +91 91184 74846</div>
            <div className="listLine">
              Launch region — Lucknow & Uttar Pradesh
            </div>
            <a
              className="button outline"
              href={wa(
                'Hello Quest Growth Empire. I would like to speak to your team.'
              )}
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp ↗
            </a>
          </div>
          <div>
            <WhatsAppForm service="General project enquiry" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
