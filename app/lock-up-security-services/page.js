import LockUpSecurityPage from "./ClientPage";

export const metadata = {
  title: "Lock-Up & Open-Up Security Melbourne Near Me",
  description:
    "Professional lock-up & open-up security Melbourne. 24/7 business closing, building opening, after-hours patrols, alarm setting & safe morning access for offices and retail.",
  alternates: { 
    canonical: "https://metroguards.com.au/lock-up-security-services" 
  },
  openGraph: {
    title: "Lock-Up Security Services in Melbourne | Metro Guards",
    description: "Professional lock-up and open-up security services in Melbourne. Property security, alarm systems, perimeter checks, and reliable lock-up services.",
    url: "https://metroguards.com.au/lock-up-security-services",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock-Up Security Services in Melbourne | Metro Guards",
    description: "Professional lock-up and open-up security services in Melbourne. Property security, alarm systems, perimeter checks, and reliable lock-up services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <LockUpSecurityPage />;
}
