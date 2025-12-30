"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MultiSelectDropdown from "./multiSelect";



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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CAREERS">
                <div>
    

                    {/*===== Application Form Section =====*/}
                    <div id="application-form" className="application-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Start Your Application
                                        </small>
                                        <h2>JOB APPLICATION FORM</h2>
                                        <p>Complete the form below to apply for a position with our security team</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="application-form bg-white p-5 rounded shadow glassmorphism-card-with-bg">
                                        <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="firstName" className="form-label text-dark">First Name *</label>
                                            <input type="text" className="form-control glassmorphism-input " id="firstName" name="firstName" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="lastName" className="form-label text-dark">Last Name *</label>
                                            <input type="text" className="form-control glassmorphism-input " id="lastName" name="lastName" required />
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
                                                className="btn px-4 py-3 text-white"
                                                disabled={loading}
                                                style={{
                                                backgroundColor: '#fdc51a',
                                                border: 'none',
                                                borderRadius: '5px',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                
                                                }}
                                            >
                                                {loading ? 'SENDING…' : 'SEND REQUEST'}<span><i className="bi bi-send"></i></span>
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
            .glassmorphism-card-with-bg {
              background:linear-gradient(330deg, rgb(84, 84, 100) 0%, rgb(15,18,41)100%);
              backdrop-filter: blur(20px);
              border-radius: 15px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }
            
            .glassmorphism-input {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              color: #fff;
              border-radius: 8px;
            }
            
            .glassmorphism-input::placeholder {
              color: rgba(255, 255, 255, 0.6);
            }
            
            .glassmorphism-input:focus {
              background: rgba(255, 255, 255, 0.15);
              border-color: rgba(255, 255, 255, 0.4);
              box-shadow: 0 0 0 0.2rem rgba(253, 197, 26, 0.25);
              color: #fff;
            }

            select.glassmorphism-input {
              appearance: none;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
              background-repeat: no-repeat;
              background-position: right 1rem center;
              background-size: 1em;
            }

            /* Fix for dropdown options text color */
            select.glassmorphism-input option {
              background: #1E2247;
              color: #fff;
              padding: 10px;
            }

            /* For Firefox */
            select.glassmorphism-input option:checked {
              background: #fdc51a;
              color: #1E2247;
            }

            /* For Webkit browsers (Chrome, Safari) */
            select.glassmorphism-input option:checked,
            select.glassmorphism-input option:hover {
              background: #fdc51a !important;
              color: #1E2247 !important;
            }
          `}</style>
                </div>
            </Layout>
        </>
    )
}