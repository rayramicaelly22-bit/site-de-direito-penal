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
  return esc(texto).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, chave, rotulo) => {
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

function aulasFeitas() {
  return LS.get("areta-feitas", []);
}

function alternarFeita(id) {
  const feitas = aulasFeitas();
  const pos = feitas.indexOf(id);
  if (pos >= 0) feitas.splice(pos, 1);
  else feitas.push(id);
  LS.set("areta-feitas", feitas);
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
  const feitas = aulasFeitas().length;
  return `
    <h1>ARETA Mens Rea</h1>
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
      <strong>Seu progresso:</strong> ${feitas} de ${AULAS.length} aulas marcadas como estudadas.
    </div>
    <div class="linha">
      <a class="botao" href="#/trilha">Montar minha trilha</a>
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
        <ul>${itens}</ul>
      </div>`;
  }).join("");

  const aviso = resultado.faltam.length
    ? `<p class="aviso">Não coube no período: ${esc(resultado.faltam.join(", "))}. Aumente as horas por dia ou a data.</p>`
    : "";

  const reduzidas = resultado.reduzidas.length
    ? `<p>Para caber no período, estas aulas foram reduzidas: ${resultado.reduzidas.map((r) => `${esc(r.titulo)} (${esc(r.modo)})`).join("; ")}.</p>`
    : `<p>Todas as aulas serão estudadas por completo.</p>`;

  area.innerHTML = `
    <p>Total de estudo: ${totalHoras}h em ${resultado.dias.length} dias.</p>
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
  return `
    <h1>Ensaio oral</h1>
    ${bloco("faculdade")}
    <p>Responda em voz alta, como na atividade. Depois compare com o modelo.</p>
    <div class="card">
      <p class="suave">${esc(q.aula)}</p>
      <h2 style="margin-top: 0">${esc(q.pergunta)}</h2>
      <div class="linha">
        <button id="btn-modelo" class="secundario">Ver modelo</button>
        <button id="btn-outra">Outra pergunta</button>
      </div>
      <div class="resposta" id="modelo"><p>${marcar(q.modelo)}</p></div>
    </div>
  `;
}

function telaNaoEncontrada() {
  return `<h1>Página não encontrada</h1><p><a href="#/inicio">Voltar ao início</a></p>`;
}

// ---------- Roteamento ----------

function rota() {
  const partes = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [aba, ...resto] = partes;
  if (!aba || aba === "inicio") return { aba: "inicio", html: telaInicio };
  if (aba === "trilha") return { aba, html: telaTrilha };
  if (aba === "faculdade") return { aba, html: telaFaculdade };
  if (aba === "complementar") return { aba, html: telaComplementar };
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

function render() {
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
}

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
  render();
});

if (!location.hash) location.hash = "#/inicio";
render();
