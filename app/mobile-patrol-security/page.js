import MobilePatrolSecurityPage from "./ClientPage";

export const metadata = {
  title: "Top-Rated Mobile Patrol Security Guards in Melbourne",
  description:
    "Hire mobile patrol security guards in Melbourne. 24/7 patrol units, rapid response, after-hours site protection, vandalism prevention & break-in deterrence.",
  alternates: { 
    canonical: "https://metroguards.com.au/mobile-patrol-security" 
  },
  openGraph: {
    title: "Mobile Patrol Security in Melbourne | Metro Guards",
    description: "Professional mobile patrol security services in Melbourne. GPS-tracked patrols, property inspections, alarm response, and 24/7 mobile security services.",
    url: "https://metroguards.com.au/mobile-patrol-security",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Patrol Security in Melbourne | Metro Guards",
    description: "Professional mobile patrol security services in Melbourne. GPS-tracked patrols, property inspections, alarm response, and 24/7 mobile security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <MobilePatrolSecurityPage />;
}
