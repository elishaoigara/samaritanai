"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { services, solutionGoals } from "@/lib/content";
import { Icon } from "@/components/ui";

export default function SolutionExplorer() {
  const [goal, setGoal] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = services.filter(
    (s) =>
      (goal === "all" || s.goals.includes(goal)) &&
      `${s.name} ${s.label} ${s.description} ${s.features.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section
      className="container solution-explorer"
      aria-labelledby="explorer-title"
    >
      <div className="explorer-top">
        <div>
          <p className="eyebrow">Start with your goal</p>
          <h2 id="explorer-title">What would you like to improve?</h2>
        </div>
        <label className="solution-search">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search solutions</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try payments, stock, bookings…"
          />
        </label>
      </div>
      <div
        className="goal-filters"
        role="group"
        aria-label="Filter solutions by business goal"
      >
        {solutionGoals.map((g) => (
          <button
            key={g.id}
            aria-pressed={goal === g.id}
            onClick={() => setGoal(g.id)}
          >
            {g.name}
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {filtered.length} {filtered.length === 1 ? "solution" : "solutions"}
        {goal !== "all"
          ? ` for ${solutionGoals.find((g) => g.id === goal)?.name.toLowerCase()}`
          : " to build around your business"}
      </p>
      <div className="solution-catalog">
        {filtered.map((s) => (
          <Link
            className="solution-tile"
            href={`/solutions/${s.slug}`}
            key={s.slug}
          >
            <div className="solution-tile-top">
              <span className="icon-box">
                <Icon name={s.icon} />
              </span>
              <ArrowUpRight size={21} />
            </div>
            <span className="solution-kicker">{s.label}</span>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <ul>
              {s.features.slice(0, 2).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <span className="solution-tile-bottom">
              Explore solution{" "}
              <span>{s.price ? `From KES ${s.price}` : "Custom scope"}</span>
            </span>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="solution-empty">
          <Search size={30} />
          <h3>Let’s try a broader search.</h3>
          <p>
            Try “customer”, “website” or “payments”, or tell us what you have in
            mind.
          </p>
          <button
            className="button button-outline"
            onClick={() => {
              setGoal("all");
              setQuery("");
            }}
          >
            Clear filters <X size={16} />
          </button>
          <Link className="text-link" href="/contact">
            Discuss a custom solution <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
      <p className="fine-print">
        Each solution is scoped to your business. Prices shown are indicative
        starting points; integrations, usage and applicable taxes are confirmed
        in your proposal.
      </p>
    </section>
  );
}
