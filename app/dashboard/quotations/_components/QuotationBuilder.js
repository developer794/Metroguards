"use client";
import { useState, useMemo } from "react";

const SERVICE_RATES = [
  { id: "weekday_day", type: "Weekday Day (6am-6pm)", rate: 40.7 },
  { id: "weekday_night", type: "Weekday Night (6pm-6am)", rate: 46.0 },
  { id: "saturday", type: "Saturday", rate: 59.5 },
  { id: "sunday", type: "Sunday", rate: 79.5 },
  { id: "public_holiday", type: "Public Holiday", rate: 95.0 },
  { id: "nye", type: "New Year's Eve", rate: 110.0 },
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(amount);
};

export default function QuotationBuilder({
  quotation,
  onClose,
  onSave,
  isSaving = false,
}) {
  const [lineItems, setLineItems] = useState([
    {
      id: Date.now(),
      description: quotation?.service || "",
      rateType: "weekday_day",
      hours: 8,
      guards: quotation?.guardsRequired || 1,
      days: 1,
    },
  ]);

  const [notes, setNotes] = useState("");
  const [validUntil, setValidUntil] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split("T")[0];
  });
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("percent");

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: Date.now(),
        description: "",
        rateType: "weekday_day",
        hours: 8,
        guards: 1,
        days: 1,
      },
    ]);
  };

  const removeLineItem = (id) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter((item) => item.id !== id));
    }
  };

  const updateLineItem = (id, field, value) => {
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const calculations = useMemo(() => {
    let subtotal = 0;

    const itemCalcs = lineItems.map((item) => {
      const rate = SERVICE_RATES.find((r) => r.id === item.rateType)?.rate || 0;
      const itemTotal = rate * item.hours * item.guards * item.days;
      subtotal += itemTotal;
      return { ...item, rate, itemTotal };
    });

    let discountAmount = 0;
    if (discountType === "percent") {
      discountAmount = (subtotal * discount) / 100;
    } else {
      discountAmount = discount;
    }

    const afterDiscount = subtotal - discountAmount;
    const gst = afterDiscount * 0.1;
    const total = afterDiscount + gst;

    return { itemCalcs, subtotal, discountAmount, afterDiscount, gst, total };
  }, [lineItems, discount, discountType]);

  const handleSave = () => {
    const quoteData = {
      quotationId: quotation?.id,
      lineItems: calculations.itemCalcs,
      subtotal: calculations.subtotal,
      discount: calculations.discountAmount,
      gst: calculations.gst,
      total: calculations.total,
      notes,
      validUntil,
    };
    onSave(quoteData);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
        backdropFilter: "blur(4px)",
      }}
      onClick={() => !isSaving && onClose()}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "1000px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          border: "3px solid #fdc51a",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
            padding: "20px 24px",
            borderBottom: "3px solid #fdc51a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#fdc51a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                style={{ width: "28px", height: "28px", color: "#1e2247" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#fdc51a", margin: 0 }}>
                Quotation Builder
              </h2>
              <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)", margin: 0 }}>
                {quotation?.name} - {quotation?.service}
              </p>
            </div>
          </div>
          <button
            onClick={() => !isSaving && onClose()}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "none",
              color: "#fdc51a",
              cursor: isSaving ? "not-allowed" : "pointer",
              padding: "8px",
              borderRadius: "8px",
              minWidth: "44px",
              minHeight: "44px",
            }}
          >
            <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body - Scrollable */}
        <div style={{ flex: 1, overflow: "auto", padding: "24px" }}>
          {/* Line Items */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "700", color: "#1e2247" }}>Line Items</h3>
              <button
                onClick={addLineItem}
                style={{
                  padding: "8px 16px",
                  border: "2px solid #10b981",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "#10b981",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.875rem",
                  minHeight: "44px",
                }}
              >
                <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Item
              </button>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
                <thead>
                  <tr style={{ background: "#f8fafc" }}>
                    <th style={{ padding: "12px", textAlign: "left", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase" }}>Description</th>
                    <th style={{ padding: "12px", textAlign: "left", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase" }}>Rate Type</th>
                    <th style={{ padding: "12px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", width: "80px" }}>Hours</th>
                    <th style={{ padding: "12px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", width: "80px" }}>Guards</th>
                    <th style={{ padding: "12px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", width: "80px" }}>Days</th>
                    <th style={{ padding: "12px", textAlign: "right", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase" }}>Amount</th>
                    <th style={{ padding: "12px", width: "50px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item, index) => {
                    const calc = calculations.itemCalcs.find((c) => c.id === item.id);
                    return (
                      <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                        <td style={{ padding: "12px" }}>
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                            placeholder="Service description"
                            style={{
                              width: "100%",
                              padding: "8px 12px",
                              border: "1px solid #e5e7eb",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              minHeight: "44px",
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px" }}>
                          <select
                            value={item.rateType}
                            onChange={(e) => updateLineItem(item.id, "rateType", e.target.value)}
                            style={{
                              width: "100%",
                              padding: "8px 12px",
                              border: "1px solid #e5e7eb",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              background: "white",
                              minHeight: "44px",
                            }}
                          >
                            {SERVICE_RATES.map((rate) => (
                              <option key={rate.id} value={rate.id}>
                                {rate.type} - {formatCurrency(rate.rate)}/hr
                              </option>
                            ))}
                          </select>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <input
                            type="number"
                            min="1"
                            value={item.hours}
                            onChange={(e) => updateLineItem(item.id, "hours", Number(e.target.value) || 1)}
                            style={{
                              width: "100%",
                              padding: "8px",
                              border: "1px solid #e5e7eb",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              textAlign: "center",
                              minHeight: "44px",
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px" }}>
                          <input
                            type="number"
                            min="1"
                            value={item.guards}
                            onChange={(e) => updateLineItem(item.id, "guards", Number(e.target.value) || 1)}
                            style={{
                              width: "100%",
                              padding: "8px",
                              border: "1px solid #e5e7eb",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              textAlign: "center",
                              minHeight: "44px",
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px" }}>
                          <input
                            type="number"
                            min="1"
                            value={item.days}
                            onChange={(e) => updateLineItem(item.id, "days", Number(e.target.value) || 1)}
                            style={{
                              width: "100%",
                              padding: "8px",
                              border: "1px solid #e5e7eb",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              textAlign: "center",
                              minHeight: "44px",
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontWeight: "600", color: "#1e2247" }}>
                          {formatCurrency(calc?.itemTotal || 0)}
                        </td>
                        <td style={{ padding: "12px" }}>
                          {lineItems.length > 1 && (
                            <button
                              onClick={() => removeLineItem(item.id)}
                              style={{
                                padding: "8px",
                                border: "none",
                                borderRadius: "6px",
                                background: "#fef2f2",
                                color: "#ef4444",
                                cursor: "pointer",
                                minWidth: "44px",
                                minHeight: "44px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Discount & Quote Details */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "24px" }}>
            {/* Discount */}
            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px" }}>
              <h4 style={{ margin: "0 0 12px 0", fontSize: "0.875rem", fontWeight: "600", color: "#1e2247" }}>Discount</h4>
              <div style={{ display: "flex", gap: "12px" }}>
                <input
                  type="number"
                  min="0"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    minHeight: "44px",
                  }}
                />
                <select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                  style={{
                    padding: "10px 12px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    background: "white",
                    minHeight: "44px",
                  }}
                >
                  <option value="percent">%</option>
                  <option value="fixed">$</option>
                </select>
              </div>
            </div>

            {/* Valid Until */}
            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px" }}>
              <h4 style={{ margin: "0 0 12px 0", fontSize: "0.875rem", fontWeight: "600", color: "#1e2247" }}>Quote Valid Until</h4>
              <input
                type="date"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  minHeight: "44px",
                }}
              />
            </div>
          </div>

          {/* Notes */}
          <div style={{ marginBottom: "24px" }}>
            <h4 style={{ margin: "0 0 12px 0", fontSize: "0.875rem", fontWeight: "600", color: "#1e2247" }}>Notes / Terms</h4>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes, terms, or conditions for this quote..."
              rows={3}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #e5e7eb",
                borderRadius: "10px",
                fontSize: "0.95rem",
                resize: "vertical",
              }}
            />
          </div>

          {/* Totals Summary */}
          <div
            style={{
              background: "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
              padding: "24px",
              borderRadius: "16px",
            }}
          >
            <div style={{ display: "grid", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255, 255, 255, 0.8)" }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: "600" }}>{formatCurrency(calculations.subtotal)}</span>
              </div>
              {calculations.discountAmount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", color: "#10b981" }}>
                  <span>Discount</span>
                  <span style={{ fontWeight: "600" }}>-{formatCurrency(calculations.discountAmount)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255, 255, 255, 0.8)" }}>
                <span>GST (10%)</span>
                <span style={{ fontWeight: "600" }}>{formatCurrency(calculations.gst)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "12px",
                  borderTop: "2px solid rgba(253, 197, 26, 0.3)",
                  marginTop: "8px",
                }}
              >
                <span style={{ color: "#fdc51a", fontSize: "1.125rem", fontWeight: "600" }}>Total (inc. GST)</span>
                <span style={{ color: "#fdc51a", fontSize: "1.5rem", fontWeight: "700" }}>{formatCurrency(calculations.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            gap: "12px",
            flexShrink: 0,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onClose}
            disabled={isSaving}
            style={{
              flex: "1 1 140px",
              padding: "14px",
              background: "#e5e7eb",
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#374151",
              cursor: isSaving ? "not-allowed" : "pointer",
              opacity: isSaving ? 0.5 : 1,
              minHeight: "52px",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            style={{
              flex: "2 1 280px",
              padding: "14px",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "700",
              color: "white",
              cursor: isSaving ? "not-allowed" : "pointer",
              opacity: isSaving ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minHeight: "52px",
            }}
          >
            {isSaving ? (
              <>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid white",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.6s linear infinite",
                  }}
                />
                Generating Quote...
              </>
            ) : (
              <>
                <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Generate Quote & Preview PDF
              </>
            )}
          </button>
        </div>
      </div>

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


