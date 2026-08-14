import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("./dist");

if (!fs.existsSync(DIST_DIR)) {
  console.error("❌ Erro: Diretório dist/ não encontrado.");
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
console.log(`\n🔗 Validando integridade de links internos em ${htmlFiles.length} arquivos HTML...\n`);

let errorCount = 0;
let totalLinksChecked = 0;

for (const filePath of htmlFiles) {
  const relPath = path.relative(DIST_DIR, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath, "utf-8");

  const hrefMatches = [...content.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>/gi)];

  for (const match of hrefMatches) {
    const href = match[1].trim();

    // Ignorar links externos, âncoras locais simples, javascript:, mailto:, tel:, whatsapp
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      continue;
    }

    totalLinksChecked++;

    // Remover âncora e query params para validar existência do arquivo físico
    const cleanHref = href.split("#")[0].split("?")[0];
    if (!cleanHref || cleanHref === "/") continue;

    // Normalizar caminho relativo ao dist/
    const targetPath1 = path.join(DIST_DIR, cleanHref, "index.html");
    const targetPath2 = path.join(DIST_DIR, cleanHref.endsWith(".html") ? cleanHref : `${cleanHref}.html`);
    const targetPath3 = path.join(DIST_DIR, cleanHref);

    if (!fs.existsSync(targetPath1) && !fs.existsSync(targetPath2) && !fs.existsSync(targetPath3)) {
      console.error(`❌ [${relPath}] Link quebrado (404): href="${href}" -> não encontrado em dist/`);
      errorCount++;
    }
  }
}

if (errorCount > 0) {
  console.error(`\n❌ Falha na validação de links: ${errorCount} links quebrados encontrados.\n`);
  process.exit(1);
} else {
  console.log(`\n✅ Validação de links concluída: ${totalLinksChecked} links internos verificados sem nenhum 404!\n`);
}
