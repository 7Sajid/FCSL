"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  IMarketDataProvider, 
  MockMarketDataProvider, 
  MarketState 
} from "@/services/marketData";

interface MarketContextType {
  provider: IMarketDataProvider;
  marketState: MarketState;
  setMarketState: (state: MarketState) => void;
  isMockData: boolean;
}

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export function MarketProvider({ children }: { children: React.ReactNode }) {
  // Currently using Mock provider for development, can be toggled to Live
  const [provider] = useState<IMarketDataProvider>(new MockMarketDataProvider());
  const [marketState, setMarketState] = useState<MarketState>("LIVE");
  const [isMockData] = useState<boolean>(true); // Flag to show "DEMO MARKET DATA"

  return (
    <MarketContext.Provider value={{ provider, marketState, setMarketState, isMockData }}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarketData() {
  const context = useContext(MarketContext);
  if (context === undefined) {
    throw new Error("useMarketData must be used within a MarketProvider");
  }
  return context;
}
