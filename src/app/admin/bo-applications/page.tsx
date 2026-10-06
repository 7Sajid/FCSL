"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, CheckCircle, XCircle, FileText } from "lucide-react";

const INITIAL_BOS = [
  { id: "BO-2026-9001", applicant: "Rahim Uddin", type: "Individual", branch: "Dhaka HQ", date: "2026-10-06", status: "Under Review" },
  { id: "BO-2026-9002", applicant: "TechCorp BD", type: "Company", branch: "Chittagong", date: "2026-10-05", status: "Documents Required" },
  { id: "BO-2026-9003", applicant: "Fatima Begum", type: "Joint", branch: "Sylhet", date: "2026-10-04", status: "Verified" },
  { id: "BO-2026-9004", applicant: "Kamal Hasan", type: "Individual", branch: "Digital", date: "2026-10-03", status: "Completed" },
];

export default function AdminBOMePage() {
  const [bos, setBos] = useState(INITIAL_BOS);
  const [search, setSearch] = useState("");

  const filteredBOs = bos.filter(b => b.applicant.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase()));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Completed": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Under Review": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "Documents Required": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "Rejected": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">BO Applications</h1>
          <p className="text-muted-foreground">Review and process new Beneficiary Owner account applications.</p>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center relative max-w-sm w-full">
              <Search className="w-4 h-4 absolute left-3 text-slate-400" />
              <Input 
                placeholder="Search by ID or Applicant..." 
                className="pl-9" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Pending</Button>
              <Button variant="outline" size="sm">Approved</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3">App ID & Date</th>
                  <th className="px-6 py-3">Applicant Details</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredBOs.map((bo) => (
                  <tr key={bo.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900 dark:text-white">{bo.id}</div>
                      <div className="text-xs text-muted-foreground mt-1">{bo.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{bo.applicant}</div>
                      <div className="text-xs text-slate-500 mt-1">{bo.type} • {bo.branch}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(bo.status)}`}>
                        {bo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" title="Review Docs">
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20" title="Approve">
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20" title="Reject">
                          <XCircle className="w-4 h-4" />
                        </Button>
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
  );
}
