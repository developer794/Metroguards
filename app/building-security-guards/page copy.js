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

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BUILDING SITE SECURITY GUARDS"
                mainTitle="Building Site Security Guards Melbourne"
                subtitle="Your Protection is Our Priority - Your Fastest, Most Reliable, and Affordable Security Partner In Melbourne"
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
                                            BUILDING SITE SECURITY<br />
                                            <span style={{color: '#fdc51a'}}>GUARDS MELBOURNE</span>
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
                                            Metro Guards is a Melbourne-based security company that aims to provide high-quality building security guard services. Our security plans integrate 24/7 surveillance and monitoring with cutting-edge technology. Our building security guards are uniformed and demonstrate professionalism and strength. Their immaculate presence outside your commercial and residential buildings significantly deters crimes.
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
                                                <p>Our building security guards exceed the industry standard and stand out for having rigorous training and in-depth knowledge of Melbourne.</p>
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
                                                    <Clock size={20} />
                            </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Surveillance and Monitoring</span>
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
                                                    <User size={20} />
                                    </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Professional Uniformed Guards</span>
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
                                                    <Zap size={20} />
                                        </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Cutting-edge Technology Integration</span>
                                </div>
                            </div>
                        </div>
                    </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    OUR SERVICES
                                                </span>
                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Different Types of Trained Building Security Guards in Melbourne
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Every client comes to us with varying security needs and unique demands. For example, commercial building security is quite complex and requires detailed planning. Meanwhile, residential building security entails measures that deliver a protective environment for the residents.
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
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    <i className="bi bi-shield-check me-2"></i>
                                                    COMPREHENSIVE PROTECTION
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Key Role of Building Security Services In Melbourne
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                We provide discreet and detailed building security services in Melbourne, with real-time technology integration and live reporting of incidents. Our guards are highly trained to work even in Melbourne's huge residential, commercial, and construction areas.
                                            </p>
                                        </div>
                                        
                                        {/* Expandable Feature Cards */}
                                        <div className="features-accordion">
                                            {securityFeatures.map((feature, index) => (
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
                                                                <div 
                                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff',
                                                                        fontSize: '1.5rem'
                                                                    }}
                                                                >
                                                                    {feature.iconSymbol}
                                    </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{feature.title}</h5>
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
                                                            <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                {feature.description}
                                                            </p>
                                                            <div className="feature-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {feature.details}
                                                                </p>
                                        </div>
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

                    {/*===== Why Choose Us Section =====*/}
                    <div className="choose-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-award me-2"></i>
                                            THE METRO GUARDS DIFFERENCE
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Why Choose Metro Guard Building Security Guard in Melbourne
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        We are among Melbourne's most trusted security companies because we have been serving people and businesses for a decade with exceptional, result-oriented services. Our building guards are briefed in detail before assigning any security job.
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
                                                Professional Training and Qualifications
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                Our security guards are highly professional and qualified. They possess an unmistakable character that urges them to work for people's and property's safety and are rigorously trained in emergency responses, crowd control, first aid, and property-related security protocol.
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
                                                Reputation in Industry
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                We have a proven record of protecting residential and commercial buildings, events, construction sites, malls, warehouses, industrial parks, and events. Our building security guards protect your assets and people around the clock.
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
                                                Technology Integration
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                A comprehensive security plan entails more than the physical presence of security guards. Our award-winning guards are experts at handling and operating modern security gadgets and equipment and have strong communication and interpersonal skills.
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
                                                Customized Solutions
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                We provide customized and tailored security solutions that consider the security needs of our clients. Most of the time, our building security guards in Melbourne are deployed after designing personalized security plans for our clients.
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
                                                License and Accreditation
                                            </h4>
                                            
                                            <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                Our security guards are hired after an extensive background check to provide trusted services to our clients in Melbourne. They all possess the license to operate in Melbourne and follow all state security rules and regulations.
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
                                            <i className="bi bi-heart me-2"></i>
                                            VALUE PROPOSITION
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Key Benefits to Hire Building Security Services Melbourne
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        With the increasing crime rate in the bustling city of Melbourne, hiring building security has become essential. Here is how you can benefit from our building security services.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { 
                                        icon: <Clock size={40} />, 
                                        title: "24/7 Surveillance and Safety", 
                                        description: "Your commercial and residential buildings are under our Surveillance 24/7 to ensure safety and deal with any security challenges." 
                                    },
                                    { 
                                        icon: <Shield size={40} />, 
                                        title: "Risk Mitigation and Minimization", 
                                        description: "Our professional building guards take quick action in emergencies and help minimize potential losses." 
                                    },
                                    { 
                                        icon: <Zap size={40} />, 
                                        title: "Rapid Security Solution", 
                                        description: "Our guards respond to criminal activities immediately; whether they find a criminal or thief loitering in the parking lot or a fire alarm in the building, they professionally handle all issues before escalation." 
                                    },
                                    { 
                                        icon: <Eye size={40} />, 
                                        title: "Peace of Mind", 
                                        description: "Our dedicated security team provides peace and relief for owners, visitors, customers, and employees. Their presence ensures that people and property are protected and secure." 
                                    },
                                    { 
                                        icon: <Target size={40} />, 
                                        title: "Crime Deterrence", 
                                        description: "The immaculate presence of our uniformed guards outside your commercial and residential buildings significantly deters crimes and provides a strong visual deterrent." 
                                    },
                                    { 
                                        icon: <Users size={40} />, 
                                        title: "Professional Service", 
                                        description: "Our building security guards exceed the industry standard and stand out for having rigorous training and in-depth knowledge of Melbourne." 
                                    }
                                ].map((benefit, index) => (
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
                                            
                                            {/* Content */}
                                            <div className="position-relative p-4" style={{zIndex: '3'}}>
                                                {/* Icon with enhanced styling */}
                                                <div 
                                                    className="benefit-icon mb-4 d-flex align-items-center justify-content-center mx-auto position-relative"
                                                    style={{
                                                        width: '90px',
                                                        height: '90px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                        borderRadius: '25px',
                                                        color: '#fdc51a',
                                                        boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)',
                                                        transition: 'all 0.5s ease',
                                                        transform: 'perspective(1000px) rotateX(0deg)'
                                                    }}
                                                >
                                                    {benefit.icon}
                                                    {/* Icon inner glow */}
                                                    <div 
                                                        className="position-absolute"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.2) 0%, transparent 70%)',
                                                            borderRadius: '25px',
                                                            opacity: '0',
                                                            transition: 'all 0.5s ease'
                                                        }}
                                                    ></div>
                                                </div>
                                                
                                                {/* Title with enhanced typography */}
                                                <h4 
                                                    className="fw-bold mb-3 position-relative" 
                                                    style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.2rem',
                                                        transition: 'all 0.4s ease',
                                                        letterSpacing: '0.5px'
                                                    }}
                                                >
                                                    {benefit.title}
                                                </h4>
                                                
                                                {/* Description with dropdown style */}
                                                <div 
                                                    className="benefit-description position-relative"
                                                    style={{
                                                        maxHeight: '120px',
                                                        overflow: 'hidden',
                                                        transition: 'all 0.5s ease'
                                                    }}
                                                >
                                                    <p 
                                                        className="mb-0" 
                                                        style={{
                                                            color: '#6c757d', 
                                                            lineHeight: '1.7',
                                                            fontSize: '0.95rem',
                                                            transition: 'all 0.4s ease',
                                                            transform: 'translateY(0)'
                                                        }}
                                                    >
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                                
                                                {/* Expand indicator */}
                                                <div 
                                                    className="expand-indicator position-absolute"
                                                    style={{
                                                        bottom: '15px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: '30px',
                                                        height: '4px',
                                                        background: 'linear-gradient(90deg, #fdc51a 0%, #1e2247 100%)',
                                                        borderRadius: '2px',
                                                        opacity: '0',
                                                        transition: 'all 0.4s ease'
                                                    }}
                                                ></div>
                                            </div>
                                            
                                            {/* Corner accent */}
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    top: '0',
                                                    right: '0',
                                                    width: '0',
                                                    height: '0',
                                                    borderLeft: '30px solid transparent',
                                                    borderTop: '30px solid #fdc51a',
                                                    opacity: '0',
                                                    transition: 'all 0.5s ease'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*===== Final CTA Section =====*/}
                    
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