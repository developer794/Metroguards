import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(_req, { params }) {
  try {
    const { slug } = params;

    // Add timeout to prevent hanging
    const queryPromise = prisma.post.findFirst({
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

    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Query timeout')), 8000)
    );

    const post = await Promise.race([queryPromise, timeoutPromise]);

    if (!post) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    console.error("❌ API /public-blogs/[slug] error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to fetch blog post" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
