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
        {/* Header with Logo */}
        <div className="dashboard-sidebar-header flex h-24 items-center justify-between px-6 border-b border-[#fdc51a]/20 bg-[#1e2247]/80 backdrop-blur-sm">
          <Link href="/" className="dashboard-logo-container flex items-center gap-3 group" 
          style={{backgroundColor:'rgb(228 228 228)', boxShadow: '0 0 10px 0 rgba(195, 186, 186, 0.9)', padding: '8px', borderRadius: '8px'}}>
            <img 
              src="/assets/img/logo/metroguards logo 2.png" 
              alt="Metro Guards Logo" 
              className="dashboard-logo"
              style={{ 
                maxWidth: '150px', 
                height: 'auto',
              }} 
            />
          </Link>
          <button
            onClick={closeSidebar}
            className="dashboard-close-btn lg:hidden rounded-lg p-2 hover:bg-[#252958] transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Admin Badge */}
        <div className="dashboard-admin-badge text-center py-4 px-4">
          <div className="bg-gradient-to-r from-[#fdc51a] to-[#e7b80f] rounded-lg p-3 shadow-lg">
            <h5 className="text-xs font-semibold text-[#1e2247] uppercase tracking-wider" style={{fontWeight:'700'}}>Admin Panel</h5>
          </div>
        </div>

        {/* Navigation */}
        <nav className="dashboard-nav px-4 py-2 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          <div>
            <h2 className="dashboard-nav-heading text-xs font-semibold text-[#fdc51a] uppercase tracking-wider mb-3">
              Dashboard
            </h2>
            <div className="space-y-1">
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
            </div>
          </div>

         

        

        </nav>

        
      </aside>
    </>
  );
}