import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        {/* Left Column - Company Info & Social */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer">
                                <Link href="/">
                                    <img
                                        src="/assets/img/logo/metroguards logo 2.png"
                                        alt="Metro Guards Logo"
                                        className="footer-logo"
                                    />
                                </Link>
                                
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <i className="fa fa-home"></i>
                                        <span>CS Hub, 5, Level 1/34 Commercial Rd, Caroline Springs VIC 3023</span>
                                    </div>
                                    <div className="contact-item">
                                        <i className="fa fa-envelope"></i>
                                        <Link href="mailto:admin@metroguards.com.au">admin@metroguards.com.au</Link>
                                        </div>
                                    <div className="contact-item">
                                        <i className="fa fa-phone"></i>
                                        <Link href="tel:1300731173">1300 731 173</Link>
                                    </div>
                                </div>
                                
                                <div className="social-links">
                                    <Link href="https://www.facebook.com/metroguards?_rdc=1&_rdr" className="social-link facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link href="https://x.com/metroguards" className="social-link twitter">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link href="https://www.instagram.com/metropolitanguard/" className="social-link instagram">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link href="https://api.whatsapp.com/send?phone=61422039505" className="social-link whatsapp">
                                        <i className="fab fa-whatsapp"></i>
                                    </Link>
                                </div>
                                
                                
                                
                            </div>
                        </div>

                        {/* Middle Column - Corporate Compliance & Careers */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer">
                                <h3 className="footer-heading">
                                    <i className="fas fa-shield-alt"></i>
                                    Corporate Compliance
                                </h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="/security-licenses-and-insurance">Licenses and Insurance</Link></li>
                                        <li><Link href="/website-content-disclaimer">Website Content Disclaimer</Link></li>
                                        <li><Link href="/conditions-of-hire">Conditions of Hire</Link></li>
                                        <li><Link href="/faqs">FAQs</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/Modern-Slavery-Statement-V2-1.pdf" target="_blank" rel="noopener noreferrer">Slavery Statement</Link></li>
                                        <li><Link href="/service-coverage">Service Coverage</Link></li>
                                        <li><Link href="/forms-downloads">Forms & Downloads</Link></li>
                                    </ul>
                                </div>
                                
                                <h3 className="footer-heading">
                                    <i className="fas fa-briefcase"></i>
                                    Careers
                                </h3>
                                <p className="careers-text">
                                    To find out more about current job opportunities at Metropolitan Guard Services,
                                </p>
                                <Link href="/careers" className="careers-link">Click Here</Link>
                            </div>
                        </div>

                        {/* Right Column - Service Areas & Map */}
                        <div className="col-lg-4 col-md-12">
                            <div className="single-footer">
                                <h3 className="footer-heading">
                                    <i className="fas fa-map-marker-alt"></i>
                                    Service Areas
                                </h3>
                                <div className="service-areas">
                                    <div className="area-grid">
                                        <Link href="/security-guard-east-melbourne-vic-3002" className="area-link">
                                            <i className="fas fa-arrow-right"></i>
                                            <span>East Melbourne</span>
                                        </Link>
                                        <Link href="/security-guard-west-melbourne-vic-3003" className="area-link">
                                            <i className="fas fa-arrow-right"></i>
                                            <span>West Melbourne</span>
                                        </Link>
                                        <Link href="/security-guard-north-melbourne-vic-3051" className="area-link">
                                            <i className="fas fa-arrow-right"></i>
                                            <span>North Melbourne</span>
                                        </Link>
                                        <Link href="/security-guard-south-melbourne-vic-3205" className="area-link">
                                            <i className="fas fa-arrow-right"></i>
                                            <span>South Melbourne</span>
                                        </Link>
                        </div>
                                </div>
                                
                                <h3 className="footer-heading">
                                    <i className="fas fa-map-marked-alt"></i>
                                Find Us on Map
                                </h3>
                                <div className="map-container">
                                    <div className="map-overlay">
                                        <div className="map-info">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>Metro Guards Location</span>
                                        </div>
                                    </div>
                                        <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5558435090234!2d144.74289917564283!3d-37.73010212926082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6493aa294ea71%3A0x518c62f31fac0e7f!2sMetropolitan%20Guard%20Services%20-%20Melbourne!5e0!3m2!1sen!2sau!4v1757089190889!5m2!1sen!2sau"
                                            width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        title="Metro Guards Location - Caroline Springs VIC"
                                    />
                                </div>
                                <div className="map-footer">
                                    <p className="map-address">
                                        <i className="fas fa-location-dot"></i>
                                        CS Hub, Caroline Springs VIC 3023
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Footer Bottom Bar */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <p className="copyright-text">© 2025 All Rights Reserved to Metro Guards.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                .footer-area {
                    background: #000000;
                    padding: 60px 0 40px;
                    position: relative;
                }
                
                .footer-area::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 20%, rgba(253, 197, 26, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(253, 197, 26, 0.03) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .single-footer {
                    position: relative;
                    z-index: 2;
                    margin-bottom: 30px;
                }
                
                .footer-logo {
                    max-width: 120px;
                    height: auto;
                    margin-bottom: 25px;
                    display: block;
                }
                
                .contact-info {
                    margin-bottom: 30px;
                }
                
                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 15px;
                    color: #ffffff;
                    font-size: 14px;
                    line-height: 1.5;
                }
                
                .contact-item i {
                    color: #fdc51a;
                    margin-right: 12px;
                    margin-top: 2px;
                    width: 16px;
                    text-align: center;
                    font-size: 16px;
                }
                
                .contact-item a {
                    color: #ffffff;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .contact-item a:hover {
                    color: #fdc51a;
                }
                
                .social-links {
                    display: flex;
                    gap: 15px;
                    margin-top: 20px;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 18px;
                }
                
                .social-link.facebook {
                    background: #1877f2;
                    color: #ffffff;
                }
                
                .social-link.twitter {
                    background: #000000;
                    color: #ffffff;
                }
                
                .social-link.instagram {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: #ffffff;
                }
                
                .social-link.whatsapp {
                    background: #25d366;
                    color: #ffffff;
                }
                
                .social-link:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(253, 197, 26, 0.3);
                }
                
                .footer-heading {
                    color: #ffffff !important;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    position: relative;
                    padding-bottom: 10px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .footer-heading i {
                    color: #fdc51a;
                    font-size: 16px;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 30px;
                    height: 2px;
                    background: #fdc51a;
                }
                
                .footer-menu ul {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 30px 0;
                }
                
                .footer-menu ul li {
                    margin-bottom: 8px;
                }
                
                .footer-menu ul li a {
                    color: #cccccc;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color 0.3s ease;
                }
                
                .footer-menu ul li a:hover {
                    color: #fdc51a;
                }
                
                .careers-text {
                    color: #cccccc;
                    font-size: 14px;
                    margin-bottom: 10px;
                    line-height: 1.5;
                }
                
                .careers-link {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 14px;
                    transition: color 0.3s ease;
                }
                
                .careers-link:hover {
                    color: #fdc51a;
                }
                
                .service-areas {
                    margin-bottom: 30px;
                }
                
                .area-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
                
                .area-link {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 15px;
                    background: rgba(253, 197, 26, 0.1);
                    border: 1px solid rgba(253, 197, 26, 0.2);
                    border-radius: 8px;
                    color: #cccccc;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .area-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(253, 197, 26, 0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .area-link:hover::before {
                    left: 100%;
                }
                
                .area-link:hover {
                    background: rgba(253, 197, 26, 0.2);
                    border-color: #fdc51a;
                    color: #fdc51a;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(253, 197, 26, 0.3);
                }
                
                .area-link i {
                    color: #fdc51a;
                    font-size: 12px;
                    transition: transform 0.3s ease;
                }
                
                .area-link:hover i {
                    transform: translateX(3px);
                }
                
                .awards-section {
                    margin-top: 20px;
                }
                
                .awards-heading {
                    margin-top: 30px !important;
                }
                
                .award-logos {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    align-items: center;
                }
                
                .award-item {
                    background: rgba(255, 255, 255, 0);
                    padding: 8px;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(253, 197, 26, 0.3);
                    transition: all 0.3s ease;
                }
                
                .award-item:hover {
                    background: rgba(253, 197, 26, 0.1);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(253, 197, 26, 0.5);
                }
                
                .award-item img {
                    height: 20px;
                    width: auto;
                    max-width: 40px;
                    object-fit: contain;
                    filter: brightness(1.1);
                }
                
                .map-container {
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
                    border: 2px solid rgba(253, 197, 26, 0.3);
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .map-container:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
                    border-color: #fdc51a;
                }
                
                .map-overlay {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(253, 197, 26, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 8px 15px;
                    z-index: 10;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }
                
                .map-info {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #1e2247;
                    font-size: 12px;
                    font-weight: 600;
                }
                
                .map-info i {
                    font-size: 14px;
                }
                
                .map-container iframe {
                    width: 100%;
                    height: 300px;
                    border: none;
                    filter: grayscale(20%) contrast(1.1);
                    transition: all 0.3s ease;
                }
                
                .map-container:hover iframe {
                    filter: grayscale(0%) contrast(1.2);
                }
                
                .map-footer {
                    margin-top: 15px;
                    text-align: center;
                }
                
                .map-address {
                    color: #cccccc;
                    font-size: 14px;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                
                .map-address i {
                    color: #fdc51a;
                    font-size: 16px;
                }
                
                /* Footer Bottom Bar */
                .footer-bottom {
                    background: rgba(0, 0, 0, 0.8);
                    border-top: 1px solid rgba(253, 197, 26, 0.2);
                    padding: 20px 0;
                    position: relative;
                    z-index: 2;
                }
                
                .footer-bottom-content {
                    text-align: center;
                }
                
                .copyright-text {
                    color: #cccccc;
                    font-size: 14px;
                    margin: 0;
                    font-weight: 400;
                }
                
                /* Responsive Design */
                @media (max-width: 992px) {
                    .footer-area {
                        padding: 40px 0 30px;
                    }
                    
                    .single-footer {
                        margin-bottom: 40px;
                    }
                    
                    .map-container iframe {
                        height: 250px;
                    }
                }
                
                @media (max-width: 768px) {
                    .footer-area {
                        padding: 30px 0 20px;
                    }
                    
                    .social-links {
                        justify-content: center;
                        margin-top: 25px;
                    }
                    
                    .award-logos {
                        justify-content: center;
                    }
                    
                    .area-grid {
                        grid-template-columns: 1fr;
                        gap: 8px;
                    }
                    
                    .map-container iframe {
                        height: 200px;
                    }
                }
                
                @media (max-width: 576px) {
                    .contact-item {
                        font-size: 13px;
                    }
                    
                    .footer-heading {
                        font-size: 16px;
                    }
                    
                    .footer-menu ul li a,
                    .careers-text,
                    .careers-link {
                        font-size: 13px;
                    }
                    
                    .award-item img {
                        height: 25px;
                        max-width: 50px;
                    }
                }
            `}</style>
        </>
    );
}