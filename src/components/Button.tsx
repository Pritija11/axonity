import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] shadow-sm shadow-[var(--primary)]/25 hover:bg-[var(--primary-dark)]",
  outline:
    "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  ghost: "text-[var(--fg-muted)] hover:text-[var(--fg)]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
