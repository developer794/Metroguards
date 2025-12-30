import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// Update quotation status
export async function PATCH(request: Request, context: RouteContext) {
  const { id: idStr } = await context.params;
  const id = Number(idStr);
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
export async function DELETE(request: Request, context: RouteContext) {
  const { id: idStr } = await context.params;
  const id = Number(idStr);

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
