import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, FileText, Briefcase, CreditCard, PieChart, 
  Newspaper, AlertCircle, TrendingUp, CheckCircle2, Clock
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard - FCSL",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">High-level metrics and system status.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm border-slate-200 dark:border-slate-800 border-l-4 border-l-primary">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-muted-foreground">Pending BO Apps</p>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">124</p>
              <p className="text-xs text-muted-foreground mt-1"><span className="text-red-500">45 require documents</span></p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200 dark:border-slate-800 border-l-4 border-l-amber-500">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
              <div className="p-2 bg-amber-100 text-amber-600 dark:bg-amber-900/30 rounded-lg">
                <CreditCard className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">48</p>
              <p className="text-xs text-muted-foreground mt-1">৳ 2.4M waiting for clearance</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200 dark:border-slate-800 border-l-4 border-l-emerald-500">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-muted-foreground">Active IPO Apps</p>
              <div className="p-2 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 rounded-lg">
                <PieChart className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">1,432</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">+120 today</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 dark:border-slate-800 border-l-4 border-l-red-500">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-muted-foreground">Open Complaints</p>
              <div className="p-2 bg-red-100 text-red-600 dark:bg-red-900/30 rounded-lg">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mt-1">3 high priority</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Status */}
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <CardTitle className="text-base font-semibold">CMS & Content Status</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 flex items-center justify-center">
                    <Newspaper className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">News & Announcements</p>
                    <p className="text-xs text-muted-foreground">2 Scheduled, 4 Drafts</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild><Link href="/admin/news">Manage</Link></Button>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 dark:bg-purple-900/30 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Research Publications</p>
                    <p className="text-xs text-muted-foreground">1 Pending Review</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild><Link href="/admin/research">Manage</Link></Button>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Career Opportunities</p>
                    <p className="text-xs text-muted-foreground">3 Active Positions</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild><Link href="/admin/careers">Manage</Link></Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <CardTitle className="text-base font-semibold">System Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 border-primary/20 hover:border-primary text-primary" asChild>
                <Link href="/admin/news/create">
                  <Newspaper className="w-6 h-6" />
                  <span className="font-medium text-sm">Post News</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 border-primary/20 hover:border-primary text-primary" asChild>
                <Link href="/admin/careers/create">
                  <Briefcase className="w-6 h-6" />
                  <span className="font-medium text-sm">Add Job Posting</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium text-sm">Approve BOs</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
                <TrendingUp className="w-6 h-6" />
                <span className="font-medium text-sm">Update Market Data</span>
              </Button>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="w-4 h-4" /> Latest Audit Events
              </div>
              <ul className="text-xs space-y-2 font-medium">
                <li className="flex justify-between"><span>Admin (ID: 102) approved Payment #299</span> <span className="text-slate-400">2m ago</span></li>
                <li className="flex justify-between"><span>System synced DSE EOD Data</span> <span className="text-slate-400">15m ago</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
