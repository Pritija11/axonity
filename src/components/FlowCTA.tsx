import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconBolt, IconArrowRight } from "./icons";

export function FlowCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] py-24">
      <div className="node-field" aria-hidden />
      <div className="canvas-glow" aria-hidden />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--fg)] md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
            {description}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center gap-0 sm:flex-row sm:gap-0">
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 shadow-sm">
              <IconBolt className="h-4 w-4 text-[var(--accent-amber)]" />
              <span className="text-sm font-semibold text-[var(--fg)]">
                Trigger: You click below
              </span>
            </div>

            <div className="my-2 h-6 w-px border-l-2 border-dashed border-[var(--border-strong)] sm:my-0 sm:h-px sm:w-10 sm:border-l-0 sm:border-t-2" />

            <Link
              href={buttonHref}
              className="flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--on-primary)] shadow-md shadow-[var(--primary)]/30 transition-colors hover:bg-[var(--primary-dark)]"
            >
              {buttonLabel}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
