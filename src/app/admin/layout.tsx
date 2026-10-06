"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, Users, FileText, Briefcase, CreditCard, PieChart, 
  Newspaper, Bell, Settings, FileSearch, ShieldAlert, FileQuestion, 
  AlertOctagon, LogOut, Menu, X, Landmark, Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_LINKS = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "BO Applications", href: "/admin/bo-applications", icon: FileSearch },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
  { name: "IPO", href: "/admin/ipo", icon: PieChart },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Research", href: "/admin/research", icon: FileText },
  { name: "News & Content", href: "/admin/news", icon: Newspaper },
  { name: "Notices", href: "/admin/notices", icon: Flag },
  { name: "Careers", href: "/admin/careers", icon: Briefcase },
  { name: "Complaints", href: "/admin/complaints", icon: FileQuestion },
  { name: "Branches", href: "/admin/branches", icon: Landmark },
  { name: "Audit Logs", href: "/admin/audit-logs", icon: ShieldAlert },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  // Simple auth check
  useEffect(() => {
    if (pathname === "/admin") {
      setAuthCheckComplete(true);
      return;
    }
    
    const isAuth = localStorage.getItem("fcsl_admin_auth");
    if (!isAuth) {
      router.push("/admin");
    } else {
      setAuthCheckComplete(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("fcsl_admin_auth");
    router.push("/admin");
  };

  // Do not render layout wrapper if on login page or while checking auth
  if (!authCheckComplete) return null;
  if (pathname === "/admin") return <>{children}</>;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 bg-slate-50 border-b border-slate-200">
          <Link href="/admin" className="flex items-center">
            <Image src="/logo.png" alt="FCSL Logo" width={150} height={32} className="h-8 w-auto" priority />
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto lg:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">Main Menu</div>
          {ADMIN_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? "bg-primary text-white" 
                    : "hover:bg-slate-800 hover:text-white"}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* User / Logout */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-primary flex items-center justify-center text-primary font-bold">
              AD
            </div>
            <div>
              <p className="text-sm font-bold text-white">Super Admin</p>
              <p className="text-xs text-slate-500">System Administrator</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="hidden sm:block">
              <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500 rounded border border-amber-200 dark:border-amber-800/50">
                ADMINISTRATION PORTAL
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
