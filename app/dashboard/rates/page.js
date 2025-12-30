"use client";

import { useState, useEffect } from "react";

const RATE_DISPLAY_NAMES = {
  weekday_day: "Weekday Day",
  weekday_night: "Weekday Night",
  saturday: "Saturday",
  sunday: "Sunday",
  public_holiday: "Public Holiday",
  new_years_eve: "New Year's Eve",
};

const RATE_DESCRIPTIONS = {
  weekday_day: "Mon-Fri, 6:00 AM - 6:00 PM",
  weekday_night: "Mon-Fri, 6:00 PM - 6:00 AM",
  saturday: "All Day",
  sunday: "All Day",
  public_holiday: "Victoria Public Holidays",
  new_years_eve: "December 31st",
};

export default function RatesPage() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [editMode, setEditMode] = useState({});
  const [editValues, setEditValues] = useState({});
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customRate, setCustomRate] = useState({
    name: "",
    description: "",
    hourlyRate: "",
    overtimeMultiplier1: "1.5",
    overtimeMultiplier2: "2.0",
  });

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const res = await fetch("/api/service-rates");
      const data = await res.json();
      if (data.success) {
        setRates(data.rates);
        setError(null);
      } else {
        setError("Failed to load rates");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (rate) => {
    setEditMode({ ...editMode, [rate.name]: true });
    setEditValues({
      ...editValues,
      [rate.name]: {
        hourlyRate: rate.hourlyRate.toString(),
        overtimeMultiplier1: rate.overtimeMultiplier1?.toString() || "1.5",
        overtimeMultiplier2: rate.overtimeMultiplier2?.toString() || "2.0",
        description: rate.description || "",
      },
    });
  };

  const cancelEdit = (rateName) => {
    setEditMode({ ...editMode, [rateName]: false });
    setEditValues({ ...editValues, [rateName]: undefined });
  };

  const saveRate = async (rate) => {
    setSaving(rate.name);
    setError(null);
    setSuccess(null);

    const values = editValues[rate.name];
    
    try {
      const res = await fetch("/api/service-rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: rate.name,
          hourlyRate: parseFloat(values.hourlyRate),
          description: values.description || rate.description,
          overtimeMultiplier1: parseFloat(values.overtimeMultiplier1),
          overtimeMultiplier2: parseFloat(values.overtimeMultiplier2),
        }),
      });

      const data = await res.json();
      
      if (data.success) {
        setSuccess(`${RATE_DISPLAY_NAMES[rate.name] || rate.name} updated successfully!`);
        setEditMode({ ...editMode, [rate.name]: false });
        fetchRates();
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(data.error || "Failed to save rate");
      }
    } catch (err) {
      setError("Failed to save rate");
    } finally {
      setSaving(null);
    }
  };

  const addCustomRate = async () => {
    if (!customRate.name || !customRate.hourlyRate) {
      setError("Please fill in rate name and hourly rate");
      return;
    }

    setSaving("custom");
    setError(null);

    try {
      const res = await fetch("/api/service-rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customRate.name.toLowerCase().replace(/\s+/g, "_"),
          description: customRate.description,
          hourlyRate: parseFloat(customRate.hourlyRate),
          overtimeMultiplier1: parseFloat(customRate.overtimeMultiplier1),
          overtimeMultiplier2: parseFloat(customRate.overtimeMultiplier2),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Custom rate added successfully!");
        setShowAddCustom(false);
        setCustomRate({
          name: "",
          description: "",
          hourlyRate: "",
          overtimeMultiplier1: "1.5",
          overtimeMultiplier2: "2.0",
        });
        fetchRates();
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(data.error || "Failed to add custom rate");
      }
    } catch (err) {
      setError("Failed to add custom rate");
    } finally {
      setSaving(null);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#fdc51a] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e2247] to-[#2a3060] rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#fdc51a] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Service Rates</h1>
              <p className="text-white/70 mt-1">
                Manage hourly rates for different shift types
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowAddCustom(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#fdc51a] text-[#1e2247] font-bold rounded-xl hover:bg-[#e7b80f] transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Custom Rate
          </button>
        </div>
      </div>

      {/* Alerts */}
      {error && (
        <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-2 border-red-500/30 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-red-700 font-medium flex-1">{error}</span>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700 p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {success && (
        <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-2 border-green-500/30 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-green-700 font-medium">{success}</span>
        </div>
      )}

      {/* GST Notice */}
      <div className="bg-gradient-to-r from-[#1e2247] to-[#2a3060] rounded-xl p-5 flex items-start gap-4 border-2 border-[#fdc51a]/30">
        <div className="w-12 h-12 bg-[#fdc51a] rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-[#fdc51a] text-lg">GST Information</p>
          <p className="text-white/80 mt-1">
            All rates shown are <strong className="text-[#fdc51a]">exclusive of GST</strong>. A 10% GST is automatically calculated and added to all quotations.
          </p>
        </div>
      </div>

      {/* Rates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {rates.map((rate) => {
          const isEditing = editMode[rate.name];
          const values = editValues[rate.name] || {};
          const displayName = RATE_DISPLAY_NAMES[rate.name] || rate.name.replace(/_/g, " ");
          const description = RATE_DESCRIPTIONS[rate.name] || rate.description;

          return (
            <div
              key={rate.name}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                isEditing
                  ? "border-[#fdc51a] shadow-xl shadow-[#fdc51a]/20 scale-[1.02]"
                  : "border-gray-200 hover:border-[#1e2247]/30 hover:shadow-lg"
              }`}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#1e2247] to-[#2a3060] px-5 py-4">
                <h3 className="font-bold text-white text-lg capitalize">{displayName}</h3>
                <p className="text-white/60 text-sm mt-0.5">{description}</p>
              </div>

              <div className="p-5">
                {isEditing ? (
                  /* Edit Mode */
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1e2247] mb-2">
                        Hourly Rate (AUD)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={values.hourlyRate}
                          onChange={(e) =>
                            setEditValues({
                              ...editValues,
                              [rate.name]: { ...values, hourlyRate: e.target.value },
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none font-bold text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#1e2247] mb-1.5">
                          OT (First 2hrs)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          min="1"
                          value={values.overtimeMultiplier1}
                          onChange={(e) =>
                            setEditValues({
                              ...editValues,
                              [rate.name]: { ...values, overtimeMultiplier1: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1e2247] mb-1.5">
                          OT (Beyond 2hrs)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          min="1"
                          value={values.overtimeMultiplier2}
                          onChange={(e) =>
                            setEditValues({
                              ...editValues,
                              [rate.name]: { ...values, overtimeMultiplier2: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none text-center font-bold"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => saveRate(rate)}
                        disabled={saving === rate.name}
                        className="flex-1 py-3 px-4 bg-[#fdc51a] text-[#1e2247] font-bold rounded-xl hover:bg-[#e7b80f] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {saving === rate.name ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1e2247] border-t-transparent"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => cancelEdit(rate.name)}
                        className="py-3 px-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* View Mode */
                  <div>
                    <div className="flex items-end justify-between mb-5">
                      <div>
                        <p className="text-4xl font-black text-[#1e2247]">
                          {formatCurrency(rate.hourlyRate)}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">per hour</p>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#1e2247]/10 rounded-lg mb-1">
                          <span className="text-xs font-bold text-[#1e2247]">OT1: {rate.overtimeMultiplier1}x</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#fdc51a]/20 rounded-lg">
                          <span className="text-xs font-bold text-[#1e2247]">OT2: {rate.overtimeMultiplier2}x</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => startEdit(rate)}
                      className="w-full py-3 px-4 bg-[#1e2247] text-white font-bold rounded-xl hover:bg-[#2a3060] transition-all flex items-center justify-center gap-2 group"
                    >
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit Rate
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Rate Calculation Guide */}
      <div className="bg-gradient-to-br from-[#1e2247] to-[#2a3060] rounded-2xl p-6 shadow-xl">
        <h3 className="font-bold text-[#fdc51a] text-xl mb-5 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#fdc51a] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          Rate Calculation Guide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <p className="font-bold text-white">Standard Hours</p>
              <p className="text-white/70 text-sm mt-1">First 8 hours per day at base rate</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-[#fdc51a] flex items-center justify-center flex-shrink-0">
              <span className="text-[#1e2247] font-bold">2</span>
            </div>
            <div>
              <p className="font-bold text-white">Overtime (First 2 hours)</p>
              <p className="text-white/70 text-sm mt-1">Hours 9-10 at 1.5x base rate</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <p className="font-bold text-white">Overtime (Beyond 2 hours)</p>
              <p className="text-white/70 text-sm mt-1">Hours 11+ at 2.0x base rate</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">+</span>
            </div>
            <div>
              <p className="font-bold text-white">GST (10%)</p>
              <p className="text-white/70 text-sm mt-1">Automatically added to all quotations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Custom Rate Modal */}
      {showAddCustom && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1e2247] to-[#2a3060] px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fdc51a] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Add Custom Rate</h2>
              </div>
              <button
                onClick={() => setShowAddCustom(false)}
                className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-[#1e2247] mb-2">
                  Rate Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Early Morning Premium"
                  value={customRate.name}
                  onChange={(e) => setCustomRate({ ...customRate, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1e2247] mb-2">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="e.g., Shifts starting before 6am"
                  value={customRate.description}
                  onChange={(e) => setCustomRate({ ...customRate, description: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1e2247] mb-2">
                  Hourly Rate (AUD) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={customRate.hourlyRate}
                    onChange={(e) => setCustomRate({ ...customRate, hourlyRate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none font-bold text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1e2247] mb-2">
                    OT Multiplier (First 2hrs)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={customRate.overtimeMultiplier1}
                    onChange={(e) => setCustomRate({ ...customRate, overtimeMultiplier1: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none text-center font-bold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1e2247] mb-2">
                    OT Multiplier (Beyond 2hrs)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={customRate.overtimeMultiplier2}
                    onChange={(e) => setCustomRate({ ...customRate, overtimeMultiplier2: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fdc51a] focus:border-[#fdc51a] outline-none text-center font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex gap-3">
              <button
                onClick={addCustomRate}
                disabled={saving === "custom"}
                className="flex-1 py-3 px-4 bg-[#fdc51a] text-[#1e2247] font-bold rounded-xl hover:bg-[#e7b80f] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving === "custom" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1e2247] border-t-transparent"></div>
                    Adding...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Rate
                  </>
                )}
              </button>
              <button
                onClick={() => setShowAddCustom(false)}
                className="py-3 px-6 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
