'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function HospitalSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="HOSPITAL SECURITY GUARDS"
                mainTitle="HOSPITAL SECURITY GUARDS IN MELBOURNE "
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Hospital%20Secuirty%20Guards/C4414502-E0C7-4E1C-B431-0D27054173C2_1_105_c.webp"
                
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
                                            Every Second Inside a Hospital   <br />
                                            <span style={{color: '#fdc51a'}}>Holds a Life Waiting for Calm</span>
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
                                            Hospitals never rest. Corridors stay lit long after the world outside goes quiet. Machines beep through the night, footsteps echo between wards, and exhaustion wears the faces of those who refuse to stop caring. In places built to heal, tension often walks in unannounced. An aggressive visitor, a missing patient, a code call that changes everything.
                                            <br /><br />Metro Guards stands in that space, the line between care and crisis, providing dedicated hospital security guards and healthcare security services that keep every ward, staff member, and visitor safe so healing can continue uninterrupted.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Hospital%20Secuirty%20Guards/4F9FA8BC-5081-4EC6-8701-0B39FAA430E2_1_105_c.webp" 
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Hospital%20Secuirty%20Guards/A9D17577-BA14-4697-A4E6-F23EFF824D9A_1_105_c.webp" 
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
                                                The Reality Inside Hospitals
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                               
                                            }}>
                                                In healthcare, threats don’t always look like danger. Sometimes it’s the agitation of a frightened patient, the frustration of a family that’s waited too long, or the quiet theft of restricted medication. At any hour, a routine moment can turn volatile.
                                                <br /><br />That’s why hospital security isn’t a background service, it’s an essential part of the care system. The calm presence that restores order before fear spreads. The eyes that notice what stress blinds others to. The hands that act quickly, yet with restraint and respect.
                                                <br /><br />Every hospital carries a different rhythm. Emergency departments demand speed and control. Mental health units require patience and compassion. Aged care wings need gentleness above all else. Metro Guards trains every officer to understand these environments not as “sites,” but as living systems of trust, 
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Hospital%20Secuirty%20Guards/B6B4C4AC-09D3-48A8-87B6-8844B434A753_1_105_c.webp" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '600px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* The Human Element - Paragraph Style */}
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
                                                <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Security That Understands Humanity
                                                </h2>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.2rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Our guards work in places where life is fragile. They move quietly through corridors, protect privacy with discretion, and step in only when it truly matters. A mother walking alone to the car park after midnight. A nurse handling a difficult patient during a double shift. A newborn ward that must remain undisturbed. These are not “tasks.” They are moments of responsibility that demand awareness and heart. Every officer we assign carries both.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    OUR Services
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Dedicated Protection for the Heart of Care 
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7'}}>
                                            Metro Guards officers are more than uniformed responders, they are trained caretakers of calm. Each guard is hand-selected for their ability to stay composed under pressure and to communicate with empathy when emotions run high.

                                               </p>
                                            <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.6', fontWeight: '600'}}>
                                            Our hospital-ready team delivers:
                                            </p>
                                        </div>
                                        
                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-bell",
                                                    title: "Code-specific response readiness",
                                                    
                                                    details: "Trained for Code Black, Code Grey, Code Red, and evacuation procedures."
                                                },
                                                {
                                                    icon: "fas fa-user-friends",
                                                    title: "Patient and visitor assistance",
                                                    
                                                    details: "Guiding, escorting, and supporting without disrupting care."
                                                },
                                                {
                                                    icon: "fas fa-hand-paper",
                                                    title: "Aggression management",
                                                   
                                                    details: "Defusing conflict through de-escalation, not intimidation."
                                                },
                                                {
                                                    icon: "fas fa-shield-alt",
                                                    title: "Property and asset protection",
                                                    
                                                    details: "Preventing theft and maintaining order across wards, pharmacies, and car parks."
                                                },
                                                {
                                                    icon: "fas fa-eye",
                                                    title: "Continuous presence",
                                                    
                                                    details: "Punctual, alert, and fully accountable through digital tracking and live supervision."
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
                                        
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.6', marginTop: '20px'}}>
                                            <strong>Our guards don’t replace care staff; they reinforce them. Their duty is to preserve safety so doctors, nurses, and paramedics can do their work without distraction or fear.</strong>
                                        </p>
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
                                        Accountability That Lives Up to <span style={{color: '#fdc51a'}}>the Responsibility</span>
                                    </h2>
                                    
                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        maxWidth: '850px',
                                        margin: '0 auto'
                                    }}>
                                        In hospitals, words mean little without proof. Metro Guards operates with full transparency through verified systems that document every patrol, every report, every shift.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-5">
                                {/* Feature 1 */}
                                <div className="col-lg-6">
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
                                            <i className="fas fa-map-marker-alt" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            GPS-tracked patrols and time-stamped reports
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Keep management informed in real time.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="col-lg-6">
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
                                            <i className="fas fa-user-check" style={{color: '#fdc51a', fontSize: '28px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Unannounced supervisory checks
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Maintain consistency and discipline.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="col-lg-6">
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
                                            <i className="fas fa-certificate" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ISO-certified quality and OH&S compliance
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Demonstrate our commitment to safety, health, and reliability.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="col-lg-6">
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
                                            <i className="fas fa-award" style={{color: '#fdc51a', fontSize: '28px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ASIAL membership and CM3 prequalification
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Ensure our practices meet national standards for professional security conduct.
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
                                            This structure isn't for show — it's the backbone that allows hospital directors to trust that every guard on duty is performing to the highest professional standard, <strong style={{color: '#fdc51a'}}>every minute of their shift</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Hospitals Choose Metro Guards Section =====*/}
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
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
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
                                            <i className="fas fa-hospital me-2"></i>
                                            Trusted Partner
                                        </span>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #ffdb5c, #fdc51a)",
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
                                        Why Hospitals Across Melbourne <span style={{color: '#fdc51a'}}>Choose Metro Guards</span>
                                    </h2>
                                </div>
                            </div>

                            {/* Main Content Row */}
                            <div className="row align-items-center g-5 mb-5">
                                {/* Left Column - Content */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '50px 45px',
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

                                        <div style={{position: 'relative', zIndex: 2}}>
                                            {/* Experience Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                background: 'rgba(253, 197, 26, 0.15)',
                                                border: '2px solid rgba(253, 197, 26, 0.3)',
                                                borderRadius: '50px',
                                                padding: '12px 25px',
                                                marginBottom: '30px'
                                            }}>
                                                <div style={{
                                                    width: '45px',
                                                    height: '45px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: '800',
                                                    color: '#1e2247',
                                                    fontSize: '1.2rem'
                                                }}>
                                                    15+
                                                </div>
                                                <span style={{
                                                    color: '#fdc51a',
                                                    fontSize: '1.1rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}>
                                                    Years Experience
                                                </span>
                                            </div>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '35px',
                                                fontWeight: '500'
                                            }}>
                                                Over 15+ years of experience in healthcare environments has taught us one truth: <strong style={{color: '#fdc51a'}}>safety and compassion are inseparable</strong>.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                margin: 0
                                            }}>
                                                Metro Guards continues to support major hospitals, private clinics, and aged care facilities across Melbourne through reliable, OH&S-centric protection that adapts to their culture and workflow. <strong style={{color: '#fdc51a'}}>We integrate into hospital teams, not as outsiders, but as silent protectors of the environment that makes healing possible.</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Service Types */}
                                <div className="col-lg-6">
                                    <div className="row g-4">
                                        {/* Major Hospitals */}
                                        <div className="col-md-12">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '35px',
                                                border: '2px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateX(10px)';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.15)';
                                                e.currentTarget.style.borderColor = '#fdc51a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '20px'
                                                }}>
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '15px',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="fas fa-hospital-alt" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                                    </div>
                                                    <div style={{flex: 1}}>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontSize: '1.4rem',
                                                            fontWeight: '700',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Major Hospitals
                                                        </h4>
                                                        <p style={{
                                                            color: '#6c757d',
                                                            fontSize: '1rem',
                                                            lineHeight: '1.6',
                                                            margin: 0
                                                        }}>
                                                            Emergency departments, ICU, and multi-floor facilities
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Private Clinics */}
                                        <div className="col-md-12">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '35px',
                                                border: '2px solid rgba(30, 34, 71, 0.2)',
                                                transition: 'all 0.3s ease',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateX(10px)';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 34, 71, 0.12)';
                                                e.currentTarget.style.borderColor = '#1e2247';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '20px'
                                                }}>
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '15px',
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <i className="fas fa-clinic-medical" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                                    </div>
                                                    <div style={{flex: 1}}>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontSize: '1.4rem',
                                                            fontWeight: '700',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Private Clinics
                                                        </h4>
                                                        <p style={{
                                                            color: '#6c757d',
                                                            fontSize: '1rem',
                                                            lineHeight: '1.6',
                                                            margin: 0
                                                        }}>
                                                            Specialized medical centers and outpatient facilities
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Aged Care Facilities */}
                                        <div className="col-md-12">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '35px',
                                                border: '2px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateX(10px)';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.15)';
                                                e.currentTarget.style.borderColor = '#fdc51a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '20px'
                                                }}>
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '15px',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="fas fa-heartbeat" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                                    </div>
                                                    <div style={{flex: 1}}>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontSize: '1.4rem',
                                                            fontWeight: '700',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Aged Care Facilities
                                                        </h4>
                                                        <p style={{
                                                            color: '#6c757d',
                                                            fontSize: '1rem',
                                                            lineHeight: '1.6',
                                                            margin: 0
                                                        }}>
                                                            Nursing homes and residential care communities
                                                        </p>
                                                    </div>
                                                </div>
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
                                                    <i className="fas fa-heartbeat me-2"></i>
                                                    Take Action Now
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
                                                Let's Keep Every <span style={{color: '#fdc51a'}}>Heartbeat Safe</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '750px',
                                                margin: '0 auto 30px'
                                            }}>
                                                A hospital's greatest strength isn't its building or its technology, it's the people who keep moving when others can't. <strong style={{color: '#1e2247'}}>Metro Guards exists to protect them.</strong>
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.7',
                                                marginBottom: '40px',
                                                maxWidth: '750px',
                                                margin: '0 auto 40px',
                                                fontStyle: 'italic'
                                            }}>
                                                Our promise is simple: <strong style={{color: '#1e2247'}}>professional guards, clinically trained, emotionally aware, and always present</strong> when they're needed most.
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
                                                    Metro Guards – <span style={{color: '#ffffff'}}>Protecting those who heal, so they can focus on what matters most.</span>
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