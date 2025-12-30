import StaticSecurityPage from "./ClientPage";

export const metadata = {
  title: "Static Security Guards in Melbourne Near Me | 24/7",
  description:
    "Hire trained static security guards in Melbourne. On-site guards for buildings, retail, warehouses, commercial sites & 24/7 property protection.",
  alternates: { 
    canonical: "https://metroguards.com.au/static-security-guards" 
  },
  openGraph: {
    title: "Static Security Guards in Melbourne | Metro Guards",
    description: "Professional static security guards in Melbourne. On-site protection, access control, fixed-post security, and 24/7 static guard services.",
    url: "https://metroguards.com.au/static-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Static Security Guards in Melbourne | Metro Guards",
    description: "Professional static security guards in Melbourne. On-site protection, access control, fixed-post security, and 24/7 static guard services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <StaticSecurityPage />;
}
