type Variant = "blue" | "violet" | "teal" | "amber";

const variants: Record<Variant, string> = {
  blue: "tag-blue",
  violet: "tag-violet",
  teal: "tag-teal",
  amber: "tag-amber",
};

export function Tag({
  children,
  variant = "blue",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
