import ClientPage from "./ClientPage";

export const metadata = {
  title: "Alarm Response Security Guards in Melbourne | Metro Guards",
  description:
    "Rapid alarm response security guards in Melbourne. 24/7 alarm monitoring, emergency response, property protection, and professional alarm response services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/alarm-response-security-guards" 
  },
  openGraph: {
    title: "Alarm Response Security Guards in Melbourne | Metro Guards",
    description: "Rapid alarm response security guards in Melbourne. 24/7 alarm monitoring, emergency response, property protection, and professional alarm response services.",
    url: "https://website-metroguards.vercel.app/alarm-response-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alarm Response Security Guards in Melbourne | Metro Guards",
    description: "Rapid alarm response security guards in Melbourne. 24/7 alarm monitoring, emergency response, property protection, and professional alarm response services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ClientPage />;
}
