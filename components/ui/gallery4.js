"use client";

import { ArrowLeft, ArrowRight, Shield, Users, Building, Smartphone, Calendar, HardHat, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: "retail-security",
    title: "Retail Security Implementation",
    description:
      "Comprehensive security solution for a major shopping center including CCTV monitoring, access control, and 24/7 security personnel ensuring customer and staff safety.",
    href: "/retail-security-guard",
    image: "/assets/img/case-study/case-1.jpg",
    icon: Shield,
  },
  {
    id: "corporate-building",
    title: "Corporate Building Security",
    description:
      "Advanced security systems for a high-rise corporate building featuring integrated access control, visitor management, and executive protection services.",
    href: "/building-security-guards",
    image: "/assets/img/case-study/case-2.jpg",
    icon: Building,
  },
  {
    id: "warehouse-security",
    title: "Warehouse Security System",
    description:
      "Complete security infrastructure for logistics and warehouse facilities including perimeter security, cargo protection, and inventory monitoring systems.",
    href: "/warehouse-security-system",
    image: "/assets/img/case-study/case-3.jpg",
    icon: Shield,
  },
  {
    id: "event-security",
    title: "Large Event Security Management",
    description:
      "Professional security coordination for major public events including crowd control, VIP protection, and emergency response planning for 10,000+ attendees.",
    href: "/event-security-guards",
    image: "/assets/img/case-study/case-4.jpg",
    icon: Calendar,
  },
  {
    id: "construction-security",
    title: "Construction Site Security",
    description:
      "Dedicated security solutions for construction sites, protecting valuable equipment, materials, and ensuring safety compliance throughout project phases.",
    href: "/construction-site-security-guards",
    image: "/assets/img/case-study/case-5.jpg",
    icon: HardHat,
  },
  {
    id: "residential-security",
    title: "Residential Complex Security",
    description:
      "Integrated security solution for luxury residential developments featuring 24/7 concierge services, access control, and patrol security services.",
    href: "/private-security-guards",
    image: "/assets/img/case-study/case-6.jpg",
    icon: Users,
  },
  {
    id: "mobile-patrol-security",
    title: "Mobile Patrol Security",
    description:
      "Professional mobile security patrols providing comprehensive coverage and rapid response services for commercial and residential properties with real-time monitoring.",
    href: "/mobile-patrol-security",
    image: "/assets/img/case-study/case-1.jpg",
    icon: Smartphone,
  },
  {
    id: "staff-escort-security",
    title: "Staff Escort Security",
    description:
      "Dedicated personal protection and escort services for staff members ensuring safe transportation and workplace security with trained professional guards.",
    href: "/staff-escort-security",
    image: "/assets/img/case-study/case-2.jpg",
    icon: UserCheck,
  },
];

