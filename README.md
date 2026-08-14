# Estúdio Evydência — Website Oficial & Plataforma de SEO de Alta Performance

Site institucional e portfólio de alta performance do **Estúdio Evydência** (`https://evydencia.com.br/`), desenvolvido em **Astro 5 SSG (Static Site Generation)** com **Tailwind CSS v4**, **TypeScript (strictest)**, **schema-dts**, **Playwright** e automações rigorosas de auditoria de SEO.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://docs.astro.build/en/) | Static Site Generation (HTML pré-renderizado no build) |
| **Renderização** | `output: "static"` | HTML estático puro, 0 dependência de serverless |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-3) | CSS utilitário moderno via plugin `@tailwindcss/vite` |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estrita com preset `astro/tsconfigs/strictest` |
| **Dados Estruturados** | [schema-dts](https://github.com/google/schema-dts) | Tipagem Schema.org v30 oficial para JSON-LD |
| **Conteúdo** | [Content Collections](https://docs.astro.build/en/guides/content-collections/) | Validação de frontmatter com Zod |
| **Sitemap** | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Geração automática de sitemaps estáticos |
| **Testes E2E** | [Playwright](https://playwright.dev/docs/intro) | Testes end-to-end e validação de acessibilidade |
| **Auditoria** | [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) | Orçamentos e métricas contínuas de Core Web Vitals |

---

## 📚 Documentação Técnica Interna

- [`docs/SEO_ARCHITECTURE.md`](docs/SEO_ARCHITECTURE.md): Arquitetura de silos, entidade central e políticas de indexação.
- [`docs/CONTENT_MAP.md`](docs/CONTENT_MAP.md): Matriz de páginas, títulos, H1s e intenções de busca.
- [`docs/NAP_SOURCE_OF_TRUTH.md`](docs/NAP_SOURCE_OF_TRUTH.md): Dados cadastrais imutáveis (Nome, Endereço, Telefone, Horários).
- [`docs/REDIRECT_MAP.md`](docs/REDIRECT_MAP.md): Mapeamento de redirecionamentos 301 legados.

---

## 🚀 Comandos de Desenvolvimento e Produção

```powershell
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Verificar diagnósticos TypeScript e Astro
npm run check

# Executar build de produção com gerador de sitemaps e validação total de SEO
npm run build

# Pré-visualizar o build estático gerado em dist/
npm run preview

# Executar a bateria de testes automatizados E2E
npm test

# Disparar URLs atualizadas para o protocolo IndexNow (Bing / Buscadores)
node scripts/submit-indexnow.mjs
```

---

## 🔗 Referências Oficiais de SEO & Performance

- **Google SEO Starter Guide:** [https://developers.google.com/search/docs/fundamentals/seo-starter-guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- **Google Helpful Content:** [https://developers.google.com/search/docs/fundamentals/creating-helpful-content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Google Images Best Practices:** [https://developers.google.com/search/docs/appearance/google-images](https://developers.google.com/search/docs/appearance/google-images)
- **Google Core Web Vitals:** [https://developers.google.com/search/docs/appearance/core-web-vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- **Google LocalBusiness Schema:** [https://developers.google.com/search/docs/appearance/structured-data/local-business](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- **Google AI Search Guidance:** [https://developers.google.com/search/docs/fundamentals/ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
