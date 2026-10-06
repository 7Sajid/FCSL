import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const metadata = {
  title: "Orders - First Capital Securities",
  description: "View your order history and pending orders.",
};

const ORDERS_DATA = [
  { id: "ORD-9932", symbol: "GP", side: "BUY", qty: 100, price: "285.50", status: "Executed", time: "2026-10-06 10:15 AM", value: "28,550.00" },
  { id: "ORD-9931", symbol: "BATBC", side: "SELL", qty: 50, price: "510.20", status: "Executed", time: "2026-10-05 14:20 PM", value: "25,510.00" },
  { id: "ORD-9930", symbol: "SQUAREPHARMA", side: "BUY", qty: 200, price: "210.00", status: "Pending", time: "2026-10-06 14:10 PM", value: "42,000.00" },
  { id: "ORD-9929", symbol: "BEXIMCO", side: "BUY", qty: 1000, price: "115.50", status: "Rejected", time: "2026-10-04 11:05 AM", value: "115,500.00" },
  { id: "ORD-9928", symbol: "RENATA", side: "SELL", qty: 20, price: "1250.00", status: "Cancelled", time: "2026-10-03 10:00 AM", value: "25,000.00" },
];

const TABS = ["All", "Open", "Executed", "Rejected", "Cancelled", "Pending"];

export default function OrdersPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">Track your trade requests and executions.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">New Order</Button>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-col gap-4 pb-4">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
            {TABS.map((tab, i) => (
              <button 
                key={tab} 
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by Symbol or Order ID..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Order ID & Time</th>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Side</th>
                  <th className="px-4 py-3 text-right">Quantity</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Value (৳)</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ORDERS_DATA.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{order.id}</div>
                      <div className="text-xs text-muted-foreground">{order.time}</div>
                    </td>
                    <td className="px-4 py-3 font-bold text-primary dark:text-blue-400">{order.symbol}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${order.side === 'BUY' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {order.side}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{order.qty}</td>
                    <td className="px-4 py-3 text-right">{order.price}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{order.value}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        order.status === 'Executed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' :
                        order.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400' :
                        order.status === 'Cancelled' ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                          {(order.status === 'Pending' || order.status === 'Open') && (
                            <>
                              <DropdownMenuItem className="cursor-pointer">Modify Order</DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">Cancel Order</DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuItem className="cursor-pointer">Repeat Order</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {ORDERS_DATA.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <p>No orders found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
