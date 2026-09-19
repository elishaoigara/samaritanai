import {
  PageHero,
  Button,
  CheckList,
  CTA,
  Eyebrow,
  TextLink,
} from "@/components/ui";
import PricingCatalog from "@/components/pricing-catalog";
import { faqs } from "@/lib/content";
export const metadata = {
  title: "Pricing",
  description:
    "Indicative KES pricing for AI assistants, workflow automation, websites, software, analytics and AI training.",
};
export default function Pricing() {
  return (
    <>
      <PageHero
        label="Clear starting points"
        title="Practical investment. Meaningful progress."
      >
        <p>
          Choose a focused first step, then build from there. These planning
          prices help you explore fit; your proposal confirms the scope and full
          cost.
        </p>
      </PageHero>
      <section className="container">
        <div className="pricing-section-label">
          <Eyebrow>WhatsApp AI assistant</Eyebrow>
          <p>English & Swahili · Human handover · Business knowledge</p>
        </div>
        <div className="plans">
          {[
            {
              name: "Starter",
              setup: "65,000",
              monthly: "12,000",
              text: "A focused first assistant for your business.",
              features: [
                "Approved FAQ and business content",
                "One scoped customer journey",
                "English and Swahili responses",
                "Team handover and launch training",
              ],
            },
            {
              name: "Growth",
              setup: "140,000",
              monthly: "22,000",
              text: "More connected customer journeys.",
              features: [
                "Everything scoped in your Starter foundation",
                "Broader knowledge and customer journeys",
                "CRM or booking integration, as agreed",
                "Conversation review and analytics",
              ],
            },
            {
              name: "Enterprise",
              setup: "350,000+",
              monthly: "45,000+",
              text: "A tailored scope for more complex operations.",
              features: [
                "Custom workflows and integrations",
                "Multiple teams or business units",
                "Agreed access and escalation controls",
                "Bespoke support and rollout plan",
              ],
            },
          ].map((p, i) => (
            <article
              className={`plan ${i === 1 ? "plan-featured" : ""}`}
              key={p.name}
            >
              <span className="pill">
                {i === 1
                  ? "For growing businesses"
                  : p.name === "Starter"
                    ? "Start focused"
                    : "Build around your needs"}
              </span>
              <h2>{p.name}</h2>
              <p>{p.text}</p>
              <p className="price">
                <span>KES</span> {p.setup}
              </p>
              <p className="monthly">
                one-time setup
                <br />
                <strong>+ KES {p.monthly} / month</strong>
              </p>
              <Button
                href={`/contact?interest=${encodeURIComponent(p.name + " AI assistant")}`}
                secondary={i !== 1}
              >
                Discuss {p.name.toLowerCase()}
              </Button>
              <CheckList items={p.features} />
            </article>
          ))}
        </div>
        <p className="fine-print">
          Package features are indicative and scoped in your proposal.
          Conversation volumes, overages, provider fees, taxes and support
          windows must be agreed before purchase. No payment is taken on this
          website.
        </p>
      </section>
      <section className="section container">
        <Eyebrow>The wider picture</Eyebrow>
        <h2>Find your starting point.</h2>
        <p className="section-description">
          Compare the full service catalogue. Project prices are one-time unless
          marked monthly or per person.
        </p>
        <PricingCatalog />
        <div className="small-banner">
          <div>
            <h3>Looking at a sector platform?</h3>
            <p>
              Our planned products have separate indicative subscription models.
            </p>
          </div>
          <TextLink href="/products">Explore the product roadmap</TextLink>
        </div>
        <div className="pricing-notes">
          <article>
            <h3>Advisory & specialist scope</h3>
            <p>
              Data-protection implementation support: indicative KES
              150,000–400,000. Specialist DPO services: KES 20,000–50,000/month,
              subject to an appropriately qualified provider and agreed scope.
            </p>
          </article>
          <article>
            <h3>Institutional programmes</h3>
            <p>
              Enterprise and public-sector work starts with scoped discovery.
              NGO digital programmes are quoted individually in the agreed
              currency. We do not imply procurement eligibility or
              certifications.
            </p>
          </article>
          <article>
            <h3>What your quote clarifies</h3>
            <p>
              Deliverables, timelines, payment milestones, data
              responsibilities, hosting, API usage, ownership and ongoing
              support. Any applicable tax is shown in your written quote.
            </p>
          </article>
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <Eyebrow>Before you decide</Eyebrow>
          <h2>Let’s make it clear.</h2>
        </div>
        <div className="faq-list">
          {faqs.slice(3).map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
