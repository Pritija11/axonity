export function TriggerBuilder() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(16,20,43,0.18)]">
      <div className="border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-semibold text-[var(--fg)]">
          Build a trigger
        </span>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] text-xs font-bold text-[var(--primary)]">
            IF
          </span>
          <div className="flex-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]">
            New row added in{" "}
            <span className="font-semibold text-[var(--primary)]">
              Leads sheet
            </span>
          </div>
        </div>

        <div className="ml-3.5 h-5 w-px bg-[var(--border-strong)]" />

        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--surface-tint)] text-xs font-bold text-[var(--fg-muted)]">
            AND
          </span>
          <div className="flex-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]">
            Company size{" "}
            <span className="font-semibold text-[var(--primary)]">
              &gt; 50
            </span>
          </div>
        </div>

        <div className="ml-3.5 h-5 w-px bg-[var(--border-strong)]" />

        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--success)]/15 text-xs font-bold text-[var(--success)]">
            THEN
          </span>
          <div className="flex-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]">
            Assign to{" "}
            <span className="font-semibold text-[var(--primary)]">
              AI qualifier agent
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Runs on every new row, checked in real time
      </div>
    </div>
  );
}
