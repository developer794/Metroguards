'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="EDUCATIONAL INSTITUTE SECURITY GUARDS"
                mainTitle="EDUCATIONAL INSTITUTE SECURITY GUARDS IN MELBOURNE "
                
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
                                            Guarding the Future Begins at the Gate  <br />
                                            <span style={{color: '#fdc51a'}}>at the Gate</span>
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
                                            Every morning, the gates open to a world of promise, classrooms hum, laughter spills into hallways, and a new day of learning begins. Yet, behind the calm stands an unseen presence, the quiet discipline that ensures every student and teacher feels safe enough to grow.  
                                            <br /><br />That’s what our guards do. Every check, every clearance, every silent scan of a passing face done with intent. Not out of habit, but belief, that education deserves protection worthy of it
                                            <br /><br />
                                            At Metro Guards, we protect not just schools, but the foundation of Australia’s future, learning, trust, and peace of mind. Because in every classroom sits a future leader, a dreamer, a voice the world will one day need, and nothing is allowed to interrupt that.
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
                                                src="/assets/img/blog/building-guard.jpg" 
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
                                                src="/assets/img/blog/building-guard.jpg" 
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
                                                The Pulse of a Campus
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                               
                                            }}>
                                                Schools never move in straight lines. The energy shifts with the hour, the rush of morning drop-offs, the quiet of exams, the storm of dismissal. Security here isn’t static; it listens, adjusts, and acts before the need is spoken.
                                                <br /><br />Our school security guards are trained to move with that rhythm, composed, observant, attuned. Their role isn’t to control; it’s to ensure calm endures.
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
                                                src="/assets/img/blog/building-guard.jpg" 
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
                                        
                                        {/* Adaptability Section - Paragraph Style */}
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
                                                Adaptability Is Our Discipline
                                                </h2>
                                                <p className="lead mb-4" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Campuses breathe, they shift with the seasons, timetables, and energy of their people. From primary schools to universities, no two days are alike.
                                                </p>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Our systems evolve with them, daily patrol routes, tailored communication with staff, and digital logs that adapt to each site's rhythm. Metro Guards doesn't impose control; we integrate, quietly, precisely, dependably.
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
                                                    EDUCATION-FOCUSED
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Specialised for Education – <span style={{color: '#fdc51a'}}>Protecting Future</span>
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7'}}>
                                            Every guard at Metro Guards assigned to an educational site is chosen with precision. Their qualifications extend beyond compliance, into understanding human behaviour, emotional cues, and institutional etiquette.
                                            </p>
                                        </div>
                                        
                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-child",
                                                    title: "Child-Safe Certified",
                                                    
                                                    details: "Fully accredited under Department of Education standards, safeguarding students with verified integrity."
                                                },
                                                {
                                                    icon: "fas fa-exclamation-triangle",
                                                    title: "Crisis-Trained",
                                                    
                                                    details: "Prepared for lockdowns, evacuations, and emergencies, when seconds count, they act, not react."
                                                },
                                                {
                                                    icon: "fas fa-brain",
                                                    title: "Emotionally Intelligent",
                                                   
                                                    details: "Trained to read rooms, defuse tensions, and protect without panic."
                                                },
                                                {
                                                    icon: "fas fa-user-check",
                                                    title: "Visitor-Vigilant",
                                                    
                                                    details: "Every entry is verified. Every unfamiliar face is assessed. Access is earned, never assumed."
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
                                                When Calm Feels <span style={{color: '#fdc51a'}}>Effortless</span>
                                            </h2>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontSize: '1.25rem',
                                                lineHeight: '1.8',
                                                marginBottom: '25px',
                                                maxWidth: '850px',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                fontWeight: '500'
                                            }}>
                                                Some measure safety in response time. We measure it in <strong style={{color: '#fdc51a'}}>prevention</strong>, in the silence between incidents, the order in motion, the trust unspoken.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                margin: 0,
                                                maxWidth: '850px',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                fontStyle: 'italic'
                                            }}>
                                                Metro Guards officers don't command attention; they preserve normalcy. And in education, that is the highest form of mastery, when learning continues, <strong style={{color: '#fdc51a'}}>undisturbed and uninterrupted</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Proof of Precision Section */}
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
                                            <i className="fas fa-certificate me-2"></i>
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
                                        Proof of <span style={{color: '#fdc51a'}}>Precision</span>
                                    </h2>

                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        marginBottom: '50px',
                                        maxWidth: '700px',
                                        margin: '0 auto 50px'
                                    }}>
                                        Every claim we make is logged, verified, and time-stamped. We don't trade on promises, <strong style={{color: '#1e2247'}}>we trade on records</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-5">
                                {/* Feature 1 - GPS-Tracked Patrols */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
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
                                            width: '100px',
                                            height: '100px',
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
                                            <i className="fas fa-map-marker-alt" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.6rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            GPS-Tracked Patrols
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Every round verified. Presence <strong style={{color: '#1e2247'}}>proven, not promised</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 - Unannounced Supervisory Checks */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
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
                                            width: '100px',
                                            height: '100px',
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
                                            <i className="fas fa-user-check" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.6rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            Unannounced Supervisory Checks
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Quality tested <strong style={{color: '#1e2247'}}>when no one's watching</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 - ISO-Certified & OH&S Compliant */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
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
                                            width: '100px',
                                            height: '100px',
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
                                            <i className="fas fa-certificate" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.6rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ISO-Certified & OH&S Compliant Systems
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Structure that turns <strong style={{color: '#1e2247'}}>discipline into habit</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 - ASIAL Membership */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
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
                                            width: '100px',
                                            height: '100px',
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
                                            <i className="fas fa-award" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.6rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ASIAL Membership & CM3 Prequalification
                                        </h3>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            Credentials that reflect <strong style={{color: '#1e2247'}}>discipline, not decoration</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Closing Statement */}
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))',
                                        borderRadius: '20px',
                                        padding: '45px',
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
                                            When Metro Guards stands watch, there's nothing left to assume except <strong style={{color: '#fdc51a'}}>confidence</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Experience Section =====*/}
                    <div className="experience-section section-padding" style={{
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

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '180px',
                            height: '180px',
                            background: 'rgba(253, 197, 26, 0.08)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '140px',
                            height: '140px',
                            background: 'rgba(253, 197, 26, 0.06)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    {/* Experience Badge */}
                                    <div className="text-center mb-5">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '20px',
                                            background: 'rgba(253, 197, 26, 0.15)',
                                            border: '2px solid rgba(253, 197, 26, 0.4)',
                                            borderRadius: '60px',
                                            padding: '20px 45px',
                                            marginBottom: '40px'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)'
                                            }}>
                                                <span style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '800'
                                                }}>
                                                    15+
                                                </span>
                                            </div>
                                            <span style={{
                                                color: '#fdc51a',
                                                fontSize: '1.3rem',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px'
                                            }}>
                                                Years of Excellence
                                            </span>
                                        </div>

                                        <h2 style={{
                                            color: '#ffffff',
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            marginBottom: '35px',
                                            lineHeight: '1.3'
                                        }}>
                                            Protecting Melbourne's <span style={{color: '#fdc51a'}}>Most Demanding Sites</span>
                                        </h2>
                                    </div>

                                    {/* Main Content */}
                                    <div className="row g-4 mb-5">
                                        {/* Left Column - Content */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                height: '100%',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                backdropFilter: 'blur(10px)'
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '25px',
                                                    boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    <i className="fas fa-building" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                </div>

                                                <p style={{
                                                    color: 'rgba(255, 255, 255, 0.95)',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    For over a decade, Metro Guards has stood in places where composure is non-negotiable: <strong style={{color: '#fdc51a'}}>government offices, corporate towers, logistics hubs</strong>, and now, the institutions that shape our nation's next generation.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Column - Key Message */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                height: '100%',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                backdropFilter: 'blur(10px)'
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '25px',
                                                    boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    <i className="fas fa-lightbulb" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                </div>

                                                <p style={{
                                                    color: 'rgba(255, 255, 255, 0.95)',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '25px'
                                                }}>
                                                    Our experience has taught us that the greatest form of authority isn't power, <strong style={{color: '#fdc51a'}}>it's presence</strong>.
                                                </p>

                                                <p style={{
                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    fontStyle: 'italic'
                                                }}>
                                                    Every education security guard we deploy carries that truth into the field: trained to protect with restraint, to stand firm with respect, and to guard with purpose.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Highlight Bar */}
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div style={{
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(253, 197, 26, 0.05))',
                                                borderRadius: '15px',
                                                padding: '35px 45px',
                                                border: '2px solid rgba(253, 197, 26, 0.3)',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    gap: '40px'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '15px'
                                                    }}>
                                                        <i className="fas fa-shield-alt" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                                        <div style={{textAlign: 'left'}}>
                                                            <div style={{color: '#fdc51a', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>Authority Through</div>
                                                            <div style={{color: '#ffffff', fontSize: '1.3rem', fontWeight: '800'}}>Presence</div>
                                                        </div>
                                                    </div>

                                                    <div style={{
                                                        width: '2px',
                                                        height: '50px',
                                                        background: 'rgba(253, 197, 26, 0.3)'
                                                    }}></div>

                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '15px'
                                                    }}>
                                                        <i className="fas fa-balance-scale" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                                        <div style={{textAlign: 'left'}}>
                                                            <div style={{color: '#fdc51a', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>Protection With</div>
                                                            <div style={{color: '#ffffff', fontSize: '1.3rem', fontWeight: '800'}}>Restraint</div>
                                                        </div>
                                                    </div>

                                                    <div style={{
                                                        width: '2px',
                                                        height: '50px',
                                                        background: 'rgba(253, 197, 26, 0.3)'
                                                    }}></div>

                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '15px'
                                                    }}>
                                                        <i className="fas fa-bullseye" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                                        <div style={{textAlign: 'left'}}>
                                                            <div style={{color: '#fdc51a', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px'}}>Guarding With</div>
                                                            <div style={{color: '#ffffff', fontSize: '1.3rem', fontWeight: '800'}}>Purpose</div>
                                                        </div>
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
                                                    <i className="fas fa-graduation-cap me-2"></i>
                                                    Secure the Future
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
                                                Protecting Education Is Protecting <span style={{color: '#fdc51a'}}>Australia's Tomorrow</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                Our presence in schools, colleges, and universities across Melbourne is not an expansion, <strong style={{color: '#1e2247'}}>it's a commitment</strong>. We've guarded commerce, government, and logistics. But education is different.
                                            </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                It carries the country's continuity, its intellect, its ethics, its future. <strong style={{color: '#1e2247'}}>Metro Guards stands for that continuity.</strong> Our officers don't just protect spaces; <strong style={{color: '#fdc51a'}}>they safeguard purpose</strong>.
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

                    {/*===== Benefits Section =====*/}
                                        
                    
                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }