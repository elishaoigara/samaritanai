"use client";
import { useEffect, useRef, useState } from "react";
import { Send, RotateCcw, ArrowUpRight, Bot, UserRound } from "lucide-react";
import Link from "next/link";
type Message = { who: "assistant" | "user"; text: string };
const scenarios = {
  retail: {
    label: "Retail assistant",
    greeting:
      "Hi! Welcome to Jirani, an illustrative retail business. I can show you how an assistant handles product questions, payment enquiries and human handover.",
    prompts: [
      "What products do you have?",
      "Can I pay with M-Pesa?",
      "Ningependa kuongea na mtu",
    ],
    answers: [
      "In a connected store, I’d look up your approved product catalogue and help you compare options. This demo has no live stock data. What kind of product would you be looking for?",
      "An assistant can explain your payment options and help you reach an approved checkout. This demo cannot start an M-Pesa payment or take an order.",
      "Bila shaka. Msaidizi anaweza kupeleka ombi lako kwa timu. Hili ni onyesho tu; hakuna ujumbe unaotumwa kwa mtu.",
    ],
  },
  clinic: {
    label: "Clinic receptionist",
    greeting:
      "Karibu! This is a fictional clinic receptionist. Explore opening-hours questions and appointment requests. This is an administrative demo and does not provide medical advice.",
    prompts: [
      "Are you open on Saturday?",
      "I’d like to book an appointment",
      "I need medical advice",
    ],
    answers: [
      "For this example, the clinic’s approved hours are Monday–Saturday, 8am–5pm. A real assistant would answer from your clinic’s current opening hours.",
      "I’d help collect a preferred time and send a request to reception. No appointment is created in this demo. In a live workflow, the clinic would confirm availability.",
      "Clinical questions should go to a qualified healthcare professional. A deployed assistant would follow the clinic’s agreed escalation process; it would not diagnose or prescribe.",
    ],
  },
  hospitality: {
    label: "Guest concierge",
    greeting:
      "Welcome to an illustrative lodge concierge. See how an assistant can help guests explore a stay and send an enquiry to your reservations team.",
    prompts: [
      "Can I check availability?",
      "Do you offer airport transfers?",
      "Can a person help me?",
    ],
    answers: [
      "With a booking-system connection, I could check available dates. This demo is not connected to a property and cannot confirm availability or make a booking.",
      "I’d answer from the property’s approved guest information and collect a transfer enquiry if offered. Prices and availability would be confirmed by the property.",
      "Of course. Human handover helps when a guest needs a more personal conversation. This preview shows the flow only; no team is notified.",
    ],
  },
};
type Scenario = keyof typeof scenarios;
export default function AssistantDemo() {
  const [scenario, setScenario] = useState<Scenario>("retail");
  const [messages, setMessages] = useState<Message[]>([
    { who: "assistant", text: scenarios.retail.greeting },
  ]);
  const [input, setInput] = useState("");
  const active = scenarios[scenario];
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages]);
  function reset(s: Scenario) {
    setScenario(s);
    setMessages([{ who: "assistant", text: scenarios[s].greeting }]);
    setInput("");
  }
  function ask(question: string) {
    if (!question.trim()) return;
    const i = active.prompts.indexOf(question);
    const answer =
      i >= 0
        ? active.answers[i]
        : "This is a scripted preview, so I can’t answer arbitrary questions or access business data. Try one of the example questions below to explore this workflow. A deployed assistant would use your approved information and agreed integrations.";
    setMessages((prev) => [
      ...prev,
      { who: "user", text: question.slice(0, 500) },
      { who: "assistant", text: answer },
    ]);
    setInput("");
  }
  return (
    <div className="demo-layout">
      <aside>
        <h2>Choose a business.</h2>
        <p>
          Try a few everyday conversations and see where an assistant can help.
        </p>
        <div className="scenario-buttons">
          {(Object.keys(scenarios) as Scenario[]).map((s) => (
            <button
              key={s}
              onClick={() => reset(s)}
              aria-pressed={scenario === s}
            >
              {scenarios[s].label}
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
        <div className="demo-disclosure">
          <strong>A guided preview, not a live AI.</strong>
          <p>
            Responses are scripted. No messages are sent, payments initiated or
            bookings made. Your conversation stays in this page and clears on
            refresh.
          </p>
        </div>
        <Link className="text-link" href="/contact?interest=AI%20assistant">
          Build one for your business <ArrowUpRight size={17} />
        </Link>
      </aside>
      <div className="demo-chat">
        <div className="chat-header">
          <div>
            <span className="icon-box">
              <Bot size={22} />
            </span>
            <div>
              <strong>Samaritan Assistant</strong>
              <span>{active.label} · Scripted demo</span>
            </div>
          </div>
          <button
            aria-label="Reset conversation"
            title="Reset conversation"
            onClick={() => reset(scenario)}
          >
            <RotateCcw size={19} />
          </button>
        </div>
        <div
          ref={log}
          className="chat-messages"
          role="log"
          aria-live="polite"
          aria-label="Demo conversation"
        >
          {messages.map((m, i) => (
            <div key={i} className={`chat-message ${m.who}`}>
              <span className="chat-avatar">
                {m.who === "assistant" ? (
                  <Bot size={17} />
                ) : (
                  <UserRound size={17} />
                )}
              </span>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-controls">
          <div className="prompt-buttons">
            {active.prompts.map((p) => (
              <button key={p} onClick={() => ask(p)}>
                {p}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <label className="sr-only" htmlFor="demo-input">
              Your demo message
            </label>
            <input
              id="demo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Try an example question…"
              maxLength={500}
            />
            <button
              type="submit"
              aria-label="Send demo message"
              disabled={!input.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
