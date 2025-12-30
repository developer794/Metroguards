"use client";

import { useState } from "react";
import Link from "next/link";

export default function PendingInquiriesSidebar({ pendingInquiries }) {
  const [activeTab, setActiveTab] = useState("quotations");
  const [copiedId, setCopiedId] = useState(null);

  const { quotations = [], contactInquiries = [] } = pendingInquiries || {};

  // Format time ago
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  // Copy to clipboard for quick auto-fill
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalPending = quotations.length + contactInquiries.length;

  if (totalPending === 0) {
    return null; // Hide sidebar if no pending items
  }

  return (
    <div
      className="hidden lg:block"
      style={{
        width: "380px",
        flexShrink: 0,
        position: "sticky",
        top: "20px",
        height: "fit-content",
        maxHeight: "calc(100vh - 40px)",
        overflow: "auto",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
          border: "2px solid rgba(239, 68, 68, 0.2)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            padding: "20px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  style={{ width: "22px", height: "22px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <h3 style={{ fontWeight: "700", fontSize: "18px", margin: 0 }}>
                  Pending Inquiries
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.9,
                    margin: 0,
                  }}
                >
                  {totalPending} awaiting response
                </p>
              </div>
            </div>
            <span
              style={{
                background: "white",
                color: "#ef4444",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              {totalPending}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <button
            onClick={() => setActiveTab("quotations")}
            style={{
              flex: 1,
              padding: "14px",
              background: activeTab === "quotations" ? "#fef3c7" : "white",
              border: "none",
              borderBottom:
                activeTab === "quotations" ? "3px solid #fdc51a" : "none",
              cursor: "pointer",
              fontWeight: "600",
              color: activeTab === "quotations" ? "#1e2247" : "#6b7280",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.2s",
            }}
          >
            <svg
              style={{ width: "18px", height: "18px" }}
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
            Quotes ({quotations.length})
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            style={{
              flex: 1,
              padding: "14px",
              background: activeTab === "contacts" ? "#dbeafe" : "white",
              border: "none",
              borderBottom:
                activeTab === "contacts" ? "3px solid #3b82f6" : "none",
              cursor: "pointer",
              fontWeight: "600",
              color: activeTab === "contacts" ? "#1e2247" : "#6b7280",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.2s",
            }}
          >
            <svg
              style={{ width: "18px", height: "18px" }}
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
            Contacts ({contactInquiries.length})
          </button>
        </div>

        {/* Content */}
        <div style={{ maxHeight: "500px", overflow: "auto" }}>
          {activeTab === "quotations" && (
            <>
              {quotations.length === 0 ? (
                <div
                  style={{
                    padding: "40px 20px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  <svg
                    style={{
                      width: "48px",
                      height: "48px",
                      margin: "0 auto 15px",
                      color: "#d1d5db",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p style={{ fontWeight: "600" }}>All caught up!</p>
                  <p style={{ fontSize: "14px" }}>No pending quotations</p>
                </div>
              ) : (
                quotations.map((q) => (
                  <div
                    key={q.id}
                    style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid #f3f4f6",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              background:
                                "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fdc51a",
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {q.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "600",
                                color: "#1e2247",
                                margin: 0,
                                fontSize: "15px",
                              }}
                            >
                              {q.name}
                            </p>
                            <p
                              style={{
                                color: "#6b7280",
                                fontSize: "12px",
                                margin: 0,
                              }}
                            >
                              {formatTimeAgo(q.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <span
                        style={{
                          background: "#fef3c7",
                          color: "#92400e",
                          padding: "4px 10px",
                          borderRadius: "12px",
                          fontSize: "11px",
                          fontWeight: "600",
                        }}
                      >
                        {q.industry}
                      </span>
                    </div>

                    <p
                      style={{
                        color: "#374151",
                        fontSize: "13px",
                        margin: "0 0 10px 0",
                      }}
                    >
                      {q.service}
                    </p>

                    {/* Quick Info */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "12px",
                      }}
                    >
                      <button
                        onClick={() => copyToClipboard(q.email, `email-${q.id}`)}
                        style={{
                          background: "#f3f4f6",
                          border: "none",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          color: "#4b5563",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                        title="Click to copy email"
                      >
                        {copiedId === `email-${q.id}` ? "✓ Copied" : q.email}
                      </button>
                      {q.phone && (
                        <button
                          onClick={() => copyToClipboard(q.phone, `phone-${q.id}`)}
                          style={{
                            background: "#f3f4f6",
                            border: "none",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#4b5563",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                          title="Click to copy phone"
                        >
                          {copiedId === `phone-${q.id}` ? "✓ Copied" : q.phone}
                        </button>
                      )}
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/dashboard/quotations?highlight=${q.id}`}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        background:
                          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "13px",
                        boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      Process Quote →
                    </Link>
                  </div>
                ))
              )}
            </>
          )}

          {activeTab === "contacts" && (
            <>
              {contactInquiries.length === 0 ? (
                <div
                  style={{
                    padding: "40px 20px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  <svg
                    style={{
                      width: "48px",
                      height: "48px",
                      margin: "0 auto 15px",
                      color: "#d1d5db",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p style={{ fontWeight: "600" }}>All caught up!</p>
                  <p style={{ fontSize: "14px" }}>No pending contact inquiries</p>
                </div>
              ) : (
                contactInquiries.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              background:
                                "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {c.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "600",
                                color: "#1e2247",
                                margin: 0,
                                fontSize: "15px",
                              }}
                            >
                              {c.name}
                            </p>
                            <p
                              style={{
                                color: "#6b7280",
                                fontSize: "12px",
                                margin: 0,
                              }}
                            >
                              {formatTimeAgo(c.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <span
                        style={{
                          background: "#dbeafe",
                          color: "#1e40af",
                          padding: "4px 10px",
                          borderRadius: "12px",
                          fontSize: "11px",
                          fontWeight: "600",
                        }}
                      >
                        {c.serviceType}
                      </span>
                    </div>

                    <p
                      style={{
                        color: "#374151",
                        fontSize: "13px",
                        margin: "0 0 10px 0",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {c.message}
                    </p>

                    {/* Quick Info */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "12px",
                      }}
                    >
                      <button
                        onClick={() => copyToClipboard(c.email, `cemail-${c.id}`)}
                        style={{
                          background: "#f3f4f6",
                          border: "none",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          color: "#4b5563",
                          cursor: "pointer",
                        }}
                        title="Click to copy email"
                      >
                        {copiedId === `cemail-${c.id}` ? "✓ Copied" : c.email}
                      </button>
                      {c.phone && (
                        <button
                          onClick={() => copyToClipboard(c.phone, `cphone-${c.id}`)}
                          style={{
                            background: "#f3f4f6",
                            border: "none",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            color: "#4b5563",
                            cursor: "pointer",
                          }}
                          title="Click to copy phone"
                        >
                          {copiedId === `cphone-${c.id}` ? "✓ Copied" : c.phone}
                        </button>
                      )}
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/dashboard/bookings?tab=contacts&highlight=${c.id}`}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "13px",
                        boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      View & Respond →
                    </Link>
                  </div>
                ))
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "16px 20px",
            background: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
            textAlign: "center",
          }}
        >
          <Link
            href="/dashboard/quotations"
            style={{
              color: "#1e2247",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            View All Quotations
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
          </Link>
        </div>
      </div>
    </div>
  );
}


