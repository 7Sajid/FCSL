import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Activity, PieChart, BarChart3, Clock, ArrowRightLeft, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard Overview - First Capital Securities",
  description: "Investor portal dashboard overview.",
};

const STATS = [
  { label: "Portfolio Value", value: "৳ 1,245,670.00", change: "+2.4%", trend: "up" },
  { label: "Today's P&L", value: "৳ 24,500.00", change: "+1.2%", trend: "up" },
  { label: "Total P&L", value: "৳ 145,670.00", change: "+13.2%", trend: "up" },
  { label: "Cash Balance", value: "৳ 150,000.00", change: "Available", trend: "neutral" },
  { label: "Invested Amount", value: "৳ 1,095,670.00", change: "88% of total", trend: "neutral" },
  { label: "Day Change", value: "৳ 12,300.00", change: "-0.5%", trend: "down" },
];

const RECENT_ORDERS = [
  { id: "ORD-9932", symbol: "GP", type: "BUY", qty: 100, price: "৳ 285.50", status: "Executed" },
  { id: "ORD-9931", symbol: "BATBC", type: "SELL", qty: 50, price: "৳ 510.20", status: "Executed" },
  { id: "ORD-9930", symbol: "SQUAREPHARMA", type: "BUY", qty: 200, price: "৳ 210.00", status: "Pending" },
];

const WATCHLIST = [
  { symbol: "GP", price: "৳ 286.10", change: "+1.2%" },
  { symbol: "WALTONHIL", price: "৳ 1045.00", change: "-0.8%" },
  { symbol: "RENATA", price: "৳ 1210.50", change: "+2.5%" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">Welcome back. Here's what's happening with your investments.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:flex">Download Report</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">Deposit Funds</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STATS.map((stat, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg ${
                  stat.trend === 'up' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                  stat.trend === 'down' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                  'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                  {stat.trend === 'up' && <ArrowUpRight className="w-5 h-5" />}
                  {stat.trend === 'down' && <ArrowDownRight className="w-5 h-5" />}
                  {stat.trend === 'neutral' && <Activity className="w-5 h-5" />}
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${
                  stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' :
                  stat.trend === 'down' ? 'text-red-600 dark:text-red-400' :
                  'text-slate-600 dark:text-slate-400'
                }`}>{stat.change}</span>
                <span className="text-muted-foreground ml-2">from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Portfolio Performance</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs">View Full Chart</Button>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-slate-50 dark:bg-slate-900/50 rounded-lg flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700">
              <div className="text-center text-muted-foreground flex flex-col items-center gap-2">
                <Activity className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                <p className="text-sm">[Performance Chart Placeholder]</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full bg-slate-50 dark:bg-slate-900/50 rounded-lg flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700 mb-4">
              <div className="text-center text-muted-foreground flex flex-col items-center gap-2">
                <PieChart className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                <p className="text-sm">[Allocation Chart]</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary"></div> Equities</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Mutual Funds</span>
                <span className="font-medium">10%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-300"></div> Cash</span>
                <span className="font-medium">5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold flex items-center gap-2"><Clock className="w-4 h-4" /> Recent Orders</CardTitle>
            <Link href="/dashboard/orders" className="text-sm text-primary hover:underline">View All</Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">Symbol</th>
                    <th className="px-4 py-3">Side</th>
                    <th className="px-4 py-3">Qty @ Price</th>
                    <th className="px-4 py-3 rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_ORDERS.map((order) => (
                    <tr key={order.id} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="px-4 py-3 font-semibold">{order.symbol}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${order.type === 'BUY' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                          {order.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">{order.qty} <span className="text-muted-foreground text-xs">@</span> {order.price}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-muted-foreground">{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Watchlist Quick View */}
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold flex items-center gap-2"><Star className="w-4 h-4 text-gold" /> Watchlist Highlights</CardTitle>
            <Link href="/dashboard/watchlist" className="text-sm text-primary hover:underline">View All</Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">Symbol</th>
                    <th className="px-4 py-3">LTP</th>
                    <th className="px-4 py-3 text-right rounded-tr-lg">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {WATCHLIST.map((item) => (
                    <tr key={item.symbol} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-primary">{item.symbol}</td>
                      <td className="px-4 py-3 font-medium">{item.price}</td>
                      <td className={`px-4 py-3 text-right font-medium ${item.change.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                        {item.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
