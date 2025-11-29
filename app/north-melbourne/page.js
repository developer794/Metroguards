import NorthMelbournePage from "./ClientPage";

export const metadata = {
  title: "North Melbourne Security Guards & Mobile Patrol Services",
  description:
    "Metro Guards delivers security guards, building security, mobile patrols & construction security across North Melbourne suburbs with fully staffed 24/7 services.",
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
  return <NorthMelbournePage />;
}
