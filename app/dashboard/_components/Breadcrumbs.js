"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routeLabels = {
  dashboard: "Dashboard",
  quotations: "Quotations",
  bookings: "Inquiries",
  blogs: "Blogs",
  new: "Create New",
  edit: "Edit",
  settings: "Settings",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean) || [];

  // Don't show breadcrumbs on main dashboard page
  if (segments.length <= 1) return null;

  const breadcrumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

    return { path, label, isLast, segment };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumb-nav mb-4 sm:mb-6"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        padding: "12px 16px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        fontSize: "0.875rem",
      }}
    >
      {/* Home icon */}
      <Link
        href="/dashboard"
        className="breadcrumb-home flex items-center text-slate-500 hover:text-[#1e2247] transition-colors"
        style={{
          padding: "4px",
          borderRadius: "6px",
          minWidth: "28px",
          minHeight: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Link>

      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.path} className="flex items-center gap-2">
          {/* Separator */}
          <svg
            className="w-4 h-4 text-slate-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>

          {crumb.isLast ? (
            <span
              className="font-semibold text-[#1e2247] truncate max-w-[150px] sm:max-w-[250px]"
              title={crumb.label}
            >
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.path}
              className="text-slate-500 hover:text-[#1e2247] hover:underline transition-colors truncate max-w-[100px] sm:max-w-[200px]"
              title={crumb.label}
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

