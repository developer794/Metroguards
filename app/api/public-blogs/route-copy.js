import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = Math.max(1, Math.min(50, Number(searchParams.get("limit") || 12)));
  const page  = Math.max(1, Number(searchParams.get("page") || 1));
  const skip  = (page - 1) * limit;

  const where = { published: true };

  const [items, total] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { createdAt: "asc" },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        createdAt: true,
        excerpt: true,
        coverImage: true,
      },
    }),
    prisma.post.count({ where }),
  ]);

  const hasMore = skip + items.length < total;
  return NextResponse.json({ items, page, limit, total, hasMore });
}
