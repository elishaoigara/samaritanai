import { PageHero, Eyebrow, Button, CTA, Icon } from "@/components/ui";
export const metadata = {
  title: "About us",
  description:
    "Meet Samaritan AI: a founder-led AI and software business based in Nairobi, building practical solutions for East Africa.",
};
export default function About() {
  return (
    <>
      <PageHero
        label="Hello. We’re Samaritan AI."
        title="Technology should open doors."
      >
        <p>
          To more time. Better service. A stronger business. We’re building
          Samaritan AI to make those possibilities practical for East Africa.
        </p>
      </PageHero>
      <section className="container about-story">
        <div className="about-manifesto">
          <span>OUR BELIEF</span>
          <h2>
            The best technology
            <br />
            doesn’t just impress.
            <br />
            <em>It helps.</em>
          </h2>
          <div>
            Nairobi roots.
            <br />
            East African ambition.
          </div>
        </div>
        <div>
          <Eyebrow>Why we’re here</Eyebrow>
          <h2>
            Big possibilities.
            <br />
            Everyday problems.
          </h2>
          <p>
            A missed WhatsApp enquiry. A spreadsheet that takes hours to update.
            An invoice entered three times. These are the problems we care
            about.
          </p>
          <p>
            Samaritan AI is a founder-led AI and software business based in
            Nairobi, built around a simple idea: advanced technology should be
            useful, understandable and relevant to the businesses using it.
          </p>
          <p>
            Our focus is Kenya, with the ambition to serve the wider East
            African region. We combine AI assistants, business automation and
            software engineering with local context, familiar channels and clear
            delivery plans.
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>Our principles</Eyebrow>
            <h2>
              Practical by design.
              <br />
              Human at heart.
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            [
              "compass",
              "Start with the real problem",
              "A useful solution begins with listening. We define what success looks like before choosing the technology.",
            ],
            [
              "users",
              "Keep people in the picture",
              "Automation should support your team. We build in review, escalation and understandable controls.",
            ],
            [
              "shield",
              "Be clear about the limits",
              "AI can be wrong. We test, document constraints and agree how your information should be handled.",
            ],
            [
              "globe",
              "Build for local realities",
              "Mobile-friendly experiences, English and Swahili, and familiar payments are part of the starting point.",
            ],
          ].map(([icon, title, text]) => (
            <article key={title}>
              <Icon name={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container founder-section">
        <div className="founder-monogram" aria-hidden="true">
          EO<span>FOUNDER / BUILDER</span>
        </div>
        <div>
          <Eyebrow>Founder-led. Personally invested.</Eyebrow>
          <h2>Elisha Oigara</h2>
          <p className="founder-role">Founder · Software developer</p>
          <p>
            Elisha is building Samaritan AI from Nairobi, bringing hands-on
            software development and an interest in practical AI to the
            challenges businesses face every day.
          </p>
          <p>
            As an early-stage, founder-led business, we work with a focused
            delivery model: clear scopes, direct communication and specialist
            support when a project needs it.
          </p>
          <Button href="/contact" secondary>
            Start a conversation
          </Button>
        </div>
      </section>
      <CTA />
    </>
  );
}
