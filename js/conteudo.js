// Organização do conteúdo: links de fonte, seções, macetes, jurisprudência e teste de nível.
// As aulas em si estão em complementar.js (Parte Geral) e faculdade.js (processo penal).
// Marcações usadas nos textos:
//   [[chave]]                  -> termo do glossário (glossario.js), com explicação ao clicar
//   [[chave|texto]]            -> termo com outro texto visível
//   {{juris:chave|texto}}      -> link para a página da jurisprudência/súmula

// Links de consulta. Sempre que um conteúdo for mostrado, o site indica onde conferir.
const LINKS = {
  cf: { nome: "Constituição Federal (Planalto)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
  cp: { nome: "Código Penal (Planalto)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm" },
  cpp: { nome: "Código de Processo Penal (Planalto)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm" },
  l9099: { nome: "Lei 9.099/1995 (Juizados Especiais)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9099.htm" },
  l11340: { nome: "Lei 11.340/2006 (Maria da Penha)", url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm" },
  l11343: { nome: "Lei 11.343/2006 (Lei de Drogas)", url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11343.htm" },
  l12850: { nome: "Lei 12.850/2013 (Organizações Criminosas)", url: "https://www.planalto.gov.br/ccivil_03/_ato2013-2014/2013/lei/l12850.htm" },
  l13869: { nome: "Lei 13.869/2019 (Abuso de Autoridade)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13869.htm" },
  lc80: { nome: "LC 80/1994 (Defensoria Pública)", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp80.htm" },
  ctb: { nome: "Código de Trânsito Brasileiro (Planalto)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm" },
  stf: { nome: "Portal do STF (súmulas e jurisprudência)", url: "https://portal.stf.jus.br/" },
  stj: { nome: "Portal do STJ", url: "https://www.stj.jus.br/" },
  cnj: { nome: "Conselho Nacional de Justiça", url: "https://www.cnj.jus.br/" }
};

// Fontes de consulta por aula (chaves de LINKS).
const FONTES = {
  "aula-01": ["cf", "cp"],
  "aula-02": ["cp"],
  "aula-03": ["cp"],
  "aula-04": ["cp"],
  "aula-05": ["cp", "cf"],
  "aula-06": ["cp"],
  "aula-07": ["cp", "stf"],
  "aula-08": ["cpp", "cf", "cp", "stf"],
  "aula-09": ["cf", "cpp", "l13869", "cnj", "stf"],
  "aula-10": ["cpp", "l9099", "l12850", "ctb", "stf"],
  "aula-11": ["cpp", "cf", "stj"],
  "aula-12": ["cpp", "lc80", "cf"],
  "aula-13": ["cpp", "l9099", "l11340", "l11343", "l12850"],
  "aula-14": ["cpp", "l9099", "lc80"],
  "aula-15": ["cpp", "cp"],
  "aula-16": ["cpp", "l11343", "lc80"],
  "aula-17": ["cpp", "l9099"],
  "aula-18": ["cf", "cpp", "cp"]
};

// Seção de cada aula: "complementar" = não foi dada pelo professor; o resto é "faculdade".
const COMPLEMENTAR = ["aula-01", "aula-02", "aula-03", "aula-04", "aula-05", "aula-06", "aula-07"];

// Macetes de decoreba (mostrados nas aulas quando há um).
const MACETES = {
  "aula-08": "As espécies de prisão são **PC-CAM**: Penal, Cautelar, Civil, Administrativa, Militar. Lembrete: a civil hoje vale só para devedor de alimentos.",
  "aula-09": "**JFSA** = Juiz, Família (comunicação da prisão), Silêncio e Advogado. Audiência de custódia: em 24 horas, o juiz vê a prisão.",
  "aula-10": "Flagrante por inciso do art. 302: **I** está cometendo, **II** acabou de cometer, **III** perseguido logo após, **IV** encontrado com objetos. Macete: **Está, Acabou, Perseguido, Encontrado**.",
  "aula-11": "Os fundamentos da preventiva são **OCA**: Ordem (pública e econômica), Conveniência (da instrução), Aplicação (da lei penal).",
  "aula-12": "Crimes inafiançáveis: **RAHTTT** = Racismo, grupos Armados, Hediondos, Tortura, Tráfico, Terrorismo. Quebra da fiança: intimado e não compareceu, obstruiu o processo ou cometeu nova infração dolosa.",
  "aula-13": "Pena **4 anos ou mais** → ordinário. Pena **menos de 4 anos** → sumário. Menor potencial ofensivo → sumaríssimo.",
  "aula-14": "Ordem no ordinário: **DIRC** = Denúncia, Impedimento/suspeição, Recebe ou rejeita, Citação. Frase: **Dona Inês Recebeu Carta**.",
  "aula-15": "Causas de rejeição (art. 395): **IPJ** = Inépcia, Pressuposto ou condição da ação, Justa causa.",
  "aula-16": "Números para decorar: resposta em **10 dias**; testemunhas: **8** no ordinário e **5** no sumário. Revelia: não respondeu, mas a acusação continua provando tudo.",
  "aula-17": "**581, I = rejeitou a denúncia → RESE em 5 dias** (art. 586). Juizado Especial: o recurso é a apelação."
};

// Jurisprudência e súmulas citadas nas aulas.
const JURIS = {
  "sv11": {
    titulo: "Súmula Vinculante 11 do STF (algemas)",
    tipo: "Súmula vinculante",
    texto: "Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado.",
    explicacao: "O uso de algemas é exceção. Só pode ser usado quando há resistência, risco de fuga ou risco à integridade física, e precisa ser justificado por escrito. Se não respeitar isso, a prisão ou o ato pode ser anulado.",
    fonte: "https://portal.stf.jus.br/",
    fonteNome: "Portal do STF (jurisprudência e súmulas)"
  },
  "sum145": {
    titulo: "Súmula 145 do STF (flagrante preparado)",
    tipo: "Súmula (não vinculante)",
    texto: "Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação.",
    explicacao: "Se a polícia cria a situação para que o crime aconteça e, por causa disso, o crime não pode se consumar, não há crime. Isso é diferente de a polícia apenas observar um crime que já está acontecendo.",
    fonte: "https://portal.stf.jus.br/",
    fonteNome: "Portal do STF (jurisprudência e súmulas)"
  },
  "hc126292": {
    titulo: "HC 126.292 (execução da pena após condenação em 2ª instância)",
    tipo: "Decisão do STF (habeas corpus)",
    texto: "Em 2016, o STF entendeu que a execução da pena pode começar após condenação em segundo grau, mesmo sem trânsito em julgado.",
    explicacao: "Essa decisão mudou o entendimento anterior sobre a presunção de inocência. Em 2019, nas ADCs 43, 44 e 54, o STF voltou a exigir o trânsito em julgado para a execução da pena, em regra. Por isso é importante verificar sempre a decisão mais recente antes de citar.",
    fonte: "https://portal.stf.jus.br/",
    fonteNome: "Portal do STF (jurisprudência e súmulas)"
  },
  "cp": {
    titulo: "Código Penal (Decreto-Lei 2.848/1940)",
    tipo: "Lei",
    texto: "Texto compilado do Código Penal, com a Parte Geral (arts. 1º a 120) e a Parte Especial.",
    explicacao: "É a principal fonte das aulas. Use sempre a versão compilada atual.",
    fonte: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
    fonteNome: "Planalto (texto compilado)"
  }
};

// Perguntas do teste de nível (só conteúdo da Faculdade). "correta" é a posição da alternativa certa.
const NIVEL = [
  { aula: "aula-14", pergunta: "Qual é o prazo para a resposta à acusação no procedimento comum ordinário?", alternativas: ["5 dias", "10 dias", "15 dias", "20 dias"], correta: 1 },
  { aula: "aula-11", pergunta: "Em qual hipótese a prisão preventiva é cabível, segundo o art. 313 do CPP?", alternativas: ["Crime culposo com pena de 1 ano", "Crime doloso com pena máxima superior a 4 anos", "Contravenção penal", "Qualquer crime, sem exceção"], correta: 1 },
  { aula: "aula-10", pergunta: "Quem acaba de cometer a infração, sendo preso logo depois, está em qual tipo de flagrante?", alternativas: ["Próprio", "Impróprio", "Presumido", "Esperado"], correta: 0 },
  { aula: "aula-17", pergunta: "Qual recurso cabe contra a decisão que rejeita a denúncia?", alternativas: ["Apelação", "RESE", "Embargos de declaração", "Agravo"], correta: 1 },
  { aula: "aula-09", pergunta: "O que a Súmula Vinculante 11 do STF trata?", alternativas: ["Fiança", "Uso de algemas", "Audiência de custódia", "Prisão civil"], correta: 1 },
  { aula: "aula-09", pergunta: "Em quanto tempo o preso deve passar pela audiência de custódia?", alternativas: ["Em até 24 horas", "Em até 48 horas", "Em até 72 horas", "Em até 5 dias"], correta: 0 },
  { aula: "aula-12", pergunta: "Qual destes crimes NÃO admite fiança?", alternativas: ["Furto simples", "Tráfico de drogas", "Lesão corporal leve", "Ameaça"], correta: 1 },
  { aula: "aula-10", pergunta: "Se a polícia prepara o flagrante e, por isso, o crime não se consuma, o que acontece?", alternativas: ["Crime consumado", "Crime impossível, não há crime (Súmula 145)", "Tentativa punível", "Prisão preventiva"], correta: 1 },
  { aula: "aula-16", pergunta: "Qual é o prazo da Defensoria Pública para apresentar a resposta à acusação?", alternativas: ["10 dias", "20 dias", "15 dias", "30 dias"], correta: 1 },
  { aula: "aula-13", pergunta: "O procedimento comum ordinário é aplicado a crimes com pena máxima:", alternativas: ["Inferior a 4 anos", "Igual ou superior a 4 anos", "Superior a 10 anos", "Inferior a 2 anos"], correta: 1 },
  { aula: "aula-16", pergunta: "Quantas testemunhas o acusado pode arrolar no procedimento comum ordinário?", alternativas: ["3", "5", "8", "10"], correta: 2 },
  { aula: "aula-15", pergunta: "No crime de ameaça (art. 147 do CP), a ação penal depende de:", alternativas: ["Requisição do Ministro da Justiça", "Representação da vítima", "Ação penal privada exclusiva", "Nada, é ação penal pública incondicionada"], correta: 1 }
];

// Junta as aulas: Parte Geral primeiro, depois a Faculdade.
const AULAS = [...AULAS_COMPLEMENTAR, ...AULAS_FACULDADE];

AULAS.forEach((aula) => {
  aula.secao = COMPLEMENTAR.includes(aula.id) ? "complementar" : "faculdade";
});
