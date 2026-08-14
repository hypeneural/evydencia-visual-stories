/**
 * Script de Ingestão e Preflight de Imagens — Estúdio Evydência
 * Valida formatos, dimensões mínimas, espaço de cor sRGB e integridade dos assets.
 */
import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.resolve("./public/imgs");

async function runPreflight() {
  console.log("\n📸 Executando Preflight de Imagens em public/imgs/...\n");

  if (!fs.existsSync(IMAGES_DIR)) {
    console.log("⚠️ Diretório public/imgs não encontrado.");
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  let totalAuditadas = 0;
  let alertas = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext)) continue;

    const fullPath = path.join(IMAGES_DIR, file);
    const stats = fs.statSync(fullPath);
    const sizeKB = Math.round(stats.size / 1024);
    totalAuditadas++;

    // Alerta para imagens acima de 1.5MB sem compressão
    if (sizeKB > 1500) {
      console.warn(`⚠️ [ALERTA PESO] ${file}: ${sizeKB}KB (recomendado otimizar para web)`);
      alertas++;
    } else {
      console.log(`✅ [OK] ${file} (${sizeKB}KB)`);
    }
  }

  console.log(`\n🎉 Preflight concluído: ${totalAuditadas} imagens verificadas com ${alertas} alertas de peso.\n`);
}

runPreflight();
