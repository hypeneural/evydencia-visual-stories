import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("./dist");
const PUBLIC_DIR = path.resolve("./public");

const IMAGES_DATA = [
  {
    loc: "https://evydencia.com.br/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/GESTANTES.png",
        title: "Estúdio Evydência em Tijucas - Ensaios de Família e Gestante",
        caption: "Estúdio de fotografia no bairro Universitário em Tijucas SC"
      },
      {
        url: "https://evydencia.com.br/imgs/anderson.jpg",
        title: "Anderson - Fotógrafo Fundador do Estúdio Evydência",
        caption: "Fotógrafo profissional especialista em retratos e famílias"
      },
      {
        url: "https://evydencia.com.br/imgs/elaine.jpg",
        title: "Elaine - Fotógrafa Fundadora do Estúdio Evydência",
        caption: "Fotógrafa especialista em gestantes e primeira infância"
      }
    ]
  },
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
    loc: "https://evydencia.com.br/blog/o-que-vestir-ensaio-familia/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/GESTANTES.png",
        title: "O Que Vestir no Ensaio de Família - Dicas de Roupas e Cores",
        caption: "Paletas harmônicas para fotos de família em estúdio e externo"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/blog/smash-the-cake-como-funciona/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/SMASH_THE_CAKE.png",
        title: "Smash the Cake em Tijucas - Preparação e Dicas",
        caption: "Sessão divertida de 1 ano com banho quentinho no Estúdio Evydência"
      }
    ]
  },
  {
    loc: "https://evydencia.com.br/blog/foto-perfil-profissional-linkedin/",
    images: [
      {
        url: "https://evydencia.com.br/imgs/CORPORATIVO.png",
        title: "Foto Profissional para LinkedIn e Negócios",
        caption: "Retrato corporativo com iluminação e postura de autoridade"
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

function updateSitemapIndex(indexPath) {
  if (!fs.existsSync(indexPath)) return;
  let indexContent = fs.readFileSync(indexPath, "utf-8");
  if (!indexContent.includes("sitemap-images.xml")) {
    indexContent = indexContent.replace(
      "</sitemapindex>",
      `  <sitemap>\n    <loc>https://evydencia.com.br/sitemap-images.xml</loc>\n  </sitemap>\n</sitemapindex>`
    );
    fs.writeFileSync(indexPath, indexContent, "utf-8");
    console.log("✅ sitemap-images.xml indexado com sucesso no sitemap-index.xml principal!");
  }
}

function main() {
  const xmlContent = generateXml();
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap-images.xml"), xmlContent, "utf-8");

  if (fs.existsSync(DIST_DIR)) {
    fs.writeFileSync(path.join(DIST_DIR, "sitemap-images.xml"), xmlContent, "utf-8");
    updateSitemapIndex(path.join(DIST_DIR, "sitemap-index.xml"));
  }

  console.log("✅ Image Sitemap gerado com sucesso em public/sitemap-images.xml e dist/sitemap-images.xml");
}

main();
