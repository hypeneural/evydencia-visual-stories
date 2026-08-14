import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("./dist");
const PUBLIC_DIR = path.resolve("./public");

const IMAGES_DATA = [
  {
    loc: "https://evydencia.com.br/ensaios/gestante-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/GESTANTES.png",
        title: "Ensaio de Gestante em Tijucas - Estúdio Evydência",
        caption: "Gestante fotografada em estúdio climatizado no Estúdio Evydência em Tijucas SC"
      },
      {
        url: "https://evydencia.com.br/imgs/REVELACAO.png",
        title: "Ensaio de Chá Revelação em Tijucas",
        caption: "Comemoração de chá revelação da gravidez"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/ensaios/familia-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/GESTANTES.png",
        title: "Ensaio de Família em Tijucas",
        caption: "Família reunida para sessão fotográfica com Anderson e Elaine"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/ensaios/infantil-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/ACOMPANHAMENO_MENSAL.png",
        title: "Ensaio Infantil e Primeira Infância em Tijucas",
        caption: "Sessão lúdica e divertida de fotografia infantil no Estúdio Evydência"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/ensaios/smash-the-cake-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/SMASH_THE_CAKE.png",
        title: "Ensaio Smash the Cake 1 Aninho em Tijucas",
        caption: "Comemoração do primeiro aniversário do bebê com bolo e banho quentinho"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/ensaios/corporativo-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/CORPORATIVO.png",
        title: "Retrato Corporativo e Foto de Perfil Profissional em Tijucas",
        caption: "Fotografia corporativa com iluminação de alto padrão para profissionais e executivos"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/eventos/batizado-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/BATIZADOS.png",
        title: "Cobertura Fotográfica de Batizados em Tijucas",
        caption: "Registro da cerimônia religiosa de batizado com respeito e discrição"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/eventos/aniversario-infantil-tijucas/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/ANIVERSARIO.png",
        title: "Fotografia de Festa de Aniversário Infantil",
        caption: "Cobertura fotográfica completa de festa infantil e parabéns em Tijucas"
      }
    ]
  }
];

function generateXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const page of IMAGES_DATA) {
    xml += `  <url>\n`;
    xml += `    <loc>${page.loc}</loc>\n`;
    for (const img of page.images) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${img.url}</image:loc>\n`;
      xml += `      <image:title>${img.title}</image:title>\n`;
      xml += `      <image:caption>${img.caption}</image:caption>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

const xmlContent = generateXml();

// Salvar no public/ e no dist/ se existir
fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap-images.xml"), xmlContent, "utf-8");

if (fs.existsSync(DIST_DIR)) {
  fs.writeFileSync(path.join(DIST_DIR, "sitemap-images.xml"), xmlContent, "utf-8");

  // Atualizar sitemap-index.xml para incluir sitemap-images.xml se ainda não estiver incluso
  const sitemapIndexPath = path.join(DIST_DIR, "sitemap-index.xml");
  if (fs.existsSync(sitemapIndexPath)) {
    let indexContent = fs.readFileSync(sitemapIndexPath, "utf-8");
    if (!indexContent.includes("sitemap-images.xml")) {
      indexContent = indexContent.replace(
        "</sitemapindex>",
        "<sitemap><loc>https://evydencia.com.br/sitemap-images.xml</loc></sitemap></sitemapindex>"
      );
      fs.writeFileSync(sitemapIndexPath, indexContent, "utf-8");
      console.log("✅ sitemap-images.xml indexado com sucesso no sitemap-index.xml principal!");
    }
  }
}

console.log("✅ Image Sitemap gerado com sucesso em public/sitemap-images.xml e dist/sitemap-images.xml");
