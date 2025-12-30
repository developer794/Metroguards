import SecurityEscortPage from "./ClientPage";

export const metadata = {
  title: "Security Escort Services Melbourne | VIP Security Services",
  description:
    "PProfessional security escort services in Melbourne. Personal, VIP, executive & female escort guards for safe travel, high-risk routes, staff protection & valuable goods.",
  alternates: { 
    canonical: "https://metroguards.com.au/security-escort-services" 
  },
  openGraph: {
    title: "Security Escort Services in Melbourne | Metro Guards",
    description: "Professional security escort services in Melbourne. Personnel escort, valuable cargo protection, safe transportation, and reliable escort security services.",
    url: "https://metroguards.com.au/security-escort-services",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Escort Services in Melbourne | Metro Guards",
    description: "Professional security escort services in Melbourne. Personnel escort, valuable cargo protection, safe transportation, and reliable escort security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <SecurityEscortPage />;
}
