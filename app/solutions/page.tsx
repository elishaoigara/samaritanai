import type { Metadata } from "next";
import { PageHero, CTA, Button, TextLink } from "@/components/ui";
import SolutionExplorer from "@/components/solution-explorer";
export const metadata: Metadata = {
  title: "Business solutions",
  description:
    "Explore AI, e-commerce, POS, inventory, CRM, bookings, payments, portals, automation, marketing and customer growth solutions for your business.",
};
export default function Solutions() {
  return (
    <>
      <PageHero
        label="A connected business starts here"
        title="More possibilities. One practical partner."
      >
        <p>
          Win customers. Run smoother operations. Make sense of your data.
          Explore software and AI built around the way your business works.
        </p>
        <div className="hero-capabilities">
          <span>Customer experiences</span>
          <span>Business operations</span>
          <span>Intelligence & growth</span>
        </div>
      </PageHero>
      <section className="container marketing-discovery">
        <div>
          <span className="solution-kicker">
            Explore a connected set of services
          </span>
          <h2>Marketing & Customer Growth</h2>
          <p>
            Campaigns, content, loyalty and feedback. Give customers more
            reasons to discover your business and return.
          </p>
        </div>
        <TextLink href="/solutions/marketing-growth">
          Explore marketing solutions
        </TextLink>
      </section>
      <SolutionExplorer />
      <section className="container small-banner">
        <div>
          <h2>Your challenge doesn’t fit a category?</h2>
          <p>
            Tell us what you want to improve. We can combine services into a
            focused first project.
          </p>
        </div>
        <Button href="/contact" secondary>
          Talk through your idea
        </Button>
      </section>
      <CTA />
    </>
  );
}
