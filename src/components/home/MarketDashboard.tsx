"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// Dynamically import ApexCharts to avoid SSR issues with window object
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const INDICES = [
  { id: "DSEX", name: "Broad index", value: "5,474.14", change: -8.21, percent: -0.15, high: "5,490.00", low: "5,450.00", vol: "25.4M" },
  { id: "DS30", name: "Blue-chip 30", value: "2,083.54", change: -1.75, percent: -0.08, high: "2,100.00", low: "2,080.00", vol: "10.2M" },
  { id: "DSES", name: "Shariah", value: "1,087.05", change: -2.62, percent: -0.24, high: "1,095.00", low: "1,085.00", vol: "5.1M" },
  { id: "DSME", name: "SME Index", value: "1,245.50", change: 12.40, percent: 1.01, high: "1,250.00", low: "1,230.00", vol: "1.5M" },
  { id: "CDSET", name: "CSE Broad", value: "11,200.50", change: 45.20, percent: 0.40, high: "11,250.00", low: "11,150.00", vol: "8.2M" },
];

export function MarketDashboard() {
  const [activeTab, setActiveTab] = useState("1D");
  const [activeIndex, setActiveIndex] = useState("DSEX");
  const [chartType, setChartType] = useState<"candlestick" | "area" | "line">("candlestick");
  const [sortMethod, setSortMethod] = useState<string>("default");
  const [chartData, setChartData] = useState<any[]>([]);
  const [currentValue, setCurrentValue] = useState(5474.14);

  // Update chart data when active index changes
  useEffect(() => {
    const activeData = INDICES.find(i => i.id === activeIndex);
    if (activeData) {
      const baseValue = parseFloat(activeData.value.replace(/,/g, ''));
      setCurrentValue(baseValue);
      
      const newChartData = [];
      let currentClose = baseValue - (activeData.change || 0); // Start roughly from previous close
      
      // Generate 14 points (e.g., 5-min intervals)
      for (let i = 0; i < 14; i++) {
        const time = new Date(Date.now() - (14 - i) * 5 * 60000);
        
        const open = currentClose;
        const change = (Math.random() - 0.5) * (baseValue * 0.006); // Volatility
        const close = open + change;
        
        const high = Math.max(open, close) + Math.random() * (baseValue * 0.002);
        const low = Math.min(open, close) - Math.random() * (baseValue * 0.002);
        
        newChartData.push({ 
          x: time, 
          y: [
            Number(open.toFixed(2)), 
            Number(high.toFixed(2)), 
            Number(low.toFixed(2)), 
            Number(close.toFixed(2))
          ]
        });
        
        currentClose = close;
      }
      
      // Override last point's close to match current live value
      const last = newChartData[13];
      last.y[3] = baseValue; 
      last.y[1] = Math.max(last.y[0], last.y[3], last.y[1]); // Ensure high is valid
      last.y[2] = Math.min(last.y[0], last.y[3], last.y[2]); // Ensure low is valid
      
      setChartData(newChartData);
    }
  }, [activeIndex]);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        if (prevData.length === 0) return prevData;
        const newData = [...prevData];
        const lastIndex = newData.length - 1;
        const lastData = newData[lastIndex];
        
        const lastClose = lastData.y[3];
        const change = (Math.random() - 0.5) * (lastClose * 0.002); // Dynamic fluctuation
        const newClose = Number((lastClose + change).toFixed(2));
        
        const newHigh = Math.max(lastData.y[1], newClose);
        const newLow = Math.min(lastData.y[2], newClose);
        
        newData[lastIndex] = {
          ...lastData,
          y: [lastData.y[0], newHigh, newLow, newClose]
        };
        
        setCurrentValue(newClose);
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeData = INDICES.find(i => i.id === activeIndex);
  const isPositive = (activeData?.change || 0) >= 0;
  const chartColor = isPositive ? "#22c55e" : "#ef4444"; // Tailwind green-500 / red-500

  // Format data for Area/Line chart (just use the close prices)
  const lineSeriesData = chartData.map(d => ({
    x: d.x,
    y: d.y[3] // close price
  }));

  const chartOptions: any = {
    chart: {
      type: chartType,
      background: 'transparent',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      parentHeightOffset: 0
    },
    theme: { mode: 'dark' },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#22c55e',
          downward: '#ef4444'
        },
        wick: {
          useFillColor: true,
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: chartType === 'candlestick' ? 1 : 2,
      colors: chartType === 'candlestick' ? [] : [chartColor]
    },
    fill: chartType === 'area' ? {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 95]
      }
    } : { type: 'solid' },
    colors: [chartColor],
    xaxis: {
      type: 'datetime',
      labels: {
        style: { colors: 'rgba(255,255,255,0.5)', fontSize: '10px' },
        datetimeUTC: false,
        format: 'HH:mm'
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false }
    },
    yaxis: {
      show: false,
      domain: ['min - 5', 'max + 5'],
    },
    grid: {
      show: false,
      padding: { top: 0, bottom: 0, left: 10, right: 0 }
    },
    tooltip: {
      theme: 'dark',
      style: { fontSize: '12px' },
      x: { format: 'HH:mm' },
    },
  };

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white">
      {/* Top Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 divide-x divide-white/10 bg-black/20">
        <div className="p-3">
          <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">Turnover</div>
          <div className="font-semibold">BDT 1,517.49 mn</div>
        </div>
        <div className="p-3">
          <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">Volume</div>
          <div className="font-semibold">46,750,074</div>
        </div>
        <div className="p-3 hidden md:block">
          <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">Trades</div>
          <div className="font-semibold">45,947</div>
        </div>
        <div className="p-3 hidden md:block">
          <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">Breadth</div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-1.5 flex rounded-full overflow-hidden">
              <div className="bg-success h-full" style={{ width: '38%' }} />
              <div className="bg-destructive h-full" style={{ width: '62%' }} />
            </div>
            <div className="text-xs whitespace-nowrap">
              <span className="text-success font-medium">115</span>
              <span className="text-white/40 mx-0.5">/</span>
              <span className="text-destructive font-medium">185</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Side: Indices */}
        <div className="w-full md:w-1/3 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-black/10">
          {[...INDICES]
            .sort((a, b) => {
              if (sortMethod === "volume") {
                const volA = parseFloat(a.vol.replace("M", ""));
                const volB = parseFloat(b.vol.replace("M", ""));
                return volB - volA; // Highest volume first
              }
              if (sortMethod === "gainers") {
                return b.percent - a.percent;
              }
              if (sortMethod === "losers") {
                return a.percent - b.percent;
              }
              return 0; // default order
            })
            .map((idx) => {
            const isNegative = idx.change < 0;
            const isActive = activeIndex === idx.id;
            return (
              <div 
                key={idx.id} 
                onClick={() => setActiveIndex(idx.id)}
                className={`p-4 cursor-pointer transition-colors border-l-4 ${
                  isActive 
                    ? 'border-primary bg-white/10' 
                    : 'border-transparent hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold">{idx.id}</span>
                  <span className="font-semibold">{idx.value}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/60">{idx.name}</span>
                  <span className={`font-medium ${isNegative ? 'text-destructive' : 'text-success'}`}>
                    {isNegative ? '▼' : '▲'} {Math.abs(idx.change)} ({idx.percent}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Chart */}
        <div className="w-full md:w-2/3 p-4 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                {activeIndex} - {INDICES.find(i => i.id === activeIndex)?.name || "INDEX"}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{currentValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                {(() => {
                  const activeData = INDICES.find(i => i.id === activeIndex);
                  const isNeg = (activeData?.change || 0) < 0;
                  return (
                    <span className={`text-sm font-medium ${isNeg ? 'text-destructive' : 'text-success'}`}>
                      {isNeg ? '▼' : '▲'} {Math.abs(activeData?.change || 0).toFixed(2)} ({activeData?.percent}%)
                    </span>
                  );
                })()}
              </div>
              {/* Additional details */}
              <div className="flex gap-4 mt-2 text-[11px] text-white/60">
                <div>High: <span className="text-white font-medium">{INDICES.find(i => i.id === activeIndex)?.high}</span></div>
                <div>Low: <span className="text-white font-medium">{INDICES.find(i => i.id === activeIndex)?.low}</span></div>
                <div>Vol: <span className="text-white font-medium">{INDICES.find(i => i.id === activeIndex)?.vol}</span></div>
              </div>
            </div>
            
            {/* Timeframe Tabs and Sorting Options */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex bg-black/20 rounded-md p-1 border border-white/10">
                {['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${
                      activeTab === tab ? 'bg-primary text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <select 
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value as any)}
                  className="bg-black/20 border border-white/10 rounded px-2 py-1 text-[10px] text-white/80 outline-none cursor-pointer focus:border-primary/50 transition-colors"
                >
                  <option value="candlestick">Candlestick</option>
                  <option value="area">Area Chart</option>
                  <option value="line">Line Chart</option>
                </select>
                <select 
                  value={sortMethod}
                  onChange={(e) => setSortMethod(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded px-2 py-1 text-[10px] text-white/80 outline-none cursor-pointer focus:border-primary/50 transition-colors"
                >
                  <option value="default">Default Order</option>
                  <option value="volume">Highest Volume</option>
                  <option value="gainers">Top Gainers</option>
                  <option value="losers">Top Losers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 min-h-[250px] w-full mt-2 relative">
            {chartData.length > 0 && (
              <Chart
                options={chartOptions}
                series={[{ 
                  data: chartType === 'candlestick' ? chartData : lineSeriesData 
                }]}
                type={chartType}
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
