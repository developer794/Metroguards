import NorthMelbournePage from "./ClientPage";

export const metadata = {
  title: "North Melbourne Security Guards & Mobile Patrol Services",
  description:
    "Metro Guards delivers security guards, building security, mobile patrols & construction security across North Melbourne suburbs with fully staffed 24/7 services.",
  alternates: { 
    canonical: "https://metroguards.com.au/north-melbourne" 
  },
  openGraph: {
    title: "North Melbourne Security Guards & Mobile Patrol Services | Metro Guards",
    description: "Metro Guards delivers security guards, building security, mobile patrols & construction security across North Melbourne suburbs with fully staffed 24/7 services.",
    url: "https://metroguards.com.au/north-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Melbourne Security Guards & Mobile Patrol Services | Metro Guards",
    description: "Metro Guards delivers security guards, building security, mobile patrols & construction security across North Melbourne suburbs with fully staffed 24/7 services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <NorthMelbournePage />;
}
