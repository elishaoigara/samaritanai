import { PageHero, CTA, Icon, CheckList, TextLink } from "@/components/ui";
import { products } from "@/lib/content";
export const metadata = {
  title: "Product roadmap",
  description:
    "Explore Samaritan AI’s planned sector platforms for SACCOs, schools, clinics, hospitality, fleets and chamas.",
};
export default function Products() {
  return (
    <>
      <PageHero
        label="The next chapter · Product roadmap"
        title="Built with you. Made for your sector."
      >
        <p>
          Our long-term vision: focused platforms that solve the everyday
          challenges of East African institutions. Help shape what comes next.
        </p>
      </PageHero>
      <div className="container roadmap-notice">
        <span className="pill">Planned products</span>
        <p>
          These platforms are not generally available yet. We’re inviting
          conversations with potential design partners. Pilot availability,
          delivery dates and pricing will be agreed individually.
        </p>
      </div>
      <section className="container products-grid">
        {products.map((p) => (
          <article className="product-card" key={p.name}>
            <div className="card-top">
              <span className="icon-box">
                <Icon name={p.icon} />
              </span>
              <span className="pill">Roadmap</span>
            </div>
            <span className="product-for">{p.for}</span>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <CheckList items={p.features} />
            <div className="product-price">
              <span>Indicative future pricing</span>
              <p>
                KES {p.setup} <small>setup</small>
              </p>
              <p>KES {p.subscription}</p>
            </div>
            <TextLink
              href={`/contact?interest=${encodeURIComponent(p.name + " design partnership")}`}
            >
              Discuss a design partnership
            </TextLink>
          </article>
        ))}
      </section>
      <section className="container small-banner">
        <div>
          <h2>Need a solution sooner?</h2>
          <p>
            We can discuss a scoped custom implementation around your current
            operations.
          </p>
        </div>
        <TextLink href="/solutions/software">Explore custom software</TextLink>
      </section>
      <CTA />
    </>
  );
}
