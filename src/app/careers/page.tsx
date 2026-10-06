"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, Search, UploadCloud, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [isClient, setIsClient] = useState(false);
  
  // Application Modal State
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("fcsl_jobs");
    if (saved) {
      setJobs(JSON.parse(saved).filter((j: any) => j.status === "Published"));
    }
  }, []);

  const filteredJobs = jobs.filter(j => 
    j.title.toLowerCase().includes(search.toLowerCase()) || 
    j.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setIsApplyOpen(true);
    setIsSuccess(false);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mocking an API call to a backend (like Supabase)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // We simulate storing the application locally for now
      const existingApps = JSON.parse(localStorage.getItem("fcsl_applications") || "[]");
      const newApp = {
        id: `APP-${Date.now()}`,
        jobId: selectedJob?.id,
        jobTitle: selectedJob?.title,
        date: new Date().toISOString(),
        status: "New"
      };
      localStorage.setItem("fcsl_applications", JSON.stringify([newApp, ...existingApps]));
    }, 1500);
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Hero Section */}
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Join Our Team</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Build the future of capital markets in Bangladesh with First Capital Securities Limited.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-10 space-y-8">
        {/* Search & Filter */}
        <Card className="shadow-lg border-slate-200 dark:border-slate-800">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <Input 
                placeholder="Search open positions or departments..." 
                className="pl-10 h-12 text-base"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Open Positions ({filteredJobs.length})</h2>
          
          {filteredJobs.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium">No positions found</h3>
              <p className="text-muted-foreground mt-2">Check back later or try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow group border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</div>
                        <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</div>
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Deadline: {job.deadline}</div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button onClick={() => handleApplyClick(job)} className="w-full md:w-auto h-11 px-8 text-base shadow-sm">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Application Dialog */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <DialogTitle className="text-2xl">Application Submitted!</DialogTitle>
              <DialogDescription className="text-base max-w-sm">
                Thank you for applying to the <strong>{selectedJob?.title}</strong> position. Our HR team will review your application and get back to you shortly.
              </DialogDescription>
              <Button onClick={() => setIsApplyOpen(false)} className="mt-6 w-full max-w-xs h-11">
                Close Window
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
                <DialogDescription>
                  Please fill out the form below and attach your CV. We accept PDF, DOCX, and RTF files (Max 5MB).
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={submitApplication} className="space-y-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="e.g. Rahim" required />
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="e.g. Uddin" required />
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="rahim@example.com" required />
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+880 1..." required />
                  </div>
                  
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <textarea 
                      id="coverLetter" 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Why are you a good fit for this role?"
                    ></textarea>
                  </div>

                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="resume">Upload CV / Resume</Label>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center gap-2 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer relative">
                      <Input id="resume" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required accept=".pdf,.doc,.docx" />
                      <UploadCloud className="w-8 h-8 text-slate-400" />
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PDF or DOCX (Max 5MB)</p>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsApplyOpen(false)} disabled={isSubmitting}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
