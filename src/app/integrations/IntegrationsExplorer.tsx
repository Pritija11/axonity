"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  IconSearch,
  IconMail,
  IconMessageSquare,
  IconUsers,
  IconUser,
  IconGrid,
  IconCalendar,
  IconFormInput,
  IconDatabase,
  IconCloud,
  IconCreditCard,
  IconTrendingUp,
  IconFileText,
  IconPhone,
  IconVideo,
  IconColumns,
  IconReceipt,
  IconCalculator,
  IconSend,
  IconInbox,
  IconBriefcase,
  IconCode,
  IconAlertTriangle,
  IconClock,
  IconBuilding,
  IconBolt,
  IconLayers,
  IconCheck,
} from "@/components/icons";

const categories = [
  "All",
  "Communication",
  "CRM & Sales",
  "Productivity",
  "Finance",
  "Developer tools",
  "Data & Storage",
];

const apps = [
  { name: "Team Chat", category: "Communication", color: "#2f5fff", icon: IconMessageSquare },
  { name: "Email Suite", category: "Communication", color: "#7c4fe0", icon: IconMail },
  { name: "SMS Gateway", category: "Communication", color: "#d98c0a", icon: IconPhone },
  { name: "Video Calls", category: "Communication", color: "#0f9488", icon: IconVideo },
  { name: "CRM Core", category: "CRM & Sales", color: "#157a44", icon: IconUsers },
  { name: "Lead Forms", category: "CRM & Sales", color: "#c23468", icon: IconFormInput },
  { name: "Pipeline Board", category: "CRM & Sales", color: "#2f5fff", icon: IconColumns },
  { name: "Contact Sync", category: "CRM & Sales", color: "#7c4fe0", icon: IconUser },
  { name: "Spreadsheets", category: "Productivity", color: "#157a44", icon: IconGrid },
  { name: "Docs", category: "Productivity", color: "#2f5fff", icon: IconFileText },
  { name: "Calendar", category: "Productivity", color: "#d98c0a", icon: IconCalendar },
  { name: "Task Board", category: "Productivity", color: "#7c4fe0", icon: IconColumns },
  { name: "Forms Builder", category: "Productivity", color: "#c23468", icon: IconFormInput },
  { name: "Invoicing", category: "Finance", color: "#157a44", icon: IconReceipt },
  { name: "Payments", category: "Finance", color: "#0f9488", icon: IconCreditCard },
  { name: "Expense Tracker", category: "Finance", color: "#d98c0a", icon: IconTrendingUp },
  { name: "Accounting Suite", category: "Finance", color: "#2f5fff", icon: IconCalculator },
  { name: "Webhooks", category: "Developer tools", color: "#4e5578", icon: IconBolt },
  { name: "REST API", category: "Developer tools", color: "#1f44d6", icon: IconLayers },
  { name: "Custom Code Step", category: "Developer tools", color: "#7c4fe0", icon: IconCode },
  { name: "Cloud Storage", category: "Data & Storage", color: "#4e5578", icon: IconCloud },
  { name: "Database Connector", category: "Data & Storage", color: "#1f44d6", icon: IconDatabase },
  { name: "Analytics Suite", category: "Data & Storage", color: "#7c4fe0", icon: IconTrendingUp },
  { name: "Data Warehouse", category: "Data & Storage", color: "#0f9488", icon: IconLayers },
  { name: "Helpdesk", category: "Communication", color: "#c23468", icon: IconInbox },
  { name: "Push Notifications", category: "Communication", color: "#2f5fff", icon: IconSend },
  { name: "Social Inbox", category: "Communication", color: "#7c4fe0", icon: IconInbox },
  { name: "Deal Rooms", category: "CRM & Sales", color: "#0f9488", icon: IconBriefcase },
  { name: "Quote Builder", category: "CRM & Sales", color: "#d98c0a", icon: IconFileText },
  { name: "Customer Portal", category: "CRM & Sales", color: "#157a44", icon: IconBriefcase },
  { name: "Project Tracker", category: "Productivity", color: "#2f5fff", icon: IconColumns },
  { name: "Time Tracking", category: "Productivity", color: "#c23468", icon: IconClock },
  { name: "E-signature", category: "Productivity", color: "#7c4fe0", icon: IconUser },
  { name: "Payroll", category: "Finance", color: "#157a44", icon: IconCalculator },
  { name: "Tax Filing", category: "Finance", color: "#4e5578", icon: IconReceipt },
  { name: "Banking Feed", category: "Finance", color: "#2f5fff", icon: IconBuilding },
  { name: "CI/CD Pipeline", category: "Developer tools", color: "#1f44d6", icon: IconCode },
  { name: "Error Tracking", category: "Developer tools", color: "#c23468", icon: IconAlertTriangle },
  { name: "Feature Flags", category: "Developer tools", color: "#d98c0a", icon: IconCheck },
  { name: "Object Storage", category: "Data & Storage", color: "#157a44", icon: IconCloud },
  { name: "Vector Database", category: "Data & Storage", color: "#7c4fe0", icon: IconDatabase },
  { name: "ETL Pipeline", category: "Data & Storage", color: "#1f44d6", icon: IconLayers },
];

export function IntegrationsExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter((app) => {
      const matchesCategory =
        activeCategory === "All" || app.category === activeCategory;
      const matchesQuery = !q || app.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <>
      <Reveal delay={80}>
        <div className="mt-10 flex max-w-xl items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3.5 focus-within:border-[var(--primary)]">
          <IconSearch className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${apps.length}+ integrations…`}
            className="w-full bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="flex-none text-xs font-semibold text-[var(--fg-faint)] hover:text-[var(--fg)]"
            >
              Clear
            </button>
          )}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                c === activeCategory
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--on-primary)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--fg-muted)] hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-6 text-xs text-[var(--fg-faint)]">
          {filtered.length} integration{filtered.length === 1 ? "" : "s"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {query ? ` matching “${query}”` : ""}
        </p>
      </Reveal>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--border-strong)] py-16 text-center">
            <p className="text-sm font-semibold text-[var(--fg)]">
              No integrations match that search.
            </p>
            <p className="mt-2 text-sm text-[var(--fg-muted)]">
              Try a different term, or reach out — if it has a REST API or
              webhook, we can probably connect to it.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-2 text-xs font-semibold text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((app) => (
              <div
                key={app.name}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-shadow hover:shadow-md"
              >
                <span
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-lg text-white"
                  style={{ background: app.color }}
                >
                  <app.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--fg)]">
                    {app.name}
                  </p>
                  <p className="truncate text-xs text-[var(--fg-faint)]">
                    {app.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
