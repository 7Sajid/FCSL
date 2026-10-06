"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronRight, MessageCircle, ArrowRight, Share2, Copy, CheckCircle2, Headset, BookOpen, CreditCard, BarChart2, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "documents-required",
    category: "BO Account",
    question: "What documents are required to open an online BO account? / অনলাইন বিও অ্যাকাউন্ট খুলতে কী কী ডকুমেন্টস লাগে?",
    answer: "To open a BO account online, you need: 1) A clear scanned copy of your NID (Front & Back), 2) Passport-size photograph, 3) Bank Cheque leaf or Bank Statement (for bank verification), 4) e-TIN certificate (optional but recommended for tax benefits), and 5) Nominee's photograph and NID copy. The entire process takes about 2-3 business days.\n\nঅনলাইন বিও অ্যাকাউন্ট খুলতে আপনার প্রয়োজন হবে: ১) এনআইডির স্পষ্ট স্ক্যান কপি (উভয় দিক), ২) পাসপোর্ট সাইজ ছবি, ৩) ব্যাংক চেক বা ব্যাংক স্টেটমেন্ট, ৪) ই-টিআইএন (ট্যাক্স সুবিধা পেতে), এবং ৫) নমিনির ছবি ও এনআইডির কপি। অ্যাকাউন্টটি চালু হতে ২-৩ কার্যদিবস সময় লাগে।"
  },
  {
    id: "multiple-nominees",
    category: "BO Account",
    question: "Can I add multiple nominees to my BO account? / আমি কি আমার বিও অ্যাকাউন্টে একাধিক নমিনি যুক্ত করতে পারব?",
    answer: "Yes, you can add up to two nominees to your BO account. You will need to provide their photographs, NID copies, and specify the percentage of share for each nominee.\n\nহ্যাঁ, আপনি আপনার বিও অ্যাকাউন্টে সর্বোচ্চ দুইজন নমিনি যুক্ত করতে পারবেন। এর জন্য তাদের ছবি, এনআইডির কপি এবং প্রত্যেকের জন্য শেয়ারের শতকরা হার উল্লেখ করতে হবে।"
  },
  {
    id: "deposit-methods",
    category: "Deposits & Withdrawals",
    question: "How can I deposit funds into my trading account? / আমি কীভাবে আমার ট্রেডিং অ্যাকাউন্টে টাকা জমা দিতে পারি?",
    answer: "You can deposit funds instantly using bKash, NPSB (National Payment Switch Bangladesh), or BEFTN. For bKash, use the 'Pay Bill' or 'Merchant Pay' option. For BEFTN/NPSB, transfer funds directly to First Capital Securities' designated bank accounts.\n\nআপনি বিকাশ, NPSB বা BEFTN-এর মাধ্যমে তাৎক্ষণিকভাবে ফান্ড জমা করতে পারেন। বিকাশের ক্ষেত্রে 'পে বিল' বা 'মার্চেন্ট পে' অপশন ব্যবহার করুন। BEFTN/NPSB-এর জন্য সরাসরি আমাদের নির্ধারিত ব্যাংক অ্যাকাউন্টে ফান্ড ট্রান্সফার করুন।"
  },
  {
    id: "t2-settlement",
    category: "Deposits & Withdrawals",
    question: "What is the T+2 settlement cycle? / T+2 সেটেলমেন্ট সাইকেল কী?",
    answer: "The T+2 settlement means that when you sell a stock today (Trade Day or T), the funds will be settled and available for withdrawal after 2 business days. For example, if you sell on Sunday, the funds will be clear on Tuesday.\n\nT+2 সেটেলমেন্ট মানে হলো, আপনি যদি আজ (Trade Day বা T) শেয়ার বিক্রি করেন, তবে সেই টাকা ২ কার্যদিবস পর আপনার অ্যাকাউন্টে জমা হবে বা তোলার জন্য প্রস্তুত হবে। যেমন: রবিবার শেয়ার বিক্রি করলে মঙ্গলবার টাকা উত্তোলন করা যাবে।"
  },
  {
    id: "withdrawal-cutoff",
    category: "Deposits & Withdrawals",
    question: "What is the cutoff time for withdrawal requests? / টাকা উত্তোলনের রিকোয়েস্ট দেওয়ার নির্দিষ্ট সময় কী?",
    answer: "Withdrawal requests submitted before 2:00 PM on a business day are processed on the same day via BEFTN (takes 1-2 days to hit your bank). Requests made after 2:00 PM will be processed on the next business day.\n\nযেকোনো কার্যদিবসে দুপুর ২:০০ টার আগে সাবমিট করা উত্তোলনের রিকোয়েস্ট একই দিনে BEFTN-এর মাধ্যমে প্রসেস করা হয় (ব্যাংকে জমা হতে ১-২ দিন সময় লাগতে পারে)। ২:০০ টার পর রিকোয়েস্ট দিলে তা পরবর্তী কার্যদিবসে প্রসেস হবে।"
  },
  {
    id: "trading-hours",
    category: "Trading & OMS",
    question: "What are the DSE and CSE trading hours? / ডিএসই এবং সিএসই-এর লেনদেনের সময়সূচি কী?",
    answer: "Trading on both Dhaka Stock Exchange (DSE) and Chittagong Stock Exchange (CSE) happens from 10:00 AM to 2:20 PM, from Sunday to Thursday, excluding public and bank holidays.\n\nঢাকা (ডিএসই) এবং চট্টগ্রাম (সিএসই) স্টক এক্সচেঞ্জে লেনদেন রবিবার থেকে বৃহস্পতিবার সকাল ১০:০০ টা থেকে দুপুর ২:২০ মিনিট পর্যন্ত চলে। সরকারি ও ব্যাংক ছুটির দিনগুলোতে লেনদেন বন্ধ থাকে।"
  },
  {
    id: "puji-oms-login",
    category: "Trading & OMS",
    question: "How do I log in to the Puji OMS trading platform? / পুঁজি (Puji) OMS ট্রেডিং প্ল্যাটফর্মে কীভাবে লগইন করব?",
    answer: "After opening a BO account, you will receive your Client Code and initial password via Email/SMS. Visit the Puji OMS portal or download the mobile app, enter your Client Code as the username, your password, and the 2FA code sent to your registered mobile number.\n\nবিও অ্যাকাউন্ট খোলার পর আপনি ইমেইল/এসএমএসের মাধ্যমে আপনার ক্লায়েন্ট কোড এবং প্রাথমিক পাসওয়ার্ড পাবেন। পুঁজি OMS পোর্টাল বা মোবাইল অ্যাপে গিয়ে ইউজারনেম হিসেবে ক্লায়েন্ট কোড, পাসওয়ার্ড এবং আপনার মোবাইলে আসা 2FA কোড দিয়ে লগইন করুন।"
  },
  {
    id: "circuit-breaker",
    category: "Trading & OMS",
    question: "What is a circuit breaker in the stock market? / স্টক মার্কেটে সার্কিট ব্রেকার কী?",
    answer: "A circuit breaker is a regulatory mechanism by BSEC that limits how much a stock's price can increase or decrease in a single day (usually ±10% for standard stocks). It prevents extreme volatility and panic selling.\n\nসার্কিট ব্রেকার হলো বিএসইসি-র একটি নিয়ন্ত্রক ব্যবস্থা যা একদিনে কোনো শেয়ারের দাম কতটা বাড়তে বা কমতে পারে তা নির্ধারণ করে দেয় (সাধারণত স্ট্যান্ডার্ড শেয়ারের ক্ষেত্রে ±১০%)। এটি অতিরিক্ত অস্থিরতা এবং প্যানিক সেলিং রোধ করে।"
  },
  {
    id: "cdbl-renewal",
    category: "Fees & Taxes",
    question: "What is the annual CDBL renewal fee for a BO account? / বিও অ্যাকাউন্টের বার্ষিক সিডিবিএল (CDBL) রিনিউয়াল ফি কত?",
    answer: "The annual CDBL maintenance fee is BDT 450 per BO account, which is automatically deducted from your portfolio ledger every July. Please maintain sufficient balance to avoid account suspension.\n\nপ্রতিটি বিও অ্যাকাউন্টের বার্ষিক সিডিবিএল মেইনটেন্যান্স ফি ৪৫০ টাকা, যা প্রতি বছর জুলাই মাসে আপনার পোর্টফোলিও লেজার থেকে স্বয়ংক্রিয়ভাবে কেটে নেওয়া হয়। অ্যাকাউন্ট স্থগিত হওয়া এড়াতে পর্যাপ্ত ব্যালেন্স রাখুন।"
  },
  {
    id: "commission-tax",
    category: "Fees & Taxes",
    question: "What is the broker commission rate and capital gains tax? / ব্রোকার কমিশন রেট এবং ক্যাপিটাল গেইন ট্যাক্স কত?",
    answer: "Our standard broker commission is 0.40% on trading value, though it may vary for high-volume traders. Capital gains tax rules are determined by the NBR; currently, individual investors are subject to tax on capital gains exceeding BDT 50 Lakhs at progressive rates.\n\nআমাদের স্ট্যান্ডার্ড ব্রোকার কমিশন ট্রেডিং ভ্যালুর উপর ০.৪০%, যা হাই-ভলিউম ট্রেডারদের ক্ষেত্রে আলোচনা সাপেক্ষে পরিবর্তন হতে পারে। ক্যাপিটাল গেইন ট্যাক্স এনবিআর (NBR) দ্বারা নির্ধারিত হয়; বর্তমানে ৫০ লাখ টাকার বেশি ক্যাপিটাল গেইনের ওপর সাধারণ বিনিয়োগকারীদের জন্য প্রগ্রেসিভ হারে ট্যাক্স প্রযোজ্য।"
  }
];

