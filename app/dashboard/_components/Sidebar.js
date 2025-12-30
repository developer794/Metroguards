"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarItem({ href, label, icon, exact = false }) {
  const pathname = usePathname();
  const { closeSidebar } = useSidebar();
  
  // Determine if this item should be active
  let active;
  if (exact) {
    // Exact match only
    active = pathname === href;
  } else if (href === "/dashboard/blogs" && pathname?.startsWith("/dashboard/blogs/")) {
    // Special case: "All Blogs" should NOT be active when on /dashboard/blogs/new
    active = pathname === "/dashboard/blogs" || (pathname?.startsWith("/dashboard/blogs/") && pathname !== "/dashboard/blogs/new");
  } else if (href === "/dashboard") {
    // Dashboard overview should only be active on exact match
    active = pathname === href;
  } else {
    // Default: exact match or starts with href/
    active = pathname === href || pathname?.startsWith(href + "/");
  }
  
  return (
    <Link
      href={href}
      onClick={closeSidebar}
      className={cx(
        "dashboard-sidebar-item group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
        active 
          ? "dashboard-sidebar-item-active bg-gradient-to-r from-[#fdc51a] to-[#e7b80f] text-[#1e2247] shadow-lg shadow-[#fdc51a]/25 transform scale-[1.02]" 
          : "text-slate-300 hover:text-white hover:bg-[#252958] hover:shadow-md hover:transform hover:scale-[1.01]"
      )}
    >
      <span className={cx(
        "text-lg transition-transform duration-200",
        active ? "text-[#1e2247]" : "text-slate-400 group-hover:text-[#fdc51a]"
      )}>
        {icon}
      </span>
      {label}
    </Link>
  );
}

export default function Sidebar() {
  const { sidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="dashboard-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      <aside
        data-sidebar
        className={cx(
          "dashboard-sidebar fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-[#1e2247] via-[#1a1e3f] to-[#1e2247] text-white shadow-2xl transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:transform-none"
        )}
      >
        {/* Header - Clean Dashboard Title */}
        <div className="dashboard-sidebar-header flex h-16 items-center justify-between px-4 border-b border-[#fdc51a]/20 bg-[#1e2247]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#fdc51a] to-[#e7b80f] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-white tracking-wide">DASHBOARD</span>
          </div>
          <button
            onClick={closeSidebar}
            className="dashboard-close-btn lg:hidden rounded-lg p-1.5 hover:bg-[#252958] transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="dashboard-nav px-4 py-4 flex flex-col h-[calc(100vh-64px)]">
          <div className="space-y-1 flex-1">
            <SidebarItem 
              href="/dashboard" 
              label="Overview" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <SidebarItem 
              href="/dashboard/blogs/new" 
              label="Create Blog"
              exact={true}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            />
            <SidebarItem 
              href="/dashboard/blogs" 
              label="All Blogs" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              }
            />
            <SidebarItem 
              href="/dashboard/bookings" 
              label="Contact Inquiries" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <SidebarItem 
              href="/dashboard/quotations" 
              label="Quotations" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <SidebarItem 
              href="/dashboard/rates" 
              label="Service Rates" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>

          {/* Sign Out Button at Bottom */}
          <div className="pb-4 border-b border-[#fdc51a]/20 mb-4">
            <form action="/api/signout" method="POST">
              <button
                type="submit"
                className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/20 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </form>
          </div>
        </nav>
      </aside>
    </>
  );
}