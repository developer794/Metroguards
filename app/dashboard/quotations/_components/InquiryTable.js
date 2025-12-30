"use client";

import { Eye, Mail, FileEdit, Trash2, MoreHorizontal, RefreshCw } from "lucide-react";
import { useState } from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getStatusConfig = (status) => {
  const configs = {
    new: { 
      bg: "bg-emerald-500", 
      softBg: "bg-emerald-50",
      text: "text-emerald-700", 
      label: "New",
      ring: "ring-emerald-500/20" 
    },
    contacted: { 
      bg: "bg-blue-500", 
      softBg: "bg-blue-50",
      text: "text-blue-700", 
      label: "Contacted",
      ring: "ring-blue-500/20" 
    },
    pending: { 
      bg: "bg-amber-500", 
      softBg: "bg-amber-50",
      text: "text-amber-700", 
      label: "Pending",
      ring: "ring-amber-500/20" 
    },
    approved: { 
      bg: "bg-purple-500", 
      softBg: "bg-purple-50",
      text: "text-purple-700", 
      label: "Approved",
      ring: "ring-purple-500/20" 
    },
    resolved: { 
      bg: "bg-gray-500", 
      softBg: "bg-gray-50",
      text: "text-gray-700", 
      label: "Resolved",
      ring: "ring-gray-500/20" 
    },
    expired: { 
      bg: "bg-red-500", 
      softBg: "bg-red-50",
      text: "text-red-700", 
      label: "Expired",
      ring: "ring-red-500/20" 
    },
  };
  return configs[status] || configs.new;
};

