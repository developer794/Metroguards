"use client";

import { Shield, Building, Truck, Users, Store, Calendar, Dog, Eye } from "lucide-react";

const whyChooseUsData = [
  {
    icon: <Shield size={48} />,
    title: "Adhoc Security Services",
    description: "Flexible, on-demand security solutions for immediate coverage needs. Our rapid deployment ensures your security requirements are met within hours.",
    link: "/adhoc-security-services"
  },
  {
    icon: <Building size={48} />,
    title: "Building Security Guards",
    description: "Professional building security services protecting commercial properties, offices, and residential complexes with 24/7 monitoring and access control.",
    link: "/building-security-guards"
  },
  {
    icon: <Truck size={48} />,
    title: "Mobile Patrol Security",
    description: "Comprehensive mobile patrol services covering large areas with regular check-ins, incident response, and visible security presence.",
    link: "/mobile-patrol-security"
  },
  {
    icon: <Users size={48} />,
    title: "Private Security Guards",
    description: "Dedicated personal protection and private security services tailored to individual needs, ensuring safety and peace of mind.",
    link: "/private-security-guards"
  },
  {
    icon: <Store size={48} />,
    title: "Retail Security Guards",
    description: "Specialized retail security services preventing theft, managing crowds, and maintaining a safe shopping environment for customers and staff.",
    link: "/retail-security-guard"
  },
  {
    icon: <Calendar size={48} />,
    title: "Event Security Guards",
    description: "Professional event security services for concerts, festivals, corporate events, and private functions with crowd management expertise.",
    link: "/event-security-guards"
  },
  {
    icon: <Dog size={48} />,
    title: "K9 Security Services",
    description: "Advanced canine security services with trained dogs for detection, patrol, and enhanced security coverage in various environments.",
    link: "/k9-security-guards-in-melbourne"
  },
  {
    icon: <Eye size={48} />,
    title: "Asset Protection",
    description: "Comprehensive asset protection services safeguarding valuable property, equipment, and inventory with advanced monitoring systems.",
    link: "/asset-protection"
  }
];

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us-section" style={{
      padding: '80px 0',
      backgroundColor: '#f8f9fa'
    }}>
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 40px' }}>
        {/* Main Heading - Top Left */}
        <div className="row">
          <div className="col-lg-12">
            <div className="main-heading mb-5">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'black',
                lineHeight: '1.2',
                marginBottom: '0',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Choose Other Metro Guards Security Services
              </h2>
            </div>
          </div>
        </div>

        {/* Feature Cards - 3 columns */}
        <div className="row">
          <div className="col-lg-12">
            <div className="features-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px'
            }}>
              {whyChooseUsData.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card"
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '40px 30px',
                    borderRadius: '12px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  {/* Top sliding line on hover */}
                  <div
                    className="hover-line"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '0%',
                      height: '4px',
                      backgroundColor: '#fdc51a',
                      transition: 'width 0.4s ease-in-out',
                      zIndex: '1'
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget.parentElement;
                      const line = card?.querySelector('.hover-line') as HTMLElement;
                      if (line) {
                        line.style.width = '100%';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget.parentElement;
                      const line = card?.querySelector('.hover-line') as HTMLElement;
                      if (line) {
                        line.style.width = '0%';
                      }
                    }}
                  />

                  {/* Large background icon shape with icon inside */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      width: '120px',
                      height: '120px',
                      backgroundColor: '#161540',
                      borderRadius: '50%',
                      zIndex: '0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'transparent',
                        borderRadius: '50%',
                        color: '#fdc51a',
                        border: '2px solid #fdc51a'
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e2247',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    position: 'relative',
                    zIndex: '2'
                  }}>
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p style={{
                    fontSize: '1rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    margin: '0 0 25px 0',
                    position: 'relative',
                    zIndex: '2'
                  }}>
                    {feature.description}
                  </p>

                  {/* Read More Button */}
                  <div style={{ position: 'relative', zIndex: '2' }}>
                    <a
                      href={feature.link}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 20px',
                        backgroundColor: '#f0f0f0',
                        color: '#1e2247',
                        textDecoration: 'none',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fdc51a';
                        e.currentTarget.style.color = '#1e2247';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                        e.currentTarget.style.color = '#1e2247';
                      }}
                    >
                      Read more
                      <span style={{ fontSize: '1.2rem' }}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover .hover-line {
          width: 100% !important;
        }

        @media (max-width: 1199px) {
          .container {
            padding: 0 32px !important;
          }
        }

        @media (max-width: 1199px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 1023px) {
          .container {
            padding: 0 24px !important;
          }
          
          .why-choose-us-section {
            padding: 60px 0 !important;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
          
          .feature-card {
            padding: 35px 25px !important;
          }
          
          .main-heading h2 {
            margin-bottom: 30px !important;
          }
        }

        @media (max-width: 767px) {
          .container {
            padding: 0 20px !important;
          }
        }

        @media (max-width: 639px) {
          .container {
            padding: 0 16px !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .feature-card {
            padding: 30px 20px !important;
          }
          
          .feature-icon {
            width: 50px !important;
            height: 50px !important;
          }
          
          .feature-card .feature-icon div {
            width: 50px !important;
            height: 50px !important;
          }
        }

        @media (max-width: 479px) {
          .container {
            padding: 0 12px !important;
          }
          
          .feature-card {
            padding: 25px 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
