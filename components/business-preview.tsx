"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight, CircleDot } from "lucide-react";
import { Icon } from "@/components/ui";
const scenarios = [
  {
    id: "sales",
    name: "Sales",
    icon: "cart",
    title: "From enquiry to order.",
    subtitle: "Give every opportunity a clear next step.",
    steps: ["Customer enquiry", "Product match", "Order & payment"],
    cards: [
      {
        icon: "messages",
        name: "A new conversation",
        text: "“Hi! Do you deliver in Nairobi?”",
        tag: "Customer enquiry",
      },
      {
        icon: "users",
        name: "The right follow-up",
        text: "Customer needs organised for your sales team.",
        tag: "CRM & sales",
      },
      {
        icon: "wallet",
        name: "A connected checkout",
        text: "An order linked to its payment record.",
        tag: "Online store",
      },
    ],
    href: "/solutions/crm-sales",
    link: "Explore sales workflows",
  },
  {
    id: "operations",
    name: "Operations",
    icon: "workflow",
    title: "Less chasing. More clarity.",
    subtitle: "Bring everyday work into one connected flow.",
    steps: ["Document received", "Team review", "Records updated"],
    cards: [
      {
        icon: "book",
        name: "Information captured",
        text: "Invoice details extracted for checking.",
        tag: "Document workflow",
      },
      {
        icon: "users",
        name: "People stay in control",
        text: "Uncertain amounts routed to a reviewer.",
        tag: "Approval step",
      },
      {
        icon: "chart",
        name: "Records in sync",
        text: "Approved entries update your reporting.",
        tag: "Business dashboard",
      },
    ],
    href: "/solutions/automation",
    link: "Explore business automation",
  },
  {
    id: "service",
    name: "Customer service",
    icon: "messages",
    title: "A better welcome, every time.",
    subtitle: "Help customers find answers and move forward.",
    steps: ["Question asked", "Helpful answer", "Human handover"],
    cards: [
      {
        icon: "messages",
        name: "Meet customers where they are",
        text: "“Habari! Can I book an appointment?”",
        tag: "WhatsApp & web",
      },
      {
        icon: "calendar",
        name: "Make the next step simple",
        text: "Capture the service and preferred time.",
        tag: "Booking request",
      },
      {
        icon: "users",
        name: "Your team takes it from here",
        text: "Staff review and confirm the appointment.",
        tag: "Human confirmation",
      },
    ],
    href: "/solutions/booking",
    link: "Explore customer experiences",
  },
];
export default function BusinessPreview() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];
  return (
    <div className="business-preview">
      <div className="workspace-top">
        <span className="workspace-brand">
          <span className="workspace-mark">s</span> Your business, connected
        </span>
        <span className="example-badge">Illustrative workflow</span>
      </div>
      <div
        className="workspace-tabs"
        role="tablist"
        aria-label="Explore example business workflows"
      >
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            id={`workflow-tab-${s.id}`}
            role="tab"
            aria-selected={active === i}
            aria-controls="workflow-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              let next = i;
              if (e.key === "ArrowRight") next = (i + 1) % scenarios.length;
              else if (e.key === "ArrowLeft")
                next = (i + scenarios.length - 1) % scenarios.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = scenarios.length - 1;
              else return;
              e.preventDefault();
              setActive(next);
              document
                .getElementById(`workflow-tab-${scenarios[next].id}`)
                ?.focus();
            }}
          >
            <Icon name={s.icon} size={16} />
            {s.name}
          </button>
        ))}
      </div>
      <div
        id="workflow-panel"
        role="tabpanel"
        aria-labelledby={`workflow-tab-${scenario.id}`}
        className="workspace-panel"
        tabIndex={0}
      >
        <div className="workspace-heading">
          <div>
            <h2>{scenario.title}</h2>
            <p>{scenario.subtitle}</p>
          </div>
          <span className="workspace-spark" aria-hidden="true">
            <Icon name={scenario.icon} size={24} />
          </span>
        </div>
        <div className="workspace-flow">
          {scenario.steps.map((step, i) => (
            <span key={step}>
              <span className="step-dot">{i + 1}</span>
              {step}
              {i < 2 && <ChevronRight size={14} />}
            </span>
          ))}
        </div>
        <div className="workspace-cards">
          {scenario.cards.map((card, i) => (
            <div
              className={`workspace-card workspace-card-${i}`}
              key={card.name}
            >
              <span className="workspace-card-icon">
                <Icon name={card.icon} size={20} />
              </span>
              <div>
                <span className="workspace-card-tag">{card.tag}</span>
                <h3>{card.name}</h3>
                <p>{card.text}</p>
              </div>
              <Check size={17} aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="workspace-bottom">
          <span>
            <CircleDot size={14} /> Designed around your process
          </span>
          <Link href={scenario.href}>
            {scenario.link}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
