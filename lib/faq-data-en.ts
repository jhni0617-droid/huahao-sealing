import type { CoreTable, FAQCategory, Formula } from "./faq-data"

// ===== 1. Core Reference Tables =====

export const enCoreTables: CoreTable[] = [
  {
    id: "impregnation-selection",
    title: "Impregnation Quick Selection Guide",
    description: "Select the best impregnation type based on operating medium and temperature",
    headers: ["Impregnation Type", "Temp. Range", "Corrosion Resistance", "Applicable Media", "Typical Applications"],
    rows: [
      ["Phenolic Resin", "-50°C ~ +200°C", "Good", "Water, oil, mild acid/alkali", "General pump seals, water pumps"],
      ["Furan Resin", "-50°C ~ +250°C", "Excellent", "Strong acid, strong alkali, organic solvents", "Chemical reactors, pickling equipment"],
      ["Epoxy Resin", "-50°C ~ +180°C", "Good", "Water, oil, alkali", "Food machinery, pharmaceutical equipment"],
      ["Antimony Metal", "-100°C ~ +450°C", "Moderate", "High-temp oil, steam", "High-temp pumps, turbine seals"],
      ["Babbitt Metal", "-100°C ~ +350°C", "Moderate", "High-temp oil, heavy load", "Heavy-duty bushings, large bearings"],
      ["Carbonized (Pure Carbon)", "-200°C ~ +600°C", "Excellent", "Almost all media (incl. vacuum)", "High-temp furnaces, semiconductor equipment"],
      ["PTFE Impregnation", "-100°C ~ +250°C", "Excellent", "Strongly corrosive media, food", "Pharmaceutical, chemical, food"],
    ],
  },
  {
    id: "sleeve-clearance",
    title: "Bushing Clearance Standard Calculation",
    description: "Recommended clearance values between graphite bushings and steel shafts at different diameters and speeds",
    headers: ["Shaft Dia. (mm)", "Speed < 500 rpm", "Speed 500~1500 rpm", "Speed 1500~3000 rpm", "Speed > 3000 rpm"],
    rows: [
      ["10 ~ 25", "0.08 ~ 0.12 mm", "0.10 ~ 0.15 mm", "0.15 ~ 0.20 mm", "0.20 ~ 0.30 mm"],
      ["25 ~ 50", "0.10 ~ 0.15 mm", "0.15 ~ 0.20 mm", "0.20 ~ 0.30 mm", "0.30 ~ 0.40 mm"],
      ["50 ~ 80", "0.12 ~ 0.18 mm", "0.18 ~ 0.25 mm", "0.25 ~ 0.35 mm", "0.35 ~ 0.50 mm"],
      ["80 ~ 120", "0.15 ~ 0.22 mm", "0.22 ~ 0.30 mm", "0.30 ~ 0.42 mm", "0.42 ~ 0.60 mm"],
      ["120 ~ 200", "0.18 ~ 0.28 mm", "0.25 ~ 0.38 mm", "0.35 ~ 0.50 mm", "0.50 ~ 0.70 mm"],
    ],
  },
  {
    id: "material-comparison",
    title: "Graphite Material Property Comparison",
    description: "Physical and mechanical properties of carbon graphite materials by forming process",
    headers: ["Property", "Molded Graphite", "Isostatic Graphite", "Fine Grain Graphite", "Coarse Grain Graphite", "High-Purity Graphite"],
    rows: [
      ["Bulk Density (g/cm³)", "1.70 ~ 1.80", "1.78 ~ 1.90", "1.65 ~ 1.75", "1.55 ~ 1.65", "1.70 ~ 1.85"],
      ["Compressive Strength (MPa)", "≥ 180", "≥ 200", "≥ 140", "≥ 100", "≥ 160"],
      ["Flexural Strength (MPa)", "≥ 60", "≥ 70", "≥ 45", "≥ 35", "≥ 55"],
      ["Shore Hardness (HS)", "60 ~ 80", "65 ~ 85", "50 ~ 65", "40 ~ 55", "55 ~ 75"],
      ["Porosity (%)", "8 ~ 15", "5 ~ 12", "12 ~ 18", "15 ~ 22", "10 ~ 15"],
      ["Max Temp. (°C)", "400", "500", "350", "300", "600"],
      ["Typical Uses", "Seal rings, bushings", "Premium mechanical seals", "General bearings", "Low-speed bearings", "High-temp, vacuum"],
    ],
  },
  {
    id: "medium-adaptation",
    title: "Medium Adaptation Material Selection",
    description: "Recommended carbon graphite grade and impregnation based on sealed medium type",
    headers: ["Medium Type", "Recommended Graphite Base", "Recommended Impregnation", "Max Temp.", "Notes"],
    rows: [
      ["Clean / Fresh Water", "Medium-fine graphite", "Phenolic Resin", "200°C", "Avoid sandy media"],
      ["Seawater", "Fine-grain high-density", "Furan Resin", "180°C", "Chloride-resistant impregnation needed"],
      ["Mineral / Hydraulic Oil", "Medium-grain graphite", "Phenolic Resin", "200°C", "Reduce clearance for low-viscosity oil"],
      ["Strong Acid (H₂SO₄, HCl)", "High-purity fine-grain", "Furan Resin", "250°C", "Avoid antimony impregnation with acid"],
      ["Strong Alkali (NaOH, KOH)", "Fine-grain graphite", "Furan Resin", "200°C", "Phenolic resin not recommended"],
      ["Organic Solvents", "Fine-grain graphite", "Furan / PTFE", "200°C", "Confirm solvent doesn't dissolve impregnant"],
      ["High-Temp Steam", "Fine-grain high-density", "Carbonized / Antimony", "600°C", "Watch for oxidation"],
      ["High-Temp Hot Gas", "High-purity graphite", "Carbonized", "600°C", "Limit oxygen < 1%"],
      ["Vacuum Environment", "Isostatic high-density", "Carbonized", "500°C", "Low outgassing required"],
      ["Food / Pharmaceutical", "Fine-grain graphite", "Food-grade resin", "180°C", "FDA/EU certified"],
    ],
  },
  {
    id: "temp-speed-limits",
    title: "Temperature & Speed Limit Parameters",
    description: "Operating limits of different material combinations under combined temperature and speed conditions",
    headers: ["Material Combination", "Max Temp.", "Max Linear Speed (m/s)", "PV Limit (MPa·m/s)", "Lubrication"],
    rows: [
      ["Carbon Graphite vs SiC", "200°C", "25", "18", "Oil/water lubrication"],
      ["Carbon Graphite vs Stainless Steel", "180°C", "15", "10", "Oil lubrication"],
      ["Antimony Graphite vs SiC", "450°C", "20", "15", "Oil/self-lubricating"],
      ["Carbonized Graphite vs SiC", "600°C", "30", "22", "Self-lubricating"],
      ["Carbon Graphite vs Ceramic", "250°C", "20", "14", "Water/oil lubrication"],
      ["Babbitt Graphite vs Steel", "350°C", "12", "8", "Oil lubrication"],
      ["Graphite vs Graphite", "300°C", "8", "5", "Self-lubricating"],
    ],
  },
  {
    id: "wear-life",
    title: "Wear Life Estimation Reference",
    description: "Expected wear rates and service life of carbon graphite seals under different operating conditions",
    headers: ["Operating Condition", "Typical Application", "Monthly Wear (mm)", "Est. Service Life", "Key Factors"],
    rows: [
      ["Clean Water Pump — Continuous", "Centrifugal pump seal", "0.02 ~ 0.05", "24 ~ 36 months", "Medium cleanliness"],
      ["Chemical Pump — Corrosive", "Reactor agitator seal", "0.05 ~ 0.10", "12 ~ 24 months", "Medium corrosiveness"],
      ["High-Temp Oil Pump — 250°C", "Hot oil pump seal", "0.03 ~ 0.08", "18 ~ 30 months", "Temperature stability"],
      ["Wastewater Pump — Particles", "Sewage pump seal", "0.10 ~ 0.20", "6 ~ 12 months", "Particle hardness/concentration"],
      ["High-Speed Pump — >3000rpm", "Boiler feed pump", "0.04 ~ 0.08", "12 ~ 20 months", "Speed/balance"],
      ["Dry Running — Intermittent", "Fan bearing", "0.01 ~ 0.03", "36 ~ 60 months", "Start-stop frequency"],
      ["Marine Seawater Pump", "Stern shaft seal", "0.03 ~ 0.06", "18 ~ 36 months", "Seawater sand content"],
    ],
  },
  {
    id: "press-fit-force",
    title: "Press-Fit Force Safety Reference",
    description: "Safe interference range and corresponding press-fit force for graphite bushing installation",
    headers: ["Bushing O.D. (mm)", "Recommended Interference (mm)", "Max Press Force (kN)", "Press Speed (mm/s)", "Notes"],
    rows: [
      ["20 ~ 40", "0.02 ~ 0.05", "5 ~ 15", "2 ~ 5", "Guide chamfer ≥ 15°"],
      ["40 ~ 60", "0.03 ~ 0.07", "15 ~ 30", "2 ~ 5", "Bore roughness Ra ≤ 1.6"],
      ["60 ~ 80", "0.04 ~ 0.09", "30 ~ 50", "1 ~ 3", "Apply lubricant before pressing"],
      ["80 ~ 120", "0.05 ~ 0.12", "50 ~ 80", "1 ~ 3", "Recommended shrink-fit or heat-fit"],
      ["120 ~ 160", "0.06 ~ 0.15", "80 ~ 120", "1 ~ 2", "Use force-displacement monitoring"],
      ["160 ~ 200", "0.08 ~ 0.18", "120 ~ 180", "0.5 ~ 1", "Step-press, check each stage"],
    ],
  },
  {
    id: "face-pressure",
    title: "End Face Specific Pressure Calculation",
    description: "Recommended end face specific pressure ranges with corresponding spring pressure and pressure coefficients",
    headers: ["Seal Type", "Face Pressure Pc (MPa)", "Spring Pressure Ps (MPa)", "Pressure Coeff. K", "Speed Range"],
    rows: [
      ["Internal Balanced", "0.3 ~ 0.6", "0.08 ~ 0.15", "0.65 ~ 0.75", "< 3000 rpm"],
      ["Internal Unbalanced", "0.4 ~ 0.8", "0.10 ~ 0.20", "0.85 ~ 0.95", "< 1500 rpm"],
      ["External Balanced", "0.2 ~ 0.5", "0.06 ~ 0.12", "0.60 ~ 0.70", "< 5000 rpm"],
      ["Dual Face Seal", "0.3 ~ 0.7", "0.10 ~ 0.18", "0.65 ~ 0.80", "< 4000 rpm"],
      ["High-Temp Flexible Seal", "0.15 ~ 0.35", "0.05 ~ 0.10", "0.55 ~ 0.65", "< 2000 rpm"],
    ],
  },
  {
    id: "heat-treatment",
    title: "Graphite Heat Treatment / Impregnation Temperature Parameters",
    description: "Temperature control parameters for carbon graphite processing stages",
    headers: ["Process", "Temperature Range", "Hold Time", "Ramp Rate", "Purpose"],
    rows: [
      ["Blank Drying", "120°C ~ 180°C", "8 ~ 24 h", "≤ 30°C/h", "Remove forming moisture"],
      ["Carbonization Pretreatment", "800°C ~ 1200°C", "4 ~ 8 h", "≤ 50°C/h", "Base carbonization strengthening"],
      ["Graphitization", "2200°C ~ 2600°C", "2 ~ 6 h", "≤ 100°C/h", "Improve crystallinity/conductivity"],
      ["Resin Impregnation Curing", "150°C ~ 200°C", "4 ~ 12 h", "≤ 20°C/h", "Fill porosity"],
      ["Metal Impregnation (Sb)", "600°C ~ 800°C", "2 ~ 4 h", "≤ 60°C/h", "Vacuum metal impregnation"],
      ["Babbitt Impregnation", "300°C ~ 400°C", "1 ~ 3 h", "≤ 40°C/h", "Bearing alloy filling"],
      ["PTFE Impregnation Sintering", "360°C ~ 380°C", "2 ~ 6 h", "≤ 30°C/h", "PTFE filling and sintering"],
      ["Stabilization Annealing", "200°C ~ 350°C", "6 ~ 12 h", "≤ 25°C/h", "Relieve machining stress"],
    ],
  },
  {
    id: "troubleshooting",
    title: "Noise, Overheating & Leakage Troubleshooting Guide",
    description: "Common seal operating fault symptoms, causes, and solutions",
    headers: ["Symptom", "Possible Cause", "Diagnostic Method", "Solution"],
    rows: [
      ["High-pitched squeal", "Face dry friction / insufficient lubrication", "Check lubrication flow rate", "Increase fluid supply or improve face groove design"],
      ["Low-frequency rumble", "Bushing clearance too large / shaft vibration", "Measure radial runout", "Reduce clearance or straighten shaft"],
      ["Face temp > 80°C", "Face pressure too high / insufficient cooling", "Measure seal cavity temp", "Reduce spring compression or increase coolant flow"],
      ["Slow oil leak (drips/min)", "Face flatness degraded / abrasive embedding", "Check face lapping quality", "Re-lap or replace seal ring"],
      ["Major leakage", "Seal ring cracked / installation misaligned", "Stop and inspect seal face", "Replace seal and recalibrate installation"],
      ["Leaks on start-up only", "Static seal aged / clearance changed", "Check O-ring and bushing", "Replace elastic seal"],
      ["Gradually increasing noise", "Bearing wear accumulation", "Measure bearing clearance trend", "Schedule bushing replacement"],
      ["Abnormal face wear", "Hard particles in medium", "Filter and analyze medium sample", "Add upstream filter or switch to wear-resistant grade"],
    ],
  },
]

