import { useState, useEffect, FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import ServicesFAQ from "../components/ServicesFAQ";
import { 
  Droplets, Sun, CloudRain, Shield, CheckCircle2, 
  ArrowRight, Calculator, FileText, Check, Phone, HelpCircle, Briefcase, Play,
  FileCheck, ShieldAlert, Landmark, Sparkles, ChevronRight, AlertTriangle,
  Home, Laptop, CheckSquare, Wrench, Zap, Coins,
  MessageSquare, Mail, Users, ClipboardList, MapPin, Sprout, TrendingUp, ShieldCheck, 
  Layers, GraduationCap, Settings2, Handshake, Headset
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14
    }
  }
};

const irrigationSteps = [
  {
    step: 1,
    title: "CONTACT US",
    bullets: [
      "Reach out to us via call, WhatsApp or email.",
      "Our team is ready to assist you."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Main phone body */}
        <div className="w-16 h-28 bg-white rounded-2xl border border-gray-200 shadow-md relative flex flex-col justify-between p-2 transform group-hover:scale-105 transition-all duration-300">
          {/* Speaker & camera slot */}
          <div className="w-8 h-1.5 bg-gray-200 rounded-full mx-auto mb-1.5" />
          
          {/* Screen mock blocks */}
          <div className="flex-1 space-y-2 bg-gray-50 rounded-lg p-1">
            <div className="w-full h-3 bg-green-100 rounded" />
            <div className="w-2/3 h-2 bg-gray-200 rounded" />
            <div className="w-5/6 h-2 bg-gray-200 rounded" />
            <div className="w-1/2 h-2 bg-gray-200 rounded" />
          </div>
          
          {/* Home indicator */}
          <div className="w-6 h-1 bg-gray-300 rounded-full mx-auto mt-1.5" />
        </div>

        {/* Floaters */}
        <div className="absolute top-4 left-6 bg-green-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
          <Phone className="w-4 h-4" />
        </div>
        <div className="absolute top-1/2 -right-1 bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div className="absolute bottom-2 left-6 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
          <Mail className="w-4 h-4" />
        </div>
      </div>
    )
  },
  {
    step: 2,
    title: "WE VISIT YOUR FIELD",
    bullets: [
      "We visit your field and study the land, water source and soil.",
      "Understand your farming requirements and cultivation goals."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Field layout grid */}
        <div className="w-28 h-20 bg-emerald-50 border border-emerald-200/50 rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-sm transform group-hover:scale-105 transition-all duration-300">
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-emerald-800" />
            ))}
          </div>
          {/* Sprout and location indicators */}
          <div className="z-10 flex justify-between">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <Sprout className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="z-10 flex justify-around">
            <Sprout className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
        
        {/* Experts and details */}
        <div className="absolute top-2 right-4 bg-white border border-gray-150 p-1.5 rounded-lg shadow-md flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-green-700" />
          <span className="text-[8px] font-bold text-gray-500 uppercase font-poppins">Field Visit</span>
        </div>
        <div className="absolute bottom-2 left-4 bg-amber-50 border border-amber-200 p-1.5 rounded-lg shadow-md flex items-center gap-1">
          <ClipboardList className="w-3.5 h-3.5 text-amber-700" />
          <span className="text-[8px] font-bold text-gray-500">Notebook</span>
        </div>
        
        <MapPin className="w-7 h-7 text-rose-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md animate-bounce" />
      </div>
    )
  },
  {
    step: 3,
    title: "CROP ANALYSIS & SYSTEM RECOMMENDATION",
    bullets: [
      "We analyze your crop type, field size and water availability.",
      "Recommend the most suitable irrigation system for higher yield and maximum water savings."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px] p-2">
        {/* Analysis Dashboard Layout */}
        <div className="w-full max-w-[140px] bg-white rounded-xl border border-gray-150 shadow-sm p-1.5 flex flex-col gap-1.5 transform group-hover:scale-105 transition-all duration-300">
          {/* 4 Systems Grid */}
          <div className="grid grid-cols-2 gap-1 flex-1">
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center text-center">
              <Droplets className="w-3.5 h-3.5 text-blue-500 mb-0.5" />
              <span className="text-[7px] font-black leading-none text-[#1F2937] font-poppins">Drip</span>
            </div>
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center text-center">
              <CloudRain className="w-3.5 h-3.5 text-[#1B5E20] mb-0.5" />
              <span className="text-[7px] font-black leading-none text-[#1F2937] font-poppins">Sprinkler</span>
            </div>
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center text-center">
              <Sun className="w-3.5 h-3.5 text-amber-500 mb-0.5" />
              <span className="text-[7px] font-black leading-none text-[#1F2937] font-poppins">Micro</span>
            </div>
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center text-center">
              <Zap className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
              <span className="text-[7px] font-black leading-none text-[#1F2937] font-poppins">Rain Gun</span>
            </div>
          </div>
          {/* Analyze Bar */}
          <div className="h-1.5 w-full bg-gray-150 rounded overflow-hidden">
            <div className="h-full w-2/3 bg-emerald-600 animate-[pulse_1.5s_infinite]" />
          </div>
        </div>
      </div>
    )
  },
  {
    step: 4,
    title: "DESIGN & ESTIMATION",
    bullets: [
      "Prepare a customized irrigation layout.",
      "Provide material estimation and transparent quotation."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Blueprint Layout representation */}
        <div className="w-24 h-20 bg-slate-900 rounded-lg border border-slate-700 relative overflow-hidden p-2 flex flex-col justify-between shadow-md transform group-hover:scale-105 transition-all duration-300">
          {/* Blueprint Grid & lines */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0.5 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-blue-400" />
            ))}
          </div>
          
          {/* Interactive layout shapes */}
          <div className="z-10 w-full h-1 bg-cyan-400/80 rounded" />
          <div className="z-10 w-full flex justify-between">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </div>
          <div className="z-10 flex justify-between items-center text-[8px] font-mono text-cyan-300 font-bold">
            <span>Layout.dwg</span>
            <Calculator className="w-3 h-3 text-emerald-400" />
          </div>
        </div>
        
        {/* Estimate Card */}
        <div className="absolute top-2 right-4 bg-amber-500 text-white font-black text-[8px] px-1.5 py-0.5 rounded shadow-md animate-pulse">
          Quotation ₹
        </div>
      </div>
    )
  },
  {
    step: 5,
    title: "SYSTEM PLANNING & MATERIAL SELECTION",
    bullets: [
      "Select premium quality pipes, fittings, filters, valves and emitters.",
      "Ensure durable and efficient materials for long-term performance."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Material row */}
        <div className="flex gap-2 items-center justify-center transform group-hover:scale-105 transition-all duration-300">
          {/* Premium Filter */}
          <div className="w-8 h-14 bg-slate-800 rounded-lg relative flex flex-col justify-between items-center py-1.5 shadow border border-slate-700">
            <div className="w-10 h-2 bg-emerald-600 rounded-full" />
            <span className="text-[6px] text-white font-mono leading-none">FILTER</span>
            <div className="w-6 h-1.5 bg-slate-600 rounded" />
          </div>
          {/* Pressure Valve */}
          <div className="w-8 h-8 bg-slate-100 rounded-full border border-slate-300 relative flex items-center justify-center shadow-sm">
            <Settings2 className="w-4 h-4 text-[#1B5E20]" />
            <div className="absolute -top-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          {/* Piping Layer */}
          <div className="w-10 h-10 bg-slate-100 rounded border border-slate-300 flex flex-col items-center justify-center p-1 shadow-sm">
            <Layers className="w-4 h-4 text-blue-500" />
            <span className="text-[6px] font-black text-gray-500">PIPES</span>
          </div>
        </div>
        {/* Premium Checkmark */}
        <div className="absolute bottom-2 right-5 bg-green-600 text-white rounded-full p-1 shadow-md">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  },
  {
    step: 6,
    title: "INSTALLATION",
    bullets: [
      "Skilled installation according to approved design.",
      "Proper laying of mainline, sub-main, laterals, emitters and accessories."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Tech pipe layout */}
        <div className="w-28 h-20 bg-white border border-[#DDEFD9] rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-sm transform group-hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-black text-emerald-800 uppercase font-poppins">Field Install</span>
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
          </div>
          
          {/* Interactive pipeline */}
          <div className="relative w-full h-4 bg-slate-50 rounded flex items-center px-1">
            <div className="h-1 bg-blue-500 w-full relative flex justify-around">
              <div className="w-2 h-2 bg-emerald-500 rounded-full -top-0.5 absolute left-1/4 flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full" /></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full -top-0.5 absolute left-2/4 flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full" /></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full -top-0.5 absolute left-3/4 flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full" /></div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Sprout className="w-3 h-3 text-emerald-600" />
            <Sprout className="w-3 h-3 text-emerald-600" />
            <Sprout className="w-3 h-3 text-emerald-600" />
          </div>
        </div>
      </div>
    )
  },
  {
    step: 7,
    title: "TESTING & DEMONSTRATION",
    bullets: [
      "Test pressure, water flow and uniform distribution.",
      "Demonstrate complete system operation and usage."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Pressure meter gauge */}
        <div className="w-20 h-20 rounded-full border-4 border-emerald-600 bg-white flex flex-col items-center justify-center relative shadow-md transform group-hover:scale-105 transition-all duration-300">
          {/* Gauge Needle */}
          <div className="w-1 h-8 bg-amber-500 absolute top-2 origin-bottom transform rotate-45 rounded-full" />
          <div className="w-3 h-3 bg-slate-800 rounded-full z-10" />
          
          <span className="text-[7px] font-black text-gray-400 uppercase tracking-tighter mt-1 z-10 font-poppins">PRESSURE</span>
          <span className="text-[9px] font-black text-emerald-700 z-10 font-poppins">4.5 BAR</span>
        </div>
        
        {/* Water Splash */}
        <div className="absolute top-3 left-4 bg-blue-400 text-white p-1 rounded-full animate-ping">
          <Droplets className="w-3 h-3" />
        </div>
        <div className="absolute bottom-3 right-6 bg-green-500 text-white p-1 rounded-full shadow">
          <CheckCircle2 className="w-4 h-4" />
        </div>
      </div>
    )
  },
  {
    step: 8,
    title: "TRAINING & GUIDANCE",
    bullets: [
      "Train farmers and workers on system operation.",
      "Guidance for irrigation scheduling, maintenance and fertigation."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Presentation stand */}
        <div className="w-24 h-16 bg-[#13541b] border-2 border-amber-900 rounded-lg p-1.5 relative shadow-md flex flex-col justify-center items-center text-center transform group-hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-1">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="text-[8px] font-black text-white uppercase font-poppins">Guide Book</span>
          </div>
          <p className="text-[6px] text-emerald-100 font-bold leading-tight mt-1 font-poppins">FERTIGATION & TIMER SCHEDULE</p>
        </div>
        
        {/* Floating Sprout & User badge */}
        <div className="absolute bottom-2 right-4 bg-white border border-gray-150 rounded-lg px-1.5 py-1 flex items-center gap-1 shadow-md">
          <Users className="w-3.5 h-3.5 text-green-700" />
          <span className="text-[8px] font-bold text-gray-500 font-poppins">Farmers</span>
        </div>
      </div>
    )
  },
  {
    step: 9,
    title: "AFTER SALES SUPPORT",
    bullets: [
      "Regular follow-up and technical assistance.",
      "Quick response for maintenance and service needs."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Shield representing support */}
        <div className="w-16 h-18 bg-white border border-emerald-100 rounded-2xl flex flex-col items-center justify-center shadow-lg relative transform group-hover:scale-105 transition-all duration-300">
          <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-[#1B5E20]" />
          </div>
        </div>
        
        {/* Glow and checked elements */}
        <div className="absolute top-6 left-6 bg-[#1B5E20] text-white font-extrabold text-[8px] px-2 py-0.5 rounded-full shadow font-poppins">
          24/7 SUPPORT
        </div>
        
        {/* Floating phone call symbol */}
        <div className="absolute bottom-3 right-6 bg-amber-500 text-white p-1.5 rounded-full shadow-md">
          <Phone className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  },
  {
    step: 10,
    title: "BETTER YIELD, MORE SAVINGS",
    bullets: [
      "Efficient irrigation delivers better crop yield and quality.",
      "Save water, reduce energy costs and increase profitability."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Graph & Sprout layout */}
        <div className="w-28 h-20 bg-white border border-emerald-100 rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-sm transform group-hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <Sprout className="w-5 h-5 text-emerald-600" />
            <div className="flex items-center gap-0.5 bg-green-100 px-1 rounded">
              <TrendingUp className="w-3 h-3 text-[#1B5E20]" />
              <span className="text-[8px] font-black text-[#1B5E20] font-poppins">+45% Yield</span>
            </div>
          </div>
          
          {/* Rising chart mockup */}
          <div className="w-full h-4 relative flex items-end gap-1">
            <div className="w-3 h-2 bg-[#E8F5E9] rounded-t" />
            <div className="w-3 h-3 bg-[#E8F5E9] rounded-t" />
            <div className="w-3 h-4 bg-[#E8F5E9] rounded-t" />
            <div className="w-3 h-5 bg-[#1B5E20] rounded-t" />
          </div>
        </div>
        
        {/* Floating coins */}
        <div className="absolute bottom-2 left-3 bg-amber-500 text-white p-1 rounded-full shadow-md">
          <Coins className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  }
];

