"use client";
import { useState } from "react";
import { pricing } from "@/lib/content";
const categories = [
  "AI & automation",
  "Web & software",
  "Data & intelligence",
  "Advisory & training",
];
export default function PricingCatalog() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <div className="catalog">
      <div className="filter-buttons" aria-label="Pricing category">
        {categories.map((x) => (
          <button
            key={x}
            aria-pressed={x === category}
            onClick={() => setCategory(x)}
          >
            {x}
          </button>
        ))}
      </div>
      <div
        className="table-scroll"
        tabIndex={0}
        role="region"
        aria-label={`${category} pricing in Kenyan shillings`}
      >
        <table>
          <caption>{category} · All prices in KES</caption>
          <thead>
            <tr>
              <th scope="col">Solution</th>
              <th scope="col">Starter / entry</th>
              <th scope="col">Growth / scope</th>
              <th scope="col">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {pricing
              .filter((p) => p.category === category)
              .map((p) => (
                <tr key={p.name}>
                  <th scope="row">{p.name}</th>
                  <td>{p.starter}</td>
                  <td>{p.growth}</td>
                  <td>{p.enterprise}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
