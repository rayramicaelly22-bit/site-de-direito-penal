// Glossário: cada chave pode ser citada nas aulas como [[chave]].
// O texto da aula mostra o termo e, ao clicar, aparece a explicação.
const GLOSSARIO = {
  "principio-legalidade": {
    termo: "Princípio da legalidade",
    def: "Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal (art. 1º do Código Penal e art. 5º, XXXIX, da Constituição)."
  },
  "bem-juridico": {
    termo: "Bem jurídico",
    def: "O interesse que a lei quer proteger com a criminalização, como a vida, o patrimônio ou a liberdade."
  },
  "fato-tipico": {
    termo: "Fato típico",
    def: "Primeiro elemento do crime: uma conduta humana que se encaixa na descrição de um tipo penal (conduta, resultado, nexo e tipicidade)."
  },
  "ilicitude": {
    termo: "Ilicitude (antijuridicidade)",
    def: "Segundo elemento do crime: a conduta típica é contrária ao direito. Se houver uma causa de justificação, como a legítima defesa, não há ilicitude."
  },
  "culpabilidade": {
    termo: "Culpabilidade",
    def: "Terceiro elemento do crime: juízo de reprovação sobre o autor. Exige imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa."
  },
  "tipo-penal": {
    termo: "Tipo penal",
    def: "A descrição abstrata da conduta proibida feita pela lei, por exemplo: \"matar alguém\" (art. 121 do CP)."
  },
  "dolo": {
    termo: "Dolo",
    def: "Vontade de realizar a conduta típica, sabendo o que se faz e querendo o resultado (dolo direto) ou assumindo o risco de produzi-lo (dolo eventual)."
  },
  "culpa": {
    termo: "Culpa",
    def: "Quando o agente causa o resultado por imprudência, negligência ou imperícia, sem querer o resultado. Só é punível se a lei prever (art. 18, parágrafo único, do CP)."
  },
  "nexo-causal": {
    termo: "Nexo causal",
    def: "Ligação entre a conduta e o resultado. Pelo art. 13 do CP, o resultado só é imputado a quem lhe deu causa."
  },
  "iter-criminis": {
    termo: "Iter criminis",
    def: "O caminho do crime: cogitação, preparação, execução e consumação. Só a partir da execução o crime pode ser punido como tentativa."
  },
  "tentativa": {
    termo: "Tentativa",
    def: "Crime iniciado (execução começada) que não se consuma por circunstâncias alheias à vontade do agente (art. 14, II, do CP). Pena reduzida de um a dois terços."
  },
  "legitima-defesa": {
    termo: "Legítima defesa",
    def: "Excludente de ilicitude: repelir, usando moderadamente os meios necessários, uma injusta agressão atual ou iminente a direito seu ou de outrem (art. 25 do CP)."
  },
  "estado-de-necessidade": {
    termo: "Estado de necessidade",
    def: "Excludente de ilicitude: sacrificar um bem para salvar outro, de valor igual ou maior, de perigo atual que o agente não causou (art. 24 do CP)."
  },
  "imputabilidade": {
    termo: "Imputabilidade",
    def: "Capacidade de entender o caráter ilícito do fato e de se determinar conforme esse entendimento. Menores de 18 anos e doentes mentais, em certos casos, são inimputáveis (arts. 26 e 27 do CP)."
  },
  "jurisprudencia": {
    termo: "Jurisprudência",
    def: "O conjunto de decisões reiteradas dos tribunais sobre um mesmo tema. Não é lei, mas orienta como a lei é aplicada."
  },
  "sumula": {
    termo: "Súmula",
    def: "Resumo de entendimento reiterado de um tribunal sobre um tema. A súmula vinculante do STF obriga juízes e a administração pública."
  },
  "habeas-corpus": {
    termo: "Habeas corpus",
    def: "Remédio constitucional (art. 5º, LXVIII, da CF) usado para proteger a liberdade de locomoção contra ilegalidade ou abuso de poder."
  },
  "presuncao-inocencia": {
    termo: "Presunção de inocência",
    def: "Ninguém é considerado culpado até o trânsito em julgado de sentença penal condenatória (art. 5º, LVII, da CF)."
  },
  "flagrante": {
    termo: "Flagrante",
    def: "Situação em que o autor é surpreendido cometendo a infração, ou logo depois (art. 302 do CPP)."
  },
  "prisao": {
    termo: "Prisão",
    def: "Privação da liberdade de locomoção. Pode ser penal (condenação definitiva), cautelar (antes da condenação definitiva), civil, administrativa ou militar."
  },
  "prisao-preventiva": {
    termo: "Prisão preventiva",
    def: "Prisão cautelar decretada pelo juiz, com prova da existência do crime, indícios suficientes de autoria e um fundamento legal (art. 312 do CPP)."
  },
  "medida-cautelar": {
    termo: "Medida cautelar diversa da prisão",
    def: "Medida menos grave que a prisão, prevista no art. 319 do CPP, como comparecimento periódico em juízo ou proibição de contato com alguém."
  },
  "fianca": {
    termo: "Fiança",
    def: "Garantia em dinheiro para responder ao processo em liberdade. O valor depende da pena e da situação do acusado (arts. 321 a 350 do CPP)."
  },
  "processo": {
    termo: "Processo",
    def: "Conjunto de atos processuais, desde o oferecimento da peça acusatória até o provimento final."
  },
  "procedimento": {
    termo: "Procedimento",
    def: "Forma como o processo se desenvolve, com fases e ritos definidos conforme a pena ou a natureza do crime."
  },
  "rito-ordinario": {
    termo: "Procedimento comum ordinário",
    def: "Rito usado para crimes com pena máxima igual ou superior a 4 anos, quando não há rito especial."
  },
  "rejeicao-denuncia": {
    termo: "Rejeição da denúncia",
    def: "Decisão do juiz que não recebe a denúncia por inépcia, falta de pressuposto ou condição da ação, ou falta de justa causa (art. 395 do CPP)."
  },
  "pressupostos-processuais": {
    termo: "Pressupostos processuais",
    def: "Requisitos para o processo existir e ser válido: peça acusatória, juiz, capacidade de ser parte e competência, entre outros."
  },
  "justa-causa": {
    termo: "Justa causa",
    def: "Indícios mínimos de autoria e prova da materialidade do crime para a ação penal ser iniciada. Sua ausência leva à rejeição da denúncia."
  },
  "resposta-acusacao": {
    termo: "Resposta à acusação",
    def: "Manifestação escrita da defesa após a citação, no prazo de 10 dias (art. 396-A do CPP). Pode arguir preliminares e arrolar testemunhas."
  },
  "revelia": {
    termo: "Revelia",
    def: "Situação em que o acusado não responde à acusação. O processo segue sem a sua presença, mas não há presunção de veracidade dos fatos."
  },
  "imunidade": {
    termo: "Imunidade à prisão",
    def: "Proteção especial de algumas pessoas, como o Presidente da República, diplomatas, senadores e deputados, que limita quando elas podem ser presas."
  },
  "mandado-prisao": {
    termo: "Mandado de prisão",
    def: "Ordem escrita expedida pelo juiz para prender alguém. Pode ser cumprida por qualquer policial quando registrada no BNMP (art. 289-A do CPP)."
  },
  "rese": {
    termo: "RESE (recurso em sentido estrito)",
    def: "Recurso previsto no art. 581 do CPP, cabível em hipóteses específicas, como a decisão que rejeita a denúncia (inciso I). Prazo de 5 dias."
  }
};
