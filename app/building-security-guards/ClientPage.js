'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';
import Testimonials from "@/components/Testimonials";

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

    const buildingSecurityFaqs = [
        {
            question: "What does a building security guard do?",
            answer: "A building security guard is responsible for protecting the premises, people, and property of a specific building, whether it's residential, commercial, or government. Their daily duties include monitoring CCTV cameras, controlling access points, patrolling the premises, and ensuring the overall safety of occupants and visitors."
        },
        {
            question: "Do you provide apartment building security guards in Melbourne?",
            answer: "Yes. Metro Guards offers licensed apartment building security guards across Melbourne and nearby suburbs. Our guards are trained to manage residential buildings, handle access control, assist residents, and maintain 24/7 surveillance to keep your apartment community secure."
        },
        {
            question: "What's the difference between residential and office building security guards?",
            answer: "Residential building security guards focus on protecting residents, monitoring guests, and ensuring safety in shared spaces such as parking lots or lobbies. Office building security guards, on the other hand, concentrate on employee safety, visitor management, and safeguarding business assets during and after working hours."
        },
        {
            question: "How do building security guards respond to emergencies?",
            answer: "All Metro Guards building security personnel are trained in emergency response, including fire safety, first aid, and evacuation procedures. In case of any incident, they take immediate action to protect people and property while coordinating with emergency services."
        },
        {
            question: "Are your building security guards available for night shifts?",
            answer: "Yes. We offer 24/7 protection, including overnight security. Our night building security guards remain alert throughout the night, ensuring continuous monitoring, physical patrols, and quick response in case of any suspicious activity."
        },
        {
            question: "How can I hire building security guards in Melbourne?",
            answer: "You can contact Metro Guards directly through our website or call our team for a free consultation. We'll assess your building's security requirements, recommend the right number of guards, and deploy trained professionals promptly."
        }
    ];

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
                mainTitle="Building Security Guards Melbourne  | On-Site Security Services"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Building%20Security%20Guard/58108D6B-9846-43C4-89E9-EF7DFEBAE8E6_1_105_c.webp"
                
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row align-items-center">
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
                                                fontSize: '3rem',
                                                textAlign: 'left'
                                            }}
                                        >
                                            Building Site Security, <br />
                                            <span style={{color: '#fdc51a'}}>You Can Trust</span>
                                        </h2>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem', 
                                                lineHeight: '1.6',
                                                maxWidth: '500px',
                                                textAlign: 'left'
                                            }}
                                        >
                                            Metro Guards provides professional, fully licensed building security guards trained to protect corporate buildings, commercial sites, apartment buildings, and private facilities across Melbourne.
                                            <br /><br />Our officers don't simply guard the site, they manage access control, safeguard high-value areas, monitor building site security cameras, and maintain strict physical security protocols. Every checkpoint, every patrol, every interaction is verified in real time, giving you confidence that your property is protected exactly the way it should be.
                                            <br /><br />
                                            We specialise in commercial building security guards, office building security guard services, and security guard apartment building operations, ensuring your entire site, from lobbies to rooftops, is guarded with precision and professionalism.
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
                                                    flex: '1',
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
                                                    flex: '1',
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
                                                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Building%20Security%20Guard/B6B4C4AC-09D3-48A8-87B6-8844B434A753_1_105_c.webp" 
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
                    <div className="services-section " style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '10px'
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Building%20Security%20Guard/4E82685C-142E-406D-97AE-28BF37C77A2D_1_105_c.webp" 
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
                                               Chosen by Strata Committees
                                               <span style={{ color: "#fdc51a" }}>Across Melbourne</span>
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                               
                                            }}>
                                                With real-time reporting, GPS-verified patrols, and 24/7 oversight from our Melbourne operations centre, you always have full visibility over your site's protection.
                                            </p>

                                            <div style={{ 
                                                background: "linear-gradient(135deg, rgba(253, 197, 26, 0.05) 0%, rgba(253, 197, 26, 0.02) 100%)",
                                                border: "2px solid rgba(253, 197, 26, 0.2)",
                                                borderRadius: "15px",
                                                padding: "30px",
                                                
                                            }}>
                                                <h4 style={{ 
                                                    color: "#1e2247", 
                                                    fontSize: "1.4rem",
                                                    fontWeight: "700",
                                                    marginBottom: "20px"
                                                }}>
                                                    You'll know:
                                                </h4>
                                                
                                                <ul style={{ 
                                                    listStyle: "none", 
                                                    padding: 0, 
                                                    margin: 0 
                                                }}>
                                                    <li style={{ 
                                                        display: "flex", 
                                                        alignItems: "flex-start", 
                                                        marginBottom: "15px",
                                                        fontSize: "1.1rem"
                                                    }}>
                                                        <span style={{ 
                                                            color: "#fdc51a", 
                                                            fontSize: "1.3rem", 
                                                            marginRight: "15px",
                                                            fontWeight: "700"
                                                        }}>✔</span>
                                                        <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                            <strong style={{ color: "#1e2247" }}>Who accessed your building</strong>
                                                        </span>
                                                    </li>
                                                    <li style={{ 
                                                        display: "flex", 
                                                        alignItems: "flex-start", 
                                                        marginBottom: "15px",
                                                        fontSize: "1.1rem"
                                                    }}>
                                                        <span style={{ 
                                                            color: "#fdc51a", 
                                                            fontSize: "1.3rem", 
                                                            marginRight: "15px",
                                                            fontWeight: "700"
                                                        }}>✔</span>
                                                        <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                            <strong style={{ color: "#1e2247" }}>Which areas were patrolled</strong>
                                                        </span>
                                                    </li>
                                                    <li style={{ 
                                                        display: "flex", 
                                                        alignItems: "flex-start", 
                                                        marginBottom: "15px",
                                                        fontSize: "1.1rem"
                                                    }}>
                                                        <span style={{ 
                                                            color: "#fdc51a", 
                                                            fontSize: "1.3rem", 
                                                            marginRight: "15px",
                                                            fontWeight: "700"
                                                        }}>✔</span>
                                                        <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                            <strong style={{ color: "#1e2247" }}>What activity occurred</strong>
                                                        </span>
                                                    </li>
                                                    <li style={{ 
                                                        display: "flex", 
                                                        alignItems: "flex-start",
                                                        fontSize: "1.1rem"
                                                    }}>
                                                        <span style={{ 
                                                            color: "#fdc51a", 
                                                            fontSize: "1.3rem", 
                                                            marginRight: "15px",
                                                            fontWeight: "700"
                                                        }}>✔</span>
                                                        <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                            <strong style={{ color: "#1e2247" }}>When incidents were managed and resolved</strong>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                                No assumptions, only transparent, verifiable security for your building, your people, and your operations. Metro Guards removes guesswork and replaces it with certainty, compliance, and a level of building security guard performance Melbourne's corporate clients rely on.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Building%20Security%20Guard/0109FC45-FC6E-49C7-9ED7-4ED7824C6780_1_105_c.webp" 
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
                                                Why Professional Guards Are Essential 
                                                </h2>
                                                <div>
                                                    <p className="lead" style={{
                                                        color: '#6c757d',
                                                        fontSize: '1.2rem',
                                                        lineHeight: '1.8',
                                                        marginBottom: '20px'
                                                    }}>
                                                        Without trained building security guards, sites face:
                                                    </p>

                                                    <ul style={{ 
                                                        listStyle: "none", 
                                                        padding: 0, 
                                                        margin: '0 0 25px 0' 
                                                    }}>
                                                        <li style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start", 
                                                            marginBottom: "15px",
                                                            fontSize: "1.1rem"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                                <strong style={{ color: "#1e2247" }}>Unauthorised access</strong>
                                                            </span>
                                                        </li>
                                                        <li style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start", 
                                                            marginBottom: "15px",
                                                            fontSize: "1.1rem"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                                <strong style={{ color: "#1e2247" }}>After-hours vulnerabilities</strong>
                                                            </span>
                                                        </li>
                                                        <li style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start", 
                                                            marginBottom: "15px",
                                                            fontSize: "1.1rem"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                                <strong style={{ color: "#1e2247" }}>Increased liability & compliance gaps</strong>
                                                            </span>
                                                        </li>
                                                        <li style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start", 
                                                            marginBottom: "15px",
                                                            fontSize: "1.1rem"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                                <strong style={{ color: "#1e2247" }}>Theft of equipment or assets</strong>
                                                            </span>
                                                        </li>
                                                        <li style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start",
                                                            fontSize: "1.1rem"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ color: "#495057", lineHeight: "1.6" }}>
                                                                <strong style={{ color: "#1e2247" }}>Disturbances affecting staff or tenants</strong>
                                                            </span>
                                                        </li>
                                                    </ul>

                                                    <p className="lead" style={{
                                                        color: '#6c757d',
                                                        fontSize: '1.2rem',
                                                        lineHeight: '1.8',
                                                        margin: 0
                                                    }}>
                                                        That's why Metro Guards deploys trained building security officers and commercial building security guards who eliminate these weaknesses before they become incidents.
                                                    </p>
                                                </div>
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Building%20Security%20Guard/153B12DF-BD5C-4455-A81F-419584193843_1_105_c.webp" 
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
                                                Where Professionalism Meets <span style={{ color: "#fdc51a" }}> People</span>
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "rgba(255, 255, 255, 0.9)", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                               Our officers are not just guards, they’re trained building security officers who understand the complexities of modern facilities.
                                               </p>
                                        </div>
                                        
                                        {/* Professional Standards Grid */}
                                        <div className="standards-grid">
                                            <div className="row g-3">
                                                {[
                                                    {
                                                        icon: "fas fa-key",
                                                        title: "Corporate building access control",
                                                        
                                                    },
                                                    {
                                                        icon: "fas fa-building",
                                                        title: "Security guard apartment building operations",
                                                        
                                                    },
                                                    {
                                                        icon: "fas fa-exclamation-triangle",
                                                        title: "Incident response & emergency procedures",
                                                        
                                                    },
                                                    {
                                                        icon: "fas fa-clipboard-check",
                                                        title: "Loss prevention & site safety protocols",
                                                        
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
                                        <p style={{ 
                                                color: "rgba(255, 255, 255, 0.9)", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                               Many come from defence, emergency services, and advanced security operations backgrounds. They know what can go wrong in a building and how to prevent it.
                                               
                                            <br /><br />
                                            When we take responsibility for your site, we treat it like our own.
                                               </p>
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
                                            Melbourne’s Trusted Custom-Tailored <span style={{color: '#fdc51a'}}>Building Security Guards</span>
                                        </h2>
                                        
                                        <p style={{
                                            color: '#495057',
                                            fontSize: '1.4rem',
                                            lineHeight: '1.7',
                                            marginBottom: '60px',
                                            maxWidth: '1200px',
                                            margin: '0 auto 60px'
                                        }}>
                                            Our trained commercial & residential building security guards deliver customised protection for office buildings, construction sites, mixed-use developments, and apartment complexes. Whether your property is in Melbourne CBD, St Kilda Road, South Yarra, or Docklands, we adapt our security operations to match your building’s environment, visitor flow, and operational needs, ensuring total safety and zero disruption.
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
                                            Apartment Buildings & Mixed-Use Spaces
                                        </h3>

                                        <div className="features-list" style={{position: 'relative', zIndex: 2}}>
                                            {[
                                                "Access control for residents, visitors & contractors",
                                                "Lobby and concierge-style support",
                                                "Patrols covering lobbies, lifts, rooftops, common facilities, Pool area, Gym, basements & car parks",
                                                "Responding to noise, after-hours movement & safety concerns",
                                                "Monitoring common areas such as gyms, mailrooms & loading bays"
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
                                            Commercial Sites & Corporate Buildings
                                        </h3>

                                        <div className="features-list" style={{position: 'relative', zIndex: 2}}>
                                            {[
                                                "Restricted-zone access management",
                                                "CCTV and building site security camera monitoring",
                                                "Protection of sensitive areas and equipment",
                                                "Loading dock oversight & after-hours visitor control",
                                                "Secure lock-up and open-up procedures"
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
                                                <strong style={{color: '#fdc51a'}}>Serving Melbourne-Wide:                                                </strong> 
                                                <br />
                                                CBD | Southbank | Docklands | Carlton | Richmond | St Kilda | South Yarra | Dandenong | Sunshine | Geelong & Metropolitan Melbourne</p>
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
                                    Technologies That Power Your Security
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                    Modern buildings demand modern security solutions. We combine trained guards with advanced technology for complete visibility and accountability.

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
                                            GPS-verified check-ins prove actual patrol movement, not assumptions.
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
                                            Building site security cameras (CCTV)

                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1rem'}}>
                                            Every task, photo log, or incident update appears instantly in your client portal.
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
                                            Unannounced on-site visits ensure guards remain active, compliant, and consistent.

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
                                            Emergencies trigger automatic notifications for rapid managerial action.
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
                                        What Sets Our Building Security Guards   <span style={{ color: "#fdc51a" }}>Apart</span>
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
                                                description: "Your staff, tenants, and visitors feel secure with trained professionals on-site.",
                                                icon: "fas fa-shield-alt",
                                                color: "#fdc51a"
                                            },
                                            {
                                                title: "Lower risk",
                                                description: "Reduced theft, unauthorised access, and after-hours disturbances.",
                                                icon: "fas fa-arrow-down",
                                                color: "#1e2247"
                                            },
                                            {
                                                title: "Faster responses",
                                                description: "Guards respond immediately, no delays, no unanswered alarms.",
                                                icon: "fas fa-bolt",
                                                color: "#fdc51a"
                                            },
                                            {
                                                title: "Transparency",
                                                description: "You can view every patrol, every report, and every action in real time.",
                                                icon: "fas fa-eye",
                                                color: "#1e2247"
                                            },
                                            {
                                                title: "Better reputation",
                                                description: "Safe, well-managed sites attract better tenants and stronger compliance outcomes..",
                                                icon: "fas fa-star",
                                                color: "#fdc51a"
                                            },
                                            
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
                                                Excellence Defined: The  <span style={{ color: "#fdc51a" }}>Metro Guards Standard</span>
                                    </h2>
                                            
                                            <p style={{ 
                                                color: "rgba(255, 255, 255, 0.9)", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px",
                                                maxWidth: "900px",
                                                margin: "0 auto 30px"
                                            }}>
                                                WMetro Guards operates under strict ISO-certified systems, fully licensed and insuranced, and nationally recognised ASIAL and CM3 approvals. These accreditations matter, especially for corporate buildings, commercial facilities, and high-risk building sites that demand verified compliance at every level.
                                                </p>
                                            
                                            <p style={{ 
                                                color: "rgba(255, 255, 255, 0.8)", 
                                                fontSize: "1.1rem",
                                                lineHeight: "1.7",
                                                fontStyle: "italic",
                                                maxWidth: "800px",
                                                margin: "0 auto"
                                            }}>
                                               Shift after shift. Day after day. That’s the Metro Guards standard.
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
                                            Your Partner in Compliance <br/>
                                            <span style={{ 
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}>
                                               , Licensing, and Governance
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
                                                Our guards are trained to support all key compliance areas required across commercial buildings, corporate offices, apartment complexes, and building sites. We assist with:
                                                </p>
                                            
                                            <div className="row" style={{ 
                                                maxWidth: "900px",
                                                margin: "0 auto"
                                            }}>
                                                <div className="col-md-6">
                                                    {[
                                                        "OH&S / WorkSafe requirements",
                                                        "Access control protocols",
                                                        "Emergency management"
                                                    ].map((item, index) => (
                                                        <div key={index} style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start", 
                                                            marginBottom: "15px"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ 
                                                                color: "#1e2247", 
                                                                fontSize: "1.1rem",
                                                                lineHeight: "1.6",
                                                                fontWeight: "600"
                                                            }}>
                                                                {item}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="col-md-6">
                                                    {[
                                                        "Visitor management",
                                                        "Incident reporting compliance"
                                                    ].map((item, index) => (
                                                        <div key={index} style={{ 
                                                            display: "flex", 
                                                            alignItems: "flex-start", 
                                                            marginBottom: "15px"
                                                        }}>
                                                            <span style={{ 
                                                                color: "#fdc51a", 
                                                                fontSize: "1.3rem", 
                                                                marginRight: "15px",
                                                                fontWeight: "700"
                                                            }}>✔</span>
                                                            <span style={{ 
                                                                color: "#1e2247", 
                                                                fontSize: "1.1rem",
                                                                lineHeight: "1.6",
                                                                fontWeight: "600"
                                                            }}>
                                                                {item}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
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
                                                   Peace of Mind, Even When You’re Off the Clock
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
                    
                <Testimonials />
                <FAQSectionDynamic 
                    faqs={buildingSecurityFaqs}
                    title="Frequently Asked Questions"
                    subtitle="FAQs"
                />
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }