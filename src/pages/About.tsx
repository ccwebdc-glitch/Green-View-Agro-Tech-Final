import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Users, Award, MapPin, Target, FileText, Wrench
} from "lucide-react";

export default function About() {
  // Expanded manufacturer trust list for West Bengal empanelment (PDF 3 Page 16)
  const trustPartners = [
    { name: "Premier Irrigation Adritec Limited", type: "Authorized Dealer", cert: "ISO 9001:2015 Certified" },
    { name: "Jain Irrigation Systems Ltd.", type: "Authorized Dealer", cert: "World's Largest Drip Manufacturer" },
    { name: "Netafim Israel", type: "Sourced Systems Partner", cert: "Pioneer of Micro Irrigation" },
    { name: "Captain Polyplast Ltd", type: "Authorized Dealer", cert: "Premium Quality PVC & HDPE Pipes" },
    { name: "Greaves Cotton Limited", type: "Authorized Dealer", cert: "Robust Agricultural Engines" },
    { name: "VST Tillers Tractors Ltd", type: "Authorized Partner", cert: "Certified Farm Machinery" },
    { name: "C.R.I. Pumps", type: "Authorized Dealer", cert: "World-Class Water Pumps & Motors" },
    { name: "Shakti Pumps", type: "Authorized Solar Partner", cert: "Stainless Steel Submersibles" },
    { name: "Lubi Pumps", type: "Authorized Dealer", cert: "50+ Years Engineering Excellence" },
    { name: "Pahal-Solar", type: "Authorized Solar Dealer", cert: "High-Efficiency PV Modules" },
    { name: "SOVA SOLAR", type: "Empanelled Solar Partner", cert: "West Bengal-Based PV Manufacturer" },
    { name: "Latteys Industries Ltd", type: "Authorized Dealer", cert: "Borewell & Agricultural Motors" },
    { name: "Agriplast Tech India Pvt. Ltd.", type: "Premium Sourcing Partner", cert: "Protected Agriculture Claddings" }
  ];

  return (
    <div className="bg-[#fafbfa]">
      {/* Page Header (Fixed top gap and white line issue by removing wrapper padding and increasing top padding) */}
      <section className="bg-gradient-to-r from-green-950 to-emerald-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farming field background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/15 px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest mb-8 text-green-100">
            <span>🌾</span> Our Purpose
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mb-8 tracking-tight leading-tight text-white">
            Where Modern Farming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Meets Renewable Energy.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-emerald-50/80 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Two of the most important shifts happening in India right now — smarter agriculture and cleaner energy — rarely find a single, reliable partner. We built Green View Agro Tech to be exactly that, for farmers and homeowners across all of West Bengal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/services?tab=irrigation" 
              className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-950/40 text-[#12B76A] font-bold px-6 py-3 rounded-full text-sm hover:bg-emerald-900/50 transition-all duration-300"
            >
              <span>🌾</span> Modern Agriculture
            </Link>
            <Link 
              to="/services?tab=solar" 
              className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-950/40 text-amber-400 font-bold px-6 py-3 rounded-full text-sm hover:bg-amber-900/50 transition-all duration-300"
            >
              <span>☀️</span> Renewable Energy
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-3.5 py-1.5 rounded-full inline-block">
                  Our Core Commitment
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                  Bridging the technology gap on the ground.
                </h2>
              </div>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  <strong>Green View Agro Tech</strong>, started with a simple belief — that farmers in our region deserve access to the same quality irrigation technology, protected farming structures, and renewable energy solutions that modern agriculture demands. We saw a gap between what was available and what was actually reaching the ground level. So we decided to bridge it ourselves.
                </p>
                <p>
                 {/* We are authorized dealers of Premier Irrigation Adritec Limited and Jain Irrigation Systems Ltd. — two of the most respected names in irrigation manufacturing in India. Alongside that, we source equipment from other quality manufacturers like Netafim to make sure our clients always get the best fit for their field, not just whatever we have in stock.*/}
                 We work with quality manufacturers across irrigation, solar, and polyhouse solutions — allowing us to recommend the right equipment for your farm, not just whatever we have in stock. We're authorized dealers of leading manufacturers and have built partnerships with 17+ reputed manufacturers across our service areas. Every component we install comes with official manufacturer warranty and direct technical support.
                 <Link to="/partners" className="text-green-600 font-bold hover:underline">
                   Meet our manufacturing partners →
                 </Link>
                </p>
                <p>
                  Over the years, we've grown from irrigation installations to building complete polyhouses and setting up solar pump systems. Most recently, we became an officially registered <Link to="/services?tab=pmsuryaghar" className="text-green-600 font-extrabold hover:underline">PM Surya Ghar vendor</Link> — helping homeowners across West Bengal access up to ₹78,000 in government subsidy for rooftop solar, managing the complete journey from portal registration to subsidy in their bank account.
                </p>
                <p>
                  Today, we serve both individual farmers and private project clients, and we help eligible farmers and homeowners access every government support scheme available to them.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-50 rounded-full z-0" />
              <img 
                src="/farm_tech.png" 
                alt="Modern farm technology with solar panels and greenhouse" 
                className="relative z-10 rounded-3xl shadow-xl border border-gray-150 w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-150 max-w-xs text-center hidden sm:block">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-gray-950">Approved</span>
                </div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Authorized Installer West Bengal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* 🔷 PM SURYA GHAR ROOFTOP SOLAR SECTION (NEW) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#064e3b] rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-emerald-800">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    NEW — OFFICIAL PM SURYA GHAR REGISTERED VENDOR
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
                    Now Helping West Bengal Homes <br />
                    <span className="text-emerald-400">Run on Free Electricity.</span>
                  </h2>
                  <p className="text-lg text-emerald-50/70 font-medium leading-relaxed max-w-xl">
                    The government is offering up to ₹78,000 in direct subsidy to install solar panels on your home — with up to 300 units of free electricity every month. We are officially registered under PM Surya Ghar for both WBSEDCL and CESC areas across all of West Bengal. We manage everything: portal registration, documentation, installation, net metering, and your subsidy — until the money is in your bank account. You focus on your home. We handle the rest.
                  </p>
                </div>

                <div className="pt-4 space-y-8">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-black px-8 py-4 rounded-full text-lg shadow-lg shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Check My ₹78,000 Subsidy →
                  </Link>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-emerald-100/80 uppercase tracking-tight">WBSEDCL Empanelled</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-emerald-100/80 uppercase tracking-tight">CESC Registered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-emerald-100/80 uppercase tracking-tight">End-to-End D2C Service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-emerald-100/80 uppercase tracking-tight">Subsidy Until It Hits Your Account</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-4xl font-black text-amber-400">₹78K</span>
                  <span className="text-[10px] font-bold text-emerald-100/60 uppercase tracking-widest leading-tight">Max Govt.<br />Subsidy</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-4xl font-black text-amber-400">300</span>
                  <span className="text-[10px] font-bold text-emerald-100/60 uppercase tracking-widest leading-tight">Free Units<br />Every Month</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-4xl font-black text-amber-400">~7%</span>
                  <span className="text-[10px] font-bold text-emerald-100/60 uppercase tracking-widest leading-tight">Bank Loan<br />Rate p.a.</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-4xl font-black text-amber-400">30 Days</span>
                  <span className="text-[10px] font-bold text-emerald-100/60 uppercase tracking-widest leading-tight">Subsidy in<br />Your Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">What Makes Us Different</h2>
            <p className="text-gray-500 text-lg sm:text-xl font-medium leading-relaxed">
              Not just in what we install — but in how we work, who we employ, and how far we go for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-sm flex flex-col gap-6 items-start hover:border-green-300 hover:shadow-md transition-all group">
              <div className="bg-gray-50 text-gray-400 p-3 rounded-xl shrink-0 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-950 tracking-tight">We do the whole job.</h4>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
                  We don't hand you equipment and walk away. We survey the land, design the system, source the materials, build the structure, install everything, and make sure it's running right before we leave. One team. Full accountability from start to finish.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-sm flex flex-col gap-6 items-start hover:border-green-300 hover:shadow-md transition-all group">
              <div className="bg-gray-50 text-gray-400 p-3 rounded-xl shrink-0 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-950 tracking-tight">Our team is our own.</h4>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
                  Every technician is directly employed by us — not day laborers picked up for each job. That means actual accountability at every step. The same people who install your system are the ones you call if something needs attention.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-sm flex flex-col gap-6 items-start hover:border-green-300 hover:shadow-md transition-all group">
              <div className="bg-gray-50 text-gray-400 p-3 rounded-xl shrink-0 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-950 tracking-tight">We help you access government subsidies.</h4>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
                  Many farmers and homeowners qualify for government support on irrigation, solar, and polyhouse projects — including up to ₹78,000 under PM Surya Ghar. We handle the paperwork and process so you can focus on your farm. Let us check your eligibility and guide you through every step.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-sm flex flex-col gap-6 items-start hover:border-green-300 hover:shadow-md transition-all group">
              <div className="bg-gray-50 text-gray-400 p-3 rounded-xl shrink-0 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-gray-950 tracking-tight">We cover a wide geography.</h4>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
                  We operate across West Bengal and neighbouring states, bringing the same quality and expertise wherever your farm is located. WBSEDCL or CESC, rural or urban, accessible or remote — distance is no barrier. We cover it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-24 bg-white border-b border-gray-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#064e3b] rounded-[2.5rem] p-8 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden border border-emerald-800">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000')] bg-cover filter saturate-50 pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="bg-emerald-800/50 p-4 rounded-full w-fit mx-auto text-emerald-300 shadow-inner backdrop-blur-sm">
                <Target className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <span className="text-emerald-400 font-black uppercase tracking-[0.2em] text-xs">
                  Our Mission
                </span>
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Why We Show Up Every Day
                </h3>
              </div>
              <p className="text-lg sm:text-xl font-medium italic leading-relaxed text-emerald-50/90 max-w-5xl mx-auto">
                "To make quality agricultural technology accessible — not just to large farms or well-connected clients, but to every farmer who needs it. And to ensure that every homeowner who deserves free electricity under a government scheme actually gets it — not left behind in paperwork. We believe the right irrigation, the right structure, the right water source, and the right solar system can change the economics of a farm and a home for generations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-green-700 font-black uppercase tracking-[0.2em] text-[10px]">
              Integrity First
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Four principles that guide every project, every recommendation, and every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Honesty",
                desc: "We'll tell you what actually fits your farm — even if it means recommending a simpler or smaller system. We don't sell what we have in stock. We recommend what you need, and we say it plainly.",
                icon: "✅",
                bgColor: "bg-emerald-50",
                iconColor: "text-emerald-600"
              },
              {
                title: "Quality",
                desc: "Every system we install is sourced from reputed, authorized manufacturers and installed by our own trained technicians — never outsourced. What we put on your field, we stand behind completely.",
                icon: "🏆",
                bgColor: "bg-amber-50",
                iconColor: "text-amber-600"
              },
              {
                title: "Commitment",
                desc: "Our job doesn't end at installation. We follow up, troubleshoot, and stay available. For PM Surya Ghar customers, we remain with you until the subsidy reaches your bank account — not a day earlier.",
                icon: "🤝",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600"
              },
              {
                title: "Respect",
                desc: "We know that every rupee you put into your farm or home matters. We treat your investment with the same care we'd expect someone to treat ours. No cutting corners. No shortcuts. Ever.",
                icon: "❤️",
                bgColor: "bg-rose-50",
                iconColor: "text-rose-600"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col text-center group hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${value.bgColor} flex items-center justify-center text-2xl mb-8 mx-auto shadow-inner`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
