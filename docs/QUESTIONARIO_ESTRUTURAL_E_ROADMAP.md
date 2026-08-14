# Documento de Melhorias Estruturais & Questionário de Decisão Arquitetural — Estúdio Evydência (`evydencia.com.br`)

Este documento consolida uma **visão arquitetural de longo prazo** para o Estúdio Evydência, formulando perguntas e propostas práticas para transformar a plataforma no site de estúdio fotográfico mais rápido, autoritativo e com maior taxa de conversão da região.

---

## 🏛️ Eixo 1: Arquitetura de Informação, Silos Semânticos & Conteúdo Perene

### ❓ Pergunta 1.1: Estruturação de Silos Temáticos (Hub & Spoke)
* **Contexto:** Atualmente os ensaios estão divididos em páginas individuais sob `/ensaios/`.
* **Proposta Estrutural:** Agrupar conteúdos por grandes temas de interesse familiar para concentrar o link equity (PageRank interno):
  1. **Silo Maternidade & Bebê:** `/ensaios/gestante-tijucas/` ↔ `/ensaios/acompanhamento-bebe-tijucas/` ↔ `/ensaios/smash-the-cake-tijucas/` ↔ Artigos de Gestação e Primeiro Aninho.
  2. **Silo Família & Conexão:** `/ensaios/familia-tijucas/` ↔ `/ensaios/infantil-tijucas/` ↔ `/ensaios/casal-tijucas/` ↔ Artigos de Vestuário e Dicas de Sessão.
  3. **Silo Corporativo & Posicionamento:** `/ensaios/corporativo-tijucas/` ↔ Artigos de LinkedIn e Imagem Profissional.
* **Questão de Decisão:** Devemos reforçar os blocos de navegação lateral ou de rodapé dedicados exclusivamente a cada silo temático nas próximas páginas?

---

### ❓ Pergunta 1.2: Hub Sazonal Permanente (Natal, Dia das Mães, Dia dos Pais)
* **Problema Comum em Estúdios:** Criar páginas sazonais temporárias que são excluídas após o evento (ex: `/natal-2024/`), gerando links quebrados (404) e perda total da autoridade de ranqueamento conquistada na imprensa e no Google.
* **Proposta Arquitetural:** Criar **URLs permanentes e perenes**:
  * `https://evydencia.com.br/sazonais/ensaio-de-natal/`
  * `https://evydencia.com.br/sazonais/dia-das-maes/`
  * `https://evydencia.com.br/sazonais/dia-dos-pais/`
* **Mecanismo de Ciclo de Vida:**
  * Durante a campanha: Apresenta cenários do ano vigente, valores, fotos de amostra e agenda aberta.
  * Fora de época: Exibe retrospectiva de fotos dos anos anteriores, depoimentos e um botão para "Entrar na Lista de Espera / Aviso Antecipado para o Próximo Ano".
* **Questão de Decisão:** Desejam que estruturemos essa coleção `src/content/seasonals/` para as campanhas de Natal e Dia das Mães?

---

### ❓ Pergunta 1.3: Hub de Locações Externas no Litoral SC ("Guia de Cenários")
* **Oportunidade de Busca Local:** Centenas de noivos, gestantes e famílias pesquisam no Google por *"onde tirar fotos em Itapema"*, *"locais para fotos em Porto Belo"*, *"lugares para ensaio fotográfico em Tijucas"*.
* **Proposta Estrutural:** Criar a seção `/locacoes-para-ensaios/` destacando:
  * Praias do Caixa d'Aço e Enseada Encantada (Porto Belo)
  * Canto da Praia e Meia Praia (Itapema)
  * Áreas campestres e históricas do Vale do Rio Tijucas
  * Pontos fortes de cada local (horário da melhor luz, facilidade de acesso, privacidade para troca de roupa).
* **Questão de Decisão:** Vocês têm interesse em documentar essas locações favoritas para atrair tráfego qualificado de topo de funil da região?

---

## 📸 Eixo 2: Engenharia de Imagens & Histórias de Ensaios Reais (E-E-A-T)

### ❓ Pergunta 2.1: Implementação de "Visual Stories" (Ensaios Reais Documentados)
* **Contexto:** O Google valoriza profundamente conteúdo original de primeira mão (Experience).
* **Proposta Estrutural:** Criar uma coleção de *Histórias Reais de Ensaios*:
  * Exemplo: `/historias/o-ensaio-de-gestante-da-helena-no-estudio/`
  * Cada história contém:
    * 8 a 15 fotos selecionadas do ensaio com autorização da família.
    * Um pequeno relato de Anderson e Elaine sobre a proposta visual, iluminação escolhida e reações.
    * Depoimento da cliente no final.
* **Questão de Decisão:** Quantas histórias reais de ensaios emblemáticos vocês gostariam de transformar em estudos de caso documentados no site?

---

