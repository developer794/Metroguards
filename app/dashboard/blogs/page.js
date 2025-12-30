import prisma from "@/lib/prisma";
import BlogsClientPage from "./BlogsClientPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blogs | Metro Guards Admin",
  description: "Manage blog posts and content",
};

export default async function BlogsPage() {
  // user auth is handled in dashboard/layout via redirect
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    select: { 
      id: true, 
      title: true, 
      excerpt: true,
      coverImage: true,
      published: true, 
      createdAt: true, 
      slug: true,
      tags: true
    },
  });

  // Serialize dates for client component
  const serializedPosts = posts.map(post => ({
    ...post,
    createdAt: post.createdAt.toISOString()
  }));

  const publishedCount = posts.filter(p => p.published).length;
  const draftCount = posts.filter(p => !p.published).length;

  return (
    <BlogsClientPage 
      posts={serializedPosts}
      totalCount={posts.length}
      publishedCount={publishedCount}
      draftCount={draftCount}
    />
  );
}
