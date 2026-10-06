"use client";

import { useState, useEffect } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function AiMarketSummary() {
  const { provider } = useMarketData();
  const [summary, setSummary] = useState<string>("Analyzing market data...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function generateInsight() {
      setIsLoading(true);
      try {
        const [indices, gainers, losers] = await Promise.all([
          provider.getIndices(),
          provider.getTopGainers(),
          provider.getTopLosers()
        ]);
        
        const dsex = indices.find(i => i.symbol === "DSEX");
        
        // This is a mock prompt we would send to Gemini using the provided API key
        // In a real app, this should be done via a secure backend endpoint
        const prompt = `Analyze the Dhaka Stock Exchange market. DSEX is at ${dsex?.value} (${dsex?.changePercent}%). Top gainers include ${gainers.slice(0,3).map(g => g.symbol).join(', ')}. Top losers include ${losers.slice(0,3).map(l => l.symbol).join(', ')}. Provide a 2 sentence professional market intelligence summary.`;
        
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "YOUR_API_KEY_HERE";
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt }
                ]
              }
            ]
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          setSummary(data.candidates[0].content.parts[0].text);
        } else {
          setSummary("AI analysis currently unavailable.");
        }
      } catch (error) {
        setSummary("Failed to generate AI insights.");
      } finally {
        setIsLoading(false);
      }
    }
    
    generateInsight();
  }, [provider]);

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 shadow-sm mb-8">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-blue-800 text-lg">
          <Sparkles className="w-5 h-5 text-blue-500" />
          AI Market Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-3 py-1">
              <div className="h-2 bg-blue-200 rounded"></div>
              <div className="h-2 bg-blue-200 rounded w-5/6"></div>
            </div>
          </div>
        ) : (
          <p className="text-blue-900 leading-relaxed font-medium">
            {summary}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
