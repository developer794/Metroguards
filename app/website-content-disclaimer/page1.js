"use client";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Accrediation10 from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"


export default function TermsConditionsPage() {
    const [activeSection, setActiveSection] = useState('definitions');

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Terms & Conditions"
                mainTitle="Terms & Conditions"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/C38803E5-A7C7-472E-839D-290BBEA65378_1_105_c.webp"
                subtitle="Legal Terms and Conditions for Metropolitan Security Services in Melbourne"
            >
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="terms-hero-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 mx-auto text-center">
                                    <div className="hero-content">
                                        <div className="hero-badge">
                                            <i className="bi bi-file-text"></i>
                                            <span>Legal Information</span>
                                        </div>
                                        <h1 className="hero-title">Terms & Conditions</h1>
                                        <p className="hero-description">
                                            Please read these terms and conditions carefully before engaging our security services. 
                                            These conditions govern the agreement between Metropolitan Security and our clients.
                                        </p>
                                        <div className="hero-stats">
                                            <div className="stat-item">
                                                <h3>12</h3>
                                                <p>Main Sections</p>
                                            </div>
                                            <div className="stat-item">
                                                <h3>50+</h3>
                                                <p>Clauses Covered</p>
                                            </div>
                                            <div className="stat-item">
                                                <h3>100%</h3>
                                                <p>Transparent</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Table of Contents =====*/}
                    <div className="toc-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="toc-wrapper">
                                        <h3 className="toc-title">Table of Contents</h3>
                                        <div className="toc-grid">
                                            <button 
                                                className={`toc-item ${activeSection === 'definitions' ? 'active' : ''}`}
                                                onClick={() => scrollToSection('definitions')}
                                            >
                                                <i className="bi bi-book"></i>
                                                <span>1. Definitions</span>
                                            </button>
                                            <button 
                                                className={`toc-item ${activeSection === 'appointment' ? 'active' : ''}`}
                                                onClick={() => scrollToSection('appointment')}
                                            >
                                                <i className="bi bi-person-check"></i>
                                                <span>2. Appointment</span>
                                            </button>
                                            <button 
                                                className={`toc-item ${activeSection === 'services' ? 'active' : ''}`}
                                                onClick={() => scrollToSection('services')}
                                            >
                                                <i className="bi bi-gear"></i>
                                                <span>3. Services</span>
                                            </button>
                                            <button 
                                                className={`toc-item ${activeSection === 'obligations' ? 'active' : ''}`}
                                                onClick={() => scrollToSection('obligations')}
                                            >
                                                <i className="bi bi-shield-check"></i>
                                                <span>4. Obligations</span>
                                            </button>
                                            <button 
                                                className={`toc-item ${activeSection === 'payment' ? 'active' : ''}`}
                                                onClick={() => scrollToSection('payment')}
                                            >
                                                <i className="bi bi-credit-card"></i>
                                                <span>5. Payment</span>
                                            </button>
                                            <button 
                                                className={`toc-item ${activeSection === 'general' ? 'active' : ''}`}
                                                onClick={() => scrollToSection('general')}
                                            >
                                                <i className="bi bi-file-earmark-text"></i>
                                                <span>6. General</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Terms Content Section =====*/}
                    <div className="terms-content-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="terms-content">
                                        
                                        {/*===== Section 1 =====*/}
                                        <div id="definitions" className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">01</div>
                                                    <h3 className="section-title">Definitions and Interpretation</h3>
                                                </div>
                                                <div className="section-content">
                                                    <h4 className="subsection-title">1.1 Definitions</h4>
                                                    <p className="section-description">In this agreement:</p>
                                                    
                                                    <div className="definition-list">
                                                        <div className="definition-item">
                                                            <div className="definition-term">CCA</div>
                                                            <div className="definition-text">means Schedule 2 to the Competition and Consumer Act 2010 (Cth) and the corresponding provisions of the applicable fair trading legislation in the State or Territory in which this agreement is entered into, as applicable.</div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Additional Provisions</div>
                                                            <div className="definition-text">means the additional provisions set out in item 9.</div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Australian Consumer Law</div>
                                                            <div className="definition-text">means the Australian Consumer Law as set out at Schedule 2 of the CCA.</div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Business Day</div>
                                                            <div className="definition-text">means:
                                                                <ul>
                                                                    <li>for the purposes of clause 11.4, a day on which banks are open for business in the city where the notice or other communication is received excluding a Saturday, Sunday or public holiday; and</li>
                                                                    <li>for all other purposes, a day on which banks are open for business in the State excluding a Saturday, Sunday or public holiday.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Claim</div>
                                                            <div className="definition-text">means any claim or cause of action in contract, tort, under any legislation or subordinate legislation, or otherwise.</div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Client Group</div>
                                                            <div className="definition-text">means the Client and each of its Related Bodies Corporate and Client Group Member means any member of the Client Group.</div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Client's Obligations</div>
                                                            <div className="definition-text">means all of the liabilities, obligations and requirements (whether express or implied) from time to time imposed on, or assumed by, the Client:
                                                                <ul>
                                                                    <li>under this deed, or arising from this deed; or</li>
                                                                    <li>under any law relating to this deed or anything the Client must do under this deed.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="definition-item">
                                                            <div className="definition-term">Confidential Information</div>
                                                            <div className="definition-text">means any information:
                                                                <ul>
                                                                    <li>relating to the products and services, business and affairs, or any customers, clients, employees, subcontractors or other persons doing business with or of that party;</li>
                                                                    <li>relating to the provisions of this agreement or the commercial arrangements between the parties;</li>
                                                                    <li>that is by its nature confidential, designated as confidential by that party, or which the other party knows, or ought to know, is confidential.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Section 2 =====*/}
                                        <div id="appointment" className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">02</div>
                                                    <h3 className="section-title">Appointment of Metro Guards</h3>
                                                </div>
                                                <div className="section-content">
                                                    <ul className="terms-list">
                                                        <li>The Client engages Metro Guards to provide the Services, and Metro Guards accepts that engagement and must perform the Services in accordance with this agreement.</li>
                                                        <li>Metro Guards will provide the Services on an exclusive basis and the Client must not engage other parties to provide equivalent services instead of the Services.</li>
                                                        <li>The Services to be provided by Metro Guards under this agreement do not include any Excluded Services.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Section 3 =====*/}
                                        <div id="services" className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">03</div>
                                                    <h3 className="section-title">Provision of Services</h3>
                                                </div>
                                                <div className="section-content">
                                                    <h4 className="subsection-title">3.1 Supply of Services</h4>
                                                    <p>Metro Guards must provide the Services to the Client at the Site and, subject to clause 3.5, the services as listed in item 4 are the only Services that Metro Guards must provide.</p>
                                                    
                                                    <h4 className="subsection-title">3.2 Acknowledgement of Services</h4>
                                                    <p>The parties acknowledge and agree that:</p>
                                                    <ul className="terms-list">
                                                        <li>the Service Fee is based solely on the value of the Services provided by Metro Guards and is unrelated to the value of the Client's property located or held at the Site or the property of others located in the vicinity of the Site; and</li>
                                                        <li>Metro Guards delivers and the Client accepts the Services on the basis that they are of a deterrent nature only and Metro Guards cannot guarantee that the provision of the Services will prevent all or any security incidents.</li>
                                                    </ul>
                                                    
                                                    <h4 className="subsection-title">3.3 Shared Services and Replacement Services</h4>
                                                    <p>The Client acknowledges that:</p>
                                                    <ul className="terms-list">
                                                        <li>the Services may be shared with other clients of Metro Guards located in the vicinity of the Site;</li>
                                                        <li>any interruptions or delays caused by break-ins, emergencies, busy periods or unforeseen circumstances may alter the Services provided;</li>
                                                        <li>Metro Guards will endeavour to provide replacement inspections for missed services;</li>
                                                        <li>Credit notes will be provided for missed services that cannot be replaced.</li>
                                                    </ul>

                                                    <h4 className="subsection-title">3.4 Additional Services</h4>
                                                    <p>For Additional Services:</p>
                                                    <ul className="terms-list">
                                                        <li><strong>Adhoc or Casual Services (0 to 3 months):</strong> Clients must provide a minimum of 48 hours' notice for any cancellations or changes.</li>
                                                        <li><strong>Permanent Shift Changes:</strong> Clients must provide at least 30 days' notice prior to cancellation or amendment.</li>
                                                    </ul>

                                                    <h4 className="subsection-title">3.5 Assignment and Subcontracting</h4>
                                                    <p>Metro Guards may assign its rights and subcontract obligations to authorized security companies including State Security Solution Pty Ltd, Sentinel Alpha Pty Ltd, Proactive Protection and Security Services Pty Ltd, and Wilson Security Pty Ltd.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Section 4 =====*/}
                                        <div id="obligations" className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">04</div>
                                                    <h3 className="section-title">Metro Guards's General Obligations</h3>
                                                </div>
                                                <div className="section-content">
                                                    <p>Metro Guards will perform the Services to the Client's reasonable satisfaction and must:</p>
                                                    <ul className="terms-list">
                                                        <li>Use reasonable endeavours to not unreasonably interfere with normal site usage;</li>
                                                        <li>Make good any damage caused by negligence or wilful default;</li>
                                                        <li>Comply with all relevant laws and mandatory industry codes;</li>
                                                        <li>Comply with the Client's reasonable OH&S and security policies.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Section 5 =====*/}
                                        <div className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">05</div>
                                                    <h3 className="section-title">Client's General Obligations</h3>
                                                </div>
                                                <div className="section-content">
                                                    <p>The Client must provide:</p>
                                                    <ul className="terms-list">
                                                        <li>All necessary information, materials, and assistance;</li>
                                                        <li>Safe and sufficient access to all parts of the site;</li>
                                                        <li>Access to electricity, water, and other utilities as required;</li>
                                                        <li>A safe working environment with appropriate site supervision;</li>
                                                        <li>Details of any previous incidents and reasons for engaging security;</li>
                                                        <li>Risk management plan, Job Safety Analysis, and Safe Work Method Statements.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Section 6 =====*/}
                                        <div id="payment" className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">06</div>
                                                    <h3 className="section-title">Service Fees and Payment</h3>
                                                </div>
                                                <div className="section-content">
                                                    <h4 className="subsection-title">6.1 Service Fees</h4>
                                                    <ul className="terms-list">
                                                        <li>Service Fees may be varied by Metro Guards based on wage increases and other cost factors;</li>
                                                        <li>Clients will be notified at least 30 days prior to fee variations;</li>
                                                        <li>Clients may terminate the agreement if unable to resolve fee objections.</li>
                                                    </ul>
                                                    
                                                    <h4 className="subsection-title">6.2 Payment Terms</h4>
                                                    <ul className="terms-list">
                                                        <li>Invoices must be paid within 14 days of the invoice date;</li>
                                                        <li>Time is of the essence for payment of Money Payable;</li>
                                                        <li>Failure to pay may result in service suspension, termination, or legal action;</li>
                                                        <li>Client must pay collection costs including legal fees on full indemnity basis.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Section 7-12 =====*/}
                                        <div id="general" className="terms-section">
                                            <div className="section-card">
                                                <div className="section-header">
                                                    <div className="section-number">07-12</div>
                                                    <h3 className="section-title">Additional Provisions</h3>
                                                </div>
                                                <div className="section-content">
                                                    <h4 className="subsection-title">7. Confidential Information</h4>
                                                    <p>Both parties must keep confidential information secure and only use or disclose on a 'need to know' basis with proper authorization.</p>
                                                    
                                                    <h4 className="subsection-title">8. Term and Termination</h4>
                                                    <ul className="terms-list">
                                                        <li>Agreement continues for the Initial Period and automatically extends unless terminated;</li>
                                                        <li>Either party may terminate with 30 days written notice after the Initial Period;</li>
                                                        <li>Immediate termination available for material breach or insolvency events.</li>
                                                    </ul>
                                                    
                                                    <h4 className="subsection-title">9. Indemnity</h4>
                                                    <p>Each party indemnifies the other for losses arising from failure to perform obligations or negligence/wilful default.</p>
                                                    
                                                    <h4 className="subsection-title">10. Limits on Liability</h4>
                                                    <ul className="terms-list">
                                                        <li>Liability is limited to direct loss and damage;</li>
                                                        <li>Indirect and consequential loss is excluded;</li>
                                                        <li>Total liability is capped at the Liability Limit;</li>
                                                        <li>Claims must be notified within 7 days;</li>
                                                        <li>Various exclusions apply for circumstances beyond reasonable control.</li>
                                                    </ul>
                                                    
                                                    <h4 className="subsection-title">11. General Provisions</h4>
                                                    <ul className="terms-list">
                                                        <li><strong>Governing Law:</strong> This agreement is governed by State/Territory law where entered into;</li>
                                                        <li><strong>Notices:</strong> Must be in writing and delivered by hand, post, fax, or email;</li>
                                                        <li><strong>Variation:</strong> Agreement may only be varied in writing by both parties;</li>
                                                        <li><strong>Force Majeure:</strong> Performance suspended during Force Majeure Events.</li>
                                                    </ul>
                                                    
                                                    <h4 className="subsection-title">12. GST and Taxation</h4>
                                                    <ul className="terms-list">
                                                        <li>Metro Guards must pay all taxes and government charges;</li>
                                                        <li>GST is additional to quoted prices unless expressly included;</li>
                                                        <li>Adjustments made for GST variations as required by law.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact Information Section =====*/}
                    
                </div>
                <Accrediation10 />
                <Subscribe />
            </Layout>

            <style jsx global>{`
                /* Terms Page Styles */
                .terms-hero-section {
                    background: #ffffff;
                    padding: 120px 0;
                    position: relative;
                    overflow: hidden;
                }

                .terms-hero-section::before {
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
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    padding: 12px 25px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .hero-title {
                    font-size: 4rem;
                    font-weight: 800;
                    color: #1e2247;
                    margin-bottom: 25px;
                    line-height: 1.2;
                }

                .hero-description {
                    font-size: 1.3rem;
                    color: #6c757d;
                    margin-bottom: 50px;
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .hero-stats {
                    display: flex;
                    gap: 60px;
                    justify-content: center;
                    margin-top: 50px;
                }

                .stat-item {
                    text-align: center;
                    color: #1e2247;
                }

                .stat-item h3 {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #fdc51a;
                }

                .stat-item p {
                    font-size: 1.1rem;
                    margin: 0;
                    color: #6c757d;
                    font-weight: 500;
                }

                /* Table of Contents */
                .toc-section {
                    padding: 80px 0;
                    background: #f8f9fa;
                }

                .toc-wrapper {
                    background: white;
                    border-radius: 25px;
                    padding: 50px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(253, 197, 26, 0.2);
                }

                .toc-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 40px;
                    text-align: center;
                }

                .toc-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                }

                .toc-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 20px 25px;
                    background: #f8f9fa;
                    border: 2px solid transparent;
                    border-radius: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e2247;
                }

                .toc-item:hover {
                    background: #1e2247;
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(30, 34, 71, 0.3);
                }

                .toc-item.active {
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    color: #1e2247;
                    border-color: #fdc51a;
                    box-shadow: 0 10px 25px rgba(253, 197, 26, 0.3);
                }

                .toc-item i {
                    font-size: 1.5rem;
                    flex-shrink: 0;
                }

                /* Terms Content Section */
                .terms-content-section {
                    padding: 100px 0;
                    background: white;
                }

                .terms-content {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .terms-section {
                    margin-bottom: 60px;
                }

                .section-card {
                    background: white;
                    border-radius: 25px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(253, 197, 26, 0.2);
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .section-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
                }

                .section-header {
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    padding: 40px 50px;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .section-number {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #1e2247;
                    font-size: 2rem;
                    font-weight: 800;
                    flex-shrink: 0;
                }

                .section-title {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: white;
                    margin: 0;
                    line-height: 1.3;
                }

                .section-content {
                    padding: 50px;
                }

                .subsection-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin: 30px 0 20px 0;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #fdc51a;
                }

                .section-description {
                    font-size: 1.1rem;
                    color: #6c757d;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }

                .definition-list {
                    margin: 30px 0;
                }

                .definition-item {
                    background: #f8f9fa;
                    border-left: 4px solid #fdc51a;
                    padding: 25px;
                    margin-bottom: 20px;
                    border-radius: 0 15px 15px 0;
                    transition: all 0.3s ease;
                }

                .definition-item:hover {
                    background: #e8f5e8;
                    transform: translateX(5px);
                }

                .definition-term {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #1e2247;
                    margin-bottom: 10px;
                }

                .definition-text {
                    font-size: 1rem;
                    color: #6c757d;
                    line-height: 1.6;
                }

                .terms-list {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0;
                }

                .terms-list li {
                    position: relative;
                    padding: 15px 0 15px 30px;
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 1.1rem;
                }

                .terms-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 15px;
                    color: #fdc51a;
                    font-weight: 700;
                    font-size: 1.2rem;
                }

                /* Contact Section */
                .contact-info-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
                    position: relative;
                    overflow: hidden;
                }

                .contact-info-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 60%),
                        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
                    pointer-events: none;
                }

                .contact-banner {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    padding: 60px 50px;
                    position: relative;
                    z-index: 2;
                }

                .contact-content {
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .contact-text {
                    flex: 1;
                }

                .contact-text h3 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 20px;
                }

                .contact-text p {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.6;
                    margin: 0;
                }

                .contact-buttons {
                    display: flex;
                    gap: 20px;
                    flex-shrink: 0;
                }

                .btn-primary, .btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 18px 35px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #fdc51a, #f39c12);
                    color: #1e2247;
                }

                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(253, 197, 26, 0.4);
                }

                .btn-secondary {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                }

                .btn-secondary:hover {
                    background: white;
                    color: #1e2247;
                    transform: translateY(-3px);
                }

                /* Responsive Design */
                @media (max-width: 991px) {
                    .hero-title {
                        font-size: 3rem;
                    }

                    .hero-stats {
                        gap: 40px;
                    }

                    .toc-grid {
                        grid-template-columns: 1fr;
                    }

                    .contact-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .contact-buttons {
                        justify-content: center;
                    }

                    .section-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                    }

                    .section-content {
                        padding: 40px 30px;
                    }
                }

                @media (max-width: 767px) {
                    .terms-hero-section {
                        padding: 80px 0;
                    }

                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: 30px;
                    }

                    .toc-wrapper {
                        padding: 30px 20px;
                    }

                    .toc-title {
                        font-size: 2rem;
                    }

                    .section-header {
                        padding: 30px 25px;
                    }

                    .section-number {
                        width: 60px;
                        height: 60px;
                        font-size: 1.5rem;
                    }

                    .section-title {
                        font-size: 1.8rem;
                    }

                    .contact-banner {
                        padding: 40px 30px;
                    }

                    .contact-text h3 {
                        font-size: 2rem;
                    }

                    .contact-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary, .btn-secondary {
                        padding: 15px 30px;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    )
}