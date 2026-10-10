import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { FlowCTA } from "@/components/FlowCTA";
import { IconMapPin, IconUsers, IconFlow, IconClose, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Axonity is an early-stage automation startup based in Lalitpur, Nepal, building AI agents and workflow automation for teams drowning in repetitive work.",
  alternates: {
    canonical: "/about",
  },
};

const quickFacts = [
  { icon: IconMapPin, label: "Based in Lalitpur" },
  { icon: IconUsers, label: "Small founding team" },
  { icon: IconFlow, label: "Founded 2025" },
];

const before = [
  "A new lead sits in an inbox until someone remembers to check it",
  "Three tabs open just to copy the same record into two systems",
  "A support ticket waits an hour for someone free enough to triage it",
  "The 'automation' is a spreadsheet macro one person understands",
];

const after = [
  "New leads are scored and routed within seconds of arriving",
  "Records sync automatically the moment either system changes",
  "Tickets are triaged and drafted before a human opens them",
  "The workflow is visible, versioned, and owned by the whole team",
];

const principles = [
  {
    title: "Automation should be visible, not a black box",
    description:
      "If you can't see what a workflow did and why, you don't actually trust it — you just hope it's working. Every run is inspectable.",
  },
  {
    title: "Judgment calls need a human option",
    description:
      "An AI agent that's 70% confident shouldn't guess. It should hand off to a person, with full context, not push forward and hope.",
  },
  {
    title: "Small team, direct answers",
    description:
      "Every support message is read by someone who understands the product deeply, not routed through tiers.",
  },
];

const founders = [
  { role: "Engineering", initials: "EN" },
  { role: "Product & AI", initials: "PA" },
  { role: "Operations", initials: "OP" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="blue">About Axonity</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[var(--fg)] md:text-5xl">
              We got tired of watching smart people do copy-paste work.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Axonity is an early-stage automation startup based in
              Lalitpur, Nepal. We build AI agents and workflow automation
              for teams who are done manually moving data between systems
              that should already talk to each other.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-8">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
                  <span className="text-sm text-[var(--fg-muted)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Before / After */}
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Why we started</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              A Tuesday, before and after
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              Every founder on this team has lived the left column. We
              built Axonity to be the right one.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-tint)] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                  Before Axonity
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {before.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <IconClose className="mt-0.5 h-3.5 w-3.5 flex-none text-[var(--danger)]" />
                      <span className="text-sm leading-6 text-[var(--fg-muted)]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-[var(--primary)] bg-[var(--primary-soft)] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--primary)]">
                  After Axonity
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {after.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 flex-none text-[var(--primary)]" />
                      <span className="text-sm leading-6 text-[var(--fg)]">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">How we think</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Principles we build with
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
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

      {/* Founding team */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="teal">Founding team</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              A small team, on purpose
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              We&apos;re deliberately staying small while we work closely
              with our first customers — every person on the team talks
              to users directly.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {founders.map((f, i) => (
              <Reveal key={f.role} delay={i * 80}>
                <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">
                    {f.initials}
                  </div>
                  <p className="text-sm font-semibold text-[var(--fg)]">
                    {f.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FlowCTA
        title="Want to be one of our first customers?"
        description="We're working closely with a small group of early teams. Tell us what's eating your week."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
