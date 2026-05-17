// ── MODELO PADRÃO DE CONTRATO (usado por resetModeloContrato) ──────────────
const DB_DEFAULT_MODELO = `CONTRATO DE LOCAÇÃO RESIDENCIAL — {{IMOVEL_NOME}}

Pelo presente instrumento particular de contrato de locação residencial, de um lado:

LOCADOR (A): {{LOCADOR_NOME}}, {{LOCADOR_ESTADO_CIVIL}}, profissão {{LOCADOR_PROFISSAO}}, RG nº {{LOCADOR_RG}} e CPF {{LOCADOR_CPF}}, residente e domiciliado {{LOCADOR_ENDERECO}}.

LOCATÁRIO: {{LOCATARIO_NOME}}, {{LOCATARIO_ESTADO_CIVIL}}, PROFISSÃO {{LOCATARIO_PROFISSAO}}, RG {{LOCATARIO_RG}} e CPF {{LOCATARIO_CPF}}, residente e domiciliado no endereço do imóvel objeto do presente contrato.

As partes acima identificadas resolvem firmar o presente contrato de locação residencial, que se regerá pelas disposições da Lei do Inquilinato (Lei nº 8.245/1991) e pelas cláusulas abaixo.

CLÁUSULA 1 – DO IMÓVEL
O LOCADOR dá em locação ao LOCATÁRIO o imóvel residencial situado no endereço: {{IMOVEL_ENDERECO}}, destinado exclusivamente para fins residenciais, sendo proibida qualquer atividade comercial ou profissional no local sem autorização expressa do LOCADOR.

CLÁUSULA 2 – DO PRAZO DA LOCAÇÃO
O presente contrato de locação é celebrado pelo prazo determinado de {{CONTRATO_PRAZO_MESES}} ({{CONTRATO_PRAZO_EXTENSO}}) meses, com início em {{CONTRATO_INICIO}} e término em {{CONTRATO_TERMINO}}.
Findo o prazo estipulado, e não havendo manifestação expressa de qualquer das partes em sentido contrário, mediante notificação por escrito com antecedência mínima de 30 (trinta) dias, o contrato será automaticamente renovado por igual período de 12 (doze) meses, mantendo-se todas as cláusulas e condições ora pactuadas.

CLÁUSULA 3 – DO VALOR DO ALUGUEL
O valor mensal do aluguel será de {{CONTRATO_VALOR}} ({{CONTRATO_VALOR_EXTENSO}}).
O pagamento deverá ser realizado até o dia {{CONTRATO_DIA_VENCIMENTO}} de cada mês, via boleto bancário enviado todos os meses para o WhatsApp de número {{LOCATARIO_TELEFONE}}, caso mude o número deverá ser informado de imediato.

CLÁUSULA 4 – PAGAMENTO NA ENTRADA DO IMÓVEL
No ato da assinatura do contrato e entrega das chaves, o LOCATÁRIO pagará:
1º aluguel: {{CONTRATO_VALOR}}
1 caução (garantia): {{CONTRATO_CAUCAO_INFO}}
Total pago na entrada: {{CONTRATO_ENTRADA_TOTAL}} ({{CONTRATO_ENTRADA_TOTAL_EXTENSO}}). Pagamento realizado via boleto bancário.

CLÁUSULA 5 – DA CAUÇÃO
A caução em dinheiro será utilizada como garantia das obrigações contratuais.
O valor poderá ser utilizado para:
pagamento de débitos
reparo de danos no imóvel
multas contratuais
contas pendentes
Não havendo débitos, será devolvido ao LOCATÁRIO no prazo de até 15 dias após a entrega das chaves e vistoria final.

CLÁUSULA 6 – DO REAJUSTE
O valor do aluguel será reajustado anualmente utilizando qualquer dos seguintes índices:
IGP-M
IPCA
INPC
Na ausência de um dos índices, será aplicado outro índice oficial equivalente.

CLÁUSULA 7 – DA TAXA DE MANUTENÇÃO PREDIAL
Será cobrada taxa mensal de manutenção predial destinada a custear:
limpeza das áreas comuns
iluminação das áreas comuns
manutenção geral do prédio
O valor será de {{CONTRATO_TAXA_MANUTENCAO}} ({{CONTRATO_TAXA_MANUTENCAO_EXTENSO}}).

CLÁUSULA 8 – DA TAXA DE ÁGUA
Será cobrado do LOCATÁRIO o valor fixo mensal de {{CONTRATO_TAXA_AGUA}} ({{CONTRATO_TAXA_AGUA_EXTENSO}}) referente ao consumo de água.

CLÁUSULA 9 – DA ENERGIA ELÉTRICA
Cada unidade possui relógio individual de energia elétrica.
O consumo será calculado mensalmente conforme leitura em kWh, considerando:
consumo individual da unidade
energia proveniente do sistema de geração solar disponível no imóvel
O LOCATÁRIO deverá pagar o valor correspondente ao consumo registrado.

CLÁUSULA 10 – DA VISTORIA
Será realizada vistoria inicial do imóvel, com registro das condições de conservação.
Ao término do contrato será realizada vistoria final, devendo o imóvel ser devolvido nas mesmas condições em que foi recebido.

CLÁUSULA 11 – DA CONSERVAÇÃO DO IMÓVEL
O LOCATÁRIO se compromete a:
conservar o imóvel, manter limpeza e higiene e reparar danos causados por si ou por terceiros.

CLÁUSULA 12 – DAS ÁREAS COMUNS
É proibido:
colocar objetos, móveis ou caixas nas áreas comuns e obstruir corredores ou escadas.
Multa: R$ 50,00 por dia até a retirada do objeto.

CLÁUSULA 13 – DAS JANELAS E FACHADA
Fica proibido:
instalar varais na parte externa das janelas e modificar fachada ou estrutura do imóvel.

CLÁUSULA 14 – DO SOSSEGO E UTILIZAÇÃO DE SOM
Para preservar o sossego dos moradores:
limite de 55 decibéis entre 07h e 22h e limite de 45 decibéis entre 22h e 07h
Proibido:
festas frequentes e som alto que cause perturbação.
Multa: R$ 200,00 por ocorrência.

CLÁUSULA 15 – DA PROIBIÇÃO DE SUBLOCAÇÃO
É expressamente proibido sublocar, emprestar ou ceder o imóvel, total ou parcialmente, sem autorização escrita do LOCADOR.

CLÁUSULA 16 – DOS MORADORES
O imóvel deverá ser ocupado somente pelas seguintes pessoas:
{{MORADORES_LISTA}}
Qualquer novo morador deverá ser previamente autorizado pelo LOCADOR.

CLÁUSULA 17 – DA INSPEÇÃO DO IMÓVEL
O LOCADOR poderá realizar vistoria periódica, mediante aviso prévio de 48 horas, para verificar o estado de conservação do imóvel.

CLÁUSULA 18 – DO ATRASO NO PAGAMENTO
Em caso de atraso no pagamento:
multa de 10%
juros de 1% ao mês
correção monetária

CLÁUSULA 19 – MULTA POR RESCISÃO ANTECIPADA
Em caso de rescisão antecipada do presente contrato, por iniciativa de qualquer das partes, LOCADOR ou LOCATÁRIO, sem justo motivo legal, será devida multa rescisória equivalente a 1 (um) mês de aluguel vigente, proporcional ao período restante do contrato.

CLÁUSULA 20 – DO DESPEJO
O descumprimento das obrigações contratuais poderá resultar em ação de despejo, conforme legislação vigente.

CLÁUSULA 21 – DA ENTREGA DO IMÓVEL
Ao final da locação, o LOCATÁRIO deverá:
devolver o imóvel limpo, sem danos e com contas quitadas.

CLÁUSULA 22 – DO FORO
Fica eleito o foro da comarca de Lauro de Freitas - BA para resolver qualquer conflito decorrente deste contrato.

CLÁUSULA 23 – DO ATRASO REITERADO NO PAGAMENTO
Considera-se atraso reiterado quando o LOCATÁRIO deixar de efetuar o pagamento do aluguel e encargos por 02 (dois) meses consecutivos ou 03 (três) meses alternados dentro do período de 12 meses.
Nessa hipótese, o LOCADOR poderá:
considerar rescindido o presente contrato;
exigir a desocupação do imóvel no prazo de 30 dias;
adotar as medidas judiciais cabíveis para cobrança dos valores devidos e retomada do imóvel.

CLÁUSULA 24 – DA DESOCUPAÇÃO DO IMÓVEL
Em caso de rescisão contratual por descumprimento de cláusulas, atraso reiterado de pagamento ou infração às regras de convivência, o LOCATÁRIO deverá desocupar voluntariamente o imóvel no prazo máximo de 30 dias, contados da notificação por escrito do LOCADOR.
O descumprimento desta cláusula poderá ensejar ação judicial de despejo, conforme previsto na legislação vigente.

CLÁUSULA 25 – DA PROIBIÇÃO DE ANIMAIS
Fica proibida a permanência ou criação de animais de qualquer espécie no imóvel, salvo autorização expressa e por escrito do LOCADOR.
O descumprimento desta cláusula poderá resultar em:
notificação para retirada imediata do animal
aplicação da quebra do contrato de locação
aplicação de multa contratual equivalente a 01 (um) aluguel vigente em caso de descumprimento.

CLÁUSULA 26 – DA RESPONSABILIDADE POR VISITANTES
O LOCATÁRIO será integralmente responsável por quaisquer danos, perturbações, infrações ou prejuízos causados ao imóvel, às áreas comuns ou a terceiros por:
visitantes, familiares, convidados e prestadores de serviço autorizados pelo LOCATÁRIO.
Eventuais danos deverão ser reparados ou indenizados pelo LOCATÁRIO.

CLÁUSULA 27 – DA PROIBIÇÃO DE ATIVIDADES ILEGAIS
É expressamente proibida a utilização do imóvel para:
prática de atividades ilícitas ou ilegais
armazenamento de materiais ilícitos
comércio irregular ou clandestino
qualquer atividade que viole a legislação vigente ou a ordem pública.
Caso seja constatada qualquer dessas situações, o LOCADOR poderá:
rescindir imediatamente o contrato;
exigir a desocupação do imóvel;
comunicar os fatos às autoridades competentes.

CLÁUSULA 28 – DA VISTORIA COM REGISTRO FOTOGRÁFICO
No ato da entrega das chaves será realizada vistoria detalhada do imóvel, contendo descrição do estado de conservação das instalações, paredes, pisos, portas, janelas, equipamentos e demais itens existentes.
A vistoria poderá ser acompanhada de registro fotográfico ou audiovisual, que passará a fazer parte integrante deste contrato como anexo.
Ao término da locação será realizada vistoria final, devendo o LOCATÁRIO devolver o imóvel nas mesmas condições em que o recebeu, ressalvado o desgaste natural decorrente do uso normal.
Caso sejam constatados danos, o LOCATÁRIO ficará responsável pelo reparo ou ressarcimento correspondente.

CLÁUSULA 29 – DA PROIBIÇÃO DE ALTERAÇÕES ESTRUTURAIS
Fica expressamente proibido ao LOCATÁRIO realizar qualquer alteração estrutural no imóvel, incluindo, mas não se limitando a:
derrubar ou construir paredes
modificar instalações elétricas ou hidráulicas
alterar fachadas ou estrutura do prédio
instalar equipamentos que exijam alterações permanentes na estrutura
Qualquer modificação somente poderá ser realizada mediante autorização prévia e por escrito do LOCADOR.
Caso o LOCATÁRIO realize alteração sem autorização, deverá restaurar o imóvel ao estado original, arcando com todos os custos necessários.

CLÁUSULA 30 – DA COBRANÇA JUDICIAL E HONORÁRIOS ADVOCATÍCIOS
Em caso de inadimplência ou descumprimento das obrigações contratuais que resulte na necessidade de cobrança judicial ou extrajudicial, o LOCATÁRIO ficará responsável pelo pagamento de:
valores devidos de aluguel e encargos
multas e juros contratuais
honorários advocatícios fixados em 20% sobre o valor da dívida
custas judiciais e demais despesas processuais.

CLÁUSULA 31 – DA COMUNICAÇÃO ELETRÔNICA E POR WHATSAPP
As partes concordam que as comunicações relativas ao presente contrato poderão ser realizadas por meios eletrônicos, incluindo WhatsApp, e-mail e mensagens eletrônicas.
As notificações enviadas por WhatsApp ou e-mail serão consideradas válidas para fins de comunicação, aviso, notificação ou cobrança, desde que encaminhadas para os contatos informados pelas partes neste contrato.
Dados para comunicação:
Telefone do LOCADOR: {{LOCADOR_TELEFONE}}
Telefone do LOCATÁRIO: {{LOCATARIO_TELEFONE}}
E-mail do LOCADOR: {{LOCADOR_EMAIL}}
E-mail do LOCATÁRIO: {{LOCATARIO_EMAIL}}

ASSINATURAS

Local e data: {{CONTRATO_LOCAL_DATA}}

LOCADOR ______________________________________
{{LOCADOR_NOME}}

LOCATÁRIO _____________________________________
{{LOCATARIO_NOME}}

TESTEMUNHAS

____________________________________________
CPF:

____________________________________________
CPF:`;

// Atualiza template se for versão antiga (anterior a 31 cláusulas ou sem MORADORES_LISTA)
if (DB.config && (
  !DB.config.modeloContrato?.includes('CLÁUSULA 31') ||
  !DB.config.modeloContrato?.includes('{{MORADORES_LISTA}}') ||
  !DB.config.modeloContrato?.includes('{{CONTRATO_CAUCAO_INFO}}') ||
  !DB.config.modeloContrato?.includes('{{CONTRATO_TAXA_MANUTENCAO}}') ||
  DB.config.modeloContrato?.includes('WhatsApp de número {{LOCADOR_TELEFONE}}')
)) {
  DB.config.modeloContrato = DB_DEFAULT_MODELO;
  saveData();
}

// ── UTILS ──────────────────────────────────────────────
const fmt = v => v != null && v !== '' ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v) : '—';
const fmtDate = d => d ? new Date(d + 'T12:00:00').toLocaleDateString('pt-BR') : '—';
const today = () => new Date().toISOString().split('T')[0];

// ── ÍNDICES DE INFLAÇÃO (API Banco Central do Brasil) ───
let _indicesCache = null;

async function buscarIndicesInflacao() {
  if (_indicesCache) return _indicesCache;

  const fetchSerie = async (codigo) => {
    const resp = await fetch(
      `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/12?formato=json`,
      { cache: 'no-cache' }
    );
    if (!resp.ok) throw new Error(`Série ${codigo} indisponível`);
    const data = await resp.json();
    // Acumulado 12 meses: produto de (1 + taxa/100)
    const acumulado = data.reduce((acc, d) => {
      const taxa = parseFloat(String(d.valor).replace(',', '.')) / 100;
      return acc * (1 + taxa);
    }, 1) - 1;
    const ultimo = data[data.length - 1];
    return {
      acumulado: acumulado * 100,
      ultimoMes: parseFloat(String(ultimo.valor).replace(',', '.')),
      periodo: ultimo.data,
    };
  };

  const [igpm, ipca, inpc] = await Promise.all([
    fetchSerie(189),  // IGP-M (FGV)
    fetchSerie(433),  // IPCA  (IBGE)
    fetchSerie(188),  // INPC  (IBGE)
  ]);

  const todos = [
    { nome: 'IGP-M', desc: 'FGV',  cor: '#7c3aed', ...igpm },
    { nome: 'IPCA',  desc: 'IBGE', cor: '#0e9f6e', ...ipca },
    { nome: 'INPC',  desc: 'IBGE', cor: '#1a56db', ...inpc },
  ];
  // Melhor para o proprietário = maior acumulado
  const melhor = [...todos].sort((a, b) => b.acumulado - a.acumulado)[0];

  _indicesCache = { todos, melhor };
  return _indicesCache;
}

async function renderIndicesBar() {
  const grid = document.getElementById('indices-grid');
  if (!grid) return;

  try {
    const { todos, melhor } = await buscarIndicesInflacao();

    document.getElementById('indices-atualizado').textContent =
      `Ref.: ${todos[0].periodo} • atualizado ${new Date().toLocaleDateString('pt-BR')}`;

    grid.innerHTML = todos.map(ind => {
      const isMelhor = ind.nome === melhor.nome;
      return `
        <div class="indice-card ${isMelhor ? 'indice-melhor' : ''}">
          <div class="indice-topo">
            <span class="indice-nome">${ind.nome}</span>
            <span class="indice-desc">${ind.desc}</span>
            ${isMelhor ? '<span class="indice-star-badge">⭐ Maior reajuste</span>' : ''}
          </div>
          <div class="indice-valor" style="color:${ind.cor}">
            ${ind.acumulado.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}%
          </div>
          <div class="indice-detalhe">
            Acum. 12 meses &nbsp;|&nbsp; Último mês:
            <strong>${ind.ultimoMes.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}%</strong>
          </div>
        </div>`;
    }).join('');

    // Painel de reajuste para contratos vencendo
    renderReajusteContratos({ todos, melhor });

  } catch (e) {
    grid.innerHTML = `
      <div class="indice-erro">
        ⚠️ Não foi possível carregar os índices (verifique a conexão).
        <button class="btn btn-ghost btn-sm" onclick="_indicesCache=null;renderIndicesBar()">↻ Tentar novamente</button>
      </div>`;
    console.warn('Índices BCB:', e.message);
  }
}

function renderReajusteContratos({ todos, melhor }) {
  const section = document.getElementById('dash-reajuste-section');
  if (!section) return;

  const now = new Date();
  const em30 = new Date(); em30.setDate(em30.getDate() + 30);
  const vencendo = DB.contratos.filter(c => {
    if (!c.dataTermino || c.status !== 'ATIVO') return false;
    const dt = new Date(c.dataTermino + 'T12:00:00');
    return dt >= now && dt <= em30;
  }).sort((a, b) => a.dataTermino.localeCompare(b.dataTermino));

  if (vencendo.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';

  const cardsHtml = vencendo.map(c => {
    const atual = c.valorMensal || 0;
    const linhas = todos.map(ind => {
      const novo  = atual * (1 + ind.acumulado / 100);
      const delta = novo - atual;
      const isMelhor = ind.nome === melhor.nome;
      return `
        <div class="reaj-linha ${isMelhor ? 'reaj-melhor' : ''}">
          <span class="reaj-indice" style="color:${ind.cor}">${ind.nome}</span>
          <span class="reaj-pct">${ind.acumulado.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}%</span>
          <span class="reaj-seta">→</span>
          <span class="reaj-novo">${fmt(novo)}</span>
          <span class="reaj-delta">+${fmt(delta)}/mês</span>
          ${isMelhor ? '<span class="reaj-recomendado">✔ Recomendado</span>' : ''}
          <button class="btn btn-primary btn-sm reaj-btn-renovar"
                  onclick="openRenovacao(${c.id}, ${ind.acumulado.toFixed(2)})">
            🔄 Renovar com ${ind.nome}
          </button>
        </div>`;
    }).join('');
    return `
      <div class="reaj-card">
        <div class="reaj-card-header">
          <div>
            <strong>${c.codigo}</strong>
            <span class="reaj-imovel">${c.imovel}</span>
            <span class="reaj-inquilino">${c.inquilino || ''}</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            <div class="reaj-atual-wrap">
              <span class="reaj-atual-label">Aluguel atual</span>
              <span class="reaj-atual-val">${fmt(atual)}/mês</span>
            </div>
            <button class="btn btn-ghost btn-sm" onclick="openRenovacao(${c.id})">🔄 Renovar manualmente</button>
          </div>
        </div>
        ${linhas}
      </div>`;
  }).join('');

  section.innerHTML = `
    <div class="reaj-section-header">
      <h3>💡 Sugestão de Reajuste — Contratos a Vencer em 30 Dias</h3>
      <span class="reaj-section-sub">Melhor índice: <strong style="color:#7c3aed">${melhor.nome} (${melhor.acumulado.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}%)</strong></span>
    </div>
    <div class="reaj-cards-wrap">${cardsHtml}</div>`;
}

function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  setTimeout(() => t.className = 'toast', 2800);
}

function confirm_(msg) { return window.confirm(msg); }

function _validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let s = 0;
  for (let i = 0; i < 9; i++) s += +cpf[i] * (10 - i);
  let r = (s * 10) % 11; if (r >= 10) r = 0;
  if (r !== +cpf[9]) return false;
  s = 0;
  for (let i = 0; i < 10; i++) s += +cpf[i] * (11 - i);
  r = (s * 10) % 11; if (r >= 10) r = 0;
  return r === +cpf[10];
}

function _validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, '');
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  const calc = (n) => {
    let s = 0, p = n - 7;
    for (let i = 0; i < n; i++) { s += +cnpj[i] * p--; if (p < 2) p = 9; }
    const r = s % 11; return r < 2 ? 0 : 11 - r;
  };
  return calc(12) === +cnpj[12] && calc(13) === +cnpj[13];
}

function _fieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('field-error'); el.focus(); el.addEventListener('input', () => el.classList.remove('field-error'), { once: true }); }
  toast(msg, 'error');
}

function valorPorExtenso(valor) {
  if (!valor || valor === 0) return 'zero reais';
  const n = Math.round(Math.abs(valor) * 100);
  const reais = Math.floor(n / 100);
  const cts   = n % 100;

  const uni = ['','um','dois','três','quatro','cinco','seis','sete','oito','nove',
    'dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'];
  const dez = ['','','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
  const cen = ['','cem','duzentos','trezentos','quatrocentos','quinhentos',
    'seiscentos','setecentos','oitocentos','novecentos'];

  function escreve(n) {
    if (n === 0) return '';
    if (n < 20) return uni[n];
    if (n < 100) { const d = Math.floor(n/10), u = n%10; return dez[d]+(u?' e '+uni[u]:''); }
    if (n === 100) return 'cem';
    const c = Math.floor(n/100), r = n%100;
    return cen[c]+(r?' e '+escreve(r):'');
  }

  const partes = [];
  if (reais >= 1000) {
    const mil = Math.floor(reais/1000);
    partes.push(mil === 1 ? 'mil' : escreve(mil)+' mil');
  }
  const r = reais % 1000;
  if (r > 0) partes.push(escreve(r));
  const textoR = partes.join(' e ') + (reais === 1 ? ' real' : ' reais');
  if (cts > 0) {
    const textoC = escreve(cts)+(cts===1?' centavo':' centavos');
    return (reais > 0 ? textoR+' e '+textoC : textoC);
  }
  return textoR;
}

// ── AUTENTICAÇÃO ───────────────────────────────────────

let _currentUser = null;

const PAGINAS_PERM = [
  { id: 'dashboard',    label: 'Dashboard',     icon: '📊', acoes: [] },
  { id: 'imoveis',      label: 'Imóveis',        icon: '🏠', acoes: ['criar','editar','excluir'] },
  { id: 'inquilinos',   label: 'Inquilinos',     icon: '👥', acoes: ['criar','editar','excluir'] },
  { id: 'contratos',    label: 'Contratos',      icon: '📄', acoes: ['criar','editar','excluir'] },
  { id: 'financeiro',   label: 'Financeiro',     icon: '💰', acoes: ['criar','editar','excluir'] },
  { id: 'manutencao',   label: 'Manutenção',     icon: '🔧', acoes: ['criar','editar','excluir'] },
  { id: 'relatorios',   label: 'Relatórios',     icon: '📋', acoes: [] },
  { id: 'config',       label: 'Configurações',  icon: '⚙️',  acoes: ['editar'] },
];

// Verifica se o usuário logado pode executar uma ação em determinada página
// acao: 'ver' | 'criar' | 'editar' | 'excluir'
function _podeAcao(page, acao) {
  if (!_currentUser) return false;
  if (_currentUser.perfil === 'admin') return true;
  const p = _currentUser.permissoes;
  if (!p) return false;
  // Suporte ao formato antigo (array de strings)
  if (Array.isArray(p)) return acao === 'ver' ? p.includes(page) : false;
  // Novo formato (objeto com ações)
  return p[page]?.[acao] === true;
}

function _temPermissao(page) {
  if (!_currentUser) return false;
  if (_currentUser.perfil === 'admin') return true;
  if (_currentUser.perfil === 'inquilino') return page === 'portal';
  if (page === 'usuarios') return false;
  return _podeAcao(page, 'ver');
}

function initAuth() {
  const uid = sessionStorage.getItem('imoveis_uid');
  if (uid) {
    const u = DB.usuarios.find(x => x.id === parseInt(uid) && x.ativo);
    if (u) {
      _currentUser = u;
      document.getElementById('login-overlay').classList.add('hidden');
      _mostrarApp();
      return;
    }
    sessionStorage.removeItem('imoveis_uid');
  }
  document.getElementById('login-overlay').classList.remove('hidden');
  setTimeout(() => document.getElementById('login-usuario').focus(), 100);
}

function doLogin() {
  const usuario = document.getElementById('login-usuario').value.trim();
  const senha   = document.getElementById('login-senha').value;
  const errEl   = document.getElementById('login-error');
  errEl.textContent = '';
  const u = DB.usuarios.find(x =>
    x.usuario.toLowerCase() === usuario.toLowerCase() && x.senha === senha && x.ativo
  );
  if (!u) { errEl.textContent = 'Usuário ou senha inválidos'; return; }
  _currentUser = u;
  sessionStorage.setItem('imoveis_uid', u.id);
  document.getElementById('login-overlay').classList.add('hidden');
  _mostrarApp();
}

function logout() {
  _currentUser = null;
  sessionStorage.removeItem('imoveis_uid');
  document.getElementById('login-overlay').classList.remove('hidden');
  document.getElementById('login-overlay').style.opacity = '1';
  document.getElementById('login-senha').value = '';
  document.getElementById('login-usuario').value = '';
  document.getElementById('login-error').textContent = '';
  document.getElementById('topbar-user-dropdown').classList.remove('open');
  setTimeout(() => document.getElementById('login-usuario').focus(), 100);
}

function _mostrarApp() {
  const u = _currentUser;
  // Portal do inquilino — layout completamente diferente
  if (u.perfil === 'inquilino') {
    document.body.classList.add('modo-portal');
    document.getElementById('topbar-user-avatar').textContent = u.nome.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
    document.getElementById('topbar-user-name').textContent   = u.nome;
    document.getElementById('topbar-user-role').textContent   = 'Inquilino';
    navigate('portal');
    return;
  }
  document.body.classList.remove('modo-portal');
  // Atualiza topbar
  const initials = u.nome.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
  document.getElementById('topbar-user-avatar').textContent = initials;
  document.getElementById('topbar-user-name').textContent   = u.nome;
  document.getElementById('topbar-user-role').textContent   = u.perfil === 'admin' ? 'Administrador' : 'Usuário';
  // Mostra/oculta nav
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    const p = el.dataset.page;
    el.style.display = (p === 'usuarios' ? u.perfil === 'admin' : _temPermissao(p)) ? '' : 'none';
  });
  // Mostra/oculta botões de criar por página
  [
    { btn: 'btn-criar-imoveis',    page: 'imoveis'    },
    { btn: 'btn-criar-inquilinos', page: 'inquilinos' },
    { btn: 'btn-criar-contratos',  page: 'contratos'  },
    { btn: 'btn-criar-financeiro', page: 'financeiro' },
    { btn: 'btn-criar-manutencao', page: 'manutencao' },
  ].forEach(({btn, page}) => {
    const el = document.getElementById(btn);
    if (el) el.style.display = _podeAcao(page, 'criar') ? '' : 'none';
  });

  // Navega para primeira página acessível
  const first = PAGINAS_PERM.find(p => _temPermissao(p.id));
  navigate(u.perfil === 'admin' ? 'dashboard' : (first?.id || 'dashboard'));
}

function toggleUserDropdown() {
  document.getElementById('topbar-user-dropdown').classList.toggle('open');
}

document.addEventListener('click', e => {
  if (!document.getElementById('topbar-user-btn')?.contains(e.target))
    document.getElementById('topbar-user-dropdown')?.classList.remove('open');
});

// ── NAVEGAÇÃO ──────────────────────────────────────────

const showPage = (p) => navigate(p);

