import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { FlowCTA } from "@/components/FlowCTA";
import { WorkflowCanvas } from "@/components/mocks/WorkflowCanvas";
import { TriggerBuilder } from "@/components/mocks/TriggerBuilder";
import { AgentActivityLog } from "@/components/mocks/AgentActivityLog";
import {
  IconBolt,
  IconPlug,
  IconRobot,
  IconFlow,
  IconClock,
  IconShieldCheck,
  IconCheck,
  IconClose,
  IconUsers,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Trigger, connect, decide, act, and observe — the five stages of how Axonity automates work, and the AI agents that run inside each one.",
  alternates: {
    canonical: "/platform",
  },
};

const stages = [
  {
    index: "01",
    icon: IconBolt,
    title: "Trigger",
    description:
      "A workflow starts from something real — a new form submission, an incoming email, a database change, a webhook, or a schedule. No polling, no delay waiting for the next sync.",
    bullets: [
      "Event-based triggers fire in real time",
      "Scheduled triggers down to the minute",
      "Manual triggers for one-off runs",
    ],
  },
  {
    index: "02",
    icon: IconPlug,
    title: "Connect",
    description:
      "Once triggered, a workflow can reach into any connected system — pull a record, check a condition, fetch context an AI agent will need to make a decision later in the pipeline.",
    bullets: [
      "Hundreds of pre-built app connections",
      "Generic REST and webhook connectors for anything else",
      "Credentials encrypted and scoped per workspace",
    ],
  },
  {
    index: "03",
    icon: IconRobot,
    title: "Decide",
    description:
      "This is where Axonity differs from a basic automation tool. An AI agent can read the context gathered so far and make an actual judgment call — not just pass data through unchanged.",
    bullets: [
      "Agents configured with your own rules and examples",
      "Confidence thresholds that route to a human when unsure",
      "Every decision logged with the reasoning behind it",
    ],
  },
  {
    index: "04",
    icon: IconFlow,
    title: "Act",
    description:
      "The workflow takes the action — sending a message, updating a record, creating a ticket, calling an API — in whichever connected system needs to receive it.",
    bullets: [
      "Multiple parallel actions from a single decision",
      "Conditional branching based on the outcome",
      "Built-in retries for transient failures",
    ],
  },
  {
    index: "05",
    icon: IconClock,
    title: "Observe",
    description:
      "Every run is recorded — trigger, context, decision, action, and timing — so when something looks wrong, you're debugging with real data instead of guessing.",
    bullets: [
      "Full run history, searchable by workflow or outcome",
      "Replay any past run against an updated workflow",
      "Alerts routed to Slack, email, or a webhook on failure",
    ],
  },
];

const specs = [
  { value: "<400ms", label: "Median trigger-to-run latency" },
  { value: "10k+", label: "Concurrent workflow runs per workspace" },
  { value: "3x", label: "Automatic retries on transient failures" },
  { value: "99.95%", label: "Trigger reliability, last 90 days" },
];

const comparisonRows = [
  {
    feature: "Moves data between systems",
    rules: true,
    agents: true,
  },
  {
    feature: "Follows a fixed if-this-then-that path",
    rules: true,
    agents: false,
  },
  {
    feature: "Makes a judgment call from context",
    rules: false,
    agents: true,
  },
  {
    feature: "Breaks silently when the input looks different",
    rules: true,
    agents: false,
  },
  {
    feature: "Hands off to a human when it isn't confident",
    rules: false,
    agents: true,
  },
  {
    feature: "Explains the reasoning behind its decision",
    rules: false,
    agents: true,
  },
];

const trustPoints = [
  {
    icon: IconShieldCheck,
    title: "Confidence thresholds you set",
    description:
      "Every agent step has a configurable confidence floor. Below it, the workflow pauses for a human instead of guessing and moving on.",
  },
  {
    icon: IconUsers,
    title: "Human approval on anything sensitive",
    description:
      "Mark any step — sending an email, charging a card, deleting a record — as requiring sign-off before it runs, no matter how confident the agent is.",
  },
  {
    icon: IconClock,
    title: "Full audit trail, not a summary",
    description:
      "Every decision an agent makes is logged with the exact input it saw and the reasoning it produced, searchable months later.",
  },
];

