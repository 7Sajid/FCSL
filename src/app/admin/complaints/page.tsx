"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Edit2, MessageSquare, AlertCircle } from "lucide-react";

const INITIAL_COMPLAINTS = [
  { id: "TKT-1001", customer: "Jamal Bhuyan", category: "Trading Platform", status: "Open", priority: "High", assignedTo: "Support L2", date: "2026-10-06" },
  { id: "TKT-1002", customer: "Farhana Akter", category: "Fund Withdrawal", status: "In Progress", priority: "Medium", assignedTo: "Finance", date: "2026-10-05" },
  { id: "TKT-1003", customer: "Arif Hossain", category: "BO Account", status: "Resolved", priority: "Low", assignedTo: "Support L1", date: "2026-10-02" },
];

export default function AdminComplaintsPage() {
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
  const [search, setSearch] = useState("");

  const filteredComplaints = complaints.filter(c => c.customer.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Complaint Management</h1>
          <p className="text-muted-foreground">Manage and resolve customer tickets and complaints.</p>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center relative max-w-sm w-full">
            <Search className="w-4 h-4 absolute left-3 text-slate-400" />
            <Input 
              placeholder="Search by ticket or customer..." 
              className="pl-9" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3">Ticket</th>
                  <th className="px-6 py-3">Customer & Category</th>
                  <th className="px-6 py-3">Status / Priority</th>
                  <th className="px-6 py-3">Assigned To</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredComplaints.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900 dark:text-white">{c.id}</div>
                      <div className="text-xs text-muted-foreground mt-1">{c.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{c.customer}</div>
                      <div className="text-xs text-slate-500 mt-1">{c.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className={`w-max px-2.5 py-0.5 text-[10px] uppercase font-bold rounded-full ${
                          c.status === 'Open' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' : 
                          c.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                          'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
                        }`}>
                          {c.status}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          {c.priority === 'High' && <AlertCircle className="w-3 h-3 text-red-500" />}
                          {c.priority} Priority
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                        {c.assignedTo}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" title="Reply">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-white" title="Edit">
                          <Edit2 className="w-4 h-4" />
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
