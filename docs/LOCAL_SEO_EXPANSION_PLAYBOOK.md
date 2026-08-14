# Playbook Operacional de SEO Local, Google Meu Negócio e Expansão de Autoridade

Este guia reúne as orientações práticas e passo a passo para o **Estúdio Evydência** alinhar seus sinais externos, gerenciar o **Google Business Profile (GBP)**, expandir sua presença no **Apple Maps e Bing Places**, e coletar avaliações autênticas de forma ética.

---

## 1. Alinhamento Oficial do Google Business Profile (GBP)

### Dados Cadastrais Canônicos (NAP):
* **Nome Comercial:** Estúdio Evydência
* **Endereço:** Rua Mauri Afonso da Silva, 892 - Universitário, Tijucas - SC, 88201-568
* **Telefone / WhatsApp Oficial:** (48) 99642-5287
* **Horários de Atendimento:**
  * Segunda a Sexta: 09:00–12:00 e 14:00–18:00
  * Sábados: Mediante agendamento prévio
  * Domingos: Fechado
* **Website Oficial:** `https://evydencia.com.br/`

### Categorias do Perfil no Google:
1. **Categoria Primária (Recomendada):** `Estúdio de fotografia`
2. **Categorias Secundárias:**
   * `Fotógrafo`
   * `Serviço de fotografia`
3. **Categorias a Remover:**
   * Remover `Loja para gestantes` (a menos que haja venda física de roupas de varejo para gestantes, para não confundir o algoritmo de relevância local).

---

## 2. Roteiro Ético de Coleta de Avaliações (Review Acquisition)

Para que as avaliações no Google Maps ajudem no ranqueamento sem parecerem artificiais ou violarem as diretrizes do Google:

### Mensagem Sugerida de Pós-Atendimento (via WhatsApp):
> *"Olá, [Nome do Cliente]! Esperamos que você tenha amado a experiência e as fotos do seu ensaio! ❤️*
> 
> *Se você puder nos ajudar compartilhando sua experiência no Google, conte com suas próprias palavras **qual ensaio você realizou** e **o que mais gostou no atendimento e no estúdio**. Seu relato é muito importante para nós e ajuda outras famílias a conhecerem o Estúdio Evydência!*
> 
> *Link direto para avaliar: [LINK_CURTO_DO_GOOGLE_MAPS]"*

### ⚠️ O que NUNCA Fazer:
* Não oferecer brindes, descontos ou sorteios em troca de reviews (proibido pelas diretrizes do Google).
* Não pedir para a pessoa copiar e colar um texto pronto cheio de palavras-chave.
* Não criar avaliações falsas usando e-mails alternativos.

---

## 3. Presença em Diretórios Estratégicos

1. **Apple Business Connect:**
   * Cadastre a unidade no portal oficial da Apple (`businessconnect.apple.com`).
   * Preencha fotos da fachada e interior, horários e link direto para o site, garantindo destaque no Apple Maps e na assistente Siri.
2. **Bing Places for Business:**
   * Importe diretamente as informações verificadas do Google Business Profile via `bingplaces.com`.
   * Monitore as métricas no **Bing Webmaster Tools (AI Performance)**.

---

## 4. Plano de Migração do Domínio Legado (`evydencia.com`)

Quando for unificar o domínio `.com` com o `.com.br`:
1. **Levantamento de URLs:** Listar todas as URLs históricas indexadas de `evydencia.com` no Google Search Console.
2. **Mapeamento 1:1 no `.htaccess` ou Nginx do servidor:**
   * `evydencia.com/gestante` → `301` → `https://evydencia.com.br/ensaios/gestante-tijucas/`
   * `evydencia.com/familia` → `301` → `https://evydencia.com.br/ensaios/familia-tijucas/`
   * URLs sem equivalente exato → `301` para a seção temática correspondente.
3. **Change of Address no GSC:**
   * Verificar ambas as propriedades no Google Search Console.
   * Utilizar a ferramenta oficial de **Mudança de Endereço** para transferir a autoridade histórica.
