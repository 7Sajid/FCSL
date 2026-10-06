"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit2, Trash2, Calendar, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Mock data
const INITIAL_IPOS = [
  { id: "IPO-001", company: "Best Holdings Ltd.", issueSize: "৳ 3,500 Mn", price: "৳ 35", startDate: "2026-11-10", endDate: "2026-11-16", status: "Upcoming" },
  { id: "IPO-002", company: "NRB Bank Ltd.", issueSize: "৳ 1,000 Mn", price: "৳ 10", startDate: "2026-10-01", endDate: "2026-10-07", status: "Active" },
  { id: "IPO-003", company: "Sikder Insurance", issueSize: "৳ 160 Mn", price: "৳ 10", startDate: "2025-12-21", endDate: "2025-12-28", status: "Closed" },
];

export default function AdminIPOPage() {
  const [ipos, setIpos] = useState(INITIAL_IPOS);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form state
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [issueSize, setIssueSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredIPOs = ipos.filter(ipo => ipo.company.toLowerCase().includes(search.toLowerCase()));

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: `IPO-00${ipos.length + 1}`,
      company,
      price: `৳ ${price}`,
      issueSize: `৳ ${issueSize} Mn`,
      startDate,
      endDate,
      status: "Upcoming"
    };
    setIpos([newItem, ...ipos]);
    setIsDialogOpen(false);
    // Reset
    setCompany(""); setPrice(""); setIssueSize(""); setStartDate(""); setEndDate("");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">IPO Management</h1>
          <p className="text-muted-foreground">Manage Initial Public Offerings and accept applications.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-primary">
              <Plus className="w-4 h-4" /> Add IPO
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create IPO Listing</DialogTitle>
              <DialogDescription>
                Add a new Initial Public Offering for clients to apply for.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Acme Corporation" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Offer Price (৳)</Label>
                  <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. 10" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Issue Size (Mn ৳)</Label>
                  <Input id="size" value={issueSize} onChange={(e) => setIssueSize(e.target.value)} placeholder="e.g. 500" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start">Subscription Start</Label>
                  <Input id="start" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end">Subscription End</Label>
                  <Input id="end" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="docs">Prospectus & Documents</Label>
                  <Input id="docs" type="file" multiple />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Create IPO</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center relative max-w-sm w-full">
            <Search className="w-4 h-4 absolute left-3 text-slate-400" />
            <Input 
              placeholder="Search companies..." 
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
                  <th className="px-6 py-3">Company</th>
                  <th className="px-6 py-3">Offering Details</th>
                  <th className="px-6 py-3">Dates & Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredIPOs.map((ipo) => (
                  <tr key={ipo.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900 dark:text-white">{ipo.company}</div>
                      <div className="text-xs text-muted-foreground mt-1">{ipo.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">Price: <span className="font-medium">{ipo.price}</span></div>
                      <div className="text-xs text-slate-500 mt-1">Size: {ipo.issueSize}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className={`w-max px-2.5 py-0.5 text-[10px] uppercase font-bold rounded-full ${
                          ipo.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' : 
                          ipo.status === 'Upcoming' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                          'bg-slate-100 text-slate-700 dark:bg-slate-800'
                        }`}>
                          {ipo.status}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3 h-3" /> {ipo.startDate} to {ipo.endDate}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" title="View Documents">
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-white">
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
