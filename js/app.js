// Navegação por abas (hash) e telas do site.
const app = document.getElementById("app");
const popover = document.getElementById("popover");

const LS = {
  get(chave, padrao) {
    try {
      const valor = localStorage.getItem(chave);
      return valor ? JSON.parse(valor) : padrao;
    } catch (erro) {
      return padrao;
    }
  },
  set(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      // Sem armazenamento disponível: o site continua funcionando sem salvar.
    }
  }
};

const AVISOS = {
  faculdade: "Conteúdo da faculdade, baseado nas anotações das aulas. Ao estudar, confira a lei atual e as fontes indicadas.",
  complementar: "Conteúdo complementar: não foi dado pelo professor. Serve para entender o básico, mas não substitui a matéria da aula. Confira as fontes indicadas."
};

const FACULDADE = () => AULAS.filter((a) => a.secao === "faculdade");
const COMPLEMENTAR_AULAS = () => AULAS.filter((a) => a.secao === "complementar");

function esc(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Converte [[chave]] e [[chave|texto]] em termos clicáveis do glossário.
function marcar(texto) {
  return esc(texto).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, chave, rotulo) => {
    const entrada = GLOSSARIO[chave];
    const visivel = rotulo || (entrada ? entrada.termo : chave);
    if (!entrada) return visivel;
    return `<span class="termo" data-chave="${chave}" tabindex="0">${visivel}</span>`;
  });
}

function hojeTexto() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

function formatarData(data) {
  return data.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" });
}

// Progresso salvo neste navegador: aulas estudadas, dias da trilha concluídos e histórico.
const PROG_KEY = "areta-progresso";

function progressoVazio() {
  return { aulas: {}, dias: {}, historico: [], migrado: false };
}

function lerProgresso() {
  const p = LS.get(PROG_KEY, progressoVazio());
  if (!p.migrado) {
    // Migra o formato antigo (lista de aulas estudadas), se existir.
    const antigas = LS.get("areta-feitas", []);
    antigas.forEach((id) => {
      p.aulas[id] = { estudada: true, data: new Date().toISOString() };
    });
    p.migrado = true;
    LS.set(PROG_KEY, p);
  }
  return p;
}

function salvarProgresso(p) {
  LS.set(PROG_KEY, p);
  agendarEnvioNuvem();
}

// Bloco de login e sincronização na aba Progresso.
function blocoNuvem() {
  if (!nuvemDisponivel()) {
    return `<div class="card borda"><strong>Sincronização:</strong> ainda não configurada. Por enquanto, o progresso fica só neste navegador.</div>`;
  }

  const aviso = `
    <p class="suave"><strong>Privacidade:</strong> o progresso na nuvem fica ligado à sua conta. Se usar e-mail, ele é guardado só para login e recuperação de senha, e é visível para quem administra o site. Você pode apagar a conta e todos os dados quando quiser, no botão "Apagar minha conta".</p>`;

  const campos = `
      <label for="nuvem-email">E-mail</label>
      <input type="email" id="nuvem-email" autocomplete="email">
      <label for="nuvem-senha">Senha</label>
      <input type="password" id="nuvem-senha" autocomplete="new-password">`;

  if (nuvem.sessao) {
    const anonimo = Boolean(nuvem.sessao.user.is_anonymous);
    return `
      <div class="card">
        <p><strong>Conectado como:</strong> ${anonimo ? "modo sem e-mail" : esc(nuvem.sessao.user.email)}.</p>
        ${anonimo ? `
          <p class="aviso">No modo sem e-mail, o progresso fica só neste navegador. Se limpar os dados do navegador, ele se perde. Para não perder, salve um e-mail:</p>
          ${campos}
          <div class="linha" style="margin-top: 12px;"><button id="btn-vincular">Salvar com e-mail</button></div>` : ""}
        ${aviso}
        <div class="linha" style="margin-top: 12px;">
          <button id="btn-sincronizar">Sincronizar agora</button>
          <button class="secundario" id="btn-sair">Sair</button>
          <button class="secundario" id="btn-apagar">Apagar minha conta</button>
        </div>
        <p id="msg-nuvem" class="suave"></p>
      </div>`;
  }

  return `
    <div class="card">
      <p>Entre para salvar seu progresso na nuvem e usar em outro aparelho. Escolha uma opção:</p>
      <div class="linha">
        <button id="btn-anonimo">Entrar sem e-mail</button>
      </div>
      <p class="suave">Ou entre com e-mail:</p>
      ${campos}
      <div class="linha" style="margin-top: 12px;">
        <button id="btn-entrar">Entrar</button>
        <button class="secundario" id="btn-criar">Criar conta</button>
      </div>
      ${aviso}
      <p id="msg-nuvem" class="suave"></p>
    </div>`;
}

function registrar(p, acao, aulaId) {
  p.historico.unshift({ quando: new Date().toISOString(), acao, aula: aulaId });
  p.historico = p.historico.slice(0, 200);
}

function aulasFeitas() {
  const p = lerProgresso();
  return Object.keys(p.aulas).filter((id) => p.aulas[id].estudada);
}

function alternarFeita(id) {
  const p = lerProgresso();
  const estudada = Boolean(p.aulas[id] && p.aulas[id].estudada);
  p.aulas[id] = { estudada: !estudada, data: new Date().toISOString() };
  registrar(p, estudada ? "desmarcou como estudada" : "marcou como estudada", id);
  salvarProgresso(p);
}

function chaveData(data) {
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");
  return `${data.getFullYear()}-${mes}-${dia}`;
}

