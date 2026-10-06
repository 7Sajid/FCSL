import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, ShieldAlert, TrendingUp, CheckCircle, Wallet } from "lucide-react";

export const metadata = {
  title: "Notifications - First Capital Securities",
  description: "Account and market notifications.",
};

const NOTIFICATIONS = [
  {
    id: 1,
    type: "trade",
    title: "Order Executed",
    message: "Your BUY order for 100 shares of GP @ 285.50 has been fully executed.",
    time: "2 hours ago",
    read: false,
    icon: <TrendingUp className="w-5 h-5 text-emerald-500" />
  },
  {
    id: 2,
    type: "security",
    title: "New Login Detected",
    message: "A new login was detected from Windows (Chrome) at IP 103.111.xxx.xxx.",
    time: "Yesterday, 14:30",
    read: true,
    icon: <ShieldAlert className="w-5 h-5 text-amber-500" />
  },
  {
    id: 3,
    type: "fund",
    title: "Deposit Successful",
    message: "Your deposit of ৳ 50,000.00 via BEFTN has been credited to your account.",
    time: "Oct 2, 2026",
    read: true,
    icon: <Wallet className="w-5 h-5 text-blue-500" />
  },
  {
    id: 4,
    type: "system",
    title: "Monthly Statement Available",
    message: "Your monthly account statement for September 2026 is now ready for download.",
    time: "Oct 1, 2026",
    read: true,
    icon: <CheckCircle className="w-5 h-5 text-primary" />
  }
];

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Stay updated on your account activity.</p>
        </div>
        <Button variant="outline" size="sm">Mark all as read</Button>
      </div>

      <Card className="shadow-sm border-slate-200 dark:border-slate-800">
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {NOTIFICATIONS.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-4 sm:p-6 flex gap-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50 ${!notif.read ? 'bg-primary/5 dark:bg-primary/10' : ''}`}
              >
                <div className="shrink-0 mt-1">
                  {notif.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className={`font-semibold text-sm ${!notif.read ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
                      {notif.title}
                    </p>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{notif.message}</p>
                </div>
                {!notif.read && (
                  <div className="shrink-0 flex items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
