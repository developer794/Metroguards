/**
 * Google Tag Manager Component for Metro Guards
 * 
 * Usage: Add your GTM Container ID in .env.local:
 * NEXT_PUBLIC_GTM_ID=GTM-5F54P4MC
 * 
 * This component will load GTM in production only.
 * GTM manages all tracking tags (GA4, Facebook Pixel, etc.) from one place.
 */

'use client'
import Script from 'next/script'

export default function GoogleAnalytics() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  // Only load in production and if GTM ID is set
  if (process.env.NODE_ENV !== 'production' || !GTM_ID) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      
      {/* Google Tag Manager - NoScript for Body */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

