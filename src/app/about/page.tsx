import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Target, Lightbulb, ShieldCheck, Building2, Calendar, MapPin, Network, FileCheck, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Hero Header */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden flex items-center justify-center min-h-[40vh]"
        style={{
          backgroundImage: "url('/about-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-0" />
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Discover our history, mission, and the core values that make us your trusted partner in the Bangladesh capital market.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        
        {/* Our Approach Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary via-blue-900 to-slate-900 rounded-3xl shadow-2xl p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 flex items-center gap-4 text-white">
                <Target className="w-10 h-10 text-blue-400" />
                Our Approach
              </h2>
              <p className="text-lg md:text-2xl text-blue-50/90 leading-relaxed font-light">
                <Link href="https://fcslbd.com/" target="_blank" className="font-bold text-white hover:text-blue-300 hover:underline transition-colors">
                  First Capital Securities Limited
                </Link>{" "}
                is one of the oldest and foremost brokerage houses in Bangladesh. We are committed to providing a sophisticated trading environment with first-rate services, ensuring the highest standards of financial and transactional integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview Cards Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Company Overview</h2>
            <p className="text-lg text-slate-500 mt-3">A quick glance at our corporate footprint and services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Company Name</h3>
              <p className="text-xl font-bold text-slate-800">First Capital Securities Limited (FCSL)</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Founded</h3>
              <p className="text-xl font-bold text-slate-800">1995</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Headquarters</h3>
              <p className="text-xl font-bold text-slate-800">Dhaka, Bangladesh</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Branches</h3>
              <p className="text-lg font-semibold text-slate-700 leading-snug">Over 35 strategically located branches across Bangladesh.</p>
            </div>

            {/* Card 5 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Compliance</h3>
              <p className="text-base font-semibold text-slate-700 leading-relaxed">Member of DSE (TREC No # 70) and CSE (TREC No # 11).</p>
            </div>

            {/* Card 6 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Key Services</h3>
              <p className="text-base font-semibold text-slate-700 leading-relaxed">Stock broking, online trading, research reports, IPO guidance, portfolio management.</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>To provide a sophisticated trading environment with first-rate services, ensuring the highest standards of financial and transactional integrity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>To educate Bangladeshis on the benefits of investment and promote stock market participation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>Ensure finer services. Turn into a doorway for international investors into Bangladesh.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-t-blue-600 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span>To empower investors, promote financial literacy, and ensure a safe and satisfying trading environment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span>To encourage long-term wealth-building and environmentally friendly investment practices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span>To attract foreign investments and support the growth of the Bangladeshi stock market and economy.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-t-blue-700 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-700/30">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Core Values</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                <span><strong className="text-slate-800">Honesty:</strong> Nurturing the highest ethical business practices across all arena of business.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                <span><strong className="text-slate-800">Integrity:</strong> Maintaining the highest standards of financial transparency and transactional correctness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                <span><strong className="text-slate-800">Client-Satisfaction:</strong> Offering services to meet the diverse needs of clients.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Parallax Banner */}
        <div 
          className="rounded-3xl shadow-2xl p-10 md:p-16 mb-16 relative overflow-hidden bg-fixed bg-center bg-cover flex items-center"
          style={{ 
            backgroundImage: "url('/about-stats-bg.png')",
          }}
        >
          {/* Animated Overlay gradient to enhance the "bull" visibility while maintaining text readability */}
          <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> ACTIVE CLIENTS
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">10,000+</div>
            </div>
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> Trading Booths
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">35+</div>
            </div>
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> Traders
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">150+</div>
            </div>
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> GLORIOUS YEARS
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">30+</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Us / Our Trading Services</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                { text: "Trade Implementation", link: null },
                { text: "Spacious trading floor with Big Screen display", link: null },
                { text: "Online Trading", link: "https://puji.fcslbd.com/" },
                { text: "Telephone Trading", link: null },
                { text: "VIP Trading Booth", link: null },
                { text: "Dedicated Trading Booth for general Clients", link: null },
                { text: "Order Management System (OMS)", link: "https://puji.fcslbd.com/" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  {item.link ? (
                    <Link href={item.link} target="_blank" className="text-lg font-semibold text-primary hover:text-secondary hover:underline">
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-lg font-semibold text-slate-700">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workflow / Process Section */}
        <div 
          className="relative w-full py-24 mb-16 rounded-3xl overflow-hidden bg-fixed bg-center bg-cover shadow-2xl"
          style={{ backgroundImage: "url('/about-stats-bg.png')" }}
        >
          {/* Animated Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90" />

          <div className="text-center mb-16 relative z-10 px-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">How It Works</h2>
            <p className="text-lg text-slate-300 mt-4 font-light max-w-2xl mx-auto">A simple and secure pathway to your financial goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto relative z-10 px-6">
            
            {/* Card 01 */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0">
                01
              </div>
              <div className="w-16 h-16 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center shrink-0 z-10 mb-6 backdrop-blur-sm border border-blue-400/30 group-hover:scale-110 transition-transform shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Deposit</h3>
                <p className="text-slate-300 leading-relaxed font-light">Open a BO account and make your initial deposit to get started.</p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:translate-y-8">
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0">
                02
              </div>
              <div className="w-16 h-16 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center shrink-0 z-10 mb-6 backdrop-blur-sm border border-blue-400/30 group-hover:scale-110 transition-transform shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Analysis</h3>
                <p className="text-slate-300 leading-relaxed font-light">Get comprehensive market analysis of stocks and expert demonstrations.</p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0">
                03
              </div>
              <div className="w-16 h-16 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center shrink-0 z-10 mb-6 backdrop-blur-sm border border-blue-400/30 group-hover:scale-110 transition-transform shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Trade</h3>
                <p className="text-slate-300 leading-relaxed font-light">Execute trades seamlessly and build your portfolio with confidence.</p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:translate-y-8">
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0">
                04
              </div>
              <div className="w-16 h-16 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center shrink-0 z-10 mb-6 backdrop-blur-sm border border-blue-400/30 group-hover:scale-110 transition-transform shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Profit</h3>
                <p className="text-slate-300 leading-relaxed font-light">A simple way to realize profits from your investments anytime, anywhere.</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
