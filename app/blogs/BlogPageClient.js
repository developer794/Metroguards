'use client';
import PostsGrid from "./PostsGrid";

import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";

export default function BlogPageClient({
  initialPosts,
  initialPage,
  pageSize,
  hasMoreInitial,
}) {
  return (
    <>
      <style jsx>{`
        /* Blog Page Styling */
        .blog-hero-section {
          background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
          padding: 120px 0 80px 0;
          position: relative;
          overflow: hidden;
        }

        .blog-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .blog-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .blog-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(253, 197, 26, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(253, 197, 26, 0.3);
          color: #fdc51a;
          padding: 12px 25px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blog-hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 25px;
          line-height: 1.1;
        }

        .blog-hero-subtitle {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 30px;
          font-weight: 300;
        }

        .blog-hero-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto 40px auto;
          line-height: 1.7;
        }

        .blog-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 50px;
        }

        .blog-stat-item {
          text-align: center;
        }

        .blog-stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fdc51a;
          display: block;
          margin-bottom: 10px;
        }

        .blog-stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .blog-content-section {
          padding: 100px 0;
          background: #f8f9fa;
        }

        .blog-section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .blog-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fdc51a;
          color: #1e2247;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blog-section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1e2247;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .blog-section-description {
          font-size: 1.2rem;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .blog-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 80px;
        }

        .blog-feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .blog-feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .blog-feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #fdc51a, #f39c12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px auto;
          font-size: 2rem;
          color: white;
        }

        .blog-feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e2247;
          margin-bottom: 15px;
        }

        .blog-feature-description {
          color: #6c757d;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .blog-hero-title {
            font-size: 2.5rem;
          }
          
          .blog-stats {
            flex-direction: column;
            gap: 30px;
          }
          
          .blog-section-title {
            font-size: 2rem;
          }
          
          .blog-features {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>

      

      

      {/* Content Section */}
      <section className="blog-content-section">
        <div className="container">
          <div className="blog-section-header">
            <div className="blog-section-badge">
              <i className="bi bi-book"></i>
              Latest Articles
            </div>
            <h2 className="blog-section-title">Security Blog Posts</h2>
            <p className="blog-section-description">
              Explore our comprehensive collection of security articles, expert tips, and industry insights to enhance your knowledge and protect what matters most.
            </p>
          </div>

          <PostsGrid
            initialPosts={initialPosts}
            initialPage={initialPage}
            pageSize={pageSize}
            hasMoreInitial={hasMoreInitial}
          />

          

          
        </div>
        <Accreditation />
          <Subscribe />
      </section>
    </>
  );
}
