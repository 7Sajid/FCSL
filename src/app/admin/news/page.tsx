"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit2, Trash2, Clock, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Mock data
const INITIAL_NEWS = [
  { id: "NEWS-001", title: "FCSL Wins Best Brokerage 2026", category: "Awards", author: "Corporate Comms", publishDate: "2026-10-05", status: "Published", views: 1240 },
  { id: "NEWS-002", title: "Market Outlook: Q4 Tech Rally", category: "Market Updates", author: "Research Team", publishDate: "2026-10-06", status: "Draft", views: 0 },
  { id: "NEWS-003", title: "New API Trading Features Available", category: "Product", author: "Tech Team", publishDate: "2026-10-10", status: "Scheduled", views: 0 },
];

export default function AdminNewsPage() {
  const [news, setNews] = useState(INITIAL_NEWS);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Market Updates");

  const filteredNews = news.filter(n => n.title.toLowerCase().includes(search.toLowerCase()) || n.category.toLowerCase().includes(search.toLowerCase()));

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: `NEWS-00${news.length + 1}`,
      title,
      category,
      author: "Admin User",
      publishDate: new Date().toISOString().split('T')[0],
      status: "Published",
      views: 0
    };
    setNews([newItem, ...news]);
    setIsDialogOpen(false);
    setTitle(""); 
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">News & Content CMS</h1>
          <p className="text-muted-foreground">Manage articles, market updates, and corporate news.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4" /> Create Article
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Compose News Article</DialogTitle>
              <DialogDescription>
                Create a new content piece. You can save it as a draft or publish it immediately.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="title">Headline / Title</Label>
                  <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Bangladesh Bank announces new policy..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select 
                    id="category" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Market Updates</option>
                    <option>Corporate News</option>
                    <option>Product</option>
                    <option>Awards</option>
                    <option>Educational</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Image (URL or Upload)</Label>
                  <Input id="cover" type="file" accept="image/*" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="content">Article Content (Markdown / Rich Text)</Label>
                  <textarea 
                    id="content" 
                    className="flex min-h-[200px] font-mono w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Write your article content here..."
                    required
                  ></textarea>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input id="tags" placeholder="e.g. DSE, Economy, Tech" />
                </div>
              </div>
              <DialogFooter className="gap-2 sm:gap-0">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Save Draft</Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Publish Now</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center relative max-w-sm w-full">
              <Search className="w-4 h-4 absolute left-3 text-slate-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-9" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Published</Button>
              <Button variant="outline" size="sm">Drafts</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3">Article</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Status & Date</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredNews.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 max-w-xs">
                      <div className="font-semibold text-slate-900 dark:text-white truncate" title={item.title}>{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">By {item.author} • {item.views} views</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className={`w-max px-2.5 py-0.5 text-[10px] uppercase font-bold rounded-full tracking-wider ${
                          item.status === 'Published' 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                            : item.status === 'Draft'
                            ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          {item.status === 'Published' ? <Globe className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                          {item.publishDate}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-white">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                          <Trash2 className="w-4 h-4" />
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
