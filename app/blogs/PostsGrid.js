"use client";
import { useState } from "react";

export default function PostsGrid({
  initialPosts,
  initialPage,
  pageSize,
  hasMoreInitial,
  formatDate,
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(hasMoreInitial);
  const [loading, setLoading] = useState(false);

  // ✅ local date formatter (not passed in props)
  const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const res = await fetch(`/api/public-blogs?limit=${pageSize}&page=${page + 1}`, { cache: "no-store" });
    const data = await res.json();
    setPosts((prev) => [...prev, ...data.items]);
    setPage((p) => p + 1);
    setHasMore(data.hasMore);
    setLoading(false);
  };

  return (
    <>
      <style jsx>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 45px;
          margin-bottom: 80px;
        }

        .blog-card {
          background: #ffffff;
          border-radius: 0;
          overflow: visible;
          box-shadow: none;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          border: none;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
        }

        .blog-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #fdc51a, #1e2247, #f39c12, #2a3458);
          border-radius: 8px;
          z-index: -1;
          opacity: 1;
          transition: all 0.6s ease;
        }

        .blog-card:hover::before {
          opacity: 1;
          transform: scale(1.02);
        }

        .blog-card:hover {
          transform: translateY(-15px) rotateY(5deg);
        }

        .blog-card-inner {
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: all 0.6s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .blog-card:hover .blog-card-inner {
          box-shadow: 0 25px 60px rgba(0,0,0,0.2);
        }

        .blog-image-container {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: #f8f9fa;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
          filter: grayscale(20%) contrast(1.1);
        }

        .blog-card:hover .blog-image {
          transform: scale(1.15) rotate(-2deg);
          filter: grayscale(0%) contrast(1.2);
        }

        .blog-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 34, 71, 0.8), rgba(253, 197, 26, 0.6));
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-card:hover .blog-image-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
          transform: translateY(20px);
          transition: transform 0.5s ease;
        }

        .blog-card:hover .overlay-content {
          transform: translateY(0);
        }

        .overlay-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .overlay-btn {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 8px 20px;
          border: 2px solid white;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .overlay-btn:hover {
          background: white;
          color: #1e2247;
        }

        .blog-content {
          padding: 35px 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .blog-date {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6c757d;
          font-size: 0.9rem;
          font-weight: 600;
          background: #f8f9fa;
          padding: 10px 18px;
          border-radius: 0;
          border-left: 4px solid #fdc51a;
          position: relative;
        }

        .blog-date::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #fdc51a, #f39c12);
        }

        .blog-date i {
          color: #fdc51a;
          font-size: 1rem;
        }

        .blog-category {
          background: #1e2247;
          color: white;
          padding: 10px 20px;
          border-radius: 0;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
        }

        .blog-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1e2247;
          margin-bottom: 20px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
          position: relative;
        }

        .blog-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #fdc51a, #f39c12);
          transition: width 0.5s ease;
        }

        .blog-card:hover .blog-title::after {
          width: 80px;
        }

        .blog-excerpt {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 25px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .blog-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 25px;
          border-top: 2px solid #f1f3f4;
          margin-top: auto;
          position: relative;
        }

        .blog-footer::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 0;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #fdc51a, #f39c12);
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #6c757d;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #1e2247, #2a3458);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          position: relative;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .read-more-btn {
          background: transparent;
          color: #1e2247;
          padding: 12px 25px;
          border: 2px solid #1e2247;
          border-radius: 0;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .read-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #1e2247;
          transition: left 0.4s ease;
          z-index: -1;
        }

        .read-more-btn:hover::before {
          left: 0;
        }

        .read-more-btn:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30, 34, 71, 0.3);
        }

        .load-more-section {
          text-align: center;
          margin-top: 80px;
        }

        .load-more-btn {
          background: #1e2247;
          color: white;
          border: 2px solid #1e2247;
          padding: 18px 40px;
          border-radius: 0;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%);
          z-index: 2;
        }

        .load-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #fdc51a;
          transition: left 0.6s ease;
          z-index: 1;
        }

        .load-more-btn:hover::before {
          left: 0;
        }

        .load-more-btn:hover {
          color: #000000;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(253, 197, 26, 0.4);
        }

        .load-more-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .no-more-text {
          color: #6c757d;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid #1e2247;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .blog-content {
            padding: 25px 20px;
          }
          
          .blog-title {
            font-size: 1.3rem;
          }
          
          .blog-image-container {
            height: 220px;
          }
        }
      `}</style>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-inner">
              <div className="blog-image-container">
                {post.coverImage && (
                  <img src={post.coverImage} alt={post.title} className="blog-image" />
                )}
                <div className="blog-image-overlay">
                  <div className="overlay-content">
                    <div className="overlay-title">Read Article</div>
                    <a href={`/${post.slug}`} className="overlay-btn">
                      <i className="bi bi-arrow-right"></i>
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-date">
                    <i className="bi bi-calendar3"></i>
                    <span>{fmtDate(post.createdAt)}</span>
                  </div>
                  {post.category && (
                    <div className="blog-category">
                      {post.category}
                    </div>
                  )}
                </div>

                <h3 className="blog-title">
                  {post.title}
                </h3>

                

                <div className="blog-footer">
                  <div className="author-info">
                    <div className="author-avatar">
                      A
                    </div>
                    <span>By Admin</span>
                  </div>
                  <a href={`/${post.slug}`} className="read-more-btn">
                    Read More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Section */}
      <div className="load-more-section">
        {hasMore ? (
          <button
            onClick={loadMore}
            disabled={loading}
            className="load-more-btn"
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Loading Articles...
              </>
            ) : (
              <>
                <i className="bi bi-plus-circle"></i>
                Load More Articles
              </>
            )}
          </button>
        ) : (
          <p className="no-more-text">
            <i className="bi bi-check-circle"></i>
            You've reached the end of our articles
          </p>
        )}
      </div>
    </>
  );
}
