/**
 * Script de submissão IndexNow para notificar imediatamente buscadores (Bing, etc.)
 */
const HOST = "evydencia.com.br";
const KEY = "evydencia-indexnow-key-2026";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/ensaios/`,
  `https://${HOST}/ensaios/gestante-tijucas/`,
  `https://${HOST}/ensaios/familia-tijucas/`,
  `https://${HOST}/ensaios/infantil-tijucas/`,
  `https://${HOST}/ensaios/acompanhamento-bebe-tijucas/`,
  `https://${HOST}/ensaios/smash-the-cake-tijucas/`,
  `https://${HOST}/ensaios/casal-tijucas/`,
  `https://${HOST}/ensaios/corporativo-tijucas/`,
  `https://${HOST}/eventos/`,
  `https://${HOST}/eventos/batizado-tijucas/`,
  `https://${HOST}/eventos/aniversario-infantil-tijucas/`,
  `https://${HOST}/portfolio/`,
  `https://${HOST}/estudio/`,
  `https://${HOST}/sobre/`,
  `https://${HOST}/imprensa/`,
  `https://${HOST}/contato/`,
  `https://${HOST}/blog/`
];

async function submitIndexNow() {
  console.log(`\n🚀 Preparando envio de ${URL_LIST.length} URLs para o protocolo IndexNow...\n`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow disparado com sucesso! (Status: ${response.status})`);
    } else {
      console.warn(`⚠️ Resposta do IndexNow: status ${response.status} (${response.statusText})`);
    }
  } catch (error) {
    console.warn(`⚠️ Não foi possível conectar ao endpoint IndexNow no momento: ${error.message}`);
  }
}

submitIndexNow();
