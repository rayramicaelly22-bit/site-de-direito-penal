// Conteúdo das aulas e das decisões citadas.
// Marcações usadas nos textos:
//   [[chave]]                  -> termo do glossário (glossario.js), com explicação ao clicar
//   {{juris:chave|texto}}      -> link para a página da jurisprudência/súmula

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
  "aula-17": ["cpp", "l9099"]
};

// Seção de cada aula: "complementar" = não foi dada pelo professor; o resto é "faculdade".
const COMPLEMENTAR = ["aula-01", "aula-02", "aula-03", "aula-04", "aula-05", "aula-06", "aula-07"];

const AULAS = [
  {
    id: "aula-01",
    titulo: "Princípio da legalidade",
    horas: 2,
    resumo: "Só é crime o que a lei define antes do fato, e só existe pena que a lei prevê antes.",
    simples: [
      "O [[principio-legalidade]] é a regra mais importante do Direito Penal. Ele diz que ninguém pode ser punido por um fato que não estava definido como crime em lei na época em que foi praticado.",
      "Ele tem dois lados: não há crime sem lei anterior (a conduta precisa estar descrita) e não há pena sem prévia cominação legal (a punição também precisa estar prevista).",
      "Também existe a proibição de analogia para prejudicar o réu: a lei penal não pode ser ampliada por comparação com outra situação."
    ],
    crianca: "Imagine um jogo em que as regras são escritas antes da partida. Ninguém pode ser punido por uma jogada que não estava nas regras quando foi feita. E a punição também tem que estar escrita nas regras antes do jogo começar.",
    secoes: [
      {
        titulo: "Base constitucional e legal",
        paragrafos: [
          "Constituição, art. 5º, XXXIX: não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.",
          "Código Penal, art. 1º: a mesma regra, com redação quase igual.",
          "Consequência prática: a lei penal que prejudica o réu não retroage. A que beneficia (lei mais benigna) retroage, salvo decisão definitiva (art. 2º do CP)."
        ]
      },
      {
        titulo: "Funções do princípio",
        paragrafos: [
          "Garantia: protege o cidadão contra o poder de punir do Estado.",
          "Segurança jurídica: a pessoa sabe de antemão o que é proibido.",
          "Limite ao juiz: o juiz não cria crime nem pena por conta própria."
        ]
      }
    ],
    casos: [
      {
        titulo: "Decisão histórica sobre a retroatividade",
        tipo: "ilustrativo",
        texto: "Imagine que, em 2020, alguém vende um produto que, em 2021, passa a ser crime. Pelo princípio da legalidade, ele não pode ser punido pela venda de 2020. Se a lei nova fosse mais branda, ela retroagiria para beneficiá-lo."
      }
    ],
    juris: [
      { chave: "hc126292", ligacao: "Ver decisão sobre execução da pena e presunção de inocência" }
    ],
    questoes: [
      {
        pergunta: "Explique por que o princípio da legalidade protege o cidadão, usando um exemplo.",
        modelo: "Deve citar que a conduta e a pena precisam estar previstas em lei antes do fato, dar um exemplo concreto e relacionar à segurança jurídica e à proteção contra arbitrariedade."
      },
      {
        pergunta: "Por que o juiz não pode punir alguém por um fato parecido com um crime previsto em lei, quando a lei não o descreve?",
        modelo: "Porque a analogia in malam partem (para prejudicar o réu) é vedada. Não há crime sem lei que o defina, então a conduta não pode ser equiparada a outra por semelhança."
      }
    ]
  },
  {
    id: "aula-02",
    titulo: "Conceito analítico de crime",
    horas: 2,
    resumo: "Crime é fato típico, ilícito e culpável. Cada elemento é uma etapa da análise.",
    simples: [
      "Para saber se alguém cometeu crime, o raciocínio segue três perguntas em ordem: o fato é [[fato-tipico]]? É [[ilicitude|ilícito]]? O autor é [[culpabilidade|culpável]]?",
      "Se a resposta for não em qualquer etapa, não há crime. Essa análise em etapas é chamada de método analítico.",
      "A maior parte dos estudos de prova oral se apoia nesse roteiro: a banca costuma perguntar a sequência."
    ],
    crianca: "Pense em três portas. Para passar pela primeira, o que aconteceu tem que estar escrito no livro de regras. Para passar pela segunda, não pode haver uma desculpa que justifique o ato. Para passar pela última, a pessoa precisa ser responsável pelo que fez. Se ficar presa em qualquer porta, não há crime.",
    secoes: [
      {
        titulo: "Os três elementos",
        paragrafos: [
          "Fato típico: conduta humana, resultado, nexo causal e tipicidade (a conduta se encaixa no tipo penal).",
          "Ilicitude: a conduta típica é contrária ao direito, salvo causas de justificação.",
          "Culpabilidade: o autor pode ser reprovado pelo fato, o que exige imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa."
        ]
      },
      {
        titulo: "Por que essa ordem importa",
        paragrafos: [
          "O fato típico é o primeiro filtro. Se a conduta não é descrita em lei, a análise para aí.",
          "Uma conduta típica pode ser lícita se houver excludente (ex.: legítima defesa).",
          "Uma conduta típica e ilícita pode não ser culpável (ex.: inimputável)."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a vítima que reage",
        tipo: "ilustrativo",
        texto: "Alguém dá um soco em outra pessoa que está prestes a agredi-lo com uma faca. O soco se encaixa na descrição de lesão corporal (fato típico), mas a reação é legítima defesa (exclui a ilicitude). Sem ilicitude, não há crime."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são os três elementos do crime e em que ordem a análise deve ser feita?",
        modelo: "Fato típico, ilicitude e culpabilidade. A análise segue essa ordem, porque cada etapa depende da anterior."
      },
      {
        pergunta: "Uma conduta pode ser típica e não ser crime? Dê um exemplo.",
        modelo: "Sim. Se houver excludente de ilicitude (como legítima defesa) ou falta de culpabilidade (como a inimputabilidade), não há crime, mesmo sendo típica."
      }
    ]
  },
  {
    id: "aula-03",
    titulo: "Fato típico: conduta, resultado, nexo e tipicidade",
    horas: 2,
    resumo: "O fato típico é a conduta humana que se encaixa na descrição de um crime.",
    simples: [
      "A [[fato-tipico|conduta]] é uma ação ou omissão humana, voluntária e dirigida a um fim. Sem ação ou omissão humana, não há conduta penal.",
      "O [[nexo-causal]] liga a conduta ao resultado. Pela teoria da equivalência dos antecedentes (art. 13 do CP), é causa tudo o que contribui para o resultado, e ele só é atribuído ao autor se, sem a conduta, o resultado não teria ocorrido.",
      "A [[tipo-penal|tipicidade]] é a correspondência entre o fato concreto e a descrição abstrata da lei. Pode ser formal (a conduta se encaixa no texto) ou material (a conduta causou lesão ou perigo relevante ao bem jurídico)."
    ],
    crianca: "Imagine uma lista de coisas que a lei proíbe. Para o fato típico, a pessoa precisa ter feito alguma coisa (ou deixado de fazer o que devia), isso precisa ter causado um efeito, esse efeito precisa estar ligado ao que a pessoa fez, e tudo precisa caber na descrição da lista.",
    secoes: [
      {
        titulo: "Omissão",
        paragrafos: [
          "Omissão própria: a lei manda agir e a pessoa não age (ex.: omissão de socorro, art. 135 do CP).",
          "Omissão imprópria (comissiva por omissão): a pessoa tinha o dever legal de impedir o resultado e não o fez (art. 13, §2º, do CP). Exemplo: a mãe que não alimenta o filho, que morre."
        ]
      },
      {
        titulo: "Crime doloso e culposo, em resumo",
        paragrafos: [
          "O tipo pode ser doloso (a pessoa quis) ou culposo (a pessoa não quis, mas agiu com imprudência, negligência ou imperícia). Veja a aula de dolo e culpa."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a omissão da cuidadora",
        tipo: "ilustrativo",
        texto: "Uma cuidadora tem o dever legal de dar remédio a um idoso e deixa de fazê-lo. O idoso morre. Pelo art. 13, §2º, do CP, a omissão é equivalente à ação, porque ela tinha o dever de agir."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Explique a diferença entre omissão própria e omissão imprópria.",
        modelo: "A própria é a violação de um comando que manda agir (ex.: omissão de socorro). A imprópria ocorre quando há dever de impedir o resultado e a pessoa não o faz, sendo equiparada à ação (art. 13, §2º, do CP)."
      },
      {
        pergunta: "Como o art. 13 do CP define quem causou o resultado?",
        modelo: "Pela teoria da equivalência dos antecedentes: causa é toda condição sem a qual o resultado não teria ocorrido. Deve citar o teste de eliminação hipotética."
      }
    ]
  },
  {
    id: "aula-04",
    titulo: "Dolo e culpa",
    horas: 2,
    resumo: "Dolo é querer o resultado ou assumir o risco. Culpa é causar sem querer, por falta de cuidado.",
    simples: [
      "O [[dolo]] é a regra geral dos crimes. Ele pode ser direto (a pessoa quer o resultado) ou eventual (a pessoa prevê o resultado e assume o risco de produzi-lo).",
      "A [[culpa]] acontece quando a pessoa causa o resultado por imprudência (agir sem cuidado), negligência (deixar de agir com cuidado) ou imperícia (falta de habilidade em arte ou profissão). Só é punida se a lei prever.",
      "Art. 18 do CP: diz-se o crime doloso quando o agente quis o resultado ou assumiu o risco de produzi-lo; e culposo quando deu causa por imprudência, negligência ou imperícia."
    ],
    crianca: "Dolo é quando você quer tanto um pedaço do bolo que empurra a pessoa do lado para pegar. Culpa é quando você esbarra na pessoa sem querer, porque estava correndo sem olhar. As duas coisas podem machucar, mas a intenção muda a regra.",
    secoes: [
      {
        titulo: "Espécies de dolo",
        paragrafos: [
          "Dolo direto: a vontade é dirigida ao resultado.",
          "Dolo eventual: o agente prevê o resultado e aceita o risco de produzi-lo. É o caso típico de quem dirige em alta velocidade em área cheia de pedestres.",
          "Dolo genérico e específico: o específico exige uma finalidade especial. No furto, por exemplo, é preciso querer ter a coisa para si (art. 155 do CP)."
        ]
      },
      {
        titulo: "Culpa",
        paragrafos: [
          "Imprudência: ação perigosa, sem cautela (ex.: dirigir em alta velocidade).",
          "Negligência: omissão de cuidado (ex.: deixar arma ao alcance de criança).",
          "Imperícia: falta de habilidade técnica (ex.: médico que erra por falta de conhecimento básico).",
          "Crime culposo só existe se a lei prever expressamente (art. 18, parágrafo único, do CP)."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o racha",
        tipo: "ilustrativo",
        texto: "Um motorista participa de um racha em rua movimentada. Ele não queria atropelar ninguém, mas assumiu o risco. Se atingir um pedestre, a discussão sobre dolo eventual é central: a banca costuma cobrar a distinção entre dolo eventual e culpa consciente."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Qual a diferença entre dolo eventual e culpa consciente?",
        modelo: "Nos dois há previsão do resultado. No dolo eventual o agente assume o risco e aceita o resultado. Na culpa consciente ele prevê, mas confia sinceramente que não vai ocorrer."
      },
      {
        pergunta: "Dê um exemplo de imperícia e explique por que ela é culposa.",
        modelo: "Exemplo: profissional que realiza procedimento sem a habilidade técnica exigida. É culposa porque o resultado decorre de falta de habilidade, não de vontade."
      }
    ]
  },
  {
    id: "aula-05",
    titulo: "Ilicitude e excludentes",
    horas: 2,
    resumo: "A conduta típica é justificada quando a lei permite. São quatro causas de justificação.",
    simples: [
      "A [[ilicitude]] é a contrariedade da conduta típica ao direito. Uma conduta típica é, em regra, ilícita. Mas há casos em que a lei a permite: são as excludentes.",
      "O art. 23 do CP lista três delas: [[estado-de-necessidade]], [[legitima-defesa]] e estrito cumprimento do dever legal ou exercício regular de direito.",
      "O que sustenta cada excludente é a proporcionalidade e a necessidade: o meio usado precisa ser moderado, e o perigo precisa ser real e atual."
    ],
    crianca: "Se alguém tenta te machucar e você se defende na medida certa, você não fez nada errado, mesmo tendo empurrado a pessoa. Mas se você bate sem precisar, aí a sua ação passa a ser errada. A lei olha para a medida da reação.",
    secoes: [
      {
        titulo: "Legítima defesa (art. 25 do CP)",
        paragrafos: [
          "Requisitos: agressão injusta, atual ou iminente; direito próprio ou de terceiro; defesa com meio necessário e uso moderado.",
          "Não é preciso fugir antes de se defender, desde que a agressão seja atual ou iminente.",
          "Excesso: se o meio for além do necessário, há excesso punível, em regra a título de dolo ou culpa (art. 23, parágrafo único, do CP)."
        ]
      },
      {
        titulo: "Estado de necessidade (art. 24 do CP)",
        paragrafos: [
          "Perigo atual, que o agente não causou e não podia evitar.",
          "Sacrifício de bem de valor igual ou inferior ao salvo. Ex.: arrombar a porta de uma casa em chamas para salvar uma criança."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a porta arrombada",
        tipo: "ilustrativo",
        texto: "Uma casa pega fogo e alguém arromba a porta de um vizinho para retirar uma criança. Há dano ao patrimônio, mas o estado de necessidade afasta a ilicitude, porque o bem sacrificado é de valor menor que a vida salva."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são os requisitos da legítima defesa? Responda com base no art. 25 do CP.",
        modelo: "Agressão injusta, atual ou iminente; direito próprio ou de outrem; repulsa com meio necessário e uso moderado. Deve mencionar o excesso como limite."
      },
      {
        pergunta: "Qual é a diferença entre estado de necessidade e legítima defesa?",
        modelo: "Na legítima defesa a agressão vem de uma pessoa (agressão injusta). No estado de necessidade o perigo pode vir de fatos da natureza ou de outras situações, e o sacrifício é de outro bem, não de quem ataca."
      }
    ]
  },
  {
    id: "aula-06",
    titulo: "Culpabilidade",
    horas: 2,
    resumo: "O autor precisa ser capaz, ter potencial consciência da ilicitude e poder agir de outro modo.",
    simples: [
      "A [[culpabilidade]] é o juízo de reprovação que se faz ao autor do fato típico e ilícito. Ela tem três pilares: [[imputabilidade]], potencial consciência da ilicitude e exigibilidade de conduta diversa.",
      "A imputabilidade é a capacidade de entender o caráter ilícito do fato e de agir conforme esse entendimento. Menores de 18 anos são inimputáveis (art. 27 do CP).",
      "A potencial consciência da ilicitude significa que a pessoa podia, com esforço normal, saber que o fato era proibido. Erro sobre a ilicitude pode excluir a culpabilidade, se for inevitável (art. 21 do CP)."
    ],
    crianca: "Culpar alguém é dizer: você sabia que estava errado e podia ter feito diferente. Uma criança pequena não tem essa capacidade total, por isso não é responsabilizada do mesmo jeito. E se a pessoa não tinha como saber que era errado, ela também não é culpada.",
    secoes: [
      {
        titulo: "Causas de exclusão da culpabilidade",
        paragrafos: [
          "Inimputabilidade: menoridade (art. 27) e doença mental ou desenvolvimento mental incompleto ou retardado, quando a pessoa não podia entender o fato (art. 26).",
          "Semi-imputabilidade: se a capacidade estava só parcialmente comprometida, o juiz pode reduzir a pena de um a dois terços (art. 26, parágrafo único).",
          "Erro de proibição inevitável (art. 21).",
          "Coação moral irresistível e obediência hierárquica não manifestamente ilegal (art. 22)."
        ]
      },
      {
        titulo: "Exigibilidade de conduta diversa",
        paragrafos: [
          "Se, nas circunstâncias, não era razoável exigir outro comportamento, a culpabilidade pode ser afastada.",
          "A doutrina discute esse ponto, por isso é bom citar a corrente com cuidado em prova oral."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a obediência hierárquica",
        tipo: "ilustrativo",
        texto: "Um funcionário cumpre uma ordem de superior para executar um ato. Se a ordem não for manifestamente ilegal, quem obedeceu pode ter a culpabilidade afastada (art. 22 do CP), e a responsabilidade recai sobre quem deu a ordem."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são os três elementos da culpabilidade?",
        modelo: "Imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa."
      },
      {
        pergunta: "O que acontece com quem comete um crime com 17 anos? Explique a base legal.",
        modelo: "É inimputável (art. 27 do CP). Não comete crime, mas sujeita-se a medidas socioeducativas do ECA. Deve citar a diferença entre crime e ato infracional."
      }
    ]
  },
  {
    id: "aula-07",
    titulo: "Iter criminis: tentativa, consumação e desistência",
    horas: 2,
    resumo: "Caminho do crime: cogitação, preparação, execução e consumação. Só a execução pode ser tentativa.",
    simples: [
      "O [[iter-criminis]] é o percurso do crime. Ele tem as fases de cogitação (pensar), preparação (organizar meios), execução (começar a agir) e consumação (realizar todos os elementos do tipo).",
      "Em regra, a cogitação e a preparação não são punidas. A punição começa na execução.",
      "A [[tentativa]] acontece quando a execução começa, mas o crime não se consuma por circunstâncias alheias à vontade do agente. A pena é reduzida de um a dois terços (art. 14, parágrafo único, do CP)."
    ],
    crianca: "Pense em fazer um bolo. Primeiro você imagina o bolo (pensar). Depois compra os ingredientes (preparar). Depois você começa a bater a massa (começar a fazer). Se o bolo ficar pronto, é consumado. Se o forno apagar no meio, ele não ficou pronto por motivo que não foi sua escolha.",
    secoes: [
      {
        titulo: "Desistência voluntária e arrependimento eficaz (art. 15 do CP)",
        paragrafos: [
          "Desistência voluntária: o agente interrompe a execução por vontade própria. Responde apenas pelos atos já praticados.",
          "Arrependimento eficaz: o agente já executou tudo, mas impede o resultado. Também responde só pelos atos praticados.",
          "Não se confundem com tentativa, porque aqui a interrupção é voluntária."
        ]
      },
      {
        titulo: "Crime impossível (art. 17 do CP)",
        paragrafos: [
          "Quando o meio é absolutamente ineficaz ou o objeto é absolutamente impróprio, não há punição.",
          "Ex.: tentar matar alguém com uma arma de brinquedo, sabendo que ela não dispara."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o disparo que falha",
        tipo: "ilustrativo",
        texto: "Alguém atira em outra pessoa, mas a vítima escapa ilesa. O crime de homicídio não se consumou por circunstâncias alheias à vontade do agente. Há tentativa de homicídio, com pena reduzida."
      }
    ],
    juris: [
      { chave: "sum145", ligacao: "Ver sobre flagrante preparado (aplicação prática do iter criminis)" }
    ],
    questoes: [
      {
        pergunta: "Qual a diferença entre tentativa e desistência voluntária?",
        modelo: "Na tentativa, a execução começa e o crime não se consuma por circunstâncias alheias à vontade do agente. Na desistência voluntária, o agente interrompe a execução por vontade própria (art. 15 do CP), respondendo só pelos atos praticados."
      },
      {
        pergunta: "Por que a cogitação não é punida no Direito Penal brasileiro?",
        modelo: "Porque o direito penal de fato pune conduta exteriorizada que lesa ou ameaça bem jurídico. Pensamento isolado não atinge bem jurídico, e a punição exigiria controle sobre a mente, o que é vedado."
      }
    ]
  },
  {
    id: "aula-08",
    titulo: "Prisão: conceito e espécies",
    horas: 2,
    resumo: "Prisão é a privação da liberdade de locomoção. Ela pode ser penal, cautelar, civil, administrativa ou militar.",
    simples: [
      "A [[prisao]] é qualquer privação da liberdade de ir e vir. A regra é que ela só ocorre por ordem judicial ou em flagrante delito (art. 5º, LXI, da CF).",
      "Quanto ao momento, a prisão é penal quando decorre de sentença condenatória transitada em julgado, e cautelar quando é decretada antes disso (preventiva, temporária ou em flagrante).",
      "Há também prisões de natureza civil (devedor de alimentos), administrativa e militar. A prisão do depositário infiel foi afastada pelo STF, e a administrativa não é admitida como forma de punição."
    ],
    crianca: "Prender alguém é tirar a pessoa do lugar onde ela quer estar. A lei só permite isso em situações bem específicas: quando um juiz manda, quando a pessoa é pega no momento do erro, ou quando o caso é de pena já decidida. Tudo fora disso é proibido.",
    secoes: [
      {
        titulo: "Detração",
        paragrafos: [
          "O tempo de prisão provisória (cautelar) é descontado da pena definitiva (art. 42 do CP). Exemplo: 2 anos presos preventivamente e pena final de 10 anos resultam em 8 anos a cumprir.",
          "Há debate sobre medidas cautelares diversas da prisão. Tribunais superiores costumam admitir o desconto do recolhimento domiciliar noturno e de fins de semana, mas não da monitoração eletrônica. Confira a jurisprudência atual antes de citar."
        ]
      },
      {
        titulo: "Prisão especial",
        paragrafos: [
          "É uma forma de cumprimento da prisão cautelar, antes do trânsito em julgado, em local separado da cela comum (art. 295 do CPP).",
          "Têm direito, entre outros, juízes, membros do Ministério Público, defensores públicos e advogados, com diploma de curso superior."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a detração",
        tipo: "ilustrativo",
        texto: "Um réu fica preso preventivamente por 2 anos e depois é condenado a 10 anos. O tempo já cumprido é descontado, e ele precisa cumprir mais 8 anos. Se a prisão cautelar tivesse sido revogada, o desconto seria do tempo efetivamente preso."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Qual a diferença entre prisão penal e prisão cautelar?",
        modelo: "A penal decorre de sentença condenatória com trânsito em julgado e cumpre a pena. A cautelar é anterior à condenação definitiva, serve a finalidades processuais e não é pena (ex.: preventiva, temporária e flagrante)."
      },
      {
        pergunta: "Por que a prisão do depositário infiel não pode mais ser decretada?",
        modelo: "Porque o Pacto de San José da Costa Rica, ratificado pelo Brasil, tem status supralegal, e o STF (Súmula Vinculante 25) entendeu que a prisão civil do depositário infiel é ilícita, qualquer que seja a modalidade do depósito. Só permanece a prisão civil do devedor de alimentos."
      }
    ]
  },
  {
    id: "aula-09",
    titulo: "Direitos do preso e audiência de custódia",
    horas: 2,
    resumo: "Quem é preso tem direitos constitucionais, e a audiência de custódia permite ao juiz verificar a legalidade da prisão.",
    simples: [
      "A Constituição garante ao preso o respeito à integridade física e moral (art. 5º, XLIX), a comunicação imediata da prisão ao juiz e à família (art. 5º, LXII), o direito ao silêncio e à assistência de advogado (art. 5º, LXIII).",
      "O uso de algemas é exceção (Súmula Vinculante 11). Expor o preso a constrangimento, como o chamado \"perp walk\", é conduta que pode configurar abuso de autoridade (Lei 13.869/2019, art. 13).",
      "A audiência de custódia deve ocorrer em até 24 horas após a prisão, preferencialmente por videoconferência. Nela o juiz verifica a legalidade e a necessidade da prisão, pode relaxá-la, conceder liberdade provisória ou aplicar medida cautelar. Ela não analisa o mérito da acusação (CNJ, Resolução 213/2015; CPP, art. 310)."
    ],
    crianca: "Quem é pego por um problema tem o direito de ficar em silêncio, de ter um advogado e de ser tratado com respeito. E alguém precisa olhar, em pouco tempo, se a prisão foi feita do jeito certo.",
    secoes: [
      {
        titulo: "Direito ao silêncio e não autoincriminação",
        paragrafos: [
          "Ninguém é obrigado a produzir prova contra si mesmo (nemo tenetur se detegere).",
          "A não comunicação da prisão ao juiz pode configurar crime de abuso de autoridade (Lei 13.869/2019, art. 12)."
        ]
      },
      {
        titulo: "Audiência de custódia",
        paragrafos: [
          "Serve para checar a legalidade da prisão e os maus-tratos, não para decidir a culpa.",
          "O STJ entende que ultrapassar o prazo de 24 horas não torna a prisão ilegal se o juiz justificar o atraso."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a algema sem justificativa",
        tipo: "ilustrativo",
        texto: "Uma pessoa presa sem resistência e sem risco de fuga é algemada em audiência pública. Pela Súmula Vinculante 11, o uso só é lícito em casos de resistência, fundado receio de fuga ou perigo, e precisa ser justificado por escrito. Sem isso, o ato pode ser anulado."
      }
    ],
    juris: [
      { chave: "sv11", ligacao: "Ver o texto integral da Súmula Vinculante 11" }
    ],
    questoes: [
      {
        pergunta: "O que é a audiência de custódia e qual o seu objetivo?",
        modelo: "É a apresentação do preso ao juiz em até 24 horas da prisão (CPP, art. 310). O objetivo é verificar a legalidade e a necessidade da prisão e as condições de tratamento do preso, sem analisar o mérito da acusação."
      },
      {
        pergunta: "Quando o uso de algemas é permitido?",
        modelo: "Só em caso de resistência, de fundado receio de fuga ou de perigo à integridade física própria ou alheia, com justificativa por escrito (Súmula Vinculante 11). Fora disso, o uso é irregular e pode gerar nulidade e responsabilização."
      }
    ]
  },
  {
    id: "aula-10",
    titulo: "Prisão em flagrante",
    horas: 2,
    resumo: "O flagrante é a prisão feita no momento do crime ou logo depois. Nem todo flagrante é válido.",
    simples: [
      "O [[flagrante]] está previsto no art. 302 do CPP. Pode ser próprio (quem está cometendo a infração ou acabou de cometê-la), impróprio (perseguido logo após, em situação de quase flagrante) ou presumido (encontrado logo depois com objetos que façam presumir a autoria).",
      "Qualquer pessoa pode prender em flagrante, e as autoridades policiais têm o dever de fazê-lo (art. 301 do CPP).",
      "Não se lavra auto de prisão em flagrante para infrações de menor potencial ofensivo: lavra-se o termo circunstanciado de ocorrência (TCO), se o autor se comprometer a comparecer ao juizado (Lei 9.099/1995, art. 69, parágrafo único)."
    ],
    crianca: "Flagrante é quando alguém pega a pessoa com a mão na massa, ou logo depois. Mas a polícia não pode criar a situação para pegar alguém, nem usar um flagrante que ela mesma fabricou.",
    secoes: [
      {
        titulo: "Tipos de flagrante na prática",
        paragrafos: [
          "Flagrante preparado ou provocado: a polícia induz a pessoa ao crime e, por causa das precauções, o crime não se consuma. Não há crime, conforme a Súmula 145 do STF, por se tratar de crime impossível.",
          "Flagrante esperado: a polícia apenas aguarda o crime acontecer, sem induzir. É legal.",
          "Flagrante prorrogado ou retardado (ação controlada): a polícia espera o melhor momento para agir. É legal quando há previsão legal, como na Lei de Organizações Criminosas (Lei 12.850/2013, art. 8º) e na Lei de Drogas.",
          "Flagrante forjado: a polícia fabrica provas para justificar a prisão. É ilegal."
        ]
      },
      {
        titulo: "Etapas do flagrante",
        paragrafos: [
          "Captura, condução coercitiva, lavratura do auto de prisão em flagrante (APF) e recolhimento ao cárcere ou encaminhamento ao juiz."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o acusado de tráfico",
        tipo: "ilustrativo",
        texto: "A polícia combina a venda de droga com um suspeito e prepara toda a operação para prendê-lo, mas, por causa da vigilância, a transação nunca se completa. Pela Súmula 145 do STF, não há crime, porque a própria polícia tornou impossível a consumação."
      }
    ],
    juris: [
      { chave: "sum145", ligacao: "Ver a Súmula 145 sobre flagrante preparado" }
    ],
    questoes: [
      {
        pergunta: "Qual a diferença entre flagrante preparado e flagrante esperado?",
        modelo: "No preparado a polícia induz o agente ao crime, e por isso o crime é impossível (Súmula 145). No esperado a polícia apenas aguarda a prática espontânea, sem induzir, e o flagrante é válido."
      },
      {
        pergunta: "Em quais situações não se lavra auto de prisão em flagrante?",
        modelo: "Em infrações de menor potencial ofensivo, em que se lavra TCO, e em crime culposo de trânsito em que o autor presta socorro (art. 301 do CTB), sem exigência de fiança e sem flagrante."
      }
    ]
  },
  {
    id: "aula-11",
    titulo: "Prisão preventiva e prisão domiciliar",
    horas: 2,
    resumo: "A preventiva é cautelar decretada pelo juiz, com requisitos claros. A domiciliar pode substituí-la.",
    simples: [
      "A [[prisao-preventiva]] exige prova da existência do crime e indícios suficientes de autoria (art. 312 do CPP), e um fundamento: garantir a ordem pública ou econômica, a conveniência da instrução criminal ou a aplicação da lei penal.",
      "Só cabe nas hipóteses do art. 313 do CPP, como crime doloso com pena máxima superior a 4 anos, reincidência em crime doloso, violência doméstica para garantir medidas protetivas, ou dúvida sobre a identidade civil.",
      "A preventiva não é cabível se o agente agiu amparado por excludente de ilicitude (art. 314). A decisão precisa ser fundamentada (art. 315) e reavaliada a cada 90 dias (art. 316, parágrafo único)."
    ],
    crianca: "A prisão preventiva é como segurar uma pessoa antes do julgamento, porque há um motivo sério e concreto. Não basta achar que ela é perigosa: a lei exige um motivo claro e que a prisão seja necessária.",
    secoes: [
      {
        titulo: "Não cabe como antecipação de pena",
        paragrafos: [
          "A gravidade do crime, por si só e em abstrato, não basta para decretar a preventiva. O juiz precisa demonstrar o risco concreto.",
          "Na fase de investigação, o juiz não pode decretá-la de ofício (art. 311, redação atual do CPP)."
        ]
      },
      {
        titulo: "Prisão domiciliar (art. 318)",
        paragrafos: [
          "Não é uma nova espécie de prisão cautelar: substitui a preventiva em situações como pessoa maior de 80 anos, doença grave, gestante, mulher com filho de até 12 anos incompletos e homem que seja o único responsável por filho nessa idade.",
          "Confira a redação atual do art. 318, porque as hipóteses foram alteradas por leis recentes."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a gravidade do crime",
        tipo: "ilustrativo",
        texto: "Alguém é preso em flagrante por um crime grave, mas não há risco concreto de fuga, de reiteração nem de atrapalhar a investigação. O juiz não pode converter a prisão em preventiva apenas pela gravidade em abstrato."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são os requisitos da prisão preventiva?",
        modelo: "Prova da existência do crime e indícios suficientes de autoria (art. 312), mais um dos fundamentos (ordem pública ou econômica, instrução criminal ou aplicação da lei penal), e uma das hipóteses do art. 313."
      },
      {
        pergunta: "Qual a relação entre prisão domiciliar e prisão preventiva?",
        modelo: "A domiciliar substitui a preventiva quando o caso se enquadra no art. 318 (ex.: idoso, doença grave, gestante, responsável por criança). Não é uma nova espécie de prisão cautelar."
      }
    ]
  },
  {
    id: "aula-12",
    titulo: "Medidas cautelares diversas e fiança",
    horas: 2,
    resumo: "O juiz pode impor medidas menos graves que a prisão. A fiança é uma delas, com regras próprias.",
    simples: [
      "As [[medida-cautelar|medidas cautelares diversas da prisão]] estão no art. 319 do CPP: comparecimento periódico em juízo, proibição de frequentar certos lugares, proibição de se ausentar da comarca, recolhimento domiciliar noturno, suspensão de função pública, internação provisória, fiança, monitoração eletrônica, proibição de contato e suspensão de atividade econômica.",
      "A [[fianca]] é uma garantia em dinheiro, com valor definido conforme a pena e a situação do acusado (art. 325 do CPP). O delegado pode concedê-la nos crimes com pena máxima de até 4 anos (art. 322). O juiz pode conceder em qualquer caso afiançável.",
      "Não cabe fiança em crimes inafiançáveis, como racismo, ação de grupos armados contra o Estado democrático, crimes hediondos, tráfico, tortura e terrorismo (art. 5º, XLII, XLIII e XLIV, da CF)."
    ],
    crianca: "Em vez de levar a pessoa para a cadeia, o juiz pode mandar ela cumprir regras, como se apresentar todo mês, não sair da cidade ou não chegar perto de alguém. Quando ela paga uma quantia para responder ao processo solta, isso se chama fiança.",
    secoes: [
      {
        titulo: "Quebra da fiança",
        paragrafos: [
          "A fiança é quebrada se o acusado, intimado, não comparece, obstrui o processo ou pratica nova infração dolosa (art. 327 do CPP). Nesse caso, perde metade do valor e o juiz pode decretar outra medida ou a preventiva.",
          "O afiançado não pode se ausentar da comarca por mais de 8 dias sem comunicar o juiz (art. 328)."
        ]
      },
      {
        titulo: "Não confunda com prisão domiciliar",
        paragrafos: [
          "A medida do art. 319 (recolhimento domiciliar noturno) é diferente da prisão domiciliar do art. 318. A primeira é uma cautelar diversa, a segunda substitui a preventiva."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a fiança quebrada",
        tipo: "ilustrativo",
        texto: "Um réu pagou fiança e recebeu intimação para audiência, mas não compareceu. A fiança é quebrada, ele perde metade do valor pago e o juiz pode decretar a preventiva."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais crimes não admitem fiança?",
        modelo: "Racismo, ação de grupos armados contra o Estado democrático, crimes hediondos, tráfico, tortura e terrorismo, conforme a CF (art. 5º, XLII a XLIV)."
      },
      {
        pergunta: "Em que situações a fiança é quebrada?",
        modelo: "Quando o afiançado, intimado, não comparece, obstrui o processo ou pratica nova infração dolosa (art. 327). Ele perde metade do valor e pode sofrer outra medida cautelar."
      }
    ]
  },
  {
    id: "aula-13",
    titulo: "Processo e procedimento: os ritos",
    horas: 2,
    resumo: "Processo é o conjunto de atos. Procedimento é a forma como ele se desenvolve, e varia conforme a pena.",
    simples: [
      "O [[processo]] vai da peça acusatória (denúncia ou queixa) até a decisão final. O [[procedimento]] é o modo como esse processo se desenvolve.",
      "O procedimento se divide em fases: postulatória (oferecimento da peça acusatória), instrutória (produção de provas), decisória (sentença) e recursal. A investigação não faz parte do processo.",
      "Pelo tipo de pena, o procedimento comum é ordinário (pena máxima igual ou superior a 4 anos), sumário (pena máxima inferior a 4 anos) ou sumaríssimo (infrações de menor potencial ofensivo, pela Lei 9.099/1995)."
    ],
    crianca: "Processo é o caminho inteiro de um caso, do começo ao fim. Procedimento é o jeito de andar por esse caminho, que muda conforme a gravidade do que aconteceu.",
    secoes: [
      {
        titulo: "Procedimentos especiais",
        paragrafos: [
          "Lei de Drogas (Lei 11.343/2006), crimes dolosos contra a vida (júri), crimes funcionais afiançáveis, crimes contra a honra, crimes de prefeito (DL 201/1967) e processos nos tribunais (Lei 8.038/1990) têm regras próprias.",
          "A Lei de Organizações Criminosas (Lei 12.850/2013, art. 22) segue o rito ordinário."
        ]
      },
      {
        titulo: "Violência doméstica",
        paragrafos: [
          "Nos crimes praticados com violência doméstica contra a mulher, não se aplica a Lei 9.099/1995, independentemente da pena (art. 41 da Lei 11.340/2006). Logo, não há rito sumaríssimo, transação, suspensão condicional do processo nem TCO."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a ameaça no contexto doméstico",
        tipo: "ilustrativo",
        texto: "Uma ameaça praticada contra a companheira, com pena baixa, poderia ser de menor potencial ofensivo. Mas, por ser violência doméstica contra a mulher, o rito sumaríssimo não se aplica, mesmo com pena baixa."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Qual a diferença entre processo e procedimento?",
        modelo: "Processo é o conjunto de atos, da peça acusatória até o provimento final. Procedimento é a forma como esses atos se desenvolvem, em fases e ritos definidos conforme a pena ou a natureza do crime."
      },
      {
        pergunta: "Como é definido o rito de um crime comum?",
        modelo: "Pela pena máxima: ordinário se igual ou superior a 4 anos, sumário se inferior a 4 anos, e sumaríssimo para infrações de menor potencial ofensivo. Crimes especiais têm rito próprio."
      }
    ]
  },
  {
    id: "aula-14",
    titulo: "Procedimento comum ordinário: recebimento, rejeição e citação",
    horas: 2,
    resumo: "Após a denúncia, o juiz verifica impedimentos, competência e se recebe ou rejeita a peça acusatória. Se recebe, o acusado é citado.",
    simples: [
      "No [[rito-ordinario|procedimento comum ordinário]], a denúncia é oferecida (art. 41 do CPP). Antes de decidir, o juiz precisa verificar se é impedido (art. 252) ou suspeito (art. 254) e se é competente para julgar.",
      "O juiz pode [[rejeicao-denuncia|rejeitar]] a denúncia (art. 395) ou aceitá-la. Se aceitar, o acusado é citado para apresentar resposta à acusação.",
      "A citação é, em regra, pessoal. Se o réu se oculta, pode ser citado por hora certa. Se não é encontrado, é citado por edital (art. 366 do CPP), e o processo fica suspenso."
    ],
    crianca: "Antes de um caso começar de verdade, o juiz confere se o pedido está bem escrito, se ele mesmo pode julgar e se o acusado foi chamado direito. Se algo estiver errado, o caso pode não começar.",
    secoes: [
      {
        titulo: "Rejeitar a denúncia",
        paragrafos: [
          "A decisão que rejeita a denúncia faz coisa julgada apenas formal. O Ministério Público pode recorrer por RESE (art. 581, I, do CPP) ou apresentar nova denúncia.",
          "No Juizado Especial, o recurso cabível é a apelação (art. 82 da Lei 9.099/1995)."
        ]
      },
      {
        titulo: "Prazo da resposta",
        paragrafos: [
          "O acusado citado tem 10 dias para apresentar resposta à acusação (art. 396). A Defensoria Pública tem prazo em dobro, de 20 dias, contado a partir da intimação e não da juntada do mandado cumprido.",
          "Na contagem do prazo, exclui-se o primeiro dia e inclui-se o último. Se o último cair em fim de semana ou feriado, prorroga-se para o próximo dia útil."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a citação por edital",
        tipo: "ilustrativo",
        texto: "O acusado não é encontrado e não atende a citação por hora certa. Ele é citado por edital (art. 366), e o processo e a prescrição ficam suspensos enquanto ele não aparecer ou constituir advogado."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "O que o juiz deve analisar antes de receber ou rejeitar a denúncia?",
        modelo: "Se é impedido (art. 252) ou suspeito (art. 254), se é competente e se a denúncia atende aos requisitos (art. 41) e não há causa de rejeição (art. 395)."
      },
      {
        pergunta: "Qual é o recurso contra a decisão que rejeita a denúncia?",
        modelo: "RESE, previsto no art. 581, I, do CPP. No Juizado Especial, a apelação (art. 82 da Lei 9.099/1995)."
      }
    ]
  },
  {
    id: "aula-15",
    titulo: "Causas de rejeição e pressupostos processuais",
    horas: 2,
    resumo: "A denúncia é rejeitada por inépcia, falta de pressuposto ou condição da ação, ou falta de justa causa.",
    simples: [
      "Pelo art. 395 do CPP, a denúncia é rejeitada quando é inepta (art. 41), quando falta [[pressupostos-processuais|pressuposto processual]] ou condição para a ação penal, ou quando falta [[justa-causa]].",
      "Os [[pressupostos-processuais|pressupostos processuais]] se dividem em de existência (peça acusatória, órgão jurisdicional, capacidade de ser parte) e de validade (juiz competente e imparcial, capacidade processual, ausência de litispendência, coisa julgada e perempção).",
      "As condições da ação são legitimidade, interesse e possibilidade jurídica do pedido. Alguns crimes exigem condição específica, como a representação da vítima (ex.: ameaça, art. 147 do CP) ou a requisição do Ministro da Justiça (ex.: crime cometido no exterior, art. 7º, §3º, do CP)."
    ],
    crianca: "Para o processo começar, é preciso que exista uma acusação escrita direito, um juiz, alguém que possa ser parte e uma razão para acusar. Se faltar um desses pedaços, o caso nem começa.",
    secoes: [
      {
        titulo: "Inépcia e justa causa",
        paragrafos: [
          "Inépcia formal: a denúncia não descreve o fato, o autor ou a classificação do crime (art. 41).",
          "Falta de justa causa: não há indícios de autoria e prova da materialidade. É a chamada inépcia material."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a representação ausente",
        tipo: "ilustrativo",
        texto: "Uma pessoa é denunciada por ameaça, mas a vítima nunca apresentou representação no prazo. Falta condição específica da ação penal, e a denúncia pode ser rejeitada."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são as causas de rejeição da denúncia?",
        modelo: "Inépcia da denúncia (art. 41), falta de pressuposto processual ou condição da ação penal, e falta de justa causa (art. 395 do CPP)."
      },
      {
        pergunta: "Qual a diferença entre condição da ação e condição específica?",
        modelo: "As condições da ação (legitimidade, interesse e possibilidade jurídica do pedido) são gerais. A condição específica é exigida só em alguns crimes, como a representação (ex.: ameaça) ou a requisição do Ministro da Justiça (ex.: crime no exterior)."
      }
    ]
  },
  {
    id: "aula-16",
    titulo: "Resposta à acusação, revelia e absolvição sumária",
    horas: 2,
    resumo: "Após a citação, a defesa deve apresentar resposta. Se não apresentar, o processo segue como revelia.",
    simples: [
      "A [[resposta-acusacao|resposta à acusação]] é obrigatória e deve ser apresentada no prazo de 10 dias (art. 396 do CPP). É nela que a defesa pode arguir preliminares, apresentar documentos, especificar provas e arrolar testemunhas, até 8 no rito ordinário e 5 no sumário.",
      "Se o acusado não apresentar a resposta, o juiz decreta a [[revelia]]. Na revelia o processo segue sem a presença do acusado, mas os fatos não se presumem verdadeiros: continua sendo ônus da acusação provar a autoria e a materialidade.",
      "Depois da resposta, o juiz pode fazer a absolvição sumária (art. 397), quando há atipicidade, excludente de ilicitude, excludente de culpabilidade ou extinção da punibilidade."
    ],
    crianca: "Depois que o acusado é chamado, ele tem um tempo para falar a sua versão. Se ele não fala, o caso continua, mas quem acusa ainda precisa provar tudo. E, se já for claro que não há crime, o juiz pode encerrar logo o caso.",
    secoes: [
      {
        titulo: "Defesa preliminar",
        paragrafos: [
          "Não confunda a resposta à acusação com a defesa preliminar, que vem antes do recebimento e é prevista só em alguns casos, como na Lei de Drogas (art. 55 da Lei 11.343/2006) e em crimes funcionais afiançáveis (art. 514 do CPP)."
        ]
      },
      {
        titulo: "Defensoria Pública",
        paragrafos: [
          "Quando a defesa é feita pela Defensoria, o prazo é em dobro (20 dias), conforme o art. 128, I, da LC 80/1994."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a revelia",
        tipo: "ilustrativo",
        texto: "O réu foi citado e não apresentou resposta no prazo. O juiz decreta a revelia e o processo segue, mas a acusação continua com o ônus de provar a autoria e a materialidade do crime."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "O que acontece se o acusado não apresenta a resposta à acusação?",
        modelo: "O juiz decreta a revelia. O processo segue sem a presença do acusado, mas não há presunção de veracidade dos fatos da inicial: a acusação continua com o ônus de provar autoria e materialidade."
      },
      {
        pergunta: "Quais hipóteses permitem a absolvição sumária?",
        modelo: "Atipicidade, excludente de ilicitude, excludente de culpabilidade e extinção da punibilidade, conforme o art. 397 do CPP."
      }
    ]
  },
  {
    id: "aula-17",
    titulo: "RESE: recurso em sentido estrito",
    horas: 2,
    resumo: "O RESE é o recurso previsto para decisões específicas, como a que rejeita a denúncia.",
    simples: [
      "O [[rese|RESE]] (recurso em sentido estrito) está no art. 581 do CPP. O inciso I cabe contra a decisão que não recebe a denúncia ou a queixa, ou seja, a que rejeita a peça acusatória.",
      "O prazo é de 5 dias (art. 586 do CPP). O juiz pode se retratar (reconsiderar) antes de enviar o recurso ao tribunal (art. 589).",
      "A decisão de rejeição faz coisa julgada apenas formal, por isso a acusação pode apresentar nova denúncia se surgirem novas provas. No Juizado Especial, o recurso é a apelação (art. 82 da Lei 9.099/1995)."
    ],
    crianca: "Se o juiz diz que a acusação não pode começar, quem acusa pode pedir para outra pessoa, de cima, olhar essa decisão. Mas tem um prazo curto para pedir isso, e o juiz pode mudar de ideia antes de mandar o pedido para cima.",
    secoes: [
      {
        titulo: "Outras hipóteses do art. 581",
        paragrafos: [
          "O art. 581 tem outros incisos, como a decisão sobre incompetência, a que concede ou nega liberdade provisória e a que decide sobre prescrição. Vale conferir a lista atual antes da prova."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a rejeição e a nova denúncia",
        tipo: "ilustrativo",
        texto: "O juiz rejeita a denúncia por falta de justa causa. O MP interpõe RESE e o tribunal mantém a rejeição. Depois, surgem novas provas de autoria, e o MP pode apresentar nova denúncia, porque a decisão não faz coisa julgada material."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Qual é o cabimento do RESE para a rejeição da denúncia?",
        modelo: "Art. 581, I, do CPP: cabe contra a decisão que não recebe a denúncia ou queixa. O prazo é de 5 dias (art. 586), e o juiz pode se retratar (art. 589)."
      },
      {
        pergunta: "Por que a rejeição da denúncia não impede nova acusação?",
        modelo: "Porque a decisão faz coisa julgada apenas formal, e não material. Por isso, o MP pode oferecer nova denúncia, principalmente se surgirem novas provas."
      }
    ]
  }
];

AULAS.forEach((aula) => {
  aula.secao = COMPLEMENTAR.includes(aula.id) ? "complementar" : "faculdade";
});
