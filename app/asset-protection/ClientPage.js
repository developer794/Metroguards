'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function AssetSecurityPage() {
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
                mainTitle="ASSET PROTECTION SECURITY GUARDS IN MELBOURNE " 
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Asset%20Protection/3EC7BE92-76FD-4F5A-849D-C8874BF17CCE_1_105_c.webp"
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
                                            Securing Assets with Measured  <br />
                                            <span style={{color: '#fdc51a'}}>Precision</span>
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
                                            Asset protection is not an accessory service at Metro Guards, it is a core discipline developed through years of field-tested operations across Melbourne’s commercial, industrial, and logistics sectors.
                                            <br /><br />Our asset protection security services are designed to maintain the integrity of what you own, buildings, stock, equipment, data, or confidential material, through structured guard deployment, live monitoring, and verified reporting. Every action is procedural. Every patrol has a purpose.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Asset%20Protection/7E906AD3-E59A-4B0D-AB5A-9FA58736A309_1_105_c.webp"
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Asset%20Protection/7E68B990-A328-4FF2-B123-A332787E94A2_1_105_c%20(1).webp"
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
                                                Purpose of Asset Protection
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                               
                                            }}>
                                                Every site contains assets that hold operational or financial weight. When those assets are compromised, disruption follows. Metro Guards’ asset protection security guards are trained to prevent loss through layered deterrence, physical presence, and data-backed supervision.
                                                <br /><br />The process begins with assessment. We study how assets move, where they are stored, and who interacts with them. We then deploy guards and systems that reduce exposure, enforce access control, and monitor every zone with recorded accountability.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Asset%20Protection/5FF0A9F2-0B06-4543-9AC1-2D57F158C07A_1_105_c.webp"
                                                alt="Professional Asset Protection Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '550px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Guard Proficiency Section */}
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
                                                Guard <span style={{color: '#fdc51a'}}>Proficiency</span>
                                                </h2>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '20px'
                                                }}>
                                                    Every guard assigned to asset protection is <strong style={{color: '#1e2247'}}>licensed, background-checked, and briefed specifically for the site</strong>. Their training covers access control systems, incident containment, risk documentation, and emergency coordination.
                                                </p>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '20px'
                                                }}>
                                                    Our guards are not general observers; they are <strong style={{color: '#fdc51a'}}>operational custodians responsible for preserving the physical and reputational security</strong> of the client.
                                                </p>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Random audits confirm adherence to post instructions and incident management protocols.
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
                                                    DIVERSE APPLICATIONS
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Operational <span style={{color: '#fdc51a'}}>Coverage</span>
                                            </h2>
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px'
                                            }}>
                                                Our asset protection security services operate across a wide range of Melbourne industries:
                                            </p>
                                        </div>
                                        
                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-building",
                                                    title: "Corporate Facilities",
                                                    details: "Control of entry points, escort of sensitive materials, and supervision of after-hours access."
                                                },
                                                {
                                                    icon: "fas fa-shopping-cart",
                                                    title: "Retail and Distribution",
                                                    details: "Prevention of stock loss through constant monitoring and documented patrols."
                                                },
                                                {
                                                    icon: "fas fa-hard-hat",
                                                    title: "Construction and Industrial Sites",
                                                    details: "Perimeter control, machinery protection, and verification of contractor access."
                                                },
                                                {
                                                    icon: "fas fa-heartbeat",
                                                    title: "Healthcare and Research",
                                                    details: "Safeguarding equipment, controlled substances, and information-sensitive areas."
                                                },
                                                {
                                                    icon: "fas fa-warehouse",
                                                    title: "Logistics and Warehousing",
                                                    details: "Protection of cargo integrity, movement validation, and internal compliance checks."
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

                                        {/* Closing Statement */}
                                        <div style={{
                                            marginTop: '30px',
                                            padding: '25px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <p style={{
                                                color: '#1e2247',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.7',
                                                margin: 0,
                                                fontWeight: '600',
                                                fontStyle: 'italic'
                                            }}>
                                                Each environment is distinct. The deployment model <span style={{color: '#fdc51a'}}>adapts to its risk profile, not to a checklist</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Structure of Deployment Section =====*/}
                    <div className="deployment-section section-padding" style={{
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
                                                <Users size={16} style={{display: 'inline', marginRight: '8px'}} />
                                                Operational Framework
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
                                            Structure of <span style={{color: '#fdc51a'}}>Deployment</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            maxWidth: '800px',
                                            margin: '0 auto'
                                        }}>
                                            A Metro Guards asset protection security guard operates under a defined command structure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        icon: <Shield size={32} />,
                                        title: 'Static Posts',
                                        description: 'To provide controlled oversight of entry and asset zones.'
                                    },
                                    {
                                        icon: <Target size={32} />,
                                        title: 'Mobile Patrols',
                                        description: 'To maintain movement visibility across critical sectors.'
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: 'Supervisor Inspections',
                                        description: 'To validate that patrols occur as scheduled and meet compliance standards.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="col-lg-4">
                                        <div style={{
                                            background: '#ffffff',
                                            borderRadius: '20px',
                                            padding: '40px',
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
                                                marginBottom: '25px',
                                                boxShadow: index % 2 === 0 
                                                    ? '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    : '0 10px 25px rgba(30, 34, 71, 0.3)',
                                                color: index % 2 === 0 ? '#1e2247' : '#fdc51a'
                                            }}>
                                                {item.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#1e2247',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '15px'
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

                            {/* Transparency Statement */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: '#ffffff',
                                            fontSize: '1.25rem',
                                            lineHeight: '1.8',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            All activities are <strong style={{color: '#fdc51a'}}>digitally logged</strong>. Every scan, photo, and report is timestamped and visible through our client portal. Transparency is a <span style={{color: '#fdc51a'}}>system requirement, not a feature</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Technology Integration Section =====*/}
                    <div className="technology-section section-padding" style={{
                        background: '#ffffff',
                        position: 'relative'
                    }}>
                        <div className="container">
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
                                            <Camera size={24} style={{color: '#fdc51a'}} />
                                            <span className="badge px-3 py-2" style={{
                                                backgroundColor: '#fdc51a',
                                                color: '#1e2247',
                                                fontWeight: '700',
                                                fontSize: '0.8rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                borderRadius: '20px'
                                            }}>
                                                Advanced Systems
                                            </span>
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            Technology <span style={{color: '#fdc51a'}}>Integration</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '25px'
                                        }}>
                                            Effective asset protection is built on <strong style={{color: '#1e2247'}}>verification</strong>. Our control system integrates GPS-tracked patrol validation, live incident reporting, and instant escalation channels for supervisor response.
                                        </p>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '30px'
                                        }}>
                                            This network allows managers to <strong style={{color: '#fdc51a'}}>review patrols in real time</strong>, access image records, and confirm compliance instantly. When events occur, the reporting line is immediate, from guard to control centre to client.
                                        </p>

                                        {/* Feature Points */}
                                        <div className="features-list">
                                            {[
                                                'No delays',
                                                'No assumptions',
                                                'Complete visibility',
                                                'Instant escalation'
                                            ].map((feature, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '15px',
                                                    marginBottom: '15px',
                                                    padding: '15px 20px',
                                                    background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.08), rgba(255, 255, 255, 0.9))',
                                                    borderRadius: '12px',
                                                    border: '2px solid rgba(253, 197, 26, 0.15)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateX(8px)';
                                                    e.currentTarget.style.borderColor = '#fdc51a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateX(0)';
                                                    e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.15)';
                                                }}>
                                                    <div style={{
                                                        width: '28px',
                                                        height: '28px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <CheckCircle size={16} style={{color: '#1e2247'}} />
                                                    </div>
                                                    <span style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.05rem',
                                                        fontWeight: '600'
                                                    }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Adhoc%20Security%20Services/03BC3547-5A49-4C7C-83F5-9771C8C59059_1_105_c.webp" 
                                                alt="Technology Integration" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '550px',
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
                                    </div>
                                </div>
                            </div>
                        </div>
                                        </div>

                    {/*===== Risk Management Section =====*/}
                    <div className="risk-management-section section-padding" style={{
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
                                <div className="col-lg-10">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Award size={28} style={{color: '#fdc51a'}} />
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
                                                Certified Operations
                                            </span>
                                    </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '30px',
                                            lineHeight: '1.2'
                                        }}>
                                            Risk Management and <span style={{color: '#fdc51a'}}>Compliance</span>
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            marginBottom: '40px',
                                            maxWidth: '800px',
                                            margin: '0 auto 40px'
                                        }}>
                                            Asset protection also means <strong style={{color: '#fdc51a'}}>regulatory compliance</strong>. Metro Guards operates under ISO, CM3, and ASIAL certification, ensuring every protection plan aligns with occupational, environmental, and privacy standards.
                                        </p>
                                </div>

                                    {/* Compliance Grid */}
                                    <div className="row g-4 mb-4">
                                        {[
                                            {
                                                icon: <Shield size={28} />,
                                                title: 'Confidentiality Management',
                                                description: 'Strict protocols for handling sensitive information'
                                            },
                                            {
                                                icon: <Lock size={28} />,
                                                title: 'Data Protection',
                                                description: 'Compliance with privacy standards and regulations'
                                            },
                                            {
                                                icon: <UserCheck size={28} />,
                                                title: 'Contractor Verification',
                                                description: 'Thorough background checks and clearances'
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="col-md-4">
                                                <div style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    borderRadius: '18px',
                                                    padding: '30px',
                                                    height: '100%',
                                                    border: '1px solid rgba(253, 197, 26, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                                    e.currentTarget.style.borderColor = '#fdc51a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
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
                                                        boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)',
                                                        color: '#1e2247'
                                                    }}>
                                                        {item.icon}
                            </div>
                                                    <h4 style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.2rem',
                                                        fontWeight: '700',
                                                        marginBottom: '12px'
                                                    }}>
                                                        {item.title}
                                                    </h4>
                                                    <p style={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.7',
                                                        margin: 0
                                                    }}>
                                                        {item.description}
                                                    </p>
                        </div>
                                            </div>
                                        ))}
                    </div>

                                    {/* Closing Statement */}
                                    <div style={{
                                        marginTop: '40px',
                                        padding: '35px',
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '18px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: '#ffffff',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            Our legal and procedural adherence ensures that each guard operates within <span style={{color: '#fdc51a'}}>legal and ethical boundaries</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Client Integration Process Section =====*/}
                    <div className="client-integration-section section-padding" style={{
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
                                                background: 'linear-gradient(90deg, #fdc51a, #ffdb5c)',
                                                borderRadius: '2px'
                                            }}></div>
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
                                                <Book size={16} style={{display: 'inline', marginRight: '8px'}} />
                                                Our Process
                                            </span>
                                            <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(90deg, #ffdb5c, #fdc51a)',
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
                                            Client Integration <span style={{color: '#fdc51a'}}>Process</span>
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.2rem',
                                            lineHeight: '1.8',
                                            maxWidth: '800px',
                                            margin: '0 auto 50px'
                                        }}>
                                            Each new engagement begins with a structured sequence:
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Process Steps */}
                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        number: '01',
                                        icon: <Search size={32} />,
                                        title: 'Site Analysis',
                                        description: 'Identification of asset zones, access vulnerabilities, and operational flow.'
                                    },
                                    {
                                        number: '02',
                                        icon: <Book size={32} />,
                                        title: 'Security Framework Design',
                                        description: 'Documentation of patrol routes, reporting frequency, and escalation hierarchy.'
                                    },
                                    {
                                        number: '03',
                                        icon: <Users size={32} />,
                                        title: 'Deployment',
                                        description: 'Assignment of trained guards equipped with site-specific protocols.'
                                    },
                                    {
                                        number: '04',
                                        icon: <Clock size={32} />,
                                        title: 'Continuous Review',
                                        description: 'Monthly reporting and performance assessment to maintain alignment with client objectives.'
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="col-lg-6">
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
                                            {/* Step Number Badge */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '20px',
                                                right: '20px',
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '12px',
                                                background: index % 2 === 0 
                                                    ? 'rgba(253, 197, 26, 0.1)'
                                                    : 'rgba(30, 34, 71, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.2rem',
                                                fontWeight: '800',
                                                color: index % 2 === 0 ? '#fdc51a' : '#1e2247'
                                            }}>
                                                {step.number}
                                            </div>

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
                                                {step.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#1e2247',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '15px'
                                            }}>
                                                {step.title}
                                            </h3>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.7',
                                                margin: 0
                                            }}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                    </div>

                            {/* Framework Statement */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                        <div style={{
                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))',
                                            borderRadius: '20px',
                                        padding: '40px',
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
                                            This framework ensures <span style={{color: '#fdc51a'}}>consistency, visibility, and measurable results</span>.
                                        </p>
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="why-choose-section section-padding" style={{
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
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        color: '#fdc51a',
                                                        fontWeight: 700,
                                                        fontSize: '0.85rem',
                                                        borderRadius: '30px',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '2px',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                Excellence in Protection
                                                    </span>
                                            <Star size={24} style={{color: '#fdc51a'}} />
                                                </div>

                                                <h2 style={{
                                                    color: '#1e2247',
                                                    fontSize: '3rem',
                                                    fontWeight: '800',
                                            marginBottom: '25px',
                                                    lineHeight: '1.2'
                                                }}>
                                            Why Our Clients Keep <span style={{color: '#fdc51a'}}>Choosing Metro Guards?</span>
                                                </h2>
                                            </div>
                                                </div>
                                            </div>

                            {/* Features Grid */}
                                            <div className="row g-4 mb-4">
                                {[
                                    {
                                        icon: <Award size={28} />,
                                        title: '15+ Years of Asset Protection Experience',
                                        description: 'Across Melbourne\'s private, industrial, and government sectors.'
                                    },
                                    {
                                        icon: <Shield size={28} />,
                                        title: 'Certified and Licensed',
                                        description: 'Under Victorian Security and Labour Hire regulation.'
                                    },
                                    {
                                        icon: <Eye size={28} />,
                                        title: 'Live Monitoring Systems',
                                        description: 'For constant situational awareness.'
                                    },
                                    {
                                        icon: <Zap size={28} />,
                                        title: 'Adaptive Coverage Models',
                                        description: 'That scale with operational demand.'
                                    },
                                    {
                                        icon: <MapPin size={28} />,
                                        title: 'Local Command Support',
                                        description: 'Providing direct response from Melbourne-based supervisors.'
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="col-lg-6">
                                                    <div style={{
                                                        background: '#ffffff',
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
                                                {feature.icon}
                                                        </div>

                                            <h3 style={{
                                                            color: '#1e2247',
                                                fontSize: '1.4rem',
                                                            fontWeight: '700',
                                                            marginBottom: '12px'
                                                        }}>
                                                {feature.title}
                                            </h3>

                                                        <p style={{
                                                            color: '#6c757d',
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
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                        borderRadius: '20px',
                                        padding: '50px 40px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
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
                                            borderRadius: '20px'
                                        }}></div>

                                                <p style={{
                                                    color: '#ffffff',
                                            fontSize: '1.3rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                            fontWeight: '600',
                                            position: 'relative',
                                            zIndex: 2
                                                }}>
                                            Our asset protection guards represent an <span style={{color: '#fdc51a'}}>established methodology</span>, tested, documented, and continually refined to meet <strong style={{color: '#fdc51a'}}>modern security expectations</strong>.
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
                                                Secure Your Assets with <span style={{color: '#fdc51a'}}>Metro Guards</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                Asset protection is not reactive work; it is a <strong style={{color: '#1e2247'}}>structured, continuous discipline</strong>. When you engage Metro Guards, you engage a system that protects what you've built with the same seriousness it was built.
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                Whether your assets are <strong style={{color: '#1e2247'}}>tangible, digital, or operational</strong>, our guards enforce one consistent standard: <strong style={{color: '#fdc51a'}}>accountability backed by proof</strong>.
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
                                                    Metro Guards – <span style={{color: '#ffffff'}}>Protecting Melbourne's assets with structured discipline, proven systems, and unwavering accountability.</span>
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