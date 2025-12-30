"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blog4() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/public-blogs?limit=4&page=1');
        const data = await response.json();
        setBlogs(data.items || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'UTC'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getReadTime = (content) => {
    if (!content) return "2 min read";
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (loading) {
    return (
      <section className="blog4-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="blog4-container">
          <div className="blog4-header">
            <h2 className="blog4-title">Latest News</h2>
          </div>
          <div className="blog4-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest news...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog4-section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="blog4-container">
        {/* Header */}
        <div className="blog4-header">
          <h2 className="blog4-title">Latest News</h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog4-grid">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={blog.id} className="blog4-card-wrapper">
                <div className="blog4-card">
                  <div className="blog4-card-image">
                    {blog.coverImage && (
                      <img 
                        src={blog.coverImage} 
                        alt={blog.title}
                        className="card-image"
                      />
                    )}
                  </div>
                  <div className="blog4-card-overlay"></div>
                  <div className="blog4-date-badge">
                    <span className="date-text">{formatDate(blog.createdAt)}</span>
                    <span className="read-time">{getReadTime(blog.excerpt)}</span>
                  </div>
                  <div className="blog4-card-content">
                    <h3 className="blog4-card-title">{blog.title}</h3>
                    {blog.excerpt && (
                      <p className="blog4-card-description">
                        {blog.excerpt.slice(0, 100)}...
                      </p>
                    )}
                    <Link href={`/${blog.slug}`} className="read-more-btn" style={{color:"#fdc51a"}}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="blog4-empty">
              <p>No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .blog4-section {
          padding: 80px 0;
          background: #f8f9fa;
          position: relative;
          z-index: 1;
        }

        .blog4-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .blog4-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .blog4-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #1e2247;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .blog4-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .blog4-card-wrapper {
          text-decoration: none;
          display: block;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .blog4-card-wrapper:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .blog4-card {
          position: relative;
          height: 400px;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #f0f0f0;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .blog4-card-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 12px;
          filter: brightness(1) saturate(1);
        }

        .blog4-card-wrapper:hover .card-image {
          transform: scale(1.08);
          filter: brightness(1.1) saturate(1.2);
        }

        .blog4-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(0, 0, 0, 0.1) 100%
          );
          border-radius: 12px;
          transition: background 0.4s ease;
        }

        .blog4-card-wrapper:hover .blog4-card-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(253, 197, 26, 0.3) 80%,
            rgba(253, 197, 26, 0.4) 100%
          );
        }

        .blog4-date-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(253, 197, 26, 0.9);
          backdrop-filter: blur(10px);
          padding: 8px 12px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          z-index: 15;
        }

        .date-text {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #1e2247;
          margin-bottom: 2px;
        }

        .read-time {
          display: block;
          font-size: 0.7rem;
          color: #1e2247;
          font-weight: 500;
        }

        .blog4-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 25px;
          color: white;
          z-index: 10;
          transition: transform 0.3s ease;
        }

        .blog4-card-wrapper:hover .blog4-card-content {
          transform: translateY(-5px);
        }

        .blog4-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: white;
          line-height: 1.2;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .blog4-card-description {
          font-size: 0.85rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 20px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .read-more-btn {
          display: inline-block;
          background: #fdc51a;
          color: #1e2247;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid #fdc51a;
        }

        .read-more-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #1e2247;
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(253, 197, 26, 0.3);
        }

        .blog4-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f4f6;
          border-top: 4px solid #fdc51a;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .blog4-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #6b7280;
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .blog4-container {
            padding: 0 32px;
          }
        }

        @media (max-width: 1024px) {
          .blog4-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .blog4-card {
            height: 350px;
          }

          .blog4-card-title {
            font-size: 1.3rem;
          }

          .blog4-card-description {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 768px) {
          .blog4-section {
            padding: 60px 0;
          }

          .blog4-container {
            padding: 0 24px;
          }

          .blog4-title {
            font-size: 2.5rem;
          }

          .blog4-header {
            margin-bottom: 40px;
          }

          .blog4-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .blog4-card {
            height: 300px;
          }

          .blog4-card-content {
            padding: 25px 20px;
          }

          .blog4-card-title {
            font-size: 1.25rem;
            margin-bottom: 10px;
          }

          .blog4-card-description {
            font-size: 0.75rem;
            margin-bottom: 15px;
          }

          .read-more-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 640px) {
          .blog4-container {
            padding: 0 20px;
          }

          .blog4-title {
            font-size: 2rem;
          }

          .blog4-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .blog4-card {
            height: 280px;
          }

          .blog4-card-content {
            padding: 20px 16px;
          }

          .blog4-card-title {
            font-size: 1.1rem;
            margin-bottom: 8px;
          }

          .blog4-card-description {
            font-size: 0.7rem;
            margin-bottom: 12px;
          }

          .blog4-date-badge {
            top: 16px;
            left: 16px;
            padding: 6px 10px;
          }

          .date-text {
            font-size: 0.7rem;
          }

          .read-time {
            font-size: 0.65rem;
          }

          .read-more-btn {
            padding: 8px 16px;
            font-size: 0.75rem;
          }
        }

        /* Animation for cards */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blog4-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .blog4-card:nth-child(1) { animation-delay: 0.1s; }
        .blog4-card:nth-child(2) { animation-delay: 0.2s; }
        .blog4-card:nth-child(3) { animation-delay: 0.3s; }
        .blog4-card:nth-child(4) { animation-delay: 0.4s; }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .blog4-card {
            animation: none;
          }
          
          .blog4-card:hover {
            transform: none;
          }
          
          .blog4-card-link:hover {
            transform: none;
          }

          .loading-spinner {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
