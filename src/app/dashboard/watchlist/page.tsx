"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Plus, Bell, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PriceAlertModal } from "@/components/dashboard/PriceAlertModal";

// Metadata removed as this is now a client component

const WATCHLIST_DATA = [
  { symbol: "GP", company: "Grameenphone Ltd.", price: 286.10, change: 3.40, changePercent: 1.2, volume: "1.2M", high: 288.50, low: 282.00 },
  { symbol: "WALTONHIL", company: "Walton Hi-Tech Ind.", price: 1045.00, change: -8.50, changePercent: -0.8, volume: "15K", high: 1055.00, low: 1040.00 },
  { symbol: "RENATA", company: "Renata Ltd.", price: 1210.50, change: 29.50, changePercent: 2.5, volume: "45K", high: 1215.00, low: 1180.00 },
  { symbol: "SQURPHARMA", company: "Square Pharmaceuticals", price: 215.80, change: 1.20, changePercent: 0.56, volume: "500K", high: 216.50, low: 214.00 },
  { symbol: "BATBC", company: "British American Tobacco", price: 510.20, change: -2.20, changePercent: -0.43, volume: "120K", high: 515.00, low: 508.50 },
];

export default function WatchlistPage() {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState<{symbol: string, price: number} | null>(null);

  const openAlertModal = (symbol: string, price: number) => {
    setSelectedStock({ symbol, price });
    setAlertModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Watchlist</h1>
          <p className="text-muted-foreground">Monitor stocks and manage price alerts.</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Add symbol..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white shrink-0 shadow-md">
            <Plus className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200 dark:border-slate-800">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold">My Watchlist</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Symbol</th>
                  <th className="px-4 py-3 text-right">LTP (৳)</th>
                  <th className="px-4 py-3 text-right">Change</th>
                  <th className="px-4 py-3 text-right">Volume</th>
                  <th className="px-4 py-3 text-right">High / Low</th>
                  <th className="px-4 py-3 text-center">Alerts</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {WATCHLIST_DATA.map((item) => (
                  <tr key={item.symbol} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-bold text-primary dark:text-blue-400">{item.symbol}</div>
                      <div className="text-xs text-muted-foreground truncate max-w-[150px]">{item.company}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-base">{item.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">
                      <div className={`flex items-center justify-end gap-1 font-bold ${item.change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                        {item.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}
                      </div>
                      <div className={`text-xs ${item.change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                        {item.changePercent > 0 ? '+' : ''}{item.changePercent}%
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-medium">{item.volume}</td>
                    <td className="px-4 py-3 text-right text-xs text-muted-foreground">
                      <span className="text-slate-900 dark:text-slate-300 font-medium">{item.high.toFixed(2)}</span>
                      <span className="mx-1">/</span>
                      <span className="text-slate-900 dark:text-slate-300 font-medium">{item.low.toFixed(2)}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                        onClick={() => openAlertModal(item.symbol, item.price)}
                      >
                        <Bell className="w-4 h-4" />
                      </Button>
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
                          <DropdownMenuItem className="cursor-pointer text-emerald-600 focus:text-emerald-600">Buy</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">Sell</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Market Depth</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">Remove from Watchlist</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <PriceAlertModal 
        isOpen={alertModalOpen} 
        onClose={() => setAlertModalOpen(false)} 
        symbol={selectedStock?.symbol || null}
        currentPrice={selectedStock?.price || null}
      />
    </div>
  );
}
