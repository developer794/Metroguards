import CorporateSecurityPage from "./ClientPage";

export const metadata = {
  title: "Corporate Security Guards in Melbourne | Metro Guards",
  description:
    "Elite corporate security guards in Melbourne. Executive protection, office security, access control, and professional corporate security services.",
  alternates: { 
    canonical: "https://metroguards.com.au/corporate-security-guards" 
  },
  openGraph: {
    title: "Corporate Security Guards in Melbourne | Metro Guards",
    description: "Elite corporate security guards in Melbourne. Executive protection, office security, access control, and professional corporate security services.",
    url: "https://metroguards.com.au/corporate-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Security Guards in Melbourne | Metro Guards",
    description: "Elite corporate security guards in Melbourne. Executive protection, office security, access control, and professional corporate security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <CorporateSecurityPage />;
}
