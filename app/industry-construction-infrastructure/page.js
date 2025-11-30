import IndustryConstructionInfrastructurePage from "./ClientPage";

export const metadata = {
  title: "Melbourne Trusted Construction & Infrastructure Security",
  description:
    "Keep Melbourne construction and infrastructure sites secure with Metro Guards’ trained staff, patrols, real-time monitoring, and risk handling.",
  alternates: { 
    canonical: "https://metroguards.com.au/industry-construction-infrastructure" 
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
  return <IndustryConstructionInfrastructurePage />;
}
