import AlarmResponseSecurityPage from "./ClientPage";

export const metadata = {
  title: "Emergency Alarm Response Security Guards in Melbourne",
  description:
    "24/7 alarm response security in Melbourne. Rapid mobile alarm response, break-in investigations, intrusion checks, after-hours call-outs & emergency alarm activation response.24/7 alarm response security in Melbourne. Rapid mobile alarm response, break-in investigations, intrusion checks, after-hours call-outs & emergency alarm activation response.",
  alternates: { 
    canonical: "https://metroguards.com.au/alarm-response-security-guards" 
  },
  openGraph: {
    title: "Alarm Response Security Guards in Melbourne | Metro Guards",
    description: "Rapid alarm response security guards in Melbourne. 24/7 alarm monitoring, emergency response, property protection, and professional alarm response services.",
    url: "https://metroguards.com.au/alarm-response-security-guards",
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
  return <AlarmResponseSecurityPage />;
}
