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

export default function IndustryRetailHospitalityPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Retail & Hospitality"
                mainTitle="Security Guards for Retail & Hospitality Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== Hero Section - Security Guards for Retail & Hospitality =====*/}
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
                                            RETAIL & HOSPITALITY SECURITY
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Security Guards for <span style={{color: '#fdc51a'}}>Retail & Hospitality Melbourne</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            Melbourne's retail hubs, such as Bourke Street Mall, Melbourne Central, The District Docklands, Highpoint, Chadstone, and Bridge Road, come with theft and vandalism as real concerns. Despite massive foot traffic, Metro Guards keep things running smoothly with:
                                        </p>
                                    </div>

                                    {/* Core Features Grid */}
                                    <div className="row g-4 justify-content-center mb-5">
                                        {[
                                            {icon: Search, title: 'Discreet patrols', color: 'blue'},
                                            {icon: Shield, title: 'Loss-prevention measures', color: 'yellow'},
                                            {icon: Users, title: 'Crowd management', color: 'blue'},
                                            {icon: AlertTriangle, title: 'Proactive risk handling', color: 'yellow'}
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
                                        Our licensed security guards provide concierge support, entry screening, and internal and external patrols to prevent unruly patrons and unauthorized access. With real-time monitoring and quick emergency handling, we protect your people, property, and reputation at every hour.
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
                                {/* Hospitality Security */}
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
                                    onClick={() => toggleCard('hospitality')}
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
                                            Hospitality Security for Dining, Hotels & Venues
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
                                                    transform: expandedCard === 'hospitality' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'hospitality' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'hospitality' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Prioritising the safety of guests helps Melbourne hotels build confidence and enhance their reputation. Metro Guards create a welcoming atmosphere where diners and guests feel secure, allowing your staff to shine in service.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                We oversee parking, handle VIP escorts, and respond swiftly to disturbances, ensuring guest safety and seamless operations. Get quick yet custom security solutions tailored for Melbourne's restaurants, bars, hotels, and live venues.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Surveillance Monitoring with 24/7 CCTV and security system checks to spot unauthorised access.',
                                                    'Regular visible patrolling of lobbies, hallways, parking areas, and key zones to deter risks.'
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

                                {/* Retail Security */}
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
                                    onClick={() => toggleCard('retail')}
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
                                                <Building size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Retail Security for Shopping Centres & Storefronts
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
                                                    transform: expandedCard === 'retail' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'retail' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'retail' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Metro Guards ensure your business stays safe, and your operations run smoothly. Our retail security team specialises in loss prevention, floor monitoring, stock protection, and customer safety. We keep a close watch on suspicious behaviour and manage entry and exit points.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                We help retail managers and owners maintain order and protect their customers with surveillance systems, fire safety protocols, and emergency response plans.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Prevent theft, vandalism, and disorderly behaviour with 24/7 on-site security presence and advanced monitoring systems.',
                                                    'Get trained guards with an in-depth understanding of Melbourne\'s shopping culture for customer and staff protection.'
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

                                {/* Major Events Security */}
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
                                    onClick={() => toggleCard('events')}
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
                                                <Calendar size={50} style={{color: '#fdc51a'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Major Events Security for Festivals & Gatherings
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
                                                    transform: expandedCard === 'events' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'events' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'events' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Melbourne's calendar is packed with major events, from the Australian Open at Rod Laver Arena to festivals like Moomba or the Food & Wine Festival. These draw huge crowds, requiring strategic crowd control, strict security, and rapid incident response.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                We work hand-in-hand with your event team to make sure every guest enjoys a safe and relaxed experience from entry to exit.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Real-time monitoring and screening of entry points and traffic flow to prevent bottlenecks or safety issues.',
                                                    'Avoiding threats like vandalism or overcrowding by proactively protecting attendees and your event\'s success.'
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
                                            Why Choose Metro Guards for <span style={{color: '#fdc51a'}}>Retail & Hotel Security in Melbourne</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            Melbourne's retail outlets, hospitality spots, and event organizers rely on us to prevent theft, breaches, and disruptions. Our licensed and trained guards keep your premises safe from potential threats with customized security plans.
                                        </p>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="row g-4">
                                        {[
                                            {
                                                icon: MapPin,
                                                title: 'Local Security Staff',
                                                desc: 'Our guards are available across Melbourne suburbs like CBD, Southbank, Docklands, St Kilda, Carlton, Richmond, Prahran, Fitzroy, and Chadstone for crowd control, CCTV monitoring, access management, and rapid emergency response.',
                                                color: 'yellow'
                                            },
                                            {
                                                icon: Target,
                                                title: 'Affordable Prices',
                                                desc: 'We provide affordable and transparent security solutions for Melbourne businesses, with no hidden fees.',
                                                color: 'blue'
                                            },
                                            {
                                                icon: Clock,
                                                title: '24/7 Availability and Support',
                                                desc: 'Our security team is on call around the clock across Melbourne suburbs, ready to respond instantly to any situation, day or night.',
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
                                        Call <span style={{color: '#fdc51a'}}>1300 731 173</span> to Secure Your Venue or Hotel Now!
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