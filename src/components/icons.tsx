type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLogo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="7" cy="12" r="2.6" fill="currentColor" stroke="none" />
      <path d="M9.4 12h3.2M12.6 12l4.2-5M12.6 12l4.2 5M12.6 12l5.2 0" />
      <circle cx="16.8" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16.8" cy="17" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="17.8" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFlow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="6" height="5" rx="1.2" />
      <rect x="15" y="4" width="6" height="5" rx="1.2" />
      <rect x="9" y="15" width="6" height="5" rx="1.2" />
      <path d="M9 6.5H6a3 3 0 0 0-3 3V12M15 6.5h3a3 3 0 0 1 3 3V12M12 12v3" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" />
    </svg>
  );
}

export function IconPlug({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 3.5v4M15 3.5v4" />
      <rect x="7" y="7.5" width="10" height="6" rx="2" />
      <path d="M12 13.5v3a4 4 0 0 1-4 4H6" />
    </svg>
  );
}

export function IconRobot({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="9" width="14" height="10" rx="2.5" />
      <path d="M12 9V5.5M9.5 5.5h5" />
      <circle cx="9.5" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <path d="M3.5 12.5v3M20.5 12.5v3" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z" />
      <path d="M4 12l8 4.5 8-4.5M4 16l8 4.5 8-4.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 19 6v6c0 4-3 7-7 8.5-4-1.5-7-4.5-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.5 5.3 3.5 8.5s-1.3 6.2-3.5 8.5c-2.2-2.3-3.5-5.3-3.5-8.5s1.3-6.2 3.5-8.5Z" />
    </svg>
  );
}

export function IconTrendingUp({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 16 9 10.5l4 4 7.5-8.5" />
      <path d="M15.5 6h5v5" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.5h2.4l1.4 4-2 1.6a12 12 0 0 0 5.5 5.5l1.6-2 4 1.4v2.4c0 1-.9 1.8-1.9 1.7-6-1-10.6-5.6-11.7-11.7-.1-1 .7-1.9 1.7-1.9Z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21.5c4-3.8 7-7.6 7-11.5a7 7 0 1 0-14 0c0 3.9 3 7.7 7 11.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1-3.5 4-5.5 7.5-5.5s6.5 2 7.5 5.5" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.8 19c0.9-3.1 3.4-4.8 6.2-4.8s5.3 1.7 6.2 4.8" />
      <circle cx="17" cy="8.5" r="2.3" opacity="0.7" />
      <path d="M15.5 14.5c2.2 0.3 3.8 1.8 4.5 4.3" opacity="0.7" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1" />
      <path d="M8.5 7.5h1.5M14 7.5h1.5M8.5 11.5h1.5M14 11.5h1.5M8.5 15.5h1.5M14 15.5h1.5M10.5 20.5v-3h3v3" />
    </svg>
  );
}

export function IconMessageSquare({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4Z" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 13l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.5-4.5" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconGrid({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 9.5h17M3.5 15h17M9 3.5v17M15 3.5v17" />
    </svg>
  );
}

export function IconFormInput({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M7 9.5h10M7 13h10M7 16.5h6" />
    </svg>
  );
}

export function IconDatabase({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
      <path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6" />
      <path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96 5.5 5.5 0 0 1 10.6-2 4 4 0 0 1-.6 10.96H7Z" />
    </svg>
  );
}

export function IconCreditCard({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18M6.5 14.5h4" />
    </svg>
  );
}

export function IconFileText({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3.5h7l4 4v13H7Z" />
      <path d="M14 3.5v4h4M9.5 12.5h5M9.5 16h5" />
    </svg>
  );
}

export function IconTicket({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 9.5a2 2 0 0 0 0-3.8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v.7a2 2 0 0 0 0 3.8v1.6a2 2 0 0 0 0 3.8V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.6a2 2 0 0 0 0-3.8Z" />
      <path d="M14.5 5v14" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconColumns({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
      <path d="M9.5 4v16M14.5 4v16" />
    </svg>
  );
}

export function IconReceipt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3.5h12v17l-2.5-1.6L13 20.5l-2.5-1.6L8 20.5l-2-1.6Z" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" />
    </svg>
  );
}

export function IconCalculator({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M8 7.5h8" />
      <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function IconSend({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 11.5 20 4l-6.5 16-2.8-7.2L4 11.5Z" />
      <path d="M10.7 12.8 20 4" />
    </svg>
  );
}

export function IconInbox({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 13 7 5h10l3 8" />
      <path d="M4 13v6a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-6h-4.5l-1 2.5h-5L8.5 13H4Z" />
    </svg>
  );
}

export function IconBriefcase({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="8" width="18" height="11.5" rx="1.5" />
      <path d="M8.5 8V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2M3 13h18" />
    </svg>
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
    </svg>
  );
}

export function IconAlertTriangle({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 21.5 20h-19Z" />
      <path d="M12 9.5v4.5" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconVideo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="6.5" width="12" height="11" rx="1.8" />
      <path d="M15 10.5 20.5 7v10L15 13.5Z" />
    </svg>
  );
}
