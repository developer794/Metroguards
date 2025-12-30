'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, MessageSquare, PhoneCall, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface ContactWidgetProps {
  className?: string
}

const ContactWidget: React.FC<ContactWidgetProps> = ({ className }) => {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  // Hide widget on dashboard and signin pages
  if (pathname?.startsWith('/dashboard') || pathname === '/signin') {
    return null
  }

  const toggleExpand = () => setIsExpanded(!isExpanded)

  // Shared panel content component for consistency
  const PanelContent = () => (
    <div className="p-6 space-y-3">
      <div className="flex justify-between items-center mb-1" style={{ marginTop: '0px' }}>
        <h3 className="font-bold" style={{ color: '#fdc51a', fontSize: '22px', paddingLeft: '20px', marginTop: '20px', marginBottom: '4px' }}>
          Get In Touch
        </h3>
        <button
          onClick={toggleExpand}
          className="p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="space-y-2">
        <a
          href="tel:0391254857"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          style={{ height: '80px' }}
        >
          <div className="p-2 rounded-full" style={{ background: '#fdc51a' }}>
            <Phone className="w-5 h-5" style={{ color: '#1e2247' }} />
          </div>
          <div>
            <p className="text-xs text-gray-400">Enquiry</p>
            <p className="text-white font-medium" style={{ fontSize: '15px' }}>(03) 9125 4857</p>
          </div>
        </a>

        <a
          href="tel:1300731173"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          style={{ height: '80px' }}
        >
          <div className="p-2 rounded-full" style={{ background: '#fdc51a' }}>
            <PhoneCall className="w-5 h-5" style={{ color: '#1e2247' }} />
          </div>
          <div>
            <p className="text-xs text-gray-400">24/7 Emergency</p>
            <p className="text-white font-medium" style={{ fontSize: '15px' }}>1300 731 173</p>
          </div>
        </a>

        <a
          href="mailto:info@metroguards.com.au"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          style={{ height: '80px' }}
        >
          <div className="p-2 rounded-full" style={{ background: '#fdc51a' }}>
            <Mail className="w-5 h-5" style={{ color: '#1e2247' }} />
          </div>
          <div>
            <p className="text-xs text-gray-400">Email</p>
            <p className="text-white font-medium" style={{ fontSize: '15px' }}>info@metroguards.com.au</p>
          </div>
        </a>

        <div className="pt-2 space-y-2 px-2">
          <a
            href="/get-quotation"
            className="flex items-center justify-center w-full px-4 rounded-full font-medium text-sm transition-all hover:shadow-lg"
            style={{
              background: '#fdc51a',
              color: '#1e2247',
              height: '38px',
            }}
          >
            Request Quote
          </a>
          <a
            href="/contacts#contact-form"
            className="flex items-center justify-center w-full px-4 rounded-full font-medium text-sm transition-all border hover:bg-white/10"
            style={{
              borderColor: '#fdc51a',
              color: '#fdc51a',
              height: '38px',
            }}
          >
            Request Callback
          </a>
          <a
            href="https://maps.app.goo.gl/NMRikifn9FK1fPoL9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 rounded-full font-medium text-sm transition-all border hover:bg-white/10"
            style={{
              borderColor: '#fdc51a',
              color: '#fdc51a',
              height: '38px',
            }}
          >
            <MapPin className="w-3.5 h-3.5" />
            Our Location
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Version - Right Edge */}
      <div className={cn('hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50', className)}>
        <div className="relative">
          {/* Main Button */}
          <motion.button
            onClick={toggleExpand}
            className="relative overflow-hidden"
            style={{
              width: '60px',
              height: '200px',
              background: '#1e2247',
              border: 'none',
              cursor: 'pointer',
              transformStyle: 'preserve-3d',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 3D Effect Layers */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.3) 0%, transparent 50%)',
                transform: 'translateZ(2px)',
              }}
            />
            <div
              className="absolute inset-0 border-l-4 border-t-4"
              style={{
                borderColor: '#fdc51a',
                transform: 'translateZ(4px)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 100%)',
                transform: 'translateZ(1px)',
              }}
            />

            {/* Vertical Text */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: 'translateZ(6px)' }}
            >
              <span
                className="font-bold text-lg tracking-wider"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  color: '#fdc51a',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                CONTACT US
              </span>
            </div>
          </motion.button>

          {/* Expanded Panel Desktop */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute right-16 top-0 rounded-l-lg shadow-2xl overflow-hidden"
                style={{
                  width: '320px',
                  background: '#1e2247',
                  border: '2px solid #fdc51a',
                }}
              >
                <PanelContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Version - Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <motion.button
          onClick={toggleExpand}
          className="w-full relative overflow-hidden"
          style={{
            height: '60px',
            background: '#1e2247',
            border: 'none',
            cursor: 'pointer',
            transformStyle: 'preserve-3d',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* 3D Effect Layers */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(253, 197, 26, 0.3) 0%, transparent 50%)',
              transform: 'translateZ(2px)',
            }}
          />
          <div
            className="absolute inset-0 border-t-4"
            style={{
              borderColor: '#fdc51a',
              transform: 'translateZ(4px)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
              transform: 'translateZ(1px)',
            }}
          />

          {/* Horizontal Text */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-2"
            style={{ transform: 'translateZ(6px)' }}
          >
            <MessageSquare className="w-6 h-6" style={{ color: '#fdc51a' }} />
            <span
              className="font-bold text-lg tracking-wider"
              style={{
                color: '#fdc51a',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              CONTACT US
            </span>
          </div>
        </motion.button>

        {/* Expanded Panel Mobile */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 400, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute bottom-16 left-0 right-0 rounded-t-2xl shadow-2xl overflow-hidden"
              style={{
                background: '#1e2247',
                border: '2px solid #fdc51a',
                borderBottom: 'none',
                maxHeight: '70vh',
                overflowY: 'auto',
              }}
            >
              <PanelContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default ContactWidget
