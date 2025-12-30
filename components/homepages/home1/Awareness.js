"use client";

import Image from "next/image";

export default function Awareness() {
  return (
    <section className="awareness-section">
      <div className="">
        {/* Text Content Section */}
        <div className="text-content">
          <div className="awareness-header">
            <h2 className="awareness-title">How we raise awareness and serve our community</h2>
            <p className="awareness-description" style={{color: 'black'}}>
              Metro Security Experts are (Melbourne-based security) passionate about raising awareness and eagerly wish to do our part in building an ideal 
              society and we believe that a healthy society is a prosperous one. Therefore, we proudly support 'The Royal Melbourne Hospital' that has a 
              renowned reputation in healthcare and medical research. We also support 'Beyond Blue' an Australian not-for-profit organisation that provides 
              support and raises awareness regarding mental health issues.
            </p>
            <p className="awareness-description" style={{color: 'black'}}>
              We also strongly believe that women being the integral part of our society should be treated with cordial respect and therefore we support 'White 
              Ribbon' in their divine cause of stopping violence against women. We are proudly supporting following community groups and organisations:
            </p>
          </div>
        </div>
        
        {/* Three Images in One Row */}
        <div className="organizations-row">
          <div className="organization-item">
            <div className="organization-logo">
              <Image
                src="/assets/RMH.jpg"
                alt="The Royal Melbourne Hospital"
                width={300}
                height={100}
                className="logo-image"
              />
            </div>
          </div>
          
          <div className="organization-item">
            <div className="organization-logo">
              <Image
                src="/assets/img/blog/awarness.png"
                alt="Beyond Blue"
                width={300}
                height={120}
                className="logo-image"
              />
            </div>
          </div>
          
          <div className="organization-item">
            <div className="organization-logo">
              <Image
                src="/assets/img/blog/white-ribbon.webp"
                alt="White Ribbon Australia"
                width={300}
                height={120}
                className="logo-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .awareness-section {
          padding: 80px 40px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* Text Content Section */
        .text-content {
          text-align: left;
          margin-bottom: 60px;
          padding: 0 80px;
        }

        .awareness-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }

        .awareness-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #1e2247;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          text-align: left;
        }

        .awareness-description {
          max-width: 100%;
          color: #666666;
          margin: 0;
          line-height: 1.8;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          text-align: left;
        }

        /* Three Images in One Row */
        .organizations-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          align-items: center;
          justify-items: center;
          padding: 0 40px;
        }

        .organization-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 180px;
          width: 100%;
        }

        .organization-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .organization-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .logo-image {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Responsive Design */
        @media (max-width: 1199px) {
          .awareness-section {
            padding: 80px 32px;
          }

          .text-content {
            padding: 0 32px;
          }

          .organizations-row {
            padding: 0 32px;
          }
        }

        @media (max-width: 1024px) {
          .awareness-title {
            font-size: 2.5rem;
          }
          
          .awareness-description {
            font-size: 1rem;
          }

          .organizations-row {
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .awareness-section {
            padding: 60px 24px;
          }

          .text-content {
            margin-bottom: 40px;
            padding: 0 24px;
          }

          .awareness-title {
            font-size: 2rem;
          }
          
          .awareness-description {
            font-size: 0.95rem;
          }

          .organizations-row {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 0 24px;
          }

          .organization-item {
            padding: 25px;
            min-height: 140px;
          }
        }

        @media (max-width: 639px) {
          .awareness-section {
            padding: 60px 20px;
          }

          .text-content {
            padding: 0 20px;
          }

          .organizations-row {
            padding: 0 20px;
          }
        }

        @media (max-width: 479px) {
          .awareness-section {
            padding: 60px 16px;
          }

          .text-content {
            padding: 0 16px;
          }

          .awareness-title {
            font-size: 1.75rem;
          }
          
          .awareness-description {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .organizations-row {
            padding: 0 16px;
          }

          .organization-item {
            padding: 20px;
            min-height: 120px;
          }
        }
      `}</style>
    </section>
  );
}
