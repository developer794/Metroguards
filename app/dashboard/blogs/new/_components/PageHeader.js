"use client";
import Link from "next/link";

export default function PageHeader() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%)',
      borderRadius: '20px',
      padding: '32px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(30, 34, 71, 0.3)',
      border: '2px solid rgba(253, 197, 26, 0.2)',
      marginBottom: '20px',
      marginRight: '20px'
    }}>
      {/* Background Decorations */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(253, 197, 26, 0.05) 0%, transparent 100%)',
        borderRadius: '20px'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)'
            }}>
              <svg style={{ width: '28px', height: '28px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px', margin: 0 }}>
                Create New Blog Post
              </h1>
              <p style={{ color: 'rgba(253, 197, 26, 0.9)', fontSize: '0.95rem', fontWeight: '500', margin: 0 }}>
                Share your insights and expertise with your audience
              </p>
            </div>
          </div>
          
          <Link 
            href="/dashboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = '#fdc51a';
              e.currentTarget.style.transform = 'translateX(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

