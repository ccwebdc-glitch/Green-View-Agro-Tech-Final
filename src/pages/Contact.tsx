import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, Check, 
  ChevronDown, ChevronUp, Sparkles, Calendar 
} from "lucide-react";

const faqQuestions = [
  {
    q: "Do you only supply equipment or do you also install it?",
    a: "We do both — supply and full on-ground installation. We don't hand you equipment and leave. Our in-house experienced crew surveys your land, designs the hydraulic system, constructs physical stands, installs the lines, and tests everything fully before handing over."
  },
  {
    q: "Can I get a subsidy on irrigation or solar pump installation?",
    a: "Yes, many farmers can. We'll check your eligibility honestly based on your landholding records, category type, and district location. Call us and we will tell you straight exactly what schemes or PDMC/KUSUM support is active."
  },
  {
    q: "What brands do you use?",
    a: "We are authorized dealers of Premier Irrigation Adritec Limited and Jain Irrigation Systems Ltd. We also source Netafim systems and other reputed ISI-certified components depending on the needs of the farmland."
  },
  {
    q: "Do you build polyhouses outside West Bengal?",
    a: "Yes, we construct turnkey greenhouse structures across West Bengal and regularly extend into neighbouring states. Get in touch with your specific location block and we can confirm direct service coverage."
  },
  {
    q: "How long does installation take?",
    a: "It depends entirely on the scope. A standard drip irrigation layout on 1–2 acres typically takes a few working days. A complete turnkey polyhouse structure with internal fogger lines can take a few weeks. We provide a clear commitment schedule before any on-ground excavation starts."
  },
  {
    q: "What is the maintenance like for drip or sprinkler systems?",
    a: "These systems mainly need regular flushing of screen/disc filters and checking individual emitter nozzle lines for calcium clog blocks. We guide you through simple maintenance basics after installation, and our technicians are always reachable if a line needs attention."
  },
  {
    q: "Do you handle the government paperwork for subsidies?",
    a: "We assist with all drawings, technical layouts, and estimation sheets required for submissions. We cannot guarantee government approval — that resides with the verifying state officer — but we make sure your documentation is correct and complete."
  },
  {
    q: "What solar pump capacity do you install?",
    a: "We supply and install submersibles and surface solar pumps ranging from 2 HP to 7.5 HP depending on your target acreage, irrigation crop, and seasonal borewell water levels."
  }
];