### ❓ Pergunta 2.2: Pipeline de Imagens & Otimização de Resolução
* **Contexto:** A qualidade visual deve ser impecável, mas o carregamento precisa ser instantâneo em conexões móveis.
* **Proposta Técnica:**
  * Uso de `<picture>` nativo com formatos modernos `AVIF` e `WebP` gerados no build pelo Astro/Sharp.
  * Resoluções responsivas automáticas: `400px` (mobile), `800px` (telas médias) e `1200px` (desktop retina).
  * Dimensões explícitas `width` e `height` em 100% das imagens para garantir **Cumulative Layout Shift (CLS) = 0.00**.
* **Questão de Decisão:** Desejam que criemos um script de lote para redimensionar automaticamente fotos brutas de alta resolução da câmera em assets web de alta fidelidade?

---

## ⚡ Eixo 3: Otimização de Servidor Plesk, Cache & Infraestrutura

### ❓ Pergunta 3.1: Configuração Avançada de Cache HTTP e Segurança no `.htaccess`
* **Situação Atual:** O site está publicado no Apache/Plesk.
* **Proposta Estrutural de Cache:**
  ```apache
  # Cache Imutável para Assets com Hash (CSS, JS, WebP, Fontes)
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/avif "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/html "access plus 1 hour"
  </IfModule>
  ```
* **Questão de Decisão:** Devemos ativar as diretivas completas de compressão Gzip/Brotli e cabeçalhos de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) no `.htaccess` de produção?

---

### ❓ Pergunta 3.2: Pipeline Automatizado de CI/CD (GitHub Actions → SFTP)
* **Situação Atual:** O deploy é executado via script manual local `node scripts/deploy.mjs`.
* **Proposta Estrutural:** Configurar um fluxo no GitHub Actions (`.github/workflows/deploy.yml`):
  1. Ao dar `git push origin main`:
  2. A máquina virtual roda `npm ci`, `npm run build`, `npm test`.
  3. Se todos os testes passarem com sucesso, conecta via SFTP no servidor `186.209.113.134` e publica os arquivos automaticamente em segundos.
* **Questão de Decisão:** Desejam que configuremos este workflow do GitHub Actions com os secrets criptografados?

---

## 🎯 Eixo 4: Otimização de Taxa de Conversão (CRO) & Ferramentas Interativas

### ❓ Pergunta 4.1: Guia Interativo / Seletor de Ensaio Ideal
* **Conceito:** Uma ferramenta leve e visual de 3 perguntas na Home ou em `/descubra-seu-ensaio/`:
  1. *Qual momento você deseja registrar?* (Esperando bebê / Bebê pequeno / Família reunida / Trabalho profissional / Casal)
  2. *Qual ambiente você prefere?* (Estúdio climatizado privativo / Luz natural ao ar livre)
  3. *Qual o objetivo principal?* (Álbum de fotos impresso / Fotos para festa / Lembrança afetiva / LinkedIn)
  * **Resultado:** Direciona a cliente para a página do ensaio exato e já monta uma mensagem de WhatsApp sob medida para o atendimento de Anderson e Elaine.
* **Questão de Decisão:** Essa ferramenta seria útil para acelerar o fechamento de leads indecisos no site?

---

### ❓ Pergunta 4.2: Formulário de Agendamento Noturno com Fallback
* **Cenário:** Muitas mães e profissionais navegam no site tarde da noite (após as 22h) quando não desejam chamar no WhatsApp naquele momento.
* **Proposta Estrutural:** Adicionar na página de contato um formulário simples (Nome, WhatsApp, Ensaio Desejado, Melhor Período para Contato) que envia notificação direta por e-mail para a equipe responder logo na abertura do estúdio (09h).
* **Questão de Decisão:** Gostariam de incluir esse formulário complementar ao WhatsApp na página de contato?

---

## 📋 Resumo das Perguntas para Priorização

| # | Pergunta Estrutural | Impacto Principal | Complexidade |
| :--- | :--- | :--- | :--- |
| **1** | Criar URLs perenes para Campanhas Sazonais (Natal, Mães, etc.)? | SEO Perene & Conversão | Baixa |
| **2** | Criar Guia de Locações Externas no Litoral SC? | Atração de Tráfego Regional | Média |
| **3** | Publicar Histórias Reais de Ensaios (*Visual Stories*)? | E-E-A-T & Google Images | Média |
| **4** | Ativar Cache Imutável e Headers de Segurança no `.htaccess`? | Velocidade & Core Web Vitals | Baixa |
| **5** | Configurar CI/CD com GitHub Actions para deploy automático? | Agilidade de Desenvolvimento | Baixa |
| **6** | Criar Guia Interativo / Seletor de Ensaio? | Aumento de Conversão (CRO) | Média |
| **7** | Formulário de Contato com Fallback para agendamentos noturnos? | Captura de Leads fora do horário | Baixa |
