"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit2, Trash2, MapPin, Briefcase } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Mock data
const INITIAL_JOBS = [
  { id: "JOB-2026-01", title: "Senior Equity Analyst", department: "Research", location: "Dhaka HQ", type: "Full-time", status: "Published", deadline: "2026-11-15", desc: "Analyze market data." },
  { id: "JOB-2026-02", title: "Compliance Officer", department: "Legal", location: "Dhaka HQ", type: "Full-time", status: "Published", deadline: "2026-10-30", desc: "Ensure regulatory compliance." },
  { id: "JOB-2026-03", title: "Branch Manager", department: "Retail", location: "Chittagong", type: "Full-time", status: "Draft", deadline: "2026-12-01", desc: "Manage branch operations." },
];

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-time");
  const [deadline, setDeadline] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Published");

  useEffect(() => {
    const saved = localStorage.getItem("fcsl_jobs");
    if (saved) {
      setJobs(JSON.parse(saved));
    } else {
      setJobs(INITIAL_JOBS);
      localStorage.setItem("fcsl_jobs", JSON.stringify(INITIAL_JOBS));
    }
  }, []);

  const saveToStorage = (newJobs: any[]) => {
    setJobs(newJobs);
    localStorage.setItem("fcsl_jobs", JSON.stringify(newJobs));
  };

  const filteredJobs = jobs.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.department.toLowerCase().includes(search.toLowerCase()));

  const handleOpenCreate = () => {
    setEditingId(null);
    setTitle(""); setDepartment(""); setLocation(""); setType("Full-time"); setDeadline(""); setDesc(""); setStatus("Published");
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (job: any) => {
    setEditingId(job.id);
    setTitle(job.title);
    setDepartment(job.department);
    setLocation(job.location);
    setType(job.type);
    setDeadline(job.deadline);
    setDesc(job.desc || "");
    setStatus(job.status || "Published");
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if(confirm("Are you sure you want to delete this job?")) {
      saveToStorage(jobs.filter(j => j.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = jobs.map(j => j.id === editingId ? { ...j, title, department, location, type, deadline, desc, status } : j);
      saveToStorage(updated);
    } else {
      const newJob = {
        id: `JOB-${new Date().getFullYear()}-${Math.floor(Math.random()*1000).toString().padStart(3,'0')}`,
        title, department, location, type, status, deadline, desc
      };
      saveToStorage([newJob, ...jobs]);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Career Management</h1>
          <p className="text-muted-foreground">Post and manage open positions on the public careers page.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={handleOpenCreate}>
              <Plus className="w-4 h-4" /> Post New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Job Posting" : "Create Job Posting"}</DialogTitle>
              <DialogDescription>
                Fill in the details for the open position. Published jobs will appear on the public careers page.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Senior Trade Broker" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g. Retail Trading" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Dhaka HQ" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Employment Type</Label>
                  <select 
                    id="type" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <Input id="deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="status">Status</Label>
                  <select 
                    id="status" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="desc">Job Description</Label>
                  <textarea 
                    id="desc" 
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Describe the role, qualifications, and benefits..."
                    required
                  ></textarea>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">{editingId ? "Save Changes" : "Publish Job"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center relative max-w-sm">
            <Search className="w-4 h-4 absolute left-3 text-slate-400" />
            <Input 
              placeholder="Search jobs..." 
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
                  <th className="px-6 py-3">Position</th>
                  <th className="px-6 py-3">Details</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900 dark:text-white">{job.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{job.id}</div>
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <Briefcase className="w-3.5 h-3.5" /> {job.department} ({job.type})
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </div>
                      <div className="text-xs text-slate-500">Deadline: {job.deadline}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        job.status === 'Published' 
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleOpenEdit(job)} className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(job.id)} className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredJobs.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                      No jobs found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
