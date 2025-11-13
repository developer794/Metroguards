// app/layout.js
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "public/assets/css/plugins/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "public/assets/css/plugins/aos.css"
//import "public/assets/css/plugins/fontawesome.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "public/assets/css/plugins/slick-slider.css"
import "public/assets/css/plugins/nice-select.css"
import "public/assets/css/plugins/fonts.css"
import "public/assets/css/master.css"
import "public/assets/css/h4-master.css"
import "./dashboard/globals.css"
//import TawkLoader from "@/components/TawkLoader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import ContactWidget from "@/components/contactWidget";



export const metadata = {
  title: 'Security Company in Melbourne | Licensed Security Guards',
  description: 'Licensed Security Company in Melbourne CBD & suburbs, protecting homes and businesses 24/7. Call Metro security Guards for instant quotes today.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#1e2247',
  manifest: '/manifest.json',
  openGraph: {
    title: "Security Guard Services - Security Company in Melbourne",
    description: "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
    url: "https://metroguards.com.au",
    siteName: "Metro Guards",
    images: [
      {
        url: "https://metroguards.com.au/assets/img/logo/favicon-32x32.png",
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
    description: "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
    images: ["https://metroguards.com.au/assets/img/logo/metroguards logo 2.png"],
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nocache: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="#top">
      <head>
        <StructuredData />
        <link rel="icon" href="/assets/img/logo/icon.png" type="image/png" sizes="16x16"></link>
      </head>
      <body className="relative">
        {/* Google Analytics - Production Only */}
        <GoogleAnalytics />
        
        {/* Header Strip - fixed at the very top */}
        <div className="fixed top-0 left-0 right-0 z-50">
          {/* <TopBar/> */}
        </div>

        {/* Main content with padding to account for header strip height */}
        <main className="pt-[40px] min-h-screen"> {/* Adjust pt value based on your header strip height */}
          {children}
        </main>
       
        {/* Client-only injection avoids hydration mismatch 
        <TawkLoader />*/}
        <ContactWidget/>
      </body>
    </html>
  )
}