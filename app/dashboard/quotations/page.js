import prisma from "@/lib/prisma";
import QuotationsClient from "./QuotationsClient";

export default async function QuotationsPage() {
  // Fetch all quotations
  const quotations = await prisma.quotation.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Serialize dates for client component
  const serializedQuotations = quotations.map(quotation => ({
    ...quotation,
    createdAt: quotation.createdAt.toISOString(),
    updatedAt: quotation.updatedAt.toISOString(),
  }));

  // Calculate stats
  const stats = {
    total: quotations.length,
    new: quotations.filter(q => q.status === "new").length,
    contacted: quotations.filter(q => q.status === "contacted").length,
    resolved: quotations.filter(q => q.status === "resolved").length,
  };

  return (
    <QuotationsClient initialQuotations={serializedQuotations} initialStats={stats} />
  );
}

