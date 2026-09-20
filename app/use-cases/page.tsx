import { PageHero, CTA, Icon, TextLink } from "@/components/ui";
export const metadata = {
  title: "What’s possible",
  description:
    "Explore illustrative examples of AI assistance, invoice automation, retail operations, property enquiries and customer onboarding for East African businesses.",
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
  {
    icon: "store",
    name: "A clearer picture of stock",
    tag: "POS & inventory",
    before:
      "Cashier sales and stock counts live in separate records, making low-stock items easy to miss.",
    after:
      "A completed sale updates the stock record. A manager can review movements and decide what to reorder.",
    steps: [
      "A cashier records a sale",
      "Stock movement is linked to the transaction",
      "A manager reviews a low-stock report",
    ],
    measure:
      "Stock discrepancies, checkout time and time spent preparing reorder lists.",
  },
  {
    icon: "building",
    name: "Property enquiries with a next step",
    tag: "CRM & bookings",
    before:
      "Viewing requests get buried in messages and agents repeat the same questions.",
    after:
      "A form or assistant captures the customer’s requirements, assigns an agent and helps arrange a viewing.",
    steps: [
      "A prospect shares their property requirements",
      "The enquiry enters the sales pipeline",
      "An agent confirms a suitable viewing time",
    ],
    measure:
      "Enquiry response time, completed follow-ups and viewing attendance.",
  },
  {
    icon: "layout",
    name: "A smoother start for every client",
    tag: "Portals & onboarding",
    before:
      "New clients send documents across email threads and ask repeatedly about progress.",
    after:
      "A portal collects agreed information and shows the next action, while staff review submissions in one place.",
    steps: [
      "A client signs in to their account",
      "Documents enter a controlled review workflow",
      "The client sees status updates and any requested changes",
    ],
    measure:
      "Onboarding completion time, missing documents and status enquiries.",
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
