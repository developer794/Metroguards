"use client"
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";


// Enhanced MultiSelectDropdown component (same as in Get Quotation page)
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
        onClick={() => setIsOpen(!isOpen)}
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

export default function BookingFormPage() {
    const [loading, setLoading] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);

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
            const res = await fetch("/api/booking", { method: "POST", body: formData });
            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data?.success) {
                throw new Error(data?.error || `Request failed: ${res.status}`);
            }

            toast.success("Message sent successfully!");
            form.reset();
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
                headTitle="Security Services Booking Form - Professional Guard Services"
                breadcrumbTitle="Security Services Booking Form"
                mainTitle="Professional Security Booking Form"
                subtitle="Complete service details • Secure processing • Australia-wide coverage"
                backgroundImage="/assets/img/about/values.jpg"
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
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        color: '#ffffff',
                                        padding: '8px 20px',
                                        borderRadius: '25px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        marginBottom: '20px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)'
                                    }}>
                                        <i className="bi bi-file-earmark-check" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '1.1rem' }}></i>
                                        Professional Security Booking
                                    </div>

                                    <h1 style={{
                                        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        color: '#1e2247',
                                        marginBottom: '20px',
                                        fontFamily: 'serif'
                                    }}>
                                        Security Services <span style={{ color: '#fdc51a' }}>Booking Form</span>
                                    </h1>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#6c757d',
                                        lineHeight: '1.6',
                                        marginBottom: '30px',
                                        maxWidth: '600px',
                                        margin: '0 auto 30px'
                                    }}>
                                        Complete this comprehensive form to book professional security services across Australia. 
                                        Detailed information ensures accurate service delivery and seamless billing.
                                    </p>

                                    <div className="service-highlights" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '20px',
                                        marginBottom: '30px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-shield-check" style={{ color: '#28a745', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Secure Processing</span>
                                                    </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-geo-alt" style={{ color: '#007bff', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Australia-wide</span>
                                                </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-credit-card" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Multiple Payment Options</span>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                </section>

                {/* Booking Form Section */}
                <section className="booking-form-section" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    padding: '60px 0'
                }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
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
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 20px',
                                            boxShadow: '0 8px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-file-earmark-text" style={{ fontSize: '2rem', color: '#1e2247' }}></i>
                                                    </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontWeight: '700',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Complete Booking Information
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            maxWidth: '600px',
                                            margin: '0 auto'
                                        }}>
                                            Please provide detailed information for accurate service delivery and billing. 
                                            Fields marked with <span style={{ color: '#dc3545' }}>*</span> are required.
                                        </p>
                                                </div>

                                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                        {/* honeypot (spam trap) */}
                                        <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                        {/* Client Details Section */}
                                        <div className="form-section mb-5" style={{
                                            background: 'rgba(30, 34, 71, 0.02)',
                                            borderRadius: '15px',
                                            border: '2px solid #eceff3',
                                            padding: '30px',
                                            position: 'relative',
                                            overflow: 'hidden'
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
                                                        background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
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
                                                            Client Details
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            Primary client and site information
                                                        </p>
                                                </div>
                                                    </div>
                                                </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-hash" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Quote Number <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="quoteNo" name="quoteNo" placeholder="Enter quote reference number" />
                                                    </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-calendar-date" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Commencement Date <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="date" className="form-control classic-form-input" id="commencementDate" name="commencementDate" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-person" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Client Name <span style={{ color: '#dc3545' }}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="clientName" name="clientName" required placeholder="Enter client or company name" />
                                                    </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-building" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        ABN <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="abn" name="abn" placeholder="Australian Business Number" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-geo-alt" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Site Name <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="siteName" name="siteName" placeholder="Property or site name" />
                                                    </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-person-check" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Onsite Contact <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="onsiteContact" name="onsiteContact" placeholder="Primary contact person" />
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-house" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Service Address <span style={{ color: '#dc3545' }}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="address" name="address" required placeholder="Complete street address where security services are required" />
                                                    </div>
                                                <div className="col-md-4 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-pin-map" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Suburb <span style={{ color: '#dc3545' }}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="suburb" name="suburb" required placeholder="Suburb" />
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-map" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        State <span style={{ color: '#dc3545' }}>*</span>
                                                    </label>
                                                    <select className="form-control classic-form-input" id="state" name="state" required>
                                                        <option value="">Select State</option>
                                                        <option value="VIC">Victoria (VIC)</option>
                                                        <option value="NSW">New South Wales (NSW)</option>
                                                        <option value="QLD">Queensland (QLD)</option>
                                                        <option value="SA">South Australia (SA)</option>
                                                        <option value="WA">Western Australia (WA)</option>
                                                        <option value="TAS">Tasmania (TAS)</option>
                                                        <option value="NT">Northern Territory (NT)</option>
                                                        <option value="ACT">Australian Capital Territory (ACT)</option>
                                                    </select>
                                                    </div>
                                                <div className="col-md-4 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-mailbox" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Post Code <span style={{ color: '#dc3545' }}>*</span>
                                                    </label>
                                                    <input type="text" className="form-control classic-form-input" id="postCode" name="postCode" required placeholder="Post code" />
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-telephone" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Premise Phone <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="tel" className="form-control classic-form-input" id="premisePhone" name="premisePhone" placeholder="Site phone number" />
                                                    </div>
                                                <div className="col-md-4 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-printer" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Fax Number <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>(Optional)</span>
                                                    </label>
                                                    <input type="tel" className="form-control classic-form-input" id="fax" name="fax" placeholder="Fax number" />
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <label className="classic-form-label">
                                                        <i className="bi bi-envelope" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                        Email Address <span style={{ color: '#dc3545' }}>*</span>
                                                    </label>
                                                    <input type="email" className="form-control classic-form-input" id="clientEmail" name="clientEmail" required placeholder="Primary contact email" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Invoicing Details */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>INVOICING DETAILS</h4>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Client Name</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceClientName" name="invoiceClientName" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Keys</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="keys" name="keys" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Accounts Contact</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="accountsContact" name="accountsContact" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>ABN</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceABN" name="invoiceABN" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Phone</label>
                                                        <input type="tel" className="form-control p-3 glassmorphism-input" id="invoicePhone" name="invoicePhone" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Address</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceAddress" name="invoiceAddress" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Suburb</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceSuburb" name="invoiceSuburb" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>State</label>
                                                        <select className="form-control p-3 glassmorphism-input" id="invoiceState" name="invoiceState">
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
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Post Code</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoicePostCode" name="invoicePostCode" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Email Address</label>
                                                        <input type="email" className="form-control p-3 glassmorphism-input" id="invoiceEmail" name="invoiceEmail" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Services Required - Now using MultiSelectDropdown */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Services Required Details</h4>
                                            <div className="row">
                                                <div className="col-12 mb-4">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Type of Service Required</label>
                                                        <MultiSelectDropdown
                                                            options={serviceOptions}
                                                            selectedValues={selectedServices}
                                                            onChange={setSelectedServices}
                                                            placeholder="Select services required..."
                                                            name="serviceType[]"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>From Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="fromDate" name="fromDate" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>From Time</label>
                                                        <input type="time" className="form-control p-3 glassmorphism-input" id="fromTime" name="fromTime" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>To Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="toDate" name="toDate" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>To Time</label>
                                                        <input type="time" className="form-control p-3 glassmorphism-input" id="toTime" name="toTime" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Guard Required</label>
                                                        <input type="number" className="form-control p-3 glassmorphism-input" id="guardRequired" name="guardRequired" min="1" defaultValue="1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Site Brief/Instructions */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>SITE BRIEF/SITE INSTRUCTIONS</h4>
                                            <div className="form-group">
                                                <textarea className="form-control p-3 glassmorphism-input" rows="5" id="siteBrief" name="siteBrief" style={{ color: "#fff" }}></textarea>
                                            </div>
                                        </div>

                                        {/* Payment */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Pay Via:</h4>
                                            <p className="mb-4" style={{color: 'rgba(255,255,255,0.7)'}}>To be completed by the customer...</p>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-check d-flex align-items-center mb-3">
                                                        <input className="form-check-input me-2" type="radio" name="paymentMethod" id="creditCard" value="creditCard" style={{width: '18px', height: '18px'}} />
                                                        <label className="form-check-label" style={{ color: "#fff" }} htmlFor="creditCard">Credit Card</label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <input className="form-check-input me-2" type="radio" name="paymentMethod" id="eft" value="eft" style={{width: '18px', height: '18px'}} />
                                                        <label className="form-check-label" style={{ color: "#fff" }} htmlFor="eft">EFT</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="credit-card-details">
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Customer</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="customerName" name="customerName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Trading Name</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="tradingName" name="tradingName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Cardholder Name</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="cardholderName" name="cardholderName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Card Type</label>
                                                            <div className="form-check d-flex align-items-center mb-2">
                                                                <input className="form-check-input me-2" type="radio" name="cardType" id="masterCard" value="MasterCard" style={{width: '18px', height: '18px'}} />
                                                                <label className="form-check-label" style={{ color: "#fff" }} htmlFor="masterCard">Master Card</label>
                                                            </div>
                                                            <div className="form-check d-flex align-items-center mb-2">
                                                                <input className="form-check-input me-2" type="radio" name="cardType" id="visa" value="Visa" style={{width: '18px', height: '18px'}} />
                                                                <label className="form-check-label" style={{ color: "#fff" }} htmlFor="visa">Visa</label>
                                                            </div>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-2" type="radio" name="cardType" id="amex" value="Amex" style={{width: '18px', height: '18px'}} />
                                                                <label className="form-check-label" style={{ color: "#fff" }} htmlFor="amex">Amex</label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Card Number</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="cardNumber" name="cardNumber" inputMode="numeric" autoComplete="cc-number" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>CVV Number</label>
                                                                <input type="text" className="form-control p-3 glassmorphism-input" id="cvv" name="cvv" inputMode="numeric" autoComplete="cc-csc" />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Month / Year</label>
                                                                <input type="text" className="form-control p-3 glassmorphism-input" id="expiry" name="expiry" placeholder="MM/YY" autoComplete="cc-exp" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Signature</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="signature" name="signature" />
                                                        </div>
                                                        <div className="form-check d-flex align-items-start mb-3">
                                                            <input className="form-check-input me-2 mt-1" type="checkbox" id="authorization" name="authorization" style={{width: '18px', height: '18px'}} />
                                                            <label className="form-check-label" style={{ color: "#fff", textAlign: 'left' }} htmlFor="authorization">
                                                                I, the undersigned, confirm that I authorise Metropolitan Guard Services...
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Additional Information/Comments</h4>
                                            <div className="form-group">
                                                <textarea className="form-control p-3 glassmorphism-input" rows="5" id="additionalInfo" name="additionalInfo" style={{ color: "#fff" }}></textarea>
                                            </div>
                                        </div>

                                        {/* Terms & Submit */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Signature</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="signature1" name="signature1" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="date1" name="date1" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit Section */}
                                        <div className="text-center mt-5">
                                            <div style={{
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                border: '2px solid rgba(253, 197, 26, 0.1)',
                                                marginBottom: '20px'
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)'
                                                }}>
                                                    <i className="bi bi-shield-check" style={{ fontSize: '1.5rem', color: '#ffffff' }}></i>
                                                </div>
                                                <h5 style={{ color: '#1e2247', fontWeight: '600', marginBottom: '10px' }}>
                                                    Secure Submission
                                                </h5>
                                                <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                    Your booking information will be processed securely. We'll contact you within 2 hours to confirm your security service deployment.
                                                </p>
                                            </div>
                                            
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                style={{ 
                                                    background: loading ? '#6c757d' : 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                                    color: '#ffffff',
                                                    borderRadius: '12px',
                                                    padding: '18px 50px',
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    border: 'none',
                                                    cursor: loading ? 'not-allowed' : 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '12px',
                                                    margin: '0 auto',
                                                    minWidth: '250px',
                                                    boxShadow: loading ? 'none' : '0 6px 20px rgba(30, 34, 71, 0.3)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {loading ? (
                                                    <>
                                                        <div style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                                            borderTop: '2px solid #ffffff',
                                                            borderRadius: '50%',
                                                            animation: 'spin 1s linear infinite'
                                                        }}></div>
                                                        Processing Booking...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-file-earmark-check"></i>
                                                        Submit Booking Form
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    /* Spinner animation */
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
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

                    textarea.classic-form-input {
                        resize: vertical !important;
                        min-height: 120px !important;
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

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .service-highlights {
                            flex-direction: column !important;
                            gap: 10px !important;
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

                    .glassmorphism-input:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                    }

                    /* Update section headers in glassmorphism cards */
                    .glassmorphism-card h4 {
                        color: #1e2247 !important;
                        font-family: serif !important;
                        font-weight: 600 !important;
                        margin-bottom: 20px !important;
                        padding-bottom: 10px !important;
                        border-bottom: 2px solid #eceff3 !important;
                    }

                    /* Update labels in glassmorphism sections */
                    .glassmorphism-card .form-label {
                        color: #1e2247 !important;
                        font-weight: 500 !important;
                        margin-bottom: 8px !important;
                        font-size: 0.95rem !important;
                    }

                    /* Update radio and checkbox styling */
                    .form-check-input {
                        width: 18px !important;
                        height: 18px !important;
                        border-radius: 4px !important;
                        border: 2px solid #eceff3 !important;
                        background-color: #fafafa !important;
                    }

                    .form-check-input:checked {
                        background-color: #fdc51a !important;
                        border-color: #fdc51a !important;
                    }

                    .form-check-input:focus {
                        border-color: #fdc51a !important;
                        box-shadow: 0 0 0 0.25rem rgba(253, 197, 26, 0.25) !important;
                    }

                    .form-check-label {
                        color: #1e2247 !important;
                        margin-left: 8px !important;
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

                    textarea.glassmorphism-input {
                        resize: vertical !important;
                        min-height: 120px !important;
                    }

                    .glassmorphism-card-with-bg {
                        background: linear-gradient(135deg, rgba(30, 34, 71, 0.9) 0%, rgba(15, 18, 41, 0.95) 100%);
                        backdrop-filter: blur(20px);
                        border-radius: 15px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    }
                    
                    /* Multi-select dropdown styles updated for classic design */
                    .multi-select-dropdown {
                        position: relative;
                        width: 100%;
                    }

                    .dropdown-toggle {
                        padding: 12px 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #fafafa !important;
                        border: 2px solid #eceff3 !important;
                        color: #495057 !important;
                        transition: all 0.3s ease;
                        min-height: 50px;
                        backdrop-filter: none !important;
                    }

                    .dropdown-toggle:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                    }

                    .dropdown-toggle:focus,
                    .dropdown-toggle.open {
                        border-color: #fdc51a !important;
                        background-color: #ffffff !important;
                        box-shadow: 0 0 0 3px rgba(253, 197, 26, 0.1) !important;
                    }

                    .selected-text {
                        flex: 1;
                        text-align: left;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: #495057 !important;
                    }

                    .dropdown-arrow {
                        font-size: 12px;
                        transition: transform 0.3s ease;
                        margin-left: 10px;
                        color: #6c757d !important;
                    }

                    .dropdown-toggle.open .dropdown-arrow {
                        transform: rotate(180deg);
                    }

                    .dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: #ffffff !important;
                        border: 2px solid #eceff3 !important;
                        border-radius: 8px;
                        margin-top: 5px;
                        max-height: 350px;
                        overflow: hidden;
                        z-index: 1000;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
                        backdrop-filter: none !important;
                    }

                    .dropdown-search {
                        padding: 10px;
                        border-bottom: 1px solid #eceff3;
                    }

                    .search-input {
                        width: 100%;
                        padding: 8px 12px;
                        border: 2px solid #eceff3 !important;
                        border-radius: 6px;
                        background: #fafafa !important;
                        color: #495057 !important;
                        font-size: 14px;
                        outline: none;
                    }

                    .search-input::placeholder {
                        color: #6c757d !important;
                    }

                    .search-input:focus {
                        border-color: #fdc51a !important;
                        background-color: #ffffff !important;
                        box-shadow: 0 0 0 2px rgba(253, 197, 26, 0.1) !important;
                    }

                    .dropdown-options {
                        max-height: 250px;
                        overflow-y: auto;
                    }

                    .dropdown-item {
                        display: flex;
                        align-items: center;
                        padding: 12px 15px;
                        cursor: pointer;
                        color: #495057 !important;
                        transition: background 0.2s ease;
                        margin: 0;
                        border: none;
                    }

                    .dropdown-item:hover {
                        background: rgba(253, 197, 26, 0.1) !important;
                    }

                    .dropdown-item input[type="checkbox"] {
                        margin-right: 12px;
                        accent-color: #fdc51a;
                        width: 16px;
                        height: 16px;
                    }

                    .checkbox-label {
                        flex: 1;
                        font-size: 14px;
                        color: #495057 !important;
                    }

                    .no-options {
                        padding: 20px 15px;
                        text-align: center;
                        color: #6c757d !important;
                        font-style: italic;
                    }

                    .dropdown-footer {
                        border-top: 1px solid #eceff3;
                        padding: 10px 15px;
                    }

                    .clear-all-btn {
                        background: rgba(253, 197, 26, 0.1) !important;
                        border: 2px solid rgba(253, 197, 26, 0.3) !important;
                        color: #f39c12 !important;
                        padding: 6px 12px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        transition: all 0.2s ease;
                        width: 100%;
                    }

                    .clear-all-btn:hover {
                        background: rgba(253, 197, 26, 0.2) !important;
                        border-color: rgba(253, 197, 26, 0.5) !important;
                    }

                    /* Custom scrollbar for classic design */
                    .dropdown-options::-webkit-scrollbar {
                        width: 6px;
                    }

                    .dropdown-options::-webkit-scrollbar-track {
                        background: #f8f9fa;
                    }

                    .dropdown-options::-webkit-scrollbar-thumb {
                        background: rgba(253, 197, 26, 0.5);
                        border-radius: 3px;
                    }

                    .dropdown-options::-webkit-scrollbar-thumb:hover {
                        background: rgba(253, 197, 26, 0.7);
                    }
                `}</style>
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}