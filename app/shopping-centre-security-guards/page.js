import ShoppingCentreSecurityPage from "./ClientPage";

export const metadata = {
  title: "Shopping Centre Security Guards in Melbourne | Metro Guards",
  description:
    "Professional shopping centre security guards in Melbourne. Retail protection, crowd management, theft prevention, and customer safety services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/shopping-centre-security-guards" 
  },
  openGraph: {
    title: "Shopping Centre Security Guards in Melbourne | Metro Guards",
    description: "Professional shopping centre security guards in Melbourne. Retail protection, crowd management, theft prevention, and customer safety services.",
    url: "https://website-metroguards.vercel.app/shopping-centre-security-guards",
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
