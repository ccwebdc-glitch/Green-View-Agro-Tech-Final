import { Link } from "react-router-dom";
import { 
  ShieldCheck, Lock, FileText, CheckCircle2, Phone, Mail, 
  MapPin, Eye, Server, RefreshCw, AlertCircle 
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Transparency & Security
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Privacy Policy & Data Protection Charter
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto">
            Green View Agro Tech is committed to safeguarding your personal data, farm records, 
            and government subsidy documentation with complete integrity and confidentiality.
          </p>
          <div className="mt-6 text-xs text-emerald-300 font-medium">
            <span>Last Updated: October 2026</span>
            <span className="mx-2">•</span>
            <span>Applicable across all Green View Agro Tech Web & Field Operations</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-12 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          
          {/* Quick Summary Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-emerald-950 mb-1">
                  At a Glance: Our Privacy Commitment
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 leading-normal">
                  We collect only the information necessary to design your agricultural or solar systems, 
                  conduct feasibility visits, and register your official subsidies under PM Surya Ghar Muft Bijli Yojana, 
                  PM-KUSUM, or National Horticulture Mission. <strong>We never sell, rent, or trade your personal data to any third-party marketing companies.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Who We Are */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">1</span>
              Who We Are & Company Identification
            </h2>
            <p>
              <strong>Green View Agro Tech</strong> ("we", "us", or "our") is a specialized agricultural engineering, 
              micro-irrigation, commercial greenhouse construction, and renewable energy firm headquartered in Khandra, 
              Paschim Bardhaman, West Bengal. We are an officially registered vendor on the Government of India PM Surya Ghar 
              portal (pmsuryaghar.gov.in) serving WBSEDCL and CESC distribution licensee areas, as well as a certified 
              solar pumping and micro-irrigation system installer.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">2</span>
              Information We Collect
            </h2>
            <p>
              When you use our website, consult with our engineers, or commission us to execute a solar, irrigation, 
              or greenhouse project, we may collect the following categories of information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Contact & Identification Data
                </h4>
                <p className="text-xs text-gray-600">
                  Full name, mobile phone number, WhatsApp contact, email address, physical farm or home address, 
                  district, pin code, and Aadhaar card (only when mandated for government subsidy filing).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Farm & Technical Parameters
                </h4>
                <p className="text-xs text-gray-600">
                  Land holding size (in bighas or acres), crop types, soil conditions, water source type (borewell, pond, canal), 
                  borewell depth, static water level, and GPS coordinates for precision layout design.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Utility & Subsidy Records
                </h4>
                <p className="text-xs text-gray-600">
                  Electricity consumer ID / CA number, recent electricity bills, sanctioned load (kW), 
                  DISCOM name (WBSEDCL or CESC), and bank account details (specifically for direct benefit transfer of government subsidies).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Website Interaction Data
                </h4>
                <p className="text-xs text-gray-600">
                  Standard browser headers, device type, approximate city-level IP location, 
                  and pages visited to optimize website speed and mobile responsiveness.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">3</span>
              How We Use Your Information
            </h2>
            <p>Your data is processed strictly for the following purposes:</p>
            <ul className="space-y-2 text-sm pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>Government Subsidy Application:</strong> Registering and filing your beneficiary application on the National Portal for PM Surya Ghar (pmsuryaghar.gov.in) and state DISCOM net-metering approvals.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>Engineering Feasibility & Quotations:</strong> Conducting shadow analysis, structural load assessments, borewell flow evaluations, and producing transparent, itemized project estimates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>Procurement & System Commissioning:</strong> Sourcing serialized ALMM/BIS equipment, dispatching installation technicians, and setting up remote solar or irrigation monitoring.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>Warranty & Maintenance Support:</strong> Honoring 5-year workmanship warranties, facilitating 25-year panel performance claims, and scheduling seasonal maintenance visits.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Government & Third-Party Disclosure */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">4</span>
              Disclosure of Information to Authorized Authorities
            </h2>
            <p>
              We disclose your personal and property data solely to official government and regulatory authorities 
              involved in the direct fulfillment of your requested services:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li><strong>Ministry of New & Renewable Energy (MNRE):</strong> For PM Surya Ghar and PM-KUSUM beneficiary validation.</li>
              <li><strong>Power Distribution Companies (WBSEDCL & CESC):</strong> For net-meter technical feasibility inspection and bi-directional meter synchronization.</li>
              <li><strong>Department of Agriculture / Horticulture:</strong> For micro-irrigation and protected cultivation subsidy clearances.</li>
              <li><strong>Certified OEM Partners:</strong> For component warranty registration (e.g., Shakti Pumps, Netafim, Sova Solar).</li>
            </ul>
            <p className="text-xs bg-amber-50 text-amber-900 border border-amber-200 p-3 rounded-xl mt-3">
              <strong>Notice:</strong> We do not disclose, sell, or monetize customer records to external advertising networks or data brokers under any circumstances.
            </p>
          </section>

          {/* Section 5: Data Security & Storage */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">5</span>
              Data Security & Safeguards
            </h2>
            <p>
              We implement industry-standard physical, managerial, and electronic protections to prevent unauthorized access, 
              alteration, disclosure, or destruction of personal data. All digital transmissions containing sensitive documentation 
              utilize Transport Layer Security (TLS/HTTPS). Hardcopy documentation collected during field surveys is stored in secure 
              lockers accessible only to authorized project engineers.
            </p>
          </section>

          {/* Section 6: Your Rights */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">6</span>
              Your Rights Under Indian Law
            </h2>
            <p>
              Under the Digital Personal Data Protection Act (DPDP Act) and applicable Indian regulations, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Request a summary of personal information we have recorded about you and your property.</li>
              <li>Request correction or updating of inaccurate or outdated contact or utility details.</li>
              <li>Withdraw consent for optional communications (excluding mandatory government subsidy correspondence).</li>
              <li>Request deletion of your records once regulatory audit and warranty compliance retention periods have passed.</li>
            </ul>
          </section>

          {/* Section 7: Grievance Officer & Contact Details */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">7</span>
              Grievance Officer & Privacy Inquiries
            </h2>
            <p>
              If you have any questions, feedback, or grievances regarding our privacy policy or how your data is handled, 
              please contact our designated Grievance & Compliance Officer:
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mt-4 space-y-2 text-sm">
              <p className="font-bold text-gray-900">Green View Agro Tech — Compliance Desk</p>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Old Amlouka Road, Khandra, Paschim Bardhaman – 713363, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Hotline: +91 7384854555</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Email: contact@greenviewagrotech.com</span>
              </div>
            </div>
          </section>

          {/* Back Action */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/"
              className="text-emerald-700 font-bold hover:underline text-sm"
            >
              ← Return to Home
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              Contact Our Privacy Desk
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