const devPoints = [
  "REST API for triggering, pausing, and inspecting any workflow",
  "Custom code steps in JavaScript or Python when a visual step isn't enough",
  "Signed webhooks with replay protection for inbound triggers",
  "Sandbox workspace for testing workflow changes before they go live",
];

const platformFaqs = [
  {
    q: "What happens if a step in the middle of a workflow fails?",
    a: "The workflow retries automatically up to three times with backoff. If it still fails, the run is marked failed, logged in full, and an alert goes to whichever channel you've configured — nothing fails silently.",
  },
  {
    q: "Can an AI agent step call our own internal systems?",
    a: "Yes, through the REST and webhook connectors, or a custom code step if you need something more specific than a standard HTTP call.",
  },
  {
    q: "How do you prevent an agent from doing something irreversible by mistake?",
    a: "Confidence thresholds and human-approval steps are the two main controls. You can also run any workflow in a sandbox workspace against real data without it touching production systems.",
  },
  {
    q: "Is there a limit to how complex a workflow can get?",
    a: "No hard limit on steps or branches. In practice, most workflows that get too complex to reason about are better split into two connected ones — the platform supports that pattern directly.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="node-field" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Tag variant="blue">Platform</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
              Five stages. One pipeline. Every workflow runs through it.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Axonity isn&apos;t a grab-bag of disconnected automation
              tools. Every workflow — simple or complex — moves through
              the same five stages, which is exactly what makes a
              three-month-old automation still debuggable today.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col">
            {stages.map((s, i) => (
              <Reveal key={s.index} delay={i * 50}>
                <div className="grid grid-cols-1 gap-6 border-l-2 border-[var(--border-strong)] py-10 pl-8 last:pb-0 md:grid-cols-[3rem_1fr] md:gap-10">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <span className="font-mono text-xs text-[var(--primary)]">
                      {s.index}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                      <s.icon className="h-5 w-5 text-[var(--primary)]" />
                    </span>
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)]">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
                      {s.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-baseline gap-2 text-xs text-[var(--fg-muted)]"
                        >
                          <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full bg-[var(--primary)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">See it in action</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              What a real pipeline looks like
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <WorkflowCanvas />
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-8">
              <TriggerBuilder />
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="mt-8">
              <AgentActivityLog />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Technical specs */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {specs.map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--fg)]">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Rules vs agents */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">Why it&apos;s different</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Rule-based automation vs. an Axonity agent
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              Most automation tools are good at the &ldquo;Connect&rdquo;
              stage and stop there. The difference shows up the moment a
              workflow needs to decide something, not just move it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)] text-left">
                    <th className="py-3 pr-4 font-medium text-[var(--fg-faint)]" />
                    <th className="py-3 px-4 text-xs font-semibold text-[var(--fg-faint)]">
                      Rule-based tools
                    </th>
                    <th className="py-3 pl-4 text-xs font-semibold text-[var(--primary)]">
                      Axonity agents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[var(--border)]"
                    >
                      <td className="py-3.5 pr-4 text-[var(--fg)]">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4">
                        {row.rules ? (
                          <IconCheck className="h-4 w-4 text-[var(--fg-muted)]" />
                        ) : (
                          <IconClose className="h-4 w-4 text-[var(--fg-faint)]" />
                        )}
                      </td>
                      <td className="py-3.5 pl-4">
                        {row.agents ? (
                          <IconCheck className="h-4 w-4 text-[var(--primary)]" />
                        ) : (
                          <IconClose className="h-4 w-4 text-[var(--fg-faint)]" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust & safety */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="teal">Built to be trusted</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Autonomy with a leash you control
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              Giving an AI agent the ability to act is only safe if you
              can see what it did, stop it from doing the wrong thing, and
              hand off the moment it isn&apos;t sure.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {trustPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <p.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* For developers */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
              <IconPlug className="h-5 w-5 text-[var(--primary)]" />
            </span>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Visual by default, code when you need it
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Most workflows never need a line of code. When one does —
              a transform the visual builder can&apos;t express, a call
              to an internal service — the platform doesn&apos;t fight
              you on it.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <ul className="flex flex-col gap-4">
                {devPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                    <span className="text-sm leading-6 text-[var(--fg-muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Platform FAQ */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Technical questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you wire up something complex
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
            {platformFaqs.map((item, i) => (
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
        title="Want to see your own workflow mapped out?"
        description="Tell us the systems you're trying to connect and we'll sketch the pipeline before you commit to anything."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
