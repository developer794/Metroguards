import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    // Handle both runtime and static generation
    let searchParams;
    try {
      const url = new URL(req.url);
      searchParams = url.searchParams;
    } catch (error) {
      // During static generation, req.url might not be available
      searchParams = new URLSearchParams();
    }

    const limit = Math.max(1, Math.min(50, Number(searchParams.get("limit") || 12)));
    const page = Math.max(1, Number(searchParams.get("page") || 1));
    const skip = (page - 1) * limit;

    const where = { published: true };

    // Check if database is available before querying with timeout
    try {
      const connectPromise = prisma.$connect();
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      );
      await Promise.race([connectPromise, timeoutPromise]);
    } catch (dbError) {
      console.warn("Database connection failed, returning empty results:", dbError.message);
      return NextResponse.json({ 
        items: [], 
        page, 
        limit, 
        total: 0, 
        hasMore: false,
        warning: "Database unavailable" 
      });
    }

    // Use a transaction with timeout to avoid hanging
    const queryPromise = prisma.$transaction([
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
      prisma.post.count({ where })
    ]);
    
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Query timeout')), 8000)
    );
    
    const [items, total] = await Promise.race([queryPromise, timeoutPromise]);

    const hasMore = skip + items.length < total;

    return NextResponse.json({ items, page, limit, total, hasMore });
  } catch (err) {
    console.error("❌ API /public-blogs error:", err);

    // Always return valid JSON, even on errors
    return NextResponse.json(
      {
        items: [],
        page: 1,
        limit: 0,
        total: 0,
        hasMore: false,
        error: err.message,
      },
      { status: 500 }
    );
  } finally {
    // Ensure connection is properly closed
    await prisma.$disconnect();
  }
}
