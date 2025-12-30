"use client";

import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/assets/img/about/about img.webp",
    alt: "Security Services Overview",
    title: "Professional Security",
    description: "24/7 comprehensive security solutions for your business"
  },
  {
    id: 2,
    src: "/assets/img/blog/private guard.jpg",
    alt: "Private Security Guards",
    title: "Private Guards",
    description: "Highly trained private security personnel"
  },
  {
    id: 3,
    src: "/assets/img/blog/building-guard.jpg",
    alt: "Building Security",
    title: "Building Security",
    description: "Commercial property protection services"
  },
  {
    id: 4,
    src: "/assets/img/blog/retail.jpg",
    alt: "Retail Security",
    title: "Retail Protection",
    description: "Specialized retail security solutions"
  },
  {
    id: 5,
    src: "/assets/img/blog/event security.jpg",
    alt: "Event Security",
    title: "Event Security",
    description: "Professional event security management"
  },
  {
    id: 6,
    src: "/assets/img/blog/warehouse.jpg",
    alt: "Warehouse Security",
    title: "Warehouse Protection",
    description: "Industrial and warehouse security services"
  },
  {
    id: 7,
    src: "/assets/img/blog/construction-guard.webp",
    alt: "Construction Security",
    title: "Construction Sites",
    description: "Construction site security and monitoring"
  },
  {
    id: 8,
    src: "/assets/img/blog/gatehouse.jpg",
    alt: "Gatehouse Security",
    title: "Access Control",
    description: "Gatehouse and access control services"
  },
  {
    id: 9,
    src: "/assets/img/blog/emergency.webp",
    alt: "Emergency Response",
    title: "Emergency Response",
    description: "Rapid emergency response and crisis management services"
  },
  {
    id: 10,
    src: "/assets/img/blog/tranning.jpg",
    alt: "Security Training",
    title: "Security Training",
    description: "Professional security training and certification programs"
  }
];

