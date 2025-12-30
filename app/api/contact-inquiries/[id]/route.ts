import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// PATCH - Update inquiry status
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const body = await request.json();
    const { status } = body;

    if (!status || !['new', 'contacted', 'resolved'].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status" },
        { status: 400 }
      );
    }

    const updatedInquiry = await prisma.contactInquiry.update({
      where: { id },
      data: { status }
    });

    return NextResponse.json({ success: true, inquiry: updatedInquiry });
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return NextResponse.json(
      { success: false, error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}

// DELETE - Delete inquiry
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    await prisma.contactInquiry.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return NextResponse.json(
      { success: false, error: "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}

