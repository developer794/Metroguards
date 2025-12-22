"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accrediation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";



export default function ServiceCoveragePage() {
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
            <Layout headerStyle={1} footerStyle={1} headTitle="Service Coverage - Metropolitan Guards Security Services" breadcrumbTitle="Service Coverage" mainTitle="Service Coverage" subtitle="Areas we service across Melbourne, Sydney and surrounding regions." backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Uniformed%20&%20Covert%20Secuirty%20Guards/250DB2AD-5550-45A8-A9FE-940905978EFD_1_105_c.webp">
                <div>
                    {/*===== Elegant Classic Hero Section =====*/}
                    <div className="classic-hero section-padding" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        borderBottom: '2px solid #eceff3',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.05) 0%, rgba(253, 197, 26, 0.05) 100%)',
                            borderRadius: '50%',
                            zIndex: '1'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-30px',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.08) 0%, rgba(30, 34, 71, 0.03) 100%)',
                            borderRadius: '50%',
                            zIndex: '1'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content" data-aos="fade-right">
                                        {/* Premium Badge */}
                                        <div className="hero-badge" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            color: '#ffffff',
                                            padding: '10px 20px',
                                            borderRadius: '25px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '25px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <i className="bi bi-shield-check" style={{
                                                color: '#fdc51a',
                                                marginRight: '8px',
                                                fontSize: '1.1rem'
                                            }}></i>
                                            Comprehensive Protection
                                        </div>

                                        {/* Main Heading */}
                                        <h2 style={{
                                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            lineHeight: '1.2',
                                            marginBottom: '25px',
                                            fontFamily: 'serif'
                                        }}>
                                            Our <span style={{
                                                color: '#fdc51a',
                                                position: 'relative'
                                            }}>Service Coverage</span>
                                        </h2>

                                        {/* Subheading */}
                                        <div style={{
                                            fontSize: '1.2rem',
                                            color: '#1e2247',
                                            fontWeight: '500',
                                            marginBottom: '20px',
                                            borderLeft: '3px solid #fdc51a',
                                            paddingLeft: '15px'
                                        }}>
                                            Melbourne Metro & Beyond
                                        </div>

                                        {/* Description */}
                                        <div style={{ marginBottom: '30px' }}>
                                            <p style={{
                                                fontSize: '1.1rem',
                                                color: '#495057',
                                                lineHeight: '1.7',
                                                marginBottom: '15px'
                                            }}>
                                                We offer <strong>premium security solutions</strong> across Melbourne Metro Area and beyond. When you need Security Guards, Mobile Security Patrols, Static Guards, or Event Security, there's a good chance we can help.
                                            </p>
                                            <p style={{
                                                fontSize: '1rem',
                                                color: '#6c757d',
                                                lineHeight: '1.6'
                                            }}>
                                                Below is an easy reference to see if we cover your area for regular mobile security service. For intermittent or one-off services like Party Security or VIP Protection, our professional security guards can travel to meet your needs beyond these areas.
                                            </p>
                                        </div>

                                        {/* Service Highlights */}
                                        <div className="service-highlights" style={{
                                            display: 'flex',
                                            gap: '20px',
                                            marginBottom: '35px',
                                            flexWrap: 'wrap'
                                        }}>
                                            <div className="highlight-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '8px 16px',
                                                background: 'rgba(30, 34, 71, 0.05)',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(30, 34, 71, 0.1)'
                                            }}>
                                                <i className="bi bi-check-circle-fill" style={{
                                                    color: '#fdc51a',
                                                    marginRight: '8px'
                                                }}></i>
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    color: '#1e2247',
                                                    fontWeight: '500'
                                                }}>24/7 Availability</span>
                                            </div>
                                            <div className="highlight-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '8px 16px',
                                                background: 'rgba(30, 34, 71, 0.05)',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(30, 34, 71, 0.1)'
                                            }}>
                                                <i className="bi bi-geo-alt-fill" style={{
                                                    color: '#fdc51a',
                                                    marginRight: '8px'
                                                }}></i>
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    color: '#1e2247',
                                                    fontWeight: '500'
                                                }}>Rapid Response</span>
                                            </div>
                                            <div className="highlight-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '8px 16px',
                                                background: 'rgba(30, 34, 71, 0.05)',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(30, 34, 71, 0.1)'
                                            }}>
                                                <i className="bi bi-shield-check" style={{
                                                    color: '#1e2247',
                                                    marginRight: '8px'
                                                }}></i>
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    color: '#1e2247',
                                                    fontWeight: '500'
                                                }}>Licensed Guards</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="btn-area" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                            <a
                                                href="#coverage-map"
                                                className="btn px-4 py-3"
                                                style={{
                                                    backgroundColor: '#1e2247',
                                                    color: 'white',
                                                    border: '2px solid #1e2247',
                                                    borderRadius: '8px',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    letterSpacing: '0.5px',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                <i className="bi bi-map me-2"></i>VIEW COVERAGE MAP
                                            </a>
                                            <a
                                                href="/contacts"
                                                className="btn px-4 py-3"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#1e2247',
                                                    border: '2px solid #1e2247',
                                                    borderRadius: '8px',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    letterSpacing: '0.5px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = 'white';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#1e2247';
                                                }}
                                            >
                                                <i className="bi bi-telephone me-2"></i>CONTACT US
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="hero-visual" data-aos="fade-left" style={{
                                        position: 'relative',
                                        paddingLeft: '30px'
                                    }}>
                                        {/* Main Image Container */}
                                        <div style={{
                                            position: 'relative',
                                            borderRadius: '15px',
                                            overflow: 'hidden',
                                            border: '3px solid #ffffff',
                                            boxShadow: '0 25px 50px rgba(30, 34, 71, 0.15)'
                                        }}>
                                            <img
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Uniformed%20&%20Covert%20Secuirty%20Guards/5FF0A9F2-0B06-4543-9AC1-2D57F158C07A_1_105_c.webp"
                                                alt="Security Service Coverage Map"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block'
                                                }}
                                            />

                                            {/* Image Overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '0',
                                                left: '0',
                                                right: '0',
                                                background: 'linear-gradient(transparent, rgba(30, 34, 71, 0.8))',
                                                padding: '30px 25px 25px',
                                                color: 'white'
                                            }}>
                                                <h4 style={{
                                                    margin: '0 0 8px 0',
                                                    fontSize: '1.3rem',
                                                    fontWeight: '600'
                                                }}>
                                                    Wide Coverage Area
                                                </h4>
                                                <p style={{
                                                    margin: '0',
                                                    fontSize: '0.95rem',
                                                    opacity: '0.9'
                                                }}>
                                                    Professional security services across Melbourne & Sydney
                                                </p>
                                            </div>
                                        </div>

                                        {/* Floating Stats Card */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '20px',
                                            right: '-15px',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            color: 'white',
                                            padding: '15px 20px',
                                            borderRadius: '12px',
                                            boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3)',
                                            border: '2px solid rgba(253, 197, 26, 0.2)',
                                            zIndex: '3'
                                        }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{
                                                    fontSize: '1.8rem',
                                                    fontWeight: '700',
                                                    color: '#fdc51a',
                                                    lineHeight: '1'
                                                }}>50+</div>
                                                <div style={{
                                                    fontSize: '0.8rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    opacity: '0.9'
                                                }}>Areas Covered</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Enhanced Coverage Map Section =====*/}
                    <div id="coverage-map" className="map-section section-padding" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        borderTop: '1px solid #eceff3',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(30, 34, 71, 0.02) 0%, transparent 40%), radial-gradient(circle at 85% 80%, rgba(253, 197, 26, 0.02) 0%, transparent 40%)',
                            zIndex: '1'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                            {/* Section Header */}
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-header" data-aos="fade-up">
                                        <div className="section-badge" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            color: '#ffffff',
                                            padding: '8px 20px',
                                            borderRadius: '25px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '20px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <i className="bi bi-pin-map" style={{
                                                color: '#fdc51a',
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Service Areas
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Our <span style={{ color: '#fdc51a' }}>Coverage Areas</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            We provide professional security services throughout these prime locations across Melbourne and Sydney.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Coverage Areas Grid */}
                            <div className="row">
                                {/* Melbourne Areas Card */}
                                <div className="col-lg-6 mb-4">
                                    <div className="coverage-card h-100" data-aos="fade-up" data-aos-delay="100" style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px 30px',
                                        border: '2px solid #eceff3',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Background Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-40px',
                                            right: '-40px',
                                            width: '120px',
                                            height: '120px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.08) 0%, rgba(253, 197, 26, 0.04) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: '2' }}>
                                            {/* Card Header */}
                                            <div className="card-header text-center mb-4">
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 15px',
                                                    boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    <i className="bi bi-geo-alt-fill" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.8rem'
                                                    }}></i>
                                                </div>
                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontFamily: 'serif',
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    fontSize: '1.5rem'
                                                }}>Melbourne Areas</h3>
                                                <div style={{
                                                    width: '50px',
                                                    height: '3px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    margin: '0 auto',
                                                    borderRadius: '2px'
                                                }}></div>
                                            </div>
                                            {/* Location Grid */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="location-list">
                                                        {['Bonbeach', 'Bulleen', 'Clarinda', 'Ashwood', 'City of Yarra', 'City of Wyndham', 'City of Whittlesea', 'City of Whitehorse', 'City of Stonnington', 'City of Port Phillip', 'City of Moreland', 'City of Moonee Valley', 'City of Monash', 'City of Melbourne', 'City of Maroondah'].map((location, index) => (
                                                            <div key={index} className="location-item" style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                padding: '6px 0',
                                                                borderBottom: '1px solid rgba(253, 197, 26, 0.1)',
                                                                marginBottom: '8px'
                                                            }}>
                                                                <div style={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    background: '#fdc51a',
                                                                    borderRadius: '50%',
                                                                    marginRight: '12px',
                                                                    flexShrink: '0'
                                                                }}></div>
                                                                <span style={{
                                                                    color: '#1e2247',
                                                                    fontSize: '0.9rem',
                                                                    fontWeight: '500'
                                                                }}>{location}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="location-list">
                                                        {['City of Maribyrnong', 'City of Manningham', 'City of Knox', 'City of Kingston', 'City of Hume', 'City of Hobsons Bay', 'City of Greater Dandenong', 'City of Glen Eira', 'City of Frankston', 'City of Darebin', 'City of Casey', 'City of Brimbank', 'City of Boroondara', 'City of Bayside'].map((location, index) => (
                                                            <div key={index} className="location-item" style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                padding: '6px 0',
                                                                borderBottom: '1px solid rgba(253, 197, 26, 0.1)',
                                                                marginBottom: '8px'
                                                            }}>
                                                                <div style={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    background: '#fdc51a',
                                                                    borderRadius: '50%',
                                                                    marginRight: '12px',
                                                                    flexShrink: '0'
                                                                }}></div>
                                                                <span style={{
                                                                    color: '#1e2247',
                                                                    fontSize: '0.9rem',
                                                                    fontWeight: '500'
                                                                }}>{location}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stats Footer */}
                                            <div className="card-footer mt-4 pt-3" style={{
                                                borderTop: '1px solid rgba(253, 197, 26, 0.1)',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center'
                                                }}>
                                                    <div>
                                                        <div style={{
                                                            fontSize: '1.5rem',
                                                            fontWeight: '700',
                                                            color: '#fdc51a'
                                                        }}>29</div>
                                                        <div style={{
                                                            fontSize: '0.8rem',
                                                            color: '#6c757d',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}>Areas</div>
                                                    </div>
                                                    <div style={{
                                                        width: '1px',
                                                        height: '30px',
                                                        background: 'rgba(253, 197, 26, 0.2)'
                                                    }}></div>
                                                    <div>
                                                        <div style={{
                                                            fontSize: '1.5rem',
                                                            fontWeight: '700',
                                                            color: '#fdc51a'
                                                        }}>24/7</div>
                                                        <div style={{
                                                            fontSize: '0.8rem',
                                                            color: '#6c757d',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}>Available</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sydney Areas Card */}
                                <div className="col-lg-6 mb-4">
                                    <div className="coverage-card h-100" data-aos="fade-up" data-aos-delay="200" style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '35px 30px',
                                        border: '2px solid #eceff3',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Background Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-40px',
                                            right: '-40px',
                                            width: '120px',
                                            height: '120px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08) 0%, rgba(30, 34, 71, 0.04) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: '2' }}>
                                            {/* Card Header */}
                                            <div className="card-header text-center mb-4">
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 15px',
                                                    boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                                }}>
                                                    <i className="bi bi-geo-alt-fill" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.8rem'
                                                    }}></i>
                                                </div>
                                                <h3 style={{
                                                    color: '#1e2247',
                                                    fontFamily: 'serif',
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    fontSize: '1.5rem'
                                                }}>Sydney Areas</h3>
                                                <div style={{
                                                    width: '50px',
                                                    height: '3px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    margin: '0 auto',
                                                    borderRadius: '2px'
                                                }}></div>
                                            </div>

                                            {/* Location Grid */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="location-list">
                                                        {['Sydney CBD', 'Ultimo', 'Chippendale', 'Pyrmont', 'Surry Hills', 'Kings Cross', 'Alexandria', 'Redfern', 'Waterloo', 'Rosebery', 'Botany', 'Mascot', 'Paddington', 'Bondi Junction'].map((location, index) => (
                                                            <div key={index} className="location-item" style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                padding: '6px 0',
                                                                borderBottom: '1px solid rgba(30, 34, 71, 0.1)',
                                                                marginBottom: '8px'
                                                            }}>
                                                                <div style={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    background: '#1e2247',
                                                                    borderRadius: '50%',
                                                                    marginRight: '12px',
                                                                    flexShrink: '0'
                                                                }}></div>
                                                                <span style={{
                                                                    color: '#1e2247',
                                                                    fontSize: '0.9rem',
                                                                    fontWeight: '500'
                                                                }}>{location}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="location-list">
                                                        {['Bellevue Hill', 'Waverley', 'Woollahra', 'Bondi', 'Edgecliff', 'Double Bay', 'Rose Bay', 'Vaucluse', 'Randwick', 'Kingsford', 'Kensington', 'Coogee', 'Northern Beaches', 'North Shore'].map((location, index) => (
                                                            <div key={index} className="location-item" style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                padding: '6px 0',
                                                                borderBottom: '1px solid rgba(30, 34, 71, 0.1)',
                                                                marginBottom: '8px'
                                                            }}>
                                                                <div style={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    background: '#1e2247',
                                                                    borderRadius: '50%',
                                                                    marginRight: '12px',
                                                                    flexShrink: '0'
                                                                }}></div>
                                                                <span style={{
                                                                    color: '#1e2247',
                                                                    fontSize: '0.9rem',
                                                                    fontWeight: '500'
                                                                }}>{location}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stats Footer */}
                                            <div className="card-footer mt-4 pt-3" style={{
                                                borderTop: '1px solid rgba(30, 34, 71, 0.1)',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center'
                                                }}>
                                                    <div>
                                                        <div style={{
                                                            fontSize: '1.5rem',
                                                            fontWeight: '700',
                                                            color: '#1e2247'
                                                        }}>28</div>
                                                        <div style={{
                                                            fontSize: '0.8rem',
                                                            color: '#6c757d',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}>Areas</div>
                                                    </div>
                                                    <div style={{
                                                        width: '1px',
                                                        height: '30px',
                                                        background: 'rgba(30, 34, 71, 0.2)'
                                                    }}></div>
                                                    <div>
                                                        <div style={{
                                                            fontSize: '1.5rem',
                                                            fontWeight: '700',
                                                            color: '#1e2247'
                                                        }}>24/7</div>
                                                        <div style={{
                                                            fontSize: '0.8rem',
                                                            color: '#6c757d',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}>Available</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/*===== Enhanced Additional Areas Section =====*/}
                    <div className="additional-areas section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        borderTop: '1px solid #eceff3',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(30, 34, 71, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.03) 0%, transparent 50%)',
                            zIndex: '1'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                            {/* Section Header */}
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-header" data-aos="fade-up">
                                        <div className="section-badge" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            color: '#ffffff',
                                            padding: '8px 20px',
                                            borderRadius: '25px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '20px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <i className="bi bi-geo-alt" style={{
                                                color: '#fdc51a',
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Extended Coverage
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Additional <span style={{ color: '#fdc51a' }}>Service Areas</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            We provide premium security solutions across extended regions, ensuring comprehensive protection wherever you need it most.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Areas Grid */}
                            <div className="row">
                                {/* Regional Victoria Card */}
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="area-card h-100" data-aos="fade-up" data-aos-delay="100" style={{
                                        background: '#ffffff',
                                        borderRadius: '15px',
                                        padding: '30px 25px',
                                        border: '2px solid #eceff3',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Header */}
                                        <div className="card-header text-center mb-4" style={{ position: 'relative', zIndex: '2' }}>
                                            <div style={{
                                                width: '70px',
                                                height: '70px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-building" style={{
                                                    color: '#ffffff',
                                                    fontSize: '1.8rem'
                                                }}></i>
                                            </div>
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontFamily: 'serif',
                                                fontWeight: '600',
                                                marginBottom: '8px'
                                            }}>Regional Victoria</h4>
                                            <div style={{
                                                width: '40px',
                                                height: '3px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                margin: '0 auto',
                                                borderRadius: '2px'
                                            }}></div>
                                        </div>

                                        {/* Location List */}
                                        <ul className="list-unstyled" style={{ position: 'relative', zIndex: '2' }}>
                                            {['Geelong', 'Torquay', 'Lorne', 'Warragul', 'Mornington Peninsula'].map((location, index) => (
                                                <li key={index} className="mb-3" style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 12px',
                                                    background: 'rgba(253, 197, 26, 0.05)',
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(253, 197, 26, 0.1)',
                                                    transition: 'all 0.2s ease'
                                                }}>
                                                    <i className="bi bi-geo-alt-fill" style={{
                                                        color: '#fdc51a',
                                                        marginRight: '12px',
                                                        fontSize: '0.9rem'
                                                    }}></i>
                                                    <span style={{
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        fontSize: '0.95rem'
                                                    }}>{location}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Background Decoration */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(32, 201, 151, 0.05) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>
                                    </div>
                                </div>

                                {/* Western Sydney Card */}
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="area-card h-100" data-aos="fade-up" data-aos-delay="200" style={{
                                        background: '#ffffff',
                                        borderRadius: '15px',
                                        padding: '30px 25px',
                                        border: '2px solid #eceff3',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Header */}
                                        <div className="card-header text-center mb-4" style={{ position: 'relative', zIndex: '2' }}>
                                            <div style={{
                                                width: '70px',
                                                height: '70px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                            }}>
                                                <i className="bi bi-buildings" style={{
                                                    color: '#ffffff',
                                                    fontSize: '1.8rem'
                                                }}></i>
                                            </div>
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontFamily: 'serif',
                                                fontWeight: '600',
                                                marginBottom: '8px'
                                            }}>Western Sydney</h4>
                                            <div style={{
                                                width: '40px',
                                                height: '3px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                margin: '0 auto',
                                                borderRadius: '2px'
                                            }}></div>
                                        </div>

                                        {/* Location List */}
                                        <ul className="list-unstyled" style={{ position: 'relative', zIndex: '2' }}>
                                            {['Parramatta', 'Blacktown', 'Penrith', 'Liverpool', 'Campbelltown'].map((location, index) => (
                                                <li key={index} className="mb-3" style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 12px',
                                                    background: 'rgba(30, 34, 71, 0.05)',
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(30, 34, 71, 0.1)',
                                                    transition: 'all 0.2s ease'
                                                }}>
                                                    <i className="bi bi-geo-alt-fill" style={{
                                                        color: '#1e2247',
                                                        marginRight: '12px',
                                                        fontSize: '0.9rem'
                                                    }}></i>
                                                    <span style={{
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        fontSize: '0.95rem'
                                                    }}>{location}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Background Decoration */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, rgba(30, 34, 71, 0.05) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>
                                    </div>
                                </div>

                                {/* Special Events Card */}
                                <div className="col-lg-4 col-md-12 mb-4">
                                    <div className="area-card h-100" data-aos="fade-up" data-aos-delay="300" style={{
                                        background: '#ffffff',
                                        borderRadius: '15px',
                                        padding: '30px 25px',
                                        border: '2px solid #eceff3',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Header */}
                                        <div className="card-header text-center mb-4" style={{ position: 'relative', zIndex: '2' }}>
                                            <div style={{
                                                width: '70px',
                                                height: '70px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-stars" style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.8rem'
                                                }}></i>
                                            </div>
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontFamily: 'serif',
                                                fontWeight: '600',
                                                marginBottom: '8px'
                                            }}>Special Events</h4>
                                            <div style={{
                                                width: '40px',
                                                height: '3px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                margin: '0 auto',
                                                borderRadius: '2px'
                                            }}></div>
                                        </div>



                                        {/* Services List */}
                                        <ul className="list-unstyled" style={{ position: 'relative', zIndex: '2' }}>
                                            {['Private Parties', 'Corporate Events', 'VIP Protection', 'Festivals', 'Concerts'].map((service, index) => (
                                                <li key={index} className="mb-3" style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 12px',
                                                    background: 'rgba(253, 197, 26, 0.05)',
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(253, 197, 26, 0.1)',
                                                    transition: 'all 0.2s ease'
                                                }}>
                                                    <i className="bi bi-star-fill" style={{
                                                        color: '#fdc51a',
                                                        marginRight: '12px',
                                                        fontSize: '0.9rem'
                                                    }}></i>
                                                    <span style={{
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        fontSize: '0.95rem'
                                                    }}>{service}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Background Decoration */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/*===== Enhanced Contact Form Section =====*/}
                    <div id="contact-form" className="contact-section section-padding" style={{
                        background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.05) 0%, rgba(30, 34, 71, 0.03) 50%, #f8f9fa 100%)',
                        borderTop: '1px solid #eceff3',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(253, 197, 26, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 34, 71, 0.08) 0%, transparent 50%)',
                            zIndex: '1'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                            {/* Section Header */}
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-header" data-aos="fade-up">
                                        <div className="section-badge" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            color: '#ffffff',
                                            padding: '8px 20px',
                                            borderRadius: '25px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '20px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <i className="bi bi-chat-dots" style={{
                                                color: '#fdc51a',
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Confirm Your Area
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Get In <span style={{ color: '#fdc51a' }}>Touch</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            Check if we cover your location or request service in a new area. Our team will respond within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="contact-form" data-aos="fade-up" data-aos-delay="200" style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.1)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Form Header */}
                                        <div style={{
                                            textAlign: 'center',
                                            marginBottom: '30px',
                                            paddingBottom: '20px',
                                            borderBottom: '1px solid #eceff3'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-envelope" style={{
                                                    color: '#1e2247',
                                                    fontSize: '1.5rem'
                                                }}></i>
                                            </div>
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontWeight: '600',
                                                marginBottom: '8px'
                                            }}>Coverage Inquiry Form</h4>
                                            <p style={{
                                                color: '#6c757d',
                                                margin: '0',
                                                fontSize: '0.95rem'
                                            }}>All fields marked with <span style={{ color: '#1e2247' }}>*</span> are required</p>
                                        </div>
                                        <form onSubmit={handleSubmit} noValidate>
                                            <div className="row">
                                                {/* Name and Email */}
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label htmlFor="name" style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            color: '#1e2247',
                                                            fontWeight: '500',
                                                            marginBottom: '8px',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            <i className="bi bi-person" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                            Your Name <span style={{ color: '#1e2247', marginLeft: '4px' }}>*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className="form-control"
                                                            placeholder="Enter your full name"
                                                            required
                                                            style={{
                                                                border: '2px solid #eceff3',
                                                                borderRadius: '8px',
                                                                padding: '12px 15px',
                                                                fontSize: '0.95rem',
                                                                backgroundColor: '#fafafa'
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label htmlFor="email" style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            color: '#1e2247',
                                                            fontWeight: '500',
                                                            marginBottom: '8px',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            <i className="bi bi-envelope" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                            Email Address <span style={{ color: '#1e2247', marginLeft: '4px' }}>*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="your.email@example.com"
                                                            required
                                                            style={{
                                                                border: '2px solid #eceff3',
                                                                borderRadius: '8px',
                                                                padding: '12px 15px',
                                                                fontSize: '0.95rem',
                                                                backgroundColor: '#fafafa'
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Phone and Location */}
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label htmlFor="phone" style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            color: '#1e2247',
                                                            fontWeight: '500',
                                                            marginBottom: '8px',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            <i className="bi bi-telephone" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                            Phone Number <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            className="form-control"
                                                            placeholder="+61 xxx xxx xxx"
                                                            style={{
                                                                border: '2px solid #eceff3',
                                                                borderRadius: '8px',
                                                                padding: '12px 15px',
                                                                fontSize: '0.95rem',
                                                                backgroundColor: '#fafafa'
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label htmlFor="location" style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            color: '#1e2247',
                                                            fontWeight: '500',
                                                            marginBottom: '8px',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            <i className="bi bi-geo-alt" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                            Property Location <span style={{ color: '#1e2247', marginLeft: '4px' }}>*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="location"
                                                            name="location"
                                                            className="form-control"
                                                            placeholder="Enter property address or suburb"
                                                            required
                                                            style={{
                                                                border: '2px solid #eceff3',
                                                                borderRadius: '8px',
                                                                padding: '12px 15px',
                                                                fontSize: '0.95rem',
                                                                backgroundColor: '#fafafa'
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Service Type */}
                                                <div className="col-12 mb-4">
                                                    <div className="form-group">
                                                        <label htmlFor="service" style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            color: '#1e2247',
                                                            fontWeight: '500',
                                                            marginBottom: '8px',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            <i className="bi bi-shield-check" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                            Service Type <span style={{ color: '#1e2247', marginLeft: '4px' }}>*</span>
                                                        </label>
                                                        <select
                                                            id="service"
                                                            name="service"
                                                            className="form-select"
                                                            required
                                                            style={{
                                                                border: '2px solid #eceff3',
                                                                borderRadius: '8px',
                                                                padding: '12px 15px',
                                                                fontSize: '0.95rem',
                                                                backgroundColor: '#fafafa'
                                                            }}
                                                        >
                                                            <option value="">Please select a service</option>
                                                            <option value="residential">Residential Security</option>
                                                            <option value="commercial">Commercial Security</option>
                                                            <option value="event-security">Event Security</option>
                                                            <option value="mobile-patrol">Mobile Patrol Security</option>
                                                            <option value="construction-site">Construction Site Security</option>
                                                            <option value="k9-response">K9 Security Services</option>
                                                            <option value="concierge">Concierge Security</option>
                                                            <option value="alarm-response">Alarm Response Services</option>
                                                            <option value="consultation">Security Consultation</option>
                                                            <option value="other">Other Services</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div className="col-12 mb-4">
                                                    <div className="form-group">
                                                        <label htmlFor="message" style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            color: '#1e2247',
                                                            fontWeight: '500',
                                                            marginBottom: '8px',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            <i className="bi bi-chat-dots" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                            Your Message <span style={{ color: '#1e2247', marginLeft: '4px' }}>*</span>
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            className="form-control"
                                                            rows="5"
                                                            placeholder="Please describe your security requirements, property details, expected duration, and any specific concerns you may have..."
                                                            required
                                                            style={{
                                                                border: '2px solid #eceff3',
                                                                borderRadius: '8px',
                                                                padding: '12px 15px',
                                                                fontSize: '0.95rem',
                                                                backgroundColor: '#fafafa',
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
                                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
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
                                                                }}>Your Privacy is Protected</h6>
                                                                <p style={{
                                                                    color: '#6c757d',
                                                                    margin: '0',
                                                                    fontSize: '0.85rem',
                                                                    lineHeight: '1.5'
                                                                }}>
                                                                    We respect your privacy and will never share your personal information with third parties. Your data is encrypted and securely stored.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Submit Button */}
                                                <div className="col-12 text-center">
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="btn"
                                                        style={{
                                                            background: loading ? '#6c757d' : 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '10px',
                                                            padding: '15px 40px',
                                                            fontSize: '0.95rem',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: loading ? 'none' : '0 8px 25px rgba(30, 34, 71, 0.3)',
                                                            cursor: loading ? 'not-allowed' : 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            gap: '10px',
                                                            margin: '0 auto',
                                                            minWidth: '200px'
                                                        }}
                                                    >
                                                        {loading ? (
                                                            <>
                                                                <div style={{
                                                                    width: '16px',
                                                                    height: '16px',
                                                                    border: '2px solid transparent',
                                                                    borderTop: '2px solid #ffffff',
                                                                    borderRadius: '50%',
                                                                    animation: 'spin 1s linear infinite'
                                                                }}></div>
                                                                Sending Message...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="bi bi-send"></i>
                                                                Send Message
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
                    </div>

                    {/*===== Enhanced Assurance Section =====*/}
                    <div className="assurance-section section-padding" style={{
                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)',
                            zIndex: '1'
                        }}></div>

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-100px',
                            right: '-100px',
                            width: '300px',
                            height: '300px',
                            background: 'rgba(253, 197, 26, 0.08)',
                            borderRadius: '50%',
                            zIndex: '1'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-80px',
                            left: '-80px',
                            width: '200px',
                            height: '200px',
                            background: 'rgba(253, 197, 26, 0.05)',
                            borderRadius: '50%',
                            zIndex: '1'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                            {/* Section Header */}
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-header" data-aos="fade-up">
                                        <div className="section-badge" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            background: 'rgba(253, 197, 26, 0.15)',
                                            color: '#fdc51a',
                                            padding: '8px 20px',
                                            borderRadius: '25px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '20px',
                                            border: '1px solid rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-award" style={{
                                                color: '#fdc51a',
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Our Commitment
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#ffffff',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Nationwide <span style={{ color: '#fdc51a' }}>Security Solutions</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            Wherever you need protection, we provide professional security services with unmatched reliability and expertise.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Assurance Cards */}
                            <div className="row">
                                {/* Rapid Deployment Card */}
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="assurance-card h-100" data-aos="fade-up" data-aos-delay="100" style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Background Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            right: '-30px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(32, 201, 151, 0.05) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: '2' }}>
                                            {/* Icon */}
                                            <div className="assurance-icon mb-4">
                                                <div style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto',
                                                    boxShadow: '0 10px 30px rgba(253, 197, 26, 0.3)',
                                                    transform: 'translateY(-10px)'
                                                }}>
                                                    <i className="bi bi-truck" style={{
                                                        color: '#ffffff',
                                                        fontSize: '2rem'
                                                    }}></i>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontWeight: '600',
                                                marginBottom: '15px',
                                                fontSize: '1.3rem',
                                                fontFamily: 'serif'
                                            }}>Rapid Deployment</h4>

                                            <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                margin: '0 auto 20px',
                                                borderRadius: '2px'
                                            }}></div>

                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.6',
                                                fontSize: '0.95rem'
                                            }}>
                                                Our security personnel can be deployed quickly to any location within our coverage areas, ensuring immediate protection when you need it most.
                                            </p>

                                            {/* Feature Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                background: 'rgba(253, 197, 26, 0.1)',
                                                color: '#fdc51a',
                                                padding: '6px 12px',
                                                borderRadius: '15px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                marginTop: '15px'
                                            }}>
                                                <i className="bi bi-lightning-fill me-1"></i>
                                                Fast Response
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Licensed Professionals Card */}
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="assurance-card h-100" data-aos="fade-up" data-aos-delay="200" style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Background Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            right: '-30px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, rgba(30, 34, 71, 0.05) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: '2' }}>
                                            {/* Icon */}
                                            <div className="assurance-icon mb-4">
                                                <div style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto',
                                                    boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3)',
                                                    transform: 'translateY(-10px)'
                                                }}>
                                                    <i className="bi bi-shield-check" style={{
                                                        color: '#ffffff',
                                                        fontSize: '2rem'
                                                    }}></i>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontWeight: '600',
                                                marginBottom: '15px',
                                                fontSize: '1.3rem',
                                                fontFamily: 'serif'
                                            }}>Licensed Professionals</h4>

                                            <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                margin: '0 auto 20px',
                                                borderRadius: '2px'
                                            }}></div>

                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.6',
                                                fontSize: '0.95rem'
                                            }}>
                                                All our security officers are fully licensed and professionally trained to handle any security situation with expertise and confidence.
                                            </p>

                                            {/* Feature Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                background: 'rgba(30, 34, 71, 0.1)',
                                                color: '#1e2247',
                                                padding: '6px 12px',
                                                borderRadius: '15px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                marginTop: '15px'
                                            }}>
                                                <i className="bi bi-patch-check-fill me-1"></i>
                                                Certified
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 24/7 Availability Card */}
                                <div className="col-lg-4 col-md-12 mb-4">
                                    <div className="assurance-card h-100" data-aos="fade-up" data-aos-delay="300" style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Card Background Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            right: '-30px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 100%)',
                                            borderRadius: '50%',
                                            zIndex: '1'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: '2' }}>
                                            {/* Icon */}
                                            <div className="assurance-icon mb-4">
                                                <div style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto',
                                                    boxShadow: '0 10px 30px rgba(253, 197, 26, 0.3)',
                                                    transform: 'translateY(-10px)'
                                                }}>
                                                    <i className="bi bi-telephone" style={{
                                                        color: '#1e2247',
                                                        fontSize: '2rem'
                                                    }}></i>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontWeight: '600',
                                                marginBottom: '15px',
                                                fontSize: '1.3rem',
                                                fontFamily: 'serif'
                                            }}>24/7 Availability</h4>

                                            <div style={{
                                                width: '50px',
                                                height: '3px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                margin: '0 auto 20px',
                                                borderRadius: '2px'
                                            }}></div>

                                            <p style={{
                                                color: '#6c757d',
                                                lineHeight: '1.6',
                                                fontSize: '0.95rem'
                                            }}>
                                                Our team is available around the clock to respond to your security needs, providing peace of mind whenever you need it.
                                            </p>

                                            {/* Feature Badge */}
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                background: 'rgba(253, 197, 26, 0.1)',
                                                color: '#fdc51a',
                                                padding: '6px 12px',
                                                borderRadius: '15px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                marginTop: '15px'
                                            }}>
                                                <i className="bi bi-clock-fill me-1"></i>
                                                Always Ready
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Stats Section */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div className="stats-container" data-aos="fade-up" data-aos-delay="400" style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '15px',
                                        padding: '30px',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(253, 197, 26, 0.2)'
                                    }}>
                                        <div className="row text-center">
                                            <div className="col-md-4 mb-3">
                                                <div style={{
                                                    fontSize: '2.5rem',
                                                    fontWeight: '700',
                                                    color: '#fdc51a',
                                                    lineHeight: '1'
                                                }}>100+</div>
                                                <div style={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    fontSize: '0.9rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    marginTop: '5px'
                                                }}>Areas Covered</div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div style={{
                                                    fontSize: '2.5rem',
                                                    fontWeight: '700',
                                                    color: '#fdc51a',
                                                    lineHeight: '1'
                                                }}>15min</div>
                                                <div style={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    fontSize: '0.9rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    marginTop: '5px'
                                                }}>Average Response</div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div style={{
                                                    fontSize: '2.5rem',
                                                    fontWeight: '700',
                                                    color: '#fdc51a',
                                                    lineHeight: '1'
                                                }}>24/7</div>
                                                <div style={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    fontSize: '0.9rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    marginTop: '5px'
                                                }}>Support Available</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Accrediation />
                <Subscribe />
            </Layout>
        </>
    )
}