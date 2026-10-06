import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, PhoneCall, Mail, FileQuestion } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Support - First Capital Securities",
  description: "Get help with your account.",
};

export default function SupportPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">How can we help you today?</h1>
        <p className="text-muted-foreground text-lg">Our dedicated support team is here to assist you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-primary" /> Phone Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">Call us for immediate assistance during trading hours (9:00 AM - 4:00 PM).</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">+880 1335 103873</p>
            <Button className="w-full" asChild>
              <a href="tel:+8801335103873">Call Now</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-500" /> WhatsApp Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">Chat with our customer service representatives instantly via WhatsApp.</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">+880 1335 103873</p>
            <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white" asChild>
              <a href="https://wa.me/8801335103873" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" /> Email Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">Send us an email anytime. We typically respond within 24 hours.</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100 break-all">support@firstcapital.com.bd</p>
            <Button variant="outline" className="w-full" asChild>
              <a href="mailto:support@firstcapital.com.bd">Send Email</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileQuestion className="w-5 h-5 text-purple-500" /> Help Center & FAQ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">Find answers to common questions about accounts, trading, and our platform.</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">Self-Service</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/faq">Visit Help Center</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
        <h3 className="font-semibold text-lg mb-2">Have a Complaint?</h3>
        <p className="text-muted-foreground text-sm mb-4">We take your feedback seriously. If you have any grievances, please let us know so we can improve our services.</p>
        <Button variant="link" className="text-primary font-semibold" asChild>
          <Link href="/complaints">File a Complaint &rarr;</Link>
        </Button>
      </div>
    </div>
  );
}
