import { User } from "lucide-react";

export default function BoardofMembers() {
  const members = [
    {
      name: "Rizwan Bin Farouq",
      role: "Chairman",
      image: "/images/board/rizwan-bin-farouq.jpg"
    },
    {
      name: "Kausar Al Mamun",
      role: "Chief Executive Officer & Managing Director",
      image: "/images/board/kausar-al-mamun.jpg"
    },
    {
      name: "Sonia Ishrat",
      role: "Director",
      image: "/images/board/sonia-ishrat.jpg"
    },
    {
      name: "Rayid Isaam Farouq",
      role: "Director",
      image: "/images/board/rayid-isaam-farouq.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pb-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 relative z-10 flex flex-col items-center">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Board Members</span>
          </h1>
          <p className="text-xl text-slate-600 mt-6 leading-relaxed">
            The visionary leaders guiding First Capital Securities Limited towards excellence and trust.
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full max-w-5xl place-items-center">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center w-full max-w-[400px]"
            >
              {/* Image Container with Hover Animations */}
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-slate-300/50 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-100">
                  <User className="w-32 h-32 opacity-30" />
                </div>

                {/* Actual Member Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
              </div>

              {/* Info Box (Overlapping the image) */}
              <div className="relative -mt-16 z-20 w-[90%] bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/60 border border-white flex flex-col items-center text-center group-hover:-translate-y-3 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
