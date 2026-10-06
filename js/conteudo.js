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
  }
];
