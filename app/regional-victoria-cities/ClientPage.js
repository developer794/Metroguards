'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star, FileText } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import Testimonials from '@/components/Testimonials';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function RegionalVictoriaCitiesPage() {
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Regional Victoria Cities"
                mainTitle="Reliable Security & Mobile Patrol Services Across Regional Victoria"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== About Metro Guards in Northwest Melbourne Section =====*/}
                    <div className="about-section" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
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
                                            ABOUT US
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            About Metro Guards in <span style={{color: '#fdc51a'}}>Regional Victoria</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            Metro Guards provides reliable and fully insured security services to businesses and residents across Regional Victoria, including Geelong, Ballarat, Bendigo, Shepparton, and other major regional cities.
                                        </p>
                                    </div>

                                    {/* Northwest Melbourne Info Cards */}
                                    <div className="row g-4">
                                        <div className="col-lg-6">
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
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(30, 34, 71, 0.15)';
                                                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
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
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                    borderRadius: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '25px'
                                                }}>
                                                    <MapPin size={40} style={{color: '#fdc51a'}} />
                                                </div>
                                                <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '20px', fontSize: '1.6rem'}}>
                                                    Regional Victoria features:
                                                </h3>
                                                <ul style={{
                                                    listStyle: 'none',
                                                    padding: 0,
                                                    margin: 0
                                                }}>
                                                    {[
                                                        'Residential precincts (Geelong, Warrnambool, Torquay)',
                                                        'Industrial & logistics zones (Ballarat, Bendigo, Traralgon)',
                                                        'Construction & development projects (Morwell, Sale, Ararat)',
                                                        'Event venues & community centres (Shepparton, Bairnsdale, Echuca)'
                                                    ].map((item, index) => (
                                                        <li key={index} style={{
                                                            color: '#6c757d',
                                                            fontSize: '1.1rem',
                                                            lineHeight: '2',
                                                            paddingLeft: '30px',
                                                            position: 'relative',
                                                            marginBottom: '10px'
                                                        }}>
                                                            <CheckCircle size={20} style={{
                                                                color: '#fdc51a',
                                                                position: 'absolute',
                                                                left: 0,
                                                                top: '6px'
                                                            }} />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Why Choose Metro Guards */}
                                        <div className="col-lg-6">
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
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(253, 197, 26, 0.2)';
                                                e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
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
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                    borderRadius: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '25px'
                                                }}>
                                                    <Shield size={40} style={{color: '#1e2247'}} />
                                                </div>
                                                <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '20px', fontSize: '1.6rem'}}>
                                                    Why Choose Metro Guards?
                                                </h3>
                                                <p style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    marginBottom: '0'
                                                }}>
                                                    With crime rising across regional cities, Geelong alone recorded 4,047 reported criminal offences in 2025, equating to approximately 69,644 offences per 100,000 people (AU Crime Tracker). This highlights the growing need for professional, round-the-clock security. Metro Guards' experienced teams provide visible protection, rapid response, and reliable on-site coverage for homes, businesses, industrial sites, and construction projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== South–East Melbourne Suburbs We Serve Section =====*/}
                    <div style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
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
                                            SERVICE AREA
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Regional Victoria <span style={{color: '#fdc51a'}}>Cities We Serve</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '800px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            
                                        </p>
                                    </div>

                                    {/* Suburbs Table */}
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <div style={{
                                                background: '#ffffff',
                                                borderRadius: '20px',
                                                padding: '0',
                                                overflow: 'hidden',
                                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                                border: '2px solid #fdc51a'
                                            }}>
                                                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                                    <thead style={{
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                    }}>
                                                        <tr>
                                                            <th style={{
                                                                color: '#fdc51a',
                                                                fontWeight: '700',
                                                                fontSize: '1.1rem',
                                                                padding: '20px',
                                                                borderBottom: 'none'
                                                            }}>City</th>
                                                            <th style={{
                                                                color: '#fdc51a',
                                                                fontWeight: '700',
                                                                fontSize: '1.1rem',
                                                                padding: '20px',
                                                                borderBottom: 'none'
                                                            }}>Postcode</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {[
                                                            {suburb: 'Geelong', postcode: '3220'},
                                                            {suburb: 'Ballarat', postcode: '3350'},
                                                            {suburb: 'Bendigo', postcode: '3550'},
                                                            {suburb: 'Shepparton', postcode: '3630'},
                                                            {suburb: 'Warrnambool', postcode: '3280'},
                                                            {suburb: 'Traralgon', postcode: '3844'},
                                                            {suburb: 'Morwell', postcode: '3840'},
                                                            {suburb: 'Sale', postcode: '3850'},
                                                            {suburb: 'Bairnsdale', postcode: '3875'},
                                                            {suburb: 'Colac', postcode: '3250'},
                                                            {suburb: 'Horsham', postcode: '3400'},
                                                            {suburb: 'Ararat', postcode: '3377'},
                                                            {suburb: 'Echuca', postcode: '3564'},
                                                            {suburb: 'Torquay', postcode: '3228'}
                                                        ].map((item, index) => (
                                                            <tr key={index} style={{
                                                                background: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.background = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
                                                            }}
                                                            >
                                                                <td style={{
                                                                    color: '#1e2247',
                                                                    fontWeight: '600',
                                                                    fontSize: '1rem',
                                                                    padding: '18px 20px',
                                                                    borderBottom: '1px solid #e9ecef'
                                                                }}>{item.suburb}</td>
                                                                <td style={{
                                                                    color: '#6c757d',
                                                                    fontSize: '1rem',
                                                                    padding: '18px 20px',
                                                                    borderBottom: '1px solid #e9ecef'
                                                                }}>{item.postcode}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p style={{
                                                textAlign: 'center',
                                                color: '#1e2247',
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                marginTop: '30px'
                                            }}>
                                                All surrounding regional cities in Victoria are fully covered by our patrol and on-site guard teams.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Most Demanding Security Services Section =====*/}
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
                                                backgroundColor: '#fdc51a', 
                                                color: '#1e2247', 
                                                fontWeight: '600',
                                                fontSize: '0.9rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                borderRadius: '25px'
                                            }}
                                        >
                                            TOP SERVICES
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Most Demanding Security Services in <span style={{color: '#fdc51a'}}>Regional Victoria</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            From industrial facilities to residential estates and corporate offices, our Regional Victoria security teams deliver tailored protection where it's needed most.
                                        </p>
                                    </div>

                                    {/* Service Cards - Two Column Grid Layout */}
                                    <div className="row g-4">
                                        {/* Service 1 - Construction Site Security */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '15px',
                                                padding: '0',
                                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                border: '1px solid #e9ecef',
                                                height: '100%',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(30, 34, 71, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                            }}
                                            >
                                                {/* Header with gradient */}
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                    padding: '25px 30px',
                                                    position: 'relative'
                                                }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '50px',
                                                                height: '50px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '12px',
                                                                marginBottom: '15px'
                                                            }}>
                                                                <Wrench size={26} style={{color: '#1e2247'}} />
                                                            </div>
                                                            <h3 style={{color: '#ffffff', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Construction Site Security
                                                            </h3>
                                                            <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                Ballarat, Bendigo, Geelong, Traralgon
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(253, 197, 26, 0.2)',
                                                            lineHeight: '1'
                                                        }}>01</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        Construction projects in Ballarat, Bendigo, Geelong, and Traralgon face:
                                                    </p>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '0',
                                                        marginBottom: '20px'
                                                    }}>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>After-hours break-ins</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Theft of tools & machinery</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Trespassing & vandalism</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{
                                                        backgroundColor: 'rgba(253, 197, 26, 0.1)',
                                                        borderLeft: '4px solid #fdc51a',
                                                        padding: '15px 20px',
                                                        borderRadius: '8px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontWeight: '700', marginBottom: '10px', fontSize: '1rem'}}>
                                                            Metro Guards provides:
                                                        </p>
                                                        <ul style={{
                                                            listStyle: 'none',
                                                            color: '#6c757d',
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.7',
                                                            paddingLeft: '0',
                                                            marginBottom: '0'
                                                        }}>
                                                            <li style={{marginBottom: '0.5rem'}}>• 24/7 static and overnight guards</li>
                                                            <li style={{marginBottom: '0.5rem'}}>• Access control & site management</li>
                                                            <li style={{marginBottom: '0'}}>• Equipment protection and mobile patrol coverage</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 2 - Loss Prevention Security */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '15px',
                                                padding: '0',
                                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                border: '1px solid #e9ecef',
                                                height: '100%',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                                }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 197, 26, 0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                            }}
                                            >
                                                {/* Header with gradient */}
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                    padding: '25px 30px',
                                                    position: 'relative'
                                                }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '50px',
                                                                height: '50px',
                                                                backgroundColor: '#1e2247',
                                                                borderRadius: '12px',
                                                                marginBottom: '15px'
                                                            }}>
                                                                <Eye size={26} style={{color: '#fdc51a'}} />
                                                            </div>
                                                            <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Loss Prevention Security
                                                            </h3>
                                                            <p style={{color: '#1e2247', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600', opacity: 0.8}}>
                                                                Geelong, Shepparton, Bendigo
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(30, 34, 71, 0.2)',
                                                            lineHeight: '1'
                                                        }}>02</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        Retail and commercial hubs in Geelong, Shepparton, and Bendigo require strong loss-prevention security due to:
                                                    </p>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '0',
                                                        marginBottom: '20px'
                                                    }}>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>High foot traffic</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Shoplifting and anti-social behaviour</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{
                                                        backgroundColor: 'rgba(30, 34, 71, 0.05)',
                                                        borderLeft: '4px solid #1e2247',
                                                        padding: '15px 20px',
                                                        borderRadius: '8px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontWeight: '700', marginBottom: '10px', fontSize: '1rem'}}>
                                                            We provide:
                                                        </p>
                                                        <ul style={{
                                                            listStyle: 'none',
                                                            color: '#6c757d',
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.7',
                                                            paddingLeft: '0',
                                                            marginBottom: '0'
                                                        }}>
                                                            <li style={{marginBottom: '0.5rem'}}>• Uniformed retail security</li>
                                                            <li style={{marginBottom: '0.5rem'}}>• Plain-clothes loss-prevention officers</li>
                                                            <li style={{marginBottom: '0'}}>• Crowd monitoring & incident reporting</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 3 - Mobile Patrols & Alarm Response */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '15px',
                                                padding: '0',
                                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                border: '1px solid #e9ecef',
                                                height: '100%',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(30, 34, 71, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                            }}
                                            >
                                                {/* Header with gradient */}
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                    padding: '25px 30px',
                                                    position: 'relative'
                                                }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '50px',
                                                                height: '50px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '12px',
                                                                marginBottom: '15px'
                                                            }}>
                                                                <Target size={26} style={{color: '#1e2247'}} />
                                                            </div>
                                                            <h3 style={{color: '#ffffff', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Mobile Patrols & Alarm Response
                                                            </h3>
                                                            <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                All Regional Victoria Cities
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(253, 197, 26, 0.2)',
                                                            lineHeight: '1'
                                                        }}>03</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        Industrial, commercial, and residential zones benefit from:
                                                    </p>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        color: '#1e2247',
                                                        fontSize: '1rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '0',
                                                        marginBottom: '20px'
                                                    }}>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Routine perimeter checks</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Alarm response and building access control</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{
                                                        backgroundColor: 'rgba(253, 197, 26, 0.1)',
                                                        borderLeft: '4px solid #fdc51a',
                                                        padding: '15px 20px',
                                                        borderRadius: '8px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontWeight: '700', marginBottom: '5px', fontSize: '1rem'}}>
                                                            24/7 Protection:
                                                        </p>
                                                        <p style={{color: '#6c757d', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '0'}}>
                                                            Mobile patrols are GPS-tracked and operate 24/7 for rapid response and visible deterrence.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 4 - Industrial & Warehouse Security */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '15px',
                                                padding: '0',
                                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                border: '1px solid #e9ecef',
                                                height: '100%',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 197, 26, 0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                            }}
                                            >
                                                {/* Header with gradient */}
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                    padding: '25px 30px',
                                                    position: 'relative'
                                                }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '50px',
                                                                height: '50px',
                                                                backgroundColor: '#1e2247',
                                                                borderRadius: '12px',
                                                                marginBottom: '15px'
                                                            }}>
                                                                <Building size={26} style={{color: '#fdc51a'}} />
                                                            </div>
                                                            <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Industrial & Warehouse Security
                                                            </h3>
                                                            <p style={{color: '#1e2247', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600', opacity: 0.8}}>
                                                                Regional Victoria
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(30, 34, 71, 0.2)',
                                                            lineHeight: '1'
                                                        }}>04</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        Metro Guards protects warehouses and industrial estates across Regional Victoria with:
                                                    </p>
                                                    <div style={{
                                                        backgroundColor: 'rgba(30, 34, 71, 0.05)',
                                                        borderLeft: '4px solid #1e2247',
                                                        padding: '15px 20px',
                                                        borderRadius: '8px'
                                                    }}>
                                                        <ul style={{
                                                            listStyle: 'none',
                                                            color: '#6c757d',
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.7',
                                                            paddingLeft: '0',
                                                            marginBottom: '0'
                                                        }}>
                                                            <li style={{marginBottom: '0.5rem'}}>• Static guards + patrol support</li>
                                                            <li style={{marginBottom: '0.5rem'}}>• Vehicle and equipment protection</li>
                                                            <li style={{marginBottom: '0'}}>• After-hours monitoring</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 5 - Corporate & Concierge Security */}
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '15px',
                                                padding: '0',
                                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                border: '1px solid #e9ecef',
                                                height: '100%',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(30, 34, 71, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                            }}
                                            >
                                                {/* Header with gradient */}
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                    padding: '25px 30px',
                                                    position: 'relative'
                                                }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '50px',
                                                                height: '50px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '12px',
                                                                marginBottom: '15px'
                                                            }}>
                                                                <Users size={26} style={{color: '#1e2247'}} />
                                                            </div>
                                                            <h3 style={{color: '#ffffff', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Corporate & Concierge Security
                                                            </h3>
                                                            <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                Major Regional Cities
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(253, 197, 26, 0.2)',
                                                            lineHeight: '1'
                                                        }}>05</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        Corporate offices, schools, and community facilities in major regional cities receive:
                                                    </p>
                                                    <div style={{
                                                        backgroundColor: 'rgba(253, 197, 26, 0.1)',
                                                        borderLeft: '4px solid #fdc51a',
                                                        padding: '15px 20px',
                                                        borderRadius: '8px'
                                                    }}>
                                                        <ul style={{
                                                            listStyle: 'none',
                                                            color: '#6c757d',
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.7',
                                                            paddingLeft: '0',
                                                            marginBottom: '0'
                                                        }}>
                                                            <li style={{marginBottom: '0.5rem'}}>• Front-desk concierge security</li>
                                                            <li style={{marginBottom: '0.5rem'}}>• Visitor management & access control</li>
                                                            <li style={{marginBottom: '0.5rem'}}>• Professional corporate-uniform officers</li>
                                                            <li style={{marginBottom: '0'}}>• Emergency response services</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    
                {/*===== Other Security Services Available Section =====*/}
                <div style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
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
                                        ALL SERVICES
                                    </span>
                                    <h2 
                                        className="display-4 fw-bold mb-4" 
                                        style={{
                                            color: '#1e2247',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Security Services Available Across <span style={{color: '#fdc51a'}}>Regional Victoria</span>
                                    </h2>
                                </div>

                                {/* Services Grid */}
                                <div className="row g-4">
                                    {[
                                        {service: 'Static Security Guards', desc: 'On-site guards protecting buildings, retail stores, warehouses, construction sites, and events.'},
                                        {service: 'Mobile Patrols', desc: 'Randomised or scheduled patrols with GPS tracking and incident reporting.'},
                                        {service: 'Alarm Response', desc: 'Fast deployment when alarms activate, providing peace of mind for after-hours operations.'},
                                        {service: 'Construction Site Security', desc: 'Guard huts, gatehouse officers, access control, machinery protection, and after-hours surveillance.'},
                                        {service: 'Retail & Loss Prevention Security', desc: 'Customer safety, theft prevention, behaviour monitoring, and incident handling.'},
                                        {service: 'Warehouse & Industrial Security', desc: 'Protection for manufacturing, storage, logistics, and large-scale industrial premises.'},
                                        {service: 'Corporate & Concierge Security', desc: 'Front-of-house personnel, visitor management, and building access control.'},
                                        {service: 'Event Security & Crowd Control', desc: 'Security for festivals, nightlife venues, community events, private functions, and gatherings.'}
                                    ].map((item, index) => {
                                        const isBlue = index % 2 === 0;
                                        return (
                                            <div key={index} className="col-lg-6 col-md-6">
                                                <div style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    padding: '30px',
                                                    height: '100%',
                                                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                    border: '1px solid #e9ecef',
                                                    transition: 'all 0.3s ease',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '20px'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-5px)';
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
                                                        width: '60px',
                                                        height: '60px',
                                                        minWidth: '60px',
                                                        background: isBlue
                                                            ? 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                            : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <CheckCircle size={30} style={{color: isBlue ? '#fdc51a' : '#1e2247'}} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{color: '#1e2247', fontWeight: '700', marginBottom: '10px', fontSize: '1.2rem'}}>
                                                            {item.service}
                                                        </h5>
                                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.7', marginBottom: '0'}}>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <WhyChooseUs />
                <Accreditation />
               

                {/*===== South–East Melbourne Coverage Map Section =====*/}
                <div style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                    paddingTop: '80px',
                    paddingBottom: '80px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background decoration */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        background: 'radial-gradient(circle at 20% 50%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)',
                        zIndex: 0
                    }}></div>

                    <div className="container" style={{position: 'relative', zIndex: 1}}>
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
                                        OUR COVERAGE
                                    </span>
                                    <h2 
                                        className="display-4 fw-bold mb-4" 
                                        style={{
                                            color: '#1e2247',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Our Coverage Across <span style={{color: '#fdc51a'}}>Regional Victoria</span>
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    }}>
                                        
                                    </p>
                                </div>

                                {/* Map and Info Cards */}
                                <div className="row g-4 align-items-center">
                                    {/* Map */}
                                    <div className="col-lg-8">
                                        <div style={{
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
                                            border: '3px solid #fdc51a'
                                        }}>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404686.3852736892!2d144.28076!3d-36.75818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad7ca61bcbadb8b%3A0x5045675218cdb90!2sBendigo%20VIC%203550%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890127!5m2!1sen!2s"
                                                width="100%"
                                                height="450"
                                                style={{border: 0}}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>

                                    {/* Info Cards */}
                                    <div className="col-lg-4">
                                        <div className="d-flex flex-column gap-4">
                                            {[
                                                {icon: MapPin, title: '14+ Cities', desc: 'Complete Regional Victoria coverage', color: 'blue'},
                                                {icon: Zap, title: 'Rapid Response', desc: 'Local teams, faster arrival', color: 'yellow'},
                                                {icon: Shield, title: '24/7 Availability', desc: 'Always ready to deploy', color: 'blue'}
                                            ].map((item, index) => {
                                                const Icon = item.icon;
                                                const isBlue = item.color === 'blue';
                                                return (
                                                    <div key={index} style={{
                                                        background: '#ffffff',
                                                        borderRadius: '15px',
                                                        padding: '25px',
                                                        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '20px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateX(5px)';
                                                        e.currentTarget.style.boxShadow = isBlue 
                                                            ? '0 10px 30px rgba(30, 34, 71, 0.15)'
                                                            : '0 10px 30px rgba(253, 197, 26, 0.2)';
                                                        e.currentTarget.style.borderColor = isBlue 
                                                            ? 'rgba(30, 34, 71, 0.3)'
                                                            : 'rgba(253, 197, 26, 0.4)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'translateX(0)';
                                                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                                                        e.currentTarget.style.borderColor = '#e9ecef';
                                                    }}
                                                    >
                                                        <div style={{
                                                            width: '60px',
                                                            height: '60px',
                                                            minWidth: '60px',
                                                            background: isBlue
                                                                ? 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                                : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                            borderRadius: '12px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Icon size={28} style={{color: isBlue ? '#fdc51a' : '#1e2247'}} />
                                                        </div>
                                                        <div>
                                                            <h5 style={{color: '#1e2247', fontWeight: '700', marginBottom: '5px', fontSize: '1.2rem'}}>
                                                                {item.title}
                                                            </h5>
                                                            <p style={{color: '#6c757d', fontSize: '0.95rem', marginBottom: '0'}}>
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
                    </div>
                </div>
                
                <Testimonials />
                
                {/*===== Meet Our Northwest Melbourne Security Team Section =====*/}
                <div className="team-section" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
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
                                        OUR TEAM
                                    </span>
                                    <h2 
                                        className="display-4 fw-bold mb-4" 
                                        style={{
                                            color: '#1e2247',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Meet Our <span style={{color: '#fdc51a'}}>Regional Victoria Security Team</span>
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    }}>
                                        Our team combines local expertise, extensive training, and rapid-response capabilities to deliver reliable security across all major regional cities in Victoria.
                                    </p>
                                </div>

                                {/* Team Member Cards */}
                                <div className="row g-4 mb-5">
                                    {[
                                        {icon: Shield, title: 'Regional Security Supervisor – Regional Victoria Zone', desc: '16+ years in retail & industrial security', color: 'blue'},
                                        {icon: Target, title: 'Mobile Patrol Drivers (Regional Sector)', desc: 'GPS-monitored, trained in rapid response', color: 'yellow'},
                                        {icon: Wrench, title: 'Construction Security Specialists', desc: 'Experienced in high-risk zones and equipment protection', color: 'blue'},
                                        {icon: Eye, title: 'Retail Loss Prevention Officers', desc: 'Serving Geelong, Ballarat, Bendigo, Shepparton, and surrounding cities', color: 'yellow'}
                                    ].map((team, index) => {
                                        const Icon = team.icon;
                                        const isBlue = team.color === 'blue';
                                        return (
                                            <div key={index} className="col-lg-6 col-md-6">
                                                <div style={{
                                                    background: '#ffffff',
                                                    borderRadius: '20px',
                                                    padding: '35px',
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
                                                        width: '70px',
                                                        height: '70px',
                                                        background: isBlue
                                                            ? 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                            : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                        borderRadius: '15px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginBottom: '20px'
                                                    }}>
                                                        <Icon size={35} style={{color: isBlue ? '#fdc51a' : '#1e2247'}} />
                                                    </div>
                                                    <h4 style={{color: '#1e2247', fontWeight: '700', marginBottom: '15px', fontSize: '1.3rem'}}>
                                                        {team.title}
                                                    </h4>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0'}}>
                                                        {team.desc}
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

                {/*===== CTA Section - Ready to Secure Your Site in Northwest Melbourne? =====*/}
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
                            <div className="col-lg-10">
                                <div className="text-center mb-5">
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
                                        <Shield size={50} style={{color: '#1e2247'}} />
                                    </div>

                                    <h2 
                                        className="display-3 fw-bold mb-4" 
                                        style={{
                                            color: '#ffffff',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Ready to Secure Your Site Across <span style={{color: '#fdc51a'}}>Regional Victoria?</span>
                                    </h2>
                                    <p style={{
                                        color: '#ffffff',
                                        fontSize: '1.3rem',
                                        lineHeight: '1.8',
                                        marginBottom: '15px',
                                        opacity: 0.95
                                    }}>
                                        Metro Guards are available 24/7 across all major regional Victoria cities.
                                    </p>
                                    <p style={{
                                        color: '#fdc51a',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        marginBottom: '40px',
                                        fontWeight: '600'
                                    }}>
                                        Whether you need immediate guards or long-term coverage, our team is ready to help.
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mb-5">
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
                                            letterSpacing: '0.5px'
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
                                        <span>Call 1300 731 173</span>
                                    </a>

                                    {/* Quote Button */}
                                    <a 
                                        href="/get-quotation" 
                                        style={{
                                            textDecoration: 'none',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            backdropFilter: 'blur(10px)',
                                            color: '#ffffff',
                                            padding: '20px 50px',
                                            borderRadius: '50px',
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            border: '2px solid rgba(253, 197, 26, 0.4)',
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.background = 'rgba(253, 197, 26, 0.2)';
                                            e.currentTarget.style.borderColor = '#fdc51a';
                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(253, 197, 26, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                            e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.4)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                                        }}
                                    >
                                        <CheckCircle size={28} style={{color: '#fdc51a'}} />
                                        <span>Get Free Quote</span>
                                    </a>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <FAQSectionDynamic 
                    faqs={[
                        {
                            question: "What types of security services are available for homes and residential areas in Regional Victoria?",
                            answer: "Metro Guards offers tailored residential protection across Regional Victoria, including routine patrols, alarm monitoring, and on-site presence. Our teams help deter theft, vandalism, and unauthorised access, providing homeowners peace of mind while safeguarding property and community safety in major regional cities."
                        },
                        {
                            question: "Can Metro Guards handle security for industrial sites and warehouses?",
                            answer: "Yes. We provide comprehensive industrial and warehouse security in Regional Victoria, including static guards, mobile patrols, and after-hours monitoring. Officers protect equipment, vehicles, and inventory, prevent unauthorised access, and respond rapidly to alarms, ensuring operational continuity and safety for large-scale industrial sites."
                        },
                        {
                            question: "Are your security teams trained to operate across multiple regional cities?",
                            answer: "Yes. Metro Guards deploys teams throughout major regional centres, including Geelong, Ballarat, Bendigo, Shepparton, and Warrnambool. Officers are trained to handle diverse environments, from residential areas to industrial sites, ensuring consistent, professional security coverage across the entire region."
                        }
                    ]}
                />
            </Layout>
            </> ) }