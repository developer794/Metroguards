// /app/dashboard/page.jsx
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import Link from "next/link";
import prisma from "@/lib/prisma";
import StatsCards from "./_components/StatsCards";
import PendingInquiriesSidebar from "./_components/PendingInquiriesSidebar";

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

// Fetch real stats from database
async function getDashboardStats() {
  try {
    const [
      totalQuotations,
      newQuotations,
      approvedQuotations,
      totalBookings,
      confirmedBookings,
      totalContactInquiries,
      newContactInquiries,
      totalPosts,
    ] = await Promise.all([
      prisma.quotation.count(),
      prisma.quotation.count({ where: { status: "new" } }),
      prisma.quotation.count({ where: { isApproved: true } }),
      prisma.booking.count(),
      prisma.booking.count({ where: { status: "booking_confirmed" } }),
      prisma.contactInquiry.count(),
      prisma.contactInquiry.count({ where: { status: "new" } }),
      prisma.post.count({ where: { published: true } }),
    ]);

    return {
      totalQuotations,
      newQuotations,
      approvedQuotations,
      totalBookings,
      confirmedBookings,
      totalContactInquiries,
      newContactInquiries,
      totalPosts,
      pendingItems: newQuotations + newContactInquiries,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      totalQuotations: 0,
      newQuotations: 0,
      approvedQuotations: 0,
      totalBookings: 0,
      confirmedBookings: 0,
      totalContactInquiries: 0,
      newContactInquiries: 0,
      totalPosts: 0,
      pendingItems: 0,
    };
  }
}

