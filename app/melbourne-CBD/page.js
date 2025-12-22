import MelbourneCBDPage from "./ClientPage";

export const metadata = {
  title: "Melbourne CBD Security Guards & Mobile Patrol Services",
  description:
    "Metro Guards provides 24/7 security guards, mobile patrols, building security, & construction site protection across Melbourne CBD & inner-city suburbs.",
  alternates: { 
    canonical: "https://metroguards.com.au/melbourne-CBD" 
  },
  openGraph: {
    title: "Melbourne CBD Security Guards & Mobile Patrol Services | Metro Guards",
    description: "Metro Guards provides 24/7 security guards, mobile patrols, building security, & construction site protection across Melbourne CBD & inner-city suburbs.",
    url: "https://metroguards.com.au/melbourne-CBD",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melbourne CBD Security Guards & Mobile Patrol Services | Metro Guards",
    description: "Metro Guards provides 24/7 security guards, mobile patrols, building security, & construction site protection across Melbourne CBD & inner-city suburbs.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <MelbourneCBDPage />;
}
