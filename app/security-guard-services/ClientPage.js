'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function SecuirtyGuardServicesPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SECURITY GUARD SERVICES"
                mainTitle="SECURITY GUARD SERVICES IN MELBOURNE"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/C38803E5-A7C7-472E-839D-290BBEA65378_1_105_c.webp"
                
            >
                <div>
                   

                    {/*===== Introduction Section =====*/}
                    <section className="intro-section" style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                        padding: '100px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '6px',
                            background: 'linear-gradient(90deg, #1e2247 0%, #fdc51a 50%, #1e2247 100%)'
                        }}></div>

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.08) 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '250px',
                            height: '250px',
                            background: 'radial-gradient(circle, rgba(30, 34, 71, 0.05) 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                                    

                        <div className="container" style={{position: 'relative', zIndex: 2}}>
                            {/* Services List */}
                            <div style={{marginTop: '0px'}}>
                                        
                                        <h2 style={{
                                            color: '#1e2247',
                                            textAlign: 'center',
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '800',
                                            marginBottom: '20px',
                                            lineHeight: '1.2'
                                        }}>
                                           Our Full Range of{' '}
                                            <span style={{color: '#fdc51a'}}>Security Solutions</span>
                                        </h2>
                                        <div className="row g-3">
                                            {[
                                                { name: 'Building Security Guards', link: '/building-security-guards' },
                                                { name: 'Construction Security Guards', link: '/construction-site-security-guards' },
                                                { name: 'Shopping Centre Security Guards', link: '/shopping-centre-security-guards' },
                                                { name: 'Hospital Security Guards', link: '/hospital-security-guards' },
                                                { name: 'Gatehouse Security Guards', link: '/gate-house-security-guard' },
                                                { name: 'Educational Institution Security', link: '/educational-institute-security-guards' },
                                                { name: 'Corporate Security Guards', link: '/corporate-security-guards' },
                                                { name: 'Retail Security Guards', link: '/retail-security-guard' },
                                                { name: 'Loss Prevention Security Guards', link: '/loss-prevention-security-guards' },
                                                { name: 'Concierge Security Guards', link: '/concierge-guards' },
                                                { name: 'Lock-Up and Open-Up Security', link: '/lock-up-security-services' },
                                                { name: 'Industrial Warehouse Security', link: '/warehouse-security-system' },
                                                { name: 'Static Security Guards', link: '/static-security-guards' },
                                                { name: 'Uniform and Covert Security', link: '/uniform-and-convert-security-guards' },
                                                { name: 'Adhoc Security Services', link: '/adhoc-security-services' },
                                                { name: 'Asset Protection Security', link: '/asset-protection' }
                                            ].map((service, index) => (
                                                <div key={index} className="col-md-6 col-lg-4">
                                                    <a 
                                                        href={service.link}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px',
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                                            border: '2px solid rgba(253, 197, 26, 0.3)',
                                                            borderRadius: '12px',
                                                            padding: '18px 20px',
                                                            color: 'rgba(255, 255, 255, 0.95)',
                                                            textDecoration: 'none',
                                                            fontSize: '0.92rem',
                                                            fontWeight: '600',
                                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            cursor: 'pointer',
                                                            position: 'relative',
                                                            overflow: 'hidden',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.background = 'linear-gradient(135deg, #fdc51a 0%, #ffdb5c 100%)';
                                                            e.currentTarget.style.borderColor = '#fdc51a';
                                                            e.currentTarget.style.color = '#1e2247';
                                                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.4)';
                                                            // Animate the shine effect
                                                            const shine = e.currentTarget.querySelector('div');
                                                            if (shine) shine.style.left = '100%';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.background = 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)';
                                                            e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
                                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.3)';
                                                            // Reset shine effect
                                                            const shine = e.currentTarget.querySelector('div');
                                                            if (shine) shine.style.left = '-100%';
                                                        }}
                                                    >
                                                        {/* Shine effect on hover */}
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: '-100%',
                                                            width: '100%',
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                                                            transition: 'left 0.5s',
                                                            pointerEvents: 'none',
                                                            zIndex: 0
                                                        }}></div>
                                                        <span style={{
                                                            fontSize: '1.2rem',
                                                            fontWeight: 'bold',
                                                            flexShrink: 0,
                                                            position: 'relative',
                                                            zIndex: 1
                                                        }}>›</span>
                                                        <span style={{flex: 1, position: 'relative', zIndex: 1}}>{service.name}</span>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                            <div className="row justify-content-center mb-5">
                                <div className="col-lg-10">
                                    {/* Section Header */}
                                    <div style={{textAlign: 'center', marginBottom: '60px'}}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '8px 24px',
                                            background: '#fdc51a',
                                            borderRadius: '6px',
                                            marginBottom: '20px',
                                            boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <span style={{
                                                color: '#1e2247',
                                                fontSize: '0.75rem',
                                                fontWeight: '800',
                                                letterSpacing: '2px',
                                                textTransform: 'uppercase'
                                            }}>
                                                The Foundation of Every 
                                            </span>
                                        </div>
                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '800',
                                            marginBottom: '20px',
                                            lineHeight: '1.2'
                                        }}>
                                           Secure Environment.{' '}
                                            <span style={{color: '#fdc51a'}}>A Promise of Protection.</span>
                                        </h2>
                                        <div style={{
                                            width: '120px',
                                            height: '4px',
                                            background: 'linear-gradient(90deg, #1e2247, #fdc51a)',
                                            margin: '0 auto',
                                            borderRadius: '10px'
                                        }}></div>
                                    </div>

                                    {/* Content Grid - Alternating Layout */}
                                    <div className="row g-4 mb-5">
                                        {/* Row 1 - Image Left, Text Right */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                height: '100%',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: '280px'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-30px',
                                                    left: '-30px',
                                                    width: '150px',
                                                    height: '150px',
                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                    borderRadius: '50%',
                                                    filter: 'blur(40px)'
                                                }}></div>
                                                <div style={{textAlign: 'center', position: 'relative', zIndex: 1}}>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        background: '#fdc51a',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        boxShadow: '0 10px 30px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <Shield size={50} style={{color: '#1e2247'}} />
                                                    </div>
                                                    <h4 style={{
                                                        color: '#fdc51a',
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        marginBottom: '10px'
                                                    }}>
                                                        Protection First
                                                    </h4>
                                                    <p style={{
                                                        color: 'rgba(255, 255, 255, 0.8)',
                                                        fontSize: '0.95rem',
                                                        marginBottom: '0'
                                                    }}>
                                                        Your safety is our mission
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div style={{
                                                background: '#ffffff',
                                                border: '2px solid rgba(30, 34, 71, 0.1)',
                                                borderLeft: '6px solid #fdc51a',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                boxShadow: '0 10px 40px rgba(30, 34, 71, 0.08)'
                                            }}>
                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    marginBottom: '20px'
                                                }}>
                                                    Commitment Beyond Duty
                                                </h3>
                                                <p style={{
                                                    color: '#495057',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '0'
                                                }}>
                                                    Every business has something worth protecting, not just assets or buildings, but the people and purpose that keep it alive. At Metro Guards, our security guard services go beyond uniforms and patrols. They represent commitment, care, and quiet vigilance, the kind that keeps your operations safe and your people reassured.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Row 2 - Text Left, Image Right */}
                                        <div className="col-lg-6 order-lg-1 order-2">
                                            <div style={{
                                                background: '#ffffff',
                                                border: '2px solid rgba(30, 34, 71, 0.1)',
                                                borderRight: '6px solid #fdc51a',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                boxShadow: '0 10px 40px rgba(30, 34, 71, 0.08)'
                                            }}>
                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    marginBottom: '20px'
                                                }}>
                                                    Professional Excellence
                                                </h3>
                                                <p style={{
                                                    color: '#495057',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '0'
                                                }}>
                                                    Our licensed security professionals stand where risk begins, in lobbies before dawn, at construction gates long after hours, or in retail spaces where movement never stops. Each guard operates under a clear framework of accountability, supported by GPS verification, command-centre communication, and years of proven field experience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 order-lg-2 order-1">
                                            <div style={{
                                                height: '100%',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #ffdb5c 100%)',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: '280px'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '-30px',
                                                    right: '-30px',
                                                    width: '150px',
                                                    height: '150px',
                                                    background: 'rgba(30, 34, 71, 0.1)',
                                                    borderRadius: '50%',
                                                    filter: 'blur(40px)'
                                                }}></div>
                                                <div style={{textAlign: 'center', position: 'relative', zIndex: 1}}>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        background: '#1e2247',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <Eye size={50} style={{color: '#fdc51a'}} />
                                                    </div>
                                                    <h4 style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        marginBottom: '10px'
                                                    }}>
                                                        24/7 Vigilance
                                                    </h4>
                                                    <p style={{
                                                        color: 'rgba(30, 34, 71, 0.8)',
                                                        fontSize: '0.95rem',
                                                        marginBottom: '0'
                                                    }}>
                                                        Always watching, always ready
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 3 - Image Left, Text Right */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                height: '100%',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: '280px'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '200px',
                                                    height: '200px',
                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                    borderRadius: '50%',
                                                    filter: 'blur(50px)'
                                                }}></div>
                                                <div style={{textAlign: 'center', position: 'relative', zIndex: 1}}>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        background: '#fdc51a',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        boxShadow: '0 10px 30px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <Users size={50} style={{color: '#1e2247'}} />
                                                    </div>
                                                    <h4 style={{
                                                        color: '#fdc51a',
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        marginBottom: '10px'
                                                    }}>
                                                        Trust Placed
                                                    </h4>
                                                    <p style={{
                                                        color: 'rgba(255, 255, 255, 0.8)',
                                                        fontSize: '0.95rem',
                                                        marginBottom: '0'
                                                    }}>
                                                        Responsibility in human hands
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div style={{
                                                background: '#ffffff',
                                                border: '2px solid rgba(30, 34, 71, 0.1)',
                                                borderLeft: '6px solid #fdc51a',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                boxShadow: '0 10px 40px rgba(30, 34, 71, 0.08)'
                                            }}>
                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    marginBottom: '20px'
                                                }}>
                                                    Our Sense of Responsibility
                                                </h3>
                                                <p style={{
                                                    color: '#495057',
                                                    fontSize: '1.05rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '0'
                                                }}>
                                                    But beyond systems and protocols, what defines us is our sense of responsibility. We understand that behind every client is trust placed in human hands. Metro Guards honours that trust, protecting workplaces, teams, and futures with unwavering focus and genuine care.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Featured CTA Card */}
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                borderRadius: '24px',
                                                padding: '50px 40px',
                                                textAlign: 'center',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                border: '3px solid #fdc51a',
                                                boxShadow: '0 20px 60px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                {/* Glow Effects */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-50%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '400px',
                                                    height: '400px',
                                                    background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15) 0%, transparent 70%)',
                                                    borderRadius: '50%',
                                                    filter: 'blur(60px)'
                                                }}></div>

                                                <div style={{position: 'relative', zIndex: 1}}>
                                                    <Award size={60} style={{color: '#fdc51a', marginBottom: '25px'}} />
                                                    <h3 style={{
                                                        color: '#ffffff',
                                                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                                        fontWeight: '700',
                                                        marginBottom: '25px',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        You're Not Hiring Guards. You're Gaining{' '}
                                                        <span style={{color: '#fdc51a'}}>Guardians.</span>
                                                    </h3>
                                                    <p style={{
                                                        color: 'rgba(255, 255, 255, 0.9)',
                                                        fontSize: '1.15rem',
                                                        lineHeight: '1.8',
                                                        maxWidth: '800px',
                                                        margin: '0 auto 30px',
                                                        fontWeight: '500'
                                                    }}>
                                                        When you choose Metro Guards, you're gaining guardians, people who take pride in keeping Melbourne's businesses safe, every hour of every day.
                                                    </p>
                                                    <a 
                                                        href="/get-quotation"
                                                        style={{
                                                            display: 'inline-block',
                                                            background: '#fdc51a',
                                                            color: '#1e2247',
                                                            padding: '18px 40px',
                                                            borderRadius: '50px',
                                                            fontSize: '1rem',
                                                            fontWeight: '700',
                                                            textTransform: 'uppercase',
                                                            textDecoration: 'none',
                                                            letterSpacing: '1px',
                                                            transition: 'all 0.3s ease',
                                                            boxShadow: '0 8px 25px rgba(253, 197, 26, 0.4)'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.transform = 'translateY(-3px)';
                                                            e.target.style.boxShadow = '0 12px 35px rgba(253, 197, 26, 0.5)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.transform = 'translateY(0)';
                                                            e.target.style.boxShadow = '0 8px 25px rgba(253, 197, 26, 0.4)';
                                                        }}
                                                    >
                                                        Get Your Free Quote Today
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    

                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }