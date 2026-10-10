"use client";

import { useState } from "react";
import { IconCheck } from "./icons";

const cases = [
  {
    team: "Sales",
    headline: "Qualify and route leads the moment they arrive",
    points: [
      "Score new leads against your ICP automatically",
      "Route hot leads to the right rep in under a minute",
      "Log every touch back to your CRM, no manual entry",
    ],
  },
  {
    team: "Support",
    headline: "Triage tickets before a human ever sees them",
    points: [
      "Classify incoming tickets by urgency and topic",
      "Draft first-response replies for agents to review",
      "Escalate anything that smells like an outage instantly",
    ],
  },
  {
    team: "Operations",
    headline: "Keep systems in sync without a nightly script",
    points: [
      "Mirror records across spreadsheets, databases, and tools",
      "Catch broken syncs before they become a data mess",
      "Replace the brittle Zapier chain nobody wants to touch",
    ],
  },
  {
    team: "Finance",
    headline: "Chase invoices and reconcile spend automatically",
    points: [
      "Send payment reminders on a schedule you set",
      "Flag expense anomalies for a human to review",
      "Reconcile incoming payments against open invoices",
    ],
  },
];

export function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
        {cases.map((c, i) => (
          <button
            key={c.team}
            onClick={() => setActive(i)}
            className={`flex-none rounded-lg border-l-2 px-4 py-3 text-left text-sm font-semibold transition-colors lg:w-full ${
              i === active
                ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]"
                : "border-transparent text-[var(--fg-muted)] hover:bg-[var(--surface-tint)]"
            }`}
          >
            {c.team}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">
          {current.team}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
          {current.headline}
        </h3>
        <ul className="mt-6 flex flex-col gap-3">
          {current.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                <IconCheck className="h-3 w-3 text-[var(--primary)]" />
              </span>
              <span className="text-sm leading-6 text-[var(--fg-muted)]">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
