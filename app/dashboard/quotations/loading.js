"use client";

import { FileText } from "lucide-react";

export default function QuotationsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Page Header Skeleton */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gold-400/30 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-navy-600/50" />
        </div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded-lg w-48" />
          <div className="h-4 bg-gray-100 rounded w-72" />
        </div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative rounded-2xl bg-navy-600/20 border border-navy-600/10 p-5 sm:p-6 overflow-hidden"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-300/50 rounded-xl mb-4" />
            <div className="h-3 bg-gray-300/50 rounded w-20 mb-2" />
            <div className="h-8 bg-gray-300/50 rounded w-16 mb-2" />
            <div className="h-3 bg-gray-200/50 rounded w-24" />
          </div>
        ))}
      </div>

      {/* Filters Skeleton */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
          <div className="w-40 h-12 bg-gray-100 rounded-xl" />
          <div className="w-36 h-12 bg-gray-100 rounded-xl" />
          <div className="w-28 h-12 bg-gray-100 rounded-xl" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-7 gap-4 bg-navy-600/10 px-5 py-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded" />
          ))}
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {[...Array(5)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="hidden lg:grid grid-cols-7 gap-4 items-center px-5 py-4"
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
          <div className="lg:hidden p-3 space-y-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="h-16 bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-12 bg-gray-200 rounded-lg" />
                    <div className="h-12 bg-gray-200 rounded-lg" />
                    <div className="h-12 bg-gray-200 rounded-lg" />
                    <div className="h-12 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
          <div className="h-4 bg-gray-200 rounded w-32" />
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="w-5 h-5 border-2 border-navy-600/30 border-t-navy-600 rounded-full animate-spin" />
        <span className="text-gray-500 font-medium">Loading quotations...</span>
      </div>
    </div>
  );
}
