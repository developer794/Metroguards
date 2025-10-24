import ClientPage from "./ClientPage";

export const metadata = {
  title: "Mobile Patrol Security in Melbourne | Metro Guards",
  description:
    "Professional mobile patrol security services in Melbourne. GPS-tracked patrols, property inspections, alarm response, and 24/7 mobile security services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/mobile-patrol-security" 
  },
  openGraph: {
    title: "Mobile Patrol Security in Melbourne | Metro Guards",
    description: "Professional mobile patrol security services in Melbourne. GPS-tracked patrols, property inspections, alarm response, and 24/7 mobile security services.",
    url: "https://website-metroguards.vercel.app/mobile-patrol-security",
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
  return <ClientPage />;
}
