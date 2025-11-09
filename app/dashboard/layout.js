import './globals.css';
import { cookies } from "next/headers";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import HeaderClient from "./_components/HeaderClient";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 md:grid md:grid-cols-[18rem_1fr]">
      <Sidebar />
      <div className="min-w-0 w-full">
        {/* Minimal header - shows only dropdown on all pages */}
        <HeaderClient email={user.email} minimal={true} />
        <main className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="min-h-[calc(100vh-12rem)]">{children}</div>
        </main>
      </div>
    </div>
  );
}