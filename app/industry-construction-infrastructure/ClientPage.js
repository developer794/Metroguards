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

export default function IndustryConstructionInfrastructurePage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Construction & Infrastructure"
                mainTitle="Metro Guards: Melbourne Construction & Civil Security"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== Hero Section - Metro Guards: Melbourne Construction & Civil Security =====*/}
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
                                            CONSTRUCTION & INFRASTRUCTURE SECURITY
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Metro Guards: Melbourne <span style={{color: '#fdc51a'}}>Construction & Civil Security</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            Melbourne's construction and infrastructure sector is always on the move. With valuable equipment, open-site access, and frequent contractor movement, risks include theft, vandalism, trespassing, and costly project delays.
                                        </p>
                                    </div>

                                    {/* Core Features Grid */}
                                    <div className="row g-4 justify-content-center mb-5">
                                        {[
                                            {icon: Shield, title: 'Fully trained security officers', color: 'blue'},
                                            {icon: Eye, title: 'Proactive site monitoring', color: 'yellow'},
                                            {icon: Wrench, title: 'Construction expertise', color: 'blue'},
                                            {icon: Clock, title: '24/7 worksite protection', color: 'yellow'}
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
                                        Metro Guards provides fully trained, proactive security officers experienced in construction, civil works, and critical infrastructure. Whether your project is in the CBD, Richmond, Werribee, Sunshine, Clayton, Cranbourne, or the northern growth corridors, we secure your workforce, equipment, and site operations around the clock.
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
                                {/* Construction Site Security */}
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
                                    onClick={() => toggleCard('construction')}
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
                                            Construction Site Security for Development Projects
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
                                                    transform: expandedCard === 'construction' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'construction' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'construction' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Construction sites across Melbourne's suburbs, like Docklands, Southbank, Footscray, and Werribee, are exposed to risks from unauthorized entry or equipment sabotage. Metro Guards ensures site integrity by monitoring perimeters, helping prevent disruptions from intruders or potential emergencies.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Our trained construction site security officers conduct regular patrols and monitor all surveillance systems.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Checking worker IDs, securing entry points, and logging vehicle access to maintain compliance and order.',
                                                    'Managing entry and exit points to ensure only authorised access, providing 24/7 proactive security across your worksite.'
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

                                {/* Equipment Yard Security */}
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
                                    onClick={() => toggleCard('equipment')}
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
                                                <Wrench size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Equipment Yard & Energy Sector Security Services
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
                                                    transform: expandedCard === 'equipment' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'equipment' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'equipment' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Areas like Laverton, Yallourn, or wind farms in regional Melbourne are prone to tampering, protests, or theft of components. Metro Guards deter thieves and maintain asset integrity with gatehouse duties, inventory checks, and night patrols.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                We help avoid costly replacements or project delays with CCTV oversight, load inspections, and fast response to alerts. Our guards help reduce downtime by keeping your equipment protected and ready for use.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Handling access management with staff badges, contractor verification, and visitor screening.',
                                                    'Following strict protocols to prevent breaches, IP loss, or operational halts, aligning with regulatory standards.'
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

                                {/* Civil Works Security */}
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
                                    onClick={() => toggleCard('civilworks')}
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
                                                <Landmark size={50} style={{color: '#fdc51a'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Civil Works Security for Roads, Bridges & Infrastructure
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
                                                    transform: expandedCard === 'civilworks' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'civilworks' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'civilworks' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Melbourne's infrastructure zones around Tullamarine, Dandenong, or Geelong come up with heightened risks of vandalism, material pilferage, or public safety incidents. Metro Guards delivers flexible security for these dynamic sites, with 24/7 coverage, alarm responses, and quick incident handling to minimize downtime.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Custom plans include traffic control and site fencing checks to protect against harassment or unauthorized access in high-traffic areas.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Mobile patrols for random inspections of trenches, machinery, and storage areas, and real-time monitoring to support project timelines.'
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

                                {/* Additional Security Coverage - Placeholder for layout */}
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
                                    onClick={() => toggleCard('additional')}
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
                                            Comprehensive Worksite Protection
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
                                                    transform: expandedCard === 'additional' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'additional' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'additional' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Beyond construction sites, equipment yards, and civil works, Metro Guards provides comprehensive security coverage for all types of worksites across Melbourne. Our flexible approach ensures your project receives the exact level of protection it needs.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                From small-scale renovations to large infrastructure projects, we deliver consistent, professional security that adapts to your changing needs.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Site assessments to identify vulnerabilities and create customized security plans.',
                                                    'Flexible guard deployment options including static guards, mobile patrols, or hybrid coverage.'
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
                                            Why Metro Guards for <span style={{color: '#fdc51a'}}>Worksite Security Needs</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            Metro Guards come with local security experts familiar with Melbourne's regulations and site challenges.
                                        </p>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="row g-4">
                                        {[
                                            {
                                                icon: Camera,
                                                title: 'Advanced Security Protocols',
                                                desc: 'We deter threats using advanced security technology, including surveillance cameras and alarm systems for construction sites, civil works, energy projects, and equipment yards.',
                                                color: 'yellow'
                                            },
                                            {
                                                icon: UserCheck,
                                                title: 'Trained & Professional Staff',
                                                desc: 'Secures your worksite with dedicated gatehouse officers who manage access, conduct active patrols, and monitor surveillance systems to prevent intruders.',
                                                color: 'blue'
                                            },
                                            {
                                                icon: Target,
                                                title: 'Site-specific Protection Plan',
                                                desc: 'Whether your project needs round-the-clock guards, roaming patrols, or camera monitoring, we review the site first and create a security setup that fits its layout.',
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
                                        Get a Worksite Security Plan at <span style={{color: '#fdc51a'}}>1300 731 173 Now!</span>
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