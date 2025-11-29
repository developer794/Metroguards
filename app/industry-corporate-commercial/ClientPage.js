'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, FileText, ChevronDown } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import Testimonials from '@/components/Testimonials';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function IndustryCorporateCommercialPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Corporate & Commercial"
                mainTitle="Corporate & Commercial Security Solutions Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== Hero Section - Reliable Corporate & Commercial Security Solutions =====*/}
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
                                            CORPORATE SECURITY
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Reliable Corporate & Commercial <span style={{color: '#fdc51a'}}>Security Solutions Melbourne</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            With rising crime rates and growing security threats, safeguarding your people and property isn't optional in Melbourne and its suburbs. At Metro Guards, we deliver innovative and eagle-eyed protection with:
                                        </p>
                                    </div>

                                    {/* Core Features Grid */}
                                    <div className="row g-4 justify-content-center mb-5">
                                        {[
                                            {icon: Shield, title: 'Trained guards', color: 'blue'},
                                            {icon: Lock, title: 'Access control', color: 'yellow'},
                                            {icon: Camera, title: 'CCTV monitoring', color: 'blue'},
                                            {icon: Bell, title: 'Emergency response', color: 'yellow'}
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
                                        With internal and external patrols, real-time monitoring, and thorough inspections, we significantly reduce the risk of trespassing or unwanted activity. Our professional security guards ensure your workplace remains safe 24/7 so your workforce and customers can focus on what matters most.
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
                                {/* Office Tower Security */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('office')}
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
                                            Office Tower Security & Concierge Support
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
                                                    transform: expandedCard === 'office' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'office' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'office' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Office towers across Melbourne experience constant foot traffic and shared facilities. They need controlled access and strict security protocols. Our security officers provide concierge support, visitor screening, lift and lobby monitoring, and after-hours patrols.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Whether your building is in Docklands, Southbank, or the CBD, Metro Guards deliver protection for your tenants, staff, and clients.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Keep your business premises safe by addressing suspicious activities and visitor management.',
                                                    'Build up your reputation by avoiding unwanted activities such as racial and sexual harassment.'
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

                                {/* Business Park Security */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('business')}
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
                                                <Landmark size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Business Park Security Solutions
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
                                                    transform: expandedCard === 'business' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'business' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'business' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Melbourne's business hubs comprise multiple tenants, shared workspaces, and heavy vehicle traffic. They require flexible and strategic security due to open layouts, mixed operations, and extended trading hours.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                We reinforce your grounds with round-the-clock protection and clear operational reporting. Our licensed guards are trained to operate access control systems and surveillance equipment effectively.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Proactively assess risks to identify weak points within designated commercial and business centres.',
                                                    'Keep a close check on theft and vandalism with access management, CCTV surveillance, and emergency handling.'
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

                                {/* Legal Firm & Tech Sector Security */}
                                <div className="col-lg-4">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleCard('legal')}
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
                                                <FileText size={50} style={{color: '#fdc51a'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Legal Firm & Tech Sector Security
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
                                                    transform: expandedCard === 'legal' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'legal' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'legal' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                With theft, threats, and workplace incidents on the rise, having a reliable security partner is essential. Metro Guards strengthens your workplace safety with precision, respect, and total confidentiality for legal tech companies in Melbourne.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Our licensed security officers understand the sensitivity of legal work, such as confidential documents, high-profile clients, and emotionally charged situations.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Safeguard your assets, intellectual property, and staff, and keep your operations uninterrupted and compliant.',
                                                    'Get reception security, controlled access, client behaviour monitoring, and immediate response to disturbances.'
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
                                            Why Metro Guards for <span style={{color: '#fdc51a'}}>Corporate Security Guard Services</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            For Melbourne businesses, offices, and firms, preventing theft, unauthorised access, and other security breaches is essential for smooth operations. Our professional guards deter crime by monitoring live surveillance and proactively identifying any emerging risks or security threats.
                                        </p>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="row g-4">
                                        {[
                                            {
                                                icon: Shield,
                                                title: 'Safe Operations',
                                                desc: 'On-time monitoring of suspicious activities and visitor management ensures your business premises remain safe from potential security risks.',
                                                color: 'yellow'
                                            },
                                            {
                                                icon: Building,
                                                title: 'Any Workplace Size',
                                                desc: 'Whether it\'s a small office or a large complex, we create a secure, welcoming space that boosts confidence for staff and clients.',
                                                color: 'blue'
                                            },
                                            {
                                                icon: Target,
                                                title: 'Tailored Security Plan',
                                                desc: 'You get a tailored security plan including front-desk management, patrols, access control, CCTV monitoring, after-hours coverage, and emergency handling.',
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
                                        Dial <span style={{color: '#fdc51a'}}>1300 731 173</span> to Audit Your Commercial Site Now
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