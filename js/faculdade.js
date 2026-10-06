// Aulas da Faculdade (processo penal), baseadas no que o professor passou.
// Marcações: [[chave]] = termo do glossário; **texto** = negrito.

const AULAS_FACULDADE = [
  {
    id: "aula-08",
    titulo: "Prisão: conceito, espécies e momento",
    horas: 2,
    resumo: "Prisão é a privação da liberdade de locomoção. Ela pode ser penal, cautelar, civil, administrativa ou militar, e cada uma tem regras próprias.",
    simples: [
      "A [[prisao]] é qualquer privação da liberdade de locomoção. A palavra vem do latim prehensio (ato de prender). A regra constitucional é que ninguém é preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente (art. 5º, LXI, da CF).",
      "A primeira divisão é entre prisão penal e prisão extrapenal. A prisão penal é a pena privativa de liberdade, aplicada depois de condenação definitiva. A prisão extrapenal é aquela que não é pena e que acontece fora da condenação criminal.",
      "Dentro da prisão cautelar, que é decretada antes do trânsito em julgado, estão a preventiva, a temporária (Lei 7.960/1989) e a prisão em flagrante. O flagrante é classificado pela doutrina como pré-cautelar, porque sua função é imediata e depende da confirmação posterior pelo juiz."
    ],
    crianca: "Prender alguém é tirar a pessoa do lugar onde ela quer estar. A lei só permite isso em situações bem específicas: quando um juiz manda, quando a pessoa é pega na hora do erro, ou quando uma condenação já foi definida. Fora disso, é proibido.",
    secoes: [
      {
        titulo: "Espécies de prisão",
        paragrafos: [
          "Prisão penal: é a execução da pena privativa de liberdade, depois do trânsito em julgado da sentença condenatória.",
          "Prisão cautelar: é decretada antes da condenação definitiva, para garantir o processo. São espécies a prisão preventiva, a temporária e a prisão em flagrante. Ela não é pena, e por isso não pode ter função de castigo antecipado.",
          "Prisão civil: prevista apenas para o devedor de alimentos, que pode ser presa por até 3 meses (art. 5º, LXVII, da CF e art. 528, §3º, do CPC). A prisão do depositário infiel foi afastada: o Pacto de San José da Costa Rica, incorporado ao Brasil com status supralegal, afastou a regra que a permitia, e o STF editou a Súmula Vinculante 25 nesse sentido.",
          "Prisão administrativa: decretada por autoridade administrativa para forçar alguém a cumprir um dever de direito público. Não é admitida no ordenamento atual, porque não há previsão legal que a autorize para esse fim.",
          "Prisão militar: prevista no art. 5º, LXI, da CF, para crimes militares definidos em lei."
        ]
      },
      {
        titulo: "Quando a prisão pode acontecer: o local e o horário",
        paragrafos: [
          "A casa é asilo inviolável. Ninguém pode entrar nela sem consentimento do morador, salvo em flagrante delito, desastre, para prestar socorro, ou durante o dia por determinação judicial (art. 5º, XI, da CF).",
          "Por isso, o mandado de prisão só pode ser cumprido em casa durante o dia. O dia, para esse fim, costuma ser entendido como o período entre 6h e 18h. À noite, em regra, a entrada depende de flagrante ou de autorização excepcional.",
          "Fora de casa, a prisão pode acontecer a qualquer hora, desde que cumpridas as formalidades legais."
        ]
      },
      {
        titulo: "Detração (art. 42 do CP)",
        paragrafos: [
          "Detração é o desconto, na pena privativa de liberdade, do tempo que a pessoa ficou presa provisoriamente. Vale para prisão no Brasil ou no exterior, e não depende de ser o mesmo processo.",
          "Exemplo: a pessoa ficou 2 anos presa preventivamente e foi condenada a 10 anos. Desconta-se os 2 anos, e ela cumpre mais 8.",
          "A detração só se aplica à pena privativa de liberdade. Se a condenação for só de multa ou de pena restritiva de direitos, o tempo preso não é descontado dessas penas.",
          "Medidas cautelares diversas da prisão: o STJ tem entendido que o recolhimento domiciliar noturno, combinado com a proibição de sair da comarca nos fins de semana, pode ser descontado da pena. A monitoração eletrônica, em regra, não. Esse entendimento pode mudar, por isso confira a jurisprudência atual antes de citar."
        ]
      },
      {
        titulo: "Prisão especial (art. 295 do CPP)",
        paragrafos: [
          "É uma forma de cumprir a prisão cautelar, antes do trânsito em julgado, em local separado da cela comum (sala de Estado-Maior ou equivalente).",
          "Têm direito a ela, entre outros, juízes, membros do Ministério Público, defensores públicos e advogados, além de pessoas com diploma de curso superior, conforme a lei. Após a condenação definitiva, esse direito não se mantém."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a detração na prática",
        tipo: "ilustrativo",
        texto: "Um réu fica preso preventivamente por 2 anos. Depois é condenado a 10 anos de reclusão. O juiz desconta os 2 anos de prisão provisória, e a pena restante a cumprir é de 8 anos. Se a condenação fosse só de multa, nada seria descontado dela."
      },
      {
        titulo: "Caso hipotético: a dívida de alimentos",
        tipo: "ilustrativo",
        texto: "Um pai deixa de pagar pensão alimentícia por meses e o juiz decreta sua prisão civil pelo prazo legal de até 3 meses. Já um comerciante que guardou bens de terceiro e não os devolveu não pode ser preso civilmente como depositário infiel, porque essa prisão foi afastada."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Qual a diferença entre prisão penal e prisão cautelar?",
        modelo: "A penal é a execução de pena privativa de liberdade, após condenação definitiva. A cautelar é decretada antes do trânsito em julgado, para garantir o processo, e não tem caráter de pena. Exemplos de cautelares: preventiva, temporária e flagrante."
      },
      {
        pergunta: "Por que a prisão do depositário infiel não pode mais ser decretada?",
        modelo: "Porque o Pacto de San José da Costa Rica, incorporado ao Brasil com status supralegal, afastou a regra que permitia essa prisão, e o STF editou a Súmula Vinculante 25. Só continua admitida a prisão civil do devedor de alimentos."
      },
      {
        pergunta: "Explique a detração com um exemplo e diga em que tipo de pena ela se aplica.",
        modelo: "Detração é o desconto, na pena privativa de liberdade, do tempo de prisão provisória (art. 42 do CP). Ex.: 2 anos presos e pena de 10 anos resultam em 8 anos a cumprir. Não se aplica a multa nem a pena restritiva de direitos."
      }
    ]
  },
  {
    id: "aula-09",
    titulo: "Direitos do preso e audiência de custódia",
    horas: 2,
    resumo: "Quem é preso tem direitos constitucionais, e a audiência de custódia permite ao juiz verificar a legalidade da prisão.",
    simples: [
      "A Constituição garante ao preso o respeito à integridade física e moral (art. 5º, XLIX). É vedada a exposição do preso a constrangimento, como o chamado \"perp walk\", que pode configurar abuso de autoridade (Lei 13.869/2019, art. 13).",
      "A prisão deve ser comunicada imediatamente ao juiz competente, ao Ministério Público e à família ou a pessoa indicada pelo preso (art. 5º, LXII, da CF). Se essa comunicação não for feita, pode haver crime de abuso de autoridade (Lei 13.869/2019, art. 12).",
      "O preso tem direito ao silêncio e à assistência de advogado (art. 5º, LXIII, da CF). O direito ao silêncio é a aplicação do princípio nemo tenetur se detegere: ninguém é obrigado a produzir prova contra si mesmo."
    ],
    crianca: "Quem é pego por um problema tem o direito de ficar em silêncio, de ter um advogado e de ser tratado com respeito. E alguém precisa olhar, em pouco tempo, se a prisão foi feita do jeito certo.",
    secoes: [
      {
        titulo: "Uso de algemas",
        paragrafos: [
          "O uso de algemas é exceção. A Súmula Vinculante 11 do STF estabelece que só é lícito em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, com justificativa por escrito.",
          "Se o uso for irregular, a prisão ou o ato processual pode ser anulado, e o agente responde disciplinar, civil e penalmente, sem prejuízo da responsabilidade civil do Estado."
        ]
      },
      {
        titulo: "Audiência de custódia",
        paragrafos: [
          "Prevista na Resolução 213/2015 do CNJ e no art. 310 do CPP. O preso deve ser apresentado ao juiz em até 24 horas da comunicação da prisão. Preferencialmente, a audiência é feita por videoconferência.",
          "Participam o juiz, o Ministério Público, a defesa (advogado ou defensor público) e o preso. O juiz verifica a legalidade da prisão, a necessidade de mantê-la e se houve maus-tratos ou tortura. Ele não analisa o mérito da acusação, ou seja, não decide se a pessoa é culpada.",
          "Após a audiência, o juiz pode relaxar a prisão ilegal, conceder liberdade provisória com ou sem fiança, ou aplicar uma medida cautelar diversa da prisão.",
          "Entendimento do STJ: ultrapassar o prazo de 24 horas não torna a prisão ilegal, se o juiz justificar o atraso."
        ]
      },
      {
        titulo: "Comunicação da prisão",
        paragrafos: [
          "O juiz deve ser comunicado de qualquer tipo de prisão, inclusive as que não foram decretadas por ele. A falta dessa comunicação pode configurar abuso de autoridade (Lei 13.869/2019, art. 12).",
          "A família, ou pessoa indicada pelo preso, também deve ser informada. Esse direito evita prisões sem registro e ajuda a proteger a integridade do preso."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a algema sem justificativa",
        tipo: "ilustrativo",
        texto: "Uma pessoa presa sem resistência e sem risco de fuga é algemada e exibida em frente à imprensa. Pela Súmula Vinculante 11, o uso de algemas não estava justificado, e a exposição pode configurar abuso de autoridade."
      }
    ],
    juris: [
      { chave: "sv11", ligacao: "Texto integral da Súmula Vinculante 11, sobre o uso de algemas" }
    ],
    questoes: [
      {
        pergunta: "O que é a audiência de custódia e qual o seu objetivo?",
        modelo: "É a apresentação do preso ao juiz em até 24 horas da prisão (CPP, art. 310). O objetivo é verificar a legalidade e a necessidade da prisão e as condições de tratamento do preso. O juiz não analisa o mérito da acusação."
      },
      {
        pergunta: "Quando o uso de algemas é permitido?",
        modelo: "Só em caso de resistência, de fundado receio de fuga ou de perigo à integridade física própria ou alheia, com justificativa por escrito (Súmula Vinculante 11). Fora disso, o uso é irregular e pode gerar nulidade e responsabilização."
      },
      {
        pergunta: "Qual é o direito ao silêncio e onde ele está previsto?",
        modelo: "Está no art. 5º, LXIII, da CF e decorre do princípio nemo tenetur se detegere: ninguém é obrigado a produzir prova contra si mesmo."
      }
    ]
  },
  {
    id: "aula-10",
    titulo: "Prisão em flagrante",
    horas: 2,
    resumo: "O flagrante é a prisão feita no momento do crime ou logo depois. Nem todo flagrante é válido.",
    simples: [
      "A prisão em flagrante está prevista no art. 5º, LXI, da CF e nos arts. 301 a 310 do CPP. Qualquer pessoa pode prender quem está em flagrante, e as autoridades policiais têm o dever de fazê-lo (art. 301 do CPP).",
      "O art. 302 do CPP define as situações de flagrante: quem está cometendo a infração (inciso I); quem acaba de cometê-la (inciso II); quem é perseguido logo após, em situação de quase flagrante (inciso III); e quem é encontrado logo depois com objetos que façam presumir a autoria (inciso IV).",
      "Atenção: nas anotações da aula, o quase flagrante aparece no inciso II. No texto do CPP, o quase flagrante é o inciso III, e o inciso II é o caso de quem acaba de cometer. Vale conferir a redação atual antes da prova."
    ],
    crianca: "Flagrante é quando alguém pega a pessoa com a mão na massa, ou logo depois. Mas a polícia não pode criar a situação para pegar alguém, nem usar um flagrante que ela mesma fabricou.",
    secoes: [
      {
        titulo: "Etapas do flagrante",
        paragrafos: [
          "Captura: a pessoa é detida no local ou na perseguição.",
          "Condução coercitiva: a pessoa é levada à autoridade policial.",
          "Lavratura do auto de prisão em flagrante (APF): a autoridade registra o fato, ouve o preso, as testemunhas e o condutor.",
          "Recolhimento ao cárcere ou encaminhamento ao juiz, que deve receber o auto em até 24 horas para a audiência de custódia."
        ]
      },
      {
        titulo: "Tipos especiais de flagrante",
        paragrafos: [
          "Flagrante preparado, provocado ou crime de ensaio: a polícia induz a pessoa ao crime e, por causa das precauções tomadas, o crime não se consuma. Não há crime, porque o crime é impossível (Súmula 145 do STF).",
          "Flagrante esperado: a polícia apenas aguarda a prática espontânea do crime, sem induzir ninguém. É legal, e a doutrina costuma chamar de flagrante legal ou de campana.",
          "Flagrante prorrogado, retardado ou diferido (ação controlada ou entrega vigiada): a polícia espera o melhor momento para agir, sem atrapalhar a investigação. É legal quando há previsão legal, como na Lei de Organizações Criminosas (Lei 12.850/2013, art. 8º) e na Lei de Drogas (Lei 11.343/2006, art. 53, II).",
          "Flagrante forjado, fabricado ou maquinado: a polícia cria provas para tornar legal uma prisão que não seria. É ilegal e leva ao relaxamento da prisão."
        ]
      },
      {
        titulo: "Quando o flagrante é relaxado pelo juiz",
        paragrafos: [
          "Quando o fato é atípico (não é crime).",
          "Quando não foram observadas as formalidades legais e constitucionais.",
          "Quando não há situação de flagrante.",
          "Quando falta representação em crime de ação penal pública condicionada à representação, ou requerimento em crime de ação penal privada.",
          "Quando não há laudo provisório para a constatação de droga.",
          "Quando o auto não é encaminhado à Defensoria Pública e o investigado não tem advogado.",
          "Quando não há os requisitos da prisão preventiva, e a prisão não pode ser mantida como preventiva."
        ]
      },
      {
        titulo: "Flagrante em infrações de menor potencial ofensivo",
        paragrafos: [
          "Nessas infrações, em regra, não se lavra auto de prisão em flagrante. Lavra-se o termo circunstanciado de ocorrência (TCO), se o autor se comprometer a comparecer ao juizado (Lei 9.099/1995, art. 69, parágrafo único).",
          "Infração de menor potencial ofensivo é a de pena máxima não superior a 2 anos.",
          "Crime culposo de trânsito em que o autor presta socorro à vítima: não se lavra flagrante nem se exige fiança (art. 301 do Código de Trânsito Brasileiro)."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o tráfico preparado",
        tipo: "ilustrativo",
        texto: "A polícia combina a venda de droga com um suspeito e prepara toda a operação para prendê-lo, mas, por causa da vigilância, a transação nunca se completa. Pela Súmula 145 do STF, não há crime, porque a própria polícia tornou impossível a consumação."
      },
      {
        titulo: "Caso hipotético: o flagrante forjado",
        tipo: "ilustrativo",
        texto: "Um policial coloca uma arma no carro de um motorista parado sem motivo e depois o prende em flagrante por porte ilegal. Esse flagrante é forjado. A prisão deve ser relaxada, porque a prova foi fabricada e o flagrante não existiu."
      }
    ],
    juris: [
      { chave: "sum145", ligacao: "Texto da Súmula 145, sobre flagrante preparado" }
    ],
    questoes: [
      {
        pergunta: "Qual a diferença entre flagrante preparado e flagrante esperado?",
        modelo: "No preparado a polícia induz o agente ao crime, e por isso o crime é impossível (Súmula 145). No esperado a polícia apenas aguarda a prática espontânea, sem induzir, e o flagrante é válido."
      },
      {
        pergunta: "Quais são as hipóteses de flagrante previstas no art. 302 do CPP?",
        modelo: "Está cometendo a infração (I); acaba de cometê-la (II); é perseguido logo após, em quase flagrante (III); é encontrado logo depois com objetos que façam presumir a autoria (IV)."
      },
      {
        pergunta: "Em quais situações não se lavra auto de prisão em flagrante?",
        modelo: "Em infrações de menor potencial ofensivo, em que se lavra TCO, e em crime culposo de trânsito em que o autor presta socorro (art. 301 do CTB), sem flagrante e sem exigência de fiança."
      }
    ]
  },
  {
    id: "aula-11",
    titulo: "Prisão preventiva e prisão domiciliar",
    horas: 2,
    resumo: "A preventiva é cautelar decretada pelo juiz, com requisitos claros. A domiciliar pode substituí-la.",
    simples: [
      "A [[prisao-preventiva]] exige, primeiro, prova da existência do crime e indícios suficientes de autoria (art. 312 do CPP). Depois, exige um fundamento: garantir a ordem pública ou a ordem econômica, a conveniência da instrução criminal ou a aplicação da lei penal.",
      "Ela só cabe nas hipóteses do art. 313 do CPP: crime doloso com pena máxima superior a 4 anos; reincidência em crime doloso; crime envolvendo violência doméstica e familiar, para garantir medidas protetivas; ou dúvida sobre a identidade civil da pessoa.",
      "A preventiva não é cabível se o agente agiu amparada por excludente de ilicitude (art. 314). A decisão precisa ser fundamentada (art. 315) e reavaliada a cada 90 dias (art. 316, parágrafo único)."
    ],
    crianca: "A prisão preventiva é como segurar uma pessoa antes do julgamento, porque há um motivo sério e concreto. Não basta achar que ela é perigosa: a lei exige um motivo claro e a prisão precisa ser realmente necessária.",
    secoes: [
      {
        titulo: "Os fundamentos da preventiva (art. 312)",
        paragrafos: [
          "Garantia da ordem pública: evitar que a pessoa continue cometendo crimes ou que a sociedade fique em situação de grave instabilidade causada pelo crime. Nas anotações, o risco de reiteração delitiva é avaliado com um juízo de periculosidade: quantidade e variedade de drogas, pertencimento a organização criminosa, uso reiterado de violência ou grave ameaça, premeditação e prática de outro crime durante inquérito ou ação penal.",
          "Garantia da ordem econômica: evitar que a pessoa, em liberdade, cause dano à economia, como em crimes do sistema financeiro.",
          "Conveniência da instrução criminal: evitar que a pessoa destrua provas, ameace testemunhas ou atrapalhe a investigação.",
          "Aplicação da lei penal: garantir que a pessoa não fuja e possa ser julgada e cumprir eventual pena."
        ]
      },
      {
        titulo: "Hipóteses de cabimento e decretação (arts. 311 a 316)",
        paragrafos: [
          "Hipóteses (art. 313): pena máxima superior a 4 anos; reincidência em crime doloso; violência doméstica ou familiar contra mulher, idoso, criança, adolescente ou pessoa com deficiência, para garantir medidas protetivas; pertencimento a organização criminosa ou milícia privada; crimes contra a dignidade sexual de criança e adolescente; e dúvida sobre a identidade civil.",
          "Decretação (art. 311): pode ocorrer em qualquer fase da investigação policial ou do processo. Na fase de investigação, o juiz não pode decretá-la de ofício; é preciso representação da autoridade policial ou requerimento do Ministério Público.",
          "Não se decreta preventiva como antecipação de pena, nem a pedido de quem só quer afastar alguém sem fundamento concreto. A gravidade do crime, em abstrato, não basta.",
          "Revisão (art. 316, parágrafo único): a necessidade da prisão deve ser reavaliada a cada 90 dias. Para o STJ, o simples fato de não reavaliar no prazo não gera soltura automática; o juiz deve ser provocado e decidir."
        ]
      },
      {
        titulo: "Prisão domiciliar (art. 318)",
        paragrafos: [
          "Não é uma nova espécie de prisão cautelar. Ela substitui a preventiva quando a pessoa se enquadra nas hipóteses do art. 318, como maior de 80 anos, extremamente debilitada por doença grave, gestante, mulher com filho de até 12 anos incompletos, ou homem que seja o único responsável por filho nessa idade.",
          "Nas anotações, a hipótese de gestante aparece com a ressalva de que o crime não pode ter sido cometido com violência ou grave ameaça à pessoa nem contra filho ou dependente. Também há menção ao responsável por criança menor de 6 anos ou com deficiência. As hipóteses mudaram com leis recentes, então confira a redação atual do art. 318 antes de citar.",
          "Diferença para a medida do art. 319: a domiciliar substitui a preventiva; o recolhimento domiciliar noturno é uma medida cautelar diversa, e as duas não se confundem."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a gravidade em abstrato",
        tipo: "ilustrativo",
        texto: "Alguém é preso em flagrante por um crime grave, mas não há risco concreto de fuga, de reiteração nem de atrapalhar a investigação. O juiz não pode converter o flagrante em preventiva apenas pela gravidade em abstrato do crime."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais são os requisitos da prisão preventiva?",
        modelo: "Prova da existência do crime e indícios suficientes de autoria (art. 312); um dos fundamentos (ordem pública ou econômica, instrução criminal ou aplicação da lei penal); e uma das hipóteses do art. 313."
      },
      {
        pergunta: "Qual a relação entre prisão domiciliar e prisão preventiva?",
        modelo: "A domiciliar substitui a preventiva quando o caso se enquadra no art. 318 (ex.: idoso debilitado, gestante, responsável por criança). Não é uma nova espécie de prisão cautelar."
      },
      {
        pergunta: "O que acontece se a preventiva não for reavaliada em 90 dias?",
        modelo: "Não há soltura automática, segundo o entendimento do STJ. A necessidade deve ser reavaliada (art. 316, parágrafo único), e o juiz deve ser provocado a decidir."
      }
    ]
  },
  {
    id: "aula-12",
    titulo: "Medidas cautelares diversas e fiança",
    horas: 2,
    resumo: "O juiz pode impor medidas menos graves que a prisão. A fiança é uma delas, com regras próprias.",
    simples: [
      "As [[medida-cautelar|medidas cautelares diversas da prisão]] estão no art. 319 do CPP. São alternativas à prisão, aplicadas quando há necessidade de cautela, mas a prisão não é justificada. Entre elas: comparecimento periódico em juízo, proibição de frequentar certos lugares, proibição de se ausentar da comarca, proibição de manter contato com alguém, recolhimento domiciliar noturno, suspensão de função pública, internação provisória, monitoração eletrônica, suspensão de atividade econômica e a própria fiança.",
      "A [[fianca]] é uma garantia em dinheiro que permite responder ao processo em liberdade. O valor depende da pena e da situação econômica do acusado (arts. 321 a 350 do CPP).",
      "O delegado pode conceder fiança nos crimes com pena máxima não superior a 4 anos (art. 322). O juiz pode conceder em qualquer crime afiançável, a qualquer tempo, até o trânsito em julgado."
    ],
    crianca: "Em vez de levar a pessoa para a cadeia, o juiz pode mandar ela cumprir regras, como se apresentar todo mês, não sair da cidade ou não chegar perto de alguém. Quando ela paga uma quantia para responder ao processo solta, isso se chama fiança.",
    secoes: [
      {
        titulo: "As medidas do art. 319",
        paragrafos: [
          "Comparecimento periódico em juízo, para informar e justificar atividades.",
          "Proibição de frequentar determinados lugares, para evitar novos crimes ou o contato com a vítima.",
          "Proibição de ausentar-se da comarca, sem autorização do juiz.",
          "Proibição de manter contato com pessoa determinada, como a vítima ou testemunhas.",
          "Recolhimento domiciliar noturno e nos dias de folga, quando a pessoa tem residência e trabalho fixos.",
          "Suspensão do exercício de função pública, quando o crime tem relação com o cargo.",
          "Internação provisória, para inimputáveis e semi-imputáveis em crimes com violência ou grave ameaça, quando os peritos concluírem pela inimputabilidade ou semi-imputabilidade.",
          "Monitoração eletrônica, com tornozeleira ou equivalente.",
          "Suspensão de atividade econômica ou de atividade de natureza financeira.",
          "A entrega do passaporte, quando há proibição de sair do país, deve ocorrer em até 24 horas (art. 320).",
          "Atenção: a internação do art. 319 não se confunde com a prisão domiciliar do art. 318. A internação é medida cautelar diversa e vale para inimputável ou semi-imputável. A domiciliar substitui a preventiva para pessoas de outras situações."
        ]
      },
      {
        titulo: "A fiança: valores e quem pode conceder",
        paragrafos: [
          "Quem pode conceder: o delegado, nos crimes com pena máxima não superior a 4 anos; o juiz, em qualquer crime afiançável. A concessão pelo juiz pode ocorrer independentemente de ouvir o Ministério Público.",
          "Valor (art. 325 do CPP): varia conforme a pena. Para pena máxima de até 4 anos, de 1 a 100 salários mínimos; acima de 4 anos, de 10 a 200 salários mínimos. O juiz pode reduzir o valor até dois terços, ou aumentá-lo até mil vezes, conforme a situação econômica do acusado. Ele pode também dispensar a fiança, quando o acusado é hipossuficiente.",
          "Para fixar o valor, considera-se a natureza da infração, a vida pregressa do acusado, as provas da responsabilidade, o custo provável do processo e a fortuna do réu.",
          "A fiança é definitiva: não é provisória. Pode ser concedida até o trânsito em julgado da sentença."
        ]
      },
      {
        titulo: "Crimes inafiançáveis",
        paragrafos: [
          "A Constituição veda fiança em crimes de racismo (art. 5º, XLII), na ação de grupos armados contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV), e nos crimes hediondos, tráfico de drogas, tortura e terrorismo (art. 5º, XLIII).",
          "Nas anotações, a sigla lembrada é RAHTTT: Racismo, Armados, Hediondos, Tortura, Tráfico e Terrorismo.",
          "Também não se concede fiança quando estiverem presentes os requisitos da preventiva (art. 324 do CPP)."
        ]
      },
      {
        titulo: "Obrigações e quebra da fiança (arts. 327 e 328)",
        paragrafos: [
          "O afiançado deve comparecer sempre que for intimado e não pode se ausentar da comarca por mais de 8 dias sem comunicar o juiz (art. 328).",
          "A fiança é quebrada se o afiançado, intimado, não comparece; se obstrui o processo; ou se pratica nova infração dolosa. Nesse caso, perde metade do valor pago, e o juiz pode decretar outra medida cautelar ou a preventiva.",
          "Se a fiança for declarada inidônea, ela é cassada quando se constata que não era cabível no caso."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a fiança quebrada",
        tipo: "ilustrativo",
        texto: "Um réu pagou fiança e foi intimado para a audiência, mas não compareceu. A fiança é quebrada, ele perde metade do valor pago e o juiz pode decretar a preventiva, se os requisitos estiverem presentes."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quais crimes não admitem fiança segundo a Constituição?",
        modelo: "Racismo, ação de grupos armados contra a ordem constitucional e o Estado Democrático, crimes hediondos, tráfico de drogas, tortura e terrorismo (art. 5º, XLII a XLIV, da CF)."
      },
      {
        pergunta: "Em que situações a fiança é quebrada?",
        modelo: "Quando o afiançado, intimado, não comparece, obstrui o processo ou pratica nova infração dolosa (art. 327). Ele perde metade do valor e pode sofrer outra medida cautelar ou a preventiva."
      },
      {
        pergunta: "Qual a diferença entre a internação do art. 319 e a prisão domiciliar do art. 318?",
        modelo: "A internação é medida cautelar diversa, aplicada a inimputáveis e semi-imputáveis em crimes com violência ou grave ameaça. A domiciliar substitui a preventiva para pessoas em situações específicas, como idosos, doentes graves e gestantes."
      }
    ]
  },
  {
    id: "aula-13",
    titulo: "Processo e procedimento: os ritos",
    horas: 2,
    resumo: "Processo é o conjunto de atos. Procedimento é a forma como ele se desenvolve, e varia conforme a pena e o tipo de crime.",
    simples: [
      "O [[processo]] é o conjunto de atos processuais que vai desde o oferecimento da peça acusatória (denúncia, nos crimes de ação pública, ou queixa, nos crimes de ação privada) até o provimento final, que é a sentença. O [[procedimento]] é o modo como esse processo se desenvolve.",
      "O procedimento se divide em quatro fases: postulatória (oferecimento da peça acusatória e a citação), instrutória (produção das provas), decisória (sentença) e recursal (recursos). A investigação policial não faz parte do processo: é uma fase anterior, de apuração.",
      "Pela pena máxima, o procedimento comum é ordinário (pena máxima igual ou superior a 4 anos), sumário (pena máxima inferior a 4 anos) ou sumaríssimo (infrações de menor potencial ofensivo, pela Lei 9.099/1995). Quando não há rito especial, o ordinário é aplicado de forma subsidiária."
    ],
    crianca: "Processo é o caminho inteiro de um caso, do começo ao fim. Procedimento é o jeito de andar por esse caminho, que muda conforme a gravidade do que aconteceu.",
    secoes: [
      {
        titulo: "Procedimento comum",
        paragrafos: [
          "Ordinário: para crimes com pena máxima igual ou superior a 4 anos. É o rito mais completo, com resposta à acusação e até 8 testemunhas por parte.",
          "Sumário: para crimes com pena máxima inferior a 4 anos e que não sejam de menor potencial ofensivo. Tem rito mais simples, com até 5 testemunhas.",
          "Sumaríssimo: para infrações de menor potencial ofensivo (pena máxima não superior a 2 anos), com audiência preliminar, possibilidade de transação penal e termo circunstanciado (Lei 9.099/1995, arts. 74 e 76)."
        ]
      },
      {
        titulo: "Procedimentos especiais",
        paragrafos: [
          "Lei de Drogas (Lei 11.343/2006): tem fase de defesa preliminar antes do recebimento da denúncia.",
          "Crimes dolosos contra a vida: seguem o rito do júri, em duas fases (judicium accusationis e judicium causae), com julgamento pelo Tribunal do Júri.",
          "Crimes funcionais afiançáveis praticados por funcionário público: têm defesa preliminar antes do recebimento (arts. 513 a 518 do CPP, conforme as anotações; confira a numeração atual).",
          "Processo nos tribunais (Lei 8.038/1990): aplicável a processos de competência originária dos tribunais superiores.",
          "Crimes de prefeito (Decreto-Lei 201/1967): processados pelo juiz de primeiro grau, com regras próprias.",
          "Crimes contra a honra: têm rito próprio, previsto nos arts. 519 a 523 do CPP, conforme as anotações.",
          "Organizações criminosas (Lei 12.850/2013, art. 22): seguem o rito ordinário."
        ]
      },
      {
        titulo: "Violência doméstica: o que não se aplica",
        paragrafos: [
          "Nos crimes praticados com violência doméstica e familiar contra a mulher, não se aplica a Lei 9.099/1995, independentemente da pena (art. 41 da Lei 11.340/2006).",
          "Na prática, isso significa que não há rito sumaríssimo, nem transação penal (art. 76), nem suspensão condicional do processo (art. 89), nem termo circunstanciado: o caso segue o procedimento comum, e mesmo com pena baixa a prisão preventiva pode ser cabível, dentro dos requisitos.",
          "Nas anotações, também aparece a mesma regra para crimes contra criança, adolescente e idoso, citando o ECA e o Estatuto do Idoso. Confira os artigos específicos de cada lei antes de citar na prova."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a ameaça no contexto doméstico",
        tipo: "ilustrativo",
        texto: "Uma ameaça praticada contra a companheira, com pena baixa, poderia ser de menor potencial ofensivo. Mas, por ser violência doméstica contra a mulher, o rito sumaríssimo não se aplica, não há transação penal e não se lavra TCO."
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
        modelo: "Pela pena máxima: ordinário, se igual ou superior a 4 anos; sumário, se inferior a 4 anos; sumaríssimo, para infrações de menor potencial ofensivo. Crimes especiais têm rito próprio."
      },
      {
        pergunta: "Por que a Lei 9.099/1995 não se aplica à violência doméstica contra a mulher?",
        modelo: "Porque o art. 41 da Lei 11.340/2006 afasta expressamente a aplicação da Lei 9.099/1995, independentemente da pena. Assim, não há transação penal, suspensão condicional do processo nem TCO."
      }
    ]
  },
  {
    id: "aula-14",
    titulo: "Procedimento comum ordinário: recebimento, rejeição e citação",
    horas: 2,
    resumo: "Após a denúncia, o juiz verifica impedimentos, competência e se recebe ou rejeita a peça acusatória. Se recebe, o acusado é citado.",
    simples: [
      "No [[rito-ordinario|procedimento comum ordinário]], a denúncia é oferecida (art. 41 do CPP). Antes de decidir, o juiz precisa verificar se é impedido (art. 252) ou suspeito (art. 254) para julgar e se é competente. Essas verificações vêm antes do recebimento ou da rejeição.",
      "O juiz pode [[rejeicao-denuncia|rejeitar a denúncia]] (art. 395) ou recebê-la. Se recebe, ordena a citação do acusado para apresentar resposta à acusação, em 10 dias (art. 396).",
      "A citação é, em regra, pessoal. Se o réu se oculta para não ser citado, aplica-se a citação por hora certa. Se não é encontrado, é citado por edital (art. 366 do CPP), e o processo e a prescrição ficam suspensos."
    ],
    crianca: "Antes de um caso começar de verdade, o juiz confere se o pedido está bem escrito, se ele mesmo pode julgar e se o acusado foi chamado direito. Se algo estiver errado, o caso pode nem começar.",
    secoes: [
      {
        titulo: "O passo a passo do procedimento ordinário",
        paragrafos: [
          "1. Oferecimento da denúncia pelo Ministério Público, com a descrição do fato, a qualificação do acusado e a classificação do crime (art. 41).",
          "2. Análise do juiz: impedimento (art. 252), suspeição (art. 254) e competência.",
          "3. Decisão: recebe ou rejeita a denúncia (art. 395). A rejeição é possível por inépcia, falta de pressuposto processual ou condição da ação, ou falta de justa causa.",
          "4. Se recebida: citação do acusado. A citação é pessoal; se o réu se oculta, por hora certa; se não é encontrado, por edital.",
          "5. Resposta à acusação, em 10 dias (art. 396), que é tema da aula seguinte."
        ]
      },
      {
        titulo: "Rejeitar a denúncia: efeitos",
        paragrafos: [
          "A decisão que rejeita a denúncia faz coisa julgada apenas formal. Isso significa que a acusação pode ser reapresentada, se surgirem novas provas ou se o vício for sanado.",
          "O Ministério Público pode recorrer por RESE, previsto no art. 581, I, do CPP. Nas anotações, o caso é lembrado como: decisão que rejeita a peça acusatória só faz coisa julgada formal; o MP pode recorrer ou propor a denúncia novamente.",
          "No Juizado Especial, o recurso cabível é a apelação (art. 82 da Lei 9.099/1995)."
        ]
      },
      {
        titulo: "Citação: pessoal, por hora certa e por edital",
        paragrafos: [
          "Citação pessoal: entrega do mandado ao próprio acusado. É a regra.",
          "Citação por hora certa (art. 362 do CPP): quando o oficial suspeita que o réu se oculta, ele marca a hora e retorna para citá-lo. Se o réu não comparece, a citação se completa.",
          "Citação por edital (art. 366): quando o acusado não é encontrado. Se ele não comparece nem constitui advogado, o processo e a prescrição ficam suspensos, e a produção de provas urgentes pode ser feita."
        ]
      },
      {
        titulo: "Prazos: como são contados",
        paragrafos: [
          "O prazo começa a correr da data da intimação ou citação, e não da data da juntada do mandado cumprido.",
          "Exclui-se o primeiro dia e inclui-se o último. Se o último dia cair em sábado, domingo ou feriado, o prazo é prorrogado para o próximo dia útil.",
          "A Defensoria Pública tem prazo em dobro (art. 128, I, da LC 80/1994). Por isso, nas anotações, o prazo de resposta da Defensoria aparece como 20 dias, o dobro dos 10 dias do procedimento."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: a citação por edital",
        tipo: "ilustrativo",
        texto: "O acusado não é encontrado e não atende a citação por hora certa. Ele é citado por edital (art. 366), e o processo e a prescrição ficam suspensos enquanto ele não aparecer ou não constituir advogado."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "O que o juiz deve analisar antes de receber ou rejeitar a denúncia?",
        modelo: "Se é impedido (art. 252) ou suspeito (art. 254), se é competente e se a denúncia atende aos requisitos do art. 41, sem causa de rejeição do art. 395."
      },
      {
        pergunta: "Qual é o recurso contra a decisão que rejeita a denúncia?",
        modelo: "RESE, previsto no art. 581, I, do CPP. No Juizado Especial, a apelação (art. 82 da Lei 9.099/1995). A decisão faz coisa julgada apenas formal."
      },
      {
        pergunta: "Como se conta o prazo para o acusado responder à acusação?",
        modelo: "Começa da intimação ou citação; exclui-se o primeiro dia e inclui-se o último; se cair em fim de semana ou feriado, prorroga-se para o próximo dia útil. O prazo comum é de 10 dias (art. 396). A Defensoria tem prazo em dobro."
      }
    ]
  },
  {
    id: "aula-15",
    titulo: "Causas de rejeição, pressupostos processuais e ação penal",
    horas: 2,
    resumo: "A denúncia é rejeitada por inépcia, falta de pressuposto ou condição da ação, ou falta de justa causa.",
    simples: [
      "Pelo art. 395 do CPP, a denúncia é rejeitada quando é inepta (art. 41), quando falta [[pressupostos-processuais|pressuposto processual]] ou condição para a ação penal, ou quando falta [[justa-causa]].",
      "Os pressupostos processuais são requisitos para o processo existir e ser válido. Divide-se em pressupostos de existência (peça acusatória, órgão jurisdicional e capacidade de ser parte) e de validade (juiz competente e imparcial, capacidade processual, ausência de litispendência, coisa julgada e perempção).",
      "As condições da ação são legitimidade, interesse e possibilidade jurídica do pedido. Alguns crimes exigem condição específica, como a representação da vítima (ex.: ameaça, art. 147 do CP) ou a requisição do Ministro da Justiça (ex.: crime cometido no exterior, art. 7º, §3º, do CP)."
    ],
    crianca: "Para o processo começar, é preciso que exista uma acusação escrita direito, um juiz, alguém que possa ser parte e uma razão para acusar. Se faltar um desses pedaços, o caso nem começa.",
    secoes: [
      {
        titulo: "Inépcia e falta de justa causa",
        paragrafos: [
          "Inépcia formal: a denúncia não descreve o fato, o autor, as circunstâncias ou não classifica o crime (art. 41).",
          "Falta de justa causa (inépcia material): não há indícios de autoria nem prova da materialidade do crime. Sem isso, a acusação não tem base mínima para ser processada.",
          "Falta de pressuposto ou condição: o processo ou a ação não podem prosseguir, por falta de um requisito legal."
        ]
      },
      {
        titulo: "Pressupostos processuais",
        paragrafos: [
          "Pressupostos de existência: deve haver peça acusatória, órgão judicante (juiz) e capacidade de ser parte.",
          "Pressupostos de validade, subjetivos: juiz competente e imparcial, e capacidade processual.",
          "Pressupostos de validade, objetivos: ausência de litispendência (processo idêntico em andamento), de coisa julgada e de perempção."
        ]
      },
      {
        titulo: "Condições da ação e condições específicas",
        paragrafos: [
          "Condições genéricas: legitimidade (quem pode acusar e quem pode ser acusado), interesse (necessidade e utilidade da tutela) e possibilidade jurídica do pedido (o pedido precisa ser possível em tese).",
          "Condições específicas: exigidas apenas em alguns crimes. A representação da vítima é exigida, por exemplo, na ameaça (art. 147 do CP). A requisição do Ministro da Justiça é exigida, por exemplo, em crime cometido no exterior (art. 7º, §3º, do CP)."
        ]
      },
      {
        titulo: "Espécies de ação penal",
        paragrafos: [
          "Ação penal pública incondicionada: o Ministério Público promove sem depender de qualquer manifestação da vítima. É a regra geral.",
          "Ação penal pública condicionada: depende de representação da vítima ou requisição do Ministro da Justiça. Nas anotações, esse caso é lembrado pela ausência de representação.",
          "Ação penal privada: depende de queixa-crime do ofendido. Pode ser exclusiva (queixa do ofendido), personalíssima (só o ofendido pode propor) ou subsidiária da pública (cabe quando o MP não oferece a denúncia no prazo).",
          "Nas anotações, a ausência de requerimento aparece como causa de relaxamento nos crimes de ação penal privada."
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
      },
      {
        pergunta: "Quais são as espécies de ação penal?",
        modelo: "Pública incondicionada (regra, promovida pelo MP sem depender da vítima); pública condicionada (depende de representação ou requisição); e privada (depende de queixa do ofendido, exclusiva, personalíssima ou subsidiária da pública)."
      }
    ]
  },
  {
    id: "aula-16",
    titulo: "Resposta à acusação, revelia e absolvição sumária",
    horas: 2,
    resumo: "Após a citação, a defesa deve apresentar resposta. Se não apresentar, o processo segue como revelia.",
    simples: [
      "A [[resposta-acusacao|resposta à acusação]] é obrigatória e deve ser apresentada no prazo de 10 dias (art. 396 do CPP). É nela que a defesa pode arguir preliminares, apresentar documentos e justificativas, especificar as provas que pretende produzir e arrolar testemunhas.",
      "Se o acusado não apresentar a resposta, o juiz decreta a [[revelia]]. Na revelia, o processo segue sem a presença do acusado, mas os fatos da acusação não se presumem verdadeiros: continua sendo ônus da acusação provar a autoria e a materialidade.",
      "Depois da resposta, o juiz pode fazer a absolvição sumária (art. 397), quando há atipicidade, excludente de ilicitude, excludente de culpabilidade ou extinção da punibilidade."
    ],
    crianca: "Depois que o acusado é chamado, ele tem um tempo para falar a sua versão. Se ele não fala, o caso continua, mas quem acusa ainda precisa provar tudo. E, se já for claro que não há crime, o juiz pode encerrar logo o caso.",
    secoes: [
      {
        titulo: "O que a resposta precisa conter",
        paragrafos: [
          "Preliminares: questões processuais que a defesa levanta, como nulidades ou pedido de rejeição da denúncia.",
          "Documentos e justificações: provas já disponíveis, que a defesa apresenta desde logo.",
          "Especificação de provas: o que a defesa pretende produzir, como perícia ou oitiva de testemunhas.",
          "Rol de testemunhas: no procedimento ordinário, até 8 testemunhas; no sumário, até 5.",
          "Nas anotações, a resposta é lembrada como obrigatória, sob pena de nulidade absoluta, e sua ausência leva à revelia."
        ]
      },
      {
        titulo: "Revelia e seus efeitos",
        paragrafos: [
          "A revelia é a situação em que o acusado não responde à acusação. O processo segue sem a presença dele.",
          "No processo penal, os efeitos da revelia não são os mesmos do processo civil: não há presunção de veracidade dos fatos alegados na inicial, porque mesmo sendo réu revel, é ônus da acusação provar a autoria e a materialidade.",
          "A revelia não significa condenação. Significa apenas que a defesa não se manifestou naquele momento, e o processo continua."
        ]
      },
      {
        titulo: "Absolvição sumária (art. 397)",
        paragrafos: [
          "Ocorre depois da resposta, antes da instrução, quando o juiz já vê que não há crime ou que a punibilidade foi extinta.",
          "Hipóteses: I. existência manifesta de causa excludente da ilicitude do fato; II. existência manifesta de causa excludente da culpabilidade (exceto inimputabilidade); III. fato que não constitui crime; IV. extinção da punibilidade.",
          "A absolvição sumária encerra o processo com decisão de mérito, então cabe recurso."
        ]
      },
      {
        titulo: "Defesa preliminar: não confundir com a resposta",
        paragrafos: [
          "A defesa preliminar é apresentada entre o oferecimento da denúncia e o recebimento, e não depois. Ela é prevista só para certos casos, como a Lei de Drogas (art. 55 da Lei 11.343/2006) e os crimes funcionais afiançáveis praticados por funcionário público (art. 514 do CPP).",
          "A resposta à acusação, por outro lado, é apresentada depois do recebimento da denúncia, na citação, no prazo de 10 dias."
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
        pergunta: "Quais são as hipóteses de absolvição sumária?",
        modelo: "Causa excludente da ilicitude, causa excludente da culpabilidade (exceto inimputabilidade), fato que não constitui crime, e extinção da punibilidade (art. 397 do CPP)."
      },
      {
        pergunta: "Qual a diferença entre defesa preliminar e resposta à acusação?",
        modelo: "A defesa preliminar é apresentada antes do recebimento da denúncia, só em certos casos (ex.: Lei de Drogas, crimes funcionais afiançáveis). A resposta à acusação é apresentada depois da citação, em 10 dias (art. 396)."
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
        titulo: "Como funciona o RESE",
        paragrafos: [
          "Interposição: o recurso é apresentado ao juiz de primeiro grau, com as razões, no prazo de 5 dias da intimação da decisão.",
          "Retratação: o juiz pode reconsiderar a própria decisão. Se mantiver, envia o recurso ao tribunal (art. 589).",
          "Julgamento: o tribunal decide se a denúncia deve ou não ser recebida. Se reformar a rejeição, o processo volta ao juiz para a citação."
        ]
      },
      {
        titulo: "Hipóteses do art. 581",
        paragrafos: [
          "O art. 581 tem vários incisos. O inciso I é o da rejeição da denúncia. Outros tratam, por exemplo, de decisões sobre incompetência, sobre liberdade provisória, sobre prescrição e sobre a extinção da punibilidade.",
          "Vale conferir a lista atual do art. 581 antes da prova, porque a redação pode ter sido alterada por leis posteriores."
        ]
      },
      {
        titulo: "Coisa julgada formal e material",
        paragrafos: [
          "Coisa julgada formal: a decisão não pode mais ser impugnada no mesmo processo, mas o fato pode ser objeto de nova ação.",
          "Coisa julgada material: a decisão impede nova ação sobre o mesmo fato. A rejeição da denúncia, em regra, faz só coisa julgada formal.",
          "Por isso, mesmo rejeitada, a denúncia pode ser reapresentada, se houver novas provas ou se o vício for sanado."
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
      },
      {
        pergunta: "Qual a diferença entre coisa julgada formal e coisa julgada material?",
        modelo: "A formal impede nova impugnação no mesmo processo, mas não impede nova ação sobre o fato. A material impede nova ação sobre o mesmo fato. A rejeição da denúncia, em regra, faz só coisa julgada formal."
      }
    ]
  },
  {
    id: "aula-18",
    titulo: "Imunidades à prisão, mandado de prisão e emprego da força",
    horas: 2,
    resumo: "Qualquer pessoa pode ser presa, mas algumas têm regras especiais. O mandado e a força policial também têm limites.",
    simples: [
      "Como regra, todas as pessoas podem ser presas. Há exceções: são as [[imunidade|imunidades à prisão]], que protegem o exercício de funções públicas e a representação do país.",
      "O [[mandado-prisao|mandado de prisão]] é expedido pelo juiz. Ele é passado em duplicata, e o cumprimento pode ser feito por qualquer policial quando registrado no Banco Nacional de Mandados de Prisão (art. 289-A do CPP).",
      "A força só pode ser usada em caso de resistência ou de fuga (art. 284 do CPP). Ela pode ser usada pelo próprio policial ou por um particular que esteja ajudando."
    ],
    crianca: "Todo mundo pode ser chamado a responder pelo que fez, mas algumas pessoas têm um tipo de proteção porque cuidam de coisas importantes para o país. Quando a polícia precisa usar a força, ela só pode fazer isso se a pessoa resistir ou tentar fugir.",
    secoes: [
      {
        titulo: "Imunidades à prisão",
        paragrafos: [
          "Presidente da República: não pode ser preso enquanto não sofrer condenação definitiva.",
          "Diplomatas, o chefe de governo estrangeiro e os funcionários de organização internacional, com suas famílias: têm imunidade à prisão, conforme os tratados internacionais.",
          "Cônsul: só tem a proteção enquanto estiver em serviço.",
          "Senadores e deputados: só podem ser presos em flagrante de crime inafiançável (art. 53, §2º, da CF).",
          "Magistrados e membros do Ministério Público: em flagrante, só de crime inafiançável. Não há essa restrição para a prisão preventiva e a temporária.",
          "Advogado: se o crime tem relação com a profissão, só pode ser preso em flagrante de crime inafiançável. Fora da função, pode ser preso, mas a prisão exige a presença de representante da OAB (art. 7º, §3º, da Lei 8.906/1994)."
        ]
      },
      {
        titulo: "Mandado de prisão",
        paragrafos: [
          "O mandado é expedido pelo juiz e passado em duplicata (art. 285 do CPP).",
          "Se o preso não souber ler ou assinar, o mandado precisa de duas testemunhas que assinem (art. 286 do CPP).",
          "Mandado registrado no BNMP pode ser cumprido por qualquer policial (art. 289-A).",
          "A falta do mandado em mãos não impede o cumprimento da prisão quando o crime é inafiançável (arts. 287 e 299 do CPP)."
        ]
      },
      {
        titulo: "Emprego da força e prisão especial",
        paragrafos: [
          "A força é usada apenas em caso de resistência ou de fuga (art. 284 do CPP). O uso fora disso pode configurar abuso de autoridade.",
          "Prisão especial (art. 295 do CPP): é forma de cumprimento da prisão cautelar, antes do trânsito em julgado, em cela separada da comum, para quem tem o direito previsto em lei."
        ]
      }
    ],
    casos: [
      {
        titulo: "Caso hipotético: o advogado preso",
        tipo: "ilustrativo",
        texto: "Um advogado é acusado de um crime ligado ao exercício da profissão, e um policial quer prendê-lo em flagrante por um crime afiançável. Como o crime é afiançável, a prisão em flagrante não é possível por essa regra da função."
      }
    ],
    juris: [],
    questoes: [
      {
        pergunta: "Quem pode ser preso em flagrante de crime afiançável, sendo senador ou deputado?",
        modelo: "Ninguém nessa situação. Senadores e deputados só podem ser presos em flagrante de crime inafiançável (art. 53, §2º, da CF)."
      },
      {
        pergunta: "Em quais situações a força policial pode ser usada para cumprir uma prisão?",
        modelo: "Apenas em caso de resistência ou de fuga do preso (art. 284 do CPP). Fora dessas situações, o uso da força é irregular."
      },
      {
        pergunta: "A falta do mandado em mãos impede a prisão?",
        modelo: "Não, quando o crime é inafiançável (arts. 287 e 299 do CPP). O mandado pode ser apresentado depois, mas a prisão deve ser comunicada e formalizada."
      }
    ]
  }
];
