import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import {
  PageHero,
  Button,
  CheckList,
  CTA,
  Eyebrow,
  Icon,
  TextLink,
} from "@/components/ui";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return { title: s?.name, description: s?.description };
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero label={s.name} title={s.short}>
        <p>{s.description}</p>
        <div className="button-row">
          <Button href={`/contact?interest=${encodeURIComponent(s.name)}`}>
            Discuss your project
          </Button>
          <TextLink href="/pricing">View pricing</TextLink>
        </div>
      </PageHero>
      {s.goals.includes("marketing") && (
        <div className="container marketing-back">
          <TextLink href="/solutions/marketing-growth">
            Explore Marketing & Customer Growth
          </TextLink>
        </div>
      )}
      <section className="container service-detail">
        <div>
          <Eyebrow>What we can help with</Eyebrow>
          <h2>{s.outcome}</h2>
          <CheckList items={s.features} />
          <div className="deliverables">
            <h3>What a project includes</h3>
            <CheckList items={s.deliverables} />
          </div>
        </div>
        <aside className="scope-card">
          <Icon name={s.icon} size={34} />
          <h3>Your starting point</h3>
          {s.price ? (
            <>
              <p className="price-label">Indicative pricing from</p>
              <p className="price">
                <span>KES</span> {s.price}
              </p>
              {s.recurring && <p>+ KES {s.recurring} / month</p>}
            </>
          ) : (
            <p>
              Quoted around your workflows, integrations and agreed
              deliverables.
            </p>
          )}
          <p>
            We confirm deliverables, dependencies, timeline and commercial terms
            before work begins.
          </p>
          <Button href={`/contact?interest=${encodeURIComponent(s.name)}`}>
            Let’s find the right scope
          </Button>
          <p className="fine-print">
            Integrations depend on account access and third-party approvals.
            Applicable taxes and usage costs are confirmed in writing.
          </p>
        </aside>
      </section>
      <section className="container small-banner">
        <div>
          <h2>Built with clear boundaries.</h2>
          <p>
            Access controls, practical testing and human review are scoped
            around the risk of your workflow. Specialist legal or regulated work
            requires appropriate professional review.
          </p>
        </div>
        <TextLink href="/about">Our approach</TextLink>
      </section>
      <section className="section container related-solutions">
        <div className="section-heading">
          <div>
            <Eyebrow>Better together</Eyebrow>
            <h2>Connect the next part of your business.</h2>
          </div>
          <TextLink href="/solutions">All solutions</TextLink>
        </div>
        <div className="related-grid">
          {services
            .filter(
              (other) =>
                other.slug !== s.slug &&
                other.goals.some((goal) => s.goals.includes(goal)),
            )
            .sort(
              (a, b) =>
                b.goals.filter((goal) => s.goals.includes(goal)).length -
                a.goals.filter((goal) => s.goals.includes(goal)).length,
            )
            .slice(0, 3)
            .map((other) => (
              <article key={other.slug}>
                <Icon name={other.icon} size={28} />
                <h3>{other.name}</h3>
                <p>{other.description}</p>
                <TextLink href={`/solutions/${other.slug}`}>
                  Explore solution
                </TextLink>
              </article>
            ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
