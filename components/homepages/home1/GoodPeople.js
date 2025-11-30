"use client";

import { useEffect, useState } from "react";

export default function GoodPeople() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className={`goodpeople-section ${isLoaded ? 'loaded' : ''}`}
      style={{
        paddingTop: '80px',
        paddingBottom: '0px',
        background: '#ffffff',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        clear: 'both'
      }}
    >
      <div className="goodpeople-container">
        <div className="goodpeople-content" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Brand Label */}
          <div className="brand-label" style={{ marginBottom: '8px' }}>
            <span className="brand-text" style={{ 
              fontSize: '1.8rem', 
              fontWeight: '700', 
              color: '#fdc51a', 
              letterSpacing: '-0.02em', 
              textTransform: 'uppercase',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              display: 'block',
              margin: '0'
            }}>
              Reliable security for businesses, construction sites, and commercial properties right across Melbourne and Victoria.
            </span>
          </div>

          {/* Main Heading */}
          <div className="main-heading" style={{ marginBottom: '16px' }}>
            <h2 className="heading-line" style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#333333',
              lineHeight: '1.1',
              margin: '0',
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Local Expertise</h2>
            <h2 className="heading-line" style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#333333',
              lineHeight: '1.1',
              margin: '0',
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Melbourne Standards</h2>
          </div>

          {/* Description */}
          <div className="description-content">
            <p className="description-text" style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: 'black',
              margin: '0 0 16px 0',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              At Metro Guards, our licensed security officers use smart patrol systems with NFC and AI technology to keep your premises safe, backed by ISO, CM3, and ASIAL certifications for quality and compliance.
              <br/>We’re a locally based security company in Melbourne, trusted by businesses for responsive service, fair rates, and no outsourcing delays.
              </p>
            
          </div>
        </div>
      </div>

      <style jsx>{`
        .goodpeople-section {
          padding-top: 80px;
          padding-bottom: 0px;
          background: #ffffff;
          position: relative;
          z-index: 1;
          width: 100%;
          clear: both;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .goodpeople-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .goodpeople-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .goodpeople-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .brand-label {
          margin-bottom: 8px;
        }

        .brand-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fdc51a;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: block;
          margin: 0;
        }

        .main-heading {
          margin-bottom: 16px;
        }

        .heading-line {
          font-size: 3rem;
          font-weight: 700;
          color: #333333;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .description-content {
        }

        .description-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #666666;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Responsive Design */
        @media (max-width: 1199px) {
          .goodpeople-container {
            padding: 0 32px;
          }
        }

        @media (max-width: 1023px) {
          .goodpeople-container {
            padding: 0 24px;
          }
        }

        @media (max-width: 1200px) {
          .goodpeople-container {
            padding: 0 20px;
          }

          .heading-line {
            font-size: 2.5rem;
            font-weight: 700;
          }

          .description-text {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 1024px) {
          .goodpeople-section {
            padding-top: 70px;
            padding-bottom: 0px;
          }

          .heading-line {
            font-size: 2.5rem;
            font-weight: 700;
          }

          .description-text {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 768px) {
          .goodpeople-section {
            padding-top: 60px;
            padding-bottom: 0px;
          }

          .goodpeople-content {
            gap: 20px;
          }

          .brand-text {
            font-size: 1.5rem;
          }

          .heading-line {
            font-size: 2rem;
            font-weight: 700;
          }

          .description-text {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 639px) {
          .goodpeople-container {
            padding: 0 16px;
          }

          .goodpeople-section {
            padding-top: 50px;
            padding-bottom: 0px;
          }

          .goodpeople-content {
            gap: 16px;
          }

          .brand-text {
            font-size: 1.05rem;
          }

          .heading-line {
            font-size: 1.75rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .description-text {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 480px) {
          .goodpeople-section {
            padding-top: 40px;
            padding-bottom: 0px;
          }

          .goodpeople-content {
            gap: 14px;
          }

          .brand-text {
            font-size: 0.9rem;
          }

          .heading-line {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .description-text {
            font-size: 0.9rem;
            line-height: 1.5;
          }
        }

        @media (max-width: 479px) {
          .goodpeople-container {
            padding: 0 12px;
          }

          .goodpeople-section {
            padding-top: 35px;
            padding-bottom: 0px;
          }

          .heading-line {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
          }

          .description-text {
            font-size: 0.85rem;
          }
        }

        /* Animation for smooth entrance */
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

        .brand-label {
          animation: fadeInUp 0.6s ease-out;
        }

        .main-heading {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .description-content {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .brand-label,
          .main-heading,
          .description-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
