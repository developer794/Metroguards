"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";

export default function BlogsClientPage({ posts, totalCount, publishedCount, draftCount }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Apply status filter
    if (filterStatus === "published") {
      filtered = filtered.filter(post => post.published);
    } else if (filterStatus === "draft") {
      filtered = filtered.filter(post => !post.published);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => {
        const titleMatch = post.title?.toLowerCase().includes(searchLower);
        const excerptMatch = post.excerpt?.toLowerCase().includes(searchLower);
        const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchLower));
        return titleMatch || excerptMatch || tagsMatch;
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return filtered;
  }, [posts, searchTerm, filterStatus, sortBy]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px', margin: 0 }}>
                  All Blog Posts
                </h1>
                <p style={{ color: 'rgba(253, 197, 26, 0.9)', fontSize: '0.95rem', fontWeight: '500', margin: 0 }}>
                  Manage and organize your blog content
                </p>
              </div>
            </div>
            
            <Link 
              href="/dashboard/blogs/new"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: '#1e2247',
                fontSize: '0.95rem',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(253, 197, 26, 0.4)'
              }}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New Blog
            </Link>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '16px', 
            marginTop: '24px' 
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0, marginBottom: '4px' }}>
                Total Posts
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>
                {totalCount}
              </p>
            </div>
            <div style={{
              background: 'rgba(40, 167, 69, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(40, 167, 69, 0.3)'
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0, marginBottom: '4px' }}>
                Published
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4ade80', margin: 0 }}>
                {publishedCount}
              </p>
            </div>
            <div style={{
              background: 'rgba(253, 197, 26, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(253, 197, 26, 0.3)'
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0, marginBottom: '4px' }}>
                Drafts
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fdc51a', margin: 0 }}>
                {draftCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.08)',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginRight:'20px',
        marginBottom:'20px',
      }}>
        {/* Search Input */}
        <div style={{ flex: '1', minWidth: '250px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}>
            <svg style={{ width: '18px', height: '18px', color: '#6c757d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              fontSize: '0.9rem',
              borderRadius: '12px',
              border: '2px solid rgba(30, 34, 71, 0.15)',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#fdc51a';
              e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilterStatus("all")}
            style={{
              padding: '10px 20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              borderRadius: '10px',
              border: '2px solid',
              borderColor: filterStatus === "all" ? '#fdc51a' : 'rgba(30, 34, 71, 0.15)',
              background: filterStatus === "all" ? 'rgba(253, 197, 26, 0.1)' : 'white',
              color: filterStatus === "all" ? '#1e2247' : '#6c757d',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (filterStatus !== "all") {
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (filterStatus !== "all") {
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.15)';
              }
            }}
          >
            All Posts
          </button>

          <button
            onClick={() => setFilterStatus("published")}
            style={{
              padding: '10px 20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              borderRadius: '10px',
              border: '2px solid',
              borderColor: filterStatus === "published" ? '#28a745' : 'rgba(30, 34, 71, 0.15)',
              background: filterStatus === "published" ? 'rgba(40, 167, 69, 0.1)' : 'white',
              color: filterStatus === "published" ? '#28a745' : '#6c757d',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => {
              if (filterStatus !== "published") {
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (filterStatus !== "published") {
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.15)';
              }
            }}
          >
            <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Published
          </button>

          <button
            onClick={() => setFilterStatus("draft")}
            style={{
              padding: '10px 20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              borderRadius: '10px',
              border: '2px solid',
              borderColor: filterStatus === "draft" ? '#fdc51a' : 'rgba(30, 34, 71, 0.15)',
              background: filterStatus === "draft" ? 'rgba(253, 197, 26, 0.1)' : 'white',
              color: filterStatus === "draft" ? '#1e2247' : '#6c757d',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => {
              if (filterStatus !== "draft") {
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (filterStatus !== "draft") {
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.15)';
              }
            }}
          >
            <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
            Drafts
          </button>
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '10px 16px',
            fontSize: '0.875rem',
            fontWeight: '600',
            borderRadius: '10px',
            border: '2px solid rgba(30, 34, 71, 0.15)',
            background: 'white',
            color: '#1e2247',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#fdc51a';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
          }}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title">Title A-Z</option>
        </select>
      </div>

      {/* Results Info */}
      {(searchTerm || filterStatus !== "all") && (
        <div style={{
          padding: '12px 20px',
          background: 'rgba(253, 197, 26, 0.1)',
          border: '2px solid rgba(253, 197, 26, 0.2)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#1e2247', fontWeight: '600' }}>
            Showing {filteredPosts.length} of {totalCount} blog posts
            {searchTerm && <span> matching "{searchTerm}"</span>}
            {filterStatus !== "all" && <span> ({filterStatus})</span>}
          </p>
          {(searchTerm || filterStatus !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterStatus("all");
              }}
              style={{
                padding: '6px 16px',
                fontSize: '0.85rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: '2px solid rgba(30, 34, 71, 0.2)',
                background: 'white',
                color: '#1e2247',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 34, 71, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '64px 32px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
          border: '2px solid rgba(30, 34, 71, 0.1)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15) 0%, rgba(253, 197, 26, 0.05) 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <svg style={{ width: '40px', height: '40px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e2247', marginBottom: '12px' }}>
            {totalCount === 0 ? 'No blog posts yet' : 'No matching blog posts'}
          </h3>
          <p style={{ color: '#6c757d', marginBottom: '24px', fontSize: '0.95rem' }}>
            {totalCount === 0 
              ? 'Get started by creating your first blog post'
              : 'Try adjusting your search or filter criteria'
            }
          </p>
          {totalCount === 0 ? (
            <Link 
              href="/dashboard/blogs/new"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(30, 34, 71, 0.3)'
              }}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Your First Post
            </Link>
          ) : (
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterStatus("all");
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(30, 34, 71, 0.3)'
              }}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

