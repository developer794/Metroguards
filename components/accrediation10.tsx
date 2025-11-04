"use client"
import Image from "next/image"

export default function Accreditation() {
  const clients = [
    { name: "2", logo: "/assets/img/corporate-responsibility/img2.jpg", website: "/wp-content/uploads/2025/06/3240701-E-Certificate-of-Registration-Metro-Guards.pdf" },
    { name: "3", logo: "/assets/img/corporate-responsibility/img3.jpg", website: "/wp-content/uploads/2025/06/3240701-Q-Certificate-of-Registration-Metro-Guards.pdf" },
    { name: "4", logo: "/assets/img/corporate-responsibility/img4.jpg", website: "/wp-content/uploads/2025/06/3240701-O-Certificate-of-Registration-Metro-Guards.pdf" },
    { name: "8", logo: "/assets/img/corporate-responsibility/img8.jpg", website: "/wp-content/uploads/2025/06/australian-achiever-award-2016.pdf" },
    { name: "7", logo: "/assets/img/corporate-responsibility/img7.jpg", website: "/wp-content/uploads/2025/06/aus-achiever-award-2015.pdf" },
    { name: "1", logo: "/assets/img/corporate-responsibility/img1.jpg", website: "/wp-content/uploads/2025/06/aus-achiever-award-2014.pdf" },
    { name: "5", logo: "/assets/img/corporate-responsibility/img5.png", website: "/" },
    { name: "6", logo: "/assets/img/corporate-responsibility/img6.jpg", website: "/wp-content/uploads/2025/06/ASIAL-Org-Membership-Certificate-New.pdf" },
    { name: "9", logo: "/assets/img/corporate-responsibility/img11.webp", website: "/cm3.pdf" },
    { name: "10", logo: "/assets/img/corporate-responsibility/img10.png", website: "/Labour Hire Organisation Licence Certificate - VICLHL01373.pdf" },
  ]


  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-16 mb-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading (always left) */}
        <div className="mb-8">
          <h2 className="acc-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Accreditation & Partnerships
          </h2>
        </div>

        {/* Single row for all logos */}
        <div className="flex items-center justify-center  flex-nowrap overflow-x-clip" style={{ gap: "0.2rem" }}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center  bg-white rounded-md" style={{padding: "0.2rem"}}
            >
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-200"
                style={{ 
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={200}
                  height={150}
                  className="max-h-16 h-26 w-auto object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .acc-heading {
        padding-top: 50px;
        padding-bottom: 50px;
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #000;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (max-width: 768px) {
          .acc-heading {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}