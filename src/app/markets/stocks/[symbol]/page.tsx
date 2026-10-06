"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useMarketData } from "@/providers/MarketDataProvider";
import { Stock, HistoricalPrice } from "@/services/marketData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar
} from "recharts";

export default function StockDetail() {
  const params = useParams();
  const symbol = params.symbol as string;
  const { provider } = useMarketData();
  
  const [stock, setStock] = useState<Stock | null>(null);
  const [history, setHistory] = useState<HistoricalPrice[]>([]);
  const [timeframe, setTimeframe] = useState("1M");

  useEffect(() => {
    provider.getStock(symbol).then(setStock);
  }, [provider, symbol]);

  useEffect(() => {
    provider.getHistoricalPrices(symbol, timeframe).then(setHistory);
  }, [provider, symbol, timeframe]);

  if (!stock) {
    return <div className="p-8 text-center text-slate-500 animate-pulse">Loading {symbol}...</div>;
  }

  const isPositive = stock.change >= 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-slate-900">{stock.symbol}</h1>
            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded uppercase">
              {stock.sector}
            </span>
          </div>
          <p className="text-slate-500 text-lg">{stock.company}</p>
        </div>
        
        <div className="text-right">
          <div className="text-4xl font-bold text-slate-900 mb-1">
            ৳{stock.price.toFixed(2)}
          </div>
          <div className={`flex items-center justify-end gap-2 font-medium ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            {isPositive ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
            <span>{isPositive ? '+' : ''}{stock.change.toFixed(2)}</span>
            <span>({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
          <CardTitle>Price Chart</CardTitle>
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg">
            {['1D', '1W', '1M', '3M', '6M', '1Y', '3Y', '5Y', 'MAX'].map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  timeframe === tf 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="price">
            <TabsList className="mb-4 flex flex-wrap gap-2 h-auto p-1 bg-slate-100">
              <TabsTrigger value="price">Price</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="technical" disabled>Technical (SMA/EMA/RSI/MACD)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="price" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={history} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={isPositive ? "#10b981" : "#f43f5e"} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={isPositive ? "#10b981" : "#f43f5e"} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} minTickGap={30} />
                  <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} tickFormatter={(val) => `৳${val}`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                  />
                  <Area type="monotone" dataKey="close" stroke={isPositive ? "#10b981" : "#f43f5e"} strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="volume" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={history} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} minTickGap={30} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} tickFormatter={(val) => `${(val/1000).toFixed(0)}k`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{ fill: '#f1f5f9' }}
                  />
                  <Bar dataKey="volume" fill="#94a3b8" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="performance" className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={history} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} minTickGap={30} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} tickFormatter={(val) => `${(((val - history[0]?.close) / history[0]?.close) * 100).toFixed(2)}%`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    labelStyle={{ color: '#64748b', marginBottom: '4px' }}
                    formatter={(val: unknown) => {
                      const initialClose = history[0]?.close || 1;
                      const percentage = (((Number(val) - initialClose) / initialClose) * 100).toFixed(2);
                      return [`${percentage}%`, 'Performance'];
                    }}
                  />
                  <Area type="monotone" dataKey="close" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorPerf)" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Key Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Open" value={stock.open.toFixed(2)} />
        <StatCard title="High" value={stock.high.toFixed(2)} />
        <StatCard title="Low" value={stock.low.toFixed(2)} />
        <StatCard title="Prev Close" value={stock.previousClose.toFixed(2)} />
        <StatCard title="Volume" value={stock.volume.toLocaleString()} />
        <StatCard title="Turnover" value={`${(stock.turnover / 1000000).toFixed(2)}M`} />
        <StatCard title="Market Cap" value={`${(stock.marketCap / 1000000000).toFixed(2)}B`} />
        <StatCard title="P/E Ratio" value={stock.pe.toFixed(2)} />
        <StatCard title="EPS" value={stock.eps.toFixed(2)} />
        <StatCard title="Div Yield" value={`${stock.dividendYield.toFixed(2)}%`} />
        <StatCard title="52W High" value={stock.range52Week.high.toFixed(2)} />
        <StatCard title="52W Low" value={stock.range52Week.low.toFixed(2)} />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string, value: string | number }) {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col justify-center">
        <p className="text-sm text-slate-500 mb-1">{title}</p>
        <p className="text-xl font-semibold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  );
}