function navigate(page) {
  if (!_temPermissao(page) && page !== 'usuarios' && page !== 'portal') { toast('Sem permissão para esta seção', 'error'); return; }
  if (page === 'usuarios' && _currentUser?.perfil !== 'admin') { toast('Acesso restrito a administradores', 'error'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');
  document.getElementById('topbar-title').textContent = {
    dashboard: 'Dashboard', inquilinos: 'Inquilinos', imoveis: 'Imóveis',
    contratos: 'Contratos', financeiro: 'Financeiro', manutencao: 'Manutenção',
    relatorios: 'Relatórios', config: 'Configurações', usuarios: 'Usuários',
    portal: 'Meu Portal',
  }[page] || page;
  renderPage(page);
}

function renderPage(page) {
  if (page === 'dashboard')   renderDashboard();
  else if (page === 'inquilinos') renderInquilinos();
  else if (page === 'imoveis')    renderImoveis();
  else if (page === 'contratos')  renderContratos();
  else if (page === 'financeiro') renderFinanceiro();
  else if (page === 'manutencao') renderManutencao();
  else if (page === 'config')     renderConfig();
  else if (page === 'usuarios')   renderUsuarios();
  else if (page === 'portal')     renderPortal();
}

// ── DASHBOARD ──────────────────────────────────────────
function renderDashboard() {
  const total = DB.imoveis.length;
  const ocupados = DB.imoveis.filter(i => i.status === 'OCUPADO').length;
  const disponiveis = DB.imoveis.filter(i => i.status === 'DISPONÍVEL').length;
  const contratoAtivo = DB.contratos.filter(c => c.status === 'ATIVO').length;
  const receitaMensal = DB.contratos.filter(c => c.status === 'ATIVO').reduce((s, c) => s + c.valorMensal, 0);
  const receitaRecebida = DB.financeiro.reduce((s, f) => s + f.valorRecebido, 0);
  const manutPendente = DB.manutencao.filter(m => m.status !== 'Concluído').length;
  const pct = total > 0 ? Math.round((ocupados / total) * 100) : 0;

  // Cobranças pendentes: contratos ativos sem pagamento recebido no mês atual
  const now = new Date();
  const mesAtual = now.getMonth() + 1;
  const anoAtual = now.getFullYear();
  const cobrancasPendentes = DB.contratos.filter(c => c.status === 'ATIVO').filter(c => {
    return !DB.financeiro.some(f =>
      f.contrato === c.codigo &&
      f.valorRecebido > 0 &&
      (() => { const d = new Date(f.dataPagamento + 'T12:00:00'); return d.getMonth() + 1 === mesAtual && d.getFullYear() === anoAtual; })()
    );
  });

  // Pagamentos registrados vencidos (dataPagamento no passado, valorRecebido = 0)
  const todayStr = today();
  const pgtoVencidos = DB.financeiro.filter(f => f.dataPagamento < todayStr && f.valorRecebido === 0);

  const totalAlertas = cobrancasPendentes.length + pgtoVencidos.length;

  document.getElementById('dash-total-imoveis').textContent = total;
  document.getElementById('dash-ocupados').textContent = ocupados;
  document.getElementById('dash-disponiveis').textContent = disponiveis;
  document.getElementById('dash-contratos').textContent = contratoAtivo;
  document.getElementById('dash-receita').textContent = fmt(receitaMensal);
  document.getElementById('dash-recebido').textContent = fmt(receitaRecebida);
  document.getElementById('dash-manut').textContent = manutPendente;
  document.getElementById('dash-cobrancas').textContent = totalAlertas || '✓';
  const cardCob = document.getElementById('dash-cobrancas').closest('.card');
  cardCob.style.borderLeft = totalAlertas > 0 ? '4px solid var(--danger)' : '4px solid var(--success)';

  // Vistorias aguardando assinatura
  const vistSemAssinar = DB.inquilinos.filter(i =>
    Array.isArray(i.checklistFotos) && i.checklistFotos.some(ck => !ck.confirmadoEm)
  );
  const cardVistAssinar = document.getElementById('dash-vist-assinar')?.closest('.card');
  document.getElementById('dash-vist-assinar').textContent = vistSemAssinar.length || '✓';
  if (cardVistAssinar) cardVistAssinar.style.borderLeft = vistSemAssinar.length > 0 ? '4px solid #f97316' : '4px solid var(--success)';

  const dashVistSection = document.getElementById('dash-vist-assinar-section');
  const dashVistTbody   = document.getElementById('dash-vist-tbody');
  const dashVistThead   = document.getElementById('dash-vist-thead');
  if (dashVistSection) dashVistSection.style.display = vistSemAssinar.length > 0 ? '' : 'none';
  if (dashVistThead) dashVistThead.innerHTML = '<tr>' +
    '<th>Inquilino</th><th>Imóvel</th><th>Tipo de Vistoria</th><th>Data Vinculação</th><th>Situação</th><th></th>' +
  '</tr>';
  if (dashVistTbody) {
    if (vistSemAssinar.length === 0) {
      dashVistTbody.innerHTML = `<tr><td colspan="6"><div class="empty"><p>Nenhuma vistoria pendente de assinatura ✓</p></div></td></tr>`;
    } else {
      const rows = [];
      vistSemAssinar.forEach(inq => {
        inq.checklistFotos.filter(ck => !ck.confirmadoEm).forEach(ck => {
          const vinculadoEm = ck.vinculadoEm ? fmtDate(ck.vinculadoEm.substring(0, 10)) : '—';
          const totalItems  = (ck.items || []).length;
          const fotosOk     = (ck.items || []).filter(it => it.fotoData).length;
          rows.push(`<tr class="tr-ck-assinatura tr-link" onclick="showPage('inquilinos')">
            <td><strong>${inq.nome}</strong></td>
            <td>${ck.imovelNome || '—'}</td>
            <td><span class="badge badge-blue">${ck.tipo || 'Entrada'}</span></td>
            <td>${vinculadoEm}</td>
            <td><span class="badge-ck-aguardando">📝 Aguard. assinatura</span></td>
            <td><button class="btn btn-sm" style="background:#f97316;color:#fff;border:none" onclick="event.stopPropagation();showPage('inquilinos')">Ver inquilino</button></td>
          </tr>`);
        });
      });
      dashVistTbody.innerHTML = rows.join('');
    }
  }

  // Alertas de manutenção preventiva
  const prevAlertas = DB.manutencaoPreventiva.filter(item => {
    const st = _prevAlertStatus(item);
    return st === 'vencida' || st === 'alerta';
  });
  const cardPrev = document.getElementById('dash-prev-alertas')?.closest('.card');
  document.getElementById('dash-prev-alertas').textContent = prevAlertas.length || '✓';
  if (cardPrev) cardPrev.style.borderLeft = prevAlertas.length > 0 ? '4px solid var(--warning,#f59e0b)' : '4px solid var(--success)';

  const dashPrevSection = document.getElementById('dash-prev-section');
  const dashPrevTbody   = document.getElementById('dash-prev-tbody');
  const dashPrevThead   = document.getElementById('dash-prev-thead');
  if (dashPrevSection) dashPrevSection.style.display = prevAlertas.length > 0 ? '' : 'none';
  if (dashPrevThead) dashPrevThead.innerHTML = '<tr>' +
    _th('dash-prev','imovel','Imóvel') +
    _th('dash-prev','titulo','Serviço') +
    _th('dash-prev','periodicidade','Periodicidade') +
    _th('dash-prev','proximaExecucao','Próxima Exec.') +
    _thStatic('Situação') +
    _thStatic('') +
  '</tr>';
  if (dashPrevTbody) {
    let prevSorted = _sortState['dash-prev'] ? _aplicarSort(prevAlertas, 'dash-prev') : prevAlertas;
    dashPrevTbody.innerHTML = prevSorted.map(item => {
      const st = _prevAlertStatus(item);
      const period = PREV_PERIOD[item.periodicidade] || { label: item.periodicidade };
      const periodLabel = item.periodicidade === 'personalizado' ? `${item.intervaloDias||'?'}d` : period.label;
      let badge;
      if (st === 'vencida') {
        const dias = Math.abs(Math.ceil((new Date(item.proximaExecucao+'T12:00:00') - new Date()) / 86400000));
        badge = `<span class="badge badge-red">⚠️ Vencida há ${dias}d</span>`;
      } else {
        const dias = Math.ceil((new Date(item.proximaExecucao+'T12:00:00') - new Date()) / 86400000);
        badge = `<span class="badge badge-yellow">⏰ Em ${dias}d</span>`;
      }
      return `<tr class="tr-vencido tr-link" onclick="showPage('manutencao')">
        <td>${item.imovel || '—'}</td>
        <td><strong>${item.titulo}</strong></td>
        <td><span class="badge badge-blue">${periodLabel}</span></td>
        <td>${item.proximaExecucao ? fmtDate(item.proximaExecucao) : '—'}</td>
        <td>${badge}</td>
        <td><button class="btn btn-success btn-sm" onclick="event.stopPropagation();openExecucaoPrev(${item.id})">✅ Executar</button></td>
      </tr>`;
    }).join('');
  }

  // Ocupação ring
  const ring = document.getElementById('occ-ring');
  ring.style.setProperty('--pct', pct + '%');
  document.getElementById('occ-pct').textContent = pct + '%';
  document.getElementById('occ-ocupados').textContent = ocupados;
  document.getElementById('occ-disponiveis').textContent = disponiveis;

  // Contratos por vencer (30 dias) — com urgência
  const em7  = new Date(); em7.setDate(em7.getDate() + 7);
  const em30 = new Date(); em30.setDate(em30.getDate() + 30);
  let vencendo = DB.contratos
    .filter(c => {
      if (!c.dataTermino || c.status !== 'ATIVO') return false;
      const dt = new Date(c.dataTermino + 'T12:00:00');
      return dt >= now && dt <= em30;
    });
  // sort padrão por data; override pelo _sortState se usuário clicou
  if (_sortState['dash-venc']) {
    vencendo = _aplicarSort(vencendo, 'dash-venc');
  } else {
    vencendo = vencendo.sort((a, b) => a.dataTermino.localeCompare(b.dataTermino));
  }

  const theadVenc = document.getElementById('dash-venc-thead');
  if (theadVenc) theadVenc.innerHTML = '<tr>' +
    _th('dash-venc','codigo','Código') +
    _th('dash-venc','imovel','Imóvel') +
    _th('dash-venc','inquilino','Inquilino') +
    _th('dash-venc','dataTermino','Vencimento') +
    _thStatic('Restam') +
    _thStatic('Renovar') +
  '</tr>';

  const tbodyVenc = document.getElementById('dash-vencendo');
  if (vencendo.length === 0) {
    tbodyVenc.innerHTML = `<tr><td colspan="6"><div class="empty"><p>Nenhum contrato vencendo nos próximos 30 dias ✓</p></div></td></tr>`;
  } else {
    tbodyVenc.innerHTML = vencendo.map(c => {
      const dt = new Date(c.dataTermino + 'T12:00:00');
      const dias = Math.ceil((dt - now) / 86400000);
      const urgente = dt <= em7;
      const badgeClass = urgente ? 'badge-red' : 'badge-yellow';
      const rowClass  = urgente ? 'tr-urgente' : 'tr-proximo';
      return `
        <tr class="${rowClass}">
          <td><strong>${c.codigo}</strong></td>
          <td>${c.imovel}</td>
          <td>${c.inquilino || '—'}</td>
          <td><span class="badge ${badgeClass}">${fmtDate(c.dataTermino)}</span></td>
          <td><span class="dias-restantes ${urgente ? 'dias-urgente' : 'dias-proximo'}">${dias}d</span></td>
          <td><button class="btn btn-primary btn-sm" onclick="openRenovacao(${c.id})">🔄 Renovar</button></td>
        </tr>`;
    }).join('');
  }

  // Cobranças pendentes — tabela de alertas
  const theadCobr = document.getElementById('dash-cobr-thead');
  if (theadCobr) theadCobr.innerHTML = '<tr>' +
    _th('dash-cobr','contrato','Contrato') +
    _th('dash-cobr','imovel','Imóvel') +
    _th('dash-cobr','inquilino','Inquilino') +
    _th('dash-cobr','valor','Valor') +
    _thStatic('Período') +
    _thStatic('Situação') +
    _thStatic('') +
  '</tr>';

  const tbodyCob = document.getElementById('dash-cobrancas-tbody');
  // Normaliza ambas as fontes num array comum para poder ordenar
  const periodo = `${MESES[mesAtual - 1]}/${anoAtual}`;
  let cobItems = [
    ...cobrancasPendentes.map(c => ({
      _tipo: 'sem_pgto', _id: null, _cid: c.id,
      contrato: c.codigo, imovel: c.imovel,
      inquilino: c.inquilino || '—', valor: c.valorMensal,
      _periodoStr: periodo, _dataVenc: '',
    })),
    ...pgtoVencidos.map(f => {
      const d = new Date(f.dataPagamento + 'T12:00:00');
      return {
        _tipo: 'vencido', _id: f.id, _cid: null,
        contrato: f.contrato, imovel: '—',
        inquilino: f.inquilino || '—', valor: f.valorContrato,
        _periodoStr: `${MESES[d.getMonth()]}/${d.getFullYear()}`,
        _dataVenc: f.dataPagamento,
      };
    }),
  ];
  cobItems = _aplicarSort(cobItems, 'dash-cobr');

  const linhasCobr = cobItems.map(item => {
    if (item._tipo === 'sem_pgto') {
      return `
      <tr class="tr-vencido tr-link" title="Clique para registrar pagamento" onclick="irParaFinanceiro(null,'${item.contrato}')">
        <td><strong>${item.contrato}</strong></td>
        <td>${item.imovel}</td>
        <td>${item.inquilino}</td>
        <td><strong style="color:var(--danger)">${fmt(item.valor)}</strong></td>
        <td><span class="periodo-chip">${item._periodoStr}</span></td>
        <td><span class="badge badge-red">Sem pgto no mês</span></td>
        <td class="td-acao">➕ Registrar</td>
      </tr>`;
    } else {
      return `
      <tr class="tr-vencido tr-link" title="Clique para editar pagamento" onclick="irParaFinanceiro(${item._id})">
        <td><strong>${item.contrato}</strong></td>
        <td>${item.imovel}</td>
        <td>${item.inquilino}</td>
        <td><strong style="color:var(--danger)">${fmt(item.valor)}</strong></td>
        <td><span class="periodo-chip periodo-chip-vencido">${item._periodoStr}</span></td>
        <td><span class="badge badge-red">Vencido ${fmtDate(item._dataVenc)}</span></td>
        <td class="td-acao">✏️ Editar</td>
      </tr>`;
    }
  });
  tbodyCob.innerHTML = linhasCobr.length === 0
    ? `<tr><td colspan="7"><div class="empty"><div class="empty-icon" style="font-size:28px">✅</div><p>Nenhuma cobrança pendente no mês atual</p></div></td></tr>`
    : linhasCobr.join('');

  // Últimos pagamentos
  const theadPgto = document.getElementById('dash-pgto-thead');
  if (theadPgto) theadPgto.innerHTML = '<tr>' +
    _th('dash-pgto','dataPagamento','Data') +
    _th('dash-pgto','contrato','Contrato') +
    _th('dash-pgto','inquilino','Inquilino') +
    _th('dash-pgto','valorRecebido','Valor Recebido') +
  '</tr>';

  const pgtoBase = DB.financeiro.filter(f => f.valorRecebido > 0);
  let ultimos;
  if (_sortState['dash-pgto']) {
    ultimos = _aplicarSort(pgtoBase, 'dash-pgto');
  } else {
    ultimos = [...pgtoBase].reverse().slice(0, 10);
  }
  document.getElementById('dash-ultimos-pgtos').innerHTML = ultimos.length === 0
    ? `<tr><td colspan="4"><div class="empty"><p>Nenhum pagamento registrado</p></div></td></tr>`
    : ultimos.map(f => `
      <tr>
        <td>${fmtDate(f.dataPagamento)}</td>
        <td>${f.contrato}</td>
        <td>${f.inquilino || '—'}</td>
        <td><strong style="color:var(--success)">${fmt(f.valorRecebido)}</strong></td>
      </tr>`).join('');

  // Carrega índices de inflação de forma assíncrona
  renderIndicesBar();
}

// ── INQUILINOS ─────────────────────────────────────────
const DOC_TIPOS = {
  'RG':                    { icone: '🪪', cor: 'badge-blue'   },
  'CPF':                   { icone: '🔢', cor: 'badge-blue'   },
  'Comprovante de Renda':  { icone: '💼', cor: 'badge-green'  },
  'Holerite':              { icone: '📋', cor: 'badge-green'  },
  'Contrato de Trabalho':  { icone: '📝', cor: 'badge-yellow' },
  'Comp. de Residência':   { icone: '🏠', cor: 'badge-yellow' },
  'Outros':                { icone: '📎', cor: 'badge-gray'   },
};

let _inqDocsPendentes = [];
let _inqMoradoresPendentes = [];

function toggleTipoPessoa(tipo) {
  document.getElementById('inq-tipo-pessoa').value = tipo;
  document.getElementById('tipo-btn-fisica').classList.toggle('active', tipo === 'fisica');
  document.getElementById('tipo-btn-juridica').classList.toggle('active', tipo === 'juridica');
  document.querySelectorAll('.inq-pf-field').forEach(el => el.style.display = tipo === 'fisica' ? '' : 'none');
  document.querySelectorAll('.inq-pj-field').forEach(el => el.style.display = tipo === 'juridica' ? '' : 'none');
  document.getElementById('inq-label-nome').textContent = tipo === 'fisica' ? 'Nome Completo' : 'Razão Social';
  document.getElementById('inq-label-cpf').textContent  = tipo === 'fisica' ? 'CPF' : 'CNPJ';
  const cpfInput = document.getElementById('inq-campo-cpf');
  if (cpfInput) cpfInput.placeholder = tipo === 'fisica' ? '000.000.000-00' : '00.000.000/0000-00';
}

function renderMoradoresPendentes() {
  const lista = document.getElementById('inq-moradores-lista');
  if (!lista) return;
  if (_inqMoradoresPendentes.length === 0) {
    lista.innerHTML = '<p class="moradores-empty">Nenhum co-locatário adicionado</p>';
    return;
  }
  lista.innerHTML = _inqMoradoresPendentes.map((m, idx) => `
    <div class="morador-card">
      <div class="morador-card-avatar">${inqInitials(m.nome)}</div>
      <div class="morador-card-info">
        <div class="morador-card-nome">${m.nome}</div>
        <div class="morador-card-detalhe">${[m.profissao, m.estadoCivil, m.cpf].filter(Boolean).join(' · ') || 'Sem dados adicionais'}</div>
      </div>
      <button type="button" class="btn btn-danger btn-sm" onclick="removeMorador(${idx})">✕</button>
    </div>`).join('');
}

function showAddMorador() {
  document.getElementById('morador-add-form').style.display = 'block';
  document.getElementById('btn-add-morador').style.display  = 'none';
  document.getElementById('mor-nome').focus();
}

function cancelarAddMorador() {
  ['mor-nome','mor-cpf','mor-rg','mor-estadoCivil','mor-profissao','mor-celular']
    .forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('morador-add-form').style.display = 'none';
  document.getElementById('btn-add-morador').style.display  = '';
}

function confirmarAddMorador() {
  const nome = document.getElementById('mor-nome').value.trim();
  if (!nome) { toast('Informe o nome do co-locatário', 'error'); return; }
  _inqMoradoresPendentes.push({
    id: Date.now(),
    nome,
    cpf:         document.getElementById('mor-cpf').value.trim(),
    rg:          document.getElementById('mor-rg').value.trim(),
    estadoCivil: document.getElementById('mor-estadoCivil').value.trim(),
    profissao:   document.getElementById('mor-profissao').value.trim(),
    celular:     document.getElementById('mor-celular').value.trim(),
  });
  cancelarAddMorador();
  renderMoradoresPendentes();
}

function removeMorador(idx) {
  _inqMoradoresPendentes.splice(idx, 1);
  renderMoradoresPendentes();
}

function inqInitials(nome) {
  return nome.split(' ').slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

// ── Ordenação de colunas ────────────────────────────────
const _sortState = {}; // { page: { col, dir:'asc'|'desc' } }

function _sortBy(page, col) {
  const cur = _sortState[page];
  if (cur && cur.col === col) {
    cur.dir = cur.dir === 'asc' ? 'desc' : 'asc';
  } else {
    _sortState[page] = { col, dir: 'asc' };
  }
  ({ imo: renderImoveis, inq: renderInquilinos, ct: renderContratos,
     fin: renderFinanceiro, man: renderManutencao, mprev: renderManutencaoPreventiva,
     'dash-venc': renderDashboard, 'dash-cobr': renderDashboard, 'dash-pgto': renderDashboard,
     'dash-prev': renderDashboard })[page]?.();
}

function _aplicarSort(list, page) {
  const s = _sortState[page];
  if (!s) return list;
  return [...list].sort((a, b) => {
    let va = s.col === '_encargos' ? (a.valorMulta||0)+(a.valorMora||0)
           : s.col === '_statusPag' ? (a.baixaManual && (a.valorRecebido||0) >= (a.totalGeral||0) ? 'PAGO' : a.baixaManual ? 'PARCIAL' : 'PENDENTE')
           : a[s.col] ?? '';
    let vb = s.col === '_encargos' ? (b.valorMulta||0)+(b.valorMora||0)
           : s.col === '_statusPag' ? (b.baixaManual && (b.valorRecebido||0) >= (b.totalGeral||0) ? 'PAGO' : b.baixaManual ? 'PARCIAL' : 'PENDENTE')
           : b[s.col] ?? '';
    const na = parseFloat(va), nb = parseFloat(vb);
    if (!isNaN(na) && !isNaN(nb)) return s.dir === 'asc' ? na - nb : nb - na;
    va = String(va).toLowerCase(); vb = String(vb).toLowerCase();
    const cmp = va.localeCompare(vb, 'pt-BR');
    return s.dir === 'asc' ? cmp : -cmp;
  });
}

function _th(page, col, label) {
  const s = _sortState[page];
  const active = s?.col === col;
  const icon = active
    ? `<span style="font-size:11px;margin-left:4px;color:var(--primary)">${s.dir === 'asc' ? '↑' : '↓'}</span>`
    : `<span style="font-size:10px;margin-left:3px;opacity:.3">⇅</span>`;
  const style = active ? ' style="color:var(--primary)"' : '';
  return `<th${style} onclick="_sortBy('${page}','${col}')">${label}${icon}</th>`;
}

function _thStatic(label) { return `<th>${label}</th>`; }

function _filtrarPor(searchId, valor, renderFn) {
  const el = document.getElementById(searchId);
  if (!el) return;
  el.value = el.value.toLowerCase() === valor.toLowerCase() ? '' : valor;
  el.dispatchEvent(new Event('input'));
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  renderFn();
}

function setFilterPill(barId, value, renderFn) {
  document.querySelectorAll(`#${barId} .filter-pill`).forEach(p => p.classList.remove('active'));
  const target = document.querySelector(`#${barId} [data-filter="${value}"]`);
  if (target) target.classList.add('active');
  renderFn();
}

function _getActivePill(barId) {
  return document.querySelector(`#${barId} .filter-pill.active`)?.dataset.filter || 'todos';
}

function renderInquilinos() {
  const search = (document.getElementById('inq-search')?.value || '').toLowerCase();
  const statusFilter = _getActivePill('inq-filter-bar');

  // Helpers por inquilino
  const _temContratoAtivo  = i => DB.contratos.some(c => c.inquilino === i.nome && c.status === 'ATIVO');
  const _temChecklist      = i => Array.isArray(i.checklistFotos) && i.checklistFotos.length > 0;
  const _precisaVistoria   = i => _temContratoAtivo(i) && !_temChecklist(i);
  const _ckNaoAssinado     = i => _temChecklist(i) && i.checklistFotos.some(ck => !ck.confirmadoEm);

  let list = DB.inquilinos.filter(i =>
    i.nome.toLowerCase().includes(search) ||
    (i.cpf || '').toLowerCase().includes(search)
  );
  if (statusFilter === 'com-ativo') {
    list = list.filter(i => _temContratoAtivo(i));
  } else if (statusFilter === 'sem-ativo') {
    list = list.filter(i => !_temContratoAtivo(i));
  } else if (statusFilter === 'sem-vistoria') {
    list = list.filter(i => _precisaVistoria(i));
  } else if (statusFilter === 'sem-assinatura') {
    list = list.filter(i => _ckNaoAssinado(i));
  }

  // Contagens para banners
  const semVistoria    = DB.inquilinos.filter(i => _precisaVistoria(i)).length;
  const semAssinatura  = DB.inquilinos.filter(i => _ckNaoAssinado(i)).length;
  const alertEl = document.getElementById('inq-ck-alerta');
  if (alertEl) {
    let html = '';
    if (semVistoria > 0) {
      html += `
        <div class="inq-ck-banner">
          <span>⚠️ <strong>${semVistoria} inquilino${semVistoria > 1 ? 's' : ''}</strong> com contrato ativo sem checklist de vistoria vinculado</span>
          <button class="btn btn-sm" style="background:#92400e;color:#fff;border:none"
            onclick="setFilterPill('inq-filter-bar','sem-vistoria',renderInquilinos)">Ver pendentes</button>
        </div>`;
    }
    if (semAssinatura > 0) {
      html += `
        <div class="inq-ck-banner" style="background:#fff7ed;border-color:#fdba74;color:#c2410c;${semVistoria > 0 ? 'margin-top:6px' : ''}">
          <span>📝 <strong>${semAssinatura} checklist${semAssinatura > 1 ? 's' : ''}</strong> vinculado${semAssinatura > 1 ? 's' : ''} aguardando assinatura do inquilino</span>
          <button class="btn btn-sm" style="background:#c2410c;color:#fff;border:none"
            onclick="setFilterPill('inq-filter-bar','sem-assinatura',renderInquilinos)">Ver aguardando</button>
        </div>`;
    }
    alertEl.style.display = html ? '' : 'none';
    alertEl.innerHTML = html;
  }

  // Atualiza os pills com contadores
  const pillSem = document.querySelector('#inq-filter-bar [data-filter="sem-vistoria"]');
  if (pillSem) pillSem.textContent = semVistoria > 0 ? `⚠️ Sem vistoria (${semVistoria})` : '⚠️ Sem vistoria';
  const pillAss = document.querySelector('#inq-filter-bar [data-filter="sem-assinatura"]');
  if (pillAss) pillAss.textContent = semAssinatura > 0 ? `📝 Aguard. assinatura (${semAssinatura})` : '📝 Aguard. assinatura';

  list = _aplicarSort(list, 'inq');
  const _inqThead = document.getElementById('inq-thead');
  if (_inqThead) _inqThead.innerHTML = '<tr>' +
    _th('inq','nome','Inquilino') + _th('inq','celular','Celular') +
    _th('inq','email','E-mail') + _thStatic('Contratos') +
    _thStatic('Documentos') + _thStatic('Vistoria') + _thStatic('Ações') + '</tr>';

  document.getElementById('inq-tbody').innerHTML = list.length === 0
    ? `<tr><td colspan="8"><div class="empty"><div class="empty-icon">👤</div><p>Nenhum inquilino encontrado</p></div></td></tr>`
    : list.map(i => {
        const docs          = (i.documentos || []).length;
        const contratosAtivos = DB.contratos.filter(c => c.inquilino === i.nome && c.status === 'ATIVO').length;
        const isPJ          = i.tipoPessoa === 'juridica';
        const temAtivo      = contratosAtivos > 0;
        const temCk         = _temChecklist(i);
        const precisaVist   = temAtivo && !temCk;
        const naoAssinado   = temCk && i.checklistFotos.some(ck => !ck.confirmadoEm);

        // Coluna Vistoria
        let visitoriaCol;
        if (!temAtivo) {
          visitoriaCol = '<span style="color:var(--gray-300);font-size:12px">—</span>';
        } else if (!temCk) {
          visitoriaCol = `<span class="badge-ck-pendente">⚠️ Pendente</span>`;
        } else if (naoAssinado) {
          const total = i.checklistFotos.length;
          const assinados = i.checklistFotos.filter(ck => ck.confirmadoEm).length;
          visitoriaCol = `<span class="badge-ck-aguardando">📝 ${assinados}/${total} assinado${assinados !== 1 ? 's' : ''}</span>`;
        } else {
          const total = i.checklistFotos.length;
          visitoriaCol = `<span class="badge-ck-ok">✅ ${total} checklist${total > 1 ? 's' : ''}</span>`;
        }

        const rowClass = precisaVist ? 'tr-ck-pendente' : (naoAssinado ? 'tr-ck-assinatura' : '');
        const avatarExtra = precisaVist ? ' inq-avatar-warn' : (naoAssinado ? ' inq-avatar-assinatura' : '');

        return `
        <tr class="${rowClass}">
          <td>
            <div style="display:flex;align-items:center;gap:10px">
              <div class="inq-avatar${avatarExtra}">${inqInitials(i.nome)}</div>
              <div>
                <div style="font-weight:600">
                  <span class="filtro-click" onclick="_filtrarPor('inq-search',${JSON.stringify(i.nome)},renderInquilinos)" title="Filtrar por este inquilino">${i.nome}</span>
                  ${isPJ ? ' <span class="badge badge-orange" style="font-size:10px;vertical-align:middle">PJ</span>' : ''}
                </div>
                <div style="font-size:11px;color:var(--gray-400)">${i.cpf || (isPJ ? 'CNPJ não informado' : 'CPF não informado')}</div>
              </div>
            </div>
          </td>
          <td>${i.celular || '—'}</td>
          <td>${i.email || '—'}</td>
          <td>
            ${contratosAtivos > 0
              ? `<span class="badge badge-green">${contratosAtivos} ativo${contratosAtivos > 1 ? 's' : ''}</span>`
              : '<span class="badge badge-gray">Nenhum</span>'}
          </td>
          <td>
            ${docs > 0
              ? `<span class="badge badge-blue" title="${(i.documentos||[]).map(d=>d.tipo).join(', ')}">📎 ${docs} doc${docs > 1 ? 's' : ''}</span>`
              : '<span style="color:var(--gray-300);font-size:12px">Sem docs</span>'}
          </td>
          <td>${visitoriaCol}</td>
          <td>
            <div class="actions">
              <button class="btn btn-primary btn-sm" onclick="openInquilinoFicha(${i.id})">Ver Ficha</button>
              ${_podeAcao('inquilinos','editar') ? `<button class="btn btn-ghost btn-sm" onclick="openInquilino(${i.id})">Editar</button>` : ''}
              ${_podeAcao('inquilinos','excluir') ? `<button class="btn btn-danger btn-sm" onclick="deleteInquilino(${i.id})">Excluir</button>` : ''}
            </div>
          </td>
        </tr>`;
      }).join('');
}

// ── FICHA DO INQUILINO ─────────────────────────────────
function openInquilinoFicha(id) {
  const i = DB.inquilinos.find(x => x.id === id);
  if (!i) return;
  const contratos = DB.contratos.filter(c => c.inquilino === i.nome);
  const docs = i.documentos || [];

  const isPJ = i.tipoPessoa === 'juridica';
  document.getElementById('ficha-avatar').textContent    = inqInitials(i.nome);
  const fichaEl = document.getElementById('ficha-nome');
  fichaEl.textContent   = i.nome;
  fichaEl.dataset.id    = i.id;
  document.getElementById('ficha-cpf').textContent    = i.cpf || '—';

  // Seção Pessoa Jurídica
  const pjSec = document.getElementById('ficha-pj-section');
  if (pjSec) pjSec.style.display = isPJ ? '' : 'none';
  if (isPJ) {
    document.getElementById('ficha-pj-cnpj').textContent      = i.cpf               || '—';
    document.getElementById('ficha-pj-ie').textContent        = i.inscricaoEstadual || '—';
    document.getElementById('ficha-pj-rep').textContent       = i.nomeRepresentante || '—';
    document.getElementById('ficha-pj-rep-cpf').textContent   = i.cpfRepresentante  || '—';
    document.getElementById('ficha-pj-rep-cargo').textContent = i.cargoRepresentante|| '—';
  }
  document.getElementById('ficha-celular').textContent= i.celular || '—';
  document.getElementById('ficha-tel').textContent    = i.telefone || '—';
  document.getElementById('ficha-email').textContent  = i.email || '—';
  document.getElementById('ficha-obs').textContent    = i.observacoes || '—';

  // Contratos vinculados
  document.getElementById('ficha-contratos').innerHTML = contratos.length === 0
    ? '<p style="color:var(--gray-400);font-size:13px">Nenhum contrato vinculado</p>'
    : contratos.map(c => `
        <div class="ficha-contrato-row">
          <div>
            <strong>${c.codigo}</strong> — ${c.imovel}
            <div style="font-size:12px;color:var(--gray-400)">${fmtDate(c.dataInicio)} → ${fmtDate(c.dataTermino)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:700">${fmt(c.valorMensal)}<span style="font-size:11px;color:var(--gray-400)">/mês</span></div>
            <span class="badge ${c.status === 'ATIVO' ? 'badge-green' : c.status === 'ENCERRADO' ? 'badge-red' : 'badge-gray'}">${c.status}</span>
          </div>
        </div>`).join('');

  // Co-locatários
  const moradores = i.moradores || [];
  const fichaSecMor = document.getElementById('ficha-moradores-section');
  if (fichaSecMor) fichaSecMor.style.display = moradores.length > 0 ? '' : 'none';
  document.getElementById('ficha-moradores').innerHTML = moradores.map(m => `
    <div class="morador-card">
      <div class="morador-card-avatar">${inqInitials(m.nome)}</div>
      <div class="morador-card-info">
        <div class="morador-card-nome">${m.nome}</div>
        <div class="morador-card-detalhe">${[m.profissao, m.estadoCivil, m.cpf, m.celular].filter(Boolean).join(' · ') || ''}</div>
      </div>
    </div>`).join('');

  // Documentos
  document.getElementById('ficha-docs').innerHTML = docs.length === 0
    ? '<p style="color:var(--gray-400);font-size:13px">Nenhum documento anexado</p>'
    : docs.map(d => {
        const meta = DOC_TIPOS[d.tipo] || DOC_TIPOS['Outros'];
        return `
        <div class="ficha-doc-card">
          <div class="ficha-doc-icon">${meta.icone}</div>
          <div class="ficha-doc-info">
            <div class="ficha-doc-tipo"><span class="badge ${meta.cor}">${d.tipo}</span></div>
            <div class="ficha-doc-nome">${d.nome}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="viewDocInquilino(${id}, ${d.id})">Ver</button>
        </div>`;
      }).join('');

  // Checklists vinculados
  _renderInqChecklist(id);

  document.getElementById('modal-inq-ficha').classList.add('open');
}

// ── DOCUMENTOS DO INQUILINO ────────────────────────────
function renderDocsPendentes() {
  const lista = document.getElementById('inq-docs-lista');
  if (!lista) return;
  lista.innerHTML = _inqDocsPendentes.length === 0
    ? '<p class="docs-empty">Nenhum documento anexado</p>'
    : _inqDocsPendentes.map(d => {
        const meta = DOC_TIPOS[d.tipo] || DOC_TIPOS['Outros'];
        return `
        <div class="doc-item">
          <span class="doc-item-icon">${meta.icone}</span>
          <div class="doc-item-info">
            <span class="badge ${meta.cor}" style="font-size:10px">${d.tipo}</span>
            <span class="doc-item-nome">${d.nome}</span>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" onclick="viewDocPendente(${d.id})">Ver</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="removeDocPendente(${d.id})">✕</button>
        </div>`;
      }).join('');
}

function addDocInquilino() {
  const tipoSel = document.getElementById('inq-doc-tipo');
  const fileInp = document.getElementById('inq-doc-file');
  const tipo = tipoSel.value;
  const file = fileInp.files[0];
  if (!file) { toast('Selecione um arquivo', 'error'); return; }
  const MAX = 8 * 1024 * 1024;
  if (file.size > MAX) { toast('Arquivo muito grande (máx. 8 MB)', 'error'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _inqDocsPendentes.push({
      id: Date.now(),
      tipo,
      nome: file.name,
      mimeType: file.type,
      dados: e.target.result,
    });
    fileInp.value = '';
    renderDocsPendentes();
    toast('Documento adicionado!', 'success');
  };
  reader.readAsDataURL(file);
}

function removeDocPendente(docId) {
  _inqDocsPendentes = _inqDocsPendentes.filter(d => d.id !== docId);
  renderDocsPendentes();
}

function viewDocPendente(docId) {
  const d = _inqDocsPendentes.find(x => x.id === docId);
  if (!d) return;
  openBase64File(d.dados, d.mimeType);
}

function viewDocInquilino(inquilinoId, docId) {
  const i = DB.inquilinos.find(x => x.id === inquilinoId);
  const d = (i?.documentos || []).find(x => x.id === docId);
  if (!d) return;
  openBase64File(d.dados, d.mimeType);
}

function openBase64File(dados, mimeType) {
  const byteStr = atob(dados.split(',')[1]);
  const ab = new ArrayBuffer(byteStr.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i);
  const blob = new Blob([ab], { type: mimeType });
  window.open(URL.createObjectURL(blob), '_blank');
}

function openInquilino(id = null) {
  _inqDocsPendentes      = [];
  _inqMoradoresPendentes = [];
  const modal = document.getElementById('modal-inquilino');
  const form  = document.getElementById('form-inquilino');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-inq-title').textContent = id ? 'Editar Inquilino' : 'Novo Inquilino';
  cancelarAddMorador();
  const tipo = (id ? DB.inquilinos.find(x => x.id === id)?.tipoPessoa : null) || 'fisica';
  toggleTipoPessoa(tipo);
  if (id) {
    const i = DB.inquilinos.find(x => x.id === id);
    form.nome.value               = i.nome;
    form.cpf.value                = i.cpf               || '';
    form.rg.value                 = i.rg                || '';
    form.estadoCivil.value        = i.estadoCivil       || '';
    form.profissao.value          = i.profissao         || '';
    form.inscricaoEstadual.value  = i.inscricaoEstadual || '';
    form.nomeRepresentante.value  = i.nomeRepresentante || '';
    form.cpfRepresentante.value   = i.cpfRepresentante  || '';
    form.cargoRepresentante.value = i.cargoRepresentante|| '';
    form.celular.value            = i.celular           || '';
    form.telefone.value           = i.telefone          || '';
    form.email.value              = i.email             || '';
    form.observacoes.value        = i.observacoes       || '';
    _inqDocsPendentes             = JSON.parse(JSON.stringify(i.documentos || []));
    _inqMoradoresPendentes        = JSON.parse(JSON.stringify(i.moradores  || []));
  }
  const sel = document.getElementById('inq-doc-tipo');
  sel.innerHTML = Object.keys(DOC_TIPOS).map(t => `<option value="${t}">${t}</option>`).join('');
  renderDocsPendentes();
  renderMoradoresPendentes();
  renderCamposExtrasForm('inquilino', 'ce-form-inquilino', id ? DB.inquilinos.find(x => x.id === id) : null);
  modal.classList.add('open');
}

function saveInquilino() {
  const form = document.getElementById('form-inquilino');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const data = {
    tipoPessoa:          form.tipoPessoa.value || 'fisica',
    nome:                form.nome.value.trim(),
    cpf:                 form.cpf.value.trim(),
    rg:                  form.rg.value.trim(),
    estadoCivil:         form.estadoCivil.value.trim(),
    profissao:           form.profissao.value.trim(),
    inscricaoEstadual:   form.inscricaoEstadual.value.trim(),
    nomeRepresentante:   form.nomeRepresentante.value.trim(),
    cpfRepresentante:    form.cpfRepresentante.value.trim(),
    cargoRepresentante:  form.cargoRepresentante.value.trim(),
    celular:             form.celular.value.trim(),
    telefone:            form.telefone.value.trim(),
    email:               form.email.value.trim(),
    observacoes:         form.observacoes.value.trim(),
    documentos:          _inqDocsPendentes,
    moradores:           _inqMoradoresPendentes,
    camposExtras:        coletarCamposExtras('inquilino', form),
  };
  const tipoPessoa = form.tipoPessoa?.value || 'fisica';
  const cpfLimpo   = data.cpf.replace(/\D/g, '');
  const celLimpo   = data.celular.replace(/\D/g, '');

  if (!data.nome) {
    _fieldError('inq-campo-nome', 'Nome é obrigatório');
    return;
  }
  if (!cpfLimpo) {
    _fieldError('inq-campo-cpf', tipoPessoa === 'juridica' ? 'CNPJ é obrigatório' : 'CPF é obrigatório');
    return;
  }
  if (tipoPessoa === 'juridica') {
    if (!_validarCNPJ(cpfLimpo)) { _fieldError('inq-campo-cpf', 'CNPJ inválido — verifique os dígitos'); return; }
  } else {
    if (!_validarCPF(cpfLimpo)) { _fieldError('inq-campo-cpf', 'CPF inválido — verifique os dígitos'); return; }
  }
  if (!celLimpo) {
    _fieldError('inq-campo-celular', 'Celular é obrigatório');
    return;
  }

  if (id) {
    const idx = DB.inquilinos.findIndex(x => x.id === id);
    DB.inquilinos[idx] = { ...DB.inquilinos[idx], ...data };
  } else {
    DB.inquilinos.push({ id: nextId(DB.inquilinos), ...data });
    // Auto-criar acesso para o inquilino (CPF como login e senha)
    const novoInq  = DB.inquilinos[DB.inquilinos.length - 1];
    const jaExiste = DB.usuarios.find(u => u.usuario === cpfLimpo && u.perfil === 'inquilino');
    if (cpfLimpo && !jaExiste) {
      DB.usuarios.push({
        id:          nextId(DB.usuarios),
        nome:        data.nome,
        usuario:     cpfLimpo,
        senha:       cpfLimpo,
        perfil:      'inquilino',
        inquilinoId: novoInq.id,
        permissoes:  { portal: { ver: true } },
        ativo:       true,
      });
    }
  }
  saveData();
  closeModal('modal-inquilino');
  renderInquilinos();
  if (id) {
    toast('Inquilino atualizado!', 'success');
  } else if (cpfLimpo) {
    toast(`Inquilino cadastrado! Login criado — usuário: ${cpfLimpo} · senha: ${cpfLimpo}`, 'success');
  } else {
    toast('Inquilino cadastrado!', 'success');
  }
}

function deleteInquilino(id) {
  if (!confirm_('Excluir este inquilino?')) return;
  DB.inquilinos = DB.inquilinos.filter(x => x.id !== id);
  DB.usuarios   = DB.usuarios.filter(u => !(u.perfil === 'inquilino' && u.inquilinoId === id));
  saveData();
  renderInquilinos();
  toast('Inquilino excluído');
}

// ── IMÓVEIS ────────────────────────────────────────────
let _imoFotosPendentes = [];
let _predioFiltro = null;

// Comprime imagem via canvas (máx 1280px, JPEG 82%)
function comprimirImagem(file) {
  return new Promise(resolve => {
    const MAX = 1280, Q = 0.82;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w > MAX || h > MAX) {
        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
        else       { w = Math.round(w * MAX / h); h = MAX; }
      }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', Q));
    };
    img.src = url;
  });
}

function renderFotosPendentes() {
  const grid = document.getElementById('imo-fotos-grid');
  if (!grid) return;
  if (_imoFotosPendentes.length === 0) {
    grid.innerHTML = '<p class="docs-empty">Nenhuma foto adicionada</p>';
    return;
  }
  grid.innerHTML = _imoFotosPendentes.map(f => `
    <div class="foto-thumb-wrap">
      <img src="${f.dados}" class="foto-thumb" onclick="imoLightbox('${f.id}')" title="Clique para ampliar">
      <button type="button" class="foto-remove" onclick="removeFotoPendente('${f.id}')" title="Remover">✕</button>
      <div class="foto-nome">${f.nome}</div>
    </div>`).join('');
}

async function addFotosImovel(input) {
  const files = [...input.files];
  if (!files.length) return;
  const MAX_MB = 10;
  let adicionadas = 0;
  for (const file of files) {
    if (file.size > MAX_MB * 1024 * 1024) { toast(`"${file.name}" muito grande (máx ${MAX_MB}MB)`, 'error'); continue; }
    const dados = await comprimirImagem(file);
    _imoFotosPendentes.push({ id: String(Date.now() + Math.random()), nome: file.name, mimeType: 'image/jpeg', dados });
    adicionadas++;
  }
  input.value = '';
  renderFotosPendentes();
  if (adicionadas) toast(`${adicionadas} foto(s) adicionada(s)!`, 'success');
}

function removeFotoPendente(fotoId) {
  _imoFotosPendentes = _imoFotosPendentes.filter(f => f.id !== fotoId);
  renderFotosPendentes();
}

function imoLightbox(fotoId) {
  const f = _imoFotosPendentes.find(x => x.id === fotoId);
  if (f) abrirLightbox(f.dados, f.nome);
}

function abrirLightbox(src, titulo) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `
      <div class="lightbox-bg" onclick="fecharLightbox()"></div>
      <div class="lightbox-box">
        <button class="lightbox-close" onclick="fecharLightbox()">✕</button>
        <div class="lightbox-titulo" id="lb-titulo"></div>
        <img id="lb-img" src="" alt="">
      </div>`;
    document.body.appendChild(lb);
  }
  document.getElementById('lb-img').src   = src;
  document.getElementById('lb-titulo').textContent = titulo || '';
  lb.classList.add('open');
}

function fecharLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

// Download foto única
function downloadFoto(dados, nome) {
  const a = document.createElement('a');
  a.href     = dados;
  a.download = nome;
  a.click();
}

// Download todas as fotos como ZIP (JSZip)
async function downloadTodasFotos(imovelId) {
  const im = DB.imoveis.find(x => x.id === imovelId);
  const fotos = im?.fotos || [];
  if (!fotos.length) { toast('Nenhuma foto para baixar', 'error'); return; }
  if (typeof JSZip === 'undefined') { toast('Biblioteca ZIP não carregada', 'error'); return; }
  toast('Gerando ZIP…');
  const zip = new JSZip();
  const pasta = zip.folder(im.nome);
  fotos.forEach(f => {
    pasta.file(f.nome.replace(/[^\w.\-]/g, '_'), f.dados.split(',')[1], { base64: true });
  });
  const blob = await zip.generateAsync({ type: 'blob' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `${im.nome} - Fotos.zip`; a.click();
  URL.revokeObjectURL(url);
  toast('ZIP baixado!', 'success');
}

// ── FICHA DO IMÓVEL ────────────────────────────────────
function openImovelFicha(id) {
  const im = DB.imoveis.find(x => x.id === id);
  if (!im) return;
  const contratos = DB.contratos.filter(c => c.imovel === im.nome && c.status === 'ATIVO');

  // Header
  document.getElementById('ficha-imo-nome').textContent   = im.nome;
  document.getElementById('ficha-imo-id').dataset.imoId   = id;
  const badgeEl = document.getElementById('ficha-imo-status');
  badgeEl.textContent  = im.status;
  badgeEl.className    = `badge ${im.status === 'OCUPADO' ? 'badge-green' : im.status === 'EM MANUTENÇÃO' ? 'badge-yellow' : 'badge-blue'}`;

  // Detalhes
  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.textContent = val || '—'; };
  set('fi-tipo',      im.tipo);
  set('fi-end',       im.endereco);
  set('fi-bairro',    im.bairro);
  set('fi-cidade',    `${im.cidade} - ${im.uf}`);
  set('fi-cep',       im.cep);
  set('fi-andar',     im.andar);
  set('fi-medidor',   im.medidor);
  set('fi-aluguel',        fmt(im.valorAluguel));
  set('fi-taxa-agua',      im.taxaAgua       > 0 ? fmt(im.taxaAgua)       : '—');
  set('fi-taxa-manutencao',im.taxaManutencao > 0 ? fmt(im.taxaManutencao) : '—');
  set('fi-taxas',          im.taxasExtras    > 0 ? fmt(im.taxasExtras)    : '—');
  set('fi-total',      fmt(im.total));
  set('fi-obs',       im.observacoes);

  // Inquilino atual
  document.getElementById('fi-contratos').innerHTML = contratos.length === 0
    ? '<p style="color:var(--gray-400);font-size:13px">Sem contrato ativo</p>'
    : contratos.map(c => `
      <div class="ficha-contrato-row">
        <div>
          <strong>${c.codigo}</strong> — ${c.inquilino || '(sem inquilino)'}
          <div style="font-size:12px;color:var(--gray-400)">${fmtDate(c.dataInicio)} → ${fmtDate(c.dataTermino)}</div>
        </div>
        <strong>${fmt(c.valorMensal)}/mês</strong>
      </div>`).join('');

  // Fotos
  const fotos = im.fotos || [];
  const fotosEl = document.getElementById('fi-fotos-grid');
  if (fotos.length === 0) {
    fotosEl.innerHTML = '<p style="color:var(--gray-400);font-size:13px">Nenhuma foto cadastrada</p>';
    document.getElementById('fi-btn-zip').style.display = 'none';
  } else {
    document.getElementById('fi-btn-zip').style.display = '';
    document.getElementById('fi-btn-zip').onclick = () => downloadTodasFotos(id);
    fotosEl.innerHTML = fotos.map(f => `
      <div class="foto-ficha-wrap">
        <img src="${f.dados}" class="foto-ficha-img" onclick="abrirLightbox('${f.dados.replace(/'/g,"\\'")}','${f.nome.replace(/'/g,"\\'")}')">
        <div class="foto-ficha-actions">
          <button class="btn btn-ghost btn-sm" onclick="abrirLightbox('${f.dados.replace(/'/g,"\\'")}','${f.nome.replace(/'/g,"\\'")}')">🔍 Ver</button>
          <button class="btn btn-primary btn-sm" onclick="downloadFoto('${f.dados.replace(/'/g,"\\'")}','${f.nome.replace(/'/g,"\\'")}')">⬇ Baixar</button>
        </div>
        <div class="foto-nome">${f.nome}</div>
      </div>`).join('');
  }

  // Checklist resumo
  _renderFichaChecklistResumo(id);

  document.getElementById('modal-imo-ficha').classList.add('open');
}

function renderPredios() {
  if (!DB.predios) DB.predios = [];
  const grid = document.getElementById('predios-grid');
  if (!grid) return;
  if (DB.predios.length === 0) {
    grid.innerHTML = '<div style="color:var(--gray-400);font-size:13px;padding:8px">Nenhum prédio cadastrado. Clique em "+ Novo Prédio" para começar.</div>';
    return;
  }
  grid.innerHTML = DB.predios.map(p => {
    const unidades = DB.imoveis.filter(i => i.predioId === p.id);
    const ocupados = unidades.filter(i => i.status === 'OCUPADO').length;
    const ativo    = _predioFiltro === p.id;
    return `
      <div onclick="selecionarPredio(${p.id})" style="
        cursor:pointer;border:2px solid ${ativo ? 'var(--primary)' : 'var(--gray-200)'};
        border-radius:12px;padding:14px 18px;min-width:160px;background:${ativo ? 'var(--primary-light,#eff6ff)' : 'var(--white)'};
        transition:all .15s;display:flex;flex-direction:column;gap:4px">
        <div style="font-size:20px">🏢</div>
        <div style="font-weight:700;font-size:14px">${p.nome}</div>
        <div style="font-size:11px;color:var(--gray-400)">${p.cidade || ''}${p.uf ? ' - ' + p.uf : ''}</div>
        <div style="font-size:12px;margin-top:4px">
          <span style="color:var(--gray-500)">${unidades.length} unidade${unidades.length !== 1 ? 's' : ''}</span>
          ${ocupados > 0 ? `<span style="margin-left:6px;color:var(--green-600,#16a34a)">· ${ocupados} ocupada${ocupados !== 1 ? 's' : ''}</span>` : ''}
        </div>
        <div style="display:flex;gap:6px;margin-top:8px" onclick="event.stopPropagation()">
          ${_podeAcao('imoveis','editar') ? `<button class="btn btn-ghost btn-sm" onclick="openPredio(${p.id})">Editar</button>` : ''}
          ${_podeAcao('imoveis','excluir') ? `<button class="btn btn-danger btn-sm" onclick="deletePredio(${p.id})">Excluir</button>` : ''}
        </div>
      </div>`;
  }).join('');
}

function selecionarPredio(id) {
  _predioFiltro = (_predioFiltro === id) ? null : id;
  renderPredios();
  renderImoveis();
  const titulo = document.getElementById('imo-section-title');
  if (titulo) {
    if (_predioFiltro) {
      const p = (DB.predios || []).find(x => x.id === _predioFiltro);
      titulo.textContent = `Unidades — ${p?.nome || ''}`;
    } else {
      titulo.textContent = 'Todas as Unidades';
    }
  }
}

function openPredio(id = null) {
  if (!DB.predios) DB.predios = [];
  const modal = document.getElementById('modal-predio');
  const form  = document.getElementById('form-predio');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-predio-title').textContent = id ? 'Editar Prédio' : 'Novo Prédio';
  if (id) {
    const p = DB.predios.find(x => x.id === id);
    if (p) ['nome','endereco','bairro','cidade','uf','cep','observacoes'].forEach(k => {
      if (form[k]) form[k].value = p[k] ?? '';
    });
  }
  modal.classList.add('open');
}

function savePredio() {
  if (!DB.predios) DB.predios = [];
  const form = document.getElementById('form-predio');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const data = {
    nome:        form.nome.value.trim(),
    endereco:    form.endereco?.value.trim() || '',
    bairro:      form.bairro?.value.trim()   || '',
    cidade:      form.cidade?.value.trim()   || '',
    uf:          form.uf?.value.trim()       || '',
    cep:         form.cep?.value.trim()      || '',
    observacoes: form.observacoes?.value.trim() || '',
  };
  if (!data.nome) { toast('Nome do prédio é obrigatório', 'error'); return; }
  if (id) {
    const idx = DB.predios.findIndex(x => x.id === id);
    DB.predios[idx] = { ...DB.predios[idx], ...data };
  } else {
    DB.predios.push({ id: nextId(DB.predios), ...data });
  }
  saveData();
  closeModal('modal-predio');
  renderPredios();
  toast(id ? 'Prédio atualizado!' : 'Prédio cadastrado!', 'success');
}

function deletePredio(id) {
  const unidades = DB.imoveis.filter(i => i.predioId === id).length;
  const msg = unidades > 0
    ? `Este prédio tem ${unidades} unidade(s) vinculada(s). Deseja excluir mesmo assim?`
    : 'Excluir este prédio?';
  if (!confirm_(msg)) return;
  DB.predios = (DB.predios || []).filter(x => x.id !== id);
  if (_predioFiltro === id) { _predioFiltro = null; }
  saveData();
  renderPredios();
  renderImoveis();
  toast('Prédio excluído');
}

function preencherEnderecoPredio() {
  const form = document.getElementById('form-imovel');
  if (!form || form.dataset.id) return;
  const predioId = parseInt(form.elements['predioId']?.value);
  if (!predioId) return;
  const p = (DB.predios || []).find(x => x.id === predioId);
  if (!p) return;
  ['endereco','bairro','cidade','uf','cep'].forEach(k => {
    if (form[k] && !form[k].value && p[k]) form[k].value = p[k];
  });
}

function renderImoveis() {
  renderPredios();
  const search = (document.getElementById('imo-search')?.value || '').toLowerCase();
  const statusFilter = _getActivePill('imo-filter-bar');
  let list = DB.imoveis.filter(i =>
    i.nome.toLowerCase().includes(search) ||
    (i.cidade || '').toLowerCase().includes(search)
  );
  if (_predioFiltro) {
    list = list.filter(i => i.predioId === _predioFiltro);
  }
  if (statusFilter !== 'todos') {
    list = list.filter(i => i.status === statusFilter);
  }
  list = _aplicarSort(list, 'imo');
  const _imoThead = document.getElementById('imo-thead');
  if (_imoThead) _imoThead.innerHTML = '<tr>' +
    _th('imo','nome','Unidade') + _thStatic('Prédio') +
    _th('imo','valorAluguel','Aluguel') + _th('imo','status','Status') +
    _thStatic('Fotos') + _thStatic('Ações') + '</tr>';
  document.getElementById('imo-tbody').innerHTML = list.length === 0
    ? `<tr><td colspan="6"><div class="empty"><div class="empty-icon">🏠</div><p>Nenhuma unidade encontrada</p></div></td></tr>`
    : list.map(i => {
        const fotos  = (i.fotos || []).length;
        const capa   = fotos > 0 ? i.fotos[0].dados : null;
        const predio = (DB.predios || []).find(p => p.id === i.predioId);
        return `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px">
              ${capa
                ? `<img src="${capa}" class="imo-capa-thumb" onclick="openImovelFicha(${i.id})">`
                : `<div class="imo-capa-placeholder" onclick="openImovelFicha(${i.id})">🏠</div>`}
              <div>
                <div style="font-weight:600"><span class="filtro-click" onclick="_filtrarPor('imo-search',${JSON.stringify(i.nome)},renderImoveis)" title="Filtrar">${i.nome}</span></div>
                <div style="font-size:11px;color:var(--gray-400)">${i.tipo || 'Tipo não definido'}</div>
              </div>
            </div>
          </td>
          <td>${predio ? `<span style="font-size:13px">🏢 ${predio.nome}</span>` : `<span style="color:var(--gray-300);font-size:12px">—</span>`}</td>
          <td><strong>${fmt(i.valorAluguel)}</strong>${i.taxasExtras > 0 ? `<div style="font-size:11px;color:var(--gray-400)">+ ${fmt(i.taxasExtras)} taxas</div>` : ''}</td>
          <td><span class="badge ${i.status === 'OCUPADO' ? 'badge-green' : i.status === 'EM MANUTENÇÃO' ? 'badge-yellow' : 'badge-blue'}">${i.status}</span></td>
          <td>${fotos > 0 ? `<span class="badge badge-blue">📷 ${fotos}</span>` : '<span style="color:var(--gray-300);font-size:12px">Sem fotos</span>'}</td>
          <td>
            <div class="actions">
              <button class="btn btn-primary btn-sm" onclick="openImovelFicha(${i.id})">Ver Ficha</button>
              ${_podeAcao('imoveis','editar') ? `<button class="btn btn-ghost btn-sm" onclick="openImovel(${i.id})">Editar</button>` : ''}
              ${_podeAcao('imoveis','excluir') ? `<button class="btn btn-danger btn-sm" onclick="deleteImovel(${i.id})">Excluir</button>` : ''}
            </div>
          </td>
        </tr>`;
      }).join('');
}

function openImovel(id = null) {
  _imoFotosPendentes = [];
  const modal = document.getElementById('modal-imovel');
  const form  = document.getElementById('form-imovel');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-imo-title').textContent = id ? 'Editar Unidade' : 'Nova Unidade';
  // Popula select de prédio
  const selPredio = form.elements['predioId'];
  if (selPredio) {
    selPredio.innerHTML = '<option value="">Selecione o prédio...</option>' +
      (DB.predios || []).map(p => `<option value="${p.id}">${p.nome}</option>`).join('');
    if (!id && _predioFiltro) selPredio.value = _predioFiltro;
  }
  form.tipo.innerHTML = '<option value="">Selecione...</option>' +
    DB.config.tiposImovel.map(t => `<option value="${t}">${t}</option>`).join('');
  form.status.innerHTML = DB.config.statusImovel.map(s => `<option value="${s}">${s}</option>`).join('');
  if (!id) form.status.value = 'DISPONÍVEL';
  if (id) {
    const i = DB.imoveis.find(x => x.id === id);
    if (selPredio && i.predioId) selPredio.value = i.predioId;
    ['nome','endereco','bairro','cidade','uf','cep','tipo','medidor','andar',
     'valorAluguel','taxaAgua','taxaManutencao','taxasExtras','status','observacoes'].forEach(k => {
      if (form[k]) form[k].value = i[k] ?? '';
    });
    const radioEner = form.querySelector(`input[name="tipoEnergia"][value="${i.tipoEnergia || 'solar'}"]`);
    if (radioEner) radioEner.checked = true;
    if (form.elements['valorKwh']) form.elements['valorKwh'].value = i.valorKwh > 0 ? i.valorKwh : '';
    _imoFotosPendentes = JSON.parse(JSON.stringify(i.fotos || []));
  } else {
    // pré-preenche com o padrão global para novos imóveis
    const ge = DB.config.energia || {};
    const radioEner = form.querySelector(`input[name="tipoEnergia"][value="${ge.tipo || 'solar'}"]`);
    if (radioEner) radioEner.checked = true;
    if (form.elements['valorKwh'] && ge.valorKwh > 0) form.elements['valorKwh'].value = ge.valorKwh;
  }
  toggleImovelEnergia();
  renderFotosPendentes();
  renderCamposExtrasForm('imovel', 'ce-form-imovel', id ? DB.imoveis.find(x => x.id === id) : null);
  modal.classList.add('open');
}

function saveImovel() {
  const form = document.getElementById('form-imovel');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const data = {
    nome:         form.nome.value.trim(),
    endereco:     form.endereco.value.trim(),
    bairro:       form.bairro.value.trim(),
    cidade:       form.cidade.value.trim(),
    uf:           form.uf.value.trim(),
    cep:          form.cep.value.trim(),
    tipo:         form.tipo.value,
    medidor:      form.medidor.value.trim(),
    andar:        form.andar.value.trim(),
    observacoes:  form.observacoes.value.trim(),
    valorAluguel:    parseFloat(form.valorAluguel.value)    || 0,
    taxaAgua:        parseFloat(form.taxaAgua.value)        || 0,
    taxaManutencao:  parseFloat(form.taxaManutencao.value)  || 0,
    taxasExtras:     parseFloat(form.taxasExtras.value)     || 0,
    total:        (parseFloat(form.valorAluguel.value) || 0) + (parseFloat(form.taxasExtras.value) || 0),
    predioId:     parseInt(form.elements['predioId']?.value) || null,
    tipoEnergia:  form.querySelector('input[name="tipoEnergia"]:checked')?.value || 'solar',
    valorKwh:     parseFloat(form.elements['valorKwh']?.value) || 0,
    status:       form.status.value,
    fotos:        _imoFotosPendentes,
    camposExtras: coletarCamposExtras('imovel', form),
  };
  if (!data.nome) { toast('Nome do imóvel é obrigatório', 'error'); return; }
  if (id) {
    const idx = DB.imoveis.findIndex(x => x.id === id);
    DB.imoveis[idx] = { ...DB.imoveis[idx], ...data };
  } else {
    DB.imoveis.push({ id: nextId(DB.imoveis), ...data });
  }
  saveData();
  closeModal('modal-imovel');
  renderImoveis();
  toast(id ? 'Imóvel atualizado!' : 'Imóvel cadastrado!', 'success');
}

function deleteImovel(id) {
  if (!confirm_('Excluir este imóvel?')) return;
  DB.imoveis = DB.imoveis.filter(x => x.id !== id);
  saveData();
  renderImoveis();
  toast('Imóvel excluído');
}

// ── CONTRATOS ──────────────────────────────────────────
let _contratoArquivoPendente = null; // { nome, tipo, dados } base64

// Recalcula o status do imóvel com base nos contratos ATIVO existentes
function _syncImovelStatus(nomeImovel) {
  if (!nomeImovel) return;
  const imo = DB.imoveis.find(i => i.nome === nomeImovel);
  if (!imo) return;
  const temAtivo = DB.contratos.some(c => c.imovel === nomeImovel && c.status === 'ATIVO');
  imo.status = temAtivo ? 'OCUPADO' : 'DISPONÍVEL';
}

function preencherValoresImovel(sel) {
  const form = document.getElementById('form-contrato');
  const nomeImo = sel.value;
  if (!nomeImo) return;
  const imo = DB.imoveis.find(i => i.nome === nomeImo);
  if (!imo) return;
  // Só preenche valores automaticamente em novo contrato
  if (form.dataset.id) return;
  if (imo.valorAluguel   > 0) form.valorMensal.value                    = imo.valorAluguel;
  if (imo.taxaAgua       > 0) form.elements['taxaAgua'].value       = imo.taxaAgua;
  if (imo.taxaManutencao > 0) form.elements['taxaManutencao'].value = imo.taxaManutencao;
  if (imo.taxasExtras    > 0) form.elements['taxasExtras'].value    = imo.taxasExtras;
}

function updateCaucaoInfo() {
  const caucao   = parseFloat(document.querySelector('[name="caucao"]')?.value) || 0;
  const parcelas = parseInt(document.getElementById('caucao-parcelas-sel')?.value) || 1;
  const info     = document.getElementById('caucao-parcela-info');
  if (!info) return;
  if (parcelas <= 1 || !caucao) { info.textContent = ''; return; }
  const fmtBR = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  info.textContent = `→ ${parcelas}x de ${fmtBR(caucao / parcelas)}`;
}

function renderContratos() {
  const search = (document.getElementById('ct-search')?.value || '').toLowerCase();
  const statusFilter = _getActivePill('ct-filter-bar');
  let list = DB.contratos.filter(c =>
    c.codigo.toLowerCase().includes(search) ||
    c.imovel.toLowerCase().includes(search) ||
    (c.inquilino || '').toLowerCase().includes(search)
  );
  if (statusFilter !== 'todos') {
    list = list.filter(c => c.status === statusFilter);
  }
  list = _aplicarSort(list, 'ct');
  const _ctThead = document.getElementById('ct-thead');
  if (_ctThead) _ctThead.innerHTML = '<tr>' +
    _th('ct','codigo','Código') + _th('ct','imovel','Imóvel') +
    _th('ct','inquilino','Inquilino') + _th('ct','dataInicio','Início') +
    _th('ct','dataTermino','Término') + _th('ct','valorMensal','Valor Mensal') +
    _thStatic('Caução / Garantia') +
    _th('ct','status','Status') + _thStatic('Arquivo') + _thStatic('Ações') + '</tr>';
  document.getElementById('ct-tbody').innerHTML = list.length === 0
    ? `<tr><td colspan="10"><div class="empty"><div class="empty-icon">📄</div><p>Nenhum contrato encontrado</p></div></td></tr>`
    : list.map(c => {
        const dias = c.dataTermino ? Math.ceil((new Date(c.dataTermino + 'T12:00:00') - new Date()) / 86400000) : null;
        const alerta = dias !== null && dias <= 30 && dias >= 0;
        const arquivoBtns = c.arquivo
          ? `<button class="btn btn-ghost btn-sm" title="Visualizar arquivo" onclick="viewContratoArquivo(${c.id})">📎 Ver</button>
             <button class="btn btn-danger btn-sm" title="Remover arquivo" onclick="removeContratoArquivo(${c.id})">🗑</button>`
          : `<button class="btn btn-ghost btn-sm upload-inline-btn" onclick="triggerInlineUpload(${c.id})">📎 Anexar</button>`;
        const caucaoVal = c.caucao > 0 ? fmt(c.caucao) : null;
        const caucaoParc = c.caucaoParcelas > 1 ? `${c.caucaoParcelas}x de ${fmt(c.caucao / c.caucaoParcelas)}` : null;
        const caucaoForma = c.caucaoFormaPagamento || null;
        const caucaoCell = caucaoVal
          ? `<strong>${caucaoVal}</strong>
             ${caucaoParc ? `<div style="font-size:11px;color:var(--gray-400)">${caucaoParc}</div>` : ''}
             ${caucaoForma ? `<div style="font-size:11px;color:var(--gray-500)">💳 ${caucaoForma}</div>` : ''}`
          : `<span style="color:var(--gray-300);font-size:12px">—</span>`;
        return `
        <tr>
          <td>
            <strong><span class="filtro-click" onclick="_filtrarPor('ct-search',${JSON.stringify(c.codigo)},renderContratos)" title="Filtrar por este contrato">${c.codigo}</span></strong>
            ${c.contratoOrigem ? `<br><small style="color:var(--gray-500);font-size:11px" title="Origem: ${c.contratoOrigem}">↳ ${c.contratoOrigem}</small>` : ''}
          </td>
          <td><span class="filtro-click" onclick="_filtrarPor('ct-search',${JSON.stringify(c.imovel)},renderContratos)" title="Filtrar por este imóvel">${c.imovel}</span></td>
          <td>
            ${c.inquilino ? `<span class="filtro-click" onclick="_filtrarPor('ct-search',${JSON.stringify(c.inquilino)},renderContratos)" title="Filtrar por este inquilino">${c.inquilino}</span>` : '—'}
            ${c.renovacoes > 0
              ? `<span class="badge badge-blue" style="margin-left:6px" title="${c.renovacoes}ª renovação">🔄 ${c.renovacoes}x</span>`
              : ''}
          </td>
          <td>${fmtDate(c.dataInicio)}</td>
          <td>${alerta ? `<span class="badge badge-yellow">${fmtDate(c.dataTermino)} ⚠️</span>` : fmtDate(c.dataTermino)}</td>
          <td><strong>${fmt(c.valorMensal)}</strong></td>
          <td>${caucaoCell}</td>
          <td><span class="badge ${c.status === 'ATIVO' ? 'badge-green' : c.status === 'ENCERRADO' ? 'badge-red' : 'badge-gray'}">${c.status}</span></td>
          <td><div class="actions">${arquivoBtns}</div></td>
          <td>
            <div class="actions">
              <button class="btn btn-ghost btn-sm" onclick="gerarContrato(${c.id})">📄 Gerar</button>
              ${_podeAcao('contratos','editar') ? `<button class="btn btn-ghost btn-sm" onclick="openContrato(${c.id})">Editar</button>` : ''}
              ${_podeAcao('contratos','excluir') ? `<button class="btn btn-danger btn-sm" onclick="deleteContrato(${c.id})">Excluir</button>` : ''}
            </div>
          </td>
        </tr>`;
      }).join('');
}

function triggerInlineUpload(id) {
  const input = document.getElementById('inline-file-input');
  input.dataset.contratoId = id;
  input.click();
}

function handleInlineUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const id = parseInt(input.dataset.contratoId);
  const MAX = 8 * 1024 * 1024;
  if (file.size > MAX) { toast('Arquivo muito grande (máx. 8 MB)', 'error'); input.value = ''; return; }
  const reader = new FileReader();
  reader.onload = e => {
    const idx = DB.contratos.findIndex(x => x.id === id);
    DB.contratos[idx].arquivo = { nome: file.name, tipo: file.type, dados: e.target.result };
    saveData();
    renderContratos();
    toast('Arquivo anexado!', 'success');
    input.value = '';
  };
  reader.readAsDataURL(file);
}

