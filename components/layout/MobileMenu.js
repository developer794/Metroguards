"use client"
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {

    const [isActive, setIsActive] = useState({status: false, key: ""});
    const [openSections, setOpenSections] = useState({
        static: false,
        crowd: false,
        mobile: false,
        k9: false,
    });

    const handleToggle = (key) =>
        setIsActive((prev) =>
            prev.key === key ? { status: false, key: "" } : { status: true, key }
        );

    const toggleSection = (id) =>
        setOpenSections((s) => ({ ...s, [id]: !s[id] }));
    
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements" style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            padding: '10px 20px'
                        }}>
                            <div className="mobile-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/metroguards logo 2.png" alt="Metro Guards" style={{ width: "100px", height:"60px"}} />
                                </Link>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                
                                <div className="mobile-nav-icon" onClick={handleMobileMenu} style={{
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                    color: '#333'
                                }}>
                                    <i className="fa-solid fa-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`} style={{
                position: 'fixed',
                top: 0,
                right: isMobileMenu ? 0 : '-400px',
                width: '400px',
                height: '100vh',
                backgroundColor: '#fff',
                zIndex: 9999,
                transition: 'right 0.3s ease-in-out',
                boxShadow: '-2px 0 15px rgba(0,0,0,0.2)',
                overflow: 'auto'
            }}>
                {/* Mobile Sidebar Header */}
                <div className="mobile-sidebar-header" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px 20px',
                    borderBottom: '1px solid #eee',
                    backgroundColor: '#f8f9fa'
                }}>
                    <div className="mobile-sidebar-logo">
                        <Link href="/" onClick={handleMobileMenu}>
                            <img src="/assets/img/logo/metroguards logo 2.png" alt="Metro Guards" style={{ width: "80px", height: "48px" }} />
                        </Link>
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu} style={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: '#333',
                        padding: '5px'
                    }}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="mobile-nav" style={{ padding: '20px' }}>
                    <ul className="mobile-nav-list" style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        {/* Home */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <Link href="/" onClick={handleMobileMenu} style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                                Home
                            </Link>
                        </li>

                        {/* About Us */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10px' }}>
                                <span style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1 }}>About Us</span>
                                <span 
                                    className={isActive.key == 2 ? "submenu-button submenu-opened" : "submenu-button"} 
                                    onClick={() => handleToggle(2)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '8px',
                                        color: '#666',
                                        fontSize: '14px',
                                        minWidth: '30px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <i className={`fa-solid ${isActive.key == 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ 
                                display: isActive.key == 2 ? "block" : "none",
                                listStyle: 'none',
                                padding: '10px 0 0 20px',
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/our-values" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Our Values</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/mission-statement" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Our Mission</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/how-we-thrive" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>How we Thrive</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/corporate-social-responsibility" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Corporate Social Responsibilities</Link>
                                </li>
                            </ul>
                        </li>

                        {/* Services */}
<li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '10px',
    }}
  >
    <span style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1 }}>
      Services
    </span>
    <span
      className={isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"}
      onClick={() => handleToggle(3)}
      style={{
        cursor: 'pointer',
        padding: '8px',
        color: '#666',
        fontSize: '14px',
        minWidth: '30px',
        textAlign: 'center',
        marginLeft: '10px', // 🔹 prevents overlap
      }}
    >
      <i className={`fa-solid ${isActive.key == 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
    </span>
  </div>

  <div
    className="services-submenu"
    style={{ display: isActive.key == 3 ? "block" : "none", paddingTop: '10px', paddingLeft: '5px' }}
  >
    {/* Static Guards */}
<div className="service-category" style={{ marginBottom: '15px' }}>
  <div
    onClick={() => toggleSection("static")}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 10px 8px 25px',
      cursor: 'pointer',
    }}
  >
    {/* Text */}
    <span style={{ color: '#333', fontSize: '15px', fontWeight: '500' }}>
      Static Guards
    </span>

    {/* Icon (child-specific) */}
    <span
      className={openSections.static ? "child-submenu-button submenu-opened" : "child-submenu-button"}
      style={{
        color: '#666',
        fontSize: '14px',
        minWidth: '30px',
        textAlign: 'center',
      }}
    >
      <i className={`fa-solid ${openSections.static ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
    </span>
  </div>

  {/* Submenu */}
  <ul
    className="sub-menu"
    style={{
      display: openSections.static ? "block" : "none",
      listStyle: 'none',
      padding: '8px 0 0 40px',
      margin: 0,
    }}
  >
    <li style={{ marginBottom: '6px' }}>
      <Link href="/building-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Building Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/construction-site-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Construction Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/shopping-centre-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Shopping Centre Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/hospital-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Hospital Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/gate-house-security-guard" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Gatehouse Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/educational-institute-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Educational Institution Security
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/corporate-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Corporate Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/retail-security-guard" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Retail Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/loss-prevention-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Loss Prevention Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/concierge-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Concierge Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/lock-up-security-services" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Lock-Up and Open-Up Security
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/warehouse-security-system" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Industrial Warehouse Security
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/static-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Static Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/uniform-and-convert-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Uniform and Covert Security
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/adhoc-security-services" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Adhoc Security Services
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/asset-protection" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Asset Protection Security
      </Link>
    </li>
  </ul>
</div>


    {/* Crowd Control */}
<div className="service-category" style={{ marginBottom: '15px' }}>
  <div
    onClick={() => toggleSection("crowd")}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 10px 8px 25px',
      cursor: 'pointer',
    }}
  >
    {/* Text */}
    <span style={{ color: '#333', fontSize: '15px', fontWeight: '500' }}>
      Crowd Control
    </span>

    {/* Icon (child-specific, separate from Services) */}
    <span
      className={openSections.crowd ? "child-submenu-button submenu-opened" : "child-submenu-button"}
      style={{
        color: '#666',
        fontSize: '14px',
        minWidth: '30px',
        textAlign: 'center',
      }}
    >
      <i className={`fa-solid ${openSections.crowd ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
    </span>
  </div>

  {/* Submenu */}
  <ul
    className="sub-menu"
    style={{
      display: openSections.crowd ? "block" : "none",
      listStyle: 'none',
      padding: '8px 0 0 40px',
      margin: 0,
    }}
  >
    <li style={{ marginBottom: '6px' }}>
      <Link href="/party-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Party Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/event-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Event Security Guards
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link href="/corporate-event-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>
        Corporate Event Security
      </Link>
    </li>
  </ul>
</div>


   {/* Mobile Patrols */}
<div className="service-category" style={{ marginBottom: '15px' }}>
  <div
    onClick={() => toggleSection("mobile")}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 10px 8px 25px',
      cursor: 'pointer',
    }}
  >
    {/* Text */}
    <span style={{ color: '#333', fontSize: '15px', fontWeight: '500' }}>
      Mobile Patrols
    </span>

    {/* Icon (child-specific) */}
    <span
      className={openSections.mobile ? "child-submenu-button submenu-opened" : "child-submenu-button"}
      style={{
        color: '#666',
        fontSize: '14px',
        minWidth: '30px',
        textAlign: 'center',
      }}
    >
      <i className={`fa-solid ${openSections.mobile ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
    </span>
  </div>

  {/* Submenu */}
  <ul
    className="sub-menu"
    style={{
      display: openSections.mobile ? "block" : "none",
      listStyle: 'none',
      padding: '8px 0 0 40px',
      margin: 0,
    }}
  >
    <li style={{ marginBottom: '6px' }}>
      <Link
        href="/lock-up-security-services"
        onClick={handleMobileMenu}
        style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}
      >
        Lock-Up Security
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link
        href="/security-escort-services"
        onClick={handleMobileMenu}
        style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}
      >
        Security Escort
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link
        href="/alarm-response-security-guards"
        onClick={handleMobileMenu}
        style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}
      >
        Alarm Response
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link
        href="/mobile-patrol-security"
        onClick={handleMobileMenu}
        style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}
      >
        Mobile Patrols
      </Link>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <Link
        href="/construction-patrol-security-guards"
        onClick={handleMobileMenu}
        style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}
      >
        Construction Patrol
      </Link>
    </li>
  </ul>
