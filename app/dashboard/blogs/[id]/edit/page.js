// app/dashboard/blogs/[id]/edit/page.jsx
import prisma from "@/lib/prisma";
import EditBlogForm from "../../EditBlogForm";
import EditPageHeader from "./_components/EditPageHeader";

export default async function EditBlogPage({ params }) {
  const id = Number(params.id);
  const post = await prisma.post.findUnique({
    where: { id },
    select: { id: true, title: true, content: true, published: true, coverImage: true, updatedAt:true },
  });
  
  if (!post) {
    return (
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '64px 32px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(220, 53, 69, 0.1)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <svg style={{ width: '40px', height: '40px', color: '#dc3545' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e2247', marginBottom: '12px' }}>
          Blog Post Not Found
        </h3>
        <p style={{ color: '#6c757d', marginBottom: '24px', fontSize: '0.95rem' }}>
          The blog post you're looking for doesn't exist or has been deleted.
        </p>
      </div>
    );
  }

  const safePost = {
    ...post,
    updatedAt: post.updatedAt.toISOString(),
  };

  return (
    <div className="space-y-8">
      <EditPageHeader postTitle={post.title} />
      <EditBlogForm post={safePost} redirectTo="/dashboard/blogs" />
    </div>
  );
}
