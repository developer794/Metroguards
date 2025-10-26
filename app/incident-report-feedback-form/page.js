"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";


export default function IncidentReportPage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/incident", { method: "POST", body: formData });
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
                headTitle="Incident Report & Feedback Form - Security Event Reporting"
                breadcrumbTitle="Incident Report & Feedback Form"
                mainTitle="Security Incident Reporting System"
                subtitle="Professional incident management • Real-time reporting • Comprehensive documentation"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Uniformed%20&%20Covert%20Secuirty%20Guards/250DB2AD-5550-45A8-A9FE-940905978EFD_1_105_c.webp"
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
                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                        color: '#ffffff',
                                        padding: '8px 20px',
                                        borderRadius: '25px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        marginBottom: '20px',
                                        border: '2px solid rgba(253, 197, 26, 0.3)'
                                    }}>
                                        <i className="bi bi-exclamation-triangle" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '1.1rem' }}></i>
                                        Critical Incident Reporting
                                    </div>

                                    <h1 style={{
                                        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        color: '#1e2247',
                                        marginBottom: '20px',
                                        fontFamily: 'serif'
                                    }}>
                                        Incident Report & <span style={{ color: '#fdc51a' }}>Feedback Form</span>
                                    </h1>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#6c757d',
                                        lineHeight: '1.6',
                                        marginBottom: '30px',
                                        maxWidth: '700px',
                                        margin: '0 auto 30px'
                                    }}>
                                        Comprehensive incident reporting system for security personnel, fire support officers, 
                                        COVID marshalls, and patrol units. Report security breaches, safety matters, equipment 
                                        issues, and operational concerns with professional documentation.
                                    </p>

                                    <div className="incident-categories" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '15px',
                                        marginBottom: '30px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-shield-exclamation" style={{ color: '#1e2247', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Security Breaches</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-heart-pulse" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>OH&S Matters</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-gear" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Equipment Issues</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="bi bi-bell" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#1e2247', fontWeight: '500' }}>Alarm Responses</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Incident Form Section */}
                <section className="incident-form-section" style={{
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
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 20px',
                                            boxShadow: '0 8px 25px rgba(220, 53, 69, 0.3)'
                                        }}>
                                            <i className="bi bi-file-earmark-text" style={{ fontSize: '2rem', color: '#ffffff' }}></i>
                                        </div>

                                        <h2 style={{
                                            color: '#1e2247',
                                            fontWeight: '700',
                                            marginBottom: '15px',
                                            fontFamily: 'serif'
                                        }}>
                                            Security Incident Report & Feedback
                                        </h2>

                                        <p style={{
                                            color: '#6c757d',
                                            fontSize: '1rem',
                                            maxWidth: '800px',
                                            margin: '0 auto'
                                        }}>
                                            Please complete all relevant sections accurately. This form captures critical incident 
                                            details for proper documentation, investigation, and response management.
                                        </p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                                        {/* Event Type Section */}
                                        <div className="form-section mb-5" style={{
                                            background: 'rgba(220, 53, 69, 0.05)',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(220, 53, 69, 0.2)',
                                            padding: '30px',
                                            position: 'relative'
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
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: '15px',
                                                        boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)'
                                                    }}>
                                                        <i className="bi bi-exclamation-triangle" style={{ fontSize: '1.3rem', color: '#ffffff' }}></i>
                                                    </div>
                                                    <div>
                                                        <h4 style={{
                                                            color: '#1e2247',
                                                            fontWeight: '600',
                                                            margin: '0',
                                                            fontFamily: 'serif'
                                                        }}>
                                                            Event Type Classification
                                                        </h4>
                                                        <p style={{ color: '#6c757d', margin: '0', fontSize: '0.9rem' }}>
                                                            Select all applicable event categories for this incident
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="event-types-container" style={{
                                                background: '#ffffff',
                                                borderRadius: '12px',
                                                padding: '25px',
                                                border: '1px solid #eceff3'
                                            }}>
                                                <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="event-type-item" style={{
                                                        background: '#f8f9fa',
                                                        borderRadius: '8px',
                                                        padding: '15px',
                                                        border: '1px solid #eceff3',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}>
                                                        <span style={{ color: '#1e2247', fontSize: '0.9rem', fontWeight: '500', flex: '1' }}>
                                                            <i className="bi bi-people" style={{ color: '#fdc51a', marginRight: '8px' }}></i>
                                                            HR related; Staff Sick; Staff Late; Shift Swaps; Extra Guard Requests; Overtime
                                                        </span>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="hrRelated" name="eventTypes" value="HR related / staffing / overtime" style={{
                                                                width: '18px',
                                                                height: '18px',
                                                                marginLeft: '15px'
                                                            }} />
                                                            <label className="form-check-label" htmlFor="hrRelated" style={{ color: '#1e2247', marginLeft: '8px', fontWeight: '500' }}>Yes</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>OH&S matters; including "near misses"; onsite injuries; First Aid; Inclimate Weather</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="ohsMatters" name="eventTypes" value="OH&S / near misses / first aid / weather" />
                                                    <label className="form-check-label" htmlFor="ohsMatters" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Security Breaches; Physical Break in's; Lock & Access issues; Patrol KPI Issues; Arrest</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="securityBreaches" name="eventTypes" value="Security breaches / break-ins / access / patrol KPI / arrest" />
                                                    <label className="form-check-label" htmlFor="securityBreaches" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Equipment damage or loss; Missing Items; Uniform Request</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="equipmentDamage" name="eventTypes" value="Equipment damage/loss / missing items / uniform" />
                                                    <label className="form-check-label" htmlFor="equipmentDamage" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>CCTV related OR Thermal Temperature Variations (mention the dropbox *.jpg file names)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="cctvRelated" name="eventTypes" value="CCTV / thermal temperature variations" />
                                                    <label className="form-check-label" htmlFor="cctvRelated" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Emergency Services on Site; Fire Fighting Responses</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="emergencyServices" name="eventTypes" value="Emergency services / fire response" />
                                                    <label className="form-check-label" htmlFor="emergencyServices" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Alarm is Active (Security Alarm Panel, Fire Panel, VESDA, or other equipment)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="alarmActive" name="eventTypes" value="Alarm active (security/fire/VESDA/other)" />
                                                    <label className="form-check-label" htmlFor="alarmActive" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Alarm is Disabled (Late to Close / site not sealed)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="alarmDisabled" name="eventTypes" value="Alarm disabled (late to close / site not sealed)" />
                                                    <label className="form-check-label" htmlFor="alarmDisabled" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Client or Authorised person was still onsite (ie: not an intruder)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="clientOnsite" name="eventTypes" value="Client/authorised person onsite" />
                                                    <label className="form-check-label" htmlFor="clientOnsite" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span style={{color: '#fff'}}>Other Categories / Feedback and Suggestions</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="otherCategories" name="eventTypes" value="Other categories / feedback / suggestions" />
                                                    <label className="form-check-label" htmlFor="otherCategories" style={{color: '#fff'}}>Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Smart Roaster Section */}
                                        {/* Smart Roaster Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Smart ROASTER Scanned?</h4>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label text-dark">Was Roaster scanned?</label>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="roasterScanned" id="roasterYes" value="yes" />
                                                <label className="form-check-label text-dark" htmlFor="roasterYes">Yes</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="roasterScanned" id="roasterNo" value="no" />
                                                <label className="form-check-label text-dark" htmlFor="roasterNo">No (n/a)</label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        {/* Officer Details Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Officer Details</h4>
                                            <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="firstName" className="form-label text-dark">First Name</label>
                                                <input type="text" className="form-control" id="firstName" name="firstName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="lastName" className="form-label text-dark">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" name="lastName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="phone" className="form-label text-dark">Mobile or Landline No.</label>
                                                <input type="tel" className="form-control" id="phone" name="phone" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">Gender</label>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                                <label className="form-check-label " htmlFor="male" style={{color:"#fff"}}>Male</label>
                                                </div>
                                                <div className="form-check" >
                                                <input className="form-check-input" type="radio" name="gender" id="female" value="female"  />
                                                <label className="form-check-label " htmlFor="female" style={{color:"#fff"}}>Female</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="otherGender" value="other" />
                                                <label className="form-check-label" htmlFor="otherGender" style={{color:"#fff"}}>Other</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">Position</label>
                                                <select className="form-select" id="position" name="officerPosition" required>
                                                <option value="">Select Position</option>
                                                <option value="COVID Marshall">COVID Marshall</option>
                                                <option value="Security - Armed (CIT)">Security - Armed (CIT)</option>
                                                <option value="Security - Crowd Controller">Security - Crowd Controller</option>
                                                <option value="K9 Security">K9 Security</option>
                                                <option value="Security - Static / Site Guard">Security - Static / Site Guard</option>
                                                <option value="Security - Gatehouse Guard">Security - Gatehouse Guard</option>
                                                <option value="Security - Mobile Patrols (Car) M1">Security - Mobile Patrols (Car) M1</option>
                                                <option value="Security - Mobile Patrols (Car)">Security - Mobile Patrols (Car)</option>
                                                <option value="Security - Shift Supervisor">Security - Shift Supervisor</option>
                                                <option value="Security - Site Supervisor">Security - Site Supervisor</option>
                                                <option value="Metro Guards Director">Metro Guards Director</option>
                                                <option value="Metro Guards Project Manager">Metro Guards Project Manager</option>
                                                <option value="Investigator / Auditor">Investigator / Auditor</option>
                                                <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="email" className="form-label text-dark">Email Address</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="licenseNo" className="form-label text-dark">Security License No.</label>
                                                <input type="text" className="form-control" id="licenseNo" name="licenseNo" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">License State</label>
                                                <select className="form-select" id="licenseState" name="licenseState" required>
                                                <option value="">Select State</option>
                                                <option value="QLD">QLD</option><option value="NSW">NSW</option><option value="ACT">ACT</option>
                                                <option value="VIC">VIC</option><option value="TAS">TAS</option><option value="NT">NT</option>
                                                <option value="SA">SA</option><option value="WA">WA</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="callsign" className="form-label text-dark">Your Callsign</label>
                                                <input type="text" className="form-control" id="callsign" name="callsign" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="notifiedBy" className="form-label text-dark">Notified By</label>
                                                <input type="text" className="form-control" id="notifiedBy" name="notifiedBy" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="billing" className="form-label text-dark">Billing</label>
                                                <input type="text" className="form-control" id="billing" name="billing" />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Incident Date/Location Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:"#fff"}}>Incident Date / Location</h4>
                                            <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="incidentDate" className="form-label text-dark">Date</label>
                                                <input type="date" className="form-control" id="incidentDate" name="incidentDate" required />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="incidentTime" className="form-label text-dark">Time</label>
                                                <input type="time" className="form-control" id="incidentTime" name="incidentTime" required />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="toDate" className="form-label text-dark">To Date</label>
                                                <input type="date" className="form-control" id="toDate" name="toDate" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="toTime" className="form-label text-dark">To Time</label>
                                                <input type="time" className="form-control" id="toTime" name="toTime" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="jobNo" className="form-label text-dark">JOB No.</label>
                                                <input type="text" className="form-control" id="jobNo" name="jobNo" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="jobTime" className="form-label text-dark">JOB Time:</label>
                                                <input type="time" className="form-control" id="jobTime" name="jobTime" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="form-label text-dark">Patrol:</label>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="patrol" id="external" value="external" />
                                                <label className="form-check-label " style={{color:"#fff"}} htmlFor="external">External</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="patrol" id="internal" value="internal" />
                                                <label className="form-check-label " style={{color:"#fff"}} htmlFor="internal">Internal</label>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="form-label text-dark">License State</label>
                                                <select className="form-select" id="incidentLicenseState" name="incidentLicenseState">
                                                <option value="N/A">N/A</option>
                                                <option value="QLD">QLD</option><option value="NSW">NSW</option><option value="ACT">ACT</option>
                                                <option value="VIC">VIC</option><option value="TAS">TAS</option><option value="NT">NT</option>
                                                <option value="SA">SA</option><option value="WA">WA</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">Client Type</label>
                                                <select className="form-select" id="clientType" name="clientType">
                                                <option value="">Select Client Type</option>
                                                <option value="Automotive">Automotive</option>
                                                <option value="Health & Hospitals">Health & Hospitals</option>
                                                <option value="Hotels & Accomodation">Hotels & Accomodation</option>
                                                <option value="Industrial Sites">Industrial Sites</option>
                                                <option value="Local Council & Leisure Centre">Local Council & Leisure Centre</option>
                                                <option value="Major Events & Concerts">Major Events & Concerts</option>
                                                <option value="Mobile Patrol Car (Adhoc)">Mobile Patrol Car (Adhoc)</option>
                                                <option value="Pubs & Nightclubs">Pubs & Nightclubs</option>
                                                <option value="Retail, Jewellery & Fashion Store">Retail, Jewellery & Fashion Store</option>
                                                <option value="Shopping Centres & Markets">Shopping Centres & Markets</option>
                                                <option value="Schools, Library, & Educational">Schools, Library, & Educational</option>
                                                <option value="Transport Company">Transport Company</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="clientSite" className="form-label text-dark">Client Site</label>
                                                <input type="text" className="form-control" id="clientSite" name="clientSite" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="supervisor" className="form-label text-dark">Supervisor or person you reported this to:</label>
                                                <input type="text" className="form-control" id="supervisor" name="supervisor" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="incidentReport" className="form-label text-dark">Situation / Incident Report or Feedback: for alarm responses ensure Area /Zone /Alarm Description entered</label>
                                                <textarea className="form-control" id="incidentReport" name="incidentReport" rows="5" required></textarea>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="fileAttachments" className="form-label text-dark">File Attachments</label>
                                                <input type="file" className="form-control" id="fileAttachments" name="attachments" multiple />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="text-center mb-4">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="btn btn-primary btn-lg px-5 py-3"
                                                style={{
                                                    borderRadius: "12px",
                                                    fontSize: "1.1rem",
                                                    fontWeight: "600",
                                                    background: "linear-gradient(135deg, #1e2247 0%, #1e2247 100%)",
                                                    border: "2px solid #1e2247",
                                                    color: "#ffffff",
                                                    boxShadow: "0 4px 15px rgba(220, 53, 69, 0.3)",
                                                    transition: "all 0.3s ease",
                                                    position: "relative",
                                                    minWidth: "220px"
                                                }}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span style={{
                                                            display: 'inline-block',
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '2px solid #ffffff',
                                                            borderTop: '2px solid transparent',
                                                            borderRadius: '50%',
                                                            animation: 'spin 1s linear infinite',
                                                            marginRight: '10px'
                                                        }}></span>
                                                        SUBMITTING REPORT...
                                                    </>
                                                ) : (
                                                    <>
                                                        SUBMIT INCIDENT REPORT 
                                                        <i className="bi bi-shield-exclamation" style={{ marginLeft: '8px' }}></i>
                                                    </>
                                                )}
                                            </button>

                                            <div className="submission-notice mt-3" style={{
                                                background: 'rgba(220, 53, 69, 0.1)',
                                                borderRadius: '8px',
                                                padding: '15px',
                                                border: '1px solid rgba(220, 53, 69, 0.2)',
                                                maxWidth: '600px',
                                                margin: '0 auto'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '10px'
                                                }}>
                                                    <i className="bi bi-exclamation-triangle" style={{ color: '#1e2247', fontSize: '1.1rem' }}></i>
                                                    <p style={{
                                                        color: '#1e2247',
                                                        margin: '0',
                                                        fontSize: '0.9rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        Your incident report will be processed immediately and forwarded to the appropriate response team for investigation and action.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    /* Classic Form Styling */
                    .classic-form-input, .form-control, .form-select {
                        border: 2px solid #eceff3 !important;
                        border-radius: 8px !important;
                        padding: 12px 15px !important;
                        font-size: 0.95rem !important;
                        background-color: #fafafa !important;
                        transition: all 0.3s ease !important;
                        color: #495057 !important;
                    }
                    
                    .classic-form-input::placeholder, .form-control::placeholder {
                        color: #6c757d !important;
                    }
                    
                    .classic-form-input:focus, .form-control:focus, .form-select:focus {
                        border-color: #fdc51a !important;
                        background-color: #ffffff !important;
                        box-shadow: 0 0 0 3px rgba(253, 197, 26, 0.1) !important;
                        color: #495057 !important;
                        outline: none !important;
                    }

                    .classic-form-input:hover, .form-control:hover, .form-select:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                    }

                    .form-label, .text-dark {
                        color: #1e2247 !important;
                        font-weight: 500 !important;
                        margin-bottom: 8px !important;
                        font-size: 0.95rem !important;
                    }

                    /* Section styling */
                    .section-box, .form-section {
                        background: rgba(30, 34, 71, 0.02) !important;
                        border-radius: 15px !important;
                        border: 2px solid #eceff3 !important;
                        padding: 30px !important;
                        margin-bottom: 2rem !important;
                        position: relative !important;
                    }

                    .section-box h4 {
                        color: #1e2247 !important;
                        font-family: serif !important;
                        font-weight: 600 !important;
                        margin-bottom: 20px !important;
                        padding-bottom: 10px !important;
                        border-bottom: 2px solid #eceff3 !important;
                    }

                    /* Checkbox and radio styling */
                    .form-check-input {
                        width: 18px !important;
                        height: 18px !important;
                        border-radius: 4px !important;
                        border: 2px solid #eceff3 !important;
                        background-color: #fafafa !important;
                        margin-right: 8px !important;
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
                        font-weight: 500 !important;
                    }

                    /* Override white text styling */
                    [style*="color: #fff"], [style*="color:#fff"], [style*="color: white"] {
                        color: #1e2247 !important;
                    }

                    /* Event type items */
                    .event-type-item {
                        transition: all 0.3s ease !important;
                    }

                    .event-type-item:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
                    }

                    /* Select styling */
                    select.form-select {
                        appearance: none;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1em;
                    }

                    select.form-select option {
                        background: #ffffff !important;
                        color: #495057 !important;
                        padding: 10px !important;
                    }

                    /* Textarea styling */
                    textarea.form-control {
                        resize: vertical !important;
                        min-height: 120px !important;
                    }

                    /* File input styling */
                    input[type="file"].form-control {
                        padding: 8px 12px !important;
                        border: 2px dashed #eceff3 !important;
                        background: #f8f9fa !important;
                    }

                    input[type="file"].form-control:hover {
                        border-color: rgba(253, 197, 26, 0.5) !important;
                        background: #ffffff !important;
                    }

                    /* Submit button hover effects */
                    .btn:hover:not(:disabled) {
                        background: linear-gradient(135deg, #1e2247 0%, #1e2247 100%) !important;
                        border-color: #1e2247 !important;
                        box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4) !important;
                        transform: translateY(-2px) !important;
                    }

                    .btn:active:not(:disabled) {
                        transform: translateY(0px) !important;
                    }

                    .btn:disabled {
                        opacity: 0.7 !important;
                        cursor: not-allowed !important;
                    }

                    /* Spinner animation */
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .incident-categories {
                            flex-direction: column !important;
                            gap: 10px !important;
                        }
                        
                        .event-type-item {
                            flex-direction: column !important;
                            align-items: flex-start !important;
                            gap: 10px !important;
                        }
                    }
                `}</style>
                
                <Accreditation />
                <Subscribe />
            </Layout>

        </>
    )
}