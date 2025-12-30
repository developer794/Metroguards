import ClientPage from "./ClientPage";

export const metadata = {
  title: "Local Construction Patrol Security Guards in Melbourne ",
  description:
    "Hire construction patrol security guards in Melbourne. 24/7 mobile patrols, theft prevention, trespass deterrence, after-hours checks & equipment protection.",
  alternates: { 
    canonical: "https://metroguards.com.au/construction-patrol-security-guards" 
  },
  openGraph: {
    title: "Construction Patrol Security Guards in Melbourne | Metro Guards",
    description: "Specialized construction patrol security guards in Melbourne. Site protection, equipment security, theft prevention, and professional construction patrol services.",
    url: "https://metroguards.com.au/construction-patrol-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Patrol Security Guards in Melbourne | Metro Guards",
    description: "Specialized construction patrol security guards in Melbourne. Site protection, equipment security, theft prevention, and professional construction patrol services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ClientPage />;
}
