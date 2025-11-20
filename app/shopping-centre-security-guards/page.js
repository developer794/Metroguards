import ShoppingCentreSecurityPage from "./ClientPage";

export const metadata = {
  title: "Top-Rated Shopping Centre Security Guards in Melbourne",
  description:
    " Secure your centre with shopping centre security guards in Melbourne. Prevent theft, manage crowds, and stay protected 24/7. Enquire now.",
  alternates: { 
    canonical: "https://metroguards.com.au/shopping-centre-security-guards" 
  },
  openGraph: {
    title: "Shopping Centre Security Guards in Melbourne | Metro Guards",
    description: "Professional shopping centre security guards in Melbourne. Retail protection, crowd management, theft prevention, and customer safety services.",
    url: "https://metroguards.com.au/shopping-centre-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopping Centre Security Guards in Melbourne | Metro Guards",
    description: "Professional shopping centre security guards in Melbourne. Retail protection, crowd management, theft prevention, and customer safety services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ShoppingCentreSecurityPage />;
}