function viewContratoArquivo(id) {
  const c = DB.contratos.find(x => x.id === id);
  if (!c || !c.arquivo) return;
  // Abre em nova aba via blob URL
  const byteStr = atob(c.arquivo.dados.split(',')[1]);
  const ab = new ArrayBuffer(byteStr.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i);
  const blob = new Blob([ab], { type: c.arquivo.tipo });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

function removeContratoArquivo(id) {
  if (!confirm_('Remover o arquivo anexado?')) return;
  const idx = DB.contratos.findIndex(x => x.id === id);
  delete DB.contratos[idx].arquivo;
  saveData();
  renderContratos();
  toast('Arquivo removido');
}

function openContrato(id = null) {
  _contratoArquivoPendente = null;
  const modal = document.getElementById('modal-contrato');
  const form = document.getElementById('form-contrato');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-ct-title').textContent = id ? 'Editar Contrato' : 'Novo Contrato';
  // Ao editar mantém o imóvel já vinculado; ao criar novo, oculta os OCUPADOS
  const _imovelAtual = id ? DB.contratos.find(x => x.id === id)?.imovel : null;
  const _imoveisOpts = DB.imoveis.filter(i => i.status !== 'OCUPADO' || i.nome === _imovelAtual);
  form.imovel.innerHTML = '<option value="">Selecione...</option>' +
    _imoveisOpts.map(i => `<option value="${i.nome}">${i.nome}</option>`).join('');
  form.inquilino.innerHTML = '<option value="">Selecione...</option>' +
    DB.inquilinos.map(i => `<option value="${i.id}">${i.nome}</option>`).join('');
  form.status.innerHTML = DB.config.statusContrato.map(s => `<option value="${s}">${s}</option>`).join('');

  const fileZone = document.getElementById('ct-file-zone');
  const fileInput = document.getElementById('ct-file-input');
  fileInput.value = '';

  if (id) {
    const c = DB.contratos.find(x => x.id === id);
    form.codigo.value = c.codigo;
    form.imovel.value = c.imovel;
    // Busca pelo ID salvo, ou pelo nome normalizado como fallback
    const norm = s => (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
    const inqId = c.inquilinoId
      || DB.inquilinos.find(i => norm(i.nome) === norm(c.inquilino))?.id
      || null;
    if (inqId) {
      form.inquilino.value = inqId;
    } else if (c.inquilino) {
      // Inquilino não encontrado — adiciona opção fantasma para não perder o vínculo ao salvar
      const ghost = document.createElement('option');
      ghost.value = '__ghost__';
      ghost.textContent = c.inquilino + ' (não encontrado no cadastro)';
      ghost.selected = true;
      ghost.dataset.ghostNome = c.inquilino;
      ghost.dataset.ghostId   = c.inquilinoId || '';
      form.inquilino.appendChild(ghost);
    }
    form.dataInicio.value = c.dataInicio;
    form.dataTermino.value = c.dataTermino;
    form.valorMensal.value = c.valorMensal;
    form.ajustes.value = c.ajustes;
    form.status.value = c.status;
    form.elements['dataContrato'].value  = c.dataContrato  || '';
    form.elements['diaVencimento'].value = c.diaVencimento || '';
    form.elements['caucao'].value                  = c.caucao                || '';
    form.elements['caucaoParcelas'].value          = c.caucaoParcelas        || 1;
    form.elements['caucaoFormaPagamento'].value    = c.caucaoFormaPagamento  || '';
    form.elements['taxaAgua'].value                = c.taxaAgua        || '';
    form.elements['taxaManutencao'].value          = c.taxaManutencao  || '';
    form.elements['taxasExtras'].value             = c.taxasExtras     || '';
    updateCaucaoInfo();
    updateFileZone(c.arquivo || null);
  } else {
    updateFileZone(null);
  }
  const ctRecord = id ? DB.contratos.find(x => x.id === id) : null;
  renderCamposExtrasForm('contrato', 'ce-form-contrato', ctRecord);
  modal.classList.add('open');
}

function updateFileZone(arquivo) {
  const zone = document.getElementById('ct-file-zone');
  if (arquivo) {
    zone.innerHTML = `
      <div class="file-attached">
        <span class="file-icon">${arquivo.tipo === 'application/pdf' ? '📄' : '🖼️'}</span>
        <span class="file-name">${arquivo.nome}</span>
        <button type="button" class="btn btn-ghost btn-sm" onclick="viewPendingOrSaved()">Ver</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="clearFileZone()">Remover</button>
      </div>`;
    _contratoArquivoPendente = arquivo;
  } else {
    zone.innerHTML = `
      <div class="file-drop" id="ct-file-drop">
        <div class="file-drop-icon">📎</div>
        <p>Arraste o arquivo aqui ou <label for="ct-file-input" class="file-link">clique para selecionar</label></p>
        <p class="file-hint">PDF, imagens — máx. 8 MB</p>
      </div>`;
    bindDropZone();
  }
}

function bindDropZone() {
  const drop = document.getElementById('ct-file-drop');
  if (!drop) return;
  drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('drag-over'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('drag-over'));
  drop.addEventListener('drop', e => {
    e.preventDefault();
    drop.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) processContratoFile(file);
  });
}

function handleFileInputChange(input) {
  if (input.files[0]) processContratoFile(input.files[0]);
}

function processContratoFile(file) {
  const MAX = 8 * 1024 * 1024;
  if (file.size > MAX) { toast('Arquivo muito grande (máx. 8 MB)', 'error'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    const arquivo = { nome: file.name, tipo: file.type, dados: e.target.result };
    _contratoArquivoPendente = arquivo;
    updateFileZone(arquivo);
  };
  reader.readAsDataURL(file);
}

function viewPendingOrSaved() {
  if (!_contratoArquivoPendente) return;
  const a = _contratoArquivoPendente;
  const byteStr = atob(a.dados.split(',')[1]);
  const ab = new ArrayBuffer(byteStr.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i);
  const blob = new Blob([ab], { type: a.tipo });
  window.open(URL.createObjectURL(blob), '_blank');
}

function clearFileZone() {
  _contratoArquivoPendente = null;
  document.getElementById('ct-file-input').value = '';
  updateFileZone(null);
}

function saveContrato() {
  const form = document.getElementById('form-contrato');
  const id = form.dataset.id ? parseInt(form.dataset.id) : null;
  const selVal = form.inquilino.value;
  // Detecta a "opção fantasma" (inquilino não encontrado no cadastro)
  const ghostOpt = form.inquilino.options[form.inquilino.selectedIndex];
  const isGhost  = ghostOpt?.dataset?.ghostNome;
  const inqId    = isGhost ? null    : (parseInt(selVal) || null);
  const inqObj   = inqId   ? DB.inquilinos.find(i => i.id === inqId) : null;
  // Fallback: preserva vínculo existente se nenhum inquilino foi selecionado
  const existing = id ? DB.contratos.find(x => x.id === id) : null;
  const resolvedNome = inqObj?.nome
    || (isGhost ? ghostOpt.dataset.ghostNome : null)
    || existing?.inquilino
    || '';
  const resolvedId = inqId
    ?? (isGhost ? (parseInt(ghostOpt.dataset.ghostId) || null) : null)
    ?? existing?.inquilinoId
    ?? null;
  const data = {
    codigo: form.codigo.value.trim(),
    imovel: form.imovel.value,
    inquilino:   resolvedNome,
    inquilinoId: resolvedId,
    dataInicio: form.dataInicio.value,
    dataTermino: form.dataTermino.value,
    valorMensal: parseFloat(form.valorMensal.value) || 0,
    ajustes: form.ajustes.value.trim(),
    status: form.status.value,
    dataContrato:  form.elements['dataContrato'].value,
    diaVencimento: parseInt(form.elements['diaVencimento'].value) || null,
    caucao:                parseFloat(form.elements['caucao'].value)              || 0,
    caucaoParcelas:         parseInt(form.elements['caucaoParcelas'].value)       || 1,
    caucaoFormaPagamento:  form.elements['caucaoFormaPagamento']?.value           || '',
    taxaAgua:        parseFloat(form.elements['taxaAgua'].value)       || 0,
    taxaManutencao:  parseFloat(form.elements['taxaManutencao'].value) || 0,
    taxasExtras:     parseFloat(form.elements['taxasExtras'].value)    || 0,
    camposExtras:    coletarCamposExtras('contrato', form),
  };
  if (_contratoArquivoPendente) data.arquivo = _contratoArquivoPendente;
  if (!data.codigo) { toast('Código é obrigatório', 'error'); return; }
  const oldImovel = id ? DB.contratos.find(x => x.id === id)?.imovel : null;
  if (id) {
    const idx = DB.contratos.findIndex(x => x.id === id);
    // Preserva arquivo existente se não foi alterado
    if (!data.arquivo && DB.contratos[idx].arquivo) data.arquivo = DB.contratos[idx].arquivo;
    DB.contratos[idx] = { ...DB.contratos[idx], ...data };
  } else {
    DB.contratos.push({ id: nextId(DB.contratos), ...data });
  }
  // Atualiza status dos imóveis envolvidos
  _syncImovelStatus(data.imovel);
  if (oldImovel && oldImovel !== data.imovel) _syncImovelStatus(oldImovel);

  // Gera parcelas e caução automáticas
  let qtdParcelas = 0;
  let qtdCaucao = 0;
  if (!id) {
    const novoContrato = DB.contratos[DB.contratos.length - 1];
    qtdParcelas = gerarParcelasContrato(novoContrato);
    qtdCaucao   = gerarCaucaoContrato(novoContrato);
  } else if ((existing?.caucao || 0) !== data.caucao) {
    // Caução foi alterada: remove entradas não pagas e regenera
    DB.financeiro = DB.financeiro.filter(f =>
      !(f.tipo === 'caucao' && f.contrato === data.codigo && !(f.valorRecebido > 0))
    );
    const contratoAtualizado = DB.contratos.find(x => x.id === id);
    if (contratoAtualizado) qtdCaucao = gerarCaucaoContrato(contratoAtualizado);
  }

  saveData();
  closeModal('modal-contrato');
  renderContratos();
  renderImoveis();
  renderFinanceiro();
  const _parcelaMsg = qtdParcelas > 0 ? ` ${qtdParcelas} parcela${qtdParcelas > 1 ? 's' : ''} gerada${qtdParcelas > 1 ? 's' : ''}.` : '';
  const _caucaoMsg  = qtdCaucao  > 0 ? ` ${qtdCaucao} entrada${qtdCaucao > 1 ? 's' : ''} de caução lançada${qtdCaucao > 1 ? 's' : ''}.` : '';
  toast((id ? 'Contrato atualizado!' : 'Contrato cadastrado!') + _parcelaMsg + _caucaoMsg, 'success');
}

// Gera um registro financeiro por mês de vigência do contrato
function gerarParcelasContrato(c) {
  if (!c.dataInicio || !c.dataTermino) return 0;
  const d1 = new Date(c.dataInicio + 'T12:00:00');
  const d2 = new Date(c.dataTermino + 'T12:00:00');
  const prazo = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
  if (prazo <= 0) return 0;
  const diaVenc = c.diaVencimento || 10;

  for (let i = 0; i < prazo; i++) {
    const totalMeses = d1.getMonth() + i;
    const ano = d1.getFullYear() + Math.floor(totalMeses / 12);
    const mes = totalMeses % 12; // 0-indexed
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    const dia = Math.min(diaVenc, ultimoDia);
    const dataVenc = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

    DB.financeiro.push({
      id:              nextId(DB.financeiro),
      dataPagamento:   dataVenc,
      contrato:        c.codigo,
      inquilino:       c.inquilino || '',
      valorContrato:   c.valorMensal    || 0,
      consumoAgua:     c.taxaAgua       || 0,
      taxaManutencao:  c.taxaManutencao || 0,
      taxasExtras:     c.taxasExtras    || 0,
      leituraAnterior: 0,
      leituraAtual:    0,
      valorKwh:        0,
      totalEnergia:    0,
      pctMulta:        0,
      valorMulta:      0,
      diasAtraso:      0,
      pctMora:         0,
      valorMora:       0,
      totalGeral:      (c.valorMensal || 0) + (c.taxaAgua || 0) + (c.taxaManutencao || 0) + (c.taxasExtras || 0),
      valorRecebido:   0,
      observacoes:     '',
      gerado:          true,
    });
  }
  return prazo;
}

function gerarCaucaoContrato(c) {
  if (!c.caucao || c.caucao <= 0) return 0;
  const n = c.caucaoParcelas || 1;
  const valorParcela = c.caucao / n;
  const dataBase = c.dataInicio || today();
  const d1 = new Date(dataBase + 'T12:00:00');

  for (let i = 0; i < n; i++) {
    const totalMeses = d1.getMonth() + i;
    const ano = d1.getFullYear() + Math.floor(totalMeses / 12);
    const mes = totalMeses % 12;
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    const dia = Math.min(d1.getDate(), ultimoDia);
    const dataVenc = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    const parcelLabel = n > 1 ? `Caução ${i + 1}/${n}` : 'Caução (à vista)';
    const formaLabel = c.caucaoFormaPagamento ? ` — ${c.caucaoFormaPagamento}` : '';

    DB.financeiro.push({
      id:              nextId(DB.financeiro),
      tipo:            'caucao',
      dataPagamento:   dataVenc,
      contrato:        c.codigo,
      inquilino:       c.inquilino || '',
      valorContrato:   0,
      caucaoValor:     valorParcela,
      consumoAgua:     0,
      taxaManutencao:  0,
      taxasExtras:     0,
      leituraAnterior: 0,
      leituraAtual:    0,
      valorKwh:        0,
      totalEnergia:    0,
      pctMulta:        0,
      valorMulta:      0,
      diasAtraso:      0,
      pctMora:         0,
      valorMora:       0,
      totalGeral:      valorParcela,
      valorRecebido:   0,
      observacoes:     parcelLabel + formaLabel,
      gerado:          true,
    });
  }
  return n;
}

function deleteContrato(id) {
  if (!confirm_('Excluir este contrato?')) return;
  const nomeImovel = DB.contratos.find(x => x.id === id)?.imovel;
  DB.contratos = DB.contratos.filter(x => x.id !== id);
  _syncImovelStatus(nomeImovel);
  saveData();
  renderContratos();
  renderImoveis();
  toast('Contrato excluído');
}

function gerarContrato(id) {
  const c = DB.contratos.find(x => x.id === id);
  if (!c) return;

  const imo = DB.imoveis.find(i => i.nome === c.imovel) || {};
  const normNome = s => (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
  const inq = (c.inquilinoId ? DB.inquilinos.find(i => i.id === c.inquilinoId) : null)
           || DB.inquilinos.find(i => normNome(i.nome) === normNome(c.inquilino))
           || {};
  if (!inq.id && c.inquilino) {
    toast(`Inquilino "${c.inquilino}" não encontrado no cadastro — verifique se o nome bate exatamente.`, 'error');
  }
  const loc = DB.config.locador || {};
  const template = DB.config.modeloContrato || '';

  // Calcular prazo em meses
  let prazoMeses = 12;
  if (c.dataInicio && c.dataTermino) {
    const d1 = new Date(c.dataInicio+'T12:00:00');
    const d2 = new Date(c.dataTermino+'T12:00:00');
    prazoMeses = (d2.getFullYear()-d1.getFullYear())*12+(d2.getMonth()-d1.getMonth());
  }

  // Endereço completo do imóvel
  const endParts = [imo.endereco, imo.bairro, imo.cidade&&imo.uf ? imo.cidade+' - '+imo.uf : imo.cidade, imo.cep ? 'CEP '+imo.cep : ''].filter(Boolean);
  const endCompleto = endParts.join(', ') || c.imovel;

  const caucao         = parseFloat(c.caucao)   || 0;
  const caucaoParcelas = parseInt(c.caucaoParcelas) || 1;
  const caucaoParcelaValor = caucaoParcelas > 1 ? caucao / caucaoParcelas : caucao;
  const caucaoInfo = caucaoParcelas > 1
    ? `${fmt(caucao)} parcelada em ${caucaoParcelas}x de ${fmt(caucaoParcelaValor)}`
    : fmt(caucao);
  const taxaAgua  = parseFloat(c.taxaAgua) || 0;
  const entrada   = (c.valorMensal || 0) + caucao;

  // Data do contrato por extenso: "10 de maio de 2026"
  const mesesNome = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  let dataContratoExtenso = '';
  if (c.dataContrato) {
    const dc = new Date(c.dataContrato+'T12:00:00');
    dataContratoExtenso = `${dc.getDate()} de ${mesesNome[dc.getMonth()]} de ${dc.getFullYear()}`;
  }
  const localData = `Lauro de Freitas - BA, ${dataContratoExtenso}`;

  const vars = {
    '{{LOCADOR_NOME}}':       loc.nome || '',
    '{{LOCADOR_ESTADO_CIVIL}}': loc.estadoCivil || '',
    '{{LOCADOR_PROFISSAO}}':  loc.profissao || '',
    '{{LOCADOR_RG}}':         loc.rg || '',
    '{{LOCADOR_CPF}}':        loc.cpf || '',
    '{{LOCADOR_ENDERECO}}':   loc.endereco || '',
    '{{LOCADOR_TELEFONE}}':   loc.telefone || '',
    '{{LOCADOR_EMAIL}}':      loc.email || '',
    '{{LOCATARIO_NOME}}':     inq.nome || c.inquilino || '',
    '{{LOCATARIO_ESTADO_CIVIL}}': inq.estadoCivil || '',
    '{{LOCATARIO_PROFISSAO}}': inq.profissao || '',
    '{{LOCATARIO_RG}}':       inq.rg || '',
    '{{LOCATARIO_CPF}}':      inq.cpf || '',
    '{{LOCATARIO_EMAIL}}':    inq.email || '',
    '{{LOCATARIO_TELEFONE}}': inq.celular || inq.telefone || '',
    '{{LOCATARIO_INSCRICAO_ESTADUAL}}': inq.inscricaoEstadual || '',
    '{{LOCATARIO_REPRESENTANTE}}':      inq.nomeRepresentante || '',
    '{{LOCATARIO_REPRESENTANTE_CPF}}':  inq.cpfRepresentante  || '',
    '{{LOCATARIO_REPRESENTANTE_CARGO}}':inq.cargoRepresentante|| '',
    '{{IMOVEL_NOME}}':        c.imovel || '',
    '{{IMOVEL_ENDERECO}}':    endCompleto,
    '{{IMOVEL_BAIRRO}}':      imo.bairro || '',
    '{{IMOVEL_CIDADE}}':      imo.cidade || '',
    '{{CONTRATO_CODIGO}}':    c.codigo || '',
    '{{CONTRATO_INICIO}}':    fmtDate(c.dataInicio),
    '{{CONTRATO_TERMINO}}':   fmtDate(c.dataTermino),
    '{{CONTRATO_PRAZO_MESES}}': String(prazoMeses),
    '{{CONTRATO_PRAZO_EXTENSO}}': (() => {
      const MAP = {1:'um',2:'dois',3:'três',4:'quatro',5:'cinco',6:'seis',
        7:'sete',8:'oito',9:'nove',10:'dez',11:'onze',12:'doze',
        13:'treze',14:'quatorze',15:'quinze',18:'dezoito',
        24:'vinte e quatro',36:'trinta e seis',48:'quarenta e oito'};
      return MAP[prazoMeses] || String(prazoMeses);
    })(),
    '{{CONTRATO_VALOR}}':     fmt(c.valorMensal),
    '{{CONTRATO_VALOR_EXTENSO}}': valorPorExtenso(c.valorMensal),
    '{{CONTRATO_DIA_VENCIMENTO}}': String(c.diaVencimento || 10),
    '{{CONTRATO_DATA}}':      fmtDate(c.dataContrato),
    '{{CONTRATO_LOCAL_DATA}}': localData,
    '{{CONTRATO_CAUCAO}}':                   fmt(caucao),
    '{{CONTRATO_CAUCAO_EXTENSO}}':           valorPorExtenso(caucao),
    '{{CONTRATO_CAUCAO_INFO}}':              caucaoInfo,
    '{{CONTRATO_CAUCAO_PARCELAS}}':          String(caucaoParcelas),
    '{{CONTRATO_CAUCAO_PARCELA_VALOR}}':     fmt(caucaoParcelaValor),
    '{{CONTRATO_CAUCAO_PARCELA_VALOR_EXTENSO}}': valorPorExtenso(caucaoParcelaValor),
    '{{CONTRATO_TAXA_AGUA}}':              fmt(taxaAgua),
    '{{CONTRATO_TAXA_AGUA_EXTENSO}}':      valorPorExtenso(taxaAgua),
    '{{CONTRATO_TAXA_MANUTENCAO}}':        fmt(parseFloat(c.taxaManutencao) || 0),
    '{{CONTRATO_TAXA_MANUTENCAO_EXTENSO}}': valorPorExtenso(parseFloat(c.taxaManutencao) || 0),
    '{{CONTRATO_ENTRADA_TOTAL}}': fmt(entrada),
    '{{CONTRATO_ENTRADA_TOTAL_EXTENSO}}': valorPorExtenso(entrada),
    '{{MORADORES_LISTA}}': (() => {
      const todos = [inq.nome || c.inquilino || ''];
      (inq.moradores || []).forEach(m => { if (m.nome) todos.push(m.nome); });
      return todos.filter(Boolean).join('\n');
    })(),
  };

  let texto = template;
  Object.entries(vars).forEach(([k, v]) => { texto = texto.split(k).join(v); });

  // Converter texto para HTML formatado
  const html = texto.split('\n').map(linha => {
    const l = linha.trim();
    if (!l) return '<br>';
    if (/^CLÁUSULA\s+\d+/i.test(l) || /^CONTRATO DE LOCAÇÃO/i.test(l))
      return `<p style="font-weight:700;margin:16px 0 4px">${l}</p>`;
    if (/^(LOCADOR|LOCATÁRIO|ASSINATURAS|TESTEMUNHAS)/.test(l) && l.length < 60)
      return `<p style="font-weight:700;margin:10px 0 2px">${l}</p>`;
    if (/^[-•]/.test(l))
      return `<p style="margin:2px 0 2px 20px">${l}</p>`;
    return `<p style="margin:4px 0">${l}</p>`;
  }).join('');

  // Painel de diagnóstico do inquilino vinculado
  const inqTelefone = inq.celular || inq.telefone || '';
  const isPhoneWrong = !!inqTelefone && inqTelefone === (loc.telefone || '');
  const inqInfoBar = `
<div class="preview-inq-info${isPhoneWrong ? ' preview-inq-warn' : ''}">
  <div class="preview-inq-row">
    <span><strong>Inquilino vinculado:</strong> ${inq.nome || c.inquilino || '—'}${inq.id ? ` <small style="color:var(--gray-400)">(ID: ${inq.id})</small>` : ' <span class="preview-field-empty">(não encontrado no cadastro)</span>'}</span>
    <span><strong>Celular:</strong> <span class="${!inq.celular ? 'preview-field-empty' : ''}">${inq.celular || '(vazio)'}</span></span>
    <span><strong>Telefone fixo:</strong> <span class="${isPhoneWrong ? 'preview-field-wrong' : ''}">${inq.telefone || '(vazio)'}</span></span>
    ${isPhoneWrong ? '<span class="preview-warn-msg">⚠ Telefone igual ao do locador — verifique o cadastro do inquilino</span>' : ''}
  </div>
  ${inq.id ? `<button class="btn btn-ghost btn-sm" style="margin-top:6px" onclick="closeModal('modal-ct-preview');openInquilino(${inq.id})">✏ Editar cadastro do inquilino</button>` : ''}
</div>`;

  document.getElementById('preview-ct-title').textContent = `Contrato ${c.codigo} — ${c.imovel}`;
  document.getElementById('modal-ct-preview-body').innerHTML = inqInfoBar + html;
  document.getElementById('modal-ct-preview').classList.add('open');
}

function imprimirContrato() {
  const body = document.getElementById('modal-ct-preview-body').innerHTML;
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Contrato</title>
    <style>
      body { font-family: 'Times New Roman', serif; font-size: 12pt; margin: 2cm; color: #000; }
      p { margin: 4px 0; line-height: 1.6; }
    </style>
    </head><body>${body}<script>window.onload=()=>{window.print();window.close();}<\/script></body></html>`);
  w.document.close();
}

const CT_CAMPOS = {
  'Locatário (Inquilino)': [
    ['{{LOCATARIO_NOME}}',       'Nome completo'],
    ['{{LOCATARIO_ESTADO_CIVIL}}','Estado civil'],
    ['{{LOCATARIO_PROFISSAO}}',  'Profissão'],
    ['{{LOCATARIO_RG}}',         'RG'],
    ['{{LOCATARIO_CPF}}',        'CPF/CNPJ'],
    ['{{LOCATARIO_EMAIL}}',      'E-mail'],
    ['{{LOCATARIO_TELEFONE}}',   'Telefone'],
    ['{{MORADORES_LISTA}}',               'Todos os moradores (principal + co-locatários)'],
    ['{{LOCATARIO_INSCRICAO_ESTADUAL}}',  'Inscrição Estadual (PJ)'],
    ['{{LOCATARIO_REPRESENTANTE}}',       'Representante legal (PJ)'],
    ['{{LOCATARIO_REPRESENTANTE_CPF}}',   'CPF do representante (PJ)'],
    ['{{LOCATARIO_REPRESENTANTE_CARGO}}', 'Cargo do representante (PJ)'],
  ],
  'Imóvel': [
    ['{{IMOVEL_NOME}}',     'Nome do imóvel'],
    ['{{IMOVEL_ENDERECO}}', 'Endereço completo'],
    ['{{IMOVEL_BAIRRO}}',   'Bairro'],
    ['{{IMOVEL_CIDADE}}',   'Cidade'],
  ],
  'Contrato': [
    ['{{CONTRATO_CODIGO}}',              'Código'],
    ['{{CONTRATO_INICIO}}',              'Data de início'],
    ['{{CONTRATO_TERMINO}}',             'Data de término'],
    ['{{CONTRATO_PRAZO_MESES}}',         'Prazo em meses'],
    ['{{CONTRATO_VALOR}}',               'Valor mensal (R$)'],
    ['{{CONTRATO_VALOR_EXTENSO}}',       'Valor por extenso'],
    ['{{CONTRATO_DIA_VENCIMENTO}}',      'Dia de vencimento'],
    ['{{CONTRATO_DATA}}',                'Data do contrato'],
    ['{{CONTRATO_LOCAL_DATA}}',          'Local e data por extenso'],
    ['{{CONTRATO_CAUCAO}}',                      'Caução total (R$)'],
    ['{{CONTRATO_CAUCAO_EXTENSO}}',              'Caução total por extenso'],
    ['{{CONTRATO_CAUCAO_INFO}}',                 'Caução com info de parcelamento'],
    ['{{CONTRATO_CAUCAO_PARCELAS}}',             'Número de parcelas da caução'],
    ['{{CONTRATO_CAUCAO_PARCELA_VALOR}}',        'Valor de cada parcela (R$)'],
    ['{{CONTRATO_CAUCAO_PARCELA_VALOR_EXTENSO}}','Valor da parcela por extenso'],
    ['{{CONTRATO_TAXA_AGUA}}',                'Taxa de água (R$)'],
    ['{{CONTRATO_TAXA_AGUA_EXTENSO}}',        'Taxa de água por extenso'],
    ['{{CONTRATO_TAXA_MANUTENCAO}}',          'Taxa de manutenção predial (R$)'],
    ['{{CONTRATO_TAXA_MANUTENCAO_EXTENSO}}',  'Taxa de manutenção predial por extenso'],
    ['{{CONTRATO_ENTRADA_TOTAL}}',       'Total na entrada (R$)'],
    ['{{CONTRATO_ENTRADA_TOTAL_EXTENSO}}','Total na entrada por extenso'],
  ],
  'Locador (Proprietário)': [
    ['{{LOCADOR_NOME}}',       'Nome'],
    ['{{LOCADOR_ESTADO_CIVIL}}','Estado civil'],
    ['{{LOCADOR_PROFISSAO}}',  'Profissão'],
    ['{{LOCADOR_RG}}',         'RG'],
    ['{{LOCADOR_CPF}}',        'CPF'],
    ['{{LOCADOR_ENDERECO}}',   'Endereço'],
    ['{{LOCADOR_TELEFONE}}',   'Telefone'],
    ['{{LOCADOR_EMAIL}}',      'E-mail'],
  ],
};

function renderModeloContrato() {
  const ta = document.getElementById('modelo-textarea');
  if (ta) ta.value = DB.config.modeloContrato || '';

  const lista = document.getElementById('modelo-campos-list');
  if (!lista) return;
  lista.innerHTML = Object.entries(CT_CAMPOS).map(([grupo, campos]) => `
    <div class="campo-grupo">
      <div class="campo-grupo-title">${grupo}</div>
      ${campos.map(([ph, desc]) => `
        <div class="campo-chip" onclick="insertCampo('${ph}')" title="${desc}">
          <code>${ph}</code>
          <span>${desc}</span>
        </div>`).join('')}
    </div>`).join('');
}

function insertCampo(ph) {
  const ta = document.getElementById('modelo-textarea');
  if (!ta) return;
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  ta.value = ta.value.substring(0, start) + ph + ta.value.substring(end);
  ta.selectionStart = ta.selectionEnd = start + ph.length;
  ta.focus();
}

function saveModeloContrato() {
  const ta = document.getElementById('modelo-textarea');
  if (!ta) return;
  DB.config.modeloContrato = ta.value;
  saveData();
  toast('Modelo salvo!', 'success');
}

function resetModeloContrato() {
  if (!confirm_('Restaurar o modelo padrão? O texto atual será perdido.')) return;
  DB.config.modeloContrato = DB_DEFAULT_MODELO;
  saveData();
  document.getElementById('modelo-textarea').value = DB.config.modeloContrato;
  toast('Modelo restaurado!', 'success');
}

function showCtTab(tab) {
  document.getElementById('ct-tab-lista').style.display  = tab === 'lista'  ? '' : 'none';
  document.getElementById('ct-tab-modelo').style.display = tab === 'modelo' ? '' : 'none';
  document.querySelectorAll('#ct-tabs .tab').forEach((el, i) => {
    el.classList.toggle('active', (i === 0 && tab === 'lista') || (i === 1 && tab === 'modelo'));
  });
  if (tab === 'modelo') renderModeloContrato();
}

// ── FINANCEIRO ─────────────────────────────────────────
const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
               'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function finInitPeriodo() {
  // Popula anos disponíveis (baseado nos dados + ano atual ± 2)
  const selAno = document.getElementById('fin-sel-ano');
  if (!selAno || selAno.options.length > 0) return;
  const anosData = DB.financeiro
    .filter(f => f.dataPagamento)
    .map(f => new Date(f.dataPagamento + 'T12:00:00').getFullYear());
  const anoAtual = new Date().getFullYear();
  const anos = [...new Set([...anosData, anoAtual - 1, anoAtual, anoAtual + 1])].sort();
  anos.forEach(a => {
    const opt = document.createElement('option');
    opt.value = a; opt.textContent = a;
    selAno.appendChild(opt);
  });
  // Seleciona mês/ano atual
  document.getElementById('fin-sel-mes').value = new Date().getMonth() + 1;
  selAno.value = anoAtual;
}

function finEnsureAno(ano) {
  const sel = document.getElementById('fin-sel-ano');
  if (!sel.querySelector(`option[value="${ano}"]`)) {
    const opt = document.createElement('option');
    opt.value = ano; opt.textContent = ano;
    // Insere ordenado
    const opts = [...sel.options].map(o => parseInt(o.value));
    const insertBefore = opts.find(v => v > ano);
    if (insertBefore) {
      sel.insertBefore(opt, sel.querySelector(`option[value="${insertBefore}"]`));
    } else {
      sel.appendChild(opt);
    }
  }
  sel.value = ano;
}

function finNavMes(delta) {
  const selMes = document.getElementById('fin-sel-mes');
  const selAno = document.getElementById('fin-sel-ano');
  let mes = parseInt(selMes.value) + delta;
  let ano = parseInt(selAno.value);
  if (mes < 1)  { mes = 12; ano--; }
  if (mes > 12) { mes = 1;  ano++; }
  selMes.value = mes;
  finEnsureAno(ano);
  document.getElementById('fin-btn-todos').classList.remove('active');
  renderFinanceiro();
}

function finToggleTodos() {
  document.getElementById('fin-btn-todos').classList.toggle('active');
  renderFinanceiro();
}

function renderFinanceiro() {
  finInitPeriodo();
  const search  = (document.getElementById('fin-search')?.value || '').toLowerCase();
  const todos   = document.getElementById('fin-btn-todos')?.classList.contains('active');
  const mes     = parseInt(document.getElementById('fin-sel-mes')?.value);
  const ano     = parseInt(document.getElementById('fin-sel-ano')?.value);

  let list = [...DB.financeiro];

  // Filtro de período
  if (!todos) {
    list = list.filter(f => {
      if (!f.dataPagamento) return false;
      const d = new Date(f.dataPagamento + 'T12:00:00');
      return d.getMonth() + 1 === mes && d.getFullYear() === ano;
    });
  }

  // Filtro de busca
  if (search) {
    list = list.filter(f =>
      f.contrato.toLowerCase().includes(search) ||
      (f.inquilino || '').toLowerCase().includes(search)
    );
  }

  // Filtro de status de pagamento
  const statusPagFilter = _getActivePill('fin-filter-bar');
  if (statusPagFilter !== 'todos') {
    list = list.filter(f => {
      const rec = f.valorRecebido || 0;
      const tot = f.totalGeral    || 0;
      if (statusPagFilter === 'PENDENTE') return !f.baixaManual && !(f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED') && tot > 0;
      if (statusPagFilter === 'PAGO')     return (f.baixaManual || f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED') && rec >= tot && tot > 0;
      if (statusPagFilter === 'PARCIAL')  return (f.baixaManual || f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED') && rec > 0 && rec < tot;
      return true;
    });
  }

  list = _aplicarSort(list, 'fin');
  const _finThead = document.getElementById('fin-thead');
  if (_finThead) _finThead.innerHTML = '<tr>' +
    _th('fin','dataPagamento','Vencimento') + _th('fin','contrato','Contrato') +
    _th('fin','inquilino','Inquilino') + _th('fin','valorContrato','Vlr Contrato') +
    _th('fin','consumoAgua','Água') + _th('fin','totalEnergia','Energia') +
    _th('fin','_encargos','Encargos') + _th('fin','totalGeral','Total') +
    _th('fin','valorRecebido','Recebido') + _th('fin','_statusPag','Status') +
    _thStatic('Boleto') + _thStatic('Ações') + '</tr>';

  // Totais
  const totalRecebido = list.reduce((s, f) => s + (f.valorRecebido || 0), 0);
  const totalGeral    = list.reduce((s, f) => s + (f.totalGeral    || 0), 0);
  const saldo         = totalRecebido - totalGeral;

  document.getElementById('fin-total-recebido').textContent = fmt(totalRecebido);
  document.getElementById('fin-total-geral').textContent    = fmt(totalGeral);
  document.getElementById('fin-saldo').textContent          = fmt(saldo);
  document.getElementById('fin-qtd').textContent            = list.length;

  // Cor do saldo
  const saldoEl   = document.getElementById('fin-saldo');
  const saldoIcon = document.getElementById('fin-saldo-icon');
  if (saldo < 0) {
    saldoEl.style.color = 'var(--danger)';
    saldoIcon.style.background = '#fee2e2';
    saldoIcon.textContent = '⚠️';
  } else {
    saldoEl.style.color = 'var(--success)';
    saldoIcon.style.background = '#d1fae5';
    saldoIcon.textContent = '✅';
  }

  // Label de período
  const labelPeriodo = todos ? 'Todos os períodos' : `${MESES[mes - 1]} / ${ano}`;
  document.getElementById('fin-periodo-label').textContent      = labelPeriodo;
  document.getElementById('fin-periodo-label-card').textContent = labelPeriodo;

  // Tabela
  document.getElementById('fin-tbody').innerHTML = list.length === 0
    ? `<tr><td colspan="11"><div class="empty"><div class="empty-icon">💰</div><p>Nenhum pagamento em ${labelPeriodo}</p></div></td></tr>`
    : list.map(f => `
      <tr>
        <td>${fmtDate(f.dataPagamento)}</td>
        <td>
          <strong><span class="filtro-click" onclick="_filtrarPor('fin-search',${JSON.stringify(f.contrato)},renderFinanceiro)" title="Filtrar por este contrato">${f.contrato}</span></strong>
          ${f.tipo === 'caucao' ? `<br><span class="badge badge-yellow" style="font-size:10px;margin-top:2px">🔒 ${f.observacoes || 'Caução'}</span>` : ''}
        </td>
        <td>${f.inquilino ? `<span class="filtro-click" onclick="_filtrarPor('fin-search',${JSON.stringify(f.inquilino)},renderFinanceiro)" title="Filtrar por este inquilino">${f.inquilino}</span>` : '—'}</td>
        <td>${f.tipo === 'caucao' ? `<span style="color:var(--gray-400);font-size:11px">—</span>` : fmt(f.valorContrato)}</td>
        <td>${(f.consumoAgua || 0) > 0 ? fmt(f.consumoAgua) : '—'}</td>
        <td>${(f.totalEnergia || 0) > 0 ? fmt(f.totalEnergia) : '—'}</td>
        <td>${((f.valorMulta || 0) > 0 || (f.valorMora || 0) > 0)
              ? `<span class="badge badge-red">${fmt((f.valorMulta||0)+(f.valorMora||0))}</span>`
              : '—'}</td>
        <td><strong>${fmt(f.totalGeral)}</strong></td>
        <td>
          <strong style="color:var(--success)">${fmt(f.valorRecebido)}</strong>
          ${f.formaPagamento ? `<div style="font-size:11px;color:var(--gray-500);margin-top:2px">💳 ${f.formaPagamento}</div>` : ''}
          ${f.comprovante    ? `<button class="btn btn-ghost btn-sm" style="margin-top:4px;font-size:10px" onclick="verComprovante(${f.id})">🧾 Comprovante</button>` : ''}
        </td>
        <td>${(() => {
          const rec = f.valorRecebido || 0;
          const tot = f.totalGeral    || 0;
          const pago = f.baixaManual || f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED';
          if (pago && rec >= tot && tot > 0)  return '<span class="badge badge-green">PAGO</span>';
          if (pago && rec > 0 && rec < tot)   return '<span class="badge badge-yellow">PARCIAL</span>';
          if (!pago && tot > 0)               return '<span class="badge badge-red">PENDENTE</span>';
          return '—';
        })()}</td>
        <td>${(() => {
          if (!_asaasAtivo()) return '<span style="color:var(--gray-300);font-size:11px">—</span>';
          const pid = f.asaasPaymentId;
          const st  = f.asaasStatus;
          if (!pid) return `<button id="boleto-btn-${f.id}" class="boleto-btn boleto-btn-gerar" onclick="gerarBoleto(${f.id})">🏦 Gerar</button>`;
          if (st === 'CANCELED') return `<button class="boleto-btn boleto-btn-cancel" onclick="gerarBoleto(${f.id})">↺ Regerar</button>`;
          if (st === 'RECEIVED' || st === 'CONFIRMED') return `<span class="boleto-btn boleto-btn-pago">✅ Pago</span>`;
          if (st === 'OVERDUE')  return `<button class="boleto-btn boleto-btn-cancel" onclick="verBoleto(${f.id})">⚠️ Vencido</button>`;
          return `<button class="boleto-btn boleto-btn-ver" onclick="verBoleto(${f.id})">🏦 Ver</button>`;
        })()}</td>
        <td>
          <div class="actions">
            ${(() => {
              const tot  = f.totalGeral || 0;
              const pago = f.baixaManual || f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED';
              return (!pago && tot > 0 && _podeAcao('financeiro','editar'))
                ? `<button class="btn btn-primary btn-sm" onclick="openBaixa(${f.id})">💰 Baixar</button>`
                : '';
            })()}
            ${_podeAcao('financeiro','editar') ? `<button class="btn btn-ghost btn-sm" onclick="openFinanceiro(${f.id})">Editar</button>` : ''}
            ${_podeAcao('financeiro','excluir') ? `<button class="btn btn-danger btn-sm" onclick="deleteFinanceiro(${f.id})">Excluir</button>` : ''}
          </div>
        </td>
      </tr>`).join('');
}

// Recalcula todos os campos derivados do modal financeiro
function calcFinanceiro() {
  const form = document.getElementById('form-financeiro');
  if (!form) return;
  const num = n => parseFloat(form.elements[n]?.value) || 0;
  const fmtKwh = v => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kWh';

  // Energia: (Leitura Atual − Leitura Anterior) × Valor kWh
  const _tipoEnergia = DB.config.energia?.tipo || 'solar';
  const _isSolar     = _tipoEnergia !== 'coelba';
  const kwh     = _isSolar ? Math.max(0, num('leituraAtual') - num('leituraAnterior')) : 0;
  const totEner = _isSolar ? kwh * num('valorKwh') : 0;
  document.getElementById('fin-consumo-kwh').textContent   = fmtKwh(kwh);
  document.getElementById('fin-total-energia').textContent = fmt(totEner);
  const _rowEnergia = document.getElementById('fin-resumo-energia')?.closest('.fin-resumo-row');
  if (_rowEnergia) _rowEnergia.style.display = _isSolar ? '' : 'none';

  // Multa (% sobre valor do contrato)
  const valCtrt = num('valorContrato');
  const multa   = valCtrt * (num('pctMulta') / 100);
  document.getElementById('fin-vlr-multa').textContent = fmt(multa);

  // Mora (% ao dia × dias de atraso × valor contrato)
  const mora    = valCtrt * (num('pctMora') / 100) * num('diasAtraso');
  document.getElementById('fin-vlr-mora').textContent = fmt(mora);

  // Totalizador
  const txManutencao = num('taxaManutencao');
  const txExtras     = num('taxasExtras');
  const total = valCtrt + num('consumoAgua') + txManutencao + txExtras + totEner + multa + mora;
  document.getElementById('fin-resumo-contrato').textContent   = fmt(valCtrt);
  document.getElementById('fin-resumo-agua').textContent       = fmt(num('consumoAgua'));
  document.getElementById('fin-resumo-manutencao').textContent = fmt(txManutencao);
  document.getElementById('fin-resumo-extras').textContent     = fmt(txExtras);
  document.getElementById('fin-resumo-energia').textContent    = fmt(totEner);
  document.getElementById('fin-resumo-multa').textContent      = fmt(multa);
  document.getElementById('fin-resumo-mora').textContent       = fmt(mora);
  document.getElementById('fin-resumo-total').textContent      = fmt(total);

  // Sugere valor recebido se ainda não preenchido pelo usuário
  const campoRecebido = form.elements['valorRecebido'];
  if (campoRecebido && !campoRecebido.dataset.touched) campoRecebido.value = total.toFixed(2);
}

// Calcula dias de atraso: hoje − data de vencimento (se positivo)
function calcDiasAtraso() {
  const form = document.getElementById('form-financeiro');
  if (!form) return;
  const campo = form.elements['diasAtraso'];
  const dataPgto = form.elements['dataPagamento'].value;
  if (!dataPgto) {
    campo.value = 0;
    campo.classList.remove('em-atraso');
    calcFinanceiro();
    return;
  }
  const vencimento = new Date(dataPgto + 'T12:00:00');
  const hoje = new Date();
  hoje.setHours(12, 0, 0, 0);
  const dias = Math.max(0, Math.floor((hoje - vencimento) / 86400000));
  campo.value = dias;
  campo.classList.toggle('em-atraso', dias > 0);
  calcFinanceiro();
}

// Navega para Financeiro e abre modal (editar id existente ou novo pré-preenchido com contrato)
function irParaFinanceiro(id, codigoContrato) {
  navigate('financeiro');
  setTimeout(() => {
    openFinanceiro(id || null);
    if (!id && codigoContrato) {
      const form = document.getElementById('form-financeiro');
      form.elements['contrato'].value = codigoContrato;
      autoFillContratoValor();
    }
  }, 60);
}

function autoFillContratoValor() {
  const form = document.getElementById('form-financeiro');
  const cod  = form.elements['contrato'].value;
  const c    = DB.contratos.find(x => x.codigo === cod);
  if (c) {
    form.elements['valorContrato'].value               = (c.valorMensal    || 0).toFixed(2);
    form.elements['consumoAgua'].value                 = (c.taxaAgua       || 0).toFixed(2);
    form.elements['taxaManutencao'].value              = (c.taxaManutencao || 0).toFixed(2);
    form.elements['taxasExtras'].value                 = (c.taxasExtras    || 0).toFixed(2);
    if (c.inquilino) form.elements['inquilino'].value  = c.inquilino;
  }
  _aplicarEnergiaNoForm();
  calcFinanceiro();
}

function openFinanceiro(id = null) {
  _finComprovantePendente = null;
  const modal = document.getElementById('modal-financeiro');
  const form  = document.getElementById('form-financeiro');
  form.reset();
  delete form.valorRecebido.dataset.touched;
  form.dataset.id = id || '';
  _renderFinComprovanteZone();
  document.getElementById('modal-fin-title').textContent = id ? 'Editar Pagamento' : 'Registrar Pagamento';
  form.contrato.innerHTML = '<option value="">Selecione...</option>' +
    DB.contratos.map(c => `<option value="${c.codigo}">${c.codigo} — ${c.imovel}</option>`).join('');
  form.inquilino.innerHTML = '<option value="">Selecione...</option>' +
    DB.inquilinos.map(i => `<option value="${i.nome}">${i.nome}</option>`).join('');
  const el = n => form.elements[n];
  if (!id) {
    el('dataPagamento').value = today();
    calcDiasAtraso();
  }
  if (id) {
    const f = DB.financeiro.find(x => x.id === id);
    el('dataPagamento').value   = f.dataPagamento;
    el('contrato').value        = f.contrato;
    el('inquilino').value       = f.inquilino || '';
    el('valorContrato').value   = f.valorContrato;
    el('consumoAgua').value     = f.consumoAgua     || 0;
    el('taxaManutencao').value  = f.taxaManutencao  || 0;
    el('taxasExtras').value     = f.taxasExtras     || 0;
    el('leituraAnterior').value = f.leituraAnterior || 0;
    el('leituraAtual').value    = f.leituraAtual    || 0;
    el('valorKwh').value        = f.valorKwh        || 0;
    el('pctMulta').value        = f.pctMulta        || 0;
    el('diasAtraso').value      = f.diasAtraso      || 0;
    el('pctMora').value         = f.pctMora         || 0;
    el('valorRecebido').value   = f.valorRecebido;
    el('valorRecebido').dataset.touched = '1';
    el('observacoes').value     = f.observacoes     || '';
    el('dataBaixa').value       = f.dataBaixa       || '';
    el('formaPagamento').value  = f.formaPagamento  || '';
    // restaura cor de atraso
    el('diasAtraso').classList.toggle('em-atraso', (f.diasAtraso || 0) > 0);
    _renderFinComprovanteZone();
  }
  _aplicarEnergiaNoForm();
  calcFinanceiro();
  const finRecord = id ? DB.financeiro.find(x => x.id === id) : null;
  renderCamposExtrasForm('financeiro', 'ce-form-financeiro', finRecord);
  modal.classList.add('open');
}

function saveFinanceiro() {
  const form = document.getElementById('form-financeiro');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const num  = n => parseFloat(form[n]?.value) || 0;

  const kwh          = Math.max(0, num('leituraAtual') - num('leituraAnterior'));
  const totalEnergia = kwh * num('valorKwh');
  const valorMulta   = num('valorContrato') * (num('pctMulta') / 100);
  const valorMora    = num('valorContrato') * (num('pctMora') / 100) * num('diasAtraso');
  const totalGeral   = num('valorContrato') + num('consumoAgua') + num('taxaManutencao') + num('taxasExtras') + totalEnergia + valorMulta + valorMora;

  const data = {
    dataPagamento:  form.dataPagamento.value,
    contrato:       form.contrato.value,
    inquilino:      form.inquilino.value,
    valorContrato:  num('valorContrato'),
    consumoAgua:    num('consumoAgua'),
    taxaManutencao: num('taxaManutencao'),
    taxasExtras:    num('taxasExtras'),
    leituraAnterior:num('leituraAnterior'),
    leituraAtual:   num('leituraAtual'),
    valorKwh:       num('valorKwh'),
    totalEnergia,
    pctMulta:       num('pctMulta'),
    valorMulta,
    diasAtraso:     num('diasAtraso'),
    pctMora:        num('pctMora'),
    valorMora,
    totalGeral,
    dataBaixa:      form.elements['dataBaixa']?.value      || '',
    formaPagamento: form.elements['formaPagamento']?.value || '',
    observacoes:    form.observacoes.value.trim(),
    camposExtras:   coletarCamposExtras('financeiro', form),
  };
  if (_finComprovantePendente) data.comprovante = _finComprovantePendente;
  if (!data.dataPagamento || !data.contrato) { toast('Data e contrato são obrigatórios', 'error'); return; }
  if (id) {
    const idx = DB.financeiro.findIndex(x => x.id === id);
    if (!data.comprovante && DB.financeiro[idx].comprovante) data.comprovante = DB.financeiro[idx].comprovante;
    DB.financeiro[idx] = { ...DB.financeiro[idx], ...data };
  } else {
    DB.financeiro.push({ id: nextId(DB.financeiro), ...data });
  }
  saveData();
  closeModal('modal-financeiro');
  renderFinanceiro();
  toast(id ? 'Pagamento atualizado!' : 'Pagamento registrado!', 'success');

  // Auto-geração de boleto (apenas novos registros)
  if (!id && DB.config.asaas?.ativo && DB.config.asaas?.autoGerar) {
    const novo = DB.financeiro[DB.financeiro.length - 1];
    setTimeout(() => gerarBoleto(novo.id), 400);
  }
}

function deleteFinanceiro(id) {
  if (!confirm_('Excluir este registro?')) return;
  DB.financeiro = DB.financeiro.filter(x => x.id !== id);
  saveData();
  renderFinanceiro();
  toast('Registro excluído');
}

// ── BAIXA MANUAL ───────────────────────────────────────
let _baixaFinId = null;
let _baixaComprovantePendente = null;
let _finComprovantePendente   = null;

function openBaixa(id) {
  _baixaFinId = id;
  _baixaComprovantePendente = null;
  const f = DB.financeiro.find(x => x.id === id);
  if (!f) return;
  const form = document.getElementById('form-baixa');
  form.reset();
  document.getElementById('modal-baixa-info').innerHTML = `
    <div><span style="color:var(--gray-400)">Contrato</span><br><strong>${f.contrato}</strong></div>
    <div><span style="color:var(--gray-400)">Inquilino</span><br><strong>${f.inquilino || '—'}</strong></div>
    <div><span style="color:var(--gray-400)">Total a receber</span><br><strong style="color:var(--primary)">${fmt(f.totalGeral)}</strong></div>
    <div><span style="color:var(--gray-400)">Já recebido</span><br><strong style="color:var(--success)">${fmt(f.valorRecebido || 0)}</strong></div>`;
  form.elements['dataBaixa'].value      = today();
  form.elements['valorRecebido'].value  = (f.totalGeral || 0).toFixed(2);
  if (f.formaPagamento) form.elements['formaPagamento'].value = f.formaPagamento;
  if (f.dataBaixa)      form.elements['dataBaixa'].value      = f.dataBaixa;
  _renderBaixaComprovante();
  document.getElementById('modal-baixa').classList.add('open');
}

function _renderBaixaComprovante() {
  const zone = document.getElementById('baixa-comprovante-zone');
  if (!zone) return;
  const f = _baixaFinId ? DB.financeiro.find(x => x.id === _baixaFinId) : null;
  const comp = _baixaComprovantePendente || f?.comprovante;
  if (comp) {
    const isPdf = (comp.tipo || '').includes('pdf') || (comp.dados || '').startsWith('data:application/pdf');
    zone.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--gray-50);border-radius:8px;width:100%">
        <span style="font-size:18px">${isPdf ? '📄' : '🖼️'}</span>
        <span style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${comp.nome}</span>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('baixa-file-input').click()">Trocar</button>
        <button class="btn btn-danger btn-sm" onclick="_baixaComprovantePendente=null;_renderBaixaComprovante()">✕</button>
      </div>`;
  } else {
    zone.innerHTML = `<button class="btn btn-ghost btn-sm" onclick="document.getElementById('baixa-file-input').click()">📎 Anexar comprovante</button>`;
  }
}

function handleBaixaFile(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) { toast('Arquivo muito grande (máx 10 MB)', 'error'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _baixaComprovantePendente = { nome: file.name, tipo: file.type, dados: e.target.result };
    _renderBaixaComprovante();
  };
  reader.readAsDataURL(file);
  input.value = '';
}

function salvarBaixa() {
  if (!_baixaFinId) return;
  const form           = document.getElementById('form-baixa');
  const dataBaixa      = form.elements['dataBaixa'].value;
  const formaPagamento = form.elements['formaPagamento'].value;
  const valorRecebido  = parseFloat(form.elements['valorRecebido'].value) || 0;
  const obs            = form.elements['observacoesBaixa'].value.trim();
  if (!dataBaixa)      { toast('Informe a data do pagamento',     'error'); return; }
  if (!formaPagamento) { toast('Informe a forma de pagamento',    'error'); return; }
  const idx = DB.financeiro.findIndex(x => x.id === _baixaFinId);
  if (idx < 0) return;
  const f = DB.financeiro[idx];
  DB.financeiro[idx] = {
    ...f,
    valorRecebido,
    dataBaixa,
    formaPagamento,
    observacoes:  obs || f.observacoes || '',
    comprovante:  _baixaComprovantePendente || f.comprovante || null,
    baixaManual:  true,
  };
  saveData();
  closeModal('modal-baixa');
  renderFinanceiro();
  toast('Pagamento confirmado!', 'success');
}

function verComprovante(id) {
  const f = DB.financeiro.find(x => x.id === id);
  const comp = f?.comprovante;
  if (!comp) return;
  const isPdf = (comp.tipo || '').includes('pdf');
  if (isPdf) {
    const w = window.open();
    w.document.write(`<iframe src="${comp.dados}" style="width:100%;height:100vh;border:none"></iframe>`);
  } else {
    const w = window.open();
    w.document.write(`<img src="${comp.dados}" style="max-width:100%">`);
  }
}

function handleFinComprovanteFile(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) { toast('Arquivo muito grande (máx 10 MB)', 'error'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _finComprovantePendente = { nome: file.name, tipo: file.type, dados: e.target.result };
    _renderFinComprovanteZone();
  };
  reader.readAsDataURL(file);
  input.value = '';
}

function _renderFinComprovanteZone() {
  const zone = document.getElementById('fin-comprovante-zone');
  if (!zone) return;
  const id   = parseInt(document.getElementById('form-financeiro')?.dataset.id) || null;
  const f    = id ? DB.financeiro.find(x => x.id === id) : null;
  const comp = _finComprovantePendente || f?.comprovante;
  if (comp) {
    const isPdf = (comp.tipo || '').includes('pdf');
    zone.innerHTML = `
      <span style="font-size:18px">${isPdf ? '📄' : '🖼️'}</span>
      <span style="font-size:12px">${comp.nome}</span>
      <button class="btn btn-ghost btn-sm" onclick="document.getElementById('fin-comprovante-input').click()">Trocar</button>
      <button class="btn btn-danger btn-sm" onclick="_finComprovantePendente=null;_renderFinComprovanteZone()">✕</button>`;
  } else {
    zone.innerHTML = `<button class="btn btn-ghost btn-sm" onclick="document.getElementById('fin-comprovante-input').click()">📎 Anexar</button>`;
  }
}

// ── MANUTENÇÃO ─────────────────────────────────────────
const MAN_DOCS = {
  comprovante: { label: 'Comprovante de Pagamento', icone: '🧾' },
  notaFiscal:  { label: 'Nota Fiscal',              icone: '📄' },
  garantia:    { label: 'Garantia / Peça',           icone: '🛡️' },
};

let _manDocs = { comprovante: null, notaFiscal: null, garantia: null };

function manInitPeriodo() {
  const selAno = document.getElementById('man-sel-ano');
  if (!selAno || selAno.options.length > 0) return;
  const anos = [...new Set([
    ...DB.manutencao.filter(m => m.dataServico).map(m => new Date(m.dataServico + 'T12:00:00').getFullYear()),
    new Date().getFullYear() - 1, new Date().getFullYear(), new Date().getFullYear() + 1
  ])].sort();
  anos.forEach(a => { const o = document.createElement('option'); o.value = a; o.textContent = a; selAno.appendChild(o); });
  document.getElementById('man-sel-mes').value = new Date().getMonth() + 1;
  selAno.value = new Date().getFullYear();
}

function manEnsureAno(ano) {
  const sel = document.getElementById('man-sel-ano');
  if (!sel.querySelector(`option[value="${ano}"]`)) {
    const opt = document.createElement('option');
    opt.value = ano; opt.textContent = ano;
    const insertBefore = [...sel.options].map(o => parseInt(o.value)).find(v => v > ano);
    if (insertBefore) sel.insertBefore(opt, sel.querySelector(`option[value="${insertBefore}"]`));
    else sel.appendChild(opt);
  }
  sel.value = ano;
}

function manNavMes(delta) {
  let mes = parseInt(document.getElementById('man-sel-mes').value) + delta;
  let ano = parseInt(document.getElementById('man-sel-ano').value);
  if (mes < 1)  { mes = 12; ano--; }
  if (mes > 12) { mes = 1;  ano++; }
  document.getElementById('man-sel-mes').value = mes;
  manEnsureAno(ano);
  document.getElementById('man-btn-todos').classList.remove('active');
  renderManutencao();
}

function manToggleTodos() {
  document.getElementById('man-btn-todos').classList.toggle('active');
  renderManutencao();
}

function renderManutencao() {
  manInitPeriodo();
  const search = (document.getElementById('man-search')?.value || '').toLowerCase();
  const todos  = document.getElementById('man-btn-todos')?.classList.contains('active');
  const mes    = parseInt(document.getElementById('man-sel-mes')?.value);
  const ano    = parseInt(document.getElementById('man-sel-ano')?.value);

  let list = [...DB.manutencao];

  if (!todos) {
    list = list.filter(m => {
      if (!m.dataServico) return false;
      const d = new Date(m.dataServico + 'T12:00:00');
      return d.getMonth() + 1 === mes && d.getFullYear() === ano;
    });
  }
  if (search) {
    list = list.filter(m =>
      (m.imovel || '').toLowerCase().includes(search) ||
      (m.tipoServico || '').toLowerCase().includes(search) ||
      (m.prestador || '').toLowerCase().includes(search)
    );
  }

  // Filtro de status
  const statusManFilter = _getActivePill('man-filter-bar');
  if (statusManFilter !== 'todos') {
    list = list.filter(m => m.status === statusManFilter);
  }

  list = _aplicarSort(list, 'man');
  const _manThead = document.getElementById('man-thead');
  if (_manThead) _manThead.innerHTML = '<tr>' +
    _th('man','imovel','Imóvel') + _th('man','tipoServico','Tipo de Serviço') +
    _th('man','prestador','Prestador') + _th('man','dataServico','Data') +
    _th('man','custo','Custo') + _th('man','status','Status') +
    _thStatic('Docs') + _thStatic('Observações') + _thStatic('Ações') + '</tr>';

  // Totais dos cards
  const totalGasto    = list.reduce((s, m) => s + (m.custo || 0), 0);
  const concluidos    = list.filter(m => m.status === 'Concluído').length;
  const andamento     = list.filter(m => m.status === 'Em andamento').length;
  const pendentes     = list.filter(m => m.status === 'Pendente').length;
  const labelPeriodo  = todos ? 'Todos os períodos' : `${MESES[mes - 1]} / ${ano}`;

  document.getElementById('man-total-gasto').textContent    = fmt(totalGasto);
  document.getElementById('man-qtd-total').textContent      = list.length;
  document.getElementById('man-qtd-concluido').textContent  = concluidos;
  document.getElementById('man-qtd-andamento').textContent  = andamento + pendentes;
  document.getElementById('man-periodo-label').textContent  = labelPeriodo;

  // Tabela
  document.getElementById('man-tbody').innerHTML = list.length === 0
    ? `<tr><td colspan="9"><div class="empty"><div class="empty-icon">🔧</div><p>Nenhuma manutenção em ${labelPeriodo}</p></div></td></tr>`
    : list.map(m => {
        const docsBtns = Object.entries(MAN_DOCS).map(([key, meta]) =>
          m[key]
            ? `<button class="btn btn-ghost btn-sm" title="${meta.label}" onclick="viewManDoc(${m.id},'${key}')">${meta.icone}</button>`
            : `<span class="doc-slot-vazio" title="${meta.label} não anexado">${meta.icone}</span>`
        ).join('');
        return `
        <tr>
          <td><strong><span class="filtro-click" onclick="_filtrarPor('man-search',${JSON.stringify(m.imovel||'')},renderManutencao)" title="Filtrar por este imóvel">${m.imovel}</span></strong></td>
          <td>${m.tipoServico ? `<span class="filtro-click" onclick="_filtrarPor('man-search',${JSON.stringify(m.tipoServico)},renderManutencao)" title="Filtrar por este serviço">${m.tipoServico}</span>` : '—'}</td>
          <td>${m.prestador ? `<span class="filtro-click" onclick="_filtrarPor('man-search',${JSON.stringify(m.prestador)},renderManutencao)" title="Filtrar por este prestador">${m.prestador}</span>` : '—'}</td>
          <td>${fmtDate(m.dataServico)}</td>
          <td><strong>${fmt(m.custo)}</strong></td>
          <td><span class="badge ${m.status === 'Concluído' ? 'badge-green' : m.status === 'Em andamento' ? 'badge-yellow' : 'badge-red'}">${m.status}</span></td>
          <td><div class="man-docs-cell">${docsBtns}</div></td>
          <td>${m.observacoes || '—'}</td>
          <td>
            <div class="actions">
              ${_podeAcao('manutencao','editar') ? `<button class="btn btn-ghost btn-sm" onclick="openManutencao(${m.id})">Editar</button>` : ''}
              ${_podeAcao('manutencao','excluir') ? `<button class="btn btn-danger btn-sm" onclick="deleteManutencao(${m.id})">Excluir</button>` : ''}
            </div>
          </td>
        </tr>`;
      }).join('');
}

function viewManDoc(id, tipo) {
  const m = DB.manutencao.find(x => x.id === id);
  if (m && m[tipo]) openBase64File(m[tipo].dados, m[tipo].mimeType);
}

// Chama preventiva sempre que a aba manutenção renderizar
const _origRenderManutencao = renderManutencao;
renderManutencao = function() {
  _origRenderManutencao();
  renderManutencaoPreventiva();
};

// Renderiza uma zona de upload de documento (3 slots fixos)
function renderManDocZone(tipo) {
  const meta = MAN_DOCS[tipo];
  const arq  = _manDocs[tipo];
  const zone = document.getElementById(`man-doc-zone-${tipo}`);
  if (!zone) return;
  if (arq) {
    zone.innerHTML = `
      <div class="man-doc-attached">
        <div class="man-doc-icone">${meta.icone}</div>
        <div class="man-doc-info">
          <span class="man-doc-label">${meta.label}</span>
          <span class="man-doc-fname">${arq.nome}</span>
        </div>
        <div class="man-doc-btns">
          <button type="button" class="btn btn-ghost btn-sm" onclick="openBase64File(_manDocs['${tipo}'].dados, _manDocs['${tipo}'].mimeType)">Ver</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="_manDocs['${tipo}']=null; renderManDocZone('${tipo}')">✕</button>
        </div>
      </div>`;
  } else {
    zone.innerHTML = `
      <label class="man-doc-upload" for="man-file-${tipo}">
        <div class="man-doc-icone">${meta.icone}</div>
        <div class="man-doc-info">
          <span class="man-doc-label">${meta.label}</span>
          <span class="man-doc-hint">Clique para anexar</span>
        </div>
      </label>
      <input type="file" id="man-file-${tipo}" accept=".pdf,image/*" style="display:none"
             onchange="handleManDoc(this,'${tipo}')">`;
  }
}

function handleManDoc(input, tipo) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 8 * 1024 * 1024) { toast('Arquivo muito grande (máx. 8 MB)', 'error'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _manDocs[tipo] = { nome: file.name, mimeType: file.type, dados: e.target.result };
    renderManDocZone(tipo);
    toast(`${MAN_DOCS[tipo].label} anexado!`, 'success');
  };
  reader.readAsDataURL(file);
  input.value = '';
}

function openManutencao(id = null) {
  _manDocs = { comprovante: null, notaFiscal: null, garantia: null };
  const modal = document.getElementById('modal-manutencao');
  const form  = document.getElementById('form-manutencao');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-man-title').textContent = id ? 'Editar Manutenção' : 'Nova Manutenção';
  form.imovel.innerHTML = '<option value="">Selecione...</option>' +
    DB.imoveis.map(i => `<option value="${i.nome}">${i.nome}</option>`).join('');
  form.tipoServico.innerHTML = '<option value="">Selecione...</option>' +
    DB.config.tiposServico.map(t => `<option value="${t}">${t}</option>`).join('');
  form.status.innerHTML = DB.config.statusManutencao.map(s => `<option value="${s}">${s}</option>`).join('');
  if (!id) form.dataServico.value = today();
  if (id) {
    const m = DB.manutencao.find(x => x.id === id);
    form.imovel.value      = m.imovel;
    form.tipoServico.value = m.tipoServico;
    form.prestador.value   = m.prestador;
    form.dataServico.value = m.dataServico;
    form.custo.value       = m.custo;
    form.status.value      = m.status;
    form.observacoes.value = m.observacoes;
    _manDocs.comprovante   = m.comprovante || null;
    _manDocs.notaFiscal    = m.notaFiscal  || null;
    _manDocs.garantia      = m.garantia    || null;
  }
  Object.keys(MAN_DOCS).forEach(renderManDocZone);
  const manRecord = id ? DB.manutencao.find(x => x.id === id) : null;
  renderCamposExtrasForm('manutencao', 'ce-form-manutencao', manRecord);
  modal.classList.add('open');
}

function saveManutencao() {
  const form = document.getElementById('form-manutencao');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const data = {
    imovel:       form.imovel.value,
    tipoServico:  form.tipoServico.value,
    prestador:    form.prestador.value.trim(),
    dataServico:  form.dataServico.value,
    custo:        parseFloat(form.custo.value) || 0,
    status:       form.status.value,
    observacoes:  form.observacoes.value.trim(),
    comprovante:   _manDocs.comprovante,
    notaFiscal:    _manDocs.notaFiscal,
    garantia:      _manDocs.garantia,
    camposExtras:  coletarCamposExtras('manutencao', form),
  };
  if (!data.imovel) { toast('Imóvel é obrigatório', 'error'); return; }
  if (id) {
    const idx = DB.manutencao.findIndex(x => x.id === id);
    DB.manutencao[idx] = { ...DB.manutencao[idx], ...data };
  } else {
    DB.manutencao.push({ id: nextId(DB.manutencao), ...data });
  }
  saveData();
  closeModal('modal-manutencao');
  renderManutencao();
  toast(id ? 'Manutenção atualizada!' : 'Manutenção registrada!', 'success');
}

function deleteManutencao(id) {
  if (!confirm_('Excluir este registro?')) return;
  DB.manutencao = DB.manutencao.filter(x => x.id !== id);
  saveData();
  renderManutencao();
  toast('Registro excluído');
}

// ── MANUTENÇÃO PREVENTIVA ─────────────────────────────

const PREV_PERIOD = {
  mensal:      { label: 'Mensal',      dias: 30  },
  bimestral:   { label: 'Bimestral',   dias: 60  },
  trimestral:  { label: 'Trimestral',  dias: 90  },
  semestral:   { label: 'Semestral',   dias: 180 },
  anual:       { label: 'Anual',       dias: 365 },
  personalizado: { label: 'Personalizado', dias: 0 },
};

function _calcProximaExecucao(ultima, periodicidade, intervaloDias) {
  if (!ultima) return '';
  const dias = periodicidade === 'personalizado'
    ? (parseInt(intervaloDias) || 30)
    : (PREV_PERIOD[periodicidade]?.dias || 30);
  const d = new Date(ultima + 'T12:00:00');
  d.setDate(d.getDate() + dias);
  return d.toISOString().slice(0, 10);
}

function _prevAlertStatus(item) {
  if (item.status !== 'ATIVA' || !item.proximaExecucao) return 'ok';
  const now = new Date(); now.setHours(12, 0, 0, 0);
  const prox = new Date(item.proximaExecucao + 'T12:00:00');
  const diasRestantes = Math.ceil((prox - now) / 86400000);
  if (diasRestantes < 0) return 'vencida';
  if (diasRestantes <= (parseInt(item.diasAlerta) || 15)) return 'alerta';
  return 'ok';
}

function mprevToggleCustom(sel) {
  const show = sel.value === 'personalizado';
  document.getElementById('mprev-custom-group').style.display = show ? '' : 'none';
  const form = sel.closest('form');
  if (form) mprevCalcProxima(form);
}

function mprevCalcProxima(form) {
  const ultima = form.elements['ultimaExecucao']?.value;
  const period = form.elements['periodicidade']?.value;
  const dias   = form.elements['intervaloDias']?.value;
  const prox   = _calcProximaExecucao(ultima, period, dias);
  const el = document.getElementById('mprev-proxima');
  if (el) el.value = prox;
}

function renderManutencaoPreventiva() {
  const tbody  = document.getElementById('mprev-tbody');
  const thead  = document.getElementById('mprev-thead');
  if (!tbody) return;

  const search = (document.getElementById('mprev-search')?.value || '').toLowerCase();
  const pill   = document.querySelector('#mprev-filter-bar .filter-pill.active')?.dataset.filter || 'todos';
  const todayStr = today();

  let list = DB.manutencaoPreventiva.filter(item => {
    const st = _prevAlertStatus(item);
    if (pill === 'alerta')  return st === 'alerta';
    if (pill === 'vencida') return st === 'vencida';
    if (pill === 'ATIVA')   return item.status === 'ATIVA';
    if (pill === 'INATIVA') return item.status === 'INATIVA';
    return true;
  }).filter(item => {
    if (!search) return true;
    return (item.imovel + item.titulo + item.descricao).toLowerCase().includes(search);
  });

  list = _aplicarSort(list, 'mprev');

  if (thead) thead.innerHTML = '<tr>' +
    _th('mprev','imovel','Imóvel') +
    _th('mprev','titulo','Serviço') +
    _th('mprev','periodicidade','Periodicidade') +
    _th('mprev','ultimaExecucao','Última Exec.') +
    _th('mprev','proximaExecucao','Próxima Exec.') +
    _thStatic('Aviso') +
    _th('mprev','status','Status') +
    _thStatic('Ações') +
  '</tr>';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty"><p>Nenhuma manutenção preventiva cadastrada</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(item => {
    const st = _prevAlertStatus(item);
    const period = PREV_PERIOD[item.periodicidade] || { label: item.periodicidade };
    const periodLabel = item.periodicidade === 'personalizado'
      ? `${item.intervaloDias || '?'} dias`
      : period.label;

    let statusBadge, alertBadge;
    if (item.status === 'INATIVA') {
      statusBadge = `<span class="badge badge-gray">Inativa</span>`;
      alertBadge  = `<span style="color:#aaa">—</span>`;
    } else if (st === 'vencida') {
      statusBadge = `<span class="badge badge-red">Vencida</span>`;
      const prox = new Date(item.proximaExecucao + 'T12:00:00');
      const diasAtras = Math.abs(Math.ceil((prox - new Date()) / 86400000));
      alertBadge  = `<span class="badge badge-red">⚠️ Vencida há ${diasAtras}d</span>`;
    } else if (st === 'alerta') {
      statusBadge = `<span class="badge badge-yellow">Alerta</span>`;
      const prox = new Date(item.proximaExecucao + 'T12:00:00');
      const diasAte = Math.ceil((prox - new Date()) / 86400000);
      alertBadge  = `<span class="badge badge-yellow">⏰ Em ${diasAte}d</span>`;
    } else {
      statusBadge = `<span class="badge badge-green">Em dia</span>`;
      const prox = new Date(item.proximaExecucao + 'T12:00:00');
      const diasAte = Math.ceil((prox - new Date()) / 86400000);
      alertBadge  = `<span style="color:var(--success);font-size:13px">✓ ${diasAte}d</span>`;
    }

    return `<tr>
      <td><span class="filtro-click" onclick="_filtrarPor('mprev-search',${JSON.stringify(item.imovel||'')},renderManutencaoPreventiva)">${item.imovel || '—'}</span></td>
      <td><strong>${item.titulo}</strong>${item.descricao ? `<br><small style="color:#888">${item.descricao}</small>` : ''}</td>
      <td><span class="badge badge-blue">${periodLabel}</span></td>
      <td>${item.ultimaExecucao ? fmtDate(item.ultimaExecucao) : '<span style="color:#aaa">Nunca</span>'}</td>
      <td>${item.proximaExecucao ? fmtDate(item.proximaExecucao) : '—'}</td>
      <td>${alertBadge}</td>
      <td>${statusBadge}</td>
      <td style="white-space:nowrap">
        <button class="btn btn-success btn-sm" onclick="openExecucaoPrev(${item.id})" title="Registrar execução">✅ Executar</button>
        <button class="btn btn-ghost btn-sm" onclick="openHistoricoPrev(${item.id})" title="Ver histórico">📋</button>
        <button class="btn btn-ghost btn-sm" onclick="openManutencaoPreventiva(${item.id})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteManutencaoPreventiva(${item.id})">✕</button>
      </td>
    </tr>`;
  }).join('');
}

