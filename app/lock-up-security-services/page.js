import LockUpSecurityPage from "./ClientPage";

export const metadata = {
  title: "Lock-Up Security Services in Melbourne | Metro Guards",
  description:
    "Professional lock-up and open-up security services in Melbourne. Property security, alarm systems, perimeter checks, and reliable lock-up services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/lock-up-security-services" 
  },
  openGraph: {
    title: "Lock-Up Security Services in Melbourne | Metro Guards",
    description: "Professional lock-up and open-up security services in Melbourne. Property security, alarm systems, perimeter checks, and reliable lock-up services.",
    url: "https://website-metroguards.vercel.app/lock-up-security-services",
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
