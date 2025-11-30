"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AlertTriangle, Building2, Users, ShieldAlert, FileCheck } from 'lucide-react';

const SecurityChallenges = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Unexpected Incidents",
      description: "Theft, vandalism, or trespassing can happen anytime. Our security guards in Melbourne respond immediately."
    },
    {
      icon: Building2,
      title: "High-Risk or Unstaffed Sites",
      description: "Construction sites, offices after hours, or remote locations need constant monitoring."
    },
    {
      icon: Users,
      title: "Building Safety Concerns",
      description: "Corporate events, private gatherings, and large functions require trained private security guards in Melbourne for smooth operations."
    },
    {
      icon: ShieldAlert,
      title: "Access Control Issues",
      description: "Unauthorized visitors or staffing gaps are mitigated with strict entry monitoring."
    },
    {
      icon: FileCheck,
      title: "Compliance & Legal Requirements",
      description: "Stay compliant with regulations using fully licensed security companies in Melbourne, Victoria."
    }
  ];

  return (
    <section 
      className={`challenges-section ${isLoaded ? 'loaded' : ''}`}
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#ffffff',
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <div className="challenges-container">
        {/* Section Header - Left Aligned */}
        <div className="challenges-header" style={{ marginBottom: '60px' }}>
          <div className="challenges-label" style={{ marginBottom: '16px' }}>
            <span style={{ 
              fontSize: '1.8rem', 
              fontWeight: '700', 
              color: '#fdc51a', 
              letterSpacing: '-0.02em', 
              textTransform: 'uppercase',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              On-Site Threats
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
            Common Security Challenges Melbourne Businesses  Face
          </h2>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.7',
            color: '#333',
            margin: '0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            maxWidth: '800px'
          }}>
            Operating a business or event in Melbourne comes with unique security challenges. Metro Guards offers professional solutions for every scenario:
          </p>
        </div>

        {/* Two Column Layout: Challenges List + Image */}
        <div className="challenges-content-wrapper">
          {/* Left Column - Challenges List */}
          <div className="challenges-list">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <div
                  key={index}
                  className="challenge-item"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="challenge-icon">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <div className="challenge-content">
                    <h3 className="challenge-title">
                      {challenge.title}
                    </h3>
                    <p className="challenge-description">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          <div className="challenges-image-wrapper">
            <div className="challenges-image-container">
              <Image
                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Hospital%20Secuirty%20Guards/4F9FA8BC-5081-4EC6-8701-0B39FAA430E2_1_105_c.webp"
                alt="Metro Guards Security Professional"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
              />
              <div className="image-overlay"></div>
              
              {/* Floating Badge */}
              <div className="floating-badge">
                <div className="badge-icon">
                  <ShieldAlert size={32} strokeWidth={2} />
                </div>
                <div className="badge-text">
                  <div className="badge-number">16+</div>
                  <div className="badge-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .challenges-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .challenges-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .challenges-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .challenges-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .challenges-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .challenge-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: start;
          gap: 20px;
          padding: 24px 20px;
          border-radius: 8px;
          background: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .challenge-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: #f8f9fa;
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .challenge-item:hover::before {
          opacity: 1;
        }

        .challenge-item:hover {
          transform: translateY(-4px);
        }

        .challenge-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .challenge-item:hover .challenge-icon {
          transform: scale(1.05);
        }

        /* Odd cards: Yellow bg + Blue icon -> Blue bg + Yellow icon on hover */
        .challenge-item:nth-child(odd) .challenge-icon {
          background: #fdc51a;
          color: #1e2247;
        }

        .challenge-item:nth-child(odd):hover .challenge-icon {
          background: #1e2247;
          color: #fdc51a;
        }

        /* Even cards: Blue bg + Yellow icon -> Yellow bg + Blue icon on hover */
        .challenge-item:nth-child(even) .challenge-icon {
          background: #1e2247;
          color: #fdc51a;
        }

        .challenge-item:nth-child(even):hover .challenge-icon {
          background: #fdc51a;
          color: #1e2247;
        }

        .challenge-content {
          flex: 1;
        }

        .challenge-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e2247;
          margin: 0 0 8px 0;
          line-height: 1.3;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          transition: color 0.3s ease;
        }

        .challenge-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Image Section */
        .challenges-image-wrapper {
          position: sticky;
          top: 100px;
        }

        .challenges-image-container {
          position: relative;
          width: 100%;
          height: 650px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(30, 34, 71, 0.15);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(30, 34, 71, 0.4) 100%);
          z-index: 1;
        }

        .floating-badge {
          position: absolute;
          bottom: 32px;
          left: 32px;
          background: #ffffff;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 8px 32px rgba(30, 34, 71, 0.2);
          z-index: 2;
          animation: floatBadge 3s ease-in-out infinite;
        }

        .badge-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fdc51a;
          flex-shrink: 0;
        }

        .badge-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .badge-number {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e2247;
          line-height: 1;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .badge-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #fdc51a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (max-width: 1024px) {
          .challenges-content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .challenges-image-wrapper {
            position: relative;
            top: 0;
          }

          .challenges-image-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .challenges-container {
            padding: 0 20px;
          }

          .challenge-item {
            gap: 16px;
          }

          .challenge-icon {
            width: 44px;
            height: 44px;
          }

          .challenge-title {
            font-size: 1.0625rem;
          }

          .challenge-description {
            font-size: 0.875rem;
          }

          .challenges-image-container {
            height: 400px;
          }

          .floating-badge {
            bottom: 20px;
            left: 20px;
            padding: 16px 20px;
            gap: 12px;
          }

          .badge-icon {
            width: 48px;
            height: 48px;
          }

          .badge-number {
            font-size: 1.5rem;
          }

          .badge-label {
            font-size: 0.75rem;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatBadge {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default SecurityChallenges;

