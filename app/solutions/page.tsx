import type { Metadata } from "next";
import {
  PageHero,
  CTA,
  Icon,
  TextLink,
  CheckList,
  Button,
} from "@/components/ui";
import { services } from "@/lib/content";
export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore AI assistants, automation, websites, custom software, data intelligence, training and ongoing support from Samaritan AI.",
};
export default function Solutions() {
  return (
    <>
      <PageHero
        label="Practical solutions"
        title="Less friction. More forward."
      >
        <p>
          One partner for the software, automation and intelligence your
          business needs. Start with the problem. We’ll find the right tools.
        </p>
      </PageHero>
      <section className="container solutions-grid">
        {services.map((s) => (
          <article className="detail-card" key={s.slug}>
            <div className="card-top">
              <span className="icon-box">
                <Icon name={s.icon} />
              </span>
              <span className="pill">{s.label}</span>
            </div>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
            <CheckList items={s.features} />
            <TextLink href={`/solutions/${s.slug}`}>
              Explore this solution
            </TextLink>
          </article>
        ))}
      </section>
      <section className="container small-banner">
        <div>
          <h2>Not sure what you need yet?</h2>
          <p>
            A readiness audit connects your business goals with a practical
            implementation plan.
          </p>
        </div>
        <Button href="/solutions/advisory" secondary>
          Start with clarity
        </Button>
      </section>
      <CTA />
    </>
  );
}
