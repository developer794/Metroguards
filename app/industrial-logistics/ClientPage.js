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

export default function IndustryIndustrialLogisticsPage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Industrial & Logistics"
                mainTitle="Security Guards for Warehouses & Transport Melbourne"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
                
            >
                <div>
                    {/*===== Hero Section - Security Guards for Warehouses & Transport =====*/}
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
                                            INDUSTRIAL & LOGISTICS SECURITY
                                        </span>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Security Guards for <span style={{color: '#fdc51a'}}>Warehouses & Transport Melbourne</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto 40px auto'
                                        }}>
                                            Melbourne's industrial and logistics sector operates around the clock. With high-value stock, busy loading zones, and open-access layouts, these sites face constant security threats, including theft, vandalism, trespassing, and operational disruptions.
                                        </p>
                                    </div>

                                    {/* Core Features Grid */}
                                    <div className="row g-4 justify-content-center mb-5">
                                        {[
                                            {icon: Shield, title: 'Fully licensed security officers', color: 'blue'},
                                            {icon: Eye, title: 'Proactive monitoring', color: 'yellow'},
                                            {icon: Clock, title: '24/7 protection', color: 'blue'},
                                            {icon: CheckCircle, title: 'Trained for industrial environments', color: 'yellow'}
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
                                        Metro Guards provides reliable, proactive, and fully licensed security officers trained specifically for industrial, freight, and transport environments. Whether you operate a warehouse, production plant, distribution centre, or port-side facility, we ensure your staff, assets, and operations stay safe 24/7.
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
                                {/* Warehouse Security */}
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
                                    onClick={() => toggleCard('warehouse')}
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
                                            Warehouse Security for Storage & Distribution Centres
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
                                                    transform: expandedCard === 'warehouse' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'warehouse' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'warehouse' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Industrial and logistics hubs in suburbs like Dandenong South, Truganina, Laverton North, Campbellfield, and Port Melbourne are always bustling with trucks, goods, contractors, and forklifts. Without careful security oversight, these busy sites can face costly stock losses and interruptions to daily operations.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Metro Guards maintain safety by monitoring entry and exit points, helping you avoid disruptions from break-ins or internal risks.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Preventing theft or unauthorised access with internal and external patrols, CCTV monitoring, and emergency handling',
                                                    'Checking trucks, drivers, and delivery notes, securing pallets, containers, dock areas, and yard spaces.'
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

                                {/* Freight & Logistics Security */}
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
                                    onClick={() => toggleCard('freight')}
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
                                                <Truck size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Freight & Logistics Security for Truck Yards & Depots
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
                                                    transform: expandedCard === 'freight' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'freight' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'freight' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                In Melbourne's busy freight hubs around Dandenong or Altona, trucks, containers, and open yards face risks from unauthorized access, cargo theft, and traffic chaos. Metro Guards reinforce your logistics with 24/7 coverage, alarm handling, and fast response to incidents.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                We ensure deliveries run without delays while protecting against vandalism or harassment in high-traffic environments.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Custom security plans, including gatehouse duties, driver ID checks, load inspections, and traffic control to maintain order.',
                                                    'Mobile patrols for random checks on fences, gates, and loading bays, and CCTV oversight for real-time monitoring.'
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

                                {/* Manufacturing Plant Security */}
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
                                    onClick={() => toggleCard('manufacturing')}
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
                                                <Wrench size={50} style={{color: '#fdc51a'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Manufacturing Plant Security for Factories & Production Sites
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
                                                    transform: expandedCard === 'manufacturing' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'manufacturing' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'manufacturing' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Manufacturing facilities across Melbourne's industrial zones, like Campbellfield or Scoresby, involve heavy machinery, raw materials, and shift workers. They require strict safety protocols to prevent accidents, sabotage, or IP theft.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Metro Guards' tailored approach safeguards assets and personnel, minimizes workplace incidents, and boosts operational reliability.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Handling access management with staff badges, contractor entries, and visitor passes, alongside perimeter patrols and equipment checks.',
                                                    'Site-specific security protocols, including reception security, behaviour monitoring, and immediate disturbance response.'
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

                                {/* Port & Maritime Security */}
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
                                    onClick={() => toggleCard('port')}
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
                                                <MapPin size={50} style={{color: '#1e2247'}} />
                                            </div>
                                        </div>
                                        
                                        <h3 style={{
                                            color: '#1e2247', 
                                            fontWeight: '700', 
                                            marginBottom: '10px', 
                                            fontSize: '1.5rem', 
                                            textAlign: 'center'
                                        }}>
                                            Port & Maritime Security for Docks & Terminals
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
                                                    transform: expandedCard === 'port' ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    animation: expandedCard !== 'port' ? 'bounce 2s infinite' : 'none'
                                                }} 
                                            />
                                        </div>

                                        <div style={{
                                            maxHeight: expandedCard === 'port' ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.5s ease'
                                        }}>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                At Melbourne's ports, like the Port of Melbourne or Webb Dock, handling cargo ships, containers, and international trade exposes sites to smuggling, trespassing, and regulatory breaches. Metro Guards deliver robust protection to keep your maritime operations secure.
                                            </p>
                                            <p style={{color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px'}}>
                                                Our guards are experienced in port-side operations, especially around Port Melbourne, Webb Dock, and Swanson Dock.
                                            </p>
                                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                                {[
                                                    'Coordination with customs for compliance, managing heavy vehicle traffic, and responding swiftly to emergencies like spills or intrusions.',
                                                    'Reducing the risk of theft or unauthorized activity through dock management, cargo inspections, patrols, and integrated surveillance.'
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
                                            Why Metro Guards for <span style={{color: '#fdc51a'}}>Industrial, Logistics & Transport Security</span>
                                        </h2>
                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            maxWidth: '900px',
                                            margin: '0 auto'
                                        }}>
                                            Metro Guards provide local security guards who know Melbourne, its suburban regulations, and site requirements. We deter crime through proactive surveillance and risk identification for industrial sites and warehouses.
                                        </p>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="row g-4">
                                        {[
                                            {
                                                icon: MapPin,
                                                title: 'Local Melbourne Expertise',
                                                desc: 'Our guards know Melbourne\'s industrial suburbs, regulations, and specific site requirements, ensuring fast response times and local knowledge of warehouse and logistics operations.',
                                                color: 'yellow'
                                            },
                                            {
                                                icon: Eye,
                                                title: 'Proactive Crime Prevention',
                                                desc: 'We deter crime through continuous surveillance and risk identification. Our innovative, eagle-eyed protection uses trained guards and CCTV monitoring to identify threats before they escalate.',
                                                color: 'blue'
                                            },
                                            {
                                                icon: Target,
                                                title: 'Customised & Affordable Solutions',
                                                desc: 'Receive a customised security plan tailored to your site layout and workflow at affordable prices. We adapt our services to match your operational needs and budget requirements.',
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
                                        Get a Quote for <span style={{color: '#fdc51a'}}>Warehouse & Logistics Sites Now!</span>
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