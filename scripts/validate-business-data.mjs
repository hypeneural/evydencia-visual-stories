import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("./dist");

if (!fs.existsSync(DIST_DIR)) {
  console.error("❌ Erro: Diretório dist/ não encontrado. Execute o build antes de validar os dados de negócio.");
  process.exit(1);
}

const FORBIDDEN_PATTERNS = [
  { pattern: /88200-000/i, label: "CEP Antigo (88200-000)", fix: "Usar 88201-568" },
  { pattern: /(?<!\d)9642-5287(?!\d)/i, label: "Telefone sem 9º dígito (9642-5287)", fix: "Usar 99642-5287 ou +5548996425287" },
  { pattern: /13h\s*às\s*18h/i, label: "Horário Antigo (13h às 18h)", fix: "Usar 09h às 12h e 14h às 18h" },
  { pattern: /08:30h?\s*às\s*11h/i, label: "Horário de Sábado Antigo (08:30 às 11h)", fix: "Usar 08:30 às 12:00 ou mediante agendamento" },
  { pattern: /Mais de 12\s*anos/i, label: "Claim Temporal Antigo (Mais de 12 anos)", fix: "Usar 'Desde 2011'" },
  { pattern: /Mais de 13\s*anos/i, label: "Claim Temporal Antigo (Mais de 13 anos)", fix: "Usar 'Desde 2011'" },
  { pattern: /13\+\s*anos/i, label: "Claim Temporal Antigo (13+ anos)", fix: "Usar 'Desde 2011'" },
  { pattern: /Portal da Cidade/i, label: "Menção de Imprensa Legada (Portal da Cidade)", fix: "Usar matérias reais (VipSocial, Galera Mix)" }
];

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
console.log(`\n🛡️ Validando consistência de dados empresariais em ${htmlFiles.length} arquivos HTML estáticos em dist/...\n`);

let violationCount = 0;

for (const filePath of htmlFiles) {
  const relPath = path.relative(DIST_DIR, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath, "utf-8");

  for (const { pattern, label, fix } of FORBIDDEN_PATTERNS) {
    if (pattern.test(content)) {
      console.error(`❌ [${relPath}] Violação de Dados de Negócio: ${label}.`);
      console.error(`   👉 Correção Obrigatória: ${fix}`);
      violationCount++;
    }
  }
}

if (violationCount > 0) {
  console.error(`\n❌ Falha na Validação de Dados de Negócio: ${violationCount} inconsistências encontradas.\n`);
  process.exit(1);
} else {
  console.log(`✅ Consistência Global de Negócio Aprovada: 0 inconsistências em 100% dos arquivos HTML!\n`);
}
