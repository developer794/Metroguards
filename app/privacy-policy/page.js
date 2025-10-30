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
                <div className="privacy-policy-page" style={{ background: '#ffffff', position: 'relative' }}>
                    {/* Decorative Background Icons */}
                    <div style={{ position: 'absolute', top: '100px', left: '5%', opacity: '0.03', fontSize: '120px', color: '#1e2247', zIndex: 1 }}>
                        <i className="bi bi-shield-lock"></i>
                    </div>
                    <div style={{ position: 'absolute', top: '500px', right: '8%', opacity: '0.03', fontSize: '100px', color: '#fdc51a', zIndex: 1 }}>
                        <i className="bi bi-file-earmark-lock"></i>
                    </div>
                    <div style={{ position: 'absolute', top: '1200px', left: '10%', opacity: '0.03', fontSize: '90px', color: '#1e2247', zIndex: 1 }}>
                        <i className="bi bi-key"></i>
                    </div>
                    <div style={{ position: 'absolute', top: '1800px', right: '5%', opacity: '0.03', fontSize: '110px', color: '#fdc51a', zIndex: 1 }}>
                        <i className="bi bi-lock-fill"></i>
                    </div>
                    <div style={{ position: 'absolute', top: '2400px', left: '7%', opacity: '0.03', fontSize: '95px', color: '#1e2247', zIndex: 1 }}>
                        <i className="bi bi-shield-check"></i>
                    </div>
                    
                    {/*===== Introduction Section =====*/}
                    <div className="privacy-intro-section" style={{
                        background: '#ffffff',
                        padding: '100px 0 80px',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-6">
                                    <div className="intro-content">
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: 'rgba(253, 197, 26, 0.1)',
                                            color: '#1e2247',
                                            padding: '10px 20px',
                                            borderRadius: '50px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '24px',
                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                        }}>
                                            <i className="bi bi-shield-check"></i>
                                            Privacy First Approach
                                        </div>
                                        <h2 style={{
                                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                            fontWeight: '800',
                                            color: '#1e2247',
                                            lineHeight: '1.2',
                                            marginBottom: '20px'
                                        }}>
                                            Protecting Your Data with{' '}
                                            <span style={{ color: '#fdc51a' }}>Military-Grade Security</span>
                                        </h2>
                                        <p style={{
                                            fontSize: '1.05rem',
                                            color: '#6c757d',
                                            lineHeight: '1.7',
                                            marginBottom: '35px'
                                        }}>
                                            At Metropolitan Guards, we understand that trust is the foundation of our relationship with you. 
                                            Our comprehensive privacy policy ensures your personal information is protected with the same 
                                            level of security we provide to our clients.
                                        </p>
                                        <div style={{ 
                                            display: 'grid', 
                                            gridTemplateColumns: 'repeat(3, 1fr)', 
                                            gap: '20px',
                                            marginTop: '30px'
                                        }}>
                                            <div style={{
                                                textAlign: 'center',
                                                padding: '20px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(253, 197, 26, 0.1)'
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1e2247', marginBottom: '5px' }}>100%</div>
                                                <div style={{ fontSize: '0.85rem', color: '#6c757d', fontWeight: '600' }}>Compliant</div>
                                            </div>
                                            <div style={{
                                                textAlign: 'center',
                                                padding: '20px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(253, 197, 26, 0.1)'
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1e2247', marginBottom: '5px' }}>24/7</div>
                                                <div style={{ fontSize: '0.85rem', color: '#6c757d', fontWeight: '600' }}>Monitoring</div>
                                            </div>
                                            <div style={{
                                                textAlign: 'center',
                                                padding: '20px',
                                                background: 'rgba(253, 197, 26, 0.05)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(253, 197, 26, 0.1)'
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1e2247', marginBottom: '5px' }}>18+</div>
                                                <div style={{ fontSize: '0.85rem', color: '#6c757d', fontWeight: '600' }}>Years Secure</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                        borderRadius: '20px',
                                        padding: '50px 40px',
                                        boxShadow: '0 20px 60px rgba(30, 34, 71, 0.15)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '-50px',
                                            right: '-50px',
                                            width: '150px',
                                            height: '150px',
                                            background: 'rgba(253, 197, 26, 0.08)',
                                            borderRadius: '50%',
                                            filter: 'blur(40px)'
                                        }}></div>
                                        <div className="privacy-icons" style={{ 
                                            display: 'grid', 
                                            gridTemplateColumns: 'repeat(2, 1fr)', 
                                            gap: '25px',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: '16px',
                                                padding: '25px 20px',
                                                textAlign: 'center',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    background: 'transparent',
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 15px',
                                                    fontSize: '2.2rem',
                                                    color: '#fdc51a',
                                                    border: '2px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-lock-fill"></i>
                                                </div>
                                                <h6 style={{ color: '#fff', marginBottom: '8px', fontWeight: '700', fontSize: '0.95rem' }}>Data Encryption</h6>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: 0, lineHeight: '1.5' }}>Military-grade encryption for all data</p>
                                            </div>
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: '16px',
                                                padding: '25px 20px',
                                                textAlign: 'center',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    background: 'transparent',
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 15px',
                                                    fontSize: '2.2rem',
                                                    color: '#fdc51a',
                                                    border: '2px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-incognito"></i>
                                                </div>
                                                <h6 style={{ color: '#fff', marginBottom: '8px', fontWeight: '700', fontSize: '0.95rem' }}>Privacy First</h6>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: 0, lineHeight: '1.5' }}>Minimal data collection approach</p>
                                            </div>
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: '16px',
                                                padding: '25px 20px',
                                                textAlign: 'center',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    background: 'transparent',
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 15px',
                                                    fontSize: '2.2rem',
                                                    color: '#fdc51a',
                                                    border: '2px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-patch-check-fill"></i>
                                                </div>
                                                <h6 style={{ color: '#fff', marginBottom: '8px', fontWeight: '700', fontSize: '0.95rem' }}>Compliance</h6>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: 0, lineHeight: '1.5' }}>Full Australian law compliance</p>
                                            </div>
                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: '16px',
                                                padding: '25px 20px',
                                                textAlign: 'center',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <div style={{
                                                    width: '65px',
                                                    height: '65px',
                                                    background: 'transparent',
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 15px',
                                                    fontSize: '2.2rem',
                                                    color: '#fdc51a',
                                                    border: '2px solid #fdc51a'
                                                }}>
                                                    <i className="bi bi-hand-thumbs-up-fill"></i>
                                                </div>
                                                <h6 style={{ color: '#fff', marginBottom: '8px', fontWeight: '700', fontSize: '0.95rem' }}>Transparency</h6>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: 0, lineHeight: '1.5' }}>Clear communication always</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Modern Policy Content Section =====*/}
                    <section id="policy" className="modern-policy-section" style={{
                        background: '#f8f9fa',
                        padding: '100px 0',
                        position: 'relative',
                        zIndex: 2,
                        overflow: 'hidden'
                    }}>
                        {/* Section Decorative Icons */}
                        <div style={{ position: 'absolute', top: '50px', right: '3%', opacity: '0.04', fontSize: '150px', color: '#1e2247', zIndex: 0 }}>
                            <i className="bi bi-file-lock"></i>
                        </div>
                        <div style={{ position: 'absolute', bottom: '80px', left: '4%', opacity: '0.04', fontSize: '130px', color: '#fdc51a', zIndex: 0 }}>
                            <i className="bi bi-database-lock"></i>
                        </div>
                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="text-center" style={{ marginBottom: '70px' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(253, 197, 26, 0.1)',
                                    color: '#1e2247',
                                    padding: '10px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '20px',
                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                }}>
                                    <i className="bi bi-shield-lock"></i>
                                    Privacy Policy
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
                                    fontWeight: '800',
                                    color: '#1e2247',
                                    marginBottom: '16px',
                                    lineHeight: '1.2'
                                }}>
                                    How We <span style={{ color: '#fdc51a' }}>Collect, Use & Protect</span> Your Data
                                </h2>
                                <p style={{ fontSize: '1.05rem', color: '#6c757d', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                                    Clear, human-friendly privacy details while staying fully compliant with Australian privacy laws.
                                </p>
                            </div>

                            {/* Intro Card */}
                            <div className="row g-4 mb-5">
                                <div className="col-12">
                                    <div style={{ 
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        boxShadow: '0 10px 40px rgba(30, 34, 71, 0.08)',
                                        border: '1px solid rgba(253, 197, 26, 0.1)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '100px',
                                            height: '100px',
                                            background: 'rgba(253, 197, 26, 0.05)',
                                            borderRadius: '50%',
                                            filter: 'blur(30px)'
                                        }}></div>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative', zIndex: 2 }}>
                                            <div style={{ 
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '16px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '2rem',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-emoji-smile"></i>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h3 style={{ 
                                                    margin: '0 0 16px 0',
                                                    color: '#1e2247',
                                                    fontWeight: '800',
                                                    fontSize: '1.5rem'
                                                }}>Our Commitment to Your Privacy</h3>
                                                <p style={{ 
                                                    margin: 0,
                                                    color: '#6c757d',
                                                    lineHeight: '1.8',
                                                    fontSize: '1rem'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '0.9rem' }}></i>
                                                    Metropolitan Guard Services respects your privacy at all times. When processing your order or application, we collect personal information about you for the primary purpose of providing you with a high level of customer service.
                                                    <br/><br/>
                                                    <i className="bi bi-check-circle-fill" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '0.9rem' }}></i>
                                                    We may also use this information to inform you of any changes to the services provided or to notify you of new services that may become available. As we value your privacy, we do not make your personal information available to other organisations, and you have the right to access your information at any time.
                                                    <br/><br/>
                                                    <i className="bi bi-telephone-fill" style={{ color: '#fdc51a', marginRight: '8px', fontSize: '0.9rem' }}></i>
                                                    Please direct any privacy-related enquiries to our Privacy Officer on <strong style={{ color: '#1e2247' }}>1300 73 11 73</strong> or by email at <strong style={{ color: '#1e2247' }}><i className="bi bi-envelope-fill" style={{ color: '#fdc51a', marginRight: '6px', fontSize: '0.85rem' }}></i>admin@metroguards.com.au</strong>
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
                                    <div style={{ 
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.08)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: '0.05', fontSize: '80px', color: '#1e2247', zIndex: 0 }}>
                                            <i className="bi bi-collection"></i>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.4rem',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                            }}>
                                                <i className="bi bi-shield-lock"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>Collection and Use of Information</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: '20px' }}>
                                            We may also use this information to inform you of any changes to the services provided or of new services that may become available. The types of personal information we collect may include:
                                        </p>
                                        <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                                                <div style={{ 
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(253, 197, 26, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '12px',
                                                    marginTop: '2px',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-check" style={{ color: '#fdc51a', fontSize: '0.85rem', fontWeight: 'bold' }}></i>
                                                </div>
                                                <span style={{ color: '#6c757d', lineHeight: '1.6' }}>Contact details (name, address, email, phone number)</span>
                                            </li>
                                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                                                <div style={{ 
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(253, 197, 26, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '12px',
                                                    marginTop: '2px',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-check" style={{ color: '#fdc51a', fontSize: '0.85rem', fontWeight: 'bold' }}></i>
                                                </div>
                                                <span style={{ color: '#6c757d', lineHeight: '1.6' }}>Identification information for security clearance purposes</span>
                                            </li>
                                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                                                <div style={{ 
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(253, 197, 26, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '12px',
                                                    marginTop: '2px',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-check" style={{ color: '#fdc51a', fontSize: '0.85rem', fontWeight: 'bold' }}></i>
                                                </div>
                                                <span style={{ color: '#6c757d', lineHeight: '1.6' }}>Payment and billing information</span>
                                            </li>
                                            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                <div style={{ 
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(253, 197, 26, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '12px',
                                                    marginTop: '2px',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-check" style={{ color: '#fdc51a', fontSize: '0.85rem', fontWeight: 'bold' }}></i>
                                                </div>
                                                <span style={{ color: '#6c757d', lineHeight: '1.6' }}>Service preferences and history</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Information Disclosure */}
                                <div className="col-md-6">
                                    <div style={{ 
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.08)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: '0.05', fontSize: '80px', color: '#fdc51a', zIndex: 0 }}>
                                            <i className="bi bi-shield-lock-fill"></i>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.4rem',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-lock"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>Information Disclosure</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0 }}>
                                            As we value your privacy, we do not make your personal information available to other organisations without your consent, except where required by law or as necessary to provide our services to you.
                                        </p>
                                    </div>
                                </div>

                                {/* Access to Your Information */}
                                <div className="col-md-6">
                                    <div style={{ 
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.08)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: '0.05', fontSize: '80px', color: '#fdc51a', zIndex: 0 }}>
                                            <i className="bi bi-person-check-fill"></i>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.4rem',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-eye"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>Access to Your Information</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0 }}>
                                            You have the right to gain access to your information at any time. If you would like to access or correct your personal information, please contact our Privacy Officer.
                                        </p>
                                    </div>
                                </div>

                                {/* Data Security */}
                                <div className="col-md-6">
                                    <div style={{ 
                                        background: '#ffffff',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 10px 30px rgba(30, 34, 71, 0.08)',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.08)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: '0.05', fontSize: '80px', color: '#1e2247', zIndex: 0 }}>
                                            <i className="bi bi-lock-fill"></i>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.4rem',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                            }}>
                                                <i className="bi bi-shield-check"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.2rem' }}>Data Security</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', lineHeight: '1.7', marginBottom: 0 }}>
                                            We take reasonable steps to protect all personal information we hold from misuse, interference and loss, and from unauthorised access, modification or disclosure. This protection includes physical security for paper records and electronic security for digital information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    

                    {/*===== Modern Compliance Section =====*/}
                    <section id="compliance" className="modern-compliance-section" style={{
                        background: '#ffffff',
                        padding: '100px 0',
                        position: 'relative',
                        zIndex: 2,
                        overflow: 'hidden'
                    }}>
                        {/* Compliance Section Decorative Icons */}
                        <div style={{ position: 'absolute', top: '100px', left: '2%', opacity: '0.04', fontSize: '140px', color: '#fdc51a', zIndex: 0 }}>
                            <i className="bi bi-award"></i>
                        </div>
                        <div style={{ position: 'absolute', bottom: '100px', right: '3%', opacity: '0.04', fontSize: '160px', color: '#1e2247', zIndex: 0 }}>
                            <i className="bi bi-patch-check"></i>
                        </div>
                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Header */}
                            <div className="text-center" style={{ marginBottom: '70px' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(253, 197, 26, 0.1)',
                                    color: '#1e2247',
                                    padding: '10px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    marginBottom: '20px',
                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                }}>
                                    <i className="bi bi-badge-check"></i>
                                    Regulatory Compliance
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
                                    fontWeight: '800',
                                    color: '#1e2247',
                                    marginBottom: '16px',
                                    lineHeight: '1.2'
                                }}>
                                    Our Privacy <span style={{ color: '#fdc51a' }}>Commitments</span>
                                </h2>
                                <p style={{ fontSize: '1.05rem', color: '#6c757d', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                                    We adhere to Australian regulations and best practices to keep your data safe and secure.
                                </p>
                            </div>

                            {/* Compliance Cards */}
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4">
                                    <div style={{ 
                                        background: '#f8f9fa',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.06)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                marginBottom: '20px',
                                                boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                            }}>
                                                <i className="bi bi-file-earmark-text"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.15rem' }}>Privacy Act 1988</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0, lineHeight: '1.7' }}>
                                            Compliance with Australian Privacy Principles (APPs) for collection, use, and disclosure of personal information.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ 
                                        background: '#f8f9fa',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.06)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                marginBottom: '20px',
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-shield-check"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.15rem' }}>Data Protection</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0, lineHeight: '1.7' }}>
                                            Technical and organizational measures including encryption, access controls, and audit trails.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ 
                                        background: '#f8f9fa',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.06)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                marginBottom: '20px',
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-people"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.15rem' }}>Staff Training</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0, lineHeight: '1.7' }}>
                                            Regular privacy awareness and secure-handling training for personnel with data access.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ 
                                        background: '#f8f9fa',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.06)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5a 100%)',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                marginBottom: '20px',
                                                boxShadow: '0 8px 20px rgba(30, 34, 71, 0.2)'
                                            }}>
                                                <i className="bi bi-activity"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.15rem' }}>Incident Response</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0, lineHeight: '1.7' }}>
                                            Defined procedures for detection, notification, and remediation of security incidents.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ 
                                        background: '#f8f9fa',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.06)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                marginBottom: '20px',
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-diagram-3"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.15rem' }}>Third-Party Processors</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0, lineHeight: '1.7' }}>
                                            Due diligence and contractual safeguards with suppliers handling personal data.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div style={{ 
                                        background: '#f8f9fa',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        border: '1px solid rgba(30, 34, 71, 0.06)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ 
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #fdc51a 100%)',
                                                color: '#1e2247',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                marginBottom: '20px',
                                                boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                            }}>
                                                <i className="bi bi-globe"></i>
                                            </div>
                                            <h4 style={{ margin: 0, color: '#1e2247', fontWeight: '800', fontSize: '1.15rem' }}>International Transfers</h4>
                                        </div>
                                        <p style={{ color: '#6c757d', marginBottom: 0, lineHeight: '1.7' }}>
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