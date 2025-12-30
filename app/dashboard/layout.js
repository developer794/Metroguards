import './globals.css';
import { cookies } from "next/headers";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import HeaderClient from "./_components/HeaderClient";
import { SidebarProvider } from "./_components/SidebarContext";
import BottomNavigation from "./_components/BottomNavigation";
import Breadcrumbs from "./_components/Breadcrumbs";
import SyncStatus from "./_components/SyncStatus";

export const metadata = {
  title: "Admin Dashboard | Metro Guards",
  description: "Metro Guards Admin Dashboard - Manage quotations, inquiries, and bookings",
  manifest: "/admin-manifest.json",
  themeColor: "#1e2247",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MG Admin",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
};

async function getUser() {
  const token = cookies().get("auth")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return payload; // { sub, email }
  } catch {
    return null;
  }
}

export default async function DashboardLayout({ children }) {
  const user = await getUser();
  if (!user) redirect("/signin");

  return (
    <SidebarProvider>
      <div className="dashboard-layout min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 lg:grid lg:grid-cols-[18rem_1fr]">
        <Sidebar />
        <div className="dashboard-main-content min-w-0 w-full pb-20 lg:pb-0">
          {/* Minimal header - shows mobile toggle, sync status, and dropdown */}
          <div className="dashboard-header-minimal sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <HeaderClient email={user.email} minimal={true} />
              <SyncStatus />
            </div>
          </div>
          <main className="dashboard-main mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            <Breadcrumbs />
            <div className="dashboard-content min-h-[calc(100vh-12rem)]">{children}</div>
          </main>
        </div>
        {/* Mobile Bottom Navigation */}
        <BottomNavigation />
      </div>
    </SidebarProvider>
  );
}