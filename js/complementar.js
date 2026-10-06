// Aulas complementares (Parte Geral do Código Penal). Não foram dadas pelo professor.
// Marcações: [[chave]] = termo do glossário; **texto** = negrito.

const AULAS_COMPLEMENTAR = [
  {
    id: "aula-01",
    titulo: "Princípio da legalidade",
    horas: 2,
    resumo: "Só é crime o que a lei define antes do fato, e só existe pena que a lei prevê antes.",
    simples: [
      "O [[principio-legalidade]] é a regra mais importante do Direito Penal. Ele diz que ninguém pode ser punido por um fato que não estava definido como crime em lei na época em que foi praticado. É uma garantia do cidadão contra o poder de punir do Estado.",
      "Ele tem dois lados. O primeiro é que não há crime sem lei anterior: a conduta precisa estar descrita em lei antes do fato. O segundo é que não há pena sem prévia cominação legal: a punição também precisa estar prevista antes.",
      "Além disso, a lei penal não pode ser ampliada para prejudicar o réu. Por isso o juiz não pode criar um crime por analogia, comparando o fato com outro que a lei descreve, quando isso piora a situação da pessoa."
    ],
    crianca: "Imagine um jogo em que as regras são escritas antes da partida. Ninguém pode ser punido por uma jogada que não estava nas regras quando foi feita. E a punição também tem que estar escrita nas regras antes do jogo começar.",
    secoes: [
      {
        titulo: "Base constitucional e legal",
        paragrafos: [
          "A Constituição, no art. 5º, XXXIX, diz que não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. O Código Penal repete a regra no art. 1º.",
          "Consequência importante: a lei que prejudica o réu não pode retroagir. Já a lei mais benéfica (lei mais benigna) retroage para beneficiar a pessoa, mesmo que o fato seja anterior, salvo se já houver decisão definitiva (art. 2º do CP)."
        ]
      },
      {
        titulo: "As funções do princípio",
        paragrafos: [
          "Função de garantia: protege o cidadão contra punições arbitrárias, porque o Estado só pune o que estava previsto.",
          "Função de segurança jurídica: a pessoa sabe de antemão o que é proibido e pode orientar sua conduta.",
          "Função de limite ao juiz: o juiz aplica a lei, não cria crimes nem penas por conta própria. Por isso a analogia in malam partem (para prejudicar) é vedada."
        ]
      },
      {
        titulo: "Como cobrar este tema na prova oral",
        paragrafos: [
          "Quando o professor perguntar sobre legalidade, é bom citar as duas partes da regra (crime e pena), a Constituição e o Código Penal, e dar um exemplo concreto de aplicação da lei no tempo."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o produto que virou crime",
        tipo: "ilustrativo",
        texto: "Em 2020, uma pessoa vende um produto que ainda não era crime. Em 2021, uma lei passa a criminalizar essa venda. Pelo princípio da legalidade, ela não pode ser punida pela venda de 2020. Se a lei nova fosse mais branda, ela retroagiria para beneficiá-la."
      }
    ],
    juris: [
      { chave: "hc126292", ligacao: "Decisão sobre execução da pena e presunção de inocência (ilustra a importância de conferir decisões atuais)" }
    ],
    questoes: [
      {
        pergunta: "Explique por que o princípio da legalidade protege o cidadão, usando um exemplo.",
        modelo: "Deve citar que a conduta e a pena precisam estar previstas em lei antes do fato, dar um exemplo concreto (como o do produto que virou crime depois) e relacionar à segurança jurídica e à proteção contra arbitrariedade do Estado."
      },
      {
        pergunta: "Por que o juiz não pode punir alguém por um fato parecido com um crime previsto, quando a lei não o descreve?",
        modelo: "Porque a analogia para prejudicar o réu (in malam partem) é vedada. Não há crime sem lei que o defina, então a conduta não pode ser equiparada a outra por semelhança."
      },
      {
        pergunta: "O que é lei penal mais benigna e como ela se aplica no tempo?",
        modelo: "É a lei posterior que, de algum modo, favorece o réu (reduz a pena, cria uma causa de extinção da punibilidade etc.). Ela retroage para alcançar fatos anteriores, salvo coisa julgada (art. 2º do CP)."
      }
    ]
  },
  {
    id: "aula-02",
    titulo: "Conceito analítico de crime",
    horas: 2,
    resumo: "Crime é fato típico, ilícito e culpável. Cada elemento é uma etapa da análise.",
    simples: [
      "Para saber se alguém cometeu crime, o raciocínio segue três perguntas em ordem. O fato é [[fato-tipico]]? É [[ilicitude|ilícito]]? O autor é [[culpabilidade|culpável]]? Se a resposta for não em qualquer etapa, não há crime.",
      "Essa análise em etapas se chama método analítico. Ela organiza o raciocínio e é o roteiro que a banca costuma esperar: a ordem importa, porque cada etapa depende da anterior.",
      "Existe também o conceito formal (crime é toda conduta que a lei define como infração penal) e o material (crime é a conduta que lesa ou ameaça um bem jurídico relevante). Na prova oral, o conceito analítico é o que mais se cobra."
    ],
    crianca: "Pense em três portas. Para passar pela primeira, o que aconteceu tem que estar escrito no livro de regras. Para passar pela segunda, não pode haver uma justificativa que permita o ato. Para passar pela última, a pessoa precisa ser responsável pelo que fez. Se ficar presa em qualquer porta, não há crime.",
    secoes: [
      {
        titulo: "Os três elementos",
        paragrafos: [
          "Fato típico: é a conduta humana (ação ou omissão), o resultado, o nexo causal entre eles e a tipicidade (a conduta se encaixa na descrição do tipo penal).",
          "Ilicitude: é a contrariedade da conduta típica ao direito. Em regra, toda conduta típica é ilícita, a menos que exista uma causa de justificação, como a legítima defesa.",
          "Culpabilidade: é o juízo de reprovação sobre o autor. Exige imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa."
        ]
      },
      {
        titulo: "Por que a ordem importa",
        paragrafos: [
          "O fato típico é o primeiro filtro. Se a conduta não está descrita na lei, a análise para ali, e não se pergunta sobre ilicitude ou culpabilidade.",
          "Uma conduta típica pode ser lícita quando há excludente de ilicitude (por exemplo, legítima defesa). Nesse caso, não há crime, mesmo com tipicidade.",
          "Uma conduta típica e ilícita pode não ser culpável (por exemplo, quando o autor é inimputável). Também nesse caso não há crime, embora haja fato típico e ilícito."
        ]
      },
      {
        titulo: "Consequências práticas",
        paragrafos: [
          "Para a prova oral, o raciocínio em camadas mostra que o candidato entende a estrutura do crime, e não só decorou definições.",
          "Quando uma excludente é reconhecida, o fato deixa de ser crime, mas pode gerar outros efeitos, como a obrigação de reparar danos civis."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a vítima que reage",
        tipo: "ilustrativo",
        texto: "Alguém dá um soco em outra pessoa que está prestes a agredi-lo com uma faca. O soco se encaixa na descrição de lesão corporal, então há fato típico. Mas a reação é legítima defesa, que exclui a ilicitude. Sem ilicitude, não há crime."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são os três elementos do crime e em que ordem a análise deve ser feita?",
        modelo: "Fato típico, ilicitude e culpabilidade, nessa ordem, porque cada etapa depende da anterior. Se faltar um elemento, não há crime."
      },
      {
        pergunta: "Uma conduta pode ser típica e não ser crime? Dê um exemplo.",
        modelo: "Sim. Se houver excludente de ilicitude (como a legítima defesa) ou falta de culpabilidade (como a inimputabilidade), não há crime, mesmo sendo típica."
      },
      {
        pergunta: "Qual a diferença entre conceito formal e conceito material de crime?",
        modelo: "O formal define crime como a conduta descrita em lei como infração penal. O material define crime como a conduta que lesa ou põe em perigo um bem jurídico relevante. O conceito analítico, usado na prova, descreve as etapas do fato típico, ilícito e culpável."
      }
    ]
  },
  {
    id: "aula-03",
    titulo: "Fato típico: conduta, resultado, nexo e tipicidade",
    horas: 2,
    resumo: "O fato típico é a conduta humana que se encaixa na descrição de um crime.",
    simples: [
      "A [[fato-tipico|conduta]] é uma ação ou omissão humana, voluntária e dirigida a um fim. Sem ação ou omissão humana, não há conduta penal. Por isso animais, coisas e fenômenos da natureza não praticam crime.",
      "O [[nexo-causal]] liga a conduta ao resultado. O art. 13 do CP adota a teoria da equivalência dos antecedentes: é causa tudo o que contribui para o resultado, e o resultado só é atribuído ao autor se, sem a conduta, ele não teria ocorrido. Essa é a fórmula da eliminação hipotética.",
      "A [[tipo-penal|tipicidade]] é a correspondência entre o fato concreto e a descrição abstrata do tipo. Pode ser formal (a conduta se encaixa no texto da lei) ou material (a conduta causou lesão ou perigo relevante ao bem jurídico)."
    ],
    crianca: "Imagine uma lista de coisas que a lei proíbe. Para o fato típico, a pessoa precisa ter feito alguma coisa (ou deixado de fazer o que devia), isso precisa ter causado um efeito, esse efeito precisa estar ligado ao que a pessoa fez, e tudo precisa caber na descrição da lista.",
    secoes: [
      {
        titulo: "Omissão: própria e imprópria",
        paragrafos: [
          "Omissão própria: a lei manda agir e a pessoa não age. É o caso da omissão de socorro (art. 135 do CP), que pune quem deixa de prestar assistência a criança abandonada ou pessoa ferida, sem risco pessoal.",
          "Omissão imprópria (também chamada de comissiva por omissão): a pessoa tinha o dever legal de impedir o resultado e não o fez. O art. 13, §2º, do CP equipara essa omissão à ação. Exemplo: a mãe que deixa de alimentar o filho, que morre de fome.",
          "Quem tem o dever de agir: quem tem obrigação legal de cuidado, proteção ou vigilância; quem assumiu voluntariamente a proteção; e quem, com a conduta anterior, criou o risco do resultado."
        ]
      },
      {
        titulo: "Tipo doloso e culposo",
        paragrafos: [
          "Um mesmo fato típico pode ser doloso (a pessoa quis o resultado) ou culposo (a pessoa não quis, mas agiu com imprudência, negligência ou imperícia). A distinção é feita no elemento subjetivo, tema da aula de dolo e culpa.",
          "Em regra, o crime é doloso. O crime culposo só existe quando a lei prevê expressamente, como o homicídio culposo (art. 121, §3º, do CP)."
        ]
      },
      {
        titulo: "Tipicidade conglobante",
        paragrafos: [
          "Além da tipicidade formal, parte da doutrina exige que a conduta seja conglobantemente típica, isto é, contrária ao conjunto do ordenamento. Isso evita punir condutas que a própria lei autoriza ou incentiva, como o oficial de justiça que cumpre mandado.",
          "Para a prova, basta citar que a tipicidade tem um lado formal (encaixe no texto) e um lado material (lesão relevante), e que a doutrina também fala em tipicidade conglobante."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a omissão da cuidadora",
        tipo: "ilustrativo",
        texto: "Uma cuidadora tem o dever legal de dar remédio a um idoso e deixa de fazê-lo. O idoso morre. Pelo art. 13, §2º, do CP, a omissão é equivalente à ação, porque ela tinha o dever de agir e não agiu."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Explique a diferença entre omissão própria e omissão imprópria.",
        modelo: "A própria é a violação de um comando que manda agir (ex.: omissão de socorro, art. 135). A imprópria ocorre quando há dever de impedir o resultado e a pessoa não o faz, sendo equiparada à ação (art. 13, §2º)."
      },
      {
        pergunta: "Como o art. 13 do CP define quem causou o resultado?",
        modelo: "Pela teoria da equivalência dos antecedentes: causa é toda condição sem a qual o resultado não teria ocorrido. Deve mencionar o teste de eliminação hipotética, em que se retira mentalmente a conduta para ver se o resultado persiste."
      },
      {
        pergunta: "Quais são as hipóteses em que surge o dever de agir para quem se omite?",
        modelo: "Dever legal de cuidado, proteção ou vigilância (ex.: pais, médicos); assunção voluntária da proteção de alguém; e quem, com conduta anterior, criou o risco do resultado (art. 13, §2º)."
      }
    ]
  },
  {
    id: "aula-04",
    titulo: "Dolo e culpa",
    horas: 2,
    resumo: "Dolo é querer o resultado ou assumir o risco. Culpa é causar sem querer, por falta de cuidado.",
    simples: [
      "O [[dolo]] é a regra geral dos crimes. Pelo art. 18, I, do CP, diz-se doloso o crime quando o agente quis o resultado ou assumiu o risco de produzi-lo. O dolo tem dois elementos: saber o que se faz (elemento intelectual) e querer fazê-lo (elemento volitivo).",
      "A [[culpa]] acontece quando a pessoa causa o resultado por imprudência, negligência ou imperícia, sem querer o resultado. Pelo art. 18, II, e parágrafo único, do CP, só responde por culpa quando a lei prevê expressamente.",
      "A diferença entre dolo e culpa não está no tamanho do dano, mas na postura do agente diante do resultado. Quem age com dolo aceita o resultado; quem age com culpa não o quer, mas deixou de observar o cuidado devido."
    ],
    crianca: "Dolo é quando você quer tanto um pedaço do bolo que empurra a pessoa do lado para pegar. Culpa é quando você esbarra na pessoa sem querer, porque estava correndo sem olhar. As duas coisas podem machucar, mas a intenção muda a regra.",
    secoes: [
      {
        titulo: "Espécies de dolo",
        paragrafos: [
          "Dolo direto: a vontade é dirigida ao resultado. A pessoa quer matar e mata.",
          "Dolo eventual: o agente prevê o resultado e aceita o risco de produzi-lo. Exemplo típico: dirigir em alta velocidade em área cheia de pedestres, aceitando que alguém pode morrer.",
          "Dolo genérico e específico: o genérico é a vontade de realizar o tipo; o específico exige uma finalidade especial. No furto, por exemplo, é preciso querer ter a coisa para si (art. 155 do CP)."
        ]
      },
      {
        titulo: "Espécies de culpa",
        paragrafos: [
          "Imprudência: ação perigosa, sem a cautela devida (ex.: dirigir em alta velocidade sem olhar o farol).",
          "Negligência: omissão de cuidado (ex.: deixar uma arma ao alcance de criança).",
          "Imperícia: falta de habilidade técnica para uma arte ou profissão (ex.: médico que erra um procedimento básico por falta de conhecimento).",
          "Culpa consciente: o agente prevê o resultado, mas confia sinceramente que ele não vai ocorrer. Culpa inconsciente: o agente nem prevê o resultado, embora fosse previsível."
        ]
      },
      {
        titulo: "Dolo eventual x culpa consciente",
        paragrafos: [
          "Esta é a distinção mais cobrada. Nos dois casos há previsão do resultado. No dolo eventual, o agente assume o risco e aceita o resultado (ex.: racha em rua movimentada, sem se importar com o que acontecer). Na culpa consciente, o agente prevê, mas acredita sinceramente que tudo vai dar certo.",
          "Na prática, a diferença costuma ser decidida pelas circunstâncias do caso, como velocidade, local, ingestão de álcool e reações do agente antes e depois do fato."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o racha",
        tipo: "ilustrativo",
        texto: "Um motorista participa de um racha em rua movimentada. Ele não queria atropelar ninguém, mas assumiu o risco. Se atingir um pedestre, a discussão é se houve dolo eventual (aceitou o risco) ou culpa consciente (acreditou que não aconteceria). A resposta depende das circunstâncias do caso."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Qual a diferença entre dolo eventual e culpa consciente?",
        modelo: "Nos dois há previsão do resultado. No dolo eventual o agente assume o risco e aceita o resultado. Na culpa consciente ele prevê, mas confia sinceramente que o resultado não ocorrerá."
      },
      {
        pergunta: "Dê um exemplo de imperícia e explique por que ela é culposa.",
        modelo: "Exemplo: profissional que realiza procedimento sem a habilidade técnica exigida. É culposa porque o resultado decorre de falta de habilidade, e não de vontade de causar o dano."
      },
      {
        pergunta: "Quando a lei permite punir uma conduta culposa?",
        modelo: "Apenas quando a lei prevê expressamente o crime culposo (art. 18, parágrafo único, do CP). Como regra, os crimes são dolosos."
      }
    ]
  },
  {
    id: "aula-05",
    titulo: "Ilicitude e excludentes",
    horas: 2,
    resumo: "A conduta típica é justificada quando a lei permite. Há quatro causas de justificação.",
    simples: [
      "A [[ilicitude]] é a contrariedade da conduta típica ao direito. Em regra, toda conduta típica é ilícita. Mas há casos em que a própria lei permite a conduta: são as causas de justificação, também chamadas de excludentes de ilicitude.",
      "O art. 23 do CP lista três delas: [[estado-de-necessidade]], [[legitima-defesa]] e o estrito cumprimento do dever legal ou o exercício regular de direito. Há ainda o consentimento do ofendido em certos casos, que a doutrina também estuda.",
      "O que sustenta cada excludente é a necessidade e a proporcionalidade: o perigo ou a agressão precisam ser reais e atuais, e a reação precisa ser moderada e necessária para afastar o perigo."
    ],
    crianca: "Se alguém tenta te machucar e você se defende na medida certa, você não fez nada errado, mesmo tendo empurrado a pessoa. Mas se você bate sem precisar, aí a sua ação passa a ser errada. A lei olha para a medida da reação.",
    secoes: [
      {
        titulo: "Legítima defesa (art. 25 do CP)",
        paragrafos: [
          "Requisitos da agressão: injusta (contra o direito), atual (acontecendo) ou iminente (prestes a acontecer), e dirigida a direito próprio ou de terceiro.",
          "Requisitos da repulsa: uso moderado dos meios necessários. O meio é necessário quando é o menos gravoso que basta para repelir a agressão, e a moderação significa não ir além do preciso.",
          "Não é preciso fugir antes de se defender, desde que a agressão seja atual ou iminente. A lei não exige que a vítima tente evitar o ataque para depois reagir.",
          "Excesso: se o meio for além do necessário ou a reação for imoderada, há excesso punível. Ele pode ser doloso ou culposo, conforme o art. 23, parágrafo único, do CP."
        ]
      },
      {
        titulo: "Estado de necessidade (art. 24 do CP)",
        paragrafos: [
          "Requisitos: perigo atual, que o agente não causou e não podia evitar de outro modo, e sacrifício de bem de valor igual ou inferior ao bem salvo.",
          "Diferença para a legítima defesa: no estado de necessidade o perigo pode vir de fatos da natureza, de animais ou de outras situações, e o bem sacrificado é de terceiro inocente ou do próprio agente, não de quem ataca."
        ]
      },
      {
        titulo: "Estrito cumprimento do dever legal e exercício regular de direito",
        paragrafos: [
          "Estrito cumprimento do dever legal: quem age para cumprir uma obrigação imposta por lei (ex.: o policial que prende em flagrante, o oficial de justiça que cumpre mandado).",
          "Exercício regular de direito: quem age dentro de um direito previsto na lei (ex.: o médico que faz uma intervenção autorizada, o desportista em luta regulamentada)."
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
        modelo: "Agressão injusta, atual ou iminente, contra direito próprio ou de outrem; repulsa com meio necessário e uso moderado. Deve mencionar o excesso como limite."
      },
      {
        pergunta: "Qual é a diferença entre estado de necessidade e legítima defesa?",
        modelo: "Na legítima defesa a agressão vem de uma pessoa (agressão injusta). No estado de necessidade o perigo pode vir de fatos da natureza ou de outras situações, e o sacrifício é de outro bem, não de quem ataca."
      },
      {
        pergunta: "O que acontece com quem ultrapassa os limites da legítima defesa?",
        modelo: "Há excesso punível (art. 23, parágrafo único, do CP). O excesso pode ser doloso ou culposo, e o agente responde pelo que excedeu, não pela agressão inicial."
      }
    ]
  },
  {
    id: "aula-06",
    titulo: "Culpabilidade",
    horas: 2,
    resumo: "O autor precisa ser capaz, ter potencial consciência da ilicitude e poder agir de outro modo.",
    simples: [
      "A [[culpabilidade]] é o juízo de reprovação que se faz ao autor do fato típico e ilícito. Ela tem três elementos: [[imputabilidade]], potencial consciência da ilicitude e exigibilidade de conduta diversa.",
      "A imputabilidade é a capacidade de entender o caráter ilícito do fato e de agir conforme esse entendimento. Menores de 18 anos são inimputáveis (art. 27 do CP). Doença mental ou desenvolvimento mental incompleto ou retardado também podem afastar a imputabilidade (art. 26).",
      "A potencial consciência da ilicitude significa que a pessoa podia, com esforço normal, saber que o fato era proibido. Se o erro sobre a proibição for inevitável, a pena é afastada (art. 21 do CP)."
    ],
    crianca: "Culpar alguém é dizer: você sabia que estava errado e podia ter feito diferente. Uma criança pequena não tem essa capacidade total, por isso não é responsabilizada do mesmo jeito. E se a pessoa não tinha como saber que era errado, ela também não é culpada.",
    secoes: [
      {
        titulo: "Inimputabilidade e semi-imputabilidade",
        paragrafos: [
          "Inimputabilidade por doença mental (art. 26, caput): se, no momento da ação, a pessoa era totalmente incapaz de entender o caráter ilícito do fato ou de se determinar conforme esse entendimento, ela é isenta de pena.",
          "Semi-imputabilidade (art. 26, parágrafo único): se a capacidade estava só parcialmente comprometida, o juiz pode reduzir a pena de um a dois terços.",
          "Menoridade (art. 27): menores de 18 anos são inimputáveis e respondem pelo ato infracional, conforme o Estatuto da Criança e do Adolescente, e não pelo Código Penal."
        ]
      },
      {
        titulo: "Erro de proibição (art. 21 do CP)",
        paragrafos: [
          "O erro sobre a ilicitude do fato é o erro de proibição. Se for inevitável, isenta de pena. Se for evitável, pode diminuir a pena de um sexto a um terço.",
          "Exemplo: quem acredita, de boa-fé e sem possibilidade de saber, que determinada conduta é permitida pela lei. A regra é que o desconhecimento da lei não é desculpa, mas o erro de proibição analisado aqui é outro caso."
        ]
      },
      {
        titulo: "Coação e obediência hierárquica (art. 22 do CP)",
        paragrafos: [
          "Coação moral irresistível: quem pratica o fato sob ameaça grave que não podia ser resistida exclui a culpabilidade. Só responde o autor da coação.",
          "Obediência hierárquica: quem cumpre ordem não manifestamente ilegal de superior hierárquico também não responde. Se a ordem for manifestamente ilegal, quem obedece continua responsável.",
          "Exigibilidade de conduta diversa: se, nas circunstâncias, não era razoável exigir outro comportamento, a culpabilidade pode ser afastada. Esse ponto é debatido pela doutrina, então é bom citar com cuidado na prova oral."
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
        pergunta: "O que acontece com quem comete um ato aos 17 anos? Explique a base legal.",
        modelo: "É inimputável (art. 27 do CP). Não comete crime, mas ato infracional, sujeito às medidas socioeducativas do ECA. Deve citar a diferença entre crime e ato infracional."
      },
      {
        pergunta: "Qual a diferença entre inimputabilidade e semi-imputabilidade?",
        modelo: "Na inimputabilidade a capacidade é totalmente afastada e a pessoa é isenta de pena (art. 26, caput). Na semi-imputabilidade ela é só parcialmente comprometida, e a pena pode ser reduzida de um a dois terços (art. 26, parágrafo único)."
      }
    ]
  },
  {
    id: "aula-07",
    titulo: "Iter criminis: tentativa, consumação e desistência",
    horas: 2,
    resumo: "Caminho do crime: cogitação, preparação, execução e consumação. Só a execução pode ser tentativa.",
    simples: [
      "O [[iter-criminis]] é o percurso do crime. Ele tem fases: cogitação (pensar), preparação (organizar meios), execução (começar a agir) e consumação (realizar todos os elementos do tipo).",
      "Em regra, a cogitação e a preparação não são punidas. A punição começa na execução, porque só a partir dela o bem jurídico é efetivamente ameaçado.",
      "A [[tentativa]] acontece quando a execução começa, mas o crime não se consuma por circunstâncias alheias à vontade do agente (art. 14, II, do CP). A pena é reduzida de um a dois terços (art. 14, parágrafo único)."
    ],
    crianca: "Pense em fazer um bolo. Primeiro você imagina o bolo (pensar). Depois compra os ingredientes (preparar). Depois começa a bater a massa (começar a fazer). Se o bolo ficar pronto, é consumado. Se o forno apagar no meio, ele não ficou pronto por motivo que não foi sua escolha.",
    secoes: [
      {
        titulo: "Tentativa: elementos",
        paragrafos: [
          "Início da execução: o agente já começou a praticar o núcleo do tipo. Atos de mera preparação não bastam.",
          "Não consumação por circunstâncias alheias à vontade: o crime não se completa por algo que não dependeu do agente, como a chegada da polícia ou a falha da arma.",
          "Pena: a tentativa é punida com a pena do crime consumado, diminuída de um a dois terços, a depender do quanto o agente se aproximou do resultado."
        ]
      },
      {
        titulo: "Desistência voluntária e arrependimento eficaz (art. 15 do CP)",
        paragrafos: [
          "Desistência voluntária: o agente interrompe a execução por vontade própria, quando ainda podia continuar. Responde apenas pelos atos já praticados.",
          "Arrependimento eficaz: o agente já executou tudo o que era necessário, mas impede a produção do resultado. Também responde só pelos atos praticados.",
          "Não se confundem com a tentativa, porque aqui a interrupção depende da vontade do agente."
        ]
      },
      {
        titulo: "Crime impossível (art. 17 do CP)",
        paragrafos: [
          "Quando o meio é absolutamente ineficaz ou o objeto é absolutamente impróprio, o crime não é punido.",
          "Exemplo: tentar matar alguém com uma arma de brinquedo, sabendo que ela não dispara. Esse tema se conecta ao flagrante preparado, na Súmula 145 do STF."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o disparo que falha",
        tipo: "ilustrativo",
        texto: "Alguém atira em outra pessoa, mas a vítima escapa ilesa. O homicídio não se consumou por circunstâncias alheias à vontade do agente. Há tentativa de homicídio, com pena reduzida."
      }
    ],
    juris: [
      { chave: "sum145", ligacao: "Ver a Súmula 145, sobre flagrante preparado e crime impossível" }
    ],
    questoes: [
      {
        pergunta: "Qual a diferença entre tentativa e desistência voluntária?",
        modelo: "Na tentativa, a execução começa e o crime não se consuma por circunstâncias alheias à vontade do agente. Na desistência voluntária, o agente interrompe a execução por vontade própria (art. 15 do CP), respondendo só pelos atos praticados."
      },
      {
        pergunta: "Por que a cogitação não é punida no Direito Penal brasileiro?",
        modelo: "Porque o direito penal pune conduta exteriorizada que lesa ou ameaça bem jurídico. O pensamento isolado não atinge bem jurídico, e punir por ele exigiria controle sobre a mente, o que é vedado."
      },
      {
        pergunta: "Qual a diferença entre crime impossível e tentativa?",
        modelo: "Na tentativa o crime é possível, mas não se consuma por fator alheio ao agente, e há punição reduzida. No crime impossível, o meio é absolutamente ineficaz ou o objeto é absolutamente impróprio, e não há punição (art. 17)."
      }
    ]
  }
];
