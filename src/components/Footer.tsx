import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { IconMail, IconPhone, IconMapPin } from "./icons";

const platformLinks = ["AI Agents", "Workflow Builder", "Integrations", "Triggers & Actions"];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)] text-[var(--fg-muted)]">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Axonity"
              width={32}
              height={32}
              className="h-8 w-8 flex-none"
            />
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
              axonity
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            AI agents and workflow automation that connect the tools your
            team already uses — built for the repetitive work nobody wants
            to do by hand.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-[var(--fg)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/platform" className="hover:text-[var(--fg)]">
                Platform
              </Link>
            </li>
            <li>
              <Link href="/integrations" className="hover:text-[var(--fg)]">
                Integrations
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-[var(--fg)]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--fg)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--fg)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Platform
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {platformLinks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a
                href="mailto:hello@axonity.ltd"
                className="hover:text-[var(--fg)]"
              >
                hello@axonity.ltd
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a href="tel:+9779813456721" className="hover:text-[var(--fg)]">
                +977 981-3456721
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Patan, Lalitpur 44700, Nepal</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-4 py-6 text-xs text-[var(--fg-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Axonity. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--fg)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--fg)]">
              Terms of Service
            </Link>
            <p className="hidden sm:block">
              Automation infrastructure, built from Lalitpur.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
