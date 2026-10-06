import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, TrendingDown, Activity, BarChart2 } from "lucide-react";

export const metadata = {
  title: "Market - First Capital Securities",
  description: "Live market data and indices.",
};

const INDICES = [
  { name: "DSEX", value: 5474.14, change: -8.21, percent: -0.15 },
  { name: "DS30", value: 2083.54, change: -1.75, percent: -0.08 },
  { name: "DSES", value: 1087.05, change: -2.62, percent: -0.24 },
  { name: "DSME", value: 1245.50, change: 12.4, percent: 1.01 },
];

const TOP_MOVERS = [
  { symbol: "EMERALDOIL", price: 65.40, change: 5.90, percent: 9.92, vol: "2.1M" },
  { symbol: "ORIONINFU", price: 342.10, change: 30.50, percent: 9.79, vol: "1.5M" },
  { symbol: "LHBL", price: 72.80, change: 6.20, percent: 9.31, vol: "4.8M" },
  { symbol: "FUWANGFOOD", price: 28.50, change: 2.30, percent: 8.78, vol: "5.2M" },
  { symbol: "CENTRALPHL", price: 15.20, change: 1.10, percent: 7.80, vol: "3.4M" },
];

export default function MarketPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Market Overview</h1>
          <p className="text-muted-foreground">Real-time Dhaka Stock Exchange data.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search symbol..." 
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INDICES.map((idx) => (
          <Card key={idx.name} className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-muted-foreground">{idx.name}</p>
              <p className="text-2xl font-bold mt-1">{idx.value.toLocaleString()}</p>
              <div className={`flex items-center gap-1 mt-1 text-sm font-semibold ${idx.change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {idx.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{idx.change > 0 ? '+' : ''}{idx.change} ({idx.percent > 0 ? '+' : ''}{idx.percent}%)</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 min-h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base font-semibold flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> Market Chart</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8">DSEX</Button>
                <Button variant="outline" size="sm" className="h-8">DS30</Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex items-center justify-center text-muted-foreground h-[320px]">
              <div className="text-center space-y-2 flex flex-col items-center">
                <BarChart2 className="w-12 h-12 text-slate-300 dark:text-slate-700" />
                <p>Advanced Charting loading...</p>
                <p className="text-xs">TradingView integration pending</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base font-semibold flex items-center gap-2 text-emerald-600 dark:text-emerald-500"><TrendingUp className="w-4 h-4" /> Top Gainers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {TOP_MOVERS.map((stock) => (
                  <div key={stock.symbol} className="p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer">
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-slate-100">{stock.symbol}</p>
                      <p className="text-xs text-muted-foreground">Vol: {stock.vol}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">৳ {stock.price.toFixed(2)}</p>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+{stock.percent}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
