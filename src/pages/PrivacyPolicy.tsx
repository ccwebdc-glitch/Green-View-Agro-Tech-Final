import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Eye, 
  UserCheck, 
  Server, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Printer, 
  Building2, 
  Sun, 
  Droplet,
  FileCheck2,
  ExternalLink,
  Clock
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const lastUpdated = "September 2026";
  const customPhone = "+91 7384854555";
  const customEmail = "gvat.93@gmail.com";

  const sections = [
    { id: "section-1", title: "1. Introduction & Scope" },
    { id: "section-2", title: "2. Information We Collect" },
    { id: "section-3", title: "3. How We Use Your Data" },
    { id: "section-4", title: "4. Government Subsidy & Third-Party Portals" },
    { id: "section-5", title: "5. Information Sharing & Equipment Partners" },
    { id: "section-6", title: "6. Data Security & Storage" },
    { id: "section-7", title: "7. Cookies & Website Analytics" },
    { id: "section-8", title: "8. Your Data Protection Rights" },
    { id: "section-9", title: "9. Communications & WhatsApp Support" },
    { id: "section-10", title: "10. Retention of Records" },
    { id: "section-11", title: "11. Grievance Redressal & Contact" },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f8faf8] min-h-screen text-gray-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-green-950 via-emerald-900 to-green-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Agri Tech Background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        
        {/* Glow circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-500/30 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-emerald-300 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Legal Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight text-white">
            Privacy & Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300">
              Protection Policy
            </span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            Green View Agro Tech is committed to safeguarding the personal, agricultural, and property data of our farmers, solar customers, and website visitors across West Bengal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-emerald-200/90">
            <div className="flex items-center gap-1.5 bg-black/25 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Effective Date & Last Updated: <strong>{lastUpdated}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/25 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Registered in West Bengal, India</span>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full border border-white/20 text-white font-medium cursor-pointer"
              title="Print Privacy Policy"
            >
              <Printer className="w-4 h-4" />
              <span>Print Policy</span>
            </button>
          </div>
        </div>
      </section>

      {/* Summary Highlight Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex items-start gap-4">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Zero Data Selling</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We never sell, rent, or trade your personal or land records to advertisers or third-party marketers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex items-start gap-4">
            <div className="p-2.5 bg-green-50 text-green-600 rounded-lg shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">PM Surya Ghar Safe</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Electricity meter bills are processed solely for WBSEDCL/CESC load validation and national portal subsidies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex items-start gap-4">
            <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Agri-Data Protection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Borewell, farm layout, and irrigation pump specs are safeguarded with strict access controls.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex items-start gap-4">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Full User Rights</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                You can review, correct, or request deletion of your contact data anytime via call or email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-extrabold text-gray-900 text-base mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Policy Navigation</span>
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-between group ${
                      activeSection === sec.id
                        ? "bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-600 pl-2"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span>{sec.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                      activeSection === sec.id ? "opacity-100 text-emerald-600" : "text-gray-400"
                    }`} />
                  </button>
                ))}
              </nav>

              {/* Quick Contact Card */}
              <div className="mt-8 pt-6 border-t border-gray-100 bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                <h4 className="font-bold text-emerald-950 text-xs uppercase tracking-wider mb-2">Need Privacy Assistance?</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Have questions about how your solar or farm data is handled? Reach our team directly:
                </p>
                <div className="space-y-2 text-xs">
                  <a href={`tel:${customPhone}`} className="flex items-center gap-2 text-emerald-800 font-semibold hover:underline">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{customPhone}</span>
                  </a>
                  <a href={`mailto:${customEmail}`} className="flex items-center gap-2 text-emerald-800 font-semibold hover:underline">
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{customEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Text Content */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* Section 1 */}
            <article id="section-1" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">1. Introduction & Scope</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  Welcome to <strong>Green View Agro Tech</strong> ("Company", "we", "our", or "us"). We are an authorized agricultural technology, micro-irrigation engineering, and renewable energy provider registered in West Bengal, India. We operate from our Head Office in Khandra (Paschim Bardhaman) and branches in Suri (Birbhum) and Bhatar (Purba Bardhaman).
                </p>
                <p>
                  This Privacy Policy outlines how we collect, store, utilize, protect, and disclose information gathered from:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>Visitors to our website (<strong>greenviewagrotech.in</strong> / associated platforms);</li>
                  <li>Farmers, agricultural landholders, and greenhouse operators consulting us for Drip, Sprinkler, Polyhouse, and Solar Agricultural Pump installations;</li>
                  <li>Homeowners, housing societies, and commercial clients applying for Rooftop Solar systems and PM Surya Ghar: Muft Bijli Yojana subsidies;</li>
                  <li>Inquiries received through WhatsApp, phone calls, field surveys, or on-ground demonstrations.</li>
                </ul>
                <p>
                  By accessing our website, requesting a quotation, or submitting your details for feasibility surveys and government subsidies, you acknowledge and agree to the practices outlined in this policy.
                </p>
              </div>
            </article>

            {/* Section 2 */}
            <article id="section-2" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">2. Information We Collect</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  To design accurate agricultural systems, calculate accurate solar capacities, and facilitate government subsidies, we collect the following categories of information:
                </p>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      A. Personal & Contact Identifiers
                    </h3>
                    <p className="text-xs text-gray-600">
                      Full Name, Mobile Number, WhatsApp Number, Email Address, Billing Address, Site Location, District, and PIN code.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1.5">
                      <Sun className="w-4 h-4 text-amber-600" />
                      B. Rooftop Solar & Electricity Utility Details
                    </h3>
                    <p className="text-xs text-gray-600">
                      Electricity Consumer ID / CA Number (WBSEDCL or CESC), sanctioned load, past 6–12 months electricity billing history, rooftop surface type (RCC, tin shed, slope), shadow-free area (sq. ft.), and electrical distribution box specifications.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1.5">
                      <Droplet className="w-4 h-4 text-teal-600" />
                      C. Farm, Irrigation & Soil Specifications
                    </h3>
                    <p className="text-xs text-gray-600">
                      Land size (Bighas / Acres), crop types (e.g., potato, paddy, mustard, horticulture), water source (borewell depth, static water level, delivery pipe diameter, canal, pond), elevation differences, and desired automation level.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-blue-600" />
                      D. Subsidy Documentation (Submitted Voluntarily by You)
                    </h3>
                    <p className="text-xs text-gray-600">
                      Copies of electricity bills, Aadhaar card copies, bank account passbook/cancelled cheques (for direct benefit transfer of subsidies), and land records (Porcha/Khatian) when registering under state or central agriculture and solar subsidy portals.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-1.5">
                      <Server className="w-4 h-4 text-purple-600" />
                      E. Technical & Browsing Data
                    </h3>
                    <p className="text-xs text-gray-600">
                      IP address, device type, browser version, pages visited, referral URLs, and session duration to ensure security and optimize website responsiveness across mobile and desktop devices.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 3 */}
            <article id="section-3" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">3. How We Use Your Data</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  We process collected information solely for legitimate agricultural, engineering, and contractual business purposes, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-150 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Engineering Sizing:</strong> Calculating appropriate pump HP, solar module wattage, inverter capacity, and drip emitter flow rates.</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-150 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Formal Quotations:</strong> Generating customized itemized BOMs (Bill of Materials) and transparent project cost breakdowns.</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-150 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Government Subsidy Filing:</strong> Uploading required documentation to National PM Surya Ghar Portal, WBSEDCL / CESC portals, or Agricultural Directorate schemes.</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-150 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>On-Site Surveys & Logistics:</strong> Scheduling field engineers to visit your farm, polyhouse location, or rooftop.</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-150 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Warranty Registration:</strong> Registering serial numbers of PV modules, solar inverters, and pumps with manufacturers for 5 to 25-year warranties.</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-150 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>After-Sales Support:</strong> Providing preventive maintenance, net meter synchronization assistance, and troubleshooting.</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article id="section-4" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Sun className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">4. Government Subsidy & Third-Party Portals</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  As an officially registered vendor for the <strong>PM Surya Ghar: Muft Bijli Yojana</strong> and agricultural support programs in West Bengal, we interact directly with statutory platforms.
                </p>
                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs space-y-2 text-emerald-950">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>How Your Subsidy Documents Are Handled:</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-emerald-900">
                    <li>Consumer IDs and electricity bills are submitted directly to WBSEDCL (West Bengal State Electricity Distribution Company Limited) or CESC (Calcutta Electric Supply Corporation) for technical feasibility approval and net-metering synchronization.</li>
                    <li>Bank account details and Aadhaar copies are uploaded to the official Government of India PM Surya Ghar National Portal (pmsuryaghar.gov.in) exclusively for direct central subsidy disbursement (up to ₹78,000) into your own verified bank account.</li>
                    <li>Green View Agro Tech never acts as an intermediary for your subsidy funds; funds are disbursed directly by the Government into your bank account.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 5 */}
            <article id="section-5" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">5. Information Sharing & Equipment Partners</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  We strictly <strong>do not sell, license, or monetize</strong> your data. We only share limited operational information with:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Certified Equipment Manufacturers:</strong> We provide delivery and serial number records to authorized partners (such as Premier Irrigation Adritec, Jain Irrigation, Captain Polyplast, C.R.I. Pumps, Shakti Pumps, Lubi Pumps, SOVA Solar, Pahal Solar, and Growatt/Deye inverters) solely for valid warranty registration, equipment dispatch, and replacement claims.
                  </li>
                  <li>
                    <strong>Field Engineering & Logistics Crews:</strong> Our in-house and contracted installation technicians receive site addresses, contact numbers, and technical schematics for project execution.
                  </li>
                  <li>
                    <strong>Legal & Regulatory Authorities:</strong> If required by Indian law, court order, or authorized government agencies (e.g., GST filings, audit compliance, or grid safety investigations).
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 6 */}
            <article id="section-6" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">6. Data Security & Storage</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  We employ rigorous administrative, physical, and technical measures to protect your digital and physical records:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Encrypted Transmission</h3>
                    <p className="text-xs text-gray-600">
                      All website interactions and inquiry submissions use HTTPS with modern TLS encryption to prevent data interception.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Restricted Access</h3>
                    <p className="text-xs text-gray-600">
                      Customer documents and bill scans are accessible only by authorized project engineers and government liaison officers.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Physical Document Security</h3>
                    <p className="text-xs text-gray-600">
                      Physical application forms gathered at our Khandra, Suri, or Bhatar centers are stored in secured company archives.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Secure Backup Systems</h3>
                    <p className="text-xs text-gray-600">
                      System data is backed up regularly to prevent loss from hardware failures or unforeseen incidents.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 7 */}
            <article id="section-7" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">7. Cookies & Website Analytics</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  Our website uses standard essential cookies and lightweight analytics to improve user experience:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li><strong>Essential Cookies:</strong> Remember your active navigation state, selected tabs (e.g., Irrigation vs. Solar Pumping vs. PM Surya Ghar), and form drafts.</li>
                  <li><strong>Performance Analytics:</strong> Helps us understand which educational blogs or pump calculators farmers find most useful so we can optimize load times on rural 3G/4G networks.</li>
                  <li><strong>No Invasive Advertising Trackers:</strong> We do not run third-party advertising cookies or behavioral tracking pixel networks.</li>
                </ul>
                <p className="text-xs text-gray-500">
                  You can choose to disable cookies through your browser settings at any time without losing access to core website information.
                </p>
              </div>
            </article>

            {/* Section 8 */}
            <article id="section-8" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">8. Your Data Protection Rights</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  Under Indian data protection frameworks, including the Digital Personal Data Protection (DPDP) Act, you have explicit rights regarding your personal information:
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="font-bold text-emerald-700 shrink-0">1. Right to Access:</span>
                    <span>You can request a summary of the personal and project records we hold about you.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="font-bold text-emerald-700 shrink-0">2. Right to Correction:</span>
                    <span>You may update incorrect contact details, address typos, or revised electricity consumer numbers.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="font-bold text-emerald-700 shrink-0">3. Right to Erasure:</span>
                    <span>You may request the deletion of your inquiry data once the quotation process concludes, subject to statutory warranty and tax audit obligations.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="font-bold text-emerald-700 shrink-0">4. Right to Withdraw Consent:</span>
                    <span>You may withdraw consent for promotional communication or newsletter updates at any moment.</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 9 */}
            <article id="section-9" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">9. Communications & WhatsApp Support</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  We offer real-time customer support via WhatsApp and telephone to make communication accessible for farmers and local clients across rural and urban Bengal:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>When you click our official WhatsApp button (+91 7384854555), your communication is governed by WhatsApp's end-to-end encryption.</li>
                  <li>We send project milestone updates, subsidy sanction notices, and maintenance reminders via SMS or WhatsApp only after receiving your consent.</li>
                  <li>We do not send automated spam calls or unauthorized telemarketing pitches.</li>
                </ul>
              </div>
            </article>

            {/* Section 10 */}
            <article id="section-10" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">10. Retention of Records</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  We retain client project records, net metering agreements, and equipment serial numbers for the lifespan of the system warranty (up to 5 years for inverters/controllers, and up to 25 years for solar photovoltaic panels) to ensure seamless warranty fulfillment, repair, and state electrical inspectorate audits.
                </p>
                <p className="text-xs text-gray-500">
                  Unconverted preliminary inquiries without active projects are routinely purged after 18 months.
                </p>
              </div>
            </article>

            {/* Section 11 */}
            <article id="section-11" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100/70 text-emerald-800 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">11. Grievance Redressal & Contact</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or wish to exercise your data rights, please contact our Grievance & Compliance Team:
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-emerald-50/40 p-6 rounded-2xl border border-emerald-100 space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Green View Agro Tech</h4>
                      <p className="text-xs text-gray-600">Authorized Agri-Tech & PM Surya Ghar Solar Vendor</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-xs">
                      <span className="font-bold text-emerald-700 block mb-1">Head Office – Khandra</span>
                      <p className="text-gray-600">Khandra, Old Amlouka Road, Paschim Bardhaman – 713363, West Bengal</p>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-xs">
                      <span className="font-bold text-emerald-700 block mb-1">Branch – Suri</span>
                      <p className="text-gray-600">Barabagan, Ward No. 1, Suri, Birbhum – 731103, West Bengal</p>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-xs">
                      <span className="font-bold text-emerald-700 block mb-1">Branch – Bhatar</span>
                      <p className="text-gray-600">Bhatar Fire Brigade More, Bhatar, Purba Bardhaman – 713125, West Bengal</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-emerald-100 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
                    <a href={`tel:${customPhone}`} className="flex items-center gap-2 text-emerald-900 font-bold hover:text-emerald-700">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>{customPhone}</span>
                    </a>
                    <a href={`mailto:${customEmail}`} className="flex items-center gap-2 text-emerald-900 font-bold hover:text-emerald-700">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      <span>{customEmail}</span>
                    </a>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline">
                      <span>Visit Contact Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <p className="text-xs text-gray-500 pt-2">
                  All grievances submitted will be acknowledged within 48 business hours and resolved within 30 days pursuant to applicable Indian laws.
                </p>
              </div>
            </article>

            {/* Back to Home & Help Banner */}
            <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1">Ready to explore modern agri-tech or rooftop solar?</h3>
                <p className="text-xs sm:text-sm text-emerald-200">
                  Talk to our certified engineers for free site assessment and subsidy guidance.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/services"
                  className="bg-white text-emerald-900 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm hover:bg-emerald-100 transition-colors shadow-sm"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-colors border border-emerald-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </main>
        </div>
      </section>
    </div>
  );
}
