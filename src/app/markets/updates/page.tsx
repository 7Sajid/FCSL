import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Market Updates | First Capital Securities Limited",
  description: "Daily market summaries and closing reports for DSE and CSE.",
};

const DUMMY_UPDATES = [
  {
    id: 1,
    time: "2026-10-06 14:30",
    title: "DSE Market Close: Indices finish mixed amid volatile trading",
    summary: "The benchmark index DSEX closed slightly lower after experiencing volatility throughout the trading session. Banking and Telecom sectors saw profit-taking while Pharmaceuticals remained resilient.",
    impact: "neutral",
  },
  {
    id: 2,
    time: "2026-10-06 11:15",
    title: "Mid-day Update: Market gains momentum",
    summary: "DSEX crossed the 6,200 mark backed by strong participation in blue-chip stocks. Total turnover crosses BDT 4.5 billion within the first hour of trading.",
    impact: "positive",
  },
  {
    id: 3,
    time: "2026-10-06 10:00",
    title: "Market Open: Bearish start following global cues",
    summary: "The market opened lower today as investors remained cautious following a slump in global markets overnight.",
    impact: "negative",
  }
];

export default function MarketUpdatesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Market Updates</h1>
        <p className="text-lg text-slate-500 mt-2">Daily market summaries, opening briefs, and closing reports.</p>
      </div>
      
      <div className="space-y-6">
        {DUMMY_UPDATES.map((update) => (
          <Card key={update.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl text-primary">{update.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground font-medium mt-1">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {update.time}
                </div>
              </div>
              <div>
                {update.impact === "positive" && <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600"><TrendingUp className="w-3 h-3 mr-1"/> Positive</Badge>}
                {update.impact === "negative" && <Badge variant="destructive"><TrendingDown className="w-3 h-3 mr-1"/> Negative</Badge>}
                {update.impact === "neutral" && <Badge variant="secondary"><Minus className="w-3 h-3 mr-1"/> Neutral</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                {update.summary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
