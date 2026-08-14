import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("./dist");

if (!fs.existsSync(DIST_DIR)) {
  console.error("❌ Erro: Diretório dist/ não encontrado. Execute 'npm run build:astro' antes da validação.");
  process.exit(1);
}

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith(".html")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(DIST_DIR);
console.log(`\n🔍 Validando SEO em ${htmlFiles.length} arquivos HTML estáticos gerados em dist/...\n`);

let errorCount = 0;
const seenTitles = new Map();

for (const filePath of htmlFiles) {
  const relPath = path.relative(DIST_DIR, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath, "utf-8");

  // Pular validações rígidas de indexação na página 404
  const is404 = relPath.includes("404");

  // 1. Validar <title>
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ [${relPath}] <title> ausente ou vazio.`);
    errorCount++;
  } else {
    const titleText = titleMatch[1].trim();
    if (!is404 && seenTitles.has(titleText)) {
      console.error(`❌ [${relPath}] <title> duplicado! Já utilizado em: ${seenTitles.get(titleText)}`);
      errorCount++;
    } else {
      seenTitles.set(titleText, relPath);
    }
  }

  // 2. Validar <meta name="description">
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ [${relPath}] <meta name="description"> ausente ou vazia.`);
    errorCount++;
  } else {
    const descLength = descMatch[1].trim().length;
    if (descLength < 50 || descLength > 200) {
      console.warn(`⚠️ [${relPath}] Tamanho da description fora do ideal (${descLength} caracteres).`);
    }
  }

  // 3. Validar <h1>
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) {
    console.error(`❌ [${relPath}] <h1> ausente.`);
    errorCount++;
  } else if (h1Matches.length > 1) {
    console.error(`❌ [${relPath}] Múltiplas tags <h1> encontradas (${h1Matches.length}).`);
    errorCount++;
  } else {
    const h1Text = h1Matches[0][1].replace(/<[^>]+>/g, "").trim();
    if (!h1Text) {
      console.error(`❌ [${relPath}] <h1> está vazio de texto legível.`);
      errorCount++;
    }
  }

  // 4. Validar <link rel="canonical">
  const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
  if (!canonicalMatch || !canonicalMatch[1].trim()) {
    console.error(`❌ [${relPath}] <link rel="canonical"> ausente.`);
    errorCount++;
  } else {
    const canonicalUrl = canonicalMatch[1].trim();
    if (canonicalUrl.startsWith("http://")) {
      console.error(`❌ [${relPath}] Canonical aponta para HTTP inseguro: ${canonicalUrl}`);
      errorCount++;
    }
    if (canonicalUrl.includes("www.evydencia.com.br")) {
      console.error(`❌ [${relPath}] Canonical aponta para www: ${canonicalUrl}`);
      errorCount++;
    }
    if (!canonicalUrl.endsWith("/") && !canonicalUrl.endsWith(".xml")) {
      console.error(`❌ [${relPath}] Canonical sem trailing slash: ${canonicalUrl}`);
      errorCount++;
    }
  }

  // 5. Validar Schema.org JSON-LD
  if (!is404) {
    const jsonLdMatch = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    if (!jsonLdMatch) {
      console.error(`❌ [${relPath}] Script JSON-LD ausente.`);
      errorCount++;
    } else {
      try {
        const parsed = JSON.parse(jsonLdMatch[1]);
        const jsonStr = JSON.stringify(parsed);
        const validTypes = ["LocalBusiness", "Service", "BlogPosting", "Article", "WebPage", "WebSite"];
        const hasValidType = validTypes.some(t => jsonStr.includes(t));
        if (!hasValidType) {
          console.warn(`⚠️ [${relPath}] Schema JSON-LD sem tipo principal reconhecido.`);
        }
      } catch (e) {
        console.error(`❌ [${relPath}] JSON-LD com sintaxe inválida: ${e.message}`);
        errorCount++;
      }
    }
  }
}

if (errorCount > 0) {
  console.error(`\n❌ Falha na validação de SEO: ${errorCount} erros encontrados.\n`);
  process.exit(1);
} else {
  console.log(`\n✅ Validação de SEO aprovada com 100% de conformidade em todos os arquivos!\n`);
}
