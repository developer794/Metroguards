"use client";

import { Briefcase, Store, Truck, HardHat, Hospital, Users } from "lucide-react"



export default function Home() {
  return (
    <>
      {/*===== Industries We Serve Section =====*/}
      <div className="industries-section section-padding" style={{background: '#f8f9fa'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 mb-5">
                {/* Yellow Label */}
                <div className="mb-3">
                    <span style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '700', 
                        color: '#fdc51a', 
                        letterSpacing: '-0.02em', 
                        textTransform: 'uppercase',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                        Industries
                    </span>
                </div>

                {/* Main Heading */}
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.2',
                    margin: '0 0 24px 0',
                    letterSpacing: '-0.02em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                    Industries We Protect
                </h2>

                {/* Description */}
                <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                    color: '#333',
                    margin: '0',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    maxWidth: '800px'
                }}>
                    We provide comprehensive security services for a wide range of industries in Melbourne, tailoring our solutions to meet your specific needs.
                </p>
            </div>
        </div>
        <div className="row g-4 g-md-3 g-lg-4">
            {[
                { icon: <Briefcase size={32} />, title: "Corporate & Commercial", description: "Office Towers, Business Parks, Tech & Legal Firms" },
                { icon: <Store size={32} />, title: "Retail, Hospitality & Major Events", description: "Shopping, Dining, Hotels, Venues, Festivals" },
                { icon: <Truck size={32} />, title: "Industrial, Logistics & Transport", description: "Warehousing, Freight, Manufacturing, Ports" },
                { icon: <HardHat size={32} />, title: "Construction & Infrastructure ", description: "Sites, Civil Works, Energy, Equipment Yards" },
                { icon: <Hospital size={32} />, title: "Healthcare & Aged Care", description: "Hospitals, Clinics, Aged Care, Mental Health" },
                { icon: <Users size={32} />, title: "Public & Community Services", description: " Schools, Councils, Worship, Culture" }
            ].map((industry, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                    <div 
                        className="industry-card h-100 position-relative"
                        style={{
                            backgroundColor: 'transparent',
                            borderRadius: '0',
                            boxShadow: 'none',
                            border: 'none',
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                            textAlign: 'center',
                            overflow: 'visible',
                            cursor: 'pointer',
                            padding: '20px'
                        }}
                    >
                        {/* Card container with unique design */}
                        <div 
                            className="position-relative h-100"
                            style={{
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                borderRadius: '30px',
                                padding: '35px 25px',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                                border: '1px solid rgba(253, 197, 26, 0.1)',
                                transition: 'all 0.6s ease',
                                transform: 'perspective(1000px) rotateX(0deg)',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Animated background elements */}
                            <div 
                                className="position-absolute"
                                style={{
                                    top: '-100px',
                                    left: '-100px',
                                    width: '200px',
                                    height: '200px',
                                    background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                    borderRadius: '50%',
                                    transition: 'all 0.8s ease',
                                    zIndex: '0'
                                }}
                            ></div>
                            <div 
                                className="position-absolute"
                                style={{
                                    bottom: '-80px',
                                    right: '-80px',
                                    width: '160px',
                                    height: '160px',
                                    background: 'radial-gradient(circle, rgba(30, 34, 71, 0.08) 0%, transparent 70%)',
                                    borderRadius: '50%',
                                    transition: 'all 0.8s ease',
                                    zIndex: '0'
                                }}
                            ></div>
                            
                            {/* Icon with unique styling */}
                            <div 
                                className="industry-icon mb-4 d-flex align-items-center justify-content-center mx-auto position-relative"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    background: 'linear-gradient(45deg, #1e2247 0%, #2a2d5a 50%, #1e2247 100%)',
                                    borderRadius: '50%',
                                    color: '#fdc51a',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                                    transition: 'all 0.6s ease',
                                    zIndex: '2',
                                    position: 'relative'
                                }}
                            >
                                {industry.icon}
                                
                                {/* Rotating ring around icon 
                                <div 
                                    className="position-absolute"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        border: '2px solid transparent',
                                        borderTop: '2px solid #fdc51a',
                                        borderRight: '2px solid #fdc51a',
                                        borderRadius: '50%',
                                        top: '-10px',
                                        left: '-10px',
                                        animation: 'rotate 3s linear infinite',
                                        zIndex: '1'
                                    }}
                                ></div>*/}
                            </div>
                            
                            {/* Content */}
                            <div className="position-relative" style={{zIndex: '2'}}>
                                <h5 
                                    className="fw-bold mb-3" 
                                    style={{
                                        color: '#1e2247',
                                        fontSize: '1.3rem',
                                        lineHeight: '1.3',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {industry.title}
                                </h5>
                                <p 
                                    className="mb-0" 
                                    style={{
                                        color: '#6c757d',
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {industry.description}
                                </p>
                            </div>
                            
                            {/* Decorative corner elements */}
                            <div 
                                className="position-absolute"
                                style={{
                                    top: '20px',
                                    right: '20px',
                                    width: '30px',
                                    height: '30px',
                                    background: 'linear-gradient(45deg, #fdc51a, #ffd700)',
                                    borderRadius: '50%',
                                    opacity: '0.3',
                                    zIndex: '1'
                                }}
                            ></div>
                            <div 
                                className="position-absolute"
                                style={{
                                    bottom: '20px',
                                    left: '20px',
                                    width: '20px',
                                    height: '20px',
                                    background: 'linear-gradient(45deg, #1e2247, #2a2d5a)',
                                    borderRadius: '50%',
                                    opacity: '0.4',
                                    zIndex: '1'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
    </>
  )
}