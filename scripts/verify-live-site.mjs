import https from "node:https";
import http from "node:http";

const DOMAIN = "https://evydencia.com.br";

const URLS_TO_TEST = [
  { url: "https://evydencia.com.br/", expectedStatus: 200, label: "Home Principal" },
  { url: "https://evydencia.com.br/natal/", expectedStatus: 200, label: "Página de Natal" },
  { url: "https://evydencia.com.br/ensaios/gestante-tijucas/", expectedStatus: 200, label: "Ensaio Gestante" },
  { url: "https://evydencia.com.br/ensaios/familia-tijucas/", expectedStatus: 200, label: "Ensaio Família" },
  { url: "https://evydencia.com.br/eventos/batizado-tijucas/", expectedStatus: 200, label: "Batizado (EventLayout)" },
  { url: "https://evydencia.com.br/estudio/", expectedStatus: 200, label: "O Estúdio (Tour Virtual)" },
  { url: "https://evydencia.com.br/sobre/", expectedStatus: 200, label: "Sobre Nós (Desde 2011)" },
  { url: "https://evydencia.com.br/imprensa/", expectedStatus: 200, label: "Imprensa (Jornal Razão / Visor)" },
  { url: "https://evydencia.com.br/portfolio/", expectedStatus: 200, label: "Portfólio Hub" },
  { url: "https://evydencia.com.br/contato/", expectedStatus: 200, label: "Contato & Localização" },
  { url: "https://evydencia.com.br/robots.txt", expectedStatus: 200, label: "Robots.txt" },
  { url: "https://evydencia.com.br/sitemap-index.xml", expectedStatus: 200, label: "Sitemap Index XML" },
  { url: "https://evydencia.com.br/sitemap-images.xml", expectedStatus: 200, label: "Sitemap Imagens XML" },
  { url: "http://evydencia.com.br/", expectedStatus: 301, label: "Redirect HTTP -> HTTPS" },
  { url: "https://www.evydencia.com.br/", expectedStatus: 301, label: "Redirect WWW -> Non-WWW" },
  { url: "https://evydencia.com.br/ensaio-gestante", expectedStatus: 301, label: "Redirect Legado /ensaio-gestante -> /ensaios/gestante-tijucas/" }
];

async function checkUrl(testCase) {
  return new Promise((resolve) => {
    const client = testCase.url.startsWith("https") ? https : http;
    const req = client.get(testCase.url, { timeout: 10000 }, (res) => {
      const isSuccess = res.statusCode === testCase.expectedStatus;
      const location = res.headers.location || "";
      resolve({
        ...testCase,
        statusCode: res.statusCode,
        isSuccess,
        location
      });
    });

    req.on("error", (err) => {
      resolve({
        ...testCase,
        statusCode: 0,
        isSuccess: false,
        error: err.message
      });
    });

    req.on("timeout", () => {
      req.destroy();
      resolve({
        ...testCase,
        statusCode: 0,
        isSuccess: false,
        error: "Timeout após 10s"
      });
    });
  });
}

async function runLiveAudit() {
  console.log(`\n🌐 Iniciando Auditoria ao Vivo em ${DOMAIN}...\n`);
  let passedCount = 0;

  for (const testCase of URLS_TO_TEST) {
    const result = await checkUrl(testCase);
    if (result.isSuccess) {
      console.log(`✅ [${result.statusCode}] ${result.label}: ${result.url} ${result.location ? `-> ${result.location}` : ""}`);
      passedCount++;
    } else {
      console.error(`❌ [${result.statusCode}] ${result.label}: ${result.url} (Esperado: ${result.expectedStatus}) ${result.error ? `- Erro: ${result.error}` : ""}`);
    }
  }

  console.log(`\n📊 Resultado da Auditoria Live: ${passedCount}/${URLS_TO_TEST.length} verificações aprovadas com sucesso!\n`);
}

runLiveAudit();
