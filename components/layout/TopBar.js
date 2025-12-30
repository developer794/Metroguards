// components/layout/HeaderStrip.jsx
"use client";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="topbar text-white py-2 d-none d-lg-block">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        {/* Left side: email + hours */}
        <div className="d-flex align-items-center flex-wrap gap-3">
          <a href="mailto:info@finbiz.com" className="text-white text-decoration-none d-flex align-items-center gap-2">
            <i className="fa-regular fa-envelope"></i>
            <span>admin@metroguards.com.au</span>
          </a>

          <span className="topbar-divider"></span>

          <div className="d-flex align-items-center gap-2">
            <i className="fa-regular fa-location"></i>
            <span>CS Hub, 5, Level 1/34 Commercial Rd, Caroline Springs VIC 3023</span>
          </div>
        </div>

        {/* Right side: small links + socials */}
        <div className="d-flex align-items-center flex-wrap gap-3">
          <span className="topbar-divider d-none d-md-inline"></span>

          <div className="d-flex align-items-center social-icons-container">
            <a href="https://www.facebook.com/metroguards?_rdc=1&_rdr#" aria-label="Facebook" className="social-icon text-white text-decoration-none">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            {/* <a href="https://x.com/metroguards" aria-label="Twitter" className="social-icon text-white text-decoration-none">
              <i className="fa-brands fa-x-twitter"></i>
            </a> */}
            <a href="https://www.instagram.com/metropolitanguard/" aria-label="Instagram" className="social-icon text-white text-decoration-none">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=61422039505" aria-label="Whatsapp" className="social-icon text-white text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://x.com/metroguards" 
              aria-label="twitter" 
              className="social-icon text-white text-decoration-none">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-icons-container {
          display: flex;
          align-items: center;
          gap: 16px; /* Equal gap between all icons */
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .social-icon i {
          font-size: 16px;
          width: 16px;
          text-align: center;
        }
        
        /* Ensure consistent spacing for all screen sizes */
        @media (max-width: 1200px) {
          .social-icons-container {
            gap: 14px;
          }
          
          .social-icon {
            width: 28px;
            height: 28px;
          }
          
          .social-icon i {
            font-size: 14px;
            width: 14px;
          }
        }
      `}</style>
    </div>
  );
}