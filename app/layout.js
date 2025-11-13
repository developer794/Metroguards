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
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
  },
  themeColor: '#1e2247',
  manifest: '/manifest.json',
 
  
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