function openManutencaoPreventiva(id = null) {
  const modal = document.getElementById('modal-mprev');
  const form  = document.getElementById('form-mprev');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-mprev-title').textContent = id ? 'Editar Preventiva' : 'Nova Manutenção Preventiva';
  document.getElementById('mprev-custom-group').style.display = 'none';

  const imovelSel = document.getElementById('mprev-campo-imovel');
  imovelSel.innerHTML = '<option value="Geral (Todo o Prédio)">Geral (Todo o Prédio)</option>' +
    DB.imoveis.map(i => `<option value="${i.nome}">${i.nome}</option>`).join('');

  if (id) {
    const item = DB.manutencaoPreventiva.find(x => x.id === id);
    if (!item) return;
    form.elements['imovel'].value         = item.imovel;
    form.elements['titulo'].value         = item.titulo;
    form.elements['descricao'].value      = item.descricao || '';
    form.elements['periodicidade'].value  = item.periodicidade;
    form.elements['intervaloDias'].value  = item.intervaloDias || '';
    form.elements['diasAlerta'].value     = String(item.diasAlerta || 15);
    form.elements['status'].value         = item.status;
    form.elements['ultimaExecucao'].value = item.ultimaExecucao || '';
    form.elements['proximaExecucao'].value = item.proximaExecucao || '';
    if (item.periodicidade === 'personalizado')
      document.getElementById('mprev-custom-group').style.display = '';
  }
  modal.classList.add('open');
}

