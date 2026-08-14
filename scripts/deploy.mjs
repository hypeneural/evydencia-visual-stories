import path from "node:path";
import fs from "node:fs";
import SftpClient from "ssh2-sftp-client";
import * as ftp from "basic-ftp";

const CONFIG = {
  host: "186.209.113.134",
  port: 22,
  username: "evydencia.com.br_haiv4a7bvgb",
  password: "Tcy6aPa9hBn@hv~8"
};

const DIST_DIR = path.resolve("./dist");

async function deploySFTP() {
  console.log(`\n🚀 Conectando via SFTP em ${CONFIG.host}:${CONFIG.port} como ${CONFIG.username}...`);
  const sftp = new SftpClient();

  try {
    await sftp.connect({
      host: CONFIG.host,
      port: CONFIG.port,
      username: CONFIG.username,
      password: CONFIG.password,
      readyTimeout: 20000
    });

    console.log("✅ Conexão SFTP estabelecida com sucesso!");

    // Listar diretórios na raiz remota para identificar o document root
    const rootList = await sftp.list(".");
    console.log("📂 Conteúdo do diretório remoto atual:");
    rootList.forEach(item => console.log(` - ${item.type === 'd' ? '[DIR]' : '[FILE]'} ${item.name}`));

    let targetDir = ".";
    if (rootList.some(item => item.name === "httpdocs")) {
      targetDir = "./httpdocs";
    } else if (rootList.some(item => item.name === "public_html")) {
      targetDir = "./public_html";
    }

    console.log(`\n📤 Iniciando upload de dist/ para ${targetDir}...`);
    
    // Upload recursivo de todo o dist/
    await sftp.uploadDir(DIST_DIR, targetDir);
    console.log("✅ Arquivos estáticos de dist/ enviados com sucesso!");

    // Garantir upload do .htaccess
    const htaccessPath = path.resolve("./public/.htaccess");
    if (fs.existsSync(htaccessPath)) {
      await sftp.put(htaccessPath, `${targetDir}/.htaccess`);
      console.log("✅ Arquivo .htaccess enviado com sucesso!");
    }

    await sftp.end();
    return true;
  } catch (error) {
    console.warn(`⚠️ Falha no deploy via SFTP: ${error.message}`);
    try { await sftp.end(); } catch (_) {}
    return false;
  }
}

async function deployFTPS() {
  console.log(`\n🚀 Tentando conexão alternativa via FTPS (porta 21)...`);
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: CONFIG.host,
      port: 21,
      user: CONFIG.username,
      password: CONFIG.password,
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    });

    console.log("✅ Conexão FTPS estabelecida!");
    const list = await client.list();
    console.log("📂 Conteúdo FTP remoto:");
    list.forEach(item => console.log(` - ${item.isDirectory ? '[DIR]' : '[FILE]'} ${item.name}`));

    let targetDir = "/";
    if (list.some(item => item.name === "httpdocs")) {
      targetDir = "/httpdocs";
    } else if (list.some(item => item.name === "public_html")) {
      targetDir = "/public_html";
    }

    console.log(`📤 Enviando dist/ para ${targetDir}...`);
    await client.uploadFromDir(DIST_DIR, targetDir);
    
    const htaccessPath = path.resolve("./public/.htaccess");
    if (fs.existsSync(htaccessPath)) {
      await client.uploadFrom(htaccessPath, `${targetDir}/.htaccess`);
      console.log("✅ .htaccess enviado!");
    }

    client.close();
    return true;
  } catch (err) {
    console.error(`❌ Falha no deploy FTPS: ${err.message}`);
    client.close();
    return false;
  }
}

async function run() {
  const sftpOk = await deploySFTP();
  if (!sftpOk) {
    const ftpOk = await deployFTPS();
    if (!ftpOk) {
      console.error("\n❌ Não foi possível realizar o deploy automático para a hospedagem.");
      process.exit(1);
    }
  }
  console.log("\n🎉 Deploy finalizado com sucesso!");
}

run();
