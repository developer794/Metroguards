import WestEastMelbournePage from "./ClientPage";

export const metadata = {
  title: "Comprehensive Security & Patrols| West-East Melbourne",
  description:
    "Metro Guards delivers security officers, mobile patrols, & event protection in West-East Melbourne. Reliable 24/7 security for homes, businesses, and events.",
  alternates: { 
    canonical: "https://metroguards.com.au/west-east-melbourne" 
  },
  openGraph: {
    title: "Comprehensive Security & Patrols | West-East Melbourne | Metro Guards",
    description: "Metro Guards delivers security officers, mobile patrols, & event protection in West-East Melbourne. Reliable 24/7 security for homes, businesses, and events.",
    url: "https://metroguards.com.au/west-east-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Security & Patrols | West-East Melbourne | Metro Guards",
    description: "Metro Guards delivers security officers, mobile patrols, & event protection in West-East Melbourne. Reliable 24/7 security for homes, businesses, and events.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <WestEastMelbournePage />;
}
