'use client';
import { useState } from 'react';
import { Activity, Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, Factory, Car, HardHat, Shuffle, Timer, Route, ShieldCheck } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import Testimonials from '@/components/Testimonials';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function SecurityEscortPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SECURITY ESCORT SERVICES"
                mainTitle="Security Escort Services Melbourne" 
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
                                        <h2 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                            Professional  Escort Security Guards 
                                            <span style={{color: '#fdc51a'}}>Melbourne Near Me</span>
                                        </h2>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem', 
                                                lineHeight: '1.6',
                                                maxWidth: '500px'
                                            }}
                                        >
                                            Metro Guards provides trusted security escort services Melbourne designed to protect individuals, staff members, executives, VIPs, and valuable goods during travel or movement through high-risk environments. Whether you require a personal security escort Melbourne, medical staff escort, lone worker escort, or executive escort security Melbourne, our trained officers ensure safe passage, situational awareness and discreet protection at all times.
                                            We support travel across Melbourne CBD, Southbank, Richmond, Dandenong, Footscray, St Kilda, and all suburbs requiring safe accompaniment, day, night, or 24/7. Our escort security guards Melbourne are trained to protect against aggressive individuals, stalking threats, unsafe neighbourhoods and workplace harassment risks.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Staff%20Escort%20Security/DF097D51-727E-4A2C-9D03-027909D6810E_1_105_c.webp"
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


                     {/*=====  Section 2 =====*/}
                     <div className="services-section-2 section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        {/* Real-Time Proof Section - Accordion Style */}
                                        <div className="human-element-section section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    ESCORT OPERATIONS
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Why Melbourne Relies on Metro Guards for <span style={{color: '#fdc51a'}}>Escort Security</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px'
                                            }}>
                                                Safety concerns during travel or movement can arise unexpectedly, especially for vulnerable individuals, staff working late, or VIPs navigating high-risk situations. Metro Guards provides reassurance through:
                                                </p>
                                            
                                            <ul style={{
                                                listStyle: 'none',
                                                color: '#6c757d',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.8',
                                                paddingLeft: '0',
                                                marginBottom: '1.5rem'
                                            }}>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Protective movement for at-risk executives, professionals & staff</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Discreet escorts for lone workers & late-night travellers</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Security for valuable goods or sensitive documents</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Support for medical staff, nurses & healthcare professionals</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Response for stalking threats, domestic risks & aggressive individuals</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Trained escorts for unsafe neighbourhoods and unfamiliar routes</span>
                                                </li>
                                            </ul>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                marginBottom: '0',
                                                fontWeight: '600'
                                            }}>
                                                Our goal is simple: keep you safe from departure to arrival.
                                            </p>
                            </div>
                        </div>
                    </div>

                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Staff%20Escort%20Security/CCBD9C71-83AD-44D3-97FA-5FF6418F871C_1_105_c.webp"
                                                alt="Mobile Patrol Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '750px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    
                    {/*===== How Security Escort Operations Work Section =====*/}
                    <div className="escort-operations-section section-padding" style={{
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
                                radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)
                            `,
                                                zIndex: 1
                                            }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Route size={24} style={{color: '#fdc51a'}} />
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
                                                Coordinated Protocol
                                            </span>
                                            <Route size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Security Escort Services Melbourne | <span style={{color: '#fdc51a'}}>Tailored to Every Situation</span>
                                        </h2>

                                                <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto 50px',
                                            lineHeight: '1.8'
                                        }}>
                                            Metro Guards offers fully customised escort protection services, including:</p>
                                    </div>
                                </div>
                            </div>

                            {/* Operations Grid */}
                            <div className="row g-4 mb-4">
                                {[
                                    {
                                        icon: <MapPin size={32} />,
                                        title: 'Defined Route',
                                        description: 'Pre-planned pathways with contingency options.'
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: 'Supervised Movement',
                                        description: 'Continuous observation and real-time coordination.'
                                    },
                                    {
                                        icon: <CheckCircle size={32} />,
                                        title: 'Verified Arrival',
                                        description: 'GPS-logged confirmation at every destination.'
                                    },
                                    {
                                        icon: <Shield size={32} />,
                                        title: 'Emergency Readiness',
                                        description: 'Instant escalation protocols and backup response.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '20px',
                                            padding: '35px',
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
                                                marginBottom: '25px',
                                                color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                boxShadow: index % 2 === 0 
                                                    ? '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    : '0 10px 25px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                {item.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                marginBottom: '15px'
                                            }}>
                                                {item.title}
                                            </h3>

                                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.7',
                                                                margin: 0
                                                            }}>
                                                {item.description}
                                                            </p>
                                                        </div>
                                                </div>
                                ))}
                            </div>

                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(255, 219, 92, 0.1))',
                                        borderRadius: '20px',
                                        padding: '35px 45px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        backdropFilter: 'blur(10px)',
                                        display: 'inline-block'
                                    }}>
                                        <p style={{
                                            color: '#ffffff',
                                            fontSize: '1.4rem',
                                            lineHeight: '1.8',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            Whether it's guiding employees to vehicles after hours or escorting high-value cargo between industrial sites, every escort follows <span style={{color: '#fdc51a'}}>structure, not improvisation</span>.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    {/*===== Field Discipline and Officer Capability Section =====*/}
                    <div className="field-discipline-section section-padding" style={{
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
                                radial-gradient(circle at 20% 30%, rgba(30, 34, 71, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Award size={24} style={{color: '#1e2247'}} />
                                            <span className="badge px-4 py-2" style={{
                                                backgroundColor: '#fdc51a',
                                                color: '#1e2247',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                borderRadius: '30px',
                                                boxShadow: '0 5px 15px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                Expert Training
                                                </span>
                                            <Award size={24} style={{color: '#1e2247'}} />
                                            </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Advanced Escort Guard Training Built for <span style={{color: '#fdc51a'}}>Melbourne’s Real-World Risks</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto 50px',
                                            lineHeight: '1.8'
                                        }}>
                                            Our security escort officers are drawn from Metro Guards’ elite mobile patrol and close-protection division.
                                            </p>
                                    </div>
                                        </div>
                                        </div>

                            {/* Capability Grid */}
                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        icon: <Car size={32} />,
                                        title: 'Route assessment and defensive driving',
                                        number: '01'
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: 'Situational awareness and proximity control',
                                        number: '02'
                                    },
                                    {
                                        icon: <Phone size={32} />,
                                        title: 'Radio discipline and emergency coordination',
                                        number: '03'
                                    },
                                    {
                                        icon: <Shield size={32} />,
                                        title: 'De-escalation and incident containment',
                                        number: '04'
                                                }
                                            ].map((item, index) => (
                                    <div key={index} className="col-lg-6 col-md-6">
                                                    <div style={{
                                                        background: '#ffffff',
                                            borderRadius: '20px',
                                            padding: '35px',
                                                        border: '2px solid transparent',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                                        transition: 'all 0.3s ease',
                                            position: 'relative',
                                            overflow: 'hidden'
                                                    }}
                                                    onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                                        e.currentTarget.style.borderColor = '#fdc51a';
                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.2)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                        }}>
                                            {/* Number Badge */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '20px',
                                                right: '20px',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: 'rgba(253, 197, 26, 0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#1e2247',
                                                fontWeight: '800',
                                                fontSize: '0.85rem'
                                            }}>
                                                {item.number}
                                            </div>

                                            <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
                                                        <div style={{
                                                            width: '60px',
                                                            height: '60px',
                                                            borderRadius: '12px',
                                                            background: index % 2 === 0 
                                                        ? 'linear-gradient(135deg, #1e2247, #2c3e50)'
                                                        : 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                    color: index % 2 === 0 ? '#fdc51a' : '#1e2247',
                                                            flexShrink: 0,
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                                        }}>
                                                            {item.icon}
                                                                </div>

                                                                <div>
                                                    <h3 style={{
                                                                color: '#1e2247',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '700',
                                                        lineHeight: '1.4',
                                                                margin: 0
                                                            }}>
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                        <div style={{
                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.08))',
                                        borderRadius: '20px',
                                        padding: '35px 45px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                        }}>
                                            <p style={{
                                                color: '#1e2247',
                                            fontSize: '1.3rem',
                                            lineHeight: '1.8',
                                                margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            All officers are licensed under <strong style={{color: '#1e2247'}}>Victorian SLRD</strong>, <strong style={{color: '#fdc51a'}}>ASIAL-compliant</strong>, and <strong style={{color: '#1e2247'}}>CM3 prequalified</strong>, ensuring both legal and procedural alignment with client operations.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Command and Verification System Section =====*/}
                    <div className="command-verification-section section-padding" style={{
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
                                radial-gradient(circle at 30% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 70% 80%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Activity size={24} style={{color: '#fdc51a'}} />
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
                                                Live Command Network
                                            </span>
                                            <Activity size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Real-Time Visibility & <span style={{color: '#fdc51a'}}>Safety Monitoring</span>
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto 50px',
                                            lineHeight: '1.8'
                                        }}>
                                            Metro Guards uses digital tools to ensure you remain safe throughout your journey:
                                            </p>
                                    </div>
                                </div>
                                    </div>

                            {/* System Features Grid */}
                                    <div className="row g-4 mb-5">
                                        {[
                                    {
                                        icon: <MapPin size={32} />,
                                        title: 'GPS tracking and route replay',
                                        description: 'Real-time location monitoring with full historical playback.'
                                    },
                                            {
                                                icon: <Clock size={32} />,
                                        title: 'Time-stamped progress reports',
                                        description: 'Automated updates at every checkpoint and milestone.'
                                    },
                                    {
                                        icon: <Users size={32} />,
                                        title: 'Supervisor escalation and dual confirmation',
                                        description: 'Redundant verification protocols for critical movements.'
                                    },
                                    {
                                        icon: <Camera size={32} />,
                                        title: 'Photo-based arrival verification',
                                        description: 'Visual evidence captured at each destination point.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col-lg-6 col-md-6">
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '20px',
                                            padding: '35px',
                                            border: '2px solid rgba(253, 197, 26, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                            transition: 'all 0.3s ease',
                                            height: '100%'
                                                }}
                                                onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
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
                                                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                marginBottom: '25px',
                                                        color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                        boxShadow: index % 2 === 0 
                                                            ? '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    : 'none',
                                                border: index % 2 === 0 ? 'none' : '2px solid rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                {item.icon}
                                                </div>

                                                <h3 style={{
                                                    color: '#ffffff',
                                                        fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                        marginBottom: '15px'
                                                }}>
                                                {item.title}
                                                </h3>

                                                <p style={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                                {item.description}
                                                </p>
                                            </div>
                                            </div>
                                        ))}
                                        </div>

                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                            <div style={{
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '25px',
                                        padding: '40px 50px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        backdropFilter: 'blur(10px)',
                                        textAlign: 'center'
                                            }}>
                                                <p style={{
                                            color: '#ffffff',
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                                    lineHeight: '1.8',
                                            margin: 0
                                                }}>
                                            Clients receive confirmation reports directly from our system — <span style={{color: '#fdc51a', fontWeight: '800'}}>a record of continuity from departure to destination</span>.
                                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Industry Coverage Section =====*/}
                    <div className="industry-coverage-section section-padding" style={{
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
                                radial-gradient(circle at 25% 30%, rgba(253, 197, 26, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 75% 70%, rgba(30, 34, 71, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Building size={24} style={{color: '#1e2247'}} />
                                            <span className="badge px-4 py-2" style={{
                                                backgroundColor: '#fdc51a',
                                                color: '#1e2247',
                                                fontWeight: '700',
                                                fontSize: '0.85rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                borderRadius: '30px',
                                                boxShadow: '0 5px 15px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                Sector Expertise
                                            </span>
                                            <Building size={24} style={{color: '#1e2247'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Multi-Sector Coverage for Our Security <span style={{color: '#fdc51a'}}>Escort Services Across Melbourne</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto 50px',
                                            lineHeight: '1.8'
                                        }}>
                                            Metro Guards' Security Escort Services are relied upon across:
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Industry Grid */}
                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        icon: <Building size={32} />,
                                        title: 'Corporate and Government Facilities',
                                        description: 'Executive transport and secure document transfers.'
                                    },
                                    {
                                        icon: <Home size={32} />,
                                        title: 'Retail and Commercial Precincts',
                                        description: 'Cash-in-transit and high-value inventory movements.'
                                    },
                                    {
                                        icon: <Factory size={32} />,
                                        title: 'Warehousing and Logistics',
                                        description: 'Inter-site cargo escorts and container surveillance.'
                                    },
                                    {
                                        icon: <HardHat size={32} />,
                                        title: 'Construction and Infrastructure',
                                        description: 'Equipment escorts and material delivery oversight.'
                                    },
                                    {
                                        icon: <Calendar size={32} />,
                                        title: 'Event and Venue Operations',
                                        description: 'VIP arrivals and crew protection during setup/teardown.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div style={{
                                            background: '#ffffff',
                                            borderRadius: '20px',
                                            padding: '35px',
                                            height: '100%',
                                            border: '2px solid transparent',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                                e.currentTarget.style.borderColor = '#fdc51a';
                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                        }}>
                                            <div style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '15px',
                                                background: index % 2 === 0 
                                                    ? 'linear-gradient(135deg, #1e2247, #2c3e50)'
                                                    : 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '25px',
                                                color: index % 2 === 0 ? '#fdc51a' : '#1e2247',
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                                            }}>
                                                {item.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#1e2247',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                marginBottom: '15px',
                                                lineHeight: '1.3'
                                            }}>
                                                {item.title}
                                            </h3>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.7',
                                                margin: 0
                                            }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.08))',
                                        borderRadius: '20px',
                                        padding: '35px 45px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: '#1e2247',
                                            fontSize: '1.3rem',
                                            lineHeight: '1.8',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            Our scope extends from <strong style={{color: '#1e2247'}}>Melbourne's CBD to regional Victoria</strong>, anywhere structured movement needs <strong style={{color: '#fdc51a'}}>structured protection</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Clients Trust Metro Guards Section =====*/}
                    <div className="trust-section section-padding" style={{
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
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Star size={24} style={{color: '#fdc51a'}} />
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
                                                Trusted Excellence
                                            </span>
                                            <Star size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '50px',
                                            lineHeight: '1.2'
                                        }}>
                                            Why Melbourne Chooses Metro Guards for  <span style={{color: '#fdc51a'}}>Security Escort Protection</span>
                                        </h2>
                                        <p>Melbourne residents, corporate teams and high-profile individuals choose Metro Guards because:
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Points Grid */}
                            <div className="row g-4">
                                {[
                                    {
                                        icon: <Award size={32} />,
                                        title: '15+ Years of Verified Field Operations',
                                        description: 'Proven across patrol, transport, and event coverage.'
                                    },
                                    {
                                        icon: <UserCheck size={32} />,
                                        title: 'Trained, Licensed, and Audited Personnel',
                                        description: 'Compliant with all Victorian and national standards.'
                                    },
                                    {
                                        icon: <MapPin size={32} />,
                                        title: 'Live GPS Oversight and Reporting',
                                        description: 'Complete transparency for every movement.'
                                    },
                                    {
                                        icon: <Zap size={32} />,
                                        title: 'Rapid Deployment',
                                        description: 'Mobile units ready for scheduled or emergency escorts.'
                                    },
                                    {
                                        icon: <ShieldCheck size={32} />,
                                        title: 'Certified and Insured',
                                        description: 'ISO, ASIAL, and CM3 prequalified.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '20px',
                                            padding: '35px',
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
                                                marginBottom: '25px',
                                                color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                boxShadow: index % 2 === 0 
                                                    ? '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    : '0 10px 25px rgba(30, 34, 71, 0.3)',
                                                border: index % 2 === 0 
                                                    ? 'none'
                                                    : '2px solid rgba(253, 197, 26, 0.3)'
                                            }}>
                                                {item.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                marginBottom: '15px',
                                                lineHeight: '1.3'
                                            }}>
                                                {item.title}
                                            </h3>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.7',
                                                margin: 0
                                            }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Testimonials />
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
                                                Security Escort Services Melbourne <span style={{color: '#fdc51a'}}>Clients Trust</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '850px',
                                                margin: '0 auto 40px'
                                            }}>
                                                From executives and VIPs to lone workers, nurses, vulnerable individuals and those facing personal safety concerns, Metro Guards ensures every journey is secure,  no matter the distance, location or time of day.
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
                                                        Get a Quote
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
                <FAQSectionDynamic 
                    faqs={[
                        {
                            question: "Who provides security escort services in Melbourne?",
                            answer: "Metro Guards provides licensed security escort services in Melbourne, offering personal, VIP, executive and female escort officers for safe travel, workplace protection and high-risk situations. Our guards accompany clients through unsafe areas, unfamiliar routes or sensitive environments with full discretion."
                        },
                        {
                            question: "How do security escort guards protect individuals in Melbourne?",
                            answer: "Escort guards protect individuals by monitoring surroundings, assessing risks, managing aggressive behaviour, securing travel routes and ensuring safe arrival. Metro Guards' officers provide close support for lone workers, executives, vulnerable individuals and anyone requiring safe movement."
                        },
                        {
                            question: "Do you provide VIP security escorts in Melbourne?",
                            answer: "Yes. Metro Guards offers VIP escort security Melbourne, including executive protection officers, close protection guards and female escort staff. We manage routes, crowds and threats discreetly to safeguard high-profile individuals during travel or public appearances."
                        },
                        {
                            question: "Can I hire a female security escort in Melbourne?",
                            answer: "Absolutely. Metro Guards supplies female security escort Melbourne officers for clients who prefer a more comfortable or sensitive support experience. They assist with personal safety, professional travel and vulnerable individual escorts."
                        },
                        {
                            question: "How do I hire security escort guards in Melbourne?",
                            answer: "You can hire escort guards by contacting Metro Guards for a confidential assessment. We provide personal escort security hire Melbourne, VIP escorts, corporate protection and emergency escort services with rapid deployment available 24/7."
                        }
                    ]}
                />
            </Layout>
            </> ) }