"use client";

import { useEffect, useState } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { IndexData } from "@/services/marketData";
import { MarketIndices } from "@/components/markets/MarketIndices";

export default function IndicesPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Market Indices</h1>
        <p className="text-slate-500">Track all major indices of the Dhaka Stock Exchange.</p>
      </div>
      
      <MarketIndices />
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mt-8 text-center text-slate-500">
        <p>Detailed historical index charts and technical analysis tools will be available here.</p>
      </div>
    </div>
  );
}
