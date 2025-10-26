'use client';
import { useState } from 'react';
import { Activity, Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, Factory, Car, HardHat, Shuffle, Timer, Route, ShieldCheck } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function PartySecurityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="PARTY SECURITY GUARDS"
                mainTitle="PARTY SECURITY GUARDS IN MELBOURNE" 
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Party%20Security%20Guards/1785C6E4-ADDF-4BC0-A8F5-0281E26F413A_1_105_c.webp"
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
                                            Celebration With  <br />
                                            <span style={{color: '#fdc51a'}}>Protection</span>
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
                                            A party event is the real test of your security preparations. One unpredictable guest. One unnoticed entry. One moment that shifts from celebration to crisis. Metro Guards eliminates that margin of risk.
                                            <br/><br/>For over fifteen years, we’ve provided party security in Melbourne for the city’s most exclusive private events, from estate celebrations and milestone birthdays to high-profile galas and invitation-only launches. Our party security guards combine hospitality discipline with security intelligence, ensuring every party event unfolds seamlessly from first arrival to final exit.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Party%20Security%20Guards/4167D4C6-C6EC-4CFF-8531-980F347AA616_1_105_c.webp"
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
                                                        title: 'Experience That Anticipates',
                                                        description: 'Decades in crowd management, behavioural control, and private access protection have made our teams fluent in subtle risk detection. We manage energy, not chaos, blending into your event\'s atmosphere while maintaining full situational awareness.'
                                                    },
                                                    {
                                                        icon: "fas fa-tasks",
                                                        title: 'Tailored Strategy',
                                                        description: 'Every private function begins with an assessment of guest profiles, access points, and crowd dynamics. From VIP protocols to alcohol-service supervision, our planning anticipates escalation triggers before they appear.'
                                                    },
                                                    {
                                                        icon: "fas fa-user-check",
                                                        title: 'Professional Conduct',
                                                        description: 'Presentation matters. Our party security guards arrive in immaculate uniform, briefed on tone, guest type, and brand image. They act with restraint, readiness, and respect — measured, approachable, but never unprepared.'
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Party%20Security%20Guards/58108D6B-9846-43C4-89E9-EF7DFEBAE8E6_1_105_c.webp"
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
                                            <ShieldCheck size={24} style={{color: '#fdc51a'}} />
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
                                                Professional Control
                                            </span>
                                            <ShieldCheck size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            The Discipline Behind <span style={{color: '#fdc51a'}}>Discretion</span>
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            maxWidth: '900px',
                                            margin: '0 auto 50px',
                                            lineHeight: '1.8'
                                        }}>
                                            Private events require <strong style={{color: '#fdc51a'}}>subtle control, safety delivered without spectacle</strong>. Our command centre tracks each post through live reporting, supervisor check-ins, and digital route logging. If intervention is required, it's executed quietly, efficiently, and with complete documentation.
                                        </p>

                                        <h3 style={{
                                            color: '#fdc51a',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '40px',
                                            textAlign: 'center'
                                        }}>
                                            Our Protocol Includes:
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Operations Grid */}
                            <div className="row g-4 mb-4">
                                {[
                                    {
                                        icon: <Clock size={32} />,
                                        title: 'On-Time Deployment',
                                        description: 'No delays, no early exits — accountability enforced through digital verification.'
                                    },
                                    {
                                        icon: <MapPin size={32} />,
                                        title: 'GPS-Tracked Patrols',
                                        description: 'Every patrol route logged and visible to command.'
                                    },
                                    {
                                        icon: <Camera size={32} />,
                                        title: 'Live Reporting Access',
                                        description: 'Incidents captured in real time with photographic evidence.'
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: 'Unannounced Supervisor Audits',
                                        description: 'Genuine accountability; not routine check-ins.'
                                    },
                                    {
                                        icon: <Award size={32} />,
                                        title: 'ISO & CM3 Certified',
                                        description: 'Safety, quality, and environmental compliance beyond standard benchmarks.'
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
                                            <ShieldCheck size={24} style={{color: '#1e2247'}} />
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
                                                Proactive Prevention
                                            </span>
                                            <ShieldCheck size={24} style={{color: '#1e2247'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '50px',
                                            lineHeight: '1.2'
                                        }}>
                                            Threats Neutralised Before They <span style={{color: '#fdc51a'}}>Escalate</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Industry Grid */}
                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        icon: <Users size={32} />,
                                        title: 'Crowd Dynamics Management',
                                        description: 'We recognise behavioural patterns before they become issues — pacing alcohol flow, easing congestion, and reading group tension with practiced calm.'
                                    },
                                    {
                                        icon: <AlertTriangle size={32} />,
                                        title: 'Substance Control',
                                        description: 'Our personnel are trained to manage intoxication tactfully and discreetly. Prevention through presence, intervention through professionalism.'
                                    },
                                    {
                                        icon: <Shield size={32} />,
                                        title: 'VIP Protection',
                                        description: 'High-profile guests are assigned close-protection officers familiar with discretion, media navigation, and personal boundary management.'
                                    },
                                    {
                                        icon: <Home size={32} />,
                                        title: 'Property Preservation',
                                        description: 'Whether the venue is a private residence, marquee, or waterfront estate, our guards manage perimeters, restrict unauthorised access, and safeguard property integrity.'
                                    },
                                    {
                                        icon: <UserCheck size={32} />,
                                        title: 'Underage Alcohol Prevention',
                                        description: 'All access points and bar zones are monitored with ID validation protocols, ensuring full compliance without disrupting flow.'
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

                    {/*===== Operational Intelligence & Experience Section =====*/}
                    <div className="operational-intelligence-section section-padding" style={{
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
                            {/* Operational Intelligence Subsection */}
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '30px',
                                            justifyContent: 'center'
                                        }}>
                                            <Target size={24} style={{color: '#fdc51a'}} />
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
                                                Data-Driven Security
                                            </span>
                                            <Target size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Operational <span style={{color: '#fdc51a'}}>Intelligence</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mb-5">
                                <div className="col-lg-10">
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '25px',
                                        padding: '50px 60px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                                        {/* Decorative Element */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                                            width: '200px',
                                            height: '200px',
                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                            borderRadius: '50%'
                        }}></div>

                                        <div style={{position: 'relative', zIndex: 2}}>
                                        <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.25rem',
                                                lineHeight: '2',
                                                textAlign: 'center',
                                                margin: 0
                                            }}>
                                                Data drives every deployment. From <strong style={{color: '#fdc51a'}}>pre-event mapping</strong> to <strong style={{color: '#fdc51a'}}>post-event analytics</strong>, Metro Guards documents each checkpoint, guest interaction, and intervention. Our post-event reports provide <strong style={{color: '#ffffff'}}>full visibility</strong>, detailing what occurred, what was prevented, and what to optimise next time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                                            </div>

                            {/* Divider */}
                            <div className="row mb-5">
                                <div className="col-lg-8 mx-auto">
                                    <div style={{
                                        height: '2px',
                                        background: 'linear-gradient(90deg, transparent, rgba(253, 197, 26, 0.5), transparent)',
                                        margin: '40px 0'
                                    }}></div>
                        </div>
                    </div>

                            {/* Fifteen Years Subsection */}
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
                                            <Award size={24} style={{color: '#fdc51a'}} />
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
                                                Proven Excellence
                                            </span>
                                            <Award size={24} style={{color: '#fdc51a'}} />
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '25px',
                                            lineHeight: '1.2'
                                        }}>
                                            Fifteen Years of <span style={{color: '#fdc51a'}}>Controlled Celebration</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                        <div style={{
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '25px',
                                        padding: '50px 60px',
                                        border: '2px solid rgba(253, 197, 26, 0.4)',
                                            backdropFilter: 'blur(10px)',
                                        position: 'relative',
                                        boxShadow: '0 20px 60px rgba(253, 197, 26, 0.2)'
                                    }}>
                                        {/* Corner Accents */}
                                            <div style={{
                                            position: 'absolute',
                                            top: '20px',
                                            left: '20px',
                                            width: '40px',
                                            height: '40px',
                                            border: '3px solid #fdc51a',
                                            borderRight: 'none',
                                            borderBottom: 'none',
                                            borderRadius: '8px 0 0 0'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            right: '20px',
                                            width: '40px',
                                            height: '40px',
                                            border: '3px solid #fdc51a',
                                            borderLeft: 'none',
                                            borderTop: 'none',
                                            borderRadius: '0 0 8px 0'
                                        }}></div>

                                            <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.25rem',
                                            lineHeight: '2',
                                            textAlign: 'center',
                                                margin: 0
                                            }}>
                                            We've delivered security for parties across <strong style={{color: '#fdc51a'}}>Melbourne's skyline venues, Yarra River estates, and private island retreats</strong>. Each event different in atmosphere, all identical in one expectation: <strong style={{color: '#ffffff'}}>flawless execution</strong>. Our record stands on consistency, calm, and the quiet confidence that <span style={{
                                                color: '#fdc51a',
                                                fontWeight: '800',
                                                fontSize: '1.3rem'
                                            }}>no disturbance will ever define your night</span>.
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
                                                Protection Without <span style={{color: '#fdc51a'}}>Interruption</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.25rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '900px',
                                                margin: '0 auto 40px'
                                            }}>
                                                Hiring Metro Guards is not a cost — it's a <strong style={{color: '#1e2247'}}>risk strategy</strong>. You gain a security partner that aligns with your reputation, protects your brand image, and sustains the integrity of your event. We don't manage problems; we <strong style={{color: '#fdc51a'}}>remove their possibility</strong>. When your night has no room for uncertainty, our experience becomes every margin of your safety.
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
            </Layout>
            </> ) }