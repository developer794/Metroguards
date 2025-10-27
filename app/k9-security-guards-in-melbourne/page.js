import K9SecurityPage from "./ClientPage";

export const metadata = {
  title: "K9 Security Guards with Handler in Melbourne | Metro Guards",
  description:
    "Professional K9 security guards with handlers in Melbourne. Canine security units, detection services, patrol dogs, and specialized K9 security services.",
  alternates: { 
    canonical: "https://metroguards.com.au/k9-security-guards-in-melbourne" 
  },
  openGraph: {
    title: "K9 Security Guards with Handler in Melbourne | Metro Guards",
    description: "Professional K9 security guards with handlers in Melbourne. Canine security units, detection services, patrol dogs, and specialized K9 security services.",
    url: "https://metroguards.com.au/k9-security-guards-in-melbourne",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K9 Security Guards with Handler in Melbourne | Metro Guards",
    description: "Professional K9 security guards with handlers in Melbourne. Canine security units, detection services, patrol dogs, and specialized K9 security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <K9SecurityPage />;
}
