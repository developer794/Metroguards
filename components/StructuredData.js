/**
 * Schema.org Structured Data Component
 * Provides rich snippets for search engines
 * 
 * This component adds LocalBusiness and Organization schema
 * to improve SEO and search result appearance
 */

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://metroguards.com.au",
    "name": "Metro Guards Security Services",
    "legalName": "Metro Guards Pty Ltd",
    "description": "Professional security guard services in Melbourne. 24/7 protection for commercial and residential properties with licensed and trained security officers.",
    "url": "https://metroguards.com.au",
    "telephone": "1300731173",
    "email": "admin@metroguards.com.au",
    "logo": "https://metroguards.com.au/assets/img/logo/metroguards logo 2.png",
    "image": "https://metroguards.com.au/assets/img/logo/metroguards logo 2.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CS Hub, Level 1/34 Commercial Rd",
      "addressLocality": "Caroline Springs",
      "addressRegion": "VIC",
      "postalCode": "3023",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.7462",
      "longitude": "144.7476"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      },
      {
        "@type": "State",
        "name": "Victoria"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/metroguards",
      "https://www.linkedin.com/company/metroguards",
      "https://www.instagram.com/metroguards"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Building Security Guards",
            "description": "Professional security guards for commercial and residential buildings",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Metro Guards Security Services"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Patrol Services",
            "description": "24/7 mobile patrol and surveillance services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Metro Guards Security Services"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Security",
            "description": "Professional crowd control and event security services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Metro Guards Security Services"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "K9 Security Services",
            "description": "Canine security patrol services with trained handlers",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Metro Guards Security Services"
            }
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://metroguards.com.au"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://metroguards.com.au/security-guard-services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}

