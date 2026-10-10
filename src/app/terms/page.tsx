import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of Axonity's AI agent and workflow automation platform.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. Using Axonity",
    body: [
      "These terms apply from the moment you create an Axonity account. By building or running a workflow, you agree to use the platform in a way that's legal and doesn't abuse shared infrastructure.",
    ],
  },
  {
    heading: "2. Acceptable use",
    body: [
      "Workflows may not be used to send unsolicited bulk messaging, access systems without authorization, or automate activity that violates the terms of the third-party services you connect.",
      "We don't monitor workflow contents proactively, but we do act on abuse reports and will suspend a workspace that's actively harming platform stability or violating these terms.",
    ],
  },
  {
    heading: "3. Account responsibilities",
    body: [
      "You're responsible for keeping your account credentials and connected-account authorizations secure, and for activity under your account.",
      "You're responsible for the accuracy and legality of the workflows you build, including any AI agent instructions you configure.",
    ],
  },
  {
    heading: "4. Billing",
    body: [
      "Paid plans are billed monthly based on included workflow runs. Running beyond your included volume may incur additional charges as described on our Pricing page. Cancelling stops billing at the end of the current period.",
    ],
  },
  {
    heading: "5. Service availability",
    body: [
      "We design for high trigger and run reliability, but we don't promise a specific uptime percentage in these terms. For a formal SLA on a production workflow, contact us and we'll work one out directly.",
      "Scheduled maintenance that could affect availability is communicated in advance by email wherever possible.",
    ],
  },
  {
    heading: "6. AI agent decisions",
    body: [
      "AI agent steps act based on the instructions and data you configure. You're responsible for reviewing and testing agent behavior before relying on it for decisions with real consequences, and for setting human-approval steps where appropriate.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "Axonity is provided on an as-is basis. To the extent permitted by law, we aren't liable for indirect, incidental, or consequential damages arising from use of the service, beyond the amount you've paid us in the three months prior to a claim.",
    ],
  },
  {
    heading: "8. Termination",
    body: [
      "You can close your account at any time from the dashboard. We may suspend or terminate a workspace for a violation of the acceptable use terms above.",
    ],
  },
  {
    heading: "9. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of the service will be handled in the courts of Kathmandu, Nepal.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active account holders by email before the change takes effect.",
    ],
  },
  {
    heading: "11. Contact",
    body: [
      "Questions about these terms can be sent to hello@axonity.ltd, or by post to Patan, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Tag variant="blue">Legal</Tag>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Axonity platform.
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
