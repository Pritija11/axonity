import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Axonity collects, uses, and protects data for customers using our AI agent and workflow automation platform.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you create an account, we collect your name, email address, and billing details needed to run your workspace and invoice you.",
      "When you build a workflow, we collect the data that flows through it — trigger payloads, the context an AI agent used to make a decision, and the resulting actions — so monitoring, run history, and support can work. You control which systems are connected.",
      "Like most web services, our dashboard and marketing site log IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Account and billing data is used to run your workspace, process payments, and send service-related notices.",
      "Workflow run data powers the run history, debugging, and alerting features described on our Platform page, scoped to your own workspace and nothing else.",
    ],
  },
  {
    heading: "3. What we don't do",
    body: [
      "We don't sell customer data, workflow data, or connected-account data to third parties.",
      "We don't use the data flowing through your workflows to train models of our own without explicit, separate opt-in.",
      "We don't access a connected account beyond what a workflow you built explicitly requests.",
    ],
  },
  {
    heading: "4. Third-party processors",
    body: [
      "We rely on a small number of third-party processors to run the business — a payment processor for billing, an email provider for transactional notices, and cloud infrastructure providers for hosting. Each is bound by its own data-processing terms.",
    ],
  },
  {
    heading: "5. Data retention",
    body: [
      "Workflow run history is retained according to your plan's retention window (7 days to 1 year by default), after which it's automatically purged. Account and billing records are retained for as long as your account is active, plus a limited period for tax obligations.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You can request a copy of the personal data we hold, ask us to correct it, or request deletion of your account and associated data, subject to legal retention requirements. Reach out through the contact details below and we'll respond directly.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll email active account holders before the change takes effect.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about this policy can be sent to hello@axonity.ltd, or by post to Patan, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Tag variant="blue">Legal</Tag>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Axonity collects, how it&apos;s used,
            and what you can do about it.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Effective January 1, 2026
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
