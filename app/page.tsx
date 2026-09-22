import Link from "next/link";
import BusinessPreview from "@/components/business-preview";
import {
  ArrowUpRight,
  Globe2,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { Button, CTA, Eyebrow, Icon, TextLink } from "@/components/ui";
import { services, industries, faqs, marketingServices } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="business-hero">
        <div className="container business-hero-grid">
          <div className="business-hero-copy">
            <Eyebrow>AI + software. Built around your business.</Eyebrow>
            <h1>
              Good business.
              <br />
              <span>Better connected.</span>
            </h1>
            <p>
              From your first customer conversation to the work behind the
              scenes. We build the websites, software and AI that help your
              business move forward.
            </p>
            <div className="button-row">
              <Button href="/solutions">Find your solution</Button>
              <Link className="text-link" href="/contact">
                Let’s talk <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="business-hero-note">
              <span className="location-dot" /> Nairobi, Kenya <span>·</span>{" "}
              Built for businesses going places.
            </div>
          </div>
          <BusinessPreview />
        </div>
        <div className="container capability-ribbon">
          <span>One business. Many possibilities.</span>
          {[
            { name: "Sell online", icon: "cart", slug: "ecommerce" },
            { name: "Serve customers", icon: "messages", slug: "ai-agents" },
            {
              name: "Connect operations",
              icon: "workflow",
              slug: "automation",
            },
            { name: "See the bigger picture", icon: "chart", slug: "data" },
          ].map((x) => (
            <Link href={`/solutions/${x.slug}`} key={x.slug}>
              <Icon name={x.icon} size={18} />
              {x.name}
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </section>
      <section
        className="business-connections container"
        aria-label="Integration possibilities"
      >
        <p>Built to connect with your everyday tools</p>
        <div>
          <span>WhatsApp</span>
          <span>M-PESA</span>
          <span>Google Workspace</span>
          <span>QuickBooks</span>
          <span>Odoo</span>
        </div>
        <small>
          Integrations scoped around your accounts and available APIs.
        </small>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>A toolkit for your next chapter</Eyebrow>
            <h2>
              More than one way
              <br />
              to move forward.
            </h2>
          </div>
          <div>
            <p>
              You don’t need AI for the sake of AI. You need fewer missed
              opportunities, smoother operations and tools that earn their
              place.
            </p>
            <TextLink href="/solutions">Explore all solutions</TextLink>
          </div>
        </div>
        <div className="service-grid business-service-grid">
          {[
            "ai-agents",
            "ecommerce",
            "pos-inventory",
            "crm-sales",
            "automation",
            "software",
          ]
            .map((slug) => services.find((s) => s.slug === slug)!)
            .map((s, i) => (
              <Link
                href={`/solutions/${s.slug}`}
                className={`service-card ${i === 0 ? "featured" : ""}`}
                key={s.slug}
              >
                <div className="card-top">
                  <span className="icon-box">
                    <Icon name={s.icon} />
                  </span>
                  <span className="card-number">0{i + 1}</span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <span className="card-bottom">
                  {s.label}
                  <ArrowUpRight size={22} />
                </span>
              </Link>
            ))}
        </div>
        <div className="service-more">
          Also here for your next step:
          <Link href="/solutions/data">
            Data & intelligence <ArrowUpRight size={15} />
          </Link>
          <Link href="/solutions/advisory">
            Advisory & training <ArrowUpRight size={15} />
          </Link>
          <Link href="/solutions/managed-services">
            Ongoing support <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="container business-paths">
        <div className="business-paths-intro">
          <Eyebrow>Start where it matters</Eyebrow>
          <h2>
            Small improvements.
            <br />A more connected business.
          </h2>
          <p>
            You don’t have to change everything at once. Choose one part of your
            business and build from there.
          </p>
          <TextLink href="/use-cases">See example workflows</TextLink>
        </div>
        <div className="business-path-grid">
          {[
            {
              n: "01",
              icon: "calendar",
              title: "Make it easier to book",
              text: "Appointments, availability and reminders that fit your service.",
              slug: "booking",
              tags: ["Appointments", "Reminders"],
            },
            {
              n: "02",
              icon: "wallet",
              title: "Bring payments into the picture",
              text: "Connect transactions with orders, receipts and your records.",
              slug: "payments",
              tags: ["M-Pesa", "Reconciliation"],
            },
            {
              n: "03",
              icon: "layout",
              title: "Give customers their own space",
              text: "A portal for documents, requests and clear project updates.",
              slug: "portals",
              tags: ["Self-service", "Access controls"],
            },
            {
              n: "04",
              icon: "book",
              title: "Put team knowledge to work",
              text: "Find approved answers and keep everyday information organised.",
              slug: "knowledge",
              tags: ["Search", "Internal AI"],
            },
          ].map((x) => (
            <Link
              key={x.slug}
              href={`/solutions/${x.slug}`}
              className="business-path"
            >
              <div className="business-path-top">
                <Icon name={x.icon} size={28} />
                <span>{x.n}</span>
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <div className="business-path-footer">
                <div>
                  {x.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ArrowUpRight size={21} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container marketing-feature">
        <div>
          <Eyebrow>Marketing & Customer Growth</Eyebrow>
          <h2>
            Reach the right people.
            <br />
            Give them a reason to return.
          </h2>
          <p>
            Connect your campaigns, content and customer relationships. Start
            with one practical way to attract enquiries or encourage repeat
            business.
          </p>
          <Button href="/solutions/marketing-growth">
            Explore marketing solutions
          </Button>
        </div>
        <div className="marketing-service-links">
          {marketingServices.map((service) => (
            <Link key={service.slug} href={`/solutions/${service.slug}`}>
              <Icon name={service.icon} size={20} />
              <span>{service.name}</span>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>
      <section className="local-section">
        <div className="container local-grid">
          <div>
            <Eyebrow>Global possibilities. Local understanding.</Eyebrow>
            <h2>
              Technology that
              <br />
              speaks your
              <br />
              <span>business’s language.</span>
            </h2>
            <p>
              From a customer’s first “Habari” to a reconciled M-Pesa payment,
              the details matter. We start with how your business actually
              works.
            </p>
            <TextLink href="/about">Meet Samaritan AI</TextLink>
          </div>
          <div className="local-features">
            <article>
              <span>01</span>
              <div>
                <h3>Built for your customers</h3>
                <p>
                  English and Swahili experiences on familiar channels, with
                  mobile-friendly journeys from the start.
                </p>
              </div>
              <MessagesSquare />
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Connected to your reality</h3>
                <p>
                  M-Pesa, WhatsApp, spreadsheets and business systems. We bring
                  the right pieces together.
                </p>
              </div>
              <Globe2 />
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>People stay in control</h3>
                <p>
                  Clear boundaries, human handover and thoughtful data handling
                  are part of the design.
                </p>
              </div>
              <ShieldCheck />
            </article>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>Built around your world</Eyebrow>
            <h2>
              Your industry.
              <br />
              Our starting point.
            </h2>
          </div>
          <TextLink href="/industries">Find your industry</TextLink>
        </div>
        <div className="industry-tiles">
          {industries
            .filter((_, i) => [0, 2, 3, 4, 8, 9].includes(i))
            .map((x) => (
              <Link key={x.name} href="/industries">
                <Icon name={x.icon} />
                <h3>{x.name}</h3>
                <ArrowUpRight size={19} />
              </Link>
            ))}
        </div>
      </section>
      <section className="process-section container">
        <div>
          <Eyebrow>A clear path forward</Eyebrow>
          <h2>
            Start small.
            <br />
            Build something that matters.
          </h2>
          <p>
            No need to have it all figured out.
            <br />
            That’s what the first conversation is for.
          </p>
          <Button secondary>Talk through your idea</Button>
        </div>
        <ol className="process-list">
          {[
            [
              "Listen first",
              "We learn your business, your people and the process you want to improve.",
            ],
            [
              "Make a practical plan",
              "You get a clear scope, an agreed budget and a way to measure success.",
            ],
            [
              "Build, test, put it to work",
              "We demo progress, test real scenarios and train the people using it.",
            ],
            [
              "Keep making it better",
              "An agreed care plan keeps your tools supported as your business evolves.",
            ],
          ].map(([title, desc], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="section container pricing-teaser">
        <div className="section-heading">
          <div>
            <Eyebrow>A sensible place to start</Eyebrow>
            <h2>
              Clear offers.
              <br />
              Room to grow.
            </h2>
          </div>
          <div>
            <p>
              Start with one opportunity. Choose a focused first project. Expand
              when it makes sense.
            </p>
            <TextLink href="/pricing">See indicative pricing</TextLink>
          </div>
        </div>
        <div className="starter-grid">
          {[
            [
              "AI-readiness audit",
              "25,000",
              "Understand where AI can create value.",
              "/solutions/advisory",
            ],
            [
              "WhatsApp AI assistant",
              "65,000",
              "Setup, plus plans from KES 12,000/month.",
              "/solutions/ai-agents",
            ],
            [
              "Automation sprint",
              "80,000",
              "One scoped workflow. A practical improvement.",
              "/solutions/automation",
            ],
          ].map(([title, price, desc, url]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p className="price-label">Starting from</p>
              <p className="price">
                <span>KES</span> {price}
              </p>
              <p>{desc}</p>
              <TextLink href={url}>Explore this offer</TextLink>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Indicative planning prices. Final scope, usage, third-party costs and
          applicable taxes are confirmed in your proposal.
        </p>
      </section>
      <section className="section container faq-section">
        <div>
          <Eyebrow>Good questions. Clear answers.</Eyebrow>
          <h2>
            A little clarity
            <br />
            before we begin.
          </h2>
          <TextLink href="/contact">Ask us something else</TextLink>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 5).map(([q, a]) => (
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