</div>


    
{/* K9 Security */}
<div className="service-category" style={{ marginBottom: '15px' }}>
  <div
    onClick={() => toggleSection("k9")}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 10px 8px 25px',
      cursor: 'pointer',
    }}
  >
    {/* Text */}
    <span style={{ color: '#333', fontSize: '15px', fontWeight: '500' }}>
      K9 Security
    </span>

    {/* Icon (separate from Services) */}
    <span
      className={openSections.k9 ? "child-submenu-button submenu-opened" : "child-submenu-button"}
      style={{
        color: '#666',
        fontSize: '14px',
        minWidth: '30px',
        textAlign: 'center',
      }}
    >
      <i className={`fa-solid ${openSections.k9 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
    </span>
  </div>

  {/* Submenu */}
  <ul
    className="sub-menu"
    style={{
      display: openSections.k9 ? "block" : "none",
      listStyle: 'none',
      padding: '8px 0 0 40px',
      margin: 0,
    }}
  >
    <li style={{ marginBottom: '6px' }}>
      <Link
        href="/k9-security-guards-in-melbourne"
        onClick={handleMobileMenu}
        style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}
      >
        K9 Security With Handler
      </Link>
    </li>
  </ul>
</div>


  </div>
</li>


                        {/* Blog */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <Link href="/blogs" onClick={handleMobileMenu} style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                                Blog
                            </Link>
                        </li>

                        

                        {/* Contact */}
                        <li style={{ marginBottom: '15px' }}>
                            <Link href="/contacts" onClick={handleMobileMenu} style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Contact */}
                    <div className="mobile-contact" style={{
                        marginTop: '30px',
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <div className="single-footer">
                            <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '15px' }}>Get in touch</h3>
                            <div className="footer-contact" style={{ marginBottom: '15px' }}>
                                <div className="single-contact" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="contact-icon" style={{ marginRight: '10px' }}>
                                        <img src="/assets/img/icons/contact-phone4.svg" alt="" style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <Link href="tel:1300731173" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>1300 73 11 73</Link>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="contact-icon" style={{ marginRight: '10px' }}>
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <Link href="mailto:admin@metroguards.com.au" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>admin@metroguards.com.au</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenu && (
                <div 
                    className="mobile-sidebar-overlay" 
                    onClick={handleMobileMenu}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 9998
                    }}
                />
            )}
        </>
    )
}