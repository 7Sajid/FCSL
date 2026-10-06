import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Info, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata = {
  title: "IPO Applications - First Capital Securities",
  description: "Apply for upcoming IPOs.",
};

const UPCOMING_IPOS = [
  { 
    company: "TechNova Solutions Ltd.", 
    sector: "IT Sector",
    faceValue: 10,
    premium: 15,
    cutOffPrice: 25,
    minAmount: 10000,
    subscriptionOpen: "Oct 10, 2026",
    subscriptionClose: "Oct 17, 2026",
    status: "Upcoming",
    prospectusUrl: "#"
  },
  { 
    company: "GreenEnergy Power Co.", 
    sector: "Fuel & Power",
    faceValue: 10,
    premium: 0,
    cutOffPrice: 10,
    minAmount: 10000,
    subscriptionOpen: "Oct 2, 2026",
    subscriptionClose: "Oct 8, 2026",
    status: "Open",
    prospectusUrl: "#"
  }
];

const PAST_APPLICATIONS = [
  {
    company: "BestHoldings Ltd.",
    dateApplied: "Sep 15, 2026",
    amount: 10000,
    status: "Allotted",
    shares: 400
  },
  {
    company: "AgriTech BD",
    dateApplied: "Aug 02, 2026",
    amount: 10000,
    status: "Not Allotted",
    shares: 0,
    refundStatus: "Refunded"
  }
];

export default function IPOPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">IPO Applications</h1>
        <p className="text-muted-foreground">Subscribe to Initial Public Offerings directly from your account.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Active & Upcoming IPOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UPCOMING_IPOS.map((ipo, idx) => (
            <Card key={idx} className={`shadow-sm border-slate-200 dark:border-slate-800 ${ipo.status === 'Open' ? 'ring-1 ring-primary/50' : ''}`}>
              <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-primary">{ipo.company}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{ipo.sector}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${ipo.status === 'Open' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                    {ipo.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Issue Price</p>
                    <p className="font-semibold">৳ {ipo.cutOffPrice}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Min. Application</p>
                    <p className="font-semibold">৳ {ipo.minAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Opens On</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{ipo.subscriptionOpen}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Closes On</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{ipo.subscriptionClose}</p>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-xs text-muted-foreground flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
                  <p>General Public Quota: Requires minimum investment of ৳50,000 in secondary market to be eligible.</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-4 px-6 gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white" disabled={ipo.status !== 'Open'}>
                  Apply Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Prospectus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">My Applications</h2>
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Company</th>
                    <th className="px-6 py-4">Applied On</th>
                    <th className="px-6 py-4 text-right">Amount (৳)</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-right">Allotted Shares</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {PAST_APPLICATIONS.map((app, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-slate-100">{app.company}</td>
                      <td className="px-6 py-4 text-muted-foreground">{app.dateApplied}</td>
                      <td className="px-6 py-4 text-right font-medium">{app.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          {app.status === 'Allotted' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <AlertCircle className="w-4 h-4 text-slate-400" />}
                          <span className={`font-semibold ${app.status === 'Allotted' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>{app.status}</span>
                        </div>
                        {app.refundStatus && <div className="text-[10px] text-muted-foreground mt-0.5">{app.refundStatus}</div>}
                      </td>
                      <td className="px-6 py-4 text-right font-bold">{app.shares > 0 ? app.shares : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
