import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payment Management</h1>
        <p className="text-muted-foreground">Approve deposits and process withdrawal requests.</p>
      </div>
      <Card className="border-slate-200 dark:border-slate-800">
        <CardContent className="p-8 text-center text-muted-foreground flex flex-col items-center justify-center min-h-[400px]">
          <CreditCard className="w-12 h-12 mb-4 text-slate-300 dark:text-slate-700" />
          <p className="font-medium text-lg text-slate-900 dark:text-white">Payments Module</p>
          <p className="max-w-sm mt-2 text-sm">Full CRUD architecture and transaction tables for payment approvals will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
