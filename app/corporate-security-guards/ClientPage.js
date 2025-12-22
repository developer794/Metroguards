'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import Testimonials from '@/components/Testimonials';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function CorporateSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CORPORATE SECURITY GUARDS"
                mainTitle="CORPORATE SECURITY GUARDS IN MELBOURNECorporate Security Guards in Melbourne"
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
                                            On-Site Corporate Guard Services for
                                            <span style={{ color: '#fdc51a' }}> Events, Offices & Commercial Spaces</span>
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
                                            Metro Guards provides highly trained corporate security guards Melbourne businesses rely on to protect offices, corporate events, boardrooms, commercial buildings, and VIP guests. Our officers specialise in corporate event security, corporate crowd control, VIP escorting, and professional access management, ensuring every business function runs safely and without interruption.
                                            <br /><br />Whether you’re hosting a corporate gala in Docklands, a conference in Southbank, a seminar in Hawthorn, or managing a high-rise office in the CBD, Metro Guards delivers corporate event security services Melbourne companies depend on for a refined, professional, and seamless security presence.
                                            <br /><br />
                                            For anyone searching “who provides corporate event security guards in Melbourne?”, Metro Guards is the trusted choice.
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
                                                    height: '800px',
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
                    <div className="services-section " style={{
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
                                                    src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/71A872B7-4647-45B4-A0C2-D01F1BF3056C_1_105_c.webp"
                                                    alt="Professional Building Security Guards"
                                                    className="img-fluid"
                                                    style={{
                                                        width: '100%',
                                                        height: '750px',
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
                                                Why Offices & Corporate Functions Run Safer With Professional Security
                                            </h2>

                                            <p style={{
                                                color: "#6c757d",
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1.5rem"
                                            }}>
                                                Corporate environments require a higher level of discipline, discretion, and professionalism. Events and workplaces across Melbourne face increasing risks that demand trained security officers who understand business etiquette and stakeholder expectations.
                                            </p>

                                            <p style={{
                                                color: "#6c757d",
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1rem",
                                                fontWeight: "600"
                                            }}>
                                                Common risks include:
                                            </p>

                                            <ul style={{
                                                listStyle: 'none',
                                                color: '#6c757d',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.8',
                                                paddingLeft: '0',
                                                marginBottom: '1.5rem'
                                            }}>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Unauthorised access to offices, meetings, or private events</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Uncontrolled guest movement during functions</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>High-value equipment or asset protection</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>VIP safety & escorting</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Aggressive behaviour, intoxication, or crowd escalation</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Security vulnerabilities at entry points</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Sensitive corporate information exposure risks</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Safety concerns during high-traffic corporate events</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Emergency response readiness</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Theft, vandalism, or disruption during major functions</span>
                                                </li>
                                            </ul>

                                            <p style={{
                                                color: "#6c757d",
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8"
                                            }}>
                                                These challenges require Metro <strong style={{ color: '#fdc51a' }}>corporate event security guards Melbourne</strong> trained to maintain safety while preserving the professionalism expected in business environments.
                                            </p>


                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/*=====  Section 2 =====*/}
                    <div className="services-section-2 section-padding" style={{ background: '#ffffff' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/03549B5D-366A-47E3-BBF3-3C916341AA19_1_105_c.webp"
                                                alt="Professional Building Security Guards"
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '400px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>

                                        {/* Accountability Section - Paragraph Style */}
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
                                                <h2 className="display-6 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                                    A Professional Security Services for  <span style={{ color: '#fdc51a' }}>Melbourne’s Corporate Sector</span>
                                                </h2>
                                                <p className="lead mb-3" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Corporate spaces require officers who present well, communicate professionally, and maintain a calm presence. <strong style={{ color: '#fdc51a' }}>Metro Guards</strong> provides <strong style={{ color: '#1e2247' }}>professional corporate event security in Melbourne</strong> designed to:
                                                </p>

                                                <ul style={{
                                                    listStyle: 'none',
                                                    color: '#6c757d',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    paddingLeft: '0',
                                                    marginTop: '1rem',
                                                    marginBottom: '1rem'
                                                }}>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Engage respectfully with executives, staff, and guests</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Maintain access control with discretion</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Monitor crowd behaviour at large events</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Protect high-profile speakers & VIPs</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Respond quickly to behavioural issues</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>De-escalate conflicts discreetly</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Support event organisers and venue managers</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Protect sensitive business environments</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Provide security that enhances, not interrupts, the event experience</span>
                                                    </li>
                                                </ul>

                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    marginTop: '0.5rem'
                                                }}>
                                                    Our officers embody professionalism, punctuality, and the composure expected in Melbourne's leading event and corporate venues.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                                    CORPORATE EXCELLENCE
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                                Specialised Corporate Security  <span style={{ color: '#fdc51a' }}>Guard Services</span>
                                            </h2>
                                            <p className="lead mb-4" style={{ color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7' }}>Metro Guards provides complete corporate security Melbourne solutions tailored to office buildings, commercial sites, and business events.
                                            </p>
                                        </div>

                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-clipboard-check",
                                                    title: "Procedural Discipline",

                                                    details: "Every Standard Operating Procedure followed to the letter with no deviation."
                                                },
                                                {
                                                    icon: "fas fa-door-closed",
                                                    title: "Controlled Access",

                                                    details: "Authority at entry points, professionalism in every interaction."
                                                },
                                                {
                                                    icon: "fas fa-route",
                                                    title: "Relentless Patrol Coverage",

                                                    details: "Full-area sweeps conducted with precision and consistency."
                                                },
                                                {
                                                    icon: "fas fa-video",
                                                    title: "System Awareness",

                                                    details: "Constant monitoring of alarms, CCTV, and controls — proactive, not reactive."
                                                },
                                                {
                                                    icon: "fas fa-exclamation-triangle",
                                                    title: "Emergency Readiness",

                                                    details: "Trained for evacuations, lockdowns, and first response under pressure."
                                                },
                                                {
                                                    icon: "fas fa-clock",
                                                    title: "Shift Integrity",

                                                    details: "Punctual, accountable, and present from start to finish."
                                                },
                                                {
                                                    icon: "fas fa-user-tie",
                                                    title: "Professional Presentation",

                                                    details: "Uniformed, composed, and aligned with the corporate environments they protect."
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
                                                                    <h5 className="mb-1 fw-bold" style={{ color: '#1e2247' }}>{service.title}</h5>
                                                                    <p className="mb-0" style={{ color: '#6c757d', fontSize: '0.9rem' }}>{service.summary}</p>
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
                                                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
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

                    {/*===== Framework Section =====*/}
                    <div className="framework-section section-padding" style={{
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
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '120px',
                            height: '120px',
                            background: 'rgba(253, 197, 26, 0.08)',
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
                                            <i className="fas fa-cogs me-2"></i>
                                            Proven Systems
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
                                        marginBottom: '30px',
                                        lineHeight: '1.2'
                                    }}>
                                        Corporate & Event  <span style={{ color: '#fdc51a' }}>Standards</span>
                                    </h2>
                                    <p className="lead mb-4" style={{ color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7' }}>Our corporate event security guards are supported by real-time monitoring, professional reporting, and strict compliance procedures.
                                        <br /><br />We ensure:

                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4">
                                {/* Feature 1 - GPS-Verified Patrols */}
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
                                        {/* Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

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
                                            <i className="fas fa-map-marker-alt" style={{ color: '#1e2247', fontSize: '32px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            GPS-Verified Patrols
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Each patrol logged and time-stamped for <strong style={{ color: '#1e2247' }}>absolute accountability</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 - Supervisor Audits */}
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
                                        {/* Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

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
                                            <i className="fas fa-user-check" style={{ color: '#fdc51a', fontSize: '32px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Supervisor Audits
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Unannounced inspections that sustain <strong style={{ color: '#1e2247' }}>performance and focus</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 - ISO-Certified Systems */}
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
                                        {/* Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

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
                                            <i className="fas fa-certificate" style={{ color: '#1e2247', fontSize: '32px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ISO-Certified Systems
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Quality, OH&S, and Environmental standards shaping <strong style={{ color: '#1e2247' }}>every operation</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 - Live Client Portal */}
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
                                        {/* Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

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
                                            <i className="fas fa-laptop" style={{ color: '#fdc51a', fontSize: '32px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Live Client Portal
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Real-time access to <strong style={{ color: '#1e2247' }}>activity reports and incident updates</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 5 - Licensed and Accredited */}
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
                                        {/* Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

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
                                            <i className="fas fa-award" style={{ color: '#1e2247', fontSize: '32px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Licensed and Accredited
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            ASIAL member, CM3 certified, and compliant with all <strong style={{ color: '#1e2247' }}>Victorian security and labour hire laws</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Professionals and Technology Section =====*/}
                    <div className="professionals-technology-section section-padding" style={{
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

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '15%',
                            right: '8%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Professionals Shaped by Responsibility */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto">
                                    <div className="text-center mb-5">
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
                                                <i className="fas fa-medal me-2"></i>
                                                Elite Personnel
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
                                            Corporate Security Guards Melbourne  <span style={{ color: '#fdc51a' }}>Businesses Rely On</span>
                                        </h2>
                                    </div>

                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.02), rgba(255, 255, 255, 0.95))',
                                        borderRadius: '25px',
                                        padding: '50px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                                    }}>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.25rem',
                                            lineHeight: '1.8',
                                            marginBottom: '30px'
                                        }}>
                                            Whether you need office security during operating hours or corporate event security guards for tonight in Melbourne, Metro Guards is ready to deploy trained professionals immediately.
                                        </p>


                                    </div>
                                </div>
                            </div>

                            {/* Visibility Through Technology */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto">
                                    <div className="text-center mb-5">
                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '2.5rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Smarter Security, Powered by  <span style={{ color: '#fdc51a' }}>Real-Time Technology</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.7',
                                            maxWidth: '750px',
                                            margin: '0 auto'
                                        }}>
                                            Every patrol, report, and security action is captured through advanced digital systems that deliver real-time visibility, complete transparency, and measurable accountability for every Melbourne site we protect.

                                        </p>
                                    </div>

                                    <div className="row g-4 mb-4">
                                        {/* GPS-Verified Patrols */}
                                        <div className="col-md-4">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '35px 30px',
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
                                                    <i className="fas fa-map-marked-alt" style={{ color: '#1e2247', fontSize: '28px' }}></i>
                                                </div>

                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    marginBottom: '15px'
                                                }}>
                                                    GPS-Verified Patrols
                                                </h3>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                                    Every route tracked and recorded through secure systems.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Live Client Dashboards */}
                                        <div className="col-md-4">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '35px 30px',
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
                                                    <i className="fas fa-desktop" style={{ color: '#fdc51a', fontSize: '28px' }}></i>
                                                </div>

                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    marginBottom: '15px'
                                                }}>
                                                    Live Client Dashboards
                                                </h3>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                                    Instant visibility into patrol logs, reports, and incident updates.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Supervisor Oversight */}
                                        <div className="col-md-4">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '35px 30px',
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
                                                    <i className="fas fa-user-shield" style={{ color: '#1e2247', fontSize: '28px' }}></i>
                                                </div>

                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.4rem',
                                                    fontWeight: '700',
                                                    marginBottom: '15px'
                                                }}>
                                                    Supervisor Oversight
                                                </h3>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                                    Continuous monitoring and scheduled audits to maintain vigilance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '15px',
                                        padding: '30px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: '#1e2247',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.7',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            These systems remove uncertainty, replacing assumption with <strong style={{ color: '#fdc51a' }}>clear, verifiable data</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trusted Across Melbourne's Corporate Network */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '60px 50px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 25px 50px rgba(30, 34, 71, 0.2)'
                                    }}>
                                        {/* Accent Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-50px',
                                            right: '-50px',
                                            width: '200px',
                                            height: '200px',
                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15), transparent 70%)',
                                            borderRadius: '50%'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 2 }}>
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                marginBottom: '30px'
                                            }}>
                                                <div style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 10px 25px rgba(253, 197, 26, 0.4)'
                                                }}>
                                                    <i className="fas fa-building" style={{ color: '#1e2247', fontSize: '26px' }}></i>
                                                </div>
                                                <h2 style={{
                                                    color: '#ffffff',
                                                    fontSize: '2.2rem',
                                                    margin: 0,
                                                    fontWeight: '800'
                                                }}>
                                                    Trusted for Melbourne’s Most Important <span style={{ color: '#fdc51a' }}>Corporate Events & Venues</span>
                                                </h2>
                                            </div>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                margin: 0
                                            }}>
                                                From high-profile conferences and black-tie galas to business meetings, award nights, seminars, and office celebrations, Metro Guards provides corporate event security Melbourne businesses rely on for seamless protection. Our team delivers trained corporate function security guards, corporate party security guards, and business event security guards who operate with professionalism, discretion, and an understanding of corporate etiquette.
                                                <br /><br />We secure your venue before, during, and after the event, ensuring assets, guests, staff, and executives remain protected. This consistent performance is why we’re trusted as one of the top-rated corporate event security guards Melbourne and the preferred choice for companies searching for local corporate event security Melbourne or corporate event security guards in my area.
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                                    <i className="fas fa-briefcase me-2"></i>
                                                    Partner With Excellence
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
                                                Strengthen Your Corporate Operations With Security  <span style={{ color: '#fdc51a' }}>You Can Rely On</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                In a corporate world driven by precision and accountability, security isn’t optional, it’s the foundation of trust, continuity, and performance. With Metro Guards, your business operates with the assurance that every asset, every event, and every person is protected with unwavering professionalism.</p>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px',
                                                fontStyle: 'italic'
                                            }}>
                                                Because in a world measured by reliability, trust isn't a feeling; <strong style={{ color: '#fdc51a' }}>it's an outcome</strong>.
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
                                                    <i className="fas fa-shield-alt me-2" style={{ color: '#fdc51a' }}></i>
                                                    Metro Guards – <span style={{ color: '#ffffff' }}>Where corporate security meets uncompromising discipline and proven results.</span>
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
                            question: "Who provides corporate event security guards in Melbourne?",
                            answer: "Metro Guards provides professional corporate event security guards in Melbourne, protecting conferences, seminars, galas, award nights, office parties, and high-profile business functions with trained, discreet security officers."
                        },
                        {
                            question: "How do I hire corporate event security guards in Melbourne?",
                            answer: "You can hire corporate event security guards by contacting Metro Guards for a tailored assessment. We provide corporate crowd control, access management, and VIP protection for all types of business events."
                        },
                        {
                            question: "Do you offer 24/7 corporate event security in Melbourne?",
                            answer: "Yes. Metro Guards offers 24/7 corporate event security for day events, evening functions, overnight setups, and multi-day conferences across Melbourne."
                        },
                        {
                            question: "What do corporate event security guards do?",
                            answer: "Corporate event security guards manage access control, protect VIPs, maintain crowd safety, prevent disruptions, secure entry points, monitor event floors, and support organisers to ensure a smooth, professional event environment."
                        },
                        {
                            question: "Why do corporate events need security?",
                            answer: "Corporate events require security to prevent disruptions, manage guests safely, protect VIPs, support emergency procedures, deter theft, and maintain a controlled, professional environment."
                        },
                        {
                            question: "Do you provide security for galas, conferences & award nights?",
                            answer: "Yes, Metro corporate security guards provide security for galas, award nights, conferences, seminars, and crowd control officers for all corporate events."
                        }
                    ]}
                />
            </Layout>
        </>)
}