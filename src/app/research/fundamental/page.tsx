import { BookOpen, TrendingUp, Building2, Banknote, Briefcase, FileText, ArrowRight, ChevronDown, Smartphone, LineChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Fundamental Analysis Guide | First Capital Securities Limited",
  description: "Learn how to evaluate companies like an institutional analyst in the Bangladesh capital market.",
};

export default function FundamentalAnalysis() {
  return (
    <div className="min-h-screen bg-[#040f1c] text-slate-200 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <BookOpen className="mr-2 h-4 w-4" />
              Beginner's Guide to DSE & CSE
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Evaluate Companies Like an <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-gold">Institutional Analyst</span>
            </h1>
            
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-slate-300 font-medium">
                Mastering the Bangladesh Capital Market
              </p>
              <p className="text-lg md:text-xl text-slate-400">
                প্রাতিষ্ঠানিক বিশ্লেষকদের মতো কোম্পানি মূল্যায়ন করুন — বাংলাদেশ পুঁজিবাজারে দক্ষতা অর্জন
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 container mx-auto px-4 space-y-20 relative z-10">
        
        {/* Section 1: Introduction */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">The Foundations of Wealth Creation</h2>
                <h3 className="text-xl text-emerald-400 font-medium">সম্পদ সৃষ্টির মূলভিত্তি</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Investing in Bangladesh’s stock market is one of the most effective ways to build wealth and outpace inflation over the long term. Whether trading on the Dhaka Stock Exchange (DSE) or the Chittagong Stock Exchange (CSE), lasting success requires disciplined research and a sound understanding of market fundamentals.
              </p>
              <p className="text-slate-400 leading-relaxed">
                বাংলাদেশে শেয়ার বাজারে বিনিয়োগ দীর্ঘমেয়াদে সম্পদ গড়ে তোলার এবং মুদ্রাস্ফীতিকে ছাড়িয়ে যাওয়ার অন্যতম কার্যকর উপায়। ঢাকা স্টক এক্সচেঞ্জ (ডিএসই) বা চট্টগ্রাম স্টক এক্সচেঞ্জ (সিএসই) যেখানেই ট্রেড করুন না কেন, টেকসই সাফল্যের জন্য প্রয়োজন সুশৃঙ্খল গবেষণা এবং বাজারের মৌলিক বিষয়গুলোর সঠিক ধারণা।
              </p>
            </div>
            <div className="bg-[#0b1c2c] border border-white/10 rounded-2xl p-6 shadow-inner space-y-4">
               <div className="flex items-end gap-2 h-40 pt-4">
                 {[40, 60, 45, 80, 65, 95, 85].map((h, i) => (
                   <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-400/80 rounded-t-sm transition-all duration-1000 hover:opacity-80 cursor-pointer" style={{ height: `${h}%` }} />
                 ))}
               </div>
               <div className="border-t border-white/10 pt-4 flex justify-between text-sm text-slate-400">
                 <span>Sustainable Growth</span>
                 <span className="text-emerald-400 font-bold">+12.4%</span>
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: Market Operations & Trading Guide */}
        <div className="space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white">Market Operations & Trading Guide</h2>
            <h3 className="text-xl text-emerald-400 font-medium">বাজার পরিচালনা ও ট্রেডিং গাইড</h3>
            <p className="text-slate-400">
              Click on each section below to explore detailed information about market mechanics, trading techniques, and mobile access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300">
              <summary className="cursor-pointer p-6 list-none flex justify-between items-center bg-[#0b1c2c] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Primary Market (IPO)</h3>
                    <h4 className="text-sm text-blue-400">প্রাইমারি মার্কেট (আইপিও)</h4>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 border-t border-white/10 space-y-4 bg-white/5">
                <p className="text-slate-300 leading-relaxed">
                  An Initial Public Offering (IPO) is the first sale of stock by a company to the public. To apply in Bangladesh, you must open a Beneficiary Owner (BO) account with a brokerage, link your bank account, and maintain the minimum required balance. Applications can be submitted directly through the DSE/CSE portal or easily via your broker.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                  আইপিও হলো জনসাধারণের কাছে কোম্পানির প্রথম শেয়ার বিক্রি। বাংলাদেশে আবেদন করতে হলে ব্রোকার হাউজে বিও অ্যাকাউন্ট খুলতে হবে, ব্যাংক অ্যাকাউন্ট যুক্ত করতে হবে এবং নির্দিষ্ট ব্যালেন্স বজায় রাখতে হবে। ডিএসই/সিএসই পোর্টাল বা ব্রোকারের মাধ্যমে সহজেই আবেদন করা যায়।
                </p>
              </div>
            </details>

            <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300">
              <summary className="cursor-pointer p-6 list-none flex justify-between items-center bg-[#0b1c2c] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Secondary Market Process</h3>
                    <h4 className="text-sm text-emerald-400">সেকেন্ডারি মার্কেট প্রক্রিয়া</h4>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 border-t border-white/10 space-y-4 bg-white/5">
                <p className="text-slate-300 leading-relaxed">
                  After an IPO, shares are listed on the DSE/CSE, where investors actively buy and sell among themselves. The market operates through a pre-open phase, a continuous trading session, and a post-closing session. The Central Depository Bangladesh Limited (CDBL) securely holds shares electronically, while authorized brokers facilitate the trades.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                  আইপিও-এর পর শেয়ার ডিএসই/সিএসই-তে তালিকাভুক্ত হয়, যেখানে বিনিয়োগকারীরা নিজেদের মধ্যে শেয়ার কেনাবেচা করেন। বাজারটি প্রি-ওপেন, কন্টিনিউয়াস ট্রেডিং এবং পোস্ট-ক্লোজিং সেশনের মাধ্যমে কাজ করে। সিডিবিএল বৈদ্যুতিন বিন্যাসে শেয়ার ধারণ করে এবং অনুমোদিত ব্রোকাররা লেনদেন সম্পাদন করে।
                </p>
              </div>
            </details>

            <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300">
              <summary className="cursor-pointer p-6 list-none flex justify-between items-center bg-[#0b1c2c] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Trading Techniques</h3>
                    <h4 className="text-sm text-purple-400">ট্রেডিং কৌশল ও নিষ্পত্তি</h4>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 border-t border-white/10 space-y-4 bg-white/5">
                <p className="text-slate-300 leading-relaxed">
                  Successful trading involves evaluating company health (Fundamental Analysis) and studying price charts (Technical Analysis). You can place Market Orders (execute immediately) or Limit Orders (execute at a specific price). Trades follow a T+2 settlement cycle, meaning shares and funds are settled two working days after execution.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                  সফল লেনদেনের জন্য ফান্ডামেন্টাল এবং টেকনিক্যাল অ্যানালাইসিস জরুরি। আপনি মার্কেট অর্ডার (তাত্ক্ষণিক) বা লিমিট অর্ডার (নির্দিষ্ট দামে) দিতে পারেন। বাংলাদেশে লেনদেন T+2 সাইকেল অনুসরণ করে, অর্থাৎ লেনদেনের দুই কার্যদিবস পর শেয়ার ও তহবিল নিষ্পত্তি হয়।
                </p>
              </div>
            </details>

            <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300">
              <summary className="cursor-pointer p-6 list-none flex justify-between items-center bg-[#0b1c2c] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mobile Trading Options</h3>
                    <h4 className="text-sm text-pink-400">মোবাইল ট্রেডিং অপশন</h4>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 border-t border-white/10 space-y-4 bg-white/5">
                <p className="text-slate-300 leading-relaxed">
                  Trade directly from your smartphone using the official DSE Mobile App or our proprietary platform. To register, provide an active email and phone number to your broker to receive your secure User ID and Password. Features include real-time quotes, live portfolio tracking, and instant direct order placement from anywhere.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                  ডিএসই মোবাইল অ্যাপ বা ব্রোকারের নিজস্ব প্ল্যাটফর্ম ব্যবহার করে স্মার্টফোন থেকে ট্রেড করুন। নিবন্ধনের জন্য ব্রোকারকে আপনার ইমেইল ও ফোন নম্বর দিন এবং ইউজার আইডি ও পাসওয়ার্ড সংগ্রহ করুন। এর মাধ্যমে রিয়েল-টাইম দর দেখা, পোর্টফোলিও ট্র্যাক করা এবং সরাসরি অর্ডার প্লেস করা যায়।
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Section 3: Market Categories */}
        <div className="space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white">Understanding Market Categories</h2>
            <h3 className="text-xl text-gold font-medium">বাজারের ক্যাটাগরিগুলো বোঝা</h3>
            <p className="text-slate-400">
              DSE and CSE classify stocks into categories to help investors quickly assess a company's dividend history and operational compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                cat: 'A', name: 'Category A', bn: 'এ ক্যাটাগরি', 
                desc: 'Top-tier companies holding regular AGMs and declaring 10% or higher dividends annually.',
                descBn: 'নিয়মিত এজিএম আয়োজনকারী এবং বার্ষিক ১০% বা তার বেশি লভ্যাংশ ঘোষণাকারী শীর্ষস্থানীয় কোম্পানি।',
                color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30'
              },
              { 
                cat: 'B', name: 'Category B', bn: 'বি ক্যাটাগরি', 
                desc: 'Reliable companies holding regular AGMs but declaring dividends under 10%.',
                descBn: 'নিয়মিত এজিএম আয়োজনকারী নির্ভরযোগ্য কোম্পানি, কিন্তু যাদের লভ্যাংশ ১০%-এর কম।',
                color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30'
              },
              { 
                cat: 'N', name: 'Category N', bn: 'এন ক্যাটাগরি', 
                desc: 'Newly listed companies whose first dividend declaration is pending.',
                descBn: 'নতুন তালিকাভুক্ত কোম্পানি, যাদের প্রথম লভ্যাংশ ঘোষণা অপেক্ষমান।',
                color: 'text-gold', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30'
              },
              { 
                cat: 'Z', name: 'Category Z', bn: 'জেড ক্যাটাগরি', 
                desc: 'Underperforming companies failing to hold AGMs, pay dividends, or remain compliant.',
                descBn: 'নিয়মিত এজিএম, লভ্যাংশ প্রদান বা পরিচালনাগত নিয়ম পালনে ব্যর্থ দুর্বল কোম্পানি। উচ্চ ঝুঁকিপূর্ণ।',
                color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30'
              }
            ].map((c) => (
              <div key={c.cat} className={`bg-[#0b1c2c]/80 border ${c.border} rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl ${c.bg} group-hover:opacity-100 opacity-50 transition-opacity`} />
                <div className={`text-5xl font-black mb-4 ${c.color}`}>{c.cat}</div>
                <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
                <h4 className={`text-sm mb-4 ${c.color}`}>{c.bn}</h4>
                <p className="text-slate-300 text-sm mb-3">{c.desc}</p>
                <p className="text-slate-400 text-xs">{c.descBn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Regulatory Terms */}
        <div className="bg-gradient-to-br from-[#0b1c2c] to-[#040f1c] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white">Demystifying Regulatory Terms</h2>
            <h3 className="text-xl text-blue-400 font-medium">নিয়ন্ত্রক পরিভাষাগুলো সহজীকরণ</h3>
            <p className="text-slate-400">
              Understanding BSEC terminology is crucial for making informed, objective investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Banknote className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">NOCFPS</h4>
              <p className="text-sm font-medium text-emerald-400">Net Operating Cash Flow Per Share</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Shows the actual cash a company generates per share from its core operations. A positive, growing NOCFPS is a strong sign of financial health compared to manipulated profit figures.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/10 pt-3 mt-3">
                কোম্পানির মূল কার্যক্রম থেকে শেয়ার প্রতি কত নগদ অর্থ তৈরি হচ্ছে তা নির্দেশ করে। ধনাত্মক এবং ক্রমবর্ধমান NOCFPS একটি শক্তিশালী আর্থিক ভিত্তির লক্ষণ।
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">AGM Compliance</h4>
              <p className="text-sm font-medium text-blue-400">Annual General Meeting</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Companies must hold an AGM to maintain transparency with shareholders. Consistent, timely AGMs are a hallmark of good corporate governance and respect for investors.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/10 pt-3 mt-3">
                শেয়ারহোল্ডারদের সাথে স্বচ্ছতা বজায় রাখতে কোম্পানিগুলোকে অবশ্যই বার্ষিক সাধারণ সভা করতে হয়। নিয়মিত এজিএম সুশাসনের প্রমাণ দেয়।
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-gold">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">BEFTN / NPSB</h4>
              <p className="text-sm font-medium text-gold">Cash Dividend Adjustments</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                When a company pays cash dividends, tax is adjusted at the source. The net amount is then directly credited to your bank account via BEFTN or NPSB networks, creating hassle-free passive income.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/10 pt-3 mt-3">
                নগদ লভ্যাংশ দিলে উৎসে কর সমন্বয় করা হয়। নিট অর্থ সরাসরি BEFTN/NPSB-এর মাধ্যমে আপনার ব্যাংক অ্যাকাউন্টে জমা হয়, যা ঝামেলামুক্ত প্যাসিভ ইনকাম নিশ্চিত করে।
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center pt-8 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to apply your knowledge?</h2>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-transparent rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-emerald-900/50">
            <Link href="/open-account">
              Open Your BO Account Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

      </section>
    </div>
  );
}
