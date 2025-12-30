"use client";

import { useState } from "react";
import { Search, Filter, X, ChevronDown, Calendar, Building2, RotateCcw } from "lucide-react";

export default function QuotationFilters({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
  filterDateRange,
  setFilterDateRange,
  filterIndustry,
  setFilterIndustry,
  sortBy,
  setSortBy,
  industries = [],
  onReset,
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const statusOptions = [
    { value: "all", label: "All Status", color: "bg-gray-500" },
    { value: "new", label: "New", color: "bg-emerald-500" },
    { value: "contacted", label: "Contacted", color: "bg-blue-500" },
    { value: "pending", label: "Pending", color: "bg-yellow-500" },
    { value: "approved", label: "Approved", color: "bg-purple-500" },
    { value: "resolved", label: "Resolved", color: "bg-gray-400" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "name", label: "Name A-Z" },
  ];

  const hasActiveFilters =
    searchTerm ||
    filterStatus !== "all" ||
    filterIndustry !== "all" ||
    filterDateRange?.start ||
    filterDateRange?.end;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden animate-fade-up">
      {/* Main Filter Bar */}
      <div className="p-4 flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full pl-10 pr-4 py-3 
              bg-gray-50 border border-gray-200 rounded-xl
              text-sm text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
              transition-all duration-200
            "
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>

        {/* Status Filter */}
        <div className="relative min-w-[160px]">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="
              w-full appearance-none pl-4 pr-10 py-3
              bg-gray-50 border border-gray-200 rounded-xl
              text-sm text-gray-700 font-medium
              focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
              transition-all duration-200 cursor-pointer
            "
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Sort */}
        <div className="relative min-w-[150px]">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
              w-full appearance-none pl-4 pr-10 py-3
              bg-gray-50 border border-gray-200 rounded-xl
              text-sm text-gray-700 font-medium
              focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
              transition-all duration-200 cursor-pointer
            "
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Advanced Toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`
            flex items-center justify-center gap-2 px-4 py-3
            rounded-xl font-medium text-sm
            transition-all duration-200
            min-w-[44px] min-h-[44px]
            ${
              showAdvanced
                ? "bg-navy-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          <Filter className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              showAdvanced ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="
              flex items-center justify-center gap-2 px-4 py-3
              bg-red-50 text-red-600 hover:bg-red-100
              rounded-xl font-medium text-sm
              transition-all duration-200
              min-w-[44px] min-h-[44px]
            "
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      {/* Advanced Filters Panel */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${showAdvanced ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pb-4 pt-0 border-t border-gray-100 bg-gray-50/50">
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Industry Filter */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                <Building2 className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                Industry
              </label>
              <select
                value={filterIndustry}
                onChange={(e) => setFilterIndustry(e.target.value)}
                className="
                  w-full appearance-none px-4 py-2.5
                  bg-white border border-gray-200 rounded-lg
                  text-sm text-gray-700
                  focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
                  transition-all duration-200 cursor-pointer
                "
              >
                <option value="all">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Date From */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                <Calendar className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                From Date
              </label>
              <input
                type="date"
                value={filterDateRange?.start || ""}
                onChange={(e) =>
                  setFilterDateRange({ ...filterDateRange, start: e.target.value })
                }
                className="
                  w-full px-4 py-2.5
                  bg-white border border-gray-200 rounded-lg
                  text-sm text-gray-700
                  focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
                  transition-all duration-200
                "
              />
            </div>

            {/* Date To */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                <Calendar className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                To Date
              </label>
              <input
                type="date"
                value={filterDateRange?.end || ""}
                onChange={(e) =>
                  setFilterDateRange({ ...filterDateRange, end: e.target.value })
                }
                className="
                  w-full px-4 py-2.5
                  bg-white border border-gray-200 rounded-lg
                  text-sm text-gray-700
                  focus:outline-none focus:ring-2 focus:ring-navy-600/20 focus:border-navy-600
                  transition-all duration-200
                "
              />
            </div>

            {/* Quick Date Filters */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                Quick Filters
              </label>
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: "Today", days: 0 },
                  { label: "7 Days", days: 7 },
                  { label: "30 Days", days: 30 },
                ].map((quick) => (
                  <button
                    key={quick.label}
                    onClick={() => {
                      const today = new Date();
                      const from = new Date();
                      from.setDate(today.getDate() - quick.days);
                      setFilterDateRange({
                        start: from.toISOString().split("T")[0],
                        end: today.toISOString().split("T")[0],
                      });
                    }}
                    className="
                      px-3 py-1.5 text-xs font-medium
                      bg-white border border-gray-200 rounded-lg
                      hover:bg-navy-600 hover:text-white hover:border-navy-600
                      transition-all duration-200
                    "
                  >
                    {quick.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {searchTerm && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy-600/10 text-navy-600 rounded-full text-xs font-medium">
              Search: "{searchTerm}"
              <button
                onClick={() => setSearchTerm("")}
                className="hover:bg-navy-600/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filterStatus !== "all" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-xs font-medium">
              Status: {filterStatus}
              <button
                onClick={() => setFilterStatus("all")}
                className="hover:bg-blue-500/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filterIndustry !== "all" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 text-purple-600 rounded-full text-xs font-medium">
              Industry: {filterIndustry}
              <button
                onClick={() => setFilterIndustry("all")}
                className="hover:bg-purple-500/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {(filterDateRange?.start || filterDateRange?.end) && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full text-xs font-medium">
              Date: {filterDateRange.start || "..."} to {filterDateRange.end || "..."}
              <button
                onClick={() => setFilterDateRange({ start: "", end: "" })}
                className="hover:bg-green-500/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
