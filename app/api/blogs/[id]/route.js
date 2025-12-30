import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth"; // your helper that reads JWT

export async function GET(_req, { params }) {
  const id = Number(params.id);
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

function parseDateOrNull(input) {
  if (!input || typeof input !== "string") return null;
  const d = new Date(input);
  return Number.isNaN(d.getTime()) ? null : d;
}

export async function PUT(req, { params }) {
  const me = await getUserFromCookie();
  if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = Number(params.id);
  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (existing.authorId !== me.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { title, content, published, coverImage,updatedAt } = await req.json();
  const data = {};
  if (title !== undefined) data.title = title;
  if (content !== undefined) data.content = content;
  if (typeof published === "boolean") data.published = published;
  if (coverImage !== undefined) data.coverImage = coverImage;
  const parsedPublishedDate = parseDateOrNull(updatedAt);
  data.updatedAt=parsedPublishedDate;


  await prisma.post.update({ where: { id }, data });
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(_req, { params }) {
  const me = await getUserFromCookie();
  if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = Number(params.id);
  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (existing.authorId !== me.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
