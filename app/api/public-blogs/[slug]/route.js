import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(_req, { params }) {
  const { slug } = params;

  const post = await prisma.post.findFirst({
    where: { slug, published: true },
    select: {
      id: true,
      title: true,
      slug: true,
      createdAt: true,
      excerpt: true,
      coverImage: true,
      content: true,   // 👈 include full content for details page
      // category: true, author: true, // include if you have these fields
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
