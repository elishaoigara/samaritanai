import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MessagesSquare,
  Workflow,
  Code2,
  ChartNoAxesCombined,
  Compass,
  ShieldCheck,
  Store,
  Landmark,
  GraduationCap,
  HeartPulse,
  Hotel,
  Truck,
  Globe2,
  Building2,
  Users,
  Check,
  MoveUpRight,
  ShoppingCart,
  CalendarDays,
  Wallet,
  PanelsTopLeft,
  BookOpen,
  BriefcaseBusiness,
  Sprout,
  Wrench,
} from "lucide-react";
const icons = {
  cart: ShoppingCart,
  calendar: CalendarDays,
  wallet: Wallet,
  layout: PanelsTopLeft,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  leaf: Sprout,
  tool: Wrench,
  messages: MessagesSquare,
  workflow: Workflow,
  code: Code2,
  chart: ChartNoAxesCombined,
  compass: Compass,
  shield: ShieldCheck,
  store: Store,
  landmark: Landmark,
  graduation: GraduationCap,
  heart: HeartPulse,
  hotel: Hotel,
  truck: Truck,
  globe: Globe2,
  building: Building2,
  users: Users,
};
export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const I = icons[name as keyof typeof icons] || Compass;
  return <I size={size} strokeWidth={1.65} aria-hidden="true" />;
}
export function Button({
  children,
  href = "/contact",
  secondary = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-outline" : ""} ${className}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function PageHero({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-hero container">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <div className="page-intro">{children}</div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta container">
      <div>
        <Eyebrow>Let’s make work work better</Eyebrow>
        <h2>
          Big ambition.
          <br />
          One practical first step.
        </h2>
        <p>
          Tell us what’s slowing your business down.
          <br />
          We’ll help you find a sensible place to start.
        </p>
      </div>
      <Button href="/contact">Let’s talk about your business</Button>
      <div className="cta-mark" aria-hidden="true">
        <MoveUpRight />
      </div>
    </section>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((x) => (
        <li key={x}>
          <Check size={17} aria-hidden="true" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function WorkflowPreview() {
  return (
    <div
      className="workflow-preview"
      aria-label="Example of a customer enquiry becoming an assisted booking"
    >
      <div className="preview-top">
        <span>
          <span className="tiny-mark">s</span> A little intelligence. A lot of
          possibility.
        </span>
        <span className="preview-tag">EXAMPLE WORKFLOW</span>
      </div>
      <div className="workflow-body">
        <div className="workflow-label">
          <span>01 / CUSTOMER CONVERSATION</span>
          <MessagesSquare size={17} />
        </div>
        <div className="message message-customer">
          Habari! Can I book a consultation?
        </div>
        <div className="message message-ai">
          <span className="assistant-label">SAMARITAN ASSISTANT</span>Habari!
          Absolutely. What would you like help with?
          <div className="message-options">
            <span>AI for my business</span>
            <span>Automate a process</span>
          </div>
        </div>
        <div className="flow-connector">
          <span />
        </div>
        <div className="workflow-action">
          <span className="action-icon">
            <Workflow size={21} />
          </span>
          <div>
            <strong>The right next step, connected.</strong>
            <small>Understand → qualify → hand over</small>
          </div>
          <Check size={19} />
        </div>
        <div className="flow-connector short">
          <span />
        </div>
        <div className="workflow-results">
          <div>
            <Users size={19} />
            <span>Lead captured</span>
          </div>
          <div>
            <Check size={19} />
            <span>Team notified</span>
          </div>
        </div>
      </div>
      <div className="preview-bottom">
        <span>Built for your workflow</span>
        <span>
          People stay in control <ShieldCheck size={14} />
        </span>
      </div>
    </div>
  );
}
