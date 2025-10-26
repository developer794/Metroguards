"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import { Marquee } from "@/components/ui/marquee"



const certificationData = [
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System Standard",
    description: "Demonstrating our commitment to environmental responsibility and sustainable business practices."
  },
  {
    title: "ISO 9001:2015", 
    subtitle: "Quality Management System Standard",
    description: "Ensuring consistent quality in all our security services and operational procedures."
  },
  {
    title: "ISO 45001:2018",
    subtitle: "Health and Safety Management System Standard", 
    description: "Maintaining the highest standards of workplace health and safety for all personnel."
  }
];

const managementPoliciesData = [
  {
    title: "Regular Operating Procedures",
    description: "Comprehensive standard operating procedures that ensure consistent service delivery across all security operations."
  },
  {
    title: "Assignment Directions",
    description: "Clear and detailed assignment instructions that guide our security personnel in their daily responsibilities."
  },
  {
    title: "Safe Work Method Records",
    description: "Documented safety protocols and work methods that collectively incorporate into our structural Contract Management Plans."
  }
];

// Corporate responsibility images and partnerships
const clients = [
  { name: "8", logo: "/assets/img/corporate-responsibility/img8.webp", website: "/wp-content/uploads/2025/06/australian-achiever-award-2016.pdf" },
  { name: "7", logo: "/assets/img/corporate-responsibility/img7.webp", website: "/wp-content/uploads/2025/06/aus-achiever-award-2015.pdf" },
  { name: "1", logo: "/assets/img/corporate-responsibility/img1.webp", website: "/wp-content/uploads/2025/06/aus-achiever-award-2014.pdf" },
  { name: "2", logo: "/assets/img/corporate-responsibility/img2.webp", website: "/wp-content/uploads/2025/06/3240701-E-Certificate-of-Registration-Metro-Guards.pdf" },
  { name: "3", logo: "/assets/img/corporate-responsibility/img3.webp", website: "/wp-content/uploads/2025/06/3240701-Q-Certificate-of-Registration-Metro-Guards.pdf" },
  { name: "4", logo: "/assets/img/corporate-responsibility/img4.webp", website: "/wp-content/uploads/2025/06/3240701-O-Certificate-of-Registration-Metro-Guards.pdf" },
  { name: "5", logo: "/assets/img/corporate-responsibility/img5.webp", website: "https://geelongport.com.au" },
  { name: "6", logo: "/assets/img/corporate-responsibility/img6.webp", website: "/wp-content/uploads/2025/06/ASIAL-Org-Membership-Certificate-New.pdf" },
  { name: "9", logo: "/assets/img/corporate-responsibility/img11.webp", website: "/wp-content/uploads/2025/06/13591.pdf" },
  { name: "10", logo: "/assets/img/corporate-responsibility/img10.webp", website: "https://mpdma.com" },
]

