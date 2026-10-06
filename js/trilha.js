// Gera o plano de estudo entre a data de início e a data da atividade oral.
//
// Regras:
// - cada aula tem uma prioridade (alta, media ou baixa, abaixo). As de prioridade alta
//   são estudadas por completo; as de menor prioridade podem virar resumo ou questões;
// - se o tempo não couber, o plano reduz primeiro as aulas de menor prioridade, até
//   caber tudo (cada aula tem um mínimo de questões e revisão);
// - a cada "revisaCada" dias de estudo entra um dia de revisão do que já foi visto;
// - o último dia é a atividade oral (a data final informada).

// Prioridades. Quem não estiver aqui é "media".
const PRIORIDADE = {
  "aula-01": "media", "aula-02": "media", "aula-03": "media", "aula-04": "media",
  "aula-05": "media", "aula-06": "media", "aula-07": "media",
  "aula-08": "alta", "aula-09": "alta", "aula-10": "alta", "aula-11": "alta",
  "aula-12": "alta", "aula-13": "baixa", "aula-14": "alta", "aula-15": "alta",
  "aula-16": "alta", "aula-17": "alta"
};

const ORDEM_PRIORIDADE = { alta: 0, media: 1, baixa: 2 };

const MODOS = {
  completa: { rotulo: "Aula completa", fator: 1 },
  resumo: { rotulo: "Resumo + questões", fator: 0.5 },
  questoes: { rotulo: "Questões e revisão", fator: null }
};
const HORAS_QUESTOES = 0.5;

function lerData(texto) {
  const [ano, mes, dia] = texto.split("-").map(Number);
  return new Date(ano, mes - 1, dia);
}

function horasDoModo(aula, modo) {
  if (modo === "questoes") return HORAS_QUESTOES;
  return aula.horas * MODOS[modo].fator;
}

// Próximo nível de redução, na ordem: completa -> resumo -> questões.
const PROXIMO_MODO = { completa: "resumo", resumo: "questoes", questoes: null };

function gerarTrilha(inicioTexto, fimTexto, horasDia, aulas, revisaCada = 4) {
  if (!inicioTexto || !fimTexto) {
    return { erro: "Preencha a data de início e a data da atividade oral." };
  }
  const inicio = lerData(inicioTexto);
  const fim = lerData(fimTexto);
  if (fim <= inicio) {
    return { erro: "A data da atividade oral precisa ser depois da data de início." };
  }
  if (!(horasDia > 0)) {
    return { erro: "Informe quantas horas por dia você pode estudar." };
  }

  // Dias de estudo: do início até o dia anterior à atividade oral.
  const diasEstudo = Math.round((fim - inicio) / 86400000);
  const diasRevisao = Math.floor(diasEstudo / revisaCada);
  const diasConteudo = diasEstudo - diasRevisao;
  const capacidade = diasConteudo * horasDia;

  // Ordem de estudo: prioridade alta primeiro, mantendo a ordem original dentro de cada grupo.
  const ordenadas = aulas
    .map((aula, indice) => ({ aula, indice, prioridade: PRIORIDADE[aula.id] || "media" }))
    .sort((a, b) => ORDEM_PRIORIDADE[a.prioridade] - ORDEM_PRIORIDADE[b.prioridade] || a.indice - b.indice);

  // Escolhe o modo de cada aula, começando sempre como "completa".
  const modos = new Map(ordenadas.map((item) => [item.aula.id, "completa"]));
  const total = () => ordenadas.reduce((soma, item) => soma + horasDoModo(item.aula, modos.get(item.aula.id)), 0);

  // Se não couber, reduz primeiro as de menor prioridade (começando pelas últimas da lista).
  const reduzir = [...ordenadas].reverse();
  while (total() > capacidade) {
    let reduziu = false;
    for (const item of reduzir) {
      const atual = modos.get(item.aula.id);
      const proximo = PROXIMO_MODO[atual];
      if (proximo) {
        modos.set(item.aula.id, proximo);
        reduziu = true;
        break;
      }
    }
    if (!reduziu) break;
  }

  // Tarefas na ordem de estudo.
  const pendentes = ordenadas.map((item) => {
    const modo = modos.get(item.aula.id);
    return {
      aulaId: item.aula.id,
      titulo: item.aula.titulo,
      modo,
      restante: horasDoModo(item.aula, modo)
    };
  });

  const jaVistas = [];
  const dias = [];
  let contador = 0;

  for (let data = new Date(inicio); data < fim; data.setDate(data.getDate() + 1)) {
    contador += 1;
    const diaAtual = new Date(data);

    const ehRevisao = contador % revisaCada === 0 || pendentes.length === 0;
    if (ehRevisao) {
      dias.push({
        data: diaAtual,
        tipo: "revisao",
        horas: horasDia,
        itens: jaVistas.map((titulo) => ({ titulo: `Revisar: ${titulo}` }))
      });
      continue;
    }

    let orcamento = horasDia;
    const itens = [];
    while (orcamento > 0 && pendentes.length > 0) {
      const atual = pendentes[0];
      const usar = Math.min(orcamento, atual.restante);
      itens.push({
        aulaId: atual.aulaId,
        titulo: atual.titulo,
        modo: MODOS[atual.modo] ? MODOS[atual.modo].rotulo : "Questões e revisão",
        horas: usar
      });
      if (!jaVistas.includes(atual.titulo)) jaVistas.push(atual.titulo);
      atual.restante -= usar;
      orcamento -= usar;
      if (atual.restante <= 1e-9) pendentes.shift();
    }
    dias.push({ data: diaAtual, tipo: "estudo", horas: horasDia - orcamento, itens });
  }

  dias.push({
    data: new Date(fim),
    tipo: "oral",
    horas: 0,
    itens: [{ titulo: "Atividade oral: ensaie as perguntas da aba Ensaio oral" }]
  });

  const faltam = pendentes.map((p) => p.titulo);
  const reduzidas = ordenadas
    .filter((item) => modos.get(item.aula.id) !== "completa")
    .map((item) => ({ titulo: item.aula.titulo, modo: MODOS[modos.get(item.aula.id)].rotulo }));

  return { dias, faltam, reduzidas };
}
