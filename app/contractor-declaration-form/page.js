"use client"
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";



export default function ContractorDeclarationPage() {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Smooth scroll to top when Thank You message appears
    useEffect(() => {
        if (isSubmitted) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [isSubmitted]);

    async function handleSubmit(e) {
        e.preventDefault();

        // Check Terms and Conditions
        if (!agreedToTerms) {
            toast.error("Please accept the Terms and Conditions to continue");
            return;
        }

        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contractor", { method: "POST", body: formData });
            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data?.success) {
                throw new Error(data?.error || `Request failed: ${res.status}`);
            }

            // Show success page instead of toast
            setIsSubmitted(true);
            form.reset();
            setAgreedToTerms(false);
        } catch (err) {
            toast.error(err.message || "Network error. Please try again.");
            if (process.env.NODE_ENV === 'development') {
                console.error('Contractor form submission error:', err);
            }
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
                headTitle="Contractor Declaration Form - Compliance Requirements"
                breadcrumbTitle="Contractor Declaration Form"
                mainTitle="Contractor Declaration & Compliance Form"
                subtitle="Regulatory compliance • Insurance verification • License validation"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Uniformed%20&%20Covert%20Secuirty%20Guards/250DB2AD-5550-45A8-A9FE-940905978EFD_1_105_c.webp"
            >
                
                {/* Classic Hero Section */}
                <section className="classic-hero-section" style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderBottom: '3px solid #eceff3',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '60px 0'
                }}>
                    <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-8 mx-auto text-center">
                                <div className="hero-content">
                                    <div className="hero-badge" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                        color: '#ffffff',
                                        padding: '8px 20px',
                                        borderRadius: '25px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        marginBottom: '20px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)'
                                    }}>
                                        <i className="bi bi-file-earmark-ruled" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '1.1rem' }}></i>
                                        Legal Compliance Declaration
                                    </div>

                                    <h2 style={{
                                        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        color: '#1e2247',
                                        marginBottom: '20px',
                                        fontFamily: 'serif'
                                    }}>
                                        Contractor <span style={{ color: '#fdc51a' }}>Declaration Form</span>
                                    </h2>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#6c757d',
                                        lineHeight: '1.6',
                                        marginBottom: '30px',
                                        maxWidth: '600px',
                                        margin: '0 auto 30px'
                                    }}>
                                        Ensure regulatory compliance and maintain professional standards. Complete this 
                                        declaration to verify adherence to licensing, insurance, and employment obligations.
                                    </p>

                                    <div className="compliance-highlights" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '20px',
                                        marginBottom: '30px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-shield-check" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Compliance Verification</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-file-earmark-check" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Legal Documentation</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-award" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Professional Standards</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {isSubmitted ? (
                  /* ===== Success Thank You Page ===== */
                  <div className="contractor-thank-you" style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    padding: '100px 0',
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    animation: 'fadeIn 0.6s ease-in-out'
                  }}>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div style={{
                            background: '#ffffff',
                            borderRadius: '24px',
                            padding: '60px 50px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                            textAlign: 'center',
                            border: '3px solid #fdc51a',
                            position: 'relative',
                            overflow: 'hidden'
                          }}>
                            {/* Decorative Background Elements */}
                            <div style={{
                              position: 'absolute',
                              top: '-50px',
                              right: '-50px',
                              width: '150px',
                              height: '150px',
                              background: 'rgba(253, 197, 26, 0.1)',
                              borderRadius: '50%',
                              filter: 'blur(40px)'
                            }}></div>
                            <div style={{
                              position: 'absolute',
                              bottom: '-50px',
                              left: '-50px',
                              width: '150px',
                              height: '150px',
                              background: 'rgba(30, 34, 71, 0.05)',
                              borderRadius: '50%',
                              filter: 'blur(40px)'
                            }}></div>

                            {/* Success Icon */}
                            <div style={{
                              width: '120px',
                              height: '120px',
                              background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 30px',
                              boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3)',
                              position: 'relative',
                              zIndex: 1
                            }}>
                              <i className="bi bi-check-circle-fill" style={{
                                fontSize: '4rem',
                                color: '#fdc51a'
                              }}></i>
                            </div>
                            
                            {/* Thank You Message */}
                            <h2 style={{
                              color: '#1e2247',
                              fontSize: '2.8rem',
                              fontWeight: '800',
                              marginBottom: '20px',
                              position: 'relative',
                              zIndex: 1
                            }}>Thank You!</h2>

                            <div style={{
                              width: '80px',
                              height: '4px',
                              background: 'linear-gradient(90deg, #fdc51a 0%, #e5b116 100%)',
                              margin: '0 auto 25px',
                              borderRadius: '2px',
                              position: 'relative',
                              zIndex: 1
                            }}></div>

                            <h3 style={{
                              color: '#1e2247',
                              fontSize: '1.5rem',
                              fontWeight: '600',
                              marginBottom: '20px',
                              position: 'relative',
                              zIndex: 1
                            }}>Your Declaration Has Been Submitted Successfully!</h3>

                            <p style={{
                              color: '#6c757d',
                              fontSize: '1.1rem',
                              lineHeight: '1.8',
                              marginBottom: '35px',
                              maxWidth: '500px',
                              margin: '0 auto 35px',
                              position: 'relative',
                              zIndex: 1
                            }}>
                              We've received your contractor declaration and compliance form. 
                              A confirmation email with your declaration (PDF attached) has been sent to your email address.
                            </p>

                            {/* Info Box */}
                            <div style={{
                              background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 100%)',
                              border: '2px solid rgba(253, 197, 26, 0.3)',
                              borderRadius: '12px',
                              padding: '25px',
                              marginBottom: '35px',
                              position: 'relative',
                              zIndex: 1
                            }}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '15px',
                                marginBottom: '15px'
                              }}>
                                <i className="bi bi-info-circle-fill" style={{ fontSize: '1.5rem', color: '#1e2247' }}></i>
                                <h5 style={{
                                  color: '#1e2247',
                                  fontSize: '1.1rem',
                                  fontWeight: '700',
                                  margin: 0
                                }}>What Happens Next?</h5>
                              </div>
                              <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                                  <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>1.</span>
                                  <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                                    Check your email inbox (including spam folder) for confirmation
                                  </p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                                  <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>2.</span>
                                  <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                                    Our compliance team will review your declaration
                                  </p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                                  <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>3.</span>
                                  <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                                    We may contact you if additional documentation is required
                                  </p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                  <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>4.</span>
                                  <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                                    Your compliance status will be updated in our system
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* CTA Button */}
                            <a 
                              href="/"
                              style={{
                                display: 'inline-block',
                                background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                color: '#fdc51a',
                                padding: '16px 50px',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                textDecoration: 'none',
                                boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                zIndex: 1
                              }}
                              onMouseOver={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #fdc51a 0%, #e5b116 100%)';
                                e.target.style.color = '#1e2247';
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 12px 35px rgba(253, 197, 26, 0.4)';
                              }}
                              onMouseOut={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)';
                                e.target.style.color = '#fdc51a';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.3)';
                              }}
                            >
                              <i className="bi bi-house-door-fill" style={{ marginRight: '10px' }}></i>
                              Back to Home
                            </a>

                            {/* Contact Info */}
                            <div style={{
                              marginTop: '40px',
                              padding: '20px',
                              background: 'rgba(30, 34, 71, 0.03)',
                              borderRadius: '12px',
                              position: 'relative',
                              zIndex: 1
                            }}>
                              <p style={{ color: '#6c757d', fontSize: '0.95rem', margin: 0 }}>
                                Questions about compliance? Call us at{' '}
                                <a href="tel:1300731173" style={{ color: '#1e2247', fontWeight: '700', textDecoration: 'none' }}>
                                  1300 731 173
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                {/* Declaration Form Section */}
                <section className="declaration-form-section" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    padding: '60px 0'
                }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '40px',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                    border: '2px solid #eceff3',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div className="text-center mb-5">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 20px',
                                            boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-file-earmark-ruled" style={{ fontSize: '2rem', color: '#1e2247' }}></i>
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontWeight: '700',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Contractor Declaration & Compliance
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            maxWidth: '700px',
                                            margin: '0 auto'
                                        }}>
                                            Please complete all sections accurately. This declaration ensures compliance with 
                                            regulatory requirements and professional standards.
                                        </p>
                                    </div>
                                    <form onSubmit={handleSubmit} noValidate>
                                        {/* Company Information Section */}
                                        <div className="form-section mb-5" style={{
                                            background: 'rgba(30, 34, 71, 0.02)',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            padding: '30px',
                                            position: 'relative'
                                        }}>
                                            <div className="section-header mb-4">
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-building" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            fontFamily: 'serif'
                                                        }}>
                                                            Company Information
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            Primary business and registration details
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="companyName" className="classic-form-label">
                                                        <i className="bi bi-briefcase" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Company Name <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control classic-form-input" 
                                                        id="companyName" 
                                                        name="companyName" 
                                                        required 
                                                        placeholder="Enter registered company name"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="abnAcn" className="classic-form-label">
                                                        <i className="bi bi-hash" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        ABN / ACN Number <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control classic-form-input" 
                                                        id="abnAcn" 
                                                        name="abnAcn" 
                                                        required 
                                                        placeholder="Australian Business/Company Number"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Declaration Statement Section */}
                                        <div className="form-section mb-5" style={{
                                            background: 'rgba(30, 34, 71, 0.05)',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(30, 34, 71, 0.2)',
                                            padding: '30px',
                                            position: 'relative'
                                        }}>
                                            <div className="section-header mb-4">
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <i className="bi bi-person-badge" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            fontFamily: 'serif'
                                                        }}>
                                                            Declaration Statement
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            Authorized representative and declaration date
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4 mb-4">
                                                    <label htmlFor="declarantName" className="classic-form-label">
                                                        <i className="bi bi-person" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        I, <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control classic-form-input" 
                                                        id="declarantName" 
                                                        name="declarantName" 
                                                        placeholder="Enter your full name" 
                                                        required 
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <label htmlFor="position" className="classic-form-label">
                                                        <i className="bi bi-award" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        in the position of <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <select className="form-control classic-form-input" id="position" name="position" required>
                                                        <option value="">Select Position</option>
                                                        <option value="Director">Director</option>
                                                        <option value="Company Secretary">Company Secretary</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <label htmlFor="declarationDate" className="classic-form-label">
                                                        <i className="bi bi-calendar-date" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        state that as of <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="date" 
                                                        className="form-control classic-form-input" 
                                                        id="declarationDate" 
                                                        name="declarationDate" 
                                                        required 
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <label htmlFor="declarantEmail" className="classic-form-label">
                                                        <i className="bi bi-envelope" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Contact Email <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control classic-form-input" 
                                                        id="declarantEmail" 
                                                        name="declarantEmail" 
                                                        placeholder="Enter your email address"
                                                        required 
                                                    />
                                                    <small className="form-text text-muted" style={{ fontSize: '0.875rem', marginTop: '5px', display: 'block' }}>
                                                        A confirmation email with the declaration form (PDF) will be sent to this address
                                                    </small>
                                                </div>
                                            </div>

                                            <div className="declaration-notice" style={{
                                                background: 'rgba(30, 34, 71, 0.05)',
                                                borderRadius: '10px',
                                                padding: '20px',
                                                border: '1px solid rgba(30, 34, 71, 0.1)',
                                                marginTop: '20px'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: '0'
                                                    }}>
                                                        <i className="bi bi-info-circle" style={{ color: '#ffffff', fontSize: '1.1rem' }}></i>
                                                    </div>
                                                    <div>
                                                        <p style={{
                                                            color: '#1e2247',
                                                            margin: '0',
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.5',
                                                            fontWeight: '600'
                                                        }}>
                                                            <strong>Declaration Statement:</strong> The following compliance requirements have been met for the period of 30 days from the current date.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Compliance Questions Section */}
                                        <div className="compliance-questions-wrapper form-section mb-5" style={{
                                            background: 'rgba(253, 197, 26, 0.05)',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(253, 197, 26, 0.2)',
                                            padding: '30px',
                                            position: 'relative'
                                        }}>
                                            <div className="section-header mb-4">
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-shield-check" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            fontFamily: 'serif'
                                                        }}>
                                                            Compliance Requirements
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            24 compliance questions requiring yes/no responses
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="compliance-questions-container" style={{
                                                background: '#ffffff',
                                                borderRadius: '12px',
                                                padding: '25px',
                                                border: '1px solid #eceff3'
                                            }}>
                                            
                                            {[
                                                { id: 1, text: "Company Registration is current (ACN/ABN)?" },
                                                { id: 2, text: "Has there been any changes to the directors or close associates of the Company?" },
                                                { id: 3, text: "Is the Director of the Company the actual beneficial owner and does not operate on behalf of another?" },
                                                { id: 4, text: "Is the Company financially sound and there have been no adverse findings against the Company or its Officers?" },
                                                { id: 5, text: "Is the Company Security Licence current?" },
                                                { id: 6, text: "Has the Master Licence authority level been exceeded (Number of persons – NSW only)?" },
                                                { id: 7, text: "Is your membership to an approved Security Association current?" },
                                                { id: 8, text: "Are all required Insurance Policies current?" },
                                                { id: 9, text: "Are all security personnel supplied by the Company paid in accordance with the relevant Award / Agreement?" },
                                                { id: 10, text: "Are all employee Superannuation contributions paid to date?" },
                                                { id: 11, text: "Has there been any change in your Payroll Tax obligations?" },
                                                { id: 12, text: "Are your Payroll Tax payment obligations up to date and paid?" },
                                                { id: 13, text: "Have you ever been investigated by the Fair Work Ombudsman?" },
                                                { id: 14, text: "Are all security personnel employed and supplied by the Company and who have performed work for Metropolitan Guard Services have the relevant Right to Work in Australia entitlements? (Visa restrictions have not been breached)" },
                                                { id: 15, text: "Are all security personnel employed and supplied by the Company and who have performed work for Metropolitan Guard Services have a current and applicable state security licence?" },
                                                { id: 16, text: "Have all Services been provided in accordance with the Client's Service / Site Brief?" },
                                                { id: 17, text: "Has any Director, Close Associate or employee of the Company been or is currently charged with a criminal offence?" },
                                                { id: 18, text: "Has any Director, Close Associate or employee of the Company breached or contravened any provisions of the Trade Practices Act?" },
                                                { id: 19, text: "Are there any pending legal or insurance claims against the Company that may affect MGS?" },
                                                { id: 20, text: "Has any Director, Close Associate employee or a relation of a Director or employee of the Company paid any monies or given gifts to a MGS employee or relation of an employee?" },
                                                { id: 21, text: "Does your Company employ, engage work for or work with any employee of Metropolitan Guard Services?" },
                                                { id: 22, text: "Does your Company have any related parties or undisclosed transactions with MGS or relations of Metropolitan Guard Services employees?" },
                                                { id: 23, text: "Has your Company provided a safe and hygienic working environment in accordance with OHS Laws?" },
                                                { id: 24, text: "Has your Company conducted its business in a manner that is compliant with Modern Slavery Laws and has done all things required or necessary to mitigate or reduce modern slavery risks in your operations or supply chains?" }
                                            ].map((question) => (
                                                <div key={question.id} className="compliance-item mb-3" style={{
                                                    background: '#ffffff',
                                                    borderRadius: '12px',
                                                    border: '2px solid #eceff3',
                                                    padding: '20px',
                                                    transition: 'all 0.3s ease',
                                                    position: 'relative'
                                                }}>
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-8 mb-2 mb-lg-0">
                                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                                                <div style={{
                                                                    width: '28px',
                                                                    height: '28px',
                                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                                    borderRadius: '50%',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: '#ffffff',
                                                                    fontSize: '0.8rem',
                                                                    fontWeight: 'bold',
                                                                    flexShrink: '0',
                                                                    marginTop: '2px'
                                                                }}>
                                                                    {question.id}
                                                                </div>
                                                                <label className="form-label mb-0" style={{
                                                                    color: '#1e2247',
                                                                    fontSize: '0.95rem',
                                                                    lineHeight: '1.4',
                                                                    fontWeight: '500'
                                                                }}>
                                                                    {question.text}
                                                            </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="d-flex justify-content-lg-end gap-3">
                                                                <div className="form-check">
                                                                    <input 
                                                                        className="form-check-input classic-radio" 
                                                                        type="radio" 
                                                                        name={`question${question.id}`} 
                                                                        id={`q${question.id}yes`} 
                                                                        value="yes" 
                                                                        required 
                                                                        style={{
                                                                            width: '18px',
                                                                            height: '18px',
                                                                            border: '2px solid #fdc51a',
                                                                            backgroundColor: '#fafafa'
                                                                        }}
                                                                    />
                                                                    <label className="form-check-label" style={{ 
                                                                        color: '#1e2247',
                                                                        fontWeight: '500',
                                                                        marginLeft: '8px'
                                                                    }} htmlFor={`q${question.id}yes`}>
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input 
                                                                        className="form-check-input classic-radio" 
                                                                        type="radio" 
                                                                        name={`question${question.id}`} 
                                                                        id={`q${question.id}no`} 
                                                                        value="no" 
                                                                        required 
                                                                        style={{
                                                                            width: '18px',
                                                                            height: '18px',
                                                                            border: '2px solid #1e2247',
                                                                            backgroundColor: '#fafafa'
                                                                        }}
                                                                    />
                                                                    <label className="form-check-label" style={{ 
                                                                        color: '#1e2247',
                                                                        fontWeight: '500',
                                                                        marginLeft: '8px'
                                                                    }} htmlFor={`q${question.id}no`}>
                                                                        No
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </div>

                                        {/* Declaration Text Section */}
                                        <div className="form-section mb-5" style={{
                                            background: 'rgba(30, 34, 71, 0.05)',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(30, 34, 71, 0.2)',
                                            padding: '30px',
                                            position: 'relative'
                                        }}>
                                            <div className="section-header mb-4">
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <i className="bi bi-exclamation-triangle" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            fontFamily: 'serif'
                                                        }}>
                                                            Legal Declaration & Agreement
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            Terms, conditions, and compliance audit consent
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="declaration-content" style={{
                                                background: '#ffffff',
                                                borderRadius: '12px',
                                                padding: '25px',
                                                border: '1px solid #eceff3'
                                            }}>
                                                <p className="mb-3" style={{ 
                                                    lineHeight: '1.6', 
                                                    color: '#1e2247',
                                                    fontSize: '0.95rem'
                                                }}>
                                                    <strong style={{ color: '#1e2247' }}>I declare</strong> the above information is correct and that should any information supplied be misleading or incorrect may result in the termination of the Agreement with Metropolitan Guard Services.
                                                </p>
                                                <p className="mb-3" style={{ 
                                                    lineHeight: '1.6', 
                                                    color: '#1e2247',
                                                    fontSize: '0.95rem'
                                                }}>
                                                    I also agree that to ensure our Company is complying with the law Metropolitan Guard Services can do a compliance audit regularly or on a random basis.
                                                </p>
                                                <p className="mb-0" style={{ 
                                                    lineHeight: '1.6', 
                                                    color: '#1e2247',
                                                    fontSize: '0.95rem'
                                                }}>
                                                    I am aware the audit will consist of documentation and proof relating to our Company, employees and contractor payments, rate of pay, hours worked, superannuation payments, employee tax payments, GST payments, insurance policies and licenses...
                                                    <a href="#" className="text-decoration-none" style={{ color: '#fdc51a', fontWeight: '500' }}> read more...</a>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Signature Section */}
                                        <div className="form-section mb-5" style={{
                                            background: 'rgba(253, 197, 26, 0.05)',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(253, 197, 26, 0.2)',
                                            padding: '30px',
                                            position: 'relative'
                                        }}>
                                            <div className="section-header mb-4">
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-pen" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            fontFamily: 'serif'
                                                        }}>
                                                            Digital Signature
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            Authorized signature and confirmation date
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="signature" className="classic-form-label">
                                                        <i className="bi bi-signature" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Digital Signature <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control classic-form-input" 
                                                        id="signature" 
                                                        name="signature" 
                                                        placeholder="Type your full name as digital signature" 
                                                        required 
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="signatureDate" className="classic-form-label">
                                                        <i className="bi bi-calendar-check" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Signature Date <span style={{ color: '#1e2247' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="date" 
                                                        className="form-control classic-form-input" 
                                                        id="signatureDate" 
                                                        name="signatureDate" 
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Terms and Conditions Checkbox */}
                                        <div className="col-12 mb-4">
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                padding: '16px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '12px',
                                                border: '2px solid rgba(253, 197, 26, 0.2)'
                                            }}>
                                                <input
                                                    type="checkbox"
                                                    checked={agreedToTerms}
                                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                    required
                                                    style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        marginTop: '2px',
                                                        cursor: 'pointer',
                                                        accentColor: '#fdc51a',
                                                        flexShrink: 0
                                                    }}
                                                />
                                                <label style={{
                                                    color: '#1e2247',
                                                    fontSize: '0.95rem',
                                                    lineHeight: '1.5',
                                                    cursor: 'pointer',
                                                    flex: 1
                                                }}>
                                                    I have read and agree to the{' '}
                                                    <a 
                                                        href="/conditions-of-hire" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: '#007bff',
                                                            textDecoration: 'underline',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                    {' '}<span style={{ color: '#dc3545' }}>*</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12 text-center mb-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg px-5 py-3"
                                                style={{
                                                    borderRadius: "12px",
                                                    fontSize: "1.1rem",
                                                    fontWeight: "600",
                                                    background: "linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)",
                                                    border: "2px solid #fdc51a",
                                                    color: "#1e2247",
                                                    boxShadow: "0 4px 15px rgba(253, 197, 26, 0.3)",
                                                    transition: "all 0.3s ease",
                                                    position: "relative",
                                                    minWidth: "200px"
                                                }}
                                                disabled={loading}
                                                aria-busy={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span style={{
                                                            display: 'inline-block',
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '2px solid #1e2247',
                                                            borderTop: '2px solid transparent',
                                                            borderRadius: '50%',
                                                            animation: 'spin 1s linear infinite',
                                                            marginRight: '10px'
                                                        }}></span>
                                                        SUBMITTING...
                                                    </>
                                                ) : (
                                                    <>
                                                        SUBMIT DECLARATION 
                                                        <i className="bi bi-check-circle" style={{ marginLeft: '8px' }}></i>
                                                    </>
                                                )}
                                            </button>

                                            <div className="submission-notice mt-3" style={{
                                                background: 'rgba(23, 162, 184, 0.1)',
                                                borderRadius: '8px',
                                                padding: '15px',
                                                border: '1px solid rgba(23, 162, 184, 0.2)',
                                                maxWidth: '500px',
                                                margin: '0 auto'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '10px'
                                                }}>
                                                    <i className="bi bi-shield-lock" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <p style={{
                                                        color: '#1e2247',
                                                        margin: '0',
                                                        fontSize: '0.9rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        Your declaration will be securely processed and reviewed for compliance verification.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    /* Classic Form Styling */
                    .classic-form-input {
                        border: 2px solid #eceff3 !important;
                        border-radius: 8px !important;
                        padding: 12px 15px !important;
                        fontSize: 0.95rem !important;
                        background-color: #fafafa !important;
                        transition: all 0.3s ease !important;
                        color: #495057 !important;
                    }
                    
                    .classic-form-input::placeholder {
                        color: #6c757d !important;
                    }
                    
                    .classic-form-input:focus {
                        border-color: #fdc51a !important;
                        background-color: #ffffff !important;
                        box-shadow: 0 0 0 3px rgba(253, 197, 26, 0.1) !important;
                        color: #495057 !important;
                        outline: none !important;
                    }

                    .classic-form-input:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                    }

                    .classic-form-label {
                        display: flex !important;
                        align-items: center !important;
                        color: #1e2247 !important;
                        font-weight: 500 !important;
                        margin-bottom: 8px !important;
                        font-size: 0.95rem !important;
                    }

                    select.classic-form-input {
                        appearance: none;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1em;
                    }

                    select.classic-form-input option {
                        background: #ffffff;
                        color: #495057;
                        padding: 10px;
                    }

                    /* Classic radio button styling */
                    .classic-radio:checked {
                        background-color: #fdc51a !important;
                        border-color: #fdc51a !important;
                    }

                    .classic-radio:focus {
                        box-shadow: 0 0 0 0.25rem rgba(253, 197, 26, 0.25) !important;
                    }

                    /* Question card hover effects */
                    .compliance-item:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
                        transform: translateY(-1px) !important;
                    }

                    /* Section styling */
                    .form-section {
                        position: relative;
                    }

                    .form-section::before {
                        content: '';
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        width: 30px;
                        height: 30px;
                        background: linear-gradient(45deg, rgba(253, 197, 26, 0.1), rgba(30, 34, 71, 0.1));
                        border-radius: 50%;
                        z-index: 1;
                    }

                    /* Spinner animation */
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* Submit button hover effects */
                    .btn:hover:not(:disabled) {
                        background: linear-gradient(135deg, #fdc51a 0%, #e67e22 100%) !important;
                        border-color: #fdc51a !important;
                        box-shadow: 0 6px 20px rgba(253, 197, 26, 0.4) !important;
                        transform: translateY(-2px) !important;
                    }

                    .btn:active:not(:disabled) {
                        transform: translateY(0px) !important;
                    }

                    .btn:disabled {
                        opacity: 0.7 !important;
                        cursor: not-allowed !important;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .compliance-highlights {
                            flex-direction: column !important;
                            gap: 10px !important;
                        }
                        
                        .compliance-item .d-flex {
                            justify-content: center !important;
                        }
                    }

                    /* Ensure glassmorphism elements are also styled properly */
                    .glassmorphism-card {
                        background: rgba(30, 34, 71, 0.02) !important;
                        border-radius: 15px !important;
                        border: 2px solid #eceff3 !important;
                        padding: 30px !important;
                        backdrop-filter: none !important;
                        box-shadow: none !important;
                    }

                    /* Force visibility for compliance questions */
                    .compliance-item {
                        background: #ffffff !important;
                        border: 2px solid #eceff3 !important;
                        border-radius: 12px !important;
                        padding: 20px !important;
                        margin-bottom: 15px !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        display: block !important;
                    }

                    .compliance-item .form-label {
                        color: #1e2247 !important;
                        font-size: 0.95rem !important;
                        line-height: 1.4 !important;
                        font-weight: 500 !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        display: block !important;
                    }

                    .compliance-item .row {
                        display: flex !important;
                        align-items: center !important;
                    }

                    .compliance-item .col-lg-8 {
                        display: block !important;
                        visibility: visible !important;
                    }

                    .compliance-item .col-lg-4 {
                        display: block !important;
                        visibility: visible !important;
                    }

                    /* Ensure question text is visible */
                    .compliance-item div[style*="flex"] {
                        display: flex !important;
                        align-items: flex-start !important;
                        gap: 12px !important;
                    }

                    .compliance-item div[style*="background: linear-gradient"] {
                        width: 28px !important;
                        height: 28px !important;
                        background: linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%) !important;
                        border-radius: 50% !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        color: #ffffff !important;
                        font-size: 0.8rem !important;
                        font-weight: bold !important;
                        flex-shrink: 0 !important;
                        margin-top: 2px !important;
                    }

                    /* Radio buttons in compliance questions */
                    .compliance-item .form-check-input {
                        width: 18px !important;
                        height: 18px !important;
                        border-radius: 4px !important;
                        margin-right: 8px !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }

                    .compliance-item .form-check-label {
                        color: #1e2247 !important;
                        font-weight: 500 !important;
                        margin-left: 8px !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }

                    .compliance-item .d-flex {
                        display: flex !important;
                        gap: 15px !important;
                    }

                    /* Override any potential conflicting styles */
                    .compliance-questions * {
                        visibility: visible !important;
                        opacity: 1 !important;
                        color: inherit !important;
                    }

                    .compliance-questions .mb-3 {
                        margin-bottom: 1rem !important;
                    }

                    .compliance-questions .form-check {
                        display: block !important;
                        min-height: 1.5rem !important;
                        padding-left: 0 !important;
                        margin-bottom: 0.125rem !important;
                    }

                    .compliance-questions .form-check-inline {
                        display: inline-block !important;
                        margin-right: 1rem !important;
                    }

                    /* Ensure all text content is dark */
                    .compliance-questions, 
                    .compliance-questions *,
                    .compliance-item,
                    .compliance-item * {
                        color: #1e2247 !important;
                    }

                    /* Override any hidden or transparent elements */
                    .compliance-questions [style*="color: #fff"],
                    .compliance-questions [style*="color:#fff"],
                    .compliance-questions [style*="color: white"],
                    .compliance-questions [style*="color:white"] {
                        color: #1e2247 !important;
                    }

                    /* Specific styling for compliance questions wrapper */
                    .compliance-questions-wrapper {
                        display: block !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }

                    .compliance-questions-container {
                        display: block !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        background: #ffffff !important;
                        border-radius: 12px !important;
                        padding: 25px !important;
                        border: 1px solid #eceff3 !important;
                    }

                    .compliance-questions-container * {
                        visibility: visible !important;
                        opacity: 1 !important;
                        display: initial !important;
                    }

                    .compliance-questions-container .compliance-item {
                        display: block !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        background: #ffffff !important;
                        margin-bottom: 15px !important;
                        border: 2px solid #eceff3 !important;
                        border-radius: 12px !important;
                        padding: 20px !important;
                    }

                    .compliance-questions-container .row {
                        display: flex !important;
                        align-items: center !important;
                    }

                    .compliance-questions-container .col-lg-8,
                    .compliance-questions-container .col-lg-4 {
                        display: block !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }

                    .glassmorphism-input {
                        border: 2px solid #eceff3 !important;
                        border-radius: 8px !important;
                        padding: 12px 15px !important;
                        fontSize: 0.95rem !important;
                        background-color: #fafafa !important;
                        transition: all 0.3s ease !important;
                        color: #495057 !important;
                        backdrop-filter: none !important;
                    }
                    
                    .glassmorphism-input::placeholder {
                        color: #6c757d !important;
                    }
                    
                    .glassmorphism-input:focus {
                        border-color: #fdc51a !important;
                        background-color: #ffffff !important;
                        box-shadow: 0 0 0 3px rgba(253, 197, 26, 0.1) !important;
                        color: #495057 !important;
                        outline: none !important;
                    }

                    /* Update labels in glassmorphism sections */
                    .glassmorphism-card .form-label {
                        color: #1e2247 !important;
                        font-weight: 500 !important;
                        margin-bottom: 8px !important;
                        font-size: 0.95rem !important;
                    }

                    select.glassmorphism-input {
                        appearance: none;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1em;
                    }

                    select.glassmorphism-input option {
                        background: #ffffff !important;
                        color: #495057 !important;
                        padding: 10px !important;
                    }

                    .glassmorphism-card-with-bg {
                        background: linear-gradient(135deg, rgba(30, 34, 71, 0.9) 0%, rgba(15, 18, 41, 0.95) 100%);
                        backdrop-filter: blur(20px);
                        border-radius: 15px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    }
                    
                    .glassmorphism-input {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        color: #fff;
                        border-radius: 8px;
                    }
                    
                    .glassmorphism-input::placeholder {
                        color: rgba(255, 255, 255, 0.6);
                    }
                    
                    .glassmorphism-input:focus {
                        background: rgba(255, 255, 255, 0.15);
                        border-color: rgba(255, 255, 255, 0.4);
                        box-shadow: 0 0 0 0.2rem rgba(253, 197, 26, 0.25);
                        color: #fff;
                    }

                    .glassmorphism-card {
                        background: rgba(255, 255, 255, 0.08);
                        backdrop-filter: blur(10px);
                        border-radius: 10px;
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                    }

                    .glassmorphism-question-card {
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(8px);
                        border-radius: 8px;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
                        transition: all 0.3s ease;
                    }

                    .glassmorphism-question-card:hover {
                        background: rgba(255, 255, 255, 0.08);
                        border-color: rgba(255, 255, 255, 0.2);
                        transform: translateY(-1px);
                    }

                    select.glassmorphism-input {
                        appearance: none;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1em;
                    }

                    select.glassmorphism-input option {
                        background: #1E2247;
                        color: #fff;
                        padding: 10px;
                    }

                    select.glassmorphism-input option:checked {
                        background: #FDC51A;
                        color: #1E2247;
                    }

                    select.glassmorphism-input option:checked,
                    select.glassmorphism-input option:hover {
                        background: #FDC51A !important;
                        color: #1E2247 !important;
                    }

                    /* Radio button styling */
                    .form-check-input {
                        background-color: rgba(255, 255, 255, 0.1);
                        border-color: rgba(255, 255, 255, 0.3);
                    }

                    .form-check-input:checked {
                        background-color: #FDC51A;
                        border-color: #FDC51A;
                    }

                    .form-check-input:focus {
                        border-color: rgba(253, 197, 26, 0.5);
                        box-shadow: 0 0 0 0.25rem rgba(253, 197, 26, 0.25);
                    }

                    /* Date input styling for webkit browsers */
                    input[type="date"].glassmorphism-input::-webkit-calendar-picker-indicator {
                        filter: invert(1);
                        cursor: pointer;
                    }
                `}</style>
                </>
                )}
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}