// ===== 2. FAQ Categories =====

export const enFaqCategories: FAQCategory[] = [
  {
    category: "Selection",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      {
        question: "How to select graphite material for high/low temperature?",
        answer:
          "Low temperature (-50°C ~ 100°C): Phenolic resin-impregnated medium-fine graphite. Cost-effective with stable performance.\nMedium temperature (100°C ~ 250°C): Furan resin or epoxy resin impregnation. Better temperature and corrosion resistance than phenolic.\nHigh temperature (250°C ~ 450°C): Antimony metal or Babbitt-impregnated graphite. Isostatic molded base recommended for dimensional stability at high temperatures.\nUltra-high temperature (450°C ~ 600°C): Carbonized (pure carbon) graphite. No impregnant, relying on graphite's own thermal resistance. Requires inert or reducing atmosphere.",
      },
      {
        question: "How to choose impregnation for wet/dry conditions?",
        answer:
          "Full wet operation (ample lubrication): Phenolic or furan resin impregnation. Resin fills pores, increasing density and reducing wear.\nWet-dry cycling (frequent starts/stops): Impregnation with excellent self-lubricating properties. Metal impregnation (antimony/Babbitt) or PTFE impregnation recommended, forming a transfer lubricating film during dry running.\nComplete dry running (no lubrication): Carbonized graphite or special resin impregnation. Design for low PV value (≤ 3 MPa·m/s) with self-lubricating grooves on the seal face.",
      },
      {
        question: "Best graphite for high-speed / heavy-load / low-pressure?",
        answer:
          "High speed (linear velocity > 20 m/s): Isostatic fine-grain high-density graphite paired with SiC counterface. Antimony or carbonized impregnation. Fine grain ensures uniform wear at high speed.\nHeavy load (PV > 15 MPa·m/s): Babbitt or antimony-impregnated graphite. Metal filling significantly improves compressive strength and thermal conductivity for timely frictional heat dissipation.\nLow pressure (medium pressure < 0.5 MPa): Molded medium-grain graphite with phenolic resin impregnation. Most cost-effective option.",
      },
      {
        question: "Oil-free vs oil-lubricated material selection?",
        answer:
          "Oil-free self-lubricating: High self-lubricating grade graphite required. Carbonized high-purity graphite or PTFE-impregnated graphite recommended. Seal face should have debris grooves or spiral grooves for solid lubrication via graphite transfer film. PV range recommended: 0.5 ~ 5 MPa·m/s.\nOil lubrication: Standard phenolic or furan resin-impregnated graphite suffices. Oil film provides primary lubrication. Graphite acts as the soft mating face for adaptation and emergency running. PV range up to 10 ~ 20 MPa·m/s. Slightly coarser graphite grain can improve wear resistance under oil lubrication.",
      },
    ],
  },
  {
    category: "Assembly Clearance",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    items: [
      {
        question: "How to fix vibration (excessive clearance) or seizure (too tight)?",
        answer:
          "Excessive clearance: Shaft vibrates radially during operation, reducing seal face tracking, causing leaks, noise, and abnormal wear. Solution: Look up standard clearance table by speed and shaft diameter. Re-machine bushing bore. Check shaft straightness and straighten if out of tolerance.\nInsufficient clearance: Friction heat cannot dissipate. Temperature rise causes graphite expansion, further reducing clearance, creating a positive feedback loop ending in seizure. Solution: Increase clearance to recommended upper limit. Confirm bushing housing heat dissipation. Check cooling system flow.\nDiagnosis: Measure temperature after 30 min operation. > 90°C = too tight. Noticeable wobble during operation = too loose.",
      },
      {
        question: "Standard fit tolerances by shaft diameter?",
        answer:
          "Common fit tolerance bands (graphite bushing bore vs steel shaft):\nSmall shaft d ≤ 30 mm: H7/f7 or H7/g6, clearance 0.02 ~ 0.08 mm\nMedium shaft 30 < d ≤ 80 mm: H7/f7 or H8/e8, clearance 0.03 ~ 0.15 mm\nLarge shaft 80 < d ≤ 150 mm: H8/e8 or H8/d8, clearance 0.05 ~ 0.30 mm\nExtra large shaft d > 150 mm: H8/d8 or H9/c9, clearance 0.10 ~ 0.50 mm\nNote: Actual values must consider speed, temperature, and material thermal expansion coefficients.",
      },
      {
        question: "How to adjust clearance for thermal expansion?",
        answer:
          "Graphite CTE ≈ (2~4)×10⁻⁶ /°C, steel CTE ≈ 11×10⁻⁶ /°C. The difference is significant.\nCorrection method:\n1. Calculate radial change: Δr = (αsteel - αgraphite) × r × ΔT\n2. Add result to cold clearance value\n3. Example: 80 mm shaft, 150°C rise, radial change ≈ (11-3)×10⁻⁶ × 40 × 150 = 0.048 mm\n4. Actual cold clearance = operating clearance + 0.048 mm\n5. Note: Clearance shrinks on cooldown. Hot-assembled equipment must be checked for alignment after cooling.",
      },
    ],
  },
  {
    category: "Machining & Installation",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    items: [
      {
        question: "Graphite turning, drilling, and grinding precautions?",
        answer:
          "Turning: Use diamond or carbide tools. Rake angle 0°~5°, relief angle 6°~10°. Cutting speed 100~300 m/min, feed 0.05~0.15 mm/r. Maintain continuous cutting; avoid impact feed causing edge chipping. Use dust extraction for graphite dust.\nDrilling: HSS or carbide drill, point angle 90°~120°. Speed 3000~8000 rpm, feed 0.02~0.08 mm/r. Entry and exit edges prone to chipping; chamfer both sides, support exit side with wooden backing.\nGrinding: Silicon carbide wheel (grit 60~120#), depth ≤ 0.01 mm/pass. Dry grinding preferred. If wet grinding, confirm graphite impregnation grade is coolant-tolerant.\nSafety: Graphite dust is conductive. Electrical equipment requires dust protection. Operators must wear dust masks.",
      },
      {
        question: "How to fix press-fit misalignment, edge chipping, and cracking?",
        answer:
          "Misalignment: Uneven bore chamfer or off-axis press force. Solution: Check bore chamfer (≥ 15°), use a guide mandrel, control press speed at 2~5 mm/s.\nEdge chipping: Stress concentration at bushing edge or excessive interference. Solution: Increase bushing O.D. entry chamfer (C0.5~C1.0), reduce interference, check bore roughness (≤ Ra 1.6).\nCracking: Interference severely out of tolerance or bore roundness out of spec. Solution: Recalculate interference, measure bore roundness (≤ IT7), consider shrink-fit (heat bore to 150~200°C before assembly).\nMonitoring: Use a press with force-displacement sensor for real-time curve monitoring. Stop immediately if curve is abnormal (sudden rise/drop).",
      },
      {
        question: "How to control interference fit tightness?",
        answer:
          "Interference calculation principles:\n1. Minimum interference: Ensure bushing does not loosen at max operating temperature; account for thermal expansion differences\n2. Maximum interference: Ensure graphite bushing is not crushed by compressive stress; take 1/5 ~ 1/3 of graphite compressive strength\n3. Empirical formula: δ ≈ (0.002~0.005) × bushing O.D.\n\nReference values:\nO.D. ≤ 50 mm: interference 0.02~0.05 mm\nO.D. 50~100 mm: interference 0.04~0.10 mm\nO.D. 100~150 mm: interference 0.06~0.15 mm\nO.D. > 150 mm: interference 0.08~0.20 mm\n\nInstallation methods:\n- Small interference: Press-fit at room temp\n- Medium interference: Heat bore to 150~200°C for shrink-fit\n- Large interference: Combined liquid nitrogen cooling (-196°C) + bore heating",
      },
    ],
  },
  {
    category: "Operational Faults",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
    items: [
      {
        question: "How to handle excessive operating temperature?",
        answer:
          "Inspection sequence:\n1. Measure actual temperature — use IR thermometer or thermocouple on seal cavity wall. Check if > 80°C.\n2. Check cooling system — is coolant flow adequate? Lines blocked? Heat exchanger efficiency degraded?\n3. Check face pressure — spring over-compressed? Seal face width too large?\n4. Check clearance — too little clearance causes rapid frictional heat rise.\n\nEmergency measures:\n- Increase coolant flow to 1.2~1.5× recommended\n- Reduce speed or pressure (temporary)\n- Check lubricant cleanliness and filter condition\n\nLong-term measures:\n- Evaluate switching to higher thermal conductivity impregnated graphite grade\n- Optimize seal face cooling groove design\n- Check shaft alignment",
      },
      {
        question: "How to fix minor oil/water seepage?",
        answer:
          "Leakage ≤ 5 drops/min (acceptable minor leakage):\n1. Check seal face — if minor leakage during break-in, continue running 24~48 hours for observation; new seals require a break-in period\n2. Adjust gland bolts — tighten evenly and diagonally, torque at 50%~70% of recommended\n3. Check secondary seals — O-rings/gaskets aged or damaged? Cavity have casting defects?\n\nLeakage > 5 drops/min (requires shutdown):\n1. Check seal face — thermal cracks, scratches, warping? Counterface flat?\n2. Check installation dimensions — correct compression? Seal face perpendicular to shaft?\n3. Check operating condition changes — recent temperature, pressure, or speed fluctuations?\n4. Replace seal — disassemble and replace complete seal set, recalibrate installation",
      },
      {
        question: "Causes of noise, vibration, and rapid wear?",
        answer:
          "Noise diagnosis:\n- High-pitched squeal → Face dry friction. Check lubrication immediately.\n- Low-frequency rumble → Bearing clearance too large or rotating part imbalance.\n- Intermittent clicking → Foreign particles on face or localized face chipping.\n\nVibration causes:\n1. Bent shaft or bearing wear causing excessive runout\n2. Seal face flatness deteriorated > 0.9 μm\n3. Medium vaporization (flashing) causing intermittent face opening\n4. Installation alignment deviation > 0.05 mm\n\nRapid wear causes:\n1. Abrasive particles in medium (sand, weld slag, rust) — add upstream filter\n2. Wrong material selection (low hardness or mismatched impregnation grade)\n3. Actual PV value exceeds material allowable PV\n4. Frequent start-stop or extended dry running\n5. Medium corrosiveness exceeds impregnant tolerance",
      },
      {
        question: "How to resolve high-temperature carbonization and powdering?",
        answer:
          "Carbonization symptoms: Black powder accumulation on seal face. Graphite surface appears loose, powdered, losing structural strength.\n\nRoot cause analysis:\n1. Temperature exceeds impregnant tolerance — phenolic resin begins carbonizing > 200°C\n2. Localized hot spots — face friction heat + medium temperature exceeding limit\n3. Oxidizing atmosphere — oxygen oxidizes graphite at high temperature; CO/CO₂ escape causes structural porosity\n\nSolutions:\n1. Shut down immediately and replace; prevent total seal failure from worsening carbonization\n2. Select higher temperature-rated impregnation (phenolic→furan→antimony→carbonized)\n3. Atmosphere control — inert gas purge or steam sealing for high-temp conditions\n4. Optimize cooling — increase seal cavity coolant flow to reduce face temperature\n5. Consider face groove design for improved lubrication and heat dissipation\n\nPrevention: Maintain at least 50°C safety margin below rated temperature. Install temperature monitoring probes.",
      },
    ],
  },
  {
    category: "Maintenance",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      {
        question: "Break-in procedure for initial operation?",
        answer:
          "Purpose: Allow seal faces to mate properly, forming a stable fluid film and wear pattern.\n\nBreak-in steps:\n1. Before start: Check seal cavity is filled with medium, purge air. Hand-rotate 2~3 turns to confirm free movement, no noise.\n2. Phase 1 (0~30 min): Run at 30%~50% of rated speed. Monitor leakage, temperature, vibration. Minor seepage acceptable.\n3. Phase 2 (30~120 min): Gradually increase to 70%~80% of rated speed. Temperature should stabilize at ≤ 60°C.\n4. Phase 3 (120~240 min): Full speed. After temp stabilizes, check leakage is within acceptable range.\n5. Break-in period (first 72 hours): Maintain continuous operation if possible, especially for frequent start-stop applications.\n\nIf temperature exceeds 80°C or leakage increases significantly during break-in, stop and inspect immediately.",
      },
      {
        question: "Storage and preservation for long-term shutdown?",
        answer:
          "Short-term (≤ 7 days):\n1. Keep seal cavity filled with medium to prevent face drying\n2. Hand-rotate 1~2 turns weekly to prevent face adhesion\n3. Close inlet/outlet valves\n\nMedium-term (7~90 days):\n1. Drain medium, flush with clean water or solvent\n2. Apply rust-preventive grease or special protective agent to seal faces\n3. Coat exposed bushing surfaces with rust oil\n4. Nitrogen blanket or add desiccant in seal cavity\n5. Hand-rotate once every two weeks\n\nLong-term (> 90 days):\n1. Remove seal components and store separately\n2. Clean and wrap in anti-rust paper\n3. Storage environment: 5~35°C, humidity ≤ 60%, avoid direct sunlight\n4. Keep away from acidic/alkaline substances\n5. Inspect seals for aging or deformation before reinstallation",
      },
      {
        question: "Wear limits and replacement criteria?",
        answer:
          "Seal rings:\n1. Face wear depth > 1.0 mm or defect > 15% of seal face width\n2. Through-cracks or chipping\n3. Flatness after lapping > 0.9 μm (re-evaluate after re-lapping)\n4. Remaining service life insufficient to reach next maintenance interval\n\nBushings/Bearings:\n1. Bore wear > 2~3× initial clearance\n2. Visible wear step or groove on O.D.\n3. Wall thickness reduction > 20% of original\n4. Vibration 50%+ higher than initial value\n\nAssessment procedure:\n1. Record initial dimensions and operating parameters\n2. Measure wear and vibration trends periodically (every 3~6 months)\n3. Schedule replacement early when wear rate suddenly accelerates\n4. Prepare spare parts when reaching 80% of theoretical service life",
      },
    ],
  },
  {
    category: "Custom & Non-Standard Orders",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    items: [
      {
        question: "Mold considerations for custom graphite parts?",
        answer:
          "Three evaluation factors:\n1. Volume & Cost — Mold tooling typically costs ¥3000~15000. Low volume (< 50 pcs): machining recommended. > 500 pcs: consider molding.\n2. Precision — Molded tolerance: ±0.5%. Machined tolerance: ±0.05 mm.\n3. Geometry — Complex shapes (deep holes, L/D > 5, thin wall < 3 mm): molded blank + finish machining.\n\nMold design notes:\n- Draft angle ≥ 1°~3° (related to height)\n- Avoid sharp corners and abrupt section changes (min. radius R ≥ 2 mm)\n- Keep symmetrical where possible to reduce uneven loading\n- Leave machining allowance 0.5~1.0 mm (for finished surfaces)\n- Consider pressing direction effect on density uniformity",
      },
      {
        question: "Groove, oil groove, and rabbet design standards?",
        answer:
          "Oil/Lubrication groove design:\n- Depth: 0.3~1.0 mm (based on shaft diameter and PV value)\n- Width: 1.0~3.0 mm\n- Types: Spiral (unidirectional), herringbone (bidirectional), straight groove (low speed)\n- Spacing: 5~15 mm\n- Distance from edge: ≥ 2 mm\n\nRabbet design:\n- Height: 1~3 mm (based on wall thickness)\n- Angle: 30°~45°\n- Fillet radius: R ≥ 0.5 mm\n- Avoid stress concentration at rabbet root\n\nTolerance notation:\n- Groove position: ±0.2 mm\n- Groove depth: +0.1 mm / -0 mm\n- Rabbet concentricity: ≤ 0.05 mm",
      },
      {
        question: "Expedited custom machining with quality assurance?",
        answer:
          "Expedited process:\n1. Confirm drawing — 3D model for structure review, 2D engineering drawing with critical tolerances\n2. Blank selection — Use in-stock grades and sizes to skip procurement lead time\n3. Process route — Order operations efficiently: rough turning→finish turning→drilling→grinding. Minimize setups.\n4. Equipment — High-precision CNC lathes (positioning accuracy ≤ 0.005 mm) + diamond tooling\n\nAccuracy levels:\n- Standard ±0.05 mm: Standard turning\n- Precision ±0.02 mm: Requires grinding\n- High-precision ±0.01 mm: CNC grinder + CMM inspection\n- Flatness 0.9 μm: Lapping required\n\nExpedited lead times (simple bushings/seal rings):\n- Drawing-based: 3~5 business days\n- With material procurement: 7~10 business days\n- Including mold tooling: 15~25 business days",
      },
    ],
  },
]

