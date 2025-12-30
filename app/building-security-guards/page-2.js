'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame } from 'lucide-react';
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
            title: "Commercial Building Security Guards",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Highly experienced individuals with extensive knowledge of controlling and monitoring access points",
            details: "Our Commercial building security guards are highly experienced individuals with extensive knowledge of controlling and monitoring access points, responding quickly to mitigate the risks on the spot, and enhancing the overall safety of the building and its inhabitants. Commercial buildings have several sensitive areas and rooms that have restricted entry. Our guards ensure that only authorized people access sensitive areas in the building."
        },
        {
            title: "Residential Building Security Guards", 
            icon: <Home size={24} />,
            iconSymbol: <Home size={24} />,
            description: "Robust gate control, efficient visitor management, and patrol areas around the clock",
            details: "We have raised the bar of security standards in our service industry in Melbourne by excelling in residential building security services. Our building security guards in Melbourne ensure robust gate control, efficient visitor management, and patrol areas like parking lots, corridors, and hallways around the clock. They specialize in providing apartment security patrol services and preventing crimes."
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

    const promiseItems = [
        {
            question: "Always On Time, Always On Site",
            answer: "Our guards don’t vanish, cut corners, or leave early. They arrive on time, stay until the shift ends, and remain fully present the entire way through. Reliability is not a promise; it’s the baseline."
        },
        {
            question: "SOP Compliance",
            answer: "Every building has its own rhythm, rules, and risks. Our guards are trained in your site’s specific SOPs so that protocols aren’t just known, they’re lived on the ground."
        },
        {
            question: "Live Guard Tracking",
            answer: "Every patrol, every checkpoint, every round is verified through GPS tracking. You don’t have to wonder if your guard is working; you can see it."
        },
        {
            question: "Real-Time Reporting",
            answer: "From daily activity logs to instant incident alerts, you get a clear window into what’s happening on your site. No silence. No delays. Just direct access to reports as they happen."
        },
        {
            question: "Supervisor Site Inspections",
            answer: "Random inspections from supervisors ensure guards don’t slip into autopilot. Every site, every shift, is backed by oversight and accountability."
        }
    ];

    const failureCards = [
        { icon: <AlertTriangle size={40} />, title: "Most security companies tick boxes. They show up in uniform, scribble a log, and leave you with a report that looks the same every night.", description: "" },
        { icon: <Eye size={40} />, title: "What they don’t give you is certainty.", description: "" },
        { icon: <Clock size={40} />, title: "Guards drift through shifts without proof they’ve been vigilant.", description: "" },
        { icon: <UserX size={40} />, title: "Supervisor checks are “optional”, which means they often never happen.", description: "" },
        { icon: <Bell size={40} />, title: "Reports arrive late, incomplete, or after the damage is already done.", description: "" },
        { icon: <Shield size={40} />, title: "And while the uniform looks official, it doesn’t guarantee discipline or compliance.", description: "" },
        { icon: <Landmark size={40} />, title: "This isn’t security. It’s a theatre.", description: "" },
        { icon: <Book size={40} />, title: "A performance designed to look safe without proving it.", description: "" },
        { icon: <Target size={40} />, title: "That’s not security. That’s risk management by luck.", description: "" },
        { icon: <Users size={40} />, title: "With Metro Guards, you get more than uniforms.", description: "" },
        { icon: <Zap size={40} />, title: "You get accountability, technology, and certified compliance.", description: "" }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BUILDING SITE SECURITY GUARDS"
                mainTitle="BUILDING SITE SECURITY GUARDS SERVICES"
                
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
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
                                                When Your Building Sleeps, We Don’t
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
                                            Security Isn’t Just About Placing <br />
                                            


                                            <span style={{color: '#fdc51a'}}>A Uniform At The Door</span>
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
                                            It’s about knowing, with certainty, that the guard on your site is awake, accountable, and following the SOPs that keep everything under control.<br/>
                                            Our building site guards don’t drift through a shift.<br/>
                                            <strong style={{fontWeight: 800}}>They move with intent:</strong><br/>
                                            Patrolling at set intervals.<br/>
                                            Checking every entry and exit.<br/>
                                            Monitoring cameras and surroundings.<br/>
                                            Logging every detail in real time.<br/>
                                            And you don’t just take our word for it.<br/>
                                            Every action is tracked, logged, and reviewed.<br/>
                                            YES, WE PROVE IT!<br/>
                                            <strong style={{fontWeight: 800}}>ISO Certified | Fully Licensed | Guard Tracking + Real-Time Reporting | Supervisor Inspections</strong><br/>
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
                                            >
                                                <Phone size={16} style={{marginRight: '8px'}} /> 1300731173
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

                    {/*===== Our Services Section =====*/}
                    <div className="services-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
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
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
                                            <div className="align-items-center mb-3">
                                                <p className="mb-1" style={{color: '#1e2247', fontWeight: 600}}>By sunrise:</p>
                                </div>
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    <AlertTriangle size={20} />
                            </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Residents are complaining about missing items.</span>
                                        </div>
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    <Camera size={20} />
                                    </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>CCTV shows trespassers roaming halls.</span>
                                </div>
                                            <div className="feature-item d-flex align-items-center">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    <AlertTriangle size={20} />
                                        </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Management is under fire for “failing to protect the building.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-4">
                                            <div className="subtitle mb-2">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    The Nightmare No Manager Talks About
                                                </span>
                                    </div>
                                            <h2 className="display-5 fw-bold mb-3" style={{color: '#1e2247'}}>
                                                And We Are Prepared For It!
                                            </h2>
                            </div>
                                                                <div>
                                            <p style={{color: '#495057'}}>It’s 2:00 AM.</p>
                                            <p style={{color: '#495057'}}>A tenant comes home from work. She notices someone tailgating behind her in the lobby.</p>
                                            <p style={{color: '#495057'}}>No guard at the desk. No patrol in sight.</p>
                                            
                                            <p style={{color: '#495057'}}>This is what happens when security companies cut corners.</p>
                                            <p style={{color: '#495057'}}>When guards don’t show.</p>
                                            <p style={{color: '#495057'}}>When guards ignore site protocols.</p>
                                            <h3 className="fw-bold mb-1" style={{color: '#1e2247'}}>The Reality.</h3>
                                            <p style={{color: '#495057'}}>Melbourne’s property managers and building owners lose thousands every year because of unreliable, under-trained guards.</p>
                                            <p style={{color: '#495057'}}>At Metro Guards, we built our reputation on solving the one problem nobody else seems to fix.</p>
                                            <h3 className="fw-bold" style={{color: '#1e2247'}}>It’s Reliability.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Key Security Features Section =====*/}
                    <div className="features-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="features-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Services" 
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
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
                                            <div className="align-items-center mb-3">
                                                <p>We provide discreet and detailed building security services in Melbourne, with real-time technology integration and live reporting of incidents.</p>
                                </div>
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    <Target size={20} />
                            </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Comprehensive Security Solutions</span>
                                            </div>
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    <Zap size={20} />
                                        </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Real-time Technology Integration</span>
                                    </div>
                                            <div className="feature-item d-flex align-items-center">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    <Shield size={20} />
                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Live Incident Reporting</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="features-content ps-lg-4">
                                        <div className="section-header mb-4">
                                            <div className="subtitle mb-2">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    Our Promise
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-3" style={{color: '#1e2247'}}>
                                                Guards Who Show Up. Guards Who Listen
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Metro Guards isn’t here to “see what we can do.” We execute.
                                            </p>
                                            <p style={{color: '#1e2247', fontWeight: 600}}>Here’s how we make sure your building is never left unprotected:</p>
                                        </div>
                                        <div className="features-accordion">
                                            {promiseItems.map((item, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeFeature === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeFeature === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                        onClick={() => toggleFeature(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{item.question}</h5>
                                </div>
                                            </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        backgroundColor: activeFeature === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeFeature === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeFeature === index ? '−' : '+'}
                                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                            </div>

                                                    {activeFeature === index && (
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
                                                            <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.95rem'}}>
                                                                {item.answer}
                                                            </p>
                                    </div>
                                                    )}
                                                </div>
                                            ))}
                                            <p className="mt-3" style={{color: '#1e2247', fontWeight: 600}}>This Isn’t Just “Guards In Uniform.” This Is Security You Can Trust, Every Time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="choose-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-award me-2"></i>
                                            Who We Are
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Melbourne’s Certified, Award-Winning Security Partner
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        We Don’t Gamble With Safety. Neither Should You.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="choose-card position-relative h-100" style={{
                                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    }}>
                                        {/* Animated background overlay */}
                                        <div 
                                            className="position-absolute w-100 h-100"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.05) 0%, rgba(30, 34, 71, 0.05) 100%)',
                                                opacity: '0',
                                                transition: 'all 0.5s ease',
                                                top: '0',
                                                left: '0',
                                                zIndex: '1'
                                            }}
                                        ></div>
                                        
                                        {/* Floating particles effect */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                width: '4px',
                                                height: '4px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '50%',
                                                top: '20%',
                                                left: '15%',
                                                opacity: '0',
                                                transition: 'all 0.6s ease',
                                                zIndex: '2'
                                            }}
                                        ></div>
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: '#1e2247',
                                                borderRadius: '50%',
                                                top: '70%',
                                                right: '20%',
                                                opacity: '0',
                                                transition: 'all 0.8s ease',
                                                zIndex: '2'
                                            }}
                                        ></div>
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                width: '3px',
                                                height: '3px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '50%',
                                                top: '40%',
                                                right: '15%',
                                                opacity: '0',
                                                transition: 'all 0.7s ease',
                                                zIndex: '2'
                                            }}
                                        ></div>
                                        
                                        {/* Decorative Corner */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '0 20px 0 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: '0',
                                            transition: 'all 0.5s ease',
                                            zIndex: '3'
                                        }}>
                                            <Award size={24} color="#1e2247" />
                                        </div>
                                        
                                        <div className="choose-content position-relative" style={{zIndex: '4'}}>
                                            <div className="choose-icon mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)',
                                                transition: 'all 0.5s ease'
                                            }}>
                                                <Award size={32} color="#1e2247" />
                                    </div>
                                            
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.25rem'}}>
                                                ISO Certified
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                Quality Management, Occupational Health & Safety, Environmental Standards.
                                            </p>
                                </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="choose-card position-relative h-100" style={{
                                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decorative Corner */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '0 20px 0 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Shield size={24} color="#1e2247" />
                                        </div>
                                        
                                        <div className="choose-content">
                                            <div className="choose-icon mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <Shield size={32} color="#1e2247" />
                                    </div>
                                            
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.25rem'}}>
                                                Fully Licensed & Insured
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                Security Business Licence + Labour Hire Licence.
                                            </p>
                                </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="choose-card position-relative h-100" style={{
                                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decorative Corner */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '0 20px 0 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Zap size={24} color="#1e2247" />
                                        </div>
                                        
                                        <div className="choose-content">
                                            <div className="choose-icon mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <Zap size={32} color="#1e2247" />
                                    </div>
                                            
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.25rem'}}>
                                                Award-Winning in Customer Service
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                Recognized for excellence in client satisfaction.
                                            </p>
                                </div>
                                        </div>
                                    </div>
                                
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="choose-card position-relative h-100" style={{
                                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decorative Corner */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '0 20px 0 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Wrench size={24} color="#1e2247" />
                                </div>
                                        
                                        <div className="choose-content">
                                            <div className="choose-icon mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <Wrench size={32} color="#1e2247" />
                                        </div>
                                            
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.25rem'}}>
                                                CM3 Prequalified + ASIAL Membership
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                Demonstrating full compliance with industry requirements.
                                            </p>
                                    </div>
                                </div>
                            </div>
                                
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="choose-card position-relative h-100" style={{
                                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decorative Corner */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            width: '60px',
                                            height: '60px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '0 20px 0 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <CheckCircle size={24} color="#1e2247" />
                                        </div>
                                        
                                        <div className="choose-content">
                                            <div className="choose-icon mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <CheckCircle size={32} color="#1e2247" />
                                            </div>
                                            
                                            <h4 className="text-center mb-3 fw-bold" style={{color: '#1e2247', fontSize: '1.25rem'}}>
                                                15+ Years Protecting Melbourne
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                From residential towers to office complexes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                    <div className="benefits-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            Why Most Security Providers Fail
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Let’s be honest.
                                    </h2>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {failureCards.map((benefit, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div 
                                            className="benefit-card h-100 position-relative"
                                            style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '25px',
                                                boxShadow: '0 12px 35px rgba(0,0,0,0.08)',
                                                border: '3px solid transparent',
                                                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #fdc51a, #1e2247) border-box',
                                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                                textAlign: 'center',
                                                overflow: 'hidden',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div className="position-relative p-4" style={{zIndex: '3'}}>
                                                <div 
                                                    className="benefit-icon mb-4 d-flex align-items-center justify-content-center mx-auto position-relative"
                                                    style={{
                                                        width: '90px',
                                                        height: '90px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                        borderRadius: '25px',
                                                        color: '#fdc51a',
                                                        boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)'
                                                    }}
                                                >
                                                    {benefit.icon}
                                                </div>
                                                <h4 
                                                    className="fw-bold mb-0 position-relative" 
                                                    style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.6'
                                                    }}
                                                >
                                                    {benefit.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*===== Final CTA Section =====*/}
                    
                </div>
                
                <div className="feedbacks-section section-padding" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '20px'
                                        }}>
                                            <i className="fas fa-quote-left" style={{color: '#1e2247', fontSize: '24px'}}></i>
                                        </div>
                                        <h2 style={{
                                            color: '#1e2247',
                                            fontWeight: '700',
                                            fontSize: '2.5rem',
                                            margin: 0,
                                            fontFamily: 'cursive'
                                        }}>
                                            Customer <span style={{color: '#fdc51a'}}>Feedback</span>
                                        </h2>
                                    </div>
                                </div>
                                
                                {/* Static Testimonials - 3 Tiles */}
                                <div className="row g-4 justify-content-center">
                                    {[
                                        {
                                            name: "SARAH JOHNSON",
                                            title: "Property Manager",
                                            feedback: "There is no issue of 'don't show up'; it's in the guards' SOP compliance that ensures the guard fulfils the assigned task with responsibility, being active, vigilant, and responsive. Their reporting system is exceptional.",
                                            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
                                        },
                                        {
                                            name: "MICHAEL CHEN",
                                            title: "Building Owner",
                                            feedback: "No cancellation scene, the guard will arrive on time and stay until the time finishes! Their 15 years of experience really shows in their professionalism and reliability.",
                                            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                                        },
                                        {
                                            name: "EMMA WILLIAMS",
                                            title: "Facilities Director",
                                            feedback: "Common areas amenities management is handled perfectly. Everyone comes in uniform and they add on-time-show-up as a standard. We enforce quality through technology and they deliver.",
                                            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                                        }
                                    ].map((testimonial, idx) => (
                                        <div key={idx} className="col-lg-4 col-md-6">
                                            <div className="position-relative h-100">
                                                {/* Orange decorative element */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-20px',
                                                    left: '-20px',
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                    borderRadius: '50% 0 50% 50%',
                                                    zIndex: 1
                                                }}></div>
                                                
                                                {/* Profile image */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '20px',
                                                    left: '30px',
                                                    width: '80px',
                                                    height: '80px',
                                                    borderRadius: '50%',
                                                    border: '4px solid white',
                                                    overflow: 'hidden',
                                                    zIndex: 2,
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                                                }}>
                                                    <img 
                                                        src={testimonial.avatar} 
                                                        alt={testimonial.name}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </div>
                                                
                                                {/* Testimonial card */}
                                                <div className="p-4 pt-5 mt-4" style={{
                                                    background: '#1e2247',
                                                    borderRadius: '20px',
                                                    color: 'white',
                                                    minHeight: '320px',
                                                    position: 'relative',
                                                    boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)'
                                                }}>
                                                    {/* Speech bubble tail */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: '-15px',
                                                        left: '30px',
                                                        width: 0,
                                                        height: 0,
                                                        borderLeft: '15px solid transparent',
                                                        borderRight: '15px solid transparent',
                                                        borderTop: '15px solid #1e2247'
                                                    }}></div>
                                                    
                                                    <div className="mt-4">
                                                        <h5 style={{
                                                            color: '#fdc51a',
                                                            fontWeight: '700',
                                                            fontSize: '1.1rem',
                                                            marginBottom: '5px'
                                                        }}>
                                                            {testimonial.name}
                                                        </h5>
                                                        <p style={{
                                                            color: '#fdc51a',
                                                            fontSize: '0.9rem',
                                                            marginBottom: '15px',
                                                            opacity: 0.8
                                                        }}>
                                                            {testimonial.title}
                                                        </p>
                                                        
                                                        <p style={{
                                                            lineHeight: '1.6',
                                                            fontSize: '0.95rem',
                                                            marginBottom: '20px'
                                                        }}>
                                                            {testimonial.feedback}
                                                        </p>
                                                        
                                                        {/* Star rating */}
                                                        <div className="d-flex mb-3">
                                                            {[...Array(5)].map((_, starIdx) => (
                                                                <i key={starIdx} className="fas fa-star" style={{
                                                                    color: '#fdc51a',
                                                                    fontSize: '16px',
                                                                    marginRight: '3px'
                                                                }}></i>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Learn More button */}
                                                <div className="text-center mt-3">
                                                    <button className="btn px-4 py-2" style={{
                                                        backgroundColor: '#1e2247',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '25px',
                                                        fontSize: '0.9rem',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            
            {/* Add custom styles */}
            <style jsx>{`
                .section-padding {
                    padding: 80px 0;
                }
                
                .min-vh-75 {
                    min-height: 75vh;
                }
                
                .btn-primary:hover {
                    background-color: #e8b502 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(253, 197, 26, 0.4) !important;
                }
                
                .btn-outline-dark:hover {
                    background-color: #1e2247 !important;
                    border-color: #1e2247 !important;
                    color: #ffffff !important;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(30, 34, 71, 0.3);
                }

                .btn-outline-light:hover {
                    background-color: #ffffff !important;
                    border-color: #ffffff !important;
                    color: #1e2247 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
                }
                
                .benefit-card:hover {
                    transform: perspective(1000px) rotateX(-5deg) translateY(-15px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
                    border-color: rgba(253, 197, 26, 0.3);
                }
                
                .benefit-card:hover .benefit-icon {
                    transform: scale(1.15) rotateY(10deg);
                    box-shadow: 0 15px 40px rgba(30, 34, 71, 0.4), inset 0 1px 0 rgba(255,255,255,0.3);
                }
                
                .benefit-card:hover .benefit-icon > div:first-child {
                    opacity: 1;
                    transform: rotate(360deg);
                }
                
                .benefit-card:hover .benefit-icon > div:last-child {
                    opacity: 1;
                    transform: scale(1.2);
                }
                
                .benefit-card:hover h4 {
                    color: #fdc51a;
                    transform: translateY(-5px) scale(1.05);
                    text-shadow: 0 3px 6px rgba(253, 197, 26, 0.3);
                }
                
                .benefit-card:hover p {
                    color: #495057;
                    transform: translateY(-3px);
                }
                
                .benefit-card:hover .position-absolute:first-child {
                    opacity: 1;
                }
                
                .benefit-card:hover .position-absolute:nth-child(2),
                .benefit-card:hover .position-absolute:nth-child(3),
                .benefit-card:hover .position-absolute:nth-child(4) {
                    opacity: 1;
                }
                
                .benefit-card:hover .expand-indicator {
                    opacity: 1;
                }
                
                .benefit-card:hover .position-absolute:last-child {
                    opacity: 1;
                }
                
                .choose-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(253, 197, 26, 0.3);
                }
                
                .choose-card:hover .choose-icon {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 20px 40px rgba(253, 197, 26, 0.4);
                }
                
                .choose-card:hover h4 {
                    color: #fdc51a;
                    transform: translateY(-3px);
                    text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                }
                
                .choose-card:hover p {
                    color: #495057;
                    transform: translateY(-2px);
                }
                
                .choose-card:hover .position-absolute:first-child {
                    opacity: 1;
                }
                
                .choose-card:hover .position-absolute:nth-child(2),
                .choose-card:hover .position-absolute:nth-child(3),
                .choose-card:hover .position-absolute:nth-child(4) {
                    opacity: 1;
                }
                
                .choose-card:hover .position-absolute:last-child {
                    opacity: 1;
                    transform: scale(1.1);
                }
                
                .choose-card:hover .choose-content {
                    transform: translateY(-5px);
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(253, 197, 26, 0.7);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(253, 197, 26, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(253, 197, 26, 0);
                    }
                }
                
                .choose-card:hover .choose-icon::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle, rgba(253, 197, 26, 0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: pulse 2s infinite;
                }
            `}</style>
        </>
    )
}

