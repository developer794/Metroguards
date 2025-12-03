"use client"
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";


// Enhanced MultiSelectDropdown component with category grouping
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

    // Group filtered options by category
    const groupedOptions = filteredOptions.reduce((acc, option) => {
        const category = option.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(option);
        return acc;
    }, {});

    const selectedLabels = options
        .filter(option => selectedValues.includes(option.value))
        .map(option => option.label)
        .join(", ");

    const displayText = selectedValues.length > 0
        ? `${selectedValues.length} service${selectedValues.length > 1 ? 's' : ''} selected`
        : placeholder;

    return (
        <div className="multi-select-dropdown" ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
            <div
                className={`dropdown-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '12px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#fafafa',
                    border: isOpen ? '2px solid #fdc51a' : '2px solid #eceff3',
                    color: '#495057',
                    transition: 'all 0.3s ease',
                    minHeight: '50px',
                    boxShadow: isOpen ? '0 0 0 3px rgba(253, 197, 26, 0.1)' : 'none'
                }}
            >
                <span style={{
                    flex: 1,
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: selectedValues.length > 0 ? '#495057' : '#6c757d'
                }} title={selectedLabels || placeholder}>
                    {displayText}
                </span>
                <span style={{
                    fontSize: '12px',
                    marginLeft: '10px',
                    color: '#6c757d',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    display: 'inline-block'
                }}>▼</span>
            </div>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#ffffff',
                    border: '2px solid #eceff3',
                    borderRadius: '8px',
                    marginTop: '5px',
                    maxHeight: '350px',
                    overflow: 'hidden',
                    zIndex: 10000,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                }}>
                    <div style={{
                        padding: '10px',
                        borderBottom: '1px solid #eceff3'
                    }}>
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '2px solid #eceff3',
                                borderRadius: '6px',
                                background: '#fafafa',
                                color: '#495057',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}>
                        {Object.keys(groupedOptions).length > 0 ? (
                            Object.entries(groupedOptions).map(([category, categoryOptions]) => (
                                <div key={category} style={{ marginBottom: '10px' }}>
                                    {/* Category Header */}
                                    <div style={{
                                        padding: '10px 15px',
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        color: '#fdc51a',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 1
                                    }}>
                                        {category}
                                    </div>
                                    
                                    {/* Category Options */}
                                    {categoryOptions.map(option => (
                                        <label key={option.value} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '12px 15px 12px 25px',
                                            cursor: 'pointer',
                                            color: '#495057',
                                            transition: 'background 0.2s ease',
                                            margin: 0,
                                            background: selectedValues.includes(option.value) ? 'rgba(253, 197, 26, 0.05)' : 'transparent'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = selectedValues.includes(option.value) ? 'rgba(253, 197, 26, 0.05)' : 'transparent'}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedValues.includes(option.value)}
                                                onChange={() => toggleOption(option.value)}
                                                style={{
                                                    marginRight: '12px',
                                                    accentColor: '#fdc51a',
                                                    width: '16px',
                                                    height: '16px',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                            <span style={{ flex: 1, fontSize: '13px' }}>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div style={{
                                padding: '20px 15px',
                                textAlign: 'center',
                                color: '#6c757d',
                                fontStyle: 'italic'
                            }}>No services found</div>
                        )}
                    </div>

                    {selectedValues.length > 0 && (
                        <div style={{
                            borderTop: '1px solid #eceff3',
                            padding: '10px 15px'
                        }}>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onChange([]);
                                }}
                                style={{
                                    background: 'rgba(253, 197, 26, 0.1)',
                                    border: '2px solid rgba(253, 197, 26, 0.3)',
                                    color: '#f39c12',
                                    padding: '6px 12px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    transition: 'all 0.2s ease',
                                    width: '100%',
                                    fontWeight: '600'
                                }}
                            >
                                Clear All ({selectedValues.length})
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

    const serviceOptions = [
        // Security Guard Services
        { value: "building-security-guards", label: "Building Security Guards", category: "Security Guards" },
        { value: "construction-security-guards", label: "Construction Security Guards", category: "Security Guards" },
        { value: "shopping-centre-security-guards", label: "Shopping Centre Security Guards", category: "Security Guards" },
        { value: "hospital-security-guards", label: "Hospital Security Guards", category: "Security Guards" },
        { value: "gatehouse-security-guards", label: "Gatehouse Security Guards", category: "Security Guards" },
        { value: "educational-institution-security", label: "Educational Institution Security", category: "Security Guards" },
        { value: "corporate-security-guards", label: "Corporate Security Guards", category: "Security Guards" },
        { value: "retail-security-guards", label: "Retail Security Guards", category: "Security Guards" },
        { value: "loss-prevention-security-guards", label: "Loss Prevention Security Guards", category: "Security Guards" },
        { value: "concierge-security-guards", label: "Concierge Security Guards", category: "Security Guards" },
        { value: "lock-up-and-open-up-security", label: "Lock-Up and Open-Up Security", category: "Security Guards" },
        { value: "industrial-warehouse-security", label: "Industrial Warehouse Security", category: "Security Guards" },
        { value: "static-security-guards", label: "Static Security Guards", category: "Security Guards" },
        { value: "uniform-and-covert-security", label: "Uniform and Covert Security", category: "Security Guards" },
        { value: "adhoc-security-services", label: "Adhoc Security Services", category: "Security Guards" },
        { value: "asset-protection-security", label: "Asset Protection Security", category: "Security Guards" },
        
        // Crowd Control Services
        { value: "party-security-guards", label: "Party Security Guards", category: "Crowd Control" },
        { value: "event-security-guards", label: "Event Security Guards", category: "Crowd Control" },
        { value: "corporate-event-security", label: "Corporate Event Security", category: "Crowd Control" },
        
        // Mobile Patrol Services
        { value: "lock-up-security", label: "Lock-Up Security", category: "Mobile Patrols" },
        { value: "security-escort", label: "Security Escort", category: "Mobile Patrols" },
        { value: "alarm-response", label: "Alarm Response", category: "Mobile Patrols" },
        { value: "mobile-patrols", label: "Mobile Patrols", category: "Mobile Patrols" },
        { value: "construction-patrol", label: "Construction Patrol", category: "Mobile Patrols" },
        
        // K9 Security Services
        { value: "k9-security-with-handler", label: "K9 Security With Handler", category: "K9 Security" },
        
        // Other Services
        { value: "other-services", label: "Other Services", category: "Other" }
    ];

    async function handleSubmit(e) {
        e.preventDefault();

        // Check Terms and Conditions
        if (!agreedToTerms) {
            toast.error("Please accept the Terms and Conditions to continue");
            return;
        }

        // Check if at least one service is selected
        if (selectedServices.length === 0) {
            toast.error("Please select at least one service");
            return;
        }

        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/booking", { method: "POST", body: formData });
            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data?.success) {
                throw new Error(data?.error || `Request failed: ${res.status}`);
            }

            // Show success page instead of toast
            setIsSubmitted(true);
            form.reset();
            setSelectedServices([]);
            setAgreedToTerms(false);
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
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Uniformed%20&%20Covert%20Secuirty%20Guards/250DB2AD-5550-45A8-A9FE-940905978EFD_1_105_c.webp"
            >

                {isSubmitted ? (
                    /* ===== Success Thank You Page ===== */
                    <div className="booking-thank-you" style={{
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
                                        <h1 style={{
                                            color: '#1e2247',
                                            fontSize: '2.8rem',
                                            fontWeight: '800',
                                            marginBottom: '20px',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>Thank You!</h1>

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
                                        }}>Your Booking Request Has Been Submitted Successfully!</h3>

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
                                            We've received your booking request and our team will review it carefully.
                                            A confirmation email with your booking details (PDF attached) has been sent to your email address.
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
                                                        Our operations team will review your booking details
                                                    </p>
                                                </div>
                                                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>3.</span>
                                                    <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                                                        We'll contact you within 24 hours to confirm service details
                                                    </p>
                                                </div>
                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>4.</span>
                                                    <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                                                        Your professional security team will be assigned and deployed
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
                                                Need immediate assistance? Call us at{' '}
                                                <a href="tel:1300661378" style={{ color: '#1e2247', fontWeight: '700', textDecoration: 'none' }}>
                                                    1300 661 378
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
                                                <div className="form-section mb-5" style={{
                                                    background: 'rgba(30, 34, 71, 0.02)',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    padding: '30px'
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
                                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                marginRight: '15px',
                                                                boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
                                                            }}>
                                                                <i className="bi bi-receipt" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                            </div>
                                                            <div>
                                                                <h4 style={{
                                                                    color: '#1e2247',
                                                                    fontWeight: '600',
                                                                    margin: '0',
                                                                    fontFamily: 'serif'
                                                                }}>
                                                                    Invoicing Details
                                                                </h4>
                                                                <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                                    Billing and invoice information
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">Client Name</label>
                                                            <input type="text" className="form-control classic-form-input" id="invoiceClientName" name="invoiceClientName" />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">Keys</label>
                                                            <input type="text" className="form-control classic-form-input" id="keys" name="keys" />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">Accounts Contact</label>
                                                            <input type="text" className="form-control classic-form-input" id="accountsContact" name="accountsContact" />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">ABN</label>
                                                            <input type="text" className="form-control classic-form-input" id="invoiceABN" name="invoiceABN" />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">Phone</label>
                                                            <input type="tel" className="form-control classic-form-input" id="invoicePhone" name="invoicePhone" />
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className="classic-form-label">Address</label>
                                                            <input type="text" className="form-control classic-form-input" id="invoiceAddress" name="invoiceAddress" />
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="classic-form-label">Suburb</label>
                                                            <input type="text" className="form-control classic-form-input" id="invoiceSuburb" name="invoiceSuburb" />
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="classic-form-label">State</label>
                                                            <select className="form-control classic-form-input" id="invoiceState" name="invoiceState">
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
                                                        <div className="col-md-4 mb-3">
                                                            <label className="classic-form-label">Post Code</label>
                                                            <input type="text" className="form-control classic-form-input" id="invoicePostCode" name="invoicePostCode" />
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className="classic-form-label">Email Address</label>
                                                            <input type="email" className="form-control classic-form-input" id="invoiceEmail" name="invoiceEmail" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Services Required Section with Working Dropdown */}
                                                <div className="form-section mb-5" style={{
                                                    background: 'rgba(30, 34, 71, 0.02)',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    padding: '30px'
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
                                                                background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                marginRight: '15px',
                                                                boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                            }}>
                                                                <i className="bi bi-shield-check" style={{ fontSize: '1.3rem', color: '#1e2247' }}></i>
                                                            </div>
                                                            <div>
                                                                <h4 style={{
                                                                    color: '#1e2247',
                                                                    fontWeight: '600',
                                                                    margin: '0',
                                                                    fontFamily: 'serif'
                                                                }}>
                                                                    Services Required Details
                                                                </h4>
                                                                <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                                    Select services and schedule
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-12 mb-4">
                                                            <label className="classic-form-label">
                                                                <i className="bi bi-list-check" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                                Type of Service Required <span style={{ color: '#dc3545' }}>*</span>
                                                            </label>
                                                            <MultiSelectDropdown
                                                                options={serviceOptions}
                                                                selectedValues={selectedServices}
                                                                onChange={setSelectedServices}
                                                                placeholder="Click to select services..."
                                                                name="serviceType[]"
                                                            />
                                                            {selectedServices.length > 0 && (
                                                                <div style={{
                                                                    marginTop: '10px',
                                                                    padding: '10px',
                                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                                    borderRadius: '6px',
                                                                    fontSize: '0.85rem',
                                                                    color: '#495057'
                                                                }}>
                                                                    <strong>Selected:</strong> {serviceOptions
                                                                        .filter(opt => selectedServices.includes(opt.value))
                                                                        .map(opt => opt.label)
                                                                        .join(', ')}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="col-md-3 mb-3">
                                                            <label className="classic-form-label">From Date</label>
                                                            <input type="date" className="form-control classic-form-input" id="fromDate" name="fromDate" />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="classic-form-label">From Time</label>
                                                            <input type="time" className="form-control classic-form-input" id="fromTime" name="fromTime" />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="classic-form-label">To Date</label>
                                                            <input type="date" className="form-control classic-form-input" id="toDate" name="toDate" />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="classic-form-label">To Time</label>
                                                            <input type="time" className="form-control classic-form-input" id="toTime" name="toTime" />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="classic-form-label">Guards Required</label>
                                                            <input type="number" className="form-control classic-form-input" id="guardRequired" name="guardRequired" min="1" defaultValue="1" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Site Brief/Instructions */}
                                                <div className="form-section mb-5" style={{
                                                    background: 'rgba(30, 34, 71, 0.02)',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    padding: '30px'
                                                }}>
                                                    <h4 style={{ color: '#1e2247', marginBottom: '20px', fontFamily: 'serif' }}>
                                                        <i className="bi bi-clipboard-check" style={{ marginRight: '10px', color: '#fdc51a' }}></i>
                                                        Site Brief / Site Instructions
                                                    </h4>
                                                    <textarea className="form-control classic-form-input" rows="5" id="siteBrief" name="siteBrief" placeholder="Provide detailed instructions for security personnel..."></textarea>
                                                </div>

                                                {/* Payment Section */}
                                                <div className="form-section mb-5" style={{
                                                    background: 'rgba(30, 34, 71, 0.02)',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    padding: '30px'
                                                }}>
                                                    <h4 style={{ color: '#1e2247', marginBottom: '20px', fontFamily: 'serif' }}>
                                                        <i className="bi bi-credit-card" style={{ marginRight: '10px', color: '#fdc51a' }}></i>
                                                        Payment Information
                                                    </h4>
                                                    <p style={{ color: '#6c757d', marginBottom: '20px' }}>To be completed by the customer...</p>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-check mb-3" style={{ padding: '10px', background: 'rgba(253, 197, 26, 0.05)', borderRadius: '8px' }}>
                                                                <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" value="creditCard" style={{ width: '18px', height: '18px', marginRight: '10px' }} />
                                                                <label className="form-check-label" style={{ color: "#1e2247", fontWeight: '500' }} htmlFor="creditCard">
                                                                    <i className="bi bi-credit-card-2-front" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                                    Credit Card
                                                                </label>
                                                            </div>
                                                            <div className="form-check" style={{ padding: '10px', background: 'rgba(253, 197, 26, 0.05)', borderRadius: '8px' }}>
                                                                <input className="form-check-input" type="radio" name="paymentMethod" id="eft" value="eft" style={{ width: '18px', height: '18px', marginRight: '10px' }} />
                                                                <label className="form-check-label" style={{ color: "#1e2247", fontWeight: '500' }} htmlFor="eft">
                                                                    <i className="bi bi-bank" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                                                    EFT / Bank Transfer
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="classic-form-label">Customer Name</label>
                                                                <input type="text" className="form-control classic-form-input" id="customerName" name="customerName" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="classic-form-label">Trading Name</label>
                                                                <input type="text" className="form-control classic-form-input" id="tradingName" name="tradingName" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="classic-form-label">Cardholder Name</label>
                                                                <input type="text" className="form-control classic-form-input" id="cardholderName" name="cardholderName" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="classic-form-label">Card Type</label>
                                                                <div className="d-flex gap-3">
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" name="cardType" id="masterCard" value="MasterCard" />
                                                                        <label className="form-check-label" htmlFor="masterCard">MasterCard</label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" name="cardType" id="visa" value="Visa" />
                                                                        <label className="form-check-label" htmlFor="visa">Visa</label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" name="cardType" id="amex" value="Amex" />
                                                                        <label className="form-check-label" htmlFor="amex">Amex</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="classic-form-label">Card Number</label>
                                                                <input type="text" className="form-control classic-form-input" id="cardNumber" name="cardNumber" inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="classic-form-label">CVV Number</label>
                                                                    <input type="text" className="form-control classic-form-input" id="cvv" name="cvv" inputMode="numeric" autoComplete="cc-csc" placeholder="123" maxLength="4" />
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="classic-form-label">Expiry (MM/YY)</label>
                                                                    <input type="text" className="form-control classic-form-input" id="expiry" name="expiry" placeholder="MM/YY" autoComplete="cc-exp" maxLength="5" />
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="classic-form-label">Signature</label>
                                                                <input type="text" className="form-control classic-form-input" id="signature" name="signature" placeholder="Type your full name" />
                                                            </div>
                                                            <div className="form-check" style={{ padding: '10px', background: 'rgba(253, 197, 26, 0.05)', borderRadius: '8px' }}>
                                                                <input className="form-check-input" type="checkbox" id="authorization" name="authorization" style={{ width: '18px', height: '18px' }} />
                                                                <label className="form-check-label" style={{ color: "#1e2247", fontSize: '0.9rem' }} htmlFor="authorization">
                                                                    I, the undersigned, confirm that I authorise Metropolitan Guard Services to charge the provided payment method for security services rendered.
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Additional Information */}
                                                <div className="form-section mb-5" style={{
                                                    background: 'rgba(30, 34, 71, 0.02)',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    padding: '30px'
                                                }}>
                                                    <h4 style={{ color: '#1e2247', marginBottom: '20px', fontFamily: 'serif' }}>
                                                        <i className="bi bi-chat-left-text" style={{ marginRight: '10px', color: '#fdc51a' }}></i>
                                                        Additional Information / Comments
                                                    </h4>
                                                    <textarea className="form-control classic-form-input" rows="5" id="additionalInfo" name="additionalInfo" placeholder="Any additional notes or special requirements..."></textarea>
                                                </div>

                                                {/* Signature and Date */}
                                                <div className="form-section mb-5" style={{
                                                    background: 'rgba(30, 34, 71, 0.02)',
                                                    borderRadius: '15px',
                                                    border: '2px solid #eceff3',
                                                    padding: '30px'
                                                }}>
                                                    <h4 style={{ color: '#1e2247', marginBottom: '20px', fontFamily: 'serif' }}>
                                                        <i className="bi bi-pen" style={{ marginRight: '10px', color: '#fdc51a' }}></i>
                                                        Confirmation Signature
                                                    </h4>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">Signature <span style={{ color: '#dc3545' }}>*</span></label>
                                                            <input type="text" className="form-control classic-form-input" id="signature1" name="signature1" required placeholder="Type your full name" />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="classic-form-label">Date <span style={{ color: '#dc3545' }}>*</span></label>
                                                            <input type="date" className="form-control classic-form-input" id="date1" name="date1" required />
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
                                                            Your booking information will be processed securely. We'll contact you within 24 hours to confirm your security service deployment.
                                                        </p>
                                                    </div>

                                                    {/* Terms and Conditions Checkbox */}
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '12px',
                                                        padding: '16px',
                                                        background: 'rgba(253, 197, 26, 0.05)',
                                                        borderRadius: '12px',
                                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                                        marginBottom: '20px',
                                                        textAlign: 'left'
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
                        borderRadius: 8px !important;
                        padding: 12px 15px !important;
                        fontSize: 0.95rem !important;
                        backgroundColor: #fafafa !important;
                        transition: all 0.3s ease !important;
                        color: #495057 !important;
                    }
                    
                    .classic-form-input::placeholder {
                        color: #6c757d !important;
                    }
                    
                    .classic-form-input:focus {
                        borderColor: #fdc51a !important;
                        backgroundColor: #ffffff !important;
                        boxShadow: 0 0 0 3px rgba(253, 197, 26, 0.1) !important;
                        color: #495057 !important;
                        outline: none !important;
                    }

                    .classic-form-input:hover {
                        borderColor: rgba(253, 197, 26, 0.5) !important;
                    }

                    .classic-form-label {
                        display: flex !important;
                        alignItems: center !important;
                        color: #1e2247 !important;
                        fontWeight: 500 !important;
                        marginBottom: 8px !important;
                        fontSize: 0.95rem !important;
                    }

                    select.classic-form-input {
                        appearance: none;
                        backgroundImage: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236c757d' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        backgroundRepeat: no-repeat;
                        backgroundPosition: right 1rem center;
                        backgroundSize: 1em;
                    }

                    select.classic-form-input option {
                        background: #ffffff;
                        color: #495057;
                        padding: 10px;
                    }

                    textarea.classic-form-input {
                        resize: vertical !important;
                        minHeight: 120px !important;
                    }

                    /* Responsive adjustments */
                    @media (maxWidth: 768px) {
                        .service-highlights {
                            flexDirection: column !important;
                            gap: 10px !important;
                        }
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
