'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function UnarmedSecurityPage() {
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
            title: "Crime Prevention & Deterrence",
            icon: <Shield size={24} />,
            iconSymbol: <Eye size={24} />,
            description: "Visible presence that deters criminal activity before it occurs",
            details: "Our unarmed security guards provide a strong visual deterrent through their professional presence, significantly reducing the likelihood of theft, vandalism, and other criminal activities on your property."
        },
        {
            title: "Access Control & Monitoring",
            icon: <Lock size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Comprehensive access control and visitor management",
            details: "We manage entry points, verify identification, maintain visitor logs, and ensure only authorized personnel access your premises while providing detailed monitoring and reporting."
        },
        {
            title: "Surveillance & Patrol Services",
            icon: <Target size={24} />,
            iconSymbol: <Search size={24} />,
            description: "Regular patrols and surveillance monitoring",
            details: "Our guards conduct systematic patrols of your property, monitor surveillance systems, and maintain constant vigilance to identify and respond to any security concerns immediately."
        },
    ];

    const faqData = [
        {
            question: "What is an unarmed security guard?",
            answer: "An unarmed security guard is a licensed professional trained to protect people and property without carrying firearms. They focus on deterring crime, monitoring surveillance systems, maintaining order, and providing a visible security presence."
        },
        {
            question: "What are unarmed guards suited for?",
            answer: "Unarmed security guards are ideal for environments where a non-threatening, visible presence is required, such as retail stores, office complexes, schools, residential buildings, and events where armed security might be inappropriate."
        },
        {
            question: "How are unarmed security guards trained?",
            answer: "Unarmed security guards undergo Certificate II in Security Operations, which covers essential security skills. They also receive training in emergency response, conflict resolution, surveillance monitoring, and customer service to ensure professional service delivery."
        },
        {
            question: "Can unarmed guards detain people?",
            answer: "Unarmed security guards can detain individuals temporarily if necessary and call local authorities for assistance in case of criminal activity. They are trained in proper restraint techniques and legal procedures for citizen's arrest when appropriate."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="UNARMED SECURITY GUARD SERVICES"
                mainTitle="Professional Unarmed Security Services"
                subtitle="Reliable Protection Without Firearms - Professional Security Guards in Melbourne"
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
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
                                        <h2
                                            className="display-3 fw-bold mb-4"
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                            UNARMED SECURITY<br />
                                            <span style={{ color: '#fdc51a' }}>GUARD SERVICES</span>
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
                                            At Metro Guards, we understand the importance of providing effective security solutions that maintain a safe and secure environment without the need for armed personnel. Our unarmed security guards are highly trained professionals who focus on preventing crime and ensuring the safety of your property, people, and assets.

                                            Whether it's a retail store, office complex, or residential building, our unarmed security personnel are well-equipped to handle a wide range of duties to ensure your peace of mind. We provide professional, reliable, and cost-effective security solutions tailored to your specific needs.
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
                                                <Phone size={16} style={{ marginRight: '8px' }} /> 1300731173
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
                                                src="/assets/img/blog/umarmed.avif"
                                                alt="Professional Unarmed Security Guards"
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
                    <div className="services-section section-padding" style={{ background: '#ffffff' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img
                                                src="/assets/img/blog/umarmed.avif"
                                                alt="Professional Unarmed Security Guards"
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
                                                <p>Our unarmed security guards provide professional protection with a non-threatening presence that deters crime effectively.</p>
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
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>24/7 Available Service</span>
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
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>Licensed Professional Guards</span>
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
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>Cost-Effective Solutions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                                    OUR SERVICES
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                                Basic Duties and Responsibilities
                                            </h2>
                                            <p className="lead" style={{ color: '#6c757d' }}>
                                                The primary role of unarmed security guards is to prevent crime, not necessarily to respond to it. Their mere presence provides a protective layer for premises and occupants.
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
                                                                    <h5 className="mb-0 fw-bold" style={{ color: '#1e2247' }}>{service.title}</h5>
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
                                                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
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
                                                            <p className="mb-3" style={{ color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                                                {service.description}
                                                            </p>
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{ color: '#495057', lineHeight: '1.7', fontSize: '0.9rem' }}>
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
                    <div className="threat-section section-padding" style={{ background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="threat-content">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                                <i className="bi bi-shield-exclamation me-2"></i>
                                                PROFESSIONAL HANDLING
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4 text-white">
                                            Unarmed Guards Role When There Is a Threat
                                        </h2>
                                        <p className="lead text-white mb-4" style={{ opacity: '0.9' }}>
                                            While unarmed security officers are not equipped to handle violent confrontations directly, they are trained to manage escalated situations effectively.
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
                                                    <h5 className="text-white fw-bold mb-2">Crisis Management</h5>
                                                    <p className="text-white mb-0" style={{ opacity: '0.9', lineHeight: '1.6' }}>
                                                        If a criminal act or violence occurs, unarmed security personnel are trained to temporarily restrain individuals and immediately contact local authorities.
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
                                                    <h5 className="text-white fw-bold mb-2">Swift Response</h5>
                                                    <p className="text-white mb-0" style={{ opacity: '0.9', lineHeight: '1.6' }}>
                                                        In cases where criminals are armed or pose a serious threat, our guards will swiftly call for police assistance, knowing that delaying intervention can lead to greater risks.
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
                                                src="/assets/img/blog/threat.avif"
                                                alt="Threat Response Training"
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
                    <div className="industries-section section-padding" style={{ background: '#f8f9fa' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                            <i className="bi bi-building me-2"></i>
                                            VERSATILE PROTECTION
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                        Where Unarmed Security Guards Are Employed
                                    </h2>
                                    <p className="lead" style={{ color: '#6c757d' }}>
                                        Unarmed security guards are versatile and can be deployed across various locations, providing professional protection where needed.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { icon: <Building size={32} />, title: "Retail Stores", description: "Preventing shoplifting and ensuring customer safety" },
                                    { icon: <Building size={32} />, title: "Office Complexes", description: "Controlling access and maintaining order in business environments" },
                                    { icon: <Book size={32} />, title: "Schools & Universities", description: "Safeguarding students, staff, and campus property" },
                                    { icon: <Building size={32} />, title: "Art Galleries", description: "Monitoring valuable artworks and ensuring a safe environment for visitors" },
                                    { icon: <Home size={32} />, title: "Residential Buildings", description: "Providing security to residents and managing building access" },
                                    { icon: <Calendar size={32} />, title: "Convention Centres", description: "Managing crowds and ensuring the safety of attendees" },
                                    { icon: <Landmark size={32} />, title: "Government Buildings", description: "Maintaining the security of public institutions" },
                                    { icon: <Building size={32} />, title: "Hotels and Resorts", description: "Ensuring the safety of guests and monitoring the premises" },
                                    { icon: <Wrench size={32} />, title: "Construction Sites", description: "Protecting construction equipment and materials from theft or vandalism" }
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

                                                    {/* Rotating ring around icon */}
                                                    <div
                                                        className="position-absolute"
                                                        style={{
                                                            width: '120px',
                                                            height: '120px',
                                                            border: '2px solid transparent',
                                                            borderTop: '2px solid #fdc51a',
                                                            borderRight: '2px solid #fdc51a',
                                                            borderRadius: '50%',
                                                            top: '-10px',
                                                            left: '-10px',
                                                            transition: 'all 0.8s ease',
                                                            transform: 'rotate(0deg)',
                                                            opacity: '0'
                                                        }}
                                                    ></div>

                                                    {/* Inner glow effect */}
                                                    <div
                                                        className="position-absolute"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.3) 0%, transparent 70%)',
                                                            borderRadius: '50%',
                                                            opacity: '0',
                                                            transition: 'all 0.6s ease'
                                                        }}
                                                    ></div>
                                                </div>

                                                {/* Title with unique styling */}
                                                <h5
                                                    className="fw-bold mb-3 position-relative"
                                                    style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.3rem',
                                                        transition: 'all 0.5s ease',
                                                        letterSpacing: '0.5px',
                                                        textTransform: 'uppercase',
                                                        fontWeight: '700',
                                                        zIndex: '2',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    {industry.title}
                                                </h5>

                                                {/* Description with enhanced styling */}
                                                <p
                                                    className="mb-0 position-relative"
                                                    style={{
                                                        color: '#6c757d',
                                                        lineHeight: '1.8',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.5s ease',
                                                        fontWeight: '400',
                                                        zIndex: '2',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    {industry.description}
                                                </p>

                                                {/* Decorative corner elements */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: '15px',
                                                        left: '15px',
                                                        width: '20px',
                                                        height: '20px',
                                                        border: '2px solid #fdc51a',
                                                        borderRadius: '50%',
                                                        opacity: '0',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '15px',
                                                        right: '15px',
                                                        width: '15px',
                                                        height: '15px',
                                                        background: '#fdc51a',
                                                        borderRadius: '50%',
                                                        opacity: '0',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>

                                                {/* Bottom wave effect */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '0',
                                                        left: '0',
                                                        width: '100%',
                                                        height: '4px',
                                                        background: 'linear-gradient(90deg, #fdc51a 0%, #1e2247 50%, #fdc51a 100%)',
                                                        transform: 'scaleX(0)',
                                                        transformOrigin: 'left',
                                                        transition: 'all 0.6s ease',
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

                    {/*===== Benefits Section =====*/}
                    <div className="benefits-section section-padding" style={{ background: '#ffffff' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                            <i className="bi bi-award me-2"></i>
                                            KEY BENEFITS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                        Key Benefits of Hiring Unarmed Security Guards
                                    </h2>
                                    <p className="lead" style={{ color: '#6c757d' }}>
                                        Hiring unarmed security guards offers several advantages that make them an excellent choice for many businesses and properties.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    {
                                        icon: <Award size={40} />,
                                        title: "Professionalism",
                                        description: "Our security guards are extensively trained in conflict resolution, emergency response, crowd control, and customer service. They are adept at handling various situations with diplomacy and professionalism."
                                    },
                                    {
                                        icon: <Users size={40} />,
                                        title: "Versatility",
                                        description: "Unarmed guards are suitable for a wide range of environments, including retail, residential, and commercial properties, offering security solutions that are adaptable to your specific needs."
                                    },
                                    {
                                        icon: <Zap size={40} />,
                                        title: "Affordable",
                                        description: "Unarmed security services provide a cost-effective alternative to armed guards, offering the necessary protection without the higher costs associated with armed security personnel."
                                    },
                                    {
                                        icon: <Eye size={40} />,
                                        title: "Visible Deterrent",
                                        description: "Their presence alone acts as a deterrent to potential criminals, reducing the likelihood of theft, vandalism, and other criminal activities."
                                    },
                                    {
                                        icon: <Shield size={40} />,
                                        title: "Non-Threatening Environment",
                                        description: "The presence of unarmed security guards promotes a non-threatening environment, making them ideal for spaces where a calm, approachable security presence is needed."
                                    },
                                    {
                                        icon: <CheckCircle size={40} />,
                                        title: "Low-Risk Areas",
                                        description: "Unarmed security guards are most suitable for low-risk areas, where their primary role is to monitor and deter, rather than to engage in active confrontation."
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
                                            <div className="position-relative p-4" style={{ zIndex: '3' }}>
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

                    {/*===== Training Section =====*/}
                    <div className="training-section section-padding" style={{ background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="training-image">
                                        <div
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                                            }}
                                        >
                                            <img
                                                src="/assets/img/blog/tranning.jpg"
                                                alt="Security Training"
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="training-content ps-lg-4">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                                <i className="bi bi-award me-2"></i>
                                                PROFESSIONAL STANDARDS
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4 text-white">
                                            Training and Certification for Unarmed Security Guards
                                        </h2>
                                        <p className="lead text-white mb-4" style={{ opacity: '0.9' }}>
                                            To become a qualified unarmed security guard, personnel must complete the Certificate II in Security Operations, which covers the essential skills needed for the role.
                                        </p>
                                        <p className="text-white mb-4" style={{ opacity: '0.9' }}>
                                            Additionally, guards are trained in emergency response, conflict resolution, and surveillance monitoring to ensure they are equipped to handle a wide range of security situations effectively. At Metro Guards, we ensure that all of our unarmed security personnel undergo continuous training and are well-versed in the latest security procedures and protocols to provide the highest level of service.
                                        </p>
                                        <div className="training-features">
                                            {[
                                                "Certificate II in Security Operations",
                                                "Emergency response training",
                                                "Conflict resolution training",
                                                "Surveillance monitoring",
                                                "Ongoing professional development"
                                            ].map((feature, index) => (
                                                <div key={index} className="feature-item d-flex align-items-center mb-3">
                                                    <div
                                                        className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            backgroundColor: '#fdc51a',
                                                            borderRadius: '50%',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        <CheckCircle size={16} />
                                                    </div>
                                                    <span className="text-white" style={{ fontWeight: '500' }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="choose-section section-padding" style={{ background: '#f8f9fa' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                            <i className="bi bi-shield-check me-2"></i>
                                            OUR COMMITMENT
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                        Why Choose Metro Guards for Unarmed Security Services?
                                    </h2>
                                    <p className="lead" style={{ color: '#6c757d' }}>
                                        At Metro Guards, we understand that every property has unique security needs. We work with you to create tailored security solutions that ensure your property is protected while remaining cost-effective.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    {
                                        icon: <User size={40} />,
                                        title: "Experienced and Trained Guards",
                                        description: "Our unarmed security personnel are highly skilled, trained, and licensed to ensure that your property is in safe hands.",
                                        number: "01"
                                    },
                                    {
                                        icon: <Wrench size={40} />,
                                        title: "Flexible Security Solutions",
                                        description: "We offer adaptable security solutions that can be customized to meet the unique needs of your property.",
                                        number: "02"
                                    },
                                    {
                                        icon: <Zap size={40} />,
                                        title: "Affordable and Effective",
                                        description: "Our unarmed security services are a cost-effective way to provide robust protection without the higher costs of armed guards.",
                                        number: "03"
                                    },
                                    {
                                        icon: <Award size={40} />,
                                        title: "Proven Track Record",
                                        description: "We have a proven track record of providing reliable and effective security services to clients across Melbourne.",
                                        number: "04"
                                    }
                                ].map((reason, index) => (
                                    <div key={index} className="col-lg-6">
                                        <div
                                            className="choose-card h-100 position-relative"
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderRadius: '0',
                                                boxShadow: 'none',
                                                border: 'none',
                                                transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                                padding: '0'
                                            }}
                                        >
                                            {/* Main card container */}
                                            <div
                                                className="position-relative h-100"
                                                style={{
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                    borderRadius: '25px',
                                                    padding: '40px 35px',
                                                    boxShadow: '0 20px 50px rgba(30, 34, 71, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                                                    border: '2px solid rgba(253, 197, 26, 0.2)',
                                                    transition: 'all 0.7s ease',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {/* Number badge */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: '20px',
                                                        right: '20px',
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #e8b502 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: 'bold',
                                                        fontSize: '1.2rem',
                                                        boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '3'
                                                    }}
                                                >
                                                    {reason.number}
                                                </div>

                                                {/* Animated background pattern */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: '-50px',
                                                        right: '-50px',
                                                        width: '150px',
                                                        height: '150px',
                                                        background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                        borderRadius: '50%',
                                                        transition: 'all 0.8s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '-30px',
                                                        left: '-30px',
                                                        width: '100px',
                                                        height: '100px',
                                                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                                                        borderRadius: '50%',
                                                        transition: 'all 0.8s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>

                                                {/* Content */}
                                                <div className="position-relative" style={{ zIndex: '2' }}>
                                                    {/* Icon with unique styling */}
                                                    <div
                                                        className="choose-icon mb-4 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            background: 'linear-gradient(135deg, #fdc51a 0%, #e8b502 100%)',
                                                            borderRadius: '20px',
                                                            color: '#1e2247',
                                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                                                            transition: 'all 0.6s ease',
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        {reason.icon}

                                                        {/* Icon glow effect */}
                                                        <div
                                                            className="position-absolute"
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                background: 'radial-gradient(circle, rgba(30, 34, 71, 0.2) 0%, transparent 70%)',
                                                                borderRadius: '20px',
                                                                opacity: '0',
                                                                transition: 'all 0.6s ease'
                                                            }}
                                                        ></div>
                                                    </div>

                                                    {/* Title with enhanced styling */}
                                                    <h4
                                                        className="fw-bold mb-3"
                                                        style={{
                                                            color: '#ffffff',
                                                            fontSize: '1.4rem',
                                                            transition: 'all 0.5s ease',
                                                            letterSpacing: '0.5px',
                                                            lineHeight: '1.3'
                                                        }}
                                                    >
                                                        {reason.title}
                                                    </h4>

                                                    {/* Description with enhanced styling */}
                                                    <p
                                                        className="mb-0"
                                                        style={{
                                                            color: 'rgba(255, 255, 255, 0.9)',
                                                            lineHeight: '1.8',
                                                            fontSize: '1rem',
                                                            transition: 'all 0.5s ease',
                                                            fontWeight: '400'
                                                        }}
                                                    >
                                                        {reason.description}
                                                    </p>
                                                </div>

                                                {/* Decorative elements */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: '15px',
                                                        left: '15px',
                                                        width: '30px',
                                                        height: '2px',
                                                        background: 'linear-gradient(90deg, #fdc51a 0%, transparent 100%)',
                                                        borderRadius: '1px',
                                                        opacity: '0',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '15px',
                                                        right: '15px',
                                                        width: '25px',
                                                        height: '2px',
                                                        background: 'linear-gradient(90deg, transparent 0%, #fdc51a 100%)',
                                                        borderRadius: '1px',
                                                        opacity: '0',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>

                                                {/* Bottom accent line */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '0',
                                                        left: '0',
                                                        width: '100%',
                                                        height: '3px',
                                                        background: 'linear-gradient(90deg, #fdc51a 0%, #1e2247 50%, #fdc51a 100%)',
                                                        transform: 'scaleX(0)',
                                                        transformOrigin: 'left',
                                                        transition: 'all 0.6s ease',
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

                    {/*===== FAQ Section =====*/}
                    <div className="faq-section section-padding" style={{ background: '#ffffff' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{ backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600' }}>
                                            <i className="bi bi-question-circle me-2"></i>
                                            FREQUENTLY ASKED QUESTIONS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e2247' }}>
                                        Everything You Need to Know About Unarmed Security
                                    </h2>
                                </div>
                            </div>

                            <div className="row g-4 g-md-3 g-lg-4">
                                <div className="col-lg-12">
                                    <div className="faq-content">
                                        {faqData.map((faq, index) => (
                                            <div key={index} className="faq-item mb-3">
                                                <div
                                                    className="faq-header p-4"
                                                    style={{
                                                        backgroundColor: activeFaq === index ? '#ffffff' : '#f8f9fa',
                                                        borderRadius: activeFaq === index ? '12px 12px 0 0' : '12px',
                                                        border: '1px solid #e9ecef',
                                                        borderLeft: '4px solid #fdc51a',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onClick={() => toggleFaq(index)}
                                                >
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h4 className="mb-0 fw-bold" style={{ color: '#1e2247', fontSize: '1.2rem' }}>
                                                            {faq.question}
                                                        </h4>
                                                        <div className="expand-icon">
                                                            <div
                                                                className="d-flex align-items-center justify-content-center"
                                                                style={{
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    backgroundColor: activeFaq === index ? '#1e2247' : '#e9ecef',
                                                                    borderRadius: '50%',
                                                                    color: activeFaq === index ? '#ffffff' : '#1e2247',
                                                                    transition: 'all 0.3s ease'
                                                                }}
                                                            >
                                                                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                                                    {activeFaq === index ? '−' : '+'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {activeFaq === index && (
                                                    <div
                                                        className="faq-content p-4"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '0 0 12px 12px',
                                                            border: '1px solid #e9ecef',
                                                            borderTop: 'none',
                                                            borderLeft: '4px solid #fdc51a',
                                                            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                            animation: 'slideDown 0.3s ease'
                                                        }}
                                                    >
                                                        <p style={{ color: '#6c757d', lineHeight: '1.7', margin: 0 }}>
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

                    {/*===== Final CTA Section =====*/}


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
                        
                        .industry-card:hover > div {
                            transform: perspective(1000px) rotateX(-5deg) translateY(-15px);
                            box-shadow: 0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
                            border-color: rgba(253, 197, 26, 0.3);
                        }
                        
                        .industry-card:hover .industry-icon {
                            transform: scale(1.15) rotateY(10deg);
                            box-shadow: 0 15px 40px rgba(30, 34, 71, 0.4), inset 0 1px 0 rgba(255,255,255,0.3);
                        }
                        
                        .industry-card:hover .industry-icon > div:first-child {
                            opacity: 1;
                            transform: rotate(360deg);
                        }
                        
                        .industry-card:hover .industry-icon > div:last-child {
                            opacity: 1;
                            transform: scale(1.2);
                        }
                        
                        .industry-card:hover h5 {
                            color: #fdc51a;
                            transform: translateY(-5px) scale(1.05);
                            text-shadow: 0 3px 6px rgba(253, 197, 26, 0.3);
                        }
                        
                        .industry-card:hover p {
                            color: #495057;
                            transform: translateY(-3px);
                        }
                        
                        .industry-card:hover > div > div:first-child,
                        .industry-card:hover > div > div:nth-child(2) {
                            transform: scale(1.5) translateY(-20px);
                            opacity: 1;
                        }
                        
                        .industry-card:hover > div > div:nth-child(6),
                        .industry-card:hover > div > div:nth-child(7) {
                            opacity: 1;
                            transform: scale(1.2);
                        }
                        
                        .industry-card:hover > div > div:last-child {
                            transform: scaleX(1);
                        }
                        
                        .benefit-card:hover {
                            transform: translateY(-12px) scale(1.03);
                            box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(253, 197, 26, 0.2);
                        }
                        
                        .benefit-card:hover .benefit-icon {
                            transform: perspective(1000px) rotateX(-10deg) rotateY(5deg) scale(1.1);
                            box-shadow: 0 20px 40px rgba(30, 34, 71, 0.4);
                        }
                        
                        .benefit-card:hover .benefit-icon > div:last-child {
                            opacity: 1;
                            transform: scale(1.2);
                        }
                        
                        .benefit-card:hover h4 {
                            color: #fdc51a;
                            transform: translateY(-3px) scale(1.05);
                            text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                        }
                        
                        .benefit-card:hover p {
                            color: #495057;
                            transform: translateY(-2px);
                        }
                        
                        .benefit-card:hover .benefit-description {
                            max-height: '200px';
                        }
                        
                        .benefit-card:hover .expand-indicator {
                            opacity: 1;
                            transform: translateX(-50%) scale(1.2);
                        }
                        
                        .benefit-card:hover > div:first-child {
                            opacity: 1;
                        }
                        
                        .benefit-card:hover > div:nth-child(2),
                        .benefit-card:hover > div:nth-child(3),
                        .benefit-card:hover > div:nth-child(4) {
                            opacity: 1;
                            transform: translateY(-10px);
                        }
                        
                        .benefit-card:hover > div:last-child {
                            opacity: 1;
                            transform: scale(1.1);
                        }
                        
                        .choose-card:hover > div {
                            transform: translateY(-10px);
                            box-shadow: 0 25px 50px rgba(30, 34, 71, 0.4), inset 0 1px 0 rgba(255,255,255,0.2);
                            border-color: rgba(253, 197, 26, 0.5);
                        }
                        
                        .choose-card:hover .choose-icon {
                            transform: scale(1.05) rotateY(5deg);
                            box-shadow: 0 12px 30px rgba(253, 197, 26, 0.4), inset 0 1px 0 rgba(255,255,255,0.4);
                        }
                        
                        .choose-card:hover .choose-icon > div:last-child {
                            opacity: 1;
                            transform: scale(1.1);
                        }
                        
                        .choose-card:hover h4 {
                            color: #fdc51a;
                            transform: translateY(-2px);
                            text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                        }
                        
                        .choose-card:hover p {
                            color: rgba(255, 255, 255, 1);
                            transform: translateY(-1px);
                        }
                        
                        .choose-card:hover > div > div:first-child {
                            transform: scale(1.1) translateY(-5px);
                            opacity: 1;
                        }
                        
                        .choose-card:hover > div > div:nth-child(2) {
                            transform: scale(1.1) translateY(-8px);
                            opacity: 1;
                        }
                        
                        .choose-card:hover > div > div:nth-child(4),
                        .choose-card:hover > div > div:nth-child(5) {
                            opacity: 1;
                            transform: scale(1.05);
                        }
                        
                        .choose-card:hover > div > div:last-child {
                            transform: scaleX(1);
                        }
                        
                        .faq-header:hover {
                            background-color: #e9ecef !important;
                            border-color: #fdc51a !important;
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                        }
                        
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        @keyframes slideDown {
                            from {
                                opacity: 0;
                                max-height: 0;
                                transform: translateY(-10px);
                            }
                            to {
                                opacity: 1;
                                max-height: 200px;
                                transform: translateY(0);
                            }
                        }
                        
                        .accordion-header:hover {
                            background-color: #e9ecef !important;
                            border-color: #fdc51a !important;
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                        }
                        
                        .accordion-content {
                            overflow: hidden;
                        }
                        
                        @media (max-width: 1200px) {
                            .industry-card .industry-icon {
                                width: 70px !important;
                                height: 70px !important;
                            }
                            
                            .benefit-card .benefit-icon {
                                width: 70px !important;
                                height: 70px !important;
                            }
                            
                            .choose-card .choose-icon {
                                width: 60px !important;
                                height: 60px !important;
                            }
                        }
                        
                        @media (max-width: 992px) {
                            .hero-section h1 {
                                font-size: 2.5rem !important;
                            }
                            
                            .display-5 {
                                font-size: 2.2rem !important;
                            }
                            
                            .industry-card {
                                margin-bottom: 30px;
                            }
                            
                            .benefit-card {
                                margin-bottom: 30px;
                            }
                            
                            .choose-card {
                                margin-bottom: 30px;
                            }
                        }
                        
                        @media (max-width: 768px) {
                            .section-padding {
                                padding: 50px 0;
                            }
                            
                            .hero-section {
                                padding: 60px 0 !important;
                            }
                            
                            .hero-section h1 {
                                font-size: 2rem !important;
                                line-height: 1.2 !important;
                            }
                            
                            .hero-section p {
                                font-size: 1rem !important;
                            }
                            
                            .display-4 {
                                font-size: 2rem !important;
                            }
                            
                            .display-5 {
                                font-size: 1.8rem !important;
                            }
                            
                            .hero-buttons {
                                flex-direction: column;
                                gap: 15px !important;
                            }
                            
                            .hero-buttons .btn {
                                width: 100%;
                                text-align: center;
                            }
                            
                            .cta-buttons {
                                flex-direction: column !important;
                                gap: 15px !important;
                            }
                            
                            .cta-buttons .btn {
                                display: block;
                                width: 100%;
                                margin-bottom: 15px;
                            }
                            
                            .industry-card {
                                padding: 20px !important;
                                margin-bottom: 25px;
                            }
                            
                            .industry-card .industry-icon {
                                width: 60px !important;
                                height: 60px !important;
                            }
                            
                            .industry-card h5 {
                                font-size: 1rem !important;
                            }
                            
                            .industry-card p {
                                font-size: 0.9rem !important;
                            }
                            
                            .benefit-card {
                                padding: 20px !important;
                                margin-bottom: 25px;
                            }
                            
                            .benefit-card .benefit-icon {
                                width: 60px !important;
                                height: 60px !important;
                            }
                            
                            .benefit-card h4 {
                                font-size: 1.1rem !important;
                            }
                            
                            .benefit-card p {
                                font-size: 0.9rem !important;
                            }
                            
                            .choose-card {
                                margin-bottom: 25px;
                            }
                            
                            .choose-card > div {
                                padding: 25px 20px !important;
                            }
                            
                            .choose-card .choose-icon {
                                width: 50px !important;
                                height: 50px !important;
                            }
                            
                            .choose-card h4 {
                                font-size: 1.2rem !important;
                            }
                            
                            .choose-card p {
                                font-size: 0.9rem !important;
                            }
                            
                            .choose-card > div > div:first-child {
                                width: 40px !important;
                                height: 40px !important;
                                font-size: 1rem !important;
                            }
                            
                            .faq-header h4 {
                                font-size: 1rem !important;
                            }
                            
                            .faq-content p {
                                font-size: 0.9rem !important;
                            }
                        }
                        
                        @media (max-width: 576px) {
                            .section-padding {
                                padding: 40px 0;
                            }
                            
                            .hero-section {
                                padding: 40px 0 !important;
                            }
                            
                            .hero-section h1 {
                                font-size: 1.8rem !important;
                            }
                            
                            .display-4 {
                                font-size: 1.8rem !important;
                            }
                            
                            .display-5 {
                                font-size: 1.6rem !important;
                            }
                            
                            .industry-card {
                                padding: 15px !important;
                            }
                            
                            .industry-card .industry-icon {
                                width: 50px !important;
                                height: 50px !important;
                            }
                            
                            .industry-card h5 {
                                font-size: 0.95rem !important;
                            }
                            
                            .industry-card p {
                                font-size: 0.85rem !important;
                            }
                            
                            .benefit-card {
                                padding: 15px !important;
                            }
                            
                            .benefit-card .benefit-icon {
                                width: 50px !important;
                                height: 50px !important;
                            }
                            
                            .benefit-card h4 {
                                font-size: 1rem !important;
                            }
                            
                            .benefit-card p {
                                font-size: 0.85rem !important;
                            }
                            
                            .choose-card > div {
                                padding: 20px 15px !important;
                            }
                            
                            .choose-card .choose-icon {
                                width: 45px !important;
                                height: 45px !important;
                            }
                            
                            .choose-card h4 {
                                font-size: 1.1rem !important;
                            }
                            
                            .choose-card p {
                                font-size: 0.85rem !important;
                            }
                            
                            .choose-card > div > div:first-child {
                                width: 35px !important;
                                height: 35px !important;
                                font-size: 0.9rem !important;
                            }
                            
                            .faq-header {
                                padding: 20px 15px !important;
                            }
                            
                            .faq-content {
                                padding: 20px 15px !important;
                            }
                            
                            .faq-header h4 {
                                font-size: 0.95rem !important;
                            }
                            
                            .faq-content p {
                                font-size: 0.85rem !important;
                            }
                        }
                    `}</style>
                </div>

                <WhyChooseUs />
                <Accreditation />
                <Subscribe />

            </Layout>
        </>
    )
}