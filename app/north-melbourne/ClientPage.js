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

export default function NorthMelbournePage() {
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="North MELBOURNE"
                mainTitle="Security Guards & Mobile Patrol Services in North Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== About Metro Guards in North Melbourne Section =====*/}
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
                                            NORTH MELBOURNE SECURITY SERVICES
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            About <span style={{color: '#fdc51a'}}>Metro Guards</span> in North Melbourne
                                        </h2>
                                    </div>

                                    <div className="content-section">
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '1.5rem',
                                            textAlign: 'center',
                                            maxWidth: '900px',
                                            margin: '0 auto 2rem auto'
                                        }}>
                                            Metro Guards provides professional and fully insured security services to businesses and communities across all North Melbourne suburbs, including <strong style={{color: '#1e2247'}}>North Melbourne, Carlton, Brunswick, Coburg, Preston, Reservoir, Broadmeadows, Epping, Thomastown, Tullamarine</strong> and surrounding areas.
                                        </p>

                                        <div className="row mb-4">
                                            {/* Card 1 - Blue Icon */}
                                            <div className="col-md-6 mb-3">
                                                <div style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    padding: '35px',
                                                    height: '100%',
                                                    boxShadow: '0 5px 20px rgba(30, 34, 71, 0.08)',
                                                    border: '1px solid #e9ecef',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(30, 34, 71, 0.15)';
                                                    e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(30, 34, 71, 0.08)';
                                                    e.currentTarget.style.borderColor = '#e9ecef';
                                                }}
                                                >
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginBottom: '20px'
                                                    }}>
                                                        <MapPin size={28} style={{color: '#fdc51a'}} />
                                                    </div>
                                                    <h4 style={{color: '#1e2247', marginBottom: '20px', fontWeight: '700'}}>
                                                        North Melbourne is a high-activity region
                                                    </h4>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        color: '#6c757d',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.8',
                                                        paddingLeft: '0',
                                                        marginBottom: '0'
                                                    }}>
                                                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Dense retail zones (Brunswick, Fitzroy)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Large construction & development areas (Northern Growth Corridor)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Industrial and logistics hubs (Campbellfield, Broadmeadows)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Educational and residential precincts (Carlton, Parkville)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                </div>
                    
                                            {/* Card 2 - Yellow Icon */}
                                            <div className="col-md-6 mb-3">
                                                <div style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    padding: '35px',
                                                    height: '100%',
                                                    boxShadow: '0 5px 20px rgba(253, 197, 26, 0.08)',
                                                    border: '1px solid #e9ecef',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 197, 26, 0.2)';
                                                    e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(253, 197, 26, 0.08)';
                                                    e.currentTarget.style.borderColor = '#e9ecef';
                                                }}
                                                >
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginBottom: '20px'
                                                    }}>
                                                        <Shield size={28} style={{color: '#1e2247'}} />
                                                    </div>
                                                    <h4 style={{color: '#1e2247', marginBottom: '20px', fontWeight: '700'}}>
                                                        Locally Experienced Security Teams
                                                    </h4>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.8',
                                                        marginBottom: '1rem'
                                                    }}>
                                                        These diverse environments require specialised, flexible and locally experienced security teams.
                                                    </p>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.8',
                                                        marginBottom: '0'
                                                    }}>
                                                        Metro Guards deploys trained on-ground officers from our Melbourne base, ensuring <strong style={{color: '#1e2247'}}>fast response times</strong>, <strong style={{color: '#1e2247'}}>local knowledge of hotspots</strong>, and strong familiarity with each suburb's unique risks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== North Melbourne Suburbs Table Section =====*/}
                    <div className="suburbs-section" style={{backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <h2 
                                            className="display-5 fw-bold mb-4" 
                                            style={{color: '#1e2247'}}
                                        >
                                            North Melbourne <span style={{color: '#fdc51a'}}>Suburbs We Serve</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            maxWidth: '700px',
                                            margin: '0 auto'
                                        }}>
                                            Our security guards and mobile patrol units cover all major suburbs across North Melbourne
                                        </p>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-hover" style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '15px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                        }}>
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
                                                    }}>Suburbs</th>
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
                                                    {suburb: 'North Melbourne', postcode: '3051'},
                                                    {suburb: 'Carlton', postcode: '3053'},
                                                    {suburb: 'Parkville', postcode: '3052'},
                                                    {suburb: 'Fitzroy', postcode: '3065'},
                                                    {suburb: 'Brunswick', postcode: '3056'},
                                                    {suburb: 'Collingwood', postcode: '3066'},
                                                    {suburb: 'Coburg', postcode: '3058'},
                                                    {suburb: 'Preston', postcode: '3072'},
                                                    {suburb: 'Reservoir', postcode: '3073'},
                                                    {suburb: 'Thornbury', postcode: '3071'},
                                                    {suburb: 'Fawkner', postcode: '3060'},
                                                    {suburb: 'Broadmeadows', postcode: '3047'},
                                                    {suburb: 'Glenroy', postcode: '3046'},
                                                    {suburb: 'Pascoe Vale', postcode: '3044'},
                                                    {suburb: 'Craigieburn', postcode: '3064'},
                                                    {suburb: 'Epping', postcode: '3076'},
                                                    {suburb: 'Somerton', postcode: '3062'},
                                                    {suburb: 'Campbellfield', postcode: '3061'},
                                                    {suburb: 'Coolaroo', postcode: '3048'},
                                                    {suburb: 'Tullamarine', postcode: '3043'},
                                                    {suburb: 'Mickleham', postcode: '3064'},
                                                    {suburb: 'Roxburgh Park', postcode: '3064'}
                                                ].map((item, index) => (
                                                    <tr key={index} style={{
                                                        borderBottom: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}>
                                                        <td style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            fontSize: '1.05rem',
                                                            padding: '18px 20px'
                                                        }}>{item.suburb}</td>
                                                        <td style={{
                                                            color: '#6c757d',
                                                            fontSize: '1.05rem',
                                                            padding: '18px 20px'
                                                        }}>{item.postcode}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="text-center mt-4">
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.05rem',
                                            fontStyle: 'italic'
                                        }}>
                                            All surrounding suburbs in the North Melbourne region are fully covered by our <strong style={{color: '#fdc51a'}}>patrol and on-site guard teams</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Most Demanding Security Services Section - Redesigned =====*/}
                    <div className="security-services-section" style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                    paddingTop: '80px',
                        paddingBottom: '80px',
                        position: 'relative'
                    }}>
                        {/* Decorative background elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.08) 0%, transparent 70%)',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '250px',
                            height: '250px',
                            background: 'radial-gradient(circle, rgba(30, 34, 71, 0.05) 0%, transparent 70%)',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}></div>

                        <div className="container" style={{position: 'relative', zIndex: 1}}>
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
                                        style={{color: '#1e2247'}}
                                    >
                                            Most Demanding <span style={{color: '#fdc51a'}}>Security Services</span> in North Melbourne
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                            maxWidth: '900px',
                                        margin: '0 auto'
                                    }}>
                                            North Melbourne has diverse security needs across construction, retail, industrial, and residential areas. With <strong style={{color: '#1e2247'}}>638,640 criminal offences</strong> recorded across Victoria in the 12 months to June 2025, a <strong style={{color: '#1e2247'}}>15.7% increase</strong> compared with the previous year (Inside State Government), professional security is now more important than ever.
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
                                                                Epping, Craigieburn, Mickleham, Campbellfield, Broadmeadows
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
                                                        North Melbourne, especially suburbs like Epping, Craigieburn, Mickleham, Campbellfield, Broadmeadows, is undergoing major development. Construction sites face risks such as:
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-md-6">
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
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-6">
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
                                                                    <span>Trespassing</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Vandalism</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        backgroundColor: 'rgba(253, 197, 26, 0.1)',
                                                        borderLeft: '4px solid #fdc51a',
                                                        padding: '15px',
                                                        borderRadius: '5px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontSize: '0.95rem', fontWeight: '600', marginBottom: '10px'}}>
                                                            Metro Guards provides:
                                                        </p>
                                                        <p style={{color: '#6c757d', fontSize: '0.95rem', marginBottom: '0'}}>
                                                            Overnight and 24/7 static guards • Access control • Equipment protection • Mobile patrols & alarm response
                                                        </p>
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
                                                                Brunswick, Fitzroy, Carlton, Preston
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(30, 34, 71, 0.15)',
                                                            lineHeight: '1'
                                                        }}>02</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        Retail-heavy areas like Brunswick, Fitzroy, Carlton and Preston require a strong loss-prevention presence due to:
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-md-6">
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
                                                                    <span>High foot traffic</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Shoplifting</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-6">
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
                                                                    <span>Anti-social behavior</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        backgroundColor: 'rgba(30, 34, 71, 0.05)',
                                                        borderLeft: '4px solid #1e2247',
                                                        padding: '15px',
                                                        borderRadius: '5px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontSize: '0.95rem', fontWeight: '600', marginBottom: '10px'}}>
                                                            We provide:
                                                        </p>
                                                        <p style={{color: '#6c757d', fontSize: '0.95rem', marginBottom: '0'}}>
                                                            Uniformed retail security • Plain-clothes loss-prevention officers • Door staff • Crowd monitoring • Incident reporting
                                                        </p>
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
                                                                Campbellfield, Somerton, Broadmeadows, Epping, Tullamarine
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
                                                        Industrial & logistics areas (Campbellfield, Somerton, Broadmeadows, Epping, Tullamarine) rely heavily on mobile patrols to:
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
                                                            <span>Check perimeters</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Respond to alarms</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Unlock/lock buildings</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Deter criminal activity</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{
                                                        backgroundColor: 'rgba(253, 197, 26, 0.1)',
                                                        borderLeft: '4px solid #fdc51a',
                                                        padding: '15px',
                                                        borderRadius: '5px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontSize: '0.95rem', fontWeight: '600', marginBottom: '0', fontStyle: 'italic'}}>
                                                            Our mobile units operate 24/7 with GPS-tracked routes and live reporting.
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
                                                                <Home size={26} style={{color: '#fdc51a'}} />
                                            </div>
                                                            <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Industrial & Warehouse Security
                                                            </h3>
                                                            <p style={{color: '#1e2247', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600', opacity: 0.8}}>
                                                                Major industrial estates across North Melbourne
                                                            </p>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '3rem',
                                                            fontWeight: '800',
                                                            color: 'rgba(30, 34, 71, 0.15)',
                                                            lineHeight: '1'
                                                        }}>04</div>
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div style={{padding: '30px'}}>
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                        North Melbourne has major industrial estates. Key concerns include:
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
                                                            <span>Asset protection</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Vehicle yard security</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Container and equipment safety</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>After-hours monitoring</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{
                                                        backgroundColor: 'rgba(30, 34, 71, 0.05)',
                                                        borderLeft: '4px solid #1e2247',
                                                        padding: '15px',
                                                        borderRadius: '5px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontSize: '0.95rem', fontWeight: '600', marginBottom: '0'}}>
                                                            We deploy static guards + patrol support to logistics & industrial facilities.
                                                        </p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                        {/* Service 5 - Corporate & Concierge Security (Full Width) */}
                                        <div className="col-lg-12">
                                            <div style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '15px',
                                                padding: '0',
                                            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                            border: '1px solid #e9ecef',
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
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '50px',
                                                                height: '50px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '12px'
                                                            }}>
                                                                <Building size={26} style={{color: '#1e2247'}} />
                                                            </div>
                                                            <div>
                                                                <h3 style={{color: '#ffffff', fontWeight: '700', marginBottom: '5px', fontSize: '1.4rem'}}>
                                                                    Corporate & Concierge Security
                                                                </h3>
                                                                <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                    Carlton, Parkville, North Melbourne, Brunswick
                                                                </p>
                                                            </div>
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
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px'}}>
                                                                Suburbs like Carlton, Parkville, North Melbourne and Brunswick host office buildings, educational facilities, and medical institutions.
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <ul style={{
                                                                listStyle: 'none',
                                                                color: '#1e2247',
                                                                fontSize: '1rem',
                                                                lineHeight: '1.8',
                                                                paddingLeft: '0',
                                                                marginBottom: '0'
                                                            }}>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Front-desk concierge security</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Access control & visitor screening</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Emergency response</span>
                                                                </li>
                                                                <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Professional corporate-uniform officers</span>
                                                                </li>
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

                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                
                
                
                {/*===== Security Services Available Section =====*/}
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
                                        OUR SERVICES
                                    </span>
                                    <h2 
                                        className="display-4 fw-bold mb-4" 
                                        style={{
                                            color: '#1e2247',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Security Services Available Across <span style={{color: '#fdc51a'}}>All North Melbourne Suburbs</span>
                                    </h2>
                                </div>

                                {/* Services Table */}
                                <div className="row g-4">
                                    {[
                                        {service: 'Static Security Guards', desc: 'Trained on-site guards to protect buildings, retail stores, warehouses, construction sites, and events'},
                                        {service: 'Mobile Patrols', desc: 'Randomised or scheduled patrols with GPS tracking and incident reporting'},
                                        {service: 'Alarm Response', desc: 'Fast deployment when alarms activate, providing peace of mind for after-hours operations'},
                                        {service: 'Construction Site Security', desc: 'Guard huts, gatehouse officers, access control, machinery protection, and after-hours surveillance'},
                                        {service: 'Retail & Loss Prevention Security', desc: 'Customer safety, theft prevention, behaviour monitoring, and incident handling'},
                                        {service: 'Warehouse & Industrial Security', desc: 'Protection for manufacturing, storage, logistics, and large-scale industrial premises'},
                                        {service: 'Corporate & Concierge Security', desc: 'Professional front-of-house personnel, visitor management, and building access control'},
                                        {service: 'Event Security & Crowd Control', desc: 'Security for festivals, community events, nightlife venues, private functions, and gatherings'}
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

                {/*===== Why Businesses Choose Metro Guards Section =====*/}
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
                                        WHY CHOOSE US
                                    </span>
                                    <h2 
                                        className="display-4 fw-bold mb-4" 
                                        style={{
                                            color: '#1e2247',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        Why Businesses in <span style={{color: '#fdc51a'}}>North Melbourne Choose Metro Guards</span>
                                    </h2>
                                </div>

                                {/* Why Choose Cards */}
                                <div className="row g-4">
                                    {[
                                        {icon: Clock, title: 'Fast Response Times', desc: 'Local teams ensure quicker dispatch to sites in North Melbourne', color: 'blue'},
                                        {icon: Shield, title: 'Highly Vetted Guards', desc: 'Every officer is background checked and fully insured', color: 'yellow'},
                                        {icon: MapPin, title: 'Suburb-Specific Knowledge', desc: 'Our team understands local risks across industrial zones, retail strips and construction corridors', color: 'blue'},
                                        {icon: FileText, title: 'Transparent Reporting', desc: 'Real-time incident reporting, GPS patrol logs and supervisor oversight', color: 'yellow'},
                                        {icon: Phone, title: 'Melbourne-Based 24/7 Operations Centre', desc: 'Always available, always monitoring, always ready to respond', color: 'blue'}
                                    ].map((item, index) => {
                                        const Icon = item.icon;
                                        const isBlue = item.color === 'blue';
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
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

                {/*===== Coverage Map Section =====*/}
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
                                        Our Coverage Across <span style={{color: '#fdc51a'}}>North Melbourne</span>
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    }}>
                                        Metro Guards provides full coverage across all North Melbourne suburbs from our Melbourne operations base.
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
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50452.89577885398!2d144.94870!3d-37.78710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e40e55555%3A0x5045675218ceed0!2sNorth%20Melbourne%20VIC%203051%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
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
                                                {icon: MapPin, title: '22+ Suburbs', desc: 'Complete North Melbourne coverage', color: 'blue'},
                                                {icon: Clock, title: 'Rapid Response', desc: 'Local teams, faster arrival', color: 'yellow'},
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
                
                {/*===== Meet Our North Melbourne Security Team Section =====*/}
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
                                        Meet Our <span style={{color: '#fdc51a'}}>North Melbourne Security Team</span>
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    }}>
                                        Our North Melbourne deployment team includes:
                                    </p>
                                </div>

                                {/* Team Member Cards */}
                                <div className="row g-4 mb-5">
                                    {[
                                        {icon: Shield, title: 'Regional Security Supervisor – North Zone', desc: '16+ years of experience in retail & industrial security', color: 'blue'},
                                        {icon: Target, title: 'Mobile Patrol Drivers (North Sector)', desc: 'GPS-monitored, trained in rapid response protocols', color: 'yellow'},
                                        {icon: Wrench, title: 'Construction Security Specialists', desc: 'Experienced in high-risk zones, night monitoring, and equipment protection', color: 'blue'},
                                        {icon: Eye, title: 'Retail Loss Prevention Officers', desc: 'Serving Brunswick, Fitzroy, Carlton and local shopping strips', color: 'yellow'}
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

                {/*===== CTA Section - Ready to Secure Your Site in North Melbourne? =====*/}
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
                                        Ready to Secure Your Site in <span style={{color: '#fdc51a'}}>North Melbourne?</span>
                                    </h2>
                                    <p style={{
                                        color: '#ffffff',
                                        fontSize: '1.3rem',
                                        lineHeight: '1.8',
                                        marginBottom: '15px',
                                        opacity: 0.95
                                    }}>
                                        Metro Guards are available 24/7 across all North Melbourne suburbs.
                                    </p>
                                    <p style={{
                                        color: '#fdc51a',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        marginBottom: '40px',
                                        fontWeight: '600'
                                    }}>
                                        Whether you need guards tonight or want long-term coverage, our team is ready to help.
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
                            question: "Do you provide overnight security for construction sites in North Melbourne?",
                            answer: "Yes. Metro Guards provides overnight construction site security across all North Melbourne suburbs. Our team offers static night guards, controlled access management, equipment protection, and scheduled mobile patrols. We secure active builds, vacant sites, and high-risk zones with 24/7 monitoring and rapid response support for emergencies."
                        },
                        {
                            question: "How fast is your mobile patrol response in suburbs like Epping or Campbellfield?",
                            answer: "Our mobile patrol response is extremely fast in Epping, Campbellfield and all North Melbourne suburbs. With local patrol units, GPS-tracked vehicles, and 24/7 supervisors on the road, we dispatch officers within minutes. Metro Guards ensures quick alarm response, perimeter checks, and incident handling for industrial, commercial, and retail sites."
                        },
                        {
                            question: "Can you provide guards for retail stores in Brunswick and Fitzroy?",
                            answer: "Yes. Metro Guards provides trained retail security officers for stores in Brunswick, Fitzroy and neighbouring North Melbourne suburbs. Our guards focus on theft prevention, customer safety, behaviour monitoring, stock protection and incident response. We support supermarkets, boutiques, shopping strips, convenience stores and high-traffic retail zones."
                        },
                        {
                            question: "Do you offer security for events and festivals in North Melbourne?",
                            answer: "Yes. Metro Guards supplies event security officers and crowd controllers for festivals, community events, venues and private functions across North Melbourne. Our team manages entry control, bag checks, risk assessment, stage and perimeter protection, emergency support and patron safety to ensure smooth and compliant event operations."
                        }
                    ]}
                />
            </Layout>
            </> ) }