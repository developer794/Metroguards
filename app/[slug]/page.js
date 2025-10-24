"use client";

import Layout from "@/components/layout/Layout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";

export default function BlogDetails() {
  const { slug } = useParams();        // <- use [slug], not id
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | error | done

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });

  useEffect(() => {
    if (!slug) return;
    (async () => {
      try {
        const res = await fetch(`/api/public-blogs/${slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data);
        setStatus("done");
      } catch (e) {
        console.error(e);
        setStatus("error");
      }
    })();
  }, [slug]);

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOGS">
      <div className="container py-5">
        {status === "loading" && <p>Loading…</p>}
        {status === "error" && <p className="text-danger">Post not found.</p>}

        {status === "done" && post && (
          <article className="mx-auto" style={{ maxWidth: 900 }}>
            {/* Title */}
            <h1 className="mb-3">{post.title}</h1>

            {/* Meta */}
            <div className="text-muted mb-4">
              <small>{fmtDate(post.createdAt)}</small>
              <br/>
              <small>By Admin</small>
              {/* {post.category && <> • <small>{post.category}</small></>} */}
            </div>

            {/* Cover image */}
            {post.coverImage && (
              <div className="mb-4" style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            {/* Content
                If your `content` is HTML you can render directly.
                If it's Markdown, use a parser (e.g., `react-markdown`).
             */}
            {typeof post.content === "string" ? (
            <div
                className="content-body" // use your own styles; remove "prose" if you don't use Tailwind Typography
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />
            ) : (
            <p>No content.</p>
            )}
          </article>
        )}
      </div>
    </Layout>
  );
}
