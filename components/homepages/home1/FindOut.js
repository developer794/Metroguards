"use client";

const findOutData = [
  {
    id: 1,
    title: "About Us",
    description: "Learn more about our company, mission, and values that drive our commitment to excellence in security services.",
    image: "/assets/img/about/about img.webp",
    href: "/about-us",
    bgColor: "linear-gradient(135deg, #1e2247 0%, #2d3748 100%)"
  },
  {
    id: 2,
    title: "Our Leadership Team",
    description: "Meet the experienced professionals who lead our organization with expertise and dedication to security excellence.",
    image: "/assets/img/blog/private guard.jpg",
    href: "/leadership-team",
    bgColor: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)"
  },
  {
    id: 3,
    title: "Corporate Social Responsibility",
    description: "Discover our commitment to community support and social responsibility initiatives across Australia.",
    image: "/assets/img/blog/event security.jpg",
    href: "/corporate-social-responsibility",
    bgColor: "linear-gradient(135deg, #4a5568 0%, #1e2247 100%)"
  },
  {
    id: 4,
    title: "Careers at MetroGuards",
    description: "Join our team of security professionals and build a rewarding career with opportunities for growth and development.",
    image: "/assets/img/blog/building-guard.jpg",
    href: "/careers",
    bgColor: "linear-gradient(135deg, #1e2247 0%, #2d3748 100%)"
  }
];

export default function FindOut() {
  return (
    <section className="findout-section">
      <div className="findout-container">
        {/* Header */}
        <div className="findout-header">
          <h2 className="findout-title">Find out more</h2>
        </div>

        {/* Cards Grid */}
        <div className="findout-grid">
          {findOutData.map((item) => (
            <a key={item.id} href={item.href} className="findout-card-link">
              <div 
                className="findout-card"
                style={{ background: item.bgColor }}
              >
                <div className="findout-card-image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="card-image"
                  />
                </div>
                <div className="findout-card-overlay"></div>
                <div className="findout-card-content">
                  <h3 className="findout-card-title">{item.title}</h3>
                  <p className="findout-card-description">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .findout-section {
          padding: 80px 0;
          background: #ffffff;
        }

        .findout-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Responsive Design */
        @media (max-width: 1199px) {
          .findout-container {
            padding: 0 32px;
          }
        }

        @media (max-width: 1023px) {
          .findout-container {
            padding: 0 24px;
          }
        }

        @media (max-width: 767px) {
          .findout-container {
            padding: 0 20px;
          }
        }

        .findout-header {
          margin-bottom: 50px;
        }

        .findout-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .findout-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .findout-card-link {
          text-decoration: none;
          display: block;
          transition: transform 0.3s ease;
        }

        .findout-card-link:hover {
          transform: translateY(-5px);
        }

        .findout-card {
          position: relative;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .findout-card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        .findout-card-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .findout-card:hover .card-image {
          transform: scale(1.05);
        }

                 .findout-card-overlay {
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: linear-gradient(
             to top,
             rgba(30, 34, 71, 0.6) 0%,
             rgba(30, 34, 71, 0.4) 50%,
             rgba(30, 34, 71, 0.1) 100%
           );
           transition: background 0.3s ease;
         }

         .findout-card:hover .findout-card-overlay {
           background: linear-gradient(
             to top,
             rgba(30, 34, 71, 0.7) 0%,
             rgba(30, 34, 71, 0.5) 50%,
             rgba(30, 34, 71, 0.2) 100%
           );
         }

        .findout-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 25px;
          color: white;
          z-index: 10;
          transition: transform 0.3s ease;
        }

        .findout-card:hover .findout-card-content {
          transform: translateY(-5px);
        }

        .findout-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: white;
          line-height: 1.2;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .findout-card-description {
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Responsive Design */
        @media (max-width: 639px) {
          .findout-container {
            padding: 0 16px;
          }

          .findout-title {
            font-size: 2.8rem;
          }

          .findout-grid {
            gap: 16px;
          }

          .findout-card {
            height: 380px;
          }
        }

        @media (max-width: 1024px) {
          .findout-section {
            padding: 70px 0;
          }

          .findout-title {
            font-size: 2.5rem;
          }

          .findout-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .findout-card {
            height: 350px;
          }

          .findout-card-title {
            font-size: 1.3rem;
          }

          .findout-card-description {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .findout-section {
            padding: 60px 0;
          }

          .findout-header {
            margin-bottom: 40px;
          }

          .findout-title {
            font-size: 2.2rem;
          }

          .findout-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .findout-card {
            height: 300px;
          }

          .findout-card-content {
            padding: 25px 20px;
          }

          .findout-card-title {
            font-size: 1.25rem;
            margin-bottom: 12px;
          }

          .findout-card-description {
            font-size: 0.8rem;
          }
        }



          .findout-section {
            padding: 50px 0;
          }

          .findout-title {
            font-size: 1.9rem;
          }

          .findout-card {
            height: 280px;
          }

          .findout-card-content {
            padding: 20px 16px;
          }

          .findout-card-title {
            font-size: 1.1rem;
          }

          .findout-card-description {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .findout-section {
            padding: 40px 0;
          }

          .findout-title {
            font-size: 1.75rem;
          }

          .findout-card {
            height: 260px;
          }

          .findout-card-content {
            padding: 18px 14px;
          }

          .findout-card-title {
            font-size: 1rem;
            margin-bottom: 10px;
          }

          .findout-card-description {
            font-size: 0.7rem;
            line-height: 1.4;
          }
        }

        @media (max-width: 479px) {
          .findout-container {
            padding: 0 12px;
          }

          .findout-section {
            padding: 35px 0;
          }

          .findout-title {
            font-size: 1.6rem;
          }

          .findout-card {
            height: 240px;
          }

          .findout-card-content {
            padding: 16px 12px;
          }

          .findout-card-title {
            font-size: 0.95rem;
          }

          .findout-card-description {
            font-size: 0.65rem;
          }
        }

        /* Animation for smooth transitions */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .findout-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .findout-card:nth-child(1) { animation-delay: 0.1s; }
        .findout-card:nth-child(2) { animation-delay: 0.2s; }
        .findout-card:nth-child(3) { animation-delay: 0.3s; }
        .findout-card:nth-child(4) { animation-delay: 0.4s; }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .findout-card {
            animation: none;
          }
          
          .findout-card:hover {
            transform: none;
          }
          
          .findout-card-link:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
