"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSectionDynamic = ({ faqs = [], title = "Frequently Asked Questions", subtitle = "FAQs" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no FAQs provided, don't render anything
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section 
      className={`faq-section ${isLoaded ? 'loaded' : ''}`}
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: '#ffffff',
        position: 'relative',
        width: '100%'
      }}
    >
      <div className="faq-container">
        {/* Section Header */}
        <div className="faq-header" style={{ marginBottom: '48px' }}>
          <div className="faq-label" style={{ marginBottom: '16px' }}>
            <span style={{ 
              fontSize: '1.8rem', 
              fontWeight: '700', 
              color: '#fdc51a', 
              letterSpacing: '-0.02em', 
              textTransform: 'uppercase',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              {subtitle}
            </span>
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e2247',
            lineHeight: '1.2',
            margin: '0',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="faq-question-text">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className="faq-icon"
                  size={24}
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </button>
              
              <div 
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? '1' : '0',
                  transition: 'max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease',
                  overflow: 'hidden',
                  padding: openIndex === index ? '20px 24px' : '0 24px'
                }}
              >
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#666',
                  margin: '0',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .faq-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #fdc51a;
          box-shadow: 0 4px 12px rgba(30, 34, 71, 0.08);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: #f8f9fa;
        }

        .faq-question-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e2247;
          margin: 0;
          line-height: 1.4;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          flex: 1;
        }

        .faq-icon {
          color: #fdc51a;
          flex-shrink: 0;
        }

        .faq-answer {
          background: #f8f9fa;
        }

        @media (max-width: 768px) {
          .faq-container {
            padding: 0 20px;
          }

          .faq-question {
            padding: 20px;
          }

          .faq-question-text {
            font-size: 1rem;
          }

          .faq-answer {
            padding: 16px 20px;
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
      `}</style>
    </section>
  );
};

export default FAQSectionDynamic;

