import RetailSecurityPage from "./ClientPage";

export const metadata = {
  title: "Retail Security Guards in Melbourne | Metro Guards",
  description:
    "Professional retail security guards in Melbourne. Theft prevention, loss prevention, customer safety, and comprehensive retail store security services.",
  alternates: { 
    canonical: "https://metroguards.com.au/retail-security-guard" 
  },
  openGraph: {
    title: "Retail Security Guards in Melbourne | Metro Guards",
    description: "Professional retail security guards in Melbourne. Theft prevention, loss prevention, customer safety, and comprehensive retail store security services.",
    url: "https://metroguards.com.au/retail-security-guard",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Security Guards in Melbourne | Metro Guards",
    description: "Professional retail security guards in Melbourne. Theft prevention, loss prevention, customer safety, and comprehensive retail store security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <RetailSecurityPage />;
}
