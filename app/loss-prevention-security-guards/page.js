import LossPreventionSecurityPage from "./ClientPage";

export const metadata = {
  title: "Loss Prevention Security Guards in Melbourne | Retail Theft Protection",
  description:
    "Hire trained loss prevention security guards in Melbourne. Retail theft prevention, store asset protection, shrinkage reduction & 24/7 LP security officers for shops & shopping centres.",
  alternates: { 
    canonical: "https://metroguards.com.au/loss-prevention-security-guards" 
  },
  openGraph: {
    title: "Loss Prevention Security Guards in Melbourne | Metro Guards",
    description: "Expert loss prevention security guards in Melbourne. Retail theft prevention, shrinkage reduction, surveillance, and professional loss prevention services.",
    url: "https://metroguards.com.au/loss-prevention-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loss Prevention Security Guards in Melbourne | Metro Guards",
    description: "Expert loss prevention security guards in Melbourne. Retail theft prevention, shrinkage reduction, surveillance, and professional loss prevention services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <LossPreventionSecurityPage />;
}
