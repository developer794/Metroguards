"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ContactInquiriesClient({ inquiries: initialInquiries, stats: initialStats }) {
  const router = useRouter();
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // Filter and sort inquiries
  const filteredInquiries = useMemo(() => {
    let filtered = [...inquiries];

    // Apply status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter(inquiry => inquiry.status === filterStatus);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(inquiry => {
        return inquiry.name.toLowerCase().includes(searchLower) ||
               inquiry.email.toLowerCase().includes(searchLower) ||
               inquiry.serviceType.toLowerCase().includes(searchLower) ||
               inquiry.location.toLowerCase().includes(searchLower) ||
               inquiry.message.toLowerCase().includes(searchLower);
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return filtered;
  }, [inquiries, searchTerm, filterStatus, sortBy]);

  // Calculate current stats
  const stats = useMemo(() => ({
    total: inquiries.length,
    new: inquiries.filter(i => i.status === "new").length,
    contacted: inquiries.filter(i => i.status === "contacted").length,
    resolved: inquiries.filter(i => i.status === "resolved").length
  }), [inquiries]);

  const handleStatusUpdate = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/contact-inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      if (!res.ok) throw new Error("Failed to update status");

      // Update local state
      setInquiries(prev => prev.map(inquiry =>
        inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
      ));
      
      router.refresh();
    } catch (error) {
      alert(error.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/contact-inquiries/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) throw new Error("Failed to delete inquiry");

      // Update local state
      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
      setSelectedInquiry(null);
      
      router.refresh();
    } catch (error) {
      alert(error.message);
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "new": return { bg: "rgba(253, 197, 26, 0.1)", border: "rgba(253, 197, 26, 0.3)", text: "#1e2247" };
      case "contacted": return { bg: "rgba(59, 130, 246, 0.1)", border: "rgba(59, 130, 246, 0.3)", text: "#3b82f6" };
      case "resolved": return { bg: "rgba(40, 167, 69, 0.1)", border: "rgba(40, 167, 69, 0.3)", text: "#28a745" };
      default: return { bg: "rgba(107, 114, 128, 0.1)", border: "rgba(107, 114, 128, 0.3)", text: "#6b7280" };
    }
  };

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px', margin: 0 }}>
                Contact Inquiries
              </h1>
              <p style={{ color: 'rgba(253, 197, 26, 0.9)', fontSize: '0.95rem', fontWeight: '500', margin: 0 }}>
                Manage and respond to customer inquiries
              </p>
            </div>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '16px' 
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0, marginBottom: '4px' }}>
                Total Inquiries
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>
                {stats.total}
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
                New
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fdc51a', margin: 0 }}>
                {stats.new}
              </p>
            </div>
            <div style={{
              background: 'rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0, marginBottom: '4px' }}>
                Contacted
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#60a5fa', margin: 0 }}>
                {stats.contacted}
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
                Resolved
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4ade80', margin: 0 }}>
                {stats.resolved}
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
        alignItems: 'center'
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
            placeholder="Search inquiries..."
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
          {[
            { value: "all", label: "All", color: "#1e2247" },
            { value: "new", label: "New", color: "#fdc51a" },
            { value: "contacted", label: "Contacted", color: "#3b82f6" },
            { value: "resolved", label: "Resolved", color: "#28a745" }
          ].map(status => (
            <button
              key={status.value}
              onClick={() => setFilterStatus(status.value)}
              style={{
                padding: '10px 20px',
                fontSize: '0.875rem',
                fontWeight: '600',
                borderRadius: '10px',
                border: '2px solid',
                borderColor: filterStatus === status.value ? status.color : 'rgba(30, 34, 71, 0.15)',
                background: filterStatus === status.value ? `${status.color}15` : 'white',
                color: filterStatus === status.value ? status.color : '#6c757d',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {status.label}
            </button>
          ))}
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
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Name A-Z</option>
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
            Showing {filteredInquiries.length} of {stats.total} inquiries
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
            >
              Clear Filters
            </button>
          )}
        </div>
      )}

      {/* Inquiries Grid */}
      {filteredInquiries.length === 0 ? (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e2247', marginBottom: '12px' }}>
            {stats.total === 0 ? 'No inquiries yet' : 'No matching inquiries'}
          </h3>
          <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
            {stats.total === 0 
              ? 'Contact inquiries will appear here when customers submit the contact form'
              : 'Try adjusting your search or filter criteria'
            }
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredInquiries.map(inquiry => {
            const statusColors = getStatusColor(inquiry.status);
            const isUpdating = updatingId === inquiry.id;
            const isDeleting = deletingId === inquiry.id;
            
            return (
              <div
                key={inquiry.id}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
                  border: '2px solid rgba(30, 34, 71, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => setSelectedInquiry(inquiry)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(30, 34, 71, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.08)';
                }}
              >
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  background: statusColors.bg,
                  border: `2px solid ${statusColors.border}`,
                  color: statusColors.text,
                  textTransform: 'capitalize'
                }}>
                  {inquiry.status}
                </div>

                {/* Inquiry ID */}
                <p style={{ fontSize: '0.75rem', color: '#6c757d', margin: '0 0 12px 0', fontWeight: '600' }}>
                  #ID{inquiry.id}
                </p>

                {/* Name */}
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#1e2247',
                  marginBottom: '12px',
                  paddingRight: '80px'
                }}>
                  {inquiry.name}
                </h3>

                {/* Contact Info */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <svg style={{ width: '14px', height: '14px', color: '#6c757d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span style={{ fontSize: '0.875rem', color: '#374151' }}>{inquiry.email}</span>
                  </div>
                  {inquiry.phone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <svg style={{ width: '14px', height: '14px', color: '#6c757d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>{inquiry.phone}</span>
                    </div>
                  )}
                </div>

                {/* Service Type & Location */}
                <div style={{
                  padding: '12px',
                  background: 'rgba(253, 197, 26, 0.05)',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}>
                  <p style={{ fontSize: '0.75rem', color: '#6c757d', margin: '0 0 4px 0', fontWeight: '600' }}>
                    Service Type
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#1e2247', margin: '0 0 8px 0', fontWeight: '600' }}>
                    {inquiry.serviceType}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#6c757d', margin: '0 0 4px 0', fontWeight: '600' }}>
                    Location
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#1e2247', margin: 0, fontWeight: '600' }}>
                    {inquiry.location}
                  </p>
                </div>

                {/* Message Preview */}
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6c757d',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {inquiry.message}
                </p>

                {/* Date */}
                <div style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(30, 34, 71, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <svg style={{ width: '14px', height: '14px', color: '#6c757d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                    {formatDate(inquiry.createdAt)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      {selectedInquiry && (
        <div
          style={{
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
            padding: '20px',
            overflow: 'auto'
          }}
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(30, 34, 71, 0.3)',
              border: '2px solid rgba(30, 34, 71, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e2247', margin: '0 0 8px 0' }}>
                  Inquiry Details
                </h2>
                <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>
                  #{selectedInquiry.id} • {formatDate(selectedInquiry.createdAt)}
                </p>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '2px solid rgba(30, 34, 71, 0.2)',
                  background: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg style={{ width: '16px', height: '16px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                  Name
                </label>
                <p style={{ fontSize: '1rem', color: '#1e2247', fontWeight: '600', margin: 0 }}>
                  {selectedInquiry.name}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                  Email
                </label>
                <a href={`mailto:${selectedInquiry.email}`} style={{ fontSize: '1rem', color: '#3b82f6', textDecoration: 'none' }}>
                  {selectedInquiry.email}
                </a>
              </div>

              {selectedInquiry.phone && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                    Phone
                  </label>
                  <a href={`tel:${selectedInquiry.phone}`} style={{ fontSize: '1rem', color: '#3b82f6', textDecoration: 'none' }}>
                    {selectedInquiry.phone}
                  </a>
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                  Service Type
                </label>
                <p style={{ fontSize: '1rem', color: '#1e2247', margin: 0 }}>
                  {selectedInquiry.serviceType}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                  Location
                </label>
                <p style={{ fontSize: '1rem', color: '#1e2247', margin: 0 }}>
                  {selectedInquiry.location}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                  Message
                </label>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: '#374151', 
                  lineHeight: '1.7', 
                  margin: 0,
                  padding: '16px',
                  background: 'rgba(253, 197, 26, 0.05)',
                  borderRadius: '12px',
                  border: '2px solid rgba(253, 197, 26, 0.2)'
                }}>
                  {selectedInquiry.message}
                </p>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                  Status
                </label>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusUpdate(selectedInquiry.id, e.target.value)}
                  disabled={updatingId === selectedInquiry.id}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    borderRadius: '12px',
                    border: '2px solid rgba(30, 34, 71, 0.15)',
                    background: 'white',
                    color: '#1e2247',
                    cursor: updatingId === selectedInquiry.id ? 'not-allowed' : 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleDelete(selectedInquiry.id)}
                disabled={deletingId === selectedInquiry.id}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: '2px solid rgba(220, 53, 69, 0.3)',
                  background: 'white',
                  color: '#dc3545',
                  cursor: deletingId === selectedInquiry.id ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {deletingId === selectedInquiry.id ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(220, 53, 69, 0.3)',
                      borderTopColor: '#dc3545',
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
              <button
                onClick={() => setSelectedInquiry(null)}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Close
              </button>
            </div>
          </div>

          <style jsx>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

