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
console.log(`\n🖼️ Validando atributos alt e dimensões de imagens em ${htmlFiles.length} arquivos HTML...\n`);

let errorCount = 0;
let totalImagesChecked = 0;

for (const filePath of htmlFiles) {
  const relPath = path.relative(DIST_DIR, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath, "utf-8");

  const imgMatches = [...content.matchAll(/<img([^>]+)>/gi)];

  for (const match of imgMatches) {
    totalImagesChecked++;
    const imgAttrs = match[1];

    // Verificar se existe atributo alt
    const altMatch = imgAttrs.match(/alt=["']([^"']*)["']/i);
    if (!altMatch || !altMatch[1].trim()) {
      console.error(`❌ [${relPath}] <img> sem atributo alt ou com alt vazio: <img${imgAttrs.slice(0, 50)}...>`);
      errorCount++;
    }

    // Verificar src
    const srcMatch = imgAttrs.match(/src=["']([^"']*)["']/i);
    if (!srcMatch || !srcMatch[1].trim()) {
      console.error(`❌ [${relPath}] <img> sem atributo src: <img${imgAttrs.slice(0, 50)}...>`);
      errorCount++;
    }
  }
}

if (errorCount > 0) {
  console.error(`\n❌ Falha na validação de imagens: ${errorCount} erros de acessibilidade/SEO em tags <img>.\n`);
  process.exit(1);
} else {
  console.log(`\n✅ Validação de imagens aprovada: ${totalImagesChecked} tags <img> verificadas com sucesso!\n`);
}
