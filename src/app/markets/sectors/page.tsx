"use client";

import { useEffect, useState } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { SectorPerformance } from "@/services/marketData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

export default function SectorsPage() {
  const { provider } = useMarketData();
  const [sectors, setSectors] = useState<SectorPerformance[]>([]);

  useEffect(() => {
    provider.getSectorPerformance().then(data => {
      setSectors([...data].sort((a, b) => b.changePercent - a.changePercent));
    });
  }, [provider]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Market Sectors</h1>
        <p className="text-slate-500">Analyze performance and turnover across all market sectors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sector Performance (%)</CardTitle>
          </CardHeader>
          <CardContent className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectors} layout="vertical" margin={{ top: 10, right: 30, bottom: 20, left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis dataKey="sector" type="category" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} width={100} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: unknown) => [`${value}%`, 'Change']}
                />
                <Bar dataKey="changePercent" radius={[0, 4, 4, 0]} barSize={24}>
                  {sectors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.changePercent >= 0 ? "#10b981" : "#f43f5e"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector Turnover</CardTitle>
          </CardHeader>
          <CardContent className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectors.sort((a, b) => b.turnover - a.turnover)} layout="vertical" margin={{ top: 10, right: 30, bottom: 20, left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} tickFormatter={(val) => `${(val/1000000).toFixed(0)}M`} />
                <YAxis dataKey="sector" type="category" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} width={100} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: unknown) => [`${(Number(value)/1000000).toFixed(2)}M`, 'Turnover']}
                />
                <Bar dataKey="turnover" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
