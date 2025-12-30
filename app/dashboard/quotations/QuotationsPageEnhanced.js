"use client";

import { useState, useMemo, useCallback } from "react";
import { FileText, X, Send, Trash2, AlertTriangle } from "lucide-react";
import QuotationFilters from "./_components/QuotationFilters";
import InquiryTable from "./_components/InquiryTable";
import StatsCards from "./_components/StatsCards";
import QuotationBuilder from "./_components/QuotationBuilder";
import QuotationPDFPreview from "./_components/QuotationPDFPreview";
import { QuotationsLoading, QuotationsEmpty, QuotationsError } from "./_components/QuotationStates";

// Modal Component
function Modal({ isOpen, onClose, title, subtitle, children, size = "md", variant = "default" }) {
  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const variants = {
    default: "border-gold-400",
    danger: "border-red-500",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`
          w-full ${sizes[size]} bg-white rounded-2xl shadow-2xl
          border-2 ${variants[variant]}
          max-h-[90vh] overflow-hidden flex flex-col
          animate-scale-in
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-600 to-navy-700 px-6 py-4 flex items-center justify-between border-b-2 border-gold-400">
          <div>
            <h2 className="text-lg font-bold text-gold-400">{title}</h2>
            {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gold-400 hover:bg-white/10 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
}

export default function QuotationsPageEnhanced({
  initialQuotations = [],
  initialStats = {},
  isLoading = false,
  error = null,
}) {
  // State management
  const [quotations, setQuotations] = useState(initialQuotations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDateRange, setFilterDateRange] = useState({ start: "", end: "" });
  const [filterIndustry, setFilterIndustry] = useState("all");
  const [filterValueRange, setFilterValueRange] = useState({ min: null, max: null });
  const [sortBy, setSortBy] = useState("newest");

  // Modal states
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [emailModal, setEmailModal] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [builderModal, setBuilderModal] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);

  // Action states
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [savingQuote, setSavingQuote] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  // Email form state
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // Get unique industries for filter
  const industries = useMemo(() => {
    const unique = [...new Set(quotations.map((q) => q.industry).filter(Boolean))];
    return unique.sort();
  }, [quotations]);

  // Filter and sort quotations
  const filteredQuotations = useMemo(() => {
    let filtered = [...quotations];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.name?.toLowerCase().includes(term) ||
          q.email?.toLowerCase().includes(term) ||
          q.industry?.toLowerCase().includes(term) ||
          q.service?.toLowerCase().includes(term)
      );
    }

    // Status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter((q) => q.status === filterStatus);
    }

    // Industry filter
    if (filterIndustry !== "all") {
      filtered = filtered.filter((q) => q.industry === filterIndustry);
    }

    // Date range filter
    if (filterDateRange.start) {
      const startDate = new Date(filterDateRange.start);
      filtered = filtered.filter((q) => new Date(q.createdAt) >= startDate);
    }
    if (filterDateRange.end) {
      const endDate = new Date(filterDateRange.end);
      endDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter((q) => new Date(q.createdAt) <= endDate);
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "name":
        filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        break;
      default:
        break;
    }

    return filtered;
  }, [quotations, searchTerm, filterStatus, filterDateRange, filterIndustry, sortBy]);

  // Calculate stats
  const stats = useMemo(
    () => ({
      total: quotations.length,
      new: quotations.filter((q) => q.status === "new").length,
      contacted: quotations.filter((q) => q.status === "contacted").length,
      approved: quotations.filter((q) => q.isApproved).length,
      resolved: quotations.filter((q) => q.status === "resolved").length,
    }),
    [quotations]
  );

  // Reset filters
  const handleResetFilters = useCallback(() => {
    setSearchTerm("");
    setFilterStatus("all");
    setFilterDateRange({ start: "", end: "" });
    setFilterIndustry("all");
    setFilterValueRange({ min: null, max: null });
    setSortBy("newest");
  }, []);

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm ||
    filterStatus !== "all" ||
    filterIndustry !== "all" ||
    filterDateRange.start ||
    filterDateRange.end;

  // Handle view quotation
  const handleView = (quotation) => {
    setSelectedQuotation(quotation);
  };

  // Handle status change (from table)
  const handleStatusChange = (quotationId, newStatus) => {
    setQuotations((prev) =>
      prev.map((q) => (q.id === quotationId ? { ...q, status: newStatus } : q))
    );
  };

  // Handle email
  const handleOpenEmail = (quotation) => {
    setEmailModal(quotation);
    setEmailSubject(`Re: Your Quotation Request - ${quotation.service}`);
    setEmailMessage(
      `Dear ${quotation.name},\n\nThank you for your quotation request for ${quotation.service}.\n\n`
    );
  };

  const handleSendEmail = async () => {
    if (!emailSubject.trim() || !emailMessage.trim()) {
      alert("Please fill in both subject and message");
      return;
    }

    setSendingEmail(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: emailModal.email,
          toName: emailModal.name,
          subject: emailSubject,
          message: emailMessage,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Email sent successfully!");
        setEmailModal(null);
        setEmailSubject("");
        setEmailMessage("");
      } else {
        alert(`Failed to send email: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    } finally {
      setSendingEmail(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/quotations/${id}`, { method: "DELETE" });
      if (res.ok) {
        setQuotations((prev) => prev.filter((q) => q.id !== id));
        setDeleteConfirm(null);
        if (selectedQuotation?.id === id) setSelectedQuotation(null);
      } else {
        alert("Failed to delete quotation");
      }
    } catch (error) {
      console.error("Error deleting quotation:", error);
      alert("Error deleting quotation");
    } finally {
      setDeletingId(null);
    }
  };

  // Handle build quote
  const handleBuildQuote = (quotation) => {
    setBuilderModal(quotation);
  };

  // Handle save quote and show PDF preview
  const handleSaveQuote = async (quoteData) => {
    setSavingQuote(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setBuilderModal(null);
      setPdfPreview({ quoteData, quotation: builderModal });
    } catch (error) {
      console.error("Error saving quote:", error);
      alert("Error generating quote");
    } finally {
      setSavingQuote(false);
    }
  };

  // Handle PDF download
  const handleDownloadPdf = async () => {
    setDownloadingPdf(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading PDF");
    } finally {
      setDownloadingPdf(false);
    }
  };

  // Handle retry on error
  const handleRetry = () => {
    window.location.reload();
  };

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-up">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center shadow-gold flex-shrink-0">
            <FileText className="w-6 h-6 text-navy-600" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Quotation Requests
            </h1>
            <p className="text-sm text-gray-500">
              Manage, approve, and convert quotations to bookings
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Filters */}
      <QuotationFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterDateRange={filterDateRange}
        setFilterDateRange={setFilterDateRange}
        filterIndustry={filterIndustry}
        setFilterIndustry={setFilterIndustry}
        filterValueRange={filterValueRange}
        setFilterValueRange={setFilterValueRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        industries={industries}
        onReset={handleResetFilters}
      />

      {/* Content */}
      {isLoading ? (
        <QuotationsLoading />
      ) : error ? (
        <QuotationsError error={error} onRetry={handleRetry} />
      ) : filteredQuotations.length === 0 ? (
        <QuotationsEmpty hasFilters={hasActiveFilters} onResetFilters={handleResetFilters} />
      ) : (
        <InquiryTable
          quotations={filteredQuotations}
          onView={handleView}
          onEmail={handleOpenEmail}
          onBuildQuote={handleBuildQuote}
          onDelete={(q) => setDeleteConfirm(q)}
          onStatusChange={handleStatusChange}
          updatingId={updatingId}
        />
      )}

      {/* Quotation Builder Modal */}
      {builderModal && (
        <QuotationBuilder
          quotation={builderModal}
          onClose={() => setBuilderModal(null)}
          onSave={handleSaveQuote}
          isSaving={savingQuote}
        />
      )}

      {/* PDF Preview Modal */}
      {pdfPreview && (
        <QuotationPDFPreview
          quoteData={pdfPreview.quoteData}
          quotation={pdfPreview.quotation}
          onClose={() => setPdfPreview(null)}
          onDownload={handleDownloadPdf}
          isDownloading={downloadingPdf}
        />
      )}

      {/* View Details Modal */}
      <Modal
        isOpen={!!selectedQuotation}
        onClose={() => setSelectedQuotation(null)}
        title="Quotation Details"
        size="md"
      >
        {selectedQuotation && (
          <div className="space-y-4">
            {[
              { label: "Name", value: selectedQuotation.name },
              { label: "Email", value: selectedQuotation.email },
              { label: "Phone", value: selectedQuotation.phone || "N/A" },
              { label: "Industry", value: selectedQuotation.industry },
              { label: "Service", value: selectedQuotation.service },
              { label: "Status", value: selectedQuotation.status },
              { label: "Date", value: formatDate(selectedQuotation.createdAt) },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-base font-semibold text-navy-600">
                  {item.value}
                </div>
              </div>
            ))}
            {selectedQuotation.message && (
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Message
                </div>
                <div className="text-sm text-gray-700 whitespace-pre-wrap">
                  {selectedQuotation.message}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Email Modal */}
      <Modal
        isOpen={!!emailModal}
        onClose={() => !sendingEmail && setEmailModal(null)}
        title="Send Email"
        subtitle={emailModal ? `To: ${emailModal.name}` : ""}
        size="md"
      >
        {emailModal && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                disabled={sendingEmail}
                className="
                  w-full px-4 py-3 border border-gray-200 rounded-xl
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
                  disabled:bg-gray-50 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
                disabled={sendingEmail}
                rows={6}
                className="
                  w-full px-4 py-3 border border-gray-200 rounded-xl
                  text-gray-900 placeholder-gray-400 resize-y
                  focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
                  disabled:bg-gray-50 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setEmailModal(null)}
                disabled={sendingEmail}
                className="
                  flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl
                  font-semibold text-sm hover:bg-gray-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200 min-h-[52px]
                "
              >
                Cancel
              </button>
              <button
                onClick={handleSendEmail}
                disabled={sendingEmail}
                className="
                  flex-1 px-4 py-3 bg-gold-400 text-navy-600 rounded-xl
                  font-semibold text-sm hover:bg-gold-500
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                  transition-all duration-200 min-h-[52px]
                "
              >
                {sendingEmail ? (
                  <>
                    <div className="w-4 h-4 border-2 border-navy-600/30 border-t-navy-600 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Email
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title=""
        size="sm"
        variant="danger"
      >
        {deleteConfirm && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Confirm Deletion
            </h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete the quotation from{" "}
              <strong className="text-gray-900">{deleteConfirm.name}</strong>?
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                disabled={deletingId === deleteConfirm.id}
                className="
                  flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl
                  font-semibold text-sm hover:bg-gray-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200 min-h-[52px]
                "
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                disabled={deletingId === deleteConfirm.id}
                className="
                  flex-1 px-4 py-3 bg-red-500 text-white rounded-xl
                  font-semibold text-sm hover:bg-red-600
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                  transition-all duration-200 min-h-[52px]
                "
              >
                {deletingId === deleteConfirm.id ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
