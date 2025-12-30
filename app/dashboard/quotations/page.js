import prisma from "@/lib/prisma";
import QuotationsPageEnhanced from "./QuotationsPageEnhanced";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Quotation Requests | Metro Guards Admin",
  description: "Manage and respond to quotation requests from customers",
};

export default async function QuotationsPage() {
  let quotations = [];
  let error = null;

  try {
    // Fetch all quotations with pagination support
    quotations = await prisma.quotation.findMany({
      orderBy: { createdAt: "desc" },
      take: 100, // Limit for performance
    });

    // Serialize dates for client component
    quotations = quotations.map((quotation) => ({
      ...quotation,
      createdAt: quotation.createdAt.toISOString(),
      updatedAt: quotation.updatedAt.toISOString(),
    }));
  } catch (e) {
    console.error("Error fetching quotations:", e);
    error = { message: e.message || "Failed to load quotations" };
  }

  // Calculate stats
  const stats = {
    total: quotations.length,
    new: quotations.filter((q) => q.status === "new").length,
    contacted: quotations.filter((q) => q.status === "contacted").length,
    approved: quotations.filter((q) => q.isApproved).length,
    resolved: quotations.filter((q) => q.status === "resolved").length,
  };

  return (
    <QuotationsPageEnhanced
      initialQuotations={quotations}
      initialStats={stats}
      error={error}
    />
  );
}

