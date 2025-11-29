'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';
import Testimonials from '@/components/Testimonials';
import FAQSectionDynamic from '@/components/FAQSectionDynamic';

export default function EastMelbournePage() {
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="EAST MELBOURNE"
                mainTitle="Security Guards & Mobile Patrols in East Melbourne Suburbs"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== About Metro Guards in East Melbourne Section =====*/}
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
                                            EAST MELBOURNE SECURITY SERVICES
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            About <span style={{color: '#fdc51a'}}>Metro Guards</span> in East Melbourne
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
                                            Metro Guards delivers industry-leading security services across all East Melbourne suburbs, including high-demand locations such as <strong style={{color: '#1e2247'}}>Richmond, Hawthorn, Kew, Balwyn, Box Hill, Burwood, Doncaster, Blackburn</strong> and <strong style={{color: '#1e2247'}}>Ringwood</strong>.
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
                                                        <Building size={28} style={{color: '#fdc51a'}} />
                                                    </div>
                                                    <h4 style={{color: '#1e2247', marginBottom: '20px', fontWeight: '700'}}>
                                                        East Melbourne is known for:
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
                                                            <span>Premium residential areas (Kew, Camberwell, Balwyn)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Major shopping and dining hubs (Box Hill, Doncaster, Richmond)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Large commercial precincts (Burwood, Surrey Hills, Blackburn)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Growing construction & apartment developments (Ringwood, Croydon, Lilydale)</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#1e2247', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Strong community, healthcare & education presence</span>
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
                                                        Why Choose Metro Guards?
                                                    </h4>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.8',
                                                        marginBottom: '1rem'
                                                    }}>
                                                        This makes East Melbourne one of the most <strong style={{color: '#1e2247'}}>security-conscious</strong> and <strong style={{color: '#1e2247'}}>fast-growing</strong> regions in Victoria.
                                                    </p>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.8',
                                                        marginBottom: '0'
                                                    }}>
                                                        Metro security guards understand the local environment, respond faster, and customise services for the mix of retail, hospitality, residential, healthcare, and commercial needs across the eastern corridor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== East Melbourne Suburbs Table Section =====*/}
                    <div className="suburbs-section" style={{backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <h2 
                                            className="display-5 fw-bold mb-4" 
                                            style={{color: '#1e2247'}}
                                        >
                                            East Melbourne <span style={{color: '#fdc51a'}}>Suburbs We Serve</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            maxWidth: '700px',
                                            margin: '0 auto'
                                        }}>
                                            Our security guards and patrol teams cover:
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
                                                    }}>Suburb</th>
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
                                                    {suburb: 'East Melbourne', postcode: '3002'},
                                                    {suburb: 'Richmond', postcode: '3121'},
                                                    {suburb: 'Abbotsford', postcode: '3067'},
                                                    {suburb: 'Hawthorn', postcode: '3122'},
                                                    {suburb: 'Kew', postcode: '3101'},
                                                    {suburb: 'Box Hill', postcode: '3128'},
                                                    {suburb: 'Balwyn', postcode: '3103'},
                                                    {suburb: 'Doncaster', postcode: '3108'},
                                                    {suburb: 'Mont Albert', postcode: '3127'},
                                                    {suburb: 'Camberwell', postcode: '3124'},
                                                    {suburb: 'Burwood', postcode: '3125'},
                                                    {suburb: 'Ringwood', postcode: '3134'},
                                                    {suburb: 'Mitcham', postcode: '3132'},
                                                    {suburb: 'Blackburn', postcode: '3130'},
                                                    {suburb: 'Nunawading', postcode: '3131'},
                                                    {suburb: 'Bayswater', postcode: '3153'}
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
                                            All surrounding eastern suburbs are also fully covered with a <strong style={{color: '#fdc51a'}}>rapid response capability</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Most Needed Security Services Section - Redesigned =====*/}
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
                                            Most Needed <span style={{color: '#fdc51a'}}>Security Services</span> in East Melbourne
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            East Melbourne has different security challenges compared to the North. Among the fastest-growing crimes in Victoria was <strong style={{color: '#1e2247'}}>"theft from motor vehicle,"</strong> up 39.3% in 2025 (Mirage News), making vehicle theft and related property offences a leading concern.
                                        </p>
                                    </div>

                                    {/* Service Cards - Two Column Grid Layout */}
                                    <div className="row g-4">
                                        {/* Service 1 - Building Security Guards */}
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
                                                                <Building size={26} style={{color: '#1e2247'}} />
                                                            </div>
                                                            <h3 style={{color: '#ffffff', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Building Security Guards
                                                            </h3>
                                                            <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                High demand in Richmond, Doncaster, Burwood, Camberwell, Box Hill
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
                                                        Large commercial buildings, office towers, apartment complexes and strata facilities rely heavily on:
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
                                                            <span>Lobby/foyer security</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Access control & visitor screening</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Concierge officers</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>After-hours monitoring</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Emergency response</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{
                                                        backgroundColor: 'rgba(253, 197, 26, 0.1)',
                                                        borderLeft: '4px solid #fdc51a',
                                                        padding: '15px',
                                                        borderRadius: '5px'
                                                    }}>
                                                        <p style={{color: '#1e2247', fontSize: '0.95rem', fontWeight: '600', marginBottom: '0', fontStyle: 'italic'}}>
                                                            Growing commercial sites in Burwood, Richmond & Box Hill make this service essential.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 2 - Protection Security Guards */}
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
                                                                <Shield size={26} style={{color: '#fdc51a'}} />
                                                            </div>
                                                            <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Protection Security Guards
                                                            </h3>
                                                            <p style={{color: '#1e2247', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600', opacity: 0.8}}>
                                                                High demand in Richmond, Box Hill, Doncaster, Ringwood
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
                                                        East Melbourne contains some of Melbourne's busiest retail districts and Asian dining hubs. We provide:
                                                    </p>
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
                                                            <span>Loss-prevention officers</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Uniformed protection guards</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Anti-theft & behavioural monitoring</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Door staff for restaurants & nightlife venues</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Incident response for busy retail strips</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 3 - Mobile Patrol Security */}
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
                                                                Mobile Patrol Security
                                                            </h3>
                                                            <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                High demand in Blackburn, Ringwood, Vermont, Mitcham, Croydon
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
                                                        These suburbs host industrial pockets, car dealerships, trades businesses, warehouse clusters, and large retail centres. Mobile patrols provide:
                                                    </p>
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
                                                            <span>Randomised deterrent patrols</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Alarm response</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Perimeter checks</span>
                                                        </li>
                                                        <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Lock/unlock services</span>
                                                        </li>
                                                        <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                            <span>Vehicle & property checks</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 4 - Event Security Guards */}
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
                                                                <Calendar size={26} style={{color: '#fdc51a'}} />
                                                            </div>
                                                            <h3 style={{color: '#1e2247', fontWeight: '700', marginBottom: '8px', fontSize: '1.4rem'}}>
                                                                Event Security Guards
                                                            </h3>
                                                            <p style={{color: '#1e2247', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600', opacity: 0.8}}>
                                                                High demand in Richmond, Hawthorn, Kew, Camberwell
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
                                                    <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0'}}>
                                                        East Melbourne has a strong culture of community festivals, school events, sporting clubs, functions & venues, and corporate events. We supply trained crowd controllers, entry management guards, and risk-managed event teams.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service 5 - Construction Security Guards (Full Width) */}
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
                                                                <Wrench size={26} style={{color: '#1e2247'}} />
                                                            </div>
                                                            <div>
                                                                <h3 style={{color: '#ffffff', fontWeight: '700', marginBottom: '5px', fontSize: '1.4rem'}}>
                                                                    Construction Security Guards
                                                                </h3>
                                                                <p style={{color: '#fdc51a', fontSize: '0.9rem', marginBottom: '0', fontWeight: '600'}}>
                                                                    High demand in Ringwood, Croydon, Box Hill, Doncaster & Lilydale
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
                                                                These areas are going through major redevelopment including apartments, townhouses, shopping centre upgrades, and new home estates. Construction security includes:
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
                                                                    <span>After-hours guarding</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Machinery & material protection</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Gatehouse control</span>
                                                                </li>
                                                                <li style={{marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Trespasser prevention</span>
                                                                </li>
                                                                <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start'}}>
                                                                    <span style={{color: '#fdc51a', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '0.75rem', lineHeight: '1.5', flexShrink: 0}}>✓</span>
                                                                    <span>Perimeter monitoring & patrols</span>
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

                    {/*===== Other Security Services Section =====*/}
                    <div className="other-services-section" style={{backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <h2 
                                            className="display-5 fw-bold mb-4" 
                                            style={{color: '#1e2247'}}
                                        >
                                            Other <span style={{color: '#fdc51a'}}>Security Services</span> in East Melbourne
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            maxWidth: '800px',
                                            margin: '0 auto'
                                        }}>
                                            Metro Guards offers a full range of specialised security services across East Melbourne, ensuring complete protection for buildings, events, retail, industrial sites, and more.
                                        </p>
                                    </div>

                                    <div className="row g-4">
                                        {[
                                            {icon: Building, title: 'Building Security Guards', color: 'blue'},
                                            {icon: Shield, title: 'Protection Security Guards', color: 'yellow'},
                                            {icon: Wrench, title: 'Construction Security Guards', color: 'blue'},
                                            {icon: Calendar, title: 'Event Security Guards', color: 'yellow'},
                                            {icon: Target, title: 'Mobile Patrol Security', color: 'blue'},
                                            {icon: User, title: 'Static Security Officers', color: 'yellow'},
                                            {icon: Lock, title: 'Access Control & Gatehouse Security', color: 'blue'},
                                            {icon: UserCheck, title: 'Concierge & Front Desk Security', color: 'yellow'},
                                            {icon: Eye, title: 'Retail & Loss Prevention Officers', color: 'blue'},
                                            {icon: Home, title: 'Warehouse & Industrial Security', color: 'yellow'},
                                            {icon: Bell, title: 'Alarm Response Services', color: 'blue'}
                                        ].map((service, index) => {
                                            const Icon = service.icon;
                                            const isBlue = service.color === 'blue';
                                            return (
                                                <div key={index} className="col-lg-6 col-md-6">
                                                    <div style={{
                                                        background: '#ffffff',
                                                        borderRadius: '15px',
                                                        padding: '25px',
                                                        height: '100%',
                                                        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease',
                                                        cursor: 'pointer'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                                        e.currentTarget.style.boxShadow = isBlue 
                                                            ? '0 10px 30px rgba(30, 34, 71, 0.15)'
                                                            : '0 10px 30px rgba(253, 197, 26, 0.2)';
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
                                                        <div className="d-flex align-items-center">
                                                            <div style={{
                                                                width: '50px',
                                                                height: '50px',
                                                                background: isBlue 
                                                                    ? 'linear-gradient(135deg, #1e2247 0%, #2a2e5a 100%)'
                                                                    : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                                                borderRadius: '10px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                marginRight: '15px',
                                                                flexShrink: 0
                                                            }}>
                                                                <Icon size={24} style={{color: isBlue ? '#fdc51a' : '#1e2247'}} />
                                                            </div>
                                                            <h5 style={{
                                                                color: '#1e2247',
                                                                fontWeight: '700',
                                                                marginBottom: '0',
                                                                fontSize: '1.1rem'
                                                            }}>
                                                                {service.title}
                                                            </h5>
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
                    
                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                
                {/*===== East Melbourne Security Coverage Map Section =====*/}
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
                                        East Melbourne <span style={{color: '#fdc51a'}}>Security Coverage</span>
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    }}>
                                        Our security teams provide comprehensive coverage across all East Melbourne suburbs, ensuring rapid response and reliable protection for your property and people.
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
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50449.77073076589!2d145.08736!3d-37.81433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6cd4e2c2b%3A0x5045675218ce7e0!2sEast%20Melbourne%20VIC%203002%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
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
                                                {icon: MapPin, title: '16+ Suburbs', desc: 'Complete East Melbourne coverage', color: 'blue'},
                                                {icon: Zap, title: 'Rapid Response', desc: 'Local teams, faster arrival', color: 'yellow'},
                                                {icon: Clock, title: '24/7 Availability', desc: 'Always ready to deploy', color: 'blue'}
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
                
                {/*===== Meet Our East Melbourne Security Team Section =====*/}
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
                                        Meet Our <span style={{color: '#fdc51a'}}>East Melbourne Security Team</span>
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '1.15rem',
                                        lineHeight: '1.8',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    }}>
                                        Our East Melbourne security team brings local knowledge, professional training, and rapid response capabilities to protect businesses, retail areas, residential buildings, and events across the region.
                                    </p>
                                </div>

                                {/* Team Member Cards */}
                                <div className="row g-4 mb-5">
                                    {[
                                        {icon: Shield, title: 'East Sector Supervisor', desc: 'Experienced in commercial & retail precinct management', color: 'blue'},
                                        {icon: Building, title: 'Building Security Officers', desc: 'Serving Kew, Hawthorn, Camberwell, Burwood', color: 'yellow'},
                                        {icon: Eye, title: 'Retail Protection Officers', desc: 'Deployed across Box Hill, Doncaster, Richmond', color: 'blue'},
                                        {icon: Target, title: 'Mobile Patrol Drivers', desc: 'Cover Blackburn, Vermont, Ringwood, Croydon', color: 'yellow'},
                                        {icon: Users, title: 'Event Security Teams', desc: 'Supporting venues and functions across the region', color: 'blue'}
                                    ].map((team, index) => {
                                        const Icon = team.icon;
                                        const isBlue = team.color === 'blue';
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
                                                    <h4 style={{color: '#1e2247', fontWeight: '700', marginBottom: '15px', fontSize: '1.4rem'}}>
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

                                {/* Team Summary */}
                                <div className="text-center">
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(30, 34, 71, 0.05) 100%)',
                                        borderRadius: '15px',
                                        padding: '30px',
                                        border: '2px dashed rgba(253, 197, 26, 0.3)',
                                        maxWidth: '700px',
                                        margin: '0 auto'
                                    }}>
                                        <p style={{
                                            color: '#1e2247',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            marginBottom: '0',
                                            fontWeight: '600'
                                        }}>
                                            Together, our team ensures <span style={{color: '#fdc51a'}}>24/7 protection</span>, <span style={{color: '#fdc51a'}}>tailored solutions</span>, and <span style={{color: '#fdc51a'}}>peace of mind</span> for all East Melbourne clients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*===== CTA Section - Secure Your East Melbourne Site Today =====*/}
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
                                        Secure Your <span style={{color: '#fdc51a'}}>East Melbourne Site</span> Today
                                    </h2>
                                    <p style={{
                                        color: '#ffffff',
                                        fontSize: '1.3rem',
                                        lineHeight: '1.8',
                                        marginBottom: '40px',
                                        opacity: 0.9
                                    }}>
                                        Protect your people, property, and assets with trusted security professionals.
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
                            question: "Do you provide security for shopping centres in Box Hill or Doncaster?",
                            answer: "Yes, Metro Guards offers expert retail and shopping centre security in Box Hill, Doncaster, and surrounding areas. Our guards ensure high-traffic zones remain safe, prevent theft, and provide professional protection, giving both shoppers and retailers peace of mind around the clock."
                        },
                        {
                            question: "Can you supply crowd controllers for events in Hawthorn or Kew?",
                            answer: "Absolutely. Metro Guards provides trained crowd controllers and event security for corporate, community, and private events in Hawthorn, Kew, and nearby suburbs. Our teams manage crowd flow, prevent incidents, and ensure a safe environment, making your event secure, smooth, and worry-free from start to finish."
                        },
                        {
                            question: "How often can mobile patrols visit sites in Blackburn or Croydon?",
                            answer: "Metro Guards' mobile patrols in Blackburn, Croydon, and surrounding areas are fully flexible. We offer hourly, nightly, or customised patrol schedules based on site requirements, providing visible deterrence, rapid response, and 24/7 monitoring to protect your property, assets, and staff effectively."
                        },
                        {
                            question: "Do you protect residential buildings in Camberwell, Balwyn, and Kew?",
                            answer: "Yes. Metro Guards delivers comprehensive residential security in Camberwell, Balwyn, and Kew. Services include building security guards, concierge officers, and night patrols to safeguard residents and properties, prevent unauthorised access, and maintain a safe, secure, and comfortable living environment for all tenants."
                        }
                    ]}
                />
            </Layout>
            </> ) }