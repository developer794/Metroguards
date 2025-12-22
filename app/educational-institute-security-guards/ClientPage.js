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

export default function EducationalSecurityPage() {
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
                mainTitle="Educational Institute Security Guards in Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
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
                                           Comprehensive Security for Schools                                            <br />
                                            <span style={{color: '#fdc51a'}}>and Educational Centres</span>
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
                                            Metro Guards provides highly trained educational institute security guards Melbourne schools, colleges, universities, and academic institutions trust to protect students, teachers, and visitors.
                                            <br /><br />Our officers specialise in student safety security guards, school entry gate security, campus patrol officers, visitor ID verification, student ID access control, and building perimeter security designed for modern educational environments.
                                            <br /><br />Whether you operate a primary school in Sunshine, a secondary college in Glen Waverley, a university campus in Carlton, or a vocational training institute in Dandenong, Metro Guards delivers 24/7 educational institute security services Melbourne facilities depend on for safe, calm, and disruption-free learning environments.
                                            <br /><br />For parents searching “who provides school security guards in Melbourne?”, Metro Guards is the trusted choice.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/CA53F706-BC0B-42B2-87ED-F1408691158F_1_105_c.webp" 
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
                    <div className="services-section " style={{
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/71A872B7-4647-45B4-A0C2-D01F1BF3056C_1_105_c.webp" 
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
                                                Why Qualified Educational Security Guards Are Crucial for Safety
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1.5rem"
                                            }}>
                                                Melbourne's educational institutions face rising safety challenges and every school, university, and campus relies on professional <strong style={{color: '#1e2247'}}>educational institute security guards</strong> to maintain control, prevent incidents, and protect vulnerable students.
                                            </p>

                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8",
                                                marginBottom: "1rem",
                                                fontWeight: "600"
                                            }}>
                                                Common challenges include:
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
                                                    <span>Anti-social behaviour, bullying, or student conflicts</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Child safety concerns in playgrounds & hallways</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Unauthorised visitors entering campuses</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Rising mental-health and behavioural incidents</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Vandalism, theft, and after-hours trespassing</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Carpark congestion & unsafe traffic flow</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>High-risk situations requiring emergency lockdown support</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Safety gaps across library areas, exam halls, and classrooms</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Unsupervised movement through restricted zones</span>
                                                </li>
                                                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Lack of trained personnel to manage large crowds at events</span>
                                                </li>
                                            </ul>

                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.15rem",
                                                lineHeight: "1.8"
                                            }}>
                                                These challenges require <strong style={{color: '#fdc51a'}}>campus security guards Melbourne</strong> trained in youth engagement, de-escalation, emergency response, and compliance with Victorian child safety standards.
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
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/FF0D3949-7DA9-4A0F-8B9D-B24F71BAE8D2_1_105_c.webp" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '300px',
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
                                                Melbourne’s Leading Provider of School & Campus Security
                                                </h2>
                                                <p className="lead mb-3" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.15rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Educational environments require officers who engage respectfully with students, support teachers, and maintain a calm presence. <strong style={{color: '#fdc51a'}}>Metro Guards</strong> provides <strong style={{color: '#1e2247'}}>school security guards Melbourne</strong> trained to:
                                                </p>
                                                
                                                <ul style={{
                                                    listStyle: 'none',
                                                    color: '#6c757d',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    paddingLeft: '0',
                                                    marginTop: '1rem',
                                                    marginBottom: '1rem'
                                                }}>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Communicate confidently with students of all age groups</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Build trust with staff and families</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Respond discreetly to behavioural issues</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Protect vulnerable or distressed students</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Manage student flow during busy times</span>
                                                    </li>
                                                    <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start'}}>
                                                        <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                        <span>Monitor high-risk areas without disrupting learning</span>
                                                    </li>
                                                </ul>

                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    margin: 0,
                                                    marginTop: '0.5rem'
                                                }}>
                                                    Our officers operate with empathy, cultural awareness, and professionalism — essential qualities for any <strong style={{color: '#fdc51a'}}>university security guards Melbourne</strong>, <strong style={{color: '#fdc51a'}}>college security guards Melbourne</strong>, or <strong style={{color: '#fdc51a'}}>campus security guards Melbourne</strong>.
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
                                            Specialised Educational Institute  <span style={{color: '#fdc51a'}}>Security Guard Services </span>
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7'}}>
                                            Metro Guards delivers customised education security services Melbourne covering schools, colleges, universities, training institutes, and academic facilities.
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
                                                Accountability That Meets  <span style={{color: '#fdc51a'}}>Educational Standards</span>
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
                                                Our <strong style={{color: '#fdc51a'}}>security guards for educational institutes Melbourne</strong> are supported by digital reporting tools, live location tracking, and supervisor oversight, ensuring complete transparency.
                                            </p>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.15rem',
                                                lineHeight: '1.8',
                                                marginBottom: '15px',
                                                maxWidth: '850px',
                                                marginLeft: 'auto',
                                                marginRight: 'auto'
                                            }}>
                                                We deliver:
                                            </p>

                                            <ul style={{
                                                listStyle: 'none',
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.8',
                                                paddingLeft: '0',
                                                marginBottom: '1.5rem',
                                                maxWidth: '800px',
                                                margin: '0 auto',
                                                textAlign: 'left'
                                            }}>
                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Student-safe, school-compliant processes</span>
                                                </li>
                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Documented incident reporting</span>
                                                </li>
                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Real-time response coordination</span>
                                                </li>
                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>CCTV-linked patrol verification</span>
                                                </li>
                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Compliance with Victorian Child Safe Standards</span>
                                                </li>
                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.3rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                    <span>Integration with school emergency plans</span>
                                                </li>
                                            </ul>

                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                margin: '0',
                                                marginTop: '1rem',
                                                maxWidth: '850px',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                fontStyle: 'italic'
                                            }}>
                                                From primary schools to large university campuses, <strong style={{color: '#fdc51a'}}>Metro Guards</strong> maintains strict safeguarding protocols.
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
                                        Real-Time Verified Security Systems <span style={{color: '#fdc51a'}}>for Melbourne Sites</span>
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
                                            Why Metro Guards Is the Trusted Security Partner <span style={{color: '#fdc51a'}}>for Melbourne’s Schools? </span>
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
                                                    From student pick-up zones to campus perimeters, playgrounds, libraries, and exam halls, our presence ensures every learning space remains secure, calm, and free from disruption.We stand beside the institutions shaping Australia’s next generation, delivering security that supports education, wellbeing, and trust.

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
                                                   Every educational institute security guard we deploy is trained to guide with respect, de-escalate with confidence, and protect with purpose. Whether monitoring hallways, managing visitors, safeguarding teachers, or supporting students during sensitive moments, our officers bring composure, clarity, and care to every shift.
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

                    
                    <Testimonials />

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
                                                Educational Security That Safeguards the  <span style={{color: '#fdc51a'}}>Future of Melbourne</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.3rem',
                                                lineHeight: '1.8',
                                                marginBottom: '30px',
                                                maxWidth: '800px',
                                                margin: '0 auto 30px'
                                            }}>
                                                Our role goes beyond guarding entrances, we uphold safety so students can grow, teachers can lead, and education can thrive without disruption.
                                                </p>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                When Melbourne’s education sector looks for protection, it looks to Metro Guards.
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
                <FAQSectionDynamic 
                    faqs={[
                        {
                            question: "Who provides school security guards in Melbourne?",
                            answer: "Metro Guards provides school security guards in Melbourne, offering trained officers for campuses, classrooms, playgrounds, and carparks. Their education-focused security teams protect students, support staff, manage access points, and maintain safe learning environments across primary schools, secondary colleges, universities, and training institutes."
                        },
                        {
                            question: "How do I hire school security guards in Melbourne?",
                            answer: "To hire school security guards in Melbourne, contact Metro Guards for a tailored security assessment. They supply education-specific safety officers, including school entry gate guards, campus patrol officers, student-safety personnel, and access-control specialists to protect students, staff, and visitors across all types of educational facilities."
                        },
                        {
                            question: "Do you offer 24/7 campus security in Melbourne?",
                            answer: "Yes. Metro Guards provides 24/7 campus security across Melbourne, including daytime coverage, after-hours protection, and overnight patrols. Their trained education security guards safeguard classrooms, buildings, playgrounds, carparks, and entry points while ensuring continuous student and staff safety around the clock."
                        },
                        {
                            question: "Are your officers trained for emergencies?",
                            answer: "Yes. Metro Guards' education security officers are trained in emergency lockdown procedures, conflict de-escalation, first aid, evacuation support, and crisis response. They help schools and campuses manage fast-moving incidents safely while supporting staff and ensuring student protection during emergencies."
                        },
                        {
                            question: "Do you offer library and exam hall security?",
                            answer: "Yes. Metro Guards provides security for libraries, exam halls, classrooms, and other academic facilities. Their officers monitor quiet study areas, protect resources, manage crowd flow during exams, and support safe learning environments for students across schools, colleges, and universities."
                        }
                    ]}
                />
            </Layout>
            </> ) }