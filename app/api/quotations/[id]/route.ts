import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Update quotation status
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const { status } = await request.json();

  if (!status) {
    return NextResponse.json({ error: "Status is required" }, { status: 400 });
  }

  try {
    const updatedQuotation = await prisma.quotation.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json(updatedQuotation);
  } catch (error) {
    console.error("Error updating quotation status:", error);
    return NextResponse.json({ error: "Failed to update quotation status" }, { status: 500 });
  }
}

// Delete quotation
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);

  try {
    await prisma.quotation.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Quotation deleted successfully" });
  } catch (error) {
    console.error("Error deleting quotation:", error);
    return NextResponse.json({ error: "Failed to delete quotation" }, { status: 500 });
  }
}

