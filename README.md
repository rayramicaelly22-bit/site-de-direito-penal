# ARETA Mens Rea

Site para estudar Direito Penal, voltado à atividade oral e à prova.

## O que tem

- **Início**: visão geral e progresso.
- **Trilha**: você informa o dia de início, o dia da atividade oral e quantas horas por dia pode estudar. O site monta o plano, com dias de revisão e o dia da atividade oral.
- **Aulas**: cada conteúdo em uma aula separada, com explicação simples, a versão “explicando para uma criança”, casos e perguntas com modelo de resposta.
- **Glossário**: clique em palavras destacadas dentro das aulas para ver o significado.
- **Revisão**: perguntas subjetivas de todas as aulas.
- **Ensaio oral**: perguntas sorteadas para treinar a resposta em voz alta.

## Como abrir

É um site estático, sem instalação. Basta abrir o arquivo `index.html` no navegador.

## Estrutura

```
index.html          estrutura da página
css/style.css       visual (claro e escuro)
js/conteudo.js      aulas e decisões/súmulas citadas
js/glossario.js     termos do glossário
js/trilha.js        geração do plano de estudo
js/app.js           abas, telas e interações
```

## Como adicionar conteúdo

- Nova aula: acrescente um objeto em `AULAS` (`js/conteudo.js`) com `id`, `titulo`, `horas`, `resumo`, `simples`, `crianca`, `secoes`, `casos`, `juris` e `questoes`.
- Novo termo: acrescente uma entrada em `GLOSSARIO` (`js/glossario.js`). No texto da aula, use `[[chave]]` para o termo.
- Nova súmula ou decisão: acrescente em `JURIS` (`js/conteudo.js`) e cite em `juris` da aula.

## Observações

- O progresso (aulas marcadas e a última trilha) fica salvo no navegador de quem usa.
- Confira sempre o texto atual da lei e as decisões nos sites oficiais (Planalto e STF).
