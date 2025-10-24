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
          console.log("Dropdown open?", !isOpen);
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
    { value: "alarm-response-unit", label: "Alarm Response Unit" },
    { value: "concierge-services", label: "Concierge Services" },
    { value: "crowd-controller", label: "Crowd Controller" },
    { value: "guard-with-dog", label: "Guard with Dog" },
    { value: "k9-response-unit", label: "K9 Response Unit" },
    { value: "security-officers", label: "Security Officers" },
    { value: "mobile-security-patrols", label: "Mobile Security Patrols" },
    { value: "uniformed-guards", label: "Uniformed Guards" },
    { value: "construction-site-security", label: "Construction Site Security" },
    { value: "loss-prevention-officer", label: "Loss Prevention Officer" },
    { value: "party-security", label: "Party Security" },
    { value: "event-security", label: "Event Security" },
    { value: "covid-marshal", label: "COVID Marshal" },
    { value: "other-services", label: "Other Services" }
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/quotation", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      toast.success("Message sent successfully!");
      form.reset();
      setSelectedIndustries([]);
      setSelectedServices([]);
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
        headTitle="Get Quotation - Professional Security Services"
        breadcrumbTitle="GET QUOTATION"
        mainTitle="Request Your Quote"
        subtitle="Get a customized security solution proposal tailored to your specific needs and requirements"
        backgroundImage="/assets/img/about/values.jpg"
      >
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
                    Get Your <span style={{ color: '#fdc51a' }}>Custom</span> Quote
                  </h1>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    marginBottom: '30px'
                  }}>
                    Professional security solutions tailored to your specific requirements. 
                    Get a detailed proposal in minutes.
                  </p>
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
                    <i className="bi bi-calculator" style={{
                      fontSize: '4rem',
                      marginBottom: '20px',
                      display: 'block',
                      color: '#fdc51a'
                    }}></i>
                    <h3 style={{ fontWeight: '700', marginBottom: '15px' }}>Instant Quotation</h3>
                    <p style={{ margin: '0', fontSize: '1rem', opacity: '0.9' }}>
                      Fast, accurate, and comprehensive security service quotes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*===== Enhanced Quotation Form Section =====*/}
        <div className="quotation-section section-padding" style={{
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
                    <i className="bi bi-clipboard-check" style={{ 
                      color: '#fdc51a', 
                      marginRight: '8px',
                      fontSize: '1rem'
                    }}></i>
                    Get In Touch Now
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    marginBottom: '15px',
                    fontFamily: 'serif'
                  }}>
                    Professional <span style={{ color: '#fdc51a' }}>Quotation</span> Request
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Complete the form below to receive a detailed security service proposal
                  </p>
                </div>
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="quotation-form" data-aos="fade-up" data-aos-delay="200" style={{
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
                      <i className="bi bi-file-text" style={{ 
                        color: '#1e2247', 
                        fontSize: '1.5rem' 
                      }}></i>
                    </div>
                    <h4 style={{
                      color: '#1e2247',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>Request Quote Form</h4>
                    <p style={{
                      color: '#6c757d',
                      margin: '0',
                      fontSize: '0.95rem'
                    }}>Fill in your details for a personalized security solution</p>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
  {/* honeypot (spam trap) */}
  <input
    type="text"
    name="companyWebsite"
    tabIndex="-1"
    autoComplete="off"
    style={{ display: "none" }}
  />

                    <div className="row">
                      {/* Your Name */}
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
                            name="name"
                            type="text"
                            className="form-control classic-form-input"
                            placeholder="Enter your full name"
                            required
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

                      {/* Email */}
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
                            Your Email <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            className="form-control classic-form-input"
                            placeholder="Enter your email address"
                            required
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

                      {/* Phone */}
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
                            name="phone"
                            type="tel"
                            className="form-control classic-form-input"
                            placeholder="Enter your phone number"
                            required
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

                      {/* Service Date */}
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
                            <i className="bi bi-calendar-date" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                            Service Date <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                          </label>
                          <input
                            name="serviceDate"
                            type="date"
                            className="form-control classic-form-input"
                            required
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

                      {/* Location */}
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
                            <i className="bi bi-geo-alt" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                            Service Location <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                          </label>
                          <input
                            name="location"
                            type="text"
                            className="form-control classic-form-input"
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

                      {/* Industry Dropdown */}
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
                            <i className="bi bi-building" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                            Industry <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                          </label>
                          <select
                            name="industry[]" 
                            className="form-control classic-form-input"
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
                            <option value="">Select Industry</option>
                            <option value="developer">Developer</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="property-management">Property Management</option>
                            <option value="individual">Individual</option>
                            <option value="holding-company">Holding Company</option>
                            <option value="maritime">Maritime</option>
                            <option value="education">Education</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="government">Government</option>
                            <option value="cultural">Cultural</option>
                            <option value="cre">CRE</option>
                            <option value="finance">Finance</option>
                            <option value="aviation">Aviation</option>
                            <option value="fm-partnership">FM Partnership</option>
                            <option value="public-transport">Public Transport</option>
                            <option value="custodial-court">Custodial / Court</option>
                            <option value="critical-infrastructure">Critical Infrastructure</option>
                            <option value="telecommunication">Telecommunication</option>
                            <option value="it">IT</option>
                            <option value="banking">Banking</option>
                            <option value="commercial-real-estate">Commercial Real Estate</option>
                            <option value="defense">Defense</option>
                            <option value="health-welfare">Health / Welfare</option>
                            <option value="manufacturing-petrochemical">Manufacturing / Petrochemical</option>
                            <option value="mining-resources">Mining / Resources</option>
                            <option value="overheads">Overheads</option>
                            <option value="patrols">Patrols</option>
                            <option value="retail">Retail</option>
                            <option value="transport">Transport</option>
                            <option value="utilities-telecommunication-media">Utilities / Telecommunication / Media</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Service Dropdown */}
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
                            Type of Service Required <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
                          </label>
                          <select
                            name="service[]"
                            className="form-control classic-form-input"
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
                            <option value="alarm-response-unit">Alarm Response Unit</option>
                            <option value="concierge-services">Concierge Services</option>
                            <option value="crowd-controller">Crowd Controller</option>
                            <option value="guard-with-dog">Guard with Dog</option>
                            <option value="k9-response-unit">K9 Response Unit</option>
                            <option value="security-officers">Security Officers</option>
                            <option value="mobile-security-patrols">Mobile Security Patrols</option>
                            <option value="uniformed-guards">Uniformed Guards</option>
                            <option value="construction-site-security">Construction Site Security</option>
                            <option value="loss-prevention-officer">Loss Prevention Officer</option>
                            <option value="party-security">Party Security</option>
                            <option value="event-security">Event Security</option>
                            <option value="covid-marshal">COVID Marshal</option>
                            <option value="other-services">Other Services</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
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
                            Your Message <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                          </label>
                          <textarea
                            name="message"
                            className="form-control classic-form-input"
                            rows="5"
                            placeholder="Tell us more about your security requirements, timeline, special needs, or any specific questions..."
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
                          ></textarea>
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
                              }}>Fast Response Guarantee</h6>
                              <p style={{
                                color: '#6c757d',
                                margin: '0',
                                fontSize: '0.85rem',
                                lineHeight: '1.5'
                              }}>
                                We'll respond to your quotation request within 2 hours during business hours. 
                                Your information is secure and will never be shared with third parties.
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
                              Sending Request...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-calculator"></i>
                              Get Quotation
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

                            .form-label {
                              color: #1e2247 !important;
                              font-weight: 500 !important;
                              margin-bottom: 8px !important;
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
        <Accreditation />
        <Subscribe />
      </Layout>
    </>
  );
}