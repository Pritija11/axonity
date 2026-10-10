const runs = [
  {
    title: "New lead synced to HubSpot",
    workflow: "Website form → CRM",
    status: "pass" as const,
    time: "2m ago",
  },
  {
    title: "Invoice reminder sent",
    workflow: "Billing → Email",
    status: "pass" as const,
    time: "18m ago",
  },
  {
    title: "Support ticket triaged by agent",
    workflow: "Inbox → AI Agent → Slack",
    status: "warn" as const,
    time: "41m ago",
  },
  {
    title: "Nightly report generation",
    workflow: "Scheduled → Sheets",
    status: "fail" as const,
    time: "2h ago",
  },
];

const statusMap = {
  pass: { pill: "pill-success", label: "Success" },
  warn: { pill: "pill-warning", label: "Review" },
  fail: { pill: "pill-danger", label: "Failed" },
};

export function AgentActivityLog() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(16,20,43,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-semibold text-[var(--fg)]">
          Recent runs
        </span>
        <span className="pill pill-neutral">Live</span>
      </div>
      <div className="flex flex-col">
        {runs.map((r) => (
          <div
            key={r.title}
            className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5 last:border-b-0"
          >
            <div>
              <p className="text-sm text-[var(--fg)]">{r.title}</p>
              <p className="mt-0.5 text-xs text-[var(--fg-muted)]">
                {r.workflow}
              </p>
            </div>
            <div className="flex flex-none flex-col items-end gap-1.5">
              <span className={`pill ${statusMap[r.status].pill}`}>
                {statusMap[r.status].label}
              </span>
              <span className="font-mono text-[10px] text-[var(--fg-faint)]">
                {r.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
