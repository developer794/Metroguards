import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

function parseDateOrNull(input) {
  if (!input || typeof input !== "string") return null;
  const d = new Date(input);
  return Number.isNaN(d.getTime()) ? null : d;
}

export async function GET() {
  const me = await getUserFromCookie();
  const posts = await prisma.post.findMany({
    where: me
      ? { OR: [{ published: true }, { authorId: me.id }] }
      : { published: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      published: true,
      createdAt: true,
      coverImage: true, // optional if you want it in the response
    },
  });
  return NextResponse.json(posts);
}

export async function POST(req) {
  const me = await getUserFromCookie();
  if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let {
    title,
    content,
    published = false,
    slug,           // optional override
    excerpt,        // optional
    coverImage,     // optional (Cloudinary URL)
    tags,           // string "a, b" or array ["a","b"]
    publishDate,
    publishedDate,
  } = await req.json();

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
  }

  // normalize tags
  if (typeof tags === "string") {
    tags = tags.split(",").map(t => t.trim()).filter(Boolean);
  }
  if (!Array.isArray(tags)) tags = [];

  // parse date (supports "YYYY-MM-DD" from <input type=date>)
  const parsedPublishedDate = parseDateOrNull(publishDate ?? publishedDate);

  // unique slug
  const base = slug ? slugify(slug) : slugify(title);
  let unique = base || "post";
  let i = 1;
  while (await prisma.post.findUnique({ where: { slug: unique } })) {
    unique = `${base}-${i++}`;
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      slug: unique,
      published,
      excerpt: excerpt || null,
      coverImage: coverImage || null, // ✅ save Cloudinary URL
      tags,
      authorId: me.id,
      updatedAt: parsedPublishedDate,
    },
    select: { id: true, slug: true, coverImage: true },
  });

  return NextResponse.json({ message: "Created", post }, { status: 201 });
}
