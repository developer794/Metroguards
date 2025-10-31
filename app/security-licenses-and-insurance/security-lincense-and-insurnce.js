"use client";
import Layout from "@/components/layout/Layout"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function SecurityLicensePage() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SECURITY LICENSE AND INSURANCE">
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Fully Certified & Insured
                                            </small>
                                            <h2>SECURITY LICENSE AND INSURANCE</h2>
                                            <p>
                                                At Metropolitan Security, we maintain all necessary licenses, insurance coverage and industry certifications to provide you with peace of mind. Our commitment to compliance and professional standards ensures you receive security services of the highest quality.
                                            </p>
                                            <p>
                                                Below you'll find documentation of our company registrations, insurance policies, licenses and industry recognition. We're proud to operate with complete transparency and adhere to all regulatory requirements.
                                            </p>
                                            <div className="btn-area mt-4">
                                                <a 
                                                    href="#contact-form" 
                                                    className="btn text-white px-4 py-3 me-3"
                                                    style={{
                                                        backgroundColor: '#1E2247',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        textDecoration: 'none',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    Compliance Pack <span><i className="bi bi-arrow-right"></i></span>
                                                </a>
                                                <a 
                                                    href="tel:1300731173" 
                                                    className="btn text-dark px-4 py-3"
                                                    style={{
                                                        backgroundColor: '#FDC24C',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        textDecoration: 'none',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    CALL FOR VERIFICATION <span><i className="bi bi-telephone"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/blog/local.webp" alt="Security Licenses and Certificates" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Certifications Section =====*/}
                    <div className="service-section-three bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Compliance Documentation
                                        </small>
                                        <h2>OUR CERTIFICATIONS & LICENSES</h2>
                                        <p>We maintain all required registrations and licenses to operate legally and professionally.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="certification-box bg-white p-4 h-100 shadow rounded">
                                        <h4 className="mb-4" style={{color: '#243D31'}}>
                                            <i className="bi bi-building me-2"></i> Company Registration
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-check me-2 text-primary"></i>
                                                
                                                <a href="/Modern-Slavery-Statement-V2-1.pdf" target="_blank">Certificate of Registration of a Company</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-check me-2 text-primary"></i>
                                                
                                                <a href="/wp-content/uploads/2025/06/business-name.pdf" target="_blank">Certificate of Registration of Business Name</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-check me-2 text-primary"></i>
                                                
                                                <a href="/wp-content/uploads/2025/06/Organisation-Recognition-Certificate.pdf" target="_blank">Certificate of Recognition</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="certification-box bg-white p-4 h-100 shadow rounded">
                                        <h4 className="mb-4" style={{color: '#243D31'}}>
                                            <i className="bi bi-shield-check me-2"></i> Insurance
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-text me-2 text-success"></i>
                                                
                                                <a href="/wp-content/uploads/2025/03/Public-Liability.pdf" target="_blank">Public Liability Insurance</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-text me-2 text-success"></i>
                                                
                                                <a href="/wp-content/uploads/2025/06/PI-Certificate-of-Insurance.pdf.pdf" target="_blank">Professional Indemnity Insurance</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-text me-2 text-success"></i>
                                                
                                                <a href="/wp-content/uploads/2025/07/WorkCover-Insurance-Certificate-of-Currency-30-Jun-2026.pdf" target="_blank">Work Cover Insurance</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-text me-2 text-success"></i>
                                                
                                                <a href="/wp-content/uploads/2025/05/Labour-Hire-Organisation-Licence-Certificate-VICLHL01373.pdf" target="_blank">Labour Hire Organization Licence Certificate</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="certification-box bg-white p-4 h-100 shadow rounded">
                                        <h4 className="mb-4" style={{color: '#243D31'}}>
                                            <i className="bi bi-passport me-2"></i> Company Registration
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                                                
                                                <a href="/wp-content/smush-webp/2025/07/LDR-License.jpg.webp" target="_blank">Private Security Business Licence (VIC)</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                                                
                                                <a href="/wp-content/uploads/2025/06/Master-Licence-NSW.pdf" target="_blank">Master Licence (NSW)</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                                                
                                                <a href="/wp-content/uploads/2025/05/Labour-Hire-Organisation-Licence-Certificate-VICLHL01373.pdf" target="_blank">Labour Hire Licence</a>
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                                                
                                                <a href="/wp-content/uploads/2025/06/13591.pdf" target="_blank">CM3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Awards & Quality Assurance Section =====*/}
                    <div className="reasons-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Industry Recognition
                                        </small>
                                        <h2>AWARDS & MEMBERSHIP</h2>
                                        <p>Our commitment to excellence has been recognized through these prestigious awards and memberships.</p>
                                    </div>
                                    <div className="awards-box bg-white p-4 mt-4 shadow rounded">
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex align-items-start">
                                                <div className="award-icon me-3">
                                                    <i className="bi bi-trophy-fill" style={{color: '#FFD700', fontSize: '1.5rem'}}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">
                                                        <a href="/wp-content/uploads/2025/06/aus-achiever-award-2014.pdf" target="_blank">Australian Achiever Award Winner 2014</a>
                                                    </h5>
                                                    <small className="text-muted">Excellence in Customer Service</small>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <div className="award-icon me-3">
                                                    <i className="bi bi-trophy-fill" style={{color: '#FFD700', fontSize: '1.5rem'}}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">
                                                        <a href="/wp-content/uploads/2025/06/aus-achiever-award-2015.pdf" target="_blank">Australian Achiever Award Winner 2015</a>
                                                    </h5>
                                                    <small className="text-muted">Business Performance Excellence</small>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <div className="award-icon me-3">
                                                    <i className="bi bi-trophy-fill" style={{color: '#FFD700', fontSize: '1.5rem'}}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">
                                                        <a href="/wp-content/uploads/2025/06/australian-achiever-award-2016.pdf" target="_blank">Australian Achiever Award Winner 2016</a>
                                                    </h5>
                                                    <small className="text-muted">Industry Leadership</small>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <div className="award-icon me-3">
                                                    <i className="bi bi-patch-check-fill" style={{color: '#243D31', fontSize: '1.5rem'}}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">
                                                        <a href="/wp-content/uploads/2025/06/ASIAL-Org-Membership-Certificate-New.pdf" target="_blank">ASIAL Corporate Membership</a>
                                                    </h5>
                                                    <small className="text-muted">Australian Security Industry Association Limited</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Standards Compliance
                                        </small>
                                        <h2>QUALITY ASSURANCE</h2>
                                        <p>Our quality management systems ensure consistent service delivery meeting industry standards.</p>
                                    </div>
                                    <div className="quality-box bg-white p-4 mt-4 shadow rounded">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="quality-item text-center p-3 h-100">
                                                    <div className="quality-icon mb-3">
                                                        <i className="bi bi-file-earmark-richtext" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                                    </div>
                                                    <h5>
                                                        <a href="/wp-content/uploads/2025/06/3240701-E-Certificate-of-Registration-Metro-Guards.pdf" target="_blank">E-Certificate of Registration</a>
                                                    </h5>
                                                    <p className="mb-0">Electronic certification for digital verification</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="quality-item text-center p-3 h-100">
                                                    <div className="quality-icon mb-3">
                                                        <i className="bi bi-file-earmark-text" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                                    </div>
                                                    <h5>
                                                        <a href="/wp-content/uploads/2025/06/3240701-O-Certificate-of-Registration-Metro-Guards.pdf" target="_blank">O-Certificate of Registration</a>
                                                    </h5>
                                                    <p className="mb-0">Original documentation for physical inspection</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="quality-item text-center p-3">
                                                    <div className="quality-icon mb-3">
                                                        <i className="bi bi-award" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                                    </div>
                                                    <h5>
                                                        <a href="/wp-content/uploads/2025/06/3240701-Q-Certificate-of-Registration-Metro-Guards.pdf" target="_blank">Q-Certificate of Registration</a>
                                                    </h5>
                                                    <p className="mb-0">Quality assurance certification meeting ISO standards</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   {/*===== Contact Form Section =====*/}
                    <div id="contact-form" className="contact-section bg-29 section-padding" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Request Documentation
                                        </small>
                                        <h2>CONTACT US</h2>
                                        <p>Request copies of our licenses or inquire about our insurance coverage.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="contact-form bg-white p-5 rounded shadow glassmorphism-card-with-bg">
                                        <form onSubmit={handleSubmit} noValidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="purpose" className="form-label text-dark">I want to:</label>
                                            <select className="form-select" id="purpose" name="purpose" required>
                                                <option value="">Select Purpose</option>
                                                <option value="consultation">Request consultation</option>
                                                <option value="obtain-code">Obtain code</option>
                                            </select>
                                            </div>

                                            {/* repeat: add name=... */}
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="service" className="form-label text-dark">Service Required:</label>
                                            <select className="form-select" id="service" name="service" required>
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

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="name" className="form-label text-dark">Your Name:</label>
                                            <input type="text" className="form-control" id="name" name="name" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="phone" className="form-label text-dark">Phone:</label>
                                            <input type="tel" className="form-control" id="phone" name="phone" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="email" className="form-label text-dark">Your Email:</label>
                                            <input type="email" className="form-control" id="email" name="email" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="location" className="form-label text-dark">Location:</label>
                                            <input type="text" className="form-control" id="location" name="location" required />
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="message" className="form-label text-dark">Message / Details:</label>
                                            <textarea className="form-control" id="message" name="message" rows="4" required />
                                            </div>

                                            <div className="col-12 text-center">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="btn px-4 py-3 text-white"
                                                style={{ backgroundColor:'#fdc51a', border:'none', borderRadius:'5px', fontWeight:600, textTransform:'uppercase' }}
                                            >
                                                {loading ? 'SENDING…' : 'SEND REQUEST'} <span><i className="bi bi-send" /></span>
                                            </button>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Assurance Section =====*/}
                    <div className="assurance-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="heading2">
                                        <h2>YOUR ASSURANCE OF PROFESSIONAL SERVICE</h2>
                                        <p>All our security personnel and operations are fully licensed and insured</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4 mb-4">
                                    <div className="assurance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="assurance-icon mb-3">
                                            <i className="bi bi-shield-lock" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4 className="mb-3">Licensed Professionals</h4>
                                        <p>All our security officers hold current licenses and undergo regular training to maintain the highest standards.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="assurance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="assurance-icon mb-3">
                                            <i className="bi bi-file-earmark-medical" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4 className="mb-3">Comprehensive Insurance</h4>
                                        <p>We carry full insurance coverage including public liability and professional indemnity for your protection.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="assurance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="assurance-icon mb-3">
                                            <i className="bi bi-award" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4 className="mb-3">Industry Compliance</h4>
                                        <p>Regular audits ensure we meet all regulatory requirements and industry best practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}