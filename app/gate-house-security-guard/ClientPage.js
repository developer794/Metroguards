'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function GateHouseSecurityPage() {
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
            title: "Verified Access Control",
            icon: <UserCheck size={24} />,
            iconSymbol: <UserCheck size={24} />,
            description: "Every person, every vehicle, every delivery logged with zero tolerance for shortcuts.",
        },
        {
            title: "Surveillance Integration", 
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "Continuous monitoring through linked CCTV and alarm systems.",
        },
        {
            title: "Operational Support",
            icon: <Users size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Guiding visitors, managing contractor compliance, resolving issues without stalling site movement.",
        },
        {
            title: "Crisis Readiness",
            icon: <AlertTriangle size={24} />,
            iconSymbol: <AlertTriangle size={24} />,
            description: "Immediate response to aggression, accidents, or security breaches.",
        },
        {
            title: "Perimeter Oversight",
            icon: <Eye size={24} />,
            iconSymbol: <Eye size={24} />,
            description: "Extending beyond the booth, patrolling car parks, loading bays, and secondary gates for total coverage.",
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="GATEHOUSE SECURITY GUARDS"
                mainTitle="GATEHOUSE SECURITY GUARDS IN MELBOURNE"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Gatehouse%20Security%20Guard/0DDA3933-2DD3-4AC3-9E0D-202CEE3C5A22_1_105_c.webp"
                
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero-content" style={{textAlign:"left"}}>
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
                                            The First Line Shapes <br />
                                            <span style={{color: '#fdc51a'}}>Everything</span>
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
                                           The gatehouse isn’t just a small booth at the front of your property. It’s command control, the filter, the checkpoint, the first handshake your site offers. When that line holds strong, the entire operation runs in order. When it cracks, everything behind it becomes vulnerable.
                                            <br/><br/>That’s why Metro Guards places its sharpest, most disciplined officers at your front line of security, the gate where protection, order, and reputation begin. They are not seat-fillers in uniforms. They are operators who understand the weight of the role, that every ID checked, every log entry made, and every visitor turned away is a decision that keeps your people and your reputation intact.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Gatehouse%20Security%20Guard/5FF0A9F2-0B06-4543-9AC1-2D57F158C07A_1_105_c.webp" 
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
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Gatehouse%20Security%20Guard/DF57F5E3-906F-4F75-A1AF-AE4A9D7754E1_1_105_c.webp" 
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
                                        
                                        {/* The Gatehouse That Works in Silence - Paragraph Style */}
                                        <div className="gatehouse-silence section-header mt-5" style={{
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
                                                    The Gatehouse That Works in <span style={{color: '#fdc51a'}}>Silence</span>
                                                </h2>
                                                <p className="lead mb-4" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    When it's done right, <strong style={{color: '#1e2247'}}>no one notices</strong>. The right delivery logs in, the wrong one never gets through. A visitor finds the right building without confusion. An ex-employee looking for trouble turns back at the gate.
                                                </p>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    marginTop: '1rem'
                                                }}>
                                                    A late-night worker gets a safe walk to the car. These small moments hold the weight of calm. They happen because <strong style={{color: '#fdc51a'}}>Metro Guards</strong> is there, not to be seen, but to make sure everything else can keep moving, <strong style={{color: '#fdc51a'}}>quietly and safely</strong>.
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
                                                    GATE HOUSE EXCELLENCE
                                                </span>
                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            More Than Gatekeepers – <span style={{color: '#fdc51a'}}>The System That Holds The Line</span>
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7'}}>
                                            Our front gate security guards don't just open barriers; they manage flow, authority, and accountability all at once. Each guard is trained to operate like a control point, aware, analytical, precise.
                                            </p>
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
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.6', marginTop: '20px', fontStyle: 'italic'}}>
                                            <strong style={{color: '#1e2247'}}>Their job isn't to look busy, it's to stay alert, unseen until needed, and irreplaceable once they act.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Discipline and Harmony Section =====*/}
                    <div className="discipline-harmony-section section-padding" style={{
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
                            {/* Where Discipline Becomes Harmony */}
                            <div className="row mb-5">
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

                                        <div style={{position: 'relative', zIndex: 2}}>
                                            <h2 style={{ 
                                                color: '#ffffff',
                                                fontSize: '2.8rem',
                                                fontWeight: '800',
                                                marginBottom: '30px',
                                                lineHeight: '1.3',
                                                textAlign: 'center'
                                            }}>
                                                Where Discipline Becomes <span style={{color: '#fdc51a'}}>Harmony</span>
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
                                                Unlike traditional security providers who focus solely on reaction or deterrence, Metro Guards builds <strong style={{color: '#fdc51a'}}>operational harmony</strong> through disciplined gatehouse systems, blending human judgment, procedural precision, and situational awareness to keep every moving part of a site functioning without interruption.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                margin: '0 auto',
                                                maxWidth: '900px',
                                                textAlign: 'center'
                                            }}>
                                                Every Metro Guards officer is trained not just to guard, but to <strong style={{color: '#fdc51a'}}>maintain rhythm</strong>: of logistics, visitor flow, and daily activity, ensuring security becomes an invisible part of your site's efficiency, not an obstacle to it.
                                            </p>

                                                        <div style={{
                                                marginTop: '35px',
                                                padding: '25px',
                                                background: 'rgba(253, 197, 26, 0.1)',
                                                            borderRadius: '15px',
                                                border: '2px solid rgba(253, 197, 26, 0.3)',
                                                textAlign: 'center'
                                            }}>
                                                <p style={{
                                                    color: '#fdc51a',
                                                    fontSize: '1.3rem',
                                                                        fontWeight: '700',
                                                    margin: 0,
                                                    fontStyle: 'italic'
                                                }}>
                                                    This turns Metro Guards from a security service into a <span style={{color: '#ffffff'}}>stability system</span>.
                                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                            {/* Proofs In Action Section */}
                            <div className="row">
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
                                            <i className="fas fa-check-circle me-2"></i>
                                            Verified Systems
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
                                        Proofs In <span style={{color: '#fdc51a'}}>Action</span>
                                        </h2>
                                        
                                        <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        marginBottom: '50px',
                                        maxWidth: '700px',
                                        margin: '0 auto 50px'
                                    }}>
                                        Metro Guards doesn't rely on claims, <strong style={{color: '#1e2247'}}>we operate on verification</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-4">
                                {/* Feature 1 - GPS-Traced Patrols */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.25)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
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
                                            <i className="fas fa-route" style={{fontSize: '1.8rem', color: '#1e2247'}}></i>
                                        </div>
                                        <h3 style={{color: '#1e2247', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            GPS-Traced Patrols
                                        </h3>
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Every round tracked, every checkpoint recorded.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 - Time-Stamped Reports */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(30, 34, 71, 0.15)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(30, 34, 71, 0.2)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-clock" style={{fontSize: '1.8rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <h3 style={{color: '#1e2247', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Time-Stamped Reports
                                        </h3>
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Logged and available in real time.
                                        </p>
                        </div>
                    </div>

                                {/* Feature 3 - Surprise Supervisor Audits */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.25)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
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
                                        <h3 style={{color: '#1e2247', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Surprise Supervisor Audits
                                        </h3>
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Standards tested without notice.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Feature 4 - Full Compliance */}
                                <div className="col-lg-6 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(30, 34, 71, 0.15)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(30, 34, 71, 0.2)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            borderRadius: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-certificate" style={{fontSize: '1.8rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <h3 style={{color: '#1e2247', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            Full Compliance
                                        </h3>
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            ISO certified for Quality, OH&S, and Environmental.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Feature 5 - ASIAL Member & CM3 Prequalified */}
                                <div className="col-lg-6 col-md-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.25)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
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
                                            <i className="fas fa-award" style={{fontSize: '1.8rem', color: '#1e2247'}}></i>
                                        </div>
                                        <h3 style={{color: '#1e2247', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px'}}>
                                            ASIAL Member & CM3 Prequalified
                                        </h3>
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                                            Industry-recognized reliability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            {/* Closing Statement */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                        <div style={{
                                        marginTop: '40px',
                                        padding: '30px',
                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '20px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: '#1e2247',
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            margin: 0,
                                            lineHeight: '1.6'
                                        }}>
                                            When we say your gate is secure, <span style={{color: '#fdc51a'}}>you can open the dashboard and see it</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Melbourne Chooses Metro Guards Section =====*/}
                    <div className="melbourne-choice-section section-padding" style={{
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
                            top: '12%',
                            left: '5%',
                            width: '150px',
                            height: '150px',
                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.12), transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            right: '8%',
                            width: '130px',
                            height: '130px',
                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1), transparent 70%)',
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
                                            <i className="fas fa-award me-2"></i>
                                            15+ Years Experience
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
                                        Why Melbourne's Most Demanding Sites <span style={{color: '#fdc51a'}}>Choose Metro Guards</span>
                                    </h2>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.95)',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        marginBottom: '50px',
                                        maxWidth: '900px',
                                        margin: '0 auto 50px'
                                    }}>
                                        Fifteen years at the gate have taught us one thing: <strong style={{color: '#fdc51a'}}>every risk starts here, and so does every victory</strong>. Metro Guards has been standing at that line long enough to know the difference and securing:
                                    </p>
                                </div>
                            </div>

                            {/* Sites Grid */}
                            <div className="row g-4 mb-5">
                                <div className="col-lg-6">
                                    <div style={{
                                        background: 'rgba(253, 197, 26, 0.1)',
                                                borderRadius: '20px',
                                        padding: '35px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
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
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                                    justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-industry" style={{fontSize: '1.5rem', color: '#1e2247'}}></i>
                                                </div>
                                        <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0}}>
                                            <strong style={{color: '#fdc51a'}}>Industrial complexes and logistics hubs</strong> where flow and timing are critical.
                                        </p>
                                    </div>
                                                </div>
                                                
                                <div className="col-lg-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        padding: '35px 30px',
                                        border: '2px solid rgba(255, 255, 255, 0.15)',
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
                                            width: '60px',
                                            height: '60px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            marginBottom: '20px',
                                            border: '2px solid rgba(253, 197, 26, 0.4)'
                                        }}>
                                            <i className="fas fa-building" style={{fontSize: '1.5rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0}}>
                                            <strong style={{color: '#ffffff'}}>Corporate facilities</strong> that demand precision and discretion.
                                        </p>
                                    </div>
                                            </div>
                                            
                                <div className="col-lg-6">
                                        <div style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        padding: '35px 30px',
                                        border: '2px solid rgba(255, 255, 255, 0.15)',
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
                                            width: '60px',
                                            height: '60px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                                marginBottom: '20px',
                                            border: '2px solid rgba(253, 197, 26, 0.4)'
                                        }}>
                                            <i className="fas fa-home" style={{fontSize: '1.5rem', color: '#fdc51a'}}></i>
                                        </div>
                                        <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0}}>
                                            <strong style={{color: '#ffffff'}}>Residential communities</strong> requiring balance between warmth and vigilance.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div style={{
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '20px',
                                        padding: '35px 30px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
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
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-hospital" style={{fontSize: '1.5rem', color: '#1e2247'}}></i>
                                        </div>
                                        <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0}}>
                                            <strong style={{color: '#fdc51a'}}>Healthcare and education sites</strong> that rely on controlled yet compassionate access.
                                        </p>
                                    </div>
                                </div>
                                        </div>

                            {/* Closing Statement */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                        <div style={{
                                        padding: '30px 40px',
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '20px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            fontSize: '1.2rem',
                                            fontWeight: '600',
                                            margin: 0,
                                            lineHeight: '1.7'
                                        }}>
                                            Our guards are selected for <strong style={{color: '#fdc51a'}}>judgment</strong>, the kind that can tell the difference between a visitor and a threat <strong style={{color: '#fdc51a'}}>in a single glance</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Fast Operations Section =====*/}
                    <div className="fast-operations-section section-padding" style={{
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
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                            <div style={{ 
                                        background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(255, 255, 255, 0.95))',
                                        borderRadius: '25px',
                                        padding: '60px 50px',
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
                                                fontSize: '2.8rem',
                                                fontWeight: '800',
                                                marginBottom: '30px',
                                                lineHeight: '1.3',
                                                textAlign: 'center'
                                            }}>
                                                Fast for Operations. <span style={{color: '#fdc51a'}}>Tight for Security</span>
                                    </h2>
                                            
                                            <p style={{ 
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.9',
                                                marginBottom: '30px',
                                                maxWidth: '900px',
                                                margin: '0 auto 30px',
                                                textAlign: 'center'
                                            }}>
                                                At Metro Guards, we understand that <strong style={{color: '#1e2247'}}>your gate should never become a bottleneck</strong>. Our systems combine discipline with efficiency:
                                            </p>

                                            {/* Features List */}
                                            <div className="row g-4 mb-4" style={{maxWidth: '900px', margin: '0 auto 30px'}}>
                                                <div className="col-md-4">
                                                    <div style={{
                                                        textAlign: 'center',
                                                        padding: '20px'
                                                    }}>
                                                        <div style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            margin: '0 auto 20px',
                                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                        }}>
                                                            <i className="fas fa-digital-tachograph" style={{fontSize: '2rem', color: '#1e2247'}}></i>
                                                        </div>
                                                        <p style={{color: '#1e2247', fontSize: '1rem', fontWeight: '600', margin: 0}}>
                                                            Digital visitor pre-clearance
                                    </p>
                                </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div style={{
                                                        textAlign: 'center',
                                                        padding: '20px'
                                                    }}>
                                                        <div style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            margin: '0 auto 20px',
                                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.3)'
                                                        }}>
                                                            <i className="fas fa-id-card" style={{fontSize: '2rem', color: '#fdc51a'}}></i>
                                                        </div>
                                                        <p style={{color: '#1e2247', fontSize: '1rem', fontWeight: '600', margin: 0}}>
                                                            Streamlined ID verification
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div style={{
                                                        textAlign: 'center',
                                                        padding: '20px'
                                                    }}>
                                                        <div style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            margin: '0 auto 20px',
                                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                        }}>
                                                            <i className="fas fa-road" style={{fontSize: '2rem', color: '#1e2247'}}></i>
                                                        </div>
                                                        <p style={{color: '#1e2247', fontSize: '1rem', fontWeight: '600', margin: 0}}>
                                                            Clear directional flow for vehicles
                                                        </p>
                                                    </div>
                                    </div>
                                </div>

                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                margin: '0 auto',
                                                maxWidth: '800px',
                                                textAlign: 'center',
                                                fontStyle: 'italic'
                                            }}>
                                                So, you get <strong style={{color: '#fdc51a'}}>productivity without exposure</strong>, <strong style={{color: '#1e2247'}}>speed without mistakes</strong>, and <strong style={{color: '#fdc51a'}}>security without compromise</strong>.
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
                                                    <i className="fas fa-shield-alt me-2"></i>
                                                    Gate House Security
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
                                                Your Gatehouse Protection <span style={{color: '#fdc51a'}}>Starts Here!</span>
                                        </h2>

                                            <p style={{ 
                                                            color: '#6c757d', 
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                At Metro Guards, we treat your entry point as the <strong style={{color: '#1e2247'}}>frontline of reputation</strong>, the place where discipline meets responsibility. Because when the gate is solid, <strong style={{color: '#fdc51a'}}>everything inside can operate without fear</strong>.
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
                                                    Metro Guards – <span style={{color: '#ffffff'}}>The calm, vigilant line that keeps Melbourne's sites moving safely.</span>
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