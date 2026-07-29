import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, ChevronDown, Sparkles, Droplets, Sun, 
  CloudRain, HelpCircle, BookOpen, AlertCircle, RefreshCw 
} from "lucide-react";
import { faqData, FAQItem } from "../data/faqData";

export default function ServicesFAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Categories config with icons and colors
  const categories = useMemo(() => [
    { id: "all", label: "All Questions", count: faqData.length, icon: BookOpen, color: "bg-gray-100 text-gray-850 border-gray-200" },
    { id: "pmsuryaghar", label: "PM Surya Ghar", count: faqData.filter(f => f.category === "pmsuryaghar").length, icon: Sparkles, color: "bg-amber-50 text-amber-800 border-amber-200/60" },
    { id: "irrigation", label: "Irrigation Systems", count: faqData.filter(f => f.category === "irrigation").length, icon: Droplets, color: "bg-blue-50 text-blue-800 border-blue-200/60" },
    { id: "polyhouse", label: "Polyhouse Construction", count: faqData.filter(f => f.category === "polyhouse").length, icon: Sun, color: "bg-emerald-50 text-emerald-800 border-emerald-200/60" },
    { id: "solar", label: "Solar Pumping", count: faqData.filter(f => f.category === "solar").length, icon: CloudRain, color: "bg-sky-50 text-sky-800 border-sky-200/60" }
  ], []);

  // Filter and search logic
  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === "" || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleToggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setExpandedId(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F7F9F7] to-white border-t border-[#E3ECE1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-xs uppercase tracking-[0.15em] px-4 py-1.5 rounded-full shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            Complete FAQ Bank
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-black text-gray-950 uppercase tracking-tight leading-none">
            Green View Agro Tech FAQ Bank
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
            4 Services · 75+ Questions · Research-Backed Real Customer Concerns. <br />
            <span className="text-xs text-gray-400 font-medium italic mt-1 block">
              Sources: PM Surya Ghar portal, MNRE, PM-KUSUM guidelines, drip irrigation field studies, and polyhouse subsidy guides.
            </span>
          </p>
        </div>

        {/* Search and Category Filter Controls */}
        <div className="bg-white rounded-[2rem] border border-gray-200 p-6 sm:p-8 shadow-md space-y-6 mb-10 max-w-5xl mx-auto">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search 75+ questions... (e.g. subsidy, cost, space, DCR, CESC, pressure)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 text-sm sm:text-base text-gray-950 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-3 focus:ring-green-600/10 transition-all duration-200"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 uppercase"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setExpandedId(null);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm border transition-all duration-200 ${
                    isSelected 
                      ? "bg-green-700 text-white border-green-700 shadow-md shadow-green-700/10" 
                      : `${cat.color} hover:brightness-95 cursor-pointer`
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                  <span className={`inline-flex items-center justify-center rounded-full text-[10px] font-extrabold w-5 h-5 ${
                    isSelected ? "bg-white/20 text-white" : "bg-black/5 text-gray-700"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Info Bar */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 px-4">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Showing {filteredFAQs.length} of {faqData.length} FAQs
          </span>
          {(searchQuery || selectedCategory !== "all") && (
            <button 
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-800"
            >
              <RefreshCw className="w-3 h-3 animate-spin-reverse" />
              Reset filters & search
            </button>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => {
                const isOpen = expandedId === item.id;
                
                // Get corresponding styles per category
                let badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
                if (item.category === "irrigation") badgeColor = "bg-blue-100 text-blue-800 border-blue-200";
                if (item.category === "polyhouse") badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
                if (item.category === "solar") badgeColor = "bg-sky-100 text-sky-800 border-sky-200";

                return (
                  <motion.div
                    key={item.id}
                    layout="position"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm ${
                      isOpen 
                        ? "border-green-600 ring-2 ring-green-600/10 shadow-md" 
                        : "border-gray-200 hover:border-gray-300 hover:shadow-xs"
                    }`}
                  >
                    <button
                      onClick={() => handleToggle(item.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-5 sm:p-6 flex items-start gap-4 cursor-pointer"
                      style={{ minHeight: "44px" }}
                    >
                      {/* Left Badge Indicator for Category (on desktop) */}
                      <span className={`hidden sm:inline-block shrink-0 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md border ${badgeColor}`}>
                        {item.categoryLabel}
                      </span>

                      {/* Question Text */}
                      <div className="flex-1 space-y-1.5">
                        <span className={`sm:hidden inline-block shrink-0 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded border ${badgeColor}`}>
                          {item.categoryLabel}
                        </span>
                        <h4 className={`text-[15px] sm:text-base font-black tracking-tight leading-snug transition-colors duration-200 ${
                          isOpen ? "text-green-800" : "text-gray-900"
                        }`}>
                          {item.question}
                        </h4>
                      </div>

                      {/* Chevron Indicator */}
                      <div className={`w-8 h-8 rounded-full border border-gray-150 flex items-center justify-center shrink-0 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 bg-green-50 border-green-200 text-green-700" : "bg-white"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable Content Area */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-gray-100"
                        >
                          <div className="p-5 sm:p-6 bg-slate-50/50 text-gray-700 text-sm sm:text-base leading-relaxed text-justify space-y-4">
                            <p className="font-medium">{item.answer}</p>
                            
                            {/* Decorative small button encouraging direct check/consultation */}
                            <div className="pt-2 flex flex-wrap gap-2.5">
                              {item.category === "pmsuryaghar" && (
                                <a 
                                  href="#solar-calculator"
                                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-700 bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full hover:bg-amber-100 transition-colors"
                                >
                                  Estimate your subsidy with our tool →
                                </a>
                              )}
                              <Link 
                                to="/contact"
                                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-green-800 bg-green-50 border border-green-200/60 px-3.5 py-1.5 rounded-full hover:bg-green-100 transition-colors"
                              >
                                Need more advice? Contact our experienced team →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center bg-gray-50 border border-gray-200 rounded-[2rem] p-12 space-y-4"
              >
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto" />
                <h4 className="text-lg font-bold text-gray-800">No matching questions found</h4>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  We couldn't find any FAQs matching "{searchQuery}". Try searching for broader terms like "cost", "subsidy", "space", or "pump".
                </p>
                <button 
                  onClick={handleResetFilters}
                  className="bg-green-700 hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors"
                >
                  Clear Search Filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Card directing to Contact Page */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-[#0a2e12] via-[#13541b] to-[#1b5e20] rounded-[24px] p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-green-700/50">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold font-poppins">Need More Advice or Custom Solutions?</h4>
            <p className="text-xs sm:text-sm text-green-100/90 font-medium">
              Our team of agricultural & solar engineering experts is ready to answer your specific queries.
            </p>
          </div>
          <Link 
            to="/contact"
            className="shrink-0 bg-white hover:bg-green-50 text-[#0a2e12] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Contact Our Team Directly →
          </Link>
        </div>

      </div>
    </section>
  );
}
