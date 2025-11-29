import SouthMelbournePage from "./ClientPage";

export const metadata = {
  title: "South Melbourne Security & Patrols | Metro Guards AU",
  description:
    "Metro Guards protect South Melbourne suburbs, including St Kilda, Prahran, Dandenong, Frankston & Southbank. 24/7 professional security coverage.",
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
  return <SouthMelbournePage />;
}
