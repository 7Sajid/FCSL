import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowDownToLine, ArrowUpFromLine, RefreshCcw, DollarSign, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Transactions - First Capital Securities",
  description: "View your account transaction history.",
};

const TRANSACTIONS_DATA = [
  { id: "TRX-88902", date: "2026-10-06 10:15 AM", type: "Trade", description: "Bought 100 GP @ 285.50", amount: -28550.00, balance: 121450.00 },
  { id: "TRX-88901", date: "2026-10-06 10:15 AM", type: "Fee", description: "Brokerage Commission", amount: -114.20, balance: 149885.80 },
  { id: "TRX-88900", date: "2026-10-05 14:20 PM", type: "Trade", description: "Sold 50 BATBC @ 510.20", amount: 25510.00, balance: 150000.00 },
  { id: "TRX-88899", date: "2026-10-02 09:00 AM", type: "Deposit", description: "Bank Transfer via City Bank", amount: 50000.00, balance: 124490.00 },
  { id: "TRX-88898", date: "2026-09-28 11:30 AM", type: "Dividend", description: "Cash Dividend - SQUAREPHARMA", amount: 1500.00, balance: 74490.00 },
  { id: "TRX-88897", date: "2026-09-15 15:00 PM", type: "Withdrawal", description: "Withdrawal to BRAC Bank", amount: -20000.00, balance: 72990.00 },
];

const getIconForType = (type: string) => {
  switch(type) {
    case 'Deposit': return <ArrowDownToLine className="w-4 h-4 text-emerald-600" />;
    case 'Withdrawal': return <ArrowUpFromLine className="w-4 h-4 text-amber-600" />;
    case 'Trade': return <RefreshCcw className="w-4 h-4 text-blue-600" />;
    case 'Fee': return <DollarSign className="w-4 h-4 text-red-600" />;
    case 'Dividend': return <DollarSign className="w-4 h-4 text-emerald-600" />;
    default: return <HelpCircle className="w-4 h-4 text-slate-500" />;
  }
};

export default function TransactionsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">View your account financial activity.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          <Button variant="outline">Export CSV</Button>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
          <CardTitle className="text-base font-semibold">Transaction History</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search descriptions..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Date & ID</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3 text-right">Amount (৳)</th>
                  <th className="px-4 py-3 text-right">Balance (৳)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {TRANSACTIONS_DATA.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-900 dark:text-slate-100">{trx.date}</div>
                      <div className="text-xs text-muted-foreground">{trx.id}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          {getIconForType(trx.type)}
                        </div>
                        <span className="font-medium">{trx.type}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{trx.description}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-bold ${trx.amount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-100'}`}>
                        {trx.amount > 0 ? '+' : ''}{trx.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground font-medium">
                      {trx.balance.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
