import { Metadata } from "next";
import Link from "next/link";
import { MessageSquareWarning, Info, Mail, Clock, FileText, ChevronRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Complaints | First Capital Securities Limited",
  description: "Submit and manage your complaints or feedback regarding First Capital Securities Limited services.",
};

const TOC_ITEMS = [
  { id: "overview", title: "Overview" },
  { id: "how-to-file", title: "How to File a Complaint" },
  { id: "what-to-expect", title: "What to Expect" },
  { id: "contact", title: "Contact Information" },
];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200 pt-28 pb-16 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-rose-50/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 opacity-70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="text-slate-900">Complaints</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 font-semibold text-sm mb-6 border border-rose-100">
              <MessageSquareWarning className="w-4 h-4" />
              <span>Customer Support</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Complaints & Feedback
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We take your concerns seriously. Our dedicated support team is here to help resolve any issues you may have experienced.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        
        {/* Under Construction Alert */}
        <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 group-hover:w-2 transition-all duration-300" />
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-2 mt-0">Page Under Construction</h3>
            <p className="text-amber-800/90 leading-relaxed">
              We are currently upgrading our online digital complaints portal to serve you better. In the meantime, you can still file a complaint manually using the information provided below. We apologize for any inconvenience.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-[300px] shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Table of Contents
              </h2>
              <nav className="space-y-1">
                {TOC_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-4 py-2.5 rounded-xl text-slate-600 font-medium text-sm hover:bg-rose-50 hover:text-rose-700 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl flex flex-col gap-8">
              
              {/* Overview */}
              <section id="overview" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-rose-900/10 hover:-translate-y-1 hover:border-rose-200 hover:bg-gradient-to-br hover:from-white hover:to-rose-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  <MessageSquareWarning className="w-64 h-64 text-rose-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-rose-100 transition-colors flex items-center gap-3">
                    <MessageSquareWarning className="w-6 h-6 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
                    Overview
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      At First Capital Securities Limited, we strive to deliver the highest quality of service to all our clients. If you have experienced an issue with our services, platforms, or staff, we want to hear about it.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Your feedback is essential in helping us improve our operations, ensure compliance with regulatory standards, and maintain the trust you place in us as your brokerage partner.
                    </p>
                  </div>
                </div>
              </section>

              {/* How to File */}
              <section id="how-to-file" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1 hover:border-emerald-200 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform -rotate-12 group-hover:rotate-0">
                  <FileText className="w-64 h-64 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 group-hover:border-emerald-100 transition-colors">
                    <FileText className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-2xl font-bold text-slate-900 m-0">How to File a Complaint</h2>
                  </div>
                  
                  <div className="prose prose-slate max-w-none mb-6">
                    <p className="text-slate-600 leading-relaxed">
                      While our digital portal is under construction, you can file a complaint using the following methods:
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600"><strong className="text-slate-800">Email:</strong> Send a detailed email outlining your grievance to our support team at <a href="mailto:support@fcslbd.com" className="text-emerald-600 hover:underline">support@fcslbd.com</a>. Please include your BO Account number.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600"><strong className="text-slate-800">Phone:</strong> Call our customer service hotline during market hours.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600"><strong className="text-slate-800">In-Person:</strong> Visit any of our branches or our Corporate Office to submit a written complaint form.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* What to Expect */}
              <section id="what-to-expect" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/10 hover:-translate-y-1 hover:border-indigo-200 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  <Clock className="w-64 h-64 text-indigo-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-indigo-100 transition-colors flex items-center gap-3">
                    <Clock className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    What to Expect
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-6">
                      We aim to handle all complaints efficiently and transparently. Here is our standard resolution process:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center group-hover:border-indigo-100 group-hover:bg-white transition-colors duration-300 shadow-sm flex flex-col items-center">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mb-3">1</span>
                        <h4 className="font-bold text-slate-800 m-0 mb-2">Acknowledgment</h4>
                        <p className="text-xs text-slate-500 m-0">Within 24 Hours</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center group-hover:border-indigo-100 group-hover:bg-white transition-colors duration-300 shadow-sm flex flex-col items-center">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mb-3">2</span>
                        <h4 className="font-bold text-slate-800 m-0 mb-2">Investigation</h4>
                        <p className="text-xs text-slate-500 m-0">1-3 Business Days</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center group-hover:border-indigo-100 group-hover:bg-white transition-colors duration-300 shadow-sm flex flex-col items-center">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mb-3">3</span>
                        <h4 className="font-bold text-slate-800 m-0 mb-2">Resolution</h4>
                        <p className="text-xs text-slate-500 m-0">Final Verdict & Action</p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm">
                      * Complex complaints involving regulatory bodies may take up to 7-14 business days to fully resolve.
                    </p>
                  </div>
                </div>
              </section>

            {/* Contact Information */}
            <section id="contact" className="scroll-mt-32">
              <div className="bg-slate-900 text-white rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-900/20 hover:-translate-y-1 group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                
                <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Contact Information</h2>
                <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-rose-200 transition-colors">First Capital Securities Limited</h3>
                
                <div className="flex items-start gap-4 text-slate-300 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-rose-500/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="pt-2 text-sm leading-relaxed">
                    <p className="font-medium text-white mb-1">Corporate Office</p>
                    <p>9/E Motijheel C/A,</p>
                    <p>Dhaka-1000, Bangladesh.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-rose-50 hover:text-rose-700 transition-colors shadow-sm"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </section>

          </main>
        </div>
      </section>
    </div>
  );
}