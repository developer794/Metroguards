import UniformAndConvertSecurityPage from "./ClientPage";

export const metadata = {
  title: "Best Local Uniform & Covert Security Guards in Melbourne",
  description:
    "Hire uniformed & covert security guards in Melbourne. Overt protection, undercover surveillance and discreet investigation services. 24/7 deployment.",
  alternates: { 
    canonical: "https://metroguards.com.au/uniform-and-convert-security-guards" 
  },
  openGraph: {
    title: "Uniform and Covert Security Guards in Melbourne | Metro Guards",
    description: "Professional uniform and covert security guards in Melbourne. Visible deterrence and discreet protection, integrated security solutions, and 24/7 surveillance.",
    url: "https://metroguards.com.au/uniform-and-convert-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniform and Covert Security Guards in Melbourne | Metro Guards",
    description: "Professional uniform and covert security guards in Melbourne. Visible deterrence and discreet protection, integrated security solutions, and 24/7 surveillance.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <UniformAndConvertSecurityPage />;
}
