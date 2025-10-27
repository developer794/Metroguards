'use client';
import Layout from "@/components/layout/Layout";
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, Star, Send, CheckCircle, AlertCircle, Building, Home, Calendar, MessageSquare } from 'lucide-react';
import WhyChooseUs from "@/components/ui/why-choose-us";
import Accrediation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe'


export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formDataObj });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      toast.success("Message sent successfully!");
      form.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        serviceType: '',
        message: ''
      });
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us"
        mainTitle="Get In Touch With Metro Guards"
        subtitle="Professional Security Solutions in Melbourne - Available 24/7 for Your Protection"
        backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Loss%20Prevention%20Secuirty%20Guards/12FB20BE-08E2-483E-B3E9-F025668572B3_1_105_c.webp"
      >
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
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="form-wrapper">
                    <div className="form-header">
                      <div className="form-badge">
                        <i className="bi bi-envelope"></i>
                        Get In Touch
                      </div>
                      <h2>Contact Us</h2>
                      <p>Ready to secure your business? Get in touch with our security experts for a personalized consultation and quote.</p>
                    </div>
                    
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                            placeholder="Enter your full name"
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
                                placeholder="your.email@example.com" 
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
                            Phone Number <span className="optional">(Optional)</span>
                            </label>
                              <input 
                                type="tel" 
                            id="phone"
                            name="phone"
                            className="form-input"
                                placeholder="+61 xxx xxx xxx" 
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
                                placeholder="Enter property address or suburb" 
                            value={formData.location}
                            onChange={handleInputChange}
                                required 
                              />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="serviceType" className="form-label">
                          <i className="bi bi-shield-check"></i>
                          Service Type <span className="required">*</span>
                            </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          className="form-select"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          required
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
                                placeholder="Please describe your security requirements, property details, expected duration, and any specific concerns you may have..."
                          value={formData.message}
                          onChange={handleInputChange}
                            required
                          ></textarea>
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
                    <h3>Experienced Team</h3>
                    <p>Our security professionals have extensive training and experience in various security scenarios.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Star size={32} />
                    </div>
                    <h3>Proven Track Record</h3>
                    <p>Over 500 satisfied clients across Melbourne with a 99% customer satisfaction rate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== Final CTA Section =====*/}
            
          <Accrediation />
          <Subscribe />
          </div>

          <style jsx>{`
          /* Classic Hero Section */
          .classic-hero-section {
            background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
            padding: 100px 0;
              position: relative;
              overflow: hidden;
            }

          .classic-hero-section::before {
            content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: 
              radial-gradient(circle at 20% 50%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
            pointer-events: none;
            }

            .hero-content {
              position: relative;
              z-index: 2;
            }

            .hero-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
            background: rgba(253, 197, 26, 0.15);
              backdrop-filter: blur(10px);
            border: 1px solid rgba(253, 197, 26, 0.3);
              border-radius: 50px;
              padding: 8px 20px;
            color: #fdc51a;
            font-weight: 600;
              margin-bottom: 20px;
              font-size: 14px;
            }

            .hero-title {
              font-size: 3.5rem;
              font-weight: 800;
              color: white;
              margin-bottom: 20px;
              line-height: 1.2;
            }

          .highlight-text {
            background: linear-gradient(45deg, #fdc51a, #f39c12);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .hero-description {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 40px;
              line-height: 1.6;
            }

            .hero-stats {
              display: flex;
            gap: 40px;
              margin-top: 40px;
            }

            .stat-item {
              text-align: center;
              color: white;
            }

            .stat-item h3 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 5px;
              color: #fdc51a;
            }

            .stat-item p {
              font-size: 1rem;
              margin: 0;
              opacity: 0.9;
            }

          .hero-image {
            position: relative;
          }

          .image-container {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          }

          .image-container img {
            width: 100%;
            height: 500px;
            object-fit: cover;
          }

          .floating-card {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 15px;
            max-width: 250px;
          }

          .card-icon {
            width: 50px;
            height: 50px;
            background: #fdc51a;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1e2247;
          }

          .card-content h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 5px;
          }

          .card-content p {
            font-size: 0.9rem;
            color: #6c757d;
            margin: 0;
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
            background: #fdc51a;
            color: #1e2247;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .section-title {
                font-size: 2.5rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 20px;
          }

          .section-description {
            font-size: 1.1rem;
            color: #6c757d;
            max-width: 600px;
            margin: 0 auto;
          }

          .contact-method-card {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 25px;
            padding: 0;
            text-align: center;
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            transition: all 0.4s ease;
            height: 100%;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
          }

          .contact-method-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fdc51a, #f39c12, #e67e22);
            border-radius: 25px 25px 0 0;
          }

          .contact-method-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
            border-color: #fdc51a;
          }

          .contact-method-card .card-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30px auto 25px;
            color: #fdc51a;
            position: relative;
            box-shadow: 0 10px 25px rgba(30, 34, 71, 0.3);
          }

          .contact-method-card .card-icon::after {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            background: linear-gradient(135deg, #fdc51a, #f39c12);
            border-radius: 50%;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .contact-method-card:hover .card-icon::after {
            opacity: 1;
          }

          .contact-method-card .card-content {
            padding: 0 30px 40px 30px;
          }

          .contact-method-card h3 {
            font-size: 1.6rem;
            font-weight: 800;
            color: #1e2247;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
          }

          .contact-number {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1e2247;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #fdc51a, #f39c12);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .contact-description {
            color: #6c757d;
            margin-bottom: 30px;
            line-height: 1.7;
            font-size: 1rem;
          }

          .contact-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #1e2247, #2a3458);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(30, 34, 71, 0.3);
          }

          .contact-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }

          .contact-btn:hover::before {
            left: 100%;
          }

          .contact-btn:hover {
            background: linear-gradient(135deg, #fdc51a, #f39c12);
            color: #1e2247;
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(253, 197, 26, 0.4);
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
            border-radius: 25px;
            padding: 0;
            box-shadow: 0 25px 80px rgba(0,0,0,0.1);
            position: relative;
            border: 1px solid rgba(253, 197, 26, 0.2);
            max-width: 800px;
            margin: 0 auto;
            overflow: hidden;
          }

          .form-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #fdc51a, #f39c12, #e67e22, #fdc51a);
            background-size: 200% 100%;
            animation: gradientShift 3s ease-in-out infinite;
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
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .form-header p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .contact-form {
            padding: 60px 50px;
            background: white;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
                gap: 30px;
            margin-bottom: 30px;
          }

          .form-group {
            margin-bottom: 30px;
            position: relative;
          }

          .form-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: #000000 !important;
            margin-bottom: 12px;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .required {
            color: #e74c3c;
                font-size: 1.2rem;
            font-weight: 700;
          }

          .optional {
            color: #6c757d;
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: none;
          }

          .form-input,
          .form-select,
          .form-textarea {
            width: 100%;
            padding: 20px 25px;
            border: 3px solid #e9ecef;
            border-radius: 15px;
            font-size: 1.1rem;
            transition: all 0.4s ease;
            background: #f8f9fa;
            font-weight: 500;
            position: relative;
          }

          .form-input:focus,
          .form-select:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #fdc51a;
            background: white;
            box-shadow: 0 0 0 5px rgba(253, 197, 26, 0.1);
            transform: translateY(-2px);
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            color: #adb5bd;
            font-weight: 400;
          }

          .form-textarea {
            resize: vertical;
            min-height: 150px;
            font-family: inherit;
            line-height: 1.6;
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
            padding: 20px 40px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.4s ease;
            min-width: 220px;
            justify-content: center;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 10px 30px rgba(30, 34, 71, 0.3);
          }

          .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(253, 197, 26, 0.3), transparent);
            transition: left 0.6s ease;
          }

          .submit-btn:hover::before {
            left: 100%;
          }

          .submit-btn:hover:not(:disabled) {
            background: linear-gradient(135deg, #fdc51a, #f39c12);
            color: #1e2247;
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(253, 197, 26, 0.4);
          }

          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          .spinner {
            width: 24px;
            height: 24px;
            border: 3px solid transparent;
            border-top: 3px solid #1e2247;
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
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.3s ease;
            height: 100%;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.15);
          }

          .feature-card .feature-icon {
            width: 80px;
            height: 80px;
            background: #fdc51a;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            color: #1e2247;
          }

          .feature-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 15px;
          }

          .feature-card p {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            margin: 0;
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
            .hero-title {
              font-size: 2.5rem;
            }

            .hero-stats {
              gap: 30px;
            }

            .form-row {
              grid-template-columns: 1fr;
            }

            .form-footer {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }

            .form-header {
              padding: 50px 40px 35px 40px;
            }

            .form-header h2 {
              font-size: 2.5rem;
            }

            .contact-form {
              padding: 50px 40px;
            }
          }

          @media (max-width: 767px) {
            .classic-hero-section {
              padding: 60px 0;
            }

            .hero-title {
              font-size: 2rem;
            }

            .hero-stats {
              flex-direction: column;
              gap: 20px;
            }

            .form-wrapper {
              margin: 0 15px;
            }

            .form-header {
              padding: 40px 30px 30px 30px;
            }

            .form-header h2 {
              font-size: 2rem;
            }

            .form-header p {
              font-size: 1rem;
            }

            .contact-form {
              padding: 40px 30px;
            }

            .form-input,
            .form-select,
            .form-textarea {
              padding: 18px 20px;
              font-size: 1rem;
            }

            .submit-btn {
              padding: 18px 35px;
              font-size: 1rem;
              min-width: 200px;
            }

            .privacy-notice {
              flex-direction: column;
              text-align: center;
            }

            .section-title {
              font-size: 2rem;
            }

            .cta-content h2 {
              font-size: 2rem;
            }
          }
        `}</style>
      </Layout>
    </>
  )
}