function formatarQuando(iso) {
  return new Date(iso).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

function bloco(secao) {
  return `<div class="card borda aviso-secao"><strong>Aviso:</strong> ${esc(AVISOS[secao])}</div>`;
}

function fontesHtml(aula) {
  const chaves = FONTES[aula.id] || [];
  if (chaves.length === 0) return "";
  const itens = chaves.map((k) => `<li><a href="${esc(LINKS[k].url)}" target="_blank" rel="noopener">${esc(LINKS[k].nome)}</a></li>`).join("");
  return `
    <h2>Fontes para consultar</h2>
    <ul>${itens}</ul>
  `;
}

// ---------- Telas ----------

function telaInicio() {
  const feitas = aulasFeitas().filter((id) => FACULDADE().some((a) => a.id === id)).length;
  return `
    <h1>ARETA CRIMINALIS</h1>
    <p class="suave">Estudo Penal para a atividade oral e para a prova.</p>
    <p>Site para estudar Direito Penal para a atividade oral e para a prova. Em cada aba você encontra:</p>
    <ul>
      <li><strong>Faculdade:</strong> o conteúdo dado pelo professor, com explicação simples, casos e perguntas.</li>
      <li><strong>Complementar:</strong> conteúdo de apoio que não foi dado em aula, para entender o básico.</li>
      <li><strong>Trilha:</strong> informe a data de início e a data da atividade oral, e o site monta o seu plano com base na Faculdade.</li>
      <li><strong>Glossário:</strong> clique em palavras destacadas no texto para ver o significado.</li>
      <li><strong>Revisão:</strong> perguntas subjetivas da Faculdade, com modelo de resposta.</li>
      <li><strong>Ensaio oral:</strong> perguntas sorteadas para treinar a resposta em voz alta.</li>
    </ul>
    <div class="card">
      <strong>Seu progresso:</strong> ${feitas} de ${FACULDADE().length} aulas da Faculdade marcadas como estudadas.
      <a href="#/progresso">Ver progresso e histórico</a>
    </div>
    <div class="linha">
      <a class="botao" href="#/trilha">Montar minha trilha</a>
      <a class="botao secundario" href="#/nivel">Descubra seu nível</a>
      <a class="botao secundario" href="#/simulado">Simulado do dia</a>
      <a class="botao secundario" href="#/faculdade">Ver conteúdo da faculdade</a>
    </div>
  `;
}

function telaTrilha() {
  const salvo = LS.get("areta-trilha", { inicio: hojeTexto(), fim: "2026-10-26", horas: 2 });
  return `
    <h1>Trilha de estudo</h1>
    <p>Preencha o início, a data da atividade oral e quantas horas por dia você pode estudar. A trilha usa só o conteúdo da <strong>Faculdade</strong>.</p>
    <div class="card borda">
      <div class="linha">
        <div>
          <label for="f-inicio">Dia de início</label>
          <input type="date" id="f-inicio" value="${esc(salvo.inicio)}">
        </div>
        <div>
          <label for="f-fim">Dia da atividade oral</label>
          <input type="date" id="f-fim" value="${esc(salvo.fim)}">
        </div>
        <div>
          <label for="f-horas">Horas por dia</label>
          <input type="number" id="f-horas" min="0.5" step="0.5" value="${esc(salvo.horas)}">
        </div>
        <button id="btn-gerar">Gerar plano</button>
      </div>
    </div>
    <div id="resultado"></div>
  `;
}

function mostrarTrilha() {
  const inicio = document.getElementById("f-inicio").value;
  const fim = document.getElementById("f-fim").value;
  const horas = Number(document.getElementById("f-horas").value);
  LS.set("areta-trilha", { inicio, fim, horas });

  const resultado = gerarTrilha(inicio, fim, horas, FACULDADE());
  const area = document.getElementById("resultado");
  if (resultado.erro) {
    area.innerHTML = `<p class="aviso">${esc(resultado.erro)}</p>`;
    return;
  }

  const rotulos = { estudo: "Estudo", revisao: "Revisão", oral: "Atividade oral" };
  const totalHoras = resultado.dias.reduce((soma, dia) => soma + dia.horas, 0);
  const blocos = resultado.dias.map((dia) => {
    const itens = dia.itens.map((item) => {
      if (item.aulaId) {
        return `<li><a href="#/aulas/${item.aulaId}">${esc(item.titulo)}</a> · ${esc(item.modo)} (${Number(item.horas.toFixed(2))}h)</li>`;
      }
      return `<li>${esc(item.titulo)}</li>`;
    }).join("");
    return `
      <div class="trilha-dia ${dia.tipo}">
        <strong>${esc(formatarData(dia.data))}</strong> · ${rotulos[dia.tipo]}${dia.horas ? ` · ${dia.horas}h` : ""}
        ${dia.tipo !== "oral" ? `<label class="concluido"><input type="checkbox" data-dia="${chaveData(dia.data)}" ${lerProgresso().dias[chaveData(dia.data)] ? "checked" : ""}> Dia concluído</label>` : ""}
        <ul>${itens}</ul>
      </div>`;
  }).join("");

  const aviso = resultado.faltam.length
    ? `<p class="aviso">Não coube no período: ${esc(resultado.faltam.join(", "))}. Aumente as horas por dia ou a data.</p>`
    : "";

  const reduzidas = resultado.reduzidas.length
    ? `<p>Para caber no período, estas aulas foram reduzidas: ${resultado.reduzidas.map((r) => `${esc(r.titulo)} (${esc(r.modo)})`).join("; ")}.</p>`
    : `<p>Todas as aulas serão estudadas por completo.</p>`;

  const diasEstudo = resultado.dias.filter((d) => d.tipo !== "oral");
  const progresso = lerProgresso();
  const concluidos = diasEstudo.filter((d) => progresso.dias[chaveData(d.data)]).length;

  area.innerHTML = `
    <p>Total de estudo: ${totalHoras}h em ${resultado.dias.length} dias.</p>
    <p id="contador-dias"><strong>Dias concluídos:</strong> ${concluidos} de ${diasEstudo.length}. Marque cada dia quando terminar; o progresso fica salvo.</p>
    ${aviso}
    ${reduzidas}
    ${blocos}
  `;
}

function listaAulas(lista) {
  const feitas = aulasFeitas();
  return lista.map((aula) => `
    <li>
      <div>
        <a href="#/aulas/${aula.id}">${esc(aula.titulo)}</a>
        <div class="suave">${aula.horas}h · ${esc(aula.resumo)}</div>
      </div>
      ${feitas.includes(aula.id) ? '<span class="feito">Estudada</span>' : ""}
    </li>`).join("");
}

function telaFaculdade() {
  return `
    <h1>Faculdade</h1>
    ${bloco("faculdade")}
    <p>Conteúdo dado pelo professor, em ordem de aula.</p>
    <ul class="lista-aulas">${listaAulas(FACULDADE())}</ul>
  `;
}

function telaComplementar() {
  return `
    <h1>Complementar</h1>
    ${bloco("complementar")}
    <ul class="lista-aulas">${listaAulas(COMPLEMENTAR_AULAS())}</ul>
  `;
}

function telaAula(id) {
  const aula = AULAS.find((a) => a.id === id);
  if (!aula) return telaNaoEncontrada();
  const lista = aula.secao === "faculdade" ? FACULDADE() : COMPLEMENTAR_AULAS();
  const indice = lista.findIndex((a) => a.id === aula.id);
  const feita = aulasFeitas().includes(aula.id);
  const anterior = lista[indice - 1];
  const proxima = lista[indice + 1];

  const secoes = aula.secoes.map((secao) => `
    <h2>${esc(secao.titulo)}</h2>
    ${secao.paragrafos.map((p) => `<p>${marcar(p)}</p>`).join("")}
  `).join("");

  const casos = aula.casos.map((caso) => `
    <div class="caso">
      <span class="etiqueta">${caso.tipo === "real" ? "Caso real" : "Caso ilustrativo"}</span>
      <h3>${esc(caso.titulo)}</h3>
      <p>${marcar(caso.texto)}</p>
    </div>`).join("");

  const juris = aula.juris.length ? `
    <h2>Decisões e súmulas</h2>
    ${aula.juris.map((j) => `
      <div class="card">
        <a href="#/jurisprudencia/${j.chave}"><strong>${esc(JURIS[j.chave].titulo)}</strong></a>
        <p>${esc(j.ligacao)}</p>
      </div>`).join("")}
  ` : "";

  const questoes = aula.questoes.map((q, i) => `
    <div class="card borda">
      <strong>${i + 1}. ${esc(q.pergunta)}</strong>
      <details>
        <summary>Ver modelo de resposta</summary>
        <p>${marcar(q.modelo)}</p>
      </details>
    </div>`).join("");

  const rotaBase = aula.secao === "faculdade" ? "#/faculdade" : "#/complementar";
  return `
    ${bloco(aula.secao)}
    <p class="suave"><a href="${rotaBase}">← ${aula.secao === "faculdade" ? "Faculdade" : "Complementar"}</a> · Aula ${indice + 1} de ${lista.length} · ${aula.horas}h</p>
    <h1>${esc(aula.titulo)}</h1>
    <div class="card">${marcar(aula.resumo)}</div>
    ${MACETES[aula.id] ? `<div class="macete"><strong>Macete para decorar:</strong> ${marcar(MACETES[aula.id])}</div>` : ""}

    <div class="linha">
      <button class="secundario" id="btn-crianca" aria-expanded="false">Explicar para uma criança</button>
      <button class="secundario" id="btn-feita">${feita ? "Desmarcar como estudada" : "Marcar como estudada"}</button>
    </div>
    <div class="caixa-crianca" id="crianca" hidden>
      <strong>Explicando para uma criança:</strong>
      <p>${marcar(aula.crianca)}</p>
    </div>

    <h2>Explicação simples</h2>
    ${aula.simples.map((p) => `<p>${marcar(p)}</p>`).join("")}

    ${secoes}

    <h2>Casos</h2>
    ${casos}
    ${juris}

    <h2>Perguntas para treinar a resposta oral</h2>
    ${questoes}

    ${fontesHtml(aula)}

    <div class="linha" style="justify-content: space-between; margin-top: 24px;">
      ${anterior ? `<a class="botao secundario" href="#/aulas/${anterior.id}">← ${esc(anterior.titulo)}</a>` : "<span></span>"}
      ${proxima ? `<a class="botao secundario" href="#/aulas/${proxima.id}">${esc(proxima.titulo)} →</a>` : "<span></span>"}
    </div>
  `;
}

function telaJurisprudencia(chave) {
  const j = JURIS[chave];
  if (!j) return telaNaoEncontrada();
  const aulasQueCitam = AULAS.filter((a) => a.juris.some((x) => x.chave === chave));
  return `
    <p class="suave"><a href="#/faculdade">← Faculdade</a></p>
    <span class="etiqueta">${esc(j.tipo)}</span>
    <h1>${esc(j.titulo)}</h1>
    <div class="card">
      <h3>O que diz</h3>
      <p>${esc(j.texto)}</p>
    </div>
    <div class="card borda">
      <h3>Explicação simples</h3>
      <p>${esc(j.explicacao)}</p>
    </div>
    <p>Fonte oficial: <a href="${esc(j.fonte)}" target="_blank" rel="noopener">${esc(j.fonteNome)}</a></p>
    ${aulasQueCitam.length ? `<p>Usada em: ${aulasQueCitam.map((a) => `<a href="#/aulas/${a.id}">${esc(a.titulo)}</a>`).join(", ")}</p>` : ""}
  `;
}

function listaGlossario(filtro = "") {
  const termos = Object.values(GLOSSARIO)
    .filter((t) => t.termo.toLowerCase().includes(filtro.toLowerCase()))
    .sort((a, b) => a.termo.localeCompare(b.termo, "pt-BR"));
  if (termos.length === 0) return "<p>Nenhum termo encontrado.</p>";
  return termos.map((t) => `
    <div class="card borda">
      <strong>${esc(t.termo)}</strong>
      <p>${esc(t.def)}</p>
    </div>`).join("");
}

function telaGlossario() {
  return `
    <h1>Glossário</h1>
    <p>Também dá para ver a explicação clicando nas palavras destacadas dentro das aulas.</p>
    <label for="busca">Buscar termo</label>
    <input type="search" id="busca" placeholder="Ex.: dolo">
    <div id="lista-glossario">${listaGlossario()}</div>
  `;
}

function telaRevisao() {
  const blocos = FACULDADE().map((aula) => `
    <h2>${esc(aula.titulo)}</h2>
    ${aula.questoes.map((q, i) => `
      <div class="card borda">
        <strong>${i + 1}. ${esc(q.pergunta)}</strong>
        <details>
          <summary>Ver modelo de resposta</summary>
          <p>${marcar(q.modelo)}</p>
        </details>
      </div>`).join("")}
  `).join("");
  return `
    <h1>Revisão</h1>
    ${bloco("faculdade")}
    <p>Perguntas subjetivas da Faculdade. Responda em voz alta antes de abrir o modelo.</p>
    ${blocos}
  `;
}

let ultimaEnsaio = -1;
let ensaioAtual = null;

// Palavras comuns que não indicam um ponto da resposta.
const PALAVRAS_COMUNS = new Set([
  "para", "pela", "pelo", "como", "quando", "essa", "esse", "esta", "este", "isso", "sobre",
  "entre", "pode", "deve", "seja", "sendo", "sem", "com", "uma", "umas", "dos", "das", "nos",
  "nas", "que", "qual", "quais", "seus", "suas", "ainda", "mais", "menos", "porque", "então",
  "tambem", "desde", "onde", "cada", "ser", "ter", "fato", "caso", "codigo", "penal", "processo",
  "processual", "artigo", "conforme", "outro", "outra", "mesma", "mesmo", "apenas", "quem"
]);

function semAcento(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// Pontos principais da resposta certa: palavras longas e sem as comuns.
function pontosDaResposta(texto) {
  const palavras = semAcento(texto).split(/[^a-z0-9]+/).filter((p) => p.length >= 6 && !PALAVRAS_COMUNS.has(p));
  return [...new Set(palavras)];
}

// Compara a resposta da pessoa com a resposta certa, por palavras-chave.
function compararResposta(resposta, modelo) {
  const pontos = pontosDaResposta(modelo);
  const texto = semAcento(resposta);
  const citados = pontos.filter((p) => texto.includes(p.slice(0, 6)));
  const faltaram = pontos.filter((p) => !citados.includes(p));
  const percentual = pontos.length ? Math.round((citados.length / pontos.length) * 100) : 0;
  return { percentual, citados, faltaram };
}

function resultadoComparacao(resposta, modelo) {
  if (!resposta.trim()) {
    return `<p class="aviso">Escreva sua resposta antes de comparar.</p>`;
  }
  const { percentual, citados, faltaram } = compararResposta(resposta, modelo);
  const mensagem = percentual >= 70
    ? "Muito bem: você cobriu a maior parte dos pontos principais."
    : percentual >= 40
      ? "Bom começo: faltaram alguns pontos. Veja a lista abaixo."
      : "Revise esta resposta e tente de novo, em voz alta.";

  return `
    <div class="card">
      <h3>Comparação</h3>
      <p><strong>${percentual}%</strong> dos pontos principais apareceram na sua resposta. ${mensagem}</p>
      <p class="suave">A comparação é automática, por palavras-chave. Uma resposta correta com outras palavras pode aparecer com nota baixa. Leia a resposta certa para entender o raciocínio completo.</p>
      <div class="linha" style="align-items: stretch;">
        <div class="card borda" style="flex: 1 1 280px;">
          <h3>O que você respondeu</h3>
          <p>${esc(resposta).replace(/\n/g, "<br>")}</p>
        </div>
        <div class="card borda" style="flex: 1 1 280px;">
          <h3>Resposta certa</h3>
          <p>${marcar(modelo)}</p>
        </div>
      </div>
      ${citados.length ? `<p><strong>Você citou:</strong> ${citados.map(esc).join(", ")}.</p>` : ""}
      ${faltaram.length ? `<p class="aviso">Faltou citar: ${faltaram.map(esc).join(", ")}.</p>` : ""}
    </div>`;
}
function sortearEnsaio() {
  const todas = FACULDADE().flatMap((aula) => aula.questoes.map((q) => ({ ...q, aula: aula.titulo })));
  if (todas.length === 0) return null;
  let indice;
  do {
    indice = Math.floor(Math.random() * todas.length);
  } while (todas.length > 1 && indice === ultimaEnsaio);
  ultimaEnsaio = indice;
  return todas[indice];
}

function telaEnsaio() {
  const q = sortearEnsaio();
  if (!q) return "<p>Ainda não há perguntas cadastradas.</p>";
  ensaioAtual = q;
  return `
    <h1>Ensaio oral</h1>
    ${bloco("faculdade")}
    <p>Responda em voz alta, como na atividade. Depois compare com o modelo.</p>
    <div class="card borda">
      <strong>Sobre a comparação:</strong>
      <p>A comparação é automática, por palavras-chave. Ela não entende o sentido da resposta. Uma resposta correta com outras palavras pode aparecer com nota baixa, então leia a resposta certa para entender o raciocínio. Também pode aparecer muita palavra na lista "faltou citar", porque a lista usa todas as palavras longas da resposta certa.</p>
    </div>
    <div class="card">
      <p class="suave">${esc(q.aula)}</p>
      <h2 style="margin-top: 0">${esc(q.pergunta)}</h2>
      <label for="resposta-aluno">Sua resposta (escreva ou digite o que você falou)</label>
      <textarea id="resposta-aluno" rows="6" style="width: 100%; font: inherit; padding: 10px; border-radius: 8px; border: 1px solid var(--borda); background: var(--fundo); color: var(--texto);" placeholder="Responda como se estivesse na prova oral."></textarea>
      <div class="linha" style="margin-top: 12px;">
        <button id="btn-comparar">Comparar com a resposta certa</button>
        <button id="btn-modelo" class="secundario">Ver modelo</button>
        <button id="btn-outra" class="secundario">Outra pergunta</button>
      </div>
      <div id="comparacao"></div>
      <div class="resposta" id="modelo"><p>${marcar(q.modelo)}</p></div>
    </div>
  `;
}

function telaProgresso() {
  const p = lerProgresso();
  const feitas = aulasFeitas();
  const faculdade = FACULDADE();
  const estudadas = faculdade.filter((a) => feitas.includes(a.id)).length;
  const trilha = LS.get("areta-trilha", null);
  const diasConcluidos = Object.values(p.dias).filter(Boolean).length;

  const linhas = faculdade.map((aula) => {
    const feita = feitas.includes(aula.id);
    const registro = p.aulas[aula.id];
    return `
      <li>
        <div>
          <a href="#/aulas/${aula.id}">${esc(aula.titulo)}</a>
          <div class="suave">${feita ? `Estudada em ${esc(formatarQuando(registro.data))}` : "Ainda não estudada"}</div>
        </div>
        <button class="secundario btn-status" data-aula="${aula.id}">${feita ? "Desmarcar" : "Marcar como estudada"}</button>
      </li>`;
  }).join("");

  const historico = p.historico.length
    ? p.historico.slice(0, 30).map((h) => {
      const aula = AULAS.find((a) => a.id === h.aula);
      return `<li>${esc(formatarQuando(h.quando))} · ${esc(h.acao)}: ${esc(aula ? aula.titulo : h.aula)}</li>`;
    }).join("")
    : "<li>Nenhuma atividade registrada ainda.</li>";

  const trilhaSalva = trilha && trilha.inicio && trilha.fim
    ? `<p>Trilha salva: de ${esc(trilha.inicio)} até ${esc(trilha.fim)}, ${esc(trilha.horas)}h por dia. <a href="#/trilha">Abrir trilha</a></p>`
    : `<p>Nenhuma trilha salva ainda. <a href="#/trilha">Montar trilha</a></p>`;

  return `
    <h1>Progresso</h1>
    <p>Seu progresso fica salvo neste navegador. Com uma conta, ele também fica salvo na nuvem e aparece em outros aparelhos.</p>
    ${blocoNuvem()}
    <div class="card">
      <p><strong>Aulas estudadas:</strong> ${estudadas} de ${faculdade.length} (Faculdade)</p>
      <p><strong>Dias da trilha concluídos:</strong> ${diasConcluidos}</p>
      ${trilhaSalva}
    </div>

    <h2>Aulas da Faculdade</h2>
    <ul class="lista-aulas">${linhas}</ul>

    <h2>Backup</h2>
    <div class="linha">
      <button class="secundario" id="btn-exportar">Exportar progresso</button>
      <label class="botao secundario" for="arquivo-importar">Importar progresso</label>
      <input type="file" id="arquivo-importar" accept="application/json" hidden>
    </div>
    <p id="msg-backup" class="suave"></p>

    <h2>Histórico</h2>
    <ul>${historico}</ul>
  `;
}

function exportarProgresso() {
  const conteudo = JSON.stringify({ progresso: lerProgresso(), trilha: LS.get("areta-trilha", null) }, null, 2);
  const blob = new Blob([conteudo], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "areta-progresso.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importarProgresso(arquivo) {
  const leitor = new FileReader();
  leitor.onload = () => {
    const msg = document.getElementById("msg-backup");
    try {
      const dados = JSON.parse(leitor.result);
      if (!dados.progresso || typeof dados.progresso.aulas !== "object") {
        throw new Error("formato inválido");
      }
      salvarProgresso({ ...progressoVazio(), ...dados.progresso, migrado: true });
      if (dados.trilha) LS.set("areta-trilha", dados.trilha);
      msg.textContent = "Progresso importado.";
      render();
    } catch (erro) {
      msg.textContent = "Não foi possível importar: o arquivo não tem o formato do Estudo Penal.";
    }
  };
  leitor.readAsText(arquivo);
}

// ---------- Simulado diário ----------

let simuladoEstado = { fase: "inicio", perguntas: [], respostas: [] };

function simuladosFeitos() {
  return LS.get("areta-simulados", []);
}

function simuladosDeHoje() {
  const hoje = chaveData(new Date());
  return simuladosFeitos().filter((s) => s.data === hoje);
}

// Quantos dias seguidos, até hoje, tiveram pelo menos um simulado.
function sequenciaSimulados() {
  const dias = new Set(simuladosFeitos().map((s) => s.data));
  let total = 0;
  const dia = new Date();
  while (dias.has(chaveData(dia))) {
    total += 1;
    dia.setDate(dia.getDate() - 1);
  }
  return total;
}

// Sorteia 5 perguntas que ainda não apareceram. Usa as aulas estudadas, se houver perguntas suficientes.
function sortearSimulado() {
  const estudadas = aulasFeitas();
  let pool = BANCO_SIMULADO.filter((q) => estudadas.includes(q.aula));
  if (pool.length < 5) pool = BANCO_SIMULADO;

  let usados = LS.get("areta-simulado-usados", []);
  let disponiveis = pool.filter((q) => !usados.includes(q.id));
  if (disponiveis.length < 5) {
    usados = [];
    disponiveis = pool;
  }
  const escolhidas = embaralhar(disponiveis).slice(0, 5);
  LS.set("areta-simulado-usados", [...usados, ...escolhidas.map((q) => q.id)]);
  return escolhidas;
}

function comecarSimulado() {
  simuladoEstado = { fase: "quiz", perguntas: sortearSimulado(), respostas: [] };
}

function telaSimulado() {
  if (simuladoEstado.fase === "quiz") {
    const cards = simuladoEstado.perguntas.map((q, i) => `
      <div class="card borda">
        <strong>${i + 1}. ${esc(q.pergunta)}</strong>
        <div style="margin-top: 8px;">
          ${q.alternativas.map((alt, j) => `
            <label class="opcao"><input type="radio" name="sim-${i}" value="${j}"> ${esc(alt)}</label>`).join("")}
        </div>
      </div>`).join("");
    return `
      <h1>Simulado</h1>
      ${bloco("faculdade")}
      <p>5 perguntas sobre o que você estudou. Responda sem consultar.</p>
      ${cards}
      <button id="btn-sim-corrigir">Corrigir</button>`;
  }

  if (simuladoEstado.fase === "resultado") {
    const acertos = simuladoEstado.respostas.filter((r) => r.acertou).length;
    const total = simuladoEstado.respostas.length;
    const detalhes = simuladoEstado.respostas.map((r, i) => `
      <div class="card borda">
        <strong>${i + 1}. ${esc(r.pergunta)}</strong>
        <p>${r.acertou ? "Você acertou." : `Você marcou: ${esc(r.escolhida === null ? "nada" : r.alternativas[r.escolhida])}.`}</p>
        <p>Resposta certa: <strong>${esc(r.alternativas[r.correta])}</strong></p>
        <p class="suave">${esc(r.explicacao)}</p>
      </div>`).join("");
    return `
      <h1>Resultado: ${acertos}/${total}</h1>
      ${detalhes}
      <div class="linha">
        <button id="btn-sim-novo">Fazer outro simulado</button>
        <a class="botao secundario" href="#/inicio">Voltar ao início</a>
      </div>`;
  }

  const hojeFeitos = simuladosDeHoje();
  const ultimos = simuladosFeitos().slice(-7).reverse()
    .map((s) => `<li>${esc(s.data)}: ${s.acertos}/${s.total}</li>`).join("");
  return `
    <h1>Simulado do dia</h1>
    ${bloco("faculdade")}
    <div class="card">
      <p>${hojeFeitos.length
        ? `<strong>Hoje:</strong> simulado feito (${hojeFeitos[0].acertos}/${hojeFeitos[0].total}). Você pode fazer outro para treinar mais.`
        : "<strong>Hoje:</strong> ainda não foi feito. Faça pelo menos 1 simulado por dia."}</p>
      <p>Dias seguidos com simulado: <strong>${sequenciaSimulados()}</strong></p>
    </div>
    <p>As perguntas são sorteadas do que você já estudou e não se repetem até o banco inteiro ser usado.</p>
    <button id="btn-sim-comecar">${hojeFeitos.length ? "Fazer outro simulado" : "Fazer simulado de hoje"}</button>
    ${ultimos ? `<h2>Últimos resultados</h2><ul>${ultimos}</ul>` : ""}`;
}

// ---------- Teste de nível ----------

let nivelEstado = { fase: "inicio", perguntas: [], respostas: [] };

function embaralhar(lista) {
  return [...lista].sort(() => Math.random() - 0.5);
}

function comecarNivel() {
  nivelEstado = { fase: "quiz", perguntas: embaralhar(NIVEL).slice(0, 10), respostas: [] };
}

// Mensagem de meme conforme o número de acertos (de 0 a 10).
function memeNivel(acertos) {
  if (acertos <= 2) return "Meu Deus, ainda bem que você é só estudante: dá tempo de aprender!";
  if (acertos <= 4) return "Calma, todo mundo começa assim. Respira e vai para a próxima aula.";
  if (acertos <= 6) return "Meio caminho andado. Agora é só revisar o que você errou.";
  if (acertos <= 8) return "Já está com cara de quem vai arrasar na banca.";
  if (acertos === 9) return "Quase perfeito! Só faltou um detalhe, e a banca não vai pegar.";
  return "Traz a OAB que esse já tá formado!";
}

function telaNivel() {
  if (nivelEstado.fase === "quiz") {
    const cards = nivelEstado.perguntas.map((q, i) => `
      <div class="card borda">
        <strong>${i + 1}. ${esc(q.pergunta)}</strong>
        <div style="margin-top: 8px;">
          ${q.alternativas.map((alt, j) => `
            <label class="opcao"><input type="radio" name="nivel-${i}" value="${j}"> ${esc(alt)}</label>`).join("")}
        </div>
      </div>`).join("");
    return `
      <h1>Teste de nível</h1>
      ${bloco("faculdade")}
      <p>Responda sem consultar. Não é nota: é para ver onde você está.</p>
      ${cards}
      <button id="btn-nivel-ver">Ver meu nível</button>`;
  }

  if (nivelEstado.fase === "resultado") {
    const acertos = nivelEstado.respostas.filter((r) => r.acertou).length;
    const total = nivelEstado.perguntas.length;
    LS.set("areta-nivel", { acertos, total, data: new Date().toISOString() });
    const erros = nivelEstado.respostas.filter((r) => !r.acertou).map((r) => {
      const aula = AULAS.find((a) => a.id === r.aula);
      const marcada = r.escolhida === null ? "nada" : r.alternativas[r.escolhida];
      return `<li><strong>${esc(r.pergunta)}</strong><br>Você marcou: ${esc(marcada)}<br>Resposta certa: ${esc(r.alternativas[r.correta])}${aula ? ` · <a href="#/aulas/${aula.id}">Estudar: ${esc(aula.titulo)}</a>` : ""}</li>`;
    }).join("");
    return `
      <h1>Seu nível: ${acertos}/${total}</h1>
      <div class="card"><p style="font-size: 1.15rem;"><strong>${esc(memeNivel(acertos))}</strong></p></div>
      ${erros ? `<h2>O que revisar</h2><ul>${erros}</ul>` : "<p>Você acertou tudo!</p>"}
      <div class="linha">
        <button id="btn-nivel-refazer">Refazer teste</button>
        <a class="botao secundario" href="#/inicio">Voltar ao início</a>
      </div>`;
  }

  const ultimo = LS.get("areta-nivel", null);
  if (nivelPendente()) {
    return `
      <h1>Antes de começar: descubra seu nível</h1>
      ${bloco("faculdade")}
      <p>São 10 perguntas sobre o que o professor passou. Assim você vê o que já sabe e o que precisa estudar mais. Leva poucos minutos.</p>
      <div class="linha">
        <button id="btn-nivel-comecar">Fazer o teste</button>
        <button class="secundario" id="btn-nivel-pular">Pular por enquanto</button>
        <a class="botao secundario" href="#/trilha">Montar minha trilha</a>
      </div>`;
  }
  return `
    <h1>Descubra seu nível</h1>
    ${bloco("faculdade")}
    <p>São 10 perguntas sobre o que o professor passou. Responda para ver quanto você já sabe.</p>
    ${ultimo ? `<p>Seu último resultado: <strong>${ultimo.acertos}/${ultimo.total}</strong>.</p>` : ""}
    <button id="btn-nivel-comecar">Começar teste</button>`;
}

// Teste pendente: ainda não foi feito e a pessoa não pulou.
function nivelPendente() {
  return !LS.get("areta-nivel", null) && !LS.get("areta-nivel-pulado", false);
}

function telaNaoEncontrada() {
  return `<h1>Página não encontrada</h1><p><a href="#/inicio">Voltar ao início</a></p>`;
}

// ---------- Roteamento ----------

function rota() {
  const partes = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [aba, ...resto] = partes;
  if (!aba || aba === "inicio") {
    // Quem ainda não fez o teste de nível (e não pulou) cai nele antes da página inicial.
    if (nivelPendente()) return { aba: null, html: telaNivel };
    return { aba: "inicio", html: telaInicio };
  }
  if (aba === "trilha") return { aba, html: telaTrilha };
  if (aba === "faculdade") return { aba, html: telaFaculdade };
  if (aba === "complementar") return { aba, html: telaComplementar };
  if (aba === "progresso") return { aba, html: telaProgresso };
  if (aba === "nivel") return { aba: null, html: telaNivel };
  if (aba === "simulado") return { aba: "simulado", html: telaSimulado };
  if (aba === "aulas" && resto.length) {
    const aula = AULAS.find((a) => a.id === resto[0]);
    const secao = aula ? aula.secao : null;
    return { aba: secao, html: () => telaAula(resto[0]) };
  }
  if (aba === "glossario") return { aba, html: () => telaGlossario() };
  if (aba === "revisao") return { aba, html: telaRevisao };
  if (aba === "ensaio") return { aba, html: telaEnsaio };
  if (aba === "jurisprudencia") return { aba: "faculdade", html: () => telaJurisprudencia(resto[0]) };
  return { aba: null, html: telaNaoEncontrada };
}

// Seção "Minha conta" dentro do menu: sair e apagar conta.
function atualizarMenuConta() {
  const area = document.getElementById("menu-conta");
  if (!area) return;
  if (!nuvemDisponivel()) {
    area.innerHTML = `<h3>Minha conta</h3><p class="suave">A sincronização não está configurada. O progresso fica só neste aparelho.</p>`;
    return;
  }
  if (!nuvem.sessao) {
    area.innerHTML = `<h3>Minha conta</h3><p class="suave">Você não está conectado.</p>`;
    return;
  }
  const anonimo = Boolean(nuvem.sessao.user.is_anonymous);
  area.innerHTML = `
    <h3>Minha conta</h3>
    <p><strong>Acesso:</strong> ${anonimo ? "sem e-mail (neste aparelho)" : esc(nuvem.sessao.user.email)}</p>
    <p class="suave pequeno">O progresso fica salvo na nuvem nesta conta. Você pode sair ou apagar a conta e todos os dados quando quiser.</p>
    <div class="linha">
      <button class="secundario" id="btn-menu-sair">Sair da conta</button>
    </div>
    <div class="linha" style="margin-top: 12px;">
      <button id="btn-menu-apagar">Apagar minha conta</button>
    </div>
    <p id="msg-menu" class="suave"></p>`;
}

function abrirMenu(aberto) {
  document.getElementById("menu-lateral").hidden = !aberto;
  document.getElementById("menu-fundo").hidden = !aberto;
  document.getElementById("btn-menu").setAttribute("aria-expanded", String(aberto));
}

// Com a nuvem configurada, o site só abre depois de entrar (com ou sem e-mail).
function precisaEntrar() {
  return nuvemDisponivel() && nuvem.pronto && !nuvem.sessao;
}

// Tela de login: só a logo e o formulário. Os botões usam os mesmos ids de blocoNuvem.
// Estado da tela de entrada: "login" ou "criar". A mensagem fica guardada para sobreviver a redesenhos.
let entradaModo = "login";
let mensagemEntrada = null;

function telaEntrada() {
  return entradaModo === "criar" ? telaCriarConta() : telaEntradaLogin();
}

// Tela de criação de conta: a pessoa preenche tudo e só entra depois de confirmar o e-mail.
function telaCriarConta() {
  const msg = mensagemEntrada ? `<p class="${mensagemEntrada.tipo}">${esc(mensagemEntrada.texto)}</p>` : "";
  return `
    <div class="entrada">
      <img src="assets/logo.svg" alt="" class="logo-grande">
      <h1>Criar conta</h1>
      <div class="card entrada-form">
        <label for="novo-email">E-mail</label>
        <input type="email" id="novo-email" autocomplete="email">
        <label for="novo-senha">Senha</label>
        <input type="password" id="novo-senha" autocomplete="new-password">
        <p class="suave pequeno">Mínimo de 6 caracteres.</p>
        <label for="novo-senha2">Repita a senha</label>
        <input type="password" id="novo-senha2" autocomplete="new-password">
        <div class="linha" style="margin-top: 12px;">
          <button id="btn-criar-confirmar">Criar conta</button>
        </div>
        <p class="suave pequeno">Depois de criar, você recebe um e-mail para confirmar. Só depois de confirmar você consegue entrar.</p>
        <div class="linha" style="margin-top: 12px;">
          <button class="secundario" id="btn-voltar-login">Já tenho conta: voltar para entrar</button>
        </div>
        ${msg}
      </div>
    </div>`;
}

function telaEntradaLogin() {
  return `
    <div class="entrada">
      <img src="assets/logo.svg" alt="" class="logo-grande">
      <h1>ARETA CRIMINALIS</h1>
      <p class="suave">Estudo Penal</p>
      <div class="card entrada-form">
        <button id="btn-anonimo">Entrar sem e-mail</button>
        <p class="suave pequeno">Rápido. O progresso fica só neste aparelho.</p>
        <p class="suave centro">ou entre com e-mail</p>
        <label for="nuvem-email">E-mail</label>
        <input type="email" id="nuvem-email" autocomplete="email">
        <label for="nuvem-senha">Senha</label>
        <input type="password" id="nuvem-senha" autocomplete="current-password">
        <p class="suave pequeno">Para criar conta, a senha precisa ter pelo menos 6 caracteres.</p>
        <div class="linha" style="margin-top: 12px;">
          <button id="btn-entrar">Entrar</button>
          <button class="secundario" id="btn-criar">Criar conta</button>
        </div>
        <p class="suave pequeno">Com e-mail, o progresso fica salvo na nuvem e aparece em outros aparelhos. O e-mail serve só para login e recuperação de senha.</p>
        <p id="msg-nuvem" class="suave"></p>
      </div>
    </div>
  `;
}

function render() {
  // Sem login, a página mostra só a tela de entrada (sem abas nem rodapé).
  document.body.classList.toggle("entrada-ativa", precisaEntrar() || (nuvemDisponivel() && !nuvem.pronto));
  atualizarMenuConta();
  if (precisaEntrar()) {
    document.querySelectorAll(".abas a").forEach((a) => a.classList.remove("ativa"));
    app.innerHTML = telaEntrada();
    window.scrollTo(0, 0);
    ligarEventos();
    return;
  }
  if (nuvemDisponivel() && !nuvem.pronto) {
    app.innerHTML = `<p class="suave">Carregando...</p>`;
    return;
  }

  const { aba, html } = rota();
  document.querySelectorAll(".abas a").forEach((a) => {
    a.classList.toggle("ativa", a.dataset.aba === aba);
  });
  app.innerHTML = html();
  window.scrollTo(0, 0);
  ligarEventos();
}

function ligarEventos() {
  const btnGerar = document.getElementById("btn-gerar");
  if (btnGerar) {
    btnGerar.addEventListener("click", mostrarTrilha);
    const salvo = LS.get("areta-trilha", null);
    if (salvo && salvo.inicio && salvo.fim) mostrarTrilha();
  }

  const btnCrianca = document.getElementById("btn-crianca");
  if (btnCrianca) {
    btnCrianca.addEventListener("click", () => {
      const caixa = document.getElementById("crianca");
      caixa.hidden = !caixa.hidden;
      btnCrianca.setAttribute("aria-expanded", String(!caixa.hidden));
    });
  }

  const btnFeita = document.getElementById("btn-feita");
  if (btnFeita) {
    btnFeita.addEventListener("click", () => {
      const id = location.hash.split("/")[2];
      alternarFeita(id);
      render();
    });
  }

  const busca = document.getElementById("busca");
  if (busca) {
    busca.addEventListener("input", () => {
      document.getElementById("lista-glossario").innerHTML = listaGlossario(busca.value);
    });
  }

  const btnModelo = document.getElementById("btn-modelo");
  if (btnModelo) {
    btnModelo.addEventListener("click", () => {
      document.getElementById("modelo").classList.toggle("aberta");
    });
  }

  const btnOutra = document.getElementById("btn-outra");
  if (btnOutra) btnOutra.addEventListener("click", render);

  const btnSimComecar = document.getElementById("btn-sim-comecar");
  if (btnSimComecar) {
    btnSimComecar.addEventListener("click", () => {
      comecarSimulado();
      render();
    });
  }

  const btnSimCorrigir = document.getElementById("btn-sim-corrigir");
  if (btnSimCorrigir) {
    btnSimCorrigir.addEventListener("click", () => {
      simuladoEstado.respostas = simuladoEstado.perguntas.map((q, i) => {
        const marcada = document.querySelector(`input[name="sim-${i}"]:checked`);
        const escolhida = marcada ? Number(marcada.value) : null;
        return {
          pergunta: q.pergunta,
          alternativas: q.alternativas,
          correta: q.correta,
          explicacao: q.explicacao,
          escolhida,
          acertou: escolhida === q.correta
        };
      });
      simuladoEstado.fase = "resultado";
      const acertos = simuladoEstado.respostas.filter((r) => r.acertou).length;
      LS.set("areta-simulados", [
        ...simuladosFeitos(),
        { data: chaveData(new Date()), acertos, total: simuladoEstado.respostas.length }
      ]);
      render();
    });
  }

  const btnSimNovo = document.getElementById("btn-sim-novo");
  if (btnSimNovo) {
    btnSimNovo.addEventListener("click", () => {
      comecarSimulado();
      render();
    });
  }

  const btnNivelComecar = document.getElementById("btn-nivel-comecar");
  if (btnNivelComecar) {
    btnNivelComecar.addEventListener("click", () => {
      comecarNivel();
      render();
    });
  }

  const btnNivelVer = document.getElementById("btn-nivel-ver");
  if (btnNivelVer) {
    btnNivelVer.addEventListener("click", () => {
      nivelEstado.respostas = nivelEstado.perguntas.map((q, i) => {
        const marcada = document.querySelector(`input[name="nivel-${i}"]:checked`);
        const escolhida = marcada ? Number(marcada.value) : null;
        return {
          pergunta: q.pergunta,
          alternativas: q.alternativas,
          correta: q.correta,
          escolhida,
          acertou: escolhida === q.correta,
          aula: q.aula
        };
      });
      nivelEstado.fase = "resultado";
      render();
    });
  }

  const btnNivelPular = document.getElementById("btn-nivel-pular");
  if (btnNivelPular) {
    btnNivelPular.addEventListener("click", () => {
      LS.set("areta-nivel-pulado", true);
      location.hash = "#/inicio";
      render();
    });
  }

  const btnNivelRefazer = document.getElementById("btn-nivel-refazer");
  if (btnNivelRefazer) {
    btnNivelRefazer.addEventListener("click", () => {
      comecarNivel();
      render();
    });
  }

  const btnComparar = document.getElementById("btn-comparar");
  if (btnComparar && ensaioAtual) {
    btnComparar.addEventListener("click", () => {
      const resposta = document.getElementById("resposta-aluno").value;
      document.getElementById("comparacao").innerHTML = resultadoComparacao(resposta, ensaioAtual.modelo);
    });
  }

  document.querySelectorAll(".btn-status").forEach((botao) => {
    botao.addEventListener("click", () => {
      alternarFeita(botao.dataset.aula);
      render();
    });
  });

  // Se a mensagem não estiver na tela, o texto é descartado em vez de gerar erro.
  const msgNuvem = () => document.getElementById("msg-nuvem") || { textContent: "" };

  const btnEntrar = document.getElementById("btn-entrar");
  if (btnEntrar) {
    btnEntrar.addEventListener("click", async () => {
      const erro = await entrarNuvem(document.getElementById("nuvem-email").value, document.getElementById("nuvem-senha").value);
      msgNuvem().textContent = erro || "Entrou. Progresso sincronizado.";
    });
  }

  const btnCriar = document.getElementById("btn-criar");
  if (btnCriar) {
    btnCriar.addEventListener("click", () => {
      entradaModo = "criar";
      mensagemEntrada = null;
      render();
    });
  }

  const btnVoltarLogin = document.getElementById("btn-voltar-login");
  if (btnVoltarLogin) {
    btnVoltarLogin.addEventListener("click", () => {
      entradaModo = "login";
      mensagemEntrada = null;
      render();
    });
  }

  const btnCriarConfirmar = document.getElementById("btn-criar-confirmar");
  if (btnCriarConfirmar) {
    btnCriarConfirmar.addEventListener("click", async () => {
      const email = document.getElementById("novo-email").value.trim();
      const senha = document.getElementById("novo-senha").value;
      const senha2 = document.getElementById("novo-senha2").value;
      if (!email || !senha) {
        mensagemEntrada = { texto: "Preencha o e-mail e a senha.", tipo: "aviso" };
        return render();
      }
      if (senha.length < 6) {
        mensagemEntrada = { texto: "A senha precisa ter pelo menos 6 caracteres.", tipo: "aviso" };
        return render();
      }
      if (senha !== senha2) {
        mensagemEntrada = { texto: "As senhas não são iguais.", tipo: "aviso" };
        return render();
      }

      mensagemEntrada = { texto: "Criando conta...", tipo: "suave" };
      render();

      // Quem entrou sem e-mail transforma a conta atual; senão, cria uma conta nova.
      const texto = nuvem.sessao && nuvem.sessao.user.is_anonymous
        ? await vincularEmail(email, senha)
        : await criarContaNuvem(email, senha);
      const erro = texto.startsWith("Não");
      mensagemEntrada = { texto: erro ? texto : "Conta criada. Confirme pelo link que enviamos ao seu e-mail e depois volte para entrar.", tipo: erro ? "aviso" : "sucesso" };

      // A pessoa só entra depois de confirmar o e-mail: encerra qualquer sessão aberta.
      await sairNuvem();
      render();
    });
  }

  const btnSincronizar = document.getElementById("btn-sincronizar");
  if (btnSincronizar) {
    btnSincronizar.addEventListener("click", async () => {
      const erro = await sincronizarAgora();
      msgNuvem().textContent = erro || "Sincronizado.";
    });
  }

  const btnAnonimo = document.getElementById("btn-anonimo");
  if (btnAnonimo) {
    btnAnonimo.addEventListener("click", async () => {
      const erro = await entrarAnonimo();
      msgNuvem().textContent = erro || "Entrou sem e-mail. Progresso sincronizado.";
    });
  }

  const btnVincular = document.getElementById("btn-vincular");
  if (btnVincular) {
    btnVincular.addEventListener("click", async () => {
      const texto = await vincularEmail(document.getElementById("nuvem-email").value, document.getElementById("nuvem-senha").value);
      msgNuvem().textContent = texto;
    });
  }

  const btnSair = document.getElementById("btn-sair");
  if (btnSair) {
    btnSair.addEventListener("click", async () => {
      const anonimo = Boolean(nuvem.sessao && nuvem.sessao.user.is_anonymous);
      if (anonimo && !confirm("Você está sem e-mail. Ao sair, não será possível voltar a este progresso. Deseja sair mesmo assim?")) return;
      await sairNuvem();
      render();
    });
  }

  const btnApagar = document.getElementById("btn-apagar");
  if (btnApagar) {
    btnApagar.addEventListener("click", async () => {
      if (!confirm("Apagar a conta e todo o progresso salvo na nuvem? Esta ação não pode ser desfeita. O progresso deste navegador também será apagado.")) return;
      const erro = await apagarConta();
      if (erro) {
        msgNuvem().textContent = erro;
        return;
      }
      LS.set(PROG_KEY, progressoVazio());
      LS.set("areta-trilha", null);
      render();
    });
  }

  const btnMenuSair = document.getElementById("btn-menu-sair");
  if (btnMenuSair) {
    btnMenuSair.addEventListener("click", async () => {
      const anonimo = Boolean(nuvem.sessao && nuvem.sessao.user.is_anonymous);
      if (anonimo && !confirm("Você está sem e-mail. Ao sair, não será possível voltar a este progresso. Deseja sair mesmo assim?")) return;
      await sairNuvem();
      abrirMenu(false);
      render();
    });
  }

  const btnMenuApagar = document.getElementById("btn-menu-apagar");
  if (btnMenuApagar) {
    btnMenuApagar.addEventListener("click", async () => {
      if (!confirm("Apagar a conta e todo o progresso salvo na nuvem? Esta ação não pode ser desfeita. O progresso deste aparelho também será apagado.")) return;
      const erro = await apagarConta();
      if (erro) {
        (document.getElementById("msg-menu") || { textContent: "" }).textContent = erro;
        return;
      }
      LS.set(PROG_KEY, progressoVazio());
      LS.set("areta-trilha", null);
      LS.set("areta-nivel", null);
      LS.set("areta-nivel-pulado", null);
      abrirMenu(false);
      render();
    });
  }

  const btnExportar = document.getElementById("btn-exportar");
  if (btnExportar) btnExportar.addEventListener("click", exportarProgresso);

  const arquivo = document.getElementById("arquivo-importar");
  if (arquivo) {
    arquivo.addEventListener("change", () => {
      if (arquivo.files[0]) importarProgresso(arquivo.files[0]);
    });
  }
}

// Marcar um dia da trilha como concluído (salvo no progresso).
document.addEventListener("change", (evento) => {
  const caixa = evento.target.closest("[data-dia]");
  if (!caixa) return;
  const p = lerProgresso();
  p.dias[caixa.dataset.dia] = caixa.checked;
  registrar(p, caixa.checked ? "concluiu o dia da trilha" : "desmarcou o dia da trilha", caixa.dataset.dia);
  salvarProgresso(p);

  const contador = document.getElementById("contador-dias");
  if (contador) {
    const total = document.querySelectorAll("[data-dia]").length;
    const feitos = document.querySelectorAll("[data-dia]:checked").length;
    contador.innerHTML = `<strong>Dias concluídos:</strong> ${feitos} de ${total}. Marque cada dia quando terminar; o progresso fica salvo.`;
  }
});

// Popover do glossário: clicar no termo mostra a explicação.
function mostrarPopover(alvo) {
  const entrada = GLOSSARIO[alvo.dataset.chave];
  if (!entrada) return;
  popover.innerHTML = `<strong>${esc(entrada.termo)}</strong>${esc(entrada.def)}`;
  popover.hidden = false;
  const caixa = alvo.getBoundingClientRect();
  const topo = Math.min(caixa.bottom + 8, window.innerHeight - 120);
  popover.style.top = `${topo}px`;
  popover.style.left = `${Math.max(8, Math.min(caixa.left, window.innerWidth - 336))}px`;
}

document.addEventListener("click", (evento) => {
  const termo = evento.target.closest(".termo");
  if (termo) {
    mostrarPopover(termo);
    return;
  }
  if (!popover.contains(evento.target)) popover.hidden = true;
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && evento.target.classList.contains("termo")) {
    mostrarPopover(evento.target);
  }
  if (evento.key === "Escape") popover.hidden = true;
});

window.addEventListener("hashchange", () => {
  popover.hidden = true;
  abrirMenu(false);
  render();
});

// Menu de três riscos: abre, fecha pelo botão, pelo fundo, e ao escolher uma seção.
document.getElementById("btn-menu").addEventListener("click", () => abrirMenu(true));
document.getElementById("btn-fechar-menu").addEventListener("click", () => abrirMenu(false));
document.getElementById("menu-fundo").addEventListener("click", () => abrirMenu(false));
document.querySelector(".menu-links").addEventListener("click", (evento) => {
  if (evento.target.closest("a")) abrirMenu(false);
});

if (!location.hash) location.hash = "#/inicio";
// Botão de tema claro/escuro. A escolha fica salva neste navegador.
const btnTema = document.getElementById("btn-tema");
function temaAtual() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function atualizarBotaoTema() {
  btnTema.textContent = temaAtual() === "dark" ? "Tema claro" : "Tema escuro";
}
btnTema.addEventListener("click", () => {
  const novo = temaAtual() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", novo);
  LS.set("areta-tema", novo);
  atualizarBotaoTema();
});
atualizarBotaoTema();

// Redesenha quando o login muda (entrou ou saiu) e na aba Progresso.
let ultimoLogado = null;
iniciarNuvem(() => {
  const logado = Boolean(nuvem.sessao);
  const mudou = logado !== ultimoLogado;
  ultimoLogado = logado;
  if (mudou || location.hash.startsWith("#/progresso")) render();
});
// Se a verificação de sessão demorar, libera o site depois de 5 segundos.
setTimeout(() => {
  if (!nuvem.pronto) {
    nuvem.pronto = true;
    render();
  }
}, 5000);
render();