function saveManutencaoPreventiva() {
  const form = document.getElementById('form-mprev');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const titulo = form.elements['titulo'].value.trim();
  const imovel = form.elements['imovel'].value;
  if (!titulo) { _fieldError('mprev-campo-titulo', 'Título é obrigatório'); return; }

  const ultima    = form.elements['ultimaExecucao'].value;
  const period    = form.elements['periodicidade'].value;
  const diasInt   = parseInt(form.elements['intervaloDias'].value) || 0;
  const proxima   = _calcProximaExecucao(ultima, period, diasInt) || form.elements['proximaExecucao'].value;

  const data = {
    imovel,
    titulo,
    descricao:       form.elements['descricao'].value.trim(),
    periodicidade:   period,
    intervaloDias:   diasInt,
    ultimaExecucao:  ultima,
    proximaExecucao: proxima,
    diasAlerta:      parseInt(form.elements['diasAlerta'].value) || 15,
    status:          form.elements['status'].value,
  };

  if (id) {
    const idx = DB.manutencaoPreventiva.findIndex(x => x.id === id);
    DB.manutencaoPreventiva[idx] = { ...DB.manutencaoPreventiva[idx], ...data };
  } else {
    DB.manutencaoPreventiva.push({ id: nextId(DB.manutencaoPreventiva), historico: [], ...data });
  }
  saveData();
  closeModal('modal-mprev');
  renderManutencaoPreventiva();
  renderDashboard();
  toast(id ? 'Preventiva atualizada!' : 'Preventiva cadastrada!', 'success');
}

function deleteManutencaoPreventiva(id) {
  if (!confirm_('Excluir esta manutenção preventiva?')) return;
  DB.manutencaoPreventiva = DB.manutencaoPreventiva.filter(x => x.id !== id);
  saveData();
  renderManutencaoPreventiva();
  renderDashboard();
  toast('Preventiva excluída');
}

function openExecucaoPrev(id) {
  const item = DB.manutencaoPreventiva.find(x => x.id === id);
  if (!item) return;
  const form = document.getElementById('form-exec-prev');
  form.reset();
  form.elements['prevId'].value       = id;
  form.elements['dataExecucao'].value = today();
  const info = document.getElementById('exec-prev-info');
  info.innerHTML = `<strong>${item.titulo}</strong> — ${item.imovel}<br>
    <span style="color:#666">Próxima execução prevista: <strong>${item.proximaExecucao ? fmtDate(item.proximaExecucao) : 'não definida'}</strong></span>`;
  document.getElementById('modal-exec-prev').classList.add('open');
}

function saveExecucaoPrev() {
  const form = document.getElementById('form-exec-prev');
  const id   = parseInt(form.elements['prevId'].value);
  const data = form.elements['dataExecucao'].value;
  if (!data) { toast('Informe a data da execução', 'error'); return; }
  const item = DB.manutencaoPreventiva.find(x => x.id === id);
  if (!item) return;

  const execEntry = {
    id:   nextId(item.historico),
    data,
    custo: parseFloat(form.elements['custo'].value) || 0,
    obs:   form.elements['obs'].value.trim(),
  };
  item.historico.push(execEntry);
  item.ultimaExecucao  = data;
  item.proximaExecucao = _calcProximaExecucao(data, item.periodicidade, item.intervaloDias);

  saveData();
  closeModal('modal-exec-prev');
  renderManutencaoPreventiva();
  renderDashboard();
  toast('Execução registrada! Próxima: ' + fmtDate(item.proximaExecucao), 'success');
}

