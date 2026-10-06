import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ExternalLink, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata = {
  title: "Market News | First Capital Securities Limited",
  description: "Latest news and press releases regarding the Bangladesh stock market.",
};

const DUMMY_NEWS = [
  {
    id: 1,
    date: "October 6, 2026",
    category: "Regulatory",
    title: "BSEC issues new directives for margin loans",
    content: "The Bangladesh Securities and Exchange Commission (BSEC) has issued new guidelines regarding the disbursement of margin loans by stockbrokers to enhance market stability and protect investors from excessive leverage.",
    source: "BSEC Press Release"
  },
  {
    id: 2,
    date: "October 5, 2026",
    category: "Corporate",
    title: "Square Pharma announces Q3 results, posts 15% EPS growth",
    content: "Square Pharmaceuticals Ltd. has reported a 15% year-on-year growth in Earnings Per Share (EPS) for the third quarter, driven by strong domestic sales and an expanding export portfolio.",
    source: "Corporate Disclosures"
  },
  {
    id: 3,
    date: "October 4, 2026",
    category: "Economy",
    title: "Remittance inflow hits record high in September",
    content: "Inward remittances have reached a new record in September, providing a significant boost to the country's foreign exchange reserves and potentially increasing liquidity in the capital market.",
    source: "Bangladesh Bank"
  }
];

export default function MarketNewsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Market News</h1>
        <p className="text-lg text-slate-500 mt-2">Latest financial news, regulatory updates, and corporate announcements.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {DUMMY_NEWS.map((newsItem) => (
          <Card key={newsItem.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader className="pb-3 flex-grow">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  {newsItem.category}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground font-medium">
                  <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                  {newsItem.date}
                </div>
              </div>
              <CardTitle className="text-xl text-primary leading-tight mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                {newsItem.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-slate-600 leading-relaxed line-clamp-3">
                {newsItem.content}
              </p>
            </CardContent>
            <CardFooter className="pt-4 border-t flex items-center justify-between text-sm">
              <span className="text-muted-foreground italic font-medium">Source: {newsItem.source}</span>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                Read More 
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
