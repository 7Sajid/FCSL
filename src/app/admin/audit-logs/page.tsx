import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Audit Logs</h1>
        <p className="text-muted-foreground">Track all administrative actions across the platform.</p>
      </div>
      <Card className="border-slate-200 dark:border-slate-800">
        <CardContent className="p-8 text-center text-muted-foreground flex flex-col items-center justify-center min-h-[400px]">
          <ShieldAlert className="w-12 h-12 mb-4 text-slate-300 dark:text-slate-700" />
          <p className="font-medium text-lg text-slate-900 dark:text-white">Security & Audit</p>
          <p className="max-w-sm mt-2 text-sm">Immutable log of RBAC modifications and content updates.</p>
        </CardContent>
      </Card>
    </div>
  );
}
