import ConciergeSecurityPage from "./ClientPage";

export const metadata = {
  title: "Top-Rated Concierge Security Guards in Melbourne",
  description:
    "Hire professional concierge security guards in Melbourne. Front desk, lobby, residential & corporate concierge security. 24/7 building access control & customer service safety.",
  alternates: { 
    canonical: "https://metroguards.com.au/concierge-guards" 
  },
  openGraph: {
    title: "Concierge Security Guards in Melbourne | Metro Guards",
    description: "Professional concierge security guards in Melbourne. Residential building security, visitor management, luxury property protection, and 24/7 concierge services.",
    url: "https://metroguards.com.au/concierge-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concierge Security Guards in Melbourne | Metro Guards",
    description: "Professional concierge security guards in Melbourne. Residential building security, visitor management, luxury property protection, and 24/7 concierge services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ConciergeSecurityPage />;
}
