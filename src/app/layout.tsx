import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const SITE_URL = "https://axonity.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Axonity — AI Agents & Workflow Automation",
    template: "%s · Axonity",
  },
  description:
    "Axonity is an early-stage automation startup based in Lalitpur, Nepal, building AI agents and workflow automation that connect business systems and eliminate repetitive work.",
  keywords: [
    "Axonity",
    "AI agents",
    "workflow automation",
    "business process automation",
    "AI automation startup",
    "no-code automation",
    "AI infrastructure startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Axonity — AI Agents & Workflow Automation",
    description:
      "AI agents and workflow automation that connect business systems and eliminate repetitive work.",
    siteName: "Axonity",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axonity — AI Agents & Workflow Automation",
    description:
      "AI agents and workflow automation that connect business systems and eliminate repetitive work.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Axonity",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Axonity is an early-stage automation startup based in Lalitpur, Nepal, building AI agents and workflow automation that connect business systems and eliminate repetitive work.",
  email: "hello@axonity.ltd",
  telephone: "+977-981-3456721",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Patan",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
