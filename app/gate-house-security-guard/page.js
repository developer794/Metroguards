import GateHouseSecurityPage from "./ClientPage";

export const metadata = {
  title: "Gatehouse Security Guards in Melbourne 24/7 ",
  description:
    "Hire professional gatehouse security guards in Melbourne. We provide visitor verification, vehicle screening, & gatehouse monitoring for industrial, commercial & logistics sites.",
  alternates: { 
    canonical: "https://metroguards.com.au/gate-house-security-guard" 
  },
  openGraph: {
    title: "Gatehouse Security Guards in Melbourne | Metro Guards",
    description: "Professional gatehouse security guards in Melbourne. Access control, visitor management, vehicle inspection, and 24/7 gatehouse security services.",
    url: "https://metroguards.com.au/gate-house-security-guard",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gatehouse Security Guards in Melbourne | Metro Guards",
    description: "Professional gatehouse security guards in Melbourne. Access control, visitor management, vehicle inspection, and 24/7 gatehouse security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <GateHouseSecurityPage />;
}
