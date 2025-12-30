import CrowdCrontrolServicesPage from "./ClientPage";

export const metadata = {
  title: "Professional Crowd Control Services in Melbourne | Metro Guards",
  description:
    "Expert crowd control and event security services in Melbourne. Licensed crowd controllers for concerts, festivals, corporate events, and public gatherings. Ensuring safety and smooth operations for events of all sizes.",
  alternates: { 
    canonical: "https://metroguards.com.au/crowd-control-services" 
  },
  openGraph: {
    title: "Professional Crowd Control Services in Melbourne | Metro Guards",
    description: "Expert crowd control and event security services in Melbourne. Licensed crowd controllers for concerts, festivals, corporate events, and public gatherings. Ensuring safety and smooth operations for events of all sizes.",
    url: "https://metroguards.com.au/crowd-control-services",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Crowd Control Services in Melbourne | Metro Guards",
    description: "Expert crowd control and event security services in Melbourne. Licensed crowd controllers for concerts, festivals, corporate events, and public gatherings. Ensuring safety and smooth operations for events of all sizes.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <CrowdCrontrolServicesPage />;
}
