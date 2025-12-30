import IndustryCorporateCommercialPage from "./ClientPage";

export const metadata = {
  title: "Metro Guards: Corporate & Commercial Security Melbourne",
  description:
    "Contact Metro Guards now for corporate & commercial security in Melbourne with patrols, CCTV, access control, and concierge services.",
  alternates: {
    canonical: "https://metroguards.com.au/industry-corporate-commercial"
  },
  openGraph: {
    title: "Metro Guards: Corporate & Commercial Security Melbourne",
    description: "Contact Metro Guards now for corporate & commercial security in Melbourne with patrols, CCTV, access control, and concierge services.",
    url: "https://metroguards.com.au/industry-corporate-commercial",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Guards: Corporate & Commercial Security Melbourne",
    description: "Contact Metro Guards now for corporate & commercial security in Melbourne with patrols, CCTV, access control, and concierge services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <IndustryCorporateCommercialPage />;
}
