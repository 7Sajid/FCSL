"use client";

import { useEffect, useState } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { SectorPerformance as ISectorPerformance } from "@/services/marketData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export function SectorPerformance() {
  const { provider } = useMarketData();
  const [sectors, setSectors] = useState<ISectorPerformance[]>([]);

  useEffect(() => {
    provider.getSectorPerformance().then(data => {
      // Sort by change percent descending
      setSectors([...data].sort((a, b) => b.changePercent - a.changePercent));
    });
  }, [provider]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sector Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sectors} layout="vertical" margin={{ top: 0, right: 0, bottom: 0, left: 30 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="sector" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as ISectorPerformance;
                    return (
                      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-100">
                        <div className="font-semibold text-slate-800 mb-1">{data.sector}</div>
                        <div className={`font-medium ${data.changePercent >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {data.changePercent > 0 ? '+' : ''}{data.changePercent}%
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Turnover: {(data.turnover / 1000000).toFixed(2)}M
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="changePercent" radius={[0, 4, 4, 0]} barSize={20}>
                {sectors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.changePercent >= 0 ? "#10b981" : "#f43f5e"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
