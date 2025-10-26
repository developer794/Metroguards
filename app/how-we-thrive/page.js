"use client";

import { useEffect, useState } from "react";
import { Users, Trophy, TrendingUp, Handshake, Shield, Zap, Target, Rocket } from "lucide-react";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Accrediation10 from "@/components/accrediation10"

const thriveFactors = [
  {
    icon: <Users size={48} />,
    title: "Employee-Centric Culture",
    description: "We foster a vibrant corporate culture with continuous positive reinforcements, creating a healthy work environment where our employees can excel and grow."
  },
  {
    icon: <Trophy size={48} />,
    title: "Recognition & Praise",
    description: "Our employee praise portal ensures every team member realizes their worth and contribution to making us a top-tier security company in Melbourne."
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Continuous Development",
    description: "We invest in ongoing training and professional development, ensuring our team stays ahead in the rapidly evolving security industry."
  },
  {
    icon: <Handshake size={48} />,
    title: "Collaborative Environment",
    description: "We believe in teamwork and collaboration, where every voice is heard and every contribution is valued towards our collective success."
  }
];

const fundamentalPrinciples = [
  {
    number: "01",
    title: "Customers First",
    description: "We are customer care oriented and dedicated to customer satisfaction. Every decision we make prioritizes our clients' needs and security requirements.",
    icon: <Shield size={40} />
  },
  {
    number: "02", 
    title: "Risk Prevention",
    description: "We have licensed, experienced officers to detect and reduce risks for safety. Proactive threat assessment is at the core of our service delivery.",
    icon: <Zap size={40} />
  },
  {
    number: "03",
    title: "Threat Response",
    description: "Our officers handle threats efficiently using expert conflict resolution techniques. Quick, professional response is our trademark.",
    icon: <Target size={40} />
  }
];

const successMetrics = [
  {
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers across Melbourne and Sydney"
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "Proven track record in security services"
  },
  {
    number: "24/7",
    label: "Service Availability", 
    description: "Round-the-clock protection and support"
  },
  {
    number: "100%",
    label: "Licensed Personnel",
    description: "Fully certified and trained security professionals"
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
        mainTitle="How We <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Thrive</span> & Excel"
        subtitle="Building Excellence Through People, Culture & Client Relationships"
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
                      Our Success Story
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
                    How Do We <span style={{ color: '#fdc51a' }}>Thrive</span> in Security?
                  </h2>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '25px'
                  }}>
                    To maintain a top position in the security industry, we provide our employees with a vibrant corporate culture and continuous positive reinforcements to develop a healthy work environment for them as they are our assets.
                  </p>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '35px'
                  }}>
                    We genuinely regard their efforts in making us a top hire security company in Melbourne. Our employee praise portal makes our employees realize their worth to our security company and enables them to work more efficiently.
                  </p>

                  {/* Key Benefits */}
                  <div style={{ marginBottom: '30px' }}>
                    {[
                      "Vibrant Corporate Culture",
                      "Continuous Employee Development", 
                      "Recognition & Reward Systems",
                      "Healthy Work Environment"
                    ].map((benefit, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '12px'
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                          borderRadius: '50%',
                          marginRight: '15px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{ color: '#1e2247', fontSize: '12px', fontWeight: '700' }}>✓</span>
                        </div>
                        <span style={{
                          fontSize: '1rem',
                          color: '#1e2247',
                          fontWeight: '500'
                        }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
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
                      Our Thriving Culture
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
                    What Makes Us <span style={{ color: '#fdc51a' }}>Thrive</span> Every Day
                  </h2>
                  
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    marginBottom: '60px'
                  }}>
                    Our success stems from four fundamental pillars that create an environment where excellence flourishes naturally.
                  </p>
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

          {/*===== Fundamental Principles Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#ffffff'
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
                      Core Principles
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
                    Our <span style={{ color: '#fdc51a' }}>Fundamental</span> Principles
                  </h2>
                  
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    marginBottom: '60px'
                  }}>
                    These core principles guide every aspect of our security services and define our approach to excellence.
                  </p>
                </div>
              </div>

              <div className="row">
                {fundamentalPrinciples.map((principle, index) => (
                  <div key={index} className="col-lg-4 col-md-6" style={{ marginBottom: '40px' }}>
                    <div 
                      style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        border: '1px solid #f1f3f4',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        textAlign: 'center',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#1e2247'
                      }}>
                        {principle.number}
                      </div>
                      
                      <div style={{
                        marginBottom: '20px',
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fdc51a'
                      }}>
                        {principle.icon}
                      </div>
                      
                      <h4 style={{
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        color: '#1e2247',
                        marginBottom: '15px',
                        lineHeight: '1.3'
                      }}>
                        {principle.title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        color: '#6c757d',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
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