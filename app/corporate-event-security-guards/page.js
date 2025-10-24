import CorporateEventSecurityPage from "./ClientPage";

export const metadata = {
  title: "Corporate Event Security Guards in Melbourne | Metro Guards",
  description:
    "Elite corporate event security guards in Melbourne. Business event protection, executive security, conference security, and professional corporate event services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/corporate-event-security-guards" 
  },
  openGraph: {
    title: "Corporate Event Security Guards in Melbourne | Metro Guards",
    description: "Elite corporate event security guards in Melbourne. Business event protection, executive security, conference security, and professional corporate event services.",
    url: "https://website-metroguards.vercel.app/corporate-event-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Security Guards in Melbourne | Metro Guards",
    description: "Elite corporate event security guards in Melbourne. Business event protection, executive security, conference security, and professional corporate event services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <CorporateEventSecurityPage />;
}
