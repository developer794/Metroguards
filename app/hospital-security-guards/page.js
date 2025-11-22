import HospitalSecurityPage from "./ClientPage";

export const metadata = {
  title: "Hospital Security Guards in Melbourne | 24/7 Security Services",
  description:
    "Looking for reliable hospital security guards in Melbourne? Our trained officers provide 24/7 protection & emergency response for all healthcare facilities.",
  alternates: { 
    canonical: "https://metroguards.com.au/hospital-security-guards" 
  },
  openGraph: {
    title: "Hospital Security Guards in Melbourne | Metro Guards",
    description: "Specialized hospital security guards in Melbourne. Healthcare facility protection, patient safety, emergency response, and 24/7 medical facility security.",
    url: "https://metroguards.com.au/hospital-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Security Guards in Melbourne | Metro Guards",
    description: "Specialized hospital security guards in Melbourne. Healthcare facility protection, patient safety, emergency response, and 24/7 medical facility security.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <HospitalSecurityPage />;
}
