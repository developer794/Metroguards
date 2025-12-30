import Faq1 from "./Faq1";

export const metadata = {
  title: "FAQ| Metro Guards",
  description:
    "Frequently asked questions about Metroguards.",
  openGraph: {
    title: "FAQ - Metro Guards Melbourne",
    description:
      "Frequently asked questions about Metro Guards security services in Melbourne.",
    url: "https://metroguards.com.au/faqs",
    siteName: "Metro Guards",
    images: [
      {
        url: "https://metroguards.com.au/assets/img/logo/mg metro gaurds.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Guards FAQ Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Metro Guards Melbourne",
    description:
      "Frequently asked questions about Metro Guards security services in Melbourne.",
    images: [
      "https://metroguards.com.au/assets/img/logo/mg metro gaurds.jpg",
    ],
  },
};

// Only renders your client component
export default function Page() {
  return <Faq1/>;
}
