# 🧬 Receita para recriar: Juridico-Replit-consertado-18-10 (2)

_Gerada sem IA, lendo 68 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Juridico-Replit-consertado-18-10 (2)
- **Partes de código:** 14 (4 tela, 9 logica, 0 servidor, 0 dados, 1 estilo)
- **Tem servidor (rotas /api):** não — dá para ser só HTML
- **Peças de fora (bibliotecas):** ${t}, electron, fs, http, path

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-commonjs-dynamic-modules-tdtrd.js← logica (era www/assets/_commonjs-dynamic-modules-TDtrdbi3.js)
js/15-vendor-i2kalhuy.js← logica (era www/assets/vendor-I2kAlhUy.js)
js/20-index-btye5xlg.js← logica (era www/assets/index-Btye5XlG.js)
js/25-mammoth-browser-bpa7y1is.js← logica (era www/assets/mammoth.browser-BPa7Y1iS.js)
js/30-pdf-gh-brlfn.js ← logica (era www/assets/pdf-gh-BrLFn.js)
js/35-ui-bfodmm-g.js  ← logica (era www/assets/ui-BFodMM-g.js)
js/40-tiptap-drvc6u7f.js← logica (era www/assets/tiptap-DRvc6u7f.js)
js/45-conserto-ia.js  ← logica (era www/conserto-ia.js)
js/50-inicio.js       ← Juridico-Replit-consertado-18-10 (2) — Juridico-Replit-consertado-18-1 (era index.html)
js/55-index-btbp-g6q.js← tela (era www/assets/index-BTbp-g6q.js)
js/60-auditoria.js    ← Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira (era www/auditoria.html)
js/65-www.js          ← Assistente IA Jurídico (era www/index.html)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `electron/main.cjs` | css/app.css | logica | Jurídico (versão do Replit) como programa do Windows. Abre a pasta www numa janela própria | package.json |
| 2 | `www/assets/_commonjs-dynamic-modules-TDtrdbi3.js` | `js/10-commonjs-dynamic-modules-tdtrd.js` | logica | — | — |
| 3 | `www/assets/vendor-I2kAlhUy.js` | `js/15-vendor-i2kalhuy.js` | logica | which | — |
| 4 | `www/assets/index-Btye5XlG.js` | `js/20-index-btye5xlg.js` | logica | — | vendor-I2kAlhUy.js, _commonjs-dynamic-modules-TDtrdbi3.js |
| 5 | `www/assets/mammoth.browser-BPa7Y1iS.js` | `js/25-mammoth-browser-bpa7y1is.js` | logica | — | vendor-I2kAlhUy.js, _commonjs-dynamic-modules-TDtrdbi3.js |
| 6 | `www/assets/pdf-gh-BrLFn.js` | `js/30-pdf-gh-brlfn.js` | logica | — | — |
| 7 | `www/assets/ui-BFodMM-g.js` | `js/35-ui-bfodmm-g.js` | logica | — | vendor-I2kAlhUy.js |
| 8 | `www/assets/tiptap-DRvc6u7f.js` | `js/40-tiptap-drvc6u7f.js` | logica | — | vendor-I2kAlhUy.js, ui-BFodMM-g.js |
| 9 | `www/conserto-ia.js` | `js/45-conserto-ia.js` | logica | lsTxt, escolherChave, linha, responder | — |
| 10 | `index.html` | `js/50-inicio.js` | tela | Juridico-Replit-consertado-18-10 (2) — Juridico-Replit-consertado-18-10 (2) | manifest.json, favicon.ico, icon.svg, apple-touch-icon.png |
| 11 | `www/assets/index-BTbp-g6q.js` | `js/55-index-btbp-g6q.js` | tela | — | ui-BFodMM-g.js, vendor-I2kAlhUy.js, tiptap-DRvc6u7f.js, pdf-gh-BrLFn.js |
| 12 | `www/auditoria.html` | `js/60-auditoria.js` | tela | Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira | auditoria.webmanifest, favicon.ico, icon.svg, apple-touch-icon.png |
| 13 | `www/index.html` | `js/65-www.js` | tela | Assistente IA Jurídico | manifest.webmanifest, icon-192.png, icon.svg, index-BTbp-g6q.js |
| 14 | `www/assets/index-B-XLeRRI.css` | css/app.css | estilo | — | — |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Juridico-Replit-consertado-18-10 (2)" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-commonjs-dynamic-modules-tdtrd.js` (era `www/assets/_commonjs-dynamic-modules-TDtrdbi3.js`, 2 linhas)

