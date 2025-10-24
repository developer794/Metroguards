import ClientPage from "./ClientPage";

export const metadata = {
  title: "Hospital Security Guards in Melbourne | Metro Guards",
  description:
    "Specialized hospital security guards in Melbourne. Healthcare facility protection, patient safety, emergency response, and 24/7 medical facility security.",
  alternates: { 
    canonical: "https://website-metroguards.vercel.app/hospital-security-guards" 
  },
  openGraph: {
    title: "Hospital Security Guards in Melbourne | Metro Guards",
    description: "Specialized hospital security guards in Melbourne. Healthcare facility protection, patient safety, emergency response, and 24/7 medical facility security.",
    url: "https://website-metroguards.vercel.app/hospital-security-guards",
    siteName: "Metro Guards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Security Guards in Melbourne | Metro Guards",
    description: "Specialized hospital security guards in Melbourne. Healthcare facility protection, patient safety, emergency response, and 24/7 medical facility security.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <ClientPage />;
}
