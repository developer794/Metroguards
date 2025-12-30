"use client";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(amount);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function QuotationPDFPreview({ quoteData, quotation, onClose, onDownload, isDownloading }) {
  const printQuote = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        padding: "16px",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#f8fafc",
          borderRadius: "16px",
          maxWidth: "900px",
          width: "100%",
          maxHeight: "95vh",
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.4)",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div
          style={{
            background: "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg style={{ width: "24px", height: "24px", color: "#fdc51a" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span style={{ color: "white", fontWeight: "600" }}>Quote Preview</span>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={printQuote}
              style={{
                padding: "10px 20px",
                border: "2px solid #fdc51a",
                borderRadius: "8px",
                background: "transparent",
                color: "#fdc51a",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.875rem",
                minHeight: "44px",
              }}
            >
              <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
            <button
              onClick={onDownload}
              disabled={isDownloading}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                background: "#fdc51a",
                color: "#1e2247",
                fontWeight: "600",
                cursor: isDownloading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.875rem",
                opacity: isDownloading ? 0.7 : 1,
                minHeight: "44px",
              }}
            >
              {isDownloading ? (
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid #1e2247",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.6s linear infinite",
                  }}
                />
              ) : (
                <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              Download PDF
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                cursor: "pointer",
                minWidth: "44px",
                minHeight: "44px",
              }}
            >
              <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div style={{ flex: 1, overflow: "auto", padding: "24px", background: "#e5e7eb" }}>
          <div
            id="quote-pdf-content"
            style={{
              background: "white",
              maxWidth: "800px",
              margin: "0 auto",
              padding: "48px",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
            }}
          >
            {/* Header with Logo */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "24px" }}>
              <div
                style={{
                  background: "#f4f4f4",
                  padding: "12px 16px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/assets/img/logo/metroguards logo 2.png"
                  alt="Metro Guards Logo"
                  style={{ maxWidth: "180px", height: "auto" }}
                />
              </div>
              <div style={{ textAlign: "right" }}>
                <h1 style={{ margin: "0 0 8px 0", fontSize: "2rem", fontWeight: "700", color: "#1e2247" }}>QUOTATION</h1>
                <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                  <div>Quote #: Q-{quotation?.id || "0000"}</div>
                  <div>Date: {formatDate(new Date())}</div>
                  <div>Valid Until: {formatDate(quoteData?.validUntil)}</div>
                </div>
              </div>
            </div>

            {/* Company & Client Info */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px", marginBottom: "40px" }}>
              <div>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.5px" }}>From</h3>
                <div style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  <strong style={{ color: "#1e2247" }}>Metro Guards Security Services</strong>
                  <br />
                  Melbourne, Victoria
                  <br />
                  Phone: 1300 XXX XXX
                  <br />
                  Email: info@metroguards.com.au
                </div>
              </div>
              <div>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.5px" }}>To</h3>
                <div style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  <strong style={{ color: "#1e2247" }}>{quotation?.name}</strong>
                  <br />
                  {quotation?.email}
                  <br />
                  {quotation?.phone && <>{quotation?.phone}<br /></>}
                  {quotation?.industry && <span style={{ color: "#6b7280" }}>Industry: {quotation?.industry}</span>}
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <div style={{ marginBottom: "32px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#1e2247" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "0.75rem", fontWeight: "600", color: "#fdc51a", textTransform: "uppercase" }}>Description</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#fdc51a", textTransform: "uppercase" }}>Rate</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#fdc51a", textTransform: "uppercase" }}>Qty</th>
                    <th style={{ padding: "14px 16px", textAlign: "right", fontSize: "0.75rem", fontWeight: "600", color: "#fdc51a", textTransform: "uppercase" }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {quoteData?.lineItems?.map((item, index) => (
                    <tr key={item.id || index} style={{ borderBottom: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "16px", fontSize: "0.9rem" }}>
                        <div style={{ fontWeight: "500", color: "#1e2247" }}>{item.description || "Security Service"}</div>
                        <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "4px" }}>
                          {item.type || `${item.guards} guard(s) × ${item.hours}hrs × ${item.days} day(s)`}
                        </div>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center", fontSize: "0.9rem", color: "#374151" }}>
                        {formatCurrency(item.rate)}/hr
                      </td>
                      <td style={{ padding: "16px", textAlign: "center", fontSize: "0.9rem", color: "#374151" }}>
                        {item.hours * item.guards * item.days}
                      </td>
                      <td style={{ padding: "16px", textAlign: "right", fontSize: "0.9rem", fontWeight: "600", color: "#1e2247" }}>
                        {formatCurrency(item.itemTotal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
              <div style={{ width: "300px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ color: "#6b7280" }}>Subtotal</span>
                  <span style={{ fontWeight: "600", color: "#1e2247" }}>{formatCurrency(quoteData?.subtotal)}</span>
                </div>
                {quoteData?.discount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e5e7eb", color: "#10b981" }}>
                    <span>Discount</span>
                    <span style={{ fontWeight: "600" }}>-{formatCurrency(quoteData?.discount)}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ color: "#6b7280" }}>GST (10%)</span>
                  <span style={{ fontWeight: "600", color: "#1e2247" }}>{formatCurrency(quoteData?.gst)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    background: "#1e2247",
                    margin: "8px -16px -8px",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ color: "#fdc51a", fontWeight: "600", fontSize: "1.1rem" }}>Total (AUD)</span>
                  <span style={{ color: "#fdc51a", fontWeight: "700", fontSize: "1.25rem" }}>{formatCurrency(quoteData?.total)}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            {quoteData?.notes && (
              <div style={{ marginBottom: "32px", padding: "20px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                <h4 style={{ margin: "0 0 8px 0", fontSize: "0.875rem", fontWeight: "600", color: "#1e2247" }}>Notes & Terms</h4>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "#6b7280", whiteSpace: "pre-wrap" }}>{quoteData?.notes}</p>
              </div>
            )}

            {/* Footer */}
            <div style={{ borderTop: "2px solid #1e2247", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "0.875rem", color: "#6b7280" }}>
                Thank you for considering Metro Guards for your security needs.
              </p>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#9ca3af" }}>
                This quote is valid until {formatDate(quoteData?.validUntil)}. For questions, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @media print {
          #quote-pdf-content {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}


