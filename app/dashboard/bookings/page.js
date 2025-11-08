import prisma from "@/lib/prisma";
import ContactInquiriesClient from "./ContactInquiriesClient";

export default async function ContactInquiriesPage() {
  // Fetch all contact inquiries
  const inquiries = await prisma.contactInquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Serialize dates for client component
  const serializedInquiries = inquiries.map(inquiry => ({
    ...inquiry,
    createdAt: inquiry.createdAt.toISOString(),
    updatedAt: inquiry.updatedAt.toISOString()
  }));

  // Calculate stats
  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === "new").length,
    contacted: inquiries.filter(i => i.status === "contacted").length,
    resolved: inquiries.filter(i => i.status === "resolved").length
  };

  return <ContactInquiriesClient inquiries={serializedInquiries} stats={stats} />;
}

