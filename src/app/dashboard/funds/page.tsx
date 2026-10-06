import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowUpFromLine, RefreshCcw, Landmark, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Funds - First Capital Securities",
  description: "Manage deposits and withdrawals.",
};

export default function FundsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Funds & Transfers</h1>
        <p className="text-muted-foreground">Manage your cash balance, deposits, and withdrawals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balances */}
        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-white/80">Available Cash Balance</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-4xl font-bold">৳ 150,000.00</p>
              <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm">
                <span className="text-white/80">Uncleared</span>
                <span className="font-medium">৳ 0.00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Linked Bank Account</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">City Bank PLC</p>
                  <p className="text-sm text-muted-foreground">**** **** 4321</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-500 ml-auto" />
              </div>
              <Button variant="link" className="px-0 mt-2 text-sm h-auto text-primary">Manage Bank Accounts</Button>
            </CardContent>
          </Card>
        </div>

        {/* Action Forms */}
        <div className="md:col-span-2">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-0">
              <div className="flex gap-6">
                <button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary">Deposit Funds</button>
                <button className="pb-4 text-sm font-medium text-muted-foreground hover:text-slate-900 dark:hover:text-slate-100">Withdraw Funds</button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6 max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center gap-2 p-4 border-2 border-primary bg-primary/5 rounded-xl">
                    <RefreshCcw className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-sm">BEFTN / RTGS</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-200 dark:border-slate-700 hover:border-primary/50 rounded-xl transition-colors text-muted-foreground hover:text-slate-900 dark:hover:text-slate-100">
                    <ArrowDownToLine className="w-6 h-6" />
                    <span className="font-medium text-sm">bKash / Mobile</span>
                  </button>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount to Deposit (৳)</label>
                    <input 
                      type="number" 
                      placeholder="0.00" 
                      className="w-full text-lg p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg text-sm">
                    <p className="font-semibold mb-1">BEFTN Transfer Instructions:</p>
                    <p>Please transfer the exact amount from your linked City Bank account to our designated trust account. Processing may take up to 24 hours.</p>
                  </div>

                  <Button className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-md">
                    Proceed with Deposit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
