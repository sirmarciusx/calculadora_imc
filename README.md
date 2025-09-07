# Calculadora de IMC

Uma aplicação web simples e moderna para cálculo do **Índice de Massa Corporal (IMC)**, com interface responsiva, modo claro/escuro, modal de resultado animado e visual refinado (glassmorphism + neon).

## 🚀 Visão Geral
Digite peso (kg) e altura (m) e obtenha imediatamente o valor do IMC, a faixa correspondente e uma imagem ilustrativa. O modal de resultado tem animação suave e pode ser fechado por:
- Botão "Fechar"
- Botão (X)
- Clique fora do modal
- Tecla ESC

O tema preferido (claro/escuro) é armazenado em `localStorage` e restaurado automaticamente.

## ✨ Funcionalidades
- Cálculo de IMC com validação de entrada (aceita ponto ou vírgula)
- Classificação conforme faixas da OMS
- Exibição em modal com imagem associada
- Tema claro/escuro com persistência
- Interface responsiva (mobile → desktop)
- Efeito neon no título + animações suaves
- Acessibilidade básica (ESC para fechar, foco após abrir modal)
- Legenda visual das faixas (cores distintas)
- Ano de copyright dinâmico

## 🧠 Fórmula Utilizada
```
IMC = peso(kg) / (altura(m) * altura(m))
```

### Classificações (OMS)
| Faixa (IMC)        | Categoria             |
|--------------------|----------------------|
| < 18.5             | Abaixo do peso       |
| 18.5 – 24.9        | Peso normal          |
| 25.0 – 29.9        | Sobrepeso            |
| 30.0 – 34.9        | Obesidade Grau I     |
| 35.0 – 39.9        | Obesidade Grau II    |
| ≥ 40.0             | Obesidade Grau III   |

## 🗂 Estrutura de Diretórios
```
projeto_imc/
  index.html        # Estrutura principal da página
  style.css         # Estilos (tema, layout, animações, modal, neon)
  script.js         # Lógica de cálculo, modal, tema, acessibilidade
  images/           # Imagens correspondentes às faixas de IMC
    abaixo-do-peso.png
    peso-normal.png
    sobrepeso.png
    obesidade-1.png
    obesidade-2.png
    obesidade-3.png
```

## 💻 Como Usar
1. Abra o arquivo `index.html` diretamente no navegador (duplo clique) OU hospede em qualquer servidor estático.
2. Informe o peso em quilogramas (ex: `70.5`).
3. Informe a altura em metros (ex: `1.75`).
4. Clique em **Calcular IMC**.
5. Leia o valor e a classificação no modal.
6. Feche quando quiser (X, ESC, clique fora ou botão Fechar).

## 🎨 Personalização Rápida
As principais cores e raios estão centralizados em variáveis CSS em `style.css`:
```css
:root {
  --grad-start:#4f46e5;
  --grad-end:#06b6d4;
  --primary:#2563eb;
  --radius-md:18px;
  --neon-1:#46e7ff;
  --neon-2:#3b82f6;
}
```
Basta editar esses valores para alterar o visual (gradiente de fundo, bordas, efeito neon etc.).

## � Responsividade
O layout foi otimizado para diversos tamanhos de tela e contextos:

### Breakpoints Principais
| Condição | Ajustes principais |
|----------|--------------------|
| `max-width: 700px` | Redução de paddings, botão mais compacto, imagem menor (≈220px) |
| `max-width: 480px` | Grade da legenda vira 2 colunas; fonte e inputs menores; modal com padding reduzido |
| `max-width: 360px` | Compactação agressiva: border-radius menor, fontes e botões reduzidos, imagem até ~170px |
| `min-width: 1400px` | Largura máxima do card aumenta; modal mais largo; imagem até ~340px |
| `min-width: 2000px` | Escalonamento de tipografia e imagem para legibilidade em 4K |

### Altura Reduzida (paisagem / notebooks pequenos)
| Condição | Ajuste |
|----------|--------|
| `max-height: 650px` | Modal permite scroll interno, padding reduzido |
| `max-height: 520px` | Imagem e título menores para evitar corte vertical |

### Outros Recursos
- Safe-area iOS (`env(safe-area-inset-*)`) aplicado nas laterais em telas estreitas.
- Suporte a `prefers-reduced-motion`: animações e transições são praticamente desativadas para usuários que preferem menos movimento.
- Imagem no modal pausa animação quando o modal está oculto (economia de recursos).
- Título centralizado com efeito neon adaptado ao tema claro/escuro.

### Recomendações de Teste
1. Abrir DevTools → Toggle Device Toolbar → simular iPhone SE, iPad, Galaxy Fold, Desktop FullHD, 4K.
2. Testar rotação (portrait ↔ landscape) em altura < 600px para verificar scroll do modal.
3. Ativar “Reduce Motion” nas preferências do sistema e recarregar para validar corte das animações.
4. Verificar contraste no modo escuro e legibilidade nos tamanhos mínimos (≤ 360px).

Se quiser adicionar um layout "split" (texto à esquerda e visual à direita) só em telas grandes, ou transformar em PWA responsiva com ícone e splash, posso implementar.

## �🕶 Tema Escuro
- Controlado pela classe `dark` no elemento `<html>`.
- Toggle: botão com ícone 🌙 / ☀️.
- Persistência: `localStorage.setItem('imc-theme', 'dark' | 'light')`.

## ♿ Acessibilidade (Base)
- Foco é movido para botão de fechar ao abrir modal.
- Fechamento com tecla ESC.
- Imagens possuem `alt` descritivo.

Possíveis melhorias futuras: trap de foco no modal, `aria-modal="true"`, `role="dialog"`, anúncio via `aria-live`.

## 🔄 Fluxo Interno Simplificado
1. Captura submit do formulário.
2. Normaliza vírgulas → ponto.
3. Valida números > 0.
4. Calcula e formata IMC com `toFixed(2)`.
5. Determina categoria + imagem.
6. Popula elementos do modal.
7. Exibe modal (`.is-visible`).

## 🧪 Testes Manuais Sugeridos
| Peso | Altura | IMC Esperado | Categoria |
|------|--------|--------------|-----------|
| 50   | 1.70   | 17.30        | Abaixo     |
| 68   | 1.70   | 23.53        | Normal     |
| 85   | 1.70   | 29.41        | Sobrepeso  |
| 105  | 1.70   | 36.33        | Obes II    |
| 125  | 1.70   | 43.25        | Obes III   |

## 🔧 Ideias de Evolução
- Histórico de cálculos (localStorage)
- Exportar PDF / compartilhar resultado
- Barra progressiva indicando posição na faixa
- Sugestões personalizadas (ex: "ganhar 3 kg para atingir IMC X")
- Internacionalização (pt-BR / en-US)
- Testes automatizados (Jest + Playwright)
- Progressive Web App (PWA)
- API para registro remoto

## 📸 Imagens
Certifique-se de que os nomes dos arquivos na pasta `images/` correspondem exatamente aos usados no código. Substitua as imagens mantendo os mesmos nomes para atualizar a arte sem alterar lógica.

## ❗ Observações
- A fórmula do IMC é uma estimativa e não substitui avaliação clínica.
- Para atletas ou perfis específicos, a interpretação pode variar.

## 🧾 Direitos Autorais
© <span id="ano-readme">(ano atual)</span> **Márcio Gusmão**. Todos os direitos reservados.
