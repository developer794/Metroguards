"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete post");

      router.refresh(); // refresh the list after deletion
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  if (showConfirm) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={() => setShowConfirm(false)}>
        <div 
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(30, 34, 71, 0.3)',
            border: '2px solid rgba(30, 34, 71, 0.1)'
          }}
          onClick={(e) => e.stopPropagation()}>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(220, 53, 69, 0.1)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <svg style={{ width: '28px', height: '28px', color: '#dc3545' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1e2247',
            textAlign: 'center',
            marginBottom: '12px'
          }}>
            Delete Blog Post?
          </h3>
          <p style={{
            color: '#6c757d',
            textAlign: 'center',
            marginBottom: '24px',
            fontSize: '0.95rem'
          }}>
            This action cannot be undone. The blog post will be permanently deleted.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setShowConfirm(false)}
              disabled={loading}
              style={{
                flex: 1,
                padding: '12px 20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                borderRadius: '12px',
                border: '2px solid rgba(30, 34, 71, 0.2)',
                background: 'white',
                color: '#1e2247',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                opacity: loading ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = 'rgba(30, 34, 71, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = 'white';
                }
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={loading}
              style={{
                flex: 1,
                padding: '12px 20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                borderRadius: '12px',
                border: 'none',
                background: loading ? '#6c757d' : '#dc3545',
                color: 'white',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = '#c82333';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = '#dc3545';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTopColor: 'white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Deleting...
                </>
              ) : (
                <>
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </>
              )}
            </button>
          </div>
        </div>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '10px 12px',
        background: 'white',
        color: '#dc3545',
        borderRadius: '10px',
        fontSize: '0.85rem',
        fontWeight: '600',
        border: '2px solid rgba(220, 53, 69, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(220, 53, 69, 0.1)';
        e.currentTarget.style.borderColor = '#dc3545';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.2)';
      }}
    >
      <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      <span className="dashboard-btn-text">Delete</span>
    </button>
  );
}
