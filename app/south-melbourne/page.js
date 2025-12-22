import SouthMelbournePage from "./ClientPage";

export const metadata = {
  title: "South Melbourne Security & Patrols | Metro Guards AU",
  description:
    "Metro Guards protect South Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Southbank. 24/7 professional security coverage.",
  alternates: { 
    canonical: "https://metroguards.com.au/south-melbourne" 
  },
  openGraph: {
    title: "South Melbourne Security & Patrols | Metro Guards AU",
    description: "Metro Guards protect South Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Southbank. 24/7 professional security coverage.",
    url: "https://metroguards.com.au/south-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Melbourne Security & Patrols | Metro Guards AU",
    description: "Metro Guards protect South Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Southbank. 24/7 professional security coverage.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <SouthMelbournePage />;
}
