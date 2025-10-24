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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BUILDING SITE SECURITY GUARDS"
                mainTitle="BUILDING SITE SECURITY GUARDS IN MELBOURNE"
                
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
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
                                            Building Site Security, <br />
                                            <span style={{color: '#fdc51a'}}>You Can Trust</span>
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
                                            When the last tradesman clocks out and the building lights fade, that’s when our work begins.  Most people never think about what happens between midnight and dawn. But at Metro Guards, those hours matter most: the quiet hum of the lifts, the echo of footsteps down an empty corridor, the sense that everything valuable in the building is now in our hands. 
                                            <br />Our building site security guards don’t just keep watch; We understand the responsibility that comes with every key, every camera, every alarm. We know what it means to protect your hard work.
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

                    {/*===== Enhanced Services Section =====*/}
                    <div className="services-section section-padding" style={{
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
                                radial-gradient(circle at 15% 25%, rgba(253, 197, 26, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 85% 75%, rgba(30, 34, 71, 0.03) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center g-5">
                                {/* Left Column - Enhanced Image Section */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section">
                                        <div className="image-container position-relative">
                                            {/* Main Image */}
                                            <div style={{
                                                position: 'relative',
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                                transform: 'perspective(1000px) rotateY(-5deg)',
                                                transition: 'all 0.4s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                                e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                                            }}>
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                        height: '550px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                                
                                                {/* Image Overlay */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, transparent 50%, rgba(253, 197, 26, 0.1) 100%)',
                                                    zIndex: 1
                                                }}></div>
                                </div>

                                            {/* Floating Stats Cards */}
                                            
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Enhanced Content Section */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content">
                                        {/* Header Section */}
                                        <div className="section-header mb-5">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                                marginBottom: "25px" 
                                            }}>
                                                <div style={{
                                                    width: "50px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
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
                                                    boxShadow: "0 4px 15px rgba(30, 34, 71, 0.3)"
                                                }}>
                                                    <i className="fas fa-shield-alt me-2"></i>
                                                    Always Vigilant
                                                </span>
                                            </div>
                                            
                                            <h2 style={{ 
                                                color: "#1e2247", 
                                                fontSize: "3.2rem",
                                                fontWeight: "800",
                                                marginBottom: "25px",
                                                lineHeight: "1.2",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                            }}>
                                                While The City Sleeps, <span style={{ color: "#fdc51a" }}>We're Moving</span>
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                                At Metro Guards, we don't wait for something to go wrong, <strong style={{color: '#1e2247'}}>we prevent it</strong>. Our guards patrol gates, scan doors, walk halls, and monitor cameras with precision and care. Every action is logged, verified, and reviewed, not to tick boxes, but to give you something few can offer: <strong style={{color: '#1e2247'}}>certainty</strong>. Because your peace of mind shouldn't rely on assumptions, it should rest on <strong style={{color: '#fdc51a'}}>proof</strong>. With 100% client portal transparency and 24/7 support from our Melbourne operations centre, you'll always know what's happening in your building, every patrol, every report, every response, live and visible.
                                            </p>
                                        </div>

                                      

                                        
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
                                        
                                        {/* A Quiet Reality - Paragraph Style */}
                                        <div className="A-Quiet-Reality section-header mt-5" style={{
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
                                                <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                    A Quiet Reality No One Likes to Admit
                                                </h2>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.2rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Ask any site manager, and they'll tell you the same story:
                                                    <br /><br />
                                                    A door left ajar. A guard who missed a round. A few missing tools that <strong style={{color: '#1e2247'}}>"no one saw."</strong> These small lapses turn into big losses. And by the time you find out, it's already too late. That's the problem we built <strong style={{color: '#fdc51a'}}>Metro Guards</strong> to solve, making <strong style={{color: '#fdc51a'}}>reliability the rule, not the exception</strong>.
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
                                                    OUR Differences
                                                </span>
                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            What Makes Metro Guards Different 
                                            </h2>
                                            
                                </div>
                                        
                                        {/* Expandable Service Cards */}
                                        <div className="services-accordion">
                                            {services.map((service, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeService === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeService === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
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
                                                                    {service.iconSymbol}
                            </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{service.title}</h5>
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
                                                            <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                {service.description}
                                                            </p>
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {service.details}
                                                                </p>
                                        </div>
                                    </div>
                                                    )}
                                </div>
                                            ))}
                                        </div>
                                        <p><strong>When others promise, we deliver measurable proof.</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Enhanced Section 3 - The People Behind the Uniforms =====*/}
                    <div className="services-section-3 section-padding" style={{
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
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '15%',
                            right: '8%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            left: '5%',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center g-5">
                                {/* Left Column - Enhanced Image Section */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section">
                                        <div className="image-container position-relative">
                                            {/* Main Image Container */}
                                            <div style={{
                                                position: 'relative',
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                                                transform: 'perspective(1000px) rotateY(5deg)',
                                                transition: 'all 0.4s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.4)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.3)';
                                            }}>
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                    alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                        height: '550px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                                
                                                {/* Image Overlay */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, transparent 50%, rgba(30, 34, 71, 0.2) 100%)',
                                                    zIndex: 1
                                                }}></div>
                                    </div>
                                        
                                            
                                </div>
                                    </div>
                                </div>
                                
                                {/* Right Column - Enhanced Content Section */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content">
                                        <div className="section-header mb-5">
                                            {/* Header Badge */}
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                                marginBottom: "25px" 
                                            }}>
                                                <div style={{
                                                    width: "50px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "rgba(253, 197, 26, 0.2)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "25px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    border: "1px solid rgba(253, 197, 26, 0.3)",
                                                    boxShadow: "0 4px 15px rgba(253, 197, 26, 0.3)"
                                                }}>
                                                    <i className="fas fa-users me-2"></i>
                                                    Our Team
                                                </span>
                                            </div>
                                            
                                            <h2 style={{ 
                                                color: "#ffffff", 
                                                fontSize: "3.2rem",
                                                fontWeight: "800",
                                                marginBottom: "25px",
                                                lineHeight: "1.2",
                                                textShadow: "0 4px 8px rgba(0,0,0,0.3)"
                                            }}>
                                                The People Behind the <span style={{ color: "#fdc51a" }}>Uniforms</span>
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "rgba(255, 255, 255, 0.9)", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                                Our team isn't made up of placeholders in vests. We're <strong style={{color: '#fdc51a'}}>licensed professionals</strong>, trained under ISO-certified standards, insured, and held to the same level of accountability we hold ourselves to. Most of our security guards come from defence, emergency services, and security backgrounds. We've seen what happens when complacency takes over, and <strong style={{color: '#fdc51a'}}>We refuse to let it happen on our watch</strong>.
                                            </p>
                                        </div>
                                        
                                        {/* Professional Standards Grid */}
                                        <div className="standards-grid">
                                            <div className="row g-3">
                                                {[
                                                    {
                                                        icon: "fas fa-certificate",
                                                        title: "ISO Certified",
                                                        subtitle: "Training Standards"
                                                    },
                                                    {
                                                        icon: "fas fa-shield-alt",
                                                        title: "Fully Licensed",
                                                        subtitle: "& Insured"
                                                    },
                                                    {
                                                        icon: "fas fa-user-tie",
                                                        title: "Defence Background",
                                                        subtitle: "Emergency Services"
                                                    },
                                                    {
                                                        icon: "fas fa-eye",
                                                        title: "Accountability",
                                                        subtitle: "Standards"
                                                    }
                                                ].map((item, index) => (
                                                    <div key={index} className="col-md-6">
                                                        <div style={{
                                                            background: 'rgba(255, 255, 255, 0.1)',
                                                            backdropFilter: 'blur(10px)',
                                                            borderRadius: '15px',
                                                            padding: '20px',
                                                            border: '1px solid rgba(253, 197, 26, 0.2)',
                                                            transition: 'all 0.3s ease',
                                                            cursor: 'pointer'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                                            e.currentTarget.style.borderColor = '#fdc51a';
                                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                                            e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                                            e.currentTarget.style.transform = 'translateY(0)';
                                                        }}>
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '12px'
                                                            }}>
                                                                <div style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        borderRadius: '50%',
                                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    flexShrink: 0
                                                                }}>
                                                                    <i className={item.icon} style={{
                                                                        color: '#1e2247',
                                                                        fontSize: '16px'
                                                                    }}></i>
                                        </div>
                                                                <div>
                                                                    <div style={{
                                                                        color: '#ffffff',
                                                                        fontWeight: '700',
                                                                        fontSize: '0.95rem',
                                                                        marginBottom: '2px'
                                                                    }}>
                                                                        {item.title}
                                    </div>
                                                                    <div style={{
                                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                                        fontSize: '0.8rem'
                                                                    }}>
                                                                        {item.subtitle}
                                </div>
                                            </div>
                                        </div>
                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Security Tailored Section =====*/}
                    <div className="security-tailored-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Animated Background Elements */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '8%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '5%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
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
                                                background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                borderRadius: "2px"
                                            }}></div>
                                            <span className="badge px-4 py-2" style={{ 
                                                background: "linear-gradient(135deg, #fdc51a, #ffdb5c)", 
                                                color: "#1e2247", 
                                                fontWeight: 700,
                                                fontSize: "0.9rem",
                                                borderRadius: "25px",
                                                textTransform: "uppercase",
                                                letterSpacing: "1px",
                                                boxShadow: "0 6px 20px rgba(253, 197, 26, 0.25)"
                                            }}>
                                                <i className="fas fa-building me-2"></i>
                                                Customized Security
                                            </span>
                                            <div style={{
                                                width: "60px",
                                                height: "3px",
                                                background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                borderRadius: "2px"
                                            }}></div>
                                        </div>
                                        
                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3.5rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            Security Tailored to <span style={{color: '#fdc51a'}}>Every Building</span>
                                        </h2>
                                        
                                        <p style={{
                                            color: '#495057',
                                            fontSize: '1.4rem',
                                            lineHeight: '1.7',
                                            marginBottom: '60px',
                                            maxWidth: '800px',
                                            margin: '0 auto 60px'
                                        }}>
                                            No two buildings are the same, and neither are their security needs. Whether it's a high-rise residence that never really sleeps or a commercial site that shuts down after hours, our guards <strong style={{color: '#fdc51a'}}>adapt to your environment</strong> and your people.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Property Type Cards */}
                            <div className="row g-4 mb-5">
                                {/* Residential Properties */}
                                <div className="col-lg-6">
                                    <div className="property-type-card h-100" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.95))',
                                        borderRadius: '25px',
                                        padding: '45px',
                                        backdropFilter: 'blur(15px)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                    }}>
                                        {/* Background Decoration */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            right: '-30px',
                                            width: '120px',
                                            height: '120px',
                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15), transparent 70%)',
                                            borderRadius: '50%',
                                            zIndex: 1
                                        }}></div>

                                        {/* Icon */}
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '20px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '30px',
                                            boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <Home size={36} style={{color: '#fdc51a'}} />
                                        </div>
                                        
                                        <h3 className="fw-bold mb-4" style={{
                                            color: '#1e2247', 
                                            fontSize: '1.8rem', 
                                            position: 'relative', 
                                            zIndex: 2,
                                            marginBottom: '25px'
                                        }}>
                                            Residential Properties
                                        </h3>

                                        <div className="features-list" style={{position: 'relative', zIndex: 2}}>
                                            {[
                                                "Friendly front-desk support for residents and visitors",
                                                "Common-area patrols that actually happen - gyms, car parks, rooftops",
                                                "Emergency response and fire safety assistance when it matters most"
                                            ].map((feature, index) => (
                                                <div key={index} className="feature-item d-flex align-items-start mb-4">
                                                    <div style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        marginTop: '6px',
                                                        marginRight: '18px',
                                                        flexShrink: 0,
                                                        boxShadow: '0 3px 8px rgba(253, 197, 26, 0.3)'
                                                    }}></div>
                                                    <span style={{
                                                        color: '#495057', 
                                                        lineHeight: '1.7', 
                                                        fontSize: '1rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Commercial Sites */}
                                <div className="col-lg-6">
                                    <div className="property-type-card h-100" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.95))',
                                        borderRadius: '25px',
                                        padding: '45px',
                                        backdropFilter: 'blur(15px)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                    }}>
                                        {/* Background Decoration */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            right: '-30px',
                                            width: '120px',
                                            height: '120px',
                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15), transparent 70%)',
                                            borderRadius: '50%',
                                            zIndex: 1
                                        }}></div>

                                        {/* Icon */}
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '20px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '30px',
                                            boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <Building size={36} style={{color: '#fdc51a'}} />
                                        </div>
                                                
                                        <h3 className="fw-bold mb-4" style={{
                                            color: '#1e2247', 
                                            fontSize: '1.8rem', 
                                            position: 'relative', 
                                            zIndex: 2,
                                            marginBottom: '25px'
                                        }}>
                                            Commercial Sites
                                        </h3>

                                        <div className="features-list" style={{position: 'relative', zIndex: 2}}>
                                            {[
                                                "Access control for restricted zones",
                                                "CCTV monitoring and alarm response", 
                                                "Asset protection and after-hours visitor management"
                                            ].map((feature, index) => (
                                                <div key={index} className="feature-item d-flex align-items-start mb-4">
                                                    <div style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        marginTop: '6px',
                                                        marginRight: '18px',
                                                        flexShrink: 0,
                                                        boxShadow: '0 3px 8px rgba(253, 197, 26, 0.3)'
                                                    }}></div>
                                                    <span style={{
                                                        color: '#495057', 
                                                        lineHeight: '1.7', 
                                                        fontSize: '1rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            {/* Bottom Highlight Card */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '50px',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        backdropFilter: 'blur(15px)',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        boxShadow: '0 25px 50px rgba(30, 34, 71, 0.3)'
                                    }}>
                                        {/* Background Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(30, 34, 71, 0.1) 0%, transparent 50%)',
                                            zIndex: 1
                                        }}></div>

                                        <div style={{position: 'relative', zIndex: 2}}>
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                marginBottom: '25px'
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 10px 25px rgba(253, 197, 26, 0.4)'
                                                }}>
                                                    <Eye size={28} style={{color: '#1e2247'}} />
                                                </div>
                                                
                                            </div>
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.3rem',
                                                margin: 0,
                                                lineHeight: '1.6',
                                                maxWidth: '700px',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                fontWeight: '600'
                                            }}>
                                                <strong style={{color: '#fdc51a'}}>Every task, every report, every detail is uploaded to your portal in real time.</strong> 
                                                <br />
                                                No waiting till morning to know what went on overnight.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Our Technology & Supervision Section =====*/}
                    <div className="choose-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-gear me-2"></i>
                                            ADVANCED TECHNOLOGY
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Our Technology & Supervision
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        We don't just promise security - we prove it with cutting-edge technology and rigorous supervision that keeps every guard accountable and every site protected.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4">
                                {/* Live Guard Tracking */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="tech-card position-relative h-100" style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '2.5rem',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.4s ease',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.25)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        
                                        {/* Background Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '100px',
                                            height: '100px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>
                                        
                                        {/* Icon Container */}
                                        <div className="tech-icon mb-4" style={{
                                            width: '75px',
                                            height: '75px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <MapPin size={32} color="#1e2247" />
                                        </div>
                                            
                                        <div className="tech-content position-relative" style={{zIndex: 2}}>
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.4rem'}}>
                                                Live Guard Tracking
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1rem'}}>
                                                GPS check-ins confirm every patrol and prove real movement, not guesses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Real-Time Reporting */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="tech-card position-relative h-100" style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '2.5rem',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.4s ease',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.2)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        
                                        {/* Background Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '100px',
                                            height: '100px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>
                                        
                                        {/* Icon Container */}
                                        <div className="tech-icon mb-4" style={{
                                            width: '75px',
                                            height: '75px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <Zap size={32} color="#fdc51a" />
                                        </div>
                                            
                                        <div className="tech-content position-relative" style={{zIndex: 2}}>
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.4rem'}}>
                                                Real-Time Reporting
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1rem'}}>
                                                Receive live updates through your client portal as activities happen.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Supervisor Inspections */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="tech-card position-relative h-100" style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '2.5rem',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.4s ease',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.25)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        
                                        {/* Background Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '100px',
                                            height: '100px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>
                                        
                                        {/* Icon Container */}
                                        <div className="tech-icon mb-4" style={{
                                            width: '75px',
                                            height: '75px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <Eye size={32} color="#1e2247" />
                                        </div>
                                            
                                        <div className="tech-content position-relative" style={{zIndex: 2}}>
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.4rem'}}>
                                                Supervisor Inspections
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1rem'}}>
                                                Random visits keep every shift active, accountable, and on standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Instant Incident Alerts */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="tech-card position-relative h-100" style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '2.5rem',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.4s ease',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.2)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        
                                        {/* Background Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '100px',
                                            height: '100px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>
                                        
                                        {/* Icon Container */}
                                        <div className="tech-icon mb-4" style={{
                                            width: '75px',
                                            height: '75px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            borderRadius: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <Bell size={32} color="#fdc51a" />
                                        </div>
                                            
                                        <div className="tech-content position-relative" style={{zIndex: 2}}>
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.4rem'}}>
                                                Instant Incident Alerts
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1rem'}}>
                                                Emergencies trigger immediate notifications to management for rapid action.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== What You'll Notice Right Away Section =====*/}
                    <div className="notice-section section-padding" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
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
                                radial-gradient(circle at 15% 25%, rgba(253, 197, 26, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 85% 75%, rgba(30, 34, 71, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            right: '10%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '5%',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Header Section */}
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div style={{ 
                                        display: "inline-flex", 
                                        alignItems: "center", 
                                        gap: "15px", 
                                        marginBottom: "25px" 
                                    }}>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
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
                                            boxShadow: "0 4px 15px rgba(30, 34, 71, 0.3)"
                                        }}>
                                            <i className="fas fa-eye me-2"></i>
                                            Immediate Results
                                        </span>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #ffdb5c, #fdc51a)",
                                            borderRadius: "2px"
                                        }}></div>
                                    </div>
                                    
                                    <h2 style={{ 
                                        color: "#1e2247", 
                                        fontSize: "3.2rem",
                                        fontWeight: "800",
                                        marginBottom: "25px",
                                        lineHeight: "1.2",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                    }}>
                                        What You'll Notice <span style={{ color: "#fdc51a" }}>Right Away</span>
                                    </h2>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="row g-4">
                                {/* Left Column - Benefits List */}
                                <div className="col-lg-6">
                                    <div className="benefits-list">
                                        {[
                                            {
                                                title: "A real sense of safety",
                                                description: "Tenants and residents relax knowing someone's truly present.",
                                                icon: "fas fa-shield-alt",
                                                color: "#fdc51a"
                                            },
                                            {
                                                title: "Lower risk",
                                                description: "Theft, trespassing, and damage drop dramatically.",
                                                icon: "fas fa-arrow-down",
                                                color: "#1e2247"
                                            },
                                            {
                                                title: "Faster responses",
                                                description: "Because seconds matter when alarms sound.",
                                                icon: "fas fa-bolt",
                                                color: "#fdc51a"
                                            },
                                            {
                                                title: "Transparency",
                                                description: "You can view every patrol in real-time.",
                                                icon: "fas fa-eye",
                                                color: "#1e2247"
                                            },
                                            {
                                                title: "Better reputation",
                                                description: "Secure buildings attract better tenants and calmer communities.",
                                                icon: "fas fa-star",
                                                color: "#fdc51a"
                                    }
                                ].map((benefit, index) => (
                                            <div key={index} className="benefit-item d-flex align-items-start mb-4" style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '25px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                                border: '1px solid rgba(253, 197, 26, 0.1)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateX(10px)';
                                                e.currentTarget.style.boxShadow = `0 15px 40px ${benefit.color === '#fdc51a' ? 'rgba(253, 197, 26, 0.25)' : 'rgba(30, 34, 71, 0.2)'}`;
                                                e.currentTarget.style.borderColor = benefit.color;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                                e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.1)';
                                            }}>
                                                
                                                {/* Icon */}
                                                <div style={{
                                            width: '60px',
                                            height: '60px',
                                                    borderRadius: '15px',
                                                    background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '20px',
                                                    flexShrink: 0,
                                                    boxShadow: `0 8px 20px ${benefit.color}40`
                                        }}>
                                                    <i className={benefit.icon} style={{
                                                        color: '#ffffff',
                                                        fontSize: '24px'
                                                    }}></i>
                                                </div>
                                                
                                                {/* Content */}
                                                <div style={{ flex: 1 }}>
                                                    <h4 style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.3rem',
                                                        fontWeight: '700',
                                                        marginBottom: '8px',
                                                        lineHeight: '1.3'
                                                    }}>
                                                    {benefit.title}
                                                </h4>
                                                    <p style={{
                                                            color: '#6c757d', 
                                                        margin: 0,
                                                        fontSize: '1rem',
                                                        lineHeight: '1.6'
                                                    }}>
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                                </div>
                                                
                                {/* Right Column - Visual Element */}
                                <div className="col-lg-6">
                                    <div className="visual-content" style={{
                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                        borderRadius: '25px',
                                        padding: '50px 40px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        minHeight: '600px'
                                    }}>
                                        {/* Background Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(253, 197, 26, 0.1) 0%, transparent 50%)',
                                            zIndex: 1
                                        }}></div>

                                        {/* Central Icon */}
                                        <div style={{
                                            width: '120px',
                                            height: '120px',
                                                borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            marginBottom: '30px',
                                            boxShadow: '0 20px 40px rgba(253, 197, 26, 0.4)',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <i className="fas fa-search" style={{
                                                color: '#1e2247',
                                                fontSize: '48px'
                                            }}></i>
                                            </div>
                                            
                                        {/* Main Message */}
                                        <div style={{
                                            textAlign: 'center',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: '2rem',
                                                fontWeight: '700',
                                                marginBottom: '20px',
                                                lineHeight: '1.3'
                                            }}>
                                                See the Difference
                                            </h3>
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.7',
                                                marginBottom: '30px',
                                                maxWidth: '400px'
                                            }}>
                                                You won't have to wonder if your guards are doing their job, <strong style={{color: '#fdc51a'}}>you'll see it</strong>.
                                            </p>

                                            {/* Call to Action */}
                                            <button style={{
                                                background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                color: '#1e2247',
                                                border: 'none',
                                                padding: '15px 35px',
                                                borderRadius: '50px',
                                                fontSize: '1.1rem',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(253, 197, 26, 0.5)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}>
                                                <i className="fas fa-play me-2"></i>
                                                See It In Action
                                            </button>
                                        </div>

                                        {/* Floating Elements */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '20%',
                                            left: '15%',
                                            width: '20px',
                                            height: '20px',
                                            background: '#fdc51a',
                                            borderRadius: '50%',
                                            opacity: 0.6,
                                            animation: 'float 3s ease-in-out infinite'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '25%',
                                            right: '20%',
                                            width: '15px',
                                            height: '15px',
                                            background: '#fdc51a',
                                            borderRadius: '50%',
                                            opacity: 0.4,
                                            animation: 'float 4s ease-in-out infinite reverse'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== The Metro Guards Standard Section =====*/}
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
                                radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Certification Icons */}
                        <div style={{
                            position: 'absolute',
                            top: '15%',
                            left: '8%',
                            width: '80px',
                            height: '80px',
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                        }}>
                            <i className="fas fa-certificate" style={{color: 'rgba(253, 197, 26, 0.6)', fontSize: '32px'}}></i>
                </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            right: '10%',
                            width: '100px',
                            height: '100px',
                            background: 'rgba(253, 197, 26, 0.08)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                        }}>
                            <i className="fas fa-award" style={{color: 'rgba(253, 197, 26, 0.5)', fontSize: '40px'}}></i>
                        </div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                {/* Left Column - Content */}
                                <div className="col-lg-12 mb-5 mb-lg-0">
                                    <div className="standards-content text-center">
                                        {/* Header */}
                                        <div style={{ marginBottom: '40px' }}>
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "12px", 
                                                marginBottom: "25px" 
                                            }}>
                                                <div style={{
                                                    width: "40px",
                                                    height: "2px",
                                                    background: "linear-gradient(90deg, transparent, #fdc51a)",
                                                    borderRadius: "1px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "rgba(253, 197, 26, 0.2)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.85rem",
                                                    borderRadius: "30px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "2px",
                                                    border: "1px solid rgba(253, 197, 26, 0.3)"
                                                }}>
                                                    <i className="fas fa-medal me-2"></i>
                                                    Certified Excellence
                                        </span>
                                                <div style={{
                                                    width: "40px",
                                                    height: "2px",
                                                    background: "linear-gradient(90deg, #fdc51a, transparent)",
                                                    borderRadius: "1px"
                                                }}></div>
                                    </div>
                                            
                                            <h2 style={{ 
                                                color: "#ffffff", 
                                                fontSize: "3rem",
                                                fontWeight: "800",
                                                marginBottom: "25px",
                                                lineHeight: "1.2",
                                                textShadow: "0 4px 8px rgba(0,0,0,0.3)"
                                            }}>
                                                The Metro Guards <span style={{ color: "#fdc51a" }}>Standard</span>
                                    </h2>
                                            
                                            <p style={{ 
                                                color: "rgba(255, 255, 255, 0.9)", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px",
                                                maxWidth: "900px",
                                                margin: "0 auto 30px"
                                            }}>
                                                We hold ISO certification, maintain full licensing and insurance, and are proud ASIAL members with CM3 prequalification. These aren't just titles. <strong style={{color: '#fdc51a'}}>These are certifications of the quality and compliance we provide.</strong>
                                            </p>
                                            
                                            <p style={{ 
                                                color: "rgba(255, 255, 255, 0.8)", 
                                                fontSize: "1.1rem",
                                                lineHeight: "1.7",
                                                fontStyle: "italic",
                                                maxWidth: "800px",
                                                margin: "0 auto"
                                            }}>
                                                Because in this industry, reliability isn't built on words, it's built on <strong style={{color: '#fdc51a'}}>consistent actions, shift after shift</strong>.
                                    </p>
                                </div>

                                        
                                    </div>
                                </div>

                                {/* Right Column - Certifications Grid */}
                                
                </div>
                        </div>
                    </div>

                    {/*===== Choose Certainty Section =====*/}
                    <div className="certainty-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
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
                                radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(30, 34, 71, 0.05) 0%, transparent 50%),
                                linear-gradient(45deg, transparent 48%, rgba(253, 197, 26, 0.02) 50%, transparent 52%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Subtle Geometric Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '15%',
                            left: '8%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), rgba(253, 197, 26, 0.05))',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            zIndex: 1,
                            animation: 'float 6s ease-in-out infinite'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            right: '10%',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), rgba(30, 34, 71, 0.04))',
                            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                            zIndex: 1,
                            animation: 'float 8s ease-in-out infinite reverse'
                        }}></div>

                        {/* Floating Security Icons */}
                        <div style={{
                            position: 'absolute',
                            top: '25%',
                            right: '12%',
                            width: '70px',
                            height: '70px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            animation: 'float 4s ease-in-out infinite',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(253, 197, 26, 0.2)'
                        }}>
                            <i className="fas fa-shield-alt" style={{color: '#fdc51a', fontSize: '24px'}}></i>
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '30%',
                            left: '15%',
                            width: '60px',
                            height: '60px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            animation: 'float 5s ease-in-out infinite reverse',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(30, 34, 71, 0.2)'
                        }}>
                            <i className="fas fa-eye" style={{color: '#1e2247', fontSize: '20px'}}></i>
                        </div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-center">
                                    {/* Main Content */}
                                    <div className="certainty-content">
                                        {/* Header Badge */}
                                        <div style={{ marginBottom: '30px' }}>
                                            <span className="badge px-4 py-3" style={{ 
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)', 
                                                color: '#fdc51a', 
                                                fontWeight: 800,
                                                fontSize: '1rem',
                                                borderRadius: '50px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                border: '1px solid rgba(253, 197, 26, 0.3)',
                                                boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                <i className="fas fa-check-double me-2"></i>
                                                Your Decision Matters
                                            </span>
                                        </div>

                                        {/* Main Heading */}
                                        <h2 style={{ 
                                            color: "#1e2247", 
                                            fontSize: "4rem",
                                            fontWeight: "900",
                                            marginBottom: "40px",
                                            lineHeight: "1.1",
                                            textShadow: "0 4px 8px rgba(30, 34, 71, 0.2)"
                                        }}>
                                            Choose Certainty. <br/>
                                            <span style={{ 
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}>
                                                Choose Metro Guards
                                            </span>
                                        </h2>

                                        {/* Description */}
                                        <div style={{ marginBottom: '50px' }}>
                                            <p style={{ 
                                                color: "#1e2247", 
                                                fontSize: "1.4rem",
                                                lineHeight: "1.7",
                                                marginBottom: "25px",
                                                maxWidth: "800px",
                                                margin: "0 auto 25px auto",
                                                fontWeight: "500"
                                            }}>
                                                If you're tired of guessing whether your site is really protected, it's time to work with a team that treats your building like their own.
                                            </p>
                                            
                                            <p style={{ 
                                                color: "#1e2247", 
                                                fontSize: "1.3rem",
                                                lineHeight: "1.6",
                                                fontWeight: "600",
                                                fontStyle: "italic",
                                                maxWidth: "700px",
                                                margin: "0 auto"
                                            }}>
                                                Let's make sure the only thing that sleeps tonight is the building, <strong>not your security</strong>.
                                            </p>
                                        </div>

                                        {/* Call to Action Buttons */}
                                        <div className="cta-buttons mb-5">
                                            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
                                                <a 
                                                    href="/get-quotation" 
                                                    className="btn btn-lg px-5 py-4"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        color: '#ffffff',
                                                        border: 'none',
                                                        borderRadius: '60px',
                                                        textDecoration: 'none',
                                                        fontWeight: '800',
                                                        textTransform: 'uppercase',
                                                        fontSize: '1.1rem',
                                                        letterSpacing: '1px',
                                                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                                        boxShadow: '0 15px 35px rgba(30, 34, 71, 0.4)',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        minWidth: '280px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.5)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(30, 34, 71, 0.4)';
                                                    }}
                                                >
                                                    <i className="fas fa-file-contract me-3"></i>
                                                    Get Your Free Quote
                                                </a>
                                                
                                                <div style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.2rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px'
                                                }}>
                                                    OR
                                                </div>
                                                
                                                <a 
                                                    href="tel:1300731173" 
                                                    className="btn btn-lg px-5 py-4"
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#1e2247',
                                                        border: '3px solid #1e2247',
                                                        borderRadius: '60px',
                                                        textDecoration: 'none',
                                                        fontWeight: '800',
                                                        textTransform: 'uppercase',
                                                        fontSize: '1.1rem',
                                                        letterSpacing: '1px',
                                                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        minWidth: '280px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#1e2247';
                                                        e.currentTarget.style.color = '#fdc51a';
                                                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'transparent';
                                                        e.currentTarget.style.color = '#1e2247';
                                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <i className="fas fa-phone me-3"></i>
                                                    Call 1300 73 11 73
                                                </a>
                                            </div>
                                        </div>

                                        {/* Bottom Tagline */}
                                        <div className="tagline-section" style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.8))',
                                            borderRadius: '25px',
                                            padding: '40px 50px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)',
                                            backdropFilter: 'blur(15px)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                        }}>
                                            {/* Background Accent */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.05) 0%, transparent 50%, rgba(30, 34, 71, 0.03) 100%)',
                                                zIndex: 1
                                            }}></div>

                                            {/* Decorative Elements */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20px',
                                                right: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                borderRadius: '50%',
                                                zIndex: 1
                                            }}></div>

                                            {/* Central Icon */}
                                            <div style={{
                                                width: '90px',
                                                height: '90px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 25px auto',
                                                boxShadow: '0 20px 40px rgba(30, 34, 71, 0.3)',
                                                position: 'relative',
                                                zIndex: 2,
                                                border: '3px solid rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="fas fa-moon" style={{
                                                    color: '#fdc51a',
                                                    fontSize: '36px'
                                                }}></i>
                                            </div>

                                            <h3 style={{
                                                color: '#1e2247',
                                                fontSize: '2.4rem',
                                                fontWeight: '800',
                                                margin: 0,
                                                lineHeight: '1.3',
                                                position: 'relative',
                                                zIndex: 2,
                                                textShadow: '0 2px 4px rgba(30, 34, 71, 0.1)'
                                            }}>
                                                <span style={{color: '#1e2247'}}>Metro Guards,</span><br/>
                                                <span style={{
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}>
                                                    When Your Building Sleeps, We Don't.
                                                </span>
                                            </h3>
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