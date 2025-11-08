"use client";
import { useState } from "react";

export default function HeaderClient({ email }) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleSidebar = () => {
    const aside = document.querySelector('aside[data-sidebar]');
    if (aside) aside.classList.toggle('-translate-x-full');
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%)',
      backdropFilter: 'blur(12px)',
      borderBottom: '2px solid rgba(253, 197, 26, 0.2)',
      boxShadow: '0 4px 20px rgba(30, 34, 71, 0.08)',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '20px',
      marginRight: '20px',
    }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            style={{
              padding: '10px',
              borderRadius: '10px',
              background: '#f8f9fa',
              border: '2px solid rgba(30, 34, 71, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fdc51a';
              e.currentTarget.style.borderColor = '#fdc51a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8f9fa';
              e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.1)';
            }}
          >
            <svg style={{ width: '24px', height: '24px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)'
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px' ,color:'white',marginTop:'20px'}}>
            Welcome back, {email?.split('@')[0] || 'Admin'}! 👋
          </h1>
              <p style={{ color: '#fdc51a', fontSize: '1.1rem', fontWeight: '500' }}>
                Here's your Metro Guards dashboard overview
              </p>
            </div>
          </div>
         
        </div>
        </div>

        {/* Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          

          {/* User Profile */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1e2247 0%, #252958 100%)',
                border: '2px solid rgba(253, 197, 26, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(30, 34, 71, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 34, 71, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 34, 71, 0.15)';
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(253, 197, 26, 0.4)'
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: '#1e2247'
                }}>
                {(email?.charAt(0) || "U").toUpperCase()}
              </span>
            </div>
              <div className="hidden lg:block" style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white', marginBottom: '2px' }}>
                  {email?.split('@')[0] || "User"}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#fdc51a', fontWeight: '500' }}>
                  Administrator
                </p>
              </div>
              <svg style={{ width: '16px', height: '16px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '105%',
                right: 0,
                width: '240px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(30, 34, 71, 0.2)',
                border: '2px solid rgba(253, 197, 26, 0.2)',
                padding: '8px',
                zIndex: 50
              }}>
                <div style={{
                  padding: '12px',
                  borderBottom: '1px solid rgba(30, 34, 71, 0.1)',
                  marginBottom: '8px'
                }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e2247', marginBottom: '4px' }}>
                    {email || "admin@metroguards.com"}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                    Admin Account
                  </p>
                </div>
                <a
                  href="/dashboard/settings"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    color: '#1e2247',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
                <form action="/api/signout" method="POST">
                  <button 
                    type="submit"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      color: '#dc3545',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(220, 53, 69, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </form>
            </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
