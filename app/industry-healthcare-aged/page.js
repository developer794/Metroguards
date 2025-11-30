import IndustryHealthcareAgedPage from "./ClientPage";

export const metadata = {
  title: "Melbourne On-Site Healthcare & Aged Care Security Guards",
  description:
    "Protect Melbourne hospitals, clinics, aged care, and similar facilities with Metro Guards’ trained healthcare security staff and vigilant monitoring.",
  alternates: { 
    canonical: "https://metroguards.com.au/industry-healthcare-aged" 
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
  return <IndustryHealthcareAgedPage />;
}
