import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const customPhone = "+91 7384854555";
  const customEmail = "gvat.93@gmail.com";
  const tagline = "Greening Your Life";

  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#040812] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="relative h-12 overflow-hidden rounded-lg px-2.5 py-1 bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/logo_new.png" 
                  alt="Green View Agro Tech" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-justify text-gray-400">
              West Bengal's trusted agri-tech partner — specializing in irrigation systems, polyhouse construction, solar pumping, and PM Surya Ghar rooftop solar across WBSEDCL and CESC areas.
            </p>
            <p className="text-green-500 font-bold italic text-sm">{tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-6 border-l-2 border-green-500 pl-3">Quick Navigation</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Our Story</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Irrigation, Polyhouse & Solar</Link></li>
              <li><Link to="/partners" className="hover:text-green-400 transition-colors">Equipment & Partners</Link></li>
              <li><Link to="/projects" className="hover:text-green-400 transition-colors">Projects Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Operational Team</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy & Policy</Link></li>
            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h4 className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-6 border-l-2 border-green-500 pl-3">Core Solutions</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link to="/services?tab=irrigation" className="hover:text-green-400 transition-colors text-gray-400">Drip & Sprinkler Systems</Link></li>
              <li><Link to="/services?tab=polyhouse" className="hover:text-green-400 transition-colors text-gray-400">Protected Polyhouse Building</Link></li>
              <li><Link to="/services?tab=solar" className="text-[#12B76A] hover:text-green-300 transition-colors">Solar Agriculture Pumps</Link></li>
              <li><Link to="/services?tab=pmsuryaghar" className="hover:text-green-400 transition-colors text-gray-400">PM Surya Ghar — ₹78K Subsidy</Link></li>
              <li><Link to="/services?tab=pmsuryaghar" className="hover:text-green-400 transition-colors text-gray-400">Government Subsidy Support</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-6 border-l-2 border-green-500 pl-3">Contact Information</h4>
            <div className="space-y-6 text-sm">
              <div>
                <h5 className="text-green-400 font-bold mb-1 uppercase text-xs tracking-wider">Head Office – Khandra</h5>
                <p className="text-gray-400 text-[13px] leading-snug">
                  Khandra, Old Amlouka Road, Paschim Bardhaman – 713363, West Bengal
                </p>
              </div>
              <div>
                <h5 className="text-green-400 font-bold mb-1 uppercase text-xs tracking-wider">Branch – Suri</h5>
                <p className="text-gray-400 text-[13px] leading-snug">
                  Barabagan, Ward No. 1, Suri, Birbhum – 731103, West Bengal
                </p>
              </div>
              <div>
                <h5 className="text-green-400 font-bold mb-1 uppercase text-xs tracking-wider">Branch – Bhatar</h5>
                <p className="text-gray-400 text-[13px] leading-snug">
                  Bhatar Fire Brigade More, Bhatar, Purba Bardhaman – 713125, West Bengal
                </p>
              </div>
              <div className="pt-2 border-t border-gray-800 space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="font-semibold text-white">{customPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="break-all text-white">{customEmail}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Green View Agro Tech. All on-ground rights reserved. Authorized Dealer.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">
              Privacy & Policy
            </Link>
            <span className="text-gray-700">•</span>
            <span className="hover:text-gray-400">West Bengal Registration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
