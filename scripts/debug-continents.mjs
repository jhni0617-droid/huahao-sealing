import { readFileSync } from "fs"
import { geoPath, geoMercator } from "d3-geo"
import { feature, mergeArcs } from "topojson-client"

const topology = readFileSync("node_modules/world-atlas/countries-110m.json", "utf-8")
const topo = JSON.parse(topology)

const cMap = {
  840:"NA",124:"NA",484:"NA",304:"NA",320:"NA",84:"NA",222:"NA",340:"NA",
  558:"NA",188:"NA",591:"NA",44:"NA",28:"NA",52:"NA",332:"NA",
  214:"NA",192:"NA",388:"NA",136:"NA",670:"NA",
  76:"SA",32:"SA",152:"SA",604:"SA",68:"SA",218:"SA",170:"SA",
  862:"SA",328:"SA",740:"SA",858:"SA",600:"SA",254:"SA",
  826:"EU",250:"EU",276:"EU",380:"EU",724:"EU",620:"EU",528:"EU",
  56:"EU",756:"EU",40:"EU",616:"EU",203:"EU",703:"EU",348:"EU",
  642:"EU",100:"EU",300:"EU",208:"EU",752:"EU",578:"EU",246:"EU",
  352:"EU",372:"EU",191:"EU",70:"EU",688:"EU",499:"EU",8:"EU",
  807:"EU",804:"EU",112:"EU",440:"EU",428:"EU",233:"EU",705:"EU",
  442:"EU",470:"EU",498:"EU",196:"EU",792:"EU",
  710:"AF",566:"AF",818:"AF",12:"AF",504:"AF",434:"AF",729:"AF",
  728:"AF",231:"AF",404:"AF",834:"AF",800:"AF",646:"AF",108:"AF",
  262:"AF",706:"AF",232:"AF",288:"AF",384:"AF",430:"AF",694:"AF",
  324:"AF",686:"AF",478:"AF",466:"AF",854:"AF",562:"AF",148:"AF",
  140:"AF",120:"AF",266:"AF",178:"AF",180:"AF",24:"AF",516:"AF",
  72:"AF",716:"AF",508:"AF",450:"AF",454:"AF",894:"AF",768:"AF",
  204:"AF",624:"AF",678:"AF",226:"AF",748:"AF",426:"AF",788:"AF",
  732:"AF",670:"AF",480:"AF",
  156:"AS",356:"AS",392:"AS",410:"AS",408:"AS",704:"AS",764:"AS",
  104:"AS",418:"AS",116:"AS",458:"AS",702:"AS",360:"AS",608:"AS",
  96:"AS",50:"AS",524:"AS",64:"AS",144:"AS",586:"AS",4:"AS",
  364:"AS",368:"AS",682:"AS",887:"AS",512:"AS",784:"AS",634:"AS",
  48:"AS",414:"AS",400:"AS",422:"AS",760:"AS",376:"AS",275:"AS",
  496:"AS",398:"AS",417:"AS",762:"AS",795:"AS",860:"AS",268:"AS",
  51:"AS",31:"AS",643:"AS",
  36:"OC",554:"OC",598:"OC",242:"OC",90:"OC",548:"OC",882:"OC",
  776:"OC",585:"OC",583:"OC",584:"OC",296:"OC",520:"OC",540:"OC",258:"OC",
}

const continentArcs = { NA:[], SA:[], EU:[], AF:[], AS:[], OC:[] }

topo.objects.countries.geometries.forEach((geom) => {
  const cont = cMap[geom.id]
  if (cont && continentArcs[cont]) {
    continentArcs[cont].push(geom)
  }
})

const proj = geoMercator().fitSize([860, 400], { type: "Sphere" }).translate([500, 248])
const pg = geoPath().projection(proj)

// Test with NA
const naGeoms = continentArcs.NA
const mergedGeo = mergeArcs(topo, naGeoms)
console.log("mergeArcs result type:", mergedGeo.type)
console.log("mergeArcs result arcs:", JSON.stringify(mergedGeo.arcs?.length))

// Now use feature() to convert to GeoJSON Feature
const naFeature = feature(topo, mergedGeo)
console.log("feature geometry type:", naFeature.geometry?.type)
if (naFeature.geometry?.type === "MultiPolygon") {
  console.log("coordinates[0][0] length:", naFeature.geometry.coordinates[0]?.[0]?.length)
}

const path = pg(naFeature)
console.log("NA path length:", path?.length)
console.log("NA path first 300 chars:", path?.substring(0, 300))

// Test the projection alignment
// Where does 0°N, 0°E (Gulf of Guinea) project to?
const [x, y] = proj([0, 0])
console.log(`Projection center (0°N, 0°E): (${x}, ${y})`)
console.log(`Expected: around (500, 250)`)

// Where does 95°W, 40°N (roughly USA center) project to?
const [x2, y2] = proj([-95, 40])
console.log(`USA (95°W, 40°N): (${x2}, ${y2})`)

// Where does 0°, 52°N (UK) project to?
const [x3, y3] = proj([0, 52])
console.log(`UK (0°E, 52°N): (${x3}, ${y3})`)

// Where does 115°E, 35°N (China coast) project to?
const [x4, y4] = proj([115, 35])
console.log(`China (115°E, 35°N): (${x4}, ${y4})`)
