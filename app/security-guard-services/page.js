import SecuirtyGuardServicesPage from "./ClientPage";

export const metadata = {
  title: "Professional Security Guard Services in Melbourne | Metro Guards",
  description:
    "Comprehensive security guard services in Melbourne. Expert protection for businesses, events, buildings, and more. 24/7 professional security solutions tailored to your needs.",
  alternates: { 
    canonical: "https://metroguards.com.au/security-guard-services" 
  },
  openGraph: {
    title: "Professional Security Guard Services in Melbourne | Metro Guards",
    description: "Comprehensive security guard services in Melbourne. Expert protection for businesses, events, buildings, and more. 24/7 professional security solutions tailored to your needs.",
    url: "https://metroguards.com.au/security-guard-services",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Security Guard Services in Melbourne | Metro Guards",
    description: "Comprehensive security guard services in Melbourne. Expert protection for businesses, events, buildings, and more. 24/7 professional security solutions tailored to your needs.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <SecuirtyGuardServicesPage />;
}
