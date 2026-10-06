"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Info, Users, MapPin, Shield,
  Package, FileText, Smartphone, Zap,
  TrendingUp, BarChart2, Newspaper,
  PieChart, UserPlus, Monitor, BookOpen,
  Edit, Trash2, ArrowDownCircle, CreditCard, CheckCircle2, ArrowUpCircle, Download, File, ClipboardList,
  Radio, Briefcase, HelpCircle, MessageSquareWarning, Moon, Sun
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [marketStatus, setMarketStatus] = useState("CLOSED");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Market Status Logic
    const checkMarketStatus = () => {
      const now = new Date();
      // Get time in Dhaka timezone
      const dhakaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
      const day = dhakaTime.getDay(); // 0 is Sunday, 6 is Saturday
      const hours = dhakaTime.getHours();
      const minutes = dhakaTime.getMinutes();

      // Sun (0) to Thu (4)
      if (day >= 0 && day <= 4) {
        const timeInMinutes = hours * 60 + minutes;
        const openTime = 10 * 60; // 10:00
        const closeTime = 14 * 60 + 20; // 14:20

        if (timeInMinutes >= openTime && timeInMinutes <= closeTime) {
          setMarketStatus("OPEN");
        } else {
          setMarketStatus("CLOSED");
        }
      } else {
        setMarketStatus("CLOSED"); // Fri, Sat closed
      }
    };
    
    checkMarketStatus();
    const interval = setInterval(checkMarketStatus, 60000); // Check every minute

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md border-b-blue-200" : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"}`}>
      {/* Top Utility Bar */}
      <div className="border-b bg-primary text-primary-foreground text-xs py-1.5 hidden lg:block overflow-hidden w-full">
        <div className="w-full px-4 flex items-center justify-between">
          <div className="flex gap-4 whitespace-nowrap items-center shrink-0 pr-4 bg-primary z-20">
            <span>Market Status: <strong className={marketStatus === "OPEN" ? "text-emerald-400" : "text-red-400"}>{marketStatus}</strong></span>
            <span>DSE: 10:00 - 14:20</span>
            <span>CSE: 10:00 - 14:20</span>
          </div>
          
          {/* Moving Ticker */}
          <div className="flex-1 overflow-hidden relative h-5 mx-4 flex items-center border-l border-r border-primary-foreground/20 px-2 mask-image-gradient w-full">
            <div className="flex items-center gap-10 animate-marquee whitespace-nowrap absolute left-0">
              {/* Duplicate set for infinite seamless effect */}
              {[1, 2, 3, 4].map((set) => (
                <div key={set} className="flex items-center gap-10 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">DSEX</span>
                    <span className="font-bold">5,474.14</span>
                    <span className="text-[10px] text-slate-300">Broad index</span>
                    <span className="text-red-400">▼ 8.21 (-0.15%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">DS30</span>
                    <span className="font-bold">2,083.54</span>
                    <span className="text-[10px] text-slate-300">Blue-chip 30</span>
                    <span className="text-red-400">▼ 1.75 (-0.08%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">DSES</span>
                    <span className="font-bold">1,087.05</span>
                    <span className="text-[10px] text-slate-300">Shariah</span>
                    <span className="text-red-400">▼ 2.62 (-0.24%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">DSME</span>
                    <span className="font-bold">1,245.50</span>
                    <span className="text-[10px] text-slate-300">SME Index</span>
                    <span className="text-emerald-400">▲ 12.4 (1.01%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">CDSET</span>
                    <span className="font-bold">11,200.50</span>
                    <span className="text-[10px] text-slate-300">CSE Broad</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 shrink-0 pl-4 bg-primary z-20 items-center justify-end">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/faq" className="hover:underline">Help</Link>
            <div className="flex gap-2 border-l border-primary-foreground/20 pl-4 items-center">
              <button className="font-bold text-emerald-400">English</button>
              <button className="opacity-70 hover:opacity-100 transition-opacity">বাংলা</button>
              <button onClick={toggleTheme} className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" aria-label="Toggle Theme">
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-slate-300" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container flex h-24 items-center justify-between">
        <div className="flex gap-8 items-center w-full">
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/logo-transparent.png" 
              alt="First Capital Securities Limited Logo" 
              width={420} 
              height={96} 
              className="h-[96px] w-[420px] object-contain mix-blend-multiply"
              priority
            />
          </Link>
          <nav className="hidden xl:flex gap-1 items-center ml-auto">
            <Link href="/" className="relative group px-4 py-2.5 flex items-center rounded-xl cursor-pointer">
              <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-all duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-800'}`}>Home</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full transition-all duration-300" />
              <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>About Us</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[280px] p-2 rounded-xl shadow-lg border-muted">
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/about"><Info className="mr-3 h-5 w-5 text-muted-foreground" /> First Capital Securities Limited</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/about/board-of-members"><Users className="mr-3 h-5 w-5 text-muted-foreground" /> Board of Members</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/about/our-offices"><MapPin className="mr-3 h-5 w-5 text-muted-foreground" /> Our Offices</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/privacy-policy"><Shield className="mr-3 h-5 w-5 text-muted-foreground" /> Privacy Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>Our Services</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[260px] p-2 rounded-xl shadow-lg border-muted">
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/services/packages"><Package className="mr-3 h-5 w-5 text-muted-foreground" /> Packages</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/services/ipo-application"><FileText className="mr-3 h-5 w-5 text-muted-foreground" /> IPO Application</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/services/puji-app"><Smartphone className="mr-3 h-5 w-5 text-muted-foreground" /> Puji App</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="http://120.50.7.122:7923/zab/login" target="_blank" rel="noopener noreferrer"><Zap className="mr-3 h-5 w-5 text-muted-foreground" /> Prottoy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>Market Info</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[260px] p-2 rounded-xl shadow-lg border-muted">
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/markets/updates"><TrendingUp className="mr-3 h-5 w-5 text-muted-foreground" /> Market Update</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/markets/indices"><BarChart2 className="mr-3 h-5 w-5 text-muted-foreground" /> Market Indices</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/markets/news"><Newspaper className="mr-3 h-5 w-5 text-muted-foreground" /> Market News</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="https://firstcapitalnews.com/" target="_blank" rel="noopener noreferrer"><Radio className="mr-3 h-5 w-5 text-muted-foreground" /> First Capital News Update</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>Research</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[260px] p-2 rounded-xl shadow-lg border-muted">
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/research/fundamental"><PieChart className="mr-3 h-5 w-5 text-muted-foreground" /> Fundamental Analysis</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>Puji OMS</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[280px] p-2 rounded-xl shadow-lg border-muted">
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/oms/signup"><UserPlus className="mr-3 h-5 w-5 text-muted-foreground" /> Puji SignUp Form</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/oms/desktop"><Monitor className="mr-3 h-5 w-5 text-muted-foreground" /> Puji OMS Desktop Mode</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/oms/mobile"><Smartphone className="mr-3 h-5 w-5 text-muted-foreground" /> Puji OMS Mobile Mode</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/oms/manual"><BookOpen className="mr-3 h-5 w-5 text-muted-foreground" /> Puji User Manual</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>Forms and Payments</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[340px] p-2 rounded-xl shadow-lg border-muted h-[400px] overflow-y-auto">
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/forms/bo-online"><FileText className="mr-3 h-5 w-5 text-muted-foreground" /> FCSL Online BO Form</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/oms/signup"><UserPlus className="mr-3 h-5 w-5 text-muted-foreground" /> Puji SignUp Form</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/forms/bo-modification"><Edit className="mr-3 h-5 w-5 text-muted-foreground" /> BO Account Modification Form</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/forms/bo-closing"><Trash2 className="mr-3 h-5 w-5 text-muted-foreground" /> BO Account Closing Form</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/payments/deposit"><ArrowDownCircle className="mr-3 h-5 w-5 text-muted-foreground" /> Fund Deposit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/payments/payment"><CreditCard className="mr-3 h-5 w-5 text-muted-foreground" /> Payment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/payments/success"><CheckCircle2 className="mr-3 h-5 w-5 text-muted-foreground" /> Payment Successful Form</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/payments/withdrawal"><ArrowUpCircle className="mr-3 h-5 w-5 text-muted-foreground" /> Fund Withdrawal Requisition Form</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/forms/downloads"><Download className="mr-3 h-5 w-5 text-muted-foreground" /> Download Forms</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/forms/bo-manual"><File className="mr-3 h-5 w-5 text-muted-foreground" /> Manual BO Account Form</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/forms/cdbl-bo"><ClipboardList className="mr-3 h-5 w-5 text-muted-foreground" /> CDBL BO Opening Form</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative group px-4 py-2.5 flex items-center gap-1.5 outline-none cursor-pointer rounded-xl">
                <span className={`relative z-10 font-bold group-hover:text-blue-700 transition-colors duration-300 tracking-wide text-[16px] whitespace-nowrap ${isScrolled ? 'text-blue-700' : 'text-slate-700'}`}>More</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:-rotate-180 relative z-10" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-primary rounded-t-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/80 rounded-xl transition-all duration-300 z-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[260px] p-2 rounded-xl shadow-lg border-muted">

                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/careers"><Briefcase className="mr-3 h-5 w-5 text-muted-foreground" /> Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 mx-2" />
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/faq"><HelpCircle className="mr-3 h-5 w-5 text-muted-foreground" /> FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 cursor-pointer rounded-lg text-sm">
                  <Link href="/complaints"><MessageSquareWarning className="mr-3 h-5 w-5 text-muted-foreground" /> Complaints</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
