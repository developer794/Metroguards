"use client";
import React, { useEffect, useState } from 'react';
import { Shield, DollarSign, Eye, Settings, Award, Clock, CheckCircle2 } from 'lucide-react';

const WhyTrustUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Award,
      title: "Certified & Accredited",
      description: "Metro Guards is ISO-certified, CM3-certified, an ASIAL member, and an Australian Achiever Award recipient, demonstrating compliance, quality, and industry excellence."
    },
    {
      icon: CheckCircle2,
      title: "Registered, Trained Professionals",
      description: "All security personnel are licensed, insured, background-checked, and fully trained, ensuring safe, professional, and accountable operations."
    },
    {
      icon: Eye,
      title: "Proactive Risk Management",
      description: "Our guards monitor sites continuously, preventing unauthorised access, theft, and operational disruptions before they occur."
    },
    {
      icon: Settings,
      title: "Flexible Security Solutions",
      description: "We offer tailored corporate and commercial security services, including mobile patrols, alarm response, and on-site guard deployment to match your business requirements."
    },
    {
      icon: Shield,
      title: "16+ Years of Experience",
      description: "Trusted by Melbourne businesses across construction, logistics, retail, healthcare, hospitality, and industrial sectors."
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock support from our Melbourne-based command centre, including nights, weekends, and public holidays, providing uninterrupted protection."
    }
  ];

  return (
    <>
      {/* Image Spacer Top */}
      

      {/* Main Section */}
      <section 
        className={`trust-section ${isLoaded ? 'loaded' : ''}`}
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          background: '#ffffff',
          position: 'relative',
          width: '100%'
        }}
      >
        <div className="trust-container">
          {/* Section Header - Left Aligned */}
          <div className="trust-header" style={{ marginBottom: '60px' }}>
            <div className="trust-label" style={{ marginBottom: '16px' }}>
              <span style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: '#fdc51a', 
                letterSpacing: '-0.02em', 
                textTransform: 'uppercase',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Metro Difference
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
              Why Melbourne Businesses Trust Metro Guards for Security
            </h2>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#333',
              margin: '0',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              maxWidth: '800px'
            }}>
              Discover the key reasons why businesses across Melbourne choose Metro Guards as their trusted security partner.
            </p>
          </div>

          {/* Features Grid */}
          <div className="trust-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="trust-card"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="trust-card-icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="trust-card-title">
                    {feature.title}
                  </h3>
                  <p className="trust-card-description">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Recognition Section - Left Aligned */}
          <div className="trust-recognition" style={{ marginTop: '80px' }}>
            <div className="recognition-content">
              <div className="recognition-icon">
                <Award size={48} strokeWidth={1.5} />
              </div>
              <div className="recognition-text">
                <h5 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  margin: '0 0 12px 0',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                  As a leading security company in Melbourne, Metro Guards focuses on reliability, clear communication, and 24/7 protection for your premises.
                </h5>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        .trust-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .trust-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .trust-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
        }

        @media (min-width: 768px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (min-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
          }
        }

        .trust-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
          background: #ffffff;
          border-left: 4px solid #fdc51a;
          padding: 32px 28px;
          transition: all 0.3s ease;
          position: relative;
        }

        .trust-card:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 24px rgba(30, 34, 71, 0.08);
        }

        .trust-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .trust-card:hover .trust-card-icon {
          transform: scale(1.05);
        }

        /* Even cards: Blue bg -> Yellow on hover */
        .trust-card:nth-child(even) .trust-card-icon {
          background: #1e2247;
          color: #fdc51a;
        }

        .trust-card:nth-child(even):hover .trust-card-icon {
          background: #fdc51a;
          color: #1e2247;
        }

        /* Odd cards: Yellow bg -> Blue on hover */
        .trust-card:nth-child(odd) .trust-card-icon {
          background: #fdc51a;
          color: #1e2247;
        }

        .trust-card:nth-child(odd):hover .trust-card-icon {
          background: #1e2247;
          color: #fdc51a;
        }

        .trust-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e2247;
          margin: 0 0 12px 0;
          line-height: 1.3;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .trust-card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .trust-recognition {
          background: linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%);
          border-radius: 16px;
          padding: 48px;
          position: relative;
          overflow: hidden;
        }

        .trust-recognition::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .recognition-content {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        .recognition-icon {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          background: #fdc51a;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e2247;
        }

        .recognition-text {
          flex: 1;
        }

        @media (max-width: 768px) {
          .trust-container {
            padding: 0 20px;
          }

          .trust-recognition {
            padding: 32px 24px;
          }

          .recognition-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 24px;
          }

          .recognition-icon {
            width: 64px;
            height: 64px;
          }
        }

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
      `}</style>
    </>
  );
};

export default WhyTrustUs;

