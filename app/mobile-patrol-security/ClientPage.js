'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, Factory, Car, HardHat, Shuffle, Timer, Route, ShieldCheck } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function MobilePatrolSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="MOBILE PATROL SECURITY GUARDS"
                mainTitle="MOBILE PATROL SECURITY GUARDS IN MELBOURNE" 
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Staff%20Escort%20Security/D5291C45-935B-4A29-96B6-70E5C0EF353A_1_105_c.webp"
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
                                            Movement That Means   <br />
                                            <span style={{color: '#fdc51a'}}>Something</span>
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
                                            Melbourne never sleeps, it simply changes pace. Long after the last shift ends, our mobile security patrols take over that rhythm. They move through silence with intent, headlights sweeping across closed gates and empty carparks, keeping life in spaces that seem still.
                                            <br/><br/>Metro Guards was built on motion, not noise, not routine, but awareness that travels. Each patrol is an act of presence, carried by mobile security services that protect what’s left behind after hours: your sites, your systems, your confidence.
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
                                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)',
                                                    minWidth: '200px',
                                                    width: '100%',
                                                    maxWidth: '280px',
                                                    textAlign: 'center'
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
                                                    borderWidth: '2px',
                                                    minWidth: '200px',
                                                    width: '100%',
                                                    maxWidth: '280px',
                                                    textAlign: 'center'
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Mobile%20Patrol%20Security/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '700px',
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

                    {/*=====  Services Section =====*/}
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Mobile%20Patrol%20Security/5B83C27B-9BC1-4C81-9191-1A25F2C536FA_1_105_c.webp"
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
                                            <h2 style={{ 
                                                color: "#1e2247", 
                                                fontSize: "3.2rem",
                                                fontWeight: "800",
                                                marginBottom: "25px",
                                                lineHeight: "1.2",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                            }}>
                                                Security That Doesn’t Wait for Trouble
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                               
                                            }}>
                                                Mobile security isn’t about response, it’s about rhythm. Our patrol vehicles follow routes designed from risk, not convenience. They appear when least expected, covering multiple sites through the night, checking, logging, and clearing zones before problems ever take form.
                                                <br /><br />While static guards anchor one site, our mobile patrol security guards become its pulse, deterring intruders through movement, timing, and visibility. Every turn of the wheel is a quiet reminder that your property is never left unguarded, even when unattended.
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
                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        {/* Real-Time Proof Section - Accordion Style */}
                                        <div className="human-element-section section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    PROVEN SYSTEMS
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Real-Time Proof, <span style={{color: '#fdc51a'}}>Real-World Reliability</span>
                                            </h2>
                                            
                                            <div className="features-accordion">
                                                {[
                                                    {
                                                        icon: "fas fa-map-marked-alt",
                                                        title: 'Digital Patrol Verification',
                                                        description: 'Each route logged, each arrival timestamped — you see what we see, when we see it.'
                                                    },
                                                    {
                                                        icon: "fas fa-bolt",
                                                        title: 'Incident Response',
                                                        description: 'When an alarm triggers, our mobile security patrols are already in motion, cutting response time where it matters most.'
                                                    },
                                                    {
                                                        icon: "fas fa-camera",
                                                        title: 'Photo Evidence',
                                                        description: 'Each checkpoint backed by imagery, leaving no gap between action and assurance.'
                                                    },
                                                    {
                                                        icon: "fas fa-certificate",
                                                        title: 'Certified Systems',
                                                        description: 'Accredited through ISO, ASIAL, and CM3 — systems that turn movement into measurable trust.'
                                                    },
                                                    {
                                                        icon: "fas fa-award",
                                                        title: 'Fifteen Years of Precision',
                                                        description: 'We\'ve patrolled Melbourne\'s commercial, industrial, and corporate districts for over a decade and a half, adapting routes as the city evolved, never missing a turn.'
                                                    }
                                                ].map((feature, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                            className="accordion-header p-3"
                                                        style={{
                                                                backgroundColor: activeFeature === index ? '#ffffff' : '#f8f9fa',
                                                                borderRadius: activeFeature === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            borderLeft: '4px solid #fdc51a',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                            onClick={() => toggleFeature(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                        className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                            width: '45px',
                                                                            height: '45px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                            color: '#fdc51a',
                                                                            fontSize: '1.2rem'
                                                                    }}
                                                                >
                                                                        <i className={feature.icon}></i>
                                                                </div>
                                                                <div>
                                                                        <h6 className="mb-0 fw-bold" style={{color: '#1e2247', fontSize: '1rem'}}>{feature.title}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                style={{
                                                                            width: '35px',
                                                                            height: '35px',
                                                                            backgroundColor: activeFeature === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                            color: activeFeature === index ? '#fdc51a' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                        <span style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                                                                            {activeFeature === index ? '−' : '+'}
                                                                    </span>
                                </div>
                                        </div>
                                    </div>
                                </div>

                                                        {activeFeature === index && (
                                                        <div 
                                                                className="accordion-content p-3"
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
                                                                    fontSize: '0.95rem'
                                                            }}>
                                                                    {feature.description}
                                                            </p>
                                        </div>
                                                    )}
                                    </div>
                                            ))}
                                </div>
                            </div>
                        </div>
                    </div>

                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Mobile%20Patrol%20Security/8A82EA6E-FBF3-4DB1-BAED-E85EB4C94AF4_1_105_c.webp"
                                                alt="Mobile Patrol Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '300px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* The Work Behind the Wheel Section */}
                                        <div className="section-header mt-5" style={{
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
                                                <h3 className="fw-bold mb-4" style={{color: '#1e2247', fontSize: '1.5rem'}}>
                                                    The Work Behind <span style={{color: '#fdc51a'}}>the Wheel</span>
                                                </h3>
                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '20px'
                                                }}>
                                                    Each patrol has a purpose beyond the drive. Our officers <strong style={{color: '#1e2247'}}>inspect perimeters, secure access points, and verify alarms with precision</strong>. They document with GPS-tracked software, capture photo evidence, and leave digital footprints that confirm every stop.
                                                </p>
                                                            <p style={{
                                                                color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                                margin: 0
                                                            }}>
                                                    These aren't box-ticking rounds — they're <strong style={{color: '#1e2247'}}>structured sweeps designed around real patterns of risk and vulnerability</strong>. Our security patrol services aren't built to look busy. They're built to <strong style={{color: '#fdc51a'}}>make absence impossible</strong>.
                                                            </p>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    
                    {/*===== When Coverage Becomes Confidence Section =====*/}
                    <div className="coverage-confidence-section section-padding" style={{
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

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <div className="section-header">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '25px'
                                        }}>
                                            <Target size={24} style={{color: '#fdc51a'}} />
                                            <span className="badge px-4 py-2" style={{
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                color: '#fdc51a',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                borderRadius: '30px',
                                                boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                Strategic Planning
                                                </span>
                                            </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            When Coverage Becomes <span style={{color: '#fdc51a'}}>Confidence</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                            fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                            marginBottom: '25px'
                                            }}>
                                            A well-planned patrol is <strong style={{color: '#1e2247'}}>part science, part instinct</strong>. Our teams coordinate routes with live data, weather conditions, and peak vulnerability windows.
                                            </p>
                                        </div>
                                        </div>

                                <div className="col-lg-6">
                                    <div className="coverage-grid">
                                        <div className="row g-4">
                                            {[
                                                {
                                                    icon: <Factory size={28} />,
                                                    title: 'Industrial Zones',
                                                    description: 'During power drops'
                                                },
                                                {
                                                    icon: <Car size={28} />,
                                                    title: 'Carparks',
                                                    description: 'After late shifts'
                                                },
                                                {
                                                    icon: <HardHat size={28} />,
                                                    title: 'Construction Sites',
                                                    description: 'Between material deliveries'
                                                }
                                            ].map((item, index) => (
                                                <div key={index} className="col-12">
                                                    <div style={{
                                                        background: '#ffffff',
                                                        borderRadius: '15px',
                                            padding: '25px',
                                                        border: '2px solid transparent',
                                                        transition: 'all 0.3s ease',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '20px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateX(10px)';
                                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 197, 26, 0.2)';
                                                        e.currentTarget.style.borderColor = '#fdc51a';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateX(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                        e.currentTarget.style.borderColor = 'transparent';
                                                    }}>
                                                        <div style={{
                                                            width: '60px',
                                                            height: '60px',
                                                            borderRadius: '12px',
                                                            background: index % 2 === 0 
                                                                ? 'linear-gradient(135deg, #fdc51a, #ffdb5c)'
                                                                : 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                            flexShrink: 0,
                                                            boxShadow: index % 2 === 0 
                                                                ? '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                                : '0 8px 20px rgba(30, 34, 71, 0.3)'
                                                        }}>
                                                            {item.icon}
                                                                </div>
                                                                <div>
                                                            <h4 style={{
                                                                color: '#1e2247',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '700',
                                                                marginBottom: '5px'
                                                            }}>
                                                                {item.title}
                                                            </h4>
                                                            <p style={{
                                                                color: '#6c757d', 
                                                                fontSize: '1rem',
                                                                margin: 0
                                                            }}>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                        </div>

                            <div className="row mt-5">
                                <div className="col-12">
                                        <div style={{
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        textAlign: 'center'
                                        }}>
                                            <p style={{
                                                color: '#1e2247',
                                            fontSize: '1.3rem',
                                            lineHeight: '1.8',
                                                margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            Every environment has a rhythm, and our security patrol services are designed to <span style={{color: '#fdc51a'}}>move in tune with it, not against it</span>.
                                        </p>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            margin: '15px 0 0 0',
                                                fontStyle: 'italic'
                                            }}>
                                            This is the part of protection most never see — <strong style={{color: '#1e2247'}}>the coordination behind the calm</strong>.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== The Routine That Never Repeats Section =====*/}
                    <div className="routine-section section-padding" style={{
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

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-center">
                                    <div className="section-header mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '25px',
                                            justifyContent: 'center'
                                        }}>
                                            <Shuffle size={24} style={{color: '#fdc51a'}} />
                                            <span className="badge px-4 py-2" style={{
                                                backgroundColor: 'rgba(253, 197, 26, 0.2)',
                                                color: '#fdc51a',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                borderRadius: '30px',
                                                border: '2px solid rgba(253, 197, 26, 0.3)'
                                            }}>
                                                Unpredictable Excellence
                                            </span>
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            The Routine That <span style={{color: '#fdc51a'}}>Never Repeats</span>
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.3rem',
                                            lineHeight: '1.8',
                                            marginBottom: '30px',
                                            maxWidth: '900px',
                                            margin: '0 auto 30px'
                                        }}>
                                            <strong style={{color: '#fdc51a'}}>Predictability breeds risk</strong>. That's why no two nights look the same for us.
                                        </p>
                                    </div>

                                    {/* Unpredictability Features */}
                                    <div className="row g-4 mb-5">
                                        {[
                                            {
                                                icon: <Clock size={32} />,
                                                title: 'Rotate Schedules',
                                                description: 'Dynamic timing patterns that keep potential threats guessing'
                                            },
                                            {
                                                icon: <Timer size={32} />,
                                                title: 'Alter Arrival Times',
                                                description: 'Variable checkpoint visits that eliminate predictable windows'
                                            },
                                            {
                                                icon: <Route size={32} />,
                                                title: 'Change Entry Patterns',
                                                description: 'Adaptive patrol routes designed to maintain uncertainty'
                                            }
                                        ].map((feature, index) => (
                                            <div key={index} className="col-lg-4 col-md-6">
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '20px',
                                                    padding: '40px 30px',
                                                height: '100%',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                                    e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                                    e.currentTarget.style.borderColor = '#fdc51a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                                    e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            }}>
                                                <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '15px',
                                                        background: index % 2 === 0 
                                                            ? 'linear-gradient(135deg, #fdc51a, #ffdb5c)'
                                                            : 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                        margin: '0 auto 25px',
                                                        color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                        boxShadow: index % 2 === 0 
                                                            ? '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                            : '0 10px 25px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        {feature.icon}
                                                </div>
                                                <h3 style={{
                                                    color: '#ffffff',
                                                        fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                        marginBottom: '15px'
                                                }}>
                                                        {feature.title}
                                                </h3>
                                                <p style={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                                        {feature.description}
                                                </p>
                                            </div>
                                            </div>
                                        ))}
                                        </div>

                                    {/* Closing Statement */}
                                            <div style={{
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(255, 219, 92, 0.1))',
                                                borderRadius: '20px',
                                                padding: '40px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                                backdropFilter: 'blur(10px)'
                                            }}>
                                                <p style={{
                                            color: '#ffffff',
                                            fontSize: '1.4rem',
                                                    lineHeight: '1.8',
                                            margin: 0,
                                            fontWeight: '600'
                                                }}>
                                            This unpredictability is the <span style={{color: '#fdc51a'}}>invisible shield that deters before it defends</span> — protection that feels like <strong>presence, not pattern</strong>.
                                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Built From 15 Years Section =====*/}
                    <div className="experience-section section-padding" style={{
                        background: '#ffffff',
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
                                radial-gradient(circle at 15% 25%, rgba(253, 197, 26, 0.03) 0%, transparent 50%),
                                radial-gradient(circle at 85% 75%, rgba(30, 34, 71, 0.03) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <div className="section-header">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '25px'
                                        }}>
                                            <Award size={24} style={{color: '#fdc51a'}} />
                                            <span className="badge px-4 py-2" style={{
                                                backgroundColor: '#fdc51a',
                                                color: '#1e2247',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                borderRadius: '30px',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                15+ Years Experience
                                            </span>
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            Built From 15 Years of <span style={{color: '#fdc51a'}}>Forward Motion</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            marginBottom: '25px'
                                        }}>
                                            From the <strong style={{color: '#1e2247'}}>outskirts of industrial estates to Melbourne's central business corridors</strong>, Metro Guards has covered ground that most never notice.
                                        </p>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '30px'
                                        }}>
                                            Fifteen years taught us that <strong style={{color: '#1e2247'}}>security on wheels isn't just about miles covered</strong> — it's about <strong style={{color: '#fdc51a'}}>moments anticipated</strong>.
                                        </p>
                                </div>
                            </div>

                                <div className="col-lg-6">
                                    <div className="training-features">
                                        {[
                                            {
                                                icon: <MapPin size={24} />,
                                                title: 'Route Analysis',
                                                description: 'Strategic planning for optimal coverage patterns'
                                            },
                                            {
                                                icon: <AlertTriangle size={24} />,
                                                title: 'Emergency Handling',
                                                description: 'Rapid response protocols and escalation procedures'
                                            },
                                            {
                                                icon: <ShieldCheck size={24} />,
                                                title: 'Alarm Systems Integration',
                                                description: 'Expert coordination with monitoring systems'
                                            },
                                            {
                                                icon: <Users size={24} />,
                                                title: 'Law Enforcement Liaison',
                                                description: 'After-hours interaction and collaboration protocols'
                                    }
                                ].map((feature, index) => (
                                            <div key={index} style={{
                                                background: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                                                borderRadius: '15px',
                                                padding: '25px',
                                                marginBottom: '15px',
                                            border: '2px solid transparent',
                                            transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '20px'
                                        }}
                                        onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#fdc51a';
                                                e.currentTarget.style.transform = 'translateX(10px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 197, 26, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'transparent';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                        }}>
                                            <div style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '10px',
                                                background: index % 2 === 0 
                                                    ? 'linear-gradient(135deg, #fdc51a, #ffdb5c)'
                                                    : 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                    color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                    flexShrink: 0,
                                                boxShadow: index % 2 === 0 
                                                        ? '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                        : '0 8px 20px rgba(30, 34, 71, 0.2)'
                                            }}>
                                                {feature.icon}
                                            </div>
                                                <div>
                                                    <h4 style={{
                                                color: '#1e2247',
                                                        fontSize: '1.2rem',
                                                fontWeight: '700',
                                                        marginBottom: '8px'
                                            }}>
                                                {feature.title}
                                                    </h4>
                                            <p style={{
                                                color: '#6c757d',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.6',
                                                margin: 0
                                            }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-12">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Inner glow */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'radial-gradient(circle at 50% 50%, rgba(253, 197, 26, 0.1), transparent 70%)',
                                            borderRadius: '20px',
                                            zIndex: 1
                                        }}></div>
                                        
                                        <div style={{position: 'relative', zIndex: 2}}>
                                            <p style={{
                                                color: '#fdc51a',
                                                fontSize: '1.4rem',
                                                lineHeight: '1.8',
                                                marginBottom: '15px',
                                                fontWeight: '700'
                                            }}>
                                                Every kilometer is a record of commitment.
                                            </p>
                                            <p style={{
                                                color: '#ffffff',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                margin: 0,
                                                fontStyle: 'italic'
                                            }}>
                                                Every site visit, a piece of <strong style={{color: '#fdc51a'}}>Melbourne quietly kept safe</strong>.
                                            </p>
                                        </div>
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
                                                    <Shield size={16} style={{display: 'inline', marginRight: '8px'}} />
                                                    Get Started Today
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
                                                Peace That Doesn't <span style={{color: '#fdc51a'}}>Stand Still</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                When the last engine shuts off and the city exhales, <strong style={{color: '#1e2247'}}>we keep moving</strong>. Because protection doesn't live in one place — it moves with those who care enough to check twice.
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                Metro Guards' mobile security patrols <strong style={{color: '#1e2247'}}>aren't a service you hire</strong> — they're the <strong style={{color: '#fdc51a'}}>motion behind your peace of mind</strong>.
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
                                                        Request a Quote
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
                                                    <Shield size={20} style={{display: 'inline', marginRight: '8px', color: '#fdc51a'}} />
                                                    <span style={{color: '#ffffff'}}>The world rests easier when someone's still awake, still moving, still watching over what matters most.</span>
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