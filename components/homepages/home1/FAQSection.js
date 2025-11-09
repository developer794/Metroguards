"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const faqs = [
    {
      question: "How to hire a reliable security company in Melbourne?",
      answer: "Call Metro Guards for a free site assessment and receive a tailored security plan. Our licensed security guards in Melbourne suburbs like Sunshine, Caroline Springs, and St Albans ensure customized protection for homes, businesses, and events, giving you peace of mind with professional, responsive service."
    },
    {
      question: "What technologies does Metro Guards use for security services in Melbourne?",
      answer: "Metro Guards uses advanced security technologies, including real-time GPS tracking, AI-assisted CCTV monitoring, and digital incident reporting. These tools help our Melbourne clients receive instant updates, faster response times, and complete transparency across all guard patrols, alarm responses, and on-site activities."
    },
    {
      question: "How many security guards do you need per 100 people?",
      answer: "The number of security guards depends on your event type, venue size, and risk level. Metro Guards in Melbourne advises on staffing for weddings, corporate events, and private functions, ensuring crowd safety, access control, and emergency readiness tailored to your specific needs."
    },
    {
      question: "Why should we choose Metro Guards as our security solution in Melbourne?",
      answer: "Choose Metro Guards for locally based, licensed professionals who deliver proactive patrols, 24/7 monitoring, and tailored protection plans. As one of the trusted security companies in Melbourne, we combine people, technology, and experience to safeguard homes, businesses, and events across Victoria efficiently and affordably."
    },
    {
      question: "Do Metro Guards provide emergency or after-hours security in Melbourne?",
      answer: "Yes. Metro Guards operates 24/7, offering rapid emergency response and after-hours protection across Melbourne. Our trained security guards and mobile patrol teams are always on standby to handle incidents, prevent threats, and ensure safety for commercial, residential, and event clients at any time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              FAQs
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
            Frequently Asked Questions
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

export default FAQSection;

