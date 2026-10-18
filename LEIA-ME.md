# Jurídico (versão do Replit) — pronto para .exe e APK

Feito a partir do zip "workspace-assistente-juridico-work-android-main".

- `www/` = o app já montado (o que o Replit tinha construído), funcionando sem servidor.
- `electron/main.cjs` = abre o app como programa do Windows (endereço fixo 127.0.0.1:7740).
- `.github/workflows/desktop-exe.yml` = receita "Desktop (.exe)" → Artifacts → app-windows.
- `.github/workflows/apk.yml` = receita "APK (Android)" → Artifacts → app-android.

Nome novo (com.maikon.juridico.replit): NÃO substitui nenhum outro app instalado.

## Conserto da IA (18/10)
- `www/conserto-ia.js` faz o papel do servidor do Replit, aqui dentro do aparelho:
  - **Chat Livre**: a pergunta agora chega (antes ia vazia e ele repetia a mesma frase) e ele lembra da conversa.
  - **Ações** (Corrigir, Redação, Resumir, Minuta…): voltam a usar as instruções de cada ação, o esforço, o histórico e as ementas marcadas.
  - **Refinar** (o chat de ajuste do documento): manda o histórico inteiro.
- Usa a chave "Própria" (ou a de Configurações / a do Chat Livre). Gemini (AIza…), Groq (gsk_…), OpenRouter (sk-or-…), OpenAI (sk-…), Perplexity (pplx-…).
