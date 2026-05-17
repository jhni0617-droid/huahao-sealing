export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  name: string
  model: string
  category: string
  description: string
  shortDesc: string
  specs: ProductSpec[]
  applications: string[]
  materials: string[]
  features: string[]
  faq: { q: string; a: string }[]
  image?: string
}

export const products: Product[] = [
  {
    slug: "109-series",
    name: "109 Type Mechanical Seal",
    model: "109 Series",
    category: "Mechanical Seals",
    description:
      "The 109 series is a versatile, high-performance mechanical seal designed for general-purpose rotary equipment. Widely recognized in the pump industry for its reliability and ease of installation, it features a balanced design that handles moderate pressures and temperatures across a broad range of fluid handling applications.",
    shortDesc: "General-purpose mechanical seal for pumps, balanced design for moderate pressures.",
    specs: [
      { label: "Model", value: "109 / 109B" },
      { label: "Pressure Range", value: "≤ 1.2 MPa" },
      { label: "Temperature Range", value: "-20°C ~ 180°C" },
      { label: "Speed", value: "≤ 3000 rpm" },
      { label: "Media", value: "Water, Oil, Chemicals" },
      { label: "Material (Seal Face)", value: "Carbon Graphite / SiC" },
      { label: "Material (O-Ring)", value: "NBR / EPDM / Viton" },
    ],
    applications: ["Centrifugal pumps", "Water treatment", "HVAC systems", "General industry"],
    materials: ["Carbon graphite", "Silicon carbide", "Tungsten carbide", "Stainless steel 304/316"],
    features: [
      "Balanced design for reliable performance",
      "Interchangeable with major international standards",
      "Self-lubricating carbon graphite face",
      "Corrosion-resistant metal components",
      "Easy installation and maintenance",
    ],
    faq: [
      { q: "What is the standard material for the 109 seal face?", a: "The standard configuration uses a carbon graphite rotating face against a silicon carbide stationary face, offering excellent self-lubricating properties and wear resistance." },
      { q: "Can the 109 series handle abrasive media?", a: "For abrasive media, we recommend upgrading to silicon carbide vs silicon carbide faces with appropriate flush plans. Standard carbon vs SiC is suitable for clean fluids." },
    ],
  },
  {
    slug: "bia-series",
    name: "BIA Type Seal Ring",
    model: "BIA Series",
    category: "Seal Rings",
    description:
      "The BIA series carbon graphite seal ring is engineered for high-temperature and high-speed rotary applications. Its advanced material formulation provides exceptional dimensional stability and consistent sealing performance under demanding operating conditions.",
    shortDesc: "High-temperature carbon graphite seal ring for demanding rotary applications.",
    specs: [
      { label: "Model", value: "BIA" },
      { label: "Temperature Range", value: "-40°C ~ 280°C" },
      { label: "Pressure", value: "≤ 0.8 MPa" },
      { label: "Speed", value: "≤ 5000 rpm" },
      { label: "Material", value: "Impregnated Carbon Graphite" },
      { label: "Application", value: "Rotary shafts, mixers" },
    ],
    applications: ["Agitators", "Mixers", "Compressors", "High-speed rotors"],
    materials: ["Anti-oxidation carbon graphite", "Resin-impregnated graphite", "Metal-impregnated graphite"],
    features: [
      "Superior high-temperature stability",
      "Anti-oxidation treatment for extended life",
      "Low friction coefficient",
      "Self-lubricating at startup and shutdown",
      "Excellent chemical resistance",
    ],
    faq: [
      { q: "What is the maximum operating temperature for BIA series?", a: "The BIA series can operate continuously at temperatures up to 280°C with our anti-oxidation impregnated grade. For short-term peak loads, it can withstand up to 350°C." },
    ],
  },
  {
    slug: "58u-series",
    name: "58U Carbon Graphite Ring",
    model: "58U Series",
    category: "Carbon Graphite Rings",
    description:
      "The 58U series is a precision-machined carbon graphite seal ring designed for pump and valve applications. It offers excellent dimensional accuracy and consistent sealing performance, making it a popular choice for OEM and replacement applications.",
    shortDesc: "Precision carbon graphite ring for pumps and valves.",
    specs: [
      { label: "Model", value: "58U" },
      { label: "Material", value: "Carbon Graphite" },
      { label: "Temperature Range", value: "-20°C ~ 220°C" },
      { label: "Pressure", value: "≤ 1.0 MPa" },
      { label: "Hardness", value: "60-80 Shore D" },
      { label: "Application", value: "Pumps, valves" },
    ],
    applications: ["Centrifugal pumps", "Gate valves", "Mixers", "Feed water pumps"],
    materials: ["Electrographite", "Resin-impregnated carbon", "Antimony-impregnated carbon"],
    features: [
      "High-precision machining with tight tolerances",
      "Consistent batch-to-batch quality",
      "Available in multiple impregnation grades",
      "Compatible with various mating face materials",
    ],
    faq: [
      { q: "What impregnation options are available for 58U?", a: "We offer resin impregnation for general service, metal impregnation (antimony or copper) for higher temperature applications, and our proprietary anti-oxidation treatment for extended service life." },
    ],
  },
  {
    slug: "59u-series",
    name: "59U Inlaid Graphite Ring",
    model: "59U Series",
    category: "Inlaid Graphite Rings",
    description:
      "The 59U series features a carbon graphite ring inlaid with specialized fillings for enhanced performance. The unique inlay design provides superior sealing at the contact interface while maintaining the self-lubricating properties of carbon graphite.",
    shortDesc: "Inlaid carbon graphite ring for enhanced sealing performance.",
    specs: [
      { label: "Model", value: "59U" },
      { label: "Material", value: "Inlaid Carbon Graphite" },
      { label: "Temperature Range", value: "-40°C ~ 250°C" },
      { label: "Pressure", value: "≤ 1.5 MPa" },
      { label: "Speed", value: "≤ 4000 rpm" },
      { label: "Special Feature", value: "Inlaid sealing surface" },
    ],
    applications: ["Chemical pumps", "High-pressure seals", "Refinery equipment", "Marine pumps"],
    materials: ["Inlaid carbon graphite", "Silicon carbide inlay", "Tungsten carbide inlay"],
    features: [
      "Inlaid design for reduced leakage",
      "Enhanced wear resistance at sealing interface",
      "Lower friction than standard carbon grades",
      "Extended service life in abrasive conditions",
    ],
    faq: [
      { q: "How does the inlaid design improve performance?", a: "The inlay creates a harder, more wear-resistant surface at the critical sealing interface while the carbon graphite body maintains excellent thermal conductivity and self-lubrication." },
    ],
  },
  {
    slug: "104-series",
    name: "104 Type Seal Ring",
    model: "104 Series",
    category: "Seal Rings",
    description:
      "The 104 series carbon graphite seal ring is a compact, high-performance sealing solution designed for limited-space installations. Its optimized geometry provides excellent sealing force distribution while minimizing axial space requirements.",
    shortDesc: "Compact carbon graphite seal ring for space-limited installations.",
    specs: [
      { label: "Model", value: "104" },
      { label: "Material", value: "Carbon Graphite" },
      { label: "Temperature Range", value: "-20°C ~ 200°C" },
      { label: "Pressure", value: "≤ 0.8 MPa" },
      { label: "Speed", value: "≤ 3500 rpm" },
    ],
    applications: ["Small pumps", "Automotive", "Household appliances", "Light industrial"],
    materials: ["Carbon graphite", "Resin-impregnated carbon"],
    features: [
      "Compact axial design",
      "Cost-effective for high-volume applications",
      "Reliable sealing performance",
      "Easy replacement",
    ],
    faq: [
      { q: "Is the 104 series suitable for high-volume OEM applications?", a: "Yes, the 104 series is designed for cost-effective high-volume production while maintaining consistent quality. It's an excellent choice for OEM applications where space is constrained." },
    ],
  },
  {
    slug: "m7n-series",
    name: "M7N Mechanical Seal",
    model: "M7N Series",
    category: "Mechanical Seals",
    description:
      "The M7N series is a heavy-duty mechanical seal featuring advanced carbon graphite technology for the most demanding industrial applications. Designed with a robust drive mechanism and premium material selection, it delivers exceptional reliability in continuous operation.",
    shortDesc: "Heavy-duty mechanical seal with premium carbon graphite technology.",
    specs: [
      { label: "Model", value: "M7N" },
      { label: "Pressure Range", value: "≤ 2.0 MPa" },
      { label: "Temperature Range", value: "-40°C ~ 220°C" },
      { label: "Speed", value: "≤ 4000 rpm" },
      { label: "Media", value: "Water, Oil, Chemicals, Slurries" },
      { label: "Material (Seal Face)", value: "Carbon Graphite / SiC / TC" },
    ],
    applications: ["Heavy-duty pumps", "Chemical processing", "Oil & gas", "Mining"],
    materials: ["Premium carbon graphite", "Silicon carbide", "Tungsten carbide", "Hastelloy"],
    features: [
      "Heavy-duty drive mechanism",
      "Advanced cooling geometry",
      "Premium material grades for extended life",
      "Suitable for high-viscosity media",
      "Field-replaceable seal faces",
    ],
    faq: [
      { q: "What makes M7N suitable for heavy-duty applications?", a: "The M7N features a robust drive mechanism that prevents torque slip, advanced cooling channels for heat dissipation, and the option for tungsten carbide faces that withstand abrasive and corrosive environments." },
    ],
  },
  {
    slug: "204-series",
    name: "204B Carbon Graphite Bearing",
    model: "204 / 204B Series",
    category: "Carbon Graphite Bearings",
    description:
      "The 204 and 204B series carbon graphite bearings are designed for high-load, low-speed applications where traditional lubricants cannot be used. These self-lubricating bearings provide reliable operation in submerged, high-temperature, or clean-environment applications.",
    shortDesc: "Self-lubricating carbon graphite bearing for submerged and high-temperature use.",
    specs: [
      { label: "Model", value: "204 / 204B" },
      { label: "Material", value: "Carbon Graphite" },
      { label: "Temperature Range", value: "-40°C ~ 300°C" },
      { label: "Max Load", value: "≤ 5 MPa (static)" },
      { label: "Speed", value: "≤ 1500 rpm" },
      { label: "Application", value: "Submerged bearings, guide bearings" },
    ],
    applications: ["Submerged pumps", "Marine shaft bearings", "Guide bearings", "High-temperature conveyors"],
    materials: ["Anti-oxidation carbon graphite", "Metal-impregnated graphite", "Carbon-carbon composite"],
    features: [
      "Self-lubricating — no external lubrication needed",
      "Operates in submerged or dry conditions",
      "Excellent dimensional stability at high temperatures",
      "Corrosion-resistant in marine environments",
      "Low coefficient of friction",
    ],
    faq: [
      { q: "Can 204B bearings operate without external lubrication?", a: "Yes, carbon graphite has inherent self-lubricating properties. The 204B series forms a thin transfer film on the mating surface, providing a low-friction interface without external lubricants." },
    ],
  },
  {
    slug: "206-series",
    name: "206 Mechanical Seal",
    model: "206 Series",
    category: "Mechanical Seals",
    description:
      "The 206 series mechanical seal is a double-balanced design for high-pressure and volatile media applications. It features a carbon graphite primary seal face and can be configured with various flush plans for optimal performance.",
    shortDesc: "Double-balanced mechanical seal for high-pressure volatile media.",
    specs: [
      { label: "Model", value: "206" },
      { label: "Pressure Range", value: "≤ 3.0 MPa" },
      { label: "Temperature Range", value: "-20°C ~ 200°C" },
      { label: "Speed", value: "≤ 3500 rpm" },
      { label: "Configuration", value: "Double seal (tandem or back-to-back)" },
      { label: "Media", value: "Volatile hydrocarbons, chemicals" },
    ],
    applications: ["Refinery pumps", "Chemical transfer", "LPG/CNG service", "High-pressure boiler feed"],
    materials: ["Carbon graphite", "Silicon carbide", "Tungsten carbide", "Hastelloy C-276"],
    features: [
      "Double balanced design for high pressure",
      "Tandem or back-to-back configurations",
      "API flush plan compatibility",
      "Carbon graphite primary seal for reliability",
      "Leakage monitoring port standard",
    ],
    faq: [
      { q: "What is the advantage of a double seal configuration?", a: "Double seals provide an additional layer of safety for hazardous or volatile media. The buffer fluid between the seals lubricates both seal faces and provides a barrier that prevents process fluid leakage to the atmosphere." },
    ],
  },
  {
    slug: "58b-series",
    name: "58B Seal Ring",
    model: "58B Series",
    category: "Carbon Graphite Rings",
    description:
      "The 58B series is a heavy-section carbon graphite seal ring designed for larger shaft diameters and higher load requirements. Its robust cross-section provides enhanced mechanical strength while maintaining the excellent sealing characteristics of carbon graphite.",
    shortDesc: "Heavy-section carbon graphite ring for large shafts and high loads.",
    specs: [
      { label: "Model", value: "58B" },
      { label: "Material", value: "Heavy-section Carbon Graphite" },
      { label: "Temperature Range", value: "-20°C ~ 250°C" },
      { label: "Pressure", value: "≤ 1.2 MPa" },
      { label: "Shaft Size", value: "Up to 300 mm" },
      { label: "Grade Options", value: "Standard, Metal-impregnated, Anti-oxidation" },
    ],
    applications: ["Large centrifugal pumps", "Marine propulsion shafts", "Industrial mixers", "Hydro turbines"],
    materials: ["High-strength carbon graphite", "Bronze-impregnated graphite", "Anti-oxidation graphite"],
    features: [
      "High mechanical strength for large diameters",
      "Custom sizes available up to 300 mm shaft diameter",
      "Multiple impregnation options for different media",
      "Thermal shock resistant",
    ],
    faq: [
      { q: "What is the maximum shaft diameter for the 58B series?", a: "The 58B series can be manufactured for shaft diameters up to 300 mm. Custom sizes beyond this range are available upon request with extended lead times." },
    ],
  },
  {
    slug: "155-series",
    name: "155 Type Seal Ring",
    model: "155 Series",
    category: "Seal Rings",
    description:
      "The 155 series carbon graphite seal ring is a standardized industrial seal designed for interchangeability with major international seal brands. It offers a balance of performance and economy for general industrial sealing applications.",
    shortDesc: "Standardized carbon graphite seal ring with international interchangeability.",
    specs: [
      { label: "Model", value: "155" },
      { label: "Material", value: "Carbon Graphite" },
      { label: "Temperature Range", value: "-20°C ~ 200°C" },
      { label: "Pressure", value: "≤ 0.6 MPa" },
      { label: "Interchange", value: "Compatible with major international standards" },
    ],
    applications: ["General industrial pumps", "Agricultural equipment", "Water systems", "Light chemical"],
    materials: ["Carbon graphite", "Resin-impregnated carbon"],
    features: [
      "Internationally standardized dimensions",
      "Drop-in replacement for major brands",
      "Economical pricing",
      "Ready availability from stock",
    ],
    faq: [
      { q: "Which international brands is the 155 series interchangeable with?", a: "The 155 series is designed to dimensional standards compatible with John Crane, EagleBurgmann, Chesterton, and other major international mechanical seal brands. Please contact us with your specific dimensions for cross-reference." },
    ],
  },
]

export const categories = [
  { slug: "mechanical-seals", name: "Mechanical Seals", count: 0 },
  { slug: "carbon-graphite-rings", name: "Carbon Graphite Rings", count: 0 },
  { slug: "seal-rings", name: "Seal Rings", count: 0 },
  { slug: "inlaid-graphite-rings", name: "Inlaid Graphite Rings", count: 0 },
  { slug: "carbon-graphite-bearings", name: "Carbon Graphite Bearings", count: 0 },
]

// Count products per category
export function getCategoryCounts() {
  const counts: Record<string, number> = {}
  products.forEach((p) => {
    const catSlug = p.category.toLowerCase().replace(/\s+/g, "-")
    counts[catSlug] = (counts[catSlug] || 0) + 1
  })
  return counts
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === categorySlug)
}
