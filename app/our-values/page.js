"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Accrediation10 from "@/components/accrediation10"

const valuesData = [
  {
    id: 1,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 17L20 20L23 21L20 22L19 25L18 22L15 21L18 20L19 17Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical conduct in all our operations, building trust with every interaction.",
    color: "#1e2247"
  },
  {
    id: 2,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Professionalism",
    description: "Our team maintains exceptional standards of conduct, appearance, and service delivery in every security assignment.",
    color: "#2d3748"
  },
  {
    id: 3,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Teamwork",
    description: "We believe in collaborative excellence, working together to achieve common goals and deliver superior security solutions.",
    color: "#4a5568"
  },
  {
    id: 4,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.22 4.22l4.24 4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15.54 15.54l4.24 4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.22 19.78l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Vigilance",
    description: "Our guards are trained to maintain constant awareness and attention to detail, ensuring comprehensive security coverage.",
    color: "#1e2247"
  },
  {
    id: 5,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9V5a3 3 0 0 0-6 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="20" height="12" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="15" r="1" fill="currentColor"/>
        <circle cx="16" cy="15" r="1" fill="currentColor"/>
        <path d="M12 13v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Transparency",
    description: "We maintain open and honest communication with our clients, providing clear reporting and accountability.",
    color: "#2d3748"
  },
  {
    id: 6,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="6" width="8" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Responsibility",
    description: "We take full ownership of our duties and commitments, ensuring reliable and dependable security services.",
    color: "#4a5568"
  }
];