const solarSteps = [
  {
    step: 1,
    title: "CONTACT US",
    bullets: [
      "Reach out to us via call, WhatsApp or email.",
      "Our team is ready to assist you."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Main phone body */}
        <div className="w-16 h-28 bg-white rounded-2xl border border-gray-200 shadow-md relative flex flex-col justify-between p-2 transform group-hover:scale-105 transition-all duration-300">
          {/* Speaker & camera slot */}
          <div className="w-8 h-1.5 bg-gray-200 rounded-full mx-auto mb-1.5" />
          
          {/* Screen mock blocks */}
          <div className="flex-1 space-y-2 bg-gray-50 rounded-lg p-1">
            <div className="w-full h-3 bg-green-100 rounded" />
            <div className="w-2/3 h-2 bg-gray-200 rounded" />
            <div className="w-5/6 h-2 bg-gray-200 rounded" />
            <div className="w-1/2 h-2 bg-gray-200 rounded" />
          </div>
          
          {/* Home indicator */}
          <div className="w-6 h-1 bg-gray-300 rounded-full mx-auto mt-1.5" />
        </div>

        {/* Floaters */}
        <div className="absolute top-4 left-6 bg-green-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
          <Phone className="w-4 h-4" />
        </div>
        <div className="absolute top-1/2 -right-1 bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div className="absolute bottom-2 left-6 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
          <Mail className="w-4 h-4" />
        </div>
      </div>
    )
  },
  {
    step: 2,
    title: "FREE SITE VISIT & ASSESSMENT",
    bullets: [
      "We visit your site and study water source, depth, land and energy requirements.",
      "Understand your needs and recommend the best solution."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Site visit representation with water body and sun */}
        <div className="w-28 h-20 bg-sky-50 border border-sky-200 rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-sm transform group-hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-start z-10">
            <Sun className="w-4 h-4 text-amber-500" />
            <div className="flex gap-1 items-center bg-white/80 backdrop-blur-xs px-1.5 py-0.5 rounded-full border border-sky-100 shadow-xxs">
              <Users className="w-3 h-3 text-emerald-700" />
              <span className="text-[7px] font-bold text-gray-600 font-poppins">Assessing</span>
            </div>
          </div>
          {/* Water body */}
          <div className="w-full h-6 bg-gradient-to-t from-sky-400 to-sky-300/60 rounded-b-lg absolute bottom-0 left-0 flex items-center justify-center">
            <Droplets className="w-3.5 h-3.5 text-white/80 animate-bounce" />
          </div>
        </div>
        {/* Water source depth indicator */}
        <div className="absolute bottom-6 left-6 bg-amber-500 text-white font-mono text-[7px] font-black px-1 py-0.5 rounded shadow">
          DEPTH METER
        </div>
        <MapPin className="w-7 h-7 text-rose-600 absolute top-1/3 left-1/2 -translate-x-1/2 drop-shadow-md animate-bounce" />
      </div>
    )
  },
  {
    step: 3,
    title: "DESIGN & SYSTEM RECOMMENDATION",
    bullets: [
      "We design a customized solar pumping system for your requirement.",
      "Provide clear system layout, technical details and quotation."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px] p-2">
        <div className="w-full max-w-[140px] bg-white rounded-xl border border-gray-150 shadow-sm p-1.5 flex flex-col gap-1.5 transform group-hover:scale-105 transition-all duration-300">
          <div className="grid grid-cols-2 gap-1 flex-1 text-center">
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center">
              <Sun className="w-3.5 h-3.5 text-amber-500 mb-0.5" />
              <span className="text-[6.5px] font-black leading-none text-gray-700">Solar Panel</span>
            </div>
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center">
              <Settings2 className="w-3.5 h-3.5 text-[#1B5E20] mb-0.5" />
              <span className="text-[6.5px] font-black leading-none text-gray-700">Controller</span>
            </div>
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center">
              <Droplets className="w-3.5 h-3.5 text-blue-500 mb-0.5" />
              <span className="text-[6.5px] font-black leading-none text-gray-700">Pump Cap</span>
            </div>
            <div className="bg-[#E8F5E9]/40 rounded p-1 flex flex-col items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-slate-600 mb-0.5" />
              <span className="text-[6.5px] font-black leading-none text-gray-700">Structure</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-gray-150 rounded overflow-hidden">
            <div className="h-full w-4/5 bg-emerald-600 animate-[pulse_1.5s_infinite]" />
          </div>
        </div>
      </div>
    )
  },
  {
    step: 4,
    title: "ORDER CONFIRMATION & AGREEMENT",
    bullets: [
      "You confirm the order.",
      "Finalize project scope, pricing, timeline and terms."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        <div className="w-20 h-24 bg-white border border-gray-200 rounded-xl shadow-md p-2 flex flex-col justify-between transform group-hover:scale-105 transition-all duration-300 relative">
          {/* Clipboard top latch */}
          <div className="w-8 h-2 bg-slate-700 rounded-t-sm mx-auto absolute -top-1 left-1/2 -translate-x-1/2" />
          
          <div className="flex-1 space-y-2 mt-2">
            <div className="w-3/4 h-2 bg-[#E8F5E9] rounded" />
            <div className="w-full h-1.5 bg-gray-100 rounded" />
            <div className="w-5/6 h-1.5 bg-gray-100 rounded" />
            <div className="w-2/3 h-1.5 bg-gray-100 rounded" />
          </div>
          
          {/* Handshake representation or badge */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-1 flex items-center justify-center gap-1 mt-1">
            <Handshake className="w-4 h-4 text-[#1B5E20]" />
            <span className="text-[6.5px] font-black text-emerald-800 font-poppins">AGREEMENT</span>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 bg-amber-500 text-white p-1 rounded-full shadow-md animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
        </div>
      </div>
    )
  },
  {
    step: 5,
    title: "EQUIPMENT SUPPLY",
    bullets: [
      "Supply high-quality solar panels, pumps, controllers and accessories.",
      "All materials are quality tested before installation."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        <div className="flex gap-2 items-center justify-center transform group-hover:scale-105 transition-all duration-300">
          {/* Solar Panel mockup */}
          <div className="w-10 h-16 bg-blue-900 border border-blue-700 rounded p-1 flex flex-col justify-between relative shadow-sm">
            <div className="grid grid-cols-2 gap-0.5 flex-1 opacity-60">
              <div className="border border-blue-300" />
              <div className="border border-blue-300" />
              <div className="border border-blue-300" />
              <div className="border border-blue-300" />
            </div>
            <span className="text-[5px] font-black text-white text-center leading-none">PANEL</span>
          </div>
          {/* Pump Motor mockup */}
          <div className="w-8 h-12 bg-slate-800 rounded-md relative flex flex-col justify-between items-center py-1 border border-slate-700 shadow-sm">
            <div className="w-6 h-1.5 bg-emerald-600 rounded-full" />
            <span className="text-[5px] text-white font-mono leading-none">PUMP</span>
            <div className="w-4 h-1 bg-slate-600 rounded" />
          </div>
          {/* Controller and accessories */}
          <div className="w-8 h-8 bg-slate-100 rounded border border-slate-300 flex flex-col items-center justify-center p-1 shadow-sm">
            <Settings2 className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span className="text-[5px] font-black text-gray-500 uppercase leading-none">MPPT</span>
          </div>
        </div>
        <div className="absolute bottom-2 right-4 bg-green-600 text-white rounded-full p-1 shadow-md">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  },
  {
    step: 6,
    title: "INSTALLATION",
    bullets: [
      "Install solar panels, mounting structure, pump, controller, piping and accessories.",
      "Ensure neat, safe and durable installation."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Mounted Solar Panel in agricultural field */}
        <div className="w-28 h-20 bg-white border border-[#DDEFD9] rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-sm transform group-hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-black text-[#1B5E20] uppercase font-poppins">Mounting MMS</span>
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
          </div>
          
          {/* Angled PV Panel stand */}
          <div className="relative w-full h-8 flex items-center justify-center">
            <div className="w-14 h-6 bg-gradient-to-br from-blue-900 to-blue-950 rounded border border-blue-400 rotate-12 flex items-center justify-center relative shadow-md">
              <span className="text-[6px] font-bold text-white tracking-tighter">SOLAR PANEL</span>
              {/* Stand */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-gray-400 origin-top transform -rotate-12" />
            </div>
          </div>
          
          <div className="flex justify-between">
            <Sprout className="w-3 h-3 text-emerald-600 animate-pulse" />
            <Sprout className="w-3 h-3 text-emerald-600 animate-pulse" />
          </div>
        </div>
      </div>
    )
  },
  {
    step: 7,
    title: "TESTING & COMMISSIONING",
    bullets: [
      "Test the complete system for proper performance.",
      "Verify water flow, pressure, safety and system reliability."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        {/* Testing system with flow meter and gauge */}
        <div className="w-24 h-20 bg-white border border-[#DDEFD9] rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-md transform group-hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center border-b border-gray-100 pb-1">
            <span className="text-[7px] font-black text-gray-500 uppercase tracking-tighter">COMMISSIONING</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          </div>
          
          {/* Flow visual */}
          <div className="flex-1 flex items-center justify-center gap-1 bg-sky-50 rounded my-1.5 p-1">
            <Droplets className="w-4 h-4 text-blue-500 animate-bounce" />
            <div className="text-left leading-none">
              <span className="text-[8px] font-black text-blue-800 block">WATER FLOW</span>
              <span className="text-[7px] font-bold text-gray-600 block">100% UNIFORM</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[7px] text-gray-400 font-bold">
            <span>Pressure: Optimal</span>
            <span className="text-emerald-700 font-black">Passed ✓</span>
          </div>
        </div>
      </div>
    )
  },
  {
    step: 8,
    title: "TRAINING & HANDOVER",
    bullets: [
      "Explain system operation, maintenance and safety procedures.",
      "Hand over user manual, warranty documents and project completion."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        <div className="w-24 h-16 bg-[#13541b] border-2 border-amber-900 rounded-lg p-1.5 relative shadow-md flex flex-col justify-center items-center text-center transform group-hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-1">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="text-[8px] font-black text-white uppercase font-poppins">User Manual</span>
          </div>
          <p className="text-[5.5px] text-emerald-100 font-bold leading-tight mt-1 font-poppins">OPERATION & PREVENTIVE MAINT.</p>
        </div>
        
        {/* Handover certificate badge */}
        <div className="absolute bottom-2 right-4 bg-white border border-gray-150 rounded-lg px-1.5 py-1 flex items-center gap-1 shadow-md">
          <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span className="text-[7.5px] font-black text-gray-700 font-poppins">Handover ✓</span>
        </div>
      </div>
    )
  },
  {
    step: 9,
    title: "AFTER SALES SUPPORT",
    bullets: [
      "Regular follow-up and technical support.",
      "Fast response for maintenance and service requests."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        <div className="w-16 h-18 bg-white border border-emerald-150 rounded-2xl flex flex-col items-center justify-center shadow-lg relative transform group-hover:scale-105 transition-all duration-300">
          <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
            <Headset className="w-6 h-6 text-[#1B5E20]" />
          </div>
        </div>
        <div className="absolute top-6 left-6 bg-[#1B5E20] text-white font-extrabold text-[8px] px-2 py-0.5 rounded-full shadow font-poppins">
          REGULAR FOLLOW-UP
        </div>
        <div className="absolute bottom-3 right-6 bg-amber-500 text-white p-1.5 rounded-full shadow-md animate-bounce">
          <Phone className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  },
  {
    step: 10,
    title: "SAVE WATER, SAVE ENERGY, INCREASE PROFIT",
    bullets: [
      "Reliable water supply with zero electricity cost.",
      "Increase productivity, reduce operating expenses and improve farm income."
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#E8F5E9]/50 overflow-hidden rounded-t-[19px]">
        <div className="w-28 h-20 bg-white border border-emerald-100 rounded-xl relative overflow-hidden flex flex-col justify-between p-2 shadow-sm transform group-hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span className="text-[7px] font-black text-amber-600">ZERO COST</span>
            </div>
            <div className="flex items-center gap-0.5 bg-green-100 px-1 rounded">
              <TrendingUp className="w-3 h-3 text-[#1B5E20]" />
              <span className="text-[7.5px] font-black text-[#1B5E20] font-poppins font-bold">Income +</span>
            </div>
          </div>
          
          {/* Irrigated farmland representation */}
          <div className="w-full h-5 bg-gradient-to-t from-emerald-600 to-emerald-500/80 rounded flex items-center justify-around px-1">
            <Sprout className="w-3.5 h-3.5 text-white animate-bounce" />
            <Droplets className="w-3 h-3 text-sky-200" />
            <Sprout className="w-3.5 h-3.5 text-white animate-bounce" />
          </div>
        </div>
        <div className="absolute bottom-2 left-3 bg-amber-500 text-white p-1 rounded-full shadow-md">
          <Coins className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  }
];

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "pmsuryaghar";
  
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["pmsuryaghar", "irrigation", "polyhouse", "solar"].includes(tabParam)) {
      setActiveTab(tabParam);
    } else if (tabParam === "subsidies") {
      setActiveTab("pmsuryaghar");
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // State for Surya Ghar Solar Calculator
  const [bill, setBill] = useState<number>(1500);
  const [calculatedSize, setCalculatedSize] = useState<any>({
    size: "3 kW",
    cost: "₹1,65,000 - ₹1,90,000",
    subsidy: "₹78,000",
    netPayable: "₹87,000 - ₹1,12,000",
    generation: "300 - 400",
    savings: "₹24,000 - ₹36,000",
    area: "300 sq ft"
  });

  const handleBillCalculate = (monthlyBill: number) => {
    setBill(monthlyBill);
    if (monthlyBill < 800) {
      setCalculatedSize({
        size: "1 kW",
        cost: "₹65,000 - ₹75,000",
        subsidy: "₹30,000",
        netPayable: "₹35,000 - ₹45,000",
        generation: "100 - 130",
        savings: "₹8,000 - ₹12,000",
        area: "100 sq ft"
      });
    } else if (monthlyBill >= 800 && monthlyBill < 1500) {
      setCalculatedSize({
        size: "2 kW",
        cost: "₹1,20,000 - ₹1,40,000",
        subsidy: "₹60,000",
        netPayable: "₹60,000 - ₹80,000",
        generation: "200 - 260",
        savings: "₹16,000 - ₹22,000",
        area: "200 sq ft"
      });
    } else if (monthlyBill >= 1500 && monthlyBill < 2500) {
      setCalculatedSize({
        size: "3 kW",
        cost: "₹1,65,000 - ₹1,90,000",
        subsidy: "₹78,000",
        netPayable: "₹87,000 - ₹1,12,000",
        generation: "300 - 400",
        savings: "₹24,000 - ₹36,000",
        area: "300 sq ft"
      });
    } else if (monthlyBill >= 2500 && monthlyBill < 3500) {
      setCalculatedSize({
        size: "4 kW",
        cost: "₹2,20,000 - ₹2,50,000",
        subsidy: "₹78,000",
        netPayable: "₹1,42,000 - ₹1,72,000",
        generation: "400 - 520",
        savings: "₹32,000 - ₹48,000",
        area: "400 sq ft"
      });
    } else {
      setCalculatedSize({
        size: "5 kW",
        cost: "₹2,75,000 - ₹3,10,000",
        subsidy: "₹78,000",
        netPayable: "₹1,97,000 - ₹2,32,000",
        generation: "500 - 650",
        savings: "₹40,000 - ₹60,000",
        area: "500 sq ft"
      });
    }
  };

  // Core Numbers
  const phoneNo = "+91 7384854555";
  const whatsappMsgSolar = `Hello Green View, I am interested in checking my PM Surya Ghar Rooftop Solar eligibility. My monthly bill is around ₹${bill}. Please guide me!`;

  return (
    <div className="bg-[#fafbfa]">
      {/* Dynamic Jumbotron (Fixed top gap and white line issue by removing wrapper padding and increasing top padding) */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1500" 
            alt="Water resource management" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Our Services</span>
          <h1 className="text-4xl sm:text-5.5xl font-black tracking-tight text-white drop-shadow-md">
            Complete Solutions for Your Farm & Home.
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto font-medium">
            From precision irrigation on your fields to ₹78,000 government-subsidised rooftop solar on your roof — we design, install, and stand behind everything.
          </p>
        </div>
      </section>



      {/* Tabs Menu Navigation */}
      <section className="bg-white border-b border-gray-150 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:justify-center overflow-x-auto gap-2 md:gap-4 py-3 scrollbar-none">
            {[
              { id: "pmsuryaghar", label: "PM Surya Ghar (₹78K Subsidy)", icon: Sparkles, isSpecial: true },
              { id: "irrigation", label: "Irrigation Systems", icon: Droplets },
              { id: "polyhouse", label: "Polyhouse Construction", icon: Sun },
              { id: "solar", label: "Solar Pumping", icon: CloudRain }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm shrink-0 transition-all ${
                  activeTab === tab.id 
                    ? tab.isSpecial 
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20" 
                      : "bg-green-600 text-white shadow-lg shadow-green-600/10" 
                    : tab.isSpecial
                      ? "bg-amber-50/70 text-amber-800 hover:bg-amber-100/80 border border-amber-200/50"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-150"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            
            {/* 🔷 1. PM SURYA GHAR TAB (PDF 2 details) */}
            {activeTab === "pmsuryaghar" && (
              <motion.div
                key="tab-pmsuryaghar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Official PM Surya Ghar Registered Vendor — West Bengal
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
                      Get Rooftop Solar. <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                        Get ₹78,000 Back
                      </span> <br />
                      From the Government.
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      The government is giving homeowners up to ₹78,000 in direct subsidy to install solar panels — plus up to 300 units of free electricity every month. We are officially registered under PM Surya Ghar for both WBSEDCL and CESC areas. We handle everything: registration, installation, net metering, and your subsidy — until the money is in your bank account.
                    </p>
                    
                    {/* Big stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">₹78K</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Max Govt. Subsidy</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">300</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Free Units/Month</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">~7%</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Bank Loan p.a.</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-sm text-center">
                        <span className="text-2xl font-black text-amber-600 block">30 Days</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mt-1">Subsidy in Account</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a 
                        href={`tel:${phoneNo.replace(/\s+/g, '')}`}
                        className="bg-amber-500 hover:bg-amber-400 text-white font-extrabold py-4 px-8 rounded-2xl text-sm transition-all text-center"
                      >
                        Book Free Home Visit
                      </a>
                      <a 
                        href="#solar-calculator"
                        className="bg-white hover:bg-gray-50 text-gray-800 font-bold border border-gray-300 py-4 px-8 rounded-2xl text-sm transition-all text-center"
                      >
                        Calculate My Subsidy →
                      </a>
                    </div>
                  </div>

                  {/* Illustration/Image card (from PDF 2 Page 9) */}
                  <div className="bg-gradient-to-br from-emerald-900 to-green-950 p-8 sm:p-12 rounded-3.5xl text-white shadow-xl space-y-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      CESC Registered
                    </div>
                    <div className="absolute bottom-4 left-4 bg-emerald-800/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      WBSEDCL Empanelled
                    </div>
                    <div className="space-y-2">
                      <span className="text-green-300 text-xs font-bold uppercase tracking-widest block">Clean Power</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Rooftop Solar Built for West Bengal Homes</h3>
                      <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                        We install heavy-duty monocrystalline solar panels with certified smart micro/string inverters that withstand local summer storms and deliver high performance.
                      </p>
                    </div>

                    {/* Cute illustrative house with solar panels */}
                    <div className="bg-white/10 rounded-2xl p-6 border border-white/20 flex flex-col items-center justify-center text-center space-y-3">
                      <Sun className="w-12 h-12 text-yellow-400 animate-pulse" />
                      <span className="text-sm font-bold">100% Empanelled & Approved Setup</span>
                      <p className="text-xs text-green-200">Our team manages your whole pipeline on the official portal start to finish.</p>
                    </div>
                  </div>
                </div>

                {/* Core Stats Banner */}
                <div className="bg-[#0f172a] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">₹78,000</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">MAX GOVT. SUBSIDY DIRECT TO YOUR BANK</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">300 Units</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">FREE ELECTRICITY EVERY MONTH</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">₹17,000+</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">ANNUAL EARNING FROM SURPLUS POWER</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 block">25 Years</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SOLAR PANEL LIFESPAN</span>
                  </div>
                </div>

                {/* "1 kW to 5 kW — Every Detail Explained" Section */}
                <div className="space-y-8 pt-8">
                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">System Sizes & Pricing</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight">1 kW to 5 kW — Every Detail Explained.</h3>
                    <p className="text-gray-650 text-sm sm:text-base">
                      Tentative cost, government subsidy, what you actually pay, electricity generation, rooftop space, and payback — for every system size. Pick yours.
                    </p>
                  </div>

                  {/* Subsidy cap warning banner */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start max-w-4xl mx-auto shadow-sm">
                    <img 
                      src=" https://res.cloudinary.com/dr6qj9aff/image/upload/v1784192108/00_ioui0g.jpg " 
                      alt="Government Subsidy Cap Info" 
                      className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 object-contain rounded-full border-4 border-white shadow-md bg-white" 
                    />
                    <div className="space-y-2 text-center sm:text-left">
                      <h4 className="font-bold text-amber-900 text-base sm:text-lg">Government Subsidy is Capped at 3 kW — This Matters for Your Decision</h4>
                      <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                        The maximum subsidy under PM Surya Ghar is <strong>₹78,000</strong> — whether you install 3 kW, 4 kW, or 5 kW. For 4 kW and 5 kW, you receive the same ₹78,000 subsidy as a 3 kW system, but your cost is significantly higher. Choose a system size based on your actual electricity consumption, not just the subsidy amount.
                      </p>
                    </div>
                  </div>

                  {/* 5 columns table grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                      {
                        kw: "1 kW",
                        subsidy: "₹30,000",
                        subText: "60% of benchmark cost. Credited directly to bank.",
                        total: "₹65,000 - ₹75,000",
                        pay: "₹35,000 - ₹45,000",
                        genDaily: "3.5 - 4.5 units/day",
                        genDailySub: "Avg 4 units/day in West Bengal",
                        genMonthly: "100 - 130 units/month",
                        genAnnual: "1,200 - 1,500 units/year",
                        savings: "₹8,000 - ₹12,000/year",
                        space: "~100 sq ft (10 sq m)",
                        suited: "Very small home, 1-2 rooms, basic appliances. Monthly electricity bill ₹400-₹800. Limited rooftop space.",
                        payback: "4-5 years",
                        isPopular: false
                      },
                      {
                        kw: "2 kW",
                        subsidy: "₹60,000",
                        subText: "60% of benchmark cost for 2 kW. Direct bank transfer.",
                        total: "₹1,20,000 - ₹1,40,000",
                        pay: "₹60,000 - ₹80,000",
                        genDaily: "7 - 9 units/day",
                        genDailySub: "Avg 8 units/day in West Bengal",
                        genMonthly: "200 - 260 units/month",
                        genAnnual: "2,400 - 3,000 units/year",
                        savings: "₹16,000 - ₹22,000/year",
                        space: "~200 sq ft (20 sq m)",
                        suited: "Small to medium home, 2-3 rooms, 1 fan + 1 small AC. Monthly bill ₹800-₹1,500.",
                        payback: "3-4 years",
                        isPopular: false
                      },
                      {
                        kw: "3 kW",
                        subsidy: "₹78,000",
                        subText: "₹78,000 MAXIMUM: ₹60,000 for first 2 kW + ₹18,000 for 3rd kW.",
                        total: "₹1,65,000 - ₹1,90,000",
                        pay: "₹87,000 - ₹1,12,000",
                        genDaily: "10.5 - 13.5 units/day",
                        genDailySub: "Avg 12 units/day in West Bengal",
                        genMonthly: "300 - 400 units/month",
                        genAnnual: "3,600 - 4,800 units/year",
                        savings: "₹24,000 - ₹36,000/year",
                        space: "~300 sq ft (30 sq m)",
                        suited: "Standard WB family home, 3-4 rooms, 1-2 ACs, refrigerator, washing machine. Monthly bill ₹1,500-₹2,500. This is the sweet spot — maximum subsidy, covers most homes fully.",
                        payback: "3-4 years",
                        isPopular: true
                      },
                      {
                        kw: "4 kW",
                        subsidy: "₹78,000",
                        subText: "No additional subsidy beyond 3 kW. Capped at ₹78,000.",
                        total: "₹2,20,000 - ₹2,50,000",
                        pay: "₹1,42,000 - ₹1,72,000",
                        genDaily: "14 - 18 units/day",
                        genDailySub: "Avg 16 units/day in West Bengal",
                        genMonthly: "400 - 520 units/month",
                        genAnnual: "4,800 - 6,200 units/year",
                        savings: "₹32,000 - ₹48,000/year",
                        space: "~400 sq ft (40 sq m)",
                        suited: "Larger home, 4-5 rooms, 2 ACs, heavy usage. Monthly bill ₹2,500-₹3,500. Choose only if your consumption genuinely exceeds 3 kW output.",
                        payback: "4-5 years",
                        isPopular: false
                      },
                      {
                        kw: "5 kW",
                        subsidy: "₹78,000",
                        subText: "No additional subsidy beyond 3 kW. Capped at ₹78,000.",
                        total: "₹2,75,000 - ₹3,10,000",
                        pay: "₹1,97,000 - ₹2,32,000",
                        genDaily: "17.5 - 22.5 units/day",
                        genDailySub: "Avg 20 units/day in West Bengal",
                        genMonthly: "500 - 650 units/month",
                        genAnnual: "6,000 - 7,800 units/year",
                        savings: "₹40,000 - ₹60,000/year",
                        space: "~500 sq ft (50 sq m)",
                        suited: "Large bungalow, multiple floors, small shop or home office. Monthly bill ₹3,500+. Significant surplus electricity sold back to grid annually.",
                        payback: "4-5 years",
                        isPopular: false
                      }
                    ].map((col) => (
                      <div 
                        key={col.kw}
                        className={`bg-white rounded-2xl border flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all ${
                          col.isPopular 
                            ? "border-amber-500 ring-2 ring-amber-500/15" 
                            : "border-gray-150"
                        }`}
                      >
                        {col.isPopular && (
                          <div className="bg-amber-400 text-amber-950 text-center text-[10px] font-black uppercase tracking-widest py-1.5 block leading-none">
                            Most Popular & Best Value
                          </div>
                        )}
                        
                        {/* Solid colored header block matching user requested screenshot */}
                        <div className={`text-white p-6 text-center flex flex-col items-center justify-center border-b ${
                          col.isPopular 
                            ? "bg-orange-600 border-orange-700" 
                            : col.kw === "4 kW" || col.kw === "5 kW"
                              ? "bg-slate-700 border-slate-800"
                              : "bg-[#14532d] border-green-800"
                        }`}>
                          <span className="text-4xl font-black tracking-tight block leading-none">{col.kw}</span>
                          <span className="text-[10px] text-white/70 uppercase font-bold tracking-widest mt-2 block leading-none">SYSTEM SIZE</span>
                          <div className={`px-4.5 py-1.5 rounded-full text-xs font-black text-white inline-flex items-center justify-center mt-3.5 border shadow-sm leading-none ${
                            col.isPopular 
                              ? "bg-white/20 border-white/20" 
                              : col.kw === "4 kW" || col.kw === "5 kW"
                                ? "bg-white/10 border-white/10"
                                : "bg-white/15 border-white/10"
                          }`}>
                            {col.subsidy} {col.isPopular ? "Max Subsidy" : col.kw === "4 kW" || col.kw === "5 kW" ? "Subsidy (Same as 3kW)" : "Subsidy"}
                          </div>
                        </div>

                        <div className="p-5 space-y-4 flex-grow">
                          <div className="space-y-3.5 text-xs">
                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Subsidy Details:</span>
                              <p className="text-[10px] text-gray-600 leading-relaxed mt-0.5">{col.subText}</p>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Tentative Total Cost:</span>
                              <span className="font-extrabold text-gray-700 block mt-0.5">{col.total}</span>
                            </div>

                            <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100">
                              <span className="text-amber-800 block font-extrabold uppercase text-[9px]">You Pay (After Subsidy):</span>
                              <span className="font-black text-amber-700 block text-sm mt-0.5">{col.pay}</span>
                            </div>

                            <div className="border-t border-gray-100 pt-3 space-y-1.5">
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Daily Generation:</span>
                              <span className="font-bold text-gray-800 block">{col.genDaily}</span>
                              <span className="text-[9px] text-gray-400 block">{col.genDailySub}</span>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Monthly Generation:</span>
                              <span className="font-bold text-gray-800 block">{col.genMonthly}</span>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Annual Savings (Est):</span>
                              <span className="font-bold text-green-600 block">{col.savings}</span>
                            </div>

                            <div>
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Rooftop Area Needed:</span>
                              <span className="font-bold text-gray-800 block">{col.space}</span>
                            </div>

                            <div className="border-t border-gray-100 pt-3">
                              <span className="text-gray-400 block font-bold uppercase text-[9px]">Best Suited For:</span>
                              <p className="text-[10px] text-gray-600 leading-relaxed mt-1 text-justify">{col.suited}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
                          <span className="text-[10px] text-gray-400 font-bold block">Payback Period:</span>
                          <span className="text-xs font-black text-gray-700 block mt-0.5">~{col.payback}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-100/40 border border-amber-200/60 rounded-2xl p-6 flex gap-4 items-start max-w-5xl mx-auto mt-6 shadow-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold">Important — Subsidy Cap at 3 kW:</strong> The PM Surya Ghar government subsidy is ₹30,000/kW up to 2 kW, and ₹18,000 for the 3rd kW — totalling ₹78,000 for a 3 kW system. Systems beyond 3 kW do NOT receive any additional subsidy. The ₹78,000 remains the maximum regardless of system size. All costs shown above are <strong>tentative estimates</strong> for West Bengal market rates as of 2025-26. Actual costs may vary based on rooftop type, site conditions, and installer. We provide a firm written quote during your free home visit before any commitment.
                    </p>
                  </div>

                  {/* Quick Reference Table (NEW) */}
                  <div className="mt-16 space-y-8">
                    <div className="space-y-1">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-700">Quick Reference</span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">All 5 System Sizes at a Glance</h3>
                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl bg-white">
                      <div className="overflow-x-auto scrollbar-hide">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                          <thead>
                            <tr className="bg-slate-900 text-white">
                              <th className="py-5 px-6 text-sm font-bold first:rounded-tl-[2rem]">System</th>
                              <th className="py-5 px-6 text-sm font-bold">Total Cost (Est.)</th>
                              <th className="py-5 px-6 text-sm font-bold">Govt. Subsidy</th>
                              <th className="py-5 px-6 text-sm font-bold">You Pay</th>
                              <th className="py-5 px-6 text-sm font-bold">Daily Units</th>
                              <th className="py-5 px-6 text-sm font-bold">Monthly Units</th>
                              <th className="py-5 px-6 text-sm font-bold">Annual Savings</th>
                              <th className="py-5 px-6 text-sm font-bold last:rounded-tr-[2rem]">Rooftop Needed</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {[
                              { kw: "1 kW", cost: "₹65,000 – ₹75,000", subsidy: "₹30,000", badge: "60%", pay: "₹35,000 – ₹45,000", daily: "3.5–4.5 units", monthly: "~100–130 units", savings: "~₹8K–₹12K", space: "~100 sq ft" },
                              { kw: "2 kW", cost: "₹1,20,000 – ₹1,40,000", subsidy: "₹60,000", badge: "60%", pay: "₹60,000 – ₹80,000", daily: "7–9 units", monthly: "~200–260 units", savings: "~₹16K–₹22K", space: "~200 sq ft" },
                              { kw: "3 kW", cost: "₹1,65,000 – ₹1,90,000", subsidy: "₹78,000", badge: "MAX", pay: "₹87,000 – ₹1,12,000", daily: "10.5–13.5 units", monthly: "~300–400 units", savings: "~₹24K–₹36K", space: "~300 sq ft", best: true },
                              { kw: "4 kW", cost: "₹2,20,000 – ₹2,50,000", subsidy: "₹78,000", badge: "No extra", pay: "₹1,42,000 – ₹1,72,000", daily: "14–18 units", monthly: "~400–520 units", savings: "~₹32K–₹48K", space: "~400 sq ft" },
                              { kw: "5 kW", cost: "₹2,75,000 – ₹3,10,000", subsidy: "₹78,000", badge: "No extra", pay: "₹1,97,000 – ₹2,32,000", daily: "17.5–22.5 units", monthly: "~500–650 units", savings: "~₹40K–₹60K", space: "~500 sq ft" }
                            ].map((row, i) => (
                              <tr key={i} className={`group transition-colors ${row.best ? 'bg-amber-100/40' : 'hover:bg-slate-50/50'}`}>
                                <td className="py-5 px-6">
                                  <div className="flex items-center gap-3">
                                    <span className="font-bold text-slate-900 whitespace-nowrap">{row.kw}</span>
                                    {row.best && (
                                      <span className="inline-flex items-center gap-1 bg-orange-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter whitespace-nowrap">
                                        ⭐ Best Value
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="py-5 px-6 font-medium text-slate-600 whitespace-nowrap">{row.cost}</td>
                                <td className="py-5 px-6">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-900 whitespace-nowrap">{row.subsidy}</span>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tight whitespace-nowrap ${
                                      row.badge === 'MAX' ? 'bg-emerald-100 text-emerald-700' : 
                                      row.badge === '60%' ? 'bg-green-100 text-green-700' : 
                                      'bg-slate-100 text-slate-500'
                                    }`}>
                                      {row.badge}
                                    </span>
                                  </div>
                                </td>
                                <td className={`py-5 px-6 font-bold whitespace-nowrap ${row.best ? 'text-orange-700' : 'text-slate-900'}`}>{row.pay}</td>
                                <td className={`py-5 px-6 font-bold whitespace-nowrap ${row.best ? 'text-orange-700' : 'text-slate-600'}`}>{row.daily}</td>
                                <td className={`py-5 px-6 font-bold whitespace-nowrap ${row.best ? 'text-orange-700' : 'text-slate-600'}`}>{row.monthly}</td>
                                <td className={`py-5 px-6 font-bold whitespace-nowrap ${row.best ? 'text-orange-700' : 'text-slate-600'}`}>{row.savings}</td>
                                <td className="py-5 px-6 text-slate-600 font-medium whitespace-nowrap">{row.space}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Horizontal Scroll Hint for Mobile */}
                      <div className="lg:hidden bg-slate-50 py-3 px-6 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <ArrowRight className="w-3 h-3 animate-pulse" />
                          <span>Swipe to view all details</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant Subsidy Estimator Tool Integrated directly! */}
                <div id="solar-calculator" className="bg-white rounded-3.5xl p-8 sm:p-12 border border-gray-150 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-mt-24">
                  <div className="space-y-6">
                    <span className="text-green-600 font-bold bg-green-50 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest inline-block">Quick Reference Tool</span>
                    <h3 className="text-2xl sm:text-4.5xl font-black text-gray-950 tracking-tight leading-none">Which System Size is Right for You?</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Enter your current monthly electricity bill or drag the slider, and our calculator will instantly recommend the ideal solar system size, show your government subsidy, and outline your net savings.
                    </p>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">Monthly Electricity Bill</label>
                        <span className="text-xl font-black text-amber-600 bg-amber-50 px-3.5 py-1 rounded-xl">₹{bill}</span>
                      </div>
                      <input 
                        type="range" 
                        min="300" 
                        max="5000" 
                        step="100"
                        value={bill}
                        onChange={(e) => handleBillCalculate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                        <span>Below ₹800</span>
                        <span>₹800 - ₹1,500</span>
                        <span>₹1,500 - ₹2,500</span>
                        <span>Above ₹2,500</span>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl space-y-2 text-xs">
                      <h4 className="font-bold text-amber-900 uppercase tracking-wider text-[11px]">Recommended Size: {calculatedSize.size}</h4>
                      <p className="text-amber-800 leading-relaxed text-justify">
                        Based on your bill, a <strong>{calculatedSize.size}</strong> system is recommended. It will generate around <strong>{calculatedSize.generation} units/month</strong>, which completely offsets your bill, giving you free power.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-150 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-950 pb-4 border-b border-gray-200">Your Solar Estimates:</h4>
                      <div className="grid grid-cols-2 gap-6 pt-4 text-xs">
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Government Subsidy:</span>
                          <span className="text-base font-black text-green-600 block leading-none mt-0.5">{calculatedSize.subsidy}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Tentative Cost:</span>
                          <span className="font-bold text-gray-800 block mt-0.5">{calculatedSize.cost}</span>
                        </div>
                        <div className="bg-amber-100/50 p-2.5 rounded-lg col-span-2">
                          <span className="text-amber-900 block font-extrabold uppercase text-[9px]">You Pay (After Subsidy):</span>
                          <span className="font-black text-amber-700 block text-base mt-0.5">{calculatedSize.netPayable}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Rooftop Space Needed:</span>
                          <span className="font-semibold text-gray-800 block mt-0.5">{calculatedSize.area}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold uppercase text-[9px]">Estimated Savings:</span>
                          <span className="font-bold text-green-600 block mt-0.5">{calculatedSize.savings}</span>
                        </div>
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent(whatsappMsgSolar)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-xl text-sm w-full text-center block transition-colors shadow-sm"
                    >
                      Book Free Assessment via WhatsApp
                    </a>
                  </div>
                </div>

                {/* 8. Why Green View Section (PDF 2 Page 6) */}
                <div className="pt-16 pb-8 space-y-12">
                  <div className="space-y-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Why Green View</span>
                    <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                      Most Installers Stop at Installation.<br />
                      We Stop at Subsidy.
                    </h3>
                    <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
                      The scheme is real. The ₹78,000 is real. But only registered vendors with the right process get you there. Here's what makes us different.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6 flex flex-col">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl shadow-inner shrink-0">
                        ✅
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-black text-slate-900 leading-tight">
                          Officially Registered — Not Just Anyone
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                          We are an officially empanelled vendor on the PM Surya Ghar portal for both WBSEDCL and CESC areas. Only registered vendors can process your government subsidy. Installing through an unregistered installer means zero subsidy. Verify us directly on pmsuryaghar.gov.in before you commit.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6 flex flex-col">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl shadow-inner shrink-0">
                        🔄
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-black text-slate-900 leading-tight">
                          Complete D2C — We Never Pass You On
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                          From your first phone call to the subsidy in your bank account — one team, one contact number, complete responsibility. We don't hand you a portal link and wish you luck. We sit with you, file for you, install for you, and follow up for you until the job is fully done.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6 flex flex-col">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl shadow-inner shrink-0">
                        🗺️
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-black text-slate-900 leading-tight">
                          Unlimited Capacity — All of West Bengal
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                          We cover both WBSEDCL and CESC areas with installation teams placed across the entire state — from Kolkata to Cooch Behar, Howrah to Haldia. We never say "we'll come next month." We work as demand grows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Eligibility Section (PDF 2 Page 7) */}
                <div className="pt-16 pb-8 space-y-12">
                  <div className="space-y-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Eligibility</span>
                    <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                      Are You Eligible? Check in 30 Seconds.
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* You Qualify If */}
                    <div className="bg-emerald-50/50 rounded-[2rem] p-8 border border-emerald-100/60 shadow-sm space-y-8 h-full">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl shadow-inner">
                          ✅
                        </div>
                        <h4 className="text-xl font-black text-slate-900">You Qualify If:</h4>
                      </div>
                      <ul className="space-y-5">
                        {[
                          "You are an Indian citizen owning a home in West Bengal",
                          "You have an active domestic electricity connection (WBSEDCL or CESC) in your name",
                          "Your rooftop has enough space for solar panels",
                          "You have not previously received a rooftop solar subsidy",
                          "You own the property where panels will be installed"
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 text-slate-700 font-medium leading-relaxed">
                            <span className="text-emerald-600 font-bold shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* You Won't Qualify If */}
                    <div className="space-y-8 h-full flex flex-col">
                      <div className="bg-rose-50/50 rounded-[2rem] p-8 border border-rose-100/60 shadow-sm space-y-8 flex-grow">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-xl shadow-inner">
                            ❌
                          </div>
                          <h4 className="text-xl font-black text-slate-900">You Won't Qualify If:</h4>
                        </div>
                        <ul className="space-y-5">
                          {[
                            "Your electricity connection is commercial, not residential",
                            "The meter is in someone else's name (tenant with no ownership)",
                            "You've already received a rooftop solar subsidy before",
                            "The property is not in your name or joint ownership"
                          ].map((item, i) => (
                            <li key={i} className="flex gap-4 text-slate-700 font-medium leading-relaxed">
                              <span className="text-rose-400 font-bold shrink-0">X</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Not Sure Hint */}
                      <div className="bg-slate-50 border-l-4 border-emerald-600 rounded-2xl p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                          <strong className="text-slate-900">Not sure?</strong> We check your eligibility during your free home visit — no paperwork needed from you right now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10. Documents Required Section */}
                <div className="bg-slate-300/40 rounded-[2.5rem] p-8 sm:p-16 space-y-12">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">Documents Required</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight leading-none">
                      7 Documents. That's All You Need to Arrange.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl">
                      We handle every other form, application, and follow-up. Just keep these ready.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { icon: "🪪", title: "Aadhaar Card", desc: "Identity & address verification. Name must match electricity bill & PAN.", color: "emerald" },
                      { icon: "📄", title: "Electricity Bill", desc: "Latest WBSEDCL or CESC bill showing consumer number and name.", color: "emerald" },
                      { icon: "🏠", title: "Property Ownership Proof", desc: "Sale deed, mutation cert, property tax receipt, or Khata/Porcha (WB). You must own the property.", color: "orange" },
                      { icon: "🏦", title: "Bank Account Details", desc: "Passbook copy or cancelled cheque. Subsidy is credited directly here via DBT.", color: "emerald" },
                      { icon: "💳", title: "PAN Card", desc: "Required for DBT subsidy verification. PAN name must match Aadhaar exactly.", color: "emerald" },
                      { icon: "📸", title: "Passport Photo", desc: "Recent passport-size photograph of the applicant.", color: "emerald" },
                      { icon: "🏠", title: "Rooftop Photos", desc: "We take these during the free home visit. You don't need to arrange this yourself.", color: "emerald" }
                    ].map((doc, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-slate-100/50 rounded-2xl p-8 border-t-4 shadow-sm space-y-4 text-center flex flex-col items-center justify-center min-h-[220px] transition-transform duration-300 hover:-translate-y-1 ${
                          doc.color === 'orange' ? 'border-orange-600' : 'border-emerald-600'
                        }`}
                      >
                        <div className="text-4xl mb-2">{doc.icon}</div>
                        <div className="space-y-2">
                          <h4 className="font-black text-slate-900 text-lg leading-tight">{doc.title}</h4>
                          <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                            {doc.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 11. Bank Financing (PDF 2 Page 8) */}
                <div className="space-y-8 pt-8">
                  {/* Property ownership warning moved here matching PDF Page 8 position */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start max-w-4xl mx-auto shadow-sm">
                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-amber-900 text-sm text-left">Property Ownership is Mandatory</h4>
                      <p className="text-xs text-amber-800 leading-relaxed text-justify">
                        Tenants without property ownership cannot receive the subsidy. Accepted property proof in West Bengal: Sale deed, Conveyance deed, Mutation certificate, Property tax receipt, or Porcha/Khata. If you're unsure which document to use, we'll guide you during the home visit.
                      </p>
                    </div>
                  </div>

                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full inline-block">Bank Financing</span>
                    <h3 className="text-3xl sm:text-4.5xl font-black text-gray-900 tracking-tight leading-none">Can't Pay Upfront? The Govt. Has Arranged That Too.</h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      12 Public Sector Banks offer collateral-free solar loans under PM Surya Ghar. We guide you through the JanSamarth Portal application — free of charge.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Loan Table */}
                    <div className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700 font-extrabold uppercase border-b border-gray-200">
                            <th className="p-4 sm:p-5">Loan Amount</th>
                            <th className="p-4 sm:p-5">Tenure</th>
                            <th className="p-4 sm:p-5">Approx. EMI</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-600 font-semibold">
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹40,000</td>
                            <td className="p-4 sm:p-5">5 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹790/month</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹60,000</td>
                            <td className="p-4 sm:p-5">7 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹920/month</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹87,000</td>
                            <td className="p-4 sm:p-5">7 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹1,350/month</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="p-4 sm:p-5">₹1,20,000</td>
                            <td className="p-4 sm:p-5">10 Years</td>
                            <td className="p-4 sm:p-5 font-bold text-gray-900">~₹1,400/month</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="bg-amber-50 p-5 border-t border-gray-200 text-xs text-amber-800 leading-relaxed text-justify">
                        <strong>Smart Tip:</strong> Once the ₹78,000 subsidy reaches your account (30–45 days post-installation), prepay it against your loan principal — zero penalty. This cuts your remaining tenure significantly.
                      </div>
                    </div>

                    {/* Loan highlights and banks */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border border-gray-150 space-y-4 shadow-sm">
                        <h4 className="font-extrabold text-gray-950 text-base uppercase tracking-wider pb-3 border-b border-gray-100">Loan Highlights</h4>
                        <ul className="space-y-3.5 text-xs text-gray-600 text-left">
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Interest rate ~7% p.a. (Repo Rate + 0.5%)</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Collateral-free up to ₹2 lakh</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Up to ₹6 lakh with solar system as security</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Tenure: Up to 10-15 years</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Fully digital application via jansamarth.in</li>
                          <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Zero prepayment penalty</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-gray-150 space-y-4 shadow-sm">
                        <h4 className="font-extrabold text-gray-950 text-base uppercase tracking-wider pb-3 border-b border-gray-100">Banks Available under the scheme</h4>
                        <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-bold text-gray-500 uppercase">
                          {["SBI", "Canara Bank", "Union Bank", "Indian Bank", "Bank of Baroda", "PNB", "Bank of India", "UCO Bank", "Central Bank", "IOB", "+ 2 more"].map((b) => (
                            <span key={b} className="bg-gray-100 border border-gray-200 py-1.5 px-3 rounded-lg">{b}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12. Final bottom banner */}
                <div className="bg-gradient-to-r from-emerald-900 to-green-950 p-8 sm:p-12 rounded-3.5xl text-white text-center shadow-xl relative overflow-hidden mt-16">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1500')] bg-cover pointer-events-none" />
                  <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <span className="text-amber-400 font-black text-2xl uppercase tracking-[0.2em] block leading-none">Don't Wait — Applications Are Open</span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">₹78,000 Is on the Table. Don't Let Your Neighbours Claim It First.</h3>
                    <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                      Free home visit. No commitment. We check your roof, calculate your subsidy, and tell you exactly what you'll pay. Takes 45 minutes. Could save you ₹78,000.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                      <a 
                         href={`tel:${phoneNo.replace(/\s+/g, '')}`}
                         className="bg-amber-500 hover:bg-amber-400 text-white font-extrabold py-4 px-8 rounded-2xl text-xs sm:text-sm shrink-0"
                      >
                        Book Free Home Visit
                      </a>
                      <a 
                        href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent("Hello Green View, I am interested in checking my PM Surya Ghar Rooftop Solar eligibility.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-4 px-8 rounded-2xl text-xs sm:text-sm shrink-0 flex items-center justify-center gap-2"
                      >
                        WhatsApp Us Now
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/*  2. IRRIGATION TAB */}
            {activeTab === "irrigation" && (
              <motion.div
                key="tab-irrigation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4.5xl font-extrabold text-gray-950 tracking-tight">
                      Irrigation Solutions That Actually Fit Your Farm
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Water is the most valuable thing on your farm, and losing it to inefficient systems means losing money season after season. We design and install irrigation systems that deliver water exactly where it's needed — no wastage, no guesswork. Whether you're a small farmer with a half-acre vegetable plot or a larger operation looking to cover many acres efficiently, we've done it before.
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150">
                    <img 
                      src="https://res.cloudinary.com/dr6qj9aff/image/upload/v1784125908/03_ofaegb.png" 
                      alt="Advanced Irrigation Solutions" 
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Sub-categories (What We Do Section) */}
                <div className="space-y-8 pt-8">
                  <h3 className="text-2.5xl font-bold text-gray-900 border-b border-gray-200 pb-3">What We Do</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Drip Irrigation */}
                    <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden space-y-4">
                      <div className="h-56 overflow-hidden border-b border-gray-100 group">
                        <img 
                          src="/drip_irrigation_close.png" 
                          alt="Drip irrigation emitter" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 pt-0 space-y-4">
                        <h4 className="text-xl font-bold text-gray-950">Drip Irrigation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Drip irrigation delivers water directly to the root zone of each plant through a network of pipes, tubes, and emitters. It's proven to save 30–50% more water compared to flood irrigation and significantly improves crop yield and quality.
                      </p>
                         <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">What we do:</strong> We design the layout based on your crop type, row spacing, soil type, and water source. We use equipment from Premier Irrigation Adritec, Jain Irrigation, and Netafim — all of which are field-tested and long-lasting. Our team does the full installation, from the main line to the last emitter.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">Best for:</strong> Vegetables, fruits, cash crops, orchards, plantation crops
                        </p>
                    </div>
                  </div>

                    {/* Sprinkler Irrigation */}
                    <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden space-y-4">
                      <div className="h-56 overflow-hidden border-b border-gray-100 group">
                        <img 
                          src="/sprinkler_irrigation_v2.png" 
                          alt="Sprinkler irrigation system in a wheat field" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 pt-0 space-y-4">
                        <h4 className="text-xl font-bold text-gray-950">Sprinkler Irrigation</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Sprinkler systems mimic rainfall — water is sprayed over the crop through a network of pipes and rotating or fixed sprinkler heads. It suits crops that benefit from uniform water coverage across the surface.
                        </p>
                         <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">What we do:</strong> We assess your field size, water pressure availability, and crop type, and design a sprinkler system that covers your land evenly without overlapping zones or dry patches. Installation is clean, functional, and built to last.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">Best for:</strong> Wheat, groundnuts, vegetables, lawns, large open fields.
                        </p>
                      </div>
                    </div>

                    {/* Mini & Micro */}
                    <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden space-y-4">
                      <div className="h-56 overflow-hidden border-b border-gray-100 group">
                        <img 
                          src="https://res.cloudinary.com/dr6qj9aff/image/upload/v1784125907/mini_and_micro_isivff.jpg" 
                          alt="Mini & Micro irrigation setup" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 pt-0 space-y-4">
                        <h4 className="text-xl font-bold text-gray-950">Mini & Micro Irrigation</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mini and micro systems sit between drip and sprinkler — they're ideal for closely spaced crops, nurseries, and high-value cultivation where precision and coverage both matter.
                        </p>
                         <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">What we do:</strong> We supply and install mini sprinklers and micro jets that can serve specific zones of your farm with the right application rate. These are popular in fruit orchards and protected cultivation setups.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">Best for:</strong>  Orchards, nurseries, coconut, banana, arecanut farms.
                        </p>
                      </div>
                    </div>

                    {/* Pop-up Irrigation */}
                    <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden space-y-4">
                      <div className="h-56 overflow-hidden border-b border-gray-100 group">
                        <img 
                          src="https://res.cloudinary.com/dr6qj9aff/image/upload/v1784125906/pop_up_dpfenh.jpg" 
                          alt="Pop-up sprinkler system on a lawn" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 pt-0 space-y-4">
                        <h4 className="text-xl font-bold text-gray-950">Pop-Up Irrigation</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Pop-up sprinkler systems are designed mainly for private projects — gardens, lawns, landscapes, and institutional premises. The heads retract into the ground when not in use, keeping the area clean and the system protected.
                        </p>
                         <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">What we do:</strong> We design and install pop-up systems for private clients including farmhouses, resorts, institutional campuses, and gardens. Full design-to-installation service.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">Best for:</strong> Private gardens, landscapes, golf courses, institutional premises.
                        </p>
                      </div>
                    </div>

                    {/* Foggers / Misting */}
                    <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden space-y-4">
                      <div className="h-56 overflow-hidden border-b border-gray-100 group">
                        <img 
                          src="/foggers_misting.png" 
                          alt="Foggers and misting system in a greenhouse" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 pt-0 space-y-4">
                        <h4 className="text-xl font-bold text-gray-950">Foggers / Misting Systems</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Foggers release ultra-fine water droplets that cool the air temperature and raise humidity. They're widely used inside polyhouses, nurseries, and in horticulture setups where temperature control matters.
                        </p>
                         <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">What we do:</strong> We install fogging systems as standalone setups or as part of larger polyhouse or irrigation projects. We source quality fogger nozzles and fittings and install them with proper pressure lines.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-green-800 bg-green-100/60 px-1.5 py-0.5 rounded-md inline-block mr-1">Best for:</strong>  Polyhouses, nurseries, cooling in poultry or livestock sheds.
                        </p>
                      </div>
                    </div>


                  </div>
                </div>

                {/* 🔷 Our 10 steps irrigation process */}
                <div id="how-we-work-irrigation" className="bg-white rounded-[20px] py-16 px-4 sm:px-8 border border-[#DDEFD9] space-y-12">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#1B5E20] font-extrabold uppercase tracking-[0.2em] text-xs px-3 py-1 bg-[#E8F5E9] rounded-full inline-block font-poppins">
                      Our Working Process
                    </span>
                    <h2 className="text-3xl sm:text-[40px] font-extrabold font-poppins text-[#1F2937] tracking-tight leading-tight">
                      How We Work
                    </h2>
                    <p className="text-[#1F2937]/75 font-medium text-sm sm:text-base leading-relaxed font-sans">
                      From your first inquiry to long-term support, we provide complete irrigation solutions that maximize crop productivity and water efficiency.
                    </p>
                  </div>

                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                  >
                    {irrigationSteps.map((step) => (
                      <motion.div
                        key={step.step}
                        variants={cardVariants}
                        className="group bg-white rounded-[20px] border border-[#DDEFD9] hover:border-[#1B5E20] shadow-sm hover:shadow-xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col h-full overflow-hidden relative"
                      >
                        {/* Large green circular step number */}
                        <div className="absolute top-3 left-3 z-20 w-10 h-10 rounded-full bg-[#1B5E20] text-[#E8F5E9] font-poppins font-extrabold flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>

                        {/* Illustration at top with Light Green background */}
                        <div className="h-44 bg-[#E8F5E9]/50 relative overflow-hidden flex items-center justify-center border-b border-[#DDEFD9]">
                          {step.illustration}
                        </div>

                        {/* Card Content */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold font-poppins text-[#1F2937] uppercase tracking-wider leading-snug">
                              {step.title}
                            </h4>
                            <ul className="space-y-2">
                              {step.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-xs font-medium text-gray-600 leading-relaxed font-sans">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E20] shrink-0 mt-1.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* 🔷 "Authorized Supply Point" text moved to a separate clean section below the grid for better layout as requested (PDF 3 Page 12) */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-12 rounded-3.5xl border border-green-150 shadow-sm space-y-4 max-w-4xl mx-auto">
                  <span className="text-green-600 font-extrabold uppercase text-[10px] tracking-widest block mb-1">Our Brands & Quality Sourcing</span>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-950">Authorized Supply Point</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We use certified drip tubes and sprinkler parts from trusted Indian and global giants: <strong>Premier Irrigation Adritec</strong>, <strong>Jain Irrigation</strong>, and <strong>Netafim</strong>. Every component we install is certified, holding official warranties to guarantee durability and compliance under harsh field climates.
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="/partners"
                      className="text-green-600 text-sm font-bold flex items-center gap-1.5 hover:text-green-700 transition-colors"
                    >
                      View Sourcing Partners & Certification <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Ground support strip (Government Subsidy Support (PDMC) section removed as requested for now) */}
              </motion.div>
            )}

            {/* 🔷 3. POLYHOUSE TAB */}
            {activeTab === "polyhouse" && (
              <motion.div
                key="tab-polyhouse"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4.5xl font-extrabold text-gray-950 tracking-tight">
                      Polyhouses Built to Last — Because Your Crops Can't Afford Anything Less
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      A polyhouse extends your growing season, protects your crops from unpredictable weather, and helps you grow high-value produce that simply can't be done in open fields. We've been building polyhouses in West Bengal and neighbouring states, and we know how to design structures that hold up in our regional climate — the humidity, the monsoon winds, the heat.
                    </p>
                    
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150">
                    <img 
                      src="/polyhouse_irrigation.png" 
                      alt="Greenhouse construction and irrigation" 
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Material breakdown */}
                <div className="space-y-8 pt-6">
                  <h3 className="text-2.5xl font-bold text-gray-900 border-b border-gray-200 pb-3"> WHAT WE BUILD</h3>
                  <div className="space-y-3">
        
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {[
                      {
                        num: "01.",
                        title: "Structural Framework",
                        subtitle: "Heavy-Duty Skeleton",
                        desc: "The skeleton of the polyhouse — foundation pipes, columns, arches, purlins, and gutters — forms the backbone of the entire structure. We outsource these components from quality manufacturers and assemble them on-site with our expert construction team. Every structure is designed to handle crop load, wind load, and the weight of internal systems.",
                        img: "/polyhouse_structure.jpg"
                      },
                      {
                        num: "02.",
                        title: "Covering Material",
                        subtitle: "UV-Stabilized Polyethylene Film",
                        desc: "We use UV-stabilized polyethylene sheets that protect your crops from harsh sunlight, pests, and heavy rain while still allowing the right amount of light transmission. The material we use is sourced from reliable suppliers and installed with aluminium profile grippers that hold it securely without tearing.",
                        img: "/polyhouse_external.jpg"
                      },
                      {
                        num: "03.",
                        title: "Ventilation Systems",
                        subtitle: "Sufficient Air Exchange",
                        desc: "Heat buildup inside a polyhouse can kill crops. We install properly designed ventilation — side vents, roof vents, or automated systems depending on the scale and crop requirement — to keep air moving and temperatures in check.",
                        img: "/polyhouse_ventilation.jpg"
                      },
                      {
                        num: "04.",
                        title: "Foggers & Misting Inside",
                        subtitle: "Climate Regulation",
                        desc: "For crops that need humidity control or temperature reduction, we install fogging and misting systems within the polyhouse as part of the complete setup..",
                        img: "/polyhouse_foggers.jpg"
                      },
                      {
                        num: "05.",
                        title: "Internal Drip Irrigation",
                        subtitle: "Integrated Drip Lines",
                        desc: " Every polyhouse we build can be fitted with a drip irrigation system inside so water and fertigation are handled efficiently without manual labor inside the structure.",
                        img: "/polyhouse_drip.jpg"
                      },
                      {
                        num: "06.",
                        title: "Fan & Pad Cooling",
                        subtitle: "Evaporative Cooling Systems",
                        desc: "For summer-critical crops or larger polyhouses, we install fan and pad evaporative cooling systems that dramatically reduce internal temperature and protect yield quality.",
                        img: "/polyhouse_cooling.jpg"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 font-bold text-lg">{item.num}</span>
                            <h4 className="text-lg font-bold text-green-700">{item.title}</h4>
                          </div>
                          <h5 className="text-gray-900 font-bold text-base">{item.subtitle}</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed min-h-[4.5rem]">
                            {item.desc}
                          </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-150 shadow-sm aspect-video">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                {/* Our Process  */}
                <div className="bg-gray-50 rounded-3.5xl p-8 sm:p-12 border border-gray-150">
                  <h3 className="text-2.5xl font-bold text-gray-950 text-center mb-12">Our 6-Step Polyhouse Process</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {[
                      { step: "1", title: "Site Visit & Consultation", desc: "We visit your land, understand your crop plan, and discuss the size and type of structure that makes sense.", img: "/polyhouse_consultation.png" },
                      { step: "2", title: "Design & Estimation", desc: "We give you a clear layout and cost estimate with no hidden additions.", img: "/polyhouse_design.png" },
                      { step: "3", title: "Material Procurement", desc: "We source all components from trusted suppliers and manufacturers.", img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784128216/3aa_fxtxvj.png" },
                      { step: "4", title: "On-site Construction", desc: " Our own team builds the structure. We don't subcontract the core work.", img: "/polyhouse_construction.png" },
                      { step: "5", title: "Systems Integration", desc: "Ventilation, irrigation, cooling, foggers — installed and tested.", img: "/polyhouse_integration.png" },
                      { step: "6", title: "System Handover", desc: " We walk you through the system before we leave", img: "/polyhouse_handover.png" }
                    ].map((step, idx) => (
                      <div key={idx} className="bg-white rounded-[24px] border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all group flex flex-col sm:flex-row items-center sm:items-stretch gap-6 h-full">
                        <div className="w-full sm:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 shrink-0">
                          <img 
                            src={step.img} 
                            alt={step.title} 
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="relative flex-1 flex flex-col justify-center pr-12 py-1">
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-green-500/5 text-green-600/10 rounded-full flex items-center justify-center font-black text-4xl sm:text-5xl select-none">
                            {step.step}
                          </span>
                          <h4 className="font-extrabold text-gray-950 text-xl mb-2 leading-tight tracking-tight">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Geographical Coverage */}
                <div className="text-center bg-green-50 border border-green-100 p-8 rounded-3xl max-w-4xl mx-auto space-y-3">
                  <h4 className="text-xl font-bold text-gray-900">Where We Work</h4>
                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                  We operate across <strong> West Bengal </strong> and in neighbouring states. If you're unsure whether we cover your area, just call us and we'll tell you directly.
                   {/* We construct turnkey agricultural structures across <strong>West Bengal</strong> and extend into neighbouring states. Not sure if we cover your area? Give us a call and we'll tell you directly!*/}
                  </p>
                  <div className="pt-2">
                    <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-2xl text-sm inline-block">
                      Get a Free Site Consultation
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 🔷 4. SOLAR PUMPING TAB */}
            {activeTab === "solar" && (
              <motion.div
                key="tab-solar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4.5xl font-extrabold text-gray-950 tracking-tight">
                      Solar Pumps That Work as Hard as You Do — Without the Electricity Bill
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Diesel costs keep rising. Grid electricity isn't always reliable. And if you're farming in a location where power supply is irregular, you already know how much a dead pump can cost you in a dry spell. Solar pumping systems solve all of this in one shot — and thanks to government subsidies, many farmers can access them at a fraction of the actual cost.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                    We supply and install solar surface pumps and solar submersible pumps, and we take care of the complete setup from the panel mounting structure down to the pump in the borewell or water body.
                     {/* We supply and install solar surface pumps and solar submersible pumps, taking care of the complete setup from the heavy galvanized mounting structures down to the pump motors.*/}
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150">
                    <img 
                      src="/solar_pump.png" 
                      alt="Solar pumping system setup" 
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Sub-categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  {/* Surface Pumps */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src=" https://res.cloudinary.com/dr6qj9aff/image/upload/v1784192458/Solar_surface_pump_zezgnf.jpg" 
                          alt="Surface pumping pool" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl w-fit">
                          <Sun className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950">Solar Surface Pumps</h4>
                        <p className="text-gray-650 text-sm leading-relaxed text-justify">
                        Surface pumps sit above ground and draw water from open water sources — ponds, rivers, canals, or shallow wells. They're ideal for fields with accessible surface water nearby.
                         {/* Surface pump setups sit above the water level and draw cleanly from open sources like rivers, ponds, storage canals, or shallow surface rings. Sourced entirely from reputed brands.*/}
                        </p>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg text-center">
                        <strong className="font-extrabold text-[#090a0a]">What we supply and install:</strong>
                        Solar panels, pump controller, surface pump unit, piping, and module mounting structure. Every component is sourced from reputed manufacturers. Our team does the civil work, mounting, wiring, and commissioning..
                      </p>
                    </div>
                  </div>

                  {/* Submersible Pumps */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dr6qj9aff/image/upload/v1784192723/Solar_submersible_fv77rk.jpg" 
                          alt="Solar field" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-amber-50 text-yellow-600 p-2.5 rounded-xl w-fit">
                          <CloudRain className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950">Solar Submersible Pumps</h4>
                        <p className="text-gray-650 text-sm leading-relaxed text-justify">
                                               Submersible pumps go down into a borewell or deep well and push water up to the surface. They're more powerful and suited for areas where the water table is deep.

                         
                        </p>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <p className="text-xs text-gray-500 font-bold bg-gray-50 border border-gray-150 p-2.5 rounded-lg text-center">
                        <strong className="font-extrabold text-[#090a0a]">What we supply and install : </strong>
                        Solar panels, MPPT pump controller, submersible pump, rising main pipes, panel mounting structure, and all necessary accessories. Fully installed and tested by our technicians.
                      </p>
                    </div>
                  </div>

                  {/* Mounting structure */}
                  <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden border-b border-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dr6qj9aff/image/upload/v1784192792/Module_mounting_structure_hdez8k.jpg" 
                          alt="Structure MMS panels" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl w-fit">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-950">Module Mounting Structures (MMS)</h4>
                        <p className="text-gray-650 text-sm leading-relaxed text-justify">
                        The panel mounting structure is often underestimated — but a poor structure means panels shifting angle, corroding, or collapsing in high winds. We fabricate our own module mounting structures using quality galvanized iron or aluminium profiles, sourcing the raw material and cutting/assembling it ourselves. This gives us full control over quality and lets us optimize the tilt angle for maximum sunlight capture at your location.
                          {/*The PV panel stand is crucial. A weak structure shifts, rusts, or collapses under regional storm winds. We fabricate our own custom MMS using quality galvanized iron, cutting it carefully to lock in optimal solar tilt angles.*/}
                        </p>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                    </div>
                  </div>
                  
                   {/* PRIVATE INSTALLATIONS */}
                   <div className="bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden md:col-span-3 flex flex-col md:flex-row items-stretch">
                     <div className="w-full md:w-1/3 min-h-[250px] overflow-hidden bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
                       <img 
                         src="https://res.cloudinary.com/dr6qj9aff/image/upload/v1784181289/002_cadpbx.png" 
                         alt="Private Solar Installations" 
                         className="w-full h-full object-cover"
                         referrerPolicy="no-referrer"
                       />
                     </div>
                     <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center space-y-4">
                       <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl w-fit">
                         <Shield className="w-5 h-5" />
                       </div>
                       <h4 className="text-2xl font-extrabold text-gray-950 tracking-tight"> PRIVATE INSTALLATIONS </h4>
                       <div className="space-y-4 text-gray-650 text-sm sm:text-base leading-relaxed text-justify max-w-3xl">
                         <p>
                           For farmers, businesses, or institutions that don't fall under subsidy criteria or simply prefer a faster deployment timeline without waiting for government administrative processes, we perform private solar pump installations at competitive pricing.
                         </p>
                         <p>
                           Our private installations use the same commercial-grade solar panels, high-efficiency MPPT controllers, and premium pump units from leading brands — backed by our full engineering, custom mounting structure fabrication, and long-term maintenance support.
                         </p>
                         <div className="pt-2 flex flex-wrap items-center gap-4 text-sm sm:text-base">
                           <a 
                             href={`https://wa.me/${phoneNo.replace(/[+\s]/g, '')}?text=${encodeURIComponent("Hello Green View, I want to find out what solar pump subsidy I am eligible for. Please guide me!")}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="bg-[#12B76A] hover:bg-[#0f9f5c] text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-sm flex items-center gap-2"
                           >
                             Message us on WhatsApp
                           </a>
                           <a 
                             href={`tel:${phoneNo.replace(/\s/g, '')}`}
                             className="bg-gray-150 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-2xl transition-all flex items-center gap-2"
                           >
                             Call us directly
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>

                  {/* 🔷 Our 10 steps solar pumping process */}
                  <div className="bg-white rounded-[20px] py-16 px-4 sm:px-8 border border-[#DDEFD9] space-y-12 md:col-span-3">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                      <span className="text-[#1B5E20] font-extrabold uppercase tracking-[0.2em] text-xs px-3 py-1 bg-[#E8F5E9] rounded-full inline-block font-poppins">
                        Installation Workflow
                      </span>
                      <h2 className="text-3xl sm:text-[42px] font-extrabold font-poppins text-[#263238] tracking-tight leading-tight">
                        Our Solar Pump Installation Process
                      </h2>
                      <p className="text-[#263238]/75 font-medium text-sm sm:text-base leading-relaxed font-sans">
                        From your first inquiry to successful installation and after-sales support, we provide complete solar pumping solutions for sustainable irrigation.
                      </p>
                    </div>

                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                    >
                      {solarSteps.map((step) => (
                        <motion.div
                          key={step.step}
                          variants={cardVariants}
                          className="group bg-white rounded-[20px] border border-[#D7EAD5] hover:border-[#1B5E20] shadow-sm hover:shadow-xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col h-full overflow-hidden relative"
                        >
                          {/* Large green circular step number */}
                          <div className="absolute top-3 left-3 z-20 w-10 h-10 rounded-full bg-[#1B5E20] text-[#E8F5E9] font-poppins font-extrabold flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>

                          {/* Illustration at top with Light Green background */}
                          <div className="h-44 bg-[#E8F5E9]/50 relative overflow-hidden flex items-center justify-center border-b border-[#D7EAD5]">
                            {step.illustration}
                          </div>

                          {/* Card Content */}
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold font-poppins text-[#263238] uppercase tracking-wider leading-snug">
                                {step.title}
                              </h4>
                              <ul className="space-y-2">
                                {step.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2 text-xs font-medium text-gray-600 leading-relaxed font-sans">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E20] shrink-0 mt-1.5" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
                {/* Option A & Option B subsidy support omitted for now as requested (PDF 3 Page 15) */}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* 7. How It Works (7 Steps Process) (PDF 2 Page 5) - Relocated before FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fcfdfc] rounded-3.5xl p-6 sm:p-10 border border-green-100">
            <h3 className="text-2.5xl font-bold text-gray-950 text-center mb-12 uppercase tracking-wide">
              Our Simple 7-Step Solar Installation Process
            </h3>
            
            {/* Row 1 (Steps 1 to 4) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Contact Us", 
                  bullets: [
                    "Get in touch with our team via call, WhatsApp or email.",
                    "We are happy to assist you!"
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289650/2_peo3ij.jpg" 
                },
                { 
                  step: "2", 
                  title: "Free Site Visit & Consultation", 
                  bullets: [
                    "Our expert will visit your site for free.",
                    "We assess your roof, discuss your needs & suggest the best solution."
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289650/3_ax001g.jpg" 
                },
                { 
                  step: "3", 
                  title: "Document Verification", 
                  bullets: [
                    "We verify all necessary documents for eligibility.",
                    "Our team ensures a smooth and hassle-free process."
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289650/4_xaouxb.jpg" 
                },
                { 
                  step: "4", 
                  title: "Registration", 
                  bullets: [
                    "We register your application on the official PM Surya Ghar Portal.",
                    "You will receive application acknowledgement."
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289650/5_at4fhm.jpg" 
                }
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-[28px] border-2 border-[#a3d9a5] p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-full relative"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#13541b] rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                        {step.step}
                      </div>
                      <h4 className="font-extrabold text-[#0a2e12] text-sm tracking-wide uppercase leading-tight">
                        {step.title}
                      </h4>
                    </div>

                    {/* Image Box */}
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#eaf4eb]/40 border border-green-50/70 shrink-0">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mt-4">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#13541b] shrink-0 mt-[7px]" />
                          <span className="font-medium text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow connector */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-[24px] -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white border-2 border-green-200 rounded-lg shadow-sm text-green-600">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2 (Steps 5 to 7) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:max-w-6xl lg:mx-auto">
              {[
                { 
                  step: "5", 
                  title: "Solar System Installation", 
                  bullets: [
                    "Our skilled team installs high-quality solar system at your premises.",
                    "System testing & commissioning is completed before activation."
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289650/6_bkoopx.jpg" 
                },
                { 
                  step: "6", 
                  title: "Net Metering Process", 
                  bullets: [
                    "We apply for net meter with your electricity distribution company (DISCOM).",
                    "After approval, the net meter is installed & your system is connected to the grid."
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289650/7_zt1mmq.jpg" 
                },
                { 
                  step: "7", 
                  title: "Subsidy Processing", 
                  bullets: [
                    "Your subsidy is approved by the government as per eligibility.",
                    "Subsidy amount is transferred directly to your bank account."
                  ],
                  img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784289651/8_bxfkks.jpg" 
                }
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-[28px] border-2 border-[#a3d9a5] p-5 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-full relative"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#13541b] rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                        {step.step}
                      </div>
                      <h4 className="font-extrabold text-[#0a2e12] text-sm tracking-wide uppercase leading-tight">
                        {step.title}
                      </h4>
                    </div>

                    {/* Image Box */}
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#eaf4eb]/40 border border-green-50/70 shrink-0">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mt-4">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#13541b] shrink-0 mt-[7px]" />
                          <span className="font-medium text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow connector */}
                  {idx < 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-[24px] -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white border-2 border-green-200 rounded-lg shadow-sm text-green-600">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}

                  {/* Connection arrow on left of Step 5 from previous row */}
                  {idx === 0 && (
                    <div className="hidden lg:flex absolute top-1/2 -left-[24px] -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white border-2 border-green-200 rounded-lg shadow-sm text-green-600">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Bank Section */}
      <ServicesFAQ />
    </div>
  );
}