// ===== 3. Technical Formulas =====

export const enFormulas: Formula[] = [
  {
    name: "Bushing Clearance General Formula",
    formula: "C = C₀ + α₁ × d × ΔT₁ - α₂ × d × ΔT₂ + K × d × n",
    description: "Clearance calculation accounting for thermal expansion, centrifugal force, and speed effects",
    variables: [
      { symbol: "C", meaning: "Operating clearance (mm)" },
      { symbol: "C₀", meaning: "Initial assembly clearance (mm), typically 0.02~0.08 mm" },
      { symbol: "α₁", meaning: "Housing material CTE (steel ≈ 11×10⁻⁶ /°C)" },
      { symbol: "α₂", meaning: "Graphite CTE (≈ 2~4×10⁻⁶ /°C)" },
      { symbol: "d", meaning: "Shaft diameter (mm)" },
      { symbol: "ΔT₁", meaning: "Housing temperature rise (°C)" },
      { symbol: "ΔT₂", meaning: "Graphite temperature rise (°C)" },
      { symbol: "K", meaning: "Centrifugal force coefficient (≈ 0.001~0.003)" },
      { symbol: "n", meaning: "Speed (rpm)" },
    ],
    note: "Simplified engineering: C = C₀ + (α₁ - α₂) × d × ΔT. Typical: 0.15~0.25 mm for low-pressure water pumps, 0.30~0.50 mm for high-temp pumps.",
  },
  {
    name: "Linear Speed Limit Formula",
    formula: "V = π × d × n / 60000",
    description: "Average seal face linear speed calculation for PV limit evaluation and material selection",
    variables: [
      { symbol: "V", meaning: "Linear speed (m/s)" },
      { symbol: "d", meaning: "Seal face mean diameter (mm)" },
      { symbol: "n", meaning: "Speed (rpm)" },
      { symbol: "π", meaning: "Pi (≈ 3.1416)" },
    ],
    note: "Carbon graphite recommended limits: resin-impregnated ≤ 20 m/s, metal-impregnated ≤ 25 m/s, carbonized ≤ 30 m/s. Above these limits, use balanced seal design or enhanced cooling.",
  },
  {
    name: "End Face Specific Pressure Formula",
    formula: "Pc = Ps + (B × K) × P",
    description: "Closing force per unit area on the seal face, determining sealing performance and service life",
    variables: [
      { symbol: "Pc", meaning: "Face specific pressure (MPa)" },
      { symbol: "Ps", meaning: "Spring specific pressure (MPa), typically 0.08~0.20 MPa" },
      { symbol: "B", meaning: "Balance ratio (balanced 0.65~0.85, unbalanced 0.90~1.10)" },
      { symbol: "K", meaning: "Pressure coefficient (≈ 0.5~0.7)" },
      { symbol: "P", meaning: "Medium pressure (MPa)" },
    ],
    note: "Recommended face pressure range: 0.3~0.8 MPa. Too low: leakage risk. Too high: heat generation and accelerated wear. Carbon graphite vs SiC: lower end. Carbon graphite vs metal: higher end.",
  },
  {
    name: "Thermal Expansion Compensation Formula",
    formula: "ΔL = α × L × ΔT",
    description: "Dimension change calculation for graphite parts due to temperature variation, used for clearance correction and shrink-fit design",
    variables: [
      { symbol: "ΔL", meaning: "Dimension change (mm)" },
      { symbol: "α", meaning: "Material CTE (/°C)" },
      { symbol: "L", meaning: "Original dimension (mm)" },
      { symbol: "ΔT", meaning: "Temperature change (°C) = operating temp - installation temp" },
    ],
    note: "Graphite α ≈ (2.0~4.5)×10⁻⁶ /°C (varies by grade and forming direction). Steel α ≈ 11×10⁻⁶ /°C. For shrink-fit design, calculate both housing expansion and graphite bushing expansion; the difference is the effective interference change.",
  },
  {
    name: "Press-Fit Interference Safety Formula",
    formula: "σ_max = (δ × E) / (d × (1 - μ²)) ≤ [σ] / S",
    description: "Verifies that maximum stress from selected interference does not exceed material allowable stress",
    variables: [
      { symbol: "σ_max", meaning: "Maximum hoop tensile stress (MPa)" },
      { symbol: "δ", meaning: "Interference (mm)" },
      { symbol: "E", meaning: "Graphite elastic modulus (≈ 8000~12000 MPa)" },
      { symbol: "d", meaning: "Bushing O.D. (mm)" },
      { symbol: "μ", meaning: "Graphite Poisson ratio (≈ 0.15~0.25)" },
      { symbol: "[σ]", meaning: "Graphite allowable stress (tensile strength / safety factor)" },
      { symbol: "S", meaning: "Safety factor (recommended 3~5)" },
    ],
    note: "Carbon graphite tensile strength is approximately 1/3~1/4 of compressive strength. Always use tensile strength (not compressive) in calculations. Safety factor ≥ 3. Recommended interference: ≤ 0.5%~1.0% of graphite wall thickness.",
  },
]
