// Sincronização do progresso com o Supabase (login por e-mail e senha).
// O progresso local continua sendo a fonte imediata; a nuvem é usada para
// levar o progresso para outros aparelhos e não perder dados.

const nuvem = {
  cliente: null,
  sessao: null,
  pronto: false,
  timer: null,
  erro: null,
  aoMudar: () => {}
};

function nuvemDisponivel() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase);
}

function iniciarNuvem(aoMudar) {
  nuvem.aoMudar = aoMudar;
  if (!nuvemDisponivel()) return;
  nuvem.cliente = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  nuvem.cliente.auth.onAuthStateChange((evento, sessao) => {
    nuvem.sessao = sessao;
    nuvem.pronto = true;
    if (sessao) sincronizarAgora();
    nuvem.aoMudar();
  });
}

// Junta o progresso local e o da nuvem sem perder nada de nenhum dos dois.
function mesclarProgresso(local, remoto) {
  const aulas = { ...(remoto.aulas || {}) };
  Object.entries(local.aulas || {}).forEach(([id, valor]) => {
    const atual = aulas[id];
    if (!atual || new Date(valor.data) > new Date(atual.data)) aulas[id] = valor;
  });

  const dias = {};
  const chaves = new Set([...Object.keys(local.dias || {}), ...Object.keys(remoto.dias || {})]);
  chaves.forEach((k) => {
    dias[k] = Boolean((local.dias || {})[k] || (remoto.dias || {})[k]);
  });

  const vistos = new Set();
  const historico = [...(local.historico || []), ...(remoto.historico || [])]
    .filter((h) => {
      const chave = `${h.quando}|${h.acao}|${h.aula}`;
      if (vistos.has(chave)) return false;
      vistos.add(chave);
      return true;
    })
    .sort((a, b) => new Date(b.quando) - new Date(a.quando))
    .slice(0, 200);

  return { aulas, dias, historico, migrado: true };
}

async function entrarNuvem(email, senha) {
  if (!nuvem.cliente) return "Sincronização não configurada.";
  const { error } = await nuvem.cliente.auth.signInWithPassword({ email, password: senha });
  return error ? `Não foi possível entrar: ${error.message}` : null;
}

async function criarContaNuvem(email, senha) {
  if (!nuvem.cliente) return "Sincronização não configurada.";
  const { error } = await nuvem.cliente.auth.signUp({ email, password: senha });
  return error ? `Não foi possível criar a conta: ${error.message}` : "Conta criada. Confira seu e-mail para confirmar, depois entre.";
}

async function sairNuvem() {
  if (nuvem.cliente) await nuvem.cliente.auth.signOut();
}

// Entra sem e-mail: o progresso fica ligado a este navegador.
async function entrarAnonimo() {
  if (!nuvem.cliente) return "Sincronização não configurada.";
  const { error } = await nuvem.cliente.auth.signInAnonymously();
  return error ? `Não foi possível entrar sem e-mail: ${error.message}` : null;
}

// Transforma a conta anônima em conta com e-mail, sem perder o progresso.
async function vincularEmail(email, senha) {
  if (!nuvem.cliente) return "Sincronização não configurada.";
  const { error } = await nuvem.cliente.auth.updateUser({ email, password: senha });
  return error ? `Não foi possível salvar o e-mail: ${error.message}` : "Confira seu e-mail para confirmar. Seu progresso continua o mesmo.";
}

// Apaga a conta e todos os dados do progresso (função apagar_minha_conta no banco).
async function apagarConta() {
  if (!nuvem.cliente) return "Sincronização não configurada.";
  const { error } = await nuvem.cliente.rpc("apagar_minha_conta");
  if (error) return `Não foi possível apagar a conta: ${error.message}`;
  await nuvem.cliente.auth.signOut();
  return null;
}

// Baixa o progresso da nuvem, mescla com o local e envia de volta.
async function sincronizarAgora() {
  if (!nuvem.cliente || !nuvem.sessao) return "Entre na sua conta para sincronizar.";
  const uid = nuvem.sessao.user.id;
  const { data, error } = await nuvem.cliente.from("progresso").select("data").eq("user_id", uid).maybeSingle();
  if (error) return `Erro ao sincronizar: ${error.message}`;

  const remoto = data && data.data ? data.data : {};
  const local = LS.get(PROG_KEY, progressoVazio());
  const unido = mesclarProgresso(local, remoto);
  LS.set(PROG_KEY, unido);

  const envio = await nuvem.cliente
    .from("progresso")
    .upsert({ user_id: uid, data: unido, updated_at: new Date().toISOString() });
  if (envio.error) return `Erro ao salvar na nuvem: ${envio.error.message}`;
  nuvem.aoMudar();
  return null;
}

// Envia alterações feitas no site com uma pequena espera, para não enviar a cada clique.
function agendarEnvioNuvem() {
  if (!nuvem.cliente || !nuvem.sessao) return;
  clearTimeout(nuvem.timer);
  nuvem.timer = setTimeout(sincronizarAgora, 800);
}
