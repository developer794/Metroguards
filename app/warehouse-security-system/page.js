import WareHouseSecurityPage from "./ClientPage";

export const metadata = {
  title: "Industrial Warehouse Security in Melbourne | Metro Guards",
  description:
    "Comprehensive warehouse security systems in Melbourne. Industrial facility protection, inventory security, access control, and 24/7 warehouse security services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/warehouse-security-system" 
  },
  openGraph: {
    title: "Industrial Warehouse Security in Melbourne | Metro Guards",
    description: "Comprehensive warehouse security systems in Melbourne. Industrial facility protection, inventory security, access control, and 24/7 warehouse security services.",
    url: "https://website-metroguards.vercel.app/warehouse-security-system",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Warehouse Security in Melbourne | Metro Guards",
    description: "Comprehensive warehouse security systems in Melbourne. Industrial facility protection, inventory security, access control, and 24/7 warehouse security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <WareHouseSecurityPage />;
}
