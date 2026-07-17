import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, ArrowRight, Search, X, BookOpen, Clock, ChevronRight } from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogsData";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Categories list with counts
  const categories = useMemo(() => {
    const list = ["All"];
    blogPosts.forEach((post) => {
      if (!list.includes(post.category)) {
        list.push(post.category);
      }
    });
    return list;
  }, []);

  const getCategoryCount = (category: string) => {
    if (category === "All") return blogPosts.length;
    return blogPosts.filter((post) => post.category === category).length;
  };

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Helper to render markdown-like content into stylized JSX
  const renderBlogContent = (text: string) => {
    const lines = text.split("\n");
    let inList = false;
    let listItems: string[] = [];
    const elements: React.ReactNode[] = [];

    const flushList = (key: string | number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-6 space-y-2 my-6 text-gray-700 text-lg leading-relaxed">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    let tableHeaders: string[] = [];
    let tableRows: string[][] = [];
    let inTable = false;

    const flushTable = (key: string | number) => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-wrapper-${key}`} className="my-8 overflow-x-auto border border-[#D8E6D5] rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#184B2A] text-white border-b border-[#D8E6D5]">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="px-6 py-4 font-bold uppercase text-xs tracking-wider border-r border-[#1a512d] last:border-r-0">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBF2EA] text-gray-700">
                {tableRows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F7F9F7] transition-colors last:border-b-0">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-base border-r border-[#EBF2EA] last:border-r-0">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableHeaders = [];
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table handler
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        flushList(index);
        const parts = trimmed.split("|").slice(1, -1).map(p => p.trim());
        if (parts.every(p => p.startsWith(":") || p.startsWith("-"))) {
          // This is a separator line like | :--- | :--- | or | --- | --- |, ignore it
          return;
        }
        if (!inTable) {
          tableHeaders = parts;
          inTable = true;
        } else {
          tableRows.push(parts);
        }
        return;
      } else {
        if (inTable) {
          flushTable(index);
        }
      }

      // Headings
      if (trimmed.startsWith("### ")) {
        flushList(index);
        elements.push(
          <h2 key={index} className="text-3xl font-extrabold text-[#184B2A] mt-10 mb-4 tracking-tight border-b border-gray-100 pb-2">
            {trimmed.replace("### ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("#### ")) {
        flushList(index);
        elements.push(
          <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            {trimmed.replace("#### ", "")}
          </h3>
        );
      } 
      // Bullet points
      else if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || (trimmed.match(/^\d+\.\s/) && inList === false)) {
        inList = true;
        const itemText = trimmed.replace(/^(\*\s|-\s|\d+\.\s)/, "");
        // Highlight bold elements inside list items if any
        listItems.push(itemText);
      } 
      // Call to action / branding sections
      else if (trimmed === "GREEN VIEW AGRO TECH") {
        flushList(index);
        elements.push(
          <div key={`brand-${index}`} className="mt-12 bg-gradient-to-br from-[#184B2A] to-[#256f3f] text-white p-8 rounded-[24px] shadow-lg border border-[#D8E6D5] space-y-4">
            <span className="text-amber-300 font-extrabold uppercase text-xs tracking-widest block">
              Direct Assistance from Green View Agro Tech
            </span>
            <h4 className="text-2xl font-bold">Need assistance with your solar or irrigation project?</h4>
          </div>
        );
      }
      // Paragraphs
      else if (trimmed.length > 0) {
        flushList(index);
        
        // Check if the entire paragraph is a brand CTA statement
        if (trimmed.startsWith("We size every system") || trimmed.startsWith("We're registered vendors") || trimmed.startsWith("Documentation accuracy is") || trimmed.startsWith("Whether you looked") || trimmed.startsWith("Every panel we install") || trimmed.startsWith("We design your drip") || trimmed.startsWith("We'll walk your") || trimmed.startsWith("We help you check") || trimmed.startsWith("We'll calculate your") || trimmed.startsWith("We assess your") || trimmed.startsWith("We handle your") || trimmed.startsWith("We build the complete") || trimmed.startsWith("We sequence every") || trimmed.startsWith("We don't disappear")) {
          elements.push(
            <div key={`cta-${index}`} className="-mt-4 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl my-6">
              <p className="text-amber-900 text-lg font-medium leading-relaxed">{trimmed}</p>
            </div>
          );
        } else {
          // Regular paragraph
          elements.push(
            <p key={index} className="text-gray-700 text-lg leading-relaxed my-4 font-normal">
              {trimmed}
            </p>
          );
        }
      } else {
        flushList(index);
      }
    });

    // Final flushes
    flushList("final");
    flushTable("final");

    return elements;
  };

  return (
    <div className="pt-20 min-h-screen bg-[#FAFBF9]">
      {/* 🟢 Hero section */}
      <section className="bg-gradient-to-b from-[#184B2A] to-[#11351E] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,167,69,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-green-400 font-black uppercase text-sm tracking-widest block mb-3">Green View Agro Tech Content Bank</span>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight uppercase leading-tight">
            Knowledge Hub & <br />
            <span className="text-[#9FE870]">Agri-Solar Insights</span>
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Research-backed, West Bengal-specific analysis on PM Surya Ghar solar, micro-irrigation systems, solar pumping, and modern polyhouse cultivation.
          </p>
        </div>
      </section>

      {/* 🟢 Search and Filter controls */}
      <section className="py-12 bg-white border-b border-[#E3ECE1] sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    selectedCategory === category
                      ? "bg-[#184B2A] text-[#9FE870] border-[#184B2A] shadow-md shadow-green-900/10"
                      : "bg-[#F3F6F2] text-[#444444] hover:bg-[#EBF2EA] border-[#E3ECE1]"
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category ? "bg-[#256f3f] text-[#9FE870]" : "bg-[#DFE7DD] text-gray-600"
                  }`}>
                    {getCategoryCount(category)}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 bg-[#F7F9F7] rounded-full text-gray-900 placeholder-gray-400 border border-[#D8E6D5] focus:outline-none focus:ring-2 focus:ring-[#184B2A] focus:bg-white text-sm transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Blog List Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 bg-white border border-[#E3ECE1] rounded-[32px] space-y-4">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800">No articles found</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                We couldn't find any articles matching your search query or selected category. Try clearing your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2.5 bg-[#184B2A] text-white rounded-full font-bold text-sm cursor-pointer hover:bg-opacity-90"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-[24px] overflow-hidden border border-[#D8E6D5] shadow-sm hover:shadow-[0_12px_40px_rgba(24,75,42,0.06)] transition-all duration-300 group cursor-pointer flex flex-col h-full"
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#184B2A] text-[#9FE870] font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body info */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 group-hover:text-[#184B2A] transition-colors leading-snug line-clamp-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#F0F5EF] flex items-center justify-between text-sm text-[#184B2A] font-extrabold group-hover:translate-x-1 transition-transform duration-300">
                      <span>Read Complete Article</span>
                      <ChevronRight className="w-5 h-5 text-[#184B2A]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 🟢 IMMERSIVE ARTICLE MODAL VIEWER */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] rounded-none sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 p-2.5 rounded-full cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable container */}
              <div className="overflow-y-auto flex-1">
                {/* Hero Header */}
                <div className="relative h-64 sm:h-96 w-full">
                  <img
                    src={selectedPost.img}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white space-y-3">
                    <span className="bg-[#9FE870] text-[#184B2A] font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                      {selectedPost.category}
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight uppercase">
                      {selectedPost.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 items-center text-xs sm:text-sm text-gray-200 font-medium pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{selectedPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span>{selectedPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-green-400" />
                        <span>{selectedPost.author}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="px-6 py-8 sm:px-12 sm:py-12 bg-white prose max-w-none">
                  {renderBlogContent(selectedPost.content)}
                </div>
              </div>

              {/* Sticky Footer CTA */}
              <div className="bg-[#F7F9F7] px-6 py-4 sm:px-12 sm:py-6 border-t border-[#E3ECE1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Interested in these solutions?</p>
                  <p className="text-gray-900 text-sm font-extrabold">Let Green View custom size your system today.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-white text-[#184B2A] font-bold text-sm rounded-full border border-[#D8E6D5] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    Close Article
                  </button>
                  <a
                    href="https://wa.me/919477020020"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-6 py-3 bg-[#184B2A] text-white font-bold text-sm rounded-full text-center cursor-pointer hover:bg-opacity-95 shadow-md shadow-green-900/10 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
