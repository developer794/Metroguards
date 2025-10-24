"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MultiSelectDropdown from "./multiSelect";
import Accreditation from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"



export default function CareersPage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/career", { method: "POST", body: formData });
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
                headTitle="Careers - Join Our Professional Security Team"
                breadcrumbTitle="CAREERS"
                mainTitle="Join Our Security Team"
                subtitle="Build your career with Melbourne's leading security service provider. Explore opportunities and apply today."
                backgroundImage="/assets/img/about/values.jpg"
            >
                <div>
                    {/*===== Enhanced Hero Section =====*/}
                    <div className="classic-hero-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, rgba(253, 197, 26, 0.05) 50%, #eceff3 100%)',
                        borderBottom: '2px solid #eceff3',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <h1 style={{
                                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Build Your <span style={{ color: '#fdc51a' }}>Security</span> Career
                                        </h1>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            lineHeight: '1.6',
                                            marginBottom: '30px'
                                        }}>
                                            Join Melbourne's leading security service provider and advance your career 
                                            in a dynamic, professional environment.
                                        </p>
                                        <a href="#application-form" 
                                            className="btn"
                                            style={{
                                                backgroundColor: '#1e2247',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '12px 25px',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-visual">
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                            color: '#ffffff',
                                            padding: '40px',
                                            borderRadius: '15px',
                                            boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)',
                                            textAlign: 'center'
                                        }}>
                                            <i className="bi bi-briefcase" style={{
                                                fontSize: '4rem',
                                                marginBottom: '20px',
                                                display: 'block',
                                                color: '#fdc51a'
                                            }}></i>
                                            <h3 style={{ fontWeight: '700', marginBottom: '15px' }}>Professional Careers</h3>
                                            <p style={{ margin: '0', fontSize: '1rem', opacity: '0.9' }}>
                                                Multiple positions available across Melbourne
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Enhanced Application Form Section =====*/}
                    <div id="application-form" className="application-section section-padding" style={{
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
                                            background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                            color: '#ffffff',
                                            padding: '8px 20px',
                                            borderRadius: '25px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '20px'
                                        }}>
                                            <i className="bi bi-file-person" style={{ 
                                                color: '#fdc51a', 
                                                marginRight: '8px',
                                                fontSize: '1rem'
                                            }}></i>
                                            Start Your Application
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Job <span style={{ color: '#fdc51a' }}>Application</span> Form
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            maxWidth: '600px',
                                            margin: '0 auto',
                                            lineHeight: '1.6'
                                        }}>
                                            Complete the form below to apply for a position with our professional security team
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="application-form" data-aos="fade-up" data-aos-delay="200" style={{
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        border: '2px solid #eceff3',
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
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-person-plus" style={{ 
                                                    color: '#1e2247', 
                                                    fontSize: '1.5rem' 
                                                }}></i>
                                            </div>
                                            <h4 style={{
                                                color: '#1e2247',
                                                fontWeight: '600',
                                                marginBottom: '8px'
                                            }}>Career Application</h4>
                                            <p style={{
                                                color: '#6c757d',
                                                margin: '0',
                                                fontSize: '0.95rem'
                                            }}>All fields marked with <span style={{ color: '#dc3545' }}>*</span> are required</p>
                                        </div>
                                        <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="firstName" style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-person" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        First Name <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="firstName" 
                                                        name="firstName" 
                                                        placeholder="Enter your first name"
                                                        required
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#fdc51a';
                                                            e.target.style.backgroundColor = '#ffffff';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#eceff3';
                                                            e.target.style.backgroundColor = '#fafafa';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="lastName" style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#1e2247',
                                                        fontWeight: '500',
                                                        marginBottom: '8px',
                                                        fontSize: '0.95rem'
                                                    }}>
                                                        <i className="bi bi-person" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Last Name <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="lastName" 
                                                        name="lastName" 
                                                        placeholder="Enter your last name"
                                                        required
                                                        style={{
                                                            border: '2px solid #eceff3',
                                                            borderRadius: '8px',
                                                            padding: '12px 15px',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: '#fafafa',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#fdc51a';
                                                            e.target.style.backgroundColor = '#ffffff';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#eceff3';
                                                            e.target.style.backgroundColor = '#fafafa';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="address" className="form-label text-dark">Address *</label>
                                            <input type="text" className="form-control glassmorphism-input " id="address" name="address" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="suburb" className="form-label text-dark">Suburb *</label>
                                            <input type="text" className="form-control glassmorphism-input " id="suburb" name="suburb" required />
                                            </div>

                                            <div className="col-md-3 mb-4">
                                            <label htmlFor="state" className="form-label text-dark">State *</label>
                                            <select className="form-select glassmorphism-input " id="state" name="state" required>
                                                <option value="">Select</option>
                                                <option value="VIC">VIC</option>
                                                <option value="NSW">NSW</option>
                                                <option value="QLD">QLD</option>
                                                <option value="SA">SA</option>
                                                <option value="WA">WA</option>
                                                <option value="TAS">TAS</option>
                                                <option value="NT">NT</option>
                                                <option value="ACT">ACT</option>
                                            </select>
                                            </div>

                                            <div className="col-md-3 mb-4">
                                            <label htmlFor="postCode" className="form-label text-dark">Post Code *</label>
                                            <input type="text" className="form-control glassmorphism-input " id="postCode" name="postCode" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="phone" className="form-label text-dark">Phone Number *</label>
                                            <input type="tel" className="form-control glassmorphism-input " id="phone" name="phone" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="email" className="form-label text-dark">Email Address *</label>
                                            <input type="email" className="form-control glassmorphism-input " id="email" name="email" required />
                                            </div>

                                            {/* Applying For Dropdown */}
                                                <div className="col-12 mb-4">
                                            <label className="form-label text-dark">Applying For *</label>
                                            <MultiSelectDropdown
                                                name="roles[]" // will send array to API
                                                placeholder="Select roles..."
                                                options={[
                                                { value: "Alarm Response Unit", label: "Alarm Response Unit" },
                                                { value: "Concierge Services", label: "Concierge Services" },
                                                { value: "Crowd Controller", label: "Crowd Controller" },
                                                { value: "Guard with Dog", label: "Guard with Dog" },
                                                { value: "K9 Response Unit", label: "K9 Response Unit" },
                                                { value: "Security Officers", label: "Security Officers" },
                                                { value: "Mobile Security Patrols", label: "Mobile Security Patrols" },
                                                { value: "Uniformed Guards", label: "Uniformed Guards" },
                                                { value: "Construction Site Security", label: "Construction Site Security" },
                                                { value: "Loss Prevention Officer", label: "Loss Prevention Officer" },
                                                { value: "Party Security", label: "Party Security" },
                                                { value: "Event Security", label: "Event Security" },
                                                { value: "COVID Marshal", label: "COVID Marshal" },
                                                { value: "Other Services", label: "Other Services" },
                                                ]}
                                            />
                                            </div>


                                            <div className="col-12 mb-4">
                                            <label htmlFor="fileUpload" className="form-label text-dark">File Upload (Resume/CV) *</label>
                                            <input className="form-control glassmorphism-input " type="file" id="fileUpload" name="resume" required />
                                            <small className="text-muted">Accepted file types: PDF, DOC, DOCX (Max 5MB)</small>
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="comments" className="form-label text-dark">Additional Information/Comments</label>
                                            <textarea className="form-control glassmorphism-input " id="comments" name="comments" rows="4"></textarea>
                                            </div>

                                            <div className="col-12 mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="terms" name="terms" required />
                                                <label className="form-check-label " style={{color:"white"}} htmlFor="terms">
                                                I have read the terms and conditions *
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="newsletter" name="newsletter" />
                                                <label className="form-check-label " style={{color:"white"}} htmlFor="newsletter">
                                                I would like to receive emails from Metropolitan Guard Services about important news
                                                </label>
                                            </div>
                                            </div>

                                            <div className="col-12 text-center">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="btn"
                                                style={{
                                                    background: loading ? '#6c757d' : 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
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
                                                    minWidth: '200px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={(e) => {
                                                    if (!loading) {
                                                        e.target.style.transform = 'translateY(-2px)';
                                                        e.target.style.boxShadow = '0 12px 35px rgba(30, 34, 71, 0.4)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (!loading) {
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.3)';
                                                    }
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
                                                        Sending Application...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-send"></i>
                                                        Submit Application
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

                    {/* ===== Current Openings Section =====
                    <div className="openings-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Available Positions
                                        </small>
                                        <h2>CURRENT JOB OPENINGS</h2>
                                        <p>Browse our current security job opportunities</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Security Officers</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-primary me-2">Full-time</span>
                                            <span className="badge bg-secondary me-2">Part-time</span>
                                            <span className="badge bg-success">Casual</span>
                                        </div>
                                        <p className="mb-3">We're seeking licensed security officers for various sites across Melbourne and Sydney. Day, night and weekend shifts available.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Valid security license</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>First Aid certificate</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Excellent communication skills</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Reliable transportation</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Mobile Patrol Officers</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-primary me-2">Full-time</span>
                                            <span className="badge bg-success">Casual</span>
                                        </div>
                                        <p className="mb-3">Join our mobile patrol team conducting regular security checks for clients across multiple locations.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Valid security license</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Clean driving record</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>First Aid certificate</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Night shift availability</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Event Security Staff</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-secondary me-2">Part-time</span>
                                            <span className="badge bg-success">Casual</span>
                                        </div>
                                        <p className="mb-3">Looking for experienced crowd controllers for concerts, festivals, and corporate events.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>1A Security License</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Previous event experience</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Physical fitness</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Weekend availability</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>K9 Security Handlers</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-primary me-2">Full-time</span>
                                        </div>
                                        <p className="mb-3">Experienced dog handlers needed for our K9 security unit. Dogs provided for qualified candidates.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Valid security license</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>K9 handling certification</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>2+ years K9 experience</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Flexible availability</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                    <style jsx>{`
            .classic-form-input,
            .glassmorphism-input {
              border: 2px solid #eceff3 !important;
              border-radius: 8px !important;
              padding: 12px 15px !important;
              font-size: 0.95rem !important;
              background-color: #fafafa !important;
              transition: all 0.3s ease !important;
              color: #1e2247 !important;
            }
            
            .classic-form-input:focus,
            .glassmorphism-input:focus {
              border-color: #fdc51a !important;
              background-color: #ffffff !important;
              box-shadow: 0 0 0 3px rgba(253, 197, 26, 0.1) !important;
              outline: none !important;
              color: #1e2247 !important;
            }

            .classic-form-input::placeholder,
            .glassmorphism-input::placeholder {
              color: #6c757d !important;
            }

            .form-label.text-dark {
              color: #1e2247 !important;
              font-weight: 500 !important;
              margin-bottom: 8px !important;
            }

            .form-check-label {
              color: #1e2247 !important;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            select.classic-form-input,
            select.glassmorphism-input {
              appearance: none !important;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
              background-repeat: no-repeat !important;
              background-position: right 1rem center !important;
              background-size: 1em !important;
            }

            select.classic-form-input option,
            select.glassmorphism-input option {
              background: #ffffff !important;
              color: #1e2247 !important;
              padding: 10px !important;
            }

            textarea.glassmorphism-input {
              resize: vertical !important;
              min-height: 120px !important;
            }
          `}</style>
                </div>
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}