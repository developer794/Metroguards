"use client";

import { useState } from "react";

export default function Location() {
  const [expandedStates, setExpandedStates] = useState({});
  const [showLocations, setShowLocations] = useState(false);

  const toggleExpanded = (state) => {
    setExpandedStates(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  const toggleLocationsVisibility = () => {
    setShowLocations(prev => !prev);
  };

  const locations = [
    {
      id: "melbourne-metro",
      name: "Melbourne Metro Areas",
      description: "Comprehensive security coverage across Melbourne's metropolitan areas. We provide Security Guards, Mobile Security Patrols, Static Guards, and Event Security throughout the greater Melbourne region.",
      areas: [
        "City of Melbourne", "City of Yarra", "City of Port Phillip", "City of Stonnington",
        "City of Boroondara", "City of Manningham", "City of Whitehorse", "City of Monash",
        "City of Glen Eira", "City of Bayside", "City of Kingston", "City of Greater Dandenong",
        "City of Casey", "City of Frankston", "City of Knox", "City of Maroondah",
        "City of Darebin", "City of Brimbank", "City of Maribyrnong", "City of Moonee Valley",
        "City of Moreland", "City of Hume", "City of Whittlesea", "City of Wyndham",
        "City of Hobsons Bay", "Bonbeach", "Bulleen", "Clarinda", "Ashwood"
      ]
    },
    
    {
      id: "new-south-wales",
      name: "New South Wales",
      areas: [
        "Sydney CBD", "Parramatta", "Penrith", "Liverpool", "Campbelltown", "Blacktown",
        "Ryde", "Hornsby", "Sutherland", "Bankstown", "Fairfield", "Canterbury",
        "Northern Beaches", "Inner West", "Eastern Suburbs", "Western Sydney"
      ]
    },
    
  ];

  return (
    <section className={`location-section ${showLocations ? 'expanded' : ''}`}>
      <div className="container">
        <div className="location-header">
          <div className="header-content">
            <button 
              className="see-locations-badge"
              onClick={toggleLocationsVisibility}
              aria-expanded={showLocations}
            >
              <span className="badge-text">See our locations</span>
              <span className="plus-icon">{showLocations ? '−' : '+'}</span>
            </button>
          </div>
        </div>

        {showLocations && (
          <div className="location-content">
            <div className="left-content">
              <div className="section-title">
                <span className="section-subtitle">COMPREHENSIVE PROTECTION</span>
                <h2 className="main-title">
                  Our Service<br />
                  Coverage
                </h2>
              </div>
              <div className="description-content">
                <p className="description-text">
                  We offer security solutions across Melbourne Metro Area and beyond. When you need Security Guards, 
                  Mobile Security Patrols, Static Guards, or Event Security, there's a good chance we can help.
                </p>
                <p className="description-text">
                  Below is an easy reference to see if we cover your area for regular mobile security service. 
                  For intermittent or one-off services like Party Security or VIP Protection, our professional 
                  security guards can travel to meet your needs beyond these areas.
                </p>
              </div>
            </div>

            <div className="right-content">
              <div className="locations-list">
                {locations.map((location) => (
                  <div key={location.id} className="location-item">
                    <button 
                      className="location-toggle"
                      onClick={() => toggleExpanded(location.id)}
                      aria-expanded={expandedStates[location.id]}
                    >
                      <span className="plus-icon">{expandedStates[location.id] ? '−' : '+'}</span>
                      <span className="location-name">{location.name}</span>
                    </button>
                    {expandedStates[location.id] && (
                      <div className="location-areas">
                        {location.description && (
                          <div className="location-description">
                            <p>{location.description}</p>
                          </div>
                        )}
                        <div className="areas-grid">
                          {location.areas.map((area, index) => (
                            <span key={index} className="area-tag">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="coverage-note">
                  <p><strong>Don't see your area listed?</strong> We likely still cover it! Contact us to confirm availability.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .location-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #FDC51A 0%, #F39C12 100%);
          position: relative;
          overflow: hidden;
          transition: padding 0.3s ease;
        }

        .location-section.expanded {
          padding: 100px 0;
        }

        .location-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/assets/img/bg/pattern.png') repeat;
          opacity: 0.05;
          pointer-events: none;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .location-header {
          margin-bottom: 0;
          transition: margin-bottom 0.3s ease;
        }

        .location-section.expanded .location-header {
          margin-bottom: 60px;
        }

        .header-content {
          display: flex;
          justify-content: flex-start;
        }

        .see-locations-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 50px;
          padding: 16px 28px;
          color: #333;
          font-weight: 600;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          cursor: pointer;
          outline: none;
        }

        .see-locations-badge:hover {
          background: rgba(0, 0, 0, 0.25);
          transform: translateY(-2px);
        }

        .see-locations-badge:focus {
          background: rgba(0, 0, 0, 0.25);
          outline: 2px solid rgba(0, 0, 0, 0.5);
          outline-offset: 2px;
        }

        .see-locations-badge[aria-expanded="true"] {
          background: #1e2247;
          color: white;
          border-color: rgba(30, 34, 71, 0.5);
        }

        .see-locations-badge[aria-expanded="true"]:hover {
          background: rgba(30, 34, 71, 0.8);
          transform: translateY(-2px);
        }

        .plus-icon {
          font-size: 1.4rem;
          font-weight: 300;
          line-height: 1;
        }

        .location-content {
          display: grid;
          grid-template-columns: 1fr 600px;
          gap: 80px;
          align-items: start;
          animation: slideDown 0.4s ease-out;
        }

        .left-content {
          color: #333;
        }

        .section-subtitle {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 20px;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 40px 0;
          color: #333;
          letter-spacing: -0.02em;
        }

        .description-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .description-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(0, 0, 0, 0.8);
          margin: 0;
        }

        .right-content {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          animation: slideInRight 0.4s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .locations-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .location-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .location-item:last-child {
          border-bottom: none;
        }

        .location-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
        }

        .location-toggle:hover {
          color: #F39C12;
        }

        .location-toggle .plus-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: #FDC51A;
          color: #333;
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .location-toggle[aria-expanded="true"] .plus-icon {
          background: #F39C12;
          transform: rotate(180deg);
        }

        .location-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
        }

        .location-areas {
          padding: 0 0 20px 44px;
          animation: slideDown 0.3s ease-out;
        }

        .location-description {
          margin-bottom: 16px;
        }

        .location-description p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
          font-style: italic;
        }

        .coverage-note {
          margin-top: 20px;
          padding: 16px;
          background: rgba(253, 197, 26, 0.1);
          border-radius: 8px;
          border-left: 4px solid #FDC51A;
          text-align: center;
        }

        .coverage-note p {
          margin: 0;
          font-size: 0.9rem;
          color: #333;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 8px;
        }

        .area-tag {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(253, 197, 26, 0.15);
          color: #F39C12;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          text-align: center;
          transition: all 0.2s ease;
        }

        .area-tag:hover {
          background: rgba(253, 197, 26, 0.25);
          transform: translateY(-1px);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .location-content {
            grid-template-columns: 1fr 550px;
            gap: 60px;
          }

          .main-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 1024px) {
          .location-content {
            grid-template-columns: 1fr 500px;
            gap: 50px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .right-content {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .location-section {
            padding: 60px 0;
          }
          .location-section.expanded {
            padding: 80px 0;
          }

          .location-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .description-text {
            font-size: 1rem;
          }

          .right-content {
            padding: 25px;
          }

          .areas-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }

          .location-section {
            padding: 40px 0;
          }

          .location-section.expanded {
            padding: 60px 0;
          }

          .location-section.expanded .location-header {
            margin-bottom: 40px;
          }

          .see-locations-badge {
            padding: 12px 20px;
            font-size: 1rem;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .description-text {
            font-size: 0.95rem;
          }

          .right-content {
            padding: 20px;
          }

          .location-toggle {
            padding: 16px 0;
          }

          .location-name {
            font-size: 1rem;
          }

          .areas-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }

          .area-tag {
            font-size: 0.8rem;
            padding: 4px 8px;
          }
        }
      `}</style>
    </section>
  );
}
