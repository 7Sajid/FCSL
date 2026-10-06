import { MarketProvider } from "@/providers/MarketDataProvider";
import Link from "next/link";

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketProvider>
      <div className="min-h-screen bg-slate-50 pt-20">
        {/* Navigation for Market could go here */}
        <div className="bg-slate-900 text-slate-100 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm overflow-x-auto whitespace-nowrap">
            <div className="flex gap-6">
              <Link href="/markets" className="hover:text-blue-400 transition-colors">Market Home</Link>
              <Link href="/markets/screener" className="hover:text-blue-400 transition-colors">Screener</Link>
              <Link href="/markets/sectors" className="hover:text-blue-400 transition-colors">Sectors</Link>
              <Link href="/markets/corporate-actions" className="hover:text-blue-400 transition-colors">Corporate Actions</Link>
            </div>
            
            {/* Demo Mode Indicator */}
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-500 font-medium text-xs tracking-wider uppercase">Demo Market Data</span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </MarketProvider>
  );
}