export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Layout 
        headerStyle={1} 
        footerStyle={1} 
        breadcrumbTitle="ABOUT METRO GUARDS"
        mainTitle="Our <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Values</span> Define Our Excellence"
        subtitle="Professional Security Services Built on Strong Foundation"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/5FF0A9F2-0B06-4543-9AC1-2D57F158C07A_1_105_c.webp"
      >
        <div>
          {/*===== Introduction Section =====*/}
          <section 
            className={`values-intro-section ${isLoaded ? 'loaded' : ''}`}
            style={{
              paddingTop: '60px',
              paddingBottom: '40px',
              background: '#ffffff',
              position: 'relative'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="brand-label" style={{ marginBottom: '20px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Foundation
                    </span>
                  </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: '600',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '25px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Building Security Excellence Through <span style={{ color: '#fdc51a' }}>Strong Values</span>
                  </h2>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    marginBottom: '30px',
                    maxWidth: '700px',
                    margin: '0 auto 30px auto'
                  }}>
                    Metropolitan Security guards Melbourne’ is a dedicated team of responsible and fully insured security services providers across Melbourne with expertise and command in risk and facilities management. Honesty, ethics, responsibility, integrity, transparency, teamwork, and professionalism are the hallmarks of our company. We hire and recruited professional licensed guards who are action-oriented and have a keen eye for detail.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/*===== Values Grid Section =====*/}
          <section 
            style={{
              paddingTop: '60px',
              paddingBottom: '80px',
              background: '#ffffff'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div 
                className="values-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px',
                  marginBottom: '60px'
                }}
              >
                {valuesData.map((value, index) => (
                  <div
                    key={value.id}
                    className="value-card"
                    onMouseEnter={() => setHoveredCard(value.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '40px 30px',
                      boxShadow: hoveredCard === value.id 
                        ? '0 20px 60px rgba(0, 0, 0, 0.15)' 
                        : '0 10px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #f1f3f4',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredCard === value.id ? 'translateY(-10px)' : 'translateY(0)',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Yellow Gradient Overlay on Hover */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 50%, rgba(253, 197, 26, 0.1) 100%)',
                        borderRadius: '20px',
                        opacity: hoveredCard === value.id ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none'
                      }}
                    />
                    
                    {/* Background Gradient Overlay */}
                    <div className="top-gradient"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '6px',
                        background: `linear-gradient(90deg, ${value.color}, #fdc51a)`,
                        opacity: hoveredCard === value.id ? 1 : 0.7,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                    
                    <div className="card-content" style={{ position: 'relative', zIndex: 2 }}>
                      {/* Icon */}
                      <div 
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: '20px',
                          color: '#fdc51a',
                          filter: 'drop-shadow(0 4px 8px rgba(253, 197, 26, 0.3))',
                          transform: hoveredCard === value.id ? 'scale(1.1)' : 'scale(1)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div style={{
                          background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                          borderRadius: '50%',
                          padding: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: hoveredCard === value.id 
                            ? '0 8px 25px rgba(253, 197, 26, 0.4), 0 0 0 3px rgba(253, 197, 26, 0.1)' 
                            : '0 6px 20px rgba(253, 197, 26, 0.25)',
                          transition: 'all 0.3s ease'
                        }}>
                          <div style={{ color: '#1e2247' }}>
                            {value.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 
                        style={{
                          fontSize: '1.6rem',
                          fontWeight: '700',
                          color: value.color,
                          marginBottom: '15px',
                          textAlign: 'center',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}
                      >
                        {value.title}
                      </h3>
                      
                      {/* Description */}
                      <p 
                        style={{
                          fontSize: '1rem',
                          color: '#6c757d',
                          lineHeight: '1.6',
                          textAlign: 'center',
                          margin: 0
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/*===== Company Mission Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: 'linear-gradient(135deg, #1e2247 0%, #2d3748 100%)',
              color: '#ffffff',
              position: 'relative'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Our Commitment to Excellence
                  </h2>
                  
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '40px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <p style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.7',
                      marginBottom: '20px',
                      color: '#f8f9fa'
                    }}>
                      <strong>MetroGuards Security Melbourne</strong> is firmly committed to providing a comprehensive package of professional security guard services to business holders across Melbourne. Metropolitan security guard services strive to be service-oriented and a trusted security advisor to the business by offering economical solutions. Our commitment to integrity, accountability and quality enables us to hire a professional force of security guards in Melbourne to ensure the top-tier standard of private security services. We at metropolitan guards are focused on selecting only those individuals who are committed and compatible with our mission as the best security provider. Whether you own a small enterprise or a million-dollar company, hire security company Guards who are competent to detect danger and respond actively without disturbing the environment’s peace. 

So it’s better to be alert today than not to be safe tomorrow. Leave your security to us and enjoy your growing business.</p>
                    
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      margin: 0,
                      color: '#e9ecef'
                    }}>
                      We hire and recruit professional licensed guards who are action-oriented and have a keen 
                      eye for detail. Our commitment to these core values ensures that every client receives 
                      the highest standard of security services, backed by integrity, professionalism, and 
                      unwavering dedication to protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Accrediation10 />
          {/*===== CTA Section =====*/}
          <Subscribe />
          <style jsx global>{`
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

      .values-hero-section.loaded {
        animation: fadeInUp 0.8s ease-out;
      }

      .value-card {
        animation: fadeInUp 0.8s ease-out;
        animation-fill-mode: both;
      }

      .value-card:nth-child(1) { animation-delay: 0.1s; }
      .value-card:nth-child(2) { animation-delay: 0.2s; }
      .value-card:nth-child(3) { animation-delay: 0.3s; }
      .value-card:nth-child(4) { animation-delay: 0.4s; }
      .value-card:nth-child(5) { animation-delay: 0.5s; }
      .value-card:nth-child(6) { animation-delay: 0.6s; }

      @media (max-width: 768px) {
        .values-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        
        .value-card {
          padding: 30px 20px !important;
        }
      }
    `}</style>
    
    <style jsx global>{`
      .acc-heading {
      padding-top: 50px;
      padding-bottom: 50px;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        color: #000;
        letter-spacing: -0.02em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    `}</style>

          
        </div>
      </Layout>

      
    </>
  )
}
