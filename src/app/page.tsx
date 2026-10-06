import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Users, Award, History } from "lucide-react";
import { MarketDashboard } from "@/components/home/MarketDashboard";
import { HeroStockAnimation } from "@/components/home/HeroStockAnimation";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero Section */}
      <section className="bg-[#040f1c] text-primary-foreground pt-28 pb-16 md:py-32 lg:py-40 relative overflow-hidden flex flex-col justify-center min-h-[100vh] md:min-h-[600px]">
        {/* Animated Stock Background */}
        <HeroStockAnimation />
        
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040f1c] via-[#040f1c]/50 to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040f1c]/70 via-transparent to-transparent z-0 pointer-events-none" />
        
        <div className="container relative z-10 w-full">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.2] sm:leading-[1.1]">
              Invest With Confidence.<br />
              <span className="text-gold">Trade With Intelligence.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-xl font-medium mt-2 sm:mt-0">
              Your trusted partner for smarter participation in Bangladesh&apos;s capital market.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 h-12" asChild>
                <Link href="/open-account">
                  Start Investing / Open BO Account
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Glass Widgets - Bottom Right */}
        <div className="relative mt-12 px-4 sm:px-8 md:px-0 md:mt-0 md:absolute md:bottom-10 md:right-10 z-20 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* DSEX Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl flex items-center gap-8 min-w-[260px] hover:bg-white/15 transition-colors">
            <div>
              <p className="text-white text-sm font-medium mb-1">DSEX</p>
              <p className="text-white text-3xl font-bold">5,450.52</p>
            </div>
            <div className="flex-1 text-right flex justify-end">
              {/* Fake red sparkline SVG */}
              <svg width="70" height="30" viewBox="0 0 70 30" className="overflow-visible opacity-90 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                <path d="M0 10 L12 20 L24 15 L36 25 L48 18 L60 28 L70 20" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="70" cy="20" r="3.5" fill="#ef4444" />
              </svg>
            </div>
          </div>
          
          {/* Turnover Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl flex items-center gap-8 min-w-[260px] hover:bg-white/15 transition-colors">
            <div>
              <p className="text-white text-sm font-medium mb-1">Turnover</p>
              <p className="text-white text-3xl font-bold">BDT 1,517.49 <span className="text-base text-white/80 font-medium">mn</span></p>
            </div>
            <div className="flex-1 text-right flex justify-end">
              {/* Fake green sparkline SVG */}
              <svg width="70" height="30" viewBox="0 0 70 30" className="overflow-visible opacity-90 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                <path d="M0 25 L12 15 L24 20 L36 8 L48 15 L60 5 L70 10" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="70" cy="10" r="3.5" fill="#22c55e" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Dashboard Section */}
      <section className="py-12 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          
          {/* Top: Our Services */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Services</h2>
              <Link href="/services/packages" className="text-success font-semibold hover:underline text-sm">See All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Retail Brokerage */}
              <div className="border border-slate-200 rounded-3xl p-8 bg-white hover:bg-[#0f4a2b] hover:border-[#0f4a2b] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start group cursor-default">
                <div className="w-14 h-14 bg-[#0f4a2b]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center text-[#0f4a2b] group-hover:text-white mb-6 transition-colors duration-500">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 leading-snug transition-colors duration-500">Retail Brokerage</h3>
                <p className="text-slate-500 group-hover:text-white/80 leading-relaxed transition-colors duration-500">We connect you with stock market opportunities to grow your retail investments in Bangladesh.</p>
              </div>
              {/* Research & Analysis */}
              <div className="border border-slate-200 rounded-3xl p-8 bg-white hover:bg-[#0f4a2b] hover:border-[#0f4a2b] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start group cursor-default">
                <div className="w-14 h-14 bg-[#0f4a2b]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center text-[#0f4a2b] group-hover:text-white mb-6 transition-colors duration-500">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 leading-snug transition-colors duration-500">Research & Analysis</h3>
                <p className="text-slate-500 group-hover:text-white/80 leading-relaxed transition-colors duration-500">In-depth research and analysis to guide your financial decisions in the capital market.</p>
              </div>
              {/* Digital Trading */}
              <div className="border border-slate-200 rounded-3xl p-8 bg-white hover:bg-[#0f4a2b] hover:border-[#0f4a2b] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start group cursor-default">
                <div className="w-14 h-14 bg-[#0f4a2b]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center text-[#0f4a2b] group-hover:text-white mb-6 transition-colors duration-500">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 leading-snug transition-colors duration-500">Digital Trading</h3>
                <p className="text-slate-500 group-hover:text-white/80 leading-relaxed transition-colors duration-500">Experience seamless digital trading with our fast and secure engineering platforms.</p>
              </div>
            </div>
          </div>

          {/* Bottom: Live-Market Dashboard */}
          <div className="bg-[#0f4a2b] rounded-[2rem] p-8 pb-0 text-white flex flex-col relative overflow-hidden shadow-xl w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Live-Market Dashboard</h2>
                <p className="text-emerald-50 text-base max-w-xl leading-relaxed">Simplifies complex data into beautiful, real-time charts.</p>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-lg rounded-full px-8 h-12 transition-colors shrink-0 text-base font-semibold">
                <Link href="/markets">
                  View details <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="transition-transform hover:-translate-y-1 duration-500">
              <MarketDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-20 border-y relative bg-slate-100"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-fixed"
          style={{
            backgroundImage: "url('/about-stats-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary font-bold text-sm rounded-full mb-4 shadow-sm backdrop-blur-sm">
              SERVING SINCE 1995
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
              A Legacy of Trust and Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Stat 1 */}
            <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/50 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-4 md:space-y-5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/40 hover:bg-primary transition-all duration-500 group relative overflow-hidden cursor-default">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-white/20 group-hover:to-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:text-white mb-2 shadow-inner group-hover:scale-110 transition-all duration-500 relative z-10">
                <Users className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:text-white group-hover:from-white group-hover:to-white transition-all duration-500 relative z-10">10,000+</h3>
              <p className="font-bold text-slate-500 group-hover:text-white/90 uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm relative z-10 transition-colors duration-500">Clients & Active Investors</p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/50 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-4 md:space-y-5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/40 hover:bg-gold transition-all duration-500 group relative overflow-hidden cursor-default">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-gradient-to-br from-gold/10 to-gold/5 group-hover:from-white/20 group-hover:to-white/10 rounded-2xl flex items-center justify-center text-gold group-hover:text-white mb-2 shadow-inner group-hover:scale-110 transition-all duration-500 relative z-10">
                <Award className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:text-white group-hover:from-white group-hover:to-white transition-all duration-500 relative z-10">DSE & CSE</h3>
              <p className="font-bold text-slate-500 group-hover:text-white/90 uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm relative z-10 transition-colors duration-500">Licensed Member Broker</p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/50 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-4 md:space-y-5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-success/40 hover:bg-success transition-all duration-500 group relative overflow-hidden cursor-default">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-gradient-to-br from-success/10 to-success/5 group-hover:from-white/20 group-hover:to-white/10 rounded-2xl flex items-center justify-center text-success group-hover:text-white mb-2 shadow-inner group-hover:scale-110 transition-all duration-500 relative z-10">
                <History className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:text-white group-hover:from-white group-hover:to-white transition-all duration-500 relative z-10">30+ Years</h3>
              <p className="font-bold text-slate-500 group-hover:text-white/90 uppercase tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm relative z-10 transition-colors duration-500">Market Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments Bento Box */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Bangladesh&apos;s capital market at your fingertips
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Access diverse investment opportunities across the Dhaka Stock Exchange (DSE) and Chittagong Stock Exchange (CSE) with our comprehensive platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">
            {/* Stocks (DSE & CSE) - Large Box */}
            <div className="md:col-span-7 md:row-span-2 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col relative hover:shadow-lg transition-all duration-300">
              <div className="pt-8 px-8 pb-4 flex justify-between items-end z-10">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">Stocks</h3>
                  <p className="text-slate-500 font-medium">Top Ranking Companies</p>
                </div>
                <Link href="/markets/stocks" className="text-sm font-semibold text-primary hover:underline">View All</Link>
              </div>
              
              <div className="px-8 pb-8 flex-1 flex flex-col gap-3">
                 {/* Stock Item 1 */}
                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shadow-inner">GP</div>
                     <div>
                       <div className="font-bold text-slate-900 text-base">Grameenphone Ltd.</div>
                       <div className="text-xs text-slate-500">Telecommunication</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold text-slate-900 text-base">৳ 310.20</div>
                     <div className="text-sm text-success font-semibold">+15.40 (4.2%)</div>
                   </div>
                 </div>
                 {/* Stock Item 2 */}
                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[11px] shadow-inner">SQUR</div>
                     <div>
                       <div className="font-bold text-slate-900 text-base">Square Pharmaceuticals</div>
                       <div className="text-xs text-slate-500">Pharmaceuticals</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold text-slate-900 text-base">৳ 215.50</div>
                     <div className="text-sm text-success font-semibold">+2.10 (0.98%)</div>
                   </div>
                 </div>
                 {/* Stock Item 3 */}
                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-[10px] shadow-inner">BATBC</div>
                     <div>
                       <div className="font-bold text-slate-900 text-base">British American Tobacco</div>
                       <div className="text-xs text-slate-500">Food & Allied</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold text-slate-900 text-base">৳ 518.70</div>
                     <div className="text-sm text-destructive font-semibold">-5.20 (1.0%)</div>
                   </div>
                 </div>
                 {/* Stock Item 4 */}
                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-[11px] shadow-inner">RENATA</div>
                     <div>
                       <div className="font-bold text-slate-900 text-base">Renata Limited</div>
                       <div className="text-xs text-slate-500">Pharmaceuticals</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold text-slate-900 text-base">৳ 1,210.50</div>
                     <div className="text-sm text-success font-semibold">+12.00 (1.0%)</div>
                   </div>
                 </div>
                 {/* Stock Item 5 */}
                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-[11px] shadow-inner">BXPHAR</div>
                     <div>
                       <div className="font-bold text-slate-900 text-base">Beximco Pharmaceuticals</div>
                       <div className="text-xs text-slate-500">Pharmaceuticals</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold text-slate-900 text-base">৳ 135.40</div>
                     <div className="text-sm text-success font-semibold">+1.80 (1.3%)</div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Mutual Funds */}
            <div className="md:col-span-5 md:row-span-1 rounded-3xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Mutual Funds</h3>
                  <p className="text-xs text-slate-500 mt-1">Diversified expert portfolios</p>
                </div>
                <Link href="/markets" className="text-xs font-semibold text-primary hover:underline">View All</Link>
              </div>
              <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">GRAMEENS2</div>
                    <div className="text-[11px] text-slate-500">Grameen One : Scheme Two</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-sm">৳ 15.20</div>
                    <div className="text-[11px] text-success font-semibold">+0.30 (2.0%)</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">RELIANCE1</div>
                    <div className="text-[11px] text-slate-500">Reliance Insurance Mutual Fund</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-sm">৳ 11.40</div>
                    <div className="text-[11px] text-success font-semibold">+0.10 (0.8%)</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">1STPRIMFMF</div>
                    <div className="text-[11px] text-slate-500">Prime Finance First Mutual Fund</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-sm">৳ 24.10</div>
                    <div className="text-[11px] text-destructive font-semibold">-0.20 (0.8%)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* IPOs */}
            <div className="md:col-span-5 md:row-span-1 rounded-3xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Recent IPOs</h3>
                <Link href="/services/ipo" className="text-xs font-semibold text-primary hover:underline">View All</Link>
              </div>
              <div className="bg-slate-50/50 rounded-2xl flex-1 flex flex-col gap-2 overflow-y-auto max-h-[240px]">
                
                <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-[10px]">TDL</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Techno Drugs Ltd.</div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Subscription Open</div>
                    </div>
                  </div>
                  <Button size="sm" className="text-[11px] h-7 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">Apply</Button>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[10px]">BHL</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Best Holdings Ltd.</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Subscription Closed</div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-[11px] h-7 px-3 rounded-full text-slate-400 bg-slate-50 cursor-not-allowed">Allocated</Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-[10px]">NRB</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">NRB Bank Limited</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Subscription Closed</div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-[11px] h-7 px-3 rounded-full text-slate-400 bg-slate-50 cursor-not-allowed">Allocated</Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-[10px]">SICL</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Sikder Insurance</div>
                      <div className="text-[11px] text-orange-500 font-semibold mt-0.5">Upcoming Soon</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-[11px] h-7 px-3 rounded-full text-orange-600 border-orange-200 hover:bg-orange-50">Details</Button>
                </div>

              </div>
            </div>

            {/* Treasury Bonds */}
            <div className="group md:col-span-12 md:row-span-1 rounded-3xl border border-slate-200 bg-white shadow-sm p-10 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden min-h-[250px] cursor-pointer">
               {/* Background Gradients (Visible on Hover) */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/0 group-hover:from-blue-50/80 group-hover:to-cyan-50/80 transition-colors duration-500 z-0" />
               <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] pointer-events-none transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, #000 3px, transparent 0)', backgroundSize: '60px 60px' }} />
               
               <div className="text-center z-10 flex flex-col items-center w-full max-w-4xl">
                 <div className="w-16 h-16 bg-slate-50 group-hover:bg-blue-600 border border-slate-200 group-hover:border-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:shadow-blue-500/30 group-hover:scale-110 transition-all duration-500">
                   <span className="text-3xl text-slate-400 group-hover:text-white font-serif transition-colors duration-500">৳</span>
                 </div>
                 <h3 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-950 transition-colors duration-300">Treasury Bonds</h3>
                 <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8 group-hover:text-slate-700 transition-colors duration-300">Earn fixed, reliable interest with regular payouts, securely backed by the Government of Bangladesh.</p>
                 
                 {/* Details / Badges */}
                 <div className="flex flex-wrap justify-center gap-4 w-full">
                   <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full group-hover:border-emerald-200 group-hover:shadow-sm transition-all duration-300">
                     <ShieldCheck className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                     <span className="text-sm font-semibold text-slate-700">100% Risk Free</span>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full group-hover:border-blue-200 group-hover:shadow-sm transition-all duration-300 delay-75">
                     <BarChart3 className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                     <span className="text-sm font-semibold text-slate-700">Fixed Returns (Up to 12%)</span>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full group-hover:border-purple-200 group-hover:shadow-sm transition-all duration-300 delay-150">
                     <Award className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                     <span className="text-sm font-semibold text-slate-700">Tax Rebate Facilities</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 relative overflow-hidden bg-slate-50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-success/5 blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10 px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-extrabold text-primary tracking-[0.2em] uppercase">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Financial Services</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Experience seamless execution and complete control over your investments with our state-of-the-art platforms and expert services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                <BarChart3 className="text-primary w-8 h-8 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors">Brokerage & Trading</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Execute trades swiftly across the Dhaka and Chittagong Stock Exchanges (DSE & CSE) using our lightning-fast Order Management System.</p>
              <Link href="/services/trading" className="inline-flex items-center text-primary font-semibold group/link">
                <span>Explore Trading</span>
                <span className="bg-primary/10 ml-2 p-1.5 rounded-full group-hover/link:bg-primary group-hover/link:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-success/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-success to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-success transition-all duration-500">
                <ShieldCheck className="text-success w-8 h-8 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-success transition-colors">Depository Services</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Ensure the absolute safety of your securities with our fully integrated, reliable CDBL depository management services.</p>
              <Link href="/services/depository" className="inline-flex items-center text-success font-semibold group/link">
                <span>View Depository</span>
                <span className="bg-success/10 ml-2 p-1.5 rounded-full group-hover/link:bg-success group-hover/link:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold transition-all duration-500">
                <Zap className="text-gold w-8 h-8 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-gold transition-colors">Digital Solutions</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Manage your portfolio, access real-time research, request fund withdrawals, and apply for IPOs instantly—all online.</p>
              <Link href="/services/online-services" className="inline-flex items-center text-gold font-semibold group/link">
                <span>Access Digital</span>
                <span className="bg-gold/10 ml-2 p-1.5 rounded-full group-hover/link:bg-gold group-hover/link:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
