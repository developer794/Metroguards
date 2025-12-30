"use client";

import { FileX2, AlertTriangle, RefreshCw, Inbox, FilterX } from "lucide-react";

export function QuotationsLoading() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-card p-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 bg-gray-200 rounded-lg w-48" />
        <div className="h-10 bg-gray-200 rounded-lg w-32" />
      </div>

      {/* Table Header Skeleton */}
      <div className="hidden lg:grid grid-cols-7 gap-4 mb-4 pb-4 border-b border-gray-100">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded" />
        ))}
      </div>

      {/* Table Rows Skeleton */}
      <div className="space-y-4">
        {[...Array(5)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="hidden lg:grid grid-cols-7 gap-4 items-center py-4 border-b border-gray-50"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-3 bg-gray-100 rounded w-16" />
              </div>
            </div>
            {/* Other columns */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded" />
            ))}
          </div>
        ))}

        {/* Mobile Cards Skeleton */}
        <div className="lg:hidden space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-16 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="h-12 bg-gray-200 rounded-lg" />
                  <div className="h-12 bg-gray-200 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex items-center justify-center gap-3 mt-8 py-6">
        <RefreshCw className="w-5 h-5 text-navy-600 animate-spin" />
        <span className="text-gray-600 font-medium">Loading quotations...</span>
      </div>
    </div>
  );
}

export function QuotationsEmpty({ hasFilters = false, onResetFilters }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-card p-12 text-center animate-fade-up">
      <div className="mx-auto w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
        {hasFilters ? (
          <FilterX className="w-10 h-10 text-gray-400" />
        ) : (
          <Inbox className="w-10 h-10 text-gray-400" />
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {hasFilters ? "No Results Found" : "No Quotations Yet"}
      </h3>

      <p className="text-gray-500 max-w-md mx-auto mb-6">
        {hasFilters
          ? "No quotations match your current filters. Try adjusting your search criteria or clear the filters."
          : "When customers submit quotation requests, they will appear here. You can manage, respond, and convert them to bookings."}
      </p>

      {hasFilters && onResetFilters && (
        <button
          onClick={onResetFilters}
          className="
            inline-flex items-center gap-2 px-6 py-3
            bg-navy-600 text-white rounded-xl
            font-semibold text-sm
            hover:bg-navy-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-navy-600/20
          "
        >
          <FilterX className="w-4 h-4" />
          Clear All Filters
        </button>
      )}

      {!hasFilters && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="px-4 py-2 bg-gold-400/10 text-navy-600 rounded-lg text-sm font-medium">
            💡 Tip: Quotation requests come from your website contact form
          </div>
        </div>
      )}
    </div>
  );
}

export function QuotationsError({ error, onRetry }) {
  return (
    <div className="bg-white rounded-xl border border-red-200 shadow-card p-12 text-center animate-fade-up">
      <div className="mx-auto w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Failed to Load Quotations
      </h3>

      <p className="text-gray-500 max-w-md mx-auto mb-2">
        We encountered an error while fetching the quotation data. This could be a temporary issue.
      </p>

      {error?.message && (
        <p className="text-red-600 text-sm font-mono bg-red-50 px-4 py-2 rounded-lg inline-block mb-6">
          {error.message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onRetry}
          className="
            inline-flex items-center gap-2 px-6 py-3
            bg-navy-600 text-white rounded-xl
            font-semibold text-sm
            hover:bg-navy-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-navy-600/20
          "
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>

        <a
          href="mailto:support@metroguards.com.au"
          className="
            inline-flex items-center gap-2 px-6 py-3
            bg-gray-100 text-gray-700 rounded-xl
            font-semibold text-sm
            hover:bg-gray-200 transition-colors
          "
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
