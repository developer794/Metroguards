import Layout from "@/components/layout/Layout"
import Accreditation from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"

export const metadata = {
  title: 'Privacy Policy - Metropolitan Guards Security Services',
  description: 'Learn how Metropolitan Guards Security Services collects, uses, and protects your personal information in accordance with Australian privacy laws.',
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                headTitle="Privacy Policy - Metropolitan Guards Security Services"
                breadcrumbTitle="Privacy & Data Protection"
                mainTitle="Your Privacy is Our <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Priority</span>"
                subtitle="We are committed to protecting your personal information and maintaining the highest standards of data security and privacy compliance."
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/D5291C45-935B-4A29-96B6-70E5C0EF353A_1_105_c.webp"
            >
                <div className="privacy-policy-page">
                    {/*===== Introduction Section =====*/}
                    <div className="privacy-intro-section" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        padding: '80px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="intro-content" data-aos="fade-right">
                                        <div className="intro-badge" style={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                            color: '#1e2247',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '30px',
                                            boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="bi bi-shield-check me-2"></i>
                                            Privacy First Approach
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                            fontWeight: '700',
                                            color: '#1e2247',
                                            lineHeight: '1.2',
                                            marginBottom: '25px'
                                        }}>
                                            Protecting Your Data with 
                                            <span style={{
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}> Military-Grade Security</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#6c757d',
                                            lineHeight: '1.6',
                                            marginBottom: '35px'
                                        }}>
                                            At Metropolitan Guards, we understand that trust is the foundation of our relationship with you. 
                                            Our comprehensive privacy policy ensures your personal information is protected with the same 
                                            level of security we provide to our clients.
                                        </p>
                                        <div className="intro-stats" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                                            <div className="stat-item">
                                                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>100%</div>
                                                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Compliant</div>
                                            </div>
                                            <div className="stat-item">
                                                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>24/7</div>
                                                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Monitoring</div>
                                            </div>
                                            <div className="stat-item">
                                                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>18+</div>
                                                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Years Secure</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="intro-visual" data-aos="fade-left" style={{ position: 'relative' }}>
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)',
                                            borderRadius: '20px',
                                            padding: '40px',
                                            boxShadow: '0 20px 40px rgba(30, 34, 71, 0.2)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-50px',
                                                right: '-50px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'rgba(253, 197, 26, 0.1)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '-30px',
                                                left: '-30px',
                                                width: '60px',
                                                height: '60px',
                                                background: 'rgba(253, 197, 26, 0.15)',
                                                borderRadius: '50%'
                                            }}></div>
                                            <div className="privacy-icons" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-shield-lock"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Data Encryption</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Military-grade encryption for all data</p>
                                                </div>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-eye-slash"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Privacy First</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Minimal data collection approach</p>
                                                </div>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-check-circle"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Compliance</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Full Australian law compliance</p>
                                                </div>
                                                <div className="icon-item text-center">
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 15px',
                                                        fontSize: '2rem',
                                                        color: '#1e2247'
                                                    }}>
                                                        <i className="bi bi-people"></i>
                                                    </div>
                                                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>Transparency</h5>
                                                    <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>Clear communication always</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Modern Policy Content Section =====*/}
                    <section id="policy" className="modern-policy-section" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f6f7fb 100%)',
                        padding: '100px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background */}
                        <div style={{ position: 'absolute', top: '-140px', right: '-140px', width: '340px', height: '340px', background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.06) 0%, rgba(253, 197, 26, 0.04) 100%)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
                        <div style={{ position: 'absolute', bottom: '-160px', left: '-160px', width: '420px', height: '420px', background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.04) 0%, rgba(30, 34, 71, 0.03) 100%)', borderRadius: '50%', filter: 'blur(90px)' }}></div>

                        <div className="container">
                            {/* Section Header */}
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                    color: '#1e2247',
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '24px',
                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                }}>
                                    <i className="bi bi-shield-lock me-2"></i>
                                    Privacy Policy
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                                    fontWeight: 700,
                                    color: '#1e2247',
                                    marginBottom: '12px'
                                }}>
                                    How We <span style={{
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>Collect, Use & Protect</span> Your Data
                                </h2>
                                <p style={{ fontSize: '1.05rem', color: '#6c757d', maxWidth: '780px', margin: '0 auto' }}>
                                    Clear, human-friendly privacy details while staying fully compliant with Australian privacy laws.
                                </p>
                            </div>

                            {/* Intro Card */}
                            <div className="row g-4 mb-4">
                                <div className="col-12">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderLeft: '6px solid #fdc51a', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#1e2247', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                                                <i className="bi bi-emoji-smile"></i>
                                            </div>
                                            <div>
                                                <h3 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.25rem' }}>Our Commitment to Your Privacy</h3>
                                                <p style={{ margin: '8px 0 0', color: '#6c757d' }}>
                                                    Metropolitan Guard Services respects your privacy at all times. When processing your order or application, we collect personal information about you for the primary purpose of providing you with a high level of customer service.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Policy Cards Grid */}
                            <div className="row g-4">
                                {/* Collection & Use */}
                                <div className="col-md-6">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-shield-lock"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Collection and Use of Information</h4>
                                        </div>
                                        <p style={{ color: '#6c757d' }}>
                                            We may also use this information to inform you of any changes to the services provided or of new services that may become available. The types of personal information we collect may include:
                                        </p>
                                        <ul className="list-unstyled ms-1" style={{ marginBottom: 0 }}>
                                            <li className="mb-2 d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>Contact details (name, address, email, phone number)</li>
                                            <li className="mb-2 d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>Identification information for security clearance purposes</li>
                                            <li className="mb-2 d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>Payment and billing information</li>
                                            <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>Service preferences and history</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Information Disclosure */}
                                <div className="col-md-6">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#1e2247', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-lock"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Information Disclosure</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            As we value your privacy, we do not make your personal information available to other organisations without your consent, except where required by law or as necessary to provide our services to you.
                                        </p>
                                    </div>
                                </div>

                                {/* Access to Your Information */}
                                <div className="col-md-6">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-eye"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Access to Your Information</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            You have the right to gain access to your information at any time. If you would like to access or correct your personal information, please contact our Privacy Officer.
                                        </p>
                                    </div>
                                </div>

                                {/* Data Security */}
                                <div className="col-md-6">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-shield-check"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Data Security</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            We take reasonable steps to protect all personal information we hold from misuse, interference and loss, and from unauthorised access, modification or disclosure. This protection includes physical security for paper records and electronic security for digital information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    

                    {/*===== Modern Compliance Section =====*/}
                    <section id="compliance" className="modern-compliance-section" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f6f7fb 100%)',
                        padding: '100px 0',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background elements */}
                        <div style={{ position: 'absolute', top: '-140px', right: '-140px', width: '340px', height: '340px', background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.06) 0%, rgba(253, 197, 26, 0.04) 100%)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
                        <div style={{ position: 'absolute', bottom: '-160px', left: '-160px', width: '420px', height: '420px', background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.04) 0%, rgba(30, 34, 71, 0.03) 100%)', borderRadius: '50%', filter: 'blur(90px)' }}></div>

                        <div className="container">
                            {/* Header */}
                            <div className="text-center" style={{ marginBottom: '60px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                    color: '#1e2247',
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '24px',
                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                }}>
                                    <i className="bi bi-badge-check me-2"></i>
                                    Regulatory Compliance
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                                    fontWeight: 700,
                                    color: '#1e2247',
                                    marginBottom: '12px'
                                }}>
                                    Our Privacy <span style={{
                                        background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>Commitments</span>
                                </h2>
                                <p style={{ fontSize: '1.05rem', color: '#6c757d', maxWidth: '760px', margin: '0 auto' }}>
                                    We adhere to Australian regulations and best practices to keep your data safe and secure.
                                </p>
                            </div>

                            {/* Compliance Cards */}
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-file-earmark-text"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Privacy Act 1988</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            Compliance with Australian Privacy Principles (APPs) for collection, use, and disclosure of personal information.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-shield-check"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Data Protection</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            Technical and organizational measures including encryption, access controls, and audit trails.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#1e2247', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-people"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Staff Training</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            Regular privacy awareness and secure-handling training for personnel with data access.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #1e2247 0%, #1e2247 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-activity"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Incident Response</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            Defined procedures for detection, notification, and remediation of security incidents.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-diagram-3"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>Third-Party Processors</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            Due diligence and contractual safeguards with suppliers handling personal data.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ background: '#fff', border: '1px solid #eff0f3', borderRadius: '18px', padding: '26px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                <i className="bi bi-globe"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: 700, fontSize: '1.1rem' }}>International Transfers</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0 }}>
                                            Safeguards in place for cross-border data transfers where applicable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}