function openHistoricoPrev(id) {
  const item = DB.manutencaoPreventiva.find(x => x.id === id);
  if (!item) return;
  document.getElementById('modal-hist-prev-title').textContent = `Histórico — ${item.titulo}`;
  const hist = item.historico || [];
  const content = document.getElementById('hist-prev-content');
  if (hist.length === 0) {
    content.innerHTML = `<div class="empty"><p>Nenhuma execução registrada ainda</p></div>`;
  } else {
    const rows = [...hist].reverse().map(h => `
      <tr>
        <td>${fmtDate(h.data)}</td>
        <td>${h.custo > 0 ? fmt(h.custo) : '—'}</td>
        <td>${h.obs || '—'}</td>
      </tr>`).join('');
    content.innerHTML = `<table style="width:100%">
      <thead><tr><th>Data</th><th>Custo</th><th>Observações</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  }
  document.getElementById('modal-hist-prev').classList.add('open');
}

// ── USUÁRIOS ───────────────────────────────────────────

const ACAO_LABELS = { criar: 'Criar', editar: 'Editar', excluir: 'Excluir' };

function renderUsuarios() {
  const list = DB.usuarios;
  document.getElementById('usr-total').textContent    = list.length;
  document.getElementById('usr-admins').textContent   = list.filter(u => u.perfil === 'admin').length;
  document.getElementById('usr-ativos').textContent   = list.filter(u => u.ativo).length;
  document.getElementById('usr-inativos').textContent = list.filter(u => !u.ativo).length;

  const tbody = document.getElementById('usr-tbody');
  if (!tbody) return;
  tbody.innerHTML = list.map(u => {
    let perCell;
    if (u.perfil === 'admin') {
      perCell = '<span class="badge badge-admin">Acesso Total</span>';
    } else if (u.perfil === 'inquilino') {
      const inq = DB.inquilinos.find(x => x.id === u.inquilinoId);
      perCell = `<span class="badge-inquilino" style="display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:600">🏠 Portal do Inquilino${inq ? ' · ' + inq.nome.split(' ')[0] : ''}</span>`;
    } else {
      const perm = u.permissoes || {};
      const linhas = Array.isArray(perm)
        ? perm.map(p => { const pg = PAGINAS_PERM.find(x => x.id === p); return pg ? `<span class="user-perm-tag">${pg.icon} ${pg.label}</span>` : ''; }).join('')
        : PAGINAS_PERM.filter(pg => perm[pg.id]?.ver).map(pg => {
            const acoes = pg.acoes.filter(a => perm[pg.id]?.[a]).map(a => ACAO_LABELS[a]).join(', ');
            return `<span class="user-perm-tag" title="${acoes || 'somente ver'}">${pg.icon} ${pg.label}${acoes ? ` <small style="opacity:.7">(${acoes})</small>` : ''}</span>`;
          }).join('');
      perCell = linhas || '<span style="color:#aaa">Sem acesso</span>';
    }
    const isMe = _currentUser && u.id === _currentUser.id;
    const isInq = u.perfil === 'inquilino';
    return `<tr>
      <td><strong>${u.nome}</strong></td>
      <td><code style="background:var(--gray-100);padding:2px 7px;border-radius:5px;font-size:12px">${u.usuario}</code></td>
      <td><span class="badge badge-${u.perfil === 'admin' ? 'admin' : isInq ? 'inquilino' : 'usuario'}">${u.perfil === 'admin' ? '👑 Admin' : isInq ? '🏠 Inquilino' : '👤 Usuário'}</span></td>
      <td><div class="user-perm-tags">${perCell}</div></td>
      <td>${u.ativo ? '<span class="badge badge-green">Ativo</span>' : '<span class="badge badge-red">Inativo</span>'}</td>
      <td style="white-space:nowrap">
        ${!isInq ? `<button class="btn btn-ghost btn-sm" onclick="openUsuario(${u.id})">Editar</button>` : ''}
        ${!isMe && !isInq ? `<button class="btn btn-danger btn-sm" onclick="deleteUsuario(${u.id})">Excluir</button>` : ''}
        ${isMe ? '<span style="font-size:11px;color:var(--gray-400)">(você)</span>' : ''}
        ${isInq ? `<button class="btn btn-ghost btn-sm" onclick="_toggleInquilinoAcesso(${u.id})">${u.ativo ? '🔒 Desativar' : '🔓 Ativar'}</button>` : ''}
      </td>
    </tr>`;
  }).join('');
}

function _toggleInquilinoAcesso(userId) {
  const u = DB.usuarios.find(x => x.id === userId);
  if (!u || u.perfil !== 'inquilino') return;
  u.ativo = !u.ativo;
  saveData();
  renderUsuarios();
  toast(u.ativo ? 'Acesso do inquilino ativado' : 'Acesso do inquilino desativado');
}

function _buildPermTable(permissoes) {
  // permissoes: objeto {page: {ver, criar, editar, excluir}} ou array legado
  const perm = (Array.isArray(permissoes) || !permissoes) ? {} : permissoes;
  const acoesHeader = `<th style="width:60px;text-align:center">Ver</th>
    <th style="width:60px;text-align:center">Criar</th>
    <th style="width:60px;text-align:center">Editar</th>
    <th style="width:70px;text-align:center">Excluir</th>`;
  const rows = PAGINAS_PERM.map(pg => {
    const pgPerm = perm[pg.id] || {};
    const verChecked = pgPerm.ver ? 'checked' : '';
    const cells = ['criar','editar','excluir'].map(a => {
      if (!pg.acoes.includes(a)) return `<td style="text-align:center;color:#ddd">—</td>`;
      const chk = pgPerm[a] ? 'checked' : '';
      return `<td style="text-align:center"><input type="checkbox" class="perm-cb" data-page="${pg.id}" data-acao="${a}" ${chk} onchange="usrSyncPerm(this)"></td>`;
    }).join('');
    return `<tr>
      <td style="padding:7px 10px">${pg.icon} ${pg.label}</td>
      <td style="text-align:center"><input type="checkbox" class="perm-cb perm-ver" data-page="${pg.id}" data-acao="ver" ${verChecked} onchange="usrSyncVer(this)"></td>
      ${cells}
    </tr>`;
  }).join('');
  return `<table class="perm-table">
    <thead><tr><th>Módulo</th>${acoesHeader}</tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function openUsuario(id = null) {
  const modal = document.getElementById('modal-usuario');
  const form  = document.getElementById('form-usuario');
  form.reset();
  form.dataset.id = id || '';
  document.getElementById('modal-usuario-title').textContent = id ? 'Editar Usuário' : 'Novo Usuário';
  document.getElementById('usr-senha-label').textContent = id ? 'Nova Senha (deixe vazio para manter)' : 'Senha *';

  let permExistente = {};
  if (id) {
    const u = DB.usuarios.find(x => x.id === id);
    if (!u) return;
    form.elements['nome'].value    = u.nome;
    form.elements['usuario'].value = u.usuario;
    form.elements['perfil'].value  = u.perfil;
    form.elements['ativo'].value   = u.ativo ? '1' : '0';
    permExistente = Array.isArray(u.permissoes) ? {} : (u.permissoes || {});
  }

  document.getElementById('usr-perm-grid').innerHTML = _buildPermTable(permExistente);
  usrTogglePerfil(form.elements['perfil']);
  modal.classList.add('open');
}

// Quando "Ver" é desmarcado, desmarca todas as ações daquela linha
function usrSyncVer(cb) {
  const page = cb.dataset.page;
  const checked = cb.checked;
  document.querySelectorAll(`#usr-perm-grid .perm-cb[data-page="${page}"]`).forEach(c => {
    if (!checked) c.checked = false;
  });
}

// Quando uma ação é marcada, marca "Ver" automaticamente
function usrSyncPerm(cb) {
  if (cb.checked) {
    const page = cb.dataset.page;
    const verCb = document.querySelector(`#usr-perm-grid .perm-ver[data-page="${page}"]`);
    if (verCb) verCb.checked = true;
  }
}

function usrTogglePerfil(sel) {
  const isAdmin = sel.value === 'admin';
  document.getElementById('usr-perm-section').style.display = isAdmin ? 'none' : '';
}

function usrSelectAll(check) {
  document.querySelectorAll('#usr-perm-grid .perm-cb').forEach(cb => { cb.checked = check; });
}

function saveUsuario() {
  const form = document.getElementById('form-usuario');
  const id   = form.dataset.id ? parseInt(form.dataset.id) : null;
  const nome    = form.elements['nome'].value.trim();
  const usuario = form.elements['usuario'].value.trim().toLowerCase();
  const senha   = form.elements['senha'].value;
  const senha2  = form.elements['senhaConfirm'].value;
  const perfil  = form.elements['perfil'].value;
  const ativo   = form.elements['ativo'].value === '1';

  if (!nome)    { _fieldError('usr-campo-nome',    'Nome é obrigatório'); return; }
  if (!usuario) { _fieldError('usr-campo-usuario', 'Usuário é obrigatório'); return; }

  const dup = DB.usuarios.find(u => u.usuario.toLowerCase() === usuario && u.id !== id);
  if (dup) { _fieldError('usr-campo-usuario', `Usuário "${usuario}" já existe`); return; }

  if (!id && !senha) { _fieldError('usr-campo-senha', 'Senha é obrigatória para novo usuário'); return; }
  if (senha && senha !== senha2) { _fieldError('usr-campo-senha2', 'Senhas não conferem'); return; }
  if (senha && senha.length < 3) { _fieldError('usr-campo-senha', 'Senha deve ter ao menos 3 caracteres'); return; }

  // Coleta permissões no novo formato objeto
  let permissoes;
  if (perfil === 'admin') {
    permissoes = {};
    PAGINAS_PERM.forEach(pg => {
      permissoes[pg.id] = { ver: true };
      pg.acoes.forEach(a => { permissoes[pg.id][a] = true; });
    });
    permissoes['usuarios'] = { ver: true };
  } else {
    permissoes = {};
    PAGINAS_PERM.forEach(pg => {
      const verCb = document.querySelector(`#usr-perm-grid .perm-ver[data-page="${pg.id}"]`);
      if (verCb?.checked) {
        permissoes[pg.id] = { ver: true };
        pg.acoes.forEach(a => {
          const cb = document.querySelector(`#usr-perm-grid .perm-cb[data-page="${pg.id}"][data-acao="${a}"]`);
          if (cb?.checked) permissoes[pg.id][a] = true;
        });
      }
    });
  }

  if (id) {
    const idx = DB.usuarios.findIndex(u => u.id === id);
    const upd = { nome, usuario, perfil, permissoes, ativo };
    if (senha) upd.senha = senha;
    DB.usuarios[idx] = { ...DB.usuarios[idx], ...upd };
    if (_currentUser?.id === id) { _currentUser = DB.usuarios[idx]; _mostrarApp(); }
  } else {
    DB.usuarios.push({ id: nextId(DB.usuarios), nome, usuario, senha, perfil, permissoes, ativo });
  }
  saveData();
  closeModal('modal-usuario');
  renderUsuarios();
  toast(id ? 'Usuário atualizado!' : 'Usuário criado!', 'success');
}

function deleteUsuario(id) {
  if (_currentUser?.id === id) { toast('Você não pode excluir sua própria conta', 'error'); return; }
  if (!confirm_('Excluir este usuário?')) return;
  DB.usuarios = DB.usuarios.filter(u => u.id !== id);
  saveData();
  renderUsuarios();
  toast('Usuário excluído');
}

function openAlterarSenha() {
  document.getElementById('topbar-user-dropdown').classList.remove('open');
  const form = document.getElementById('form-alterar-senha');
  form.reset();
  form.elements['userId'].value = _currentUser?.id || '';
  document.getElementById('modal-alterar-senha').classList.add('open');
}

function saveAlterarSenha() {
  const form    = document.getElementById('form-alterar-senha');
  const userId  = parseInt(form.elements['userId'].value);
  const atual   = form.elements['senhaAtual'].value;
  const nova    = form.elements['novaSenha'].value;
  const confirm = form.elements['novaSenhaConfirm'].value;
  const u = DB.usuarios.find(x => x.id === userId);
  if (!u) return;
  if (u.senha !== atual) { _fieldError('as-campo-atual', 'Senha atual incorreta'); return; }
  if (!nova || nova.length < 3) { _fieldError('as-campo-nova', 'Nova senha deve ter ao menos 3 caracteres'); return; }
  if (nova !== confirm) { _fieldError('as-campo-confirm', 'Senhas não conferem'); return; }
  u.senha = nova;
  if (_currentUser?.id === userId) _currentUser = u;
  saveData();
  closeModal('modal-alterar-senha');
  toast('Senha alterada com sucesso!', 'success');
}

// ── RENOVAÇÃO DE CONTRATO ──────────────────────────────
function openRenovacao(contratoId, pctSugerido = null) {
  const c = DB.contratos.find(x => x.id === contratoId);
  if (!c) return;

  document.getElementById('renov-contrato-id').value = contratoId;
  document.getElementById('renov-codigo').textContent    = c.codigo;
  document.getElementById('renov-imovel').textContent    = c.imovel;
  document.getElementById('renov-inquilino').textContent = c.inquilino || '';
  document.getElementById('renov-periodo-atual').textContent =
    `${fmtDate(c.dataInicio)} → ${fmtDate(c.dataTermino)}`;
  document.getElementById('renov-valor-atual').textContent = fmt(c.valorMensal || 0);

  // Calcula prazo original em meses para propor igual período
  const d1 = new Date(c.dataInicio  + 'T12:00:00');
  const d2 = new Date(c.dataTermino + 'T12:00:00');
  const prazo = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());

  // Novo início = fim atual; novo término = fim atual + mesmo prazo
  document.getElementById('renov-inicio').value = c.dataTermino;
  const novoFim = new Date(c.dataTermino + 'T12:00:00');
  novoFim.setMonth(novoFim.getMonth() + (prazo || 12));
  document.getElementById('renov-termino').value = novoFim.toISOString().split('T')[0];

  // Preenche % sugerido (quando clicado direto do card de índice)
  document.getElementById('renov-pct').value = pctSugerido !== null ? pctSugerido : '';

  // Botões de índice rápido (usa cache se disponível)
  const btnDiv = document.getElementById('renov-indices-btns');
  if (_indicesCache && _indicesCache.todos?.length) {
    btnDiv.innerHTML = _indicesCache.todos.map(ind =>
      `<button class="btn btn-ghost btn-sm" onclick="document.getElementById('renov-pct').value='${ind.acumulado.toFixed(2)}';calcRenovacao()">
        ${ind.nome} ${ind.acumulado.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}%
      </button>`
    ).join('');
  } else {
    btnDiv.innerHTML = '<span style="font-size:12px;color:var(--gray-400);font-style:italic">Índices não carregados — insira % manualmente</span>';
  }

  calcRenovacao();
  document.getElementById('modal-renovacao').classList.add('open');
}

function calcRenovacao() {
  const id = parseInt(document.getElementById('renov-contrato-id').value);
  const c  = DB.contratos.find(x => x.id === id);
  if (!c) return;

  const pct      = parseFloat(document.getElementById('renov-pct').value) || 0;
  const novoValor = Math.round(c.valorMensal * (1 + pct / 100) * 100) / 100;
  const delta     = novoValor - (c.valorMensal || 0);

  document.getElementById('renov-novo-valor').textContent = fmt(novoValor);
  const deltaEl = document.getElementById('renov-delta');
  deltaEl.textContent = (delta >= 0 ? '+' : '') + fmt(delta) + '/mês';
  deltaEl.style.color = delta > 0 ? 'var(--success)' : delta < 0 ? 'var(--danger)' : 'var(--gray-600)';

  // Preview de parcelas
  const inicio  = document.getElementById('renov-inicio').value;
  const termino = document.getElementById('renov-termino').value;
  if (inicio && termino) {
    const d1 = new Date(inicio  + 'T12:00:00');
    const d2 = new Date(termino + 'T12:00:00');
    const meses = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
    document.getElementById('renov-parcelas-preview').textContent =
      meses > 0 ? `${meses} parcela${meses !== 1 ? 's' : ''}` : '—';
  }
}

function confirmarRenovacao() {
  const id      = parseInt(document.getElementById('renov-contrato-id').value);
  const inicio  = document.getElementById('renov-inicio').value;
  const termino = document.getElementById('renov-termino').value;
  const pct     = parseFloat(document.getElementById('renov-pct').value) || 0;

  if (!inicio || !termino) { toast('Informe as datas do novo período', 'error'); return; }
  if (termino <= inicio)   { toast('Data de término deve ser após o início', 'error'); return; }

  const idx = DB.contratos.findIndex(x => x.id === id);
  if (idx < 0) return;
  const c = DB.contratos[idx];

  const novoValor = Math.round((c.valorMensal || 0) * (1 + pct / 100) * 100) / 100;
  const qtdRenovacoes = (c.renovacoes || 0) + 1;

  // Encerra o contrato anterior
  DB.contratos[idx] = { ...c, status: 'ENCERRADO' };
  _syncImovelStatus(c.imovel);

  // Cria novo contrato derivado
  const novoCodigo = (c.contratoOrigem ? c.contratoOrigem : c.codigo) + '-R' + qtdRenovacoes;
  const novoContrato = {
    ...c,
    id:             nextId(DB.contratos),
    codigo:         novoCodigo,
    dataInicio:     inicio,
    dataTermino:    termino,
    valorMensal:    novoValor,
    status:         'ATIVO',
    renovacoes:     qtdRenovacoes,
    contratoOrigem: c.contratoOrigem || c.codigo,
  };
  DB.contratos.push(novoContrato);
  _syncImovelStatus(novoContrato.imovel);

  const qtd = gerarParcelasContrato(novoContrato);
  saveData();
  closeModal('modal-renovacao');
  renderDashboard();
  renderContratos();
  renderFinanceiro();
  toast(`Contrato ${novoCodigo} criado com ${pct > 0 ? pct.toFixed(2)+'% de reajuste' : 'sem reajuste'}. ${qtd} parcela${qtd !== 1 ? 's' : ''} gerada${qtd !== 1 ? 's' : ''} no Financeiro.`, 'success');
}

// ── ASAAS ──────────────────────────────────────────────

const _asaasServer = () => window.location.protocol !== 'file:';

function _asaasAtivo() {
  return DB.config.asaas?.ativo === true;
}

async function _autoDetectAsaas() {
  if (!_asaasServer()) return;
  if (DB.config.asaas?.ativo) return;
  try {
    const data = await fetch('/api/asaas/config').then(r => r.json());
    if (data.configured) {
      DB.config.asaas = Object.assign({ autoGerar: false, nomeBeneficiario: '' }, DB.config.asaas, { ativo: true });
      saveData();
      if (document.getElementById('page-financeiro')?.classList.contains('active')) renderFinanceiro();
    }
  } catch {}
}

async function _asaasCall(method, path, body) {
  const res = await fetch(`/api/asaas${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

// Testa conexão com Asaas e atualiza barra de status
async function testAsaasConnection() {
  const dot  = document.getElementById('asaas-status-dot');
  const text = document.getElementById('asaas-status-text');
  if (!dot) return;
  if (!_asaasServer()) {
    dot.style.background  = '#f59e0b';
    text.textContent = '⚠️ Abra o sistema via servidor (node server.js) para usar a integração';
    return;
  }
  dot.style.background  = '#9ca3af';
  text.textContent = 'Testando...';
  try {
    const res = await _asaasCall('GET', '/status');
    if (res.ok && res.account?.name) {
      dot.style.background  = '#0e9f6e';
      text.textContent = `✅ Conectado — ${res.account.name} (${res.env})`;
    } else {
      dot.style.background  = '#e02424';
      text.textContent = `❌ Erro: ${JSON.stringify(res.account?.errors?.[0]?.description || 'Verifique a chave no arquivo .env')}`;
    }
  } catch {
    dot.style.background  = '#e02424';
    text.textContent = '❌ Servidor não acessível — execute node server.js';
  }
}

// Salva config Asaas no DB
async function saveAsaasConfig() {
  const apiKey          = document.getElementById('cfg-asaas-key')?.value.trim() || '';
  const env             = document.querySelector('input[name="cfg-asaas-env"]:checked')?.value || 'sandbox';
  const webhookToken    = document.getElementById('cfg-asaas-webhook-token')?.value.trim() || '';
  const ativo           = document.getElementById('cfg-asaas-ativo')?.checked || false;
  const autoGerar       = document.getElementById('cfg-asaas-autogerar')?.checked || false;
  const nomeBeneficiario = document.getElementById('cfg-asaas-beneficiario')?.value.trim() || '';

  // Salva preferências no localStorage
  DB.config.asaas = { ativo, autoGerar, nomeBeneficiario };
  saveData();

  // Envia chave ao servidor para salvar no .env (só se preenchida)
  if (apiKey && _asaasServer()) {
    const btn = event?.target;
    if (btn) { btn.disabled = true; btn.textContent = '⏳ Salvando...'; }
    try {
      const res = await fetch('/api/asaas/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey, env, webhookToken }),
      });
      const data = await res.json();
      if (data.ok) {
        toast('Configurações salvas e aplicadas!', 'success');
        document.getElementById('cfg-asaas-key').value = '';
        await _carregarAsaasAtual();
        if (ativo) testAsaasConnection();
      } else {
        toast(`Erro: ${data.error}`, 'error');
      }
    } catch {
      toast('Erro ao comunicar com o servidor', 'error');
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar e Aplicar Configurações Asaas'; }
    }
  } else if (!apiKey) {
    toast('Preferências salvas (chave não alterada)', 'success');
    if (ativo) testAsaasConnection();
  } else {
    toast('Configurações salvas localmente', 'success');
  }
}

// Carrega chave mascarada atual do servidor
async function _carregarAsaasAtual() {
  if (!_asaasServer()) return;
  try {
    const res = await fetch('/api/asaas/config');
    const data = await res.json();
    const el = document.getElementById('cfg-asaas-key-atual');
    if (el) {
      el.textContent = data.configured
        ? `Chave atual: ${data.keyMasked} | Ambiente: ${data.env}`
        : 'Nenhuma chave configurada';
    }
    // Marca ambiente correto
    const radio = document.querySelector(`input[name="cfg-asaas-env"][value="${data.env}"]`);
    if (radio) radio.checked = true;
  } catch { /* servidor offline */ }
}

function toggleAsaasKey() {
  const input  = document.getElementById('cfg-asaas-key');
  const toggle = document.getElementById('cfg-asaas-key-toggle');
  if (!input) return;
  const show = input.type === 'password';
  input.type  = show ? 'text' : 'password';
  toggle.textContent = show ? '🙈' : '👁';
}

function copiarWebhookUrl() {
  const url = document.getElementById('asaas-webhook-url')?.textContent;
  if (url) { navigator.clipboard.writeText(url); toast('URL copiada!', 'success'); }
}

// Gera boleto para um registro financeiro
async function gerarBoleto(finId) {
  if (!_asaasAtivo()) { toast('Integração Asaas não está ativa', 'error'); return; }

  const f = DB.financeiro.find(x => x.id === finId);
  if (!f) return;

  // Busca inquilino para obter CPF
  const contrato = DB.contratos.find(c => c.codigo === f.contrato);
  const inq = contrato ? DB.inquilinos.find(i => i.nome === contrato.inquilino) : null;

  const btnId = `boleto-btn-${finId}`;
  const btn = document.getElementById(btnId);
  if (btn) { btn.textContent = '⏳'; btn.disabled = true; }

  try {
    // 1) Cria/busca cliente Asaas
    let customerId = f.asaasCustomerId;
    if (!customerId) {
      const custRes = await _asaasCall('POST', '/customer', {
        name:        f.inquilino || contrato?.inquilino || 'Inquilino',
        cpfCnpj:     inq?.cpf || '',
        email:       inq?.email || '',
        mobilePhone: inq?.celular || '',
      });
      if (!custRes.ok) {
        toast(`Erro ao criar cliente: ${custRes.errors?.[0]?.description || 'verifique o CPF do inquilino'}`, 'error');
        if (btn) { btn.textContent = '🏦 Gerar'; btn.disabled = false; }
        return;
      }
      customerId = custRes.customer.id;
    }

    // 2) Monta detalhamento de valores para as observações do boleto
    const linhasObs = [];
    if ((f.valorContrato || 0) > 0)
      linhasObs.push(`Aluguel: R$ ${(f.valorContrato).toFixed(2).replace('.',',')}`);
    if ((f.consumoAgua || 0) > 0)
      linhasObs.push(`Taxa de Agua: R$ ${(f.consumoAgua).toFixed(2).replace('.',',')}`);
    if ((f.taxaManutencao || 0) > 0)
      linhasObs.push(`Taxa de Manutencao: R$ ${(f.taxaManutencao).toFixed(2).replace('.',',')}`);
    if ((f.taxasExtras || 0) > 0)
      linhasObs.push(`Taxas Extras: R$ ${(f.taxasExtras).toFixed(2).replace('.',',')}`);
    if ((f.totalEnergia || 0) > 0) {
      const kwh = Math.max(0, (f.leituraAtual||0) - (f.leituraAnterior||0));
      linhasObs.push(`Energia (${kwh} kWh x R$ ${(f.valorKwh||0).toFixed(4).replace('.',',')}): R$ ${(f.totalEnergia).toFixed(2).replace('.',',')}`);
    }
    if ((f.valorMulta || 0) > 0)
      linhasObs.push(`Multa (${f.pctMulta||0}%): R$ ${(f.valorMulta).toFixed(2).replace('.',',')}`);
    if ((f.valorMora || 0) > 0)
      linhasObs.push(`Mora (${f.pctMora||0}% x ${f.diasAtraso||0} dias): R$ ${(f.valorMora).toFixed(2).replace('.',',')}`);
    linhasObs.push(`Total: R$ ${((f.totalGeral || f.valorContrato || 0)).toFixed(2).replace('.',',')}`);
    if (f.observacoes) linhasObs.push(`Obs: ${f.observacoes}`);
    const observacoesBoleto = linhasObs.join(' | ');

    // 3) Cria pagamento (boleto)
    const payRes = await _asaasCall('POST', '/payment', {
      customer:      customerId,
      billingType:   'BOLETO',
      value:         parseFloat(f.totalGeral) || parseFloat(f.valorContrato) || 0,
      dueDate:       f.dataPagamento,
      description:   `${DB.config.asaas?.nomeBeneficiario || DB.config.locador?.nome || 'Locador'} — Aluguel ${f.contrato} — ${fmtDate(f.dataPagamento)}`,
      observations:  observacoesBoleto,
      externalReference: String(f.id),
    });

    if (!payRes.ok || !payRes.payment?.id) {
      toast(`Erro ao gerar boleto: ${payRes.errors?.[0]?.description || 'erro desconhecido'}`, 'error');
      if (btn) { btn.textContent = '🏦 Gerar'; btn.disabled = false; }
      return;
    }

    // 4) Busca linha digitável
    const lineRes = await _asaasCall('GET', `/payment/${payRes.payment.id}/line`);
    const pdfRes  = await _asaasCall('GET', `/payment/${payRes.payment.id}/bankslip`).catch(() => ({}));

    // 5) Salva no registro financeiro
    const idx = DB.financeiro.findIndex(x => x.id === finId);
    DB.financeiro[idx] = {
      ...f,
      asaasCustomerId: customerId,
      asaasPaymentId:  payRes.payment.id,
      asaasStatus:     payRes.payment.status,
      boletoLinha:     lineRes.data?.identificationField || '',
      boletoPdfUrl:    pdfRes.data?.bankSlipUrl || payRes.payment.bankSlipUrl || '',
    };
    saveData();
    renderFinanceiro();

    // 6) Abre modal do boleto
    abrirModalBoleto(DB.financeiro[idx]);
    toast('Boleto gerado com sucesso!', 'success');

  } catch (err) {
    toast('Erro de rede ao gerar boleto', 'error');
    if (btn) { btn.textContent = '🏦 Gerar'; btn.disabled = false; }
  }
}

function abrirModalBoleto(f) {
  document.getElementById('boleto-info-contrato').textContent =
    `${f.contrato} — ${f.inquilino || '—'}`;
  document.getElementById('boleto-info-valor').textContent =
    `Vencimento: ${fmtDate(f.dataPagamento)} | Total: ${fmt(f.totalGeral || f.valorContrato)}`;
  document.getElementById('boleto-linha').value   = f.boletoLinha || 'Linha não disponível';
  const link = document.getElementById('boleto-pdf-link');
  if (f.asaasPaymentId) {
    link.href = `/api/asaas/payment/${f.asaasPaymentId}/pdf`;
    link.style.opacity = '1';
    link.style.pointerEvents = '';
  } else {
    link.href = '#';
    link.style.opacity = '.4';
    link.style.pointerEvents = 'none';
  }

  const statusMap = {
    PENDING: '⏳ Aguardando pagamento',
    CONFIRMED: '✅ Pagamento confirmado',
    RECEIVED:  '✅ Pagamento recebido',
    OVERDUE:   '🔴 Boleto vencido',
    REFUNDED:  '↩ Devolvido',
    CANCELED:  '✕ Cancelado',
  };
  document.getElementById('boleto-status-area').textContent =
    statusMap[f.asaasStatus] || '';
  document.getElementById('modal-boleto').classList.add('open');

  // Guarda referência para WhatsApp
  document.getElementById('modal-boleto').dataset.finId = f.id;
}

function verBoleto(finId) {
  const f = DB.financeiro.find(x => x.id === finId);
  if (!f || !f.asaasPaymentId) { toast('Boleto não encontrado', 'error'); return; }
  abrirModalBoleto(f);
}

function copiarLinhaDigitavel() {
  const val = document.getElementById('boleto-linha')?.value;
  if (val) { navigator.clipboard.writeText(val); toast('Linha copiada!', 'success'); }
}

function enviarBoletoWhatsapp() {
  const finId = parseInt(document.getElementById('modal-boleto')?.dataset.finId);
  const f = DB.financeiro.find(x => x.id === finId);
  if (!f) return;
  const contrato = DB.contratos.find(c => c.codigo === f.contrato);
  const inq = contrato ? DB.inquilinos.find(i => i.nome === contrato.inquilino) : null;
  const fone = (inq?.celular || inq?.telefone || '').replace(/\D/g, '');
  if (!fone) { toast('Celular do inquilino não cadastrado', 'error'); return; }

  const benef = DB.config.asaas?.nomeBeneficiario || DB.config.locador?.nome || '';
  const msg = encodeURIComponent(
    `Olá ${f.inquilino || 'inquilino'}, segue o boleto referente ao aluguel de ${fmtDate(f.dataPagamento)}.\n\n` +
    (benef ? `Beneficiário: ${benef}\n` : '') +
    `Valor: ${fmt(f.totalGeral || f.valorContrato)}\n` +
    `Linha digitável:\n${f.boletoLinha || ''}\n\n` +
    (f.asaasPaymentId ? `PDF: ${window.location.origin}/api/asaas/payment/${f.asaasPaymentId}/pdf` : '')
  );
  window.open(`https://wa.me/55${fone}?text=${msg}`, '_blank');
}

// Cancela boleto no Asaas
async function cancelarBoleto(finId) {
  if (!_asaasAtivo()) return;
  const f = DB.financeiro.find(x => x.id === finId);
  if (!f?.asaasPaymentId) return;
  if (!confirm('Cancelar este boleto no Asaas?')) return;
  const res = await _asaasCall('DELETE', `/payment/${f.asaasPaymentId}`);
  if (res.ok || res.deleted) {
    const idx = DB.financeiro.findIndex(x => x.id === finId);
    DB.financeiro[idx].asaasStatus = 'CANCELED';
    saveData(); renderFinanceiro();
    toast('Boleto cancelado', 'success');
  } else {
    toast('Erro ao cancelar boleto', 'error');
  }
}

// Poll webhook events → baixa automática
async function _pollWebhookEvents() {
  if (!_asaasServer()) return;
  try {
    const events = await fetch('/api/webhook-events').then(r => r.json());
    if (!events.length) return;

    let updated = false;
    for (const ev of events) {
      if (['PAYMENT_CONFIRMED', 'PAYMENT_RECEIVED'].includes(ev.event) && ev.payment?.id) {
        const idx = DB.financeiro.findIndex(f => f.asaasPaymentId === ev.payment.id);
        if (idx >= 0) {
          DB.financeiro[idx].asaasStatus  = ev.payment.status;
          DB.financeiro[idx].valorRecebido = ev.payment.value || DB.financeiro[idx].totalGeral;
          updated = true;
          toast(`Pagamento confirmado: ${DB.financeiro[idx].contrato} — ${fmtDate(DB.financeiro[idx].dataPagamento)}`, 'success');
        }
      }
      // Marca como processado
      await fetch(`/api/webhook-events/${ev.id}/processed`, { method: 'PATCH' });
    }

    if (updated) { saveData(); renderFinanceiro(); renderDashboard(); }
  } catch { /* servidor offline — ignora silenciosamente */ }
}

// ── RELATÓRIOS ─────────────────────────────────────────

let _relDados   = [];
let _relColunas = [];
let _relTitulo  = '';

const _fmtN = v => parseFloat(v || 0).toFixed(2).replace('.', ',');

const REL_TIPOS = {
  imoveis: {
    label: 'Imóveis',
    colunas: ['Nome', 'Tipo', 'Endereço', 'Bairro', 'Cidade', 'UF', 'Aluguel (R$)', 'Taxa Água (R$)', 'Taxa Manut. (R$)', 'Status'],
    filtros: `
      <div class="form-group"><label>Status</label>
        <select id="rf-imo-status">
          <option value="">Todos</option>
          <option value="DISPONÍVEL">Disponível</option>
          <option value="OCUPADO">Ocupado</option>
          <option value="EM MANUTENÇÃO">Em Manutenção</option>
        </select>
      </div>`,
    getData() {
      let l = [...DB.imoveis];
      const s = document.getElementById('rf-imo-status')?.value;
      if (s) l = l.filter(i => i.status === s);
      return l.map(i => [
        i.nome, i.tipo || '—', i.endereco || '—', i.bairro || '—',
        i.cidade || '—', i.uf || '—',
        _fmtN(i.valorAluguel), _fmtN(i.taxaAgua), _fmtN(i.taxaManutencao), i.status
      ]);
    }
  },

  inquilinos: {
    label: 'Inquilinos',
    colunas: ['Nome', 'Tipo', 'CPF/CNPJ', 'Celular', 'E-mail', 'Contratos Ativos', 'Observações'],
    filtros: `
      <div class="form-group"><label>Contratos</label>
        <select id="rf-inq-status">
          <option value="">Todos</option>
          <option value="com-ativo">Com contrato ativo</option>
          <option value="sem-ativo">Sem contrato ativo</option>
        </select>
      </div>`,
    getData() {
      let l = [...DB.inquilinos];
      const s = document.getElementById('rf-inq-status')?.value;
      if (s === 'com-ativo') l = l.filter(i => DB.contratos.some(c => c.inquilino === i.nome && c.status === 'ATIVO'));
      if (s === 'sem-ativo') l = l.filter(i => !DB.contratos.some(c => c.inquilino === i.nome && c.status === 'ATIVO'));
      return l.map(i => {
        const ativos = DB.contratos.filter(c => c.inquilino === i.nome && c.status === 'ATIVO').length;
        return [i.nome, i.tipoPessoa === 'juridica' ? 'Jurídica' : 'Física',
          i.cpf || '—', i.celular || '—', i.email || '—', ativos, i.observacoes || '—'];
      });
    }
  },

  contratos: {
    label: 'Contratos',
    colunas: ['Código', 'Origem', 'Imóvel', 'Inquilino', 'Início', 'Término', 'Valor Mensal (R$)', 'Status', 'Renovações'],
    filtros: `
      <div class="form-group"><label>Status</label>
        <select id="rf-ct-status">
          <option value="">Todos</option>
          <option value="ATIVO">Ativo</option>
          <option value="ENCERRADO">Encerrado</option>
          <option value="SUSPENSO">Suspenso</option>
        </select>
      </div>
      <div class="form-group"><label>Imóvel</label>
        <select id="rf-ct-imovel">
          <option value="">Todos</option>
        </select>
      </div>`,
    getData() {
      let l = [...DB.contratos];
      const s  = document.getElementById('rf-ct-status')?.value;
      const im = document.getElementById('rf-ct-imovel')?.value;
      if (s)  l = l.filter(c => c.status === s);
      if (im) l = l.filter(c => c.imovel === im);
      return l.map(c => [
        c.codigo, c.contratoOrigem || '—', c.imovel, c.inquilino || '—',
        fmtDate(c.dataInicio), fmtDate(c.dataTermino),
        _fmtN(c.valorMensal), c.status, c.renovacoes || 0
      ]);
    }
  },

  financeiro: {
    label: 'Financeiro',
    colunas: ['Vencimento', 'Contrato', 'Inquilino', 'Vlr Contrato (R$)', 'Água (R$)', 'Energia (R$)', 'Encargos (R$)', 'Total (R$)', 'Recebido (R$)', 'Status'],
    filtros: `
      <div class="form-group"><label>Período</label>
        <select id="rf-fin-periodo" onchange="document.getElementById('rf-fin-mes-sel').style.display=this.value==='mes'?'':'none'">
          <option value="">Todos</option>
          <option value="mes">Mês específico</option>
        </select>
      </div>
      <div id="rf-fin-mes-sel" style="display:none">
        <div class="form-row">
          <div class="form-group"><label>Mês</label>
            <select id="rf-fin-mes">
              <option value="1">Janeiro</option><option value="2">Fevereiro</option>
              <option value="3">Março</option><option value="4">Abril</option>
              <option value="5">Maio</option><option value="6">Junho</option>
              <option value="7">Julho</option><option value="8">Agosto</option>
              <option value="9">Setembro</option><option value="10">Outubro</option>
              <option value="11">Novembro</option><option value="12">Dezembro</option>
            </select>
          </div>
          <div class="form-group"><label>Ano</label>
            <input type="number" id="rf-fin-ano" value="${new Date().getFullYear()}" min="2020" max="2040">
          </div>
        </div>
      </div>
      <div class="form-group"><label>Status de Pagamento</label>
        <select id="rf-fin-status">
          <option value="">Todos</option>
          <option value="PENDENTE">Pendente</option>
          <option value="PARCIAL">Parcial</option>
          <option value="PAGO">Pago</option>
        </select>
      </div>
      <div class="form-group"><label>Contrato / Inquilino</label>
        <input type="text" id="rf-fin-busca" placeholder="Buscar..." style="width:100%">
      </div>`,
    getData() {
      let l = [...DB.financeiro];
      const periodo = document.getElementById('rf-fin-periodo')?.value;
      if (periodo === 'mes') {
        const mes = parseInt(document.getElementById('rf-fin-mes')?.value);
        const ano = parseInt(document.getElementById('rf-fin-ano')?.value);
        l = l.filter(f => { const d = new Date(f.dataPagamento + 'T12:00:00'); return d.getMonth()+1===mes && d.getFullYear()===ano; });
      }
      const s = document.getElementById('rf-fin-status')?.value;
      if (s) l = l.filter(f => {
        const rec = f.valorRecebido||0, tot = f.totalGeral||0;
        if (s==='PENDENTE') return rec<=0 && tot>0;
        if (s==='PAGO')     return rec>=tot && tot>0;
        if (s==='PARCIAL')  return rec>0 && rec<tot;
        return true;
      });
      const busca = (document.getElementById('rf-fin-busca')?.value||'').toLowerCase();
      if (busca) l = l.filter(f => f.contrato.toLowerCase().includes(busca)||(f.inquilino||'').toLowerCase().includes(busca));
      return l.map(f => {
        const rec=f.valorRecebido||0, tot=f.totalGeral||0;
        let status = rec<=0&&tot>0?'PENDENTE':rec>=tot&&tot>0?'PAGO':rec>0&&rec<tot?'PARCIAL':'—';
        return [fmtDate(f.dataPagamento), f.contrato, f.inquilino||'—',
          _fmtN(f.valorContrato), _fmtN(f.consumoAgua), _fmtN(f.totalEnergia),
          _fmtN((f.valorMulta||0)+(f.valorMora||0)), _fmtN(f.totalGeral), _fmtN(f.valorRecebido), status];
      });
    }
  },

  manutencao: {
    label: 'Manutenção',
    colunas: ['Imóvel', 'Tipo de Serviço', 'Prestador', 'Data', 'Custo (R$)', 'Status', 'Observações'],
    filtros: `
      <div class="form-group"><label>Status</label>
        <select id="rf-man-status">
          <option value="">Todos</option>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </select>
      </div>
      <div class="form-group"><label>Imóvel</label>
        <select id="rf-man-imovel"><option value="">Todos</option></select>
      </div>`,
    getData() {
      let l = [...DB.manutencao];
      const s  = document.getElementById('rf-man-status')?.value;
      const im = document.getElementById('rf-man-imovel')?.value;
      if (s)  l = l.filter(m => m.status === s);
      if (im) l = l.filter(m => m.imovel === im);
      return l.map(m => [m.imovel, m.tipoServico||'—', m.prestador||'—',
        fmtDate(m.dataServico), _fmtN(m.custo), m.status, m.observacoes||'—']);
    }
  },

  'resumo-financeiro': {
    label: 'Resumo Financeiro por Contrato',
    colunas: ['Contrato', 'Imóvel', 'Inquilino', 'Status', 'Total Cobrado (R$)', 'Total Recebido (R$)', 'Pendente (R$)', 'Qtd Parcelas', 'Pagas', 'Pendentes'],
    filtros: `
      <div class="form-group"><label>Período</label>
        <select id="rf-res-periodo" onchange="document.getElementById('rf-res-mes-sel').style.display=this.value==='mes'?'':'none'">
          <option value="">Todos os períodos</option>
          <option value="mes">Mês específico</option>
        </select>
      </div>
      <div id="rf-res-mes-sel" style="display:none">
        <div class="form-row">
          <div class="form-group"><label>Mês</label>
            <select id="rf-res-mes">
              <option value="1">Janeiro</option><option value="2">Fevereiro</option>
              <option value="3">Março</option><option value="4">Abril</option>
              <option value="5">Maio</option><option value="6">Junho</option>
              <option value="7">Julho</option><option value="8">Agosto</option>
              <option value="9">Setembro</option><option value="10">Outubro</option>
              <option value="11">Novembro</option><option value="12">Dezembro</option>
            </select>
          </div>
          <div class="form-group"><label>Ano</label>
            <input type="number" id="rf-res-ano" value="${new Date().getFullYear()}" min="2020" max="2040">
          </div>
        </div>
      </div>
      <div class="form-group"><label>Status do Contrato</label>
        <select id="rf-res-ct-status">
          <option value="">Todos</option>
          <option value="ATIVO">Ativo</option>
          <option value="ENCERRADO">Encerrado</option>
          <option value="SUSPENSO">Suspenso</option>
        </select>
      </div>`,
    getData() {
      let finList = [...DB.financeiro];
      const periodo = document.getElementById('rf-res-periodo')?.value;
      if (periodo === 'mes') {
        const mes = parseInt(document.getElementById('rf-res-mes')?.value);
        const ano = parseInt(document.getElementById('rf-res-ano')?.value);
        finList = finList.filter(f => { const d = new Date(f.dataPagamento+'T12:00:00'); return d.getMonth()+1===mes && d.getFullYear()===ano; });
      }
      let contratos = [...DB.contratos];
      const ctStatus = document.getElementById('rf-res-ct-status')?.value;
      if (ctStatus) contratos = contratos.filter(c => c.status === ctStatus);
      return contratos.map(c => {
        const parc = finList.filter(f => f.contrato === c.codigo);
        const totalC = parc.reduce((s,f) => s+(f.totalGeral||0), 0);
        const totalR = parc.reduce((s,f) => s+(f.valorRecebido||0), 0);
        const pagas   = parc.filter(f => (f.valorRecebido||0)>=(f.totalGeral||0) && (f.totalGeral||0)>0).length;
        const pend    = parc.filter(f => (f.valorRecebido||0)<=0 && (f.totalGeral||0)>0).length;
        return [c.codigo, c.imovel, c.inquilino||'—', c.status,
          _fmtN(totalC), _fmtN(totalR), _fmtN(totalC-totalR), parc.length, pagas, pend];
      });
    }
  }
};

function relInitFiltros() {
  const tipo = document.getElementById('rel-tipo')?.value;
  document.getElementById('rel-filtros').innerHTML = '';
  document.getElementById('rel-export-btns').style.display = 'none';
  document.getElementById('rel-preview-area').innerHTML =
    `<div class="empty" style="padding:60px 20px"><div class="empty-icon">📋</div><p>Configure os filtros e clique em <strong>Gerar Relatório</strong></p></div>`;
  document.getElementById('rel-preview-count').textContent = '';
  document.getElementById('rel-preview-titulo').textContent = 'Prévia do Relatório';
  _relDados = [];

  if (!tipo || !REL_TIPOS[tipo]) return;
  document.getElementById('rel-filtros').innerHTML = REL_TIPOS[tipo].filtros;

  // Popula selects dinâmicos de imóvel
  ['rf-ct-imovel', 'rf-man-imovel'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    DB.imoveis.forEach(i => {
      const opt = document.createElement('option');
      opt.value = i.nome; opt.textContent = i.nome;
      sel.appendChild(opt);
    });
  });
}

function gerarRelatorio() {
  const tipo = document.getElementById('rel-tipo')?.value;
  if (!tipo || !REL_TIPOS[tipo]) { toast('Selecione um tipo de relatório', 'error'); return; }
  const cfg    = REL_TIPOS[tipo];
  _relTitulo   = cfg.label;
  _relColunas  = cfg.colunas;
  _relDados    = cfg.getData();

  document.getElementById('rel-preview-titulo').textContent = cfg.label;
  document.getElementById('rel-preview-count').textContent  = `${_relDados.length} registro${_relDados.length !== 1 ? 's' : ''}`;

  const area = document.getElementById('rel-preview-area');
  const exportBtns = document.getElementById('rel-export-btns');

  if (_relDados.length === 0) {
    area.innerHTML = `<div class="empty" style="padding:40px 20px"><div class="empty-icon">🔍</div><p>Nenhum registro encontrado com os filtros selecionados</p></div>`;
    exportBtns.style.display = 'none';
    return;
  }

  area.innerHTML = `
    <div style="overflow-x:auto">
      <table id="rel-table">
        <thead><tr>${_relColunas.map(c => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>${_relDados.map(row => `<tr>${row.map(cell => `<td>${cell ?? '—'}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`;

  exportBtns.style.display = 'flex';
}

function exportarExcel() {
  if (!_relDados.length) { toast('Gere um relatório primeiro', 'error'); return; }
  if (typeof XLSX === 'undefined') { toast('Biblioteca Excel não disponível (verifique conexão)', 'error'); return; }

  const ws = XLSX.utils.aoa_to_sheet([_relColunas, ..._relDados]);
  ws['!cols'] = _relColunas.map(() => ({ wch: 22 }));

  // Estilo de cabeçalho
  _relColunas.forEach((_, ci) => {
    const cellRef = XLSX.utils.encode_cell({ r: 0, c: ci });
    if (!ws[cellRef]) return;
    ws[cellRef].s = { font: { bold: true }, fill: { fgColor: { rgb: '1A56DB' } }, fontColor: { rgb: 'FFFFFF' } };
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, _relTitulo.slice(0, 31));
  const filename = `Relatorio_${_relTitulo.replace(/[^a-zA-Z0-9]/g,'_')}_${new Date().toLocaleDateString('pt-BR').replace(/\//g,'-')}.xlsx`;
  XLSX.writeFile(wb, filename);
  toast('Excel gerado com sucesso!', 'success');
}

function exportarPDF() {
  if (!_relDados.length) { toast('Gere um relatório primeiro', 'error'); return; }
  if (typeof window.jspdf === 'undefined') { toast('Biblioteca PDF não disponível (verifique conexão)', 'error'); return; }

  const { jsPDF } = window.jspdf;
  const landscape = _relColunas.length > 6;
  const doc = new jsPDF({ orientation: landscape ? 'landscape' : 'portrait', unit: 'mm', format: 'a4' });

  const locador = DB.config?.locador?.nome || 'Sistema de Gestão de Imóveis';
  doc.setFontSize(14); doc.setFont('helvetica', 'bold');
  doc.text(`Relatório: ${_relTitulo}`, 14, 16);
  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.text(locador, 14, 22);
  doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR')}   |   Total de registros: ${_relDados.length}`, 14, 27);

  doc.autoTable({
    head: [_relColunas],
    body: _relDados.map(row => row.map(v => v ?? '—')),
    startY: 32,
    styles: { fontSize: landscape ? 7 : 8, cellPadding: 2, overflow: 'linebreak' },
    headStyles: { fillColor: [26, 86, 219], textColor: 255, fontStyle: 'bold', halign: 'center' },
    alternateRowStyles: { fillColor: [249, 250, 251] },
    margin: { left: 14, right: 14 },
  });

  const filename = `Relatorio_${_relTitulo.replace(/[^a-zA-Z0-9]/g,'_')}_${new Date().toLocaleDateString('pt-BR').replace(/\//g,'-')}.pdf`;
  doc.save(filename);
  toast('PDF gerado com sucesso!', 'success');
}

// ── CONFIG ─────────────────────────────────────────────
// ── CAMPOS PERSONALIZADOS ──────────────────────────────
const CE_ENTIDADES = [
  { key: 'inquilino',  label: 'Inquilinos',            icon: '👤' },
  { key: 'imovel',     label: 'Imóveis',               icon: '🏠' },
  { key: 'contrato',   label: 'Contratos',             icon: '📄' },
  { key: 'financeiro', label: 'Registro de Pagamento', icon: '💰' },
  { key: 'manutencao', label: 'Manutenção',            icon: '🔧' },
];

function renderCamposExtrasConfig() {
  const grid = document.getElementById('cfg-campos-extras-grid');
  if (!grid) return;
  const extras = DB.config.camposExtras || {};
  grid.innerHTML = CE_ENTIDADES.map(({ key, label, icon }) => {
    const campos = extras[key] || [];
    return `
    <div class="cfg-lista-card">
      <div class="cfg-lista-head">
        <span class="cfg-lista-icon">${icon}</span>
        <strong class="cfg-lista-label">${label}</strong>
        <span class="cfg-lista-count" id="ce-count-${key}">${campos.length} campo${campos.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="cfg-lista-chips" id="ce-chips-${key}">${_ceRenderChips(key)}</div>
      <div class="cfg-lista-add" style="flex-direction:column;gap:8px">
        <div style="display:flex;gap:6px">
          <input type="text" id="ce-label-${key}" class="cfg-lista-input" placeholder="Nome do campo..."
                 onkeydown="if(event.key==='Enter'){event.preventDefault();addCampoExtra('${key}')}">
          <select id="ce-tipo-${key}" class="cfg-lista-input" style="flex:0 0 120px"
                  onchange="document.getElementById('ce-opcoes-row-${key}').style.display=this.value==='select'?'':'none'">
            <option value="text">Texto</option>
            <option value="number">Número</option>
            <option value="date">Data</option>
            <option value="textarea">Texto longo</option>
            <option value="select">Seleção</option>
          </select>
        </div>
        <div id="ce-opcoes-row-${key}" style="display:none">
          <input type="text" id="ce-opcoes-${key}" class="cfg-lista-input"
                 placeholder="Opções separadas por vírgula: Sim, Não, Talvez">
        </div>
        <button class="btn btn-primary btn-sm" onclick="addCampoExtra('${key}')">+ Adicionar Campo</button>
      </div>
    </div>`;
  }).join('');
}

function _ceRenderChips(key) {
  const campos = (DB.config.camposExtras || {})[key] || [];
  if (!campos.length) return '<span class="cfg-chips-empty">Nenhum campo personalizado</span>';
  const TIPO_LABEL = { text: 'Texto', number: 'Número', date: 'Data', textarea: 'Texto longo', select: 'Seleção' };
  return campos.map((c, idx) => `
    <span class="cfg-chip">
      <span class="cfg-chip-text">${c.label}</span>
      <span class="ce-chip-tipo">${TIPO_LABEL[c.tipo] || c.tipo}</span>
      <button class="cfg-chip-del" onclick="removeCampoExtra('${key}',${idx})" title="Remover">✕</button>
    </span>`).join('');
}

function addCampoExtra(key) {
  const label  = (document.getElementById('ce-label-' + key)?.value || '').trim();
  const tipo   = document.getElementById('ce-tipo-' + key)?.value || 'text';
  const opcoes = (document.getElementById('ce-opcoes-' + key)?.value || '').trim();
  if (!label) { toast('Informe o nome do campo', 'error'); return; }
  if (!DB.config.camposExtras)       DB.config.camposExtras = {};
  if (!DB.config.camposExtras[key])  DB.config.camposExtras[key] = [];
  const nextId = DB.config.camposExtrasNextId || 1;
  DB.config.camposExtras[key].push({ id: 'ce_' + nextId, label, tipo, opcoes });
  DB.config.camposExtrasNextId = nextId + 1;
  saveData();
  _ceRefresh(key);
  const labelEl = document.getElementById('ce-label-' + key);
  if (labelEl) { labelEl.value = ''; labelEl.focus(); }
  const opcoesEl = document.getElementById('ce-opcoes-' + key);
  if (opcoesEl) opcoesEl.value = '';
  toast(`Campo "${label}" adicionado`, 'success');
}

function removeCampoExtra(key, idx) {
  const campos = DB.config.camposExtras?.[key];
  if (!campos) return;
  const item = campos[idx];
  campos.splice(idx, 1);
  saveData();
  _ceRefresh(key);
  toast(`Campo "${item.label}" removido`);
}

function _ceRefresh(key) {
  const chipsEl = document.getElementById('ce-chips-' + key);
  if (chipsEl) chipsEl.innerHTML = _ceRenderChips(key);
  const countEl = document.getElementById('ce-count-' + key);
  if (countEl) { const n = (DB.config.camposExtras?.[key] || []).length; countEl.textContent = n + ' campo' + (n !== 1 ? 's' : ''); }
}

// Renderiza campos extras dentro do form do modal (divId = id do div placeholder)
function renderCamposExtrasForm(entityKey, divId, record) {
  const div = document.getElementById(divId);
  if (!div) return;
  const campos = DB.config.camposExtras?.[entityKey] || [];
  if (!campos.length) { div.innerHTML = ''; return; }
  const vals = (record || {}).camposExtras || {};
  div.innerHTML = `
    <div class="form-section-label" style="margin-top:8px">Informações Adicionais</div>
    <div class="form-grid">
      ${campos.map(c => {
        const val = vals[c.id] !== undefined ? vals[c.id] : '';
        let input;
        if (c.tipo === 'textarea') {
          input = `<textarea name="ce_${c.id}">${val}</textarea>`;
        } else if (c.tipo === 'select') {
          const opts = (c.opcoes || '').split(',').map(o => o.trim()).filter(Boolean);
          input = `<select name="ce_${c.id}"><option value="">Selecione...</option>${opts.map(o => `<option value="${o}"${val===o?' selected':''}>${o}</option>`).join('')}</select>`;
        } else {
          input = `<input name="ce_${c.id}" type="${c.tipo}" value="${String(val).replace(/"/g,'&quot;')}">`;
        }
        return `<div class="form-group${c.tipo==='textarea'?' form-col-2':''}"><label>${c.label}</label>${input}</div>`;
      }).join('')}
    </div>`;
}

// Coleta valores dos campos extras de um formulário
function coletarCamposExtras(entityKey, formEl) {
  const campos = DB.config.camposExtras?.[entityKey] || [];
  if (!campos.length) return {};
  const result = {};
  campos.forEach(c => {
    const el = formEl.elements['ce_' + c.id];
    if (el) result[c.id] = typeof el.value === 'string' ? el.value.trim() : (el.value || '');
  });
  return result;
}

const CFG_LISTAS = [
  { key: 'tiposImovel',        label: 'Tipos de Imóvel',               icon: '🏠' },
  { key: 'statusImovel',       label: 'Status do Imóvel',              icon: '📍' },
  { key: 'statusContrato',     label: 'Status do Contrato',            icon: '📄' },
  { key: 'tiposServico',       label: 'Tipos de Serviço (Manutenção)', icon: '🔧' },
  { key: 'statusManutencao',   label: 'Status de Manutenção',          icon: '⚙️' },
  { key: 'despesasAssociadas', label: 'Tipos de Despesa',              icon: '💰' },
];

function renderConfig() {
  renderTodasListas();
  renderCamposExtrasConfig();
  const loc = DB.config.locador || {};
  ['nome','estadoCivil','profissao','rg','cpf','endereco','telefone','email'].forEach(k => {
    const el = document.getElementById('cfg-locador-'+k);
    if (el) el.value = loc[k] || '';
  });

  // Energia
  const energia = DB.config.energia || {};
  const radioEnergia = document.querySelector(`input[name="cfg-energia-tipo"][value="${energia.tipo || 'solar'}"]`);
  if (radioEnergia) radioEnergia.checked = true;
  const kwhEl = document.getElementById('cfg-energia-kwh');
  if (kwhEl) kwhEl.value = energia.valorKwh > 0 ? energia.valorKwh : '';
  toggleEnergiaConfig();

  // Asaas
  const asaas = DB.config.asaas || {};
  const elAtivo = document.getElementById('cfg-asaas-ativo');
  const elAuto  = document.getElementById('cfg-asaas-autogerar');
  if (elAtivo) elAtivo.checked = asaas.ativo || false;
  if (elAuto)  elAuto.checked  = asaas.autoGerar || false;
  const elBenef = document.getElementById('cfg-asaas-beneficiario');
  if (elBenef) elBenef.value = asaas.nomeBeneficiario || '';

  // URL do webhook
  const webhookEl = document.getElementById('asaas-webhook-url');
  if (webhookEl) {
    const base = _asaasServer() ? window.location.origin : 'http://SEU-DOMINIO';
    webhookEl.textContent = `${base}/webhook/asaas`;
  }

  // Carrega chave mascarada e ambiente atual do servidor
  _carregarAsaasAtual();

  // Testa conexão automaticamente se ativo
  if (asaas.ativo && _asaasServer()) testAsaasConnection();
  else {
    const dot  = document.getElementById('asaas-status-dot');
    const text = document.getElementById('asaas-status-text');
    if (dot)  dot.style.background = '#9ca3af';
    if (text) text.textContent = _asaasServer() ? 'Configure sua chave API abaixo' : '⚠️ Abra via servidor (node server.js)';
  }
}

function renderTodasListas() {
  const grid = document.getElementById('cfg-listas-grid');
  if (!grid) return;
  grid.innerHTML = CFG_LISTAS.map(({ key, label, icon }) => `
    <div class="cfg-lista-card">
      <div class="cfg-lista-head">
        <span class="cfg-lista-icon">${icon}</span>
        <strong class="cfg-lista-label">${label}</strong>
        <span class="cfg-lista-count" id="count-${key}">${(DB.config[key] || []).length} iten${(DB.config[key]||[]).length === 1 ? '' : 's'}</span>
      </div>
      <div class="cfg-lista-chips" id="chips-${key}">
        ${cfgRenderChips(key)}
      </div>
      <div class="cfg-lista-add">
        <input type="text" id="input-${key}" class="cfg-lista-input" placeholder="Novo item..."
               onkeydown="if(event.key==='Enter'){event.preventDefault();addListaItem('${key}')}">
        <button class="btn btn-primary btn-sm" onclick="addListaItem('${key}')">+ Adicionar</button>
      </div>
    </div>
  `).join('');
}

function cfgRenderChips(key) {
  const arr = DB.config[key] || [];
  if (arr.length === 0) return '<span class="cfg-chips-empty">Nenhum item cadastrado</span>';
  return arr.map((item, idx) => `
    <span class="cfg-chip">
      <span class="cfg-chip-text">${item}</span>
      <button class="cfg-chip-del" onclick="removeListaItem('${key}',${idx})" title="Remover">✕</button>
    </span>
  `).join('');
}

function addListaItem(key) {
  const input = document.getElementById('input-' + key);
  if (!input) return;
  const val = (input.value || '').trim();
  if (!val) return;
  if (!DB.config[key]) DB.config[key] = [];
  if (DB.config[key].includes(val)) { toast('Este item já existe na lista', 'error'); return; }
  DB.config[key].push(val);
  saveData();
  cfgRefreshLista(key);
  input.value = '';
  input.focus();
  toast(`"${val}" adicionado`, 'success');
}

function removeListaItem(key, idx) {
  if (!DB.config[key]) return;
  const item = DB.config[key][idx];
  DB.config[key].splice(idx, 1);
  saveData();
  cfgRefreshLista(key);
  toast(`"${item}" removido`);
}

function cfgRefreshLista(key) {
  const chipsEl = document.getElementById('chips-' + key);
  if (chipsEl) chipsEl.innerHTML = cfgRenderChips(key);
  const countEl = document.getElementById('count-' + key);
  if (countEl) {
    const n = (DB.config[key] || []).length;
    countEl.textContent = n + ' iten' + (n === 1 ? '' : 's');
  }
}

function saveConfig() {
  if (!DB.config.locador) DB.config.locador = {};
  ['nome','estadoCivil','profissao','rg','cpf','endereco','telefone','email'].forEach(k => {
    const el = document.getElementById('cfg-locador-'+k);
    if (el) DB.config.locador[k] = el.value.trim();
  });
  saveData();
  toast('Dados do locador salvos!', 'success');
}

function saveEnergiaConfig() {
  const tipo     = document.querySelector('input[name="cfg-energia-tipo"]:checked')?.value || 'solar';
  const valorKwh = parseFloat(document.getElementById('cfg-energia-kwh')?.value) || 0;
  DB.config.energia = { tipo, valorKwh };
  saveData();
  toast('Configuração de energia salva!', 'success');
}

function toggleEnergiaConfig() {
  const tipo = document.querySelector('input[name="cfg-energia-tipo"]:checked')?.value || 'solar';
  const grp  = document.getElementById('cfg-energia-kwh-group');
  if (grp) grp.style.display = tipo === 'solar' ? '' : 'none';
}

function toggleImovelEnergia() {
  const form = document.getElementById('form-imovel');
  const tipo = form?.querySelector('input[name="tipoEnergia"]:checked')?.value || 'solar';
  const grp  = document.getElementById('imo-energia-kwh-group');
  if (grp) grp.style.display = tipo === 'solar' ? '' : 'none';
}

function _aplicarEnergiaNoForm() {
  const form    = document.getElementById('form-financeiro');
  const cod     = form?.elements['contrato']?.value;
  const contrato = cod ? DB.contratos.find(c => c.codigo === cod) : null;
  const imo     = contrato ? DB.imoveis.find(i => i.nome === contrato.imovel) : null;

  // Prioridade: imóvel > padrão global
  const globalE  = DB.config.energia || {};
  const tipo     = imo?.tipoEnergia || globalE.tipo || 'solar';
  const kwh      = imo?.valorKwh    || globalE.valorKwh || 0;
  const isSolar  = tipo !== 'coelba';

  const section = document.getElementById('fin-energia-section');
  const badge   = document.getElementById('fin-energia-tipo-badge');
  if (section) section.style.display = isSolar ? '' : 'none';
  if (badge)   badge.textContent     = isSolar ? '(☀️ Solar)' : '';

  if (isSolar && kwh > 0) {
    const kwhEl = form?.elements['valorKwh'];
    if (kwhEl && !parseFloat(kwhEl.value)) kwhEl.value = kwh.toFixed(4);
  }
}

// ── MODAL HELPERS ──────────────────────────────────────
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ── CHECKLIST DE VISTORIA ──────────────────────────────

const _CHECKLIST_PADRAO = [
  'Fachada / Entrada',
  'Sala de Estar / Sala de Jantar',
  'Cozinha',
  'Banheiro Social',
  'Banheiro Suíte',
  'Quarto 1',
  'Quarto 2',
  'Área de Serviço',
  'Varanda / Área Externa',
  'Medidor de Energia (Relógio)',
  'Quadro de Energia (Disjuntores)',
  'Caixa d\'água / Reservatório',
  'Portas e Janelas',
  'Paredes e Teto',
  'Piso',
  'Pintura Geral',
];

let _ckImoId       = null;
let _ckFotoItemId  = null; // item esperando upload de foto
let _ckInqSel      = new Set(); // ids dos inquilinos selecionados no modal de vincular

function openChecklistFotos(imovelId) {
  const im = DB.imoveis.find(x => x.id === imovelId);
  if (!im) return;
  _ckImoId = imovelId;

  document.getElementById('ck-imo-nome').textContent = im.nome;
  document.getElementById('ck-tipo').value = im.checklistTipo || 'Entrada';
  document.getElementById('ck-data').value = im.checklistData || new Date().toISOString().slice(0,10);

  if (!Array.isArray(im.checklistFotos) || im.checklistFotos.length === 0) {
    im.checklistFotos = _CHECKLIST_PADRAO.map((item, i) => ({ id: i + 1, item, foto: false, fotoData: null, obs: '' }));
  }

  _renderCkModal();
  document.getElementById('modal-checklist-fotos').classList.add('open');
}

function _renderCkModal() {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  const list  = im.checklistFotos || [];
  const total = list.length;
  const fotos = list.filter(x => x.foto).length;
  const pct   = total > 0 ? Math.round((fotos / total) * 100) : 0;

  document.getElementById('ck-progress-bar').style.width  = pct + '%';
  document.getElementById('ck-progress-text').textContent = `${fotos} de ${total} fotos registradas (${pct}%)`;

  document.getElementById('ck-tbody').innerHTML = list.map((item, idx) => {
    const fotoCell = item.fotoData
      ? `<div class="ck-foto-cell">
           <div class="ck-foto-thumb-wrap">
             <img src="${item.fotoData}" class="ck-foto-thumb"
               onclick="abrirLightbox('${item.fotoData.replace(/'/g,"\\'")}','${_esc(item.item)}')"
               title="Ver foto">
             <button class="ck-foto-remove" onclick="ckRemoverFoto(${item.id})" title="Remover foto">✕</button>
           </div>
         </div>`
      : `<div class="ck-foto-cell">
           <button class="ck-foto-btn" onclick="ckAbrirFoto(${item.id})">📷 Carregar</button>
         </div>`;
    return `
    <tr>
      <td>${idx + 1}</td>
      <td>
        <input type="text" class="ck-item-input" value="${_esc(item.item)}"
          oninput="_ckField(${item.id},'item',this.value)">
      </td>
      <td style="text-align:center">${fotoCell}</td>
      <td>
        <textarea class="ck-obs-input" rows="1" placeholder="Observações..."
          oninput="_ckField(${item.id},'obs',this.value)">${_esc(item.obs || '')}</textarea>
      </td>
      <td>
        <button class="btn btn-danger btn-sm" style="padding:3px 7px" onclick="ckRemoveItem(${item.id})" title="Remover linha">✕</button>
      </td>
    </tr>`;
  }).join('');
}

function _ckAtualizarProgresso() {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  const list  = im.checklistFotos || [];
  const total = list.length;
  const fotos = list.filter(x => x.foto).length;
  const pct   = total > 0 ? Math.round((fotos / total) * 100) : 0;
  document.getElementById('ck-progress-bar').style.width  = pct + '%';
  document.getElementById('ck-progress-text').textContent = `${fotos} de ${total} fotos registradas (${pct}%)`;
}

function _esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _ckField(itemId, field, value) {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  const item = im.checklistFotos.find(x => x.id === itemId);
  if (item) item[field] = value;
}

// ── Upload de foto por item ────────────────────────────

function ckAbrirFoto(itemId) {
  _ckFotoItemId = itemId;
  const inp = document.getElementById('ck-foto-file-input');
  inp.value = '';
  inp.click();
}

async function ckCarregarFoto(input) {
  if (!input.files[0] || _ckFotoItemId === null) return;
  const file = input.files[0];
  if (file.size > 15 * 1024 * 1024) { toast('Foto muito grande (máx 15 MB)', 'error'); return; }

  const im   = DB.imoveis.find(x => x.id === _ckImoId);
  const item = im?.checklistFotos.find(x => x.id === _ckFotoItemId);
  if (!item) return;

  const dados = await comprimirImagem(file);
  item.fotoData = dados;
  item.foto     = true;
  _ckFotoItemId = null;

  _renderCkModal();
  toast('Foto carregada!', 'success');
}

function ckRemoverFoto(itemId) {
  const im   = DB.imoveis.find(x => x.id === _ckImoId);
  const item = im?.checklistFotos.find(x => x.id === itemId);
  if (!item) return;
  item.fotoData = null;
  item.foto     = false;
  _renderCkModal();
}

// ── Adicionar / remover / padrão ──────────────────────

function ckAddItem() {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  const newId = im.checklistFotos.length > 0 ? Math.max(...im.checklistFotos.map(x => x.id)) + 1 : 1;
  im.checklistFotos.push({ id: newId, item: 'Novo item', foto: false, fotoData: null, obs: '' });
  _renderCkModal();
  setTimeout(() => {
    const inputs = document.querySelectorAll('#ck-tbody .ck-item-input');
    if (inputs.length > 0) inputs[inputs.length - 1].focus();
  }, 50);
}

function ckRemoveItem(itemId) {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  im.checklistFotos = im.checklistFotos.filter(x => x.id !== itemId);
  _renderCkModal();
}

function ckGerarPadrao() {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  if (im.checklistFotos.length > 0 && !confirm_('Isso substituirá o checklist atual pelos itens padrão. Confirmar?')) return;
  im.checklistFotos = _CHECKLIST_PADRAO.map((item, i) => ({ id: i + 1, item, foto: false, fotoData: null, obs: '' }));
  _renderCkModal();
  toast('Itens padrão carregados');
}

// ── Vincular ao inquilino (modal de seleção) ──────────

function ckVincularInquilino() {
  if (!DB.inquilinos || DB.inquilinos.length === 0) {
    toast('Nenhum inquilino cadastrado', 'error');
    return;
  }
  _ckInqSel.clear();
  // Pré-seleciona inquilinos com contrato ativo neste imóvel
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (im) {
    const contratos = DB.contratos.filter(c => c.imovel === im.nome && c.status === 'ATIVO');
    contratos.forEach(c => {
      const inq = DB.inquilinos.find(i => i.nome === c.inquilino);
      if (inq) _ckInqSel.add(inq.id);
    });
  }
  document.getElementById('ck-vinc-search').value = '';
  _ckFiltrarInquilinos('');
  document.getElementById('modal-ck-vincular').classList.add('open');
}

function _ckFiltrarInquilinos(busca) {
  const q     = (busca || '').toLowerCase();
  const lista = DB.inquilinos.filter(i => i.ativo !== false && (!q || i.nome.toLowerCase().includes(q)));

  document.getElementById('ck-vinc-lista').innerHTML = lista.length === 0
    ? '<p style="color:var(--gray-400);font-size:13px;padding:8px">Nenhum inquilino encontrado</p>'
    : lista.map(inq => {
        const ativo   = DB.contratos.find(c => c.inquilino === inq.nome && c.status === 'ATIVO');
        const sub     = ativo ? `Contrato ativo: ${ativo.imovel}` : 'Sem contrato ativo';
        const initials = inqInitials(inq.nome);
        const sel     = _ckInqSel.has(inq.id);
        return `
        <div class="ck-vinc-item${sel ? ' selected' : ''}" onclick="_ckToggleInq(${inq.id}, this)">
          <input type="checkbox" ${sel ? 'checked' : ''} onclick="event.stopPropagation();_ckToggleInq(${inq.id},this.closest('.ck-vinc-item'))">
          <div class="ck-vinc-avatar">${initials}</div>
          <div>
            <div class="ck-vinc-nome">${_esc(inq.nome)}</div>
            <div class="ck-vinc-sub">${sub}</div>
          </div>
        </div>`;
      }).join('');

  document.getElementById('ck-vinc-count').textContent = `${_ckInqSel.size} selecionado(s)`;
}

function _ckToggleInq(inqId, el) {
  if (_ckInqSel.has(inqId)) {
    _ckInqSel.delete(inqId);
    el.classList.remove('selected');
    el.querySelector('input[type="checkbox"]').checked = false;
  } else {
    _ckInqSel.add(inqId);
    el.classList.add('selected');
    el.querySelector('input[type="checkbox"]').checked = true;
  }
  document.getElementById('ck-vinc-count').textContent = `${_ckInqSel.size} selecionado(s)`;
}

function ckConfirmarVincular() {
  if (_ckInqSel.size === 0) { toast('Selecione pelo menos um inquilino', 'error'); return; }

  _ckSalvarNoDB();

  const im   = DB.imoveis.find(x => x.id === _ckImoId);
  const tipo = document.getElementById('ck-tipo').value;
  const data = document.getElementById('ck-data').value;

  const snapshot = {
    id:          Date.now(),
    vinculadoEm: data || new Date().toISOString().slice(0,10),
    imovelId:    im.id,
    imovelNome:  im.nome,
    tipo,
    items:       JSON.parse(JSON.stringify(im.checklistFotos)),
  };

  const vinculados = [];
  _ckInqSel.forEach(inqId => {
    const inq = DB.inquilinos.find(i => i.id === inqId);
    if (!inq) return;
    if (!Array.isArray(inq.checklistFotos)) inq.checklistFotos = [];
    inq.checklistFotos = inq.checklistFotos.filter(c => !(c.imovelId === im.id && c.tipo === tipo));
    inq.checklistFotos.push(snapshot);
    vinculados.push(inq.nome);
  });

  saveData();
  closeModal('modal-ck-vincular');
  toast(`Checklist "${tipo}" vinculado a: ${vinculados.join(', ')}`, 'success');
}

function _ckSalvarNoDB() {
  const im = DB.imoveis.find(x => x.id === _ckImoId);
  if (!im) return;
  im.checklistTipo = document.getElementById('ck-tipo').value;
  im.checklistData = document.getElementById('ck-data').value;
  saveData();
}

function saveChecklistFotos() {
  _ckSalvarNoDB();
  closeModal('modal-checklist-fotos');
  const fichaModal = document.getElementById('modal-imo-ficha');
  if (fichaModal?.classList.contains('open')) _renderFichaChecklistResumo(_ckImoId);
  renderImoveis();
  toast('Checklist salvo!', 'success');
}

function _renderFichaChecklistResumo(imovelId) {
  const im = DB.imoveis.find(x => x.id === imovelId);
  const el = document.getElementById('fi-checklist-resumo');
  if (!el || !im) return;
  const list  = im.checklistFotos || [];
  const total = list.length;
  if (total === 0) {
    el.innerHTML = '<span style="color:var(--gray-400);font-size:13px">Nenhum item registrado — clique em Abrir Checklist para criar</span>';
    return;
  }
  const fotos = list.filter(x => x.foto).length;
  const pct   = Math.round((fotos / total) * 100);
  const cls   = fotos === total ? '' : fotos > 0 ? 'parcial' : 'vazio';
  const meta  = im.checklistTipo
    ? `<span style="font-size:11px;color:var(--gray-400);margin-left:6px">${im.checklistTipo}${im.checklistData ? ' · ' + fmtDate(im.checklistData) : ''}</span>`
    : '';
  el.innerHTML = `<span class="ck-resumo-tag ${cls}">📷 ${fotos}/${total} fotos${meta}</span>`;
}

// ── Checklist na ficha do inquilino ──────────────────

function _renderInqChecklist(inquilinoId) {
  const inq = DB.inquilinos.find(x => x.id === inquilinoId);
  const el  = document.getElementById('ficha-ck-lista');
  if (!el || !inq) return;

  const lista = (inq.checklistFotos || []).slice().sort((a, b) => (b.vinculadoEm || '').localeCompare(a.vinculadoEm || ''));
  if (lista.length === 0) {
    el.innerHTML = '<p style="color:var(--gray-400);font-size:13px">Nenhum checklist vinculado a este inquilino</p>';
    return;
  }

  el.innerHTML = lista.map(ck => {
    const total = (ck.items || []).length;
    const fotos = (ck.items || []).filter(x => x.foto).length;
    const pct   = total > 0 ? Math.round((fotos / total) * 100) : 0;
    const cls   = fotos === total ? '' : fotos > 0 ? 'parcial' : 'vazio';

    const rows = (ck.items || []).map(item => `
      <tr>
        <td>${_esc(item.item)}</td>
        <td style="text-align:center">
          ${item.fotoData
            ? `<img src="${item.fotoData}" class="ck-foto-thumb" style="cursor:pointer;width:56px;height:40px"
                onclick="abrirLightbox('${item.fotoData.replace(/'/g,"\\'")}','${_esc(item.item)}')"
                title="Ver foto">`
            : `<span class="ck-status-no">○</span>`}
        </td>
        <td style="color:var(--gray-600);font-size:12px">${_esc(item.obs || '')}</td>
      </tr>`).join('');

    return `
    <div class="ck-inq-card">
      <div class="ck-inq-card-head">
        <div>
          <strong>${ck.tipo || 'Vistoria'} — ${_esc(ck.imovelNome || '—')}</strong>
          <div class="ck-inq-card-meta">Data: ${fmtDate(ck.vinculadoEm)} &nbsp;·&nbsp;
            <span class="ck-resumo-tag ${cls}" style="font-size:10px">📷 ${fotos}/${total} (${pct}%)</span>
          </div>
        </div>
      </div>
      <table class="ck-inq-table">
        <thead><tr><th>Item</th><th style="width:80px;text-align:center">Foto</th><th>Observações</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }).join('');
}

