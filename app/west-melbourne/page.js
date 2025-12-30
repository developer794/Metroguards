import WestMelbournePage from "./ClientPage";

export const metadata = {
  title: "West Melbourne Security & Mobile Patrol Experts | MetroGuard",
  description:
    "Metro Guards provides professional security services across West Melbourne suburbs, including Footscray, Sunshine, Altona, Werribee, Point Cook & Melton 24/7.",
  alternates: { 
    canonical: "https://metroguards.com.au/west-melbourne" 
  },
  openGraph: {
    title: "West Melbourne Security & Mobile Patrol Experts | MetroGuard",
    description: "Metro Guards provides professional security services across West Melbourne suburbs, including Footscray, Sunshine, Altona, Werribee, Point Cook & Melton 24/7.",
    url: "https://metroguards.com.au/west-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Melbourne Security & Mobile Patrol Experts | MetroGuard",
    description: "Metro Guards provides professional security services across West Melbourne suburbs, including Footscray, Sunshine, Altona, Werribee, Point Cook & Melton 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <WestMelbournePage />;
}