export default function FindMore() {
  const [activeImage, setActiveImage] = useState(2); // Start with index 2 to have 2 images on each side
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveImage(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
    }
    if (isRightSwipe) {
      setActiveImage(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
    }
  };

  return (
    <section className="find-more-section">
      <div className="find-more-container">
        {/* Header */}
        <div className="find-more-header">
          <div className="find-more-header-content">
            <h2 className="find-more-title">Find More About Our Services</h2>
            <p className="find-more-description">
              Explore our comprehensive security solutions through our interactive gallery. 
              Discover how we protect businesses, events, and properties across Australia with cutting-edge technology and experienced personnel.
            </p>
          </div>
        </div>

        {/* 3D Photo Gallery */}
        <div 
          className="gallery-3d-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-3d-wrapper">
            {galleryImages.map((image, index) => {
              const isActive = index === activeImage;
              
              // Calculate circular distance to handle wrapping
              const totalImages = galleryImages.length;
              const directDistance = Math.abs(index - activeImage);
              const wrapDistance = totalImages - directDistance;
              const distance = Math.min(directDistance, wrapDistance);
              
              const isVisible = distance <= 3; // Show 3 images on each side
              
              let transform = '';
              let zIndex = 0;
              let opacity = 0;
              
              if (isVisible) {
                if (isActive) {
                  transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1.1)';
                  zIndex = 10;
                  opacity = 1;
                } else {
                  // Determine side based on shortest path (considering wrapping)
                  let isRightSide;
                  if (directDistance === wrapDistance) {
                    // Equal distance both ways, choose based on index
                    isRightSide = index > activeImage;
                  } else if (directDistance < wrapDistance) {
                    // Direct path is shorter
                    isRightSide = index > activeImage;
                  } else {
                    // Wrap path is shorter
                    isRightSide = index < activeImage;
                  }
                  
                  const offset = distance * 180 * (isRightSide ? 1 : -1);
                  const rotation = Math.min(distance * 30, 60) * (isRightSide ? -1 : 1);
                  transform = `translateX(${offset}px) translateZ(-${distance * 140}px) rotateY(${rotation}deg) scale(${1 - distance * 0.12})`;
                  zIndex = 10 - distance;
                  opacity = 1; // Remove fade effect - all images at full opacity
                }
              }

              return (
                <div
                  key={image.id}
                  className="gallery-item"
                  style={{
                    transform,
                    zIndex,
                    opacity: isVisible ? opacity : 0,
                    pointerEvents: isVisible ? 'auto' : 'none'
                  }}
                  onClick={() => setActiveImage(index)}
                >
                  <div className="gallery-card">
                    <div className="gallery-image-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="gallery-image"
                      />
                      <div className="gallery-overlay">
                        <div className="gallery-content">
                          <h3 className="gallery-title">{image.title}</h3>
                          <p className="gallery-text">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="gallery-navigation">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button 
            className="nav-arrow nav-arrow-left"
            onClick={() => setActiveImage(prev => prev === 0 ? galleryImages.length - 1 : prev - 1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className="nav-arrow nav-arrow-right"
            onClick={() => setActiveImage(prev => prev === galleryImages.length - 1 ? 0 : prev + 1)}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Active Image Info */}
        <div className="active-image-info">
          <h3 className="active-title">{galleryImages[activeImage].title}</h3>
          <p className="active-description">{galleryImages[activeImage].description}</p>
        </div>
      </div>

      <style jsx>{`
        .find-more-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          overflow: hidden;
        }

        .find-more-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .find-more-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .find-more-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .find-more-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .find-more-description {
          max-width: 600px;
          color: #666666;
          margin: 0;
          line-height: 1.6;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-3d-container {
          position: relative;
          height: 600px;
          margin-bottom: 60px;
          perspective: 1400px;
          overflow: visible;
          z-index: 1;
        }

        .gallery-3d-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
        }

        .gallery-item {
          position: absolute;
          width: 420px;
          height: 500px;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .gallery-card {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transition: all 0.6s ease;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .gallery-item:hover .gallery-card {
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.25);
          transform: translateY(-10px);
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to top,
            rgba(30, 34, 71, 0.95) 0%,
            rgba(30, 34, 71, 0.7) 50%,
            transparent 100%
          );
          padding: 32px 24px 24px;
          transform: translateY(0);
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          background: linear-gradient(
            to top,
            rgba(30, 34, 71, 0.98) 0%,
            rgba(30, 34, 71, 0.8) 50%,
            rgba(30, 34, 71, 0.2) 100%
          );
        }

        .gallery-content {
          color: white;
        }

        .gallery-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .gallery-text {
          font-size: 0.95rem;
          opacity: 0.9;
          line-height: 1.4;
        }

        .gallery-navigation {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background: #1e2247;
          transform: scale(1.3);
        }

        .nav-dot:hover {
          background: #64748b;
          transform: scale(1.1);
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #1e2247;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-arrow:hover {
          background: #1e2247;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }

        .nav-arrow-left {
          left: -25px;
        }

        .nav-arrow-right {
          right: -25px;
        }



        .active-image-info {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          padding: 50px 40px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(248, 250, 252, 0.98) 50%,
            rgba(241, 245, 249, 0.95) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.1),
            0 10px 25px rgba(30, 34, 71, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          z-index: 2;
        }

        .active-image-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            #fdc51a 0%,
            #ff6b35 25%,
            #1e2247 50%,
            #ff6b35 75%,
            #fdc51a 100%
          );
          border-radius: 25px 25px 0 0;
        }

        .active-image-info::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(253, 197, 26, 0.03) 0%,
            rgba(30, 34, 71, 0.02) 50%,
            transparent 70%
          );
          animation: subtle-rotate 20s linear infinite;
          pointer-events: none;
        }

        @keyframes subtle-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .active-title {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(
            135deg,
            #1e2247 0%,
            #2d3748 50%,
            #1e2247 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .active-description {
          font-size: 1.15rem;
          background: linear-gradient(
            135deg,
            #64748b 0%,
            #475569 50%,
            #64748b 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.7;
          position: relative;
          z-index: 2;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 1400px) {
          .find-more-container {
            padding: 0 20px;
          }

          .gallery-item {
            width: 400px;
            height: 480px;
          }
        }

        @media (max-width: 1200px) {
          .find-more-container {
            padding: 0 20px;
          }

          .gallery-item {
            width: 360px;
            height: 430px;
          }

          .find-more-title {
            font-size: 2.8rem;
          }

          .find-more-description {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 1024px) {
          .find-more-section {
            padding: 70px 0;
          }

          .find-more-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .find-more-description {
            font-size: 1rem;
          }

          .gallery-item {
            width: 320px;
            height: 380px;
          }

          .gallery-3d-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .find-more-section {
            padding: 60px 0;
          }

          .find-more-container {
            padding: 0 16px;
          }

          .find-more-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 30px;
            gap: 12px;
          }

          .find-more-title {
            font-size: 2.2rem;
            font-weight: 700;
            line-height: 1.2;
          }
          
          .find-more-description {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .gallery-3d-container {
            height: 350px;
            margin-bottom: 30px;
          }

          .gallery-item {
            width: 280px;
            height: 320px;
          }

          .nav-arrow {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }

          .nav-arrow-left {
            left: -22px;
          }

          .nav-arrow-right {
            right: -22px;
          }

          .active-image-info {
            padding: 25px 16px;
            margin: 0 16px;
          }

          .active-title {
            font-size: 1.6rem;
            margin-bottom: 16px;
          }

          .active-description {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 640px) {
          .find-more-section {
            padding: 50px 0;
          }

          .find-more-container {
            padding: 0 16px;
          }

          .find-more-title {
            font-size: 1.9rem;
            line-height: 1.2;
          }

          .find-more-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .gallery-3d-container {
            height: 320px;
            margin-bottom: 25px;
          }

          .gallery-item {
            width: 260px;
            height: 300px;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .nav-arrow-left {
            left: -20px;
          }

          .nav-arrow-right {
            right: -20px;
          }

          .active-image-info {
            padding: 20px 12px;
            margin: 0 12px;
            border-radius: 16px;
          }

          .active-title {
            font-size: 1.4rem;
            margin-bottom: 12px;
          }

          .active-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .find-more-section {
            padding: 40px 0;
          }

          .find-more-container {
            padding: 0 12px;
          }

          .find-more-header {
            margin-bottom: 25px;
            gap: 10px;
          }

          .find-more-title {
            font-size: 1.75rem;
            line-height: 1.2;
          }

          .find-more-description {
            font-size: 0.85rem;
            line-height: 1.4;
          }

          .gallery-3d-container {
            height: 280px;
            margin-bottom: 20px;
          }

          .gallery-item {
            width: 220px;
            height: 260px;
          }

          .nav-arrow {
            display: none;
          }

          .gallery-navigation {
            bottom: -50px;
            gap: 8px;
          }

          .nav-dot {
            width: 10px;
            height: 10px;
          }

          .active-image-info {
            padding: 18px 12px;
            margin: 0 8px;
            border-radius: 12px;
          }

          .active-title {
            font-size: 1.3rem;
            margin-bottom: 10px;
          }

          .active-description {
            font-size: 0.85rem;
            line-height: 1.4;
          }
        }

        @media (max-width: 360px) {
          .find-more-section {
            padding: 35px 0;
          }

          .find-more-container {
            padding: 0 10px;
          }

          .find-more-title {
            font-size: 1.6rem;
          }

          .find-more-description {
            font-size: 0.8rem;
          }

          .gallery-3d-container {
            height: 250px;
          }

          .gallery-item {
            width: 200px;
            height: 240px;
          }

          .active-image-info {
            padding: 16px 10px;
            margin: 0 6px;
          }

          .active-title {
            font-size: 1.2rem;
            margin-bottom: 8px;
          }

          .active-description {
            font-size: 0.8rem;
          }
        }

        /* Animation for smooth transitions */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .find-more-header {
          animation: fadeIn 0.8s ease-out;
        }

        .gallery-3d-container {
          animation: fadeIn 1s ease-out 0.2s both;
        }

        .active-image-info {
          animation: fadeIn 0.6s ease-out 0.4s both;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
