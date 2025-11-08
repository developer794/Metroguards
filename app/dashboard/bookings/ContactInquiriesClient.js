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
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [emailModal, setEmailModal] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

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
    setDeletingId(id);
    try {
      const res = await fetch(`/api/contact-inquiries/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) throw new Error("Failed to delete inquiry");

      // Update local state
      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
      setSelectedInquiry(null);
      setConfirmDelete(null);
      
      router.refresh();
    } catch (error) {
      alert(error.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleOpenEmailModal = (inquiry) => {
    setEmailModal(inquiry);
    setEmailSubject('Regarding your inquiry');
    setEmailMessage('');
  };

  const handleSendEmail = async () => {
    if (!emailMessage.trim()) {
      alert('Please enter a message');
      return;
    }

    setSendingEmail(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: emailModal.email,
          toName: emailModal.name,
          subject: emailSubject,
          message: emailMessage
        })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      console.log('Email sent successfully:', data);
      alert('Email sent successfully!');
      setEmailModal(null);
      setEmailSubject('');
      setEmailMessage('');
    } catch (error) {
      console.error('Email send error:', error);
      alert(error.message || 'Failed to send email');
    } finally {
      setSendingEmail(false);
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
        alignItems: 'center',
        marginRight: '20px',
        marginBottom: '20px'
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
          gap: '12px',
         
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

      {/* Inquiries Table */}
      {filteredInquiries.length === 0 ? (
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '64px 32px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
          border: '2px solid rgba(30, 34, 71, 0.1)',
           marginRight: '20px',
          marginBottom: '20px'
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
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
          border: '2px solid rgba(30, 34, 71, 0.08)',
          marginRight: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, #1e2247 0%, #252958 100%)',
                  color: 'white'
                }}>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>CUSTOMER</th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>CONTACT INFO</th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>LOCATION</th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>STATUS</th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>DATE</th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inquiry, index) => {
                  const isUpdating = updatingId === inquiry.id;
                  const truncatedMessage = inquiry.message.length > 50 
                    ? inquiry.message.substring(0, 50) + '...' 
                    : inquiry.message;
                  
                  return (
                    <tr
                      key={inquiry.id}
                      style={{
                        background: index % 2 === 0 ? 'white' : '#f8f9fa',
                        borderBottom: '1px solid rgba(30, 34, 71, 0.08)',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(253, 197, 26, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = index % 2 === 0 ? 'white' : '#f8f9fa';
                      }}
                    >
                      {/* Customer */}
                      <td style={{ padding: '20px 24px' }}>
                        <div style={{ fontWeight: '700', color: '#1e2247', marginBottom: '4px', fontSize: '0.95rem' }}>
                          {inquiry.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                          {truncatedMessage}
                        </div>
                      </td>

                      {/* Contact Info */}
                      <td style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                          <svg style={{ width: '14px', height: '14px', color: '#6c757d', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span style={{ fontSize: '0.85rem', color: '#374151' }}>{inquiry.email}</span>
                        </div>
                        {inquiry.phone && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <svg style={{ width: '14px', height: '14px', color: '#6c757d', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span style={{ fontSize: '0.85rem', color: '#374151' }}>{inquiry.phone}</span>
                          </div>
                        )}
                      </td>

                      {/* Location */}
                      <td style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg style={{ width: '14px', height: '14px', color: '#6c757d', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span style={{ fontSize: '0.9rem', color: '#374151' }}>{inquiry.location}</span>
                        </div>
                      </td>

                      {/* Status Dropdown */}
                      <td style={{ padding: '20px 24px' }}>
                        <select
                          value={inquiry.status}
                          onChange={(e) => handleStatusUpdate(inquiry.id, e.target.value)}
                          disabled={isUpdating}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            padding: '8px 32px 8px 12px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            borderRadius: '8px',
                            border: '2px solid',
                            borderColor: inquiry.status === 'new' ? 'rgba(59, 130, 246, 0.3)' : 
                                        inquiry.status === 'contacted' ? 'rgba(253, 197, 26, 0.3)' : 
                                        'rgba(40, 167, 69, 0.3)',
                            background: inquiry.status === 'new' ? 'rgba(59, 130, 246, 0.1)' : 
                                       inquiry.status === 'contacted' ? 'rgba(253, 197, 26, 0.1)' : 
                                       'rgba(40, 167, 69, 0.1)',
                            color: inquiry.status === 'new' ? '#3b82f6' : 
                                  inquiry.status === 'contacted' ? '#1e2247' : 
                                  '#28a745',
                            cursor: isUpdating ? 'not-allowed' : 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23${inquiry.status === 'new' ? '3b82f6' : inquiry.status === 'contacted' ? '1e2247' : '28a745'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 10px center'
                          }}
                        >
                          <option value="new">📋 New</option>
                          <option value="contacted">📞 Contacted</option>
                          <option value="resolved">✅ Completed</option>
                        </select>
                      </td>

                      {/* Date */}
                      <td style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg style={{ width: '14px', height: '14px', color: '#6c757d', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span style={{ fontSize: '0.85rem', color: '#6c757d', whiteSpace: 'nowrap' }}>
                            {formatDate(inquiry.createdAt)}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
                          {/* Send Email Button */}
                          <button
                            onClick={() => handleOpenEmailModal(inquiry)}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 2px 8px rgba(253, 197, 26, 0.3)'
                            }}
                            title="Send Email"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(253, 197, 26, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 8px rgba(253, 197, 26, 0.3)';
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#1e2247',transform: 'rotate(35deg)', }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </button>

                          {/* View Button */}
                          <button
                            onClick={() => setSelectedInquiry(inquiry)}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 2px 8px rgba(30, 34, 71, 0.3)'
                            }}
                            title="View Details"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 34, 71, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 8px rgba(30, 34, 71, 0.3)';
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>

                          {/* Delete Button */}
                          <button
                            onClick={() => setConfirmDelete(inquiry)}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 2px 8px rgba(220, 53, 69, 0.3)'
                            }}
                            title="Delete"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 8px rgba(220, 53, 69, 0.3)';
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
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
            background: 'rgba(0, 0, 0, 0.6)',
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
              borderRadius: '12px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(30, 34, 71, 0.4)',
              border: '1px solid rgba(30, 34, 71, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%)',
              padding: '32px',
              borderRadius: '12px 12px 0 0',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* Icon */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)'
                }}>
                  <svg style={{ width: '36px', height: '36px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                {/* Title */}
                <div>
                  <h2 style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: '700', 
                    color: 'white', 
                    margin: '0 0 6px 0' 
                  }}>
                    Contact Details
                  </h2>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    margin: 0 
                  }}>
                    Received: {formatDate(selectedInquiry.createdAt)}
                  </p>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedInquiry(null)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '32px' }}>
              {/* Customer Information Section */}
              <div style={{
                background: 'linear-gradient(to right, rgba(253, 197, 26, 0.08), rgba(253, 197, 26, 0.02))',
                borderLeft: '4px solid #fdc51a',
                padding: '24px',
                borderRadius: '8px',
                marginBottom: '28px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '12px' 
                }}>
                  <svg style={{ width: '18px', height: '18px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: '#1e2247',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    CUSTOMER INFORMATION
                  </span>
                </div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  color: '#1e2247',
                  margin: 0,
                  lineHeight: '1.2'
                }}>
                  {selectedInquiry.name}
                </h3>
              </div>

              {/* Contact Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginBottom: '24px'
              }}>
                {/* Email */}
                <div style={{
                  background: 'white',
                  border: '2px solid #e8eaf0',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#1e2247',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#6c757d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px'
                  }}>
                    EMAIL ADDRESS
                  </p>
                  <a 
                    href={`mailto:${selectedInquiry.email}`}
                    style={{ 
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#1e2247',
                      textDecoration: 'none',
                      wordBreak: 'break-word'
                    }}
                  >
                    {selectedInquiry.email}
                  </a>
                </div>

                {/* Phone */}
                {selectedInquiry.phone && (
                  <div style={{
                    background: 'white',
                    border: '2px solid #e8eaf0',
                    borderRadius: '12px',
                    padding: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: '#1e2247',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      PHONE NUMBER
                    </p>
                    <a 
                      href={`tel:${selectedInquiry.phone}`}
                      style={{ 
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        color: '#1e2247',
                        textDecoration: 'none'
                      }}
                    >
                      {selectedInquiry.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Location */}
              <div style={{
                background: 'white',
                border: '2px solid #e8eaf0',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#1e2247',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '8px'
                }}>
                  LOCATION
                </p>
                <p style={{ 
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: '#1e2247',
                  margin: 0
                }}>
                  {selectedInquiry.location}
                </p>
              </div>

              {/* Service Type */}
              <div style={{
                background: 'white',
                border: '2px solid #e8eaf0',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#1e2247',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '8px'
                }}>
                  SERVICE TYPE
                </p>
                <p style={{ 
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: '#1e2247',
                  margin: 0
                }}>
                  {selectedInquiry.serviceType}
                </p>
              </div>

              {/* Customer Message */}
              <div style={{
                background: 'white',
                border: '2px solid #e8eaf0',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#1e2247',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px'
                }}>
                  CUSTOMER MESSAGE
                </p>
                <p style={{ 
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: 0,
                  whiteSpace: 'pre-wrap'
                }}>
                  {selectedInquiry.message}
                </p>
              </div>

              {/* Status Update */}
              <div style={{
                background: 'linear-gradient(to right, rgba(30, 34, 71, 0.05), rgba(30, 34, 71, 0.02))',
                border: '2px solid #e8eaf0',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <label style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  UPDATE STATUS
                </label>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusUpdate(selectedInquiry.id, e.target.value)}
                  disabled={updatingId === selectedInquiry.id}
                  style={{
                    width: '100%',
                    padding: '14px 40px 14px 16px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: '2px solid',
                    borderColor: selectedInquiry.status === 'new' ? 'rgba(59, 130, 246, 0.3)' : 
                                selectedInquiry.status === 'contacted' ? 'rgba(253, 197, 26, 0.3)' : 
                                'rgba(40, 167, 69, 0.3)',
                    background: selectedInquiry.status === 'new' ? 'rgba(59, 130, 246, 0.08)' : 
                               selectedInquiry.status === 'contacted' ? 'rgba(253, 197, 26, 0.08)' : 
                               'rgba(40, 167, 69, 0.08)',
                    color: selectedInquiry.status === 'new' ? '#3b82f6' : 
                          selectedInquiry.status === 'contacted' ? '#b8860b' : 
                          '#28a745',
                    cursor: updatingId === selectedInquiry.id ? 'not-allowed' : 'pointer',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23${selectedInquiry.status === 'new' ? '3b82f6' : selectedInquiry.status === 'contacted' ? 'b8860b' : '28a745'}' d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center'
                  }}
                >
                  <option value="new">📋 New</option>
                  <option value="contacted">📞 Contacted</option>
                  <option value="resolved">✅ Completed</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setConfirmDelete(selectedInquiry);
                  }}
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: '2px solid rgba(220, 53, 69, 0.3)',
                    background: 'white',
                    color: '#dc3545',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(220, 53, 69, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.3)';
                  }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Inquiry
                </button>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(30, 34, 71, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 34, 71, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 34, 71, 0.3)';
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => !deletingId && setConfirmDelete(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '450px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(220, 53, 69, 0.3)',
              border: '2px solid rgba(220, 53, 69, 0.2)',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Warning Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.15) 0%, rgba(220, 53, 69, 0.05) 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <svg style={{ width: '40px', height: '40px', color: '#dc3545' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e2247',
              marginBottom: '12px'
            }}>
              Delete Inquiry?
            </h3>

            {/* Message */}
            <p style={{
              fontSize: '0.95rem',
              color: '#6c757d',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              Are you sure you want to delete the inquiry from <strong>{confirmDelete.name}</strong>? This action cannot be undone.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setConfirmDelete(null)}
                disabled={deletingId === confirmDelete.id}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  border: '2px solid rgba(30, 34, 71, 0.2)',
                  background: 'white',
                  color: '#1e2247',
                  cursor: deletingId === confirmDelete.id ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (deletingId !== confirmDelete.id) {
                    e.currentTarget.style.background = 'rgba(30, 34, 71, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                }}
              >
                No, Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete.id)}
                disabled={deletingId === confirmDelete.id}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  border: 'none',
                  background: deletingId === confirmDelete.id 
                    ? 'linear-gradient(135deg, rgba(220, 53, 69, 0.6) 0%, rgba(200, 35, 51, 0.6) 100%)'
                    : 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                  color: 'white',
                  cursor: deletingId === confirmDelete.id ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(220, 53, 69, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (deletingId !== confirmDelete.id) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(220, 53, 69, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.3)';
                }}
              >
                {deletingId === confirmDelete.id ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTopColor: 'white',
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
                    Yes, Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send Email Modal */}
      {emailModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 10001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => !sendingEmail && setEmailModal(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '16px',
              maxWidth: '600px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(30, 34, 71, 0.4)',
              border: '2px solid rgba(30, 34, 71, 0.1)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e2247 0%, #252958 50%, #1e2247 100%)',
              padding: '28px 32px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: '700', 
                  color: 'white', 
                  margin: '0 0 8px 0' 
                }}>
                  Send Email
                </h2>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  margin: 0 
                }}>
                  To: {emailModal.name} ({emailModal.email})
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => !sendingEmail && setEmailModal(null)}
                disabled={sendingEmail}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  cursor: sendingEmail ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!sendingEmail) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Yellow Border */}
            <div style={{ height: '4px', background: 'linear-gradient(to right, #fdc51a, #e7b80f)' }}></div>

            {/* Form Content */}
            <div style={{ padding: '32px' }}>
              {/* Subject Field */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#1e2247',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  disabled={sendingEmail}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    border: '2px solid #e8eaf0',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    background: sendingEmail ? '#f8f9fa' : 'white',
                    cursor: sendingEmail ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!sendingEmail) {
                      e.currentTarget.style.borderColor = '#fdc51a';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e8eaf0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#1e2247',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Message
                </label>
                <textarea
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Write your email here..."
                  disabled={sendingEmail}
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    border: '2px solid #e8eaf0',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    background: sendingEmail ? '#f8f9fa' : 'white',
                    cursor: sendingEmail ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!sendingEmail) {
                      e.currentTarget.style.borderColor = '#fdc51a';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e8eaf0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setEmailModal(null)}
                  disabled={sendingEmail}
                  style={{
                    padding: '12px 32px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: '2px solid rgba(30, 34, 71, 0.2)',
                    background: 'white',
                    color: '#1e2247',
                    cursor: sendingEmail ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: sendingEmail ? 0.6 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!sendingEmail) {
                      e.currentTarget.style.background = 'rgba(30, 34, 71, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendEmail}
                  disabled={sendingEmail}
                  style={{
                    padding: '12px 32px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: 'none',
                    background: sendingEmail 
                      ? 'linear-gradient(135deg, rgba(30, 34, 71, 0.6) 0%, rgba(42, 52, 88, 0.6) 100%)'
                      : 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                    color: 'white',
                    cursor: sendingEmail ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(30, 34, 71, 0.3)',
                    minWidth: '160px'
                  }}
                  onMouseEnter={(e) => {
                    if (!sendingEmail) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 34, 71, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 34, 71, 0.3)';
                  }}
                >
                  {sendingEmail ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg style={{ width: '18px', height: '18px', transform: 'rotate(35deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

