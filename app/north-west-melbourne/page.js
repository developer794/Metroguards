import NorthWestMelbournePage from "./ClientPage";

export const metadata = {
  title: "Trusted Security Guard in Northwest Melbourne | Metro Guards",
  description:
    "Metro Guards delivers security guards across Northwest Melbourne suburbs, including Carlton, Brunswick, Coburg, Broadmeadows, Craigieburn & Epping in 2026.",
  alternates: { 
    canonical: "https://metroguards.com.au/north-west-melbourne" 
  },
  openGraph: {
    title: "Trusted Security Guard in Northwest Melbourne | Metro Guards",
    description: "Metro Guards delivers security guards across Northwest Melbourne suburbs, including Carlton, Brunswick, Coburg, Broadmeadows, Craigieburn & Epping in 2026.",
    url: "https://metroguards.com.au/north-west-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Security Guard in Northwest Melbourne | Metro Guards",
    description: "Metro Guards delivers security guards across Northwest Melbourne suburbs, including Carlton, Brunswick, Coburg, Broadmeadows, Craigieburn & Epping in 2026.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <NorthWestMelbournePage />;
}
