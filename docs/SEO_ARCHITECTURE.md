# Arquitetura Técnica de SEO - Estúdio Evydência (evydencia.com.br)

Este documento define os princípios arquiteturais, a engenharia de rastreamento, a estrutura de silos e o grafo de dados estruturados do site **Estúdio Evydência**.

---

## 1. Princípios da Arquitetura

1. **Static Site Generation (SSG) Puro:**
   - 100% das páginas são pré-renderizadas no build pelo Astro (`output: "static"`).
   - O Googlebot, Bingbot e motores de busca por IA recebem o HTML completo imediatamente sem necessidade de execução de JavaScript client-side para montar o DOM.
2. **Zero Inchaço de Plugins (Zero Plugin Tree):**
   - Em vez de pacotes de terceiros pesados (`astro-seo`, `astro-robots`, etc.), utilizamos componentes nativos Astro (`SEOHead.astro`, `JsonLd.astro`, `Breadcrumbs.astro`), garantindo controle absoluto de cabeçalhos e metadados.
3. **Imagens Nativas para o Google Imagens:**
   - Imagens fotográficas de portfólio são renderizadas via tags `<picture>` / `<img>` com `src`, `alt` descritivo, dimensões (`width`/`height`) e mapeadas no `sitemap-images.xml`.
   - Nenhuma imagem essencial é servida exclusivamente como `background-image` CSS.
4. **Normalização Canônica Estrita:**
   - Domínio sem `www.` com HTTPS forçado: `https://evydencia.com.br/`.
   - Trailing slash obrigatório em todas as URLs de diretório (`trailingSlash: "always"`).

---

## 2. Estrutura de Silos e Prevenção de Canibalização

```
https://evydencia.com.br/
├── / (Home: proprietária exclusiva de "Estúdio de Fotos em Tijucas SC")
├── /ensaios/ (Hub de Ensaios)
│   ├── /ensaios/gestante-tijucas/
│   ├── /ensaios/familia-tijucas/
│   ├── /ensaios/infantil-tijucas/
│   ├── /ensaios/acompanhamento-bebe-tijucas/
│   ├── /ensaios/smash-the-cake-tijucas/
│   ├── /ensaios/casal-tijucas/
│   └── /ensaios/corporativo-tijucas/
├── /eventos/ (Hub de Eventos)
│   ├── /eventos/batizado-tijucas/
│   └── /eventos/aniversario-infantil-tijucas/
├── /portfolio/ (Hub de Portfólio)
│   ├── /portfolio/gestante/
│   ├── /portfolio/familia/
│   ├── /portfolio/infantil/
│   └── /portfolio/corporativo/
├── /estudio/ (Estrutura física, climatização e conforto em Tijucas)
├── /sobre/ (História dos fundadores Anderson e Elaine, 12+ anos)
├── /imprensa/ (Autoridade E-E-A-T e matérias na mídia)
├── /contato/ (NAP oficial, Waze, Google Maps e WhatsApp)
└── /blog/ (Guias educativos e dicas de preparação para ensaios)
    ├── /blog/quando-fazer-ensaio-gestante/
    └── /blog/como-preparar-crianca-primeiro-ensaio/
```

---

## 3. Grafo de Entidade Schema.org (`schema-dts`)

O nó central `@id: "https://evydencia.com.br/#business"` unifica a entidade no Google Knowledge Graph:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["PhotographyBusiness", "LocalBusiness"],
      "@id": "https://evydencia.com.br/#business",
      "name": "Estúdio Evydência",
      "legalName": "Estúdio Evydência",
      "alternateName": "Evydência Fotografia",
      "url": "https://evydencia.com.br/",
      "telephone": "+5548996425287",
      "email": "contato@evydencia.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Mauri Afonso da Silva, 892",
        "addressLocality": "Tijucas",
        "addressRegion": "SC",
        "postalCode": "88200-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.2417,
        "longitude": -48.6467
      },
      "founder": [
        { "@type": "Person", "name": "Anderson", "jobTitle": "Fotógrafo Fundador" },
        { "@type": "Person", "name": "Elaine", "jobTitle": "Fotógrafa Fundadora" }
      ]
    }
  ]
}
```

---

## 4. Pipeline de Automação de Build

O build automatizado executa as seguintes etapas:
1. `astro check`: Validação estrita de tipos TypeScript (`strictest`).
2. `astro build`: Compilação estática SSG de todas as 25 rotas.
3. `seo:images`: Geração do `sitemap-images.xml` e injeção no `sitemap-index.xml`.
4. `seo:validate`: Script que inspeciona todos os HTMLs gerados e valida:
   - `<title>` único e semântico em cada página.
   - `<meta name="description">` entre 50 e 200 caracteres.
   - Tag `<h1>` única e com texto por página.
   - Canonical HTTPS sem `www` com barra final.
   - JSON-LD válido em todas as páginas.
   - Zero links internos quebrados (404).
   - 100% de tags `<img>` com `alt` preenchido.
