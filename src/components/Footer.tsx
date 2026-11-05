import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, ShieldCheck, Sun, Droplets, 
  Layers, ArrowUpRight, Clock, Award 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-green-950 to-gray-950 text-gray-300 border-t border-emerald-900/40 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top CTA Strip */}
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-2">
              <Sun className="w-3.5 h-3.5" />
              PM Surya Ghar & PM-KUSUM Empanelled
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Slash Electricity Bills & Modernize Your Farm?
            </h3>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">
              Get an on-site feasibility report, accurate subsidy calculation, and guaranteed government DISCOM approval.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-900/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+917384854555"
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-5 py-3.5 rounded-2xl border border-white/15 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 7384854555</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Company Profile (2 spans on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.jpg"
                alt="Green View Agro Tech"
                className="w-12 h-12 rounded-xl object-contain bg-white p-1 shadow-md border border-emerald-500/30"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight block">
                  GREEN VIEW AGRO TECH
                </span>
                <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase block">
                  Solar • Irrigation • Polyhouses
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Leading sustainable agriculture, rooftop solar, solar pumping, and micro-irrigation engineering firm in West Bengal. 
              Official vendor for PM Surya Ghar Muft Bijli Yojana (WBSEDCL & CESC) and PM-KUSUM solar pumping schemes.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-800 text-emerald-300 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Govt. Registered Vendor
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-800 text-emerald-300 px-3 py-1.5 rounded-lg">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                ALMM & BIS Verified
              </span>
            </div>
          </div>

          {/* Column 2: Solutions & Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services?tab=pmsuryaghar"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>PM Surya Ghar Solar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services?tab=solar"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>PM-KUSUM Solar Pumps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services?tab=irrigation"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>Drip & Micro Irrigation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services?tab=polyhouse"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>Commercial Polyhouses</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>All Agricultural Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About Green View
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  OEM Brand Partners
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Farming & Solar Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Office & Support
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  Old Amlouka Road, Khandra, Paschim Bardhaman – 713363, West Bengal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+917384854555" className="hover:text-white transition-colors text-xs font-semibold">
                  +91 7384854555
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:contact@greenviewagrotech.com" className="hover:text-white transition-colors text-xs">
                  contact@greenviewagrotech.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Green View Agro Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">
              Grievance Officer
            </Link>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400 font-medium">WBSEDCL & CESC Empanelled</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