const Gallery4 = ({ 
  title = "Our Services", 
  description = "Discover our comprehensive range of professional security services designed to protect your business, events, and properties across Melbourne with cutting-edge technology and experienced personnel.", 
  items = data,
  showSlider = true,
  maxItems = null 
}) => {
  // Process items based on maxItems prop
  const processedItems = maxItems ? items.slice(0, maxItems) : items;
  const [currentSlide, setCurrentSlide] = useState(2); // Start with initial clones
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldDisableTransition, setShouldDisableTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Helper function to get items per view and slide percentage
  const getSlideConfig = () => {
    if (!isClient || screenWidth === 0) return { itemsPerView: 4, slidePercentage: 25 };
    
    // Small screens (mobile) - show 2 items at a time, slide by 1 item
    if (screenWidth <= 640) return { itemsPerView: 2, slidePercentage: 50 };
    // Medium screens (small tablets) - show 2 items, slide by 1 item  
    if (screenWidth <= 768) return { itemsPerView: 2, slidePercentage: 50 };
    // Large tablets - show 3 items, slide by 1 item
    if (screenWidth <= 1024) return { itemsPerView: 3, slidePercentage: 33.333 };
    // Desktop - show exactly 4 items, slide by 1 item (25% per slide)
    return { itemsPerView: 4, slidePercentage: 25 };
  };

  // Create extended items array for infinite loop
  const getExtendedItems = () => {
    const { itemsPerView } = getSlideConfig();
    // On mobile (2 items per view), add fewer clones
    const clonesToAdd = screenWidth <= 640 ? itemsPerView : Math.max(itemsPerView, 2);
    const startClones = processedItems.slice(-clonesToAdd);
    const endClones = processedItems.slice(0, clonesToAdd);
    return [...startClones, ...processedItems, ...endClones];
  };

  const extendedItems = showSlider ? getExtendedItems() : processedItems;
  const { itemsPerView } = getSlideConfig();
  const clonesToAdd = screenWidth <= 640 ? itemsPerView : Math.max(itemsPerView, 2);

  useEffect(() => {
    setCanScrollPrev(true);
    setCanScrollNext(true);
  }, [currentSlide, processedItems.length, screenWidth, isClient]);

  useEffect(() => {
    setIsClient(true);
    setScreenWidth(window.innerWidth);
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setCurrentSlide(clonesToAdd); // Reset to first real slide on resize
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize current slide to first real item (after clones), slightly left
  useEffect(() => {
    if (isClient) {
      setCurrentSlide(clonesToAdd - 0.5); // Shift slightly to the left
    }
  }, [isClient, clonesToAdd]);

  // Auto-slide functionality with infinite loop
  useEffect(() => {
    if (!autoSlideEnabled || !isClient || !showSlider) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => prev + 1);
    }, 4500); // Change slide every 4.5 seconds

    return () => clearInterval(interval);
  }, [autoSlideEnabled, isClient]);

  // Handle infinite loop transitions
  useEffect(() => {
    if (!isClient || !showSlider) return;

    const { itemsPerView } = getSlideConfig();
    const maxSlide = Math.floor((items.length - 1) / itemsPerView) * itemsPerView;

    // If we're at the end clones, jump to the real beginning
    if (currentSlide >= items.length + clonesToAdd) {
      setTimeout(() => {
        setShouldDisableTransition(true);
        setCurrentSlide(clonesToAdd);
        setTimeout(() => setShouldDisableTransition(false), 50);
      }, 800); // Wait for current transition to complete
    }
    // If we're at the beginning clones, jump to the real end
    else if (currentSlide < clonesToAdd) {
      setTimeout(() => {
        setShouldDisableTransition(true);
        setCurrentSlide(maxSlide + clonesToAdd);
        setTimeout(() => setShouldDisableTransition(false), 50);
      }, 800); // Wait for current transition to complete
    }
  }, [currentSlide, isClient, items.length, clonesToAdd]);

  // Reset transitioning state after transitions
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const scrollPrev = () => {
    setAutoSlideEnabled(false);
    setCurrentSlide(prev => prev - 1);
    setTimeout(() => setAutoSlideEnabled(true), 10000);
  };

  const scrollNext = () => {
    setAutoSlideEnabled(false);
    setCurrentSlide(prev => prev + 1);
    setTimeout(() => setAutoSlideEnabled(true), 10000);
  };

  const scrollTo = (index) => {
    setAutoSlideEnabled(false);
    // Adjust index to account for clones
    setCurrentSlide(index + clonesToAdd);
    setTimeout(() => setAutoSlideEnabled(true), 10000);
  };

  const handleMouseEnter = () => {
    setAutoSlideEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoSlideEnabled(true);
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setAutoSlideEnabled(false);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const dragDistance = e.clientX - dragStart;
    setDragOffset(dragDistance);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 50; // Minimum drag distance to trigger slide
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right, go to previous slide
        scrollPrev();
      } else {
        // Dragged left, go to next slide
        scrollNext();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setAutoSlideEnabled(true), 1000);
  };

  if (!isClient) {
    return (
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <div className="gallery-header-content">
              <h2 className="gallery-title">{title}</h2>
              <p className="gallery-description">{description}</p>
            </div>
          </div>
        </div>
        <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <div className="gallery-header-content">
              <h2 className="gallery-title">{title}</h2>
              <p className="gallery-description">{description}</p>
            </div>
            {showSlider && (
              <div className="gallery-navigation">
                <button
                  className="nav-button"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  className="nav-button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div 
          className="gallery-carousel-wrapper" 
          onMouseEnter={showSlider ? handleMouseEnter : undefined} 
          onMouseLeave={showSlider ? handleMouseLeave : undefined}
          onMouseDown={showSlider ? handleMouseDown : undefined}
          onMouseMove={showSlider ? handleMouseMove : undefined}
          onMouseUp={showSlider ? handleMouseUp : undefined}
        >
          <div className="gallery-carousel-track">
            <div 
              className="gallery-slides-container"
              style={{
                transform: showSlider ? `translateX(calc(-${currentSlide * getSlideConfig().slidePercentage}% + ${dragOffset}px))` : 'translateX(0)',
                transition: showSlider && !isDragging && !shouldDisableTransition ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
              }}
            >
              {extendedItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="gallery-item">
                  <a href={item.href} className="gallery-card-link">
                    <div className="gallery-card">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="gallery-image"
                        priority={index < 4}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <div className="gallery-overlay" />
                      <div className="gallery-card-icon">
                        <item.icon size={24} />
                      </div>
                      <div className="gallery-card-content">
                        <h3 className="gallery-card-title">{item.title}</h3>
                        <p className="gallery-card-description">{item.description}</p>
                        <div className="gallery-read-more">
                          Read more <ArrowRight className="read-more-arrow" size={16} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {showSlider && (
            <div className="gallery-indicators">
              {processedItems.map((_, itemIndex) => {
                // Calculate which item we're currently viewing
                const realCurrentSlide = ((currentSlide - clonesToAdd) % processedItems.length + processedItems.length) % processedItems.length;
                
                return (
                  <button
                    key={itemIndex}
                    className={`indicator ${realCurrentSlide === itemIndex ? "active" : ""}`}
                    onClick={() => scrollTo(itemIndex)}
                    aria-label={`Go to slide ${itemIndex + 1}`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .gallery-section {
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

        .gallery-carousel-wrapper .container {
          padding: 0; /* Remove padding for carousel wrapper */
        }

        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .gallery-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gallery-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-description {
          max-width: 600px;
          color: #666666;
          margin: 0;
          line-height: 1.6;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-navigation {
          display: flex;
          flex-shrink: 0;
          gap: 8px;
        }

        .nav-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          color: #374151;
        }

        .nav-button:hover:not(:disabled) {
          background: #f3f4f6;
          color: #111827;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: auto;
        }

        .gallery-carousel-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          cursor: grab;
          user-select: none;
        }

        .gallery-carousel-wrapper:active {
          cursor: grabbing;
        }

        .gallery-carousel-track {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          overflow: hidden;
          position: relative;
        }

        .gallery-slides-container {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .gallery-slides-container {
            display: flex;
            gap: 12px;
            width: 100%;
            margin: 0;
          }
          
          .gallery-item {
            flex: 0 0 calc(50% - 6px);
            min-width: 0;
            width: calc(50% - 6px);
            margin: 0;
          }
          
          .gallery-carousel-wrapper {
            overflow: hidden;
            width: 100%;
          }
          
          .gallery-carousel-track {
            overflow: hidden;
            padding: 0 12px;
            width: 100%;
          }
        }

        .gallery-item {
          width: 100%;
          min-width: 0;
        }

        @media (min-width: 641px) {
          .gallery-slides-container {
            display: flex;
            gap: 20px;
            padding: 0;
            width: 100%;
          }
          
          .gallery-item {
            flex: 0 0 calc(25% - 15px); /* Exactly 4 items with proper gap calculation */
            min-width: calc(25% - 15px);
            max-width: calc(25% - 15px);
          }

          .gallery-card {
            padding: 0;
            margin: 0;
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .gallery-slides-container {
            gap: 16px;
          }
          .gallery-item {
            flex: 0 0 calc(50% - 8px); /* 2 items per view */
            max-width: calc(50% - 8px);
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .gallery-slides-container {
            gap: 18px;
          }
          .gallery-item {
            flex: 0 0 calc(33.333% - 12px); /* 3 items per view */
            max-width: calc(33.333% - 12px);
          }
        }

        @media (min-width: 1025px) {
          .gallery-slides-container {
            gap: 20px;
            width: calc(100% - 40px);
          }
          .gallery-item {
            flex: 0 0 calc(25% - 15px); /* Exactly 4 items per view */
            max-width: calc(25% - 15px);
            min-width: calc(25% - 15px);
          }
          .gallery-carousel-track {
            padding: 0 20px;
            box-sizing: border-box;
          }
        }

        .gallery-card-link {
          display: block;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .gallery-card-link:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .gallery-card {
          position: relative;
          height: 400px;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #f0f0f0;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-image {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 12px;
          filter: brightness(1) saturate(1);
        }

        .gallery-card-link:hover .gallery-image {
          transform: scale(1.08);
          filter: brightness(1.1) saturate(1.2);
        }

        .gallery-overlay {
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
        }

        .gallery-card-link:hover .gallery-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(253, 197, 26, 0.3) 80%,
            rgba(253, 197, 26, 0.4) 100%
          );
        }

        .gallery-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 30px 30px 30px;
          color: white;
          z-index: 10;
          transition: transform 0.3s ease;
        }

        .gallery-card-link:hover .gallery-card-content {
          transform: translateY(-5px);
        }

        .gallery-card-icon {
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

        .gallery-card-link:hover .gallery-card-icon {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .gallery-card-title {
          margin: 0 0 12px 0;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.3;
          color: white;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-card-description {
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

        .gallery-read-more {
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

        .gallery-card-link:hover .read-more-arrow {
          transform: translateX(6px);
        }

        .gallery-read-more:hover .read-more-arrow {
          transform: translateX(8px);
        }

        .gallery-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .indicator {
          height: 8px;
          width: 8px;
          border-radius: 50%;
          border: none;
          background-color: rgba(31, 41, 55, 0.2);
          cursor: pointer;
          transition: all 0.2s;
        }

        .indicator.active {
          background-color: #1f2937;
        }

        .indicator:hover {
          background-color: #1f2937;
        }

        /* Desktop specific styles */
        @media (min-width: 1025px) {
          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .gallery-navigation {
            display: none;
          }
          
          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 1280px) and (min-width: 1025px) {
          .gallery-carousel-track {
            max-width: 1200px;
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 80px 0;
          }

          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 40px;
            gap: 16px;
          }

          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 0.95rem;
          }

          .gallery-carousel-track {
            padding: 0 10px;
          }

          .gallery-card {
            height: 400px;
          }

          .gallery-card-content {
            padding: 30px 25px 25px 25px;
          }

          .gallery-card-icon {
            width: 45px;
            height: 45px;
            top: 15px;
            left: 15px;
          }

          .gallery-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .gallery-card-description {
            font-size: 0.8rem;
            margin-bottom: 15px;
            -webkit-line-clamp: 2;
          }
          
          .gallery-read-more {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 639px) {
          .container {
            padding: 0 16px;
          }

          .gallery-section {
            padding: 60px 0;
          }

          .gallery-header {
            margin-bottom: 30px;
            gap: 12px;
          }

          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
          }
          
          .gallery-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .gallery-card {
            height: 350px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
          }
          
          .gallery-card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 15px;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
          }
          
          .gallery-card-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 6px;
            color: white;
            line-height: 1.2;
          }
          
          .gallery-card-description {
            font-size: 0.75rem;
            line-height: 1.3;
            color: rgba(255,255,255,0.9);
            margin-bottom: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .gallery-read-more {
            font-size: 0.75rem;
            color: #fdc51a;
            font-weight: 600;
          }

          .gallery-carousel-track {
            padding: 0 12px;
          }
          
          .gallery-navigation {
            display: flex;
          }
          
          .gallery-indicators {
            display: flex;
          }

          .gallery-item {
            width: 100%;
          }

          .gallery-card {
            margin: 0 10px;
            padding: 10px;
            height: 350px;
            box-sizing: border-box;
          }

          .gallery-card-content {
            padding: 25px 20px 20px 20px;
          }

          .gallery-card-icon {
            width: 42px;
            height: 42px;
            top: 15px;
            left: 15px;
          }

          .gallery-card-icon svg {
            width: 20px;
            height: 20px;
          }

          .gallery-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 10px;
            line-height: 1.3;
          }

          .gallery-card-description {
            font-size: 0.8rem;
            margin-bottom: 15px;
            line-height: 1.4;
            -webkit-line-clamp: 3;
          }
          
          .gallery-read-more {
            font-size: 0.8rem;
          }

          .gallery-indicators {
            margin-top: 25px;
            gap: 6px;
          }

          .indicator {
            height: 6px;
            width: 6px;
          }
        }

        /* Mobile Large (480px - 639px) */
        @media (max-width: 639px) and (min-width: 480px) {
          .gallery-section {
            padding: 50px 0;
          }

          .gallery-card {
            padding: 10px;
            height: 350px;
            box-sizing: border-box;
          }

          .gallery-header {
            margin-bottom: 25px;
            gap: 10px;
          }

          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
          }
          
          .gallery-description {
            font-size: 0.85rem;
            line-height: 1.5;
          }

          .gallery-carousel-track {
            padding: 0 30px;
          }

          .gallery-item {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
          }

          .gallery-card {
            margin: 0 9px;
            padding: 10px;
            height: 350px;
            box-sizing: border-box;
          }

          .gallery-card-content {
            padding: 22px 18px 18px 18px;
          }

          .gallery-card-icon {
            width: 38px;
            height: 38px;
            top: 12px;
            left: 12px;
          }

          .gallery-card-icon svg {
            width: 18px;
            height: 18px;
          }

          .gallery-card-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .gallery-card-description {
            font-size: 0.75rem;
            margin-bottom: 12px;
            line-height: 1.4;
            -webkit-line-clamp: 3;
          }
          
          .gallery-read-more {
            font-size: 0.75rem;
          }
        }

        /* Mobile (360px - 479px) */
        @media (max-width: 480px) {
          .container {
            padding: 0 12px;
          }

          .gallery-section {
            padding: 40px 0;
          }

          .gallery-header {
            margin-bottom: 20px;
            gap: 8px;
          }

          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
          }
          
          .gallery-description {
            font-size: 0.8rem;
            line-height: 1.5;
          }

          .gallery-carousel-track {
            padding: 0 25px;
          }

          .gallery-item {
            width: 100%;
          }

          .gallery-card {
            margin: 0 7.5px;
            padding: 10px;
            height: 350px;
            box-sizing: border-box;
          }

          .gallery-card-content {
            padding: 20px 16px 16px 16px;
          }

          .gallery-card-icon {
            width: 36px;
            height: 36px;
            top: 10px;
            left: 10px;
          }

          .gallery-card-icon svg {
            width: 16px;
            height: 16px;
          }

          .gallery-card-title {
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 6px;
            line-height: 1.3;
          }

          .gallery-card-description {
            font-size: 0.7rem;
            margin-bottom: 10px;
            line-height: 1.4;
            -webkit-line-clamp: 2;
          }
          
          .gallery-read-more {
            font-size: 0.7rem;
          }

          .gallery-indicators {
            margin-top: 20px;
            gap: 4px;
          }

          .indicator {
            height: 5px;
            width: 5px;
          }
        }

        /* Mobile Small (Below 360px) */


          .gallery-section {
            padding: 35px 0;
          }

          .gallery-header {
            margin-bottom: 18px;
            gap: 6px;
          }

          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
          }
          
          .gallery-description {
            font-size: 0.75rem;
            line-height: 1.5;
          }

          .gallery-carousel-track {
            padding: 0 20px;
          }

          .gallery-item {
            width: 100%;
          }

          .gallery-card {
            margin: 0 6px;
            padding: 10px;
            height: 350px;
            box-sizing: border-box;
          }

          .gallery-card-content {
            padding: 18px 14px 14px 14px;
          }

          .gallery-card-icon {
            width: 32px;
            height: 32px;
            top: 8px;
            left: 8px;
          }

          .gallery-card-icon svg {
            width: 14px;
            height: 14px;
          }

          .gallery-card-title {
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 4px;
            line-height: 1.2;
          }

          .gallery-card-description {
            font-size: 0.65rem;
            margin-bottom: 8px;
            line-height: 1.3;
            -webkit-line-clamp: 2;
          }
          
          .gallery-read-more {
            font-size: 0.65rem;
          }

          .gallery-indicators {
            margin-top: 18px;
            gap: 3px;
          }

          .indicator {
            height: 4px;
            width: 4px;
          }
        }

        /* Large screen adjustments */
        @media (min-width: 1536px) {
          .gallery-content {
            margin-left: max(8rem, calc(50vw - 700px));
            margin-right: max(0rem, calc(50vw - 700px));
          }
        }
      `}</style>
    </>
  );
};

export default Gallery4;
