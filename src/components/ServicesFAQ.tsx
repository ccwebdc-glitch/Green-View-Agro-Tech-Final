import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, ChevronDown, ChevronUp, HelpCircle, Phone, ArrowRight, 
  Calculator, MessageSquare, Sparkles, CheckCircle2 
} from "lucide-react";
import { faqData, FAQItem } from "../data/faqData";

type CategoryFilter = "all" | "pmsuryaghar" | "irrigation" | "polyhouse" | "solar";

export default function ServicesFAQ() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<string[]>(["psg-1", "sol-1"]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((faq) => faq.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const categories: { key: CategoryFilter; label: string; badge?: string }[] = [
    { key: "all", label: "All Questions" },
    { key: "pmsuryaghar", label: "PM Surya Ghar", badge: "Max ₹78k Subsidy" },
    { key: "solar", label: "Solar Pumping", badge: "PM-KUSUM" },
    { key: "irrigation", label: "Drip & Irrigation", badge: "Up to 55% Subsidy" },
    { key: "polyhouse", label: "Polyhouses", badge: "50% NHM Subsidy" },
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item: FAQItem) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq-bank" className="py-20 bg-gradient-to-b from-gray-50 via-white to-green-50/30 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Green View Agro Tech FAQ Bank
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Frequently Asked Questions & Answers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Clear, transparent answers on rooftop solar subsidies, PM-KUSUM solar pumps, 
            micro-irrigation design, commercial polyhouse installation, and maintenance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-4 sm:p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search queries, subsidies, borewell depth, warranty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 hover:bg-gray-100/70 focus:bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end text-xs text-gray-500 font-medium">
              <span>Found {filteredFaqs.length} answers</span>
              <span className="text-gray-300">|</span>
              <button
                onClick={expandAll}
                className="text-emerald-700 hover:text-emerald-800 font-semibold hover:underline"
              >
                Expand All
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={collapseAll}
                className="text-gray-600 hover:text-gray-900 font-semibold hover:underline"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase ${
                        active
                          ? "bg-emerald-600 text-emerald-50"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-300">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">No matching questions found</h3>
              <p className="text-gray-500 text-sm mt-1 mb-6">
                Try a different keyword or contact our engineering team directly for quick advice.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-800 transition-colors shadow-sm"
              >
                Contact Our Team Directly
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 bg-white overflow-hidden ${
                    isOpen
                      ? "border-emerald-300 shadow-md ring-1 ring-emerald-500/20"
                      : "border-gray-200 hover:border-gray-300 shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-2 rounded-xl transition-colors shrink-0 mt-0.5 ${
                        isOpen
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed bg-emerald-50/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Dual Direct Action Card: "Estimate your Subsidy & Cost" + "Need more advice? Contact our experienced team" */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Estimate your Subsidy & Cost */}
          <div className="bg-gradient-to-br from-emerald-800 to-green-950 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                <Calculator className="w-3.5 h-3.5" />
                Quick Subsidy Calculator & Costing
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                Estimate Your Net Cost & Government Subsidy
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed mb-6">
                Calculate your exact out-of-pocket budget, payback timeline, and eligible 
                central & state subsidies for Rooftop Solar (up to ₹78,000), PM-KUSUM Solar Pumps, 
                or Drip/Micro-irrigation systems.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free DISCOM feasibility check for WBSEDCL & CESC</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent itemized quotation before any commitment</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 pt-2">
              <Link
                to="/contact?action=estimate"
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-emerald-950 hover:bg-emerald-50 px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Estimate Your Project Directly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Need more advice? Contact our experienced team connect to Contact page directly */}
          <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                Dedicated Advisory Desk
              </div>
              <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight mb-2">
                Need More Advice? Contact Our Experienced Team
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Have specific soil conditions, borewell depth questions, or want a customized farm visit? 
                Our certified agricultural engineers and solar technicians are available to help.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 mb-6 space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2 font-semibold text-gray-900">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Direct Hotline: +91 7384854555 (Mon–Sat, 9AM–7PM)</span>
                </div>
                <p className="text-gray-500 text-xs pl-6">
                  Old Amlouka Road, Khandra, Paschim Bardhaman – 713363, West Bengal
                </p>
              </div>
            </div>
            <div className="relative z-10 pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 flex-1 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Connect to Contact Page Directly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+917384854555"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
