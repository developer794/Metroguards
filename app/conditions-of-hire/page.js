"use client";
import Layout from "@/components/layout/Layout"
import { useState, useEffect } from 'react'
import Accrediation10 from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"


export default function ConditionsOfHirePage() {
    const [activeSection, setActiveSection] = useState('overview');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                headTitle="Conditions of Hire - Metropolitan Guards Security Services"
                breadcrumbTitle="Terms & Conditions"
                mainTitle="Professional <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Hire Conditions</span>"
                subtitle="Comprehensive terms and conditions for hiring our professional security personnel. Clear, transparent, and designed to protect both parties in our service agreements."
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/A7BE18A7-13A3-4A00-88C4-489D71E252D5_1_105_c.jpeg"
            >
                <div className={`conditions-page ${isVisible ? 'visible' : ''}`}>
                    {/*===== Introduction Section =====*/}
                    <section className="intro-section" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        padding: '80px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="intro-content" data-aos="fade-right">
                                        <div className="intro-badge" style={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                            color: '#1e2247',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '30px',
                                            boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-file-earmark-text me-2"></i>
                                            Legal Documentation
                                </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            lineHeight: '1.2',
                                            marginBottom: '25px'
                                        }}>
                                            Clear & Transparent 
                                            <span style={{
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}> Hire Conditions</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            lineHeight: '1.6',
                                            marginBottom: '35px'
                                        }}>
                                            Our comprehensive terms and conditions are designed to protect both parties 
                                            while ensuring clear understanding of responsibilities, obligations, and 
                                            expectations when hiring our professional security personnel.
                                        </p>
                                        <div className="intro-stats" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
                                            <div className="stat-item">
                                                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>16</div>
                                                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Main Sections</div>
                                    </div>
                                            <div className="stat-item">
                                                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>50+</div>
                                                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Clauses</div>
                                    </div>
                                            <div className="stat-item">
                                                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>100%</div>
                                                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Transparent</div>
                                    </div>
                                </div>
                                        <div className="intro-actions" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    <button 
                                        onClick={() => scrollToSection('overview')} 
                                                style={{
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    padding: '15px 30px',
                                                    borderRadius: '50px',
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 6px 20px rgba(30, 34, 71, 0.4)';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.3)';
                                                }}
                                    >
                                        <span>Explore Conditions</span>
                                        <i className="bi bi-arrow-down"></i>
                                    </button>
                                            <a href="/contacts" style={{
                                                background: 'transparent',
                                                color: '#1e2247',
                                                border: '2px solid #1e2247',
                                                padding: '13px 30px',
                                                borderRadius: '50px',
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.background = '#1e2247';
                                                e.target.style.color = '#fff';
                                                e.target.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.background = 'transparent';
                                                e.target.style.color = '#1e2247';
                                                e.target.style.transform = 'translateY(0)';
                                            }}
                                            >
                                        <i className="bi bi-telephone"></i>
                                        <span>Get in Touch</span>
                                    </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="intro-visual" data-aos="fade-left" style={{ position: 'relative' }}>
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            borderRadius: '20px',
                                            padding: '40px',
                                            boxShadow: '0 20px 40px rgba(30, 34, 71, 0.2)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-50px',
                                                right: '-50px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'rgba(253, 197, 26, 0.1)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '-30px',
                                                left: '-30px',
                                                width: '60px',
                                                height: '60px',
                                                background: 'rgba(253, 197, 26, 0.15)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div className="conditions-icons" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-file-earmark-text"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Legal Clarity</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Clear terms and conditions</p>
                                                </div>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-shield-check"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Protection</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Both parties protected</p>
                                                </div>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-people"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Professional</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Expert security personnel</p>
                                                </div>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-check-circle"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Compliance</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Full legal compliance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    
                    {/*===== Modern Key Conditions Section =====*/}
                    <section id="key-conditions" className="modern-key-conditions-section" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        padding: '100px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-100px',
                            right: '-100px',
                            width: '300px',
                            height: '300px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.05) 0%, rgba(243, 156, 18, 0.03) 100%)',
                            borderRadius: '50%',
                            filter: 'blur(60px)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-150px',
                            left: '-150px',
                            width: '400px',
                            height: '400px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.03) 0%, rgba(44, 62, 80, 0.02) 100%)',
                            borderRadius: '50%',
                            filter: 'blur(80px)'
                        }}></div>

                        <div className="container">
                            {/* Section Header */}
                            <div className="section-header text-center" style={{ marginBottom: '80px' }}>
                                <div className="section-badge" style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                    color: '#1e2247',
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '30px',
                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                }}>
                                    <i className="bi bi-file-earmark-text me-2"></i>
                                    Essential Hire Conditions
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: '700',
                                    color: '#1e2247',
                                    marginBottom: '25px',
                                    lineHeight: '1.2'
                                }}>
                                    Key <span style={{
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>Hiring Conditions</span>
                                </h2>
                                <p style={{
                                    fontSize: '1.2rem',
                                    color: '#6c757d',
                                    maxWidth: '700px',
                                    margin: '0 auto',
                                    lineHeight: '1.6'
                                }}>
                                    Essential conditions that apply when hiring our professional security personnel. 
                                    These terms ensure clarity, protection, and compliance for all parties involved.
                                </p>
                            </div>

                            {/* Conditions Timeline */}
                            <div className="conditions-timeline" style={{ position: 'relative' }}>
                                {/* Timeline Line */}
                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '0',
                                    bottom: '0',
                                    width: '4px',
                                    background: 'linear-gradient(180deg, #fdc51a 0%, #fdc51a 100%)',
                                    transform: 'translateX(-50%)',
                                    borderRadius: '2px',
                                    zIndex: '1'
                                }}></div>

                                {/* Condition 1 - Supervision */}
                                <div className="timeline-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '80px',
                                    position: 'relative'
                                }}>
                                    <div className="timeline-content left" style={{
                                        width: '45%',
                                        paddingRight: '40px'
                                    }} data-aos="fade-right">
                                        <div style={{
                                            background: '#fff',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                            border: '1px solid #f0f0f0',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20px',
                                                right: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(243, 156, 18, 0.05) 100%)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div className="condition-header" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '25px'
                                            }}>
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.8rem',
                                                    color: '#1e2247',
                                                    flexShrink: '0'
                                                }}>
                                                    <i className="bi bi-eye"></i>
                                                </div>
                                                <h3 style={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    color: '#1e2247',
                                                    margin: '0'
                                                }}>Supervision Requirements</h3>
                                            </div>
                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.7',
                                                marginBottom: '25px',
                                                fontSize: '1rem'
                                            }}>
                                                The client is responsible for the onsite supervision and direction of our on-hired staff. 
                                                It is also the client responsibility to provide a safe workplace for our employees, 
                                                abiding by the Occupational Health and Safety Act 1985 and any other relevant industry regulations.
                                            </p>
                                            <div className="highlights" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(253, 197, 26, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Onsite supervision required</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(253, 197, 26, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Safe workplace provision</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(253, 197, 26, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>OH&S Act 1985 compliance</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Marker */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: '#1e2247',
                                        zIndex: '2',
                                        boxShadow: '0 8px 25px rgba(253, 197, 26, 0.4)'
                                    }}>
                                        01
                                    </div>
                                    
                                    <div style={{ width: '45%' }}></div>
                                </div>

                                {/* Condition 2 - Client Obligations */}
                                <div className="timeline-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '80px',
                                    position: 'relative'
                                }}>
                                    <div style={{ width: '45%' }}></div>
                                    
                                    {/* Timeline Marker */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: '#fff',
                                        zIndex: '2',
                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.4)'
                                    }}>
                                        02
                                    </div>
                                    
                                    <div className="timeline-content right" style={{
                                        width: '45%',
                                        paddingLeft: '40px'
                                    }} data-aos="fade-left">
                                        <div style={{
                                            background: '#fff',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                            border: '1px solid #f0f0f0',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20px',
                                                left: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, rgba(44, 62, 80, 0.05) 100%)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div className="condition-header" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '25px'
                                            }}>
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.8rem',
                                                    color: '#fff',
                                                    flexShrink: '0'
                                                }}>
                                                    <i className="bi bi-person-check"></i>
                                                </div>
                                                <h3 style={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    color: '#1e2247',
                                                    margin: '0'
                                                }}>Client Obligations</h3>
                                            </div>
                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.7',
                                                marginBottom: '25px',
                                                fontSize: '1rem'
                                            }}>
                                                The client acknowledges that our employees and independent contractors are hired at the client's request, 
                                                to perform the work that has been requested. From the time that our employees or independent contractors 
                                                report to the client for their duties they are under the care, control and supervision of the client 
                                                for the duration of the assignment.
                                            </p>
                                            <div className="highlights" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(30, 34, 71, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #1e2247'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Client-requested assignments</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(30, 34, 71, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #1e2247'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Full supervision responsibility</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(30, 34, 71, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #1e2247'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Assignment duration coverage</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Condition 3 - Permanent Placements */}
                                <div className="timeline-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '80px',
                                    position: 'relative'
                                }}>
                                    <div className="timeline-content left" style={{
                                        width: '45%',
                                        paddingRight: '40px'
                                    }} data-aos="fade-right">
                                        <div style={{
                                            background: '#fff',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                            border: '1px solid #f0f0f0',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20px',
                                                right: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, rgba(30, 34, 71, 0.05) 100%)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div className="condition-header" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '25px'
                                            }}>
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.8rem',
                                                    color: '#fff',
                                                    flexShrink: '0'
                                                }}>
                                                    <i className="bi bi-briefcase"></i>
                                                </div>
                                                <h3 style={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    color: '#1e2247',
                                                    margin: '0'
                                                }}>Permanent Placements</h3>
                                            </div>
                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.7',
                                                marginBottom: '25px',
                                                fontSize: '1rem'
                                            }}>
                                                Under no circumstances can the client offer and/or directly approach to offer and/or employ any of 
                                                Metropolitan Guard Services personnel without the direct approval of Metropolitan Guard Services management. 
                                                The client accepts that they will be liable and immediately invoiced for a placement fee equal to 
                                                160 hours of each person's charge rate.
                                            </p>
                                            <div className="highlights" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(30, 34, 71, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #1e2247'
                                                }}>
                                                    <i className="bi bi-exclamation-triangle-fill" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Management approval required</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(30, 34, 71, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #1e2247'
                                                }}>
                                                    <i className="bi bi-exclamation-triangle-fill" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>160-hour placement fee</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(30, 34, 71, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #1e2247'
                                                }}>
                                                    <i className="bi bi-exclamation-triangle-fill" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>Immediate invoicing</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Marker */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: '#fff',
                                        zIndex: '2',
                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.4)'
                                    }}>
                                        03
                                    </div>
                                    
                                    <div style={{ width: '45%' }}></div>
                                </div>

                                {/* Condition 4 - Booking Conditions */}
                                <div className="timeline-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative'
                                }}>
                                    <div style={{ width: '45%' }}></div>
                                    
                                    {/* Timeline Marker */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: '#fff',
                                        zIndex: '2',
                                        boxShadow: '0 8px 25px rgba(253, 197, 26, 0.4)'
                                    }}>
                                        04
                                    </div>
                                    
                                    <div className="timeline-content right" style={{
                                        width: '45%',
                                        paddingLeft: '40px'
                                    }} data-aos="fade-left">
                                        <div style={{
                                            background: '#fff',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                            border: '1px solid #f0f0f0',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20px',
                                                left: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 100%)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div className="condition-header" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '25px'
                                            }}>
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.8rem',
                                                    color: '#fff',
                                                    flexShrink: '0'
                                                }}>
                                                    <i className="bi bi-calendar-check"></i>
                                                </div>
                                                <h3 style={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    color: '#1e2247',
                                                    margin: '0'
                                                }}>Booking Conditions</h3>
                                            </div>
                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.7',
                                                marginBottom: '25px',
                                                fontSize: '1rem'
                                            }}>
                                                Customers need to email 48 hours prior to commencement date & time for booking details confirmation. 
                                                The rates are inclusive of payroll tax, superannuation, work cover and public liability of 10M. 
                                                Booking confirmation will be made on receipt of payment and on the basis of details provided by client 
                                                at the time of booking.
                                            </p>
                                            <div className="highlights" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(253, 197, 26, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-clock-fill" style={{ color: '#fdc51a', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>48-hour notice required</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(253, 197, 26, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-shield-check" style={{ color: '#fdc51a', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>$10M public liability included</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 15px',
                                                    background: 'rgba(253, 197, 26, 0.08)',
                                                    borderRadius: '15px',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.1rem' }}></i>
                                                    <span style={{ color: '#1e2247', fontWeight: '600', fontSize: '0.9rem' }}>All taxes and fees included</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="section-cta text-center" style={{ marginTop: '80px' }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                    borderRadius: '25px',
                                    padding: '50px',
                                    color: '#fff',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-50px',
                                        right: '-50px',
                                        width: '150px',
                                        height: '150px',
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '50%'
                                    }}></div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-30px',
                                        left: '-30px',
                                        width: '100px',
                                        height: '100px',
                                        background: 'rgba(253, 197, 26, 0.08)',
                                        borderRadius: '50%'
                                    }}></div>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        color: '#fff'
                                    }}>
                                        Questions About Our Hire Conditions?
                                    </h3>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: 'rgba(255,255,255,0.8)',
                                        marginBottom: '30px',
                                        maxWidth: '600px',
                                        margin: '0 auto 30px'
                                    }}>
                                        Our team is here to clarify any conditions and ensure you have a complete understanding 
                                        of our hiring process before moving forward.
                                    </p>
                                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                        <a href="/contacts" style={{
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                            color: '#1e2247',
                                            padding: '15px 30px',
                                            borderRadius: '50px',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 10px 25px rgba(253, 197, 26, 0.4)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                        >
                                            <i className="bi bi-telephone"></i>
                                            <span>Contact Us Now</span>
                                        </a>
                                        <a href="/get-quotation" style={{
                                            background: 'transparent',
                                            color: '#fff',
                                            border: '2px solid rgba(255,255,255,0.3)',
                                            padding: '13px 30px',
                                            borderRadius: '50px',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.background = '#fff';
                                            e.target.style.color = '#1e2247';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.background = 'transparent';
                                            e.target.style.color = '#fff';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                        >
                                            <i className="bi bi-file-text"></i>
                                            <span>Get Quotation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*===== Modern Payment Terms Section =====*/}
                    <section id="payment-terms" className="modern-payment-terms-section" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f6f7fb 100%)',
                        padding: '100px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-120px',
                            right: '-120px',
                            width: '320px',
                            height: '320px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.06) 0%, rgba(243, 156, 18, 0.04) 100%)',
                            borderRadius: '50%',
                            filter: 'blur(70px)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-160px',
                            left: '-160px',
                            width: '420px',
                            height: '420px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.04) 0%, rgba(44, 62, 80, 0.03) 100%)',
                            borderRadius: '50%',
                            filter: 'blur(90px)'
                        }} />

                        <div className="container">
                            {/* Section Header */}
                            <div className="text-center" style={{ marginBottom: '70px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                    color: '#1e2247',
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '24px',
                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                }}>
                                    <i className="bi bi-cash-coin me-2"></i>
                                    Payment Information
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                                    fontWeight: 700,
                                    color: '#1e2247',
                                    marginBottom: '16px'
                                }}>
                                    Payment Terms <span style={{
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}> & Conditions</span>
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#6c757d',
                                    maxWidth: '760px',
                                    margin: '0 auto'
                                }}>
                                    We pay our personnel weekly. Pre-paid terms and timely invoice handling keep your service running smoothly.
                                </p>
                            </div>

                            {/* Content */}
                            <div className="row align-items-stretch">
                                {/* Left: Policy Cards */}
                                <div className="col-lg-7">
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <div style={{
                                                background: '#fff',
                                                border: '1px solid #eff0f3',
                                                borderLeft: '6px solid #fdc51a',
                                                borderRadius: '18px',
                                                padding: '28px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                                    <div style={{
                                                        width: '56px', height: '56px', borderRadius: '14px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        color: '#1e2247', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem'
                                                    }}>
                                                        <i className="bi bi-file-text"></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.2rem' }}>Invoices</h4>
                                                        <p style={{ margin: '8px 0 0', color: '#6c757d' }}>
                                                            All invoice enquiries or discrepancies must be addressed within 7 days of invoice date. 
                                                            Disputes on a specific invoice must not delay payment of other due amounts within agreed terms.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div style={{
                                                background: '#fff',
                                                border: '1px solid #ffe5e8',
                                                borderLeft: '6px solid #1e2247',
                                                borderRadius: '18px',
                                                padding: '28px',
                                                boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                                    <div style={{
                                                        width: '56px', height: '56px', borderRadius: '14px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem'
                                                    }}>
                                                        <i className="bi bi-exclamation-triangle-fill"></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.2rem' }}>Overdue Accounts</h4>
                                                        <p style={{ margin: '8px 0 0', color: '#6c757d' }}>
                                                            Accounts overdue by more than 7 days may incur an administration fee. Recovery costs, including
                                                            agency fees and legal costs, may be charged to the client.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div style={{
                                                background: '#fff',
                                                border: '1px solid #e9f7ef',
                                                borderLeft: '6px solid #fdc51a',
                                                borderRadius: '18px',
                                                padding: '28px',
                                                boxShadow: '0 10px 30px rgba(253, 197, 26, 0.08)'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                                    <div style={{
                                                        width: '56px', height: '56px', borderRadius: '14px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem'
                                                    }}>
                                                        <i className="bi bi-credit-card-fill"></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.2rem' }}>Pre-Paid Terms</h4>
                                                        <p style={{ margin: '8px 0 0', color: '#6c757d' }}>
                                                            Pre-paid net terms are required to ensure uninterrupted service delivery and weekly payroll cycles.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Process steps */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '24px' }}>
                                        {[
                                            { icon: 'bi-receipt', text: 'Receive Invoice' },
                                            { icon: 'bi-hourglass-split', text: 'Pay Within Terms' },
                                            { icon: 'bi-shield-check', text: 'Service Continues' }
                                        ].map((step, idx) => (
                                            <div key={idx} style={{
                                                background: '#fff', border: '1px solid #eff0f3', borderRadius: '14px',
                                                padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '10px'
                                            }}>
                                                <div style={{
                                                    width: '36px', height: '36px', borderRadius: '10px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    color: '#1e2247', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }}>
                                                    <i className={`bi ${step.icon}`}></i>
                                                </div>
                                                <span style={{ color: '#1e2247', fontWeight: 600, fontSize: '0.95rem' }}>{step.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Stats Panel */}
                                <div className="col-lg-5">
                                    <div style={{ height: '100%', display: 'grid', gap: '18px' }}>
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            borderRadius: '20px', color: '#fff', padding: '28px', position: 'relative', overflow: 'hidden'
                                        }}>
                                            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '110px', height: '110px', background: 'rgba(253,197,26,0.12)', borderRadius: '50%' }} />
                                            <h4 style={{ margin: 0, fontWeight: 700 }}>At-a-glance</h4>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginTop: '16px' }}>
                                                {[
                                                    { value: '7', label: 'Days for Queries' },
                                                    { value: '48hr', label: 'Booking Notice' },
                                                    { value: '$10M', label: 'Public Liability' },
                                                    { value: '160hr', label: 'Placement Fee' }
                                                ].map((s, i) => (
                                                    <div key={i} style={{
                                                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                                                        borderRadius: '14px', padding: '16px', textAlign: 'center'
                                                    }}>
                                                        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fdc51a' }}>{s.value}</div>
                                                        <div style={{ opacity: 0.85 }}>{s.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div style={{
                                            background: '#fff', border: '1px solid #eff0f3', borderRadius: '20px',
                                            padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                                        }}>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, marginBottom: '12px' }}>Need Help?</h4>
                                            <p style={{ margin: 0, color: '#6c757d' }}>Talk to our accounts team for flexible options or clarifications.</p>
                                            <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                                                <a href="tel:1300731173" style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#1e2247',
                                                    padding: '10px 16px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none'
                                                }}><i className="bi bi-telephone me-1"></i> Call</a>
                                                <a href="mailto:admin@metroguards.com.au" style={{
                                                    background: 'transparent', color: '#1e2247', border: '2px solid #1e2247',
                                                    padding: '8px 16px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none'
                                                }}><i className="bi bi-envelope me-1"></i> Email</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*===== General Terms Content Section =====*/}
                    <div className="general-terms-section bg-29 section-padding">
                        <div className="container">
                            <div className="text-center" style={{ marginBottom: '70px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                    color: '#1e2247',
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '24px',
                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                }}>
                                    <i className="bi bi-file-text me-2"></i>
                                    Legal Agreement
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                                    fontWeight: 700,
                                    color: '#1e2247',
                                    marginBottom: '12px'
                                }}>
                                    General <span style={{
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>Terms</span>
                                </h2>
                                <p style={{
                                    fontSize: '1.05rem',
                                    color: '#6c757d',
                                    maxWidth: '760px',
                                    margin: '0 auto'
                                }}>
                                    Detailed terms and conditions governing our security service agreements.
                                </p>
                            </div>
                            <div className="row g-3 mb-4">
                                <div className="col-md-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '14px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#1e2247', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="bi bi-shield-lock"></i>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1e2247' }}>Compliance Focus</div>
                                            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Aligned with AU regulations</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '14px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="bi bi-briefcase"></i>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1e2247' }}>Clear Obligations</div>
                                            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Client & provider duties</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '14px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="bi bi-card-checklist"></i>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1e2247' }}>Comprehensive</div>
                                            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>15+ core sections</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="terms-content bg-white p-5 rounded shadow-lg" style={{ borderRadius: '24px', border: '1px solid #eff0f3', boxShadow: '0 18px 50px rgba(0,0,0,0.06)' }}>
                                        
                                        {/*===== Supply Agreement =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                1. SUPPLY AGREEMENT
                                            </h3>
                                            <ol className="terms-list">
                                                <li>This Agreement (as varied from time to time in accordance with its terms) shall apply to each provision of Goods and Services by Metropolitan Guards Services ("MGS") to you and is constituted by the General Terms and MGS's standard pricing, and if applicable, the Specific Terms and any Proposal.</li>
                                                <li>The General Terms of this Agreement shall apply to all supplies by MGS to You. The Specific Terms shall apply to the specific goods or services requested by you, and where inconsistent with the General Terms, the Specific Terms shall take precedence.</li>
                                                <li>MGS is in agreement with independent contractor such as State Security Solutions Pty Ltd having ABN: 47 622 754 723 to supply manpower security services to its client, The client authorize MGS to use independent contractor where services required.</li>
                                            </ol>
                                        </div>

                                        {/*===== Requests and Pricing =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                2. REQUESTS, PROPOSALS AND PRICING OF FEES
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You may request MGS to provide any Goods or Services to You. MGS is not obliged to provide any Goods or Services to You but may in its discretion supply such Goods or Services subject to this Agreement and MGS's standard pricing, in which case the Fees will be in accordance with the standard pricing as varied from time to time.</li>
                                                <li>Prior to supply MGS may in its discretion provide a Proposal to you setting out pricing which is different to the standard pricing. If you accept a Proposal, the Fees will be as set out in a Proposal, subject to variation in accordance with this Agreement.</li>
                                                <li>MGS may vary the specific Service offerings in a Proposal from time to time in its absolute discretion, and in such instances, the Fees will be varied accordingly.</li>
                                                <li>Where You request MGS to carry out any additional work not covered by the terms of a Proposal then the additional work shall be subject to these terms unless expressly otherwise provided and the Fees shall be increased by the amount quoted for such extra work, or if no fee is quoted, an amount calculated at MGS's standard pricing.</li>
                                            </ol>
                                        </div>

                                        {/*===== Payment of Fees =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                3. PAYMENT OF FEES
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You shall pay MGS the Fees on or prior to the delivery of the Goods or Services requested by you. If Goods or Services are supplied to you prior to payment, then you are obliged to pay for those Goods or Services from the date of supply.</li>
                                                <li>If MGS grants You payment terms or credit in writing signed by an authorized officer of MGS, or otherwise sets out different payment terms in a Proposal, then such terms will vary clause 3.1 above.</li>
                                                <li>The Fees charged for Goods and/or Services may be varied by MGS from time to time by notice to you. This will apply even if you accept a Proposal, but only to Goods or Services supplied after the notice of variation.</li>
                                                <li>MGS shall have the right to charge interest on the outstanding amount at the rate of 2% above the 30-day bank bill rate specified by Banking Corporation at the relevant time. Interest accrues daily from (and including) the due date to (but excluding) the date of actual payment and is calculated on actual days elapsed and a year of 365 days. You will be required to pay all Fees due to MGS upon receipt of this notice and you will be charged the reasonable cost of all expenses, including legal costs incurred in the enforcement of the notice of default.</li>
                                            </ol>
                                        </div>

                                        {/*===== GST =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                4. GST
                                            </h3>
                                            <ol className="terms-list">
                                                <li>Where a supply under these terms and conditions is or becomes subject to a GST, an amount equal to the GST paid or payable in respect of that supply shall be added to the amount exclusive of GST paid or payable for that supply under these terms and conditions.</li>
                                                <li>The provisions contained in clause 4.1 apply notwithstanding any other clause of these terms and conditions whatsoever;</li>
                                                <li>Each party agrees to do all things, including providing invoices and other documentation that may be necessary or desirable to enable or assist the other party to claim any credit, set-off, rebate or refund in relation to any amount of GST paid or payable in respect of any supply under these terms and conditions.</li>
                                                <li>In this clause GST has the meaning it has in A New Tax System (Goods and Services Tax) Act 1999 (Cwlth).</li>
                                            </ol>
                                        </div>

                                        {/*===== Term and Termination =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                5. TERM AND TERMINATION
                                            </h3>
                                            <ol className="terms-list">
                                                <li>A Proposal may specify a minimum term for the supply of Services. Upon expiration of a minimum term this Agreement will remain in force until a party gives one (1) months written notice to the other party of termination. MGS may terminate prior to the expiry of a minimum term at any time by providing Seven (1) month written notice to you.</li>
                                                <li>Either party may terminate a supply if:
                                                    <ol type="a">
                                                        <li>the other party commits any material or persistent breach of its obligations under this Agreement which in the case of a breach capable of remedy, shall not have been remedied within 14 days of receipt by the party in breach of a notice identifying the breach and requiring its remedy or such other reasonable period depending on the circumstances); or</li>
                                                        <li>The other becomes insolvent or where an individual becomes bankrupt or enters a scheme or arrangement with creditors.</li>
                                                    </ol>
                                                </li>
                                                <li>Termination under this clause must be affected by written notice served on the other party. Termination under this clause shall be without prejudice to any rights that may have accrued for either of the parties before termination and all sums due under this Agreement shall become payable in full when termination takes effect.</li>
                                                <li>If you wish to terminate or cancel a supply of Services prior to the expiry of the minimum term, you will be required to pay the remaining payments up to the end of the minimum term.</li>
                                                <li>MGS may suspend provision of Services immediately and for such period as MGS considers appropriate if any monies owing to MGS are due and unpaid.</li>
                                            </ol>
                                        </div>

                                        {/*===== Termination prior to supply =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                6. TERMINATION PRIOR TO SUPPLY
                                            </h3>
                                            <ol className="terms-list">
                                                <li>MGS may terminate this Agreement, or a Proposal, in full or in relation to specific Goods or Services, immediately if, in its absolute discretion, the provision of the Services at any of Your Sites poses a risk to any of MGS's personnel.</li>
                                                <li>MGS may also immediately terminate this Agreement or a Proposal, if it has reasonable grounds to believe you are insolvent.</li>
                                            </ol>
                                        </div>

                                        {/*===== Liability =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                7. LIABILITY
                                            </h3>
                                            <ol className="terms-list">
                                                <li>This Agreement shall be subject to any rights conferred upon MGS and You by the Competition and Consumer Act 2010 or similar legislation which cannot by agreement or otherwise be excluded, restricted or modified. Where any warranty or condition cannot be excluded then liability shall be limited to, at the election of MGS, re supply or the payment of the cost of resupply of any goods or services in breach of such warranty or condition.</li>
                                                <li>MGS will not be liable to You for:
                                                    <ol type="a">
                                                        <li>failing to supply any of the Goods or Services as a consequence of strikes, labour disputes, fires, floods, other extreme weather conditions, accidents, invasions, riots, mobs, wars, national emergencies, significant or sustained disruption to power services, embargoes or restraints or any other circumstances beyond the reasonable control of MGS such as unusually high occurrence of Alarm Responses;</li>
                                                        <li>Any indirect, consequential, special or economic loss, cost or liability; or</li>
                                                        <li>any loss of profit, loss of use, loss of income, loss of rental or other benefit, loss of production, loss of actual or potential business opportunity or loss to reputation; or</li>
                                                        <li>any loss or damage suffered by You except if such loss or damage is caused solely and exclusively by the MGS employee</li>
                                                        <li>any loss, damage or destruction of keys, key cards or other access device provided by You to MGS, including but not limited to replacement of locks or reprogramming of access devices. Notwithstanding MGS agrees to pay for the replacement cost of key, key card, if such loss, damage or destruction is caused solely by MGS employee.</li>
                                                    </ol>
                                                </li>
                                                <li>In any event, liability of MGS whether in contract, tort (including negligence) or otherwise will be limited to a maximum amount equal to the Fees paid to MGS on daily basis, in respect of the aggregate of all claims arising out of or in relation to any one event or series of events.</li>
                                                <li>You shall notify MGS in writing of any claim within 7 days of the day upon which you became aware of or ought to have become aware of the existence of such claim. If no such notice is given you will be deemed to have waived and abandoned completely any such claim which after the expiration of such period of 7 days shall not be allowable or admitted. Time shall be of the essence of this clause.</li>
                                                <li>You shall keep MGS indemnified at all times against any loss arising from claims made against MGS by any party with respect to any theft, loss, damage, destruction, death or injury occurring on the Site arising out of or in any way in relation to the provision or failure to provide the Services except in the case of negligence on the part of MGS, its employees or agents.</li>
                                                <li>MGS shall to the maximum extent permitted by law have no liability whatsoever to You in respect of any act or omission on its part for any work required to be undertaken by MGS pursuant to this Agreement if the circumstances or event which would otherwise give rise to liability occurs at a time when You is in breach of its payment obligations to MGS.</li>
                                            </ol>
                                        </div>

                                        {/*===== Your Sites =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                8. YOUR SITES
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You authorizes MGS and its representatives to enter Your Sites for the purpose of this Agreement.</li>
                                                <li>You warrant that each of Your Sites is a safe place of work and free of harmful materials, infections or building diseases.</li>
                                                <li>Clients will be responsible for a risk management plan prior to the commencement of a security activity.</li>
                                            </ol>
                                        </div>

                                        {/*===== Intellectual Property =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                9. INTELLECTUAL PROPERTY
                                            </h3>
                                            <ol className="terms-list">
                                                <li>MGS retain all rights, title and interest subsisting in any design(s), documentation, diagrams or plans and other information and materials ("MGS Materials") supplied to you for the purposes of carrying out the Services under this Agreement.</li>
                                                <li>Where You supply any design(s), documentation, diagrams or plans and other information and materials ("Customer Materials") under this Agreement, You retain all right, title and interest in such Customer Materials but grant MGS a perpetual, irrevocable, royalty free non-exclusive license to use, reproduce and modify You Materials to enable MGS to fulfil its obligations under this Agreement. You agree to accept full responsibility for all Customer Materials provided to MGS under this Agreement and agrees to indemnify MGS for any action, claim, liability, cost or expense arising out of any threatened or actual infringement of intellectual property rights arising out of the use by MGS of You Materials</li>
                                            </ol>
                                        </div>

                                        {/*===== Dispute Resolution =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                10. DISPUTE RESOLUTION
                                            </h3>
                                            <ol className="terms-list">
                                                <li>The parties agree that they must initially use all reasonable endeavours to resolve any dispute arising under this Agreement within 10 business days of a party being advised by written notice of such a dispute.</li>
                                                <li>If the parties are unable to resolve the dispute within that time frame, they must refer the dispute to an executive officer from each party to resolve. The parties will again use all reasonable endeavours to resolve the dispute within a further 10 business days or such other reasonable period agreed between the parties.</li>
                                                <li>If the dispute is not resolved in accordance with sub clause 2, the parties may either agree to refer the matter to Mediation or some other form of alternative dispute resolution or commence legal proceedings.</li>
                                            </ol>
                                        </div>

                                        {/*===== Force Majeure =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                11. FORCE MAJEURE
                                            </h3>
                                            <ol className="terms-list">
                                                <li>MGS will not be in breach of this Agreement or be liable to the other party if MGS fail to perform or delay in the performance of an obligation as a result of an event beyond MGS's reasonable control, including but not limited to strikes, industrial disputes, fire, flood, act of God, war, insurrection, vandalism, sabotage, invasion, riot, national emergency, piracy, hijack, acts of terrorism, embargoes or restraints, weather or traffic condition's (including peak hour traffic), temporary closure of roads, legislation, regulation, order or other act of any government or governmental agency.</li>
                                            </ol>
                                        </div>

                                        {/*===== Disclosure and use of Personal Information =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                12. DISCLOSURE AND USE OF PERSONAL INFORMATION
                                            </h3>
                                            <p>By entering into this Agreement, you agree that unless indicated otherwise in a Proposal, that MGS may forward to You from time to time promotional material and information regarding any of MGS's security goods and services.</p>
                                            <ol className="terms-list">
                                                <li>MGS may collect your personal information for the purpose of providing you with the services under this Agreement and information regarding MGS's security products and systems in accordance with the Privacy Act 1988. MGS may disclose your personal information to other organizations that assist MGS in the provision of these services including related bodies corporate, subcontractors and relevant banking or financial authorities.</li>
                                            </ol>
                                        </div>

                                        {/*===== Credit Enquiries and Credit terms =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                13. CREDIT ENQUIRIES AND CREDIT TERMS
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You agree that if MGS requires financial information about you for any application for credit on terms which attract the operation of the Privacy Act 1998, by seeking or enquiring about credit, you specifically agree and acknowledge that MGS may:
                                                    <ol type="a">
                                                        <li>Disclose to a credit reporting agency certain personal information about you including information contained in this application. Your identification, the amount of credit applied for, payments overdue by more than 60 days, advise the payments are no longer overdue, a serious credit infringement which MGS believe You have committed; and the discharge of the credit facility (if granted one);</li>
                                                        <li>In assessing the application for credit and any later request for credit, MGS may obtain from a credit reporting agency a credit report containing personal credit information, information about commercial activities or commercial worthiness;</li>
                                                        <li>Provide to or obtain from any credit provider(s) named in credit report information about your personal or commercial credit arrangements including information relating to credit worthiness, credit standing, credit history; or credit capacity.</li>
                                                    </ol>
                                                </li>
                                                <li>If MGS approve your application for credit, your consent and acknowledgement in this Agreement will remain in force until the full amount owing to MGS under the credit facility is paid.</li>
                                            </ol>
                                        </div>

                                        {/*===== PPSR =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                14. PPSR
                                            </h3>
                                            <ol className="terms-list">
                                                <li>Terms used in this clause are defined in the Personal Property Securities Act 2009 (Cth).</li>
                                                <li>If you request the supply of Services on credit terms, or are supplied Services prior to payment in full, then
                                                    <ol type="a">
                                                        <li>You grant to MGS a security interest in all of your property including after-acquired property; and</li>
                                                        <li>You indemnify MGS for the cost of registration and enforcement of the PPS Lease.</li>
                                                    </ol>
                                                </li>
                                                <li>If you request the supply of Goods on credit terms, or are supplied Goods prior to payment in full, then
                                                    <ol type="a">
                                                        <li>MGS will retain title to such Goods until you have paid for those Goods;</li>
                                                        <li>You grant to MGS a purchase money security interest ("PMSI") in those Goods; and</li>
                                                        <li>You indemnify MGS for the cost of registration and enforcement of the PMSI.</li>
                                                    </ol>
                                                </li>
                                                <li>If we supply you Goods on a lease for a period of 12 months or more, or a period of 90 days or more for serial numbered goods, then:
                                                    <ol type="a">
                                                        <li>MGS grants to you a PPS Lease in respect of those Goods; and</li>
                                                        <li>You indemnify MGS for the cost of registration and enforcement of the PPS Lease.</li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </div>

                                        {/*===== Miscellaneous =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                15. MISCELLANEOUS
                                            </h3>
                                            <ol className="terms-list">
                                                <li><strong>No Strike breaking etc.</strong> You may not request MGS's employees to carry out any illegal duties, including but not limited to strike breaking.</li>
                                                <li><strong>Non solicitation.</strong> You will not, from the date of this Agreement to twelve months after completion of the provision of services by MGS, solicit, employ or contract any employee or contractor of MGS. You agree that if you employ or engage any person directly, contrary to this clause You shall be liable to pay to MGS liquidated damages in a once off amount equal to 30% of such person's annual salary or annualized contracted amount (if a contractor) at the time of departing MGS even if they have been employed or contracted by another organization after departing MGS and prior to being engaged or employed by the Client.</li>
                                                <li><strong>Confidentiality.</strong> Each party shall treat as confidential all information which comes into its possession, pursuant to or as a result of or in the performance of this Agreement, whether such information relates to the business, sales, marketing or technical operations of the other Party or the clientele of the other Party or otherwise. Neither Party shall, without the written permission of the other, disclose such confidential information to a third party.</li>
                                                <li><strong>Entire Agreement.</strong> This Agreement constitutes the entire agreement between the parties and supersedes all prior representations, contracts, statements and understandings, whether verbal or in writing. All other terms and conditions are excluded to the fullest extent permitted by law including any terms and conditions which you may seek to impose. The terms, provisions and conditions of this Agreement may only be varied by agreement in writing signed by an authorized representative of MGS.</li>
                                                <li><strong>No Waiver.</strong> No right under this Agreement will be deemed to be waived except by notice in writing signed by each party and any failure by MGS to enforce any clause of this Agreement, will not be construed as a waiver of MGS's rights under this Agreement.</li>
                                                <li><strong>Severability.</strong> Should any part of this Agreement for any reason be held to be invalid, unenforceable or illegal, such judgment or holding will not affect, impair or invalidate the remainder of this Agreement but shall be confined in its operation to the part of this Agreement directly involved in the matter of proceeding and the remainder of this Agreement will remain in full force and effect.</li>
                                                <li><strong>No Set Off.</strong> You may not set off or contract charge any monies owing under this Agreement.</li>
                                                <li><strong>Notice.</strong> Any notice to be given under this agreement must be signed by the party giving the notice or a duly authorized officer. It may be served by delivering the notice personally or by mail or facsimile to the usual or last known address or facsimile number.</li>
                                                <li><strong>No Assignment.</strong> You shall not assign any of your interest in this Agreement without the prior written consent of MGS. MGS may at any time assign, sub-contract or license any part of its rights and obligations under this Agreement.</li>
                                                <li><strong>Acceptance of terms.</strong> You do not need to sign these terms to accept them and requesting MGS to supply Goods or Services will be deemed acceptance of these terms.</li>
                                                <li><strong>Law and Jurisdiction.</strong> This Agreement is subject to the law of New South Wales. The parties submit to the jurisdiction of the courts of New South Wales.</li>
                                                <li><strong>Contractors.</strong> MGS may use contractors time to time in order to fulfill clients contract compliance if opportunity arises.</li>
                                            </ol>
                                        </div>
                                        {/*===== Interpretation =====*/}
                                        <div className="terms-section">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                16. INTERPRETATION
                                            </h3>
                                            <ol className="terms-list">
                                                <li>The section headings in this Agreement are used for convenience only, are not substantive, and shall not be interpreted to define, describe, or otherwise limit the interpretation of the provision under the section headings or of the Agreement as a whole.</li>
                                                <li>In this Agreement:
                                                    <ol type="a">
                                                        <li>Fees means the charge for Goods and Services provided by MGS to You</li>
                                                        <li>Goods means any goods supplied by MGS to You, including but not limited to a security system</li>
                                                        <li>Proposal means a written proposal approved by MGS;</li>
                                                        <li>Services means provided by MGS to you comprising any or all of Security Installation, Monitoring Services, Maintenance Services, Alarm Response Instruction, Alarm Response Services and Additional Services as required from time to time during the term of this Agreement.</li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <Accrediation10 />
                <Subscribe />
            </Layout>

            <style jsx global>{`
                /* Modern Conditions Page Styles */
                .modern-hero-section {
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    position: relative;
                    overflow: hidden;
                    min-height: 100vh;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                }

                .hero-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: radial-gradient(circle at 20% 80%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 50%);
                }

                .hero-shapes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(253, 197, 26, 0.1);
                    animation: float 6s ease-in-out infinite;
                }

                .shape-1 {
                    width: 200px;
                    height: 200px;
                    top: 10%;
                    right: 10%;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 150px;
                    height: 150px;
                    bottom: 20%;
                    left: 5%;
                    animation-delay: 2s;
                }

                .shape-3 {
                    width: 100px;
                    height: 100px;
                    top: 50%;
                    right: 30%;
                    animation-delay: 4s;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    color: white;
                }

                .hero-badge-modern {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(255, 255, 255, 0.15);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 15px 30px;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 40px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    backdrop-filter: blur(10px);
                }

                .badge-icon {
                    width: 24px;
                    height: 24px;
                    background: #fdc51a;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    color: #1e2247;
                }

                .hero-title-modern {
                    font-size: 5rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 30px;
                    line-height: 1.1;
                }

                .title-line-1 {
                    display: block;
                }

                .title-line-2 {
                    display: block;
                    color: #fdc51a;
                }

                .hero-description-modern {
                    font-size: 1.4rem;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 50px;
                    line-height: 1.6;
                    max-width: 500px;
                }

                .hero-features {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 50px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .feature-item i {
                    color: #fdc51a;
                    font-size: 1.2rem;
                }

                .hero-actions {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .btn-modern-primary,
                .btn-modern-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 18px 35px;
                    border-radius: 50px;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .btn-modern-primary {
                    background: #fdc51a;
                    color: #1e2247;
                }

                .btn-modern-primary:hover {
                    background: white;
                    color: #1e2247;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(253, 197, 26, 0.4);
                }

                .btn-modern-secondary {
                    background: transparent;
                    color: white;
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .btn-modern-secondary:hover {
                    background: white;
                    color: #1e2247;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
                }

                .hero-visual {
                    position: relative;
                    z-index: 2;
                }

                .visual-card {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    padding: 40px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 30px;
                }

                .card-icon {
                    width: 60px;
                    height: 60px;
                    background: #fdc51a;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: #1e2247;
                }

                .card-header h3 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: white;
                    margin: 0;
                }

                .progress-section {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }

                .progress-item {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .progress-item span {
                    font-size: 1rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                }

                .progress-bar {
                    width: 100%;
                    height: 8px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #fdc51a 0%, #fdc51a 100%);
                    border-radius: 4px;
                    transition: width 2s ease-in-out;
                }

                /* Navigation Tabs */
                .nav-tabs-section {
                    padding: 100px 0;
                    background: #f8f9fa;
                }

                .nav-tabs-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .nav-tabs-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .nav-tabs-header h2 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 20px;
                }

                .nav-tabs-header p {
                    font-size: 1.2rem;
                    color: #6c757d;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .nav-tabs-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                }

                .nav-tab {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 30px;
                    background: white;
                    border: 2px solid #e9ecef;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    width: 100%;
                }

                .nav-tab:hover {
                    border-color: #fdc51a;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(253, 197, 26, 0.2);
                }

                .nav-tab.active {
                    border-color: #fdc51a;
                    background: linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%);
                    color: white;
                }

                .tab-icon {
                    width: 60px;
                    height: 60px;
                    background: #f8f9fa;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: #1e2247;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }

                .nav-tab.active .tab-icon {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                }

                .tab-content h4 {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 5px;
                }

                .nav-tab.active .tab-content h4 {
                    color: white;
                }

                .tab-content p {
                    font-size: 0.9rem;
                    color: #6c757d;
                    margin: 0;
                }

                .nav-tab.active .tab-content p {
                    color: rgba(255, 255, 255, 0.8);
                }

                /* Modern Section Styles */
                .modern-conditions-section,
                .modern-payment-section {
                    padding: 120px 0;
                }

                .modern-conditions-section {
                    background: #ffffff;
                }

                .modern-payment-section {
                    background: #f8f9fa;
                }

                .section-header-modern {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                    margin-bottom: 80px;
                }

                .section-number-large {
                    font-size: 8rem;
                    font-weight: 900;
                    color: #fdc51a;
                    line-height: 1;
                    opacity: 0.1;
                    flex-shrink: 0;
                }

                .section-content-header h2 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 20px;
                }

                .section-content-header p {
                    font-size: 1.3rem;
                    color: #6c757d;
                    margin: 0;
                    max-width: 600px;
                }

                /* Conditions Grid */
                .conditions-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
                    gap: 40px;
                }

                .condition-item-modern {
                    display: flex;
                    gap: 30px;
                    padding: 40px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    border-left: 5px solid #fdc51a;
                }

                .condition-item-modern:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                }

                .condition-number {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #fdc51a;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .condition-content-modern {
                    flex: 1;
                }

                .condition-icon-modern {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: white;
                    margin-bottom: 20px;
                }

                .condition-content-modern h3 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 15px;
                }

                .condition-content-modern p {
                    font-size: 1rem;
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }

                .condition-tags {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .tag {
                    background: #f8f9fa;
                    color: #1e2247;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    border: 1px solid #e9ecef;
                }

                /* Payment Timeline */
                .payment-timeline {
                    position: relative;
                }

                .payment-timeline::before {
                    content: '';
                    position: absolute;
                    left: 30px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: #e9ecef;
                }

                .timeline-item {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 50px;
                    position: relative;
                }

                .timeline-marker {
                    width: 60px;
                    height: 60px;
                    background: #1e2247;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: white;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 2;
                }

                .timeline-marker.warning {
                    background: #1e2247;
                }

                .timeline-marker.success {
                    background: #fdc51a;
                }

                .timeline-content {
                    flex: 1;
                    background: white;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                }

                .timeline-content h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 15px;
                }

                .timeline-content p {
                    font-size: 1rem;
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }

                .timeline-meta {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.9rem;
                    color: #6c757d;
                }

                .meta-item i {
                    color: #fdc51a;
                }

                /* Payment Stats Modern */
                .payment-stats-modern {
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                    height: fit-content;
                }

                .stats-header {
                    margin-bottom: 40px;
                }

                .stats-header h3 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 10px;
                }

                .stats-header p {
                    font-size: 1rem;
                    color: #6c757d;
                    margin: 0;
                }

                .stats-list {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }

                .stat-item-modern {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .stat-item-modern:hover {
                    background: #fdc51a;
                    transform: translateX(5px);
                }

                .stat-item-modern:hover .stat-content {
                    color: white;
                }

                .stat-icon {
                    width: 50px;
                    height: 50px;
                    background: #1e2247;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: white;
                    flex-shrink: 0;
                }

                .stat-item-modern:hover .stat-icon {
                    background: white;
                    color: #1e2247;
                }

                .stat-content {
                    flex: 1;
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 5px;
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: #6c757d;
                    font-weight: 500;
                }

                /* Responsive Design */
                @media (max-width: 1200px) {
                    .conditions-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .hero-title-modern {
                        font-size: 3.5rem;
                    }

                    .title-line-1,
                    .title-line-2 {
                        display: inline;
                    }

                    .hero-actions {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .nav-tabs-container {
                        grid-template-columns: 1fr;
                    }

                    .section-header-modern {
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                    }

                    .section-number-large {
                        font-size: 5rem;
                    }

                    .section-content-header h2 {
                        font-size: 2.5rem;
                    }

                    .condition-item-modern {
                        flex-direction: column;
                        text-align: center;
                    }

                    .condition-number {
                        font-size: 2rem;
                    }

                    .timeline-item {
                        flex-direction: column;
                        text-align: center;
                    }

                    .payment-timeline::before {
                        display: none;
                    }

                    .stats-list {
                        gap: 15px;
                    }

                    .stat-item-modern {
                        padding: 15px;
                    }
                }

                @media (max-width: 576px) {
                    .hero-title-modern {
                        font-size: 2.5rem;
                    }

                    .hero-description-modern {
                        font-size: 1.1rem;
                    }

                    .section-content-header h2 {
                        font-size: 2rem;
                    }

                    .condition-item-modern {
                        padding: 25px;
                    }

                    .timeline-content {
                        padding: 20px;
                    }

                    .payment-stats-modern {
                        padding: 25px;
                    }
                }

                .section-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(30, 34, 71, 0.1);
                    border: 1px solid rgba(30, 34, 71, 0.2);
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #1e2247;
                    margin-bottom: 30px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .section-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 20px;
                }

                .section-description {
                    font-size: 1.2rem;
                    color: #6c757d;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Condition Cards */
                .condition-card {
                    background: white;
                    border-radius: 16px;
                    padding: 0;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                }

                .condition-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                .condition-card-inner {
                    padding: 40px 30px;
                    text-align: center;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .condition-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                    font-size: 2rem;
                    color: white;
                }

                .condition-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 20px;
                }

                .condition-description {
                    font-size: 1rem;
                    color: #6c757d;
                    line-height: 1.6;
                    margin: 0;
                }

                /* Payment Cards */
                .payment-content {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .payment-cards {
                    margin-bottom: 60px;
                }

                .payment-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    padding: 30px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    margin-bottom: 20px;
                    transition: all 0.3s ease;
                }

                .payment-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                }

                .payment-icon {
                    width: 50px;
                    height: 50px;
                    background: #1e2247;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: white;
                    flex-shrink: 0;
                }

                .payment-icon.warning {
                    background: #1e2247;
                }

                .payment-icon.success {
                    background: #fdc51a;
                }

                .payment-content-text h4 {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 10px;
                }

                .payment-content-text p {
                    font-size: 1rem;
                    color: #6c757d;
                    line-height: 1.6;
                    margin: 0;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                }

                .stat-item {
                    text-align: center;
                    padding: 30px 20px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                }

                .stat-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #fdc51a;
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 1rem;
                    color: #6c757d;
                    font-weight: 500;
                }

                /* Terms Content */
                .terms-content {
                    background: white;
                    border-radius: 16px;
                    padding: 50px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                }

                .section-card {
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    margin-bottom: 30px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    border-left: 4px solid #fdc51a;
                }

                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                .section-number {
                    width: 50px;
                    height: 50px;
                    background: #fdc51a;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .section-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin: 0;
                }

                .section-content {
                    margin-left: 70px;
                }

                .terms-list {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: #6c757d;
                    margin: 0;
                    padding-left: 20px;
                }

                .terms-list li {
                    margin-bottom: 15px;
                }

                .terms-list ol {
                    margin-top: 10px;
                    padding-left: 20px;
                }

                .terms-list ol li {
                    margin-bottom: 10px;
                }

                /* Contact Section */
                .contact-info-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                }

                .contact-banner {
                    background: white;
                    border-radius: 16px;
                    padding: 50px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }

                .contact-content {
                    max-width: 600px;
                    margin: 0 auto;
                }

                .contact-text h3 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 20px;
                }

                .contact-text p {
                    font-size: 1.2rem;
                    color: #6c757d;
                    margin-bottom: 40px;
                    line-height: 1.6;
                }

                .contact-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn-primary,
                .btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 30px;
                    border-radius: 50px;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .btn-primary {
                    background: #fdc51a;
                    color: #1e2247;
                }

                .btn-primary:hover {
                    background: #1e2247;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(253, 197, 26, 0.3);
                }

                .btn-secondary {
                    background: transparent;
                    color: #1e2247;
                    border-color: #1e2247;
                }

                .btn-secondary:hover {
                    background: #1e2247;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(30, 34, 71, 0.3);
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: 30px;
                    }

                    .toc-grid {
                        grid-template-columns: 1fr;
                    }

                    .section-title {
                        font-size: 2rem;
                    }

                    .condition-card-inner {
                        padding: 30px 20px;
                    }

                    .payment-card {
                        flex-direction: column;
                        text-align: center;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .section-content {
                        margin-left: 0;
                        margin-top: 20px;
                    }

                    .contact-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .terms-content {
                        padding: 30px 20px;
                    }
                }

                @media (max-width: 576px) {
                    .hero-title {
                        font-size: 2rem;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                    }

                    .contact-banner {
                        padding: 30px 20px;
                    }
                }
            `}</style>
        </>
    );
}
                                         

