"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navItems = [
  {
    href: "/dashboard",
    label: "Home",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    exact: true,
  },
  {
    href: "/dashboard/quotations",
    label: "Quotes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    badge: true, // Will show notification badge for new quotes
  },
  {
    href: "/dashboard/bookings",
    label: "Inquiries",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "/dashboard/blogs",
    label: "Blogs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export default function BottomNavigation({ newQuotesCount = 0 }) {
  const pathname = usePathname();

  return (
    <nav
      className="bottom-nav lg:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(135deg, #1e2247 0%, #252958 100%)",
        borderTop: "2px solid rgba(253, 197, 26, 0.3)",
        paddingBottom: "env(safe-area-inset-bottom)",
        boxShadow: "0 -4px 20px rgba(30, 34, 71, 0.3)",
      }}
    >
      <div
        className="flex items-center justify-around"
        style={{ minHeight: "64px", maxWidth: "500px", margin: "0 auto" }}
      >
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "bottom-nav-item flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 relative",
                isActive
                  ? "text-[#fdc51a] scale-105"
                  : "text-slate-400 hover:text-white active:scale-95"
              )}
              style={{
                minWidth: "64px",
                minHeight: "48px",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div className="relative">
                {item.icon}
                {/* Notification badge for new quotes */}
                {item.badge && newQuotesCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 flex items-center justify-center"
                    style={{
                      minWidth: "18px",
                      height: "18px",
                      background: "#ef4444",
                      borderRadius: "9px",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: "white",
                      padding: "0 4px",
                      border: "2px solid #1e2247",
                    }}
                  >
                    {newQuotesCount > 99 ? "99+" : newQuotesCount}
                  </span>
                )}
              </div>
              <span
                className={cx(
                  "text-xs font-medium transition-all duration-200",
                  isActive ? "font-bold" : ""
                )}
              >
                {item.label}
              </span>
              {/* Active indicator dot */}
              {isActive && (
                <div
                  className="absolute -bottom-1"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "#fdc51a",
                    borderRadius: "50%",
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


