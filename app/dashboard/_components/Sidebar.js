"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarItem({ href, label, icon }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={cx(
        "group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
        active 
          ? "bg-gradient-to-r from-[#fdc51a] to-[#e7b80f] text-[#1e2247] shadow-lg shadow-[#fdc51a]/25 transform scale-[1.02]" 
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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      <aside
        data-sidebar
        className={cx(
          "fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-[#1e2247] via-[#1a1e3f] to-[#1e2247] text-white shadow-2xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
          "md:sticky md:top-0 md:h-screen md:translate-x-0 md:transform-none"
        )}
      >
        {/* Header with Logo */}
        <div className="flex h-24 items-center justify-between px-6 border-b border-[#fdc51a]/20 bg-[#1e2247]/80 backdrop-blur-sm">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/img/logo/metroguards logo 2.png" 
              alt="Metro Guards Logo" 
              style={{ 
                maxWidth: '140px', 
                height: 'auto'
              }} 
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden rounded-lg p-2 hover:bg-[#252958] transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Admin Badge */}
        <div className="px-6 py-4">
          <div className="bg-gradient-to-r from-[#fdc51a] to-[#e7b80f] rounded-lg p-3 shadow-lg">
            <p className="text-xs font-semibold text-[#1e2247] uppercase tracking-wider">Admin Panel</p>
            <p className="text-sm font-bold text-[#1e2247] mt-1">Metro Guards</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-2 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          <div>
            <h2 className="px-3 text-xs font-semibold text-[#fdc51a] uppercase tracking-wider mb-3">
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
                href="/dashboard/analytics" 
                label="Analytics" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h2 className="px-3 text-xs font-semibold text-[#fdc51a] uppercase tracking-wider mb-3">
              Content Management
            </h2>
            <div className="space-y-1">
              <SidebarItem 
                href="/dashboard/blogs/new" 
                label="Create Blog" 
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
                href="/dashboard/blogs/categories" 
                label="Categories" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h2 className="px-3 text-xs font-semibold text-[#fdc51a] uppercase tracking-wider mb-3">
              Security Services
            </h2>
            <div className="space-y-1">
              <SidebarItem 
                href="/dashboard/bookings" 
                label="Bookings" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
              <SidebarItem 
                href="/dashboard/guards" 
                label="Security Guards" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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

          <div>
            <h2 className="px-3 text-xs font-semibold text-[#fdc51a] uppercase tracking-wider mb-3">
              Settings
            </h2>
            <div className="space-y-1">
              <SidebarItem 
                href="/dashboard/settings" 
                label="Preferences" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#fdc51a]/20 bg-[#1e2247]/90 backdrop-blur-sm">
          <div className="bg-[#252958] rounded-lg p-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#fdc51a] to-[#e7b80f] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-[#1e2247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-white">System Status</p>
                <p className="text-xs text-[#fdc51a] font-semibold">All Operational</p>
              </div>
            </div>
          </div>
          
          <form action="/api/signout" method="POST">
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-[#252958] hover:bg-red-600/20 hover:text-red-400 rounded-lg transition-all duration-200 border border-[#fdc51a]/20 hover:border-red-500/50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}