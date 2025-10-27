import AssetSecurityPage from "./ClientPage";

export const metadata = {
  title: "Asset Protection Security in Melbourne | Metro Guards",
  description:
    "Professional asset protection security services in Melbourne. Property protection, inventory security, loss prevention, and comprehensive asset security solutions.",
  alternates: { 
    canonical: "https://metroguards.com.au/asset-protection" 
  },
  openGraph: {
    title: "Asset Protection Security in Melbourne | Metro Guards",
    description: "Professional asset protection security services in Melbourne. Property protection, inventory security, loss prevention, and comprehensive asset security solutions.",
    url: "https://metroguards.com.au/asset-protection",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Protection Security in Melbourne | Metro Guards",
    description: "Professional asset protection security services in Melbourne. Property protection, inventory security, loss prevention, and comprehensive asset security solutions.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <AssetSecurityPage />;
}
