'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function K9SecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="K9 SECURITY GUARDS"
                mainTitle="K9 SECURITY GUARDS IN MELBOURNE "
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Canine%20(K9)%20Security%20Services/E1AD04AF-8F50-4A32-959C-94B8180F3D4C_1_105_c.webp"
                
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
                                            Instinct You Can Trust. Loyalty  <br />
                                            <span style={{color: '#fdc51a'}}>You Can Feel</span>
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
                                            Long before alarms sound or motion sensors blink, a trained K9 senses intent, the shift in the air, the heartbeat of hesitation, and moves before threat becomes harm. At Metro Guards, our K9 guards redefine protection: instinct and discipline working in concert, handlers and dogs moving as one.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Canine%20(K9)%20Security%20Services/3306B975-83A6-4BCD-AA71-082374E3FE4F_1_105_c.webp" 
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

                    {/*=====  Section 2 =====*/}
                    <div className="services-section-2 section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Canine%20(K9)%20Security%20Services/E1AD04AF-8F50-4A32-959C-94B8180F3D4C_1_105_c.webp" 
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
                                        
                                        {/* Our K9 Teams Deliver Section */}
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
                                                The Bond That Never Breaks
                                                </h2>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Teams train until trust is reflex. The handler reads context; the dog reads what can’t be seen, scent, micro-movement, emotional tension. Together they turn uncertainty into awareness and act before risk becomes reality.
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    K9 EXCELLENCE
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Our K9 Teams <span style={{color: '#fdc51a'}}>Deliver </span>
                                            </h2>
                                            
                                        </div>
                                        
                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-search",
                                                    title: "Early threat detection",
                                                    
                                                    details: "Intruders, explosives, narcotics identified earlier than any technology alone."
                                                },
                                                {
                                                    icon: "fas fa-shield-alt",
                                                    title: "Dynamic deterrence",
                                                    
                                                    details: "A visible K9 presence that halts intent without confrontation."
                                                },
                                                {
                                                    icon: "fas fa-check-circle",
                                                    title: "Precision obedience",
                                                   
                                                    details: "Commands executed with absolute control."
                                                },
                                                {
                                                    icon: "fas fa-bolt",
                                                    title: "Rapid response",
                                                    
                                                    details: "Reflex-trained for overnight patrols and critical incidents."
                                                },
                                                {
                                                    icon: "fas fa-user-tie",
                                                    title: "Handler mastery",
                                                    
                                                    details: "Certified, experienced, and live-tracked for accountability across all K9 security services."
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Calm and Precision Section =====*/}
                    <div className="calm-precision-section section-padding" style={{
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
                            {/* When Calm Feels Effortless */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '60px 50px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 25px 50px rgba(30, 34, 71, 0.2)',
                                        textAlign: 'center'
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
                                            <h2 style={{
                                                color: '#ffffff',
                                                fontSize: '2.8rem',
                                                fontWeight: '800',
                                                marginBottom: '30px',
                                                lineHeight: '1.3'
                                            }}>
                                                Presence That Speaks <span style={{color: '#fdc51a'}}>Without Sound</span>
                                            </h2>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.25rem',
                                                lineHeight: '1.8',
                                                margin: 0,
                                                maxWidth: '850px',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                fontWeight: '500'
                                            }}>
                                                A canine security guard's calm stance carries <strong style={{color: '#fdc51a'}}>authority</strong>. In events, warehouses, or construction zones, these trained protection dogs sense adrenaline before it spikes, detect hidden scents, and keep spaces steady by simply being there. Deterrence happens through <strong style={{color: '#fdc51a'}}>presence, not performance</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*===== From Patrol to Proof Section =====*/}
                    <div className="patrol-proof-section section-padding" style={{
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
                                radial-gradient(circle at 20% 30%, rgba(253, 197, 26, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Decorative Circles */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '150px',
                            height: '150px',
                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1), transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '120px',
                            height: '120px',
                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.08), transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Header */}
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
                                            <i className="fas fa-check-double me-2"></i>
                                            Accountability
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
                                        From Patrol to <span style={{color: '#fdc51a'}}>Proof</span>
                                    </h2>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        marginBottom: '50px',
                                        maxWidth: '800px',
                                        margin: '0 auto 50px'
                                    }}>
                                        Every K9 patrol is <strong style={{color: '#fdc51a'}}>accountable and auditable</strong>. Systems track movement, document incidents, and provide supervisor oversight so protection is transparent.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-5">
                                {/* Feature 1 - GPS-Verified Patrols */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-map-marked-alt" style={{fontSize: '1.8rem', color: '#1e2247'}}></i>
                                        </div>
                                        <h3 style={{color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            GPS-Verified Patrols
                                        </h3>
                                        <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Each route is digitally tracked, time-stamped, and verified in real time for total transparency.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 - Photo & Video Documentation */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            border: '2px solid rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-camera" style={{fontSize: '1.8rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <h3 style={{color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Photo & Video Documentation
                                        </h3>
                                        <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Incidents and routine checks are supported by visual evidence, proof, not assumption.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 - Supervisor Oversight */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-user-shield" style={{fontSize: '1.8rem', color: '#1e2247'}}></i>
                                        </div>
                                        <h3 style={{color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Supervisor Oversight
                                        </h3>
                                        <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Live supervision, random audits, and spot checks sustain discipline and accountability.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 - 24/7 Command Response */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            border: '2px solid rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-headset" style={{fontSize: '1.8rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <h3 style={{color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            24/7 Command Response
                                        </h3>
                                        <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            A constant link between patrol and control room ensures instant coordination and rapid intervention.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 5 - Certified & Compliant */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-certificate" style={{fontSize: '1.8rem', color: '#1e2247'}}></i>
                                        </div>
                                        <h3 style={{color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Certified & Compliant
                                        </h3>
                                        <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            ISO Certified | ASIAL Member | CM3 Prequalified, compliance recognised by Australia's top standards.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 6 - Continuity You Can Trust */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            border: '2px solid rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-shield-alt" style={{fontSize: '1.8rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <h3 style={{color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Continuity You Can Trust
                                        </h3>
                                        <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            When the site wakes, assets remain intact and operations resume with confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/*===== Guarding the Future Section =====*/}
                    <div className="guarding-future-section section-padding" style={{
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
                            top: '12%',
                            right: '6%',
                            width: '140px',
                            height: '140px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '18%',
                            left: '4%',
                            width: '110px',
                            height: '110px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Guarding What Builds the Future */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(255, 255, 255, 0.95))',
                                        borderRadius: '25px',
                                        padding: '50px 45px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        position: 'relative',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                                    }}>
                                        {/* Accent Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)',
                                            borderRadius: '25px',
                                            zIndex: 1
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 2 }}>
                                            <h2 style={{
                                                color: '#1e2247',
                                                fontSize: '2.5rem',
                                                fontWeight: '800',
                                                marginBottom: '30px',
                                                lineHeight: '1.3',
                                                textAlign: 'center'
                                            }}>
                                                Guarding What Builds <span style={{color: '#fdc51a'}}>the Future</span>
                                            </h2>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                marginBottom: '25px',
                                                textAlign: 'center',
                                                maxWidth: '900px',
                                                margin: '0 auto'
                                            }}>
                                                Where risk costs millions, <strong style={{color: '#1e2247'}}>certainty is currency</strong>. Metro K9 teams protect environments where loss is not acceptable:
                                            </p>

                                            {/* Protected Environments Grid */}
                                            <div className="row g-3 mt-4" style={{maxWidth: '900px', margin: '30px auto 0'}}>
                                                <div className="col-md-4 col-6">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        borderRadius: '12px',
                                                        padding: '15px 20px',
                                                        textAlign: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 5px 15px rgba(253, 197, 26, 0.25)'
                                                    }}>
                                                        Construction Sites
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        borderRadius: '12px',
                                                        padding: '15px 20px',
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 5px 15px rgba(30, 34, 71, 0.25)'
                                                    }}>
                                                        Logistics Hubs
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        borderRadius: '12px',
                                                        padding: '15px 20px',
                                                        textAlign: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 5px 15px rgba(253, 197, 26, 0.25)'
                                                    }}>
                                                        Events
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        borderRadius: '12px',
                                                        padding: '15px 20px',
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 5px 15px rgba(30, 34, 71, 0.25)'
                                                    }}>
                                                        Industrial Yards
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        borderRadius: '12px',
                                                        padding: '15px 20px',
                                                        textAlign: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 5px 15px rgba(253, 197, 26, 0.25)'
                                                    }}>
                                                        VIP Sites
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        borderRadius: '12px',
                                                        padding: '15px 20px',
                                                        textAlign: 'center',
                                                        color: '#ffffff',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        boxShadow: '0 5px 15px rgba(30, 34, 71, 0.25)'
                                                    }}>
                                                        Government Sites
                                                    </div>
                                                </div>
                                            </div>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                marginTop: '30px',
                                                textAlign: 'center',
                                                maxWidth: '850px',
                                                margin: '30px auto 0',
                                                fontStyle: 'italic'
                                            }}>
                                                Each location demands a calibrated balance of <strong style={{color: '#fdc51a'}}>presence, restraint, and capability</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 15 Years of Loyalty Section */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '60px 50px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 25px 50px rgba(30, 34, 71, 0.25)'
                                    }}>
                                        {/* Decorative Pattern */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-60px',
                                            right: '-60px',
                                            width: '220px',
                                            height: '220px',
                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15), transparent 70%)',
                                            borderRadius: '50%'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-40px',
                                            left: '-40px',
                                            width: '180px',
                                            height: '180px',
                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1), transparent 70%)',
                                            borderRadius: '50%'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 2 }}>
                                            {/* Badge */}
                                            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                                <span className="badge px-4 py-2" style={{
                                                    background: "linear-gradient(135deg, #fdc51a, #ffdb5c)",
                                                    color: "#1e2247",
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "30px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "2px",
                                                    boxShadow: "0 8px 25px rgba(253, 197, 26, 0.3)"
                                                }}>
                                                    <i className="fas fa-award me-2"></i>
                                                    15+ Years Experience
                                                </span>
                                            </div>

                                            <h2 style={{
                                                color: '#ffffff',
                                                fontSize: '2.8rem',
                                                fontWeight: '800',
                                                marginBottom: '35px',
                                                lineHeight: '1.3',
                                                textAlign: 'center'
                                            }}>
                                                Loyalty, Precision <span style={{color: '#fdc51a'}}>and Heart</span>
                                            </h2>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.9',
                                                marginBottom: '25px',
                                                maxWidth: '900px',
                                                margin: '0 auto 25px',
                                                textAlign: 'center'
                                            }}>
                                                For over <strong style={{color: '#fdc51a'}}>15 years</strong>, Metro Guards has protected Melbourne's most trusted spaces with loyalty that feels human and precision that endures. Our K9 teams are chosen for calm intelligence, guided by handlers defined by <strong style={{color: '#fdc51a'}}>discipline, empathy, and quiet strength</strong>.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                marginBottom: '25px',
                                                maxWidth: '900px',
                                                margin: '0 auto 25px',
                                                textAlign: 'center'
                                            }}>
                                                Together, they do more than secure, <strong style={{color: '#fdc51a'}}>they reassure</strong>. Each patrol is a promise of safety carried out with composure and care.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                margin: '0 auto',
                                                maxWidth: '850px',
                                                textAlign: 'center',
                                                fontStyle: 'italic',
                                                paddingTop: '20px',
                                                borderTop: '2px solid rgba(253, 197, 26, 0.3)',
                                                marginTop: '30px'
                                            }}>
                                                Behind every alert gaze is years of training, trust, and understanding. <strong style={{color: '#fdc51a'}}>We don't guard gates. We protect peace of mind.</strong>
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
                                                    <i className="fas fa-paw me-2"></i>
                                                    K9 Excellence
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
                                                The Kind of Loyalty <span style={{color: '#fdc51a'}}>You Can't Program</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                Technology detects. <strong style={{color: '#1e2247'}}>Dogs feel</strong>. A K9's fidelity is a silent promise: <em>I've got this. I've got you.</em> Metro Guards pairs that instinct with <strong style={{color: '#fdc51a'}}>human commitment</strong>, side by side, always ready.
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                When a Metro K9 is on watch, <strong style={{color: '#fdc51a'}}>the night belongs to safety</strong>.
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
                                                    Metro Guards – <span style={{color: '#ffffff'}}>Protecting education, securing futures, safeguarding Australia's tomorrow.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }