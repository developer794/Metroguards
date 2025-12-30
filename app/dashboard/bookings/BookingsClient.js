"use client";
import { useState, useMemo } from "react";

export default function BookingsClient({ initialBookings, initialStats }) {
  const [bookings, setBookings] = useState(initialBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Filter bookings
  const filteredBookings = useMemo(() => {
    let filtered = bookings;

    if (searchTerm) {
      filtered = filtered.filter(
        (b) =>
          b.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.clientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (b.companyName && b.companyName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((b) => b.status === filterStatus);
    }

    return filtered;
  }, [bookings, searchTerm, filterStatus]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return "$0.00";
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return { bg: "#10b981", text: "#ffffff" };
      case "in_progress":
        return { bg: "#3b82f6", text: "#ffffff" };
      case "completed":
        return { bg: "#6b7280", text: "#ffffff" };
      case "cancelled":
        return { bg: "#ef4444", text: "#ffffff" };
      default:
        return { bg: "#9ca3af", text: "#ffffff" };
    }
  };

  const updateBookingStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
        );
        if (selectedBooking && selectedBooking.id === id) {
          setSelectedBooking({ ...selectedBooking, status: newStatus });
        }
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating booking status:", error);
      alert("Error updating status");
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header with Stats */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%)",
          borderRadius: "20px",
          padding: "32px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(30, 34, 71, 0.3)",
          border: "2px solid rgba(253, 197, 26, 0.2)",
          marginBottom: "20px",
          marginRight: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            background: "rgba(253, 197, 26, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div
              style={{
                background: "#fdc51a",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(253, 197, 26, 0.3)",
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "6px", margin: 0 }}>
                Active Bookings
              </h1>
              <p style={{ color: "rgba(253, 197, 26, 0.9)", fontSize: "0.95rem", fontWeight: "500", margin: 0 }}>
                Manage guard schedules and track booking status
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px" }}>
            <div
              style={{
                background: "rgba(253, 197, 26, 0.1)",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(253, 197, 26, 0.2)",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "4px" }}>Total</div>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#fdc51a" }}>{initialStats.total}</div>
            </div>
            <div
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "4px" }}>
                Confirmed
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#10b981" }}>{initialStats.confirmed}</div>
            </div>
            <div
              style={{
                background: "rgba(59, 130, 246, 0.1)",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "4px" }}>
                In Progress
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#3b82f6" }}>{initialStats.inProgress}</div>
            </div>
            <div
              style={{
                background: "rgba(107, 114, 128, 0.1)",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(107, 114, 128, 0.2)",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "4px" }}>
                Completed
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#9ca3af" }}>{initialStats.completed}</div>
            </div>
            <div
              style={{
                background: "rgba(253, 197, 26, 0.15)",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(253, 197, 26, 0.3)",
              }}
            >
              <div style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "4px" }}>
                Revenue
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#fdc51a" }}>
                {formatCurrency(initialStats.totalRevenue)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
          marginRight: "20px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
          <div style={{ flex: "1 1 300px" }}>
            <input
              type="text"
              placeholder="Search by client, email, company, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e5e7eb",
                borderRadius: "12px",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "12px",
              fontSize: "0.95rem",
              cursor: "pointer",
              background: "#ffffff",
              minWidth: "150px",
            }}
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings List */}
      {filteredBookings.length === 0 ? (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "60px 24px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            border: "1px solid #e5e7eb",
            marginRight: "20px",
          }}
        >
          <svg
            style={{ width: "64px", height: "64px", color: "#d1d5db", margin: "0 auto 16px" }}
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
          <h3 style={{ color: "#1e2247", fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px" }}>
            No Bookings Found
          </h3>
          <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            {searchTerm || filterStatus !== "all"
              ? "Try adjusting your filters"
              : "No bookings yet. Approve a quotation to create a booking."}
          </p>
        </div>
      ) : (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            border: "1px solid #e5e7eb",
            marginRight: "20px",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
                    color: "#fdc51a",
                    textAlign: "left",
                  }}
                >
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem" }}>CLIENT</th>
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem" }}>SERVICE</th>
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem" }}>DATES</th>
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem" }}>GUARDS</th>
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem" }}>TOTAL</th>
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem" }}>STATUS</th>
                  <th style={{ padding: "16px", fontWeight: "600", fontSize: "0.875rem", textAlign: "center" }}>
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking, index) => (
                  <tr
                    key={booking.id}
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                      background: index % 2 === 0 ? "#ffffff" : "#f9fafb",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f4f6")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = index % 2 === 0 ? "#ffffff" : "#f9fafb")
                    }
                  >
                    <td style={{ padding: "16px" }}>
                      <div>
                        <div style={{ fontWeight: "600", color: "#1e2247", fontSize: "0.95rem" }}>
                          {booking.clientName}
                        </div>
                        {booking.companyName && (
                          <div style={{ color: "#6b7280", fontSize: "0.85rem" }}>{booking.companyName}</div>
                        )}
                        <div style={{ color: "#9ca3af", fontSize: "0.8rem" }}>#{booking.id}</div>
                      </div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ fontSize: "0.875rem", color: "#374151" }}>{booking.serviceType}</div>
                      {booking.industry && (
                        <div
                          style={{
                            display: "inline-block",
                            padding: "2px 8px",
                            background: "rgba(253, 197, 26, 0.1)",
                            color: "#1e2247",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            marginTop: "4px",
                          }}
                        >
                          {booking.industry}
                        </div>
                      )}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ fontSize: "0.875rem", color: "#374151" }}>
                        {formatDate(booking.startDate)}
                        {booking.endDate && booking.endDate !== booking.startDate && (
                          <>
                            <br />
                            <span style={{ color: "#9ca3af" }}>to {formatDate(booking.endDate)}</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            background: "#1e2247",
                            color: "#fdc51a",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "700",
                            fontSize: "0.875rem",
                          }}
                        >
                          {booking.numberOfGuards}
                        </span>
                        <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>
                          {booking.hoursPerDay}h/day
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ fontWeight: "700", color: "#1e2247", fontSize: "1rem" }}>
                        {formatCurrency(booking.grandTotal)}
                      </div>
                      <div style={{ color: "#9ca3af", fontSize: "0.75rem" }}>inc. GST</div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div
                        style={{
                          display: "inline-block",
                          padding: "6px 12px",
                          background: getStatusColor(booking.status).bg,
                          color: getStatusColor(booking.status).text,
                          borderRadius: "20px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        {booking.status.replace("_", " ")}
                      </div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          style={{
                            padding: "8px",
                            background: "#1e2247",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          title="View Details"
                        >
                          <svg
                            style={{ width: "18px", height: "18px", color: "white" }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setSelectedBooking(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              border: "3px solid #10b981",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: "28px", height: "28px", color: "#10b981" }}
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
                <div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "white", margin: 0 }}>
                    Booking #{selectedBooking.id}
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.9)", margin: 0 }}>
                    {selectedBooking.serviceType}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "8px",
                }}
              >
                <svg
                  style={{ width: "24px", height: "24px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "32px" }}>
              {/* Cost Summary */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
                  padding: "24px",
                  borderRadius: "16px",
                  marginBottom: "24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  textAlign: "center",
                }}
              >
                <div>
                  <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.85rem", marginBottom: "4px" }}>
                    Subtotal
                  </div>
                  <div style={{ color: "white", fontSize: "1.25rem", fontWeight: "600" }}>
                    {formatCurrency(selectedBooking.estimatedTotalCost)}
                  </div>
                </div>
                <div>
                  <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.85rem", marginBottom: "4px" }}>
                    GST
                  </div>
                  <div style={{ color: "white", fontSize: "1.25rem", fontWeight: "600" }}>
                    {formatCurrency(selectedBooking.gstAmount)}
                  </div>
                </div>
                <div>
                  <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.85rem", marginBottom: "4px" }}>
                    Total
                  </div>
                  <div style={{ color: "#fdc51a", fontSize: "1.5rem", fontWeight: "700" }}>
                    {formatCurrency(selectedBooking.grandTotal)}
                  </div>
                </div>
              </div>

              {/* Client Details */}
              <div style={{ marginBottom: "24px" }}>
                <h4 style={{ margin: "0 0 16px 0", color: "#1e2247" }}>Client Information</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                  <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Name</div>
                    <div style={{ fontWeight: "600", color: "#1e2247" }}>{selectedBooking.clientName}</div>
                  </div>
                  <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Email</div>
                    <div style={{ fontWeight: "600", color: "#1e2247" }}>{selectedBooking.clientEmail}</div>
                  </div>
                  {selectedBooking.clientPhone && (
                    <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                      <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Phone</div>
                      <div style={{ fontWeight: "600", color: "#1e2247" }}>{selectedBooking.clientPhone}</div>
                    </div>
                  )}
                  {selectedBooking.companyName && (
                    <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                      <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Company</div>
                      <div style={{ fontWeight: "600", color: "#1e2247" }}>{selectedBooking.companyName}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Details */}
              <div style={{ marginBottom: "24px" }}>
                <h4 style={{ margin: "0 0 16px 0", color: "#1e2247" }}>Booking Details</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                  <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Start Date</div>
                    <div style={{ fontWeight: "600", color: "#1e2247" }}>{formatDate(selectedBooking.startDate)}</div>
                  </div>
                  <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>End Date</div>
                    <div style={{ fontWeight: "600", color: "#1e2247" }}>
                      {formatDate(selectedBooking.endDate) || "Ongoing"}
                    </div>
                  </div>
                  <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Number of Guards</div>
                    <div style={{ fontWeight: "600", color: "#1e2247" }}>{selectedBooking.numberOfGuards}</div>
                  </div>
                  <div style={{ padding: "12px", background: "#f9fafb", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Hours Per Day</div>
                    <div style={{ fontWeight: "600", color: "#1e2247" }}>{selectedBooking.hoursPerDay} hours</div>
                  </div>
                </div>
              </div>

              {/* Status Update */}
              <div style={{ padding: "20px", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
                <h4 style={{ margin: "0 0 12px 0", color: "#166534" }}>Update Status</h4>
                <select
                  value={selectedBooking.status}
                  onChange={(e) => updateBookingStatus(selectedBooking.id, e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #bbf7d0",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  <option value="confirmed">Confirmed</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {/* Schedules Preview */}
              {selectedBooking.schedules && selectedBooking.schedules.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <h4 style={{ margin: "0 0 16px 0", color: "#1e2247" }}>
                    Upcoming Schedules ({selectedBooking.schedules.length}+)
                  </h4>
                  <div style={{ display: "grid", gap: "8px" }}>
                    {selectedBooking.schedules.slice(0, 5).map((schedule) => (
                      <div
                        key={schedule.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "12px",
                          background: "#f8fafc",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: "600", color: "#1e2247" }}>
                            {formatDate(schedule.shiftDate)}
                          </div>
                          <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                            {schedule.rateType.replace("_", " ")} • {schedule.regularHours}h
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontWeight: "600", color: "#10b981" }}>
                            {formatCurrency(schedule.totalCost)}
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              padding: "2px 8px",
                              background: schedule.status === "scheduled" ? "#dbeafe" : "#d1fae5",
                              color: schedule.status === "scheduled" ? "#1e40af" : "#166534",
                              borderRadius: "4px",
                            }}
                          >
                            {schedule.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "20px 32px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setSelectedBooking(null)}
                style={{
                  padding: "12px 24px",
                  background: "#e5e7eb",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#374151",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

