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

const ourGoals = [
  {
    text: "Provide 24/7 protection with rapid response and dependable services.",
    icon: "fas fa-shield-alt"
  },
  {
    text: "Maintain the highest standards of professionalism, accountability, and integrity.",
    icon: "fas fa-award"
  },
  {
    text: "Innovate and adopt advanced security practices to anticipate risks.",
    icon: "fas fa-lightbulb"
  },
  {
    text: "Deliver measurable results that exceed client expectations and build long-term trust.",
    icon: "fas fa-chart-line"
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
        mainTitle="Our <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Mission:</span> Protecting What Matters Most Across Melbourne"
        subtitle="Your safety is our mission, from corporate offices to hospitals and community events, we protect."
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
                    Our Purpose in <span style={{ color: '#fdc51a' }}>Action</span>
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
                      At MetroGuards, our mission is to provide <strong style={{ color: '#fdc51a' }}>reliable, professional, and innovative security solutions</strong> that safeguard Melbourne's businesses, institutions, events, and communities. Every guard, patrol, and security strategy we deploy is guided by our core values: <strong style={{ color: '#fdc51a' }}>integrity, professionalism, accountability, and teamwork</strong>, ensuring <strong style={{ color: '#fdc51a' }}>safety and peace of mind</strong> for our clients.
                    </p>
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
                    Why <span style={{ color: '#fdc51a' }}>Metro Guards Exist</span>
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
                      Metro Guards exists to deliver comprehensive security services that protect people, property, and assets across Melbourne. We aim to create safe environments where businesses and communities can thrive without worry.
                    </p>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}>

                    </p>
                  </div>
                </div>
              </div>

              {/* Our Goals Section */}
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                  <div className="brand-label" style={{ marginBottom: '25px', textAlign: 'center' }}>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#fdc51a',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Commitment
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '40px',
                    textAlign: 'center',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    OUR <span style={{ color: '#fdc51a' }}>GOALS</span>
                  </h2>

                  {/* Goals Grid - 4 cards in one row on desktop */}
                  <div className="goals-grid">
                    {ourGoals.map((goal, index) => (
                      <div
                        key={index}
                        className="goal-card"
                      >
                        <div className="goal-icon">
                          <i className={goal.icon}></i>
                        </div>
                        <p className="goal-text">
                          {goal.text}
                        </p>
                      </div>
                    ))}
                  </div>
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

        .mission-intro-section.loaded {
          animation: fadeInUp 0.8s ease-out;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-bottom: 60px;
        }

        .goal-card {
          background: #ffffff;
          border-radius: 15px;
          padding: 40px 25px;
          border: 1px solid #f1f3f4;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }

        .goal-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%);
        }

        .goal-icon {
          width: 60px;
          height: 60px;
          background: #fdc51a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .goal-icon i {
          font-size: 1.5rem;
          color: #1e2247;
          font-weight: 900;
        }

        .goal-text {
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          color: #1e2247;
          font-weight: 500;
        }

        @media (max-width: 1200px) {
          .goals-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .brand-label span {
            font-size: 0.9rem;
          }
          
          .goals-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .goal-card {
            min-height: 180px;
            padding: 30px 20px;
          }

          .goal-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
          }

          .goal-icon i {
            font-size: 1.3rem;
          }

          .goal-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .mission-intro-section {
            padding-top: 60px;
            padding-bottom: 50px;
          }
          
          .mission-intro-section div[style*="padding: 40px"] {
            padding: 30px 25px;
          }
        }
      `}</style>
    </>
  )
}