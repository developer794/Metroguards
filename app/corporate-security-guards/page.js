import CorporateSecurityPage from "./ClientPage";

export const metadata = {
  title: "Top-Rated Corporate Security Guards in Melbourne ",
  description:
    "Hire trained corporate security guards in Melbourne for events, offices, conferences, functions & galas: 24/7 corporate event security, crowd control & VIP protection.",
  alternates: { 
    canonical: "https://metroguards.com.au/corporate-security-guards" 
  },
  openGraph: {
    title: "Corporate Security Guards in Melbourne | Metro Guards",
    description: "Elite corporate security guards in Melbourne. Executive protection, office security, access control, and professional corporate security services.",
    url: "https://metroguards.com.au/corporate-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Security Guards in Melbourne | Metro Guards",
    description: "Elite corporate security guards in Melbourne. Executive protection, office security, access control, and professional corporate security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <CorporateSecurityPage />;
}
