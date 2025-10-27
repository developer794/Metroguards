"use client";

import { ArrowRight, Shield, Users, Building, Smartphone, Calendar, HardHat, UserCheck } from "lucide-react";
import Image from "next/image";

const data = [
  {
    id: "retail-security",
    title: "Security Guard Services",
    
    description: "Professional and well-trained security guards providing on-site protection, access control, surveillance, and safety assurance for businesses and properties.",
    href: "/security-guard-services",
    image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Static%20Secuirty%20Guards/AF728EFE-11D1-4965-8948-52919A2FEB8C_1_105_c.webp",
    icon: Shield,
  },
  {
    id: "corporate-building",
    title: "Crowd Control Services",
    description: "Trained security personnel managing large gatherings with strategic crowd flow, risk assessment, and incident prevention to ensure a safe environment.",
    href: "/crowd-control-services",
    image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/660438D5-A405-4A12-A141-34F598A00D3E_1_105_c%20(1).webp",
    icon: Building,
  },
  {
    id: "warehouse-security",
    title: "Mobile Patrol Services",
    description: "Uniformed mobile patrol teams conducting scheduled and random patrols to deter crime, secure premises, and ensure safety across multiple locations.",
    href: "/mobile-patrol-services",
    image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Mobile%20Patrol%20Security/0C19E4EB-7066-445A-B768-63EA66062EAA_1_105_c%20(1).webp",
    icon: Shield,
  },
  {
    id: "event-security",
    title: "K9 Security Services",
    description: "Highly trained K9 units providing enhanced detection, patrol support, and security presence to identify threats and protect property and personnel.",
    href: "/k9-security-guards-in-melbourne",
    image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Canine%20(K9)%20Security%20Services/3306B975-83A6-4BCD-AA71-082374E3FE4F_1_105_c.webp",
    icon: Calendar,
  },
];

const Services4 = ({ 
  title = "Our Services", 
  description = "Discover our comprehensive range of professional security services designed to protect your business, events, and properties across Melbourne with cutting-edge technology and experienced personnel.", 
  items = data.slice(0, 4), // Show only first 4 items
}) => {
  return (
    <>
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <div className="services-header-content">
              <h2 className="services-title">{title}</h2>
              <p className="services-description" style={{ color: 'black' ,fontFamily:' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>{description}</p>
            </div>
          </div>
        </div>

        <div className="services-grid-wrapper">
          <div className="services-grid-container">
            <div className="services-grid">
              {items.map((item, index) => (
                <div key={item.id} className="services-item">
                  <a href={item.href} className="services-card-link">
                    <div className="services-card relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="services-image"
                        priority={index < 4}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <div className="services-overlay" />
                      <div className="services-card-icon">
                        <item.icon size={24} />
                      </div>
                      <div className="services-card-content">
                        <h3 className="services-card-title">{item.title}</h3>
                        <p className="services-card-description" >{item.description}</p>
                        <div className="services-read-more">
                          Read more <ArrowRight className="read-more-arrow" size={16} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-section {
          padding: 80px 0;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Responsive Design */
        @media (max-width: 1199px) {
          .container {
            padding: 0 32px;
          }
        }

        @media (max-width: 1023px) {
          .container {
            padding: 0 24px;
          }
        }

        @media (max-width: 767px) {
          .container {
            padding: 0 20px;
          }
        }

        @media (max-width: 639px) {
          .container {
            padding: 0 16px;
          }
        }

        @media (max-width: 479px) {
          .container {
            padding: 0 12px;
          }
        }

        .services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .services-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .services-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .services-description {
          
          color: #666666;
          margin: 0;
          line-height: 1.7;
          font-size: 1.125rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .services-grid-wrapper {
          width: 100%;
        }

        .services-grid-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Responsive Grid Container */
        @media (max-width: 1199px) {
          .services-grid-container {
            padding: 0 32px;
          }
        }

        @media (max-width: 1023px) {
          .services-grid-container {
            padding: 0 24px;
          }
        }

        @media (max-width: 767px) {
          .services-grid-container {
            padding: 0 20px;
          }
        }

        @media (max-width: 639px) {
          .services-grid-container {
            padding: 0 16px;
          }
        }

        @media (max-width: 479px) {
          .services-grid-container {
            padding: 0 12px;
          }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }

        /* Responsive Grid Breakpoints */
        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .services-item {
          width: 100%;
        }

        .services-card-link {
          display: block;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .services-card-link:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .services-card {
          position: relative;
          height: 400px;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #f0f0f0;
          cursor: pointer;
          transition: transform 0.3s ease;
          contain: layout style;
        }

        .services-image {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(1) saturate(1);
          z-index: 1;
        }

        .services-card-link:hover .services-image {
          transform: scale(1.08);
          filter: brightness(1.1) saturate(1.2);
        }

        .services-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(0, 0, 0, 0.1) 100%
          );
          border-radius: 12px;
          transition: background 0.4s ease;
          z-index: 5;
        }

        .services-card-link:hover .services-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(253, 197, 26, 0.3) 80%,
            rgba(253, 197, 26, 0.4) 100%
          );
        }

        .services-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 30px 30px 30px;
          color: white;
          z-index: 10;
          transition: transform 0.3s ease;
        }

        .services-card-link:hover .services-card-content {
          transform: translateY(-5px);
        }

        .services-card-icon {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          color: white;
          z-index: 15;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .services-card-link:hover .services-card-icon {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .services-card-title {
          margin: 0 0 12px 0;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.3;
          color: white;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .services-card-description {
          margin: 0 0 20px 0;
          font-size: 0.875rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .services-read-more {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          font-weight: 500;
          color: #fdc51a;
          text-decoration: none;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .read-more-arrow {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .services-card-link:hover .read-more-arrow {
          transform: translateX(6px);
        }

        .services-read-more:hover .read-more-arrow {
          transform: translateX(8px);
        }

        /* Responsive Design for Services Description to match GoodPeople */
        @media (max-width: 1200px) {
          .services-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 1024px) {
          .services-description {
            font-size: 1.05rem;
          }
        }

        /* Responsive Design for Mobile */
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 0;
          }

          .services-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 40px;
            gap: 16px;
          }

          .services-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .services-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 639px) {
          .services-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .services-description {
            font-size: 1.125rem;
          }
        }

          .services-card {
            position: relative;  
            height: 350px;
          }

          .services-card-content {
            padding: 30px 25px 25px 25px;
          }

          .services-card-icon {
            width: 45px;
            height: 45px;
            top: 15px;
            left: 15px;
          }

          .services-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .services-card-description {
            font-size: 0.8rem;
            margin-bottom: 15px;
            -webkit-line-clamp: 2;
          }
          
          .services-read-more {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 479px) {
          .services-section {
            padding: 50px 0;
          }

          .services-header {
            margin-bottom: 30px;
            gap: 12px;
          }

          .services-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
          }
          
          .services-description {
            font-size: 0.85rem;
            line-height: 1.5;
          }

          .services-card {
            position: relative;  
            height: 320px;
          }

          .services-card-content {
            padding: 25px 20px 20px 20px;
          }

          .services-card-icon {
            width: 42px;
            height: 42px;
            top: 12px;
            left: 12px;
          }

          .services-card-icon svg {
            width: 20px;
            height: 20px;
          }

          .services-card-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .services-card-description {
            font-size: 0.75rem;
            margin-bottom: 12px;
            line-height: 1.4;
            -webkit-line-clamp: 2;
          }
          
          .services-read-more {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default Services4;
