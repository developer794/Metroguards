"use client";
import Layout from "@/components/layout/Layout"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accrediation10 from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"


export default function SecurityLicensePage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact-us", { method: "POST", body: formData });
            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data?.success) {
                throw new Error(data?.error || `Request failed: ${res.status}`);
            }

            toast.success("Message sent successfully!");
            form.reset();
        } catch (err) {
            toast.error(err.message || "Network error. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Security Licenses & Insurance"
                mainTitle="Licensed & Insured Security Services"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
                subtitle="Professional Security Solutions with Full Licensing and Comprehensive Insurance Coverage in Melbourne"
            >
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="hero-section" style={{
                        background: '#ffffff',
                        padding: '100px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <div className="badge-section mb-4">
                                            <span className="badge" style={{
                                                backgroundColor: '#fdc51a',
                                                color: '#1e2247',
                                                padding: '12px 24px',
                                                borderRadius: '50px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>
                                                <i className="fas fa-shield-alt me-2"></i>
                                                Fully Certified & Insured
                                            </span>
                                        </div>
                                        
                                        <h1 className="hero-title mb-4" style={{
                                            color: '#1e2247',
                                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                            fontWeight: '800',
                                            lineHeight: '1.2',
                                            marginBottom: '1.5rem'
                                        }}>
                                            SECURITY LICENSE & INSURANCE
                                        </h1>
                                        
                                        <p className="hero-description mb-4" style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            marginBottom: '1.5rem'
                                        }}>
                                            At Metropolitan Security, we maintain all necessary licenses, insurance coverage and industry certifications to provide you with peace of mind. Our commitment to compliance and professional standards ensures you receive security services of the highest quality.
                                        </p>
                                        
                                        <p className="hero-description mb-5" style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            marginBottom: '2rem'
                                        }}>
                                            Below you'll find documentation of our company registrations, insurance policies, licenses and industry recognition. We're proud to operate with complete transparency and adhere to all regulatory requirements.
                                        </p>
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3">
                                                <a 
                                                    href="#contact-form" 
                                                className="btn btn-primary-custom"
                                                    style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '15px 30px',
                                                    borderRadius: '8px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                        border: 'none',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 6px 20px rgba(253, 197, 26, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(253, 197, 26, 0.3)';
                                                }}
                                            >
                                                Compliance Pack <i className="fas fa-arrow-right ms-2"></i>
                                                </a>
                                            <a 
                                                href="tel:1300731173" 
                                                className="btn btn-secondary-custom"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#1e2247',
                                                    padding: '15px 30px',
                                                    borderRadius: '8px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    border: '2px solid #1e2247',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#1e2247';
                                                }}
                                            >
                                                <i className="fas fa-phone me-2"></i>
                                                CALL FOR VERIFICATION
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-image-section position-relative">
                                        <div className="image-container" style={{
                                            position: 'relative',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            <img 
                                                src="/assets/img/blog/local.webp" 
                                                alt="Security Licenses and Certificates" 
                                                style={{
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover',
                                                    borderRadius: '20px'
                                                }}
                                            />
                                            <div className="image-overlay" style={{
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                right: '0',
                                                bottom: '0',
                                                background: 'linear-gradient(45deg, rgba(30, 34, 71, 0.8), rgba(253, 197, 26, 0.2))',
                                                borderRadius: '20px'
                                            }}></div>
                                        </div>
                                        
                                        {/* Floating Elements */}
                                        <div className="floating-element" style={{
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px',
                                            backgroundColor: '#fdc51a',
                                            color: '#1e2247',
                                            padding: '15px',
                                            borderRadius: '50%',
                                            fontSize: '24px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.4)',
                                            animation: 'float 3s ease-in-out infinite'
                                        }}>
                                            <i className="fas fa-certificate"></i>
                                        </div>
                                        
                                        <div className="floating-element" style={{
                                            position: 'absolute',
                                            bottom: '30px',
                                            left: '20px',
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '15px',
                                            borderRadius: '50%',
                                            fontSize: '24px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.4)',
                                            animation: 'float 3s ease-in-out infinite 1.5s'
                                        }}>
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Background Pattern */}
                        <div className="bg-pattern" style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fdc51a" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                            opacity: '0.3'
                        }}></div>
                    </div>

                    {/*===== Certifications Section =====*/}
                    <div className="certifications-section" style={{
                        padding: '100px 0',
                        backgroundColor: '#f8f9fa',
                        position: 'relative'
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-header">
                                        <div className="section-badge mb-4">
                                            <span className="badge" style={{
                                                backgroundColor: '#1e2247',
                                                color: '#fdc51a',
                                                padding: '12px 24px',
                                                borderRadius: '50px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>
                                                <i className="fas fa-file-alt me-2"></i>
                                            Compliance Documentation
                                            </span>
                                        </div>
                                        
                                        <h2 className="section-title mb-4" style={{
                                            color: '#1e2247',
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '800',
                                            lineHeight: '1.2'
                                        }}>
                                            OUR CERTIFICATIONS & LICENSES
                                        </h2>
                                        
                                        <p className="section-description" style={{
                                            color: '#6c757d',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            maxWidth: '600px',
                                            margin: '0 auto'
                                        }}>
                                            We maintain all required registrations and licenses to operate legally and professionally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="certification-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                    }}>
                                        <div className="card-header mb-4">
                                            <div className="icon-wrapper mb-3" style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '15px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '20px'
                                            }}>
                                                <i className="fas fa-building" style={{
                                                    fontSize: '24px',
                                                    color: '#1e2247'
                                                }}></i>
                                            </div>
                                            <h4 className="card-title" style={{
                                                color: '#1e2247',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '0'
                                            }}>
                                                Company Registration
                                        </h4>
                                        </div>
                                        
                                        <div className="card-content">
                                            <ul className="document-list" style={{
                                                listStyle: 'none',
                                                padding: '0',
                                                margin: '0'
                                            }}>
                                                <li className="document-item mb-3">
                                                    <a href="/Modern-Slavery-Statement-V2-1.pdf" target="_blank" 
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Certificate of Registration of a Company</span>
                                                    </a>
                                            </li>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/uploads/2025/06/business-name.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Certificate of Registration of Business Name</span>
                                                    </a>
                                            </li>
                                                <li className="document-item">
                                                    <a href="/wp-content/uploads/2025/06/Organisation-Recognition-Certificate.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Certificate of Recognition</span>
                                                    </a>
                                            </li>
                                        </ul>
                                        </div>
                                        
                                        {/* Card Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            right: '0',
                                            height: '4px',
                                            background: 'linear-gradient(90deg, #fdc51a, #1e2247)',
                                            borderRadius: '20px 20px 0 0'
                                        }}></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6">
                                    <div className="certification-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                    }}>
                                        <div className="card-header mb-4">
                                            <div className="icon-wrapper mb-3" style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#1e2247',
                                                borderRadius: '15px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '20px'
                                            }}>
                                                <i className="fas fa-shield-alt" style={{
                                                    fontSize: '24px',
                                                    color: '#fdc51a'
                                                }}></i>
                                            </div>
                                            <h4 className="card-title" style={{
                                                color: '#1e2247',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '0'
                                            }}>
                                                Insurance Coverage
                                        </h4>
                                        </div>
                                        
                                        <div className="card-content">
                                            <ul className="document-list" style={{
                                                listStyle: 'none',
                                                padding: '0',
                                                margin: '0'
                                            }}>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/uploads/2025/03/Public-Liability.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Public Liability Insurance</span>
                                                    </a>
                                            </li>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/uploads/2025/06/PI-Certificate-of-Insurance.pdf.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Professional Indemnity Insurance</span>
                                                    </a>
                                            </li>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/uploads/2025/07/WorkCover-Insurance-Certificate-of-Currency-30-Jun-2026.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Work Cover Insurance</span>
                                                    </a>
                                            </li>
                                                
                                        </ul>
                                        </div>
                                        
                                        {/* Card Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            right: '0',
                                            height: '4px',
                                            background: 'linear-gradient(90deg, #1e2247, #fdc51a)',
                                            borderRadius: '20px 20px 0 0'
                                        }}></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6">
                                    <div className="certification-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        height: '100%',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #e9ecef',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                    }}>
                                        <div className="card-header mb-4">
                                            <div className="icon-wrapper mb-3" style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '15px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '20px'
                                            }}>
                                                <i className="fas fa-id-card" style={{
                                                    fontSize: '24px',
                                                    color: '#1e2247'
                                                }}></i>
                                            </div>
                                            <h4 className="card-title" style={{
                                                color: '#1e2247',
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                marginBottom: '0'
                                            }}>
                                                Security Licenses
                                        </h4>
                                        </div>
                                        
                                        <div className="card-content">
                                            <ul className="document-list" style={{
                                                listStyle: 'none',
                                                padding: '0',
                                                margin: '0'
                                            }}>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/smush-webp/2025/07/LDR-License.jpg.webp" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Private Security Business Licence (VIC)</span>
                                                    </a>
                                            </li>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/uploads/2025/06/Master-Licence-NSW.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Master Licence (NSW)</span>
                                                    </a>
                                            </li>
                                                <li className="document-item mb-3">
                                                    <a href="/wp-content/uploads/2025/05/Labour-Hire-Organisation-Licence-Certificate-VICLHL01373.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>Labour Hire Licence</span>
                                                    </a>
                                            </li>
                                                <li className="document-item">
                                                    <a href="/wp-content/uploads/2025/06/13591.pdf" target="_blank"
                                                       style={{
                                                           display: 'flex',
                                                           alignItems: 'center',
                                                           textDecoration: 'none',
                                                           color: '#495057',
                                                           transition: 'color 0.3s ease',
                                                           padding: '10px',
                                                           borderRadius: '8px',
                                                           border: '1px solid transparent'
                                                       }}
                                                       onMouseEnter={(e) => {
                                                           e.currentTarget.style.color = '#fdc51a';
                                                           e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                           e.currentTarget.style.borderColor = '#fdc51a';
                                                       }}
                                                       onMouseLeave={(e) => {
                                                           e.currentTarget.style.color = '#495057';
                                                           e.currentTarget.style.backgroundColor = 'transparent';
                                                           e.currentTarget.style.borderColor = 'transparent';
                                                       }}>
                                                        <i className="fas fa-file-pdf me-3" style={{
                                                            color: '#fdc51a',
                                                            fontSize: '18px'
                                                        }}></i>
                                                        <span style={{fontWeight: '500'}}>CM3 Certificate</span>
                                                    </a>
                                            </li>
                                        </ul>
                                        </div>
                                        
                                        {/* Card Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            right: '0',
                                            height: '4px',
                                            background: 'linear-gradient(90deg, #fdc51a, #1e2247)',
                                            borderRadius: '20px 20px 0 0'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Awards & Membership Section =====*/}
                    <div className="awards-section" style={{
                        padding: '100px 0',
                        backgroundColor: '#f8f9fa',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-badge mb-4">
                                        <span className="badge" style={{
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '12px 24px',
                                            borderRadius: '50px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            <i className="fas fa-trophy me-2"></i>
                                            Industry Recognition
                                        </span>
                                    </div>
                                    
                                    <h2 className="section-title mb-4" style={{
                                        color: '#1e2247',
                                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                                        fontWeight: '800',
                                        lineHeight: '1.2'
                                    }}>
                                        AWARDS & MEMBERSHIP
                                    </h2>
                                    
                                    <p className="section-description" style={{
                                        color: '#6c757d',
                                        fontSize: '1.1rem',
                                        lineHeight: '1.6',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    }}>
                                        Our commitment to excellence has been recognized through these prestigious awards and memberships.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="award-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '30px 20px',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #fdc51a',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}>
                                        <div className="award-icon-large mb-3" style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#fdc51a',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-trophy" style={{
                                                color: '#1e2247',
                                                fontSize: '24px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="award-title mb-2" style={{
                                            color: '#1e2247',
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            textAlign: 'center'
                                        }}>
                                            <a href="/wp-content/uploads/2025/06/aus-achiever-award-2014.pdf" target="_blank" 
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1e2247',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                            onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                Australian Achiever Award Winner 2014
                                            </a>
                                        </h4>
                                        
                                        <p className="award-description mb-3" style={{
                                            color: '#6c757d',
                                            fontSize: '0.9rem',
                                            textAlign: 'center',
                                            lineHeight: '1.5'
                                        }}>
                                            Excellence in Customer Service
                                        </p>
                                        
                                        <div className="award-year" style={{
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '6px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            display: 'inline-block',
                                            width: '100%'
                                        }}>
                                            2014
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="award-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '30px 20px',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #fdc51a',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}>
                                        <div className="award-icon-large mb-3" style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#fdc51a',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-trophy" style={{
                                                color: '#1e2247',
                                                fontSize: '24px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="award-title mb-2" style={{
                                            color: '#1e2247',
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            textAlign: 'center'
                                        }}>
                                            <a href="/wp-content/uploads/2025/06/aus-achiever-award-2015.pdf" target="_blank" 
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1e2247',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                            onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                Australian Achiever Award Winner 2015
                                            </a>
                                        </h4>
                                        
                                        <p className="award-description mb-3" style={{
                                            color: '#6c757d',
                                            fontSize: '0.9rem',
                                            textAlign: 'center',
                                            lineHeight: '1.5'
                                        }}>
                                            Business Performance Excellence
                                        </p>
                                        
                                        <div className="award-year" style={{
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '6px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            display: 'inline-block',
                                            width: '100%'
                                        }}>
                                            2015
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="award-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '30px 20px',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #fdc51a',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}>
                                        <div className="award-icon-large mb-3" style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#fdc51a',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-trophy" style={{
                                                color: '#1e2247',
                                                fontSize: '24px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="award-title mb-2" style={{
                                            color: '#1e2247',
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            textAlign: 'center'
                                        }}>
                                            <a href="/wp-content/uploads/2025/06/australian-achiever-award-2016.pdf" target="_blank" 
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1e2247',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                            onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                Australian Achiever Award Winner 2016
                                            </a>
                                        </h4>
                                        
                                        <p className="award-description mb-3" style={{
                                            color: '#6c757d',
                                            fontSize: '0.9rem',
                                            textAlign: 'center',
                                            lineHeight: '1.5'
                                        }}>
                                            Industry Leadership
                                        </p>
                                        
                                        <div className="award-year" style={{
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '6px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            display: 'inline-block',
                                            width: '100%'
                                        }}>
                                            2016
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="award-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '30px 20px',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                                        border: '2px solid #1e2247',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}>
                                        <div className="award-icon-large mb-3" style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#1e2247',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-certificate" style={{
                                                color: '#fdc51a',
                                                fontSize: '24px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="award-title mb-2" style={{
                                            color: '#1e2247',
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            textAlign: 'center'
                                        }}>
                                            <a href="/wp-content/uploads/2025/06/ASIAL-Org-Membership-Certificate-New.pdf" target="_blank" 
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1e2247',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                            onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                ASIAL Corporate Membership
                                            </a>
                                        </h4>
                                        
                                        <p className="award-description mb-3" style={{
                                            color: '#6c757d',
                                            fontSize: '0.9rem',
                                            textAlign: 'center',
                                            lineHeight: '1.5'
                                        }}>
                                            Australian Security Industry Association Limited
                                        </p>
                                        
                                        <div className="award-year" style={{
                                            backgroundColor: '#fdc51a',
                                            color: '#1e2247',
                                            padding: '6px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            display: 'inline-block',
                                            width: '100%'
                                        }}>
                                            MEMBERSHIP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>

                    {/*===== Quality Assurance Section =====*/}
                    <div className="quality-section" style={{
                        padding: '100px 0',
                        backgroundColor: '#1e2247',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div className="bg-pattern" style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fdc51a" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                            opacity: '0.3'
                        }}></div>
                        
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-badge mb-4">
                                        <span className="badge" style={{
                                            backgroundColor: '#fdc51a',
                                            color: '#1e2247',
                                            padding: '12px 24px',
                                            borderRadius: '50px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            <i className="fas fa-shield-alt me-2"></i>
                                            Standards Compliance
                                        </span>
                                    </div>
                                    
                                    <h2 className="section-title mb-4" style={{
                                        color: '#ffffff',
                                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                                        fontWeight: '800',
                                        lineHeight: '1.2'
                                    }}>
                                        QUALITY ASSURANCE
                                    </h2>
                                    
                                    <p className="section-description" style={{
                                        color: '#e8eaf0',
                                        fontSize: '1.1rem',
                                        lineHeight: '1.6',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    }}>
                                        Our quality management systems ensure consistent service delivery meeting industry standards.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="quality-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                    }}>
                                        <div className="quality-icon mb-4" style={{
                                            width: '80px',
                                            height: '80px',
                                            backgroundColor: '#fdc51a',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-award" style={{
                                                color: '#1e2247',
                                                fontSize: '32px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="quality-title mb-3" style={{
                                            color: '#1e2247',
                                            fontSize: '1.3rem',
                                            fontWeight: '700'
                                        }}>
                                            <a href="/wp-content/uploads/2025/06/3240701-E-Certificate-of-Registration-Metro-Guards.pdf" target="_blank" 
                                               style={{
                                                   textDecoration: 'none',
                                                   color: '#1e2247',
                                                   transition: 'color 0.3s ease'
                                               }}
                                               onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                               onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                 ISO 14001
                                            </a>
                                        </h4>
                                        
                                        <p className="quality-description mb-4" style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}>
                                            ENVIRONMENTAL MANAGEMENT SYSTEMS

                                        </p>
                                        
                                        <a href="/wp-content/uploads/2025/06/3240701-E-Certificate-of-Registration-Metro-Guards.pdf" target="_blank" 
                                           style={{ textDecoration: 'none' }}>
                                        <div className="quality-badge" style={{
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                                display: 'inline-block',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#fdc51a';
                                                e.currentTarget.style.color = '#1e2247';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#1e2247';
                                                e.currentTarget.style.color = '#fdc51a';
                                        }}>
                                            DIGITAL
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6">
                                    <div className="quality-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                    }}>
                                        <div className="quality-icon mb-4" style={{
                                            width: '80px',
                                            height: '80px',
                                            backgroundColor: '#1e2247',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-award" style={{
                                                color: '#fdc51a',
                                                fontSize: '32px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="quality-title mb-3" style={{
                                            color: '#1e2247',
                                            fontSize: '1.3rem',
                                            fontWeight: '700'
                                        }}>
                                            
                                            <a href="/wp-content/uploads/2025/06/3240701-O-Certificate-of-Registration-Metro-Guards.pdf" target="_blank" 
                                               style={{
                                                   textDecoration: 'none',
                                                   color: '#1e2247',
                                                   transition: 'color 0.3s ease'
                                               }}
                                               onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                               onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                ISO 45001
                                            </a>
                                        </h4>
                                        
                                        <p className="quality-description mb-4" style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}>
                                            OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEMS
                                        </p>
                                        
                                        <a href="/wp-content/uploads/2025/06/3240701-O-Certificate-of-Registration-Metro-Guards.pdf" target="_blank" 
                                           style={{ textDecoration: 'none' }}>
                                        <div className="quality-badge" style={{
                                            backgroundColor: '#fdc51a',
                                            color: '#1e2247',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                                display: 'inline-block',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#1e2247';
                                                e.currentTarget.style.color = '#fdc51a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#fdc51a';
                                                e.currentTarget.style.color = '#1e2247';
                                        }}>
                                            DIGITAL
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6">
                                    <div className="quality-card" style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        height: '100%',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                                    }}>
                                        <div className="quality-icon mb-4" style={{
                                            width: '80px',
                                            height: '80px',
                                            backgroundColor: '#fdc51a',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-award" style={{
                                                color: '#1e2247',
                                                fontSize: '32px'
                                            }}></i>
                                        </div>
                                        
                                        <h4 className="quality-title mb-3" style={{
                                            color: '#1e2247',
                                            fontSize: '1.3rem',
                                            fontWeight: '700'
                                        }}>
                                            <a href="/wp-content/uploads/2025/06/3240701-Q-Certificate-of-Registration-Metro-Guards.pdf" target="_blank" 
                                               style={{
                                                   textDecoration: 'none',
                                                   color: '#1e2247',
                                                   transition: 'color 0.3s ease'
                                               }}
                                               onMouseEnter={(e) => e.target.style.color = '#fdc51a'}
                                               onMouseLeave={(e) => e.target.style.color = '#1e2247'}>
                                                ISO 9001
                                            </a>
                                        </h4>
                                        
                                        <p className="quality-description mb-4" style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}>
                                            QUALITY MANAGEMENT SYSTEMS
                                        </p>
                                        
                                        <a href="/wp-content/uploads/2025/06/3240701-Q-Certificate-of-Registration-Metro-Guards.pdf" target="_blank" 
                                           style={{ textDecoration: 'none' }}>
                                        <div className="quality-badge" style={{
                                            backgroundColor: '#1e2247',
                                            color: '#fdc51a',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                                display: 'inline-block',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#fdc51a';
                                                e.currentTarget.style.color = '#1e2247';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#1e2247';
                                                e.currentTarget.style.color = '#fdc51a';
                                        }}>
                                            DIGITAL
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   {/*===== Contact Form Section =====*/}
                    <div className="contact-form-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="form-wrapper">
                                        <div className="form-header">
                                            <div className="form-badge">
                                                <i className="bi bi-envelope"></i>
                                                Request Documentation
                                            </div>
                                            <h2>Contact Us</h2>
                                            <p>Request copies of our licenses or inquire about our insurance coverage. Get in touch with our security experts for a personalized consultation.</p>
                                        </div>
                                        
                                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                            {/* honeypot (spam trap) */}
                                            <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="purpose" className="form-label">
                                                        <i className="bi bi-list-check"></i>
                                                        I want to: <span className="required">*</span>
                                                    </label>
                                                    <select
                                                        id="purpose"
                                                        name="purpose"
                                                        className="form-select"
                                                        required
                                                    >
                                                        <option value="">Please select a purpose</option>
                                                        <option value="consultation">Request consultation</option>
                                                        <option value="obtain-code">Obtain code</option>
                                                    </select>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="service" className="form-label">
                                                        <i className="bi bi-shield-check"></i>
                                                        Service Required: <span className="required">*</span>
                                                    </label>
                                                    <select
                                                        id="service"
                                                        name="service"
                                                        className="form-select"
                                                        required
                                                    >
                                                        <option value="">Please select a service</option>
                                                        <option value="loss-prevention">Loss Prevention Office</option>
                                                        <option value="event-security">Event Security</option>
                                                        <option value="mobile-patrol">Mobile Patrol Security</option>
                                                        <option value="uniform-guards">Uniform Guards</option>
                                                        <option value="construction-site">Construction Site Security</option>
                                                        <option value="k9-response">K9 Response Unit</option>
                                                        <option value="crowd-controller">Crowd Controller</option>
                                                        <option value="concierge">Concierge Security</option>
                                                        <option value="alarm-response">Alarm Response Unit Security Officer</option>
                                                        <option value="other">Other Services</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="form-label">
                                                        <i className="bi bi-person"></i>
                                                        Your Name <span className="required">*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        id="name"
                                                        name="name"
                                                        className="form-input"
                                                        placeholder="Enter your full name"
                                                        required 
                                                    />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="phone" className="form-label">
                                                        <i className="bi bi-phone"></i>
                                                        Phone Number <span className="required">*</span>
                                                    </label>
                                                    <input 
                                                        type="tel" 
                                                        id="phone"
                                                        name="phone"
                                                        className="form-input"
                                                        placeholder="+61 xxx xxx xxx" 
                                                        required 
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">
                                                        <i className="bi bi-envelope"></i>
                                                        Email Address <span className="required">*</span>
                                                    </label>
                                                    <input 
                                                        type="email" 
                                                        id="email"
                                                        name="email"
                                                        className="form-input"
                                                        placeholder="your.email@example.com" 
                                                        required 
                                                    />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="location" className="form-label">
                                                        <i className="bi bi-geo-alt"></i>
                                                        Property Location <span className="required">*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        id="location"
                                                        name="location"
                                                        className="form-input"
                                                        placeholder="Enter property address or suburb" 
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="message" className="form-label">
                                                    <i className="bi bi-chat-dots"></i>
                                                    Your Message / Details <span className="required">*</span>
                                                </label>
                                                <textarea 
                                                    id="message"
                                                    name="message" 
                                                    className="form-textarea"
                                                    rows="6" 
                                                    placeholder="Please describe your security requirements, property details, expected duration, and any specific concerns you may have..."
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="form-footer">
                                                <div className="privacy-notice">
                                                    <div className="privacy-icon">
                                                        <i className="bi bi-shield-lock"></i>
                                                    </div>
                                                    <div className="privacy-text">
                                                        <h6>Your Privacy is Protected</h6>
                                                        <p>We respect your privacy and will never share your personal information with third parties. Your data is encrypted and securely stored.</p>
                                                    </div>
                                                </div>
                                                
                                                <button
                                                    type="submit"
                                                    className="submit-btn"
                                                    disabled={loading}
                                                >
                                                    {loading ? (
                                                        <>
                                                            <div className="spinner"></div>
                                                            Sending Request...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="bi bi-send"></i>
                                                            Send Request
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            
                                            {/* Social Media Links */}
                                            <div className="social-links">
                                                <a href="#" className="social-link" title="WhatsApp">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a>
                                                <a href="https://www.facebook.com/metroguards?_rdc=1&_rdr" className="social-link" title="Facebook">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                                <a href="https://www.instagram.com/metropolitanguard/" className="social-link" title="Instagram">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="https://x.com/metroguards" className="social-link" title="Twitter">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Assurance Section =====*/}
                    <div className="assurance-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="assurance-header">
                                        <div className="assurance-badge">
                                            <i className="bi bi-shield-check"></i>
                                            <span>Professional Assurance</span>
                                        </div>
                                        <h2 className="assurance-title">Your Assurance of Professional Service</h2>
                                        <p className="assurance-description">
                                            All our security personnel and operations are fully licensed and insured, providing you with complete peace of mind and professional protection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="assurance-card">
                                        <div className="assurance-card-inner">
                                            <div className="assurance-icon">
                                                <i className="bi bi-shield-lock"></i>
                                            </div>
                                            <div className="assurance-content">
                                                <h3 className="assurance-card-title">Licensed Professionals</h3>
                                                <p className="assurance-card-description">
                                                    All our security officers hold current licenses and undergo regular training to maintain the highest standards of professional service.
                                                </p>
                                                <div className="assurance-feature-list">
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Current Security Licenses</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Regular Training Programs</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Background Checks</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="assurance-card">
                                        <div className="assurance-card-inner">
                                            <div className="assurance-icon">
                                                <i className="bi bi-file-earmark-medical"></i>
                                            </div>
                                            <div className="assurance-content">
                                                <h3 className="assurance-card-title">Comprehensive Insurance</h3>
                                                <p className="assurance-card-description">
                                                    We carry full insurance coverage including public liability and professional indemnity for your complete protection and peace of mind.
                                                </p>
                                                <div className="assurance-feature-list">
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Public Liability Coverage</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Professional Indemnity</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Workers Compensation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="assurance-card">
                                        <div className="assurance-card-inner">
                                            <div className="assurance-icon">
                                                <i className="bi bi-award"></i>
                                            </div>
                                            <div className="assurance-content">
                                                <h3 className="assurance-card-title">Industry Compliance</h3>
                                                <p className="assurance-card-description">
                                                    Regular audits ensure we meet all regulatory requirements and industry best practices, maintaining the highest standards of service.
                                                </p>
                                                <div className="assurance-feature-list">
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Regular Compliance Audits</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Industry Best Practices</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <i className="bi bi-check-circle"></i>
                                                        <span>Quality Assurance</span>
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
            <Accrediation10 />
            <Subscribe />
            
            {/* Custom CSS for animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                .floating-element {
                    animation: float 3s ease-in-out infinite;
                }
                
                .certification-card:hover {
                    transform: translateY(-10px) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
                }
                
                .document-item a:hover {
                    color: #fdc51a !important;
                    background-color: #f8f9fa !important;
                    border-color: #fdc51a !important;
                }
                
                .btn-primary-custom:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 6px 20px rgba(253, 197, 26, 0.4) !important;
                }
                
                .btn-secondary-custom:hover {
                    background-color: #fdc51a !important;
                    color: #1e2247 !important;
                }

                /* Assurance Section Styles */
                .assurance-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    position: relative;
                    overflow: hidden;
                }

                .assurance-section::before {
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

                .assurance-header {
                    position: relative;
                    z-index: 2;
                    margin-bottom: 60px;
                }

                .assurance-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(253, 197, 26, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(253, 197, 26, 0.3);
                    color: #fdc51a;
                    padding: 12px 25px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .assurance-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .assurance-description {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.9);
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .assurance-card {
                    height: 100%;
                    position: relative;
                    z-index: 2;
                }

                .assurance-card-inner {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    padding: 40px 30px;
                    text-align: center;
                    transition: all 0.4s ease;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .assurance-card-inner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #fdc51a, #f39c12, #e67e22);
                    border-radius: 25px 25px 0 0;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .assurance-card:hover .assurance-card-inner {
                    transform: translateY(-15px);
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(253, 197, 26, 0.5);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
                }

                .assurance-card:hover .assurance-card-inner::before {
                    opacity: 1;
                }

                .assurance-icon {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 30px;
                    color: #1e2247;
                    position: relative;
                    box-shadow: 0 15px 35px rgba(253, 197, 26, 0.3);
                    transition: all 0.3s ease;
                }

                .assurance-icon i {
                    font-size: 2.5rem;
                    font-weight: 700;
                }

                .assurance-card:hover .assurance-icon {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 20px 40px rgba(253, 197, 26, 0.4);
                }

                .assurance-content {
                    position: relative;
                    z-index: 2;
                }

                .assurance-card-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 20px;
                    line-height: 1.3;
                }

                .assurance-card-description {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 25px;
                }

                .assurance-feature-list {
                    text-align: left;
                    margin-top: 25px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 12px;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .feature-item i {
                    color: #fdc51a;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                }

                .feature-item span {
                    flex: 1;
                }

                /* Responsive Design */
                @media (max-width: 991px) {
                    .assurance-title {
                        font-size: 2.5rem;
                    }

                    .assurance-description {
                        font-size: 1.1rem;
                    }

                    .assurance-card-inner {
                        padding: 35px 25px;
                    }

                    .assurance-icon {
                        width: 80px;
                        height: 80px;
                        margin-bottom: 25px;
                    }

                    .assurance-icon i {
                        font-size: 2rem;
                    }

                    .assurance-card-title {
                        font-size: 1.5rem;
                    }
                }

                @media (max-width: 767px) {
                    .assurance-section {
                        padding: 80px 0;
                    }

                    .assurance-title {
                        font-size: 2rem;
                    }

                    .assurance-description {
                        font-size: 1rem;
                    }

                    .assurance-card-inner {
                        padding: 30px 20px;
                    }

                    .assurance-icon {
                        width: 70px;
                        height: 70px;
                        margin-bottom: 20px;
                    }

                    .assurance-icon i {
                        font-size: 1.8rem;
                    }

                    .assurance-card-title {
                        font-size: 1.3rem;
                    }

                    .assurance-card-description {
                        font-size: 0.95rem;
                    }

                    .feature-item {
                        font-size: 0.9rem;
                    }
                }

                /* Contact Form Section Styles */
                .contact-form-section {
                    padding: 120px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    position: relative;
                    overflow: hidden;
                }

                .contact-form-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 60%),
                        radial-gradient(circle at 80% 80%, rgba(30, 34, 71, 0.05) 0%, transparent 60%);
                    pointer-events: none;
                }

                .form-wrapper {
                    background: white;
                    border-radius: 25px;
                    padding: 0;
                    box-shadow: 0 25px 80px rgba(0,0,0,0.1);
                    position: relative;
                    border: 1px solid rgba(253, 197, 26, 0.2);
                    max-width: 800px;
                    margin: 0 auto;
                    overflow: hidden;
                }

                .form-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #fdc51a, #f39c12, #e67e22, #fdc51a);
                    background-size: 200% 100%;
                    animation: gradientShift 3s ease-in-out infinite;
                }

                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .form-header {
                    text-align: center;
                    padding: 60px 50px 40px 50px;
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    color: white;
                    position: relative;
                }

                .form-header::after {
                    content: '';
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-top: 15px solid #2a3458;
                }

                .form-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(253, 197, 26, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(253, 197, 26, 0.3);
                    color: #fdc51a;
                    padding: 12px 25px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .form-header h2 {
                    font-size: 3rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .form-header p {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.9);
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .contact-form {
                    padding: 60px 50px;
                    background: white;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 30px;
                }

                .form-group {
                    margin-bottom: 30px;
                    position: relative;
                }

                .form-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 700;
                    color: #000000 !important;
                    margin-bottom: 12px;
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .required {
                    color: #e74c3c;
                    font-size: 1.2rem;
                    font-weight: 700;
                }

                .optional {
                    color: #6c757d;
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-transform: none;
                }

                .form-input,
                .form-select,
                .form-textarea {
                    width: 100%;
                    padding: 20px 25px;
                    border: 3px solid #e9ecef;
                    border-radius: 15px;
                    font-size: 1.1rem;
                    transition: all 0.4s ease;
                    background: #f8f9fa;
                    font-weight: 500;
                    position: relative;
                }

                .form-input:focus,
                .form-select:focus,
                .form-textarea:focus {
                    outline: none;
                    border-color: #fdc51a;
                    background: white;
                    box-shadow: 0 0 0 5px rgba(253, 197, 26, 0.1);
                    transform: translateY(-2px);
                }

                .form-input::placeholder,
                .form-textarea::placeholder {
                    color: #adb5bd;
                    font-weight: 400;
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 150px;
                    font-family: inherit;
                    line-height: 1.6;
                }

                .form-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 40px;
                    margin-top: 50px;
                    padding-top: 30px;
                    border-top: 2px solid #e9ecef;
                }

                .privacy-notice {
                    display: flex;
                    gap: 20px;
                    flex: 1;
                    background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
                    padding: 25px;
                    border-radius: 15px;
                    border: 2px solid #d4edda;
                }

                .privacy-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #27ae60, #2ecc71);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                    box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
                }

                .privacy-text h6 {
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 8px;
                    font-size: 1.1rem;
                }

                .privacy-text p {
                    font-size: 0.95rem;
                    color: #495057;
                    margin: 0;
                    line-height: 1.6;
                    font-weight: 500;
                }

                .submit-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    color: white;
                    border: none;
                    padding: 20px 40px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    min-width: 220px;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 10px 30px rgba(30, 34, 71, 0.3);
                }

                .submit-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(253, 197, 26, 0.3), transparent);
                    transition: left 0.6s ease;
                }

                .submit-btn:hover::before {
                    left: 100%;
                }

                .submit-btn:hover:not(:disabled) {
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    color: #1e2247;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(253, 197, 26, 0.4);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .spinner {
                    width: 24px;
                    height: 24px;
                    border: 3px solid transparent;
                    border-top: 3px solid #1e2247;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Social Media Links */
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 30px;
                }

                .social-link {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #1e2247, #2a3458);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 1.3rem;
                    box-shadow: 0 5px 15px rgba(30, 34, 71, 0.3);
                }

                .social-link:hover {
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    color: #1e2247;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(253, 197, 26, 0.4);
                }

                /* Responsive Design */
                @media (max-width: 991px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }

                    .form-footer {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .form-header {
                        padding: 50px 40px 35px 40px;
                    }

                    .form-header h2 {
                        font-size: 2.5rem;
                    }

                    .contact-form {
                        padding: 50px 40px;
                    }
                }

                @media (max-width: 767px) {
                    .form-wrapper {
                        margin: 0 15px;
                    }

                    .form-header {
                        padding: 40px 30px 30px 30px;
                    }

                    .form-header h2 {
                        font-size: 2rem;
                    }

                    .form-header p {
                        font-size: 1rem;
                    }

                    .contact-form {
                        padding: 40px 30px;
                    }

                    .form-input,
                    .form-select,
                    .form-textarea {
                        padding: 18px 20px;
                        font-size: 1rem;
                    }

                    .submit-btn {
                        padding: 18px 35px;
                        font-size: 1rem;
                        min-width: 200px;
                    }

                    .privacy-notice {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </Layout>
        </>
    );
}