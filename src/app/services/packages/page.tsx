import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Briefcase, HeartHandshake, Landmark, CheckCircle2, User, Globe, GraduationCap, Users, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Packages | First Capital Securities Limited",
  description: "Packages and Services provided by First Capital Securities Limited including BO Account Opening, IPO Processing, and Trading Facilities.",
};

const TOC_ITEMS = [
  { id: "our-packages", title: "Our Packages" },
  { id: "our-cares", title: "Our Cares" },
  { id: "treasury-bonds", title: "Treasury Bonds" },
];

const CARES_LIST = [
  "BO Account Opening.",
  "Counseling for new investor.",
  "Trading facilities in Dhaka & Chittagong Stock Exchange.",
  "IPO Processing.",
  "Internet trading facilities for all investors.",
  "Trading facilities over telephone/mobile.",
  "SMS Service.",
  "Our own OMS (Order Management System).",
  "E-Mail Service.",
  "Trading facilities for all investors in any Branches.",
  "De-materialization & Re-materialization of share.",
  "Pledging & Un-Pledging of share.",
  "Competitive commission & no CDBL Settlement charges.",
  "Providing best customer services with elite customer service team."
];

const PACKAGES = [
  {
    id: "romonia",
    name: "Romonia",
    subtitle: "(Women Investment Account)",
    eligibility: "Any female above 18 years",
    fee: "400tk",
    features: [
      "Comprehensive account opening fee",
      "Special rate of commission",
      "Affordable initial deposit",
      "Trade research & market report",
      "Free stock market awareness training",
      "Free email & SMS service",
    ],
    color: "pink",
    Icon: User
  },
  {
    id: "probashi",
    name: "Probashi",
    subtitle: "(NRB Investment Account)",
    eligibility: "Any Non-Resident Bangladeshi above 25 years",
    fee: "1000tk",
    features: [
      "Competitive account opening fee",
      "Special rate of commission",
      "Trade research & market report",
      "Free email & SMS service",
    ],
    color: "sky",
    Icon: Globe
  },
  {
    id: "tarunno",
    name: "Tarunno",
    subtitle: "(Student Investment Account)",
    eligibility: "Any Bangladeshi student between 18-25 years",
    fee: "350tk",
    features: [
      "Lowest account opening fee",
      "Special rate of commission",
      "Affordable initial deposit",
      "Trade research & market report",
      "Free stock market awareness training",
      "Free email & SMS service",
      "Referral commission and gift",
    ],
    color: "violet",
    Icon: GraduationCap
  },
  {
    id: "regular",
    name: "Regular",
    subtitle: "(General Investor Account)",
    eligibility: "Any person above 18 years",
    fee: "500tk",
    features: [
      "Comprehensive account opening fee",
      "Special rate of commission",
      "Affordable initial deposit",
      "Trade research & market report",
      "Free stock market awareness training",
      "Free email & SMS service",
    ],
    color: "blue",
    Icon: Users
  },
  {
    id: "vip",
    name: "VIP Privilege",
    subtitle: "(Special Privilege Investment Account)",
    eligibility: "Any investor with handsome initial investment amount",
    fee: "500tk",
    features: [
      "Lowest account opening fee",
      "Special rate of commission",
      "Affordable initial deposit",
      "Free Basic Fundamental Analysis Training",
      "Free Advanced Technical Analysis Training",
      "Special help from our trade research team",
      "Free email & SMS service",
    ],
    color: "amber",
    Icon: Crown
  }
];

