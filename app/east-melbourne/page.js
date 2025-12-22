import EastMelbournePage from "./ClientPage";

export const metadata = {
  title: "Security Guards in East Melbourne | Building & Patrols",
  description:
    "Metro Guards offers security guards, construction security, & mobile patrols across East Melbourne, including Richmond, Hawthorn, Kew, & Box Hill.",
  alternates: { 
    canonical: "https://metroguards.com.au/east-melbourne" 
  },
  openGraph: {
    title: "Security Guards in East Melbourne | Building & Patrols | Metro Guards",
    description: "Metro Guards offers security guards, construction security, & mobile patrols across East Melbourne, including Richmond, Hawthorn, Kew, & Box Hill.",
    url: "https://metroguards.com.au/east-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Guards in East Melbourne | Building & Patrols | Metro Guards",
    description: "Metro Guards offers security guards, construction security, & mobile patrols across East Melbourne, including Richmond, Hawthorn, Kew, & Box Hill.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <EastMelbournePage />;
}
