import { MarketIndices } from "@/components/markets/MarketIndices";
import { MarketBreadth } from "@/components/markets/MarketBreadth";
import { TopStocks } from "@/components/markets/TopStocks";
import { SectorPerformance } from "@/components/markets/SectorPerformance";
import { AiMarketSummary } from "@/components/markets/AiMarketSummary";

export const metadata = {
  title: "Market Summary | First Capital Securities Limited",
  description: "Live market summary, indices, top gainers, losers, and sector performance.",
};

export default function MarketsHome() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Market Summary</h1>
        <p className="text-slate-500">Real-time insights and status of the Dhaka Stock Exchange.</p>
      </div>

      <AiMarketSummary />

      <MarketIndices />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <SectorPerformance />
        </div>
        <div className="space-y-6">
          <MarketBreadth />
          <TopStocks />
        </div>
      </div>
    </div>
  );
}
