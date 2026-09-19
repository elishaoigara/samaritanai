import { PageHero, CTA, Icon, TextLink } from "@/components/ui";
export const metadata = {
  title: "What’s possible",
  description:
    "Explore illustrative examples of an AI receptionist, a sales assistant and invoice automation for East African businesses.",
};
const cases = [
  {
    icon: "heart",
    name: "A calmer clinic front desk",
    tag: "AI receptionist",
    before:
      "Reception staff repeatedly answer questions about hours, services and appointments.",
    after:
      "An assistant answers approved administrative questions, captures appointment requests and routes anything sensitive to the team.",
    steps: [
      "A customer asks about opening hours",
      "The assistant answers from approved information",
      "An appointment request goes to a human for confirmation",
    ],
    measure:
      "Response time, completed handovers and time spent on routine enquiries.",
  },
  {
    icon: "store",
    name: "Turn product questions into next steps",
    tag: "AI sales assistant",
    before:
      "Product enquiries arrive after hours and leads are scattered across conversations.",
    after:
      "An assistant helps customers explore approved catalogue information, captures their needs and sends qualified enquiries to your team.",
    steps: [
      "A customer asks about a product",
      "The assistant checks connected catalogue information",
      "The sales team receives a structured enquiry",
    ],
    measure:
      "Qualified enquiries, follow-up time and conversion from enquiry to order.",
  },
  {
    icon: "workflow",
    name: "Invoices without the retyping",
    tag: "Document automation",
    before:
      "Invoice details are copied manually into spreadsheets and accounting tools.",
    after:
      "A workflow extracts key fields, flags uncertainty for review and sends approved records to your accounting system.",
    steps: [
      "An invoice enters the workflow",
      "Fields are extracted and checked by a reviewer",
      "Approved information updates your records",
    ],
    measure:
      "Processing time, corrections required and the number of manual entry steps.",
  },
];
export default function UseCases() {
  return (
    <>
      <PageHero
        label="What practical AI can look like"
        title="Real-world problems. Tangible possibilities."
      >
        <p>
          Illustrative examples of the workflows we can help you build. These
          are demonstrations of an approach, not customer case studies or
          measured results.
        </p>
      </PageHero>
      <section className="container cases-list">
        {cases.map((c, i) => (
          <article key={c.name} className="case-card">
            <div className="case-heading">
              <Icon name={c.icon} size={30} />
              <span>
                0{i + 1} / {c.tag}
              </span>
              <h2>{c.name}</h2>
            </div>
            <div>
              <h3>The everyday challenge</h3>
              <p>{c.before}</p>
              <h3>A better workflow</h3>
              <p>{c.after}</p>
              <ol>
                {c.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <div className="measure">
                <strong>What we’d measure</strong>
                <p>{c.measure}</p>
              </div>
              <TextLink href={`/contact?interest=${encodeURIComponent(c.tag)}`}>
                Explore this for your business
              </TextLink>
            </div>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
