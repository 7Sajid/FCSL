"use client";

import { useEffect, useState } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { IndexData } from "@/services/marketData";
import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketIndices() {
  const { provider } = useMarketData();
  const [indices, setIndices] = useState<IndexData[]>([]);

  useEffect(() => {
    provider.getIndices().then(setIndices);
  }, [provider]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {indices.map((idx) => {
        const isPositive = idx.change >= 0;
        return (
          <Card key={idx.symbol} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-700">{idx.symbol}</span>
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-rose-500" />
                )}
              </div>
              
              <div className="text-2xl font-bold mb-1">
                {idx.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              
              <div className={`flex items-center gap-2 text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                <span>{isPositive ? '+' : ''}{idx.change.toFixed(2)}</span>
                <span>({isPositive ? '+' : ''}{idx.changePercent.toFixed(2)}%)</span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
                <div>
                  <div className="uppercase mb-0.5 tracking-wider">Vol</div>
                  <div className="font-medium text-slate-700">{(idx.volume / 1000000).toFixed(1)}M</div>
                </div>
                <div>
                  <div className="uppercase mb-0.5 tracking-wider">Turnover</div>
                  <div className="font-medium text-slate-700">{(idx.turnover / 1000000).toFixed(1)}M</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
