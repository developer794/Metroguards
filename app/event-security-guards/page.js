import EventSecurityGuardsPage from "./ClientPage";

export const metadata = {
  title: "Event Security Guards in Melbourne | Metro Guards",
  description:
    "Expert event security guards in Melbourne. Festival security, concert protection, crowd management, and professional event security services.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/event-security-guards" 
  },
  openGraph: {
    title: "Event Security Guards in Melbourne | Metro Guards",
    description: "Expert event security guards in Melbourne. Festival security, concert protection, crowd management, and professional event security services.",
    url: "https://website-metroguards.vercel.app/event-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Security Guards in Melbourne | Metro Guards",
    description: "Expert event security guards in Melbourne. Festival security, concert protection, crowd management, and professional event security services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <EventSecurityGuardsPage />;
}
