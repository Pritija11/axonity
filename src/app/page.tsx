import Link from "next/link";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { LogoStrip } from "@/components/LogoStrip";
import { UseCaseTabs } from "@/components/UseCaseTabs";
import { FlowCTA } from "@/components/FlowCTA";
import { WorkflowCanvas } from "@/components/mocks/WorkflowCanvas";
import { AgentActivityLog } from "@/components/mocks/AgentActivityLog";
import { TriggerBuilder } from "@/components/mocks/TriggerBuilder";
import { IntegrationGrid } from "@/components/mocks/IntegrationGrid";
import {
  IconArrowRight,
  IconBolt,
  IconPlug,
  IconShieldCheck,
  IconClock,
  IconCheck,
} from "@/components/icons";

const heroStats = [
  { value: "2.1M+", label: "workflow runs / month" },
  { value: "99.95%", label: "trigger reliability" },
  { value: "<400ms", label: "median run latency" },
];

const features = [
  {
    icon: IconBolt,
    variant: "blue" as const,
    title: "Trigger on anything",
    description:
      "A new row, a form submission, an incoming email, a webhook, or a schedule — if it can fire an event, it can start a workflow.",
    mock: <TriggerBuilder />,
  },
  {
    icon: IconPlug,
    variant: "teal" as const,
    title: "Connect what you already use",
    description:
      "Hundreds of pre-built integrations, plus a generic webhook and API connector for anything that isn't. No migration, no rip-and-replace.",
    mock: <IntegrationGrid />,
    wide: true,
  },
  {
    icon: IconClock,
    variant: "amber" as const,
    title: "See every run, not just the failures",
    description:
      "A full history of every automation run — what triggered it, what it did, and how long it took — so debugging isn't a guessing game.",
    mock: <AgentActivityLog />,
  },
];

const whyPoints = [
  "AI agents that make judgment calls, not just if-this-then-that rules",
  "Full run history and replay, so a failed step isn't a mystery",
  "Human-in-the-loop approval steps for anything that shouldn't run unsupervised",
  "Version history on every workflow, with one-click rollback",
];

const testimonialQuote =
  "We replaced four separate Zapier chains and a Google Sheet nobody trusted with one Axonity workflow. Our ops lead got two days a week back.";

const faqs = [
  {
    q: "Do I need to know how to code to build a workflow?",
    a: "No. Most workflows are built visually by connecting triggers, conditions, and actions. For anything custom, you can drop in your own code step — but it's optional, not required.",
  },
  {
    q: "What happens when an AI agent isn't sure what to do?",
    a: "You decide. Agents can be configured to pause and wait for human approval on any step you mark as sensitive, instead of guessing and moving on.",
  },
  {
    q: "How is this different from a basic Zapier-style tool?",
    a: "Most automation tools stop at simple if-this-then-that rules. Axonity's AI agents can make judgment calls inside a workflow — qualifying a lead, drafting a reply, deciding which branch to take — not just pass data through unchanged.",
  },
  {
    q: "Can I see exactly what an automation did after the fact?",
    a: "Yes. Every run is logged with its full input, output, and timing, down to the individual step. Nothing runs silently in the background unexplained.",
  },
  {
    q: "Is Axonity a new company?",
    a: "Yes — we're an early-stage automation startup based in Lalitpur, Nepal. We're working closely with our first customers before opening up more broadly.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="node-field" aria-hidden />
        <div className="canvas-glow" aria-hidden />
        <Container className="relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Tag variant="blue">AI Agents &amp; Automation</Tag>
              <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.08] tracking-tight text-[var(--fg)] md:text-6xl">
                The work your team shouldn&apos;t have to do by hand.
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
                Axonity connects the tools you already use and runs the
                repetitive parts of your business for you — AI agents that
                qualify leads, triage tickets, and move data between
                systems, with a human in the loop wherever you want one.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact">
                  Start automating
                  <IconArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/platform" variant="outline">
                  See the platform
                </Button>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--fg)]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-[var(--fg-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <WorkflowCanvas />
            </Reveal>
          </div>
        </Container>
      </section>

      <LogoStrip />

      {/* Use case tabs */}
      <section className="border-b border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">Built for every team</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              One platform, four very different Mondays
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              The repetitive work looks different depending on where you
              sit. Axonity adapts to what your team actually needs
              automated, not a generic template.
            </p>
          </Reveal>

          <div className="mt-12">
            <UseCaseTabs />
          </div>
        </Container>
      </section>

      {/* Feature showcase */}
      <section className="py-24">
        <Container className="flex flex-col gap-24">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div
                className={`grid grid-cols-1 items-center gap-12 ${
                  f.wide ? "" : "lg:grid-cols-2"
                }`}
              >
                <div className={f.wide ? "mb-8" : ""}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <f.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--fg)] md:text-3xl">
                    {f.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
                    {f.description}
                  </p>
                </div>
                <div className={f.wide ? "" : "flex justify-center"}>
                  {f.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Why AI agents, not just rules */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <Tag variant="amber">Why Axonity</Tag>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Automation that can actually make a call
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Simple automation tools move data from A to B. The moment a
              decision is involved — is this lead worth a reply, is this
              ticket urgent — they fall apart. Axonity&apos;s agents are
              built to handle exactly that gap, without giving up
              visibility or control.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="flex flex-col gap-4">
              {whyPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <IconCheck className="h-3 w-3 text-[var(--primary)]" />
                  </span>
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl font-semibold leading-[1.4] tracking-tight text-[var(--fg)] md:text-3xl">
              &ldquo;{testimonialQuote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--primary-soft)]" />
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--fg)]">
                  Head of Revenue Operations
                </p>
                <p className="text-xs text-[var(--fg-muted)]">
                  Mesh Analytics
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Integrations teaser */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Tag variant="teal">Integrations</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Plugs into the stack you already run
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              Hundreds of pre-built connections, with a generic webhook
              and API step for everything else.
            </p>
            <Link
              href="/integrations"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
            >
              Browse all integrations
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Trust / security */}
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
              <IconShieldCheck className="h-5 w-5 text-[var(--primary)]" />
            </span>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Access control that matches how your team actually works
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Workflows are scoped per workspace, credentials are
              encrypted at rest, and every connected account can be
              revoked in one click — no shared logins passed around in a
              spreadsheet.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <ul className="flex flex-col gap-4">
                {[
                  "Per-workspace credential isolation",
                  "Encrypted connection storage",
                  "Audit log on every workflow change",
                  "Role-based access for teammates",
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

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">Questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you connect your first workflow
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
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
        title="Your first workflow can be live in ten minutes."
        description="No procurement call, no lengthy onboarding — connect a trigger, pick an action, and watch it run."
        buttonLabel="Start automating"
        buttonHref="/contact"
      />
    </>
  );
}
