"use client";

import { useEffect, useState } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketBreadth() {
  const { provider } = useMarketData();
  const [breadth, setBreadth] = useState({ advancers: 0, decliners: 0, unchanged: 0, total: 0 });

  useEffect(() => {
    provider.getStocks().then(stocks => {
      let advancers = 0;
      let decliners = 0;
      let unchanged = 0;
      
      stocks.forEach(s => {
        if (s.change > 0) advancers++;
        else if (s.change < 0) decliners++;
        else unchanged++;
      });
      
      setBreadth({
        advancers,
        decliners,
        unchanged,
        total: stocks.length
      });
    });
  }, [provider]);

  if (breadth.total === 0) return null;

  const advancersPct = (breadth.advancers / breadth.total) * 100;
  const declinersPct = (breadth.decliners / breadth.total) * 100;
  const unchangedPct = (breadth.unchanged / breadth.total) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Breadth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm mb-2 font-medium">
          <span className="text-emerald-500">Advancers: {breadth.advancers}</span>
          <span className="text-slate-500">Unchanged: {breadth.unchanged}</span>
          <span className="text-rose-500">Decliners: {breadth.decliners}</span>
        </div>
        
        {/* Progress Bar representation */}
        <div className="w-full h-3 bg-slate-100 rounded-full flex overflow-hidden">
          <div style={{ width: `${advancersPct}%` }} className="bg-emerald-500 transition-all duration-1000" />
          <div style={{ width: `${unchangedPct}%` }} className="bg-slate-300 transition-all duration-1000" />
          <div style={{ width: `${declinersPct}%` }} className="bg-rose-500 transition-all duration-1000" />
        </div>
      </CardContent>
    </Card>
  );
}
