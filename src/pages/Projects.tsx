import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, ShieldCheck, Sun, Grid, Droplets, CloudRain, Sprout } from "lucide-react";

interface ProjectSpecRow {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  location: string;
  crop: string;
  area: string;
  subsidy: string;
  category: string;
  img: string;
  desc: string;
  specs?: ProjectSpecRow[];
}

const projectGallery: Project[] = [
  {
    id: 1,
    title: "2HP Solar Water Pump System",
    location: "MOUZA - GOIDHABA, BLOCK - ANDAL, DIST - PASCHIM BARDHAMAN",
    crop: "Agricultural Irrigation",
    area: "2HP SURFace",
    subsidy: "Solar Power",
    category: "Solar Pumps",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784198142/a_ahzvcb.jpg",
    desc: "Successfully installed 2HP Solar Water Pump System for efficient and reliable agricultural irrigation. This system helps in reducing electricity cost and ensures uninterrupted water supply for better crop productivity.",
    specs: [
      { label: "Capacity", value: "2HP SURFace" },
      { label: "Application", value: "Agricultural Irrigation" },
      { label: "Energy Source", value: "Solar Power" }
    ]
  },
  {
    id: 2,
    title: "5HP Solar Water Pump System",
    location: "MOUZA - BANGRAM, GP - DERIPUR, BLOCK - SAINTHIA, DIST - BIRBHUM",
    crop: "Agricultural Irrigation",
    area: "5HP SUBMercible",
    subsidy: "Solar Power",
    category: "Solar Pumps",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784198452/b_e2zewl.jpg",
    desc: "Successfully installed a 5HP Solar Submersible Water Pump System to ensure efficient and uninterrupted water supply for agricultural irrigation. This solar-powered solution helps in reducing electricity dependency and supports sustainable farming practices.",
    specs: [
      { label: "Capacity", value: "5HP SUBMercible" },
      { label: "Application", value: "Agricultural Irrigation" },
      { label: "Energy Source", value: "Solar Power" }
    ]
  },
  {
    id: 3,
    title: "2HP Surface Solar Water Pump System",
    location: "VILL - GOPALNAGAR, BLOCK - KOLAGHAT, DIST - PURBA MEDINIPUR",
    crop: "Agricultural Irrigation",
    area: "2HP SURFACE",
    subsidy: "Solar Power",
    category: "Solar Pumps",
    img: " https://res.cloudinary.com/dr6qj9aff/image/upload/v1784198561/c_n3d9kl.jpg",
    desc: "Successfully installed 2HP Surface Solar Water Pump System for reliable and cost-effective irrigation. This solar-powered solution ensures consistent water supply and reduces dependency on electricity for sustainable farming.",
    specs: [
      { label: "Capacity", value: "2HP SURFACE" },
      { label: "Application", value: "Agricultural Irrigation" },
      { label: "Energy Source", value: "Solar Power" }
    ]
  },
  {
    id: 4,
    title: "5HP Submersible Solar Water Pump System",
    location: "BLOCK NALHATI-II, MOUJA - BELOA, DISTRICT - BIRBHUM",
    crop: "Agricultural Irrigation",
    area: "5HP Submersible",
    subsidy: "Solar Power",
    category: "Solar Pumps",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784198705/d_zm8kvg.jpg",
    desc: "Successfully installed a 5HP Submersible Solar Water Pump System at Beloa, Nalhati-II Block, Birbhum District. The system ensures a reliable and uninterrupted water supply for agricultural irrigation, reduces electricity dependency and supports efficient & sustainable farming.",
    specs: [
      { label: "Capacity", value: "5HP Submersible" },
      { label: "Application", value: "Agricultural Irrigation" },
      { label: "Energy Source", value: "Solar Power" }
    ]
  },
  {
    id: 5,
    title: "5HP Submersible Solar Water Pump System",
    location: "VILLAGE-BANSHIA, DURGAPUR-FARIDPUR BLOCK, PASCHIM BARDHAMAN DISTRICT",
    crop: "Agricultural Irrigation",
    area: "5HP Submersible",
    subsidy: "Solar Power",
    category: "Solar Pumps",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784198877/e_dmarba.jpg",
    desc: "Successfully installed a 5HP Submersible Solar Water Pump System at Banshia, Durgapur–Faridpur Block, Paschim Bardhaman District. The system provides a reliable and sustainable water supply for agricultural irrigation, reducing electricity dependence and supporting better crop productivity.",
    specs: [
      { label: "Capacity", value: "5HP Submersible" },
      { label: "Application", value: "Agricultural Irrigation" },
      { label: "Energy Source", value: "Solar Power" }
    ]
  },
  {
    id: 6,
    title: "Drip Irrigation System",
    location: "BIRBHUM BOLPUR",
    crop: "Field Irrigation",
    area: "Drip Irrigation System",
    subsidy: "Birbhum, Bolpur",
    category: "Irrigation",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784199360/00_idv4vh.jpg",
    desc: "A Drip Irrigation System has been successfully installed to deliver water directly to the root zone of plants. This system ensures efficient water use, saves water and improves crop growth and yield.",
    specs: [
      { label: "Item", value: "IRRIGATION SYSTEM" },
      { label: "Description", value: "Drip Irrigation System" },
      { label: "Application", value: "Field Irrigation" },
      { label: "Benefits", value: "Water Saving, Better Growth, Higher Yield, Efficient Water Use" },
      { label: "Location", value: "Birbhum, Bolpur" }
    ]
  },
  {
    id: 7,
    title: "Portable Sprinkler 75mm",
    location: "BIRBHUM BOLPUR",
    crop: "Field Irrigation",
    area: "Portable Sprinkler 75mm",
    subsidy: "Birbhum, Bolpur",
    category: "Irrigation",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784199499/01_bvspsk.jpg",
    desc: "A Portable Sprinkler 75mm has been successfully installed to provide uniform irrigation coverage for crops. It is easy to install, move and maintain, ensuring efficient water use and healthy crop growth.",
    specs: [
      { label: "Item", value: "IRRIGATION SYSTEM" },
      { label: "Description", value: "Portable Sprinkler 75mm" },
      { label: "Application", value: "Field Irrigation" },
      { label: "Benefits", value: "Uniform Water Distribution, Water Saving, Better Growth, Higher Yield" },
      { label: "Location", value: "Birbhum, Bolpur" }
    ]
  },
  {
    id: 8,
    title: "Polyhouse Installation",
    location: "Birbhum",
    crop: "Protected Cultivation",
    area: "500 sq mtr",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784196032/500_ttcgd3.jpg",
    desc: "A 500 sq mtr Polyhouse has been successfully installed to create a controlled environment for healthy crop cultivation and higher productivity.",
    specs: [
      { label: "Structure Type", value: "Polyhouse" },
      { label: "Covered Area", value: "500 sq mtr" },
      { label: "Location", value: "Birbhum" },
      { label: "Application", value: "Protected Cultivation" },
      { label: "Benefits", value: "Better Growth, Higher Yield, Protection from Weather & Pests" },
      { label: "Features", value: "Strong Structure, UV Stabilized Cover, Proper Ventilation, Durable & Long Lasting" }
    ]
  },
  {
    id: 9,
    title: "POLYHOUSE INSTALLATION",
    location: "Bankura",
    crop: "Protected Cultivation",
    area: "4000 sq mtrs",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784194454/4000_sc6oy8.jpg",
    desc: "A 4000 sq mtrs Polyhouse has been successfully installed to create a controlled environment for healthy crop cultivation and higher productivity.",
    specs: [
      { label: "Structure Type", value: "Polyhouse" },
      { label: "Covered Area", value: "4000 sq mtrs" },
      { label: "Location", value: "Bankura" },
      { label: "Application", value: "Protected Cultivation" },
      { label: "Benefits", value: "Better Growth, Higher Yield, Protection from Weather & Pests, Extended Growing Season" },
      { label: "Features", value: "Strong Structure, UV Stabilized Cover, Proper Ventilation, Door & Side Vent, Durable & Long Lasting" }
    ]
  },
  {
    id: 10,
    title: "Drip Irrigation System",
    location: "BLOCK - LABPUR, MOUZA - MAHESHPUR, DISTRICT - BIRBHUM",
    crop: "Banana Tree",
    area: "Drip Irrigation System",
    subsidy: "Block - Labpur, Mouza - Maheshpur, District - Birbhum",
    category: "Irrigation",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784200266/03_ijqca1.jpg",
    desc: "A modern Drip Irrigation System has been successfully installed in a banana plantation to ensure precise and efficient water delivery directly to the root zone. This system helps in conserving water, improving soil health and increasing productivity.",
    specs: [
      { label: "Irrigation Type", value: "Drip Irrigation System" },
      { label: "Crop", value: "Banana Tree" },
      { label: "Benefits", value: "Water Saving, Better Growth, Higher Yield & Better Quality" }
    ]
  },
  {
    id: 11,
    title: "Large Volume Sprinkler 75mm (RAINGUN)",
    location: "DISTRICT - BIRBHUM, BLOCK - MAYURESWAR-1",
    crop: "Taro (Kochu)",
    area: "Large Volume Sprinkler (Raingun) 75mm",
    subsidy: "District - Birbhum, Block - Mayureswar-1",
    category: "Irrigation",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784199609/02_rchxnk.jpg",
    desc: "A Large Volume Sprinkler (Raingun) 75mm has been successfully installed in the taro field to provide uniform irrigation coverage over a large area. This system ensures efficient water application and supports healthy growth of taro plants.",
    specs: [
      { label: "Irrigation System", value: "Large Volume Sprinkler (Raingun) 75mm" },
      { label: "Crop", value: "Taro (Kochu)" },
      { label: "Application", value: "Field Irrigation" },
      { label: "Benefits", value: "Uniform Water Distribution, Better Growth, Higher Yield, Water Saving & Efficiency" },
      { label: "Location", value: "District - Birbhum, Block - Mayureswar-1" }
    ]
  },
  {
    id: 12,
    title: "Polyhouse Installation",
    location: "Birbhum",
    crop: "Protected cultivation of vegetables, flowers and other high-value crops",
    area: "500 sq mm",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "https://res.cloudinary.com/dr6qj9aff/image/upload/v1784196619/p_ajf2zi.jpg",
    desc: "We have successfully installed a 500 sq mm Polyhouse to ensure a controlled environment for healthy crops, better growth and higher productivity.",
    specs: [
      { label: "Structure Type", value: "Polyhouse" },
      { label: "Covered Area", value: "500 sq mm" },
      { label: "Location", value: "Birbhum" },
      { label: "Application", value: "Protected cultivation of vegetables, flowers and other high-value crops" },
      { label: "Benefits", value: "Better growth, higher yield, protection from adverse weather and pests" },
      { label: "Features", value: "Strong structure, UV stabilized cover, proper ventilation, door & side vent, durable and long lasting" }
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Irrigation", "Polyhouse", "Solar Pumps"];

  const filteredProjects = filter === "All" 
    ? projectGallery 
    : projectGallery.filter((p) => p.category === filter);

  return (
    <div className="pt-20 bg-[#fafbfa]">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1500" 
            alt="Farmland background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Our Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white text-shadow">
            Work We've Done. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Farms We've Changed.
            </span>
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mt-4 font-semibold">
            Every project here started with a farmer who had a problem — too much water loss, crop failure from weather, unreliable electricity, or no way to grow off-season.
          </p>
        </div>
      </section>

      {/* Interactivity Filters Menu */}
      <section className="py-12 bg-white border-b border-gray-150 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto py-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-2 py-2.5 px-6 rounded-full font-bold text-sm shrink-0 transition-all ${
                  filter === cat 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "bg-gray-150 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat === "All" && <Grid className="w-4 h-4" />}
                {cat === "Irrigation" && <Droplets className="w-4 h-4" />}
                {cat === "Polyhouse" && <Sun className="w-4 h-4" />}
                {cat === "Solar Pumps" && <CloudRain className="w-4 h-4" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Top: Image Section */}
                  <div className="h-56 sm:h-64 relative overflow-hidden bg-gray-50 shrink-0">
                    <img 
                      src={project.img.trim()} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600/90 text-white backdrop-blur-sm shadow px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider block">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body: Info Section */}
                  <div className="p-6 flex flex-col justify-between flex-grow gap-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-green-700 text-xs font-extrabold uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                      
                      <h3 className="text-xl font-extrabold text-gray-950 tracking-tight leading-snug line-clamp-1">
                        {project.title.trim()}
                      </h3>

                      <p className="text-gray-650 text-sm leading-relaxed text-justify line-clamp-3">
                        {project.desc}
                      </p>
                    </div>

                    {/* Key specs highlight */}
                    <div className="border-t border-gray-100 pt-4 space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-bold uppercase">
                          {project.category === "Solar Pumps" ? "Capacity:" : 
                           project.category === "Irrigation" ? "Type:" : "Area / Size:"}
                        </span>
                        <span className="font-extrabold text-gray-800">{project.area}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-bold uppercase">
                          {project.category === "Solar Pumps" || project.category === "Irrigation" ? "Application:" : "Crop / Use:"}
                        </span>
                        <span className="font-extrabold text-[#12B76A] bg-green-50/50 px-2 py-0.5 rounded-md line-clamp-1 max-w-[150px] text-right">
                          {project.crop}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-bold uppercase">
                          {project.category === "Solar Pumps" ? "Energy Source:" : 
                           project.category === "Irrigation" ? "Location:" : "Subsidy note:"}
                        </span>
                        <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-150 text-[10px] text-right line-clamp-1 max-w-[170px]">
                          {project.subsidy}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gray-50 hover:bg-green-50 hover:text-green-700 text-gray-700 font-bold py-3 px-4 rounded-xl text-xs border border-gray-150 hover:border-green-200 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      <span>Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Specs Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col relative z-10 border border-gray-150"
            >
              {/* Top Image / Header */}
              <div className="h-48 sm:h-56 relative overflow-hidden bg-gray-50 shrink-0">
                <img 
                  src={selectedProject.img.trim()} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="bg-green-600/90 text-white backdrop-blur-sm shadow px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider block w-fit mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {selectedProject.title.trim()}
                  </h3>
                  <div className="flex items-center gap-1.5 text-green-300 text-xs font-bold mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur-sm transition-all focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-2">Project Description</h4>
                  <p className="text-gray-650 text-sm sm:text-base leading-relaxed text-justify">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-[#3b592d] text-white px-5 py-3.5 flex justify-between font-extrabold text-xs tracking-wider uppercase">
                    <span className="w-1/3">Item</span>
                    <span className="w-2/3">Technical Detail</span>
                  </div>
                  <div className="divide-y divide-gray-150 text-xs sm:text-sm">
                    {selectedProject.specs && selectedProject.specs.map((row, idx) => (
                      <div key={idx} className={`px-5 py-3 flex justify-between ${idx % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                        <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider text-[11px]">{row.label}</span>
                        <span className="w-2/3 text-gray-650 leading-relaxed whitespace-pre-line">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 shrink-0 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/917384854555?text=${encodeURIComponent(`Hello Green View, I am interested in a setup similar to your completed project: "${selectedProject.title.trim()}" in ${selectedProject.location}. Can we discuss pricing and subsidy options?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#12B76A] hover:bg-[#0f9f5c] text-white font-extrabold text-sm py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Inquire about this setup on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm py-3.5 px-6 rounded-2xl border border-gray-150 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sourcing Promise info box */}
      <section className="py-16 bg-[#fafbfa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-gray-150 p-8 sm:p-12 rounded-3.5xl space-y-4">
          <h4 className="text-xl font-bold text-gray-950">Need more proof of results?</h4>
          <p className="text-gray-650 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We hold extensive lists of completed project references across nearly all West Bengal blocks and districts. Reach our local coordination team on WhatsApp to see live videos or local site permissions!
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/917384854555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-extrabold py-3.5 px-8 rounded-2xl text-sm transition-colors inline-block"
            >
              Request Custom Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
