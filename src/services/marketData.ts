export type MarketState = "LIVE" | "UPDATING" | "DELAYED" | "OFFLINE";

export interface IndexData {
  symbol: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
  volume: number;
  turnover: number;
}

export interface Stock {
  symbol: string;
  company: string;
  sector: string;
  price: number;
  change: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  previousClose: number;
  volume: number;
  turnover: number;
  marketCap: number;
  pe: number;
  eps: number;
  dividendYield: number;
  range52Week: {
    low: number;
    high: number;
  };
}

export interface SectorPerformance {
  sector: string;
  changePercent: number;
  volume: number;
  turnover: number;
}

export interface HistoricalPrice {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface CorporateAction {
  id: string;
  symbol: string;
  type: "AGM" | "EGM" | "Dividend" | "Rights" | "Bonus" | "Stock Split";
  recordDate: string;
  details: string;
}

export interface IMarketDataProvider {
  getIndices(): Promise<IndexData[]>;
  getStocks(): Promise<Stock[]>;
  getStock(symbol: string): Promise<Stock | null>;
  getTopGainers(): Promise<Stock[]>;
  getTopLosers(): Promise<Stock[]>;
  getMostActive(): Promise<Stock[]>;
  getSectorPerformance(): Promise<SectorPerformance[]>;
  getHistoricalPrices(symbol: string, timeframe: string): Promise<HistoricalPrice[]>;
  getCorporateActions(): Promise<CorporateAction[]>;
}

// Generate some realistic dummy data
const generateDummyStocks = (): Stock[] => {
  const sectors = ["Bank", "Engineering", "Pharmaceuticals", "Textile", "Fuel & Power", "IT"];
  return Array.from({ length: 50 }).map((_, i) => {
    const price = Math.random() * 500 + 10;
    const changePercent = (Math.random() - 0.5) * 10;
    const change = (price * changePercent) / 100;
    return {
      symbol: `STOCK${i + 1}`,
      company: `Company ${i + 1} Ltd.`,
      sector: sectors[i % sectors.length],
      price: Number(price.toFixed(2)),
      change: Number(change.toFixed(2)),
      changePercent: Number(changePercent.toFixed(2)),
      open: Number((price - change / 2).toFixed(2)),
      high: Number((price + Math.random() * 5).toFixed(2)),
      low: Number((price - Math.random() * 5).toFixed(2)),
      previousClose: Number((price - change).toFixed(2)),
      volume: Math.floor(Math.random() * 1000000),
      turnover: Math.floor(Math.random() * 50000000),
      marketCap: Math.floor(Math.random() * 10000000000),
      pe: Number((Math.random() * 30 + 5).toFixed(2)),
      eps: Number((Math.random() * 10).toFixed(2)),
      dividendYield: Number((Math.random() * 8).toFixed(2)),
      range52Week: {
        low: Number((price * 0.7).toFixed(2)),
        high: Number((price * 1.3).toFixed(2)),
      },
    };
  });
};

const mockStocks = generateDummyStocks();

export class MockMarketDataProvider implements IMarketDataProvider {
  async getIndices(): Promise<IndexData[]> {
    return [
      { symbol: "DSEX", name: "DSE Broad Index", value: 6200.5, change: 15.2, changePercent: 0.25, volume: 15000000, turnover: 450000000 },
      { symbol: "DS30", name: "DSE 30 Index", value: 2100.8, change: -5.4, changePercent: -0.26, volume: 5000000, turnover: 200000000 },
      { symbol: "DSES", name: "DSE Shariah Index", value: 1350.2, change: 8.1, changePercent: 0.6, volume: 3000000, turnover: 100000000 },
      { symbol: "CSE", name: "CSE All Share", value: 18500.4, change: 45.6, changePercent: 0.24, volume: 2000000, turnover: 50000000 },
    ];
  }

  async getStocks(): Promise<Stock[]> {
    return mockStocks;
  }

  async getStock(symbol: string): Promise<Stock | null> {
    return mockStocks.find((s) => s.symbol === symbol) || null;
  }

  async getTopGainers(): Promise<Stock[]> {
    return [...mockStocks].sort((a, b) => b.changePercent - a.changePercent).slice(0, 10);
  }

