"use client";

import { useEffect, useState } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { Stock } from "@/services/marketData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export function TopStocks() {
  const { provider } = useMarketData();
  const [gainers, setGainers] = useState<Stock[]>([]);
  const [losers, setLosers] = useState<Stock[]>([]);
  const [active, setActive] = useState<Stock[]>([]);

  useEffect(() => {
    provider.getTopGainers().then(setGainers);
    provider.getTopLosers().then(setLosers);
    provider.getMostActive().then(setActive);
  }, [provider]);

  const renderList = (stocks: Stock[], showTurnover: boolean = false) => (
    <div className="space-y-4 mt-4">
      {stocks.slice(0, 5).map(stock => (
        <div key={stock.symbol} className="flex justify-between items-center group">
          <div>
            <Link href={`/markets/stocks/${stock.symbol}`} className="font-semibold text-blue-600 hover:underline">
              {stock.symbol}
            </Link>
            <div className="text-xs text-slate-500 truncate max-w-[150px]">{stock.company}</div>
          </div>
          <div className="text-right">
            <div className="font-medium text-slate-800">{stock.price.toFixed(2)}</div>
            {showTurnover ? (
              <div className="text-xs text-slate-500">{(stock.turnover / 1000000).toFixed(2)}M</div>
            ) : (
              <div className={`text-xs font-medium ${stock.change >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </div>
            )}
          </div>
        </div>
      ))}
      <Link href="/markets/screener" className="text-sm text-blue-600 hover:underline text-center block mt-4 pt-4 border-t border-slate-100">
        View Full List
      </Link>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Movers</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="gainers">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gainers">Gainers</TabsTrigger>
            <TabsTrigger value="losers">Losers</TabsTrigger>
            <TabsTrigger value="active">Value</TabsTrigger>
          </TabsList>
          <TabsContent value="gainers">
            {renderList(gainers)}
          </TabsContent>
          <TabsContent value="losers">
            {renderList(losers)}
          </TabsContent>
          <TabsContent value="active">
            {renderList(active, true)}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
