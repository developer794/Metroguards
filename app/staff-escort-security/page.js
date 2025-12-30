'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/homepages/home1/Subscribe'
import Accreditation from '@/components/accrediation10'
import WhyChooseUs from '@/components/ui/why-choose-us';
import { Shield, Users, Settings, Building, Zap, Star, CheckCircle, Target, Phone, FileText, MapPin, Award, Clock, UserCheck } from 'lucide-react'

export default function StaffEscortSecurityPage() {
    const [activeService, setActiveService] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const services = [
        {
            title: "Professional Staff Escort Melbourne",
            icon: <Users size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Professional Staff Escort services in Melbourne offer a secure and reliable solution for ensuring the safety of your employees while they are at work.",
            details: "Trained professionals will accompany your staff members as they travel to and from their workplace, providing a reassuring layer of protection."
        },
        {
            title: "Employee Safety Services Melbourne", 
            icon: <Shield size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Employee Safety Services in Melbourne are dedicated to creating a safe and secure work environment for your staff.",
            details: "This includes risk assessment, safety training, emergency response plans, and ensuring compliance with safety regulations to reduce workplace accidents and incidents."
        },
        {
            title: "Secure Staff Escort Melbourne",
            icon: <UserCheck size={24} />,
            iconSymbol: <UserCheck size={24} />,
            description: "Secure Staff Escort services in Melbourne prioritize the safety of your employees during their daily commute or within the workplace.",
            details: "Highly trained personnel ensure that your staff members are protected from potential risks and security threats, offering peace of mind."
        },
        {
            title: "Safety Personnel for Staff Melbourne",
            icon: <Award size={24} />,
            iconSymbol: <Award size={24} />,
            description: "Safety Personnel for Staff in Melbourne are the dedicated professionals who provide continuous vigilance and support to ensure the well-being of your employees.",
            details: "They are equipped to respond to emergencies and security issues swiftly, mitigating potential risks."
        },
        {
            title: "Workforce Escort Security Melbourne",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Workforce Escort Security in Melbourne involves the provision of security personnel to accompany and protect your workforce during critical situations.",
            details: "Such as labor disputes, strikes, or when employees are working in high-risk areas. These services help maintain a safe working environment."
        },
        {
            title: "Staff Protection Services Melbourne",
            icon: <Target size={24} />,
            iconSymbol: <Target size={24} />,
            description: "Staff Protection Services in Melbourne are designed to safeguard your employees from various threats, including physical harm, harassment, or other security risks.",
            details: "These services can be tailored to meet the specific needs of your organization, offering comprehensive protection."
        },
        {
            title: "On-site Staff Safety Melbourne",
            icon: <MapPin size={24} />,
            iconSymbol: <MapPin size={24} />,
            description: "On-site Staff Safety services in Melbourne are aimed at enhancing safety within your workplace.",
            details: "Trained professionals will assess risks and implement measures to ensure that your staff can work in a secure environment, minimizing potential accidents and hazards."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="STAFF ESCORT SECURITY"
                mainTitle="Professional Staff Escort Services"
                subtitle="Expert Staff Protection & Employee Safety Services in Melbourne - Available 24/7"
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
                                             PROFESSIONAL EMPLOYEE PROTECTION
                                            </span>
                                        </div>
                                        <h1 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
                                            }}
                                        >
                                            STAFF ESCORT<br />
                                            <span style={{color: '#fdc51a'}}>SECURITY</span>
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
                                            Staff escorts are security personnel who  are responsible for providing premium security at work stations and shelters, while staff escorts provide protection to employees and visitors.

                                        Staff escorts work primarily in customer service roles. They protect  employees from physical threats and help them interact with passengers. They also help manage traffic on the transit system’s platforms.
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
                                                src="/assets/img/bg/security img.webp" 
                                                alt="Professional Staff Escort Security Team" 
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
                                                src="/assets/img/bg/security img.webp" 
                                                alt="Professional Staff Escort Team" 
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
                                        <div></div>
                                        <p className="lead" style={{color: '#6c757d', paddingTop: '20px'}}>
                                        In addition to their basic qualifications, security officers may also hold a first aid certificate, which allows them to respond to incidents and provide necessary medical attention. Security officers work in a variety of settings, including commercial premises and events, and may be involved in monitoring CCTV and managing alarm systems. They may also undertake senior roles, such as information security analysts or crowd controllers.

Security officers must be observant and able to report any suspicious activity. They may also apprehend or detain suspects until the police arrive. They watch for irregularities and ensure that sites are secure to prevent unlawful activity.

                                        The recruitment process for security officers in Australia is thorough and involves a classification procedure, including checks on personnel records and electronic circuits. It is an opportunity for potential employees to check and manage their records and application. As of May 2023, the average salary for security officers in Australia is $25 per hour, making it an attractive and rewarding career opportunity for those interested in maintaining public safety and security.
                                        </p>
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
                                                    <UserCheck size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Trained Professional Escorts</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Rapid Response & Deployment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                     OUR PROCESS
                                                </span>
                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            The Process of Hiring a Staff Escort Service
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Professional employee protection services designed to ensure the safety and security of your staff members.
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
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>24/7 availability</span>
                                                </div>
                                            </div>
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Licensed & insured</span>
                                                </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Rapid response</span>
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

                    {/*===== Why Choose Staff Escort Security Section =====*/}
                    <div className="why-choose-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-shield-exclamation me-2"></i>
                                            WHEN YOU NEED US
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Common Reasons for Staff Escort Services
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        Staff escort services are implemented when employee safety becomes a concern and immediate protection is needed.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-person-exclamation fs-3"></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">High-Risk Workplace Environments</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Provide professional escort services for employees working in high-risk areas or during dangerous shifts, ensuring their safety during travel to and from work locations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-clock fs-3"></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Late Night & Early Morning Shifts</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Escort protection for employees working during vulnerable hours when public transportation is limited and personal safety risks are heightened.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-exclamation-triangle fs-3"></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Threatening Situations</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Immediate protective escort services when employees receive threats or are involved in sensitive situations requiring enhanced personal security.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-briefcase fs-3"></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Special Events & VIP Protection</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Professional escort services for executives, VIPs, or key personnel during business events, meetings, and travel requiring discreet protection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/*===== Statistics & Advantages Section =====*/}
                    <div className="stats-advantages-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6">
                                    <div className="advantages-content">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <i className="bi bi-lightning me-2"></i>
                                                PROFESSIONAL & RELIABLE SERVICE
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Advantages of Staff Escort Security
                                        </h2>
                                        <p className="lead mb-4" style={{color: '#6c757d'}}>
                                            Our staff escort services provide peace of mind for both employers and employees, ensuring safe passage and professional protection in all environments.
                                        </p>
                                        
                                        <div className="advantages-list">
                                            {[
                                                "Enhanced employee safety and security",
                                                "Reduced workplace liability and insurance costs", 
                                                "Professional trained security personnel",
                                                "24/7 availability for emergency situations",
                                                "Customized protection plans for your business"
                                            ].map((advantage, index) => (
                                                <div key={index} className="advantage-item d-flex align-items-center mb-3">
                                                    <div 
                                                        className="check-icon me-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            backgroundColor: '#fdc51a',
                                                            borderRadius: '50%',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        <i className="bi bi-check-lg fw-bold"></i>
                                                    </div>
                                                    <span style={{color: '#1e2247', fontWeight: '500'}}>{advantage}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="stats-grid">
                                        <div className="row g-4">
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-people"></i>
                                                    </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        24/7
                                                    </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Staff Protection
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-shield-check"></i>
                                                    </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        100%
                                                    </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Licensed Guards
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-clock"></i>
                                                    </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        &lt;1
                                                    </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Hour Response Time
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-award"></i>
                                                    </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        50+
                                                    </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Years Experience
                                                    </div>
                                                </div>
                                            </div>
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
                        
                        .accordion-header:hover {
                            background-color: #e9ecef !important;
                            border-color: #fdc51a !important;
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                        }
                        
                        .reason-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                        }
                        
                        .stat-card:hover {
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