  async getTopLosers(): Promise<Stock[]> {
    return [...mockStocks].sort((a, b) => a.changePercent - b.changePercent).slice(0, 10);
  }

  async getMostActive(): Promise<Stock[]> {
    return [...mockStocks].sort((a, b) => b.turnover - a.turnover).slice(0, 10);
  }

  async getSectorPerformance(): Promise<SectorPerformance[]> {
    const sectors = ["Bank", "Engineering", "Pharmaceuticals", "Textile", "Fuel & Power", "IT"];
    return sectors.map((sector) => ({
      sector,
      changePercent: Number(((Math.random() - 0.5) * 5).toFixed(2)),
      volume: Math.floor(Math.random() * 5000000),
      turnover: Math.floor(Math.random() * 150000000),
    }));
  }

  async getHistoricalPrices(symbol: string, timeframe: string): Promise<HistoricalPrice[]> {
    // Generate some random chart data
    const days = timeframe === "1M" ? 30 : timeframe === "1W" ? 7 : timeframe === "1Y" ? 365 : 90;
    let currentPrice = 100;
    return Array.from({ length: days }).map((_, i) => {
      currentPrice = currentPrice + (Math.random() - 0.5) * 5;
      return {
        date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        open: Number(currentPrice.toFixed(2)),
        high: Number((currentPrice + Math.random() * 2).toFixed(2)),
        low: Number((currentPrice - Math.random() * 2).toFixed(2)),
        close: Number((currentPrice + (Math.random() - 0.5)).toFixed(2)),
        volume: Math.floor(Math.random() * 100000),
      };
    });
  }

  async getCorporateActions(): Promise<CorporateAction[]> {
    return [
      { id: "1", symbol: "STOCK1", type: "AGM", recordDate: "2026-11-01", details: "Annual General Meeting at 10:00 AM" },
      { id: "2", symbol: "STOCK5", type: "Dividend", recordDate: "2026-10-15", details: "10% Cash Dividend" },
      { id: "3", symbol: "STOCK10", type: "Bonus", recordDate: "2026-10-20", details: "5% Stock Dividend" },
      { id: "4", symbol: "STOCK15", type: "Rights", recordDate: "2026-11-10", details: "1R:2 at BDT 15 each" },
      { id: "5", symbol: "STOCK2", type: "EGM", recordDate: "2026-10-25", details: "Extraordinary General Meeting" },
    ];
  }
}

// No import

export class LiveMarketDataProvider implements IMarketDataProvider {
  private ws: WebSocket | null = null;
  private state: MarketState = "OFFLINE";
  private onStateChange?: (state: MarketState) => void;
  private onDataUpdate?: (data: unknown) => void;

  constructor(
    private url: string = "wss://api.fcsl.com/market-data",
    onStateChange?: (state: MarketState) => void,
    onDataUpdate?: (data: unknown) => void
  ) {
    this.onStateChange = onStateChange;
    this.onDataUpdate = onDataUpdate;
  }

  connect() {
    this.setState("UPDATING");
    try {
      this.ws = new WebSocket(this.url);
      
      this.ws.onopen = () => {
        this.setState("LIVE");
      };
      
      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (this.onDataUpdate) {
          this.onDataUpdate(data);
        }
      };
      
      this.ws.onclose = () => {
        this.setState("OFFLINE");
        // Reconnect logic would go here
      };
      
      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        this.setState("OFFLINE");
      };
    } catch (e) {
      this.setState("OFFLINE");
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.setState("OFFLINE");
  }

  private setState(newState: MarketState) {
    this.state = newState;
    if (this.onStateChange) {
      this.onStateChange(newState);
    }
  }

  // To be implemented with real WebSocket/API calls
  async getIndices(): Promise<IndexData[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getStocks(): Promise<Stock[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getStock(symbol: string): Promise<Stock | null> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getTopGainers(): Promise<Stock[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getTopLosers(): Promise<Stock[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getMostActive(): Promise<Stock[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getSectorPerformance(): Promise<SectorPerformance[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getHistoricalPrices(symbol: string, timeframe: string): Promise<HistoricalPrice[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
  async getCorporateActions(): Promise<CorporateAction[]> { throw new Error("Not implemented - Do not fabricate real DSE/CSE data"); }
}
