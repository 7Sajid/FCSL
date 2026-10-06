import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10 flex flex-col items-center justify-center min-h-[85vh]">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 text-primary font-bold text-sm rounded-full shadow-sm">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We&apos;re Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Help You</span>
          </h1>
          <p className="text-xl text-slate-600 mt-6 leading-relaxed">
            Reach out to First Capital Securities Limited. Our dedicated team of experts is ready to assist you with all your investment needs.
          </p>
        </div>

        {/* Contact Info Cards - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          
          {/* Card 1: Address */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10">
              <MapPin className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Our Address</h3>
            <p className="text-slate-600 text-lg leading-relaxed relative z-10 font-medium">
              Room # 422, DSE Annex Building (3rd Floor),<br />
              9/E Motijheel- C/A,<br />
              Dhaka-1000
            </p>
          </div>

          {/* Card 2: Email */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10">
              <Mail className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Our Mailbox</h3>
            <div className="flex flex-col gap-3 relative z-10">
              <a href="mailto:fcsl.dhaka@gmail.com" className="text-slate-600 text-lg hover:text-primary transition-colors font-medium">
                fcsl.dhaka@gmail.com
              </a>
              <a href="mailto:info@fcslbd.com" className="text-slate-600 text-lg hover:text-primary transition-colors font-medium">
                info@fcslbd.com
              </a>
            </div>
          </div>

          {/* Card 3: Phone */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-success/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-20 h-20 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl flex items-center justify-center text-success mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10">
              <Phone className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Our Phone</h3>
            <p className="text-slate-500 leading-relaxed mb-3 relative z-10">
              Call us directly
            </p>
            <a href="tel:+8802223352096" className="text-2xl font-bold text-slate-800 hover:text-primary transition-colors relative z-10">
              +88 0222 3352096
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
