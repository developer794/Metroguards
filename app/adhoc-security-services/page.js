import AdhocSecurityPage from "./ClientPage";

export const metadata = {
  title: "ADHOC Security Guards in Melbourne | Metro Guards",
  description:
    "Rapid-response ADHOC security guards in Melbourne. Licensed officers, GPS-tracked deployments, live reporting, and 24/7 command oversight.",
  alternates: { 
    canonical: "https://metroguards.com.au/adhoc-security-services" 
  },
  openGraph: {
    title: "ADHOC Security Guards in Melbourne | Metro Guards",
    description: "Rapid-response ADHOC security guards in Melbourne. Licensed officers, GPS-tracked deployments, live reporting, and 24/7 command oversight.",
    url: "https://metroguards.com.au/adhoc-security-services",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHOC Security Guards in Melbourne | Metro Guards",
    description: "Rapid-response ADHOC security guards in Melbourne. Licensed officers, GPS-tracked deployments, live reporting, and 24/7 command oversight.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <AdhocSecurityPage />;
}
