import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact | Security Guard Services ",
  description:
    "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
  openGraph: {
    title: "Security Guard Services - Security Company in Melbourne",
    description:
      "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
    url: "https://metroguards.vercel.app",
    siteName: "Metro Guards",
    images: [
      {
        url: "/assets/img/logo/mg metro gaurds.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Guards Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Guard Services - Security Company in Melbourne",
    description:
      "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
    images: [
      "https://metroguards.vercel.app/assets/img/logo/mg metro gaurds.jpg",
    ],
  },
};

// Only renders your client component
export default function Page() {
  return <ContactPage />;
}