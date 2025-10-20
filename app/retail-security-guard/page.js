'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function BuildingSecurityPage() {
    const [activeService, setActiveService] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeFeature, setActiveFeature] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const toggleFeature = (index) => {
        setActiveFeature(activeFeature === index ? null : index);
    };

    const services = [
        {
            title: "15+ Years of Experience",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Securing Melbourne's buildings with consistency and care.",
        },
        {
            title: "Fully Licensed", 
            icon: <Home size={24} />,
            iconSymbol: <Home size={24} />,
            description: "Compliant with all Victorian security and labour hire laws.",
        },
        {
            title: "ISO Certified",
            icon: <CheckCircle size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Meeting international standards for quality, safety, and environment.",
        },
        {
            title: "CM3 & ASIAL Approved",
            icon: <Award size={24} />,
            iconSymbol: <Award size={24} />,
            description: "Independently verified for compliance and professionalism.",
        },
        {
            title: "Award-Winning Service",
            icon: <Star size={24} />,
            iconSymbol: <Star size={24} />,
            description: "Recognised for reliability and outstanding client support.",
        },
        {
            title: "Local Management",
            icon: <MapPin size={24} />,
            iconSymbol: <MapPin size={24} />,
            description: "Melbourne-based supervisors who respond quickly when you need them.",
        },
    ];

    const securityFeatures = [
        {
            title: "On-site Patrols",
            icon: <Target size={24} />,
            iconSymbol: <Target size={24} />,
            description: "Regular patrols of building surroundings to provide safety and deter criminal activities",
            details: "Our guards monitor the building by regularly patrolling the surroundings to provide safety and deter criminal activities. Our security guards also ensure the safety of the expensive materials and supplies on the construction sites, and they monitor and protect all tools and machinery to prevent business losses."
        },
        {
            title: "Static Guards",
            icon: <User size={24} />,
            iconSymbol: <User size={24} />,
            description: "Dedicated guards managing entry points and monitoring visitors 24/7",
            details: "Hiring static guards is also a practical option for businesses and commercial complexes. Our static building guards manage the entry points and gate access and monitor the visitors and surroundings 24/7. They are highly trained to respond to and control unexpected incidents and protect people."
        },
        {
            title: "CCTV Surveillance",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "24/7 monitoring of visitors and identification of unusual activity",
            details: "Our security integrates technology to provide 24/7 commercial and residential building surveillance. Our building security guards in Melbourne monitor visitors, trespassers, and guests to identify unusual activity and ensure safety."
        },
        {
            title: "Alarm & Emergency Response",
            icon: <Bell size={24} />,
            iconSymbol: <Bell size={24} />,
            description: "Immediate response to fire, medical, or security alarms",
            details: "Our guards immediately respond to any fire, medical, smoke, or threat alarm and evacuate the building's tenants, employees, workers, and others under strict security protocol. They are well-disciplined and manage unexpected situations with calm and exceptional attention."
        },
        {
            title: "Visitor Management",
            icon: <UserCheck size={24} />,
            iconSymbol: <UserCheck size={24} />,
            description: "Professional handling of visitor logs, ID checks, and access control",
            details: "Our guards are highly trained to manage visitors at the building's entry and exit points. They maintain a visitors' log, check IDs, and manage controlled access to commercial, residential and industrial building premises."
        },
        {
            title: "Fire Safety and Evacuation",
            icon: <Flame size={24} />,
            iconSymbol: <Flame size={24} />,
            description: "Trained evacuation procedures and special needs assistance",
            details: "Our building security guards are swift in making decisions and taking action. They are professionally trained to handle people with special needs efficiently in such situations. Once, a fire broke out in an apartment complex. Our guards managed the safe evacuation of the residents and alerted the authorities immediately, resulting in no loss."
        }
    ];

    const faqData = [
        {
            question: "What types of building security services do you provide?",
            answer: "We provide comprehensive building security services including commercial building security, residential building security, on-site patrols, static guards, CCTV surveillance, alarm response, visitor management, and fire safety evacuation services."
        },
        {
            question: "Are your building security guards licensed and trained?",
            answer: "Yes, all our building security guards are licensed and undergo rigorous training in emergency response, crowd control, first aid, and property-related security protocols. They also undergo extensive background checks before being hired."
        },
        {
            question: "Do you provide 24/7 building security services?",
            answer: "Yes, we provide 24/7 surveillance and safety services for both commercial and residential buildings. Our guards are available around the clock to ensure continuous protection of your property and people."
        },
        {
            question: "What technology do you use for building security?",
            answer: "We integrate cutting-edge technology including CCTV surveillance systems, modern communication tools, and advanced surveillance equipment to provide comprehensive building security with real-time monitoring and incident reporting."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="RETAIL SECURITY GUARDS"
                mainTitle="RETAIL SECURITY GUARDS IN MELBOURNE"
                
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <div className="hero-content" style={{textAlign: 'left'}}>
                                        <div className="subtitle mb-4">
                                            <span 
                                                className="badge px-4 py-2" 
                                                style={{
                                                    backgroundColor: '#fdc51a', 
                                                    color: '#1e2247', 
                                                    fontWeight: '600',
                                                    fontSize: '0.85rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    borderRadius: '25px'
                                                }}
                                            >
                                                PROFESSIONAL PROTECTION
                                            </span>
                                        </div>
                                        <h1 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                           Discipline That Complements   <br />
                                            <span style={{color: '#fdc51a'}}>Luxury</span>
                                        </h1>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem', 
                                                lineHeight: '1.6',
                                                maxWidth: '500px'
                                            }}
                                        >
                                            Retail isn’t just defined by what people buy; it’s defined by how they feel the moment they walk in. The lighting, the silence, the confidence in every interaction, all of it relies on precision working quietly in the background. At Metro Guards, our retail security officers are part of that precision. They’re not there to dominate the space, but to preserve the experience your brand promises every day, calm, composed, and perfectly timed.
                                            </p>
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3 flex-column flex-md-row">
                                                <a 
                                                    href="/get-quotation" 
                                                className="btn btn-primary px-5 py-3"
                                                    style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                        border: 'none',
                                                    borderRadius: '10px',
                                                        textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                }}
                                            >
                                                GET QUOTATION
                                                </a>
                                                <a 
                                                    href="tel:1300731173" 
                                                className="btn btn-outline-dark px-5 py-3"
                                                    style={{
                                                    borderColor: '#1e2247',
                                                    color: '#1e2247',
                                                    borderRadius: '10px',
                                                        textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    borderWidth: '2px'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#1e2247';
                                                }}
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Phone size={16}/> 1300731173
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div className="col-lg-6">
                                    <div className="hero-image position-relative mt-5 mt-lg-0">
                                        <div 
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                                            }}
                                        >
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="decoration-circle position-absolute"
                                            style={{
                                                top: '-20px',
                                                left: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                        <div 
                                            className="decoration-square position-absolute"
                                            style={{
                                                bottom: '-30px',
                                                right: '-30px',
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#1e2247',
                                                borderRadius: '15px',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/*=====  Section 2 =====*/}
                    <div className="services-section-2 section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Evolution Section - Paragraph Style */}
                                        <div className="human-element-section section-header mt-5" style={{
                                            background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9))',
                                            borderRadius: '20px',
                                            padding: '35px',
                                            border: '1px solid rgba(253, 197, 26, 0.15)',
                                            position: 'relative',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                                        }}>
                                            {/* Subtle Background Pattern */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.03) 0%, transparent 50%)',
                                                borderRadius: '20px',
                                                zIndex: 1
                                            }}></div>

                                            <div style={{ position: 'relative', zIndex: 2 }}>
                                                <h2 className="display-6 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                The Role of Retail Security <span style={{color: '#fdc51a'}}>Has Evolved</span>
                                                </h2>
                                                <p className="lead mb-3" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8'
                                                }}>
                                                    Security once meant standing guard, visible, rigid, and reactive. But retail has changed.Today, the best retail security systems aren't seen; they're felt, in the calm of the space, the confidence of your staff, and the comfort of your customers.
                                                </p>
                                                
                                                <p className="lead mb-3" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8'
                                                }}>
                                                    At Metro Guards, our retail security guard services are built around that invisible assurance.Our officers don't interrupt the shopping experience, they enhance it. With quiet vigilance and composed professionalism, they read the room, anticipate movement, and act before problems take form.That's how retail security services become more than protection, they become <strong style={{color: '#1e2247'}}>part of the experience itself</strong>. It's security that sustains confidence, supports sales, and preserves the energy that makes Melbourne's retail spaces thrive.
                                                </p>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    RETAIL EXCELLENCE
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            What We Bring to <span style={{color: '#fdc51a'}}>Every Retail</span>
                                            </h2>
                                        </div>
                                        
                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-smile",
                                                    title: "Customer-First Security",
                                                    
                                                    details: "Every visitor deserves to feel welcome first, safe second, both matter equally. Our officers greet, guide, and observe with warmth, ensuring protection never overshadows the experience."
                                                },
                                                {
                                                    icon: "fas fa-comments",
                                                    title: "Refined Communication",
                                                    
                                                    details: "Security in retail settings is more than vigilance, it's tone, timing, and tact. Each officer is trained to de-escalate discreetly and communicate in a manner that reflects your brand's standards."
                                                },
                                                {
                                                    icon: "fas fa-eye",
                                                    title: "Vigilance Without Intrusion",
                                                   
                                                    details: "Every moment on the floor is active observation, reading movement, anticipating potential issues before they become visible. Our officers act quietly, decisively, and without unnecessary display."
                                                },
                                                {
                                                    icon: "fas fa-sync",
                                                    title: "Consistency and Reliability",
                                                    
                                                    details: "Across Chadstone, South Yarra, Cremorne, and Melbourne's CBD, our team performs to one rhythm, disciplined, punctual, and predictable. The same quality, the same demeanor, every time."
                                                },
                                                {
                                                    icon: "fas fa-clipboard-list",
                                                    title: "Trained in Brand Protocols",
                                                    
                                                    details: "Each officer is briefed on store layout, brand tone, and service standards before assignment. They arrive prepared to represent, not just protect."
                                                }
                                            ].map((service, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeService === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeService === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            borderLeft: '4px solid #fdc51a',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onClick={() => toggleService(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="service-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff',
                                                                        fontSize: '1.5rem'
                                                                    }}
                                                                >
                                                                    <i className={service.icon}></i>
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-1 fw-bold" style={{color: '#1e2247'}}>{service.title}</h5>
                                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.9rem'}}>{service.summary}</p>
                                                                </div>
                                                            </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        backgroundColor: activeService === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeService === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeService === index ? '−' : '+'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {activeService === index && (
                                                        <div 
                                                            className="accordion-content p-4"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                borderLeft: '4px solid #fdc51a',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p style={{
                                                                color: '#6c757d', 
                                                                lineHeight: '1.7', 
                                                                margin: 0,
                                                                fontSize: '1rem'
                                                            }}>
                                                                {service.details}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Standards Section =====*/}
                    <div className="standards-section section-padding" style={{
                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '150px',
                            height: '150px',
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto text-center">
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "15px",
                                        marginBottom: "30px"
                                    }}>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                            borderRadius: "2px"
                                        }}></div>
                                        <span className="badge px-4 py-2" style={{
                                            background: "linear-gradient(135deg, #fdc51a, #ffdb5c)",
                                            color: "#1e2247",
                                            fontWeight: 700,
                                            fontSize: "0.85rem",
                                            borderRadius: "30px",
                                            textTransform: "uppercase",
                                            letterSpacing: "2px",
                                            boxShadow: "0 8px 25px rgba(253, 197, 26, 0.3)"
                                        }}>
                                            <i className="fas fa-award me-2"></i>
                                            Proven Excellence
                                        </span>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #ffdb5c, #fdc51a)",
                                            borderRadius: "2px"
                                        }}></div>
                                    </div>

                                    <h2 style={{
                                        color: '#ffffff',
                                        fontSize: '3rem',
                                        fontWeight: '800',
                                        marginBottom: '25px',
                                        lineHeight: '1.2'
                                    }}>
                                        Standards That Hold <span style={{color: '#fdc51a'}}>Their Ground</span>
                                    </h2>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        maxWidth: '750px',
                                        margin: '0 auto'
                                    }}>
                                        We know what "high standard" actually means, it's not about appearance; <strong style={{color: '#fdc51a'}}>it's about follow-through</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4">
                                {/* Feature 1 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-clock" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Absolute Attendance
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Every shift begins and ends on time. Zero tolerance for missed starts or early exits.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-route" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Tracked Movement, Verified Work
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Patrols are GPS-logged, every route recorded and time-stamped for accuracy.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-laptop" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Real-Time Transparency
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Reports, photos, and incidents appear live. Managers see what's happening as it happens.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-user-check" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Audited in the Field
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Supervisors arrive unannounced to assess performance and site readiness. It's how standards stay consistent.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 5 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-certificate" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Certified at Every Level
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            ISO Certified for Quality, Safety, and Environmental Management. Recognised nationally through ASIAL membership and CM3 prequalification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Differences Section =====*/}
                    <div className="differences-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(253, 197, 26, 0.06) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(30, 34, 71, 0.04) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Decorative Element */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            left: '5%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto text-center">
                                        <div style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "15px",
                                            marginBottom: "30px"
                                        }}>
                                            <div style={{
                                                width: "50px",
                                                height: "3px",
                                                background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                borderRadius: "2px"
                                            }}></div>
                                            <span className="badge px-4 py-2" style={{
                                                background: "linear-gradient(135deg, #1e2247, #2c3e50)",
                                                color: "#fdc51a",
                                                fontWeight: 700,
                                                fontSize: "0.85rem",
                                                borderRadius: "30px",
                                                textTransform: "uppercase",
                                                letterSpacing: "2px",
                                                boxShadow: "0 8px 25px rgba(30, 34, 71, 0.3)"
                                            }}>
                                            <i className="fas fa-chart-line me-2"></i>
                                            Immediate Impact
                                            </span>
                                            <div style={{
                                                width: "50px",
                                                height: "3px",
                                                background: "linear-gradient(90deg, #2c3e50, #1e2247)",
                                                borderRadius: "2px"
                                            }}></div>
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                        The Differences You Will Feel <span style={{color: '#fdc51a'}}>Right Away</span>
                                        </h2>
                                </div>
                            </div>

                            {/* Benefits Grid */}
                            <div className="row g-4">
                                {/* Benefit 1 */}
                                <div className="col-lg-4 col-md-6">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                        padding: '40px 35px',
                                                height: '100%',
                                                border: '2px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease',
                                                textAlign: 'center'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.15)';
                                                e.currentTarget.style.borderColor = '#fdc51a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    borderRadius: '15px',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                }}>
                                            <i className="fas fa-shield-alt" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                </div>

                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    marginBottom: '15px'
                                                }}>
                                            Safer Environments
                                                </h3>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                            Staff focus on service, not security gaps.
                                                </p>
                                            </div>
                                        </div>

                                {/* Benefit 2 */}
                                <div className="col-lg-4 col-md-6">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                        padding: '40px 35px',
                                                height: '100%',
                                                border: '2px solid rgba(30, 34, 71, 0.2)',
                                                transition: 'all 0.3s ease',
                                                textAlign: 'center'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 34, 71, 0.12)';
                                                e.currentTarget.style.borderColor = '#1e2247';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    borderRadius: '15px',
                                                    background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                                }}>
                                            <i className="fas fa-chart-line" style={{color: '#fdc51a', fontSize: '28px'}}></i>
                                                </div>

                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    marginBottom: '15px'
                                                }}>
                                            Less Shrinkage
                                                </h3>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                            Losses drop when attention rises.
                                                </p>
                                            </div>
                                        </div>

                                {/* Benefit 3 */}
                                <div className="col-lg-4 col-md-6">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                        padding: '40px 35px',
                                                height: '100%',
                                                border: '2px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease',
                                                textAlign: 'center'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.15)';
                                                e.currentTarget.style.borderColor = '#fdc51a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    borderRadius: '15px',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    <i className="fas fa-user-shield" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                </div>

                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    marginBottom: '15px'
                                                }}>
                                            Reliable Presence
                                                </h3>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                            Guards who arrive on time, stay alert, and follow through.
                                                </p>
                                        </div>
                                    </div>

                                {/* Benefit 4 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 34, 71, 0.12)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 20px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-eye" style={{color: '#fdc51a', fontSize: '28px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.4rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Full Transparency
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            You can verify every action, live.
                                        </p>
                                </div>
                            </div>

                                {/* Benefit 5 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.15)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                            margin: '0 auto 20px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                }}>
                                            <i className="fas fa-smile" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.4rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Better Customer Experience
                                        </h3>

                                            <p style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                                margin: 0
                                            }}>
                                            Security that supports confidence, not tension.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Call to Action Section =====*/}
                    <div className="cta-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(30, 34, 71, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.12) 0%, transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(30, 34, 71, 0.03) 0%, transparent 70%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '8%',
                            left: '3%',
                            width: '140px',
                            height: '140px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), rgba(253, 197, 26, 0.05))',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '12%',
                            right: '5%',
                            width: '180px',
                            height: '180px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(30, 34, 71, 0.05))',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '15%',
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1,
                            transform: 'translateY(-50%)'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-xl-8">
                                    <div className="cta-content text-center">
                                        {/* Header */}
                                        <div className="cta-header mb-5">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                                marginBottom: "30px",
                                                justifyContent: "center"
                                            }}>
                                                <div style={{
                                                    width: "60px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "linear-gradient(135deg, #1e2247, #2c3e50)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "25px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    boxShadow: "0 6px 20px rgba(30, 34, 71, 0.25)"
                                                }}>
                                                    <i className="fas fa-store me-2"></i>
                                                    Melbourne's Trusted Choice
                                                </span>
                                                <div style={{
                                                    width: "60px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                    borderRadius: "2px"
                                                }}></div>
                                            </div>
                                            
                                            <h2 style={{
                                                color: '#1e2247',
                                                fontSize: '3.5rem',
                                                fontWeight: '800',
                                                marginBottom: '25px',
                                                lineHeight: '1.2',
                                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                            }}>
                                                Trusted Across Melbourne's <span style={{color: '#fdc51a'}}>Retail Landscape</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                From flagship stores in the CBD to luxury boutiques in Melbourne, our officers maintain a single promise: To <strong style={{color: '#1e2247'}}>protect the brand as carefully as the merchandise</strong>.
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px',
                                                fontStyle: 'italic'
                                            }}>
                                                Every client we serve expects discretion, precision, and absolute reliability, and that's exactly what they receive, every shift. Because in retail, protection isn't a service. <strong style={{color: '#fdc51a'}}>It's a performance</strong>. And Metro Guards knows the choreography.
                                            </p>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="cta-buttons mb-5">
                                            <div className="row g-3 justify-content-center">
                                                <div className="col-auto">
                                                    <a href="/get-quotation" className="btn btn-lg px-5 py-3" style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        color: '#ffffff',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        fontSize: '1.1rem',
                                                        border: 'none',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 12px 35px rgba(30, 34, 71, 0.4)';
                                                        e.target.style.background = 'linear-gradient(135deg, #fdc51a, #ffdb5c)';
                                                        e.target.style.color = '#1e2247';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.3)';
                                                        e.target.style.background = 'linear-gradient(135deg, #1e2247, #2c3e50)';
                                                        e.target.style.color = '#ffffff';
                                                    }}>
                                                        <i className="fas fa-file-alt"></i>
                                                        Get Your Free Quote
                                                    </a>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="tel:1300731173" className="btn btn-lg px-5 py-3" style={{
                                                        background: 'transparent',
                                                        color: '#1e2247',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        fontSize: '1.1rem',
                                                        border: '2px solid #1e2247',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.background = '#1e2247';
                                                        e.target.style.color = '#ffffff';
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.25)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.background = 'transparent';
                                                        e.target.style.color = '#1e2247';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = 'none';
                                                    }}>
                                                        <i className="fas fa-phone"></i>
                                                        Call 1300 73 11 73
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tagline */}
                                        <div className="cta-tagline">
                                            <div style={{
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.95), rgba(44, 62, 80, 0.95))',
                                                borderRadius: '25px',
                                                padding: '30px 40px',
                                                border: '2px solid rgba(30, 34, 71, 0.1)',
                                                boxShadow: '0 15px 35px rgba(30, 34, 71, 0.15)',
                                                backdropFilter: 'blur(15px)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                                {/* Inner glow effect */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'radial-gradient(circle at 50% 50%, rgba(253, 197, 26, 0.1), transparent 70%)',
                                                    borderRadius: '25px',
                                                    zIndex: 1
                                                }}></div>
                                                <p style={{
                                                    color: '#fdc51a',
                                                    fontSize: '1.3rem',
                                                    fontWeight: '600',
                                                    margin: 0,
                                                    lineHeight: '1.5',
                                                    fontStyle: 'italic',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fas fa-shield-alt me-2" style={{color: '#fdc51a'}}></i>
                                                    Metro Guards – <span style={{color: '#ffffff'}}>Where corporate security meets uncompromising discipline and proven results.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                                        
                    
                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }