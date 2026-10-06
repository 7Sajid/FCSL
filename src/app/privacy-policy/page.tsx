import { Metadata } from "next";
import Link from "next/link";
import { Shield, Info, Lock, Mail, Cookie, ExternalLink, FileText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | First Capital Securities Limited",
  description: "Privacy Policy of First Capital Securities Limited regarding the collection, use, disclosure and protection of personal information.",
};

const TOC_ITEMS = [
  { id: "privacy-policy", title: "Privacy Policy" },
  { id: "information-collection", title: "Information Collection and Use" },
  { id: "disclosure", title: "Disclosure of Information" },
  { id: "electronic-communications", title: "Electronic Communications" },
  { id: "cookies", title: "Cookies" },
  { id: "external-links", title: "Links to Other Sites" },
  { id: "policy-revision", title: "Policy Revision" },
  { id: "contact", title: "Contact Information" },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-slate-900">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
              <Shield className="w-4 h-4" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Your privacy and the protection of your personal information are important to First Capital Securities Limited.
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
                <FileText className="w-4 h-4" />
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
          <main className="flex-1 max-w-4xl flex flex-col gap-8">
              
              {/* Privacy Policy */}
              <section id="privacy-policy" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  <Shield className="w-64 h-64 text-blue-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-blue-100 transition-colors flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    Privacy Policy
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      First Capital Securities Limited in particular respects your privacy and is committed to protect your personal information that you share with us.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Generally, you can browse through our website without giving us any information about yourself. We do not collect any information about you unless you choose to provide that information.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      We may share necessary data with Government Organizations or other Organizations, if needed.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      However, information collected by us is used only for official purposes, internal reviews, improvement of the content of our website, customization of the content and layout of our website and to contact users.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4 font-medium text-slate-800">
                      We do not use, share or pass on your information for commercial purposes.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      All record keepers face the possibility of disclosure of their records in some civil, criminal, or administrative matter. First Capital Securities Limited could be required to disclose personal information in response to valid legal processes such as a search warrant, or court order.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Disclosures may also be necessary to protect the Government&apos;s legal rights or during emergencies if physical safety is believed to be at risk.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Collection and Use */}
              <section id="information-collection" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1 hover:border-emerald-200 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform -rotate-12 group-hover:rotate-0">
                  <Info className="w-64 h-64 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 group-hover:border-emerald-100 transition-colors">
                    <Info className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-2xl font-bold text-slate-900 m-0">Information Collection and Use</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600">Website browsing generally does not require users to provide personal information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600">Information is collected when users voluntarily provide it.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600">Collected information may be used for official purposes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600">Information may be used for internal review and website improvement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600">Information may be used to customize website content and layout.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600">Information may be used to communicate with users.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600 font-medium">Information is not used or transferred for commercial purposes.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Disclosure of Information */}
              <section id="disclosure" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/10 hover:-translate-y-1 hover:border-indigo-200 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  <FileText className="w-64 h-64 text-indigo-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-indigo-100 transition-colors flex items-center gap-3">
                    <FileText className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    Disclosure of Information
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-6">
                      First Capital Securities Limited may share necessary data with Government Organizations or other Organizations when required.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Personal information may also be disclosed when legally required, including in response to valid legal processes such as:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {['Search warrants', 'Court orders', 'Civil matters', 'Criminal matters', 'Administrative matters'].map((item) => (
                        <div key={item} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-center text-center group-hover:border-indigo-100 group-hover:bg-white transition-colors duration-300 shadow-sm">
                          <span className="font-medium text-slate-700 group-hover:text-indigo-900">{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                      Disclosure may also occur when necessary to protect legal rights or where there is an emergency involving potential risk to physical safety.
                    </p>
                  </div>
                </div>
              </section>

              {/* Electronic Communications */}
              <section id="electronic-communications" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-violet-900/10 hover:-translate-y-1 hover:border-violet-200 hover:bg-gradient-to-br hover:from-white hover:to-violet-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform -rotate-12 group-hover:rotate-0">
                  <Mail className="w-64 h-64 text-violet-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-violet-100 transition-colors flex items-center gap-3">
                    <Mail className="w-6 h-6 text-violet-600 group-hover:scale-110 transition-transform duration-300" />
                    Electronic Communications
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      If you send us an electronic mail message with a question or comment that contains personally identifying information, or fill out a form that e-mails us information, we will use this personally-identifying information only to respond to your request.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      We may redirect your message to Government Organizations or other Organizations or person who is in a better position to respond to your query or comment.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      All e-mail messages received contain the e-mail addresses of persons who voluntarily communicated with or requested information from us. Your e-mail addresses are not sold, leased or shared with any non-governmental or commercial entities without your consent.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      When a user has given us their e-mail address for purposes of communicating with or requesting information from us, that communication becomes part of the public record and may be subject to public inspection and copying if not protected by law.
                    </p>

                    <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-6 relative overflow-hidden group/alert hover:bg-amber-100/50 transition-colors duration-300">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 group-hover/alert:w-2 transition-all duration-300" />
                      <div className="flex items-start gap-4 ml-1">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 group-hover/alert:scale-110 transition-transform duration-300">
                          <Lock className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-amber-900 mb-2 mt-0">Important Notice</h3>
                          <p className="text-amber-800/80 leading-relaxed mb-4">
                            Information submitted via e-mail or web forms may be at risk of being intercepted, read or modified.
                          </p>
                          <p className="text-amber-800/80 leading-relaxed mb-4">
                            You are advised not to pass on any personal and confidential information while using this website unless specifically required by an authorized person.
                          </p>
                          <p className="text-amber-900 font-medium m-0">
                            First Capital Securities Limited shall not be liable for any misuse or loss of any such information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/10 hover:-translate-y-1 hover:border-orange-200 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  <Cookie className="w-64 h-64 text-orange-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-orange-100 transition-colors flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    Cookies
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      A cookie is a small data file that certain web sites write to your hard drive when you visit them.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      A cookie file can contain information to track the pages you&apos;ve visited, but the only personal information a cookie can contain is information you supply yourself.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      A cookie can&apos;t read data off your hard drive or read cookie files created by other sites. We may use cookies in order to determine the usefulness of our website information to our users and to see how effective our navigational structure is in helping users reach that information.
                    </p>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center m-0 group-hover:bg-white group-hover:border-orange-100 transition-colors duration-300 shadow-sm">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                        <Cookie className="w-8 h-8 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 mt-0">What are cookies?</h4>
                        <p className="text-sm text-slate-600 leading-relaxed m-0">
                          Small data files used by websites to improve navigation and understand how visitors interact with website content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Links to Other Sites */}
              <section id="external-links" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-pink-900/10 hover:-translate-y-1 hover:border-pink-200 hover:bg-gradient-to-br hover:from-white hover:to-pink-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform -rotate-12 group-hover:rotate-0">
                  <ExternalLink className="w-64 h-64 text-pink-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-pink-100 transition-colors flex items-center gap-3">
                    <ExternalLink className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    Links to Other Sites
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      This website includes links to websites operated by other government organizations and other organizations.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      When you link to another site, this Privacy Policy will not apply. However, you may be subject to the Privacy Policy of that new website, if one exists.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-medium m-0 group-hover:text-pink-900 transition-colors">
                      First Capital Securities Limited is not in any way responsible for the privacy practices or content of external websites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Policy Revision */}
              <section id="policy-revision" className="scroll-mt-32 relative group bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-sky-900/10 hover:-translate-y-1 hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/50 overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-50 group-hover:scale-100 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  <FileText className="w-64 h-64 text-sky-600" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 group-hover:border-sky-100 transition-colors">
                    Policy Revision and Notification of Changes
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      First Capital Securities Limited may at any time revise or update this policy without notice.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      We may inform our users about policy changes through notices on this page containing a version number and date.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      Any information collected under the current policy will remain subject to these terms. Information collected after any changes take effect will be subject to the revised privacy policy.
                    </p>

                    <div className="flex gap-4 m-0">
                      <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-4 flex-1 group-hover:bg-white transition-colors duration-300 shadow-sm">
                        <p className="text-xs text-sky-600 font-bold uppercase tracking-wider mb-1 m-0">Policy Version</p>
                        <p className="font-medium text-slate-900 m-0">Current</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1 group-hover:bg-white group-hover:border-sky-100 transition-colors duration-300 shadow-sm">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1 m-0">Last Updated</p>
                        <p className="font-medium text-slate-900 m-0">October 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            {/* Contact Information */}
            <section id="contact" className="scroll-mt-32">
              <div className="bg-slate-900 text-white rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                
                <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Contact Information</h2>
                <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-blue-200 transition-colors">First Capital Securities Limited</h3>
                
                <div className="flex items-start gap-4 text-slate-300 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
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
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors shadow-sm"
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
