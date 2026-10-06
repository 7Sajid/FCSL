import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, File } from "lucide-react";

export const metadata = {
  title: "Statements - First Capital Securities",
  description: "Download and view account statements.",
};

const STATEMENTS = [
  { id: "ST-092026", type: "Monthly Statement", period: "September 2026", date: "Oct 1, 2026", format: "PDF/CSV" },
  { id: "ST-082026", type: "Monthly Statement", period: "August 2026", date: "Sep 1, 2026", format: "PDF/CSV" },
  { id: "TC-1006", type: "Trade Confirmation", period: "Oct 6, 2026", date: "Oct 6, 2026", format: "PDF" },
  { id: "PR-1006", type: "Portfolio Report", period: "As of Oct 6, 2026", date: "Oct 6, 2026", format: "PDF/CSV" },
  { id: "BO-2026", type: "BO Account Statement", period: "FY 2025-2026", date: "Jul 1, 2026", format: "PDF" },
];

export default function StatementsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Statements & Reports</h1>
          <p className="text-muted-foreground">Access your trade confirmations and portfolio statements.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">Generate Custom Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Report Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 p-2">
              <Button variant="ghost" className="w-full justify-start font-medium bg-slate-100 dark:bg-slate-800">All Statements</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">Monthly Statements</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">Trade Confirmations</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">Portfolio Reports</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">Tax Certificates</Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Statement Type & Period</th>
                      <th className="px-6 py-4">Generated On</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {STATEMENTS.map((stmt) => (
                      <tr key={stmt.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 dark:text-slate-100">{stmt.type}</div>
                              <div className="text-xs text-muted-foreground">{stmt.period} • ID: {stmt.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {stmt.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <Eye className="w-4 h-4 mr-1.5" /> View
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Download className="w-4 h-4 mr-1.5" /> PDF
                            </Button>
                            {stmt.format.includes('CSV') && (
                              <Button variant="ghost" size="sm" className="h-8 text-slate-500">
                                <File className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
