# Mapeamento de Redirecionamentos 301 (REDIRECT_MAP.md)

Este documento mapeia todas as regras de redirecionamento 301 (Permanente) para evitar links quebrados (404), canibalização e resíduos de configurações legadas (WordPress, URLs sem barra ou com `www`).

---

## 1. Regras de Padronização Canônica de Host

| Origem (Padrão URL) | Destino (Canônico) | Status HTTP | Motivo |
| :--- | :--- | :---: | :--- |
| `http://evydencia.com.br/*` | `https://evydencia.com.br/*` | `301` | Forçar criptografia HTTPS |
| `http://www.evydencia.com.br/*` | `https://evydencia.com.br/*` | `301` | Forçar HTTPS e unificação de host |
| `https://www.evydencia.com.br/*` | `https://evydencia.com.br/*` | `301` | Eliminar versão com `www.` |

---

## 2. Redirecionamentos de Sitemaps e Endpoints Legados

| URL Antiga / Legada | Destino Atualizado | Status HTTP | Observação |
| :--- | :--- | :---: | :--- |
| `/wp-sitemap.xml` | `/sitemap-index.xml` | `301` | Eliminar resíduo legado do WordPress |
| `/wp-sitemap-posts-page-1.xml` | `/sitemap-pages.xml` | `301` | Redirecionamento de sitemap de páginas |
| `/sitemap.xml` | `/sitemap-index.xml` | `301` | Padronização para o sitemap index gerado pelo Astro |
| `/wp-content/*` | `/` | `301` | Bloquear e redirecionar acessos a assets legados |
| `/wp-admin/` | `/` | `301` | Segurança e eliminação de 404 para bots |
| `/wp-login.php` | `/` | `301` | Segurança contra tentativas de varredura |

---

## 3. Redirecionamentos de Rotas e Páginas

| URL Antiga / Âncora | Nova URL Canônica | Status HTTP |
| :--- | :--- | :---: |
| `/servicos` | `/ensaios/` | `301` |
| `/galeria` | `/portfolio/` | `301` |
| `/gestantes` | `/ensaios/gestante-tijucas/` | `301` |
| `/familia` | `/ensaios/familia-tijucas/` | `301` |
| `/infantil` | `/ensaios/infantil-tijucas/` | `301` |
| `/corporativo` | `/ensaios/corporativo-tijucas/` | `301` |
| `/eventos-fotos` | `/eventos/` | `301` |
