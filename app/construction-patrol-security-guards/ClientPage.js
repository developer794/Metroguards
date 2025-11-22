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

export default function ConstructionPatrolSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONSTRUCTION PATROL SECURITY GUARDS "
                mainTitle="Construction Patrol Security Guards in Melbourne "
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Construction%20Site%20Security%20Guard/5B83C27B-9BC1-4C81-9191-1A25F2C536FA_1_105_c.webp"
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
                                            24/7 Construction Patrol Security 
                                            <span style={{color: '#fdc51a'}}>Melbourne Near Me</span>
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
                                            Metro Guards delivers professional construction patrol security guards Melbourne who safeguard building sites from theft, trespassing, vandalism, and after-hours risks. Our patrol units conduct systematic checks across perimeters, materials, access points, equipment zones, storage containers, and hazardous areas, ensuring your project is protected day and night.
                                            Whether your site is in Melbourne CBD, Southbank, Richmond, Dandenong, Tullamarine, Derrimut, Epping, Footscray, or Clyde North, our construction site patrol guards Melbourne provide mobile and on-foot coverage that strengthens site security and reduces costly delays.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Construction%20Site%20Security%20Guard/51B540B4-F17C-4C76-8E82-D53AA10F6AF0_1_105_c.webp" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '600px',
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Construction%20Site%20Security%20Guard/3B6275D1-BFFB-422B-B84D-380C35BAFBED_1_105_c.webp"
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
                                                Why Melbourne Construction Sites Need Patrol Security
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1rem",
                                                fontWeight: "600"
                                            }}>
                                                Construction sites attract high-risk activity, especially after hours. Metro Guards provides patrols that prevent:
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
                                                    <span>Construction theft patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Equipment theft prevention patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Trespassing construction patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Vandalism prevention construction patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>After-hours break-in construction patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Unauthorised entry construction patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Vacant site break-in patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>High-value equipment patrol Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Dangerous site patrol Melbourne</span>
                                                </li>
                                            </ul>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                marginBottom: '0'
                                            }}>
                                                Mobile patrols ensure your project stays safe, compliant, and operational, even when workers are off-site.
                                            </p>
                                            
                                            
                                        </div>

                                      

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/*=====  Section 2 =====*/}
                    <div className="services-section-2 " style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative ">
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Construction%20Site%20Security%20Guard/6CBFDC64-548E-4EEB-BA9A-33CFCE62DC01_1_105_c.webp" 
                                                alt="Professional Building Security Guards" 
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

                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            
                                            {/* Adaptability Section - Paragraph Style */}
                                        <div className="human-element-section section-header " style={{
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
                                                Construction Site Patrol Guards Melbourne | What We Check
                                                </h2>
                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '1rem',
                                                    fontWeight: '600'
                                                }}>
                                                    Our patrol officers perform thorough checks tailored to construction risks, including:
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
                                                        <span>Construction site perimeter inspection</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Construction equipment monitoring patrol</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Construction entry and exit point patrol</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Hazard detection construction patrol</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Trespassing prevention construction patrol</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Unauthorised access construction patrol</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Construction materials security patrol</span>
                                                    </li>
                                                </ul>

                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '0'
                                                }}>
                                                    We identify issues early, reduce downtime, and keep your project secure.
                                                </p>
                                                
                                                
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== The Advantage of Being First Section =====*/}
                    <div className="advantage-section section-padding" style={{
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
                            <div className="row align-items-center g-5">
                                {/* Left Column - Content */}
                                <div className="col-lg-6">
                                    <div className="section-header">
                                    <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '25px'
                                        }}>
                                        <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(90deg, #fdc51a, #ffdb5c)',
                                                borderRadius: '2px'
                                        }}></div>
                                            <span className="badge px-3 py-2" style={{
                                                backgroundColor: '#fdc51a',
                                                color: '#1e2247',
                                                fontWeight: '700',
                                                fontSize: '0.8rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                borderRadius: '20px'
                                            }}>
                                                Industry First
                                        </span>
                                    </div>

                                    <h2 style={{
                                        color: '#1e2247',
                                        fontSize: '3rem',
                                        fontWeight: '800',
                                        marginBottom: '30px',
                                        lineHeight: '1.2'
                                    }}>
                                            Mobile Construction Patrol Services <span style={{color: '#fdc51a'}}>Melbourne</span>
                                    </h2>

                                    <p style={{
                                        color: '#6c757d',
                                            fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                            marginBottom: '1rem',
                                            fontWeight: '600'
                                        }}>
                                            Metro Guards provides flexible construction site mobile patrol Melbourne options suitable for all project sizes:
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
                                                <span>Drive-by mobile patrols</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>On-foot perimeter patrols</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Randomised patrol schedules</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>After-hours construction night patrol security Melbourne</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Lock-up checks & open-up assistance</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Alarm response for activated construction systems</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Rapid emergency attendance</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Weekend and holiday coverage</span>
                                            </li>
                                        </ul>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            marginBottom: '0'
                                        }}>
                                            Perfect for high-risk builds, multi-stage construction zones, and remote industrial developments.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column - Image */}
                                <div className="col-lg-6">
                                    <div className="image-container position-relative">
                                    <div style={{
                                            borderRadius: '25px',
                                            overflow: 'hidden',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                            transform: 'perspective(1000px) rotateY(5deg)',
                                            transition: 'all 0.4s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) scale(1)';
                                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                                        }}>
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Construction%20Site%20Security%20Guard/5F8E2353-9B55-423E-9079-9D679E1CAC1E_1_105_c.webp"
                                                alt="Construction Patrol Security" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '900px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                                left: 0,
                                            right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, transparent 50%, rgba(30, 34, 71, 0.1) 100%)'
                                            }}></div>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '100px',
                                            height: '100px',
                                            background: 'rgba(253, 197, 26, 0.2)',
                                            borderRadius: '50%',
                                            zIndex: -1
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-30px',
                                            left: '-30px',
                                            width: '120px',
                                            height: '120px',
                                            background: 'rgba(30, 34, 71, 0.1)',
                                            borderRadius: '50%',
                                            zIndex: -1
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Duties Section =====*/}
                    <div className="duties-section section-padding" style={{
                        background: '#ffffff',
                        position: 'relative'
                    }}>
                        <div className="container">
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
                                            <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(90deg, #1e2247, #2c3e50)',
                                                borderRadius: '2px'
                                            }}></div>
                                            <span className="badge px-4 py-2" style={{
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                color: '#fdc51a',
                                                fontWeight: 700,
                                                fontSize: '0.85rem',
                                                borderRadius: '30px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                <Shield size={16} style={{display: 'inline', marginRight: '8px'}} />
                                                Core Responsibilities
                                            </span>
                                            <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(90deg, #2c3e50, #1e2247)',
                                                borderRadius: '2px'
                                            }}></div>
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            You Get Melbourne’s Most Trusted Construction <span style={{color: '#fdc51a'}}>Patrol Protection</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            maxWidth: '800px',
                                            margin: '0 auto'
                                        }}>
                                            Our construction patrol guards perform comprehensive security duties designed to protect every aspect of your construction site.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                            <div className="row g-4">
                                {[
                                    {
                                        icon: <Target size={32} />,
                                        title: 'Site Patrols',
                                        description: 'Conduct internal and external patrols of active and inactive zones.'
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: 'Infrastructure Inspection',
                                        description: 'Inspect fencing, gates, lighting, and storage compounds.'
                                    },
                                    {
                                        icon: <Wrench size={32} />,
                                        title: 'Access Control',
                                        description: 'Check and record vehicle access points and deliveries.'
                                    },
                                    {
                                        icon: <Lock size={32} />,
                                        title: 'Equipment Monitoring',
                                        description: 'Monitor and document equipment left on-site after hours.'
                                    },
                                    {
                                        icon: <Bell size={32} />,
                                        title: 'Alarm Response',
                                        description: 'Respond to alarms and coordinate with emergency services when required.'
                                    },
                                    {
                                        icon: <AlertTriangle size={32} />,
                                        title: 'Safety Compliance',
                                        description: 'Verify safety compliance and report unsafe practices observed during patrol.'
                                    },
                                    {
                                        icon: <Clock size={32} />,
                                        title: 'Real-Time Updates',
                                        description: 'Provide real-time updates to project supervisors.'
                                    }
                                ].map((duty, index) => (
                                    <div key={index} className="col-lg-4">
                                    <div style={{
                                            background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
                                        borderRadius: '20px',
                                            padding: '35px',
                                        height: '100%',
                                            border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = index % 2 === 0 
                                                ? '0 20px 40px rgba(253, 197, 26, 0.2)'
                                                : '0 20px 40px rgba(30, 34, 71, 0.15)';
                                            e.currentTarget.style.borderColor = index % 2 === 0 ? '#fdc51a' : '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.borderColor = 'transparent';
                                    }}>
                                        {/* Corner Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '100px',
                                            height: '100px',
                                                background: index % 2 === 0 
                                                    ? 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)'
                                                    : 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                                            borderBottomLeftRadius: '100%'
                                        }}></div>

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
                                                marginBottom: '20px',
                                                boxShadow: index % 2 === 0 
                                                    ? '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    : '0 10px 25px rgba(30, 34, 71, 0.3)',
                                                color: index % 2 === 0 ? '#1e2247' : '#fdc51a'
                                            }}>
                                                {duty.icon}
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                                fontSize: '1.5rem',
                                            fontWeight: '700',
                                                marginBottom: '12px'
                                        }}>
                                                {duty.title}
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                                fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                                {duty.description}
                                        </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                                    </div>
                                </div>

                    {/*===== Designed for Melbourne Section =====*/}
                    <div className="melbourne-section section-padding" style={{
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
                            <div className="row align-items-center g-5">
                                {/* Left Column - Image */}
                                <div className="col-lg-6">
                                    <div className="image-container position-relative">
                                        <div style={{
                                            borderRadius: '25px',
                                            overflow: 'hidden',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                                        }}>
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Construction%20Site%20Security%20Guard/5F8E2353-9B55-423E-9079-9D679E1CAC1E_1_105_c.webp" 
                                                alt="Melbourne Construction Security" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '1050px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.2) 0%, transparent 50%, rgba(253, 197, 26, 0.2) 100%)'
                                            }}></div>
                                        </div>

                                        {/* Floating Stats Card */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-30px',
                                            right: '-30px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '20px',
                                            padding: '30px',
                                            boxShadow: '0 15px 40px rgba(253, 197, 26, 0.4)',
                                            minWidth: '200px'
                                        }}>
                                            <div style={{textAlign: 'center'}}>
                                                <div style={{
                                            color: '#1e2247',
                                                    fontSize: '2.5rem',
                                                    fontWeight: '800',
                                                    marginBottom: '5px'
                                                }}>
                                                    15+
                                                </div>
                                                <div style={{
                                                    color: '#1e2247',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}>
                                                    Years Experience
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>

                                {/* Right Column - Content */}
                                <div className="col-lg-6">
                                    <div className="section-header">
                                    <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '25px'
                                        }}>
                                            <MapPin size={24} style={{color: '#fdc51a'}} />
                                            <span className="badge px-3 py-2" style={{
                                                backgroundColor: 'rgba(253, 197, 26, 0.2)',
                                                color: '#fdc51a',
                                                fontWeight: '700',
                                                fontSize: '0.8rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                        borderRadius: '20px',
                                                border: '2px solid rgba(253, 197, 26, 0.3)'
                                            }}>
                                                Melbourne Focused
                                            </span>
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            Why Choose Metro Guards for Site Patrol <span style={{color: '#fdc51a'}}>Security Melbourne</span>
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '1rem',
                                            fontWeight: '600'
                                        }}>
                                            Metro Guards is trusted across Melbourne because:
                                        </p>

                                        <ul style={{
                                            listStyle: 'none',
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.8',
                                            paddingLeft: '0',
                                            marginBottom: '1.5rem'
                                        }}>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We operate construction patrol security Melbourne 24/7</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We reach your site fast during emergencies</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Patrols reduce equipment loss and project delays</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We secure property within 400m & 800m of high-risk work zones</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We deter offenders through visible patrol presence</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We offer random or scheduled patrol routes</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We're rated among the best construction patrol guards Melbourne</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>We support builders, developers & contractors across all metro regions</span>
                                            </li>
                                        </ul>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            marginBottom: '0'
                                        }}>
                                            Our patrols protect the progress and profitability of every construction stage.
                                        </p>

                                        {/* Service Areas */}
                                        <div className="row g-3 mb-4">
                                            {[
                                                { icon: <Home size={20} />, text: 'Residential Developments' },
                                                { icon: <Building size={20} />, text: 'Commercial Builds' },
                                                { icon: <Landmark size={20} />, text: 'Infrastructure Projects' }
                                            ].map((area, index) => (
                                                <div key={index} className="col-md-6">
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '12px',
                                                        padding: '15px 20px',
                                                        background: 'rgba(253, 197, 26, 0.15)',
                                                        borderRadius: '12px',
                                                        border: '1px solid rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <div style={{
                                                            color: '#fdc51a',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            {area.icon}
                                    </div>
                                                        <span style={{
                                                            color: '#ffffff',
                                                            fontSize: '1rem',
                                                            fontWeight: '600'
                                                        }}>
                                                            {area.text}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Testimonials />
                    {/*===== Compliance Section =====*/}
                    <div className="compliance-section section-padding" style={{
                        background: '#ffffff',
                        position: 'relative'
                    }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9))',
                                        borderRadius: '25px',
                                        padding: '60px 50px',
                                        border: '2px solid rgba(30, 34, 71, 0.1)',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
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
                                            backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)',
                                            borderRadius: '25px',
                            zIndex: 1
                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 2 }}>
                                            {/* Header */}
                                    <div className="text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                                    gap: '15px',
                                                    marginBottom: '30px'
                                                }}>
                                                    <Award size={32} style={{color: '#fdc51a'}} />
                                                    <span className="badge px-4 py-2" style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                color: '#fdc51a',
                                                        fontWeight: 700,
                                                        fontSize: '0.85rem',
                                                        borderRadius: '30px',
                                                textTransform: 'uppercase',
                                                        letterSpacing: '2px',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                        Certified & Compliant
                                            </span>
                                        </div>

                                        <h2 style={{
                                                    color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                                    marginBottom: '30px',
                                                    lineHeight: '1.2'
                                        }}>
                                                    Technology Backing Every  <span style={{color: '#fdc51a'}}>Construction Patrol</span>
                                        </h2>
                                    </div>

                                            {/* Compliance Content */}
                                            <div className="row g-4 mb-4">
                                                <div className="col-lg-12">
                                                    <p style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.2rem',
                                                        lineHeight: '1.8',
                                                        textAlign: 'center',
                                                        marginBottom: '40px',
                                                        fontWeight: '600'
                                                    }}>
                                                        Metro Guards is <strong style={{color: '#fdc51a'}}>fully licensed under Victorian regulations</strong>, with comprehensive insurance coverage and strict adherence to OHS and WorkSafe standards.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Compliance Features */}
                                            <div className="row g-4 mb-4">
                                                <div className="col-md-6">
                                            <div style={{
                                                        background: '#ffffff',
                                                        borderRadius: '18px',
                                                        padding: '30px',
                                                height: '100%',
                                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(253, 197, 26, 0.2)';
                                                        e.currentTarget.style.borderColor = '#fdc51a';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                            marginBottom: '20px',
                                                    boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                            <Shield size={28} style={{color: '#1e2247'}} />
                                                </div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontSize: '1.3rem',
                                                            fontWeight: '700',
                                                            marginBottom: '12px'
                                                        }}>
                                                            Licensed & Insured
                                                        </h4>
                                                <p style={{
                                                            color: '#6c757d',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.7',
                                                    margin: 0
                                                }}>
                                                            Fully licensed under Victorian regulations with comprehensive insurance coverage.
                                                </p>
                                            </div>
                                        </div>

                                                <div className="col-md-6">
                                            <div style={{
                                                        background: '#ffffff',
                                                        borderRadius: '18px',
                                                        padding: '30px',
                                                height: '100%',
                                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(30, 34, 71, 0.15)';
                                                        e.currentTarget.style.borderColor = '#1e2247';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '12px',
                                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                            marginBottom: '20px',
                                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.3)'
                                                }}>
                                                            <UserCheck size={28} style={{color: '#fdc51a'}} />
                                                </div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontSize: '1.3rem',
                                                            fontWeight: '700',
                                                            marginBottom: '12px'
                                                        }}>
                                                            Trained Personnel
                                                        </h4>
                                                <p style={{
                                                            color: '#6c757d',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.7',
                                                            margin: 0
                                                        }}>
                                                            All personnel undergo background checks and construction-specific risk management training.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                            {/* Closing Statement */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                borderRadius: '18px',
                                                padding: '35px',
                                                textAlign: 'center',
                                                border: '2px solid rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <p style={{
                                                    color: '#ffffff',
                                                    fontSize: '1.2rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    fontWeight: '600'
                                                }}>
                                                    Every report and incident record is archived for client access, ensuring <span style={{color: '#fdc51a'}}>full transparency and audit readiness</span>.
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
                                                Construction Patrol Security Melbourne  <span style={{color: '#fdc51a'}}>Builders Depend On</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                Metro Guards ensures your site remains protected, your equipment secure and your project timeline uninterrupted. Our patrols are precise, consistent and engineered for high-risk construction environments.
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
                                                    Metro Guards – <span style={{color: '#ffffff'}}>Melbourne's first dedicated Construction Patrol Security service, protecting your project from foundation to completion.</span>
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
                            question: "What do construction patrol security guards do in Melbourne?",
                            answer: "They protect building sites by performing perimeter checks, monitoring equipment, preventing trespassing, deterring theft, and documenting hazards. Metro Guards' construction patrol officers secure the site after hours and maintain safety throughout all construction phases."
                        },
                        {
                            question: "What are the duties of construction patrol officers in Melbourne?",
                            answer: "Their duties include monitoring access points, performing mobile and on-foot patrols, checking materials and machinery, inspecting for hazards, responding to alarms, and reporting security breaches. Metro Guards ensures structured, high-visibility patrols across all construction environments."
                        },
                        {
                            question: "What are the benefits of construction patrol security in Melbourne?",
                            answer: "Construction patrols reduce theft, vandalism, unauthorised entry, and after-hours incidents. They protect tools, equipment, materials, and site integrity. Metro Guards helps builders avoid costly delays and maintain compliance."
                        },
                        {
                            question: "Why do construction sites need patrol security in Melbourne?",
                            answer: "They need patrol security to prevent equipment loss, trespassing, break-ins, vandalism, and safety hazards that commonly target unsecured sites. Metro Guards' patrol units operate 24/7 to safeguard active and vacant sites across Melbourne."
                        },
                        {
                            question: "How do I hire construction patrol security guards in Melbourne?",
                            answer: "Simply contact Metro Guards for a site assessment. We provide construction patrol security guards Melbourne for single sites, multi-level builds, and long-term developments."
                        },
                        {
                            question: "How does construction patrol security prevent theft in Melbourne?",
                            answer: "Through visible presence, randomised patrol patterns, equipment checks, access point monitoring, and rapid response to suspicious activity. Metro Guards significantly reduces theft on high-value building sites."
                        }
                    ]}
                />
            </Layout>
            </> ) }