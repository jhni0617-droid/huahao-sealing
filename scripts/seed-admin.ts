import { getDb } from "../lib/admin/db"
import { hashPassword } from "../lib/admin/auth"
import { products } from "../lib/products"
import { cases } from "../lib/constants"

async function seed() {
  console.log("Seeding database...")
  const db = getDb()

  // Seed admin user
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123"
  const passwordHash = await hashPassword(adminPassword)

  db.prepare(`
    INSERT OR IGNORE INTO admins (username, password_hash, display_name)
    VALUES (?, ?, ?)
  `).run("admin", passwordHash, "管理员")

  console.log("  ✓ Admin user created (admin / admin123)")

  // Seed products
  let productCount = 0
  const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products (slug, name, model, category, description, short_desc, specs, applications, materials, features, faq, image, pdf_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  for (const p of products) {
    const result = insertProduct.run(
      p.slug,
      p.name,
      p.model || "",
      p.category || "",
      p.description || "",
      p.shortDesc || "",
      JSON.stringify(p.specs || []),
      JSON.stringify(p.applications || []),
      JSON.stringify(p.materials || []),
      JSON.stringify(p.features || []),
      JSON.stringify(p.faq || []),
      p.image || null,
      p.pdfUrl || null,
    )
    if (result.changes > 0) productCount++
  }
  console.log(`  ✓ ${productCount} products seeded`)

  // Seed cases
  let caseCount = 0
  const insertCase = db.prepare(`
    INSERT OR IGNORE INTO cases (title, company, condition, diagnosis, solution, result)
    VALUES (?, ?, ?, ?, ?, ?)
  `)

  for (const c of cases) {
    const result = insertCase.run(c.title, c.company, c.condition || "", c.diagnosis || "", c.solution || "", c.result)
    if (result.changes > 0) caseCount++
  }
  console.log(`  ✓ ${caseCount} cases seeded`)

  console.log("\nSeed complete!")
  console.log(`  Admin: admin / ${adminPassword}`)
  process.exit(0)
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
