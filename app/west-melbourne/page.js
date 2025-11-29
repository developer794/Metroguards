import WestMelbournePage from "./ClientPage";

export const metadata = {
  title: "West Melbourne Security & Mobile Patrol Experts | MetroGuard",
  description:
    "Metro Guards provides professional security services across West Melbourne suburbs, including Footscray, Sunshine, Altona, Werribee, Point Cook & Melton 24/7.",
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
  return <WestMelbournePage />;
}
