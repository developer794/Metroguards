"use client";

import { Marquee } from "@/components/ui/marquee"

// Client logos from the company folder
const clientLogos = [
  { src: "/company/1.png", alt: "Client 1" },
  { src: "/company/2.png", alt: "Client 2" },
  { src: "/company/3.png", alt: "Client 3" },
  { src: "/company/4.png", alt: "Client 4" },
  { src: "/company/5.png", alt: "Client 5" },
  { src: "/company/6.png", alt: "Client 6" },
  { src: "/company/7.png", alt: "Client 7" },
  { src: "/company/8.png", alt: "Client 8" },
  { src: "/company/9.png", alt: "Client 9" },
  { src: "/company/10.png", alt: "Client 10" },
  { src: "/company/11.png", alt: "Client 11" },
  { src: "/company/12.png", alt: "Client 12" },
  { src: "/company/13.png", alt: "Client 13" },
  { src: "/company/14.png", alt: "Client 14" },
];

export function MarqueeDemo() {

  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <div className="gallery-header-content">
              <h2 className="gallery-title">Our Clients <br/><span>Trusted By</span></h2>
              
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-[15px]">
            <Marquee speed={40} pauseOnHover={true} className="w-full">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{ 
                    marginLeft: '1rem', 
                    marginRight: '1rem',
                    minWidth: '150px' 
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    height="100px"
                    className="h-18 w-auto object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-section {
          padding: 20px 10px 40px 10px;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .gallery-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gallery-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-title span {
          color: #FFD700;
          font-size: 0.6em;
          display: block;
          margin-top: 0.5rem;
        }

        .gallery-description {
          max-width: 600px;
          color: #666666;
          margin: 0;
          line-height: 1.6;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 20px 0 80px 0;
          }

          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 15px;
            gap: 16px;
          }

          .gallery-title {
            font-size: 2rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }

          .gallery-title {
            font-size: 1.75rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}
