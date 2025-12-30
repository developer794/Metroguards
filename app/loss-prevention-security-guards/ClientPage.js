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

export default function LossPreventionSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="LOSS PREVENTION SECURITY GUARDS"
                mainTitle="Loss Prevention Security Guards in Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Loss%20Prevention%20Secuirty%20Guards/51BEE2F0-1C5C-4D14-BE17-7CA4C4DDC7C5_1_105_c.webp"

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
                                            Loss Prevention Security Guards
                                            <span style={{ color: '#fdc51a' }}>Service in Melbourne 24/7</span>
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
                                            Metro Guards provides trained loss prevention guards Melbourne retailers rely on to reduce theft, protect stock, and maintain safe trading environments. Our highly skilled loss prevention officers Melbourne specialise in preventing shoplifting, monitoring high-risk areas, and identifying suspicious behaviour before losses occur.
                                            From supermarkets and department stores to fashion retailers, shopping centres, and national retail chains, Metro Guards delivers loss prevention services in Melbourne designed to reduce shrinkage, protect staff, and secure assets. Retailers searching “who provides loss prevention security guards in Melbourne?” rely on Metro Guards for unmatched performance and professionalism.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Loss%20Prevention%20Secuirty%20Guards/7F646248-8CCC-4766-A826-6F8F450DF5AE_1_105_c.webp"
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
                                                    src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Loss%20Prevention%20Secuirty%20Guards/7FB1B452-3A31-4313-9AEF-1535B2F450C8_1_105_c.webp"
                                                    alt="Professional Building Security Guards"
                                                    className="img-fluid"
                                                    style={{
                                                        width: '100%',
                                                        height: '850px',
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
                                                Why Loss Prevention Guards Are Essential for Melbourne Retailers
                                            </h2>

                                            <p style={{
                                                color: "#6c757d",
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1.5rem"
                                            }}>
                                                Retail crime across Melbourne continues to rise, impacting profit margins, staff safety, and customer experience. Retailers need <strong style={{ color: '#1e2247' }}>LP security guards Melbourne</strong> who understand theft patterns, behavioural detection, and the fast-paced nature of modern retail environments.
                                            </p>

                                            <p style={{
                                                color: "#6c757d",
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1rem",
                                                fontWeight: "600"
                                            }}>
                                                Common challenges include:
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
                                                    <span>Shoplifting incidents (individual & organised)</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Concealment theft in high-risk aisles</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Refund fraud & ticket switching</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Aggressive or repeat offenders</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>After-hours break-ins or stockroom theft</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Crowded store blind spots</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Safety risks for staff confronting offenders</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Loss of high-value or easily concealed items</span>
                                                </li>
                                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Shrinkage from internal or customer theft</span>
                                                </li>
                                            </ul>

                                            <p style={{
                                                color: "#6c757d",
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8"
                                            }}>
                                                These issues demand <strong style={{ color: '#fdc51a' }}>retail loss prevention Melbourne</strong> specialists trained to protect stock discreetly, safely, and without interrupting business flow.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Loss%20Prevention%20Secuirty%20Guards/12FB20BE-08E2-483E-B3E9-F025668572B3_1_105_c.webp"
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

                                        {/* The Loss Section - Paragraph Style */}
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
                                                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                                    A Professional Security for <span style={{ color: '#fdc51a' }}>Melbourne’s Retail Sector</span>
                                                </h2>
                                                <p className="lead mb-3" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8'
                                                }}>
                                                    <strong style={{ color: '#fdc51a' }}>Metro Guards'</strong> <strong style={{ color: '#1e2247' }}>loss prevention officers Melbourne</strong> are trained to:
                                                </p>

                                                <ul style={{
                                                    listStyle: 'none',
                                                    color: '#6c757d',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    paddingLeft: '0',
                                                    marginBottom: '1rem'
                                                }}>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Identify suspicious behaviour before theft occurs</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Blend into the retail environment discreetly</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Communicate professionally with staff and customers</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Protect high-risk aisles & blind spots</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Support staff during difficult incidents</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>De-escalate conflicts safely</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Work alongside CCTV operators & managers</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Deliver detailed post-incident reporting</span>
                                                    </li>
                                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                                                        <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                        <span>Support bag checks & store policies</span>
                                                    </li>
                                                </ul>

                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    marginTop: '0.5rem'
                                                }}>
                                                    Whether you need <strong style={{ color: '#fdc51a' }}>high-risk store security Melbourne</strong> or discreet <strong style={{ color: '#fdc51a' }}>LP security guards Melbourne</strong> for sensitive areas, our team operates with confidence, awareness, and professionalism.
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
                                                    PRECISION PROTECTION
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                                Specialised Loss Prevention & <span style={{ color: '#fdc51a' }}>Retail Security Services</span>
                                            </h2>
                                            <p className="lead mb-4" style={{ color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                                Metro Guards offers a full range of loss prevention security Melbourne solutions tailored to retail environments, including:
                                            </p>
                                        </div>

                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-brain",
                                                    title: "Pattern Recognition",

                                                    details: "Detecting shifts in behaviour before they become theft."
                                                },
                                                {
                                                    icon: "fas fa-user-secret",
                                                    title: "Covert Intelligence",

                                                    details: "Plainclothes professionals blending into your retail floor."
                                                },
                                                {
                                                    icon: "fas fa-smile",
                                                    title: "Customer-First Security",

                                                    details: "Warmth first, watchfulness second, both essential."
                                                },
                                                {
                                                    icon: "fas fa-medkit",
                                                    title: "Emergency-Ready",

                                                    details: "Trained in first aid, fire response, and crisis control."
                                                },
                                                {
                                                    icon: "fas fa-clipboard-check",
                                                    title: "Active Reporting",

                                                    details: "Every action logged live; nothing slips between shifts."
                                                },
                                                {
                                                    icon: "fas fa-door-open",
                                                    title: "Common-Area Control",

                                                    details: "Entrances, changerooms, registers, storerooms, quietly secured."
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

                    {/*===== Real Cost Section =====*/}
                    <div className="real-cost-section section-padding" style={{
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
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            left: '5%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* First Content Block - The Real Cost */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '50px 45px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Top Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '150px',
                                            height: '150px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), transparent)',
                                            borderBottomRightRadius: '100%'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 2 }}>
                                            {/* Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '25px'
                                            }}>
                                                <span className="badge px-4 py-2" style={{
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    color: '#1e2247',
                                                    fontWeight: 700,
                                                    fontSize: '0.85rem',
                                                    borderRadius: '30px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px',
                                                    boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    <i className="fas fa-exclamation-triangle me-2"></i>
                                                    Critical Insight
                                                </span>
                                            </div>

                                            <h2 style={{
                                                color: '#1e2247',
                                                fontSize: '2.8rem',
                                                fontWeight: '800',
                                                marginBottom: '25px',
                                                lineHeight: '1.2'
                                            }}>
                                                The Real Cost of <span style={{ color: '#fdc51a' }}>Looking Away</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.9',
                                                margin: 0
                                            }}>
                                                A $20 theft ignored today becomes a $200 habit tomorrow. A quiet internal scheme turns into a cultural rot. And one viral clip of chaos? That's not just theft, that's brand erosion. Money can be replaced. Trust cannot. <strong style={{ color: '#1e2247' }}>Metro Guards doesn't just prevent loss, we preserve the reputation behind the glass.</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/*===== Accountability Section =====*/}
                    <div className="accountability-section section-padding" style={{
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
                            width: '100px',
                            height: '100px',
                            background: 'rgba(253, 197, 26, 0.08)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto text-center">
                                    <span className="badge px-4 py-2 mb-4" style={{
                                        background: "rgba(253, 197, 26, 0.2)",
                                        color: "#fdc51a",
                                        fontWeight: 700,
                                        fontSize: "0.85rem",
                                        borderRadius: "30px",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        border: "2px solid rgba(253, 197, 26, 0.3)"
                                    }}>
                                        <i className="fas fa-check-circle me-2"></i>
                                        Verified Systems
                                    </span>

                                    <h2 style={{
                                        color: '#ffffff',
                                        fontSize: '3rem',
                                        fontWeight: '800',
                                        marginBottom: '25px',
                                        lineHeight: '1.2'
                                    }}>
                                        Accountability & Security Technology <span style={{ color: '#fdc51a' }}>for Retail Protection</span>
                                    </h2>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        maxWidth: '850px',
                                        margin: '0 auto'
                                    }}>
                                        All Metro Guards loss prevention security guards Melbourne are supported by:</p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-5">
                                {/* Feature 1 */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.2)';
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
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-clock" style={{ color: '#1e2247', fontSize: '28px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Punctuality
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Zero tolerance for missed starts or early finishes.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 34, 71, 0.15)';
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
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-map-marker-alt" style={{ color: '#fdc51a', fontSize: '28px' }}></i>
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
                                            Movements recorded and reviewable.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.2)';
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
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-camera" style={{ color: '#1e2247', fontSize: '28px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Photo-Backed Reports
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Visual evidence with every log.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 34, 71, 0.15)';
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
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-user-check" style={{ color: '#fdc51a', fontSize: '28px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Supervisor Drop-Ins
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Random field audits to maintain peak performance.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 5 */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.2)';
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
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-certificate" style={{ color: '#1e2247', fontSize: '28px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ISO Certified
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Quality, OH&S, and Environmental Compliance.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 6 */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 34, 71, 0.15)';
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
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-award" style={{ color: '#fdc51a', fontSize: '28px' }}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ASIAL & CM3 Approved
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Compliance you can show your board or insurer.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Closing Statement */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            margin: 0,
                                            fontWeight: '500'
                                        }}>
                                            That's <strong style={{ color: '#fdc51a' }}>accountability redesigned</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Real Cost Section =====*/}
                    <div className="real-cost-section section-padding" style={{
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
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            left: '5%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>


                            {/* Second Content Block - Why Trust Metro Guards */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '50px 45px',
                                        border: '2px solid rgba(30, 34, 71, 0.3)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
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
                                            backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)',
                                            borderRadius: '25px'
                                        }}></div>

                                        {/* Bottom Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            width: '180px',
                                            height: '180px',
                                            background: 'linear-gradient(135deg, transparent, rgba(253, 197, 26, 0.12))',
                                            borderTopLeftRadius: '100%'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 2 }}>
                                            {/* Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '25px'
                                            }}>
                                                <span className="badge px-4 py-2" style={{
                                                    background: 'rgba(253, 197, 26, 0.2)',
                                                    color: '#fdc51a',
                                                    fontWeight: 700,
                                                    fontSize: '0.85rem',
                                                    borderRadius: '30px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px',
                                                    border: '2px solid rgba(253, 197, 26, 0.4)'
                                                }}>
                                                    <i className="fas fa-award me-2"></i>
                                                    15+ Years Experience
                                                </span>
                                            </div>

                                            <h2 style={{
                                                color: '#ffffff',
                                                fontSize: '2.8rem',
                                                fontWeight: '800',
                                                marginBottom: '25px',
                                                lineHeight: '1.2'
                                            }}>
                                                Why Melbourne’s Leading Retailers Choose  <span style={{ color: '#fdc51a' }}> Metro Guards</span>
                                            </h2>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.9',
                                                marginBottom: '1.5rem',
                                                margin: '0 auto 1.5rem'
                                            }}>
                                                From small boutique stores to national chains, retailers choose Metro Guards for our reputation, reliability, and results in <strong style={{ color: '#fdc51a' }}>store theft prevention Melbourne</strong>.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                marginBottom: '1rem'
                                            }}>
                                                We are trusted because:
                                            </p>

                                            <ul style={{
                                                listStyle: 'none',
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                paddingLeft: '0',
                                                marginBottom: '1.5rem',
                                                textAlign: 'left',
                                                maxWidth: '800px',
                                                margin: '0 auto 1.5rem'
                                            }}>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>Our LP officers are trained in modern theft-detection techniques</span>
                                                </li>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>We provide discreet, customer-friendly security</span>
                                                </li>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>We reduce shrinkage across multiple store formats</span>
                                                </li>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>We respond quickly to urgent LP staffing needs</span>
                                                </li>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>We protect stock, staff, and customers simultaneously</span>
                                                </li>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>We understand the unique risks of Melbourne retail locations</span>
                                                </li>
                                                <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                                                    <span>We offer loss prevention security guards Melbourne 24/7</span>
                                                </li>
                                            </ul>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                margin: '0 auto',
                                                fontStyle: 'italic',
                                                marginTop: '1rem'
                                            }}>
                                                Whether you're searching for "loss prevention guards Melbourne near me", "loss prevention security near me open now", or "best loss prevention security guards Melbourne", <strong style={{ color: '#fdc51a' }}>Metro Guards</strong> delivers unmatched performance.
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
                                                    <i className="fas fa-shield-alt me-2"></i>
                                                    Secure Your Brand
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
                                                Loss Prevention Security Guards Melbourne <span style={{ color: '#fdc51a' }}>Retailers Rely On</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                From shopping centres and flagship stores to supermarkets and high-value department stores, Metro Guards supports retail operations with proactive, effective loss prevention.
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
                                                        Get Your Free Quote Now
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
                                                    Metro Guards – <span style={{ color: '#ffffff' }}>Protecting those who heal, so they can focus on what matters most.</span>
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
                            question: "Who provides loss prevention security guards in Melbourne?",
                            answer: "Metro Guards provides trained loss prevention security guards in Melbourne, specialising in retail theft prevention, store protection, shrinkage reduction, and high-risk store surveillance for supermarkets, shopping centres, and department stores."
                        },
                        {
                            question: "How do I hire loss prevention guards in Melbourne?",
                            answer: "You can hire loss prevention guards by contacting Metro Guards for a tailored retail assessment. We supply LP officers trained in shoplifting prevention, store patrols, CCTV coordination, and asset protection."
                        },
                        {
                            question: "What do loss prevention officers do?",
                            answer: "Loss prevention officers monitor high-risk areas, identify suspicious behaviour, prevent shoplifting, secure stockrooms, support CCTV teams, and reduce shrinkage through active store surveillance and real-time intervention."
                        },
                        {
                            question: "Do you offer 24/7 loss prevention in Melbourne?",
                            answer: "Yes. We offer loss prevention security guards Melbourne 24/7, including day shifts, night shifts, weekends, and after-hours store protection."
                        },
                        {
                            question: "Do you provide LP guards for supermarkets and department stores?",
                            answer: "Absolutely. Metro guards supply supermarket loss prevention, department store loss prevention guards, and shopping centre loss prevention guards for all retail formats."
                        }
                    ]}
                />
            </Layout>
        </>)
}