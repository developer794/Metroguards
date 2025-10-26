"use client";

import { useEffect, useState } from "react";
import { Shield, Handshake, Lightbulb, Star } from "lucide-react";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Accrediation10 from "@/components/accrediation10"

const missionValues = [
  {
    icon: <Shield size={48} />,
    title: "Security Guard For Hire",
    description: "We deliver the highest standards of security services through continuous training, advanced technology, and unwavering commitment to protecting our clients."
  },
  {
    icon: <Handshake size={48} />,
    title: "Corporate Security Guards",
    description: "Building lasting relationships through transparent communication, ethical practices, and consistent reliability in every security solution we provide."
  },
  {
    icon: <Lightbulb size={48} />,
    title: "Loss Prevention Security",
    description: "Embracing cutting-edge security technologies and methodologies to stay ahead of evolving threats and provide superior protection."
  },
  {
    icon: <Star size={48} />,
    title: "Canine (K9) Security",
    description: "Maintaining the highest professional standards through rigorous training, certification, and continuous development of our security personnel."
  }
];

const principlesData = [
  {
    number: "01",
    title: "Client-Centric Approach",
    description: "Every security solution is tailored to meet the specific needs and challenges of our clients, ensuring optimal protection and peace of mind."
  },
  {
    number: "02", 
    title: "24/7 Vigilance",
    description: "Round-the-clock security services with rapid response capabilities, ensuring continuous protection for our clients' assets and personnel."
  },
  {
    number: "03",
    title: "Continuous Improvement",
    description: "Regular assessment and enhancement of our security protocols, training programs, and service delivery to maintain industry leadership."
  },
  {
    number: "04",
    title: "Community Safety",
    description: "Contributing to safer communities through responsible security practices and active participation in community safety initiatives."
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
        mainTitle="Our <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Mission</span> & Vision"
        subtitle="Dedicated to Excellence in Security Services & Community Protection"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/7E68B990-A328-4FF2-B123-A332787E94A2_1_105_c.webp"
      >
                <div>
          {/*===== Mission Statement Introduction Section =====*/}
          <section 
            className={`mission-intro-section ${isLoaded ? 'loaded' : ''}`}
            style={{
              paddingTop: '80px',
              paddingBottom: '60px',
              background: '#ffffff',
              position: 'relative'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Mission Statement
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
                    Providing Security with <span style={{ color: '#fdc51a' }}>Integrity & Excellence</span>
                  </h2>
                  
                  <div 
                    style={{
                      background: '#f8f9fa',
                      borderRadius: '20px',
                      padding: '40px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #f1f3f4',
                      marginBottom: '40px'
                    }}
                  >
                    <p style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.7',
                      margin: 0,
                      color: '#1e2247',
                      fontWeight: '400'
                    }}>
                      As the premier security company in Australia, our mission is to provide customers with <strong style={{ color: '#fdc51a' }}>cost-effective solutions of the highest quality</strong> and the best security guard services using the latest technologies with global connections whilst targeting enhanced security in the Melbourne and Sydney security industry.
                    </p>
                  </div>

                  {/* Mission Statistics */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                        color: '#1e2247',
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        15+
                      </div>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        Years of Excellence
                                            </p>
                                        </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                        color: '#1e2247',
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        500+
                      </div>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        Satisfied Clients
                      </p>
                                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                        color: '#1e2247',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        24/7
                                </div>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        Security Coverage
                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          </section>

          {/*===== Vision & Values Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#f8f9fa'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              {/* Vision Statement */}
              <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-10">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Vision
                    </span>
                  </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '40px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    To Be Australia's Most <span style={{ color: '#fdc51a' }}>Trusted Security Partner</span>
                                        </h2>
                  
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '20px',
                    padding: '50px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #f1f3f4',
                    marginBottom: '80px'
                  }}>
                    <p style={{
                      fontSize: '1.3rem',
                      color: '#1e2247',
                      lineHeight: '1.7',
                      marginBottom: '25px',
                      fontWeight: '500'
                    }}>
                      We envision a future where every business, event, and community in Australia feels completely secure and protected through our innovative security solutions.
                    </p>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}>
                      Our vision extends beyond traditional security services to encompass comprehensive protection strategies that adapt to evolving threats while maintaining the highest standards of professionalism and reliability.
                    </p>
                                    </div>
                                </div>
                            </div>

              {/* Core Services Grid */}
                            <div className="row">
                <div className="col-12">
                  <h3 style={{
                    fontSize: '2.2rem',
                    fontWeight: '600',
                    color: '#1e2247',
                    textAlign: 'center',
                    marginBottom: '60px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Our Core Services
                  </h3>
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
                {missionValues.map((value, index) => (
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
                      {value.icon}
                                        </div>
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: hoveredCard === index ? '#1e2247' : '#1e2247'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      margin: 0,
                      color: hoveredCard === index ? '#1e2247' : '#6c757d'
                    }}>
                      {value.description}
                    </p>
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

        .mission-intro-section.loaded {
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
          .mission-intro-section {
            padding-top: 60px !important;
            padding-bottom: 50px !important;
          }
          
          .mission-intro-section div[style*="padding: 40px"] {
            padding: 30px 25px !important;
          }
          
          .row div[style*="gap: 30px"] {
            gap: 20px !important;
          }
        }
      `}</style>
        </>
    )
}