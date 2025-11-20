import ConstructionSiteSecurityPage from "./ClientPage";

export const metadata = {
  title: "Construction Site Security Guards Melbourne",
  description:
    "Require construction site security guards in Melbourne? Protect your project with fully licensed construction security guards, asset protection, & access control.",
  alternates: { 
    canonical: "https://metroguards.com.au/construction-site-security-guards" 
  },
  openGraph: {
    title: "Construction Site Security Guards in Melbourne | Metro Guards",
    description: "Expert construction site security guards in Melbourne. 24/7 on-site protection, licensed personnel, GPS tracking, and specialized training for construction security.",
    url: "https://metroguards.com.au/construction-site-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Site Security Guards in Melbourne | Metro Guards",
    description: "Expert construction site security guards in Melbourne. 24/7 on-site protection, licensed personnel, GPS tracking, and specialized training for construction security.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ConstructionSiteSecurityPage />;
}
