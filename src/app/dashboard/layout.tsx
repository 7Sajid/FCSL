"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Briefcase, ListOrdered, Star, TrendingUp, 
  ArrowRightLeft, Wallet, Rocket, FileText, BookOpen, Bell, 
  User, HelpCircle, LogOut, Menu, X, MoreHorizontal, Home, PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/dashboard/portfolio", icon: Briefcase },
  { name: "Orders", href: "/dashboard/orders", icon: ListOrdered },
  { name: "Watchlist", href: "/dashboard/watchlist", icon: Star },
  { name: "Market", href: "/markets", icon: TrendingUp },
  { name: "Transactions", href: "/dashboard/transactions", icon: ArrowRightLeft },
  { name: "Funds", href: "/dashboard/funds", icon: Wallet },
  { name: "IPO", href: "/dashboard/ipo", icon: Rocket },
  { name: "Statements", href: "/dashboard/statements", icon: FileText },
  { name: "Research", href: "/research", icon: BookOpen },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Support", href: "/faq", icon: HelpCircle },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">FC</div>
            <span className="font-bold text-xl tracking-tight text-primary dark:text-primary-foreground">First Capital</span>
          </Link>
        </div>
        
        <div className="flex-1 px-4 py-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-primary text-white font-medium shadow-sm" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                {link.name}
              </Link>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen relative pb-16 lg:pb-0">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
          <Link href="/" className="font-bold text-lg text-primary dark:text-primary-foreground">First Capital</Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/notifications" className="relative p-2 text-slate-600 dark:text-slate-400">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-20 px-4 overflow-y-auto">
             <div className="space-y-1 pb-20">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive 
                        ? "bg-primary text-white font-medium" 
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-30 pb-safe">
        <div className="flex items-center justify-around p-2">
          {[
            { name: "Home", href: "/dashboard", icon: Home },
            { name: "Market", href: "/markets", icon: TrendingUp },
            { name: "Portfolio", href: "/dashboard/portfolio", icon: PieChart },
            { name: "Orders", href: "/dashboard/orders", icon: ListOrdered },
            { name: "More", onClick: () => setMobileMenuOpen(true), icon: MoreHorizontal },
          ].map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return item.href ? (
              <Link key={item.name} href={item.href} className={`flex flex-col items-center p-2 rounded-lg min-w-[4rem] ${isActive ? "text-primary" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"}`}>
                <Icon className={`w-6 h-6 mb-1 ${isActive ? "fill-primary/20" : ""}`} />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            ) : (
              <button key={item.name} onClick={item.onClick} className="flex flex-col items-center p-2 rounded-lg min-w-[4rem] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
