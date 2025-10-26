import MobilePatrolServicesPage from "./ClientPage";

export const metadata = {
  title: "Mobile Patrol Security Services in Melbourne | Metro Guards",
  description:
    "Professional mobile patrol security services in Melbourne. 24/7 roving patrols, rapid response, lock-up services, and comprehensive security monitoring. GPS-tracked patrols for your peace of mind.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/mobile-patrol-services" 
  },
  openGraph: {
    title: "Mobile Patrol Security Services in Melbourne | Metro Guards",
    description: "Professional mobile patrol security services in Melbourne. 24/7 roving patrols, rapid response, lock-up services, and comprehensive security monitoring. GPS-tracked patrols for your peace of mind.",
    url: "https://website-metroguards.vercel.app/mobile-patrol-services",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Patrol Security Services in Melbourne | Metro Guards",
    description: "Professional mobile patrol security services in Melbourne. 24/7 roving patrols, rapid response, lock-up services, and comprehensive security monitoring. GPS-tracked patrols for your peace of mind.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <MobilePatrolServicesPage />;
}
