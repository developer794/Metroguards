"use client";
import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutMetroGuards = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const highlights = [
    "16+ years of experience",
    "Fully licensed & insured",
    "Safety-trained professionals",
    "Background-checked personnel",
    "Strict on-site protocols",
    "Real-time reporting"
  ];

  return (
    <section 
      className={`about-section ${isLoaded ? 'loaded' : ''}`}
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        width: '100%'
      }}
    >
      <div className="about-container">
        <div className="about-content">
          <div className="about-label" style={{ marginBottom: '16px' }}>
            <span style={{ 
              fontSize: '1.8rem', 
              fontWeight: '700', 
              color: '#fdc51a', 
              letterSpacing: '-0.02em', 
              textTransform: 'uppercase',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              About Metro Guards
            </span>
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e2247',
            lineHeight: '1.2',
            margin: '0 0 24px 0',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            maxWidth: '900px'
          }}>
            Trusted Security Company in Melbourne
          </h2>

          <p className="about-description" style={{
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            color: '#333',
            margin: '0 0 32px 0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            maxWidth: '900px'
          }}>
            With 16+ years of experience, Metro Guards has served Melbourne homes, businesses, and events with fully licensed, insured, and safety-trained private security guards. All personnel are background-checked, follow strict on-site protocols, and provide real-time reporting.
          </p>

          
        </div>
      </div>

      <style jsx>{`
        .about-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .about-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .about-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .about-content {
          max-width: 1000px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9375rem;
          color: #1e2247;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          opacity: 0;
          animation: fadeInUp 0.4s ease-out forwards;
          background: #ffffff;
          padding: 16px 20px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 34, 71, 0.08);
          border-color: rgba(253, 197, 26, 0.3);
        }

        .highlight-item :global(svg) {
          color: #fdc51a;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 20px;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .highlight-item {
            padding: 14px 16px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMetroGuards;

