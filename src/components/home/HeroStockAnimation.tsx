"use client";

import { useEffect, useState } from "react";

export function HeroStockAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-[#061428]" />;

  // Generate some random looking candlestick bars
  const bars = Array.from({ length: 40 }).map((_, i) => {
    const height = 20 + Math.random() * 60;
    const isUp = Math.random() > 0.4;
    return {
      x: i * 60,
      y: 100 - height / 2 + Math.random() * 50,
      height,
      isUp,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#040f1c] z-0">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Animated Lines and Candles */}
      <div className="absolute inset-0 opacity-80 bottom-0 top-auto h-[85vh]">
        <svg className="w-full h-full min-w-[2000px] animate-slide-left" preserveAspectRatio="none" viewBox="0 0 2000 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="upGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background blurred line */}
          <g className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
            <path d="M-100,250 Q100,300 300,150 T800,200 T1300,100 T1800,150 T2200,50" fill="none" stroke="#eab308" strokeWidth="4" opacity="0.7" filter="blur(1px)"/>
            <path d="M-100,250 Q100,300 300,150 T800,200 T1300,100 T1800,150 T2200,50 L2200,400 L-100,400 Z" fill="url(#goldGrad)" />
          </g>

          {/* Main green trend line */}
          <g className="animate-pulse-slow">
            <path d="M-100,300 L50,280 L200,320 L350,210 L500,260 L650,150 L800,190 L950,80 L1100,120 L1250,50 L1400,90 L1550,40 L1700,110 L1850,20 L2000,70 L2150,10" fill="none" stroke="#10b981" strokeWidth="6" />
            <path d="M-100,300 L50,280 L200,320 L350,210 L500,260 L650,150 L800,190 L950,80 L1100,120 L1250,50 L1400,90 L1550,40 L1700,110 L1850,20 L2000,70 L2150,10 L2150,400 L-100,400 Z" fill="url(#upGrad)" />
          </g>

          {/* Candlesticks scattered around the trend */}
          <g opacity="0.8">
            {bars.map((bar, i) => (
              <g key={i} transform={`translate(${bar.x}, ${bar.y})`}>
                <line x1="10" y1="-15" x2="10" y2={bar.height + 15} stroke={bar.isUp ? "#10b981" : "#ef4444"} strokeWidth="2" />
                <rect x="4" y="0" width="12" height={bar.height} fill={bar.isUp ? "#10b981" : "#ef4444"} rx="1" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .animate-pulse-slow {
          animation: float 6s ease-in-out infinite alternate;
        }
        .animate-slide-left {
          animation: slide 40s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(15px); }
          100% { transform: translateY(-15px); }
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-400px); }
        }
      `}} />
    </div>
  );
}
