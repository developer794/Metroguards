'use client';
import Layout from "@/components/layout/Layout";
import { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, Star, Send, CheckCircle, AlertCircle, Building, Home, Calendar, MessageSquare } from 'lucide-react';
import WhyChooseUs from "@/components/ui/why-choose-us";
import Accrediation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe'


export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    message: ''
  });

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
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadContact&render=explicit';
    script.async = true;
    script.defer = true;

    // Define the callback function for token
    window.onRecaptchaSuccessContact = (token) => {
      setRecaptchaToken(token);
    };

    // Define the onload callback to render the widget
    window.onRecaptchaLoadContact = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        try {
          window.grecaptcha.render(recaptchaRef.current, {
            'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            'callback': window.onRecaptchaSuccessContact
          });
        } catch (e) {
          console.error('reCAPTCHA render error:', e);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete window.onRecaptchaSuccessContact;
      delete window.onRecaptchaLoadContact;
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Check reCAPTCHA v2
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    // Add reCAPTCHA token to form data
    formDataObj.append("recaptchaToken", recaptchaToken);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formDataObj });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      // Show success page instead of toast
      setIsSubmitted(true);
      form.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        serviceType: '',
        message: ''
      });
      
      // Reset reCAPTCHA
      setRecaptchaToken(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (err) {
      toast.error(err.message || "Network error. Please try again.");
      if (process.env.NODE_ENV === 'development') {
        console.error('Contact form submission error:', err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us"
        mainTitle="Get In Touch With Metro Guards"
        subtitle="Professional Security Solutions in Melbourne - Available 24/7 for Your Protection"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Loss%20Prevention%20Secuirty%20Guards/12FB20BE-08E2-483E-B3E9-F025668572B3_1_105_c.webp"
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
                    }}>Your Message Has Been Sent Successfully!</h3>

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
                      We've received your message and our team will review it carefully. 
                      You'll receive a response via email within <strong style={{ color: '#1e2247' }}>24 hours</strong>.
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
                            Our team will review your message in detail
                          </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <span style={{ color: '#fdc51a', fontWeight: '700', fontSize: '1.1rem' }}>3.</span>
                          <p style={{ color: '#495057', margin: 0, fontSize: '0.95rem' }}>
                            Receive a personalized response tailored to your needs
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
          <div>
          

          {/*===== Contact Methods Section =====*/}
          <div className="contact-methods-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center mb-5">
                  <div className="section-header">
                    <div className="section-badge">
                      <MessageSquare size={20} />
                      <span>Multiple Ways to Connect</span>
                    </div>
                    <h2 className="section-title">Choose Your Preferred Contact Method</h2>
                    <p className="section-description">
                      We're available through multiple channels to ensure you can reach us when you need us most.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="contact-method-card">
                    <div className="card-icon">
                      <Phone size={32} />
              </div>
                        <div className="card-content">
                      <h3>Call Us Directly</h3>
                      <p className="contact-number">1300 731 173</p>
                      <p className="contact-description">Speak with our security experts for immediate assistance and consultation.</p>
                      <a href="tel:1300731173" className="contact-btn">
                        <Phone size={16} />
                        Call Now
                      </a>
            </div>
          </div>
                          </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="contact-method-card">
                    <div className="card-icon">
                      <Mail size={32} />
                        </div>
                        <div className="card-content">
                      <h3>Email Support</h3>
                      <p className="contact-number">admin@metroguards.com.au</p>
                      <p className="contact-description">Send us detailed inquiries and we'll respond within 2 hours during business hours.</p>
                      <a href="mailto:admin@metroguards.com.au" className="contact-btn">
                        <Mail size={16} />
                        Send Email
                      </a>
                          </div>
                        </div>
                          </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="contact-method-card">
                    <div className="card-icon">
                      <MapPin size={32} />
                        </div>
                        <div className="card-content">
                      <h3>Visit Our Office</h3>
                      <p className="contact-number">CS Hub, Level 1/34 Commercial Rd</p>
                      <p className="contact-description">Caroline Springs VIC 3023. Open Monday to Friday, 9 AM to 5 PM.</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
                        <MapPin size={16} />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== Contact Form Section =====*/}
          <div className="contact-form-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-9">
                  <div className="form-wrapper">
                    <div className="form-header">
                      <div className="form-badge">
                        <i className="bi bi-envelope"></i>
                        Get In Touch
                      </div>
                      <h2>Contact Us</h2>
                      <p>Ready to secure your business? Get in touch with our security experts for a personalized consultation and quote.</p>
                    </div>
                    
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
                      {/* honeypot (spam trap) */}
                      <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            <i className="bi bi-person"></i>
                            Full Name <span className="required">*</span>
                            </label>
                              <input 
                                type="text" 
                            id="name"
                            name="name"
                            className="form-input"
                            
                            value={formData.name}
                            onChange={handleInputChange}
                                required 
                              />
                            </div>
                        
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
                               
                            value={formData.email}
                            onChange={handleInputChange}
                                required 
                              />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">
                            <i className="bi bi-phone"></i>
                            Phone Number 
                            </label>
                              <input 
                                type="tel" 
                            id="phone"
                            name="phone"
                            className="form-input"
                                
                            value={formData.phone}
                            onChange={handleInputChange}
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
                                
                            value={formData.location}
                            onChange={handleInputChange}
                                required 
                              />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="serviceType" className="form-label">
                          
                          Service Type <span className="optional">(Optional)</span>
                            </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          className="form-select"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          
                        >
                          <option value="">Please select a service</option>
                          <optgroup label="Security Guards Services">
                            <option value="building-security-guards">Building Security Guards</option>
                            <option value="construction-security-guards">Construction Security Guards</option>
                            <option value="shopping-centre-security-guards">Shopping Centre Security Guards</option>
                            <option value="hospital-security-guards">Hospital Security Guards</option>
                            <option value="gatehouse-security-guards">Gatehouse Security Guards</option>
                            <option value="educational-institution-security">Educational Institution Security</option>
                            <option value="corporate-security-guards">Corporate Security Guards</option>
                            <option value="retail-security-guards">Retail Security Guards</option>
                            <option value="loss-prevention-security-guards">Loss Prevention Security Guards</option>
                            <option value="concierge-security-guards">Concierge Security Guards</option>
                            <option value="lock-up-and-open-up-security">Lock-Up and Open-Up Security</option>
                            <option value="industrial-warehouse-security">Industrial Warehouse Security</option>
                            <option value="static-security-guards">Static Security Guards</option>
                            <option value="uniform-and-covert-security">Uniform and Covert Security</option>
                            <option value="adhoc-security-services">Adhoc Security Services</option>
                            <option value="asset-protection-security">Asset Protection Security</option>
                          </optgroup>
                          <optgroup label="Crowd Control Services">
                            <option value="party-security-guards">Party Security Guards</option>
                            <option value="event-security-guards">Event Security Guards</option>
                            <option value="corporate-event-security">Corporate Event Security</option>
                          </optgroup>
                          <optgroup label="Mobile Patrols Services">
                            <option value="lock-up-security">Lock-Up Security</option>
                            <option value="security-escort">Security Escort</option>
                            <option value="alarm-response">Alarm Response</option>
                            <option value="mobile-patrols">Mobile Patrols</option>
                            <option value="construction-patrol">Construction Patrol</option>
                          </optgroup>
                          <optgroup label="K9 Security Services">
                            <option value="k9-security-with-handler">K9 Security With Handler</option>
                          </optgroup>
                          <option value="other-services">Other Services</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          <i className="bi bi-chat-dots"></i>
                          Your Message <span className="required">*</span>
                            </label>
                          <textarea 
                          id="message"
                            name="message" 
                          className="form-textarea"
                                rows="6" 
                                
                          value={formData.message}
                          onChange={handleInputChange}
                            required
                          ></textarea>
                      </div>

                      {/* reCAPTCHA v2 Checkbox */}
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        marginBottom: '25px',
                        marginTop: '25px'
                      }}>
                        <div ref={recaptchaRef}></div>
                      </div>

                      <div className="form-footer">
                        
                        
                        <button
                          type="submit"
                          className="submit-btn"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <div className="spinner"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send size={20} />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                      
                     
                      
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== Why Choose Us Section =====*/}
          <div className="why-choose-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center mb-5">
                  <div className="section-header">
                    <div className="section-badge">
                      <Award size={20} />
                      <span>Why Choose Metro Guards</span>
                    </div>
                    <h2 className="section-title">Trusted Security Excellence</h2>
                    <p className="section-description">
                      We've been protecting Melbourne businesses and residents for over a decade with our professional security services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Shield size={32} />
                    </div>
                    <h3>Licensed & Insured</h3>
                    <p>Fully certified security guards with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Clock size={32} />
                    </div>
                    <h3>24/7 Availability</h3>
                    <p>Round-the-clock security services available whenever you need protection for your property.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Users size={32} />
                    </div>
                    <h3>Award-Winning Service</h3>
                    <p>Recognised for excellence, Metro Guards delivers award-winning service with ISO-certified security professionals, extensively trained to handle diverse and complex security situations.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Star size={32} />
                    </div>
                    <h3>Proven Track Record</h3>
                    <p>With over 3,000 successful security jobs completed for clients across Melbourne and Victoria, we proudly maintain a 99% customer satisfaction rate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== Final CTA Section =====*/}
            
          <Accrediation />
          <Subscribe />
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

          /* Global Font Family Override */
          * {
            font-family: "satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif !important;
          }

          /* Contact Methods Section */
          .contact-methods-section {
            padding: 80px 0;
            background: #f8f9fa;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .section-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%);
            color: #1e2247;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.85rem;
            margin-bottom: 20px;
            font-family: "satoshi", sans-serif;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 4px 12px rgba(253, 197, 26, 0.25);
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 20px;
            font-family: "satoshi", sans-serif;
            letter-spacing: -0.5px;
          }

          .section-description {
            font-size: 1.05rem;
            color: #5C5B79;
            max-width: 600px;
            margin: 0 auto;
            font-family: "satoshi", sans-serif;
            line-height: 1.7;
          }

          .contact-method-card {
            background: linear-gradient(135deg, #ffffff 0%, #fcfcfd 100%);
            border-radius: 20px;
            padding: 0;
            text-align: center;
            box-shadow: 0 10px 40px rgba(30, 34, 71, 0.08), 0 2px 8px rgba(30, 34, 71, 0.04);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
            border: 1px solid rgba(30, 34, 71, 0.06);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .contact-method-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #fdc51a 0%, #f39c12 50%, #e67e22 100%);
            border-radius: 20px 20px 0 0;
            box-shadow: 0 2px 8px rgba(253, 197, 26, 0.3);
          }

          .contact-method-card:hover {
            transform: translateY(-12px) scale(1.01);
            box-shadow: 0 30px 60px rgba(30, 34, 71, 0.12), 0 10px 20px rgba(253, 197, 26, 0.08);
            border-color: rgba(253, 197, 26, 0.2);
          }

          .contact-method-card .card-icon {
            width: 90px;
            height: 90px;
            background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 35px auto 25px;
            color: #fdc51a;
            position: relative;
            box-shadow: 0 8px 24px rgba(30, 34, 71, 0.2), 0 4px 8px rgba(30, 34, 71, 0.12);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .contact-method-card .card-icon::after {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            background: linear-gradient(135deg, #fdc51a 0%, #f39c12 50%, #e67e22 100%);
            border-radius: 50%;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .contact-method-card:hover .card-icon {
            transform: scale(1.08) rotate(5deg);
            box-shadow: 0 12px 32px rgba(253, 197, 26, 0.3), 0 6px 12px rgba(253, 197, 26, 0.2);
          }

          .contact-method-card:hover .card-icon::after {
            opacity: 1;
          }

          .contact-method-card .card-content {
            padding: 0 30px 40px 30px;
          }

          .contact-method-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 15px;
            letter-spacing: -0.3px;
            font-family: "satoshi", sans-serif;
          }

          .contact-number {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #fdc51a 0%, #f39c12 50%, #e67e22 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: "satoshi", sans-serif;
          }

          .contact-description {
            color: #5C5B79;
            margin-bottom: 30px;
            line-height: 1.7;
            font-size: 0.95rem;
            font-weight: 400;
            font-family: "satoshi", sans-serif;
          }

          .contact-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
            color: white;
            padding: 14px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(30, 34, 71, 0.25), 0 2px 8px rgba(30, 34, 71, 0.15);
            font-family: "satoshi", sans-serif;
            letter-spacing: 0.3px;
          }

          .contact-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
            transition: left 0.6s ease;
          }

          .contact-btn:hover::before {
            left: 100%;
          }

          .contact-btn:hover {
            background: linear-gradient(135deg, #fdc51a 0%, #f39c12 50%, #e67e22 100%);
            color: #1e2247;
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(253, 197, 26, 0.35), 0 6px 12px rgba(253, 197, 26, 0.2);
          }

          /* Contact Form Section */
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
            border-radius: 24px;
            padding: 0;
            box-shadow: 0 20px 60px rgba(30, 34, 71, 0.1), 0 8px 20px rgba(30, 34, 71, 0.06);
            position: relative;
            border: 1px solid rgba(30, 34, 71, 0.08);
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            overflow: hidden;
          }

          .form-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #fdc51a 0%, #f39c12 25%, #e67e22 50%, #f39c12 75%, #fdc51a 100%);
            background-size: 200% 100%;
            animation: gradientShift 4s ease-in-out infinite;
            box-shadow: 0 2px 8px rgba(253, 197, 26, 0.3);
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
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 20px;
            line-height: 1.2;
            font-family: "satoshi", sans-serif;
            letter-spacing: -0.5px;
          }

          .form-header p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
            font-family: "satoshi", sans-serif;
            font-weight: 400;
          }

          .contact-form {
            padding: 60px 50px;
            background: white;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 0px;
          }

          .form-group {
            margin-bottom: 30px;
            position: relative;
          }

          .form-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            color: #1e2247 !important;
            margin-bottom: 8px;
            font-size: 0.95rem;
            font-family: "satoshi", sans-serif;
          }
          
          .form-label i {
            color: #fdc51a;
          }

          .required {
            color: #e74c3c;
            font-size: 1rem;
            font-weight: 700;
          }

          .optional {
            color: #6c757d;
            font-size: 0.85rem;
            font-weight: 400;
          }

          .form-input,
          .form-select,
          .form-textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #000000;
            border-radius: 8px;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            background: #fafafa;
            font-weight: 500;
            position: relative;
            font-family: "satoshi", sans-serif;
            color: #1e2247;
          }

          .form-input:focus,
          .form-select:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #fdc51a;
            background: #ffffff;
            box-shadow: 0 0 0 3px rgba(253, 197, 26, 0.1);
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            color: #6c757d;
            font-weight: 400;
            font-family: "satoshi", sans-serif;
          }

          .form-textarea {
            resize: vertical;
            min-height: 120px;
            font-family: "satoshi", sans-serif;
            line-height: 1.6;
          }
          
          /* Custom select dropdown arrow */
          .form-select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1em;
            padding-right: 2.5rem;
          }
          
          .form-select option {
            background: #ffffff;
            color: #1e2247;
            padding: 10px;
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
            padding: 18px 40px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            min-width: 220px;
            justify-content: center;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            box-shadow: 0 8px 24px rgba(30, 34, 71, 0.25), 0 4px 8px rgba(30, 34, 71, 0.15);
            font-family: "satoshi", sans-serif;
          }

          .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(253, 197, 26, 0.2), transparent);
            transition: left 0.6s ease;
          }

          .submit-btn:hover::before {
            left: 100%;
          }

          .submit-btn:hover:not(:disabled) {
            background: linear-gradient(135deg, #fdc51a 0%, #f39c12 50%, #e67e22 100%);
            color: #1e2247;
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(253, 197, 26, 0.35), 0 6px 12px rgba(253, 197, 26, 0.2);
          }

          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          .spinner {
            width: 22px;
            height: 22px;
            border: 3px solid transparent;
            border-top: 3px solid currentColor;
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

          /* Contact Info Footer */
          .contact-info-footer {
            display: flex;
            justify-content: space-around;
            gap: 30px;
            margin-top: 40px;
            padding: 30px;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border-radius: 15px;
            border: 1px solid #dee2e6;
          }

          .contact-info-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            color: #1e2247;
            font-size: 0.9rem;
            font-weight: 600;
            text-align: center;
          }

          .contact-info-item svg {
            width: 24px;
            height: 24px;
            color: #fdc51a;
            margin-bottom: 5px;
          }

          .contact-info-item span {
            font-size: 0.85rem;
            color: #6c757d;
          }

          /* Why Choose Us Section */
          .why-choose-section {
            padding: 80px 0;
            background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
            color: white;
          }

          .why-choose-section .section-badge {
            background: rgba(253, 197, 26, 0.15);
            color: #fdc51a;
            border: 1px solid rgba(253, 197, 26, 0.3);
          }

          .why-choose-section .section-title {
            color: white;
          }

          .why-choose-section .section-description {
            color: rgba(255, 255, 255, 0.9);
          }

          .feature-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          }

          .feature-card:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.12);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          }

          .feature-card .feature-icon {
            width: 75px;
            height: 75px;
            background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%);
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            color: #1e2247;
            box-shadow: 0 6px 16px rgba(253, 197, 26, 0.3);
            transition: all 0.3s ease;
          }

          .feature-card:hover .feature-icon {
            transform: scale(1.08) rotate(5deg);
          }

          .feature-card h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: white;
            margin-bottom: 15px;
            font-family: "satoshi", sans-serif;
            letter-spacing: -0.3px;
          }

          .feature-card p {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.7;
            margin: 0;
            font-family: "satoshi", sans-serif;
            font-size: 0.95rem;
          }

          /* Final CTA Section */
          .final-cta-section {
            padding: 80px 0;
            background: #f8f9fa;
          }

          .cta-content {
            text-align: center;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 20px;
          }

          .cta-content p {
            font-size: 1.2rem;
            color: #6c757d;
            margin-bottom: 40px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .btn-primary,
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            transition: all 0.3s ease;
            min-width: 200px;
            justify-content: center;
          }

          .btn-primary {
            background: linear-gradient(135deg, #fdc51a, #f39c12);
            color: #1e2247;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(253, 197, 26, 0.3);
          }

          .btn-secondary {
            background: #1e2247;
            color: white;
            border: 2px solid #1e2247;
          }

          .btn-secondary:hover {
            background: transparent;
            color: #1e2247;
            transform: translateY(-2px);
          }

          /* Responsive Design */
          @media (max-width: 991px) {
            .form-row {
              grid-template-columns: 1fr;
              gap: 25px;
            }

            .form-footer {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 30px;
            }

            .form-header {
              padding: 50px 35px 35px 35px;
            }

            .form-header h2 {
              font-size: 2.2rem;
            }

            .contact-form {
              padding: 50px 35px;
            }

            .section-title {
              font-size: 2.2rem;
            }

            .contact-method-card {
              margin-bottom: 25px;
            }

            .contact-method-card .card-icon {
              width: 85px;
              height: 85px;
            }
          }

          @media (max-width: 767px) {
            .contact-methods-section {
              padding: 60px 0;
            }

            .form-wrapper {
              margin: 0 15px;
              border-radius: 20px;
            }

            .form-header {
              padding: 40px 25px 30px 25px;
            }

            .form-header h2 {
              font-size: 1.8rem;
            }

            .form-header p {
              font-size: 1rem;
            }

            .contact-form {
              padding: 40px 25px;
            }

            .form-group {
              margin-bottom: 25px;
            }

            .form-input,
            .form-select,
            .form-textarea {
              padding: 12px 15px;
              font-size: 0.95rem;
              border-radius: 8px;
            }

            .form-label {
              font-size: 0.85rem;
              margin-bottom: 8px;
            }

            .submit-btn {
              padding: 16px 32px;
              font-size: 0.95rem;
              min-width: 100%;
            }

            .section-title {
              font-size: 1.8rem;
            }

            .section-description {
              font-size: 0.95rem;
            }

            .contact-method-card h3 {
              font-size: 1.3rem;
            }

            .contact-number {
              font-size: 1.15rem;
            }

            .contact-description {
              font-size: 0.9rem;
            }

            .contact-method-card .card-icon {
              width: 75px;
              height: 75px;
              margin: 30px auto 20px;
            }

            .contact-method-card .card-content {
              padding: 0 25px 35px 25px;
            }

            .feature-card {
              padding: 35px 25px;
              margin-bottom: 20px;
            }

            .feature-card h3 {
              font-size: 1.25rem;
            }

            .feature-card p {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .section-badge {
              font-size: 0.75rem;
              padding: 8px 18px;
            }

            .form-header h2 {
              font-size: 1.5rem;
            }

            .form-header p {
              font-size: 0.9rem;
            }

            .section-title {
              font-size: 1.6rem;
            }

            .contact-method-card .card-icon {
              width: 70px;
              height: 70px;
            }
          }
        `}</style>
      </Layout>
    </>
  )
}
