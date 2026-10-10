import {
  IconMail,
  IconMessageSquare,
  IconUsers,
  IconGrid,
  IconCalendar,
  IconFormInput,
  IconDatabase,
  IconCloud,
  IconCreditCard,
  IconTrendingUp,
  IconFileText,
  IconTicket,
  IconBolt,
  IconPhone,
  IconVideo,
} from "../icons";

const integrations = [
  { name: "Email", icon: IconMail, color: "#2f5fff" },
  { name: "Chat", icon: IconMessageSquare, color: "#7c4fe0" },
  { name: "CRM", icon: IconUsers, color: "#0f9488" },
  { name: "Sheets", icon: IconGrid, color: "#157a44" },
  { name: "Calendar", icon: IconCalendar, color: "#d98c0a" },
  { name: "Forms", icon: IconFormInput, color: "#c23468" },
  { name: "Database", icon: IconDatabase, color: "#1f44d6" },
  { name: "Storage", icon: IconCloud, color: "#4e5578" },
  { name: "Payments", icon: IconCreditCard, color: "#157a44" },
  { name: "Analytics", icon: IconTrendingUp, color: "#7c4fe0" },
  { name: "Docs", icon: IconFileText, color: "#2f5fff" },
  { name: "Tickets", icon: IconTicket, color: "#c23468" },
  { name: "Webhooks", icon: IconBolt, color: "#0f9488" },
  { name: "SMS", icon: IconPhone, color: "#d98c0a" },
  { name: "Workspace Chat", icon: IconMessageSquare, color: "#7c4fe0" },
  { name: "Video Calls", icon: IconVideo, color: "#2f5fff" },
];

export function IntegrationGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
      {integrations.map((app) => (
        <div
          key={app.name}
          className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center transition-transform hover:-translate-y-0.5 hover:shadow-md"
        >
          <span
            className="flex h-9 w-9 flex-none items-center justify-center rounded-lg text-white"
            style={{ background: app.color }}
          >
            <app.icon className="h-5 w-5" />
          </span>
          <span className="text-[11px] leading-tight text-[var(--fg-muted)]">
            {app.name}
          </span>
        </div>
      ))}
    </div>
  );
}
