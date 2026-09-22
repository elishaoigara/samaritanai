import type { Metadata } from "next";
import {
  PageHero,
  Eyebrow,
  Icon,
  TextLink,
  Button,
  CTA,
  CheckList,
} from "@/components/ui";
import { marketingServices } from "@/lib/content";
export const metadata: Metadata = {
  title: "Marketing & Customer Growth",
  description:
    "Campaigns, loyalty, referrals, customer feedback, AI content, landing pages and marketing dashboards built around your business.",
};
export default function MarketingGrowth() {
  return (
    <>
      <PageHero
        label="Marketing & Customer Growth"
        title="Reach the right people. Give them a reason to return."
      >
        <p>
          Turn a first visit into a useful conversation, and a good experience
          into a lasting customer relationship. We build the tools and workflows
          to support your marketing from discovery to repeat business.
        </p>
        <div className="button-row">
          <Button href="/contact?interest=Marketing%20%26%20Customer%20Growth">
            Plan your growth project
          </Button>
          <TextLink href="/solutions">All business solutions</TextLink>
        </div>
      </PageHero>
      <section className="container marketing-category">
        <div className="section-heading">
          <div>
            <Eyebrow>Choose your starting point</Eyebrow>
            <h2>Seven ways to build stronger customer connections.</h2>
          </div>
          <p>
            Choose a focused project or combine services into one connected
            customer journey. Every project starts with an agreed scope.
          </p>
        </div>
        <div className="related-grid marketing-category-grid">
          {marketingServices.map((s) => (
            <article key={s.slug}>
              <Icon name={s.icon} size={28} />
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <CheckList items={s.features.slice(0, 2)} />
              <TextLink href={`/solutions/${s.slug}`}>
                Explore solution
              </TextLink>
            </article>
          ))}
        </div>
      </section>
      <section className="container small-banner">
        <div>
          <h2>A practical first project.</h2>
          <p>
            Launch a campaign page, connect an opt-in welcome message and track
            the enquiries it brings in. Add loyalty, referrals or feedback
            workflows as your needs grow.
          </p>
          <p className="fine-print">
            Custom pricing is confirmed after discovery. Messaging, advertising
            and other provider costs are agreed separately. Results depend on
            your offer, audience and execution.
          </p>
        </div>
        <Button
          href="/contact?interest=Marketing%20%26%20Customer%20Growth"
          secondary
        >
          Discuss your starting point
        </Button>
      </section>
      <CTA />
    </>
  );
}