// ── PORTAL DO INQUILINO ────────────────────────────────

function renderPortal() {
  const u   = _currentUser;
  if (!u || u.perfil !== 'inquilino') return;
  const inq = DB.inquilinos.find(x => x.id === u.inquilinoId);
  if (!inq) return;

  const initials = inqInitials(inq.nome);
  document.getElementById('portal-avatar').textContent = initials;
  document.getElementById('portal-nome').textContent   = inq.nome;

  const contAtivo = DB.contratos.find(c => c.inquilino === inq.nome && c.status === 'ATIVO');
  document.getElementById('portal-imovel').textContent = contAtivo
    ? `📍 ${contAtivo.imovel}`
    : 'Nenhum contrato ativo no momento';

  _portalRenderChecklists(inq);
  _portalRenderContratos(inq);
  _portalRenderBoletos(inq);
}

function portalTab(tab, btn) {
  document.querySelectorAll('.portal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.portal-tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('portal-tab-' + tab).classList.add('active');
}

function _portalRenderChecklists(inq) {
  const el   = document.getElementById('portal-ck-lista');
  if (!el) return;
  const lista = (inq.checklistFotos || []).slice().sort((a, b) => (b.vinculadoEm || '').localeCompare(a.vinculadoEm || ''));

  if (lista.length === 0) {
    el.innerHTML = `<div class="portal-empty">📋<p>Nenhum checklist de vistoria vinculado</p></div>`;
    return;
  }

  el.innerHTML = lista.map(ck => {
    const total = (ck.items || []).length;
    const fotos = (ck.items || []).filter(x => x.foto).length;
    const conf  = ck.confirmadoEm;
    const rows  = (ck.items || []).map(item => `
      <tr>
        <td>${_esc(item.item)}</td>
        <td style="text-align:center">
          ${item.fotoData
            ? `<img src="${item.fotoData}" style="width:56px;height:40px;object-fit:cover;border-radius:6px;cursor:pointer;border:2px solid var(--success)"
                onclick="abrirLightbox('${item.fotoData.replace(/'/g,"\\'")}','${_esc(item.item)}')">`
            : `<span style="color:var(--gray-300)">○</span>`}
        </td>
        <td style="font-size:12px;color:var(--gray-600)">${_esc(item.obs || '')}</td>
      </tr>`).join('');

    const confirmBadge = conf
      ? `<span class="portal-badge-ok">✅ Confirmado em ${fmtDate(conf)}</span>`
      : `<button class="portal-btn-confirm" onclick="portalConfirmarChecklist('${ck.id}', ${inq.id})">✅ Confirmar e Assinar Vistoria</button>`;

    return `
    <div class="portal-card">
      <div class="portal-card-head">
        <div>
          <strong>${ck.tipo || 'Vistoria'} — ${_esc(ck.imovelNome || '—')}</strong>
          <div style="font-size:12px;color:var(--gray-400);margin-top:2px">Data: ${fmtDate(ck.vinculadoEm)} · ${fotos}/${total} fotos registradas</div>
        </div>
        ${confirmBadge}
      </div>
      <table class="portal-table">
        <thead><tr><th>Cômodo / Item</th><th style="width:80px;text-align:center">Foto</th><th>Obs.</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }).join('');
}

function portalConfirmarChecklist(ckId, inqId) {
  if (!confirm_('Ao confirmar, você declara ter vistoriado e concordado com o estado registrado. Confirmar?')) return;
  const inq = DB.inquilinos.find(x => x.id === inqId);
  if (!inq) return;
  const ck  = inq.checklistFotos.find(c => String(c.id) === String(ckId));
  if (!ck)  return;
  ck.confirmadoEm = new Date().toISOString().slice(0,10);
  ck.confirmadoPor = inq.nome;
  saveData();
  _portalRenderChecklists(inq);
  toast('Vistoria confirmada!', 'success');
}

function _portalRenderContratos(inq) {
  const el = document.getElementById('portal-ct-lista');
  if (!el) return;
  const contratos = DB.contratos.filter(c => c.inquilino === inq.nome).sort((a,b) => (b.dataInicio||'').localeCompare(a.dataInicio||''));

  if (contratos.length === 0) {
    el.innerHTML = `<div class="portal-empty">📄<p>Nenhum contrato encontrado</p></div>`;
    return;
  }

  el.innerHTML = contratos.map(c => {
    const ativo = c.status === 'ATIVO';
    const arquivo = c.arquivo;
    const btnArquivo = arquivo
      ? `<button class="btn btn-primary btn-sm" onclick="viewContratoArquivo(${c.id})">📥 Baixar Contrato</button>`
      : '';
    return `
    <div class="portal-card">
      <div class="portal-card-head">
        <div>
          <strong>${c.codigo} — ${c.imovel}</strong>
          <div style="font-size:12px;color:var(--gray-400);margin-top:2px">${fmtDate(c.dataInicio)} → ${fmtDate(c.dataTermino)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="badge ${ativo ? 'badge-green' : 'badge-gray'}">${c.status}</span>
          ${btnArquivo}
        </div>
      </div>
      <div class="portal-grid">
        <div><span class="portal-label">Valor Mensal</span><strong>${fmt(c.valorMensal)}</strong></div>
        <div><span class="portal-label">Vencimento</span><strong>Dia ${c.diaVencimento || '—'}</strong></div>
        <div><span class="portal-label">Taxa de Água</span><span>${c.taxaAgua > 0 ? fmt(c.taxaAgua) : '—'}</span></div>
        <div><span class="portal-label">Taxa Manutenção</span><span>${c.taxaManutencao > 0 ? fmt(c.taxaManutencao) : '—'}</span></div>
      </div>
    </div>`;
  }).join('');
}

function _portalRenderBoletos(inq) {
  const el = document.getElementById('portal-bl-lista');
  if (!el) return;
  const hoje = new Date().toISOString().slice(0,10);
  const financ = DB.financeiro
    .filter(f => (f.inquilino || '').toLowerCase() === inq.nome.toLowerCase())
    .sort((a,b) => (b.dataPagamento||'').localeCompare(a.dataPagamento||''));

  if (financ.length === 0) {
    el.innerHTML = `<div class="portal-empty">🏦<p>Nenhum boleto encontrado</p></div>`;
    return;
  }

  el.innerHTML = financ.map(f => {
    const rec  = f.valorRecebido || 0;
    const tot  = f.totalGeral    || 0;
    const venc = f.dataPagamento || '';
    const atrasado = venc < hoje && rec < tot;

    let statusHtml;
    if (rec >= tot && tot > 0)        statusHtml = `<span class="badge badge-green">✅ Pago</span>`;
    else if (f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED')
                                       statusHtml = `<span class="badge badge-green">✅ Pago</span>`;
    else if (atrasado)                 statusHtml = `<span class="badge badge-red">⚠️ Vencido</span>`;
    else                               statusHtml = `<span class="badge badge-yellow">⏳ Pendente</span>`;

    const boletoBtn = f.asaasPaymentId && !['RECEIVED','CONFIRMED','CANCELED'].includes(f.asaasStatus)
      ? `<a href="/api/asaas/payment/${f.asaasPaymentId}/pdf" target="_blank" class="btn btn-primary btn-sm">🏦 Ver Boleto</a>`
      : '';

    return `
    <div class="portal-card ${atrasado && rec < tot ? 'portal-card-atrasado' : ''}">
      <div class="portal-card-head">
        <div>
          <strong>${f.contrato}</strong>
          <div style="font-size:12px;color:var(--gray-400);margin-top:2px">Vencimento: ${fmtDate(venc)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          ${statusHtml}
          ${boletoBtn}
        </div>
      </div>
      <div class="portal-grid">
        <div><span class="portal-label">Total</span><strong style="color:var(--gray-800)">${fmt(tot)}</strong></div>
        <div><span class="portal-label">Pago</span><strong style="color:var(--success)">${fmt(rec)}</strong></div>
        <div><span class="portal-label">Aluguel</span><span>${fmt(f.valorContrato)}</span></div>
        <div><span class="portal-label">Água</span><span>${f.consumoAgua > 0 ? fmt(f.consumoAgua) : '—'}</span></div>
      </div>
    </div>`;
  }).join('');
}

// ── INIT ───────────────────────────────────────────────
function _initApp() {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.page));
  });
  _pollWebhookEvents();
  setInterval(_pollWebhookEvents, 30000);
  initAuth();
  _autoDetectAsaas();
}

// Funciona tanto com carregamento estático quanto dinâmico de scripts
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initApp);
} else {
  _initApp();
}
