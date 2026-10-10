import { Container } from "./Container";
import { Reveal } from "./Reveal";

const companies = [
  "Fernlight",
  "Quillbase",
  "Northwind Labs",
  "Vantapay",
  "Cedarloop",
  "Mesh Analytics",
  "Haloform",
  "Driftline",
];

export function LogoStrip() {
  return (
    <section className="border-b border-[var(--border)] py-12">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-faint)]">
            Automating workflows for teams at
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((c) => (
              <span
                key={c}
                className="text-sm font-semibold text-[var(--fg-muted)]"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
