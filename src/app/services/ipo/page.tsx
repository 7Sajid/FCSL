import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, Tag, Layers, ArrowRight, Building2, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Recent IPOs | First Capital Securities Limited",
  description: "View recent and upcoming Initial Public Offerings (IPOs) available through First Capital Securities Limited.",
};

const IPO_LIST = [
  {
    id: "tdl",
    name: "Techno Drugs Ltd.",
    ticker: "TDL",
    status: "open",
    statusText: "Subscription Open",
    issuePrice: "৳ 34.00",
    lotSize: "100 Shares",
    startDate: "09 Jun 2024",
    endDate: "13 Jun 2024",
    color: "emerald",
  },
  {
    id: "sicl",
    name: "Sikder Insurance",
    ticker: "SICL",
    status: "upcoming",
    statusText: "Upcoming Soon",
    issuePrice: "৳ 10.00",
    lotSize: "500 Shares",
    startDate: "TBA",
    endDate: "TBA",
    color: "orange",
  },
  {
    id: "bhl",
    name: "Best Holdings Ltd.",
    ticker: "BHL",
    status: "closed",
    statusText: "Subscription Closed",
    issuePrice: "৳ 35.00",
    lotSize: "100 Shares",
    startDate: "14 Jan 2024",
    endDate: "18 Jan 2024",
    color: "blue",
  },
  {
    id: "nrb",
    name: "NRB Bank Limited",
    ticker: "NRB",
    status: "closed",
    statusText: "Subscription Closed",
    issuePrice: "৳ 10.00",
    lotSize: "500 Shares",
    startDate: "28 Jan 2024",
    endDate: "01 Feb 2024",
    color: "purple",
  }
];

export default function IPOPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, #ffffff 2px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-0" />
        
        <div className="container relative z-10 px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Recent IPOs</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Investment Opportunities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Initial Public <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Offerings</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Stay updated with the latest IPOs in the Bangladesh capital market. Apply easily through our integrated online platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            
            {IPO_LIST.map((ipo) => (
              <div 
                key={ipo.id}
                className="group bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 justify-between"
              >
                {/* Decorative background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none ${
                  ipo.color === 'emerald' ? 'from-emerald-500 to-transparent' : 
                  ipo.color === 'orange' ? 'from-orange-500 to-transparent' : 
                  ipo.color === 'blue' ? 'from-blue-500 to-transparent' : 'from-purple-500 to-transparent'
                }`} />

                <div className="flex-1 space-y-6 z-10">
                  {/* Header Row */}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm shadow-inner
                      ${ipo.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : ''}
                      ${ipo.color === 'orange' ? 'bg-orange-100 text-orange-700' : ''}
                      ${ipo.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                      ${ipo.color === 'purple' ? 'bg-purple-100 text-purple-700' : ''}
                    `}>
                      {ipo.ticker}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{ipo.name}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold
                          ${ipo.status === 'open' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : ''}
                          ${ipo.status === 'upcoming' ? 'bg-orange-50 text-orange-600 border border-orange-100' : ''}
                          ${ipo.status === 'closed' ? 'bg-slate-100 text-slate-500 border border-slate-200' : ''}
                        `}>
                          {ipo.status === 'open' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                          {ipo.statusText}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                        <Tag className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium uppercase tracking-wider">Issue Price</span>
                      </div>
                      <div className="font-semibold text-slate-900">{ipo.issuePrice}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium uppercase tracking-wider">Lot Size</span>
                      </div>
                      <div className="font-semibold text-slate-900">{ipo.lotSize}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium uppercase tracking-wider">Start Date</span>
                      </div>
                      <div className="font-semibold text-slate-900">{ipo.startDate}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium uppercase tracking-wider">End Date</span>
                      </div>
                      <div className="font-semibold text-slate-900">{ipo.endDate}</div>
                    </div>
                  </div>
                </div>

                {/* Action Column */}
                <div className="flex flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 md:min-w-[200px] z-10">
                  {ipo.status === 'open' ? (
                    <Link href={`/services/ipo-application?ticker=${ipo.ticker}`} className="w-full">
                      <button className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow-md hover:shadow-emerald-600/20 group/btn">
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  ) : ipo.status === 'upcoming' ? (
                    <button className="w-full py-3 px-6 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors">
                      View Details
                    </button>
                  ) : (
                    <div className="w-full flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-2 border border-slate-200">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold text-slate-500">Subscription<br />Closed</span>
                    </div>
                  )}
                </div>

              </div>
            ))}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-24">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">IPO Application Guide</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Applying for an IPO is simple with First Capital Securities Limited. Ensure your BO Account is active and funded before the subscription period ends.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">1</div>
                  <p className="text-sm text-slate-700">Open & activate your BO Account.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">2</div>
                  <p className="text-sm text-slate-700">Ensure sufficient fund balance for the lot size.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">3</div>
                  <p className="text-sm text-slate-700">Click Apply and submit your application.</p>
                </div>
              </div>

              <Link href="/open-account">
                <button className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors flex items-center justify-center gap-2">
                  Open BO Account
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
