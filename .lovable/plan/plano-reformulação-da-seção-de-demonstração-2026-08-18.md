# Plano: Reformulação da Seção de Demonstração

O objetivo é substituir o formulário de captura direta na página inicial por um CTA convidativo que redireciona o usuário para uma nova página de agendamento/demonstração, mantendo a consistência visual do projeto.

## Ações a realizar

1. **Criar nova rota de demonstração:**
   - Criar o arquivo `src/routes/demonstracao.tsx`.
   - Mover a lógica do formulário e o componente visual (vídeo + formulário) para esta nova página.
   - Garantir que o design siga o padrão institucional (fundo claro, container centralizado, Footer integrado).

2. **Refatorar a seção `DemoLead` na `src/routes/index.tsx`:**
   - Remover o formulário e os estados associados (`formData`, `isSubmitting`, etc.).
   - Substituir o grid de duas colunas por uma chamada de ação (CTA) centralizada ou mantendo o vídeo ao lado de um novo bloco de texto com botão de redirecionamento.
   - O botão agora será um `<Link to="/demonstracao">` com estilo premium.

3. **Atualizar navegação global:**
   - Garantir que todos os links "Teste Grátis" ou "Solicitar Demonstração" apontem para a nova página `/demonstracao` em vez de rolarem para o ID `#demo`.

## Detalhes técnicos

- **Nova página:** Utilizar `framer-motion` para animações de entrada suaves.
- **Formulário:** Manter a integração com o webhook existente (`workflows.hubot.app.br`).
- **Navegação:** Utilizar o componente `<Link>` do `@tanstack/react-router` para navegação SPA sem recarregamento.