function ActionButton({ onClick, icon: Icon, label, variant = "default", disabled = false }) {
  const variants = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    primary: "bg-navy-600 text-white hover:bg-navy-700",
    gold: "bg-gold-400 text-navy-600 hover:bg-gold-500",
    success: "bg-emerald-500 text-white hover:bg-emerald-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      className={`
        inline-flex items-center justify-center gap-1.5
        p-2.5 rounded-lg font-medium text-sm
        transition-all duration-200
        min-w-[44px] min-h-[44px]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
      `}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}

function StatusDropdown({ status, quotationId, onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const statusConfig = getStatusConfig(status);

  const statuses = ["new", "contacted", "pending", "approved", "resolved"];

  const handleStatusChange = async (newStatus) => {
    if (newStatus === status) {
      setIsOpen(false);
      return;
    }
    
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/quotations/${quotationId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (res.ok && onStatusChange) {
        onStatusChange(quotationId, newStatus);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setIsUpdating(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isUpdating}
        className={`
          inline-flex items-center gap-1.5 px-3 py-1.5
          ${statusConfig.softBg} ${statusConfig.text}
          rounded-full text-xs font-semibold uppercase tracking-wide
          ring-1 ${statusConfig.ring}
          transition-all duration-200
          hover:ring-2 cursor-pointer
          disabled:cursor-wait
        `}
      >
        {isUpdating ? (
          <RefreshCw className="w-3 h-3 animate-spin" />
        ) : (
          <>
            <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.bg}`} />
            {statusConfig.label}
          </>
        )}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute left-0 mt-2 z-50 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-scale-in">
            {statuses.map((s) => {
              const config = getStatusConfig(s);
              return (
                <button
                  key={s}
                  onClick={() => handleStatusChange(s)}
                  className={`
                    w-full px-3 py-2 text-left text-sm
                    flex items-center gap-2
                    hover:bg-gray-50 transition-colors
                    ${s === status ? "bg-gray-50 font-medium" : ""}
                  `}
                >
                  <span className={`w-2 h-2 rounded-full ${config.bg}`} />
                  {config.label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function InquiryTable({
  quotations,
  onView,
  onEmail,
  onBuildQuote,
  onDelete,
  onStatusChange,
  updatingId,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden animate-fade-up">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gold-400" style={{ background: 'linear-gradient(to right, #1e2247, #1e2247, #181b38)' }}>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                Contact
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                Service
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                Industry
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {quotations.map((quotation, index) => (
              <tr
                key={quotation.id}
                className={`
                  transition-colors duration-150
                  hover:bg-blue-50/50
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                `}
              >
                {/* Customer */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex-shrink-0
                        flex items-center justify-center
                        font-bold text-sm text-gold-400
                        ${quotation.isApproved 
                          ? "bg-gradient-to-br from-purple-500 to-purple-600" 
                          : "bg-gradient-to-br from-navy-600 to-navy-700"}
                      `}
                    >
                      {quotation.name?.charAt(0).toUpperCase() || "?"}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 truncate max-w-[150px]">
                        {quotation.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        ID: #{quotation.id.toString().slice(-6)}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-5 py-4">
                  <div className="text-sm">
                    <div className="text-gray-700 truncate max-w-[180px]">
                      {quotation.email}
                    </div>
                    {quotation.phone && (
                      <div className="text-xs text-gray-500 mt-0.5">
                        {quotation.phone}
                      </div>
                    )}
                  </div>
                </td>

                {/* Service */}
                <td className="px-5 py-4">
                  <div 
                    className="text-sm text-gray-700 truncate max-w-[180px]"
                    title={quotation.service}
                  >
                    {quotation.service}
                  </div>
                </td>

                {/* Industry */}
                <td className="px-5 py-4">
                  <span className="inline-flex px-2.5 py-1 bg-gold-400/10 text-navy-600 rounded-md text-xs font-medium">
                    {quotation.industry}
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <StatusDropdown 
                    status={quotation.status}
                    quotationId={quotation.id}
                    onStatusChange={onStatusChange}
                  />
                </td>

                {/* Date */}
                <td className="px-5 py-4">
                  <div className="text-sm text-gray-500">
                    {formatDate(quotation.createdAt)}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-1.5">
                    <ActionButton
                      onClick={() => onBuildQuote(quotation)}
                      icon={FileEdit}
                      label="Build Quote"
                      variant="success"
                    />
                    <ActionButton
                      onClick={() => onEmail(quotation)}
                      icon={Mail}
                      label="Send Email"
                      variant="gold"
                    />
                    <ActionButton
                      onClick={() => onView(quotation)}
                      icon={Eye}
                      label="View Details"
                      variant="primary"
                    />
                    <ActionButton
                      onClick={() => onDelete(quotation)}
                      icon={Trash2}
                      label="Delete"
                      variant="danger"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden p-3 space-y-3">
        {quotations.map((quotation) => {
          const statusConfig = getStatusConfig(quotation.status);
          return (
            <div
              key={quotation.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              {/* Card Header */}
              <div className="px-4 py-3 flex items-center justify-between" style={{ background: 'linear-gradient(to right, #1e2247, #181b38)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gold-400 flex items-center justify-center text-navy-600 font-bold text-lg flex-shrink-0">
                    {quotation.name?.charAt(0).toUpperCase() || "?"}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base">
                      {quotation.name}
                    </div>
                    <div className="text-gold-400 text-xs">
                      #{quotation.id.toString().slice(-6)}
                    </div>
                  </div>
                </div>
                <span
                  className={`
                    px-2.5 py-1 rounded-full text-xs font-semibold
                    ${statusConfig.bg} text-white
                  `}
                >
                  {statusConfig.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                {/* Contact Info */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 break-all">
                    {quotation.email}
                  </span>
                </div>

                {quotation.phone && (
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {quotation.phone}
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-700">
                    {quotation.service}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="inline-flex px-2.5 py-1 bg-gold-400/10 text-navy-600 rounded-md text-xs font-medium">
                    {quotation.industry}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(quotation.createdAt)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => onBuildQuote(quotation)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-lg font-medium text-sm hover:bg-emerald-600 transition-colors min-h-[48px]"
                  >
                    <FileEdit className="w-4 h-4" />
                    Build Quote
                  </button>
                  <button
                    onClick={() => onEmail(quotation)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gold-400 text-navy-600 rounded-lg font-medium text-sm hover:bg-gold-500 transition-colors min-h-[48px]"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button
                    onClick={() => onView(quotation)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-navy-600 text-white rounded-lg font-medium text-sm hover:bg-navy-700 transition-colors min-h-[48px]"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => onDelete(quotation)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium text-sm hover:bg-red-100 transition-colors min-h-[48px]"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Results Count Footer */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{quotations.length}</span> quotation{quotations.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
