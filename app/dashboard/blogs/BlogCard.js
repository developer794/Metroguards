"use client";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function BlogCard({ post }) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
      border: '2px solid rgba(30, 34, 71, 0.08)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      marginRight:'20px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(30, 34, 71, 0.15)';
      e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.08)';
      e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.08)';
    }}>
      {/* Cover Image */}
      {post.coverImage ? (
        <div style={{
          width: '100%',
          height: '200px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)'
        }}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {/* Status Badge Overlay */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: '700',
              background: post.published ? 'rgba(40, 167, 69, 0.95)' : 'rgba(253, 197, 26, 0.95)',
              color: post.published ? 'white' : '#1e2247',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}>
              {post.published ? (
                <>
                  <svg style={{ width: '12px', height: '12px' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Published
                </>
              ) : (
                <>
                  <svg style={{ width: '12px', height: '12px' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                  </svg>
                  Draft
                </>
              )}
            </span>
          </div>
        </div>
      ) : (
        <div style={{
          width: '100%',
          height: '200px',
          background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <svg style={{ width: '64px', height: '64px', color: 'rgba(253, 197, 26, 0.3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {/* Status Badge Overlay */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: '700',
              background: post.published ? 'rgba(40, 167, 69, 0.95)' : 'rgba(253, 197, 26, 0.95)',
              color: post.published ? 'white' : '#1e2247',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}>
              {post.published ? (
                <>
                  <svg style={{ width: '12px', height: '12px' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Published
                </>
              ) : (
                <>
                  <svg style={{ width: '12px', height: '12px' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                  </svg>
                  Draft
                </>
              )}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '700',
          color: '#1e2247',
          marginBottom: '8px',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p style={{
            fontSize: '0.875rem',
            color: '#6c757d',
            marginBottom: '16px',
            lineHeight: '1.6',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1
          }}>
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '16px'
          }}>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  background: 'rgba(253, 197, 26, 0.1)',
                  color: '#1e2247',
                  border: '1px solid rgba(253, 197, 26, 0.2)'
                }}
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span style={{
                padding: '4px 10px',
                fontSize: '0.7rem',
                fontWeight: '600',
                color: '#6c757d'
              }}>
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Date */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#6c757d',
          fontSize: '0.8rem',
          marginBottom: '16px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(30, 34, 71, 0.08)'
        }}>
          <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formattedDate}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <Link
            href={`/dashboard/blogs/${post.id}/edit`}
            style={{
              flex: 1,
              minWidth: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 16px',
              background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
              color: 'white',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 34, 71, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </Link>

          {post.published && (
            <Link
              href={`/${post.slug}`}
              target="_blank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '10px 16px',
                background: 'white',
                color: '#1e2247',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(30, 34, 71, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
                e.currentTarget.style.borderColor = '#fdc51a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
              }}
            >
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View
            </Link>
          )}

          <DeleteButton id={post.id} />
        </div>
      </div>
    </div>
  );
}

