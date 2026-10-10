import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FlowCTA } from "@/components/FlowCTA";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Axonity pricing — plans that scale with workflow runs, from a free starter tier to custom plans for teams running AI agents at scale.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    runs: "1,000 runs / month",
    description: "For a first automation you want to prove out.",
    specs: [
      "3 active workflows",
      "Core integrations included",
      "7-day run history",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    runs: "25,000 runs / month",
    description: "For teams running automation across multiple functions.",
    specs: [
      "Unlimited active workflows",
      "AI agent steps included",
      "90-day run history",
      "Role-based access for teammates",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    runs: "Volume pricing",
    description: "For high-volume automation and custom security needs.",
    specs: [
      "Unlimited runs, volume-priced",
      "Dedicated AI agent capacity",
      "1-year run history",
      "SSO and audit logs",
      "Dedicated account contact",
    ],
  },
];

const comparisonGroups = [
  {
    heading: "Core",
    rows: [
      { feature: "Active workflows", starter: "3", team: "Unlimited", scale: "Unlimited" },
      { feature: "Monthly runs included", starter: "1,000", team: "25,000", scale: "Custom" },
      { feature: "Run history", starter: "7 days", team: "90 days", scale: "1 year" },
    ],
  },
  {
    heading: "AI Agents",
    rows: [
      { feature: "AI agent steps", starter: false, team: true, scale: true },
      { feature: "Custom agent instructions", starter: false, team: true, scale: true },
      { feature: "Confidence-based human handoff", starter: false, team: true, scale: true },
    ],
  },
  {
    heading: "Collaboration & security",
    rows: [
      { feature: "Teammates", starter: "1", team: "Up to 10", scale: "Unlimited" },
      { feature: "Role-based access", starter: false, team: true, scale: true },
      { feature: "SSO / SAML", starter: false, team: false, scale: true },
      { feature: "Audit log", starter: false, team: true, scale: true },
    ],
  },
];

const faqs = [
  {
    q: "What counts as a 'run'?",
    a: "One complete execution of a workflow, from trigger to its final action, regardless of how many steps are inside it.",
  },
  {
    q: "What happens if we go over our included runs?",
    a: "We'll notify you before anything is throttled. Most teams either upgrade a tier or add a volume block rather than hit a hard wall mid-month.",
  },
  {
    q: "Is there a discount for nonprofits or early-stage startups?",
    a: "Yes — reach out and tell us what you're building. We keep a handful of discounted seats open for early-stage teams each quarter.",
  },
  {
    q: "Can we start on Starter and upgrade without rebuilding workflows?",
    a: "Yes. Every plan uses the same workflow engine, so upgrading is a billing change, not a migration project.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="blue">Pricing</Tag>
            <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
              Priced for how automation actually scales.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              No per-seat pricing that punishes you for looping in more of
              the team. Plans scale with how many workflow runs you
              actually use.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    plan.featured
                      ? "border-[var(--primary)] bg-[var(--primary-soft)]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[var(--primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--on-primary)]">
                      Most popular
                    </span>
                  )}
                  <p className="text-sm font-semibold text-[var(--fg)]">
                    {plan.name}
                  </p>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--fg)]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[var(--fg-muted)]">
                      {plan.period}
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[var(--primary)]">
                    {plan.runs}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {plan.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <IconCheck className="h-4 w-4 flex-none text-[var(--primary)]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={plan.featured ? "primary" : "outline"}
                    className="mt-7"
                  >
                    {plan.name === "Scale" ? "Talk to sales" : "Start for free"}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">Compare plans</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Every detail, grouped by what it does
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10">
            {comparisonGroups.map((group, gi) => (
              <Reveal key={group.heading} delay={gi * 60}>
                <div className="overflow-x-auto">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                    {group.heading}
                  </p>
                  <table className="w-full min-w-[520px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border-strong)] text-left">
                        <th className="py-2.5 pr-4 font-medium text-[var(--fg-faint)]" />
                        <th className="py-2.5 px-4 text-xs font-semibold text-[var(--fg-faint)]">
                          Starter
                        </th>
                        <th className="py-2.5 px-4 text-xs font-semibold text-[var(--primary)]">
                          Team
                        </th>
                        <th className="py-2.5 pl-4 text-xs font-semibold text-[var(--fg-faint)]">
                          Scale
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-b border-[var(--border)]"
                        >
                          <td className="py-3 pr-4 text-[var(--fg)]">
                            {row.feature}
                          </td>
                          {[row.starter, row.team, row.scale].map((cell, i) => (
                            <td
                              key={i}
                              className={`py-3 px-4 text-[var(--fg-muted)] ${
                                i === 1 ? "bg-[var(--primary-soft)]/40" : ""
                              }`}
                            >
                              {typeof cell === "boolean" ? (
                                cell ? (
                                  <IconCheck className="h-4 w-4 text-[var(--primary)]" />
                                ) : (
                                  <span className="text-[var(--fg-faint)]">
                                    —
                                  </span>
                                )
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="teal">Billing questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you pick a plan
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
        title="Not sure which plan fits your volume?"
        description="Tell us roughly how many workflow runs you're expecting a month and we'll recommend a plan directly."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
