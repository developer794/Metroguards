'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, FileText, ChevronDown, Truck, Package } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import Testimonials from '@/components/Testimonials';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function IndustryHealthcareAgedPage() {
    const [expandedCard, setExpandedCard] = useState(null);
    
    const toggleCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return (
        <>
            <style>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Healthcare & Aged Care"
                mainTitle="Metro Guards: Melbourne Healthcare & Aged Care Security"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== Hero Section - Metro Guards: Melbourne Healthcare & Aged Care Security =====*/}
                    <div className="hero-section" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <span 
                                            className="badge px-4 py-2 mb-3" 
                                            style={{
                                                backgroundColor: '#fdc51a', 
                                                color: '#1e2247', 
                                                fontWeight: '600',
                                                fontSize: '0.9rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                borderRadius: '25px'
                                            }}
                                        >
                                            HEALTHCARE & AGED CARE SECURITY
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Metro Guards: Melbourne <span style={{color: '#fdc51a'}}>Healthcare & Aged Care Security</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            Melbourne's healthcare and aged care facilities operate around the clock, with patients, staff, visitors, and sensitive medical equipment requiring constant protection. Security challenges such as unauthorised access, patient safety risks, theft, and workplace incidents are high.
                                        </p>
                                    </div>

                                    {/* Core Features Grid */}
                                    <div className="row g-4 justify-content-center mb-5">
                                        {[
                                            {icon: Shield, title: 'Customised security protocols', color: 'blue'},
                                            {icon: Lock, title: 'Protection of restricted areas', color: 'yellow'},
                                            {icon: UserCheck, title: 'Patient interaction standards', color: 'blue'},
                                            {icon: Clock, title: '24/7 healthcare protection', color: 'yellow'}
                                        ].map((item, index) => {
                                            const Icon = item.icon;
                                            const isBlue = item.color === 'blue';
                                            return (
                                                <div key={index} className="col-lg-3 col-md-6">
                                                    <div style={{
                                                        background: '#ffffff',
                                                        borderRadius: '15px',
                                                        padding: '30px',
                                                        height: '100%',
                                                        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        textAlign: 'center'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                                        e.currentTarget.style.boxShadow = isBlue 
                                                            ? '0 15px 35px rgba(30, 34, 71, 0.15)'
                                                            : '0 15px 35px rgba(253, 197, 26, 0.2)';
                                                        e.currentTarget.style.borderColor = isBlue 
                                                            ? 'rgba(30, 34, 71, 0.2)'
                                                            : 'rgba(253, 197, 26, 0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                                        e.currentTarget.style.borderColor = '#e9ecef';
                                                    }}
                                                    >
                                                        <div style={{
                                                            width: '70px',
                                                            height: '70px',
                                                            background: isBlue
                                                                ? 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                                : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                            borderRadius: '15px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            margin: '0 auto 20px auto'
                                                        }}>
                                                            <Icon size={35} style={{color: isBlue ? '#fdc51a' : '#1e2247'}} />
                                                        </div>
                                                        <h5 style={{color: '#1e2247', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0'}}>
                                                            {item.title}
                                                        </h5>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        textAlign: 'center',
                                        maxWidth: '900px',
                                        margin: '0 auto'
                                    }}>
                                        Metro Guards provides reliable security officers trained specifically for healthcare and aged care environments. We ensure your staff, patients, and assets remain safe 24/7 with professional, compassionate security solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Security Solutions Section =====*/}
                    <div style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        paddingTop: '80px',
                        paddingBottom: '80px'
                    }}>
                        <div className="container">
                            <div className="row g-4">
                                {/* Hospital Security */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('hospital')}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 15px 45px rgba(30, 34, 71, 0.15)';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#e9ecef';
                                    }}
                                    >
                                        <div className="text-center mb-4">
                                            <div style={{
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}>
                                                <Building size={50} style={{color: '#fdc51a'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Trained Medical Security Officers for Hospitals
                                        </h3>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <ChevronDown 
                                                size={36} 
                                                style={{
                                                    color: '#fdc51a',
                                                    transition: 'transform 0.3s ease',
                                                    transform: expandedCard === 'hospital' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'hospital' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'hospital' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Hospitals across Melbourne, including in suburbs like Southbank, Richmond, Carlton, and St Kilda, manage high foot traffic, emergency situations, and sensitive patient areas. Metro Guards coordinate with carers to ensure compliance, manage deliveries, and respond to alarms, ensuring a safe, homely environment.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Our trained officers focus on maintaining dignity, safety, and peace of mind for patients and healthcare workers alike.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Monitoring entrances and exits to prevent unauthorised access and conducting internal and external patrols around wards, parking, and public areas.',
                                                    'Operating CCTV systems with real-time monitoring and incident reporting, and responding quickly to emergencies, medical incidents, and disturbances.'
                                                ].map((item, idx) => (
                                                    <li key={idx} style={{
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '30px',
                                                        position: 'relative',
                                                        marginBottom: '12px'
                                                    }}>
                                                        <CheckCircle size={18} style={{
                                                            color: '#fdc51a',
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: '4px'
                                                        }} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Clinic Security */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('clinic')}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 15px 45px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#e9ecef';
                                    }}
                                    >
                                        <div className="text-center mb-4">
                                            <div style={{
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}>
                                                <UserCheck size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Professional Security Guards for Clinics & Outpatient Services
                                        </h3>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <ChevronDown 
                                                size={36} 
                                                style={{
                                                    color: '#1e2247',
                                                    transition: 'transform 0.3s ease',
                                                    transform: expandedCard === 'clinic' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'clinic' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'clinic' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Melbourne's clinics in suburbs like Richmond, Hawthorn, or Werribee see diverse patients and staff, with open waiting areas prone to verbal abuse or privacy breaches. Metro Guards help manage patient and visitor flow, monitor entrances, and ensure staff safety.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Our trained security officers engage courteously with patients while maintaining a safe, calm, and well-protected environment.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Behaviour monitoring and support for at-risk individuals, and strict access control and visitor verification to maintain safety.',
                                                    'Custom security plans include reception support, patient escorts, and regular site checks during peak hours, safeguarding against theft and harassment.'
                                                ].map((item, idx) => (
                                                    <li key={idx} style={{
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '30px',
                                                        position: 'relative',
                                                        marginBottom: '12px'
                                                    }}>
                                                        <CheckCircle size={18} style={{
                                                            color: '#1e2247',
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: '4px'
                                                        }} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Aged Care Security */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('agedcare')}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 15px 45px rgba(30, 34, 71, 0.15)';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#e9ecef';
                                    }}
                                    >
                                        <div className="text-center mb-4">
                                            <div style={{
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}>
                                                <Home size={50} style={{color: '#fdc51a'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Aged Care & Mental Health Facility Security
                                        </h3>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <ChevronDown 
                                                size={36} 
                                                style={{
                                                    color: '#fdc51a',
                                                    transition: 'transform 0.3s ease',
                                                    transform: expandedCard === 'agedcare' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'agedcare' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'agedcare' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Aged care and mental health facilities in Melbourne suburbs such as Doncaster, Glen Waverley, Footscray, and Dandenong require tailored security solutions to protect vulnerable residents and sensitive areas.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Metro Guards provides gentle, resident-focused security, enforcing access controls while respecting dignity and routines.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Concierge-style support at receptions, logging visits, escorting guests, and mediating conflicts professionally.',
                                                    'Ongoing internal and external patrols, alarm monitoring, and CCTV oversight to deter vandalism.'
                                                ].map((item, idx) => (
                                                    <li key={idx} style={{
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '30px',
                                                        position: 'relative',
                                                        marginBottom: '12px'
                                                    }}>
                                                        <CheckCircle size={18} style={{
                                                            color: '#fdc51a',
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: '4px'
                                                        }} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Comprehensive Healthcare Protection */}
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('comprehensive')}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 15px 45px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#e9ecef';
                                    }}
                                    >
                                        <div className="text-center mb-4">
                                            <div style={{
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}>
                                                <Shield size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Comprehensive Healthcare Protection
                                        </h3>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <ChevronDown 
                                                size={36} 
                                                style={{
                                                    color: '#1e2247',
                                                    transition: 'transform 0.3s ease',
                                                    transform: expandedCard === 'comprehensive' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'comprehensive' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'comprehensive' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Beyond hospitals, clinics, and aged care facilities, Metro Guards provides comprehensive security coverage for all types of healthcare environments across Melbourne. Our compassionate approach ensures your facility receives patient-focused protection.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                From small medical practices to large healthcare complexes, we deliver consistent, professional security that respects the sensitive nature of healthcare environments.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Facility assessments to identify vulnerabilities and create patient-centered security plans.',
                                                    'Flexible deployment options including concierge services, mobile patrols, or dedicated ward security.'
                                                ].map((item, idx) => (
                                                    <li key={idx} style={{
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '30px',
                                                        position: 'relative',
                                                        marginBottom: '12px'
                                                    }}>
                                                        <CheckCircle size={18} style={{
                                                            color: '#1e2247',
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: '4px'
                                                        }} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Metro Guards Section =====*/}
                    <div style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        paddingTop: '80px',
                        paddingBottom: '80px'
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <span 
                                            className="badge px-4 py-2 mb-3" 
                                            style={{
                                                backgroundColor: '#1e2247', 
                                                color: '#fdc51a', 
                                                fontWeight: '600',
                                                fontSize: '0.9rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                borderRadius: '25px'
                                            }}
                                        >
                                            WHY CHOOSE US
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Why Choose Metro Guards for <span style={{color: '#fdc51a'}}>Healthcare & Aged Care Security</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            Metro Guards assess Melbourne healthcare and aged care facilities thoroughly and implement tailored security measures for smooth daily operations.
                                        </p>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="row g-4">
                                        {[
                                            {
                                                icon: Shield,
                                                title: 'Specialised Healthcare Security Expertise',
                                                desc: 'Our security officers are trained in healthcare protocols and patient-care environments. They understand and anticipate behavioural and safety challenges, responding professionally at all times.',
                                                color: 'yellow'
                                            },
                                            {
                                                icon: Clock,
                                                title: '24/7 Protection for Medical Facilities',
                                                desc: 'Metro Guards provides continuous monitoring and on-site presence to ensure hospitals, clinics, and aged-care centres remain secure at all hours, weekends, and public holidays.',
                                                color: 'blue'
                                            },
                                            {
                                                icon: Camera,
                                                title: 'Modern, Technology-Driven Security',
                                                desc: 'We use advanced surveillance, access control systems, and real-time communication tools to respond swiftly to incidents and keep restricted areas secure.',
                                                color: 'yellow'
                                            }
                                        ].map((item, index) => {
                                            const Icon = item.icon;
                                            const isBlue = item.color === 'blue';
                                            return (
                                                <div key={index} className="col-lg-4 col-md-6">
                                                    <div style={{
                                                        background: '#ffffff',
                                                        borderRadius: '20px',
                                                        padding: '40px',
                                                        height: '100%',
                                                        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                                        e.currentTarget.style.boxShadow = isBlue 
                                                            ? '0 15px 35px rgba(30, 34, 71, 0.15)'
                                                            : '0 15px 35px rgba(253, 197, 26, 0.2)';
                                                        e.currentTarget.style.borderColor = isBlue 
                                                            ? 'rgba(30, 34, 71, 0.2)'
                                                            : 'rgba(253, 197, 26, 0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                                        e.currentTarget.style.borderColor = '#e9ecef';
                                                    }}
                                                    >
                                                        <div style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            background: isBlue
                                                                ? 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                                : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                            borderRadius: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginBottom: '25px'
                                                        }}>
                                                            <Icon size={40} style={{color: isBlue ? '#fdc51a' : '#1e2247'}} />
                                                        </div>
                                                        <h4 style={{color: '#1e2247', fontWeight: '700', marginBottom: '15px', fontSize: '1.4rem'}}>
                                                            {item.title}
                                                        </h4>
                                                        <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0'}}>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== CTA Section =====*/}
                    <div className="cta-section" style={{
                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 50%, #1e2247 100%)',
                        paddingTop: '80px',
                        paddingBottom: '80px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background decorative elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            left: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            right: '-50px',
                            width: '250px',
                            height: '250px',
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }}></div>

                        <div className="container" style={{position: 'relative', zIndex: 1}}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-center">
                                    {/* Icon */}
                                    <div style={{
                                        width: '100px',
                                        height: '100px',
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 30px auto',
                                        boxShadow: '0 20px 50px rgba(253, 197, 26, 0.4)',
                                        animation: 'pulse 2s infinite'
                                    }}>
                                        <Phone size={50} style={{color: '#1e2247'}} />
                                    </div>

                                    <h2 
                                        className="display-3 fw-bold mb-4" 
                                        style={{
                                            color: '#ffffff',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Call <span style={{color: '#fdc51a'}}>1300 731 173</span> for Healthcare Security Support Now!
                                    </h2>

                                    {/* Phone Button */}
                                    <a 
                                        href="tel:1300731173" 
                                        style={{
                                            textDecoration: 'none',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                            color: '#1e2247',
                                            padding: '20px 50px',
                                            borderRadius: '50px',
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            border: 'none',
                                            boxShadow: '0 10px 30px rgba(253, 197, 26, 0.4)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            marginTop: '20px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.5)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 197, 26, 0.4)';
                                        }}
                                    >
                                        <Phone size={28} style={{color: '#1e2247'}} />
                                        <span>Call Now: 1300 731 173</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
               
                
                <WhyChooseUs />
                <Accreditation />
               
                
                <Testimonials />
                
                
                
               
            </Layout>
            </> ) }