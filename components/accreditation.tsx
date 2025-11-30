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
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-18">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 px-2">
          {/* Yellow Label */}
          <div className="mb-4">
            <span className="acc-label">
              Accreditation
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="acc-heading">
            Accreditation & Partnerships
          </h2>

          {/* Description */}
          <p className="acc-description">
          Metro Guards is recognised as an award-winning, leading security company in Melbourne, holding industry-standard certifications and accolades, including ISO quality management, CM3 contractor compliance, ASIAL membership, and the Australian Achiever Award for outstanding service.
          </p>
        </div>

        {/* Single row for all logos */}
        <div className="flex flex-wrap items-center justify-center overflow-x-clip" style={{ gap: "0.2rem" }}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/11 items-center justify-center rounded-md" 
            >
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-200"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={200}
                  height={150}
                  className="object-contain w-[350px] md:w-[300px] lg:w-[450px] h-[100px] md:h-[200px] lg:h-[150px] m-0 p-0"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .acc-label {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fdc51a;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .acc-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e2247;
          line-height: 1.2;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .acc-description {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: #333;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 1200px;
        }

        @media (max-width: 768px) {
          .acc-label {
            font-size: 1.5rem;
          }

          .acc-heading {
            font-size: 2rem;
          }

          .acc-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}