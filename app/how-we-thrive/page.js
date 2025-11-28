"use client";

import { useEffect, useState } from "react";
import { Users, Zap, TrendingUp, Target } from "lucide-react";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Accrediation10 from "@/components/accrediation10"

const thriveFactors = [
  {
    icon: <Users size={48} />,
    title: "Employee Training & Development",
    description: "Our team is the backbone of MetroGuards. Guards undergo rigorous training and ongoing development to handle every security challenge with confidence and expertise."
  },
  {
    icon: <Zap size={48} />,
    title: "Advanced Technology",
    description: "We combine human expertise with cutting-edge technology from alarm response systems to mobile patrol tracking to stay ahead of risks and provide real-time protection."
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Innovation & Expertise",
    description: "We continuously improve and innovate, applying industry-leading practices and expert strategies to deliver tailored security solutions for offices, hospitals, retail centers, and events."
  },
  {
    icon: <Target size={48} />,
    title: "Operational Excellence & Client Focus",
    description: "Every solution is customized to the client's needs. Our operations prioritize efficiency, reliability, and professionalism, ensuring excellence on every shift and site."
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
        mainTitle="How We Thrive:<span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Delivering Excellence in Security</span>"
        subtitle="At Metro Guards, it’s about exceeding expectations, innovating solutions, and delivering peace of mind across Melbourne"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Shopping%20Center%20Secuirty%20Guards/874BB7DC-8032-478D-9ED5-CF3287E50627_1_105_c.webp"
      >
        <div>
          {/*===== Introduction Section =====*/}
          <section
            className={`thrive-intro-section ${isLoaded ? 'loaded' : ''}`}
            style={{
              paddingTop: '80px',
              paddingBottom: '60px',
              background: '#ffffff',
              position: 'relative'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#fdc51a',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Journey to Excellence
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.2',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    How We <span style={{ color: '#fdc51a' }}>Achieve Excellence</span>
                  </h2>

                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '25px'
                  }}>
                    For our experienced guards in Melbourne, thriving means more than providing security. It’s about exceeding expectations, innovating solutions, and delivering peace of mind across Melbourne. Every shift, every patrol, and every service reflects our commitment to excellence and client satisfaction.
                  </p>

                  <blockquote style={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: '#1e2247',
                    borderLeft: '4px solid #fdc51a',
                    paddingLeft: '20px',
                    margin: '30px 0'
                  }}>
                    "Excellence at Metro Guards is the standard we uphold every day."
                  </blockquote>
                </div>

                <div className="col-lg-6">
                  <div style={{
                    position: 'relative',
                    paddingLeft: '30px'
                  }}>
                    <div style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      position: 'relative'
                    }}>
                      <img
                        src="/assets/img/about/why mg.webp"
                        alt="How we thrive"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*===== How We Thrive Factors =====*/}
          <section
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#f8f9fa'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-8">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#fdc51a',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Approach
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    What Makes Us <span style={{ color: '#fdc51a' }}>Thrive</span>
                  </h2>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '30px',
                  marginBottom: '60px'
                }}
              >
                {thriveFactors.map((factor, index) => (
                  <div
                    key={index}
                    style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '40px 30px',
                      border: '1px solid #f1f3f4',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      setHoveredCard(index);
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)';
                      e.currentTarget.style.color = '#1e2247';
                    }}
                    onMouseLeave={(e) => {
                      setHoveredCard(null);
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = 'inherit';
                    }}
                  >
                    <div style={{
                      marginBottom: '20px',
                      lineHeight: '1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: hoveredCard === index ? '#1e2247' : '#fdc51a'
                    }}>
                      {factor.icon}
                    </div>
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: hoveredCard === index ? '#1e2247' : '#1e2247'
                    }}>
                      {factor.title}
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      margin: 0,
                      color: hoveredCard === index ? '#1e2247' : '#6c757d'
                    }}>
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/*===== Partner Section =====*/}
          <section
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#ffffff'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Partner with MetroGuards for <span style={{ color: '#fdc51a' }}>Trusted Security</span>
                  </h2>

                  <p style={{
                    fontSize: '1.2rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    marginBottom: '40px'
                  }}>
                    From corporate offices to large events, MetroGuards delivers professional, reliable security solutions that keep people and property safe across Melbourne. Let us tailor a plan that meets your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Accrediation10 />

          <Subscribe />
        </div>
      </Layout>

      <style jsx>{`
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

        .thrive-intro-section.loaded {
          animation: fadeInUp 0.8s ease-out;
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          .brand-label span {
            font-size: 0.9rem !important;
          }
          
          .col-lg-6 {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 576px) {
          .thrive-intro-section {
            padding-top: 60px !important;
            padding-bottom: 50px !important;
          }
          
          .row div[style*="gap: 30px"] {
            gap: 20px !important;
          }
          
          section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </>
  )
}