import { PageHero, CTA, Icon, TextLink } from "@/components/ui";
import { industries } from "@/lib/content";
export const metadata = {
  title: "Industries",
  description:
    "Practical AI and software use cases for retail, SACCOs, schools, healthcare, hospitality, logistics, NGOs and enterprise.",
};
export default function Industries() {
  return (
    <>
      <PageHero
        label="Your world, understood"
        title="Built for the way your industry works."
      >
        <p>
          Different businesses face different challenges. We connect practical
          technology with the work, people and constraints in your sector.
        </p>
      </PageHero>
      <section className="container industry-grid">
        {industries.map((x, i) => (
          <article className="industry-card" key={x.name}>
            <div className="card-top">
              <Icon name={x.icon} size={29} />
              <span className="card-number">0{i + 1}</span>
            </div>
            <h2>{x.name}</h2>
            <p className="industry-pain">{x.pain}</p>
            <p>{x.solution}</p>
            <div className="tag-list">
              {x.examples.map((y) => (
                <span key={y}>{y}</span>
              ))}
            </div>
            <TextLink href={`/contact?interest=${encodeURIComponent(x.name)}`}>
              Explore your possibilities
            </TextLink>
          </article>
        ))}
      </section>
      <section className="small-banner container">
        <p>
          These are potential applications, not claims of completed deployments.
          Regulated decisions, clinical care and financial approvals stay with
          the responsible professionals.
        </p>
      </section>
      <CTA />
    </>
  );
}
