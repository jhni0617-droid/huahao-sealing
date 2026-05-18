import { readFileSync, writeFileSync } from "fs"
import { geoPath, geoMercator } from "d3-geo"
import { feature, mergeArcs } from "topojson-client"

const topology = JSON.parse(readFileSync("node_modules/world-atlas/countries-110m.json", "utf-8"))

// Country ISO to continent
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

// Group geometries by continent
const contGeoms = { NA:[], SA:[], EU:[], AF:[], AS:[], OC:[] }
topology.objects.countries.geometries.forEach((geom) => {
  const c = cMap[geom.id]
  if (c && contGeoms[c]) contGeoms[c].push(geom)
})

// Mercator projection - tuned for viewBox 1000x500
// Center on 10°E (between Europe and Asia), equator
const projection = geoMercator()
  .center([10, 15])  // center on 10°E, 15°N
  .scale(175)        // zoom level
  .translate([480, 255]) // center in viewBox

const pathGen = geoPath().projection(projection)

// Generate merged continent paths
let pathOutput = ""
const continentCodes = ["NA","SA","EU","AF","AS","OC"]

for (const code of continentCodes) {
  const geoms = contGeoms[code]
  if (!geoms || geoms.length === 0) continue
  const merged = mergeArcs(topology, geoms)
  const feat = feature(topology, merged)
  const d = pathGen(feat)
  if (d) {
    pathOutput += `  ${code}: \`${d}\`,\n`
  }
}

// Country coordinates (lat/lon) used in the map
const countryCoords = [
  { name: "德国", lon: 10, lat: 51, region: "欧洲" },
  { name: "意大利", lon: 12, lat: 42, region: "欧洲" },
  { name: "英国", lon: 0, lat: 52.5, region: "欧洲" },
  { name: "法国", lon: 2, lat: 47, region: "欧洲" },
  { name: "荷兰", lon: 5, lat: 52, region: "欧洲" },
  { name: "土耳其", lon: 35, lat: 39, region: "欧洲" },
  { name: "俄罗斯", lon: 37, lat: 56, region: "欧洲" },
  { name: "日本", lon: 138, lat: 36, region: "亚洲" },
  { name: "韩国", lon: 127, lat: 37, region: "亚洲" },
  { name: "印度", lon: 78, lat: 21, region: "亚洲" },
  { name: "越南", lon: 106, lat: 16, region: "亚洲" },
  { name: "泰国", lon: 101, lat: 15, region: "亚洲" },
  { name: "印度尼西亚", lon: 115, lat: -7, region: "亚洲" },
  { name: "马来西亚", lon: 102, lat: 3, region: "亚洲" },
  { name: "新加坡", lon: 104, lat: 1.5, region: "亚洲" },
  { name: "阿联酋", lon: 54, lat: 24, region: "中东及非洲" },
  { name: "沙特阿拉伯", lon: 45, lat: 24, region: "中东及非洲" },
  { name: "美国", lon: -100, lat: 40, region: "美洲" },
  { name: "巴西", lon: -55, lat: -12, region: "美洲" },
  { name: "加拿大", lon: -100, lat: 50, region: "美洲" },
]

// Projected China position
const chinaLonLat = [116, 35] // Beijing area
const chinaProjected = projection(chinaLonLat)

// Generate the countries array with projected positions
let countriesOutput = ""
for (const c of countryCoords) {
  const pt = projection([c.lon, c.lat])
  if (pt) {
    countriesOutput += `  { name: "${c.name}", x: ${Math.round(pt[0])}, y: ${Math.round(pt[1])}, region: "${c.region}" },\n`
  } else {
    console.log(`Failed to project ${c.name}`)
  }
}

// Write output
const cx = Math.round(chinaProjected ? chinaProjected[0] : 500)
const cy = Math.round(chinaProjected ? chinaProjected[1] : 250)

writeFileSync("lib/continent-data.ts", `// Auto-generated continent paths and country positions
// Generated from Natural Earth 110m data via d3 Mercator projection

export const continentPaths: Record<string, string> = {
${pathOutput}}

export const chinaPosition = { x: ${cx}, y: ${cy} }

export const generatedCountries = [
${countriesOutput}]
`)

console.log("Done!")
console.log(`China HQ: (${cx}, ${cy})`)

// Print generated countries for verification
for (const c of countryCoords) {
  const pt = projection([c.lon, c.lat])
  if (pt) console.log(`  ${c.name}: (${Math.round(pt[0])}, ${Math.round(pt[1])}) [was manual: ${c.region}]`)
}

const continentData = pathOutput.match(/`[^`]+`/g)
if (continentData) {
  continentData.forEach((p, i) => {
    console.log(`  ${continentCodes[i]}: ${p.length} chars`)
  })
}
