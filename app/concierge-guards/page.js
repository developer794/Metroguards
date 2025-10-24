import ConciergeSecurityPage from "./ClientPage";

export const metadata = {
  title: "Concierge Security Guards in Melbourne | Metro Guards",
  description:
    "Professional concierge security guards in Melbourne. Residential building security, visitor management, luxury property protection, and 24/7 concierge services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/concierge-guards" 
  },
  openGraph: {
    title: "Concierge Security Guards in Melbourne | Metro Guards",
    description: "Professional concierge security guards in Melbourne. Residential building security, visitor management, luxury property protection, and 24/7 concierge services.",
    url: "https://website-metroguards.vercel.app/concierge-guards",
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
