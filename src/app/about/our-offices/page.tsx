import { officesData } from "@/data/offices";
import { MapPin, Phone, Building2 } from "lucide-react";
import Image from "next/image";

export default function OurOffices() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Bangladesh Map Background */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Abstract Bangladesh Map Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bangladesh-map-bg.jpg"
            alt="Bangladesh Map"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 backdrop-blur-md rounded-2xl mb-4 border border-primary/30 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            <Building2 className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Offices</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            First Capital Securities Limited brings financial services closer to you with our extensive network of branches and digital booths across Bangladesh.
          </p>
        </div>
      </section>

      {/* Offices Grid Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 -mt-10">
        {officesData.map((division) => (
          <div key={division.name} className="space-y-8">
            {/* Division Header */}
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                {division.name}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
            </div>

            {/* Division Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {division.offices.map((office) => (
                <div 
                  key={office.id} 
                  className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 border border-slate-100 hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  {/* Subtle Top Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  {/* Watermark ID */}
                  <div className="absolute -top-4 -right-2 text-8xl font-black text-slate-50/80 group-hover:text-blue-50/50 pointer-events-none transition-colors duration-300">
                    {office.id}
                  </div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {office.name}
                    </h3>

                    <div className="space-y-4 flex-grow">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {office.address}
                        </p>
                      </div>

                      {/* Contact Info */}
                      {(office.tel || office.cell) && (
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <div className="text-sm text-slate-600 leading-relaxed">
                            {office.tel && (
                              <div className="mb-1">
                                <span className="font-semibold text-slate-700">Tel:</span> {office.tel}
                              </div>
                            )}
                            {office.cell && (
                              <div>
                                <span className="font-semibold text-slate-700">Cell:</span> {office.cell}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
