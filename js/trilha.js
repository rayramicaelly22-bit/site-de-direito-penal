// Gera o plano de estudo entre a data de início e a data da atividade oral.
// Regras:
// - cada dia tem o número de horas informado pela pessoa;
// - o conteúdo das aulas é distribuído em ordem, dividindo aulas maiores que as horas do dia;
// - a cada "revisaCada" dias de estudo entra um dia de revisão do que já foi visto;
// - o último dia é a atividade oral (a data final informada).

function lerData(texto) {
  const [ano, mes, dia] = texto.split("-").map(Number);
  return new Date(ano, mes - 1, dia);
}

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

  const pendentes = aulas.map((aula) => ({ id: aula.id, titulo: aula.titulo, restante: aula.horas }));
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
        itens: jaVistas.map((titulo) => ({ titulo }))
      });
      continue;
    }

    let orcamento = horasDia;
    const itens = [];
    while (orcamento > 0 && pendentes.length > 0) {
      const atual = pendentes[0];
      const usar = Math.min(orcamento, atual.restante);
      itens.push({ aulaId: atual.id, titulo: atual.titulo, horas: usar });
      if (!jaVistas.includes(atual.titulo)) jaVistas.push(atual.titulo);
      atual.restante -= usar;
      orcamento -= usar;
      if (atual.restante <= 0) pendentes.shift();
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
  return { dias, faltam };
}
