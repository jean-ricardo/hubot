# HUBOT Landing Craft

Aja como um Desenvolvedor Frontend Sênior e Especialista em UX/UI. Crie uma landing page responsiva, moderna e de altíssima conversão para uma plataforma SaaS chamada "HUBOT". O design deve ser idêntico à referência visual fornecida, utilizando uma estrutura limpa (HTML/React + Tailwind CSS).

**DESIGN SYSTEM GERAL:**

*   **Cores Principais:** Amarelo (#ffd33d), Preto (#000000), Branco (#FFFFFF), Amarelo Claro para fundos secundários (#fff8dc). Textos escuros devem ser uma variação suave de preto (ex: text-gray-900).

*   **Tipografia:** Utilize uma fonte sem serifa, moderna e corporativa (como Inter, Plus Jakarta Sans ou Roboto).

*   **Botões Base:** Cantos levemente arredondados (rounded-md ou rounded-lg), transições suaves de cor e uma leve elevação (shadow-md) no hover.

*   **Comportamento Global:** Adicione smooth scrolling para os links da navegação. Inclua um botão flutuante (FAB) de WhatsApp no canto inferior direito, na cor amarela (#ffd33d) com ícone escuro, sempre fixo na tela (z-50) e com animação de "pulse".

**ESTRUTURA DA PÁGINA (Seção por Seção):**

**1. CABEÇALHO (Navbar) - Fixo no topo (Sticky):**

*   **Fundo:** Preto (#000000).

*   **Esquerda:** Logotipo HUBOT (texto branco com ícone do robô).

*   **Centro:** Links de navegação (O que é, Funcionalidades, Integração TOTVS, Planos) na cor branca com hover em amarelo (#ffd33d).

*   **Direita:** Botão "Teste Grátis" com fundo transparente, borda amarela e texto amarelo (outline).

**2. HERO SECTION (Alto Impacto):**

*   **Fundo:** Preto (#000000) com padding generoso (py-20 ou py-24). Layout em flexbox (linha no desktop, coluna no mobile).

*   **Lado Esquerdo (Copy):**

    *   Tag superior: Texto amarelo, borda amarela fina ("O futuro do atendimento já começou.").

    *   Headline (H1): Texto branco, tamanho grande, negrito: "A forma mais ágil e eficiente de conectar sua empresa aos clientes."

    *   Subheadline: Texto cinza claro.

    *   Botões: 1 CTA Primário (Fundo Amarelo #ffd33d, texto preto, "Teste 7 dias grátis") e 1 CTA Secundário (Outline transparente com ícone de Play, borda branca, texto branco, "Ver vídeo na prática").

*   **Lado Direito (Visual com Vídeo):**

    *   Crie um contêiner estilizado (aspect-ratio de celular) flutuante com um Placeholder de Vídeo genérico em loop. Ao redor deste contêiner de vídeo, coloque pequenos círculos flutuantes com ícones do WhatsApp, Instagram, Telegram e Messenger simulando integrações conectadas a ele.

**3. SOCIAL PROOF (Faixa Amarela):**

*   **Fundo:** Amarelo (#ffd33d) de ponta a ponta (w-full).

*   Layout alinhado com texto à esquerda ("Empresas estruturadas com a tecnologia HUBOT") e um carrossel ou grid de logos (placeholders para TOTVS, etc.) em preto ou escala de cinza à direita.

**4. DOR vs SOLUÇÃO (Evolua seu atendimento):**

*   **Fundo:** Branco (#FFFFFF), centralizado. Título e subtítulo no topo.

*   Grid de 2 colunas. 

*   **Card Esquerdo (Problema):** Fundo bem cinza claro, ícone de 'X' vermelho, lista com textos vermelhos/escuros detalhando problemas (ex: "WhatsApp desorganizado").

*   **Card Direito (Solução HUBOT):** Fundo amarelo claro (#fff8dc), ícone de 'Check' verde/amarelo, lista com textos escuros detalhando a solução.

**5. SEÇÕES DE FUNCIONALIDADES (Padrão Z-Pattern):**

*   Alterne o layout entre "Vídeo à esquerda / Texto à direita" e "Texto à esquerda / Gráfico à direita".

*   **Bloco 1 (Múltiplos Atendentes):** Fundo Branco. Esquerda: Placeholder de Vídeo genérico (proporção 16:9, cantos arredondados, shadow-lg, reproduzindo um vídeo de painel genérico). Direita: Tag "GESTÃO DE EQUIPE" (amarela), Título (H2) escuro, texto de apoio.

*   **Bloco 2 (Integração TOTVS):** Fundo Cinza muito claro (quase branco). Esquerda: Tag "INTEGRAÇÃO", Título, Texto e lista com checkmarks verdes. Direita: Card minimalista branco ilustrando uma conexão (linha ligando o logo do WhatsApp ao TOTVS).

*   **Bloco 3 (Kanban):** Fundo Branco. Esquerda: Placeholder de Vídeo genérico (proporção iPad/Tablet, mostrando colunas de Kanban). Direita: Tag "ORGANIZAÇÃO", Título "Kanban Integrado.", texto de apoio.

**6. GRID DE FUNCIONALIDADES AVANÇADAS:**

*   **Fundo:** Amarelo claro (#fff8dc). Título centralizado.

*   Grid de 4 cartões (cards). Cada card com fundo Branco (#FFFFFF), padding interno, ícone em amarelo (#ffd33d), título em negrito e texto menor descritivo. Adicione efeito hover de elevação do card (-translate-y-1).

**7. DEMONSTRAÇÃO E LEAD GEN (Formulário):**

*   **Fundo:** Preto (#000000). Layout dividido (50/50).

*   **Lado Esquerdo:** Título branco "Veja como funciona por dentro". Abaixo, um Placeholder de Vídeo grande com um botão de "Play" amarelo grande centralizado sobreposto.

*   **Lado Direito:** Card Branco flutuante (rounded-lg) contendo o formulário de captura "Solicite uma demonstração". Inputs minimalistas (borda inferior ou caixas cinza claro) para Nome, Email, WhatsApp, Empresa. Botão Largo "SOLICITAR" em Amarelo (#ffd33d).

**8. TABELA DE PREÇOS (Cards Escalonados):**

*   **Fundo:** Branco (#FFFFFF). Título centralizado "Estruture antes de crescer. Escolha seu plano."

*   Grid de 4 cartões de planos.

*   **Regra UX Importante:** O 3º Card (Premium - R$599) deve estar em destaque. Fundo Amarelo (#ffd33d), levemente maior/mais alto (scale-105 no desktop), com a tag preta "Mais popular" no topo, e botão "Contratar" preto (#000000).

*   Os outros 3 cards devem ter fundo branco, borda cinza clara, e botões "Contratar" com outline preto (borda). Inclua as listas de checkmarks em todos.

**9. RODAPÉ (Footer):**

*   **Fundo:** Amarelo claro (#fff8dc).

*   Layout em 4 colunas:

    1. Logo HUBOT escuro + breve manifesto da empresa.

    2. "Links Úteis": Políticas, Termos.

    3. "Contato": Endereço físico, Email.

    4. "Newsletter": Pequeno input de email com botão escuro ao lado.

*   Parte inferior (Base): Linha divisória fina, texto de Copyright à esquerda ("Hubot - CNPJ..."), ícones de redes sociais genéricos à direita.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://hubot.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f14225d6-5372-443a-b510-36cec7aeeeb4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
