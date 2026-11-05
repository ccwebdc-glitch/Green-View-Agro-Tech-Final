import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ShieldCheck, Award, CheckCircle2, ArrowRight, Zap, Droplets, 
  Layers, Wrench, Building2, ExternalLink, Sparkles 
} from "lucide-react";

interface Partner {
  name: string;
  category: "solar" | "irrigation" | "polyhouse" | "machinery";
  role: string;
  description: string;
  logo: string;
  certifications: string[];
  keyProducts: string[];
}

const partnersList: Partner[] = [
  {
    name: "Shakti Pumps",
    category: "solar",
    role: "Solar Submersible & Surface Pumps",
    description: "Pioneering energy-efficient solar pumping systems empanelled under PM-KUSUM with smart motor controllers and remote monitoring.",
    logo: "/shakti_pumps.webp",
    certifications: ["MNRE Empanelled", "PM-KUSUM Approved", "ISO 9001:2015", "BEE 5-Star"],
    keyProducts: ["Solar Submersible Pumps (1HP–10HP)", "Hybrid Solar Controllers", "Surface Monoblock Pumps"],
  },
  {
    name: "C.R.I. Pumps",
    category: "solar",
    role: "Heavy-Duty Agricultural Water Pumps",
    description: "Over 60 years of pumping engineering excellence delivering robust borewell and openwell pumps for rigorous Indian agricultural conditions.",
    logo: "/cri_pumps.gif",
    certifications: ["BIS Standard", "BEE 5-Star Energy Rated", "MNRE Approved"],
    keyProducts: ["Submersible Borewell Pumps", "Centrifugal Monobloc Pumps", "Solar VFD Drives"],
  },
  {
    name: "Netafim",
    category: "irrigation",
    role: "Pioneers of Drip & Micro Irrigation",
    description: "The global leader in precision irrigation solutions, providing pressure-compensating drippers, fertigation equipment, and automated valves.",
    logo: "/netafim.jpeg",
    certifications: ["Global ISO Standard", "PMKSY Approved", "BIS IS 13488"],
    keyProducts: ["UniRam & DripNet Dripline", "Screen & Disc Filters", "Air Release Valves"],
  },
  {
    name: "Premier Irrigation Adritec",
    category: "irrigation",
    role: "Large-Scale Agricultural & Landscape Irrigation",
    description: "India's premier manufacturer of drip, sprinkler, and micro-sprinkler networks engineered to save up to 60% water while maximizing crop yield.",
    logo: "/PREMIER.png",
    certifications: ["PMKSY Subsidy Compliant", "BIS IS 12786", "ISO 9001"],
    keyProducts: ["Micro Sprinklers & Foggers", "HDPE Quick-Coupled Pipes", "Hydrocyclone Sand Separators"],
  },
  {
    name: "Captain Polyplast",
    category: "irrigation",
    role: "High-Grade Polymer Pipes & Drip Systems",
    description: "Renowned manufacturer of high-tensile HDPE pipes, PVC conduits, and micro-irrigation hardware designed for long-term field durability.",
    logo: "/captain_polyplast.jpg",
    certifications: ["BIS IS 4984 Certified", "Govt. Subsidy Empanelled"],
    keyProducts: ["HDPE Sprinkler Pipes", "Inline Drip Laterals", "Venturi Injectors"],
  },
  {
    name: "Sova Solar",
    category: "solar",
    role: "Tier-1 High-Efficiency Photovoltaic Modules",
    description: "Leading Indian solar PV module manufacturer featuring TOPCon and Mono-PERC technology with 25-year linear power performance warranty.",
    logo: "/sova_solar.png",
    certifications: ["ALMM Listed", "MNRE Registered", "IEC 61215 / 61730", "BIS Certified"],
    keyProducts: ["Mono-PERC Half-Cut Panels (540W–590W)", "TOPCon Bifacial Modules"],
  },
  {
    name: "Pahal Solar",
    category: "solar",
    role: "Advanced Rooftop & Agricultural PV Modules",
    description: "High-reliability solar modules delivering superior low-light generation for PM Surya Ghar and PM-KUSUM installations across Eastern India.",
    logo: "/pahal_solar.png",
    certifications: ["ALMM Approved", "PM Surya Ghar Approved", "BIS Certified"],
    keyProducts: ["DCR Solar Modules (Subsidy-Eligible)", "Mono PERC Modules"],
  },
  {
    name: "Agriplast Protected Cultivation",
    category: "polyhouse",
    role: "Commercial Greenhouse & Polyhouse Solutions",
    description: "Leading manufacturer of structural greenhouse films, insect nets, shade nets, and climate-control accessories engineered for extreme weather.",
    logo: "/agriplast.jpg",
    certifications: ["UV Stabilized 200 Micron", "Anti-Drip & Anti-Dust Compliant", "NHB Approved"],
    keyProducts: ["5-Layer Diffused Greenhouse Film", "Anti-Insect 40/50 Mesh Nets", "Aluminet Thermal Screens"],
  },
  {
    name: "GreenPro Agri Solutions",
    category: "polyhouse",
    role: "Agricultural Geotextiles & Covers",
    description: "Specialized supplier of agro-textiles, mulching films, crop covers, and greenhouse films tested to resist UV degradation and chemical pesticides.",
    logo: "/GreenPro.png",
    certifications: ["ISO 9001", "CE Certified", "Global Gap Aligned"],
    keyProducts: ["Silver-Black Mulch Film", "UV Stabilized Shade Nets", "Ground Covers / Weed Mats"],
  },
  {
    name: "Ratnagiri Impex / Agrimate",
    category: "machinery",
    role: "Farm Mechanization & Power Equipment",
    description: "Comprehensive agricultural tools and equipment including heavy-duty power weeders, high-pressure sprayers, and brush cutters.",
    logo: "/ratnagiri_imex_v2.png",
    certifications: ["State Agriculture Empanelled", "CE Certified Machinery"],
    keyProducts: ["Power Sprayers & Foggers", "Rotary Tillers & Weeders", "Earth Augers"],
  },
  {
    name: "VST Tillers Tractors",
    category: "machinery",
    role: "Compact Tractors & Power Weeders",
    description: "India's pioneer in lightweight compact farm machinery designed specifically for horticulture, inter-cultivation, and greenhouse row farming.",
    logo: "/vst_tillers_tractors.png",
    certifications: ["Govt. Subsidized Machinery Scheme", "ISO 9001"],
    keyProducts: ["Power Tillers", "Compact 4WD Mini Tractors", "Rotavators"],
  },
  {
    name: "Greaves Cotton",
    category: "machinery",
    role: "Heavy-Duty Diesel Engines & Pumpsets",
    description: "Reliable power solutions and multi-utility diesel pump sets trusted for generations across rural India for uncompromised irrigation delivery.",
    logo: "/greaves_cotton.png",
    certifications: ["BS-IV / Emission Compliant", "ISI Certified"],
    keyProducts: ["Agricultural Diesel Engines", "Portable Water Pumpsets"],
  },
  {
    name: "KisanKraft",
    category: "machinery",
    role: "Horticulture Equipment & Farm Implements",
    description: "Affordable, high-durability farm implements, battery knapsack sprayers, chain saws, and post-hole diggers for progressive growers.",
    logo: "/kisankraft.jpeg",
    certifications: ["Sub-Mission on Agricultural Mechanization (SMAM) Listed"],
    keyProducts: ["Battery Sprayers", "Brush Cutters", "Mini Weeders"],
  },
  {
    name: "BMI Cables Pvt. Ltd.",
    category: "solar",
    role: "Solar DC Cables & Submersible Flat Cables",
    description: "Specialized high-conductivity copper cables with UV-resistant XLPO insulation designed to withstand 25+ years of intense outdoor exposure.",
    logo: "/bmi_cables.png",
    certifications: ["TUV Rheinland Certified", "EN 50618 Compliant", "IS 694"],
    keyProducts: ["4 sq mm / 6 sq mm Solar DC Cables", "Submersible Flat 3-Core Cables"],
  },
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState<"all" | "solar" | "irrigation" | "polyhouse" | "machinery">("all");

  const filteredPartners = partnersList.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            <Award className="w-4 h-4 text-emerald-400" />
            Authorized Alliances & Sourcing Partners
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            World-Class Technology Brands Powering Every Installation
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed">
            Green View Agro Tech partners exclusively with certified, MNRE-approved, 
            and BIS-compliant OEMs to guarantee maximum efficiency, authentic government subsidies, 
            and up to 25 years of field durability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-emerald-200">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Genuine Manufacturer Warranties
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              PM Surya Ghar & PM-KUSUM Empanelled
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
              <Building2 className="w-4 h-4 text-emerald-400" />
              Authorized Dealership & Service Support
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Category Filter Pills */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 mb-12 flex flex-wrap gap-2 justify-center">
          {[
            { key: "all", label: "All Sourcing Brands", count: partnersList.length },
            { key: "solar", label: "Solar & Energy (PM Surya Ghar & KUSUM)", icon: Zap },
            { key: "irrigation", label: "Drip & Precision Irrigation", icon: Droplets },
            { key: "polyhouse", label: "Greenhouse & Agro Films", icon: Layers },
            { key: "machinery", label: "Mechanization & Equipment", icon: Wrench },
          ].map((tab) => {
            const active = activeTab === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  active
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/25"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-white rounded-3xl border border-gray-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Logo Banner */}
                <div className="h-32 bg-gray-50/80 p-6 flex items-center justify-center border-b border-gray-100 relative group-hover:bg-emerald-50/40 transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = "none";
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent && !parent.querySelector(".fallback-text")) {
                        const span = document.createElement("span");
                        span.className = "fallback-text font-black text-xl text-gray-700 tracking-tight";
                        span.textContent = partner.name;
                        parent.appendChild(span);
                      }
                    }}
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-600 shadow-xs">
                    {partner.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-950 group-hover:text-emerald-700 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {partner.role}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-5">
                    {partner.description}
                  </p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Standards & Approvals
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 px-2 py-0.5 rounded-md"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Equipment Sourced */}
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Key Systems Supplied
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {partner.keyProducts.map((prod) => (
                        <li key={prod} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:bg-emerald-50/50 transition-colors">
                <span>Integrated by Green View</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 hover:text-emerald-800 hover:underline"
                >
                  <span>Inquire Sourcing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Pledge */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Zero Compromise Quality Charter
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-4">
                Why Equipment Origin & OEM Certification Matter
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Under PM Surya Ghar and PM-KUSUM, the central and state governments mandate Domestic Content Requirement (DCR) 
                and ALMM/BIS verified materials. Unregistered or grey-market components will disqualify your subsidy application 
                and leave you without manufacturer warranty recourse.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Bill of Material Traceability:</strong> Every panel, inverter, dripline, and pump comes with serialized factory test certificates.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct DISCOM Inspection Pass:</strong> Verified documentation expedites WBSEDCL and CESC net-meter inspections without rejections.</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900 text-white rounded-2xl p-6 text-center flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold mb-2">Want to Partner with Us?</h3>
                <p className="text-emerald-100/80 text-xs leading-relaxed mb-6">
                  Are you an agricultural OEM, solar manufacturer, or precision farming equipment innovator? We welcome supplier partnerships.
                </p>
              </div>
              <Link
                to="/contact?role=vendor"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold text-xs px-5 py-3 rounded-xl transition-colors shadow-md"
              >
                <span>Vendor Partnership Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
