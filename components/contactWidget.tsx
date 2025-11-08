'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, X, MessageSquare, Clock, Headphones, Send, Calendar, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function ContactWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobilePrompt, setShowMobilePrompt] = useState(false);

  // Hide widget on dashboard pages
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

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
      if (e.key === 'Escape') {
        if (isOpen) {
          closeFullContact();
        } else if (showMobilePrompt) {
          setShowMobilePrompt(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, showMobilePrompt]);

  const toggleWidget = () => {
    if (isMobile) {
      // On mobile, show prompt first
      setShowMobilePrompt(!showMobilePrompt);
    } else {
      // On desktop, open directly
      setIsOpen(!isOpen);
    }
  };

  const openFullContact = () => {
    setShowMobilePrompt(false);
    setIsOpen(true);
  };

  const closeFullContact = () => {
    setIsOpen(false);
    setShowMobilePrompt(false);
  };

  return (
    <>
      {/* No backdrop overlay - page remains visible */}

      {/* Trigger Button */}
      <motion.button
        onClick={toggleWidget}
        className={`fixed z-[9999] ${
          isMobile
            ? 'bottom-6 left-6 px-4 py-3 rounded-xl'
            : 'top-1/2 right-0 -translate-y-1/2 w-16 h-48 rounded-l-2xl'
        } bg-gradient-to-br from-[#1e2247] to-[#2a3458] text-white shadow-2xl hover:shadow-[#fdc51a]/30 transition-all duration-300 hover:scale-105 group overflow-hidden`}
        whileHover={{ x: isMobile ? 0 : -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact Us"
        aria-expanded={isOpen || showMobilePrompt}
      >
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Pulse animation ring */}
        <motion.div
          className={`absolute inset-0 ${isMobile ? 'rounded-xl' : 'rounded-full'} border-2 border-[#fdc51a]`}
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
          // Mobile: Rectangle button with icon and text
          <div className="relative z-10 flex items-center justify-center gap-2 h-full">
            <MessageSquare size={20} className="text-[#fdc51a]" />
            <span className="text-sm font-bold whitespace-nowrap">Contact Us</span>
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

      {/* Premium Mobile Prompt Popup */}
      <AnimatePresence>
        {showMobilePrompt && isMobile && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            className="fixed bottom-24 left-4 right-4 z-[9999] bg-white rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            style={{
              boxShadow: '0 20px 50px rgba(30, 34, 71, 0.25), 0 0 0 1px rgba(253, 197, 26, 0.1)'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowMobilePrompt(false)}
              className="absolute top-2 right-2 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all z-10"
              aria-label="Close prompt"
            >
              <X size={14} className="text-[#1e2247]" />
            </button>

            {/* Header with Logo */}
            <div className="relative bg-gradient-to-br from-[#1e2247] via-[#2a3458] to-[#1e2247] px-4 py-4">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fdc51a] rounded-full blur-3xl"></div>
              </div>
              <div className="relative flex items-center justify-center gap-3">
                <div className="w-10 h-10s rounded-lg flex items-center justify-center shadow-lg" style={{height:"100px", width:"100px"}}>
                  <img src="/assets/img/logo/metroguards logo 2.png" alt="Metro Guards" className="w-8 h-8 object-contain" onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1e2247"/><path d="M2 17L12 22L22 17" stroke="#fdc51a" stroke-width="2"/></svg>';
                  }}
                  style={{height:"100px", width:"100px"}} />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-bold text-white leading-tight">Need Security Help?</h3>
                  <p className="text-xs text-white/80 mt-0.5">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col items-center">
              <p className="text-xs text-center text-gray-600 leading-relaxed mb-3">
                Get in touch with our professional security team
              </p>

              {/* Compact Centered Button */}
              <motion.button
                onClick={openFullContact}
                className="group relative bg-white border-2 border-[#fdc51a] text-[#1e2247] px-4 py-1.5 rounded-lg font-bold text-[10px] hover:shadow-md transition-all duration-200 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-1.5">
                  <Phone size={13} className="text-[#fdc51a]" />
                  <span className="whitespace-nowrap" style={{fontSize:"12px"}}>Leave a Message</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: '100%' } : { x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed z-[9999] shadow-2xl ${
              isMobile
                ? 'bottom-0 left-0 right-0 rounded-t-[30px]'
                : 'top-1/2 -translate-y-1/2 right-0 w-[400px] rounded-l-[30px]'
            } overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-widget-title"
            style={{
              boxShadow: '0 25px 70px rgba(30, 34, 71, 0.3), 0 0 0 1px rgba(253, 197, 26, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
            }}
          >
            {/* Ultra-Premium Compact Header */}
            <div className="relative overflow-hidden">
              {/* Luxe Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e2247] via-[#2a3458] to-[#1a1d3e]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#fdc51a] rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#fdc51a] rounded-full blur-3xl"></div>
                </div>
                {/* Elegant pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
              </div>

              <div className="relative z-10 px-5 py-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-11 h-11 bg-gradient-to-br from-[#fdc51a] via-[#f4a800] to-[#fdc51a] rounded-xl flex items-center justify-center shadow-lg shadow-[#fdc51a]/40"
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Headphones size={20} className="text-[#1e2247]" />
                    </motion.div>
                    <div>
                      <h2 id="contact-widget-title" className="text-lg font-bold text-white leading-tight tracking-tight" style={{marginTop:"10px"}}>
                        Connect With Us
                      </h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="relative flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-300">24/7 Available</span>
                        <span className="text-sm">🇦🇺</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={closeFullContact}
                    className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-200 border border-white/20"
                    aria-label="Close contact panel"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Super Compact Content - Minimal Height */}
            <div className="px-3 py-3">
              
              {/* Contact Numbers in 2-Column Grid */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                {/* General Enquiry - Mini Card */}
                <motion.a
                  href="tel:0391254857"
                  className="group relative block bg-white rounded-lg p-2 border border-gray-200/60 hover:border-[#fdc51a] transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -1, boxShadow: '0 6px 16px rgba(253, 197, 26, 0.1)' }}
                  style={{boxShadow: '0 1px 4px rgba(0,0,0,0.05)'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center text-center gap-1.5">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Phone size={14} className="text-[#fdc51a]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide block">Enquiry</span>
                      <p className="text-xs font-bold text-[#1e2247] group-hover:text-[#fdc51a] transition-colors duration-300 mt-0.5 leading-tight">
                        (03) 9125 4857
                      </p>
                    </div>
                  </div>
                </motion.a>

                {/* 24/7 Emergency - Mini Card */}
                <motion.a
                  href="tel:1300733720"
                  className="group relative block bg-gradient-to-br from-[#fdc51a]/10 to-white rounded-lg p-2 border border-[#fdc51a]/30 hover:border-[#fdc51a] transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -1, boxShadow: '0 6px 16px rgba(253, 197, 26, 0.15)' }}
                  style={{boxShadow: '0 1px 4px rgba(253, 197, 26, 0.1)'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center text-center gap-1.5">
                    <div className="relative w-8 h-8 bg-gradient-to-br from-[#fdc51a] to-[#f4a800] rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Headphones size={14} className="text-[#1e2247]" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#1e2247] rounded-full flex items-center justify-center">
                        <span className="w-1 h-1 bg-[#fdc51a] rounded-full animate-pulse"></span>
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide block">24/7 Live</span>
                      <p className="text-xs font-bold text-[#1e2247] group-hover:text-[#fdc51a] transition-colors duration-300 mt-0.5 leading-tight">
                        1300 733 720
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Email - Single Row Mini */}
              <motion.a
                href="mailto:info@metroguards.com.au"
                className="group relative block bg-white rounded-lg p-2 border border-gray-200/60 hover:border-[#fdc51a] transition-all duration-300 overflow-hidden mb-2"
                whileHover={{ y: -1, boxShadow: '0 6px 16px rgba(253, 197, 26, 0.1)' }}
                style={{boxShadow: '0 1px 4px rgba(0,0,0,0.05)'}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Mail size={14} className="text-[#fdc51a]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide block">Email</span>
                    <p className="text-[11px] font-bold text-[#1e2247] group-hover:text-[#fdc51a] transition-colors duration-300 truncate leading-tight">
                      info@metroguards.com.au
                    </p>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-[#fdc51a] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
                </div>
              </motion.a>

              {/* Thin Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2"></div>

              {/* Mini Action Buttons - 3 Column Grid */}
              <div className="grid grid-cols-3 gap-1.5">
                <motion.a
                  href="/get-quotation"
                  className="group relative bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-lg p-2 hover:shadow-md transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center text-center gap-1">
                    <div className="w-7 h-7 bg-[#fdc51a] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Send size={13} className="text-[#1e2247]" />
                    </div>
                    <p className="text-white font-bold text-[10px] leading-tight">Quote</p>
                  </div>
                </motion.a>

                <motion.a
                  href="/contacts#contact-form"
                  className="group relative bg-white border border-gray-200 rounded-lg p-2 hover:border-[#fdc51a] hover:shadow-md transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center text-center gap-1">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#1e2247] to-[#2a3458] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar size={13} className="text-[#fdc51a]" />
                    </div>
                    <p className="text-[#1e2247] font-bold text-[10px] leading-tight">Callback</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://maps.app.goo.gl/NMRikifn9FK1fPoL9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white border border-gray-200 rounded-lg p-2 hover:border-[#fdc51a] hover:shadow-md transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdc51a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center text-center gap-1">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#fdc51a] to-[#f4a800] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={13} className="text-[#1e2247]" />
                    </div>
                    <p className="text-[#1e2247] font-bold text-[10px] leading-tight">Location</p>
                  </div>
                </motion.a>
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

        /* Premium scrollbar for panel */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
          border-radius: 10px;
          margin: 8px 0;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #fdc51a, #f4a800);
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(253, 197, 26, 0.3);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #f4a800, #e69500);
          box-shadow: 0 2px 8px rgba(253, 197, 26, 0.4);
        }

        /* Smooth scroll behavior */
        .overflow-y-auto {
          scroll-behavior: smooth;
        }

        /* Premium shadow enhancements */
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
          border-radius: 8px;
        }

        /* Glass morphism effect */
        @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            -webkit-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);
          }
          .backdrop-blur-md {
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
          }
        }
      `}</style>
    </>
  );
}