'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function EventSecurityGuardsPage() {
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
            title: "Access Control & Bag Screening",
            icon: <Lock size={24} />,
            iconSymbol: <Lock size={24} />,
            description: "Seamless entry without long lines.",
        },
        {
            title: "Crowd Management & Flow Coordination", 
            icon: <Users size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Keeping energy high and risk low.",
        },
        {
            title: "VIP & Backstage Protection",
            icon: <Shield size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Discreet coverage for high-profile zones.",
        },
        {
            title: "Roving Patrols & Rapid Response",
            icon: <Eye size={24} />,
            iconSymbol: <Eye size={24} />,
            description: "Continuous visibility and vigilance.",
        },
        {
            title: "RSA & First Aid Support",
            icon: <CheckCircle size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Immediate care when it matters most.",
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="EVENT SECURITY GUARDS"
                mainTitle="Event Security Guards in Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/03BC3547-5A49-4C7C-83F5-9771C8C59059_1_105_c.webp"
                
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
                                        <h2 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                            Event Security Melbourne 
                                            <span style={{color: '#fdc51a'}}>Near Me</span>
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
                                            Metro Guards provides specialised event security guards Melbourne trained to handle high-energy environments, large crowds, multiple entry points, alcohol-related risks, and fast-moving situations. Whether you’re organising a concert, festival, corporate gala, community celebration, or private function, our event security services Melbourne deliver safety, structure, and confidence from the first guest arrival to the final pack-down.
                                            Our officers are familiar with Melbourne’s busiest event precincts, from Rod Laver Arena, Sidney Myer Music Bowl, Marvel Stadium, and Birrarung Marr, to boutique venues in Southbank, St Kilda, Fitzroy, Carlton, Brunswick, and Richmond, ensuring your event runs securely in any setting.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/5FF0A9F2-0B06-4543-9AC1-2D57F158C07A_1_105_c.webp"
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/0CF93BF8-0B7B-43C2-B2FE-70B0F69C596A_1_105_c.webp" 
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
                                              Why Choose Metro Guards for Event Security in Melbourne
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1.5rem"
                                            }}>
                                                Melbourne organisers trust Metro Guards because:
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
                                                    <span>We specialise in event crowd control security Melbourne</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Officers are trained for large-scale and high-risk events</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>We protect entrances, stages, bars, exits & VIP zones</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>We prevent gatecrashers & manage queue control</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>We handle alcohol incidents discreetly</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>We provide event security guards Melbourne 24/7</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Our teams scale from small functions to major festivals</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>We respond quickly for urgent, last-minute deployments</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>We provide local event security guards Melbourne across all suburbs</span>
                                                </li>
                                            </ul>

                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8"
                                            }}>
                                                Every event is unique, and our security adapts to match.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/7E68B990-A328-4FF2-B123-A332787E94A2_1_105_c.webp" 
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
                                        
                                        {/* Designed for Every Kind of Event - Paragraph Style */}
                                        <div className="event-types section-header mt-5" style={{
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
                                                Event Security Services Melbourne |  <span style={{color: '#fdc51a'}}>Full-Spectrum Protection</span>
                                                </h2>
                                                <p className="lead mb-3" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    fontWeight: '600'
                                                }}>
                                                    We secure both public and private events, including:
                                                </p>

                                                <ul style={{
                                                    listStyle: 'none',
                                                    color: '#6c757d',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    paddingLeft: '0',
                                                    marginTop: '1rem',
                                                    marginBottom: '1.5rem'
                                                }}>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Concert security guards Melbourne</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Festival security guards Melbourne</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Private event security guards Melbourne</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Public event security guards Melbourne</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Corporate events & launches</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Sporting events & community gatherings</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Markets, exhibitions, expos & cultural events</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>High-profile entertainment events</span>
                                                    </li>
                                                </ul>

                                                
                                            </div>
                                        </div>
                        </div>
                    </div>

                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    EVENT SECURITY EXCELLENCE
                                                </span>
                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Professional Event Security <span style={{color: '#fdc51a'}}>Guards Melbourne</span>
                                            </h2>
                                            <p>Metro Guards supplies event personnel trained for high-pressure environments:</p>
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
                                                            <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1rem'}}>
                                                                {service.description}
                                                            </p>
                                    </div>
                                                    )}
                                </div>
                                            ))}
                                        </div>
                                        <p style={{
                                            color: '#1e2247',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            lineHeight: '1.7',
                                            marginTop: '25px',
                                            padding: '20px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), rgba(253, 197, 26, 0.05))',
                                            borderRadius: '12px',
                                            borderLeft: '4px solid #fdc51a'
                                        }}>
                                            Whether it's 100 guests or 10,000, our systems scale with precision, so the event never loses its focus, and safety never loses priority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Hospitality With Protection Section =====*/}
                    <div className="hospitality-section section-padding" style={{
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
                                radial-gradient(circle at 80% 70%, rgba(30, 34, 71, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    {/* Header */}
                                    <div className="text-center mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <Users size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                                PROFESSIONAL SERVICE
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold" style={{color: '#1e2247'}}>
                                        Crowd Management & Entry Control
                                        </h2>
                                    </div>

                                    {/* Content */}
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)'
                                    }}>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '1rem',
                                            fontWeight: '600'
                                        }}>
                                            Metro Guards specialises in professional crowd management security, including:
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
                                                <span>Entry and exit gate security</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Ticket-scanning security officers</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Bag check security event teams</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Queue control event security</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Alcohol management event security</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>VIP event security Melbourne</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Stage security guards Melbourne</span>
                                            </li>
                                            <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                <span>Event patrol security Melbourne</span>
                                            </li>
                                        </ul>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            marginBottom: '0'
                                        }}>
                                            We maintain a safe atmosphere without interrupting guest enjoyment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Technology Section =====*/}
                    <div className="technology-section section-padding" style={{
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
                                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
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
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '120px',
                            height: '120px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    {/* Header */}
                                    <div className="text-center mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <Zap size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                                ADVANCED SYSTEMS
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold" style={{color: '#ffffff'}}>
                                        Event Risk Management & <span style={{color: '#fdc51a'}}>Emergency Response</span>
                                        </h2>
                                    </div>

                                    {/* Content */}
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(253, 197, 26, 0.3)'
                                    }}>
                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '25px'
                                        }}>
                                            Metro Guards' event security officers are trained to manage high-pressure situations with calm, decisive action. Our team responds quickly to fights at events, aggressive crowd behaviour, ensuring risks are controlled before they escalate. We provide robust event theft prevention, proactive gatecrasher prevention, event security Melbourne, and protective measures for VIP safety security Melbourne at high-profile functions.
                                        </p>
                                        <p style={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '0'
                                        }}>
                                            In the event of emergencies, our guards coordinate event evacuation support Melbourne, working alongside venue staff and emergency services to maintain guest safety and event continuity. With Metro Guards, every event benefits from a reliable, trained response team ready for any scenario.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Melbourne Trusts Us Section =====*/}
                    <div className="trust-section section-padding" style={{
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
                                radial-gradient(circle at 25% 25%, rgba(30, 34, 71, 0.06) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.06) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '12%',
                            left: '5%',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(30, 34, 71, 0.05))',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '8%',
                            width: '130px',
                            height: '130px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), rgba(253, 197, 26, 0.05))',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    {/* Header */}
                                    <div className="text-center mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <Award size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                                15+ YEARS EXPERIENCE
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold" style={{color: '#1e2247'}}>
                                        Why Melbourne Chooses Metro Guards for Event <span style={{color: '#fdc51a'}}> Crowd Control</span>
                                        </h2>
                                    </div>

                                    {/* Content */}
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        marginBottom: '30px'
                                    }}>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '25px'
                                        }}>
                                            Event organisers across Melbourne choose Metro Guards because we deliver top rated event security guards Melbourne who are trained specifically for high-energy environments and complex crowd dynamics. Known as the best event security guards Melbourne, our officers balance hospitality with firm control, ensuring guests feel safe while remaining compliant with venue rules.
                                            </p>
                                       
                                    </div>

                                    {/* Certification Icons */}
                                    <div className="row g-3 text-center">
                                        <div className="col-6 col-md-3">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f4b800 100%)',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                height: '100%'
                                            }}>
                                                <Shield size={32} style={{color: '#1e2247', marginBottom: '10px'}} />
                                                <p style={{color: '#1e2247', fontWeight: '600', fontSize: '0.9rem', margin: 0}}>Fully Licensed</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                height: '100%'
                                            }}>
                                                <Award size={32} style={{color: '#fdc51a', marginBottom: '10px'}} />
                                                <p style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', margin: 0}}>ISO Certified</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f4b800 100%)',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                height: '100%'
                                            }}>
                                                <CheckCircle size={32} style={{color: '#1e2247', marginBottom: '10px'}} />
                                                <p style={{color: '#1e2247', fontWeight: '600', fontSize: '0.9rem', margin: 0}}>CM3 Prequalified</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                height: '100%'
                                            }}>
                                                <Star size={32} style={{color: '#fdc51a', marginBottom: '10px'}} />
                                                <p style={{color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', margin: 0}}>ASIAL Member</p>
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
                                                    <i className="fas fa-calendar-star me-2"></i>
                                                    Event Excellence
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
                                                Event Security Guards Melbourne  <span style={{color: '#fdc51a'}}>Organisers Depend On</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                Metro Guards keep events safe, structured, and enjoyable. Whether it’s a corporate gala, a stadium performance, a music festival, or a private celebration, our guards maintain order, protect guests, and ensure the event runs to plan.
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
                <FAQSectionDynamic 
                    faqs={[
                        {
                            question: "Who provides event security guards in Melbourne?",
                            answer: "Metro Guards provides licensed event security guards in Melbourne trained in crowd control, alcohol management, entry screening, and incident response. We secure concerts, festivals, private functions, corporate events, and community gatherings across all major Melbourne venues."
                        },
                        {
                            question: "How do event security guards manage crowds in Melbourne?",
                            answer: "Metro Guards' event guards manage crowds by controlling entry points, guiding guest flow, enforcing venue rules, preventing gatecrashing, and de-escalating aggressive behaviour. They help maintain safety and ensure the event runs smoothly without disruption."
                        },
                        {
                            question: "Do event security guards in Melbourne handle alcohol-related incidents?",
                            answer: "Yes. Metro Guards trains event officers to identify intoxication, prevent alcohol-fuelled conflict, and safely manage disruptive guests. This helps maintain order, reduce risk, and protect venue's reputation."
                        },
                        {
                            question: "Can I hire event security for private or house events in Melbourne?",
                            answer: "Absolutely. Metro Guards provides private event security guards Melbourne for birthdays, house parties, functions, family events, and private celebrations. Our guards prevent gatecrashers, manage noise concerns, and protect guests."
                        },
                        {
                            question: "Are Metro event security guards licensed and trained?",
                            answer: "Yes. All Metro event security guards hold valid Victorian licences and are trained in crowd management, emergency response, conflict de-escalation, and first aid. They are prepared for both small gatherings and large-scale events."
                        }
                    ]}
                />
            </Layout>
            </> ) }