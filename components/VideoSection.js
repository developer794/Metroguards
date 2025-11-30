"use client"
import React, { useState } from 'react'

export default function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1e2247 0%, #2a2f5f 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(253, 197, 26, 0.05)',
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(253, 197, 26, 0.08)',
        filter: 'blur(60px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '800px',
          margin: '0 auto 60px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(253, 197, 26, 0.1)',
            padding: '8px 20px',
            borderRadius: '30px',
            marginBottom: '20px',
            border: '1px solid rgba(253, 197, 26, 0.2)'
          }}>
            <i className="bi bi-play-circle-fill" style={{ 
              color: '#fdc51a', 
              fontSize: '1.2rem' 
            }}></i>
            <span style={{
              color: '#fdc51a',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Watch Our Story
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Experience Excellence in Security
          </h2>
          
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Discover how Metropolitan Guard Services delivers professional security solutions across Victoria with dedication, expertise, and 24/7 commitment.
          </p>
        </div>

        {/* Video Container */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Video Wrapper with Border Effect */}
          <div style={{
            position: 'relative',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, rgba(253, 197, 26, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(253, 197, 26, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(253, 197, 26, 0.1)',
          }}>
            {/* Inner Video Container */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              background: '#000',
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Loading Placeholder */}
              {!isLoaded && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#1e2247',
                  zIndex: 1
                }}>
                  <div style={{
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      border: '4px solid rgba(253, 197, 26, 0.3)',
                      borderTop: '4px solid #fdc51a',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      margin: '0 auto 15px'
                    }}></div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.9rem'
                    }}>Loading video...</p>
                  </div>
                </div>
              )}

              {/* YouTube Iframe */}
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '12px'
                }}
                src="https://www.youtube.com/embed/nrhwVnuYHMI?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
                title="Metropolitan Guard Services - Professional Security Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
              ></iframe>
            </div>

            {/* Decorative Corner Accents */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              width: '40px',
              height: '40px',
              borderTop: '3px solid #fdc51a',
              borderLeft: '3px solid #fdc51a',
              borderRadius: '20px 0 0 0',
              opacity: 0.6
            }}></div>
            
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              width: '40px',
              height: '40px',
              borderBottom: '3px solid #fdc51a',
              borderRight: '3px solid #fdc51a',
              borderRadius: '0 0 20px 0',
              opacity: 0.6
            }}></div>
          </div>

          {/* Bottom Info Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(253, 197, 26, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(253, 197, 26, 0.3)'
              }}>
                <i className="bi bi-shield-check" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', margin: 0 }}>Certified</p>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', margin: 0 }}>ISO Standards</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(253, 197, 26, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(253, 197, 26, 0.3)'
              }}>
                <i className="bi bi-clock-history" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', margin: 0 }}>Available</p>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', margin: 0 }}>24/7 Service</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(253, 197, 26, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(253, 197, 26, 0.3)'
              }}>
                <i className="bi bi-people" style={{ color: '#fdc51a', fontSize: '1.2rem' }}></i>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', margin: 0 }}>Trained</p>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}

