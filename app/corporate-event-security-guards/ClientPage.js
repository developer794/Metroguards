'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, Factory, Car, HardHat, Shuffle, Timer, Route, ShieldCheck, Activity, FileText } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function CorporateEventSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CORPORATE EVENT SECURITY GUARDS "
                mainTitle="CORPORATE EVENT SECURITY GUARDS IN MELBOURNE"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <div className="hero-content" style={{ textAlign: 'left' }}>
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
                                            Professional Presence for Moments  <br />
                                            <span style={{ color: '#fdc51a' }}>That Define Brands</span>
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
                                            Corporate events are more than gatherings. They’re statements of trust, reputation, and precision. Every entrance, every guest interaction, every pause carries your brand’s identity. Our corporate event security guards carry that responsibility quietly, ensuring everything unfolds with calm control and understated authority.
                                            <br /><br />For over fifteen years, Metro Guards has provided corporate event security services across Melbourne’s most high-profile summits, product launches, board conferences, and executive celebrations. We bring structure, discipline, and human sensitivity to every moment that defines your success.
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
                                                    <Phone size={16} /> 1300731173
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/874BB7DC-8032-478D-9ED5-CF3287E50627_1_105_c.webp"
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
                    <div className="services-section-2 section-padding" style={{ background: '#ffffff' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        {/* Why Metro Guards Section - Accordion Style */}
                                        <div className="human-element-section section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                                    EXCELLENCE STANDARDS
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                                Precision That Honors <span style={{ color: '#fdc51a' }}>the Moment</span>
                                            </h2>

                                            <div className="features-accordion">
                                                {[
                                                    {
                                                        icon: "fas fa-clock",
                                                        title: 'Time Integrity',
                                                        description: 'Every guard on-site before doors open, every rotation tracked to the minute.'
                                                    },
                                                    {
                                                        icon: "fas fa-map-marker-alt",
                                                        title: 'Location Verified',
                                                        description: 'GPS-logged movement confirming post coverage and patrol integrity throughout the event.'
                                                    },
                                                    {
                                                        icon: "fas fa-eye",
                                                        title: 'Real-Time Insight',
                                                        description: 'Live updates and incident visuals shared instantly with event coordinators for complete visibility.'
                                                    },
                                                    {
                                                        icon: "fas fa-user-check",
                                                        title: 'Unannounced Quality Audits',
                                                        description: 'Supervisors visit discreetly during live events to maintain professional consistency without disruption.'
                                                    },
                                                    {
                                                        icon: "fas fa-certificate",
                                                        title: 'Certified Compliance',
                                                        description: 'ISO-accredited standards across Quality, Occupational Health & Safety, and Environment.'
                                                    },
                                                    {
                                                        icon: "fas fa-award",
                                                        title: 'Recognised Memberships',
                                                        description: 'ASIAL and CM3 prequalification ensuring national governance and compliance at executive-level venues.'
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
                                                                        <h6 className="mb-0 fw-bold" style={{ color: '#1e2247', fontSize: '1rem' }}>{feature.title}</h6>
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
                                                                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
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

                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/03549B5D-366A-47E3-BBF3-3C916341AA19_1_105_c.webp"
                                                alt="Mobile Patrol Security Guards"
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '700px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/*===== Situations We Secure Section =====*/}
                    <div className="situations-section section-padding" style={{
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
                                            <Shield size={24} style={{ color: '#fdc51a' }} />
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
                                                Professional Excellence
                                            </span>
                                            <Shield size={24} style={{ color: '#fdc51a' }} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Guards Who Understand the Language of <span style={{ color: '#fdc51a' }}>Corporate Events</span>
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto',
                                            lineHeight: '1.8'
                                        }}>
                                            Corporate security requires emotional intelligence as much as tactical skill. Our guards know how to read a room, to protect without presence overpowering the moment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Situations Grid */}
                            <div className="row g-4 mb-4">
                                {[
                                    {
                                        icon: <Users size={32} />,
                                        title: 'Guest Interaction',
                                        description: 'Polite, composed, and brand-conscious communication.'
                                    },
                                    {
                                        icon: <Shield size={32} />,
                                        title: 'Protocol Adherence',
                                        description: 'Strict access validation and confidentiality management.'
                                    },
                                    {
                                        icon: <UserCheck size={32} />,
                                        title: 'Conflict De-escalation',
                                        description: 'Calm resolution through verbal control and awareness.'
                                    },
                                    {
                                        icon: <AlertTriangle size={32} />,
                                        title: 'Emergency Readiness',
                                        description: 'Trained for evacuation, medical response, and fire safety.'
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: 'Observation Discipline',
                                        description: 'Quiet monitoring of crowd behaviour and vendor zones.'
                                    },
                                    {
                                        icon: <Activity size={32} />,
                                        title: 'Central Command Link',
                                        description: 'Every update flows through a live operational dashboard.'
                                    }
                                ].map((situation, index) => (
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
                                                    : '0 10px 25px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                {situation.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                marginBottom: '15px'
                                            }}>
                                                {situation.title}
                                            </h3>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.7',
                                                margin: 0
                                            }}>
                                                {situation.description}
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
                                            They operate not as external contractors, but as <span style={{ color: '#fdc51a' }}>part of your event fabric</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Intelligence You Can Audit Section =====*/}
                    <div className="intelligence-section section-padding" style={{
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
                                radial-gradient(circle at 30% 20%, rgba(30, 34, 71, 0.05) 0%, transparent 50%),
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
                                            <Target size={24} style={{ color: '#1e2247' }} />
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
                                                Complete Transparency
                                            </span>
                                            <Target size={24} style={{ color: '#1e2247' }} />
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Intelligence You Can <span style={{ color: '#fdc51a' }}>Audit</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Card */}
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '50px 60px',
                                        boxShadow: '0 20px 60px rgba(30, 34, 71, 0.1)',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decorative Corner Element */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '150px',
                                            height: '150px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

                                        {/* Icon Grid */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '20px',
                                            marginBottom: '35px',
                                            flexWrap: 'wrap'
                                        }}>
                                            {[
                                                { icon: <Camera size={28} />, color: '#fdc51a' },
                                                { icon: <FileText size={28} />, color: '#1e2247' },
                                                { icon: <Clock size={28} />, color: '#fdc51a' },
                                                { icon: <MapPin size={28} />, color: '#1e2247' },
                                                { icon: <CheckCircle size={28} />, color: '#fdc51a' }
                                            ].map((item, index) => (
                                                <div key={index} style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    borderRadius: '15px',
                                                    background: item.color === '#fdc51a'
                                                        ? 'linear-gradient(135deg, #fdc51a, #ffdb5c)'
                                                        : 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: item.color === '#fdc51a' ? '#1e2247' : '#fdc51a',
                                                    boxShadow: item.color === '#fdc51a'
                                                        ? '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                        : '0 8px 20px rgba(30, 34, 71, 0.2)',
                                                    transition: 'transform 0.3s ease',
                                                    cursor: 'default'
                                                }}
                                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                                    {item.icon}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Main Text Content */}
                                        <div style={{
                                            textAlign: 'center',
                                            maxWidth: '850px',
                                            margin: '0 auto'
                                        }}>
                                            <p style={{
                                                color: '#495057',
                                                fontSize: '1.2rem',
                                                lineHeight: '2',
                                                marginBottom: '30px',
                                                fontWeight: '400'
                                            }}>
                                                Every second of coverage is documented. From gate entries to movement logs, our reporting platform captures the full story of your event's protection. Supervisors review incidents in real time, while photographic evidence builds a transparent record for post-event review.
                                            </p>

                                            {/* Highlighted Statement */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.08))',
                                                borderRadius: '20px',
                                                padding: '30px 40px',
                                                border: '2px solid rgba(253, 197, 26, 0.3)',
                                                marginTop: '30px'
                                            }}>
                                                <p style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.35rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    fontWeight: '700'
                                                }}>
                                                    Accountability isn't a statement for us — it's a <span style={{
                                                        color: '#fdc51a',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        fontWeight: '800'
                                                    }}>system you can see</span>.
                                                </p>
                                            </div>
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
                                                    <Shield size={16} style={{ display: 'inline', marginRight: '8px' }} />
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
                                                A Partnership Built on <span style={{ color: '#fdc51a' }}>Trust</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.25rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '850px',
                                                margin: '0 auto 30px'
                                            }}>
                                                We see event security as a live operation, mapped, timed, and monitored to the second. Each interaction, each transition, is part of a controlled system built for <strong style={{ color: '#1e2247' }}>clarity</strong> and <strong style={{ color: '#fdc51a' }}>accountability</strong>. Through digital oversight, supervisor validation, and instant reporting, we ensure no decision goes unseen, and no risk goes unmanaged.
                                            </p>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '850px',
                                                margin: '0 auto 30px'
                                            }}>
                                                What you experience on the surface is <strong style={{ color: '#1e2247' }}>simplicity</strong>. Behind it runs a precision network built entirely around your peace of mind.
                                            </p>

                                            <p style={{
                                                color: '#1e2247',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '850px',
                                                margin: '0 auto 40px',
                                                fontWeight: '600'
                                            }}>
                                                That's how Melbourne's leading names have trusted us to <strong style={{ color: '#fdc51a' }}>secure the moments that matter most</strong>.
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
                                                        Get a Free Quote
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
        </>)
}