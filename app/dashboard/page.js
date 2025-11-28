// /app/dashboard/page.jsx
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import StatsCards from "./_components/StatsCards";

async function getUser() {
  const token = cookies().get("auth")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload; // { sub, email }
  } catch {
    return null;
  }
}

// Mock data - replace with your actual data fetching
const mockStats = {
  totalBlogs: 24,
  totalViews: 15420,
  totalUsers: 1250,
  growthRate: 12.5,
  activeGuards: 48,
  totalBookings: 132,
  pendingQuotations: 15,
  monthlyRevenue: 125000
};

const recentBlogs = [
  { id: 1, title: "Security Best Practices for 2025", author: "Metro Guards Team", date: "2025-01-10", views: 542, status: "Published" },
  { id: 2, title: "Event Security Planning Guide", author: "Security Manager", date: "2025-01-08", views: 387, status: "Published" },
  { id: 3, title: "Mobile Patrol Services Overview", author: "Operations Team", date: "2025-01-05", views: 256, status: "Draft" },
];

const recentBookings = [
  { id: 1, client: "Corporate Tower", service: "Building Security", date: "2025-01-15", status: "Confirmed", guards: 4 },
  { id: 2, client: "Shopping Centre", service: "Retail Security", date: "2025-01-16", status: "Pending", guards: 6 },
  { id: 3, client: "Construction Site", service: "Site Security", date: "2025-01-17", status: "Confirmed", guards: 3 },
];

export default async function DashboardPage() {
  const user = await getUser();
  
  return (
    <div className="space-y-8">
      {/* Welcome Section - Replaces the full header */}
      <div className="dashboard-welcome" style={{
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div className="hidden sm:flex" style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
              borderRadius: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)',
              flexShrink: 0
            }}>
              <svg style={{ width: '28px', height: '28px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 style={{ 
                fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', 
                fontWeight: '700', 
                marginBottom: '6px', 
                margin: 0 
              }}>
                Welcome back, {user?.email?.split('@')[0] || 'Admin'}! 👋
              </h1>
              <p className="hidden sm:block" style={{ 
                color: 'rgba(253, 197, 26, 0.9)', 
                fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', 
                fontWeight: '500', 
                margin: 0 
              }}>
                Here's your Metro Guards dashboard overview
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsCards stats={mockStats} />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{marginBottom: '20px', marginRight: '20px'}}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
          border: '2px solid rgba(30, 34, 71, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(253, 197, 26, 0.15)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(253, 197, 26, 0.3)'
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e2247' }}>Create New Blog</h3>
          </div>
          <p style={{ color: '#6c757d', marginBottom: '20px', fontSize: '0.9rem' }}>Start writing your next amazing blog post</p>
          <a 
            href="/dashboard/blogs/new"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
              color: '#1e2247',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              fontSize: '0.875rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(253, 197, 26, 0.3)'
            }}
          >
            Get Started
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
          border: '2px solid rgba(30, 34, 71, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(40, 167, 69, 0.15)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(40, 167, 69, 0.3)'
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#28a745' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e2247' }}>View Contact Inquiries</h3>
          </div>
          <p style={{ color: '#6c757d', marginBottom: '20px', fontSize: '0.9rem' }}>Track your contact inquiries and responses</p>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#28a745',
            color: 'white',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '0.875rem',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
          }}>
            View Inquiries
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
          border: '2px solid rgba(30, 34, 71, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(30, 34, 71, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(30, 34, 71, 0.2)'
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e2247' }}>Manage Quotations</h3>
          </div>
          <p style={{ color: '#6c757d', marginBottom: '20px', fontSize: '0.9rem' }}>Manage your quotations and quotes</p>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#1e2247',
            color: 'white',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '0.875rem',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(30, 34, 71, 0.3)'
          }}>
            Open Quotations
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Recent Blogs */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)',
        marginBottom: '20px',
        marginRight: '20px'
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '2px solid rgba(253, 197, 26, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e2247' }}>Recent Blogs</h2>
          <a 
            href="/dashboard/blogs"
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fdc51a',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            View all →
          </a>
        </div>
        
        <div>
          {recentBlogs.map((blog) => (
            <div key={blog.id} style={{
              padding: '20px 24px',
              borderBottom: '1px solid rgba(30, 34, 71, 0.08)',
              transition: 'all 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247', marginBottom: '8px' }}>{blog.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.875rem', color: '#6c757d' }}>
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.views} views</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    background: blog.status === 'Published' ? 'rgba(40, 167, 69, 0.15)' : 'rgba(253, 197, 26, 0.2)',
                    color: blog.status === 'Published' ? '#28a745' : '#fdc51a'
                  }}>
                    {blog.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)',
        marginRight: '20px'
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '2px solid rgba(253, 197, 26, 0.2)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e2247' }}>Recent Activity</h2>
        </div>
        
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(253, 197, 26, 0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '2px solid rgba(253, 197, 26, 0.3)'
              }}>
                <svg style={{ width: '18px', height: '18px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', color: '#1e2247' }}>
                  <span style={{ fontWeight: '600' }}>New blog post</span> "Security Best Practices for 2025" was published
                </p>
                <p style={{ fontSize: '0.8rem', color: '#6c757d', marginTop: '4px' }}>2 hours ago</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(40, 167, 69, 0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '2px solid rgba(40, 167, 69, 0.3)'
              }}>
                <svg style={{ width: '18px', height: '18px', color: '#28a745' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', color: '#1e2247' }}>
                  Your blog reached <span style={{ fontWeight: '600' }}>1,000+ views</span> this week
                </p>
                <p style={{ fontSize: '0.8rem', color: '#6c757d', marginTop: '4px' }}>5 hours ago</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(30, 34, 71, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '2px solid rgba(30, 34, 71, 0.2)'
              }}>
                <svg style={{ width: '18px', height: '18px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', color: '#1e2247' }}>
                  <span style={{ fontWeight: '600' }}>3 new bookings</span> received today
                </p>
                <p style={{ fontSize: '0.8rem', color: '#6c757d', marginTop: '4px' }}>1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}