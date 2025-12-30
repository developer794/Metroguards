"use client";
import { useState } from "react";
import { useSidebar } from "./SidebarContext";

export default function HeaderClient({ email, minimal = false }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleSidebar } = useSidebar();

  // Minimal version - show toggle on mobile/tablet only (no profile dropdown)
  if (minimal) {
    return (
      <>
        {/* Mobile menu button - hidden on desktop */}
        <button
          onClick={toggleSidebar}
          className="dashboard-mobile-toggle lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Spacer for desktop (when toggle button is hidden) */}
        <div className="hidden lg:block"></div>
      </>
    );
  }

  // Full version - for main dashboard page
  return (
    <header className="dashboard-header-full" style={{
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
          {/* Mobile menu button */}
          <button
            className="dashboard-mobile-toggle-btn lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            style={{
              padding: '10px',
              borderRadius: '10px',
              background: '#f8f9fa',
              border: '2px solid rgba(30, 34, 71, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0
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

          <div className="dashboard-welcome-section" style={{ position: 'relative', zIndex: 10 }}>
          <div className="dashboard-welcome-content" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div className="dashboard-shield-icon hidden sm:flex" style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)',
              flexShrink: 0
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="dashboard-welcome-text">
              <h1 className="dashboard-welcome-title" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)', fontWeight: '700', marginBottom: '8px', color:'white', marginTop:'20px'}}>
            Welcome back, {email?.split('@')[0] || 'Admin'}! 👋
          </h1>
              <p className="dashboard-welcome-subtitle hidden sm:block" style={{ color: '#fdc51a', fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', fontWeight: '500' }}>
                Here's your Metro Guards dashboard overview
              </p>
            </div>
          </div>
         
        </div>
        </div>

        {/* Header Actions */}
        <div className="dashboard-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          

          {/* User Profile */}
          <div className="dashboard-user-profile" style={{ position: 'relative' }}>
            <button
              className="dashboard-user-button"
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
              <div className="dashboard-user-avatar" style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(253, 197, 26, 0.4)',
                flexShrink: 0
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: '#1e2247'
                }}>
                {(email?.charAt(0) || "U").toUpperCase()}
              </span>
            </div>
              <div className="dashboard-user-info hidden lg:block" style={{ textAlign: 'left' }}>
                <p className="dashboard-user-name" style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white', marginBottom: '2px' }}>
                  {email?.split('@')[0] || "User"}
                </p>
                <p className="dashboard-user-role" style={{ fontSize: '0.75rem', color: '#fdc51a', fontWeight: '500' }}>
                  Administrator
                </p>
              </div>
              <svg className="dashboard-dropdown-arrow" style={{ width: '16px', height: '16px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="dashboard-dropdown-menu-full" style={{
                position: 'absolute',
                top: '105%',
                right: 0,
                width: '240px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(30, 34, 71, 0.2)',
                border: '2px solid rgba(253, 197, 26, 0.2)',
                padding: '8px',
                zIndex: 9999
              }}>
                <div className="dashboard-dropdown-header" style={{
                  padding: '12px',
                  borderBottom: '1px solid rgba(30, 34, 71, 0.1)',
                  marginBottom: '8px'
                }}>
                  <p className="dashboard-dropdown-email" style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e2247', marginBottom: '4px' }}>
                    {email || "admin@metroguards.com"}
                  </p>
                  <p className="dashboard-dropdown-role" style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                    Admin Account
                  </p>
                </div>
                <a
                  href="/dashboard/settings"
                  className="dashboard-dropdown-link"
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
                  <svg className="dashboard-icon" style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
                <form action="/api/signout" method="POST">
                  <button 
                    type="submit"
                    className="dashboard-signout-button"
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
                    <svg className="dashboard-icon" style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
