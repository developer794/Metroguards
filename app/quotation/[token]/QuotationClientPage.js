"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Metro Guards Rates for display
const SERVICE_RATES = [
  { type: "Weekday Day (6am-6pm)", rate: 40.7, icon: "☀️" },
  { type: "Weekday Night (6pm-6am)", rate: 46.0, icon: "🌙" },
  { type: "Saturday", rate: 59.5, icon: "📅" },
  { type: "Sunday", rate: 79.5, icon: "🔴" },
  { type: "Public Holiday", rate: 95.0, icon: "🎉" },
  { type: "New Year's Eve", rate: 110.0, icon: "🎆" },
];

// Industry client examples for trust signals
const INDUSTRY_CLIENTS = {
  construction: ["Qanstruct", "John Holland", "CPB Contractors"],
  retail: ["Costco", "Aldi", "Coles", "Westfield"],
  healthcare: ["Alfred Health", "St Vincent's", "Epworth"],
  corporate: ["NAB", "Telstra", "BHP"],
  events: ["MCG", "Rod Laver Arena", "MCEC"],
  education: ["University of Melbourne", "RMIT", "Monash"],
};

export default function QuotationClientPage({ token }) {
  const [quotation, setQuotation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accepting, setAccepting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState(null);

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount) return "Quote on Request";
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount);
  };

  // Format date
  const formatDate = (date) => {
    if (!date) return "TBD";
    return new Date(date).toLocaleDateString("en-AU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Load quotation data
  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        // In a real implementation, you would have an API route that:
        // 1. Validates the token
        // 2. Returns the quotation data
        // 3. Marks the quotation as "viewed"
        
        // For now, we'll simulate with a fetch to an API
        const res = await fetch(`/api/quotation/view?token=${token}`);
        
        if (!res.ok) {
          if (res.status === 404) {
            setError("This quotation link has expired or is invalid.");
          } else {
            setError("Unable to load quotation. Please try again.");
          }
          return;
        }

        const data = await res.json();
        setQuotation(data.quotation);
      } catch (err) {
        console.error("Error loading quotation:", err);
        setError("Unable to load quotation. Please try again or contact us directly.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchQuotation();
    }
  }, [token]);

  // Handle accept and book
  const handleAcceptQuote = async () => {
    if (!quotation) return;

    setAccepting(true);
    try {
      const res = await fetch(`/api/quotation/accept`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (data.success) {
        setAccepted(true);
        setConfirmationNumber(data.confirmationNumber);
      } else {
        alert(data.error || "Failed to accept quotation. Please try again.");
      }
    } catch (err) {
      console.error("Error accepting quotation:", err);
      alert("An error occurred. Please try again or contact us directly.");
    } finally {
      setAccepting(false);
    }
  };

  // Get industry key for client examples
  const getIndustryKey = (industry) => {
    const mapping = {
      "Construction": "construction",
      "Construction & Infrastructure": "construction",
      "Retail": "retail",
      "Retail & Hospitality": "retail",
      "Healthcare": "healthcare",
      "Healthcare & Aged Care": "healthcare",
      "Corporate": "corporate",
      "Corporate & Commercial": "corporate",
      "Events": "events",
      "Events & Entertainment": "events",
      "Education": "education",
      "Education & Government": "education",
    };
    return mapping[industry] || "corporate";
  };

  // Loading state
  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f5f5 0%, #e8eaf0 100%)",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: "60px",
            height: "60px",
            border: "4px solid #e5e7eb",
            borderTopColor: "#fdc51a",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 20px",
          }}></div>
          <p style={{ color: "#1e2247", fontSize: "18px", fontWeight: "600" }}>
            Loading your quotation...
          </p>
          <style jsx>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f5f5 0%, #e8eaf0 100%)",
        padding: "20px",
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "50px",
          textAlign: "center",
          maxWidth: "500px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            background: "#fef2f2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 25px",
          }}>
            <span style={{ fontSize: "40px" }}>⚠️</span>
          </div>
          <h1 style={{ color: "#1e2247", fontSize: "24px", marginBottom: "15px" }}>
            Quote Not Available
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "30px", lineHeight: "1.6" }}>
            {error}
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:1300731173"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fdc51a",
                color: "#1e2247",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              📞 1300 731 173
            </a>
            <Link
              href="/get-quotation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#1e2247",
                color: "#fdc51a",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Request New Quote →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Success state - Booking confirmed
  if (accepted) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
        padding: "20px",
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "50px",
          textAlign: "center",
          maxWidth: "550px",
          boxShadow: "0 20px 60px rgba(16, 185, 129, 0.2)",
          border: "3px solid #10b981",
        }}>
          <div style={{
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
          }}>
            <span style={{ fontSize: "50px" }}>✓</span>
          </div>
          
          <h1 style={{ color: "#166534", fontSize: "32px", marginBottom: "15px", fontWeight: "800" }}>
            Booking Confirmed!
          </h1>
          
          <p style={{ color: "#047857", fontSize: "18px", marginBottom: "30px" }}>
            Your security service has been booked successfully
          </p>

          <div style={{
            background: "#f0fdf4",
            borderRadius: "16px",
            padding: "25px",
            marginBottom: "30px",
          }}>
            <p style={{ color: "#166534", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>
              Confirmation Number
            </p>
            <p style={{ color: "#166534", fontSize: "36px", fontWeight: "800", letterSpacing: "3px", margin: 0 }}>
              {confirmationNumber}
            </p>
          </div>

          <div style={{
            background: "#f8fafc",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "30px",
            textAlign: "left",
          }}>
            <h3 style={{ color: "#1e2247", fontSize: "16px", marginBottom: "15px" }}>
              📋 What Happens Next?
            </h3>
            <ol style={{ color: "#4a5568", margin: 0, paddingLeft: "20px", lineHeight: "2" }}>
              <li>You'll receive a confirmation email shortly</li>
              <li>Our team will contact you to confirm site details</li>
              <li>Guards will be assigned to your booking</li>
              <li>You'll receive a reminder 24 hours before</li>
            </ol>
          </div>

          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "25px" }}>
            Need to make changes? Contact us at least 24 hours before your service starts.
          </p>

          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:1300731173"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fdc51a",
                color: "#1e2247",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              📞 1300 731 173
            </a>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#1e2247",
                color: "#fdc51a",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Main quotation view
  const industryKey = quotation ? getIndustryKey(quotation.industry) : "corporate";
  const industryClients = INDUSTRY_CLIENTS[industryKey] || [];
  const costBreakdown = quotation?.costBreakdown ? JSON.parse(quotation.costBreakdown) : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f5f5 0%, #e8eaf0 100%)",
    }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #1e2247 0%, #252958 100%)",
        padding: "20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}>
          <Link href="/">
            <img
              src="/assets/img/logo/metroguards logo 2.png"
              alt="Metro Guards"
              style={{ height: "50px" }}
            />
          </Link>
          <a
            href="tel:1300731173"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fdc51a",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            <span style={{ fontSize: "20px" }}>📞</span>
            1300 731 173
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "30px 20px", maxWidth: "900px", margin: "0 auto" }}>
        {quotation && (
          <>
            {/* Quote Header */}
            <div style={{
              background: "linear-gradient(135deg, #1e2247 0%, #2a3458 100%)",
              borderRadius: "24px",
              padding: "40px 30px",
              marginBottom: "30px",
              color: "white",
              textAlign: "center",
              boxShadow: "0 15px 50px rgba(30, 34, 71, 0.3)",
            }}>
              <p style={{ color: "#fdc51a", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>
                Security Quotation
              </p>
              <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", marginBottom: "15px", fontWeight: "800" }}>
                Hello, {quotation.name}!
              </h1>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "10px" }}>
                Here's your personalized quote for <strong style={{ color: "#fdc51a" }}>{quotation.service}</strong>
              </p>
              {quotation.companyName && (
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                  {quotation.companyName} • {quotation.industry}
                </p>
              )}
            </div>

            {/* Pricing Card */}
            {quotation.grandTotal && (
              <div style={{
                background: "#ffffff",
                borderRadius: "24px",
                overflow: "hidden",
                marginBottom: "30px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                border: "3px solid #fdc51a",
              }}>
                <div style={{
                  background: "linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)",
                  padding: "35px",
                  textAlign: "center",
                }}>
                  <p style={{ color: "#1e2247", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px", fontWeight: "600" }}>
                    Your Total Investment (inc. GST)
                  </p>
                  <p style={{ color: "#1e2247", fontSize: "clamp(36px, 8vw, 56px)", fontWeight: "800", margin: 0 }}>
                    {formatCurrency(quotation.grandTotal)}
                  </p>
                </div>
                
                <div style={{ padding: "30px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "20px", marginBottom: "25px" }}>
                    {quotation.startDate && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "5px" }}>Start Date</p>
                        <p style={{ color: "#1e2247", fontWeight: "700", fontSize: "14px", margin: 0 }}>
                          {formatDate(quotation.startDate)}
                        </p>
                      </div>
                    )}
                    {quotation.endDate && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "5px" }}>End Date</p>
                        <p style={{ color: "#1e2247", fontWeight: "700", fontSize: "14px", margin: 0 }}>
                          {formatDate(quotation.endDate)}
                        </p>
                      </div>
                    )}
                    {quotation.guardsRequired && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "5px" }}>Guards</p>
                        <p style={{ color: "#1e2247", fontWeight: "700", fontSize: "18px", margin: 0 }}>
                          {quotation.guardsRequired}
                        </p>
                      </div>
                    )}
                    {quotation.hoursPerWeek && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "5px" }}>Hours/Week</p>
                        <p style={{ color: "#1e2247", fontWeight: "700", fontSize: "18px", margin: 0 }}>
                          {quotation.hoursPerWeek}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Cost Breakdown */}
                  <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                      <span style={{ color: "#6b7280" }}>Subtotal (ex. GST)</span>
                      <span style={{ color: "#1e2247", fontWeight: "600" }}>{formatCurrency(quotation.estimatedCost)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                      <span style={{ color: "#6b7280" }}>GST (10%)</span>
                      <span style={{ color: "#1e2247", fontWeight: "600" }}>{formatCurrency(quotation.gstAmount)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 0", background: "#f0fdf4", margin: "10px -30px -30px -30px", padding: "20px 30px" }}>
                      <span style={{ color: "#166534", fontWeight: "700", fontSize: "18px" }}>Total</span>
                      <span style={{ color: "#166534", fontWeight: "800", fontSize: "24px" }}>{formatCurrency(quotation.grandTotal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Rate Card */}
            <div style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}>
              <h2 style={{ color: "#1e2247", fontSize: "20px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                💰 Metro Guards Rate Card
              </h2>
              <div style={{ display: "grid", gap: "10px" }}>
                {SERVICE_RATES.map((rate) => (
                  <div
                    key={rate.type}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px",
                      background: "#f8fafc",
                      borderRadius: "10px",
                    }}
                  >
                    <span style={{ color: "#4a5568", display: "flex", alignItems: "center", gap: "10px" }}>
                      <span>{rate.icon}</span>
                      {rate.type}
                    </span>
                    <span style={{ color: "#1e2247", fontWeight: "700" }}>
                      ${rate.rate.toFixed(2)}/hr
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "15px" }}>
                <strong>Overtime:</strong> First 2 hours at 1.5×, beyond 2 hours at 2× base rate.
                All prices exclude GST.
              </p>
            </div>

            {/* Industry Trust Signal */}
            {industryClients.length > 0 && (
              <div style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                marginBottom: "30px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              }}>
                <h2 style={{ color: "#1e2247", fontSize: "20px", marginBottom: "15px" }}>
                  🏢 Trusted by Industry Leaders
                </h2>
                <p style={{ color: "#6b7280", marginBottom: "15px" }}>
                  We provide security services to leading {quotation.industry} organizations:
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {industryClients.map((client) => (
                    <span
                      key={client}
                      style={{
                        background: "#f0fdf4",
                        color: "#166534",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            <div style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}>
              <h2 style={{ color: "#1e2247", fontSize: "20px", marginBottom: "15px" }}>
                ✅ Our Certifications
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
                <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ color: "#166534", fontSize: "16px", marginBottom: "5px" }}>ISO 9001</h3>
                  <p style={{ color: "#047857", fontSize: "13px", margin: 0 }}>Quality Management System</p>
                </div>
                <div style={{ background: "#ecfdf5", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ color: "#047857", fontSize: "16px", marginBottom: "5px" }}>ISO 14001</h3>
                  <p style={{ color: "#059669", fontSize: "13px", margin: 0 }}>Environmental Management</p>
                </div>
                <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ color: "#0369a1", fontSize: "16px", marginBottom: "5px" }}>ISO 45001</h3>
                  <p style={{ color: "#0284c7", fontSize: "13px", margin: 0 }}>Occupational Health & Safety</p>
                </div>
              </div>
            </div>

            {/* Legal Terms */}
            <div style={{
              background: "#fffbeb",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              border: "2px solid #fcd34d",
            }}>
              <h2 style={{ color: "#92400e", fontSize: "18px", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                ⚠️ Important Terms
              </h2>
              <div style={{ fontSize: "14px", color: "#78350f" }}>
                <p style={{ marginBottom: "15px" }}>
                  <strong>$25,000 Placement Fee:</strong> Applies if you directly employ any guard introduced by Metro Guards within 12 months.
                </p>
                <p style={{ marginBottom: "15px" }}>
                  <strong>7-Day Dispute Window:</strong> Invoice disputes must be raised within 7 business days. All invoices due within 14 days.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>24-Hour Cancellation:</strong> Cancellations under 24 hours incur a 4-hour minimum charge.
                </p>
              </div>
            </div>

            {/* Accept Button */}
            <div style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3)",
            }}>
              <h2 style={{ color: "white", fontSize: "24px", marginBottom: "15px" }}>
                Ready to Accept This Quote?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "25px" }}>
                Click below to confirm your booking. Our team will contact you with next steps.
              </p>
              <button
                onClick={handleAcceptQuote}
                disabled={accepting || quotation.isApproved}
                style={{
                  background: quotation.isApproved ? "#6b7280" : "#ffffff",
                  color: quotation.isApproved ? "#ffffff" : "#10b981",
                  border: "none",
                  padding: "18px 50px",
                  fontSize: "18px",
                  fontWeight: "800",
                  borderRadius: "12px",
                  cursor: quotation.isApproved ? "not-allowed" : accepting ? "wait" : "pointer",
                  boxShadow: quotation.isApproved ? "none" : "0 6px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {quotation.isApproved ? (
                  <>✓ Already Accepted</>
                ) : accepting ? (
                  <>
                    <span style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid #10b981",
                      borderTopColor: "transparent",
                      borderRadius: "50%",
                      animation: "spin 0.6s linear infinite",
                    }}></span>
                    Processing...
                  </>
                ) : (
                  <>✓ ACCEPT & BOOK NOW</>
                )}
              </button>
              {!quotation.isApproved && (
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginTop: "20px" }}>
                  Or call us at <strong>1300 731 173</strong>
                </p>
              )}
            </div>
          </>
        )}

        {/* If no quotation data yet (fallback) */}
        {!quotation && !loading && !error && (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <p style={{ color: "#6b7280" }}>Loading quotation details...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: "linear-gradient(135deg, #1e2247 0%, #252958 100%)",
        padding: "40px 20px",
        textAlign: "center",
        color: "white",
        marginTop: "50px",
      }}>
        <p style={{ color: "#fdc51a", fontWeight: "700", marginBottom: "10px" }}>
          Metro Guards Security Services
        </p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginBottom: "5px" }}>
          📞 1300 731 173 • ✉️ admin@metroguards.com.au
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "15px" }}>
          ISO 9001 | ISO 14001 | ISO 45001 Certified<br/>
          © {new Date().getFullYear()} Metro Guards. All rights reserved.
        </p>
      </footer>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


