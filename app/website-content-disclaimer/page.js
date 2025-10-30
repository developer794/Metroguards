"use client";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Accrediation10 from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"


export default function TermsConditionsPage() {
    const [activeSection, setActiveSection] = useState('definitions');

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Website Content Disclaimer"
                mainTitle="Website Content Disclaimer"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/C38803E5-A7C7-472E-839D-290BBEA65378_1_105_c.webp"
                subtitle="Legal Terms and Conditions for Metropolitan Security Services in Melbourne"
            >
                {/* Disclaimer Section */}
                <section style={{
                    background: '#ffffff',
                    padding: '100px 0',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Background Elements */}
                    <div style={{ 
                        position: 'absolute', 
                        top: '50px', 
                        right: '5%', 
                        opacity: '0.03', 
                        fontSize: '140px', 
                        color: '#1e2247',
                        zIndex: 0 
                    }}>
                        <i className="bi bi-info-circle"></i>
                    </div>
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '50px', 
                        left: '5%', 
                        opacity: '0.03', 
                        fontSize: '120px', 
                        color: '#fdc51a',
                        zIndex: 0 
                    }}>
                        <i className="bi bi-image"></i>
                    </div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        {/* Section Header */}
                        <div className="text-center" style={{ marginBottom: '50px' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(253, 197, 26, 0.1)',
                                color: '#1e2247',
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                                border: '1px solid rgba(253, 197, 26, 0.2)'
                            }}>
                                <i className="bi bi-exclamation-triangle"></i>
                                Important Notice
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: '800',
                                color: '#1e2247',
                                marginBottom: '16px',
                                lineHeight: '1.2'
                            }}>
                                Representational <span style={{ color: '#fdc51a' }}>Content Disclaimer</span>
                            </h2>
                        </div>

                        {/* Disclaimer Card */}
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div style={{
                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                    borderRadius: '20px',
                                    padding: '50px',
                                    boxShadow: '0 20px 60px rgba(30, 34, 71, 0.15)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                }}>
                                    
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start', 
                                        gap: '30px',
                                        position: 'relative',
                                        zIndex: 2
                                    }}>
                                        

                                        {/* Content */}
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{
                                                color: '#fff',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '20px',
                                                lineHeight: '1.4'
                                            }}>
                                                Informational & Representative Materials
                                            </h4>
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                fontSize: '1.05rem',
                                                lineHeight: '1.8',
                                                margin: 0
                                            }}>
                                                All characters, images, and materials displayed on this website are provided for general informational purposes only. Some images or individuals shown on this site are representative only and may not be actual employees or clients of Metropolitan Guard Services.
                                                <br/><br/>
                                                While we aim to accurately represent the nature of our business and services, certain visual or descriptive elements are used for illustrative purposes and should not be interpreted as direct depictions of our personnel, operations, or business relationships.
                                            </p>

                                            {/* Key Points */}
                                            <div style={{ 
                                                marginTop: '30px',
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                gap: '15px'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '12px 18px',
                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                                    <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '600' }}>
                                                        Representative Images
                                                    </span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '12px 18px',
                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                                    <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '600' }}>
                                                        Illustrative Purpose
                                                    </span>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '12px 18px',
                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                                    <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '600' }}>
                                                        General Information
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Website Disclaimer & Governing Law Section */}
                <section style={{
                    background: '#f8f9fa',
                    padding: '100px 0',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Background */}
                    <div style={{ 
                        position: 'absolute', 
                        top: '80px', 
                        left: '3%', 
                        opacity: '0.03', 
                        fontSize: '160px', 
                        color: '#fdc51a',
                        zIndex: 0 
                    }}>
                        <i className="bi bi-file-text"></i>
                    </div>
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '80px', 
                        right: '3%', 
                        opacity: '0.03', 
                        fontSize: '140px', 
                        color: '#1e2247',
                        zIndex: 0 
                    }}>
                        <i className="bi bi-shield-check"></i>
                    </div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        {/* Section Header */}
                        <div className="text-center" style={{ marginBottom: '60px' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(253, 197, 26, 0.1)',
                                color: '#1e2247',
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                                border: '1px solid rgba(253, 197, 26, 0.2)'
                            }}>
                                <i className="bi bi-file-earmark-text"></i>
                                Legal Terms
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: '800',
                                color: '#1e2247',
                                marginBottom: '16px',
                                lineHeight: '1.2'
                            }}>
                                Website <span style={{ color: '#fdc51a' }}>Disclaimer</span>
                            </h2>
                            <p style={{ 
                                fontSize: '1.05rem', 
                                color: '#6c757d', 
                                maxWidth: '700px', 
                                margin: '0 auto', 
                                lineHeight: '1.6' 
                            }}>
                                Important legal information regarding the use of this website and our services
                            </p>
                        </div>

                        {/* Disclaimer Cards Grid */}
                        <div className="row g-4 mb-5">
                            {/* General Disclaimer */}
                            <div className="col-md-6">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                    height: '100%',
                                    border: '1px solid rgba(253, 197, 26, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            color: '#1e2247',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            flexShrink: 0,
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-info-circle-fill"></i>
                                        </div>
                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>
                                            Information Accuracy
                                        </h4>
                                    </div>
                                    <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0, fontSize: '1rem' }}>
                                        The information provided on this website is for general informational purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information contained on the website.
                                    </p>
                                </div>
                            </div>

                            {/* Limitation of Liability */}
                            <div className="col-md-6">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                    height: '100%',
                                    border: '1px solid rgba(253, 197, 26, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                            color: '#fdc51a',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            flexShrink: 0,
                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                        }}>
                                            <i className="bi bi-shield-exclamation"></i>
                                        </div>
                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>
                                            Limitation of Liability
                                        </h4>
                                    </div>
                                    <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0, fontSize: '1rem' }}>
                                        In no event will Metropolitan Guard Services be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                                    </p>
                                </div>
                            </div>

                            {/* No Warranties */}
                            <div className="col-md-6">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                    height: '100%',
                                    border: '1px solid rgba(253, 197, 26, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            color: '#1e2247',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            flexShrink: 0,
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-x-circle-fill"></i>
                                        </div>
                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>
                                            No Warranties
                                        </h4>
                                    </div>
                                    <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0, fontSize: '1rem' }}>
                                        This website and its content are provided on an "as is" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, timely, secure, or error-free. Your use of any information or materials on this website is entirely at your own risk.
                                    </p>
                                </div>
                            </div>

                            {/* External Links */}
                            <div className="col-md-6">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                    height: '100%',
                                    border: '1px solid rgba(253, 197, 26, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                            color: '#fdc51a',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            flexShrink: 0,
                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                        }}>
                                            <i className="bi bi-link-45deg"></i>
                                        </div>
                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>
                                            External Links
                                        </h4>
                                    </div>
                                    <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0, fontSize: '1rem' }}>
                                        Through this website you may be able to link to other websites which are not under the control of Metropolitan Guard Services. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                                    </p>
                                </div>
                            </div>

                            {/* Professional Advice */}
                            <div className="col-md-6">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                    height: '100%',
                                    border: '1px solid rgba(253, 197, 26, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            color: '#1e2247',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            flexShrink: 0,
                                            boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-person-badge"></i>
                                        </div>
                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>
                                            Professional Advice
                                        </h4>
                                    </div>
                                    <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0, fontSize: '1rem' }}>
                                        The information on this website is not intended to constitute professional advice. You should not rely solely on this information but should seek independent professional advice before making any decision regarding security services. Every effort is made to keep the website up and running smoothly.
                                    </p>
                                </div>
                            </div>

                            {/* Changes to Content */}
                            <div className="col-md-6">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                    height: '100%',
                                    border: '1px solid rgba(253, 197, 26, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                            color: '#fdc51a',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            flexShrink: 0,
                                            boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                        }}>
                                            <i className="bi bi-arrow-repeat"></i>
                                        </div>
                                        <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>
                                            Changes to Content
                                        </h4>
                                    </div>
                                    <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0, fontSize: '1rem' }}>
                                        Metropolitan Guard Services reserves the right to modify, suspend or discontinue any aspect of the website at any time. We may also impose limits on certain features or restrict your access to parts or all of the website without notice or liability. Content, services and prices are subject to change without notice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Victoria Governing Law Section */}
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-10">
                                <div style={{
                                    background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                    borderRadius: '20px',
                                    padding: '50px',
                                    boxShadow: '0 20px 60px rgba(30, 34, 71, 0.2)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '2px solid rgba(253, 197, 26, 0.3)'
                                }}>
                                    {/* Decorative Glow */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-100px',
                                        left: '-100px',
                                        width: '300px',
                                        height: '300px',
                                        background: 'rgba(253, 197, 26, 0.1)',
                                        borderRadius: '50%',
                                        filter: 'blur(80px)'
                                    }}></div>

                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                background: 'rgba(253, 197, 26, 0.15)',
                                                color: '#fdc51a',
                                                padding: '12px 24px',
                                                borderRadius: '50px',
                                                fontSize: '0.9rem',
                                                fontWeight: '700',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase',
                                                border: '1px solid rgba(253, 197, 26, 0.3)',
                                                marginBottom: '20px'
                                            }}>
                                                <i className="bi bi-bank2"></i>
                                                Legal Jurisdiction
                                            </div>
                                            <h3 style={{
                                                color: '#fff',
                                                fontSize: '2rem',
                                                fontWeight: '800',
                                                marginBottom: '20px'
                                            }}>
                                                Governing Law & Jurisdiction
                                            </h3>
                                        </div>

                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '16px',
                                            padding: '35px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <ul style={{ 
                                                listStyle: 'none', 
                                                padding: 0, 
                                                margin: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '20px'
                                            }}>
                                                <li style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: '#fdc51a',
                                                        color: '#1e2247',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1rem',
                                                        fontWeight: '800',
                                                        flexShrink: 0
                                                    }}>
                                                        1
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <h5 style={{ 
                                                            color: '#fdc51a', 
                                                            fontSize: '1.1rem', 
                                                            fontWeight: '700',
                                                            marginBottom: '8px' 
                                                        }}>
                                                            Governing Law
                                                        </h5>
                                                        <p style={{
                                                            color: 'rgba(255, 255, 255, 0.85)',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.7',
                                                            margin: 0
                                                        }}>
                                                            This disclaimer and your use of this website are governed by and construed in accordance with the laws of <strong style={{ color: '#fdc51a' }}>Victoria, Australia</strong>. All content, services, and information provided on this website shall be interpreted under Victorian law.
                                                        </p>
                                                    </div>
                                                </li>

                                                <li style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: '#fdc51a',
                                                        color: '#1e2247',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1rem',
                                                        fontWeight: '800',
                                                        flexShrink: 0
                                                    }}>
                                                        2
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <h5 style={{ 
                                                            color: '#fdc51a', 
                                                            fontSize: '1.1rem', 
                                                            fontWeight: '700',
                                                            marginBottom: '8px' 
                                                        }}>
                                                            Jurisdiction
                                                        </h5>
                                                        <p style={{
                                                            color: 'rgba(255, 255, 255, 0.85)',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.7',
                                                            margin: 0
                                                        }}>
                                                            You irrevocably submit to the exclusive jurisdiction of the <strong style={{ color: '#fdc51a' }}>courts of Victoria, Australia</strong> for the determination of any disputes arising out of or in connection with this website, its use, or any services provided by Metropolitan Guard Services.
                                                        </p>
                                                    </div>
                                                </li>

                                                <li style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: '#fdc51a',
                                                        color: '#1e2247',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1rem',
                                                        fontWeight: '800',
                                                        flexShrink: 0
                                                    }}>
                                                        3
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <h5 style={{ 
                                                            color: '#fdc51a', 
                                                            fontSize: '1.1rem', 
                                                            fontWeight: '700',
                                                            marginBottom: '8px' 
                                                        }}>
                                                            Legal Enforceability
                                                        </h5>
                                                        <p style={{
                                                            color: 'rgba(255, 255, 255, 0.85)',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.7',
                                                            margin: 0
                                                        }}>
                                                            If any provision of this disclaimer is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein. The rights and obligations of the parties under this disclaimer shall continue to have full force and effect under Victorian law.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Contact Information */}
                                        <div style={{
                                            marginTop: '35px',
                                            textAlign: 'center',
                                            padding: '25px',
                                            background: 'rgba(253, 197, 26, 0.08)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1rem',
                                                margin: 0,
                                                lineHeight: '1.6'
                                            }}>
                                                <i className="bi bi-info-circle-fill" style={{ color: '#fdc51a', marginRight: '8px' }}></i>
                                                For any questions regarding this disclaimer or legal matters, please contact us at{' '}
                                                <strong style={{ color: '#fdc51a' }}>admin@metroguards.com.au</strong> or call{' '}
                                                <strong style={{ color: '#fdc51a' }}>1300 73 11 73</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Accrediation10 />
                <Subscribe />
            </Layout>

            <style jsx global>{`
                /* Terms Page Styles */
                .terms-hero-section {
                    background: #ffffff;
                    padding: 120px 0;
                    position: relative;
                    overflow: hidden;
                }

                .terms-hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 50%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    padding: 12px 25px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .hero-title {
                    font-size: 4rem;
                    font-weight: 800;
                    color: #1e2247;
                    margin-bottom: 25px;
                    line-height: 1.2;
                }

                .hero-description {
                    font-size: 1.3rem;
                    color: #6c757d;
                    margin-bottom: 50px;
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .hero-stats {
                    display: flex;
                    gap: 60px;
                    justify-content: center;
                    margin-top: 50px;
                }

                .stat-item {
                    text-align: center;
                    color: #1e2247;
                }

                .stat-item h3 {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #fdc51a;
                }

                .stat-item p {
                    font-size: 1.1rem;
                    margin: 0;
                    color: #6c757d;
                    font-weight: 500;
                }

                /* Table of Contents */
                .toc-section {
                    padding: 80px 0;
                    background: #f8f9fa;
                }

                .toc-wrapper {
                    background: white;
                    border-radius: 25px;
                    padding: 50px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(253, 197, 26, 0.2);
                }

                .toc-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 40px;
                    text-align: center;
                }

                .toc-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                }

                .toc-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 20px 25px;
                    background: #f8f9fa;
                    border: 2px solid transparent;
                    border-radius: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e2247;
                }

                .toc-item:hover {
                    background: #1e2247;
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(30, 34, 71, 0.3);
                }

                .toc-item.active {
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    color: #1e2247;
                    border-color: #fdc51a;
                    box-shadow: 0 10px 25px rgba(253, 197, 26, 0.3);
                }

                .toc-item i {
                    font-size: 1.5rem;
                    flex-shrink: 0;
                }

                /* Terms Content Section */
                .terms-content-section {
                    padding: 100px 0;
                    background: white;
                }

                .terms-content {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .terms-section {
                    margin-bottom: 60px;
                }

                .section-card {
                    background: white;
                    border-radius: 25px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(253, 197, 26, 0.2);
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .section-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
                }

                .section-header {
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    padding: 40px 50px;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .section-number {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #1e2247;
                    font-size: 2rem;
                    font-weight: 800;
                    flex-shrink: 0;
                }

                .section-title {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: white;
                    margin: 0;
                    line-height: 1.3;
                }

                .section-content {
                    padding: 50px;
                }

                .subsection-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin: 30px 0 20px 0;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #fdc51a;
                }

                .section-description {
                    font-size: 1.1rem;
                    color: #6c757d;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }

                .definition-list {
                    margin: 30px 0;
                }

                .definition-item {
                    background: #f8f9fa;
                    border-left: 4px solid #fdc51a;
                    padding: 25px;
                    margin-bottom: 20px;
                    border-radius: 0 15px 15px 0;
                    transition: all 0.3s ease;
                }

                .definition-item:hover {
                    background: #e8f5e8;
                    transform: translateX(5px);
                }

                .definition-term {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 10px;
                }

                .definition-text {
                    font-size: 1rem;
                    color: #6c757d;
                    line-height: 1.6;
                }

                .terms-list {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0;
                }

                .terms-list li {
                    position: relative;
                    padding: 15px 0 15px 30px;
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 1.1rem;
                }

                .terms-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 15px;
                    color: #fdc51a;
                    font-weight: 700;
                    font-size: 1.2rem;
                }

                /* Contact Section */
                .contact-info-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    position: relative;
                    overflow: hidden;
                }

                .contact-info-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 60%),
                        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
                    pointer-events: none;
                }

                .contact-banner {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    padding: 60px 50px;
                    position: relative;
                    z-index: 2;
                }

                .contact-content {
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .contact-text {
                    flex: 1;
                }

                .contact-text h3 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 20px;
                }

                .contact-text p {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.6;
                    margin: 0;
                }

                .contact-buttons {
                    display: flex;
                    gap: 20px;
                    flex-shrink: 0;
                }

                .btn-primary, .btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 18px 35px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    color: #1e2247;
                }

                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(253, 197, 26, 0.4);
                }

                .btn-secondary {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                }

                .btn-secondary:hover {
                    background: white;
                    color: #1e2247;
                    transform: translateY(-3px);
                }

                /* Responsive Design */
                @media (max-width: 991px) {
                    .hero-title {
                        font-size: 3rem;
                    }

                    .hero-stats {
                        gap: 40px;
                    }

                    .toc-grid {
                        grid-template-columns: 1fr;
                    }

                    .contact-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .contact-buttons {
                        justify-content: center;
                    }

                    .section-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                    }

                    .section-content {
                        padding: 40px 30px;
                    }
                }

                @media (max-width: 767px) {
                    .terms-hero-section {
                        padding: 80px 0;
                    }

                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: 30px;
                    }

                    .toc-wrapper {
                        padding: 30px 20px;
                    }

                    .toc-title {
                        font-size: 2rem;
                    }

                    .section-header {
                        padding: 30px 25px;
                    }

                    .section-number {
                        width: 60px;
                        height: 60px;
                        font-size: 1.5rem;
                    }

                    .section-title {
                        font-size: 1.8rem;
                    }

                    .contact-banner {
                        padding: 40px 30px;
                    }

                    .contact-text h3 {
                        font-size: 2rem;
                    }

                    .contact-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary, .btn-secondary {
                        padding: 15px 30px;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    )
}