```text
Crie js/10-commonjs-dynamic-modules-tdtrd.js. Ele é uma parte de logica do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-vendor-i2kalhuy.js` (era `www/assets/vendor-I2kAlhUy.js`, 2 linhas)

```text
Crie js/15-vendor-i2kalhuy.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: which.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-index-btye5xlg.js` (era `www/assets/index-Btye5XlG.js`, 222 linhas)

```text
Crie js/20-index-btye5xlg.js. Ele é uma parte de logica do app.
Ele usa o que já foi criado em: js/15-vendor-i2kalhuy.js, js/10-commonjs-dynamic-modules-tdtrd.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-mammoth-browser-bpa7y1is.js` (era `www/assets/mammoth.browser-BPa7Y1iS.js`, 221 linhas)

```text
Crie js/25-mammoth-browser-bpa7y1is.js. Ele é uma parte de logica do app.
Ele usa o que já foi criado em: js/15-vendor-i2kalhuy.js, js/10-commonjs-dynamic-modules-tdtrd.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-pdf-gh-brlfn.js` (era `www/assets/pdf-gh-BrLFn.js`, 13 linhas)

```text
Crie js/30-pdf-gh-brlfn.js. Ele é uma parte de logica do app.
O original usava as bibliotecas ${t}: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-ui-bfodmm-g.js` (era `www/assets/ui-BFodMM-g.js`, 53 linhas)

```text
Crie js/35-ui-bfodmm-g.js. Ele é uma parte de logica do app.
Ele usa o que já foi criado em: js/15-vendor-i2kalhuy.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-tiptap-drvc6u7f.js` (era `www/assets/tiptap-DRvc6u7f.js`, 142 linhas)

```text
Crie js/40-tiptap-drvc6u7f.js. Ele é uma parte de logica do app.
Ele usa o que já foi criado em: js/15-vendor-i2kalhuy.js, js/35-ui-bfodmm-g.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-conserto-ia.js` (era `www/conserto-ia.js`, 191 linhas)

```text
Crie js/45-conserto-ia.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: lsTxt, escolherChave, linha, responder, manda, esforco, ementas, historico, processar, refinar, chatLivre.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-inicio.js` (era `index.html`, 81 linhas)

```text
Crie js/50-inicio.js. Ele faz: Juridico-Replit-consertado-18-10 (2) — Juridico-Replit-consertado-18-10 (2).
No app original ele tinha estas funções/partes: rec, esc, card, show.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-index-btbp-g6q.js` (era `www/assets/index-BTbp-g6q.js`, 727 linhas)

```text
Crie js/55-index-btbp-g6q.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/35-ui-bfodmm-g.js, js/15-vendor-i2kalhuy.js, js/40-tiptap-drvc6u7f.js, js/30-pdf-gh-brlfn.js, js/25-mammoth-browser-bpa7y1is.js, js/20-index-btye5xlg.js (pelo APP).
Ele chamava estes endereços: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${s.gemini_api_key}, https://api.openai.com/v1/chat/completions, https://api.perplexity.ai/chat/completions, ${s.demo_api_url}/chat/completions, /api/code/run, /api/tts, /api/voice-chat, /api/doc-templates/upload-docx, /api/export/word-with-template, /api/jurisprudencia/buscar, /api/code-assistant, /api/upload/transcribe, /api/ai/process, /api/ai/refine, /api/upload/extract-text, /api/git-push, ${d}/chat/completions, /api/jwt/status, /api/jwt/generate, /api/datajud/consulta. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-auditoria.js` (era `www/auditoria.html`, 51 linhas)

```text
Crie js/60-auditoria.js. Ele faz: Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-www.js` (era `www/index.html`, 38 linhas)

```text
Crie js/65-www.js. Ele faz: Assistente IA Jurídico.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-commonjs-dynamic-modules-tdtrd.js, js/15-vendor-i2kalhuy.js, js/20-index-btye5xlg.js, js/25-mammoth-browser-bpa7y1is.js, js/30-pdf-gh-brlfn.js, js/35-ui-bfodmm-g.js, js/40-tiptap-drvc6u7f.js, js/45-conserto-ia.js, js/50-inicio.js, js/55-index-btbp-g6q.js, js/60-auditoria.js, js/65-www.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
