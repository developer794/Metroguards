import SouthEastMelbournePage from "./ClientPage";

export const metadata = {
  title: "Trusted Security & Mobile Patrols in South–East Melbourne",
  description:
    "Metro Guards offers protection across Southeast Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Sandringham. 24/7 professional coverage.",
  alternates: { 
    canonical: "https://metroguards.com.au/south-east-melbourne" 
  },
  openGraph: {
    title: "Trusted Security & Mobile Patrols in South–East Melbourne | Metro Guards",
    description: "Metro Guards offers protection across Southeast Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Sandringham. 24/7 professional coverage.",
    url: "https://metroguards.com.au/south-east-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Security & Mobile Patrols in South–East Melbourne | Metro Guards",
    description: "Metro Guards offers protection across Southeast Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Sandringham. 24/7 professional coverage.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <SouthEastMelbournePage />;
}
