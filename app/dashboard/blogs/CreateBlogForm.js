"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function CreateBlogForm({ redirectTo = "/dashboard/blogs" }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState(""); // URL after upload
  const [imagePreview, setImagePreview] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState(""); // HTML from TipTap
  const [published, setPublished] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [publishDate,setPublishDate]=useState("");

  const autoSlug = () => setSlug((prev) => prev || slugify(title));

  const handleImage = async (file) => {
    if (!file || !CLOUD || !PRESET) {
      alert("Cloudinary not configured.");
      return;
    }
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Upload failed");
      setCoverImage(data.secure_url);
      setImagePreview(data.secure_url);
    } catch (e) {
      alert(e.message);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || undefined, // server will auto-unique it
          excerpt: excerpt || undefined,
          coverImage: coverImage || undefined,
          tags, // comma-separated, server normalizes
          content,
          published,
          publishDate

        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create post");
      router.replace(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 max-w-7xl "
    style={{marginBottom: '20px', marginRight: '20px'}}>
      {/* Basic Information Section */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid rgba(253, 197, 26, 0.2)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e2247', margin: 0 }}>
            Basic Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#1e2247', 
              marginBottom: '8px' 
            }}>
              Title <span style={{ color: '#dc3545' }}>*</span>
            </label>
            <input
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '1rem',
                borderRadius: '12px',
                border: '2px solid rgba(30, 34, 71, 0.15)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#fdc51a';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                e.target.style.boxShadow = 'none';
                autoSlug();
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your blog post title"
              required
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#1e2247', 
              marginBottom: '8px' 
            }}>
              Slug (URL) <span style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '400' }}>- Optional</span>
            </label>
            <input
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.9rem',
                borderRadius: '12px',
                border: '2px solid rgba(30, 34, 71, 0.15)',
                transition: 'all 0.3s ease',
                outline: 'none',
                fontFamily: 'monospace',
                background: 'rgba(30, 34, 71, 0.02)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#fdc51a';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                e.target.style.boxShadow = 'none';
              }}
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
              placeholder="auto-generated-from-title"
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#1e2247', 
              marginBottom: '8px' 
            }}>
              Publish Date
            </label>
            <input
              type="date"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.9rem',
                borderRadius: '12px',
                border: '2px solid rgba(30, 34, 71, 0.15)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#fdc51a';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                e.target.style.boxShadow = 'none';
              }}
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#1e2247', 
              marginBottom: '8px' 
            }}>
              Excerpt (Summary) <span style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '400' }}>- Optional</span>
            </label>
            <textarea
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.9rem',
                borderRadius: '12px',
                border: '2px solid rgba(30, 34, 71, 0.15)',
                transition: 'all 0.3s ease',
                outline: 'none',
                minHeight: '80px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#fdc51a';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                e.target.style.boxShadow = 'none';
              }}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Write a brief summary of your blog post for cards and SEO..."
            />
          </div>

          <div className="md:col-span-2">
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#1e2247', 
              marginBottom: '8px' 
            }}>
              Tags <span style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '400' }}>- Comma separated</span>
            </label>
            <input
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.9rem',
                borderRadius: '12px',
                border: '2px solid rgba(30, 34, 71, 0.15)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#fdc51a';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(30, 34, 71, 0.15)';
                e.target.style.boxShadow = 'none';
              }}
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="security, tips, guards, events"
            />
          </div>
        </div>
      </div>

      {/* Cover Image Section */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid rgba(253, 197, 26, 0.2)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e2247', margin: 0 }}>
            Cover Image
          </h2>
        </div>

        <div>
          <label style={{
            display: 'block',
            width: '100%',
            padding: '32px',
            border: '2px dashed rgba(30, 34, 71, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: imagePreview ? 'transparent' : 'rgba(253, 197, 26, 0.03)'
          }}
          onMouseEnter={(e) => {
            if (!imagePreview) {
              e.currentTarget.style.borderColor = '#fdc51a';
              e.currentTarget.style.background = 'rgba(253, 197, 26, 0.08)';
            }
          }}
          onMouseLeave={(e) => {
            if (!imagePreview) {
              e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
              e.currentTarget.style.background = 'rgba(253, 197, 26, 0.03)';
            }
          }}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImage(e.target.files?.[0])}
              style={{ display: 'none' }}
            />
            {uploading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  border: '4px solid rgba(253, 197, 26, 0.2)',
                  borderTopColor: '#fdc51a',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <p style={{ color: '#6c757d', fontSize: '0.9rem', fontWeight: '500' }}>Uploading image...</p>
              </div>
            ) : imagePreview ? (
              <div style={{ position: 'relative' }}>
                <img 
                  src={imagePreview} 
                  alt="Cover preview" 
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(30, 34, 71, 0.15)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '8px 16px',
                  background: 'rgba(30, 34, 71, 0.9)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Click to change
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15) 0%, rgba(253, 197, 26, 0.05) 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '32px', height: '32px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: '600', color: '#1e2247', marginBottom: '4px' }}>
                    Click to upload cover image
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            )}
          </label>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid rgba(253, 197, 26, 0.2)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e2247', margin: 0 }}>
            Blog Content
          </h2>
        </div>

        <div>
          <RichTextEditor value={content} onChange={setContent} />
        </div>
      </div>

      {/* Publishing Options & Actions */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid rgba(253, 197, 26, 0.2)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{ width: '20px', height: '20px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e2247', margin: 0 }}>
            Publishing Options
          </h2>
        </div>

        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          background: 'rgba(253, 197, 26, 0.05)',
          borderRadius: '12px',
          border: '2px solid rgba(253, 197, 26, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginBottom: '24px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(253, 197, 26, 0.1)';
          e.currentTarget.style.borderColor = '#fdc51a';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(253, 197, 26, 0.05)';
          e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
        }}>
          <input 
            type="checkbox" 
            checked={published} 
            onChange={(e) => setPublished(e.target.checked)}
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              accentColor: '#fdc51a'
            }}
          />
          <div>
            <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1e2247', margin: 0 }}>
              Publish immediately
            </p>
            <p style={{ fontSize: '0.85rem', color: '#6c757d', margin: 0, marginTop: '4px' }}>
              Make this blog post visible to everyone right away
            </p>
          </div>
        </label>

        {error && (
          <div style={{
            padding: '16px',
            background: 'rgba(220, 53, 69, 0.1)',
            border: '2px solid rgba(220, 53, 69, 0.3)',
            borderRadius: '12px',
            marginBottom: '24px'
          }}>
            <p style={{ color: '#dc3545', fontSize: '0.9rem', fontWeight: '500', margin: 0 }}>
              ⚠️ {error}
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              flex: '1',
              minWidth: '200px',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: '700',
              color: 'white',
              background: saving ? '#6c757d' : 'linear-gradient(135deg, #1e2247 0%, #2a3458 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: saving ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(30, 34, 71, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              if (!saving) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 34, 71, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!saving) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 34, 71, 0.3)';
              }
            }}
          >
            {saving ? (
              <>
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Saving...
              </>
            ) : (
              <>
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Create Blog Post
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setTitle(""); setSlug(""); setExcerpt(""); setCoverImage(""); setImagePreview("");
              setTags(""); setContent(""); setPublished(false); setPublishDate("");
            }}
            disabled={saving}
            style={{
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1e2247',
              background: 'white',
              border: '2px solid rgba(30, 34, 71, 0.2)',
              borderRadius: '12px',
              cursor: saving ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: saving ? 0.5 : 1
            }}
            onMouseEnter={(e) => {
              if (!saving) {
                e.currentTarget.style.background = 'rgba(30, 34, 71, 0.05)';
                e.currentTarget.style.borderColor = '#1e2247';
              }
            }}
            onMouseLeave={(e) => {
              if (!saving) {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
              }
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset Form
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
