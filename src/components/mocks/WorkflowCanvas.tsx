import { IconBolt, IconRobot, IconMail, IconCheck } from "../icons";

export function WorkflowCanvas() {
  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(16,20,43,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-semibold text-[var(--fg)]">
          New lead → Qualify → Notify
        </span>
        <span className="pill pill-success">Active</span>
      </div>

      <div className="relative overflow-x-auto p-8">
        <svg
          viewBox="0 0 560 220"
          className="w-full min-w-[520px]"
          fill="none"
        >
          <path className="flow-line" d="M110 60 H220" />
          <path className="flow-line" d="M330 60 H360 Q380 60 380 80 V90" />
          <path className="flow-line-active" d="M330 60 H360 Q380 60 380 40 V30 H440" />
          <path className="flow-line" d="M380 120 V150 H440" />

          <foreignObject x="10" y="25" width="100" height="70">
            <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-2 text-center shadow-sm">
              <IconBolt className="h-4 w-4 text-[var(--accent-amber)]" />
              <span className="text-[11px] font-semibold text-[var(--fg)]">
                New lead
              </span>
            </div>
          </foreignObject>

          <foreignObject x="220" y="25" width="110" height="70">
            <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--primary)] bg-[var(--primary-soft)] px-2 text-center shadow-sm">
              <IconRobot className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-[11px] font-semibold text-[var(--primary)]">
                Qualify (AI)
              </span>
            </div>
          </foreignObject>

          <foreignObject x="440" y="-5" width="110" height="70">
            <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-2 text-center shadow-sm">
              <IconMail className="h-4 w-4 text-[var(--accent-teal)]" />
              <span className="text-[11px] font-semibold text-[var(--fg)]">
                Notify sales
              </span>
            </div>
          </foreignObject>

          <foreignObject x="440" y="115" width="110" height="70">
            <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-2 text-center shadow-sm">
              <IconCheck className="h-4 w-4 text-[var(--fg-faint)]" />
              <span className="text-[11px] font-semibold text-[var(--fg)]">
                Log to CRM
              </span>
            </div>
          </foreignObject>
        </svg>
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Last run · 2m ago · 340ms · qualified: true
      </div>
    </div>
  );
}
