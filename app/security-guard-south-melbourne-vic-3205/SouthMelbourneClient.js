'use client';

import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target } from 'lucide-react';
import CounterUp from "@/components/elements/CounterUp"
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function SouthMelbourneClient() {
    const [activeService, setActiveService] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const services = [
        {
            title: "Residential Security Protection",
            icon: <Home size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Comprehensive security solutions for South Melbourne homes and residential properties",
            details: "Our security guards provide round-the-clock protection for residential properties in South Melbourne, ensuring the safety of families and their valuable assets through professional monitoring and patrol services."
        },
        {
            title: "Commercial Building Security", 
            icon: <Building size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Professional security services for office buildings and commercial spaces",
            details: "We offer tailored security solutions for commercial properties in South Melbourne, including access control, visitor management, and comprehensive monitoring to protect your business operations."
        },
        {
            title: "Event Security Services",
            icon: <Calendar size={24} />,
            iconSymbol: <Search size={24} />,
            description: "Specialized security for events and public gatherings",
            details: "Our guards are trained to handle the unique security challenges of events and public gatherings, providing crowd control, access management, and incident response to ensure safe and successful events."
        },
    ];

    const faqData = [
        {
            question: "Why choose Metro Guards for South Melbourne security?",
            answer: "Metro Guards has extensive experience serving South Melbourne with local knowledge of the area's unique security challenges. Our guards are familiar with local landmarks, traffic patterns, and community needs, ensuring faster response times and more effective protection."
        },
        {
            question: "What areas in South Melbourne do you cover?",
            answer: "We provide comprehensive security coverage throughout South Melbourne and surrounding suburbs including Southbank, Albert Park, Middle Park, Port Melbourne, St Kilda, Elwood, Brighton, Toorak, Prahran, and South Yarra. Our local presence ensures quick response times across the entire area."
        },
        {
            question: "What types of security services do you offer in South Melbourne?",
            answer: "We offer a full range of security services including residential security, commercial building protection, event security, mobile patrols, K9 security, staff escort services, warehouse security, and 24/7 monitoring services tailored to South Melbourne's specific needs."
        },
        {
            question: "How quickly can you deploy security guards in South Melbourne?",
            answer: "Our local presence in South Melbourne allows us to deploy security guards within hours of your request. For emergency situations, we can provide immediate response, and for planned security needs, we can arrange coverage within 24 hours."
        }
    ];

    return (
        <>
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
                                        SECURITY GUARDS<br />
                                        <span style={{color: '#fdc51a'}}>SOUTH MELBOURNE VIC</span>
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
                                        At Metro Guards, we provide reliable and professional security services for homes, businesses, and events across South Melbourne. Whether you're managing a residential building, running a retail store, or planning an important gathering, having trained security officers on-site gives you real peace of mind.
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
                                            src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp" 
                                            alt="Professional Security Guards South Melbourne" 
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
                                            src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/47170DD0-1721-43C9-BA58-B7D7C84C45DF_1_105_c.jpeg" 
                                            alt="Professional Security Guards South Melbourne" 
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
                                            <p>Our security guards provide professional protection with local expertise that ensures effective security coverage across South Melbourne.</p>
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
                                            <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Available Service</span>
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
                                            <span style={{color: '#1e2247', fontWeight: '500'}}>Licensed Professional Guards</span>
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
                                            <span style={{color: '#1e2247', fontWeight: '500'}}>Local Area Expertise</span>
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
                                            Security Services in South Melbourne
                                        </h2>
                                        <p className="lead" style={{color: '#6c757d'}}>
                                            If you're in South Melbourne and looking for dependable security, you need more than just uniforms. You need licensed professionals who understand the area, respond quickly, and adapt to your specific needs.
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

                {/*===== Threat Response Section =====*/}
                <div className="threat-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="threat-content">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-shield-exclamation me-2"></i>
                                            PROFESSIONAL HANDLING
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Why Security is a Priority in South Melbourne
                                    </h2>
                                    <p className="lead text-white mb-4" style={{opacity: '0.9'}}>
                                        South Melbourne is known for its heritage homes, public facilities, and proximity to major hospitals and the CBD. These features attract heavy foot traffic and make the area vulnerable to security challenges that require specialized local knowledge and rapid response capabilities.
                                    </p>
                                    <div className="threat-features">
                                        <div className="feature-item d-flex align-items-start mb-4">
                                            <div 
                                                className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '10px',
                                                    color: '#1e2247'
                                                }}
                                            >
                                                <AlertTriangle size={24} />
                                            </div>
                                            <div>
                                                <h5 className="text-white fw-bold mb-2">High-Demand Suburb Challenges</h5>
                                                <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                    South Melbourne's heritage homes, public facilities, and proximity to major hospitals and CBD create unique security challenges requiring specialized local knowledge and rapid response capabilities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="feature-item d-flex align-items-start">
                                            <div 
                                                className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '10px',
                                                    color: '#1e2247'
                                                }}
                                            >
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <h5 className="text-white fw-bold mb-2">Local Expertise</h5>
                                                <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                    Our team is familiar with South Melbourne's streets, landmarks, and common activity patterns, enabling proactive security measures and faster emergency response.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="threat-image mt-5 mt-lg-0">
                                    <div 
                                        className="image-container position-relative"
                                        style={{
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        <img 
                                            src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/A7BE18A7-13A3-4A00-88C4-489D71E252D5_1_105_c.jpeg" 
                                            alt="South Melbourne Security" 
                                            className="img-fluid"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*===== Industries Section =====*/}
                <div className="industries-section section-padding" style={{background: '#f8f9fa'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <div className="subtitle mb-3">
                                    <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                        <i className="bi bi-building me-2"></i>
                                        VERSATILE PROTECTION
                                    </span>
                                </div>
                                <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                    Where We Provide Security in South Melbourne
                                </h2>
                                <p className="lead" style={{color: '#6c757d'}}>
                                    Our security services are versatile and can be deployed across various locations in South Melbourne, providing professional protection where needed.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4 g-md-3 g-lg-4">
                            {[
                                { icon: <Home size={32} />, title: "Residential Properties", description: "Homes and apartment complexes" },
                                { icon: <Building size={32} />, title: "Commercial Buildings", description: "Office complexes and business centers" },
                                { icon: <Landmark size={32} />, title: "Healthcare Facilities", description: "Hospitals and medical centers" },
                                { icon: <MapPin size={32} />, title: "Construction Sites", description: "Building and development projects" },
                                { icon: <Book size={32} />, title: "Educational Institutions", description: "Schools and universities" },
                                { icon: <Calendar size={32} />, title: "Events & Functions", description: "Special events and gatherings" }
                            ].map((industry, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div 
                                        className="industry-card h-100 position-relative"
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderRadius: '0',
                                            boxShadow: 'none',
                                            border: 'none',
                                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                                            textAlign: 'center',
                                            overflow: 'visible',
                                            cursor: 'pointer',
                                            padding: '20px'
                                        }}
                                    >
                                        {/* Card container with unique design */}
                                        <div 
                                            className="position-relative h-100"
                                            style={{
                                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                                borderRadius: '30px',
                                                padding: '35px 25px',
                                                boxShadow: '0 15px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                                                border: '1px solid rgba(253, 197, 26, 0.1)',
                                                transition: 'all 0.6s ease',
                                                transform: 'perspective(1000px) rotateX(0deg)',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {/* Animated background elements */}
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    top: '-100px',
                                                    left: '-100px',
                                                    width: '200px',
                                                    height: '200px',
                                                    background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                    borderRadius: '50%',
                                                    transition: 'all 0.8s ease',
                                                    zIndex: '0'
                                                }}
                                            ></div>
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    bottom: '-80px',
                                                    right: '-80px',
                                                    width: '160px',
                                                    height: '160px',
                                                    background: 'radial-gradient(circle, rgba(30, 34, 71, 0.08) 0%, transparent 70%)',
                                                    borderRadius: '50%',
                                                    transition: 'all 0.8s ease',
                                                    zIndex: '0'
                                                }}
                                            ></div>
                                            
                                            {/* Icon with unique styling */}
                                            <div 
                                                className="industry-icon mb-4 d-flex align-items-center justify-content-center mx-auto position-relative"
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    background: 'linear-gradient(45deg, #1e2247 0%, #2a2d5a 50%, #1e2247 100%)',
                                                    borderRadius: '50%',
                                                    color: '#fdc51a',
                                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                                                    transition: 'all 0.6s ease',
                                                    zIndex: '2',
                                                    position: 'relative'
                                                }}
                                            >
                                                {industry.icon}
                                                
                                                
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="position-relative" style={{zIndex: '2'}}>
                                                <h5 
                                                    className="fw-bold mb-3" 
                                                    style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.3rem',
                                                        lineHeight: '1.3',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {industry.title}
                                                </h5>
                                                <p 
                                                    className="mb-0" 
                                                    style={{
                                                        color: '#6c757d',
                                                        lineHeight: '1.6',
                                                        fontSize: '0.95rem',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {industry.description}
                                                </p>
                                            </div>
                                            
                                            {/* Decorative corner elements */}
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    top: '20px',
                                                    right: '20px',
                                                    width: '30px',
                                                    height: '30px',
                                                    background: 'linear-gradient(45deg, #fdc51a, #ffd700)',
                                                    borderRadius: '50%',
                                                    opacity: '0.3',
                                                    zIndex: '1'
                                                }}
                                            ></div>
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    bottom: '20px',
                                                    left: '20px',
                                                    width: '20px',
                                                    height: '20px',
                                                    background: 'linear-gradient(45deg, #1e2247, #2a2d5a)',
                                                    borderRadius: '50%',
                                                    opacity: '0.4',
                                                    zIndex: '1'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*===== Key Benefits Section =====*/}
                <div className="benefits-section section-padding" style={{background: '#ffffff'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <div className="subtitle mb-3">
                                    <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                        <i className="bi bi-award me-2"></i>
                                        KEY BENEFITS
                                    </span>
                                </div>
                                <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                    Why Choose Metro Guards for South Melbourne Security
                                </h2>
                                <p className="lead" style={{color: '#6c757d'}}>
                                    Our local expertise and professional approach make us the preferred choice for security services in South Melbourne.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                { icon: <Zap size={28} />, title: "Fast Response Times", description: "Local presence ensures quick deployment and emergency response" },
                                { icon: <MapPin size={28} />, title: "Local Area Knowledge", description: "Familiar with South Melbourne's unique security challenges" },
                                { icon: <Clock size={28} />, title: "24/7 Availability", description: "Round-the-clock security coverage when you need it" },
                                { icon: <Shield size={28} />, title: "Licensed Professionals", description: "Fully trained and certified security personnel" },
                                { icon: <Users size={28} />, title: "Experienced Team", description: "Years of experience serving South Melbourne community" },
                                { icon: <CheckCircle size={28} />, title: "Proven Track Record", description: "Reliable security solutions with excellent results" }
                            ].map((benefit, index) => {
                                const isBlue = index % 2 === 0;
                                const isYellow = index % 2 !== 0;
                                const primaryColor = isBlue ? '#1e2247' : '#fdc51a';
                                const secondaryColor = isBlue ? '#fdc51a' : '#1e2247';
                                
                                return (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div 
                                            className={`benefit-card ${isBlue ? 'benefit-card-blue' : 'benefit-card-yellow'}`}
                                            style={{
                                                height: '100%',
                                                background: '#ffffff',
                                                borderRadius: '12px',
                                                padding: '40px 30px',
                                                border: `2px solid ${primaryColor}`,
                                                transition: 'all 0.3s ease',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {/* Top Color Bar */}
                                            <div 
                                                style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: primaryColor
                                                }}
                                            ></div>

                                            {/* Icon Wrapper */}
                                            <div 
                                                className="benefit-icon-wrapper"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: primaryColor,
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 25px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <div 
                                                    className="benefit-icon"
                                                    style={{
                                                        color: secondaryColor,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {benefit.icon}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="text-center">
                                                <h5 
                                                    className="benefit-title mb-3" 
                                                    style={{
                                                        color: primaryColor,
                                                        fontSize: '1.25rem',
                                                        fontWeight: 'bold',
                                                        lineHeight: '1.4',
                                                        fontFamily: 'satoshi, sans-serif',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {benefit.title}
                                                </h5>
                                                <p 
                                                    className="benefit-desc mb-0" 
                                                    style={{
                                                        color: '#6c757d',
                                                        lineHeight: '1.6',
                                                        fontSize: '0.95rem',
                                                        fontFamily: 'satoshi, sans-serif'
                                                    }}
                                                >
                                                    {benefit.description}
                                                </p>
                                            </div>

                                            {/* Bottom Line */}
                                            <div 
                                                className="benefit-bottom-line"
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '0',
                                                    left: '0',
                                                    height: '3px',
                                                    width: '0',
                                                    background: secondaryColor,
                                                    transition: 'all 0.4s ease'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/*===== FAQ Section =====*/}
                <div className="faq-section section-padding" style={{background: '#f8f9fa'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <div className="subtitle mb-3">
                                    <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                        <i className="bi bi-question-circle me-2"></i>
                                        FREQUENTLY ASKED
                                    </span>
                                </div>
                                <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                    Frequently Asked Questions
                                </h2>
                                <p className="lead" style={{color: '#6c757d'}}>
                                    Get answers to common questions about our security services in South Melbourne.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="faq-accordion">
                                    {faqData.map((faq, index) => (
                                        <div key={index} className="accordion-item mb-3">
                                            <div 
                                                className="accordion-header p-4"
                                                style={{
                                                    backgroundColor: activeFaq === index ? '#ffffff' : '#f8f9fa',
                                                    borderRadius: activeFaq === index ? '12px 12px 0 0' : '12px',
                                                    border: '1px solid #e9ecef',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}
                                                onClick={() => toggleFaq(index)}
                                            >
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>
                                                        {faq.question}
                                                    </h5>
                                                    <div className="expand-icon">
                                                        <div 
                                                            className="d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '40px',
                                                                height: '40px',
                                                                backgroundColor: activeFaq === index ? '#1e2247' : '#e9ecef',
                                                                borderRadius: '50%',
                                                                color: activeFaq === index ? '#ffffff' : '#1e2247',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                        >
                                                            <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                {activeFaq === index ? '−' : '+'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {activeFaq === index && (
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
                                                    <p className="mb-0" style={{color: '#495057', lineHeight: '1.7'}}>
                                                        {faq.answer}
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

                {/*===== Accreditation & Subscribe =====*/}
                <Accreditation />
                <Subscribe />
            </div>

            <style jsx>{`
                /* Industry Cards Hover Effects */
                .industry-card:hover {
                    transform: translateY(-10px) !important;
                }
                
                .industry-card:hover .industry-icon {
                    transform: scale(1.1);
                }

                /* Benefit Cards Hover Effects */
                .benefit-card {
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                }

                .benefit-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
                }

                .benefit-card-blue:hover {
                    background: #1e2247 !important;
                    border-color: #1e2247 !important;
                }

                .benefit-card-blue:hover .benefit-icon-wrapper {
                    background: #fdc51a !important;
                    transform: scale(1.1) rotate(5deg);
                }

                .benefit-card-blue:hover .benefit-icon {
                    color: #1e2247 !important;
                }

                .benefit-card-blue:hover .benefit-title {
                    color: #fdc51a !important;
                }

                .benefit-card-blue:hover .benefit-desc {
                    color: rgba(255, 255, 255, 0.9) !important;
                }

                .benefit-card-blue:hover .benefit-bottom-line {
                    width: 100% !important;
                }

                .benefit-card-yellow:hover {
                    background: #fdc51a !important;
                    border-color: #fdc51a !important;
                }

                .benefit-card-yellow:hover .benefit-icon-wrapper {
                    background: #1e2247 !important;
                    transform: scale(1.1) rotate(-5deg);
                }

                .benefit-card-yellow:hover .benefit-icon {
                    color: #fdc51a !important;
                }

                .benefit-card-yellow:hover .benefit-title {
                    color: #1e2247 !important;
                }

                .benefit-card-yellow:hover .benefit-desc {
                    color: #1e2247 !important;
                }

                .benefit-card-yellow:hover .benefit-bottom-line {
                    width: 100% !important;
                }

                /* Accordion Animations */
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Rotating Animation for Icons */
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .hero-buttons {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    
                    .hero-buttons .btn {
                        width: 100%;
                        text-align: center;
                    }
                }

                @media (max-width: 576px) {
                    .display-3 {
                        font-size: 2.5rem !important;
                    }
                    
                    .display-5 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </>
    )
}
