"use client";

import { useEffect, useState } from "react";

export function AppLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Completely remove from DOM
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* SVG Animated Candlesticks */}
        <svg width="240" height="120" viewBox="0 0 240 120" className="mb-6">
          <defs>
            <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Grid lines for aesthetics */}
          <path d="M 0 30 L 240 30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 0 60 L 240 60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 0 90 L 240 90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Candle 1 (Down) */}
          <g style={{ opacity: 0, animation: 'popIn 0.4s ease-out 0.2s forwards' }}>
            <line x1="30" y1="40" x2="30" y2="90" stroke="#ef4444" strokeWidth="2" filter="url(#glowRed)" />
            <rect x="22" y="50" width="16" height="30" fill="#ef4444" rx="2" filter="url(#glowRed)" />
          </g>

          {/* Candle 2 (Up) */}
          <g style={{ opacity: 0, animation: 'popIn 0.4s ease-out 0.4s forwards' }}>
            <line x1="75" y1="20" x2="75" y2="70" stroke="#22c55e" strokeWidth="2" filter="url(#glowGreen)" />
            <rect x="67" y="30" width="16" height="35" fill="#22c55e" rx="2" filter="url(#glowGreen)" />
          </g>

          {/* Candle 3 (Down) */}
          <g style={{ opacity: 0, animation: 'popIn 0.4s ease-out 0.6s forwards' }}>
            <line x1="120" y1="25" x2="120" y2="60" stroke="#ef4444" strokeWidth="2" filter="url(#glowRed)" />
            <rect x="112" y="35" width="16" height="15" fill="#ef4444" rx="2" filter="url(#glowRed)" />
          </g>

          {/* Candle 4 (Up) */}
          <g style={{ opacity: 0, animation: 'popIn 0.4s ease-out 0.8s forwards' }}>
            <line x1="165" y1="10" x2="165" y2="50" stroke="#22c55e" strokeWidth="2" filter="url(#glowGreen)" />
            <rect x="157" y="15" width="16" height="25" fill="#22c55e" rx="2" filter="url(#glowGreen)" />
          </g>
          
          {/* Candle 5 (Up/Gold breakout) */}
          <g style={{ opacity: 0, animation: 'popIn 0.4s ease-out 1.0s forwards' }}>
            <line x1="210" y1="5" x2="210" y2="35" stroke="#fbbf24" strokeWidth="2" filter="url(#glowGold)" />
            <rect x="202" y="10" width="16" height="20" fill="#fbbf24" rx="2" filter="url(#glowGold)" />
          </g>
        </svg>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes popIn {
            0% { transform: translateY(15px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}} />

        <div className="flex flex-col items-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide shadow-black drop-shadow-2xl mb-2">
            First Capital Securities Limited
          </h2>
          <p className="text-gold text-lg md:text-xl font-medium tracking-wide mb-6">
            Welcome to the market
          </p>
        </div>
        
        <div className="flex gap-1 items-center mt-2">
          <span className="text-white/60 text-sm font-semibold tracking-[0.25em] uppercase">Initializing</span>
          <span className="flex gap-1 ml-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </div>
      </div>
    </div>
  );
}
