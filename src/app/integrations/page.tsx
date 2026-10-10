import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { FlowCTA } from "@/components/FlowCTA";
import { IntegrationsExplorer } from "./IntegrationsExplorer";
import {
  IconPlug,
  IconCheck,
  IconBolt,
  IconLayers,
  IconMessageSquare,
  IconUsers,
  IconGrid,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Hundreds of pre-built integrations plus a generic webhook and API connector — see what Axonity connects to.",
  alternates: {
    canonical: "/integrations",
  },
};

const spotlights = [
  {
    name: "CRM Core",
    category: "CRM & Sales",
    color: "#157a44",
    icon: IconUsers,
    description:
      "Trigger workflows the moment a deal changes stage, a contact is created, or a field updates. Agents can read full deal context before deciding how to route a lead or draft a follow-up.",
  },
  {
    name: "Team Chat",
    category: "Communication",
    color: "#2f5fff",
    icon: IconMessageSquare,
    description:
      "Post updates, route approvals, or let an agent reply directly in a channel or thread. Most teams use this as the place a workflow surfaces for a human to review.",
  },
  {
    name: "Spreadsheets",
    category: "Productivity",
    color: "#157a44",
    icon: IconGrid,
    description:
      "Read and write rows in real time, which makes it a common starting point for a first workflow — a new row can trigger an entire pipeline without touching a database.",
  },
];

const connectMethods = [
  {
    icon: IconPlug,
    title: "Pre-built connectors",
    description:
      "Authenticate once, then pick from ready-made triggers and actions for that app — no API docs required. This covers most of what a workflow needs.",
  },
  {
    icon: IconBolt,
    title: "Webhooks",
    description:
      "Any system that can send an HTTP request can trigger a workflow, and any workflow can call out to a webhook as its final action — in or out, no connector needed.",
  },
  {
    icon: IconLayers,
    title: "REST API with custom auth",
    description:
      "For internal tools or anything without a pre-built connector, point a step at any REST endpoint with API key, OAuth, or basic auth.",
  },
];

const integrationFaqs = [
  {
    q: "Do integrations cost extra on top of my plan?",
    a: "No. Every pre-built connector, the webhook trigger/action, and the REST API connector are included on every plan — pricing is based on workflow runs, not which integrations you use.",
  },
  {
    q: "Can one workflow use more than one integration?",
    a: "Yes, and most real workflows do — a typical pipeline might pull from a form tool, check a CRM, run an AI agent, then write to a spreadsheet and post to chat, all in one run.",
  },
  {
    q: "What authentication methods are supported?",
    a: "OAuth for apps that support it, API keys, and basic auth for the generic REST connector. Credentials are encrypted at rest and scoped to your workspace.",
  },
  {
    q: "How long does a custom integration request usually take?",
    a: "Most managed integration requests are scoped within a day and built within a week, depending on how well-documented the target API is.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="teal">Integrations</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
              Connect to what your team already runs on.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Hundreds of pre-built connections across communication,
              sales, finance, and developer tooling — plus a generic
              webhook and REST connector for anything that isn&apos;t on
              the list yet.
            </p>
          </Reveal>

          <IntegrationsExplorer />
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="blue">Popular this month</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              A closer look at three favorites
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {spotlights.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-lg text-white"
                      style={{ background: s.color }}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--fg)]">
                        {s.name}
                      </p>
                      <p className="text-xs text-[var(--fg-faint)]">
                        {s.category}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
              <IconPlug className="h-5 w-5 text-[var(--primary)]" />
            </span>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Don&apos;t see your tool on the list?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              If it has a REST API or can send a webhook, Axonity can
              connect to it. Most custom connections take a support
              engineer under a day to wire up.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <ul className="flex flex-col gap-4">
                {[
                  "Generic webhook trigger and action steps",
                  "REST API connector with custom auth",
                  "Request a managed integration from our team",
                  "Open connector spec for internal tools",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <IconCheck className="h-4 w-4 flex-none text-[var(--primary)]" />
                    <span className="text-sm text-[var(--fg-muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">How connections work</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Three ways to connect, depending on what you need
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {connectMethods.map((m, i) => (
              <Reveal key={m.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <m.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Integration questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you connect your first app
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
            {integrationFaqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-[var(--fg)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FlowCTA
        title="Can't find an integration? We'll build it."
        description="Tell us what you're trying to connect and we'll tell you honestly how fast it can happen."
        buttonLabel="Request an integration"
        buttonHref="/contact"
      />
    </>
  );
}
