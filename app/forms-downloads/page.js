import Layout from "@/components/layout/Layout"
import Accreditation from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"

export const metadata = {
  title: 'Forms & Downloads - Professional Security Documentation | Metropolitan Security Services',
  description: 'Access comprehensive forms, employment documents, and essential company resources for Metropolitan Security\'s professional security services. Download quotation forms, booking forms, SOPs, and company documentation.',
}

export default function FormsDownloadsPage() {
    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                headTitle="Forms & Downloads - Professional Security Documentation"
                breadcrumbTitle="FORMS & DOWNLOADS"
                mainTitle="Essential Forms & Documents"
                subtitle="Comprehensive access to professional forms, employment documents, and essential company resources for seamless security service operations"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Uniformed%20&%20Covert%20Secuirty%20Guards/7FB1B452-3A31-4313-9AEF-1535B2F450C8_1_105_c.webp"
            >
                <div>
                    {/*===== Enhanced Hero Section =====*/}
                    <div className="classic-hero-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, rgba(253, 197, 26, 0.05) 50%, #eceff3 100%)',
                        borderBottom: '2px solid #eceff3',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-100px',
                            right: '-100px',
                            width: '300px',
                            height: '300px',
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            zIndex: '1'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content" data-aos="fade-right">
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
                                            marginBottom: '25px'
                                        }}>
                                            <i className="bi bi-files" style={{ 
                                                color: '#fdc51a', 
                                                marginRight: '10px',
                                                fontSize: '1.1rem'
                                            }}></i>
                                            Document Center
                                        </div>
                                        <h1 style={{
                                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif',
                                            lineHeight: '1.1'
                                        }}>
                                            Essential <span style={{ color: '#fdc51a' }}>Forms</span> & Documents
                                        </h1>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            lineHeight: '1.6',
                                            marginBottom: '30px'
                                        }}>
                                            Access comprehensive forms and essential documents for our security services. 
                                            Everything you need for quick submissions and company information.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
                                        <div style={{
                                            textAlign: 'center',
                                            position: 'relative'
                                        }}>
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                padding: '40px',
                                                borderRadius: '15px',
                                                boxShadow: '0 15px 35px rgba(253, 197, 26, 0.3)',
                                                border: '2px solid #ffffff'
                                            }}>
                                                <i className="bi bi-file-earmark-text" style={{
                                                    fontSize: '4rem',
                                                    marginBottom: '20px',
                                                    display: 'block'
                                                }}></i>
                                                <h3 style={{ fontWeight: '700', marginBottom: '15px' }}>Professional Documentation</h3>
                                                <p style={{ margin: '0', fontSize: '1rem' }}>
                                                    Streamlined access to all essential forms and company documents
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Enhanced Forms Grid Section =====*/}
                    <div className="forms-grid-section section-padding" style={{
                        background: '#ffffff',
                        borderTop: '1px solid #eceff3'
                    }}>
                        <div className="container">
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
                                            marginBottom: '20px'
                                        }}>
                                            <i className="bi bi-file-text" style={{ 
                                                color: '#fdc51a', 
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Quick Access Forms
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Client <span style={{ color: '#fdc51a' }}>Forms</span> & Documents
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            Download, complete and submit these forms for fast and efficient service processing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Get Quotation Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 d-flex flex-column" style={{ position: 'relative' }}>
                                                {/* Card accent */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                }}></div>
                                                
                                                <div className="form-icon mb-3 text-center">
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-file-earmark-text" style={{fontSize: '2rem', color: '#1e2247'}}></i>
                                                    </div>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Get Quotation Form</h5>
                                                <div style={{
                                                    width: '50px',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    margin: '0 auto 20px',
                                                    borderRadius: '1px'
                                                }}></div>
                                                <p className="card-text mb-4" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.6',
                                                    textAlign: 'center'
                                                }}>
                                                    Request a detailed quote for our security services. Provide your requirements and get a customized proposal.
                                                </p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="get-quotation" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.9rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>View Form
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Book a Guard Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)'
                                                }}></div>
                                                
                                                <div className="form-icon mb-3 text-center">
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <i className="bi bi-person-badge" style={{fontSize: '2rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Book a Guard Form</h5>
                                                <div style={{
                                                    width: '50px',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    margin: '0 auto 20px',
                                                    borderRadius: '1px'
                                                }}></div>
                                                <p className="card-text mb-4" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.6',
                                                    textAlign: 'center'
                                                }}>
                                                    Quick booking form to request security guard services. Perfect for immediate security needs.
                                                </p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="book-a-guard" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.9rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>View Form
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100" data-aos="fade-up" data-aos-delay="300">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                }}></div>
                                                
                                                <div className="form-icon mb-3 text-center">
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-calendar-check" style={{fontSize: '2rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Booking Form</h5>
                                                <div style={{
                                                    width: '50px',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    margin: '0 auto 20px',
                                                    borderRadius: '1px'
                                                }}></div>
                                                <p className="card-text mb-4" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.6',
                                                    textAlign: 'center'
                                                }}>
                                                    Comprehensive booking form for scheduling security services with detailed requirements.
                                                </p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/booking-form-security-services-australia" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.9rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>View Form
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Us Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100" data-aos="fade-up" data-aos-delay="400">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)'
                                                }}></div>
                                                
                                                <div className="form-icon mb-3 text-center">
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <i className="bi bi-envelope" style={{fontSize: '2rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Contact Us Form</h5>
                                                <div style={{
                                                    width: '50px',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    margin: '0 auto 20px',
                                                    borderRadius: '1px'
                                                }}></div>
                                                <p className="card-text mb-4" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.6',
                                                    textAlign: 'center'
                                                }}>
                                                    Get in touch with our team for general inquiries, support, or additional information.
                                                </p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/contacts" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.9rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>View Form
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contractor Declaration Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100" data-aos="fade-up" data-aos-delay="500">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                }}></div>
                                                
                                                <div className="form-icon mb-3 text-center">
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-clipboard-check" style={{fontSize: '2rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Contractor Declaration Form</h5>
                                                <div style={{
                                                    width: '50px',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    margin: '0 auto 20px',
                                                    borderRadius: '1px'
                                                }}></div>
                                                <p className="card-text mb-4" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.6',
                                                    textAlign: 'center'
                                                }}>
                                                    Declaration form for independent contractors working with Metropolitan Security Services.
                                                </p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/contractor-declaration-form" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.9rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>View Form
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Incident Log Book */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100" data-aos="fade-up" data-aos-delay="600">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '4px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)'
                                                }}></div>
                                                
                                                <div className="form-icon mb-3 text-center">
                                                    <div style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                                    }}>
                                                        <i className="bi bi-journal-text" style={{fontSize: '2rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Incident Log Book</h5>
                                                <div style={{
                                                    width: '50px',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                    margin: '0 auto 20px',
                                                    borderRadius: '1px'
                                                }}></div>
                                                <p className="card-text mb-4" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.6',
                                                    textAlign: 'center'
                                                }}>
                                                    Standardized incident reporting logbook for recording security incidents and observations.
                                                </p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/incident-report-feedback-form" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.9rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>View Form
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Enhanced Employment & Documentation Section =====*/}
                    <div className="employment-docs-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, rgba(30, 34, 71, 0.03) 50%, #eceff3 100%)',
                        borderTop: '1px solid #eceff3'
                    }}>
                        <div className="container">
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
                                            marginBottom: '20px'
                                        }}>
                                            <i className="bi bi-building" style={{ 
                                                color: '#fdc51a', 
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Employment & Documentation
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Employment Forms & <span style={{ color: '#fdc51a' }}>Company</span> Documents
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            Essential documents for employment, procedures, and comprehensive company information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Employment Form */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '12px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 text-center d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '3px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                }}></div>
                                                
                                                <div className="employment-icon mb-3">
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 5px 15px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-person-plus" style={{fontSize: '1.4rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h6 className="card-title mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Employment Form</h6>
                                                <p className="card-text small mb-3" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.5'
                                                }}>Application form for employment opportunities with Metropolitan Security Services.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2025/05/Employee-Registration-Form.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.8rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 3px 10px rgba(30, 34, 71, 0.3)'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SOP's */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '12px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 text-center d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '3px',
                                                    background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)'
                                                }}></div>
                                                
                                                <div className="employment-icon mb-3">
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)'
                                                    }}>
                                                        <i className="bi bi-list-check" style={{fontSize: '1.4rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h6 className="card-title mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>SOP's</h6>
                                                <p className="card-text small mb-3" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.5'
                                                }}>Standard Operating Procedures for security operations and protocols.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2022/12/Site-specific-SOPS-Final-2.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.8rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 3px 10px rgba(30, 34, 71, 0.3)'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Employment Pack */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100" data-aos="fade-up" data-aos-delay="300">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '12px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 text-center d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '3px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                }}></div>
                                                
                                                <div className="employment-icon mb-3">
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 5px 15px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-book" style={{fontSize: '1.4rem', color: '#ffffff'}}></i>
                                                    </div>
                                                </div>
                                                <h6 className="card-title mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Employment Pack</h6>
                                                <p className="card-text small mb-3" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.5'
                                                }}>Complete employee handbook with policies and procedures.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2025/05/Employee-Handbook.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.8rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 3px 10px rgba(30, 34, 71, 0.3)'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Profile */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100" data-aos="fade-up" data-aos-delay="400">
                                        <div className="card h-100" style={{
                                            background: '#ffffff',
                                            borderRadius: '12px',
                                            border: '2px solid #eceff3',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="card-body p-4 text-center d-flex flex-column" style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    height: '3px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                }}></div>
                                                
                                                <div className="employment-icon mb-3">
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto',
                                                        boxShadow: '0 5px 15px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="bi bi-building" style={{fontSize: '1.4rem', color: '#1e2247'}}></i>
                                                    </div>
                                                </div>
                                                <h6 className="card-title mb-3" style={{
                                                    color: '#1e2247',
                                                    fontWeight: '600',
                                                    fontFamily: 'serif'
                                                }}>Company Profile</h6>
                                                <p className="card-text small mb-3" style={{
                                                    color: '#6c757d',
                                                    lineHeight: '1.5'
                                                }}>Comprehensive company profile and service capabilities overview.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2025/05/Company-profile.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            fontSize: '0.8rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            boxShadow: '0 3px 10px rgba(30, 34, 71, 0.3)'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Enhanced Quick Access Section =====*/}
                    <div className="quick-access-section section-padding" style={{
                        background: '#ffffff',
                        borderTop: '1px solid #eceff3'
                    }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="content-section" data-aos="fade-right">
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
                                            marginBottom: '25px'
                                        }}>
                                            <i className="bi bi-lightning" style={{ 
                                                color: '#fdc51a', 
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Easy Document Access
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '20px',
                                            fontFamily: 'serif'
                                        }}>
                                            Streamlined <span style={{ color: '#fdc51a' }}>Process</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            lineHeight: '1.6',
                                            marginBottom: '30px'
                                        }}>
                                            Our forms are designed to make the process as simple and efficient as possible. 
                                            All forms are available online for immediate access and completion.
                                        </p>
                                        <div className="process-list" style={{ marginTop: '30px' }}>
                                            <div className="process-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginBottom: '20px',
                                                padding: '15px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '10px',
                                                border: '1px solid rgba(253, 197, 26, 0.2)'
                                            }}>
                                                <div className="step-number" style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    color: '#1e2247',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: '700',
                                                    marginRight: '15px',
                                                    flexShrink: '0',
                                                    boxShadow: '0 4px 10px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    1
                                                </div>
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>
                                                    <strong style={{ color: '#fdc51a' }}>Select</strong> the form you need from our comprehensive list
                                                </span>
                                            </div>
                                            <div className="process-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginBottom: '20px',
                                                padding: '15px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '10px',
                                                border: '1px solid rgba(253, 197, 26, 0.2)'
                                            }}>
                                                <div className="step-number" style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    color: '#1e2247',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: '700',
                                                    marginRight: '15px',
                                                    flexShrink: '0',
                                                    boxShadow: '0 4px 10px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    2
                                                </div>
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>
                                                    <strong style={{ color: '#fdc51a' }}>Download</strong> and complete the form with accurate information
                                                </span>
                                            </div>
                                            <div className="process-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginBottom: '20px',
                                                padding: '15px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '10px',
                                                border: '1px solid rgba(253, 197, 26, 0.2)'
                                            }}>
                                                <div className="step-number" style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    color: '#1e2247',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: '700',
                                                    marginRight: '15px',
                                                    flexShrink: '0',
                                                    boxShadow: '0 4px 10px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    3
                                                </div>
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>
                                                    <strong style={{ color: '#fdc51a' }}>Submit</strong> the completed form for fast processing
                                                </span>
                                            </div>
                                            <div className="process-item" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginBottom: '0',
                                                padding: '15px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '10px',
                                                border: '1px solid rgba(253, 197, 26, 0.2)'
                                            }}>
                                                <div className="step-number" style={{
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                    color: '#1e2247',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: '700',
                                                    marginRight: '15px',
                                                    flexShrink: '0',
                                                    boxShadow: '0 4px 10px rgba(253, 197, 26, 0.3)'
                                                }}>
                                                    4
                                                </div>
                                                <span style={{ color: '#1e2247', fontWeight: '500' }}>
                                                    <strong style={{ color: '#fdc51a' }}>Receive</strong> confirmation and follow-up from our team
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="stats-grid" data-aos="fade-left" data-aos-delay="200">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4" style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    boxShadow: 'none',
                                                    transition: 'all 0.3s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '0',
                                                        right: '0',
                                                        height: '3px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                    }}></div>
                                                    <div className="stat-number" style={{
                                                        fontSize: '2.5rem',
                                                        fontWeight: '700',
                                                        color: '#fdc51a',
                                                        marginBottom: '10px'
                                                    }}>
                                                        10+
                                                    </div>
                                                    <div className="stat-label" style={{
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '0.9rem'
                                                    }}>Forms Available</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4" style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    boxShadow: 'none',
                                                    transition: 'all 0.3s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '0',
                                                        right: '0',
                                                        height: '3px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)'
                                                    }}></div>
                                                    <div className="stat-number" style={{
                                                        fontSize: '2.5rem',
                                                        fontWeight: '700',
                                                        color: '#fdc51a',
                                                        marginBottom: '10px'
                                                    }}>
                                                        24/7
                                                    </div>
                                                    <div className="stat-label" style={{
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '0.9rem'
                                                    }}>Online Access</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4" style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    boxShadow: 'none',
                                                    transition: 'all 0.3s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '0',
                                                        right: '0',
                                                        height: '3px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)'
                                                    }}></div>
                                                    <div className="stat-number" style={{
                                                        fontSize: '2.5rem',
                                                        fontWeight: '700',
                                                        color: '#1e2247',
                                                        marginBottom: '10px'
                                                    }}>
                                                        Fast
                                                    </div>
                                                    <div className="stat-label" style={{
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '0.9rem'
                                                    }}>Processing</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4" style={{
                                                    background: '#ffffff',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    boxShadow: 'none',
                                                    transition: 'all 0.3s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '0',
                                                        right: '0',
                                                        height: '3px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)'
                                                    }}></div>
                                                    <div className="stat-number" style={{
                                                        fontSize: '2.5rem',
                                                        fontWeight: '700',
                                                        color: '#1e2247',
                                                        marginBottom: '10px'
                                                    }}>
                                                        Easy
                                                    </div>
                                                    <div className="stat-label" style={{
                                                        color: '#1e2247',
                                                        fontWeight: '600',
                                                        fontSize: '0.9rem'
                                                    }}>Submission</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}