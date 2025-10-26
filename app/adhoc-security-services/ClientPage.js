'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, Factory, Car, HardHat, Shuffle, Timer, Route, ShieldCheck, Activity } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function AdhocSecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ADHOC SECURITY GUARDS "
                mainTitle="ADHOC SECURITY GUARDS IN MELBOURNE" 
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Adhoc%20Security%20Services/C38803E5-A7C7-472E-839D-290BBEA65378_1_105_c.webp"
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
                                            When Time Runs Out,    <br />
                                            <span style={{color: '#fdc51a'}}>Discipline Steps In</span>
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
                                            Security isn't always scheduled. Sometimes the call comes after hours, when a site's been left exposed, when a guard hasn't shown, when the risk is already moving. Metro Guards fills that void instantly.
                                            <br/><br/>With over fifteen years of operational excellence, we provide rapid-response ADHOC security guards services in Melbourne for businesses, events, and critical infrastructure. Every deployment carries the same structure, precision, and accountability as our permanent operations.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Adhoc%20Security%20Services/FF0D3949-7DA9-4A0F-8B9D-B24F71BAE8D2_1_105_c.jpeg"
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

                    


                     {/*=====  Section 2 =====*/}
                     <div className="services-section-2 section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        {/* Why Metro Guards Section - Accordion Style */}
                                        <div className="human-element-section section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    OUR ADVANTAGE
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Why <span style={{color: '#fdc51a'}}>Metro Guards</span>
                                            </h2>
                                            
                                            <div className="features-accordion">
                                                {[
                                                    {
                                                        icon: "fas fa-award",
                                                        title: 'Experience of 15+ years',
                                                        description: 'Veterans of high-pressure environments, our guards have secured construction projects, corporate towers, and crisis operations across Victoria. Trained to stabilise chaos with quiet control.'
                                                    },
                                                    {
                                                        icon: "fas fa-clock",
                                                        title: 'Flexibility',
                                                        description: 'Immediate deployment. Hourly, overnight, or extended coverage. Fully licensed, uniformed, and verified through our live command system.'
                                                    },
                                                    {
                                                        icon: "fas fa-eye",
                                                        title: 'Visibility',
                                                        description: 'Each movement recorded, every checkpoint tracked. Real-time reports give you the truth of what\'s happening, not what\'s assumed.'
                                                    },
                                                    {
                                                        icon: "fas fa-shield-alt",
                                                        title: 'Reliability',
                                                        description: 'No late arrivals. No early exits. Each assignment validated through GPS and supervisor audits. The structure doesn\'t bend because the timeline is short.'
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

                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Adhoc%20Security%20Services/03BC3547-5A49-4C7C-83F5-9771C8C59059_1_105_c.webp"
                                                alt="Mobile Patrol Security Guards" 
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
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== The Command Behind Urgency Section =====*/}
                    <div className="command-section section-padding" style={{
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
                                                24/7 Command Center
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
                                            The Command Behind <span style={{color: '#fdc51a'}}>Urgency</span>
                                        </h2>

                                                <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto 50px',
                                            lineHeight: '1.8'
                                        }}>
                                            Every ADHOC operation runs through our central command hub, staffed 24/7 to coordinate, brief, and monitor each post. When you call, the process begins immediately:
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Process Steps Grid */}
                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        icon: <MapPin size={36} />,
                                        number: '01',
                                        title: 'Site Assessment',
                                        description: 'Location, layout, risk.'
                                    },
                                    {
                                        icon: <Users size={36} />,
                                        number: '02',
                                        title: 'Personnel Selection',
                                        description: 'Matched to environment and requirement.'
                                    },
                                    {
                                        icon: <Zap size={36} />,
                                        number: '03',
                                        title: 'Deployment',
                                        description: 'Verified arrival and communication link established.'
                                    },
                                    {
                                        icon: <Eye size={36} />,
                                        number: '04',
                                        title: 'Oversight',
                                        description: 'Continuous tracking, reporting, and escalation readiness.'
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '25px',
                                            padding: '40px 30px',
                                            height: '100%',
                                            border: '2px solid rgba(253, 197, 26, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                            position: 'relative',
                                            transition: 'all 0.4s ease',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-15px)';
                                            e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                            e.currentTarget.style.borderColor = '#fdc51a';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}>
                                            {/* Number Badge */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '20px',
                                                right: '20px',
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '50%',
                                                background: index % 2 === 0 
                                                    ? 'rgba(253, 197, 26, 0.2)'
                                                    : 'rgba(30, 34, 71, 0.3)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fdc51a',
                                                fontWeight: '800',
                                                fontSize: '0.9rem',
                                                border: '2px solid rgba(253, 197, 26, 0.3)'
                                            }}>
                                                {step.number}
                                            </div>

                                            {/* Icon */}
                                            <div style={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '20px',
                                                background: index % 2 === 0 
                                                    ? 'linear-gradient(135deg, #fdc51a, #ffdb5c)'
                                                    : 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '25px',
                                                color: index % 2 === 0 ? '#1e2247' : '#fdc51a',
                                                boxShadow: index % 2 === 0 
                                                    ? '0 10px 30px rgba(253, 197, 26, 0.4)'
                                                    : '0 10px 30px rgba(30, 34, 71, 0.4)',
                                                border: index % 2 === 0 
                                                    ? '3px solid rgba(30, 34, 71, 0.1)'
                                                    : '3px solid rgba(253, 197, 26, 0.2)'
                                            }}>
                                                {step.icon}
                                            </div>

                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '15px',
                                                lineHeight: '1.3'
                                            }}>
                                                {step.title}
                                            </h3>

                                                <p style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
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

                            {/* Closing Statement */}
                            <div className="row mt-5">
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
                                            The result: <span style={{color: '#fdc51a', fontWeight: '800'}}>not just a guard</span>, but a fully integrated system arriving on demand.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Protocol You Can Audit Section =====*/}
                    <div className="protocol-section section-padding" style={{
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
                                            <CheckCircle size={24} style={{color: '#fdc51a'}} />
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
                                                Verified Standards
                                            </span>
                                            <CheckCircle size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Protocol You Can <span style={{color: '#fdc51a'}}>Audit</span>
                                        </h2>
                                    </div>
                                    </div>
                                </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-4">
                                {[
                                    {
                                        icon: <Clock size={28} />,
                                        title: 'On-Time, Every Time',
                                        description: 'Deployment verified; zero-tolerance for no-shows.'
                                    },
                                    {
                                        icon: <MapPin size={28} />,
                                        title: 'GPS-Tracked Patrols',
                                        description: 'Each round logged, every path confirmed.'
                                    },
                                    {
                                        icon: <Camera size={28} />,
                                        title: 'Live Reporting',
                                        description: 'Photo-backed incident entries, accessible in real time.'
                                    },
                                    {
                                        icon: <Eye size={28} />,
                                        title: 'Supervisor Inspections',
                                        description: 'Randomised checks that preserve integrity.'
                                    },
                                    {
                                        icon: <Award size={28} />,
                                        title: 'Certified Standards',
                                        description: 'ISO, ASIAL, and CM3 credentials underpin every operation.'
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
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

                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <div style={{
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '20px',
                                        padding: '30px 40px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        display: 'inline-block'
                                        }}>
                                            <p style={{
                                                color: '#1e2247',
                                            fontSize: '1.3rem',
                                            lineHeight: '1.8',
                                                margin: 0,
                                            fontWeight: '600',
                                                fontStyle: 'italic'
                                            }}>
                                            This isn't ADHOC by nature — it's <span style={{color: '#fdc51a'}}>precision, delivered fast</span>.
                                            </p>
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
                                            <Shield size={24} style={{color: '#fdc51a'}} />
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
                                                Rapid Response
                                            </span>
                                            <Shield size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Situations We <span style={{color: '#fdc51a'}}>Secure</span>
                                        </h2>
                                    </div>
                                </div>
                                    </div>

                            {/* Situations Grid */}
                            <div className="row g-4 mb-4">
                                {[
                                    {
                                        icon: <Users size={32} />,
                                        title: 'Last-Minute Coverage Gaps',
                                        description: 'Guard replacements within hours.'
                                    },
                                    {
                                        icon: <AlertTriangle size={32} />,
                                        title: 'Emergency Response',
                                        description: 'Immediate protection for unplanned incidents or system failures.'
                                    },
                                    {
                                        icon: <Calendar size={32} />,
                                        title: 'Event Reinforcement',
                                        description: 'Extra coverage for high-attendance or sensitive environments.'
                                    },
                                    {
                                        icon: <Home size={32} />,
                                        title: 'Asset and Property Protection',
                                        description: 'Overnight patrols and static security for exposed sites.'
                                    },
                                    {
                                        icon: <Lock size={32} />,
                                        title: 'Short-Term Risk Control',
                                        description: 'Flexible presence during high-risk periods or special operations.'
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
                                            When structure falters, our system restores it — <span style={{color: '#fdc51a'}}>quietly, efficiently, completely</span>.
                                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Data. Proof. Continuity. Section =====*/}
                    <div className="data-proof-section section-padding" style={{
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
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-xl-8">
                                    <div className="section-header text-center">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Target size={24} style={{color: '#fdc51a'}} />
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
                                                Complete Transparency
                                            </span>
                                            <Target size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '35px',
                                            lineHeight: '1.2'
                                        }}>
                                            Data. Proof. <span style={{color: '#fdc51a'}}>Continuity.</span>
                                        </h2>

                                            <div style={{
                                            background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                                            borderRadius: '25px',
                                            padding: '50px 45px',
                                            border: '2px solid rgba(253, 197, 26, 0.15)',
                                            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                            position: 'relative'
                                        }}>
                                            {/* Decorative elements */}
                                    <div style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: '20px',
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.2), transparent)',
                                            }}></div>
                                        <div style={{
                                            position: 'absolute',
                                                bottom: '20px',
                                                right: '20px',
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                                        }}></div>
                                        
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.25rem',
                                                lineHeight: '2',
                                                marginBottom: '30px',
                                                position: 'relative',
                                                zIndex: 2
                                            }}>
                                                Each deployment generates a <strong style={{color: '#1e2247'}}>live digital record</strong> — timestamps, reports, and GPS mapping. This transparency isn't an add-on; it's the <strong style={{color: '#fdc51a'}}>foundation of our credibility</strong>.
                                            </p>
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.25rem',
                                                lineHeight: '2',
                                                margin: 0,
                                                position: 'relative',
                                                zIndex: 2
                                            }}>
                                                After completion, you receive a <strong style={{color: '#1e2247'}}>post-deployment summary</strong> that details every round, every event, and every measure taken.
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
                                                Metro Guards – The Line Between <span style={{color: '#fdc51a'}}>Order and Chaos</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                ADHOC security isn't an emergency solution — it's <strong style={{color: '#1e2247'}}>continuity in motion</strong>. When pressure rises, we don't send availability; we send <strong style={{color: '#fdc51a'}}>authority</strong>.
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                When you call, <strong style={{color: '#1e2247'}}>we're already moving</strong>.
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

