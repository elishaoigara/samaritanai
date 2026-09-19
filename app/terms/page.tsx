import { PageHero } from "@/components/ui";
export const metadata = { title: "Website terms" };
export default function Terms() {
  return (
    <>
      <PageHero
        label="A clear understanding"
        title="Website information & terms."
      >
        <p>A few things to know while exploring Samaritan AI.</p>
      </PageHero>
      <article className="container prose">
        <h2>Information and indicative pricing</h2>
        <p>
          This website describes services we can discuss and a roadmap of
          planned products. Prices are indicative planning figures, not binding
          offers. Final scope, taxes, third-party charges, delivery dates,
          payment milestones and support terms are confirmed in a written
          proposal or agreement.
        </p>
        <h2>Product availability</h2>
        <p>
          Products labelled “Roadmap” or “Planned” are not generally available
          for subscription. Enquiring about a design partnership does not
          reserve a launch date or guarantee delivery of a product.
        </p>
        <h2>Illustrative examples</h2>
        <p>
          Demo businesses and example workflows are illustrative. They do not
          represent customer endorsements, completed projects or promised
          performance. The demo does not take payments, make bookings or notify
          real businesses.
        </p>
        <h2>Starting a project</h2>
        <p>
          A contact-form submission is an enquiry, not a purchase or a services
          contract. Ownership, licensing, confidentiality, data processing and
          service levels are agreed separately before an engagement begins.
        </p>
        <h2>Responsible use</h2>
        <p>
          Please do not misuse the website, submit unlawful material or try to
          interfere with its operation. Do not submit passwords or sensitive
          records through the enquiry form.
        </p>
        <h2>Third-party products</h2>
        <p>
          References to WhatsApp, M-Pesa and other tools describe possible
          integrations. They do not imply affiliation, endorsement or a formal
          partnership. Integrations depend on the relevant provider’s terms and
          account approvals.
        </p>
        <p>
          <a href="/contact">Have a question? Let’s talk →</a>
        </p>
      </article>
    </>
  );
}
