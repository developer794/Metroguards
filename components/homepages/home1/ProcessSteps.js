"use client";
import React, { useEffect, useState } from 'react';
import { Calendar, ClipboardCheck, ShieldCheck } from 'lucide-react';

const ProcessSteps = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Book Your Security Service",
      description: "Schedule online or call for instant confirmation."
    },
    {
      number: "2",
      icon: ClipboardCheck,
      title: "Customized Security Planning",
      description: "We assess risks and create a tailored plan including mobile patrols, access control, and 24/7 monitoring."
    },
    {
      number: "3",
      icon: ShieldCheck,
      title: "Deploy & Protect with Real-Time Reporting",
      description: "Our fully licensed, trained security guards arrive on time, ensuring your property or event is fully protected."
    }
  ];

  return (
    <section 
      className={`process-section ${isLoaded ? 'loaded' : ''}`}
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        width: '100%'
      }}
    >
      <div className="process-container">
        {/* Section Header - Left Aligned */}
        <div className="process-header" style={{ marginBottom: '48px' }}>
          <div className="process-label" style={{ marginBottom: '16px' }}>
            <span style={{ 
              fontSize: '1.8rem', 
              fontWeight: '700', 
              color: '#fdc51a', 
              letterSpacing: '-0.02em', 
              textTransform: 'uppercase',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Our Process
            </span>
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e2247',
            lineHeight: '1.2',
            margin: '0',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            maxWidth: '900px'
          }}>
            How Metro Guards Protect Your Property – Simple 3-Step Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="process-steps-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="process-step-card"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Step Header */}
                <div className="step-header">
                  <div className="step-number">
                    {step.number}
                  </div>
                  <div className="step-icon">
                    <IconComponent size={28} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="step-content">
                  <h3 className="step-title">
                    {step.title}
                  </h3>
                  <p className="step-description">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10H30M30 10L22 2M30 10L22 18" stroke="#fdc51a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .process-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .process-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
        }

        .process-step-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
          background: #ffffff;
          border-radius: 8px;
          padding: 32px 28px;
          position: relative;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          border-left: 4px solid transparent;
        }

        .process-step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(30, 34, 71, 0.08);
        }

        /* Odd cards: Yellow left border */
        .process-step-card:nth-child(odd) {
          border-left-color: #fdc51a;
        }

        /* Even cards: Blue left border */
        .process-step-card:nth-child(even) {
          border-left-color: #1e2247;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .step-number {
          font-size: 2rem;
          font-weight: 700;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1;
          min-width: 48px;
          transition: all 0.3s ease;
        }

        /* Odd cards: Yellow number */
        .process-step-card:nth-child(odd) .step-number {
          color: #fdc51a;
        }

        /* Even cards: Blue number */
        .process-step-card:nth-child(even) .step-number {
          color: #1e2247;
        }

        .step-icon {
          width: 56px;
          height: 56px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .process-step-card:hover .step-icon {
          transform: scale(1.05);
        }

        /* Odd cards: Yellow bg + Blue icon */
        .process-step-card:nth-child(odd) .step-icon {
          background: #fdc51a;
          color: #1e2247;
        }

        .process-step-card:nth-child(odd):hover .step-icon {
          background: #1e2247;
          color: #fdc51a;
        }

        /* Even cards: Blue bg + Yellow icon */
        .process-step-card:nth-child(even) .step-icon {
          background: #1e2247;
          color: #fdc51a;
        }

        .process-step-card:nth-child(even):hover .step-icon {
          background: #fdc51a;
          color: #1e2247;
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e2247;
          margin: 0 0 12px 0;
          line-height: 1.3;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .step-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .step-connector {
          position: absolute;
          top: 50%;
          right: -36px;
          transform: translateY(-50%);
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .process-steps-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .step-connector {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .process-container {
            padding: 0 20px;
          }

          .process-step-card {
            padding: 28px 24px;
          }

          .step-header {
            margin-bottom: 16px;
            padding-bottom: 16px;
          }

          .step-number {
            font-size: 1.75rem;
            min-width: 40px;
          }

          .step-icon {
            width: 52px;
            height: 52px;
          }

          .step-title {
            font-size: 1.0625rem;
          }

          .step-description {
            font-size: 0.875rem;
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
    </section>
  );
};

export default ProcessSteps;

