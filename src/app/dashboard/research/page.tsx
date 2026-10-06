import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, PieChart, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Research - First Capital Securities",
  description: "Market research and analysis reports.",
};

const REPORTS = [
  { title: "Weekly Market Wrap-up", date: "Oct 5, 2026", type: "Market Outlook", icon: <TrendingUp className="w-5 h-5 text-blue-500" /> },
  { title: "Pharmaceutical Sector Analysis Q3 2026", date: "Sep 28, 2026", type: "Sector Report", icon: <PieChart className="w-5 h-5 text-purple-500" /> },
  { title: "Grameenphone Ltd. (GP) - Earnings Review", date: "Sep 15, 2026", type: "Equity Research", icon: <FileText className="w-5 h-5 text-emerald-500" /> },
  { title: "Macroeconomic Update: Bangladesh Q2", date: "Sep 01, 2026", type: "Macro", icon: <BookOpen className="w-5 h-5 text-amber-500" /> },
];

export default function ResearchPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Research & Insights</h1>
        <p className="text-muted-foreground">Access expert market analysis and equity research.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-slate-50 dark:bg-slate-900 border-primary/20 hover:border-primary">
          <TrendingUp className="w-6 h-6 text-primary" />
          <span className="font-semibold">Market Outlook</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover:border-primary">
          <FileText className="w-6 h-6 text-slate-500" />
          <span className="font-semibold">Equity Research</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover:border-primary">
          <PieChart className="w-6 h-6 text-slate-500" />
          <span className="font-semibold">Sector Reports</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover:border-primary">
          <BookOpen className="w-6 h-6 text-slate-500" />
          <span className="font-semibold">Macro Analysis</span>
        </Button>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Latest Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REPORTS.map((report, idx) => (
            <Card key={idx} className="shadow-sm border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer group">
              <CardHeader className="pb-2 flex flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  {report.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">{report.type}</div>
                  <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors">{report.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-2">{report.date}</p>
                </div>
              </CardHeader>
              <CardFooter className="pt-2 pb-4 flex justify-end">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">Read Report &rarr;</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
