import './globals.css';
import { cookies } from "next/headers";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import HeaderClient from "./_components/HeaderClient";
import { SidebarProvider } from "./_components/SidebarContext";

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
        <div className="dashboard-main-content min-w-0 w-full">
          {/* Minimal header - shows mobile toggle and dropdown on tablet/mobile */}
          <HeaderClient email={user.email} minimal={true} />
          <main className="dashboard-main mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="dashboard-content min-h-[calc(100vh-12rem)]">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}