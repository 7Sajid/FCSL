import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const metadata = {
  title: "Portfolio - First Capital Securities",
  description: "View and manage your investment portfolio.",
};

const PORTFOLIO_DATA = [
  { 
    symbol: "BATBC", company: "British American Tobacco", qty: 500, avgCost: 512.40, currentPrice: 510.20, 
    marketValue: 255100, unrealizedPnL: -1100, pnlPercent: -0.43, weight: 20.5, sector: "Food & Allied"
  },
  { 
    symbol: "GP", company: "Grameenphone Ltd.", qty: 1200, avgCost: 275.00, currentPrice: 286.10, 
    marketValue: 343320, unrealizedPnL: 13320, pnlPercent: 4.04, weight: 27.5, sector: "Telecommunication"
  },
  { 
    symbol: "SQUAREPHARMA", company: "Square Pharmaceuticals", qty: 850, avgCost: 208.50, currentPrice: 215.80, 
    marketValue: 183430, unrealizedPnL: 6205, pnlPercent: 3.50, weight: 14.7, sector: "Pharmaceuticals"
  },
  { 
    symbol: "RENATA", company: "Renata Ltd.", qty: 150, avgCost: 1195.00, currentPrice: 1210.50, 
    marketValue: 181575, unrealizedPnL: 2325, pnlPercent: 1.30, weight: 14.6, sector: "Pharmaceuticals"
  },
  { 
    symbol: "WALTONHIL", company: "Walton Hi-Tech Ind.", qty: 100, avgCost: 1050.00, currentPrice: 1045.00, 
    marketValue: 104500, unrealizedPnL: -500, pnlPercent: -0.48, weight: 8.4, sector: "Engineering"
  },
];

export default function PortfolioPage() {
  const totalMarketValue = PORTFOLIO_DATA.reduce((acc, item) => acc + item.marketValue, 0);
  const totalUnrealizedPnL = PORTFOLIO_DATA.reduce((acc, item) => acc + item.unrealizedPnL, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Portfolio</h1>
          <p className="text-muted-foreground">Manage your current holdings and asset allocation.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">Download Report</Button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Market Value</p>
            <p className="text-3xl font-bold">৳ {totalMarketValue.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Unrealized P&L</p>
            <div className="flex items-center gap-2">
              <p className={`text-3xl font-bold ${totalUnrealizedPnL >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {totalUnrealizedPnL >= 0 ? '+' : ''}৳ {totalUnrealizedPnL.toLocaleString(undefined, {minimumFractionDigits: 2})}
              </p>
              {totalUnrealizedPnL >= 0 ? <TrendingUp className="text-emerald-600 w-6 h-6" /> : <TrendingDown className="text-red-600 w-6 h-6" />}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Return</p>
            <p className={`text-3xl font-bold ${totalUnrealizedPnL >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              {totalUnrealizedPnL >= 0 ? '+' : ''}{((totalUnrealizedPnL / (totalMarketValue - totalUnrealizedPnL)) * 100).toFixed(2)}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Table */}
      <Card className="shadow-sm border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
          <CardTitle className="text-base font-semibold">Holdings</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search symbol or company..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Symbol / Company</th>
                  <th className="px-4 py-3 text-right">Qty</th>
                  <th className="px-4 py-3 text-right">Avg Cost</th>
                  <th className="px-4 py-3 text-right">LTP</th>
                  <th className="px-4 py-3 text-right">Market Value</th>
                  <th className="px-4 py-3 text-right">Unrealized P&L</th>
                  <th className="px-4 py-3 text-right">Weight</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {PORTFOLIO_DATA.map((item) => (
                  <tr key={item.symbol} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-bold text-primary dark:text-blue-400">{item.symbol}</div>
                      <div className="text-xs text-muted-foreground truncate max-w-[150px]">{item.company}</div>
                      <div className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 inline-block px-1.5 py-0.5 rounded mt-1">{item.sector}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{item.qty}</td>
                    <td className="px-4 py-3 text-right">৳ {item.avgCost.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right font-medium">৳ {item.currentPrice.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right font-medium">৳ {item.marketValue.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">
                      <div className={`font-bold ${item.unrealizedPnL >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                        {item.unrealizedPnL > 0 ? '+' : ''}{item.unrealizedPnL.toLocaleString()}
                      </div>
                      <div className={`text-xs ${item.unrealizedPnL >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                        {item.pnlPercent > 0 ? '+' : ''}{item.pnlPercent}%
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-xs text-muted-foreground">{item.weight}%</span>
                        <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${item.weight}%` }}></div>
                        </div>
                      </div>
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
                          <DropdownMenuItem className="cursor-pointer font-medium">View Details</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-emerald-600 focus:text-emerald-600">Buy More</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">Sell</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {PORTFOLIO_DATA.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <p>No holdings in your portfolio.</p>
              <Button variant="outline" className="mt-4">Explore Market</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