// Fetch pending inquiries (both contact and quotation)
async function getPendingInquiries() {
  try {
    const [quotations, contactInquiries] = await Promise.all([
      prisma.quotation.findMany({
        where: { status: "new" },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
      prisma.contactInquiry.findMany({
        where: { status: "new" },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
    ]);

    return {
      quotations: quotations.map((q) => ({
        ...q,
        createdAt: q.createdAt.toISOString(),
        updatedAt: q.updatedAt.toISOString(),
      })),
      contactInquiries: contactInquiries.map((c) => ({
        ...c,
        createdAt: c.createdAt.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Error fetching pending inquiries:", error);
    return { quotations: [], contactInquiries: [] };
  }
}

// Fetch recent activity
async function getRecentActivity() {
  try {
    const [recentQuotations, recentBookings] = await Promise.all([
      prisma.quotation.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
      prisma.booking.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    return {
      recentQuotations: recentQuotations.map((q) => ({
        ...q,
        createdAt: q.createdAt.toISOString(),
        updatedAt: q.updatedAt.toISOString(),
      })),
      recentBookings: recentBookings.map((b) => ({
        ...b,
        createdAt: b.createdAt.toISOString(),
        updatedAt: b.updatedAt.toISOString(),
        startDate: b.startDate?.toISOString(),
        endDate: b.endDate?.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Error fetching recent activity:", error);
    return { recentQuotations: [], recentBookings: [] };
  }
}

export default async function DashboardPage() {
  const user = await getUser();
  const stats = await getDashboardStats();
  const pendingInquiries = await getPendingInquiries();
  const recentActivity = await getRecentActivity();

  // Format stats for StatsCards component
  const formattedStats = {
    totalBlogs: stats.totalPosts,
    totalViews: 0,
    totalUsers: 0,
    growthRate: 0,
    activeGuards: 48,
    totalBookings: stats.totalBookings,
    pendingQuotations: stats.newQuotations,
    monthlyRevenue: 0,
  };
  
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {/* Main Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
    <div className="space-y-8">
          {/* Welcome Section */}
          <div
            className="dashboard-welcome"
            style={{
              background:
                "linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%)",
              borderRadius: "20px",
              padding: "32px",
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(30, 34, 71, 0.3)",
              border: "2px solid rgba(253, 197, 26, 0.2)",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(253, 197, 26, 0.05) 0%, transparent 100%)",
                borderRadius: "20px",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(253, 197, 26, 0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
              }}
            ></div>

            <div style={{ position: "relative", zIndex: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="hidden sm:flex"
                  style={{
                    width: "56px",
                    height: "56px",
                    background:
                      "linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)",
                    borderRadius: "16px",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(253, 197, 26, 0.4)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{ width: "28px", height: "28px", color: "#1e2247" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
              </svg>
            </div>
            <div>
                  <h1
                    style={{
                      fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                      fontWeight: "700",
                      marginBottom: "6px",
                      margin: 0,
                    }}
                  >
                    Welcome back, {user?.email?.split("@")[0] || "Admin"}! 👋
              </h1>
                  <p
                    className="hidden sm:block"
                    style={{
                      color: "rgba(253, 197, 26, 0.9)",
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      fontWeight: "500",
                      margin: 0,
                    }}
                  >
                    Here's your Metro Guards command center
              </p>
            </div>
          </div>

              {/* Quick Stats in Welcome Banner */}
              {stats.pendingItems > 0 && (
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href="/dashboard/quotations"
                    style={{
                      background: "rgba(239, 68, 68, 0.2)",
                      padding: "12px 20px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid rgba(239, 68, 68, 0.4)",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <span
                      style={{
                        background: "#ef4444",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {stats.newQuotations}
                    </span>
                    <span style={{ fontWeight: "600" }}>
                      New Quotation Requests
                    </span>
                  </Link>

                  {stats.newContactInquiries > 0 && (
                    <Link
                      href="/dashboard/bookings"
                      style={{
                        background: "rgba(59, 130, 246, 0.2)",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        border: "1px solid rgba(59, 130, 246, 0.4)",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <span
                        style={{
                          background: "#3b82f6",
                          color: "white",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        {stats.newContactInquiries}
                      </span>
                      <span style={{ fontWeight: "600" }}>
                        New Contact Inquiries
                      </span>
                    </Link>
                  )}
        </div>
              )}
            </div>
          </div>

          {/* Overview Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                border: "2px solid rgba(253, 197, 26, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Total Quotations
                  </p>
                  <p
                    style={{
                      color: "#1e2247",
                      fontSize: "32px",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    {stats.totalQuotations}
                  </p>
                </div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(253, 197, 26, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#fdc51a" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
            </svg>
                </div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <span
                  style={{
                    background: "#10b981",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {stats.approvedQuotations} approved
                </span>
        </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                border: "2px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Active Bookings
                  </p>
                  <p
                    style={{
                      color: "#1e2247",
                      fontSize: "32px",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    {stats.totalBookings}
                  </p>
          </div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(16, 185, 129, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#10b981" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
            </svg>
                </div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <span
                  style={{
                    background: "#10b981",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {stats.confirmedBookings} confirmed
                </span>
        </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                border: "2px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Contact Inquiries
                  </p>
                  <p
                    style={{
                      color: "#1e2247",
                      fontSize: "32px",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    {stats.totalContactInquiries}
                  </p>
          </div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(59, 130, 246, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#3b82f6" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
            </svg>
        </div>
      </div>
              <div style={{ marginTop: "12px" }}>
                <span
            style={{
                    background:
                      stats.newContactInquiries > 0 ? "#ef4444" : "#10b981",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {stats.newContactInquiries} new
                </span>
              </div>
        </div>
        
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                border: "2px solid rgba(139, 92, 246, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
        <div>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Published Blogs
                  </p>
                  <p
                    style={{
                      color: "#1e2247",
                      fontSize: "32px",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    {stats.totalPosts}
                  </p>
                </div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(139, 92, 246, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#8b5cf6" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                    />
                  </svg>
                </div>
              </div>
            </div>
        </div>
        
          {/* Quick Actions */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginBottom: "20px" }}
          >
            <Link
              href="/dashboard/quotations"
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 4px 15px rgba(30, 34, 71, 0.08)",
                border: "2px solid rgba(30, 34, 71, 0.1)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(253, 197, 26, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(253, 197, 26, 0.3)",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#fdc51a" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
              </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#1e2247",
                  }}
                >
                  Manage Quotations
                </h3>
              </div>
              <p style={{ color: "#6c757d", marginBottom: "20px", fontSize: "0.9rem" }}>
                Review, approve, and convert quotes to bookings
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)",
                  color: "#1e2247",
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  boxShadow: "0 4px 12px rgba(253, 197, 26, 0.3)",
                }}
              >
                Open Quotations
                <svg
                  style={{ width: "16px", height: "16px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/dashboard/bookings"
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 4px 15px rgba(30, 34, 71, 0.08)",
                border: "2px solid rgba(30, 34, 71, 0.1)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(16, 185, 129, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#10b981" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#1e2247",
                  }}
                >
                  View Bookings
                </h3>
              </div>
              <p style={{ color: "#6c757d", marginBottom: "20px", fontSize: "0.9rem" }}>
                Manage active and upcoming security bookings
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background: "#10b981",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                }}
              >
                View Bookings
                <svg
                  style={{ width: "16px", height: "16px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/dashboard/blogs/new"
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 4px 15px rgba(30, 34, 71, 0.08)",
                border: "2px solid rgba(30, 34, 71, 0.1)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(139, 92, 246, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <svg
                    style={{ width: "24px", height: "24px", color: "#8b5cf6" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#1e2247",
                  }}
                >
                  Create Blog Post
                </h3>
              </div>
              <p style={{ color: "#6c757d", marginBottom: "20px", fontSize: "0.9rem" }}>
                Write and publish new content for your website
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background: "#8b5cf6",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                }}
              >
                Create Post
                <svg
                  style={{ width: "16px", height: "16px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Recent Activity */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(30, 34, 71, 0.08)",
              border: "2px solid rgba(30, 34, 71, 0.1)",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "2px solid rgba(253, 197, 26, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1e2247" }}>
                Recent Activity
              </h2>
            </div>
            
            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {recentActivity.recentQuotations.slice(0, 3).map((q, idx) => (
                  <div
                    key={q.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background:
                          q.status === "new"
                            ? "rgba(239, 68, 68, 0.15)"
                            : q.isApproved
                            ? "rgba(16, 185, 129, 0.15)"
                            : "rgba(253, 197, 26, 0.15)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                flexShrink: 0,
                        border: `2px solid ${
                          q.status === "new"
                            ? "rgba(239, 68, 68, 0.3)"
                            : q.isApproved
                            ? "rgba(16, 185, 129, 0.3)"
                            : "rgba(253, 197, 26, 0.3)"
                        }`,
                      }}
                    >
                      <svg
                        style={{
                          width: "18px",
                          height: "18px",
                          color:
                            q.status === "new"
                              ? "#ef4444"
                              : q.isApproved
                              ? "#10b981"
                              : "#fdc51a",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.9rem", color: "#1e2247" }}>
                        <span style={{ fontWeight: "600" }}>{q.name}</span> requested a
                        quote for {q.service}
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#6c757d", marginTop: "4px" }}>
                        {new Date(q.createdAt).toLocaleDateString("en-AU", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <span
                      style={{
                        background:
                          q.status === "new"
                            ? "#ef4444"
                            : q.isApproved
                            ? "#10b981"
                            : "#fdc51a",
                        color: q.status === "new" || q.isApproved ? "white" : "#1e2247",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    >
                      {q.isApproved ? "Approved" : q.status}
                    </span>
                  </div>
                ))}

                {recentActivity.recentQuotations.length === 0 && (
                  <p style={{ color: "#6b7280", textAlign: "center", padding: "20px" }}>
                    No recent activity
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Inquiries Sidebar */}
      <PendingInquiriesSidebar pendingInquiries={pendingInquiries} />
    </div>
  );
}
