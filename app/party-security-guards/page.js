import PartySecurityPage from "./ClientPage";

export const metadata = {
  title: "Party Security Guards in Melbourne | Metro Guards",
  description:
    "Professional party security guards in Melbourne. Private event security, crowd control, guest safety, and experienced party security services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/party-security-guards" 
  },
  openGraph: {
    title: "Party Security Guards in Melbourne | Metro Guards",
    description: "Professional party security guards in Melbourne. Private event security, crowd control, guest safety, and experienced party security services.",
    url: "https://website-metroguards.vercel.app/party-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Security Guards in Melbourne | Metro Guards",
    description: "Professional party security guards in Melbourne. Private event security, crowd control, guest safety, and experienced party security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <PartySecurityPage />;
}
