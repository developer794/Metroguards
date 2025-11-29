import EastMelbournePage from "./ClientPage";

export const metadata = {
  title: "Security Guards in East Melbourne | Building & Patrols",
  description:
    "Metro Guards offers security guards, construction security, & mobile patrols across East Melbourne, including Richmond, Hawthorn, Kew, & Box Hill.",
  alternates: { 
    canonical: "https://metroguards.com.au/educational-institute-security-guards" 
  },
  openGraph: {
    title: "Educational Institution Security Guards in Melbourne | Metro Guards",
    description: "Professional security guards for schools and universities in Melbourne. Student safety, campus protection, emergency response, and 24/7 educational facility security.",
    url: "https://metroguards.com.au/educational-institute-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational Institution Security Guards in Melbourne | Metro Guards",
    description: "Professional security guards for schools and universities in Melbourne. Student safety, campus protection, emergency response, and 24/7 educational facility security.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <EastMelbournePage />;
}
