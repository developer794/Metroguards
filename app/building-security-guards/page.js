import BuildingSecurityPage from "./ClientPage";

export const metadata = {
  title: "BProfessional Building Security Guards in Melbourne",
  description:
    "Need Building Security Guards in Melbourne? Protect your site with trained guards, loss prevention, and 24/7 coverage. Enquire for a quote now.",
  alternates: { 
    canonical: "https://metroguards.com.au/building-security-guards" 
  },
  openGraph: {
    title: "Building Security Guards in Melbourne | Metro Guards",
    description: "Professional building security guards in Melbourne. 24/7 protection, licensed officers, live reporting, and ISO-certified standards for commercial and residential properties.",
    url: "https://metroguards.com.au/building-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Security Guards in Melbourne | Metro Guards",
    description: "Professional building security guards in Melbourne. 24/7 protection, licensed officers, live reporting, and ISO-certified standards for commercial and residential properties.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <BuildingSecurityPage />;
}