const CATEGORIES = ["All", "BO Account", "Deposits & Withdrawals", "Trading & OMS", "Fees & Taxes"];

const categoryIcons = {
  "All": <BookOpen className="w-4 h-4" />,
  "BO Account": <CheckCircle2 className="w-4 h-4" />,
  "Deposits & Withdrawals": <CreditCard className="w-4 h-4" />,
  "Trading & OMS": <BarChart2 className="w-4 h-4" />,
  "Fees & Taxes": <BookOpen className="w-4 h-4" />,
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Check if there's a hash in the URL to open a specific FAQ
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      if (faqs.find(f => f.id === id)) {
        setOpenItem(id);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const copyLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n\n/g, " ")
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-[#040f1c] text-white pt-24 pb-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-[#040f1c] z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            How can we <span className="text-emerald-400">help you?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Find answers to common questions about accounts, trading, fees, and more at First Capital Securities.
          </p>

          {/* Floating Search Bar */}
          <div className="max-w-2xl mx-auto relative shadow-2xl group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            <Input
              type="text"
              placeholder="Search for answers (e.g., BO account, fees, deposit...)"
              className="w-full pl-14 pr-6 py-7 h-16 text-lg rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-emerald-500 focus-visible:border-transparent backdrop-blur-md transition-all shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-4 py-12 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Sidebar (Desktop) / Top Scroller (Mobile) */}
          <aside className="lg:w-1/4 shrink-0 flex flex-col gap-6">
            {/* Category Navigation */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 sticky top-28 hidden lg:flex flex-col gap-2">
              <h3 className="font-bold text-slate-800 text-lg mb-2 px-3 pt-2">Categories</h3>
              {CATEGORIES.map(cat => {
                const count = cat === "All" ? faqs.length : faqs.filter(f => f.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                        ? "bg-[#040f1c] text-white shadow-md font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`${isActive ? "text-emerald-400" : "text-slate-400"}`}>
                        {categoryIcons[cat as keyof typeof categoryIcons]}
                      </span>
                      <span>{cat}</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Horizontal Pills */}
            <div className="lg:hidden flex overflow-x-auto pb-4 -mx-4 px-4 gap-3 snap-x scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-none snap-start px-5 py-2.5 rounded-full font-medium text-sm transition-colors whitespace-nowrap shadow-sm border ${activeCategory === cat
                      ? "bg-[#040f1c] text-white border-transparent"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Helpdesk Mini Card */}
            <div className="bg-gradient-to-br from-[#040f1c] to-blue-950 text-white rounded-2xl p-6 shadow-xl border border-blue-900/50 hidden lg:block sticky top-[420px]">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                <Headset className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="font-bold text-xl mb-2">Still need help?</h4>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">Our customer relations team is ready to assist you with any compliance or trading questions.</p>
              <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-6 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5">
                <Link href="https://wa.me/8801335103873" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" /> Chat Support
                </Link>
              </Button>
            </div>
          </aside>

          {/* Right Side: Accordions */}
          <main className="lg:w-3/4 w-full">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 min-h-[500px]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  {activeCategory === "All" ? "All Questions" : activeCategory}
                </h2>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {filteredFaqs.length} results
                </span>
              </div>

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
                  <p className="text-slate-500">We couldn't find any FAQs matching your search.</p>
                  <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSearchQuery("")}>Clear Search</Button>
                </div>
              ) : (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                  value={openItem}
                  onValueChange={setOpenItem}
                >
                  {filteredFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      id={faq.id}
                      className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors shadow-sm data-[state=open]:border-emerald-200 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-emerald-500/20"
                    >
                      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all [&[data-state=open]>div>div>svg]:rotate-90">
                        <div className="flex items-start text-left gap-4 w-full justify-between">
                          <span className="font-bold text-lg text-slate-800 leading-snug pr-8">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2">
                        <div className="text-slate-600 leading-relaxed space-y-4 whitespace-pre-line text-[15px]">
                          {faq.answer}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                            {faq.category}
                          </span>
                          <button
                            onClick={(e) => copyLink(faq.id, e)}
                            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50 px-3 py-1.5 rounded-full border border-slate-200 hover:border-blue-200"
                          >
                            {copiedId === faq.id ? (
                              <><Check className="w-3.5 h-3.5 text-emerald-500" /> <span className="text-emerald-600">Copied!</span></>
                            ) : (
                              <><Copy className="w-3.5 h-3.5" /> Copy Link</>
                            )}
                          </button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </main>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-white py-24 border-t border-slate-100 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#040f1c] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            {/* Abstract decorative elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="md:w-3/5 relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to start trading?</h2>
              <p className="text-lg text-slate-300">Open your digital BO account in minutes and access the best of Bangladesh's capital market.</p>
            </div>

            <div className="md:w-2/5 flex flex-col sm:flex-row gap-4 relative z-10 justify-end w-full">
              <Button asChild size="lg" className="h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105">
                <Link href="/open-account">
                  Open Digital BO Account <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-base px-8 backdrop-blur-md transition-all">
                <Link href="https://wa.me/8801335103873" target="_blank">
                  <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
