import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Briefcase, Shield, Key } from "lucide-react";

export const metadata = {
  title: "Profile - First Capital Securities",
  description: "Manage your account profile and settings.",
};

export default function ProfilePage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Account Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and security settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar info */}
        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 text-center">
            <CardContent className="pt-6 pb-4 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl font-bold text-primary mb-4 border-4 border-white dark:border-slate-950 shadow-sm">
                RH
              </div>
              <h2 className="text-xl font-bold">Rakib Hasan</h2>
              <p className="text-sm text-muted-foreground">BO: 12015900XXXXXX21</p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5" /> Verified Investor
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Key className="w-4 h-4 text-muted-foreground" /> Password
                </div>
                <Button variant="link" size="sm" className="h-auto p-0">Change</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-muted-foreground" /> 2FA
                </div>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Enabled</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Details */}
        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base font-semibold">Personal Information</CardTitle>
              <Button variant="outline" size="sm">Edit Details</Button>
            </CardHeader>
            <CardContent className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3" /> Full Name</p>
                <p className="font-medium">Rakib Hasan</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Mail className="w-3 h-3" /> Email Address</p>
                <p className="font-medium">rakib.h@example.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="w-3 h-3" /> Phone Number</p>
                <p className="font-medium">+880 1711-000000</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Briefcase className="w-3 h-3" /> Occupation</p>
                <p className="font-medium">Software Engineer</p>
              </div>
              <div className="sm:col-span-2 space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> Mailing Address</p>
                <p className="font-medium">House 42, Road 7, Block C, Banani, Dhaka-1213, Bangladesh</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base font-semibold">Bank Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Bank Name</p>
                <p className="font-medium">City Bank PLC</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Branch</p>
                <p className="font-medium">Banani Branch</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Account Name</p>
                <p className="font-medium">Rakib Hasan</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Account Number</p>
                <p className="font-medium">1102XXXXXXXX4321</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Routing Number</p>
                <p className="font-medium">22527XXXX</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
