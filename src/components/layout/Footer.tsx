"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="bg-white text-slate-600 mt-auto border-t border-slate-200">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Brand & Contact Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="inline-block py-2 w-fit">
            <Image 
              src="/logo-transparent.png" 
              alt="First Capital Securities Limited Logo" 
              width={350} 
              height={80} 
              className="h-[60px] w-auto object-contain"
            />
          </Link>
          <div className="pl-3 sm:pl-4">
            <p className="text-base text-slate-600 leading-relaxed max-w-sm">
              Invest With Confidence. Trade With Intelligence. Your trusted partner for smarter participation in Bangladesh&apos;s capital market.
            </p>
            
            <div className="flex flex-col gap-3 mt-4 text-sm text-slate-600">
              <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+880 2 00000000</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>info@fcslbd.com</span>
              </div>
              <div className="flex items-start gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="max-w-[250px]">Dhaka Stock Exchange Building, Motijheel, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-wide">Company</h3>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">About Us</Link></li>
            <li><Link href="/about/leadership" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Leadership</Link></li>
            <li><Link href="/careers" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Careers</Link></li>
            <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-wide">Services</h3>
          <ul className="space-y-4">
            <li><Link href="/services/trading" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Trading</Link></li>
            <li><Link href="/services/depository" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Depository</Link></li>
            <li><Link href="/services/ipo" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">IPO</Link></li>
            <li><Link href="/services/online-services" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Digital Services</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-wide">Legal</h3>
          <ul className="space-y-4">
            <li><Link href="/privacy-policy" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
            <li><Link href="#" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Terms & Conditions</Link></li>
            <li><Link href="#" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Risk Disclosure</Link></li>
            <li><Link href="/complaints" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Complaint Policy</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Socials */}
      <div className="container py-8 border-t border-slate-200 flex justify-center gap-6">
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-slate-50 py-6 text-center text-sm text-slate-500 font-medium">
        <div className="container">
          &copy; {new Date().getFullYear()} First Capital Securities Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
