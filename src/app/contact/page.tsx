import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin, IconBolt, IconUsers, IconCheck } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Axonity about AI agents, workflow automation, or connecting your business systems.",
  alternates: {
    canonical: "/contact",
  },
};

const contactDetails = [
  { icon: IconMail, label: "Email", value: "hello@axonity.ltd", href: "mailto:hello@axonity.ltd" },
  { icon: IconPhone, label: "Phone", value: "+977 981-3456721", href: "tel:+9779813456721" },
  { icon: IconMapPin, label: "Office", value: "Patan, Lalitpur, Nepal", href: undefined },
];

const steps = [
  { icon: IconBolt, label: "Message received" },
  { icon: IconUsers, label: "Reviewed by founder" },
  { icon: IconCheck, label: "Direct reply sent" },
];

const faqs = [
  {
    q: "How fast do you actually reply?",
    a: "Almost always within a business day. There's no ticket queue sitting between your message and someone who can answer it.",
  },
  {
    q: "Can we get a demo built around our own workflow?",
    a: "Yes — tell us the systems and process you're trying to automate, and we'll build a working example against it before any call.",
  },
  {
    q: "Do you offer implementation help, not just the platform?",
    a: "For Team and Scale plans, yes. Our team can help design and build your first few workflows alongside you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="blue">Contact</Tag>
            <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s talk about what you&apos;re automating.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Whether it&apos;s one repetitive task or a whole department&apos;s
              worth of manual work, tell us what you&apos;re dealing with
              and we&apos;ll reply with a real answer — not a sales funnel.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                    Reach us directly
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    {contactDetails.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                          <c.icon className="h-4 w-4 text-[var(--primary)]" />
                        </span>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="mt-1.5 text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <span className="mt-1.5 text-sm text-[var(--fg)]">
                            {c.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                    What happens next
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    {steps.map((s, i) => (
                      <div key={s.label} className="flex flex-1 items-center">
                        <div className="flex flex-col items-center gap-2 text-center">
                          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                            <s.icon className="h-4 w-4 text-[var(--primary)]" />
                          </span>
                          <span className="max-w-[72px] text-[11px] font-medium leading-tight text-[var(--fg-muted)]">
                            {s.label}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className="mx-1 mb-6 h-px flex-1 border-t-2 border-dashed border-[var(--border-strong)]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Before you write in</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
              Quick answers
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
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
    </>
  );
}
