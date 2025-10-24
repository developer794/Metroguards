"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";


export default function BookGuardPage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/book-a-guard", { method: "POST", body: formData });
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
                headTitle="Book a Guard - Immediate Security Services"
                breadcrumbTitle="Book a Guard"
                mainTitle="Book Professional Security Guards"
                subtitle="Immediate response • Licensed guards • 24/7 availability"
                backgroundImage="/assets/img/about/values.jpg"
            >
                {/* Classic Hero Section */}
                <section className="classic-hero-section" style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderBottom: '3px solid #eceff3',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '80px 0'
                }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <div className="hero-badge" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        color: '#ffffff',
                                        padding: '8px 20px',
                                        borderRadius: '25px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        marginBottom: '20px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)'
                                    }}>
                                        <i className="bi bi-shield-plus" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '1.1rem' }}></i>
                                        Instant Security Booking
                                    </div>

                                    <h1 style={{
                                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        color: '#1e2247',
                                        marginBottom: '20px',
                                        fontFamily: 'serif'
                                    }}>
                                        Book Professional <span style={{ color: '#fdc51a' }}>Security Guards</span>
                                    </h1>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#6c757d',
                                        lineHeight: '1.6',
                                        marginBottom: '30px'
                                    }}>
                                        Get immediate security coverage for your property, event, or business.
                                    </p>

                                    <a href="#booking-form" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        backgroundColor: '#1e2247',
                                        color: '#ffffff',
                                        padding: '15px 30px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '1.1rem',
                                        gap: '10px'
                                    }}>
                                        <i className="bi bi-calendar-plus"></i>
                                        Book Now
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="hero-visual" style={{ textAlign: 'center', marginTop: '40px' }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '20px',
                                        padding: '60px 40px',
                                        color: '#ffffff',
                                        border: '3px solid rgba(253, 197, 26, 0.3)'
                                    }}>
                                        <div style={{
                                            width: '120px',
                                            height: '120px',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 30px'
                                        }}>
                                            <i className="bi bi-shield-plus" style={{ fontSize: '3rem', color: '#1e2247' }}></i>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
                                            Instant Guard Deployment
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                                            Professional security guards ready within hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section id="booking-form" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    padding: '80px 0'
                }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: '700',
                                color: '#1e2247',
                                marginBottom: '15px',
                                fontFamily: 'serif'
                            }}>
                                Book Your <span style={{ color: '#fdc51a' }}>Security Guard</span>
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '40px',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                    border: '2px solid #eceff3'
                                }}>
                                    <div className="text-center mb-4">
                                        <h4 style={{ color: '#1e2247', fontWeight: '600', marginBottom: '10px' }}>
                                            Security Booking Request
                                        </h4>
                                    </div>

                                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                        <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-list-check" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        I want to <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <select 
                                                        className="form-control classic-form-input" 
                                                        id="purpose" 
                                                        name="purpose" 
                                                        required
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <option value="">Select Purpose</option>
                                                        <option value="consultation">Request consultation</option>
                                                        <option value="obtain-code">Obtain code</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-shield-check" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Service Required <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <select 
                                                        className="form-control classic-form-input" 
                                                        id="service" 
                                                        name="service" 
                                                        required
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <option value="">Select Service</option>
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

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-person" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Your Name <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control classic-form-input" 
                                                        id="name" 
                                                        name="name" 
                                                        required 
                                                        placeholder="Enter your full name"
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-telephone" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Phone Number <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="tel" 
                                                        className="form-control classic-form-input" 
                                                        id="phone" 
                                                        name="phone" 
                                                        required 
                                                        placeholder="Enter your phone number"
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-envelope" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Email Address <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control classic-form-input" 
                                                        id="email" 
                                                        name="email" 
                                                        required 
                                                        placeholder="Enter your email address"
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-geo-alt" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Service Location <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control classic-form-input" 
                                                        id="location" 
                                                        name="location" 
                                                        required 
                                                        placeholder="Enter service address or area"
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 mb-4">
                                                <div className="form-group">
                                                    <label style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-chat-dots" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Message / Details <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <textarea 
                                                        className="form-control classic-form-input" 
                                                        id="message" 
                                                        name="message" 
                                                        rows="4" 
                                                        required
                                                        placeholder="Describe your security requirements, timeline, and any special instructions..."
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease',
                                                            resize: 'vertical',
                                                            minHeight: '120px'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Privacy Notice */}
                                            <div className="col-12 mb-4">
                                                <div style={{
                                                    background: 'rgba(30, 34, 71, 0.05)',
                                                    borderRadius: '10px',
                                                    padding: '20px',
                                                    border: '1px solid rgba(30, 34, 71, 0.1)'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '15px'
                                                    }}>
                                                        <div style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: '0'
                                                        }}>
                                                            <i className="bi bi-shield-check" style={{ color: '#ffffff', fontSize: '1.1rem' }}></i>
                                                        </div>
                                                        <div>
                                                            <h6 style={{
                                                                color: '#1e2247',
                                                                fontWeight: '600',
                                                                marginBottom: '5px',
                                                                fontSize: '0.95rem'
                                                            }}>Immediate Response Guarantee</h6>
                                                            <p style={{
                                                                color: '#6c757d',
                                                                margin: '0',
                                                                fontSize: '0.85rem',
                                                                lineHeight: '1.5'
                                                            }}>
                                                                We'll respond to your booking request within 30 minutes during business hours. 
                                                                Professional guards can be deployed within 2 hours. Your information is secure and protected.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 text-center">
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    style={{
                                                        background: loading ? '#6c757d' : 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                        color: '#ffffff',
                                                        borderRadius: '10px',
                                                        padding: '15px 40px',
                                                        fontSize: '0.95rem',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px',
                                                        border: 'none',
                                                        cursor: loading ? 'not-allowed' : 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '10px',
                                                        margin: '0 auto',
                                                        minWidth: '200px',
                                                        boxShadow: loading ? 'none' : '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {loading ? (
                                                        <>
                                                            <div style={{
                                                                width: '18px',
                                                                height: '18px',
                                                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                                                borderTop: '2px solid #ffffff',
                                                                borderRadius: '50%',
                                                                animation: 'spin 1s linear infinite'
                                                            }}></div>
                                                            Sending Request...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="bi bi-calendar-plus"></i>
                                                            Book Guard Now
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
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

                    .form-label {
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

                    select.classic-form-input option:checked {
                        background: #fdc51a;
                        color: #1e2247;
                    }

                    /* Spinner animation */
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* Hero button hover effects */
                    .hero-content a:hover {
                        background-color: #2c3e50 !important;
                        transform: translateY(-2px) !important;
                        box-shadow: 0 6px 20px rgba(30, 34, 71, 0.4) !important;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .hero-visual {
                            margin-top: 40px !important;
                        }
                        
                        .service-highlights {
                            flex-direction: column !important;
                            gap: 10px !important;
                        }
                    }

                    /* Form field focus improvements */
                    .classic-form-input:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                    }

                    textarea.classic-form-input {
                        resize: vertical !important;
                        min-height: 120px !important;
                    }
                `}</style>
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}