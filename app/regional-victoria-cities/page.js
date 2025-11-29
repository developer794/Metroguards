import RegionalVictoriaCitiesPage from "./ClientPage";

export const metadata = {
  title: "Trusted Security Across Regional Victoria | Metro Guards",
  description:
    "Metro Guards provides protection across Regional Victoria, including Geelong, Bendigo, Shepparton & Warrnambool for businesses, construction sites, & events.",
  alternates: { 
    canonical: "https://metroguards.com.au/educational-institute-security-guards" 
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
  return <RegionalVictoriaCitiesPage />;
}
