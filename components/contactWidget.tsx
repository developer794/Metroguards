'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, X, MessageSquare, Clock, Headphones } from 'lucide-react';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* No backdrop overlay - page remains visible */}

      {/* Trigger Button */}
      <motion.button
        onClick={toggleWidget}
        className={`fixed z-[9999] ${
          isMobile
            ? 'bottom-6 right-6 w-16 h-16 rounded-full'
            : 'top-1/2 right-0 -translate-y-1/2 w-16 h-48 rounded-l-2xl'
        } bg-gradient-to-br from-[#1e2247] to-[#2a3458] text-white shadow-2xl hover:shadow-[#fdc51a]/30 transition-all duration-300 hover:scale-105 group overflow-hidden`}
        whileHover={{ x: isMobile ? 0 : -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact Us"
        aria-expanded={isOpen}
      >
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Pulse animation ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#fdc51a]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {isMobile ? (
          // Mobile: Icon only
          <div className="relative z-10 flex items-center justify-center h-full">
            <MessageSquare size={28} className="text-[#fdc51a]" />
          </div>
        ) : (
          // Desktop: Vertical text
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
            <MessageSquare size={24} className="text-[#fdc51a]" />
            <span className="text-sm font-bold tracking-wider uppercase writing-mode-vertical transform rotate-180">
              Contact Us
            </span>
          </div>
        )}
      </motion.button>

      {/* Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: '100%' } : { x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed z-[9999] bg-white shadow-2xl ${
              isMobile
                ? 'bottom-0 left-0 right-0 rounded-t-3xl max-h-[80vh]'
                : 'top-1/2 -translate-y-1/2 right-0 w-[380px] rounded-l-2xl'
            } overflow-hidden`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-widget-title"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#1e2247] to-[#2a3458] text-white px-4 py-3">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/10 via-transparent to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div style={{width:"65px",height:"65px",marginTop:"-59px"}} className="w-9 h-9 bg-[#fdc51a] rounded-lg flex items-center justify-center shadow-lg">
                      <Headphones size={18} className="text-[#1e2247]" />
                    </div>
                    <div>
                      <h2 id="contact-widget-title" className="text-base font-bold leading-tight">
                        Need Security Help?
                      </h2>
                      <p className="text-[10px] text-white/80 mt-0.5">We're here 24/7</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                    aria-label="Close contact panel"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/30 rounded-full px-2.5 py-0.5 backdrop-blur-sm" style={{width:"100px"}}>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{marginLeft:"10px"}} />
                  <span className="text-[10px] font-semibold text-green-100">Open 24/7</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 py-3 space-y-2.5 max-h-[calc(100vh-200px)] overflow-y-auto">
              {/* General Enquiry */}
              <div style={{marginTop: "10px",marginBottom: "10px"}} className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-2.5 hover:border-[#fdc51a] hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300" 
                  style={{height: "45px",verticalAlign: "middle",paddingTop: "2px",width: "45px"}}>
                    <Phone size={16} className="text-[#fdc51a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[2px] lg:text-[10px] font-semibold text-gray-500 uppercase mb-0.5" style={{fontSize: "11px",marginBottom: "4px",marginTop: "3px"}}>
                      General Enquiry
                    </h3>
                    <a
                      href="tel:0391254857"
                      className="text-lg font-bold text-[#1e2247] hover:text-[#fdc51a] transition-colors duration-200 block leading-tight" style={{fontSize: "15px"}}
                    >
                      (03) 9125 4857
                    </a>
                  </div>
                </div>
              </div>

              {/* 24/7 Control Room */}
              <div style={{marginTop: "10px",marginBottom: "10px"}} className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-2.5 hover:border-[#fdc51a] hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                   style={{height: "45px",verticalAlign: "middle",paddingTop: "2px",width: "45px"}}>
                    <Headphones size={16} className="text-[#fdc51a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5" style={{fontSize: "11px",marginBottom: "4px",marginTop: "3px"}}>
                      24/7 Control Room
                    </h3>
                    <a
                      href="tel:1300733720"
                      className="text-lg font-bold text-[#1e2247] hover:text-[#fdc51a] transition-colors duration-200 block leading-tight" style={{fontSize: "15px"}}
                    >
                      1300 733 720
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-2.5 hover:border-[#fdc51a] hover:shadow-md transition-all duration-300" style={{marginTop: "10px",marginBottom: "10px"}}>
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                   style={{height: "45px",verticalAlign: "middle",paddingTop: "2px",width: "45px"}}>
                    <Mail size={16} className="text-[#fdc51a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5" style={{fontSize: "11px",marginBottom: "4px",marginTop: "3px"}}>
                      Email
                    </h3>
                    <a
                      href="mailto:info@metroguards.com.au"
                      className="text-sm font-bold text-[#1e2247] hover:text-[#fdc51a] transition-colors duration-200 block break-all leading-tight" style={{fontSize: "15px"}}
                    >
                      info@metroguards.com.au
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Vertical Stack */}
              <div className="bg-white rounded-lg p-2.5 border-2 border-gray-200" style={{marginTop: "10px",marginBottom: "10px"}}>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="/get-quotation"
                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <MessageSquare size={18} className="text-[#fdc51a] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#1e2247] leading-tight">Online Enquiries</span>
                  </a>

                  <a
                    href="tel:1300731173"
                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <Phone size={18} className="text-[#fdc51a] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#1e2247] leading-tight">Request Call Back</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/NMRikifn9FK1fPoL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <MapPin size={18} className="text-[#fdc51a] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#1e2247] leading-tight">Find Us</span>
                  </a>
                </div>
              </div>

              {/* Office Hours Info */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1" style={{marginLeft:"5px"}}>
                    <Clock size={14} className="text-[#1e2247] flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-600 leading-tight" style={{marginTop:"0px",marginBottom:"-0.1rem", marginLeft:"2px"}}>
                        <span className="font-semibold text-[#1e2247]">Open:</span> Mon-Fri 9:00 am - 7:00 pm AEST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1" style={{marginRight:"5px"}}>
                    <span className="text-sm">🇦🇺</span>
                    <span className="text-[10px] font-semibold text-gray-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        /* Smooth scrollbar for panel */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #fdc51a;
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #e6b518;
        }

        /* Retina-ready enhancements */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        }

        /* Accessibility: Focus visible styles */
        button:focus-visible,
        a:focus-visible {
          outline: 3px solid #fdc51a;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}