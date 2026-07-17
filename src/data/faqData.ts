export interface FAQItem {
  id: string;
  category: "pmsuryaghar" | "irrigation" | "polyhouse" | "solar";
  categoryLabel: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  // ==================== SERVICE 1: PM SURYA GHAR ====================
  {
    id: "psg-1",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Is PM Surya Ghar a real government scheme, or is this some kind of scam?",
    answer: "It's completely real. Launched by PM Modi on 15 February 2024, it's backed by ₹75,021 crore of central government funding — one of the largest rooftop solar programs in the world. The official portal is pmsuryaghar.gov.in. Green View Agro Tech is a registered vendor on this portal for both WBSEDCL and CESC areas. You can verify our registration directly on the government site before committing to anything."
  },
  {
    id: "psg-2",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "How much subsidy will I actually get?",
    answer: "₹30,000 for a 1 kW system, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above — this is the maximum subsidy, capped at 3 kW regardless of how much bigger your system is. The amount is transferred directly to your bank account after installation and DISCOM inspection — not through us."
  },
  {
    id: "psg-3",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Why does the subsidy stop increasing after 3 kW?",
    answer: "The subsidy structure is: ₹30,000 each for the first 2 kW (₹60,000 total) plus ₹18,000 for the 3rd kW, totalling ₹78,000. Beyond 3 kW, there is no additional central subsidy. You can still install a 4 or 5 kW system if your consumption justifies it, but you'll pay the full extra cost yourself."
  },
  {
    id: "psg-4",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Do I need to pay anything to register or apply?",
    answer: "No. Registration on the government portal is completely free, and our home visit and consultation are also free with zero obligation. You only pay for the actual solar system installation — and even then, only after we've shown you the exact subsidy amount and your net cost in writing."
  },
  {
    id: "psg-5",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "How long does the whole process take, from registration to subsidy in my account?",
    answer: "Typically 70–100 days (around 10–14 weeks) from your first visit to subsidy credit. DISCOM net-metering takes about 20–30 days, and once your system is commissioned, the subsidy is usually credited within 30–45 days. We track every stage so you're never left wondering what's happening."
  },
  {
    id: "psg-6",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Can I install solar panels myself, or do I need a vendor?",
    answer: "You can technically apply yourself on the portal, but you still need an MNRE-empanelled vendor to physically install the system and complete the technical documentation required for subsidy approval. Working with an unregistered installer means you do NOT get the subsidy — even if the panels work perfectly."
  },
  {
    id: "psg-7",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "What happens if my subsidy application gets rejected? Does that happen often?",
    answer: "Rejections happen, but almost always due to avoidable paperwork errors — not because someone is ineligible. The most common causes are: incorrect IFSC code or bank account number, mismatched names across Aadhaar/PAN/electricity bill, non-DCR-compliant panels, or incomplete net metering documentation. Because we handle the entire documentation process ourselves, these errors are exactly what we exist to prevent."
  },
  {
    id: "psg-8",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "What are \"DCR panels\" and why do they matter?",
    answer: "DCR stands for Domestic Content Requirement — these are solar panels manufactured in India using India-made solar cells. For most residential subsidy applications, DCR-compliant panels are mandatory. A system can work perfectly on non-DCR panels but still get the subsidy application rejected. We only install DCR-compliant panels specifically to protect your subsidy eligibility."
  },
  {
    id: "psg-9",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "I live in Kolkata under CESC. Does this scheme apply to me, or only WBSEDCL areas?",
    answer: "Yes, CESC customers are fully eligible. We are registered vendors for both WBSEDCL and CESC areas across West Bengal, so your location within the state doesn't limit your eligibility."
  },
  {
    id: "psg-10",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "What if my electricity connection is in my father's or husband's name, not mine?",
    answer: "The subsidy applicant generally needs to match the name on both the electricity connection and the property ownership documents. If the connection is in a family member's name, we can usually still proceed if they apply jointly or transfer minimal documentation — we'll walk you through the exact solution during your free home visit."
  },
  {
    id: "psg-11",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Will my electricity bill become completely zero after installation?",
    answer: "For most households, the bill drops to near-zero or goes into surplus credit — but \"completely zero\" depends on your system size matching your consumption. A 2–3 kW system typically generates 8–13 units a day, which covers most domestic households. We calculate your exact consumption during the home visit and recommend the right size — not just the size that gets maximum subsidy."
  },
  {
    id: "psg-12",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "What is net metering, and why do I need it?",
    answer: "Net metering is the bidirectional meter that tracks both the electricity you draw from the grid and the surplus electricity you send back. Without it, your solar system can't legally connect to the grid, and you can't earn credit for excess power. We apply for and install your net meter as part of the standard process — it's not optional, and it's not an extra add-on cost we'll surprise you with later."
  },
  {
    id: "psg-13",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Will solar panels still work during a power cut?",
    answer: "No — standard grid-tied systems (without battery storage) automatically shut off during a power cut. This is a mandatory safety requirement to protect linemen working on the grid, not a flaw in your system. If backup power during outages matters to you, we can discuss a battery storage add-on during your home visit."
  },
  {
    id: "psg-14",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Can I get a loan if I can't pay the remaining amount upfront?",
    answer: "Yes. Under PM Surya Ghar, loans are available collateral-free up to ₹2 lakh, and up to ₹6 lakh using the solar system itself as security. Interest rates run around 7% per annum (tied to the RBI repo rate), and you apply digitally through the JanSamarth portal (jansamarth.in). We guide you through this application at no extra charge."
  },
  {
    id: "psg-15",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "How much rooftop space do I actually need?",
    answer: "Roughly 100 sq ft per kW. A 1 kW system needs about 100 sq ft, a 3 kW system about 300 sq ft. We measure your exact available space (accounting for shadows, water tanks, and obstructions) during the free home visit and tell you the maximum system size your roof can realistically support."
  },
  {
    id: "psg-16",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "What documents do I need to apply?",
    answer: "Aadhaar card, your latest electricity bill, property ownership proof (sale deed, mutation certificate, or property tax receipt), bank account details (passbook or cancelled cheque), PAN card, a passport-size photo, and rooftop photographs — which we take ourselves during the visit. That's the complete list."
  },
  {
    id: "psg-17",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "Can a tenant apply for the subsidy, or does the property have to be owned?",
    answer: "You must own the property to receive the subsidy. Tenants are not eligible, even with the property owner's permission, because the subsidy is tied to land/property ownership documents, not just the electricity connection."
  },
  {
    id: "psg-18",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "How long do solar panels actually last, and what's the maintenance like?",
    answer: "Quality panels last 25+ years with minimal maintenance — mainly periodic cleaning (dust and bird droppings reduce efficiency). Most systems pay for themselves within 3–5 years through bill savings, meaning you get roughly 20 years of essentially free electricity after that."
  },
  {
    id: "psg-19",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "What's the difference between you and any random local solar installer?",
    answer: "The critical difference is government registration. Only MNRE-empanelled, officially registered vendors can process your subsidy claim. A non-registered installer can sell and install panels, but you will not receive the ₹78,000 subsidy — no matter how good the installation is. We're registered for both WBSEDCL and CESC, and we manage your entire journey, not just the installation day."
  },
  {
    id: "psg-20",
    category: "pmsuryaghar",
    categoryLabel: "PM Surya Ghar",
    question: "If I've already taken a solar subsidy before for a different property, can I apply again for a new home?",
    answer: "Generally, a single applicant or household is eligible only once under this scheme — it's designed to reach as many new households as possible, not to fund repeat installations for the same person. We verify your eligibility status as part of the free home visit before any commitment is made."
  },

  // ==================== SERVICE 2: IRRIGATION SYSTEMS ====================
  {
    id: "irr-1",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "What's the actual difference between drip and sprinkler irrigation, and which one do I need?",
    answer: "Drip irrigation delivers water drop by drop directly to the plant's root zone through emitters — almost zero evaporation, 90–95% water-use efficiency. Sprinkler irrigation sprays water through the air like rainfall, covering wide areas but losing more water to evaporation and wind drift (80–85% efficiency). Drip is better for row crops, orchards, and vegetables; sprinklers work well for large open fields, lawns, and crops planted close together like wheat or fodder. We recommend based on your actual crop and field layout during the site visit — not a one-size-fits-all answer."
  },
  {
    id: "irr-2",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "How much water will I actually save by switching to drip irrigation?",
    answer: "Drip irrigation typically achieves 90–100% water-use efficiency compared to 50–70% for sprinklers and just 30–40% for traditional flood irrigation. In practical terms, most farmers report 30–60% reduction in water consumption after switching from flood to drip, depending on soil type and crop."
  },
  {
    id: "irr-3",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "What's the cost per acre for a drip irrigation system?",
    answer: "Costs vary by crop spacing and field layout, but as a rough benchmark, a drip system for vegetable farming runs approximately ₹60,000–75,000 per acre, while wider-spaced crops like fruit orchards can be installed for around ₹35,000 per acre. We give you an exact, written quote after assessing your specific field — these are only ballpark figures to plan around."
  },
  {
    id: "irr-4",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Will drip irrigation actually increase my yield, or just save water?",
    answer: "Both. Because water and moisture stay consistent at the root zone (instead of the feast-or-famine cycle of flood irrigation), plants experience less stress, develop healthier roots, and typically show yield improvements of 20–50% across crops like cereals, cotton, and horticulture. For high-value crops like capsicum, fertigation through drip systems has shown yield gains of 29–46% in field trials."
  },
  {
    id: "irr-5",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Does drip irrigation work on uneven or sloped land?",
    answer: "Yes — this is actually one of drip irrigation's biggest advantages over flood irrigation. Because water moves through pressurized tubing rather than relying on gravity flow across the surface, drip systems work effectively on sloped, terraced, or irregular terrain where flood irrigation would create uneven water distribution and erosion."
  },
  {
    id: "irr-6",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "How often do drip lines clog, and how do I prevent it?",
    answer: "Clogging is the most common maintenance issue, usually caused by dirty filters, sediment in the water supply, or algae growth. We install proper filtration as part of every system, but you'll also need to: clean filters regularly, flush lines periodically to remove sediment, and use treated water if your source has high salt or particulate content. We walk you through this maintenance routine after installation."
  },
  {
    id: "irr-7",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Can I get a government subsidy on irrigation equipment?",
    answer: "Yes — micro-irrigation subsidies are available through central and state schemes, with the support level varying significantly by state and farmer category. Small and marginal farmers in many states can access subsidies of 55–100% in some cases, depending on land holding size. We help eligible farmers check what's available and assist with the documentation."
  },
  {
    id: "irr-8",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "What crops actually benefit from drip irrigation, and what doesn't need it?",
    answer: "Drip irrigation works best for vegetables, fruit orchards, sugarcane, cotton, spices, and oilseeds — essentially anything planted in rows or individual spacing. Crops planted very densely, like paddy nurseries or turf grass, are usually better served by sprinkler or flood methods. We assess your specific crop mix and won't recommend drip if it's not the right fit."
  },
  {
    id: "irr-9",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "How long does a drip irrigation system last before I need to replace it?",
    answer: "With proper maintenance, the main pipes and fittings last 10–15 years. The drip tape or emitters themselves typically need replacement every 5–7 years depending on quality and sun exposure, since UV degrades plastic over time. We use UV-stabilized materials specifically to extend this lifespan."
  },
  {
    id: "irr-10",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Can the system also deliver fertilizer, or just water?",
    answer: "Yes — this is called fertigation, where liquid fertilizer is mixed into the irrigation water and delivered directly to the root zone along with water. This significantly improves nutrient efficiency and reduces fertilizer waste compared to broadcast application. We can design your system with fertigation capability built in from the start."
  },
  {
    id: "irr-11",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "What water pressure do I need, and what if my source has low pressure?",
    answer: "Standard drip systems need roughly 8–12 PSI, achievable through gravity-fed tanks, electric pumps, or your existing borewell connection with a pressure-boosting pump if needed. If your water source has low natural pressure, we install the appropriate pump as part of the system design — this is assessed during your site survey."
  },
  {
    id: "irr-12",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "How is sprinkler emitter spacing decided — does it depend on my soil type?",
    answer: "Yes — spacing depends on your soil's infiltration rate. Sandy soils need closer spacing (around 30–60 cm) because water moves through quickly, while clay soils can use wider spacing (up to 1.3 m) since water spreads more horizontally. We test your soil and design the spacing layout specifically for your conditions, not a generic template."
  },
  {
    id: "irr-13",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Can I install drip irrigation on a small plot, like half an acre, or is it only for large farms?",
    answer: "Drip irrigation scales down well — it's actually one of the most efficient methods for small plots precisely because of its precision. Many of our customers irrigate as little as a quarter-acre vegetable plot. The cost per acre stays roughly proportional, so smaller installations are entirely practical."
  },
  {
    id: "irr-14",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "What's the difference between mini sprinklers, micro jets, and standard drip emitters?",
    answer: "Standard drip emitters deliver water drop by drop directly at the plant base — maximum precision, minimal coverage radius. Mini sprinklers and micro jets spray a small radius of water (a few feet), useful for orchards or nurseries where roots spread wider than a single drip point but full sprinkler coverage isn't needed. We choose based on your specific crop's root structure."
  },
  {
    id: "irr-15",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Do I need to flush and maintain the system myself, or do you provide ongoing service?",
    answer: "Basic maintenance — periodic filter cleaning and visual inspection — is something we teach you to do yourself, since it takes only minutes. For anything beyond that (clogged emitters, pipe damage, pump issues), our team remains reachable and can do scheduled or on-call service visits."
  },
  {
    id: "irr-16",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "How quickly can the system be installed once I decide to go ahead?",
    answer: "For a standard 1–2 acre drip irrigation setup, installation typically takes a few days from material delivery to system completion. We give you a specific timeline once your design is finalized, based on field size and complexity."
  },
  {
    id: "irr-17",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Will drip irrigation reduce weeds and pest problems too, or is that a myth?",
    answer: "It's real, not a myth. Because drip irrigation only wets the immediate root zone instead of the entire field surface, weed seeds elsewhere in the field get far less moisture to germinate. Additionally, since foliage stays dry (unlike sprinkler systems that wet leaves), there's reduced risk of fungal diseases that thrive in moist leaf conditions."
  },
  {
    id: "irr-18",
    category: "irrigation",
    categoryLabel: "Irrigation Systems",
    question: "Can I expand the system later if I bring more land under cultivation?",
    answer: "Yes — drip and sprinkler systems are modular by design. We can plan your initial installation with future expansion in mind (correctly sized main lines and water source capacity), making it straightforward to add zones later without redesigning the entire system."
  },

  // ==================== SERVICE 3: POLYHOUSE CONSTRUCTION ====================
  {
    id: "poly-1",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "What's the actual difference between a polyhouse and a greenhouse?",
    answer: "In practice, the terms are often used interchangeably, but technically: a greenhouse uses glass as the covering material, while a polyhouse uses UV-stabilized polyethylene film. Polyhouses are more economical and more common in India, while glasshouses are more durable and typically used in colder climates with snow."
  },
  {
    id: "poly-2",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "How much does it cost to build a polyhouse per acre?",
    answer: "For a standard naturally ventilated polyhouse (the most common, cost-effective type), turnkey cost typically runs ₹32–38 lakh per acre, including the structure, poly film, drip irrigation, and labor. A more advanced fan-and-pad climate-controlled system can run ₹75–85 lakh per acre. Smaller units cost more per square meter due to fixed overheads — we give you an exact quote based on your specific area and specifications."
  },
  {
    id: "poly-3",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Can I get a government subsidy on polyhouse construction, and how much?",
    answer: "Yes, subsidies typically range from 50% to as high as 90% depending on your state, farmer category (general/SC/ST), and the specific scheme — National Horticulture Board (NHB), National Horticulture Mission (NHM), or state-level horticulture department programs. We help you identify which schemes you qualify for and assist with the documentation."
  },
  {
    id: "poly-4",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "What's the actual process to claim the subsidy — is it paid upfront or after construction?",
    answer: "Most subsidy schemes use a credit-linked, back-ended model. This means you typically can't self-finance 100% and claim cash back — you take a bank term loan (with minimum margin money), the bank pays the contractor as work progresses, and once a Joint Inspection Team verifies the completed structure matches the approved project report, the government releases the subsidy to your loan account. The full process typically takes 6–12 months from application to fund release."
  },
  {
    id: "poly-5",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Why do subsidy applications for polyhouses sometimes get rejected or delayed?",
    answer: "The most common mistake is starting construction before receiving formal approval — you generally cannot begin building until you've received a \"Letter of Intent\" from the relevant authority; building first and applying later disqualifies you. Other issues include using non-compliant materials (like non-B-Class GI pipes) or having a project report with unrealistic costs that doesn't match your actual bank support. We handle the paperwork sequence correctly from day one to avoid this."
  },
  {
    id: "poly-6",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "How long does the whole process take — from deciding to build, to the polyhouse being operational?",
    answer: "A commercial polyhouse project typically takes 6–9 months from initial planning to planting your first crop. This includes site selection, soil and water testing, project report preparation, subsidy approval, and the actual construction, which itself usually takes a few weeks once materials are on site."
  },
  {
    id: "poly-7",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "How long does the structure actually last before it needs major repair?",
    answer: "The GI pipe structural frame typically lasts 10–15 years with proper care. The polyethylene covering film has a shorter lifespan — usually 3–5 years — depending on UV exposure and film quality, after which it needs replacement. We use quality UV-stabilized film specifically to maximize this lifespan."
  },
  {
    id: "poly-8",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "What crops actually make sense to grow in a polyhouse — will I make a profit?",
    answer: "High-value crops with strong, stable market demand work best — colored capsicum (bell pepper) is often recommended for new growers because it has consistent demand and is less sensitive to manage than crops like roses. Cut flowers, tomatoes, cucumbers, and exotic vegetables are also common choices. Profitability depends heavily on your market access — we recommend calculating your specific ROI before committing, and we can help you think through crop selection based on your local market."
  },
  {
    id: "poly-9",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Is polyhouse farming something I can manage part-time, or does it require full-time attention?",
    answer: "It requires genuinely active, daily management — monitoring temperature, humidity, EC/pH levels in fertigation, and pest scouting are not occasional tasks. If you have another full-time job, you'll need to hire a trained farm manager or agronomist to be on-site regularly. This isn't a passive investment."
  },
  {
    id: "poly-10",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "How much water does a polyhouse actually save compared to open-field farming?",
    answer: "Because polyhouses are paired with drip irrigation as standard practice, water savings of 40–60% compared to open-field farming are typical. This also makes polyhouse cultivation viable in water-scarce regions where open farming would be much more difficult."
  },
  {
    id: "poly-11",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Does a polyhouse really protect against pests, or do I still need pesticides?",
    answer: "The controlled, partially enclosed environment combined with insect netting at entry points significantly reduces pest entry — many growers report meaningfully lower pesticide costs compared to open fields. You'll still need pest management, but the frequency and intensity required is generally much lower, and organic/biological controls become more practical to manage in a contained space."
  },
  {
    id: "poly-12",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "What's the difference between naturally ventilated and fan-and-pad polyhouses, and which do I need?",
    answer: "A naturally ventilated polyhouse relies on roof vents and side openings for airflow — no electricity needed, lower cost, and the most common choice for first-time growers in India. A fan-and-pad system uses mechanical fans and evaporative cooling pads for tighter climate control — better for export-quality crops or sensitive plants like orchids, but at significantly higher cost (roughly double). We help you decide based on your crop choice and budget."
  },
  {
    id: "poly-13",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Can I start small and expand later, or do I need to commit to a large area upfront?",
    answer: "You can start small — polyhouse units as compact as 500–1,000 sq meters are workable, allowing you to gain experience and confirm profitability before expanding. Many successful growers started small and scaled up gradually based on results."
  },
  {
    id: "poly-14",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "What land ownership documents do I need to apply for a polyhouse subsidy?",
    answer: "You generally need clear agricultural land ownership rights in your own name (or a registered long-term lease), and for many subsidy schemes, the available land must be at least twice the proposed polyhouse area. We verify your specific documentation requirements with you before starting the application."
  },
  {
    id: "poly-15",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "What's the actual breakdown of what's included in the polyhouse structure?",
    answer: "The complete structure includes foundation pipes, columns and arches, purlins and gutters (the structural skeleton), aluminium profile grippers and UV-stabilized polyethylene sheet covering, ventilation systems (vents, exhaust fans), foggers/misters for humidity control, internal drip irrigation, and — for advanced setups — fan-and-pad cooling. We source quality materials for all of these and install the complete integrated system, not just the bare frame."
  },
  {
    id: "poly-16",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "How much GST applies to polyhouse construction, and is that included in my quote?",
    answer: "Greenhouse and polyhouse construction services attract 18% GST, which many farmers forget to budget for separately. We always show this clearly in our written quote so there are no surprises at the final invoice stage."
  },
  {
    id: "poly-17",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Does the government inspect the polyhouse after construction, and what happens if something doesn't match the approved plan?",
    answer: "Yes — a Joint Inspection Team comprising bank officials and horticulture/NHB officers physically visits the completed structure and verifies it matches your approved Detailed Project Report before subsidy release. This is exactly why we build precisely to the specifications in your approved project report — any deviation can delay or jeopardize your subsidy."
  },
  {
    id: "poly-18",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Will I need additional working capital beyond the construction cost?",
    answer: "Yes, and this is one of the most overlooked costs by first-time growers. Building the structure is roughly half the investment — you'll also need ongoing working capital for seeds, fertilizer, and labor until your first harvest generates revenue, typically 3–6 months depending on the crop. We recommend planning a separate working capital reserve (some farmers use a Kisan Credit Card limit specifically for this) alongside your construction loan."
  },
  {
    id: "poly-19",
    category: "polyhouse",
    categoryLabel: "Polyhouse Construction",
    question: "Can polyhouses be built on hilly or non-flat land, or does the site need to be perfectly level?",
    answer: "Site selection strongly favors level land with road access and electricity connectivity, since these significantly affect construction cost and ease of operation. Non-flat sites are possible but require additional civil work (leveling, terracing) that increases cost. We assess your specific site during the consultation and advise honestly if significant additional work will be needed."
  },

  // ==================== SERVICE 4: SOLAR PUMPING SYSTEMS ====================
  {
    id: "sol-1",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "What's the difference between a surface pump and a submersible pump, and which do I need?",
    answer: "A surface pump sits above ground and lifts water from sources where the water level is within about 15 meters — ponds, canals, shallow wells, storage tanks. A submersible pump is lowered into the water source itself and is used when water sits more than 15 meters deep, like deep borewells. Given how widespread deep groundwater extraction is in most of India, submersible pumps tend to be more commonly needed, but we assess your specific water source depth before recommending either."
  },
  {
    id: "sol-2",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "How much subsidy can I get on a solar pump under PM-KUSUM?",
    answer: "Under PM-KUSUM Component B, central government covers 30% of the benchmark cost, with state government typically matching another 30%, meaning farmers can pay as little as 10% upfront with the remaining 30% available as a bank loan — bringing total subsidy coverage up to 60–80% depending on your state and category. In some states, small and marginal farmers see even higher support."
  },
  {
    id: "sol-3",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "What capacity pump do I actually need for my farm?",
    answer: "This depends on your daily water requirement and your borewell or water source depth. A 3 HP or 5 HP pump is common for most small to medium farms, with the solar panel array sized to roughly match (e.g., a 3 HP pump generally needs about a 3 kW solar array). We calculate your exact requirement based on crop water need and field size during the site assessment — guessing the size wrong either under-delivers water or wastes money on excess capacity."
  },
  {
    id: "sol-4",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Do I need an existing borewell, or can you also drill one for me?",
    answer: "For most subsidy schemes (including PM-KUSUM Component B), an existing functional borewell or water source is typically required as part of eligibility — the scheme is designed to solarize irrigation for farmers who already have water access but lack reliable power. If you don't yet have a borewell, that's a separate conversation we can discuss, but it generally falls outside standard subsidy coverage."
  },
  {
    id: "sol-5",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "How much will I actually save compared to running a diesel pump?",
    answer: "Diesel pump running costs typically range ₹3,000–8,000 per month depending on usage. A solar pump has effectively zero fuel cost after installation — once it's running, your irrigation costs drop to near zero, with most farmers seeing payback on their net investment (after subsidy) within roughly 2 years."
  },
  {
    id: "sol-6",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Does the solar pump work on cloudy or rainy days?",
    answer: "Standard solar pumps run on direct sunlight without battery storage, so output drops significantly on heavily overcast days and stops at night. Since most irrigation needs in India happen during daylight hours anyway, this generally isn't a major limitation for most farms — but if you need guaranteed water access regardless of weather, a hybrid system with grid backup is worth discussing."
  },
  {
    id: "sol-7",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Are solar pumps AC or DC, and does it matter which I choose?",
    answer: "Most modern solar pump kits, particularly those under PM-KUSUM, use DC (direct current) motors, which are the current standard for efficiency — they run directly off the solar panels without conversion losses. AC pumps are also available and may suit specific larger-scale setups. We recommend the right type based on your pump capacity and water requirement."
  },
  {
    id: "sol-8",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Can I sell surplus solar power back to the grid, like under PM Surya Ghar?",
    answer: "This applies specifically to PM-KUSUM Component C, where farmers solarize their existing grid-connected pumps — any surplus solar power generated beyond irrigation use is sold to the DISCOM at a pre-fixed tariff, creating an additional income stream. This is different from standalone Component B pumps (off-grid), which don't have grid feed-back capability since they're not grid-connected."
  },
  {
    id: "sol-9",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Will I get robbed or have my solar panels/pump stolen since they're out in the open field?",
    answer: "This is a genuine concern raised by farmers in remote or unguarded fields — solar motor theft has been reported in some regions. We discuss site security as part of installation planning and can recommend protective enclosures or mounting solutions appropriate to your specific location and risk level."
  },
  {
    id: "sol-10",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "How long do solar pumps and panels last, and what maintenance do they need?",
    answer: "Solar panels typically have a 20–25 year lifespan with minimal degradation. Quality pumps last at least 10 years with basic upkeep. Maintenance mainly involves keeping panels clean (dust significantly reduces output) and periodic checks on pump performance — there's no fuel system to service like with diesel pumps, which significantly reduces ongoing maintenance burden."
  },
  {
    id: "sol-11",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Can a group of farmers apply together, or is this only for individual landowners?",
    answer: "Yes — PM-KUSUM specifically allows Water User Associations, farmer groups, and cooperative/cluster-based irrigation systems to apply, not just individual farmers. Group applications can sometimes access larger combined pump capacity than what's available to a single individual under standard eligibility caps."
  },
  {
    id: "sol-12",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "What documents do I need to apply for the subsidy?",
    answer: "Typically: Aadhaar card, land ownership or holding certificate (or equivalent proof like Jamabandi/possession certificate showing the land is in your name), proof of an existing working borewell, and bank account details for subsidy transfer. Exact requirements vary slightly by state — we confirm your specific list during the consultation."
  },
  {
    id: "sol-13",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "I already have a diesel pump. Can I just add solar power to it, or do I need an entirely new pump?",
    answer: "This depends on your pump's compatibility — PM-KUSUM Component C specifically supports solarizing existing grid-connected pumps by adding solar panels above your current setup. For standalone off-grid replacement of an existing diesel pump (Component B), you'd typically install a new solar pump system designed to match your water requirements, replacing the diesel unit entirely."
  },
  {
    id: "sol-14",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "If I already received a solar pump subsidy years ago, can I apply again for a new or upgraded pump?",
    answer: "Generally, no — beneficiaries who have already received a solar pump under the scheme in recent years (the lookback period has historically been around 7 years) are not eligible to receive another one, regardless of capacity or location. This is designed to spread the subsidy benefit across the maximum number of farmers rather than repeat benefits to the same household."
  },
  {
    id: "sol-15",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "How is the pump powered when it's cloudy versus when there's full sun — does water output vary a lot during the day?",
    answer: "Yes, output naturally fluctuates with sunlight intensity throughout the day — peak flow happens around midday and tapers in early morning/late afternoon. This is normal and expected behavior for solar-direct systems; we size your system accounting for this variation so your total daily water delivery still meets your crop's needs."
  },
  {
    id: "sol-16",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Is a solar pump actually worth it for a small farm, or is this only economical at scale?",
    answer: "Solar pumps scale down effectively — even small and marginal farmers with modest land holdings are specifically prioritized under PM-KUSUM, and with subsidy coverage reaching 60-80% in many cases, the upfront farmer contribution becomes quite manageable even for smaller operations. We help you calculate the actual numbers for your specific farm size before you decide."
  },
  {
    id: "sol-17",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "What happens if the pump breaks down — who do I call, and how fast can it be fixed?",
    answer: "We remain your point of contact after installation, not just during the sale. Our technicians handle diagnosis and repair, and because we install the system ourselves (not subcontracted), we know exactly how your specific setup was configured — which speeds up troubleshooting considerably compared to calling a random local repair service."
  },
  {
    id: "sol-18",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Can solar pumps be used for purposes other than crop irrigation, like livestock water or drinking water supply?",
    answer: "Yes — solar pumps are commonly used for livestock watering troughs and even community drinking water access in remote areas, in addition to crop irrigation. The core mechanism (lifting water using solar-powered electricity) works the same regardless of the end use, though subsidy eligibility specifically under PM-KUSUM is tied to agricultural irrigation purposes."
  },
  {
    id: "sol-19",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Is the upfront cost before subsidy genuinely affordable, or is this still out of reach for most farmers?",
    answer: "A typical 2 HP solar pump system costs approximately ₹1,10,000–1,60,000 before subsidy. With PM-KUSUM and state programs reducing this by 60–80% for eligible small and marginal farmers, the actual out-of-pocket cost can come down to a fraction of that — often making the farmer's share genuinely accessible, especially combined with the 30% bank loan option."
  },
  {
    id: "sol-20",
    category: "solar",
    categoryLabel: "Solar Pumping",
    question: "Why should I choose solar over grid electricity if my farm already has an electric connection?",
    answer: "Grid power in many rural and agricultural areas is unreliable — often available only during certain hours, frequently at night when it's harder to irrigate. Solar gives you power exactly when you need it most (daylight hours, matching natural irrigation timing), eliminates monthly electricity bills for that pump, and is unaffected by load-shedding or grid outages. For farms where grid supply has historically been inconsistent, this reliability difference alone often justifies the switch."
  }
];
