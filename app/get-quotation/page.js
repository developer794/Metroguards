"use client";
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./get-quotation.css";
import Accreditation from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"

// Enhanced MultiSelectDropdown component
const MultiSelectDropdown = ({ options, selectedValues, onChange, placeholder, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    
    onChange(newSelectedValues);
  };

  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedLabels = options
    .filter(option => selectedValues.includes(option.value))
    .map(option => option.label)
    .join(", ");

  const displayText = selectedValues.length > 0 
    ? `${selectedValues.length} selected`
    : placeholder;

  return (
    <div className="multi-select-dropdown" ref={dropdownRef}>
      <div 
        className={`dropdown-toggle glassmorphism-input ${isOpen ? 'open' : ''}`}
        onClick={(e) => {
          e.stopPropagation(); // stop form bubbling
          setIsOpen(!isOpen);
        }}
      >
        <span className="selected-text" title={selectedLabels}>
          {displayText}
        </span>
        <span className="dropdown-arrow">▼</span>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <label key={option.value} className="dropdown-item">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                  />
                  <span className="checkbox-label">{option.label}</span>
                </label>
              ))
            ) : (
              <div className="no-options">No options found</div>
            )}
          </div>
          
          {selectedValues.length > 0 && (
            <div className="dropdown-footer">
              <button 
                type="button"
                className="clear-all-btn"
                onClick={() => onChange([])}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Hidden inputs for form submission */}
      {selectedValues.map(value => (
        <input
          key={value}
          type="hidden"
          name={name}
          value={value}
        />
      ))}
    </div>
  );
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const recaptchaRef = useRef(null);

  // Smooth scroll to top when Thank You message appears
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isSubmitted]);

  // Load reCAPTCHA v2 script and render widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;

    // Define the callback function for token
    window.onRecaptchaSuccess = (token) => {
      setRecaptchaToken(token);
    };

    // Define the onload callback to render the widget
    window.onRecaptchaLoad = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        try {
          window.grecaptcha.render(recaptchaRef.current, {
            'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            'callback': window.onRecaptchaSuccess
          });
        } catch (e) {
          if (process.env.NODE_ENV === 'development') {
            console.error('reCAPTCHA render error:', e);
          }
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete window.onRecaptchaSuccess;
      delete window.onRecaptchaLoad;
    };
  }, []);

  const industryOptions = [
    { value: "developer", label: "Developer" },
    { value: "real-estate", label: "Real Estate" },
    { value: "property-management", label: "Property Management" },
    { value: "individual", label: "Individual" },
    { value: "holding-company", label: "Holding Company" },
    { value: "maritime", label: "Maritime" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "government", label: "Government" },
    { value: "cultural", label: "Cultural" },
    { value: "cre", label: "CRE" },
    { value: "finance", label: "Finance" },
    { value: "aviation", label: "Aviation" },
    { value: "fm-partnership", label: "FM Partnership" },
    { value: "public-transport", label: "Public Transport" },
    { value: "custodial-court", label: "Custodial / Court" },
    { value: "critical-infrastructure", label: "Critical Infrastructure" },
    { value: "telecommunication", label: "Telecommunication" },
    { value: "it", label: "IT" },
    { value: "banking", label: "Banking" },
    { value: "commercial-real-estate", label: "Commercial Real Estate" },
    { value: "defense", label: "Defense" },
    { value: "health-welfare", label: "Health / Welfare" },
    { value: "manufacturing-petrochemical", label: "Manufacturing / Petrochemical" },
    { value: "mining-resources", label: "Mining / Resources" },
    { value: "overheads", label: "Overheads" },
    { value: "patrols", label: "Patrols" },
    { value: "retail", label: "Retail" },
    { value: "transport", label: "Transport" },
    { value: "utilities-telecommunication-media", label: "Utilities / Telecommunication / Media" },
    { value: "other", label: "Other" }
  ];

  const serviceOptions = [
    // Security Guards Services
    { value: "building-security-guards", label: "Building Security Guards" },
    { value: "construction-security-guards", label: "Construction Security Guards" },
    { value: "shopping-centre-security-guards", label: "Shopping Centre Security Guards" },
    { value: "hospital-security-guards", label: "Hospital Security Guards" },
    { value: "gatehouse-security-guards", label: "Gatehouse Security Guards" },
    { value: "educational-institution-security", label: "Educational Institution Security" },
    { value: "corporate-security-guards", label: "Corporate Security Guards" },
    { value: "retail-security-guards", label: "Retail Security Guards" },
    { value: "loss-prevention-security-guards", label: "Loss Prevention Security Guards" },
    { value: "concierge-security-guards", label: "Concierge Security Guards" },
    { value: "lock-up-and-open-up-security", label: "Lock-Up and Open-Up Security" },
    { value: "industrial-warehouse-security", label: "Industrial Warehouse Security" },
    { value: "static-security-guards", label: "Static Security Guards" },
    { value: "uniform-and-covert-security", label: "Uniform and Covert Security" },
    { value: "adhoc-security-services", label: "Adhoc Security Services" },
    { value: "asset-protection-security", label: "Asset Protection Security" },
    // Crowd Control Services
    { value: "party-security-guards", label: "Party Security Guards" },
    { value: "event-security-guards", label: "Event Security Guards" },
    { value: "corporate-event-security", label: "Corporate Event Security" },
    // Mobile Patrols Services
    { value: "lock-up-security", label: "Lock-Up Security" },
    { value: "security-escort", label: "Security Escort" },
    { value: "alarm-response", label: "Alarm Response" },
    { value: "mobile-patrols", label: "Mobile Patrols" },
    { value: "construction-patrol", label: "Construction Patrol" },
    // K9 Security Services
    { value: "k9-security-with-handler", label: "K9 Security With Handler" },
    // Other
    { value: "other-services", label: "Other Services" }
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    // Check Terms and Conditions
    if (!agreedToTerms) {
      toast.error("Please accept the Terms and Conditions to continue");
      return;
    }

    // Check reCAPTCHA v2
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setLoading(true);

    try {
    const form = e.currentTarget;
    const formData = new FormData(form);

      // Add reCAPTCHA token to form data
      formData.append("recaptchaToken", recaptchaToken);

      const res = await fetch("/api/quotation", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      // Show success page instead of toast
      setIsSubmitted(true);
      form.reset();
      setSelectedIndustries([]);
      setSelectedServices([]);
      setAgreedToTerms(false);
      
      // Reset reCAPTCHA
      setRecaptchaToken(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (err) {
      toast.error(err.message || "Network error. Please try again.");
      if (process.env.NODE_ENV === 'development') {
        console.error('Quotation form submission error:', err);
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
        headTitle="Get Quotation - Professional Security Services"
        breadcrumbTitle="GET QUOTATION"
        mainTitle="Request Your Quote"
        subtitle="Get a customized security solution proposal tailored to your specific needs and requirements"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/7E68B990-A328-4FF2-B123-A332787E94A2_1_105_c.webp"
      >
            

        {isSubmitted ? (
          /* ===== Success Thank You Page ===== */
          <div className="quotation-section" style={{
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
                    }}>Your Quotation Request Has Been Sent Successfully!</h3>

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
                      We've received your request and our team will review it carefully. 
                      You'll receive a detailed quotation via email within <strong style={{ color: '#1e2247' }}>24 hours</strong>.
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
                            Check your email inbox (including spam folder)
                          </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                          <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>2.</span>
                          <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                            Our security expert will review your requirements
                          </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>3.</span>
                          <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                            Receive a customized quotation tailored to your needs
                          </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>4.</span>
                          <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                          We will contact you if any additional information is required.
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
                      paddingTop: '30px',
                      borderTop: '2px solid #e9ecef',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <p style={{
                        color: '#6c757d',
                        fontSize: '0.9rem',
                        marginBottom: '10px'
                      }}>Need immediate assistance?</p>
                      <p style={{
                        color: '#1e2247',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        margin: 0
                      }}>
                        <i className="bi bi-telephone-fill" style={{ color: '#fdc51a', marginRight: '10px' }}></i>
                        1300 731 173
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ===== Original Form Section ===== */
          <div className="quotation-section" style={{
            background: '#f8f9fa',
            padding: '80px 0'
          }}>
            <div className="container">
              {/* Section Header */}
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#1e2247',
                    color: '#fdc51a',
                    padding: '10px 24px',
                    borderRadius: '30px',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}>
                    <i className="bi bi-envelope-open" style={{ marginRight: '10px', fontSize: '1.1rem' }}></i>
                    Get In Touch
                  </div>
                  <h2 style={{
                      color: '#1e2247',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>Request Your Quote</h2>
                    <p style={{
                      color: '#6c757d',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}>Fill out the form and our team will get back to you within 24 hours</p>
                </div>
                  </div>

              {/* Two Column Layout */}
              <div className="row g-5">
              {/* LEFT COLUMN - FORM */}
              <div className="col-lg-7">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '0',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  border: '1px solid #e9ecef',
                  overflow: 'hidden'
                }}>

                  {/* Form Header */}
                  <div style={{
                    background: '#1e2247',
                    padding: '20px 30px',
                    marginBottom: '0'
                  }}>
                    <h3 style={{
                      color: '#fdc51a',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      margin: 0,
                      textAlign: 'center',
                      letterSpacing: '0.5px'
                    }}>Quotation Form</h3>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate style={{padding:'45px',marginTop:'0px'}}>
  {/* honeypot (spam trap) */}
  <input
    type="text"
    name="companyWebsite"
    tabIndex="-1"
    autoComplete="off"
    style={{ display: "none" }}
  />

                    <div className="row">
                      {/* Full Name */}
                      <div className="col-12 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Full Name <span style={{ color: '#dc3545' }}>*</span>
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            required
                            style={{
                              width: '100%',
                              border: '2px solid rgba(30, 34, 71, 0.25)',
                              borderRadius: '12px',
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)',
                              height: '48px'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-md-6 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Email <span style={{ color: '#dc3545' }}>*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            style={{
                              width: '100%',
                              border: '2px solid rgba(30, 34, 71, 0.25)',
                              borderRadius: '12px',
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)',
                              height: '48px'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Phone <span style={{ color: '#dc3545' }}>*</span>
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Enter Your Phone"
                            required
                            style={{
                              width: '100%',
                              border: '2px solid rgba(30, 34, 71, 0.25)',
                              borderRadius: '12px',
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)',
                              height: '48px'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          />
                        </div>
                      </div>

                      
                      

                      {/* Industry Dropdown */}
                      <div className="col-md-6 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Industry <span style={{ color: '#dc3545' }}>*</span>
                          </label>
                          <select
                            name="industry[]" 
                            required
                            style={{
                              width: '100%',
                              border: '2px solid rgba(30, 34, 71, 0.25)',
                              borderRadius: '12px',
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              cursor: 'pointer',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)',
                              height: '48px'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          >
                            <option value="">Select Industry</option>
                            <option value="Corporate">Corporate </option>
                            <option value="Commercial">Commercial</option>
                            <option value="retail">Retail</option>
                            <option value="Hospitality-and-Major-Events">Hospitality & Major Events</option>
                            <option value="Industrial">Industrial</option>
                            <option value="transport">Transport</option>
                            <option value="Logistics">Logistics</option>
                            <option value="Construction-and-Infrastructure">Construction & Infrastructure</option>
                            <option value="healthcare">Healthcare & Aged Care</option>
                            <option value="Public-and-Community-Services">Public & Community Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                        {/* Service Site Address */}
                      <div className="col-md-6 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Service Site Address <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                          </label>
                           <input
                             name="location"
                             type="text"
                             placeholder="Enter Service Location"
                            style={{
                               width: '100%',
                               border: '2px solid rgba(30, 34, 71, 0.25)',
                               borderRadius: '12px',
                               padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                               transition: 'all 0.3s ease',
                               outline: 'none',
                               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)',
                               height: '48px'
                             }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          />
                        </div>
                      </div>

                      {/* Service Dropdown */}
                      <div className="col-12 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Type of Service Required <span style={{ color: '#dc3545' }}>*</span>
                          </label>
                          <select
                            name="service[]"
                            required
                            style={{
                              width: '100%',
                              border: '2px solid rgba(30, 34, 71, 0.25)',
                              borderRadius: '12px',
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              cursor: 'pointer',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)',
                              height: '48px'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          >
                            <option value="">Select Service</option>
                            
                            {/* Security Guards Services - Heading as selectable option */}
                            <option value="security-guards-services" className="service-heading" style={{fontWeight: '700', color: '#1e2247'}}>━━ Security Guards Services ━━</option>
                              <option value="building-security-guards">&nbsp;&nbsp;&nbsp;Building Security Guards</option>
                              <option value="construction-security-guards">&nbsp;&nbsp;&nbsp;Construction Security Guards</option>
                              <option value="shopping-centre-security-guards">&nbsp;&nbsp;&nbsp;Shopping Centre Security Guards</option>
                              <option value="hospital-security-guards">&nbsp;&nbsp;&nbsp;Hospital Security Guards</option>
                              <option value="gatehouse-security-guards">&nbsp;&nbsp;&nbsp;Gatehouse Security Guards</option>
                              <option value="educational-institution-security">&nbsp;&nbsp;&nbsp;Educational Institution Security</option>
                              <option value="corporate-security-guards">&nbsp;&nbsp;&nbsp;Corporate Security Guards</option>
                              <option value="retail-security-guards">&nbsp;&nbsp;&nbsp;Retail Security Guards</option>
                              <option value="loss-prevention-security-guards">&nbsp;&nbsp;&nbsp;Loss Prevention Security Guards</option>
                              <option value="concierge-security-guards">&nbsp;&nbsp;&nbsp;Concierge Security Guards</option>
                              <option value="lock-up-and-open-up-security">&nbsp;&nbsp;&nbsp;Lock-Up and Open-Up Security</option>
                              <option value="industrial-warehouse-security">&nbsp;&nbsp;&nbsp;Industrial Warehouse Security</option>
                              <option value="static-security-guards">&nbsp;&nbsp;&nbsp;Static Security Guards</option>
                              <option value="uniform-and-covert-security">&nbsp;&nbsp;&nbsp;Uniform and Covert Security</option>
                              <option value="adhoc-security-services">&nbsp;&nbsp;&nbsp;Adhoc Security Services</option>
                              <option value="asset-protection-security">&nbsp;&nbsp;&nbsp;Asset Protection Security</option>
                            
                            {/* Crowd Control Services - Heading as selectable option */}
                            <option value="crowd-control-services" className="service-heading" style={{fontWeight: '700', color: '#1e2247'}}>━━ Crowd Control Services ━━</option>
                              <option value="party-security-guards">&nbsp;&nbsp;&nbsp;Party Security Guards</option>
                              <option value="event-security-guards">&nbsp;&nbsp;&nbsp;Event Security Guards</option>
                              <option value="corporate-event-security">&nbsp;&nbsp;&nbsp;Corporate Event Security</option>
                            
                            {/* Mobile Patrols Services - Heading as selectable option */}
                            <option value="mobile-patrols-services" className="service-heading" style={{fontWeight: '700', color: '#1e2247'}}>━━ Mobile Patrols Services ━━</option>
                              <option value="lock-up-security">&nbsp;&nbsp;&nbsp;Lock-Up Security</option>
                              <option value="security-escort">&nbsp;&nbsp;&nbsp;Security Escort</option>
                              <option value="alarm-response">&nbsp;&nbsp;&nbsp;Alarm Response</option>
                              <option value="mobile-patrols">&nbsp;&nbsp;&nbsp;Mobile Patrols</option>
                              <option value="construction-patrol">&nbsp;&nbsp;&nbsp;Construction Patrol</option>
                            
                            {/* K9 Security Services - Heading as selectable option */}
                            <option value="k9-security-services" className="service-heading" style={{fontWeight: '700', color: '#1e2247'}}>━━ K9 Security Services ━━</option>
                              <option value="k9-security-with-handler">&nbsp;&nbsp;&nbsp;K9 Security With Handler</option>
                            
                            <option value="other-services">Other Services</option>
                          </select>
                        </div>
                      </div>
                      

                      {/* Message */}
                      <div className="col-12 mb-4">
                        <div className="form-group" style={{ position: 'relative' }}>
                          <label style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '18px',
                            background: '#ffffff',
                            padding: '0 8px',
                            color: '#1e2247',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            zIndex: 1
                          }}>
                            Message <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                          </label>
                          <textarea
                            name="message"
                            rows="5"
                            placeholder="Please share your message here.."
                            style={{
                              width: '100%',
                              border: '2px solid rgba(30, 34, 71, 0.25)',
                              borderRadius: '12px',
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              backgroundColor: '#ffffff',
                              transition: 'all 0.3s ease',
                              resize: 'vertical',
                              minHeight: '100px',
                              outline: 'none',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.18)'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#1e2247';
                              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(30, 34, 71, 0.25)';
                              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.18)';
                            }}
                          ></textarea>
                        </div>
                      </div>

                      {/* Terms and Conditions Checkbox */}
                      <div className="col-12 mb-4">
                        <div className="terms-checkbox-container" style={{
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
                            className="terms-checkbox"
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
                          <label className="terms-text" style={{
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

                      {/* reCAPTCHA v2 Checkbox */}
                      <div className="col-12 mb-4">
                        <div 
                          ref={recaptchaRef}
                          style={{
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        ></div>
                      </div>
                     
                      {/* Submit Button */}
                      <div className="col-12">
                        <button
                          type="submit"
                          disabled={loading}
                          style={{
                            width: '100%',
                            background: loading ? '#6c757d' : '#1e2247',
                            color: '#fdc51a',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '16px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)'
                          }}
                          onMouseOver={(e) => {
                            if (!loading) {
                              e.target.style.background = '#fdc51a';
                              e.target.style.color = '#1e2247';
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 20px rgba(253, 197, 26, 0.4)';
                            }
                          }}
                          onMouseOut={(e) => {
                            if (!loading) {
                              e.target.style.background = '#1e2247';
                              e.target.style.color = '#fdc51a';
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.2)';
                            }
                          }}
                        >
                          {loading ? 'Sending Request...' : 'SUBMIT'}
                        </button>
                      </div>
                    </div>
</form>

                </div>
              </div>

              {/* RIGHT COLUMN - REDESIGNED INFO & IMAGES */}
              <div className="col-lg-5">
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  height: '100%'
                }}>
                  
                  {/* Top Image Card */}
                  <div style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '330px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                  }}>
                    <img 
                      src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/7E68B990-A328-4FF2-B123-A332787E94A2_1_105_c.webp"
                      alt="Professional Security Guards"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {/* Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(30, 34, 71, 0.95), transparent)',
                      padding: '30px 25px 20px',
                      color: '#fff'
                    }}>
                      <h4 style={{
                        color: '#fdc51a',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        marginBottom: '8px'
                      }}>Victoria's Trusted Security</h4>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.95rem',
                        margin: 0,
                        lineHeight: '1.5'
                      }}>
                        Over 15+ years protecting businesses across Melbourne
                      </p>
                </div>
              </div>

                  {/* Info Cards Grid - Modern Design with Visible Icons */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px'
                  }}>
                    {/* Card 1 - Licensed & Insured */}
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      border: '2px solid #f8f9fa',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(253, 197, 26, 0.2)';
                      e.currentTarget.style.borderColor = '#fdc51a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = '#f8f9fa';
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f0b90b 100%)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        boxShadow: '0 4px 12px rgba(253, 197, 26, 0.25)'
                      }}>
                        <i className="bi bi-shield-fill-check" style={{ fontSize: '1.8rem', color: '#1e2247', fontWeight: 'bold' }}></i>
                      </div>
                      <h5 style={{
                        color: '#1e2247',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        marginBottom: '6px',
                        lineHeight: '1.3'
                      }}>Licensed & Insured</h5>
                      <p style={{
                        color: '#6c757d',
                        fontSize: '0.875rem',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>Fully Certified</p>
                    </div>

                    {/* Card 2 - 24/7 Availability */}
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      border: '2px solid #f8f9fa',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(253, 197, 26, 0.2)';
                      e.currentTarget.style.borderColor = '#fdc51a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = '#f8f9fa';
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f0b90b 100%)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        boxShadow: '0 4px 12px rgba(253, 197, 26, 0.25)'
                      }}>
                        <i className="bi bi-clock-fill" style={{ fontSize: '1.8rem', color: '#1e2247', fontWeight: 'bold' }}></i>
                      </div>
                      <h5 style={{
                        color: '#1e2247',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        marginBottom: '6px',
                        lineHeight: '1.3'
                      }}>24/7 Availability</h5>
                      <p style={{
                        color: '#6c757d',
                        fontSize: '0.875rem',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>Round the Clock</p>
                    </div>

                    {/* Card 3 - Award-Winning Service */}
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      border: '2px solid #f8f9fa',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(253, 197, 26, 0.2)';
                      e.currentTarget.style.borderColor = '#fdc51a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = '#f8f9fa';
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f0b90b 100%)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        boxShadow: '0 4px 12px rgba(253, 197, 26, 0.25)'
                      }}>
                        <i className="bi bi-award-fill" style={{ fontSize: '1.8rem', color: '#1e2247', fontWeight: 'bold' }}></i>
                      </div>
                      <h5 style={{
                        color: '#1e2247',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        marginBottom: '6px',
                        lineHeight: '1.3'
                      }}>Award-Winning Service</h5>
                      <p style={{
                        color: '#6c757d',
                        fontSize: '0.875rem',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>ISO Certified Excellence</p>
                    </div>

                    {/* Card 4 - Proven Track Record */}
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      border: '2px solid #f8f9fa',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(253, 197, 26, 0.2)';
                      e.currentTarget.style.borderColor = '#fdc51a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = '#f8f9fa';
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f0b90b 100%)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        boxShadow: '0 4px 12px rgba(253, 197, 26, 0.25)'
                      }}>
                        <i className="bi bi-graph-up-arrow" style={{ fontSize: '1.8rem', color: '#1e2247', fontWeight: 'bold' }}></i>
                      </div>
                      <h5 style={{
                        color: '#1e2247',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        marginBottom: '6px',
                        lineHeight: '1.3'
                      }}>Proven Track Record</h5>
                      <p style={{
                        color: '#6c757d',
                        fontSize: '0.875rem',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>99% Customer Satisfaction</p>
                    </div>
                  </div>

                  {/* Contact Info Box */}
                  <div style={{
                    background: 'linear-gradient(135deg, #fdc51a 0%, #e5b116 100%)',
                    borderRadius: '12px',
                    padding: '25px',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      marginBottom: '10px'
                    }}>
                      <i className="bi bi-telephone-fill" style={{ fontSize: '1.3rem', color: '#1e2247' }}></i>
                      <h5 style={{
                        color: '#1e2247',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        margin: 0
                      }}>Need Immediate Assistance?</h5>
                    </div>
                    <p style={{
                      color: '#1e2247',
                      fontSize: '1.8rem',
                      fontWeight: '800',
                      margin: '8px 0',
                      letterSpacing: '1px'
                    }}>1300 731 173</p>
                    <p style={{
                      color: 'rgba(30, 34, 71, 0.8)',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>Available 24/7 for Emergency Response</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        )}
        
<style jsx>{`
          /* Smooth fade-in animation for Thank You message */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Custom styling for service headings in dropdown */
          select option.service-heading {
            background: #1e2247 !important;
            color: #fdc51a !important;
            font-weight: 700 !important;
            text-align: center !important;
                            }

                            @keyframes spin {
                              0% { transform: rotate(0deg); }
                              100% { transform: rotate(360deg); }
                            }

          /* Responsive adjustments */
          @media (max-width: 991px) {
            .col-lg-5 {
              margin-top: 30px;
            }
          }

          /* reCAPTCHA v3 badge positioning */
          .grecaptcha-badge {
            visibility: visible !important;
            opacity: 1 !important;
                            }
                        `}</style>
        <Accreditation />
        <Subscribe />
      </Layout>
    </>
  );
}