// Social responsibility partner organizations
const socialResponsibilityLogos = [
  { src: "/assets/img/social/The-Royal-Melbourne-Hospital-logo-new-150x150-1.jpg.bv_resized_desktop.jpg.bv (1).webp", alt: "The Royal Melbourne Hospital" },
  { src: "/assets/img/social/blue-ribbon-foundation-150x150-2.jpg.bv_resized_desktop.jpg.bv.webp", alt: "Blue Ribbon Foundation" },
  { src: "/assets/img/social/royal-childeren-hospital-150x150-1.jpg.bv_resized_desktop.jpg.bv.webp", alt: "Royal Children's Hospital" },
  { src: "/assets/img/social/white-ribbon.webp", alt: "The Royal Melbourne Hospital" },
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
        mainTitle="Corporate <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Responsibility</span> & Community Service"
        subtitle="Leading Security Services with Excellence, Integrity & Environmental Sustainability"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Shopping%20Center%20Secuirty%20Guards/CA27AC6C-60CD-44D4-A422-3D5ECF81CF4B_1_105_c.webp"
      >
        <div>
          {/*===== Introduction Section =====*/}
          <section 
            className={`responsibility-intro-section ${isLoaded ? 'loaded' : ''}`}
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
                      Corporate responsibilities
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
                    How We <span style={{ color: '#fdc51a' }}>Serve Our Community</span>
                  </h2>
                  
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '40px',
                    maxWidth: '800px',
                    margin: '0 auto 40px auto'
                  }}>
                    At Metropolitan guards, our top priority is client satisfaction by providing them with service excellence. We put our heart and soul together to protect our clients' lives and businesses, ensuring we have the latest tools, products and solutions for all kinds of break-in controls. We oath to serve our community and esteemed clients with utmost respect and integrity.
                  </p>


                </div>
              </div>
            </div>
          </section>

          {/*===== Health & Safety Section =====*/}
          <section 
            style={{
              paddingTop: '40px',
              paddingBottom: '80px',
              background: '#f8f9fa'
            }}
          >
              <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
                {/*===== Health & Safety Introduction =====*/}
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-10">
                    <h3 style={{
                      fontSize: '2.2rem',
                      fontWeight: '600',
                      color: '#1e2247',
                      marginBottom: '20px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Membership / Health & Safety
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#6c757d',
                      lineHeight: '1.6',
                      marginBottom: '30px'
                    }}>
                      Workplace health and safety is the foremost priority at Metropolitan Guards Security. Through a meticulously designed way of induction, preparation, and assessment, we make certain that every personnel at Metropolitan Guards Security is aware of their rights and duties regarding occupational health and safety and environmental hazards and protection.
                    </p>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#6c757d',
                      lineHeight: '1.6',
                      marginBottom: '50px'
                    }}>
                      Our apt Occupational Health and Safety (OHS) Management guidelines are underpinned by the guidelines of nationally and international organization for standardization (ISO).
                    </p>
                  </div>
                </div>

                {/*===== ISO Certifications Grid =====*/}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px',
                    marginBottom: '60px'
                  }}
                >
                  {certificationData.map((cert, index) => (
                    <div 
                      key={index}
                      style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #f1f3f4',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px)';
                        e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                      }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px auto',
                        color: '#1e2247',
                        fontSize: '1.5rem',
                        fontWeight: '700'
                      }}>
                        ISO
                      </div>
                      <h4 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: '#1e2247',
                        marginBottom: '8px'
                      }}>
                        {cert.title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#fdc51a',
                        marginBottom: '15px'
                      }}>
                        {cert.subtitle}
                      </p>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#6c757d',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/*===== Management Policies Section =====*/}
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '40px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #f1f3f4'
                    }}>
                      <h4 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: '#1e2247',
                        marginBottom: '20px',
                        textAlign: 'center',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        Comprehensive Management Policies
                      </h4>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        lineHeight: '1.6',
                        marginBottom: '30px',
                        textAlign: 'center'
                      }}>
                        We keep a comprehensive range of policies, plans, and methods to manage our services and our responses to a diverse range of OHS and environmental uncertainties.
                      </p>
                      
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        marginTop: '30px'
                      }}>
                        {managementPoliciesData.map((policy, index) => (
                          <div 
                            key={index}
                            style={{
                              background: '#f8f9fa',
                              borderRadius: '12px',
                              padding: '25px',
                              border: '1px solid #e9ecef',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = '#ffffff';
                              e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = '#f8f9fa';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            <h5 style={{
                              fontSize: '1.2rem',
                              fontWeight: '600',
                              color: '#1e2247',
                              marginBottom: '10px'
                            }}>
                              {policy.title}
                            </h5>
                            <p style={{
                              fontSize: '0.95rem',
                              color: '#6c757d',
                              lineHeight: '1.5',
                              margin: 0
                            }}>
                              {policy.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/*===== Partnership Marquee Section =====*/}
                <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-16" style={{marginTop:"50px"}}>
    <div className="max-w-7xl mx-auto">
      {/* Heading (always left) */}
      <div className="mb-8">
        <h2 className="acc-heading text-3xl sm:text-4xl font-bold text-gray-900" style={{color:"#1e2247"}}>
          Accreditation
        </h2>
      </div>

      {/* Grid for equal logos - 10 in one row on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 sm:p-3 lg:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain mx-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
    
    
   
  </section>
              </div>
            </section>

          {/*===== Corporate Social Responsibility Section =====*/}
          <section 
            style={{
              paddingTop: '40px',
              paddingBottom: '80px',
              background: '#f8f9fa'
            }}
          >
              <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-10">
                    <h3 style={{
                      fontSize: '2.2rem',
                      fontWeight: '600',
                      color: '#1e2247',
                      marginBottom: '20px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Corporate Social Responsibility
                    </h3>
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '40px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #f1f3f4',
                      textAlign: 'left',
                      marginBottom: '50px'
                    }}>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        lineHeight: '1.7',
                        marginBottom: '25px'
                      }}>
                        We ensure to play our part in making a healthy and sustainable society believing that a prosperous society promotes awareness and fosters the building of an ideal community. This is the only reason we support <strong>"The Royal Melbourne Hospital"</strong>, which aligns with our credo of creating an all-in healthy and secure society by dedicatedly serving those in need. Moreover, we also join hands with <strong>"Beyond Blue"</strong>, a non-profit organisation that raises awareness against mental health issues and provides the best possible support for the suffering.
                      </p>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        lineHeight: '1.7',
                        margin: 0
                      }}>
                        We at Metropolitan guards believe women are vital to a community and should be treated with the utmost respect. In favour of this ideology, we support the <strong>"White Ribbon"</strong> in its efforts to support violence against women.
                      </p>
                    </div>
                  </div>
                </div>

                {/*===== Social Responsibility Partners Grid =====*/}
                <div className="social-partners-section text-center">
                  <div className="container">
                    <div className="social-partners-header text-center">
                      <div className="social-partners-header-content text-center">
                        <h3 className="social-partners-title">OUR SOCIAL <br/><span>Partners</span></h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="max-w-[1320px] mx-auto px-[15px]">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center">
                        {socialResponsibilityLogos.map((logo, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[200px]"
                          >
                            <img 
                              src={logo.src} 
                              alt={logo.alt}
                              className="h-20 w-auto object-contain mx-auto"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          

          

          {/*===== CTA Section =====*/}
          

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

        .responsibility-intro-section.loaded {
          animation: fadeInUp 0.8s ease-out;
        }

        .responsibility-card {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .responsibility-card:nth-child(1) { animation-delay: 0.1s; }
        .responsibility-card:nth-child(2) { animation-delay: 0.2s; }
        .responsibility-card:nth-child(3) { animation-delay: 0.3s; }

        @media (max-width: 768px) {
          .responsibility-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .responsibility-card {
            padding: 30px 20px !important;
          }

          .row .col-lg-6 div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (max-width: 576px) {
          .btn-group {
            flex-direction: column !important;
            align-items: center;
          }
          
          .btn-group button {
            width: 100%;
            max-width: 280px;
          }
        }

        /* Partnerships Section Styles */
        .partnerships-section {
          padding: 20px 0 80px 0;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .partnerships-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .partnerships-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .partnerships-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .partnerships-title span {
          color: #FFD700;
          font-size: 0.6em;
          display: block;
          margin-top: 0.5rem;
        }

        /* Responsive design for partnerships */
        @media (max-width: 1024px) {
          .partnerships-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
        }

        @media (max-width: 768px) {
          .partnerships-section {
            padding: 20px 0 80px 0;
          }

          .partnerships-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 15px;
            gap: 16px;
          }

          .partnerships-title {
            font-size: 2rem;
            font-weight: 700;
          }
        }

        @media (max-width: 640px) {
          .partnerships-title {
            font-size: 1.75rem;
            font-weight: 700;
          }
        }

        /* Social Partners Section Styles */
        .social-partners-section {
          padding: 20px 0 80px 0;
        }

        .social-partners-header {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .social-partners-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .social-partners-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .social-partners-title span {
          color: #FFD700;
          font-size: 0.6em;
          display: block;
          margin-top: 0.5rem;
        }

        /* Responsive design for social partners */
        @media (max-width: 1024px) {
          .social-partners-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
        }

        @media (max-width: 768px) {
          .social-partners-section {
            padding: 20px 0 80px 0;
          }

          .social-partners-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 15px;
            gap: 16px;
          }

          .social-partners-title {
            font-size: 2rem;
            font-weight: 700;
          }
        }

        @media (max-width: 640px) {
          .social-partners-title {
            font-size: 1.75rem;
            font-weight: 700;
          }
        }
      `}</style>
    </>
  )
}
