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

  // New states for Approve & Book workflow
  const [approveModal, setApproveModal] = useState(null);
  const [costPreviewModal, setCostPreviewModal] = useState(null);
  const [costCalculation, setCostCalculation] = useState(null);
  const [calculatingCost, setCalculatingCost] = useState(false);
  const [approvingQuote, setApprovingQuote] = useState(false);
  
  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    startDate: '',
    endDate: '',
    hoursPerDay: 8,
    numberOfGuards: 1,
    workDays: [1, 2, 3, 4, 5], // Monday to Friday
    notes: '',
  });

  // Service rates for display
  const serviceRates = [
    { type: 'Weekday Day (6am-6pm)', rate: 40.70 },
    { type: 'Weekday Night (6pm-6am)', rate: 46.00 },
    { type: 'Saturday', rate: 59.50 },
    { type: 'Sunday', rate: 79.50 },
    { type: 'Public Holiday', rate: 95.00 },
    { type: "New Year's Eve", rate: 110.00 },
  ];

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

  // Calculate cost preview
  const handleCalculateCost = async (quotation) => {
    setCostPreviewModal(quotation);
    setCalculatingCost(true);
    
    try {
      const res = await fetch(`/api/quotations/${quotation.id}/calculate-cost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startDate: bookingForm.startDate || new Date().toISOString().split('T')[0],
          endDate: bookingForm.endDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          hoursPerDay: bookingForm.hoursPerDay,
          guards: bookingForm.numberOfGuards,
          workDays: bookingForm.workDays,
          useQuickEstimate: !bookingForm.startDate || !bookingForm.endDate,
          hoursPerWeek: bookingForm.hoursPerDay * 5,
          weeks: 4,
          shiftType: 'day',
        }),
      });
      
      const data = await res.json();
      if (data.success) {
        setCostCalculation(data);
      } else {
        alert('Failed to calculate cost');
      }
    } catch (error) {
      console.error('Error calculating cost:', error);
      alert('Error calculating cost');
    } finally {
      setCalculatingCost(false);
    }
  };

  // Open approve modal
  const handleOpenApproveModal = (quotation) => {
    setApproveModal(quotation);
    setBookingForm({
      startDate: '',
      endDate: '',
      hoursPerDay: 8,
      numberOfGuards: quotation.guardsRequired || 1,
      workDays: [1, 2, 3, 4, 5],
      notes: '',
    });
    setCostCalculation(null);
  };

  // Approve and create booking
  const handleApproveAndBook = async () => {
    if (!bookingForm.startDate) {
      alert('Please select a start date');
      return;
    }

    setApprovingQuote(true);
    try {
      const res = await fetch(`/api/quotations/${approveModal.id}/approve-and-book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingForm,
          endDate: bookingForm.endDate || bookingForm.startDate,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert(`Booking created successfully!\n\nBooking ID: ${data.booking.id}\nSchedules Created: ${data.schedulesCreated}\nTotal Cost: $${data.booking.grandTotal}`);
        
        // Update the quotation in the list
        setQuotations(prev => prev.map(q => 
          q.id === approveModal.id 
            ? { ...q, status: 'approved', isApproved: true, bookingId: data.booking.id }
            : q
        ));
        
        setApproveModal(null);
        setCostCalculation(null);
      } else {
        alert(`Failed to approve: ${data.error}`);
      }
    } catch (error) {
      console.error('Error approving quotation:', error);
      alert('Error approving quotation');
    } finally {
      setApprovingQuote(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
    }).format(amount);
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return { bg: '#10b981', text: '#ffffff' };
      case 'contacted': return { bg: '#3b82f6', text: '#ffffff' };
      case 'resolved': return { bg: '#6b7280', text: '#ffffff' };
      case 'approved': return { bg: '#8b5cf6', text: '#ffffff' };
      default: return { bg: '#9ca3af', text: '#ffffff' };
    }
  };

  // Toggle work day
  const toggleWorkDay = (day) => {
    setBookingForm(prev => ({
      ...prev,
      workDays: prev.workDays.includes(day)
        ? prev.workDays.filter(d => d !== day)
        : [...prev.workDays, day].sort()
    }));
  };

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
                Manage, approve, and convert quotations to bookings
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            <div style={{
              background: 'rgba(253, 197, 26, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(253, 197, 26, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>Total</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fdc51a' }}>{initialStats.total}</div>
            </div>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>New</div>
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
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>Approved</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#8b5cf6' }}>{quotations.filter(q => q.isApproved).length}</div>
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
            <option value="approved">Approved</option>
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

      {/* Quotations Table */}
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
                <div style={{
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
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem' }}>CUSTOMER</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem' }}>CONTACT</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem' }}>INDUSTRY</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem' }}>SERVICE</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem' }}>STATUS</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem' }}>DATE</th>
                  <th style={{ padding: '16px', fontWeight: '600', fontSize: '0.875rem', textAlign: 'center' }}>ACTIONS</th>
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
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: quotation.isApproved 
                            ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                            : 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
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
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '0.875rem', color: '#374151' }}>
                        <div style={{ marginBottom: '4px' }}>{quotation.email}</div>
                        {quotation.phone && <div style={{ color: '#6b7280' }}>{quotation.phone}</div>}
                      </div>
                    </td>
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
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '0.875rem', color: '#374151', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {quotation.service}
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        background: getStatusColor(quotation.status).bg,
                        color: getStatusColor(quotation.status).text,
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {quotation.status}
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {formatDate(quotation.createdAt)}
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* Approve & Book Button - Only show for non-approved quotes */}
                        {!quotation.isApproved && (
                          <button
                            onClick={() => handleOpenApproveModal(quotation)}
                            style={{
                              padding: '8px 12px',
                              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                              border: 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              color: 'white',
                              fontSize: '0.8rem',
                              fontWeight: '600'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            title="Approve & Create Booking"
                          >
                            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Approve
                          </button>
                        )}

                        {/* Preview Cost Button */}
                        <button
                          onClick={() => handleCalculateCost(quotation)}
                          style={{
                            padding: '8px',
                            background: '#8b5cf6',
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
                          title="Preview Cost"
                        >
                          <svg style={{ width: '18px', height: '18px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>

                        {/* Email Button */}
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
      )}

      {/* Approve & Book Modal */}
      {approveModal && (
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
          onClick={() => !approvingQuote && setApproveModal(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '3px solid #10b981'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              padding: '24px',
              borderBottom: '3px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '28px', height: '28px', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>
                    Approve & Create Booking
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
                    {approveModal.name} - {approveModal.service}
                  </p>
                </div>
              </div>
              <button
                onClick={() => !approvingQuote && setApproveModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px'
                }}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px' }}>
              {/* Client Info */}
              <div style={{
                background: '#f0fdf4',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '24px',
                border: '1px solid #bbf7d0'
              }}>
                <h4 style={{ margin: '0 0 12px 0', color: '#166534' }}>Client Information</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div><strong>Name:</strong> {approveModal.name}</div>
                  <div><strong>Email:</strong> {approveModal.email}</div>
                  <div><strong>Phone:</strong> {approveModal.phone || 'N/A'}</div>
                  <div><strong>Industry:</strong> {approveModal.industry}</div>
                </div>
              </div>

              {/* Booking Details Form */}
              <h4 style={{ margin: '0 0 16px 0', color: '#1e2247' }}>Booking Details</h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    Start Date <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="date"
                    value={bookingForm.startDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, startDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    End Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.endDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, endDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    Hours Per Day
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="24"
                    value={bookingForm.hoursPerDay}
                    onChange={(e) => setBookingForm({ ...bookingForm, hoursPerDay: Number(e.target.value) })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                    Number of Guards
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={bookingForm.numberOfGuards}
                    onChange={(e) => setBookingForm({ ...bookingForm, numberOfGuards: Number(e.target.value) })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              {/* Work Days */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600', color: '#374151' }}>
                  Work Days
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {dayNames.map((day, index) => (
                    <button
                      key={day}
                      onClick={() => toggleWorkDay(index)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '2px solid',
                        borderColor: bookingForm.workDays.includes(index) ? '#10b981' : '#e5e7eb',
                        background: bookingForm.workDays.includes(index) ? '#10b981' : 'white',
                        color: bookingForm.workDays.includes(index) ? 'white' : '#374151',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s'
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                  Notes
                </label>
                <textarea
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Any special instructions or notes..."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Rate Card Preview */}
              <div style={{
                background: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '24px',
                border: '1px solid #e2e8f0'
              }}>
                <h4 style={{ margin: '0 0 16px 0', color: '#1e2247' }}>Metro Guards Rate Card</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {serviceRates.map((rate) => (
                    <div key={rate.type} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      background: 'white',
                      borderRadius: '6px'
                    }}>
                      <span style={{ color: '#64748b', fontSize: '0.875rem' }}>{rate.type}</span>
                      <span style={{ fontWeight: '600', color: '#1e2247' }}>{formatCurrency(rate.rate)}/hr</span>
                    </div>
                  ))}
                </div>
                <p style={{ margin: '16px 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                  * Overtime: First 2 hours at 1.5x, beyond 2 hours at 2x. GST (10%) added to all totals.
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => setApproveModal(null)}
                  disabled={approvingQuote}
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: '#e5e7eb',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    cursor: approvingQuote ? 'not-allowed' : 'pointer',
                    opacity: approvingQuote ? 0.5 : 1
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleApproveAndBook}
                  disabled={approvingQuote || !bookingForm.startDate}
                  style={{
                    flex: 2,
                    padding: '14px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'white',
                    cursor: (approvingQuote || !bookingForm.startDate) ? 'not-allowed' : 'pointer',
                    opacity: (approvingQuote || !bookingForm.startDate) ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {approvingQuote ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite'
                      }}></div>
                      Creating Booking...
                    </>
                  ) : (
                    <>
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Approve & Create Booking
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cost Preview Modal */}
      {costPreviewModal && (
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
          onClick={() => setCostPreviewModal(null)}
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
              border: '3px solid #8b5cf6'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '28px', height: '28px', color: '#8b5cf6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>
                    Cost Preview
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
                    {costPreviewModal.name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCostPreviewModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px'
                }}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px' }}>
              {calculatingCost ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    border: '4px solid #e5e7eb',
                    borderTopColor: '#8b5cf6',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                    margin: '0 auto 16px'
                  }}></div>
                  <p style={{ color: '#6b7280' }}>Calculating cost...</p>
                </div>
              ) : costCalculation ? (
                <>
                  {/* Quick Estimate Notice */}
                  {costCalculation.calculation.note && (
                    <div style={{
                      background: '#fef3c7',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      border: '1px solid #fcd34d'
                    }}>
                      <p style={{ margin: 0, color: '#92400e', fontSize: '0.875rem' }}>
                        ⚡ {costCalculation.calculation.note}
                      </p>
                    </div>
                  )}

                  {/* Cost Summary */}
                  <div style={{
                    background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
                    padding: '24px',
                    borderRadius: '16px',
                    marginBottom: '24px',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', marginBottom: '8px' }}>
                      ESTIMATED TOTAL (inc. GST)
                    </div>
                    <div style={{ color: '#fdc51a', fontSize: '2.5rem', fontWeight: '700' }}>
                      {formatCurrency(costCalculation.calculation.total)}
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', marginTop: '8px' }}>
                      {costCalculation.calculation.totalHours || 'Estimated'} total hours
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ margin: '0 0 16px 0', color: '#1e2247' }}>Cost Breakdown</h4>
                    <div style={{
                      background: '#f8fafc',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
                        <span style={{ color: '#64748b' }}>Subtotal (ex. GST)</span>
                        <span style={{ fontWeight: '600', color: '#1e2247' }}>{formatCurrency(costCalculation.calculation.subtotal)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
                        <span style={{ color: '#64748b' }}>GST (10%)</span>
                        <span style={{ fontWeight: '600', color: '#1e2247' }}>{formatCurrency(costCalculation.calculation.gst)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#10b981', color: 'white' }}>
                        <span style={{ fontWeight: '600' }}>Total</span>
                        <span style={{ fontWeight: '700', fontSize: '1.25rem' }}>{formatCurrency(costCalculation.calculation.total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rate Card */}
                  <div>
                    <h4 style={{ margin: '0 0 16px 0', color: '#1e2247' }}>Applicable Rates</h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {serviceRates.map((rate) => (
                        <div key={rate.type} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          background: '#f1f5f9',
                          borderRadius: '8px'
                        }}>
                          <span style={{ color: '#475569' }}>{rate.type}</span>
                          <span style={{ fontWeight: '600', color: '#8b5cf6' }}>{formatCurrency(rate.rate)}/hr</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                  Unable to calculate cost. Please try again.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '20px 32px',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={() => setCostPreviewModal(null)}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#e5e7eb',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#374151',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              {!costPreviewModal.isApproved && (
                <button
                  onClick={() => {
                    setCostPreviewModal(null);
                    handleOpenApproveModal(costPreviewModal);
                  }}
                  style={{
                    flex: 2,
                    padding: '12px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Proceed to Approve
                </button>
              )}
            </div>
          </div>
        </div>
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
                    ID: #{selectedQuotation.id} {selectedQuotation.isApproved && '✓ Approved'}
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
                  borderRadius: '8px'
                }}
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
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e2247', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Customer Information
                </h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Full Name</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.name}</div>
                  </div>
                  <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Email</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.email}</div>
                  </div>
                  {selectedQuotation.phone && (
                    <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Phone</div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.phone}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quotation Details */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e2247', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Quotation Details
                </h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Industry</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.industry}</div>
                  </div>
                  <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Service Required</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.service}</div>
                  </div>
                  {selectedQuotation.location && (
                    <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Location</div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247' }}>{selectedQuotation.location}</div>
                    </div>
                  )}
                  {selectedQuotation.message && (
                    <div style={{ padding: '14px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Message</div>
                      <div style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{selectedQuotation.message}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status and Actions */}
              <div style={{ padding: '20px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '8px' }}>Current Status</div>
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
                      width: '100%'
                    }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="resolved">Resolved</option>
                    <option value="approved">Approved</option>
                  </select>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                  <div>Submitted: {formatDate(selectedQuotation.createdAt)}</div>
                  <div>Last Updated: {formatDate(selectedQuotation.updatedAt)}</div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '20px 32px', borderTop: '2px solid #e5e7eb', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
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
                  cursor: 'pointer'
                }}
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
                    opacity: deletingId === confirmDelete.id ? 0.5 : 1
                  }}
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
                    opacity: deletingId === confirmDelete.id ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
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

      {/* Email Modal */}
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
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fdc51a', margin: 0 }}>Send Email</h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(253, 197, 26, 0.8)', margin: 0 }}>To: {emailModal.name}</p>
                </div>
              </div>
              <button
                onClick={() => !sendingEmail && setEmailModal(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fdc51a',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px'
                }}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#1e2247', marginBottom: '8px' }}>
                  Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  disabled={sendingEmail}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#1e2247', marginBottom: '8px' }}>
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  disabled={sendingEmail}
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    resize: 'vertical'
                  }}
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
                    fontWeight: '600',
                    cursor: sendingEmail ? 'not-allowed' : 'pointer',
                    opacity: sendingEmail ? 0.5 : 1
                  }}
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
                    fontWeight: '600',
                    color: '#1e2247',
                    cursor: sendingEmail ? 'not-allowed' : 'pointer',
                    opacity: sendingEmail ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
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

      {/* Spinner keyframes */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
