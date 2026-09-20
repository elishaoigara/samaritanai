import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Globe2,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import {
  Button,
  CTA,
  Eyebrow,
  Icon,
  TextLink,
  WorkflowPreview,
} from "@/components/ui";
import { services, industries, faqs } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="hero-stage">
        <div className="container hero">
          <div className="hero-copy">
            <Eyebrow>Independent thinking. Practical intelligence.</Eyebrow>
            <h1>
              Built for
              <br />
              <span className="hero-emphasis">what’s next.</span>
            </h1>
            <div className="hero-intro">
              <p>
                AI that answers your customers. Automation that gives you time
                back. Software that moves your business forward.
              </p>
              <p className="hero-sub">
                Your ambition. Our starting point.
                <br />
                Nairobi, Kenya → East Africa.
              </p>
              <div className="button-row">
                <Button>Find your first step</Button>
                <Link className="demo-link" href="/demo">
                  Explore the demo <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="showcase-copy">
              <span className="showcase-index">01 / INTELLIGENCE AT WORK</span>
              <h2>
                One conversation.
                <br />A better way
                <br />
                to do business.
              </h2>
              <p>
                From the first “Habari” to the right next step. Bring your
                customers, people and tools together.
              </p>
              <div className="hero-footnote">
                <span>
                  <Check size={16} /> English & Swahili
                </span>
                <span>
                  <Check size={16} /> People in control
                </span>
              </div>
              <Link href="/solutions/ai-agents" className="showcase-link">
                Meet your next assistant <ArrowUpRight size={22} />
              </Link>
            </div>
            <WorkflowPreview />
          </div>
        </div>
      </section>
      <section className="integration-strip">
        <div className="container integrations">
          <p>
            Works with the tools
            <br />
            <strong>your business runs on.</strong>
          </p>
          <div>
            <MessagesSquare size={21} /> WhatsApp
          </div>
          <div className="mpesa-word">M-PESA</div>
          <div>Google Workspace</div>
          <div>QuickBooks</div>
          <div>Odoo</div>
          <span className="integration-note">
            Connected to your workflow.
            <br />
            Never one size fits all.
          </span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>From everyday friction to real progress</Eyebrow>
            <h2>
              Your next chapter.
              <br />
              Our kind of problem.
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
        <div className="service-grid">
          {services.slice(0, 3).map((s, i) => (
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
              Different industries.
              <br />A shared ambition to do better.
            </h2>
          </div>
          <TextLink href="/industries">Find your industry</TextLink>
        </div>
        <div className="industry-tiles">
          {industries.slice(0, 6).map((x) => (
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
