"use client";
import { useState, useMemo } from "react";

export default function QuotationsClient({ initialQuotations, initialStats }) {
  const [quotations, setQuotations] = useState(initialQuotations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [emailModal, setEmailModal] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

  // Filter and sort quotations
  const filteredQuotations = useMemo(() => {
    let filtered = quotations;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(q =>
        q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter(q => q.status === filterStatus);
    }

    // Sort
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [quotations, searchTerm, filterStatus, sortBy]);

  // Update status
  const handleUpdateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/quotations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        const updated = await res.json();
        setQuotations(prev => prev.map(q => q.id === id ? { ...q, status: newStatus, updatedAt: updated.updatedAt } : q));
        
        // Update selected quotation if it's currently open
        if (selectedQuotation && selectedQuotation.id === id) {
          setSelectedQuotation({ ...selectedQuotation, status: newStatus });
        }
      } else {
        alert('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete quotation
  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/quotations/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setQuotations(prev => prev.filter(q => q.id !== id));
        setConfirmDelete(null);
        if (selectedQuotation && selectedQuotation.id === id) {
          setSelectedQuotation(null);
        }
      } else {
        alert('Failed to delete quotation');
      }
    } catch (error) {
      console.error('Error deleting quotation:', error);
      alert('Error deleting quotation');
    } finally {
      setDeletingId(null);
    }
  };

  // Open email modal
  const handleOpenEmailModal = (quotation) => {
    setEmailModal(quotation);
    setEmailSubject(`Re: Your Quotation Request - ${quotation.service}`);
    setEmailMessage(`Dear ${quotation.name},\n\nThank you for your quotation request for ${quotation.service}.\n\n`);
  };

  // Send email
  const handleSendEmail = async () => {
    if (!emailSubject.trim() || !emailMessage.trim()) {
      alert('Please fill in both subject and message');
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
          message: emailMessage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert('Email sent successfully!');
        setEmailModal(null);
        setEmailSubject('');
        setEmailMessage('');
      } else {
        alert(`Failed to send email: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    } finally {
      setSendingEmail(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return { bg: '#10b981', text: '#ffffff' };
      case 'contacted': return { bg: '#3b82f6', text: '#ffffff' };
      case 'resolved': return { bg: '#6b7280', text: '#ffffff' };
      default: return { bg: '#9ca3af', text: '#ffffff' };
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header with Stats */}
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
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(253, 197, 26, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: 'rgba(253, 197, 26, 0.05)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{
              background: '#fdc51a',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(253, 197, 26, 0.3)'
            }}>
              <svg style={{ width: '28px', height: '28px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px', margin: 0 }}>
                Quotation Requests
              </h1>
              <p style={{ color: 'rgba(253, 197, 26, 0.9)', fontSize: '0.95rem', fontWeight: '500', margin: 0 }}>
                Manage and track all quotation requests
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{
              background: 'rgba(253, 197, 26, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(253, 197, 26, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>Total Quotations</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>{initialStats.total}</div>
            </div>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>New Requests</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#10b981' }}>{initialStats.new}</div>
            </div>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>Contacted</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3b82f6' }}>{initialStats.contacted}</div>
            </div>
            <div style={{
              background: 'rgba(107, 114, 128, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(107, 114, 128, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>Resolved</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#6b7280' }}>{initialStats.resolved}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb',
        marginRight: '20px'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          {/* Search */}
          <div style={{ flex: '1 1 300px' }}>
            <input
              type="text"
              placeholder="Search by name, email, industry, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1e2247'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          {/* Filter by Status */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              fontSize: '0.95rem',
              outline: 'none',
              cursor: 'pointer',
              background: '#ffffff',
              minWidth: '150px'
            }}
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              fontSize: '0.95rem',
              outline: 'none',
              cursor: 'pointer',
              background: '#ffffff',
              minWidth: '150px'
            }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Quotations Table/Cards - Responsive */}
      {filteredQuotations.length === 0 ? (
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '60px 24px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          marginRight: '20px'
        }}>
          <svg style={{ width: '64px', height: '64px', color: '#d1d5db', margin: '0 auto 16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 style={{ color: '#1e2247', fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>
            No Quotations Found
          </h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            {searchTerm || filterStatus !== 'all' ? 'Try adjusting your filters' : 'No quotation requests yet'}
          </p>
        </div>
      ) : (
        <>
          {/* Mobile Card View */}
          <div className="dashboard-mobile-cards md:hidden" style={{ marginRight: '20px', marginBottom: '20px' }}>
            {filteredQuotations.map((quotation) => (
              <div
                key={quotation.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '14px',
                  marginBottom: '12px',
                  boxShadow: '0 2px 8px rgba(30, 34, 71, 0.08)',
                  border: '1px solid rgba(30, 34, 71, 0.12)'
                }}
              >
                {/* Card Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#1e2247'
                    }}>
                      Id : {quotation.id}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => setSelectedQuotation(quotation)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        background: '#1e2247',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(30, 34, 71, 0.2)'
                      }}
                      title="View Details"
                    >
                      <svg style={{ width: '14px', height: '14px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setConfirmDelete(quotation)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        background: '#ef4444',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(239, 68, 68, 0.2)'
                      }}
                      title="Delete"
                    >
                      <svg style={{ width: '14px', height: '14px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Card Body - Compact Table Layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {/* Customer Name */}
                  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'start' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>
                      Buyer Name
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e2247' }}>
                      {quotation.name}
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'start' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>
                      Email
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#374151', wordBreak: 'break-word' }}>
                      {quotation.email}
                    </div>
                  </div>

                  {/* Phone */}
                  {quotation.phone && (
                    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'start' }}>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>
                        Phone
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#374151' }}>
                        {quotation.phone}
                      </div>
                    </div>
                  )}

                  {/* Industry */}
                  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>
                      Industry
                    </div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      background: 'rgba(253, 197, 26, 0.1)',
                      color: '#1e2247',
                      borderRadius: '5px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {quotation.industry}
                    </div>
                  </div>

                  {/* Service */}
                  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'start' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>
                      Service
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#374151' }}>
                      {quotation.service}
                    </div>
                  </div>

                  {/* Status */}
                  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>
                      Status
                    </div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      background: getStatusColor(quotation.status).bg,
                      color: getStatusColor(quotation.status).text,
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px'
                    }}>
                      {quotation.status}
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={() => handleOpenEmailModal(quotation)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '8px',
                      background: '#fdc51a',
                      border: 'none',
                      color: '#1e2247',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      marginTop: '4px',
                      boxShadow: '0 2px 6px rgba(253, 197, 26, 0.3)'
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="dashboard-desktop-table hidden md:block" style={{
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb',
            marginRight: '20px',
            overflow: 'hidden'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                  color: '#fdc51a',
                  textAlign: 'left'
                }}>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px' }}>CUSTOMER</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px' }}>CONTACT INFO</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px' }}>INDUSTRY</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px' }}>SERVICE</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px' }}>STATUS</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px' }}>DATE</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.5px', textAlign: 'center' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuotations.map((quotation, index) => (
                  <tr
                    key={quotation.id}
                    style={{
                      borderBottom: '1px solid #e5e7eb',
                      background: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#ffffff' : '#f9fafb'}
                  >
                    {/* Customer */}
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fdc51a',
                          fontWeight: '700',
                          fontSize: '0.95rem'
                        }}>
                          {quotation.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div style={{ fontWeight: '600', color: '#1e2247', fontSize: '0.95rem' }}>{quotation.name}</div>
                          <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>ID: #{quotation.id}</div>
                        </div>
                      </div>
                    </td>

                    {/* Contact Info */}
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '0.875rem', color: '#374151' }}>
                        <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg style={{ width: '14px', height: '14px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {quotation.email}
                        </div>
                        {quotation.phone && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <svg style={{ width: '14px', height: '14px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {quotation.phone}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Industry */}
                    <td style={{ padding: '16px' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        background: 'rgba(253, 197, 26, 0.1)',
                        color: '#1e2247',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {quotation.industry}
                      </div>
                    </td>

                    {/* Service */}
                    <td style={{ padding: '16px' }}>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#374151',
                        maxWidth: '200px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {quotation.service}
                      </div>
                    </td>

                    {/* Status */}
                    <td style={{ padding: '16px' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        background: getStatusColor(quotation.status).bg,
                        color: getStatusColor(quotation.status).text,
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {quotation.status}
                      </div>
                    </td>

                    {/* Date */}
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {formatDate(quotation.createdAt)}
                      </div>
                    </td>

                    {/* Actions */}
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Send Email Button */}
                        <button
                          onClick={() => handleOpenEmailModal(quotation)}
                          style={{
                            padding: '8px',
                            background: '#fdc51a',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          title="Send Email"
                        >
                          <svg style={{ width: '18px', height: '18px', color: '#1e2247', transform: 'rotate(35deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>

                        {/* View Button */}
                        <button
                          onClick={() => setSelectedQuotation(quotation)}
                          style={{
                            padding: '8px',
                            background: '#1e2247',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          title="View Details"
                        >
                          <svg style={{ width: '18px', height: '18px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => setConfirmDelete(quotation)}
                          style={{
                            padding: '8px',
                            background: '#ef4444',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          title="Delete"
                        >
                          <svg style={{ width: '18px', height: '18px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
        </>
      )}

      {/* View Details Modal */}
      {selectedQuotation && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedQuotation(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '3px solid #fdc51a'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
              padding: '24px',
              borderBottom: '3px solid #fdc51a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#fdc51a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1e2247',
                  fontWeight: '700',
                  fontSize: '1.25rem'
                }}>
                  {selectedQuotation.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fdc51a', margin: 0 }}>
                    Quotation Details
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(253, 197, 26, 0.8)', margin: 0 }}>
                    ID: #{selectedQuotation.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedQuotation(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fdc51a',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px' }}>
              {/* Customer Information */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#1e2247',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Customer Information
                </h3>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{
                    padding: '16px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Full Name</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.name}</div>
                  </div>
                  <div style={{
                    padding: '16px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Email Address</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.email}</div>
                  </div>
                  {selectedQuotation.phone && (
                    <div style={{
                      padding: '16px',
                      background: '#f9fafb',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Phone Number</div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.phone}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quotation Details */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#1e2247',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Quotation Details
                </h3>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{
                    padding: '16px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Industry</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.industry}</div>
                  </div>
                  <div style={{
                    padding: '16px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Service Required</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.service}</div>
                  </div>
                  {selectedQuotation.location && (
                    <div style={{
                      padding: '16px',
                      background: '#f9fafb',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Service Location</div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.location}</div>
                    </div>
                  )}
                  {selectedQuotation.message && (
                    <div style={{
                      padding: '16px',
                      background: '#f9fafb',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>Additional Message</div>
                      <div style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                        {selectedQuotation.message}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status and Actions */}
              <div style={{
                padding: '20px',
                background: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '8px' }}>Current Status</div>
                  <select
                    value={selectedQuotation.status}
                    onChange={(e) => handleUpdateStatus(selectedQuotation.id, e.target.value)}
                    disabled={updatingId === selectedQuotation.id}
                    style={{
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#1e2247',
                      background: '#ffffff',
                      cursor: 'pointer',
                      width: '100%',
                      outline: 'none'
                    }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <div>Submitted: {formatDate(selectedQuotation.createdAt)}</div>
                  <div>Last Updated: {formatDate(selectedQuotation.updatedAt)}</div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '20px 32px',
              borderTop: '2px solid #e5e7eb',
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                onClick={() => setSelectedQuotation(null)}
                style={{
                  padding: '12px 24px',
                  background: '#e5e7eb',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#d1d5db'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#e5e7eb'}
              >
                Close
              </button>
            </div>
          </div>
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
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setConfirmDelete(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '3px solid #ef4444'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
              padding: '24px',
              borderBottom: '3px solid #ef4444',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fdc51a', margin: 0 }}>
                Confirm Deletion
              </h2>
            </div>

            <div style={{ padding: '32px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '16px', lineHeight: '1.6' }}>
                Are you sure you want to delete the quotation request from <strong style={{ color: '#1e2247' }}>{confirmDelete.name}</strong>?
              </p>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', marginBottom: '24px' }}>
                This action cannot be undone.
              </p>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={() => setConfirmDelete(null)}
                  disabled={deletingId === confirmDelete.id}
                  style={{
                    padding: '12px 32px',
                    background: '#e5e7eb',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#374151',
                    cursor: deletingId === confirmDelete.id ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: deletingId === confirmDelete.id ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = '#d1d5db')}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#e5e7eb'}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(confirmDelete.id)}
                  disabled={deletingId === confirmDelete.id}
                  style={{
                    padding: '12px 32px',
                    background: '#ef4444',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'white',
                    cursor: deletingId === confirmDelete.id ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: deletingId === confirmDelete.id ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = '#dc2626')}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
                >
                  {deletingId === confirmDelete.id ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite'
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
              </div>
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
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => !sendingEmail && setEmailModal(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '3px solid #fdc51a'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
              padding: '24px',
              borderBottom: '3px solid #fdc51a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#fdc51a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '24px', height: '24px', color: '#1e2247', transform: 'rotate(35deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fdc51a', margin: 0 }}>
                    Send Email
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(253, 197, 26, 0.8)', margin: 0 }}>
                    To: {emailModal.name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => !sendingEmail && setEmailModal(null)}
                disabled={sendingEmail}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fdc51a',
                  cursor: sendingEmail ? 'not-allowed' : 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  transition: 'background 0.2s',
                  opacity: sendingEmail ? 0.5 : 1
                }}
                onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)')}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1e2247',
                  marginBottom: '8px'
                }}>
                  Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  disabled={sendingEmail}
                  placeholder="Enter email subject"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    background: sendingEmail ? '#f9fafb' : '#ffffff',
                    cursor: sendingEmail ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => !sendingEmail && (e.target.style.borderColor = '#1e2247')}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1e2247',
                  marginBottom: '8px'
                }}>
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  disabled={sendingEmail}
                  placeholder="Type your message here..."
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    lineHeight: '1.6',
                    background: sendingEmail ? '#f9fafb' : '#ffffff',
                    cursor: sendingEmail ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => !sendingEmail && (e.target.style.borderColor = '#1e2247')}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => setEmailModal(null)}
                  disabled={sendingEmail}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#e5e7eb',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#374151',
                    cursor: sendingEmail ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: sendingEmail ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = '#d1d5db')}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#e5e7eb'}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendEmail}
                  disabled={sendingEmail}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#fdc51a',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#1e2247',
                    cursor: sendingEmail ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: sendingEmail ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = '#e5b116')}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#fdc51a'}
                >
                  {sendingEmail ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid #1e2247',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite'
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

      {/* Keyframes for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