const colorMap: Record<string, Record<string, string>> = {
  pink: {
    borderHover: "hover:border-pink-300",
    bgHover: "hover:bg-gradient-to-br hover:from-white hover:to-pink-50/80",
    iconBgHover: "group-hover:from-pink-100 group-hover:to-pink-200",
    iconTextHover: "group-hover:text-pink-600",
    feeHover: "group-hover:text-pink-600",
    dotHover: "group-hover:bg-pink-400",
    shadowHover: "hover:shadow-pink-900/10",
  },
  sky: {
    borderHover: "hover:border-sky-300",
    bgHover: "hover:bg-gradient-to-br hover:from-white hover:to-sky-50/80",
    iconBgHover: "group-hover:from-sky-100 group-hover:to-sky-200",
    iconTextHover: "group-hover:text-sky-600",
    feeHover: "group-hover:text-sky-600",
    dotHover: "group-hover:bg-sky-400",
    shadowHover: "hover:shadow-sky-900/10",
  },
  violet: {
    borderHover: "hover:border-violet-300",
    bgHover: "hover:bg-gradient-to-br hover:from-white hover:to-violet-50/80",
    iconBgHover: "group-hover:from-violet-100 group-hover:to-violet-200",
    iconTextHover: "group-hover:text-violet-600",
    feeHover: "group-hover:text-violet-600",
    dotHover: "group-hover:bg-violet-400",
    shadowHover: "hover:shadow-violet-900/10",
  },
  blue: {
    borderHover: "hover:border-blue-300",
    bgHover: "hover:bg-gradient-to-br hover:from-white hover:to-blue-50/80",
    iconBgHover: "group-hover:from-blue-100 group-hover:to-blue-200",
    iconTextHover: "group-hover:text-blue-600",
    feeHover: "group-hover:text-blue-600",
    dotHover: "group-hover:bg-blue-400",
    shadowHover: "hover:shadow-blue-900/10",
  },
  amber: {
    borderHover: "hover:border-amber-300",
    bgHover: "hover:bg-gradient-to-br hover:from-white hover:to-amber-50/80",
    iconBgHover: "group-hover:from-amber-100 group-hover:to-amber-200",
    iconTextHover: "group-hover:text-amber-600",
    feeHover: "group-hover:text-amber-600",
    dotHover: "group-hover:bg-amber-400",
    shadowHover: "hover:shadow-amber-900/10",
  },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200 pt-28 pb-16 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 opacity-70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="text-slate-900">Packages</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
              <Briefcase className="w-4 h-4" />
              <span>Brokerage & Investment</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Our Packages
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Explore the various brokerage and trading packages we offer to meet your investment needs with excellence and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-[300px] shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Table of Contents
              </h2>
              <nav className="space-y-1">
                {TOC_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-4 py-2.5 rounded-xl text-slate-600 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl flex flex-col gap-12">

            {/* Our Packages */}
            <section id="our-packages" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Requirements of BO Account Opening</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PACKAGES.map((pkg) => {
                  const colors = colorMap[pkg.color];
                  const Icon = pkg.Icon;

                  return (
                    <div
                      key={pkg.id}
                      className={`relative group bg-white rounded-3xl shadow-sm border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${colors.borderHover} ${colors.bgHover} flex flex-col items-center text-center overflow-hidden`}
                    >
                      {/* Background Icon watermark */}
                      <div className="absolute -top-12 -right-12 opacity-0 group-hover:opacity-[0.02] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                        <Icon className="w-64 h-64 text-slate-900" />
                      </div>

                      {/* Icon circle */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 ${colors.iconBgHover} transition-all duration-300 relative z-10`}>
                        <Icon className={`w-8 h-8 text-slate-500 ${colors.iconTextHover} transition-colors`} />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors relative z-10">{pkg.name}</h3>
                      <p className="text-sm font-medium text-slate-500 mb-6 relative z-10">{pkg.subtitle}</p>

                      <p className="text-sm text-slate-700 font-semibold mb-6 border-b border-slate-100 pb-4 w-full relative z-10">{pkg.eligibility}</p>

                      <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest relative z-10">Features:</div>
                      <p className={`text-2xl font-black text-slate-900 mb-6 ${colors.feeHover} transition-colors relative z-10`}>{pkg.fee}</p>

                      <ul className="text-left w-full space-y-3 relative z-10 flex-1">
                        {pkg.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                            <div className={`w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 ${colors.dotHover} transition-colors`} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Our Cares */}
            <section id="our-cares" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1 hover:border-emerald-200 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 overflow-hidden">
              <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform -rotate-12 group-hover:rotate-0">
                <HeartHandshake className="w-64 h-64 text-emerald-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 group-hover:border-emerald-100 transition-colors">
                  <HeartHandshake className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Our Cares</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {CARES_LIST.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white group-hover:shadow-sm border border-transparent hover:border-emerald-100 transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-700 font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Treasury Bonds */}
            <section id="treasury-bonds" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1 hover:border-amber-200 hover:bg-gradient-to-br hover:from-white hover:to-amber-50/50 overflow-hidden">
              <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                <Landmark className="w-64 h-64 text-amber-600" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-amber-100 transition-colors flex items-center gap-3">
                  <Landmark className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  Treasury Bonds
                </h2>

                <div className="prose prose-slate max-w-none mb-6">
                  <p className="text-slate-600 leading-relaxed">
                    Invest securely in Bangladesh Government Treasury Bonds. A low-risk investment option ensuring safe returns and a secure future.
                  </p>
                </div>

                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm group-hover:border-amber-200 transition-colors duration-300 bg-white p-2">
                  <Image
                    src="/treasury-bonds.png"
                    alt="Treasury Bonds Information"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </section>

          </main>
        </div>
      </section>
    </div>
  );
}