export default function Contact() {
  const customPhone = "+91 7384854555";
  const customWhatsApp = "+91 7384854555";
  const customEmail = "contact@greenviewagrotech.com";
  
  const offices = [
    {
      name: "🏢 Head Office — Khandra",
      address: "Old Amlouka Road, Khandra, Paschim Bardhaman – 713363, West Bengal"
    },
    {
      name: "📍 Branch Office — Suri",
      address: "Barabagan, Ward No. 1, Suri, Birbhum – 731103, West Bengal"
    },
    {
      name: "📍 Branch Office — Bhatar",
      address: "Bhatar Fire Brigade More, Bhatar, Purba Bardhaman – 713125, West Bengal"
    }
  ];
  
  const workHours = "Mon–Sat, 9 AM to 7 PM · WhatsApp fastest";

  // Key Operation Districts
  const districts = ["Nadia", "Hooghly", "Murshidabad", "Bankura", "Purulia", "Bardhaman", "South 24 Parganas", "North 24 Parganas"];

  // Toggle state
  const [audience, setAudience] = useState<"agri" | "solar">("agri");

  // Form states
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loc, setLoc] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (val: string) => {
    // Only allow letters and spaces
    setName(val.replace(/[^a-zA-Z\s]/g, ""));
  };

  const handleMobileChange = (val: string) => {
    // Only allow numbers, plus sign, spaces, and hyphens (prevent all alphabets and special symbols)
    setMobile(val.replace(/[^0-9+\s-]/g, ""));
  };

  // Agri fields
  const [service, setService] = useState("");
  const [landCrop, setLandCrop] = useState("");

  // Solar fields
  const [solarBill, setSolarBill] = useState("");
  const [discom, setDiscom] = useState("wbsedcl");
  const [roofNotes, setRoofNotes] = useState("");

  // Accordion faq tracker
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    let customText = "";
    if (audience === "agri") {
      customText = `Hello Green View Agro Tech! I am reaching out from your website contact form for an Agricultural consultation:
- Name: ${name || "Farmer"}
- Mobile: ${mobile || "N/A"}
- District/Location: ${loc || "West Bengal"}
- Service Needed: ${service || "Not Specified"}
- Land Size & Crop: ${landCrop || "N/A"}
- Message: ${msg || "Looking for details"}`;
    } else {
      const discomLabel = discom === "wbsedcl" ? "WBSEDCL (Rest of WB)" : discom === "cesc" ? "CESC (Kolkata)" : "Not Sure (We'll check)";
      customText = `Hello Green View Agro Tech! I am reaching out from your website contact form for a PM Surya Ghar Solar consultation:
- Name: ${name || "Homeowner"}
- Mobile: ${mobile || "N/A"}
- District/Area: ${loc || "West Bengal"}
- Approx. Monthly Bill: ${solarBill || "Not Specified"}
- DISCOM: ${discomLabel}
- Roof Type/Notes: ${roofNotes || "N/A"}
- Message: ${msg || "Looking for details"}`;
    }
    const url = `https://wa.me/917384854555?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20 bg-[#FAFBF9] min-h-screen">
      {/* 🟢 PAGE HEADER */}
      <section className="bg-gradient-to-b from-[#184B2A] to-[#11351E] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,167,69,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[#9FE870] font-black uppercase tracking-[0.2em] text-xs">Reach Out</span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4 mb-6 tracking-tight uppercase leading-tight">
            Contact & Consultation <br />
            <span className="text-[#9FE870]">On-Ground Support</span>
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            Speak directly to our technicians. Whether you need drip irrigation custom sizing, polyhouse setup, or PM Surya Ghar rooftop solar — we've got you covered.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => { setAudience("agri"); setSubmitted(false); }}
              className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                audience === "agri" 
                  ? "bg-[#9FE870] text-[#184B2A] shadow-lg" 
                  : "border border-green-700 bg-[#184B2A]/40 text-green-200 hover:bg-[#184B2A]/70"
              }`}
            >
              <span>🌾</span> Farmers & Agricultural
            </button>
            <button 
              onClick={() => { setAudience("solar"); setSubmitted(false); }}
              className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                audience === "solar" 
                  ? "bg-[#f97316] text-white shadow-lg" 
                  : "border border-orange-700 bg-orange-950/20 text-orange-200 hover:bg-orange-950/40"
              }`}
            >
              <span>🏠</span> Homeowners & PM Surya Ghar
            </button>
          </div>
        </div>
      </section>

      {/* 🟢 MAIN CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ══ LEFT COLUMN: Details, Badges & Offices ══ */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-[#16a34a] block mb-2">Direct Contact</span>
                <h2 className="text-3xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-3">On-Ground Details</h2>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Speak directly to our team — for agricultural projects or PM Surya Ghar rooftop solar. You get a real person who knows the work, not an automated script.
                </p>
              </div>

              {/* Response Promise Banner */}
              <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-[10px] p-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#16a34a] rounded-[8px] flex items-center justify-center text-lg shrink-0 text-white shadow-sm">
                  ⚡
                </div>
                <div>
                  <strong className="block text-[14px] font-extrabold text-[#14532d] mb-0.5">We respond within 2 hours</strong>
                  <span className="text-[12.5px] text-[#15803d] font-medium">{workHours}</span>
                </div>
              </div>

              {/* PM Surya Ghar Vendor Badge */}
              <div className="bg-gradient-to-br from-[#0f2920] to-[#1a5a4a] rounded-[12px] p-5 flex items-center gap-4 text-white shadow-md">
                <div className="w-11 h-11 bg-[rgba(251,191,36,0.18)] border border-[rgba(251,191,36,0.4)] rounded-[10px] flex items-center justify-center text-xl shrink-0">
                  🌟
                </div>
                <div>
                  <strong className="block text-[13.5px] font-extrabold text-[#fbbf24] mb-0.5">Official PM Surya Ghar Registered Vendor</strong>
                  <span className="text-[12px] text-white/70 leading-relaxed block">
                    WBSEDCL & CESC areas · All of West Bengal · ₹78,000 subsidy support
                  </span>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="flex flex-col gap-3">
                {/* Phone */}
                <a href={`tel:${customPhone.replace(/\s+/g, "")}`} className="flex items-center gap-3.5 p-3.5 bg-[#f8f9fa] rounded-[10px] border border-[#e2e8f0] transition-all duration-200 hover:border-green-200 hover:bg-[#f0fdf4] hover:translate-x-1">
                  <div className="w-[38px] h-[38px] bg-[#dbeafe] text-[#1d4ed8] rounded-[8px] flex items-center justify-center text-lg shrink-0 shadow-sm">
                    📞
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.5px] text-[#94a3b8] block mb-0.5">Call Us</span>
                    <div className="text-[14.5px] font-extrabold text-[#0f172a]">{customPhone}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href={`https://wa.me/${customWhatsApp.replace(/[+\s]/g, "")}`} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-3.5 bg-[#f8f9fa] rounded-[10px] border border-[#e2e8f0] transition-all duration-200 hover:border-green-200 hover:bg-[#f0fdf4] hover:translate-x-1">
                  <div className="w-[38px] h-[38px] bg-[#dcfce7] text-[#15803d] rounded-[8px] flex items-center justify-center text-lg shrink-0 shadow-sm">
                    💬
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.5px] text-[#94a3b8] block mb-0.5">WhatsApp</span>
                    <div className="text-[14.5px] font-extrabold text-[#0f172a]">{customWhatsApp}</div>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${customEmail}`} className="flex items-center gap-3.5 p-3.5 bg-[#f8f9fa] rounded-[10px] border border-[#e2e8f0] transition-all duration-200 hover:border-green-200 hover:bg-[#f0fdf4] hover:translate-x-1">
                  <div className="w-[38px] h-[38px] bg-[#fef3c7] text-[#b45309] rounded-[8px] flex items-center justify-center text-lg shrink-0 shadow-sm">
                    📧
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.5px] text-[#94a3b8] block mb-0.5">Email</span>
                    <div className="text-[14.5px] font-extrabold text-[#0f172a]">{customEmail}</div>
                  </div>
                </a>
              </div>

              {/* Office Locations */}
              <div className="pt-2">
                <div className="text-[11.5px] font-extrabold uppercase tracking-[1px] text-[#475569] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#e2e8f0]">
                  Our Locations
                </div>
                <div className="flex flex-col gap-3">
                  {offices.map((office, idx) => (
                    <div key={idx} className="p-4 bg-[#f8f9fa] rounded-[10px] border border-[#e2e8f0] border-l-[4px] border-l-[#16a34a] shadow-xs">
                      <div className="text-[12.5px] font-extrabold text-[#15803d] uppercase tracking-[0.4px] mb-1">
                        {office.name}
                      </div>
                      <div className="text-[13px] text-[#475569] leading-relaxed font-medium">
                        {office.address}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ══ RIGHT COLUMN: Consultation Form Card ══ */}
            <div className="lg:col-span-7">
              <div className="bg-white border-[1.5px] border-[#e2e8f0] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                
                {/* Form Card Header */}
                <div className="p-6 sm:p-8 border-b border-[#e2e8f0] bg-[#f8f9fa]">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2 tracking-tight">Book Your Free Consultation</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Tell us what you need — we'll call you within 2 hours to discuss your project, completely free with zero obligation.
                  </p>
                </div>

                {/* AUDIENCE SWITCHER */}
                <div className="p-6 sm:p-8 border-b border-[#e2e8f0] bg-white">
                  <span className="text-[11.5px] font-extrabold uppercase tracking-[0.8px] text-[#475569] block mb-3">I am a —</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Agri Switcher */}
                    <button
                      type="button"
                      onClick={() => {
                        setAudience("agri");
                        setSubmitted(false);
                      }}
                      className={`flex items-center gap-3.5 p-4 rounded-[12px] border-2 text-left transition-all duration-200 cursor-pointer ${
                        audience === "agri"
                          ? "border-[#16a34a] bg-[#f0fdf4] shadow-xs"
                          : "border-[#e2e8f0] bg-[#f8f9fa] hover:bg-gray-100"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-[8px] bg-[#dcfce7] flex items-center justify-center text-xl shrink-0">
                        🌾
                      </div>
                      <div>
                        <strong className="block text-[14px] font-extrabold text-[#0f172a] mb-0.5">Farmer / Agricultural</strong>
                        <span className="text-[11.5px] text-[#475569] font-medium">Irrigation, Polyhouse, Solar Pump</span>
                      </div>
                    </button>

                    {/* Solar Switcher */}
                    <button
                      type="button"
                      onClick={() => {
                        setAudience("solar");
                        setSubmitted(false);
                      }}
                      className={`flex items-center gap-3.5 p-4 rounded-[12px] border-2 text-left transition-all duration-200 cursor-pointer ${
                        audience === "solar"
                          ? "border-[#f97316] bg-[#fff7ed] shadow-xs"
                          : "border-[#e2e8f0] bg-[#f8f9fa] hover:bg-gray-150"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-[8px] bg-[#ffedd5] flex items-center justify-center text-xl shrink-0">
                        🏠
                      </div>
                      <div>
                        <strong className="block text-[14px] font-extrabold text-[#0f172a] mb-0.5">Homeowner / Solar</strong>
                        <span className="text-[11.5px] text-[#475569] font-medium font-medium">PM Surya Ghar · ₹78K Subsidy</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* FORM BODY */}
                <div className="p-6 sm:p-8">
                  {submitted ? (
                    /* SUCCESS SCREEN */
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#f0fdf4] border border-[#dcfce7] p-8 rounded-[16px] text-center space-y-5"
                    >
                      <div className="bg-[#16a34a] text-white p-3.5 rounded-full w-fit mx-auto shadow-md">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-extrabold text-[#14532d]">Inquiry Received Successfully!</h4>
                      <p className="text-[#475569] text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="font-extrabold text-gray-900">{name}</strong>. Our West Bengal technical team has received your consultation request for <strong className="font-extrabold text-gray-900">{loc}</strong>. We'll call you within 2 hours.
                      </p>
                      <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setName("");
                            setMobile("");
                            setLoc("");
                            setMsg("");
                            setLandCrop("");
                            setRoofNotes("");
                          }}
                          className="px-6 py-3 bg-white hover:bg-gray-50 text-[#16a34a] border border-[#dcfce7] font-bold rounded-xl text-sm transition-all duration-250 cursor-pointer"
                        >
                          Submit Another Inquiry
                        </button>
                        <button 
                          onClick={handleWhatsAppClick}
                          className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-sm inline-flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 transition-all duration-250 cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" /> Chase on WhatsApp
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* ACTIVE PANEL FORM */
                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {audience === "agri" ? (
                          <motion.div
                            key="agri-panel"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-5"
                          >
                            <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-[8px] p-3.5 mb-4 text-[13px] text-[#14532d] flex items-start gap-2.5 leading-relaxed font-medium">
                              <span className="text-[15px] shrink-0">ℹ️</span>
                              <span>Our technicians will call you to discuss your crop type, land size, water source, and the right system for your field.</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Full Name */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Full Name <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={name}
                                  onChange={(e) => handleNameChange(e.target.value)}
                                  placeholder="e.g. Somnath Roy"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#16a34a] focus:ring-3 focus:ring-[#16a34a]/10"
                                />
                              </div>

                              {/* Mobile Number */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Mobile Number <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <input
                                  type="tel"
                                  required
                                  value={mobile}
                                  onChange={(e) => handleMobileChange(e.target.value)}
                                  placeholder="e.g. +91 98765 01234"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#16a34a] focus:ring-3 focus:ring-[#16a34a]/10"
                                />
                              </div>

                              {/* District / Location */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  District / Location <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={loc}
                                  onChange={(e) => setLoc(e.target.value)}
                                  placeholder="e.g. Nadia, West Bengal"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#16a34a] focus:ring-3 focus:ring-[#16a34a]/10"
                                />
                              </div>

                              {/* Service Needed Dropdown */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Service Needed <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <div className="relative">
                                  <select
                                    required
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    className="w-full p-[12px_14px] pr-10 rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] transition-all duration-200 outline-none focus:border-[#16a34a] focus:ring-3 focus:ring-[#16a34a]/10 appearance-none cursor-pointer"
                                  >
                                    <option value="" disabled>Select a service</option>
                                    <optgroup label="Irrigation Systems" className="font-extrabold text-[#15803d]">
                                      <option value="Drip Irrigation">Drip Irrigation</option>
                                      <option value="Sprinkler Irrigation">Sprinkler Irrigation</option>
                                      <option value="Mini / Micro Irrigation">Mini / Micro Irrigation</option>
                                      <option value="Pop-Up / Fogger Systems">Pop-Up / Fogger Systems</option>
                                    </optgroup>
                                    <optgroup label="Other Services" className="font-extrabold text-[#15803d]">
                                      <option value="Polyhouse Construction">Polyhouse Construction</option>
                                      <option value="Solar Pumping System">Solar Pumping System</option>
                                      <option value="Government Subsidy Help">Government Subsidy Help</option>
                                      <option value="Multiple Services">Multiple Services</option>
                                      <option value="Not Sure — Need Advice">Not Sure — Need Advice</option>
                                    </optgroup>
                                  </select>
                                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                                </div>
                              </div>

                              {/* Land Size & Crop Type (Optional) */}
                              <div className="col-span-1 sm:col-span-2">
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Land Size & Crop Type (Optional)
                                </label>
                                <input
                                  type="text"
                                  value={landCrop}
                                  onChange={(e) => setLandCrop(e.target.value)}
                                  placeholder="e.g. 2 acres, vegetable farming, borewell available"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#16a34a] focus:ring-3 focus:ring-[#16a34a]/10"
                                />
                              </div>

                              {/* Message (Optional) */}
                              <div className="col-span-1 sm:col-span-2">
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Message (Optional)
                                </label>
                                <textarea
                                  rows={4}
                                  value={msg}
                                  onChange={(e) => setMsg(e.target.value)}
                                  placeholder="Share any details — crop type, pump depth, current irrigation method, timeline, or any specific questions you have..."
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#16a34a] focus:ring-3 focus:ring-[#16a34a]/10 resize-vertical min-h-[100px] leading-relaxed"
                                />
                              </div>
                            </div>

                            {/* AGRI SUBMIT BUTTON */}
                            <div className="pt-4">
                              <button
                                type="submit"
                                className="w-full p-4 rounded-[10px] cursor-pointer text-[15.5px] font-extrabold bg-[#16a34a] text-white flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_4px_14px_rgba(22,163,74,0.35)] hover:bg-[#15803d] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.45)]"
                              >
                                <Calendar className="w-5 h-5" />
                                📅 Book Free Site Visit — Agricultural
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="solar-panel"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-5"
                          >
                            <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-[8px] p-3.5 mb-4 text-[13px] text-[#9a3412] flex items-start gap-2.5 leading-relaxed font-medium">
                              <span className="text-[15px] shrink-0">🌟</span>
                              <span>
                                We are an officially registered PM Surya Ghar vendor for <strong>WBSEDCL and CESC areas</strong>. We manage registration, installation, and your ₹78,000 subsidy — end to end.
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Full Name */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Full Name <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={name}
                                  onChange={(e) => handleNameChange(e.target.value)}
                                  placeholder="e.g. Ananya Chatterjee"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#fed7aa] bg-[#fff7ed] text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#f97316] focus:ring-3 focus:ring-[#f97316]/10"
                                />
                              </div>

                              {/* Mobile Number */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Mobile Number <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <input
                                  type="tel"
                                  required
                                  value={mobile}
                                  onChange={(e) => handleMobileChange(e.target.value)}
                                  placeholder="e.g. +91 98765 01234"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#fed7aa] bg-[#fff7ed] text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#f97316] focus:ring-3 focus:ring-[#f97316]/10"
                                />
                              </div>

                              {/* District / Area */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  District / Area <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={loc}
                                  onChange={(e) => setLoc(e.target.value)}
                                  placeholder="e.g. Salt Lake, Kolkata or Durgapur"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#fed7aa] bg-[#fff7ed] text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#f97316] focus:ring-3 focus:ring-[#f97316]/10"
                                />
                              </div>

                              {/* Approx. Monthly Electricity Bill */}
                              <div>
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Approx. Monthly Electricity Bill <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <div className="relative">
                                  <select
                                    required
                                    value={solarBill}
                                    onChange={(e) => setSolarBill(e.target.value)}
                                    className="w-full p-[12px_14px] pr-10 rounded-[8px] border-[1.5px] border-[#fed7aa] bg-[#fff7ed] text-[14.5px] text-[#0f172a] transition-all duration-200 outline-none focus:border-[#f97316] focus:ring-3 focus:ring-[#f97316]/10 appearance-none cursor-pointer"
                                  >
                                    <option value="" disabled>Select your bill range</option>
                                    <option value="Below ₹500">Below ₹500</option>
                                    <option value="₹500 – ₹1,000">₹500 – ₹1,000</option>
                                    <option value="₹1,000 – ₹1,500">₹1,000 – ₹1,500</option>
                                    <option value="₹1,500 – ₹2,500">₹1,500 – ₹2,500</option>
                                    <option value="₹2,500 – ₹3,500">₹2,500 – ₹3,500</option>
                                    <option value="Above ₹3,500">Above ₹3,500</option>
                                  </select>
                                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                                </div>
                              </div>

                              {/* Your DISCOM (Electricity Provider) */}
                              <div className="col-span-1 sm:col-span-2">
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-2">
                                  Your DISCOM (Electricity Provider) <span className="text-[#f97316] ml-0.5">*</span>
                                </label>
                                <div className="grid grid-cols-3 gap-2.5">
                                  {/* WBSEDCL */}
                                  <button
                                    type="button"
                                    onClick={() => setDiscom("wbsedcl")}
                                    className={`p-[9px_8px] border-[1.5px] rounded-[8px] text-[13px] font-bold text-center transition-all duration-200 cursor-pointer block ${
                                      discom === "wbsedcl"
                                        ? "border-[#f97316] bg-[#fff7ed] text-[#ea580c]"
                                        : "border-[#e2e8f0] bg-[#f8f9fa] text-[#475569] hover:bg-gray-150"
                                    }`}
                                  >
                                    WBSEDCL
                                    <span className="block text-[10px] font-normal text-slate-500 mt-0.5">(Rest of WB)</span>
                                  </button>

                                  {/* CESC */}
                                  <button
                                    type="button"
                                    onClick={() => setDiscom("cesc")}
                                    className={`p-[9px_8px] border-[1.5px] rounded-[8px] text-[13px] font-bold text-center transition-all duration-200 cursor-pointer block ${
                                      discom === "cesc"
                                        ? "border-[#f97316] bg-[#fff7ed] text-[#ea580c]"
                                        : "border-[#e2e8f0] bg-[#f8f9fa] text-[#475569] hover:bg-gray-150"
                                    }`}
                                  >
                                    CESC
                                    <span className="block text-[10px] font-normal text-slate-500 mt-0.5">(Kolkata)</span>
                                  </button>

                                  {/* Not Sure */}
                                  <button
                                    type="button"
                                    onClick={() => setDiscom("notsure")}
                                    className={`p-[9px_8px] border-[1.5px] rounded-[8px] text-[13px] font-bold text-center transition-all duration-200 cursor-pointer block ${
                                      discom === "notsure"
                                        ? "border-[#f97316] bg-[#fff7ed] text-[#ea580c]"
                                        : "border-[#e2e8f0] bg-[#f8f9fa] text-[#475569] hover:bg-gray-150"
                                    }`}
                                  >
                                    Not Sure
                                    <span className="block text-[10px] font-normal text-slate-500 mt-0.5">(We'll check)</span>
                                  </button>
                                </div>
                              </div>

                              {/* Roof Type / Property Notes (Optional) */}
                              <div className="col-span-1 sm:col-span-2">
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Roof Type / Property Notes (Optional)
                                </label>
                                <input
                                  type="text"
                                  value={roofNotes}
                                  onChange={(e) => setRoofNotes(e.target.value)}
                                  placeholder="e.g. Flat terrace, approx. 400 sq ft available, own the property"
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#f97316] focus:ring-3 focus:ring-[#f97316]/10"
                                />
                              </div>

                              {/* Message (Optional) */}
                              <div className="col-span-1 sm:col-span-2">
                                <label className="block text-[12px] font-bold uppercase tracking-[0.6px] text-[#475569] mb-1.5">
                                  Message (Optional)
                                </label>
                                <textarea
                                  rows={4}
                                  value={msg}
                                  onChange={(e) => setMsg(e.target.value)}
                                  placeholder="Any questions about subsidy, process timeline, loan options, or anything else you'd like to ask before we call..."
                                  className="w-full p-[12px_14px] rounded-[8px] border-[1.5px] border-[#e2e8f0] bg-white text-[14.5px] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 outline-none focus:border-[#f97316] focus:ring-3 focus:ring-[#f97316]/10 resize-vertical min-h-[100px] leading-relaxed"
                                />
                              </div>
                            </div>

                            {/* SOLAR SUBMIT BUTTON */}
                            <div className="pt-4">
                              <button
                                type="submit"
                                className="w-full p-4 rounded-[10px] cursor-pointer text-[15.5px] font-extrabold bg-[#f97316] text-white flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_4px_14px_rgba(249,115,22,0.35)] hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,115,22,0.45)]"
                              >
                                <Sparkles className="w-5 h-5" />
                                🌟 Book Free Home Visit — PM Surya Ghar
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  )}
                </div>

                {/* Form Disclaimer Footer */}
                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-[#f8f9fa] border-t border-[#e2e8f0]">
                  <p className="text-[12px] text-[#94a3b8] text-center leading-relaxed font-medium">
                    We'll call you within 2 hours (Mon–Sat, 9 AM–7 PM). No commitment required. Your details are only used to contact you about your enquiry.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 SERVICE OPERATIONS DISTRICTS */}
      <section className="py-16 bg-[#F7F9F7] border-y border-[#E3ECE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-gray-950 uppercase">Active Operational Districts</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-xl mx-auto">
              We proudly provide our services across <span className="font-black text-[#15803d] bg-[#f0fdf4] border border-[#dcfce7] px-1.5 py-0.5 rounded-sm">all districts of West Bengal</span>. With a strong presence throughout the state, our experienced team is committed to delivering reliable, high-quality solutions to customers in every district, ensuring timely support and exceptional service wherever you are.
            </p>
          </div>
        
        </div>
      </section>

      {/* 🟢 FAQ ACCORDION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#16a34a] font-black uppercase tracking-widest text-xs bg-[#f0fdf4] px-4 py-1.5 rounded-full inline-block mb-4">Straight Answers</span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight uppercase">Questions We Hear All the Time</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">Get direct, honest operational guidance regarding our services and subsidy claims.</p>
          </div>

          <div className="space-y-4">
            {faqQuestions.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAFBF9] border border-[#E3ECE1] rounded-2xl overflow-hidden shadow-xs hover:border-[#D8E6D5] transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 font-bold text-left text-gray-950 flex justify-between items-center gap-4 hover:bg-[#F3F6F2] transition-colors text-sm sm:text-base cursor-pointer"
                >
                  <span className="leading-snug">{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#16a34a] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-[#E3ECE1] bg-white"
                    >
                      <p className="py-5 px-6 text-gray-700 text-xs sm:text-sm leading-relaxed text-justify">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
