import IndustryRetailHospitalityPage from "./ClientPage";

export const metadata = {
  title: "Metro Guards: Retail & Hospitality Security Melbourne",
  description:
    "Hire security guards for retail, hospitality, and major events across Melbourne. Protect your shops, hotels, restaurants, venues, and festivals now.",
  alternates: { 
    canonical: "https://metroguards.com.au/industry-retail-hospitality" 
  },
  openGraph: {
    title: "Educational Institution Security Guards in Melbourne | Metro Guards",
    description: "Professional security guards for schools and universities in Melbourne. Student safety, campus protection, emergency response, and 24/7 educational facility security.",
    url: "https://metroguards.com.au/educational-institute-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational Institution Security Guards in Melbourne | Metro Guards",
    description: "Professional security guards for schools and universities in Melbourne. Student safety, campus protection, emergency response, and 24/7 educational facility security.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <IndustryRetailHospitalityPage />;
}
