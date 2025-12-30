'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/homepages/home1/Subscribe'
import Accreditation from '@/components/accrediation10'
import WhyChooseUs from '@/components/ui/why-choose-us';    
import { Shield, Users, Settings, Building, Zap, Star, CheckCircle, Target, Phone, FileText, MapPin, Award, Clock, UserCheck, AlertTriangle, Rocket, Search } from 'lucide-react'

export default function AlarmResponsePage() {
    const [activeService, setActiveService] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const services = [
        {
            title: "24/7 Alarm Monitoring",
            icon: <AlertTriangle size={24} />,
            iconSymbol: <Clock size={24} />,
            description: "Constant surveillance with immediate alert assessment when alarms are triggered",
            details: "Our state-of-the-art monitoring center operates 24/7, providing continuous surveillance of your alarm systems. When an alarm is triggered, our trained professionals immediately assess the situation and dispatch appropriate response teams to your location within minutes."
        },
        {
            title: "On-Site Security Response", 
            icon: <Shield size={24} />,
            iconSymbol: <Rocket size={24} />,
            description: "Immediate dispatch of trained officers to assess and neutralize threats",
            details: "Our rapid response team consists of highly trained security professionals who are strategically positioned across Melbourne. Upon alarm activation, our officers are dispatched immediately to your location to assess, contain, and neutralize any security threats."
        },
        {
            title: "Emergency Alarm Response",
            icon: <Zap size={24} />,
            iconSymbol: <AlertTriangle size={24} />,
            description: "Rapid response to break-ins, fires, and medical emergencies with trained personnel",
            details: "Whether it's a break-in attempt, fire alarm, or medical emergency, our emergency response team is equipped to handle all types of critical situations. We work closely with local emergency services to ensure comprehensive protection and rapid resolution."
        },
        {
            title: "False Alarm Management",
            icon: <Search size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Assessment of alarm activations with thorough checks even for false alarms",
            details: "Not all alarms indicate real threats, but every activation requires professional verification. Our team conducts thorough assessments to determine the cause of each alarm activation, providing detailed reports and recommendations to minimize future false alarms."
        }
    ];

    const advantages = [
        {
            title: "Rapid Response Time",
            icon: <AlertTriangle size={24} />,
            iconSymbol: <Clock size={24} />,
            description: "On-site within minutes to address threats and minimize damage",
        },
        {
            title: "Experienced Personnel", 
            icon: <Shield size={24} />,
            iconSymbol: <Rocket size={24} />,
            description: "Extensively trained team handles all situations calmly and efficiently",
        },
        {
            title: "Advanced Technology",
            icon: <Zap size={24} />,
            iconSymbol: <AlertTriangle size={24} />,
            description: "Cutting-edge monitoring systems with real-time updates",
        },
        {
            title: "Cost-Effective",
            icon: <Search size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Affordable alternative to full-time security guards",
        },
        {
            title: "Customizable Solutions",
            icon: <AlertTriangle size={24} />,
            iconSymbol: <Clock size={24} />,
            description: "Tailored plans for residential or commercial properties",
        },
        {
            title: "Local Expertise",
            icon: <Shield size={24} />,
            iconSymbol: <Rocket size={24} />,
            description: "Melbourne-based with knowledge of local regulations and challenges",
        },
    ];

    const processSteps = [
        {
            title: "Alarm Activation",
            icon: "bi-bell",
            iconSymbol: "1",
            backgroundColor: "#1e7ef8",
            color: "#ffffff",
            description: "Our monitoring center receives the alert as soon as an alarm is triggered",
            details: "Our state-of-the-art monitoring center operates 24/7 with advanced alarm systems that immediately detect and process any security alerts. When your alarm is triggered, our trained operators receive instant notifications with all relevant property information and emergency contact details."
        },
        {
            title: "Assessment",
            icon: "bi-search",
            iconSymbol: "2",
            backgroundColor: "#28a745",
            color: "#ffffff",
            description: "Our team quickly assesses the situation to determine the appropriate response",
            details: "Our experienced security professionals conduct rapid threat assessment using multiple verification methods. We analyze the type of alarm, location details, and potential risk factors to determine the most appropriate response strategy and required resources."
        },
        {
            title: "Deployment",
            icon: "bi-person-badge",
            iconSymbol: "3",
            backgroundColor: "#fdc51a",
            color: "#1e2247",
            description: "Trained security officers are dispatched immediately to your location",
            details: "Our strategically positioned response teams are deployed within minutes of alarm activation. Our licensed security officers arrive fully equipped and prepared to handle any situation, from false alarms to genuine security threats requiring immediate intervention."
        },
        {
            title: "Follow-Up",
            icon: "bi-file-earmark-text",
            iconSymbol: "4",
            backgroundColor: "#17a2b8",
            color: "#ffffff",
            description: "Comprehensive report detailing actions taken and next steps",
            details: "After resolving the situation, we provide detailed incident reports including response times, actions taken, and recommendations for preventing future incidents. We also coordinate with relevant authorities when necessary and ensure proper documentation for insurance purposes."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="RAPID ALARM RESPONSE SECURITY"
                mainTitle="Rapid Alarm Response Security Services"
                subtitle="Professional 24/7 Alarm Response Services in Melbourne - Immediate Protection When You Need It Most"
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
                                                 RAPID SECURITY RESPONSE
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
                                            ALARM RESPONSE<br />
                                            <span style={{color: '#fdc51a'}}>SERVICES</span>
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
                                            At Metro Guards, we understand that securing your property is a top priority. Our Alarm Response Services are designed to provide fast, effective responses to any security breaches, offering peace of mind for both residential and commercial properties across Melbourne. With a skilled team of security professionals and state-of-the-art technology, we ensure your property is continuously monitored and protected.
                                            </p>
                                        
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3">
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
                                                <Phone size={16} className="me-2" />1300731173
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
                                                src="/assets/img/blog/emergency.webp" 
                                                alt="Alarm Response Team" 
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
                                                src="/assets/img/blog/emergency.webp" 
                                                alt="Professional Alarm Response Team" 
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Monitoring Center</span>
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
                                                    <UserCheck size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Trained Response Officers</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Immediate Deployment</span>
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
                                                Our Alarm Response Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                When your alarm sounds, trust our professional team to respond immediately and handle any security threat with expertise.
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
                                                            
                                                            {/* Additional service features */}
                                                            <div className="service-features mt-3 pt-3" style={{borderTop: '1px solid #f0f0f0'}}>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Professional trained staff</span>
                                                                        </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Immediate response</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Licensed & insured</span>
                                                                        </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>24/7 availability</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
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

                    {/*===== How Alarm Response Works Section =====*/}
                    <div className="alarm-process-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                        <div className="process-content ms-lg-4">
                                            <div className="section-header mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                        <i className="bi bi-gear me-2"></i>
                                                        OUR PROCESS
                                            </span>
                                        </div>
                                                                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                    HOW ALARM RESPONSE WORKS
                                                </h2>
                                </div>
                                
                                            {/* Expandable Process Steps */}
                                            <div className="process-accordion">
                                                {processSteps.map((step, index) => (
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
                                                                        className="step-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                                            width: '50px',
                                                                            height: '50px',
                                                                            borderRadius: '10px',
                                                                            backgroundColor: step.backgroundColor,
                                                                            color: step.color,
                                                                            fontSize: '1.5rem',
                                                                            fontWeight: 'bold'
                                                                        }}
                                                                    >
                                                                        {step.iconSymbol}
                                                </div>
                                                                    <div>
                                                                        <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{step.title}</h5>
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
                                                                    {step.description}
                                                                </p>
                                                                <div className="step-details">
                                                                    <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                        {step.details}
                                                    </p>
                                                </div>
                                                                
                                                                {/* Additional step features */}
                                                                <div className="step-features mt-3 pt-3" style={{borderTop: '1px solid #f0f0f0'}}>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="feature-item d-flex align-items-center mb-2">
                                                                                <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                                <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Immediate activation</span>
                                            </div>
                                                                            <div className="feature-item d-flex align-items-center mb-2">
                                                                                <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                                <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Professional handling</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="feature-item d-flex align-items-center mb-2">
                                                                                <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                                <span style={{fontSize: '0.85rem', color: '#6c757d'}}>24/7 availability</span>
                                                                            </div>
                                                                            <div className="feature-item d-flex align-items-center mb-2">
                                                                                <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                                <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Complete documentation</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                        </div>
                                    ))}
                                            </div>
                                        </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="process-image-section me-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/emergency.webp" 
                                                alt="Alarm Response Process" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div 
                                                className="overlay-badge position-absolute"
                                                style={{
                                                    bottom: '30px',
                                                    left: '30px',
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '15px 25px',
                                                    borderRadius: '10px',
                                                    fontWeight: '700',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                <AlertTriangle size={16} className="me-2" /> 4-Step Process
                                            </div>
                                        </div>
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Rapid Response Within Minutes</span>
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
                                                    <Shield size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Professional Threat Assessment</span>
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
                                                    <FileText size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Detailed Incident Reporting</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>

                    {/*===== Specialized Alarm Response Services Section =====*/}
                    <div className="services-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-image-section me-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/emergency.webp" 
                                                alt="Specialized Alarm Response Services" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div 
                                                className="overlay-badge position-absolute"
                                                style={{
                                                    bottom: '30px',
                                                    left: '30px',
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '15px 25px',
                                                    borderRadius: '10px',
                                                    fontWeight: '700',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                <Shield size={16} className="me-2" /> Specialized Services
                                            </div>
                                        </div>
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Fire Safety Response Teams</span>
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
                                                    <Building size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Commercial Property Protection</span>
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
                                                    🏠
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Residential Security Solutions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-content ms-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    COMPREHENSIVE PROTECTION
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Specialized Alarm Response Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Our specialized services cover all types of alarm responses with professional expertise tailored to each situation.
                                            </p>
                                        </div>
                                        
                                        {/* Service Cards Grid */}
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div 
                                                    className="service-card h-100 p-4"
                                                    style={{
                                                        backgroundColor: '#f8f9fa',
                                                        borderRadius: '15px',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        borderLeft: '4px solid #fdc51a'
                                                    }}
                                                >
                                                    <h5 className="mb-3 fw-bold" style={{color: '#1e2247'}}>
                                                        Fire Alarm Response
                                                    </h5>
                                                    <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.9rem'}}>
                                                        We respond promptly to fire alarm activations, working in conjunction with emergency services to ensure that your property and its occupants are safe.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div 
                                                    className="service-card h-100 p-4"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        borderLeft: '4px solid #fdc51a'
                                                    }}
                                                >
                                                    <h5 className="mb-3 fw-bold" style={{color: '#1e2247'}}>
                                                        Commercial Alarm Response
                                                    </h5>
                                                    <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.9rem'}}>
                                                        Our services for commercial properties include comprehensive alarm monitoring and rapid response to protect your business assets.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div 
                                                    className="service-card h-100 p-4"
                                                    style={{
                                                        backgroundColor: '#f8f9fa',
                                                        borderRadius: '15px',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        borderLeft: '4px solid #fdc51a'
                                                    }}
                                                >
                                                    <h5 className="mb-3 fw-bold" style={{color: '#1e2247'}}>
                                                        Residential Alarm Response
                                                    </h5>
                                                    <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.9rem'}}>
                                                        Protecting your home and family is our priority. Our residential alarm response services provide peace of mind with rapid response.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div 
                                                    className="service-card h-100 p-4"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        borderLeft: '4px solid #fdc51a'
                                                    }}
                                                >
                                                    <h5 className="mb-3 fw-bold" style={{color: '#1e2247'}}>
                                                        Comprehensive Reporting
                                                    </h5>
                                                    <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.9rem'}}>
                                                        After every alarm response, we provide a detailed incident report including time of activation, officer arrival time, and actions taken.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Our Advantages Section =====*/}
                    <div className="services-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-5">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/emergency.webp" 
                                                alt="Professional Alarm Response Team" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div 
                                                className="overlay-badge position-absolute"
                                                style={{
                                                    bottom: '30px',
                                                    left: '30px',
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '15px 25px',
                                                    borderRadius: '10px',
                                                    fontWeight: '700',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                <CheckCircle size={16} className="me-2" /> Licensed & Insured
                                            </div>
                                        </div>
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
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
                                                    
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Immediate threat assessment and neutralization</span>
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
                                                    
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 monitoring center with trained operators</span>
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
                                                    
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Rapid deployment across Melbourne region</span>
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
                                                   
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Comprehensive incident reporting and documentation</span>
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
                                                    
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Integration with emergency services when required</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    The Metro Guards Advantage
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Why Choose Our Alarm Response Services?
                                            </h2>
                                            
                                        </div>
                                        
                                        {/* Expandable Service Cards */}
                                        <div className="services-accordion">
                                            {advantages.map((advantage, index) => (
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
                                                                    {advantage.iconSymbol}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{advantage.title}</h5>
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
                                                                {advantage.description}
                                                            </p>
                                                            
                                                            
                                                            {/* Additional service features */}
                                                            <div className="service-features mt-3 pt-3" style={{borderTop: '1px solid #f0f0f0'}}>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Professional trained staff</span>
                                                                        </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Immediate response</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Licensed & insured</span>
                                                                        </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>24/7 availability</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
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

                    

                    {/*===== Contact CTA Section =====*/}
                    <WhyChooseUs />
                    <Accreditation />
                    <Subscribe />

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
                        
                        .trust-item:hover {
                            transform: translateY(-5px);
                            transition: all 0.3s ease;
                        }
                        
                        .floating-badge {
                            animation: float 3s ease-in-out infinite;
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-10px); }
                        }
                        
                        .service-header:hover {
                            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                        }
                        
                        .reason-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                        }
                        
                        .stat-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
                        }
                        
                        .process-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
                        }
                        
                        .service-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
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
                        
                        @media (max-width: 768px) {
                            .section-padding {
                                padding: 60px 0;
                            }
                            
                            .display-4 {
                                font-size: 2.5rem;
                            }
                            
                            .display-5 {
                                font-size: 2rem;
                            }
                            
                            .contact-info-grid {
                                flex-direction: column;
                                gap: 20px;
                            }
                            
                            .cta-buttons .btn {
                                display: block;
                                width: 100%;
                                margin-bottom: 15px;
                            }
                        }
                    `}</style>
                </div>
            </Layout>
        </>
    )
}