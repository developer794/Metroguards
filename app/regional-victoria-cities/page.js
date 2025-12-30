import RegionalVictoriaCitiesPage from "./ClientPage";

export const metadata = {
  title: "Trusted Security Across Regional Victoria | Metro Guards",
  description:
    "Metro Guards provides protection across Regional Victoria, including Geelong, Bendigo, Shepparton & Warrnambool for businesses, construction sites, & events.",
  alternates: { 
    canonical: "https://metroguards.com.au/regional-victoria-cities" 
  },
  openGraph: {
    title: "Trusted Security Across Regional Victoria | Metro Guards",
    description: "Metro Guards provides protection across Regional Victoria, including Geelong, Bendigo, Shepparton & Warrnambool for businesses, construction sites, & events.",
    url: "https://metroguards.com.au/regional-victoria-cities",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Security Across Regional Victoria | Metro Guards",
    description: "Metro Guards provides protection across Regional Victoria, including Geelong, Bendigo, Shepparton & Warrnambool for businesses, construction sites, & events.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <RegionalVictoriaCitiesPage />;
}
