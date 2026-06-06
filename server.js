require('dotenv').config();
const express      = require('express');
const path         = require('path');
const fs           = require('fs');
const { MongoClient } = require('mongodb');
const nodemailer   = require('nodemailer');

// ── MongoDB (persistência permanente entre deploys) ─────
let _mongo = null;
let _mongoClient = null;

async function getCol() {
  if (!process.env.MONGODB_URI) return null;
  try {
    if (!_mongo) {
      const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
      await client.connect();
      _mongoClient = client;
      _mongo = client.db('imoveis').collection('appdata');
    }
    return _mongo;
  } catch (e) {
    console.error('[MongoDB] Conexão falhou:', e.message);
    _mongo = null;
    _mongoClient = null;
    return null;
  }
}

const app = express();
app.disable('etag');
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname), {
  etag: false,
  lastModified: false,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));

// ── Config mutável (pode ser atualizada pelo painel) ────
const cfg = {
  key:  process.env.ASAAS_API_KEY || '',
  env:  process.env.ASAAS_ENV     || 'sandbox',
  webhookToken: process.env.ASAAS_WEBHOOK_TOKEN || '',
};

// ── E-mail (Nodemailer / Gmail SMTP) ────────────────────
const emailCfg = {
  host:    process.env.SMTP_HOST || 'smtp.gmail.com',
  port:    parseInt(process.env.SMTP_PORT || '465'),
  secure:  process.env.SMTP_SECURE !== 'false', // true para 465
  user:    process.env.SMTP_USER  || '',
  pass:    process.env.SMTP_PASS  || '',
  from:    process.env.SMTP_FROM  || '',
  appUrl:  process.env.APP_URL    || 'http://localhost:3000',
};

let _transporter = null;

function getTransporter() {
  if (!emailCfg.user || !emailCfg.pass) return null;
  if (!_transporter) {
    const port   = emailCfg.port   || 465;
    const secure = emailCfg.secure !== undefined ? !!emailCfg.secure : port !== 587;
    _transporter = nodemailer.createTransport({
      host:   emailCfg.host   || 'smtp.gmail.com',
      port,
      secure,
      auth:   { user: emailCfg.user, pass: emailCfg.pass },
      tls:    { rejectUnauthorized: false },
    });
  }
  return _transporter;
}

async function enviarEmail({ to, subject, html }) {
  const t = getTransporter();
  if (!t) throw new Error('E-mail não configurado — acesse Configurações > E-mail');
  if (!to) throw new Error('Destinatário não informado');
  await t.sendMail({
    from: emailCfg.from || emailCfg.user,
    to,
    subject,
    html,
  });
}

// Templates de e-mail
const emailTemplates = {
  boasVindas: ({ nome, usuario, senha, appUrl }) => ({
    subject: '🏢 Seu acesso ao portal do inquilino',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:#1a56db;margin-bottom:4px">Bem-vindo(a), ${nome}!</h2>
        <p style="color:#6b7280;margin-top:0">Seu acesso ao portal do inquilino foi criado.</p>
        <div style="background:#fff;border-radius:10px;padding:24px;margin:24px 0;border:1px solid #e5e7eb">
          <p style="margin:0 0 12px;font-size:14px;color:#374151"><strong>🔗 Link de acesso:</strong><br>
            <a href="${appUrl}" style="color:#1a56db">${appUrl}</a>
          </p>
          <p style="margin:0 0 12px;font-size:14px;color:#374151"><strong>👤 Usuário:</strong> ${usuario}</p>
          <p style="margin:0;font-size:14px;color:#374151"><strong>🔑 Senha:</strong> ${senha}</p>
        </div>
        <p style="font-size:12px;color:#9ca3af">Recomendamos alterar a senha após o primeiro acesso. Em caso de dúvidas, entre em contato com a administração.</p>
      </div>`,
  }),

  boleto: ({ nome, contrato, valor, vencimento, linkBoleto, appUrl }) => ({
    subject: `🏦 Boleto disponível — ${contrato}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:#1a56db;margin-bottom:4px">Olá, ${nome}!</h2>
        <p style="color:#6b7280;margin-top:0">Um novo boleto foi gerado para você.</p>
        <div style="background:#fff;border-radius:10px;padding:24px;margin:24px 0;border:1px solid #e5e7eb">
          <p style="margin:0 0 10px;font-size:14px;color:#374151"><strong>📄 Contrato:</strong> ${contrato}</p>
          <p style="margin:0 0 10px;font-size:14px;color:#374151"><strong>💰 Valor:</strong> R$ ${valor}</p>
          <p style="margin:0 0 20px;font-size:14px;color:#374151"><strong>📅 Vencimento:</strong> ${vencimento}</p>
          ${linkBoleto ? `<a href="${linkBoleto}" style="display:inline-block;background:#1a56db;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold">📥 Visualizar / Pagar Boleto</a>` : ''}
        </div>
        <p style="font-size:13px;color:#6b7280">Acesse o portal para ver seu histórico completo: <a href="${appUrl}" style="color:#1a56db">${appUrl}</a></p>
      </div>`,
  }),

  esqueceuSenha: ({ nome, usuario, senha, appUrl }) => ({
    subject: '🔑 Recuperação de acesso — Sistema de Imóveis',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:#1a56db;margin-bottom:4px">Olá, ${nome}!</h2>
        <p style="color:#6b7280;margin-top:0">Recebemos uma solicitação de recuperação de acesso para o seu e-mail.</p>
        <div style="background:#fff;border-radius:10px;padding:24px;margin:24px 0;border:1px solid #e5e7eb">
          <p style="margin:0 0 12px;font-size:14px;color:#374151"><strong>🔗 Link de acesso:</strong><br>
            <a href="${appUrl}" style="color:#1a56db">${appUrl}</a>
          </p>
          <p style="margin:0 0 12px;font-size:14px;color:#374151"><strong>👤 Usuário:</strong> ${usuario}</p>
          <p style="margin:0;font-size:14px;color:#374151"><strong>🔑 Senha:</strong> ${senha}</p>
        </div>
        <p style="font-size:12px;color:#9ca3af">Se você não solicitou esta recuperação, ignore este e-mail.</p>
      </div>`,
  }),

  vistoria: ({ nome, imovel, appUrl }) => ({
    subject: '📋 Vistoria disponível para assinatura',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="color:#1a56db;margin-bottom:4px">Olá, ${nome}!</h2>
        <p style="color:#6b7280;margin-top:0">O checklist de vistoria do seu imóvel está disponível para revisão.</p>
        <div style="background:#fff;border-radius:10px;padding:24px;margin:24px 0;border:1px solid #e5e7eb">
          <p style="margin:0 0 20px;font-size:14px;color:#374151"><strong>🏠 Imóvel:</strong> ${imovel}</p>
          <a href="${appUrl}" style="display:inline-block;background:#1a56db;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold">📋 Acessar Portal e Revisar Vistoria</a>
        </div>
        <p style="font-size:12px;color:#9ca3af">Acesse com seu CPF como usuário e senha.</p>
      </div>`,
  }),
};

function asaasBase() {
  return cfg.env === 'production'
    ? 'https://api.asaas.com/v3'
    : 'https://api-sandbox.asaas.com/v3';
}

// ── Arquivo .env ────────────────────────────────────────
const ENV_FILE = path.join(__dirname, '.env');

function readEnvFile() {
  try { return fs.readFileSync(ENV_FILE, 'utf8'); }
  catch { return ''; }
}

function writeEnvFile(vars) {
  let content = readEnvFile();

  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`^${key}=.*$`, 'm');
    const line  = `${key}=${value}`;
    if (regex.test(content)) {
      content = content.replace(regex, line);
    } else {
      content += (content.endsWith('\n') ? '' : '\n') + line + '\n';
    }
  }

  fs.writeFileSync(ENV_FILE, content, 'utf8');
}

// ── Banco de dados do app (MongoDB → fallback arquivo) ─
const DB_FILE     = path.join(__dirname, 'db.json');
const BACKUP_DIR  = path.join(__dirname, 'backups');
const MAX_BACKUPS = 80;

// Coleções "lista" do app — usadas pelo merge seguro para nunca perder registros.
const LIST_KEYS = [
  'inquilinos', 'imoveis', 'contratos', 'financeiro', 'predios',
  'manutencao', 'manutencaoPreventiva', 'usuarios', 'empresas',
  'auditoria', 'notificacoes', 'cobrancasEmpresas',
];

// Snapshot de segurança em arquivo (fallback sem Mongo)
function backupToFile(data) {
  try {
    if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    fs.writeFileSync(path.join(BACKUP_DIR, `db-${stamp}.json`), JSON.stringify(data));
    const files = fs.readdirSync(BACKUP_DIR)
      .filter(f => f.startsWith('db-') && f.endsWith('.json')).sort();
    while (files.length > MAX_BACKUPS) {
      try { fs.unlinkSync(path.join(BACKUP_DIR, files.shift())); } catch {}
    }
  } catch (e) { console.error('[Backup arquivo] falha:', e.message); }
}

// Snapshot de segurança no Mongo (coleção appdata_backups, rotaciona últimos N)
async function backupToMongo(snapshot) {
  try {
    if (!_mongoClient) return;
    const col = _mongoClient.db('imoveis').collection('appdata_backups');
    await col.insertOne({ at: new Date(), rev: snapshot._rev || 0, data: snapshot });
    const total = await col.countDocuments();
    if (total > MAX_BACKUPS) {
      const old = await col.find({}, { projection: { _id: 1 } })
        .sort({ at: 1 }).limit(total - MAX_BACKUPS).toArray();
      if (old.length) await col.deleteMany({ _id: { $in: old.map(o => o._id) } });
    }
  } catch (e) { console.error('[Backup Mongo] falha:', e.message); }
}

// Mescla preservando registros que existem no servidor mas faltam no payload do
// cliente. Acionado quando o cliente está com _rev defasado: prioriza a versão do
// cliente para os IDs que ele conhece, mas NUNCA descarta o que ele desconhece.
function safeMerge(serverData, clientData) {
  const out = { ...serverData, ...clientData };
  for (const k of LIST_KEYS) {
    const srv = Array.isArray(serverData[k]) ? serverData[k] : [];
    const cli = Array.isArray(clientData[k]) ? clientData[k] : [];
    if (!srv.length) { out[k] = cli; continue; }
    const byId = new Map();
    for (const r of cli) byId.set(r.id, r);          // versão nova dos conhecidos
    for (const r of srv) if (!byId.has(r.id)) byId.set(r.id, r); // não perde os demais
    out[k] = Array.from(byId.values());
  }
  return out;
}

app.get('/api/db', async (req, res) => {
  const col = await getCol();
  if (col) {
    const doc = await col.findOne({ _id: 'main' });
    if (doc) { const { _id, ...data } = doc; if (data._rev == null) data._rev = 0; return res.json(data); }
    return res.status(404).json({ error: 'Sem dados' });
  }
  // Fallback: arquivo local (apagado a cada deploy — apenas dev)
  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (data._rev == null) data._rev = 0;
    res.json(data);
  } catch {
    res.status(404).json({ error: 'Sem dados salvos' });
  }
});

app.post('/api/db', async (req, res) => {
  const body = { ...(req.body || {}) };
  const clientRev = body._rev;   // versão que o cliente acredita ter
  delete body._rev;
  delete body._id;

  const col = await getCol();
  if (col) {
    try {
      // Trava otimista com retry: garante que ninguém sobrescreva às cegas.
      for (let attempt = 0; attempt < 4; attempt++) {
        const current = await col.findOne({ _id: 'main' });
        const serverData = current ? (() => { const { _id, ...d } = current; return d; })() : null;
        const serverRev  = serverData ? (serverData._rev || 0) : 0;

        if (serverData) await backupToMongo(serverData); // snapshot ANTES de escrever

        let finalData, merged = false;
        if (!serverData || clientRev === undefined || clientRev === serverRev) {
          finalData = body;                         // cliente em dia → escrita completa
        } else {
          finalData = safeMerge(serverData, body);  // cliente defasado → merge sem perda
          merged = true;
          console.warn(`[api/db] rev cliente=${clientRev} ≠ servidor=${serverRev} → merge seguro`);
        }
        finalData._rev = serverRev + 1;

        // CAS: só grava se o _rev no banco ainda for o que lemos (evita corrida).
        const filter = serverData
          ? { _id: 'main', $or: [{ _rev: serverRev }, { _rev: { $exists: false } }] }
          : { _id: 'main', $exists: false };
        const result = serverData
          ? await col.replaceOne(filter, { _id: 'main', ...finalData })
          : await col.updateOne({ _id: 'main' }, { $setOnInsert: { _id: 'main', ...finalData } }, { upsert: true });

        const wrote = serverData ? result.modifiedCount > 0 : (result.upsertedCount > 0 || result.modifiedCount > 0);
        if (wrote) return res.json({ ok: true, _rev: finalData._rev, merged });
        // alguém escreveu no meio → tenta de novo com o estado mais recente
      }
      return res.status(409).json({ ok: false, error: 'Conflito de concorrência — recarregue e tente novamente' });
    } catch (err) {
      return res.status(500).json({ ok: false, error: err.message });
    }
  }
  // Fallback: arquivo local
  try {
    let serverData = null;
    try { serverData = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); } catch {}
    const serverRev = serverData ? (serverData._rev || 0) : 0;
    if (serverData) backupToFile(serverData);

    let finalData, merged = false;
    if (!serverData || clientRev === undefined || clientRev === serverRev) {
      finalData = body;
    } else {
      finalData = safeMerge(serverData, body);
      merged = true;
    }
    finalData._rev = serverRev + 1;
    fs.writeFileSync(DB_FILE, JSON.stringify(finalData), 'utf8');
    res.json({ ok: true, _rev: finalData._rev, merged });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Webhook events ──────────────────────────────────────
const EVENTS_FILE = path.join(__dirname, 'webhook-events.json');

function loadEvents() {
  try { return JSON.parse(fs.readFileSync(EVENTS_FILE, 'utf8')); }
  catch { return []; }
}
function saveEvents(events) {
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
}

// ── Helper Asaas (suporta chave/env por empresa via headers) ──
function reqAsaasKey(req) { return req.headers['x-asaas-key'] || cfg.key; }
function reqAsaasEnv(req) { return req.headers['x-asaas-env'] || cfg.env; }

async function asaasRequest(method, endpoint, body, overKey, overEnv) {
  const key  = overKey  || cfg.key;
  const base = (overEnv || cfg.env) === 'production'
    ? 'https://api.asaas.com/v3'
    : 'https://api-sandbox.asaas.com/v3';
  const res = await fetch(`${base}${endpoint}`, {
    method,
    headers: {
      'access_token': key,
      'Content-Type': 'application/json',
      'User-Agent': 'imoveis-app/1.0',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

// Lê config Asaas de uma empresa específica (para PDF redirect)
async function getEmpresaAsaasConfig(empresaId) {
  try {
    const col = await getCol();
    const doc = col ? await col.findOne({ _id: 'main' }) : null;
    const data = doc || JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    const emp = data?.empresas?.find(e => e.id === empresaId);
    return emp?.asaasConfig || null;
  } catch { return null; }
}

// Helper transporter de e-mail por empresa (aceita smtpConfig inline)
function makeTransporter(smtpConfig) {
  if (smtpConfig?.user && smtpConfig?.pass) {
    const port   = smtpConfig.port   || 465;
    // secure: usa o valor salvo, ou auto-detecta pela porta (465=SSL, 587=STARTTLS)
    const secure = smtpConfig.secure !== undefined ? !!smtpConfig.secure : port !== 587;
    return nodemailer.createTransport({
      host:   smtpConfig.host   || 'smtp.gmail.com',
      port,
      secure,
      auth:   { user: smtpConfig.user, pass: smtpConfig.pass },
      tls:    { rejectUnauthorized: false },  // tolera certs self-signed em ambientes de dev
    });
  }
  return getTransporter();
}

// ── Salvar configuração do Asaas (chave + ambiente) ─────
app.post('/api/asaas/config', (req, res) => {
  const { apiKey, env, webhookToken } = req.body;

  if (!apiKey || !apiKey.trim()) {
    return res.status(400).json({ ok: false, error: 'Chave API é obrigatória' });
  }

  // Atualiza variáveis em memória imediatamente
  cfg.key  = apiKey.trim();
  cfg.env  = env === 'production' ? 'production' : 'sandbox';
  if (webhookToken !== undefined) cfg.webhookToken = webhookToken.trim();

  // Persiste no .env
  const vars = {
    ASAAS_API_KEY:      cfg.key,
    ASAAS_ENV:          cfg.env,
  };
  if (webhookToken !== undefined) vars.ASAAS_WEBHOOK_TOKEN = cfg.webhookToken;

  try {
    writeEnvFile(vars);
    res.json({ ok: true, env: cfg.env });
  } catch (err) {
    res.status(500).json({ ok: false, error: `Erro ao salvar .env: ${err.message}` });
  }
});

// Lê configuração atual (sem expor a chave completa)
app.get('/api/asaas/config', (req, res) => {
  const key = cfg.key;
  const masked = key.length > 8
    ? key.slice(0, 12) + '••••••••' + key.slice(-4)
    : (key ? '••••••••' : '');
  res.json({
    configured: !!key,
    keyMasked:  masked,
    env:        cfg.env,
    webhookToken: cfg.webhookToken ? '••••••••' : '',
  });
});

// ── Status da conexão ───────────────────────────────────
app.get('/api/asaas/status', async (req, res) => {
  const key = reqAsaasKey(req);
  const env = reqAsaasEnv(req);
  if (!key) return res.json({ ok: false, error: 'Chave API não configurada' });
  try {
    const data = await asaasRequest('GET', '/myAccount', null, key, env);
    res.json({ ok: !data.errors, env, account: data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Clientes ────────────────────────────────────────────
app.post('/api/asaas/customer', async (req, res) => {
  const key = reqAsaasKey(req);
  const env = reqAsaasEnv(req);
  try {
    const { name, cpfCnpj, email, mobilePhone } = req.body;

    if (cpfCnpj) {
      const search = await asaasRequest('GET', `/customers?cpfCnpj=${encodeURIComponent(cpfCnpj.replace(/\D/g,''))}`, null, key, env);
      if (search.data && search.data.length > 0) {
        return res.json({ ok: true, customer: search.data[0] });
      }
    }

    const payload = { name };
    if (cpfCnpj)     payload.cpfCnpj     = cpfCnpj.replace(/\D/g, '');
    if (email)       payload.email       = email;
    if (mobilePhone) payload.mobilePhone = mobilePhone.replace(/\D/g, '');

    const customer = await asaasRequest('POST', '/customers', payload, key, env);
    if (customer.errors) return res.json({ ok: false, errors: customer.errors });
    res.json({ ok: true, customer });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Cobranças (Boleto) ──────────────────────────────────
app.post('/api/asaas/payment', async (req, res) => {
  const key = reqAsaasKey(req);
  const env = reqAsaasEnv(req);
  try {
    const { _emailMeta, ...paymentBody } = req.body;
    const payment = await asaasRequest('POST', '/payments', paymentBody, key, env);
    if (payment.errors) return res.json({ ok: false, errors: payment.errors });

    // Envia e-mail de notificação em background usando SMTP da empresa
    const { emailInquilino, nomeInquilino, contrato, smtpConfig } = _emailMeta || {};
    const t = makeTransporter(smtpConfig);
    if (emailInquilino && t) {
      const valor = payment.value?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '—';
      const venc  = payment.dueDate
        ? new Date(payment.dueDate + 'T12:00:00').toLocaleDateString('pt-BR')
        : '—';
      const appUrl = smtpConfig?.appUrl || emailCfg.appUrl;
      const { subject, html } = emailTemplates.boleto({
        nome: nomeInquilino || 'Inquilino',
        contrato: contrato || payment.description || '—',
        valor, vencimento: venc,
        linkBoleto: payment.bankSlipUrl || payment.invoiceUrl || '',
        appUrl,
      });
      t.sendMail({ from: smtpConfig?.from || emailCfg.from || emailCfg.user, to: emailInquilino, subject, html })
        .then(() => console.log(`[Email] Boleto enviado para ${emailInquilino}`))
        .catch(e => console.error('[Email] Falha:', e.message));
    }

    res.json({ ok: true, payment });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/asaas/payment/:id', async (req, res) => {
  try {
    const data = await asaasRequest('GET', `/payments/${req.params.id}`, null, reqAsaasKey(req), reqAsaasEnv(req));
    res.json({ ok: true, payment: data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Listagem de pagamentos (com filtros: status, customer, dateCreated[ge], limit, offset)
app.get('/api/asaas/payments', async (req, res) => {
  try {
    const qs = new URLSearchParams(req.query).toString();
    const data = await asaasRequest('GET', `/payments?${qs}`, null, reqAsaasKey(req), reqAsaasEnv(req));
    res.json({ ok: true, ...data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.delete('/api/asaas/payment/:id', async (req, res) => {
  try {
    const data = await asaasRequest('DELETE', `/payments/${req.params.id}`, null, reqAsaasKey(req), reqAsaasEnv(req));
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/asaas/payment/:id/line', async (req, res) => {
  try {
    const data = await asaasRequest('GET', `/payments/${req.params.id}/identificationField`, null, reqAsaasKey(req), reqAsaasEnv(req));
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/asaas/payment/:id/bankslip', async (req, res) => {
  try {
    const data = await asaasRequest('GET', `/payments/${req.params.id}/viewBankSlip`, null, reqAsaasKey(req), reqAsaasEnv(req));
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Abre o PDF do boleto diretamente no navegador (suporta ?eid= para chave por empresa)
app.get('/api/asaas/payment/:id/pdf', async (req, res) => {
  try {
    let key = reqAsaasKey(req);
    let env = reqAsaasEnv(req);
    const eid = req.query.eid ? parseInt(req.query.eid) : null;
    if (eid) {
      const empCfg = await getEmpresaAsaasConfig(eid);
      if (empCfg?.apiKey) { key = empCfg.apiKey; env = empCfg.env || cfg.env; }
    }

    const payment = await asaasRequest('GET', `/payments/${req.params.id}`, null, key, env);
    const pdfUrl = payment.bankSlipUrl;

    if (!pdfUrl) {
      return res.status(404).send(`
        <h3>PDF do boleto ainda não disponível</h3>
        <p>O Asaas pode levar alguns minutos para gerar o PDF após a criação do boleto.</p>
        <p>Aguarde 1-2 minutos e tente novamente.</p>
        <button onclick="window.close()">Fechar</button>
      `);
    }

    res.redirect(pdfUrl);
  } catch (err) {
    res.status(500).send(`Erro ao buscar boleto: ${err.message}`);
  }
});

// ── E-mail: configuração ────────────────────────────────
app.get('/api/email/config', (req, res) => {
  res.json({
    configured: !!(emailCfg.user && emailCfg.pass),
    host:   emailCfg.host,
    port:   emailCfg.port,
    secure: emailCfg.secure,
    user:   emailCfg.user,
    from:   emailCfg.from,
    appUrl: emailCfg.appUrl,
    passMasked: emailCfg.pass ? '••••••••' : '',
  });
});

app.post('/api/email/config', (req, res) => {
  const { host, port, secure, user, pass, from, appUrl } = req.body;
  if (!user || !pass) return res.status(400).json({ ok: false, error: 'Usuário e senha são obrigatórios' });

  emailCfg.host   = host   || 'smtp.gmail.com';
  emailCfg.port   = parseInt(port || '465');
  emailCfg.secure = secure !== false && secure !== 'false';
  emailCfg.user   = user.trim();
  emailCfg.pass   = pass.trim();
  emailCfg.from   = (from || user).trim();
  emailCfg.appUrl = (appUrl || emailCfg.appUrl).trim();
  _transporter = null; // força recriação com novos dados

  const vars = {
    SMTP_HOST:   emailCfg.host,
    SMTP_PORT:   String(emailCfg.port),
    SMTP_SECURE: String(emailCfg.secure),
    SMTP_USER:   emailCfg.user,
    SMTP_PASS:   emailCfg.pass,
    SMTP_FROM:   emailCfg.from,
    APP_URL:     emailCfg.appUrl,
  };
  try { writeEnvFile(vars); } catch (e) { /* ignora em ambientes read-only */ }
  res.json({ ok: true });
});

app.post('/api/email/test', async (req, res) => {
  const { smtpConfig } = req.body || {};
  const t    = makeTransporter(smtpConfig);
  const dest = smtpConfig?.user || emailCfg.user;
  const from = smtpConfig?.from || emailCfg.from || emailCfg.user;
  if (!t) return res.status(500).json({ ok: false, error: 'E-mail não configurado' });
  try {
    await t.sendMail({
      from, to: dest,
      subject: '✅ Teste de e-mail — Sistema de Imóveis',
      html: '<p>E-mail de teste enviado com sucesso! Sua configuração está funcionando.</p>',
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── E-mail: envio ───────────────────────────────────────
app.post('/api/email/send', async (req, res) => {
  try {
    const { template, to, dados, smtpConfig } = req.body;
    if (!emailTemplates[template]) return res.status(400).json({ ok: false, error: 'Template inválido' });
    if (!to) return res.status(400).json({ ok: false, error: 'Destinatário (to) não informado' });

    const appUrl = smtpConfig?.appUrl || emailCfg.appUrl;
    const { subject, html } = emailTemplates[template]({ ...dados, appUrl });
    const t    = makeTransporter(smtpConfig);
    const from = smtpConfig?.from || smtpConfig?.user || emailCfg.from || emailCfg.user;

    console.log(`[Email] Tentando enviar template="${template}" to="${to}" from="${from}" smtp=${smtpConfig ? 'empresa' : 'global'}`);

    if (!t) {
      console.error('[Email] Transporter não disponível — SMTP não configurado');
      return res.status(500).json({ ok: false, error: 'E-mail não configurado — acesse Configurações > E-mail e salve usuário + senha do app' });
    }

    await t.sendMail({ from, to, subject, html });
    console.log(`[Email] ✅ Enviado para ${to} (assunto: ${subject})`);
    res.json({ ok: true });
  } catch (err) {
    console.error(`[Email] ❌ Falha ao enviar:`, err.message);
    // Mensagens mais amigáveis para erros comuns
    let msg = err.message;
    if (msg.includes('535') || msg.includes('Username and Password')) msg = 'Senha do app incorreta — gere uma nova App Password no Gmail';
    if (msg.includes('534') || msg.includes('less secure'))           msg = 'Use uma App Password do Gmail (não a senha normal)';
    if (msg.includes('ECONNREFUSED'))                                  msg = `Conexão recusada pelo servidor SMTP — verifique host/porta`;
    if (msg.includes('ETIMEDOUT'))                                     msg = `Timeout ao conectar ao SMTP — verifique host/porta/firewall`;
    if (msg.includes('certificate'))                                   msg = `Erro de certificado SSL — tente porta 587 com secure=false`;
    res.status(500).json({ ok: false, error: msg });
  }
});

// ── Recuperação de senha ────────────────────────────────
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ ok: false, error: 'E-mail não informado' });

  try {
    // Lê o banco de dados atual
    let usuarios = [];
    const col = await getCol();
    if (col) {
      const doc = await col.findOne({ _id: 'main' });
      if (doc?.usuarios) usuarios = doc.usuarios;
    } else {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        usuarios = JSON.parse(raw)?.usuarios || [];
      } catch { usuarios = []; }
    }

    const u = usuarios.find(x =>
      x.email && x.email.toLowerCase() === email.toLowerCase() && x.ativo
    );

    if (!u) {
      // Retorna ok para não revelar se o e-mail existe (segurança)
      return res.json({ ok: true });
    }

    const { subject, html } = emailTemplates.esqueceuSenha({
      nome:    u.nome,
      usuario: u.usuario,
      senha:   u.senha,
      appUrl:  emailCfg.appUrl,
    });

    await enviarEmail({ to: u.email, subject, html });
    console.log(`[Email] Recuperação de senha enviada para ${u.email}`);
    res.json({ ok: true });
  } catch (err) {
    console.error('[forgot-password]', err.message);
    res.status(500).json({ ok: false, error: 'Falha ao enviar e-mail. Verifique a configuração de e-mail no sistema.' });
  }
});

// ── Registro de assinatura eletrônica ──────────────────
app.post('/api/registrar-assinatura', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'desconhecido';
  const agente = req.headers['user-agent'] || 'desconhecido';
  res.json({ ip, agente, registradoEm: new Date().toISOString() });
});

// ── Webhook ─────────────────────────────────────────────
app.post('/webhook/asaas', (req, res) => {
  if (cfg.webhookToken && req.headers['asaas-access-token'] !== cfg.webhookToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const event = req.body;
  console.log(`[Webhook] ${event.event} | ID: ${event.payment?.id}`);

  const events = loadEvents();
  events.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    receivedAt: new Date().toISOString(),
    event: event.event,
    payment: event.payment,
    processed: false,
  });
  saveEvents(events);
  res.json({ received: true });
});

app.get('/api/webhook-events', (req, res) => {
  res.json(loadEvents().filter(e => !e.processed));
});

app.patch('/api/webhook-events/:id/processed', (req, res) => {
  const events = loadEvents();
  const ev = events.find(e => e.id === req.params.id);
  if (ev) ev.processed = true;
  saveEvents(events);
  res.json({ ok: true });
});

// ══════════════════════════════════════════════════════════
// ── ALERTAS AUTOMÁTICOS DIÁRIOS ────────────────────────
// ══════════════════════════════════════════════════════════

async function carregarDBAlerta() {
  try {
    const col = await getCol();
    if (col) {
      const doc = await col.findOne({ _id: 'main' });
      if (doc) return doc;
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch { return null; }
}

function htmlAlerta({ empresaNome, cobrancas, contratos, manutencoes, appUrl }) {
  const hoje = new Date().toLocaleDateString('pt-BR', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  const secaoCobrancas = cobrancas.length ? `
    <h2 style="color:#b91c1c;margin:24px 0 8px">💰 Cobranças Pendentes / Em Atraso (${cobrancas.length})</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <tr style="background:#fee2e2">
        <th style="padding:8px;text-align:left;border:1px solid #fca5a5">Inquilino</th>
        <th style="padding:8px;text-align:left;border:1px solid #fca5a5">Referência</th>
        <th style="padding:8px;text-align:right;border:1px solid #fca5a5">Valor</th>
        <th style="padding:8px;text-align:center;border:1px solid #fca5a5">Vencimento</th>
        <th style="padding:8px;text-align:center;border:1px solid #fca5a5">Situação</th>
      </tr>
      ${cobrancas.map(c => `
      <tr style="border-bottom:1px solid #fecaca">
        <td style="padding:8px;border:1px solid #fecaca">${c.inquilino || '—'}</td>
        <td style="padding:8px;border:1px solid #fecaca">${c.referencia || c.mes || '—'}</td>
        <td style="padding:8px;text-align:right;border:1px solid #fecaca">R$ ${(c.totalGeral||0).toLocaleString('pt-BR',{minimumFractionDigits:2})}</td>
        <td style="padding:8px;text-align:center;border:1px solid #fecaca">${c.vencimento ? new Date(c.vencimento+'T12:00:00').toLocaleDateString('pt-BR') : '—'}</td>
        <td style="padding:8px;text-align:center;border:1px solid #fecaca;color:${c._atraso?'#b91c1c':'#92400e'};font-weight:600">${c._atraso ? `${c._diasAtraso}d em atraso` : 'Vence hoje'}</td>
      </tr>`).join('')}
    </table>` : '';

  const secaoContratos = contratos.length ? `
    <h2 style="color:#92400e;margin:24px 0 8px">📄 Contratos Vencendo em 30 Dias (${contratos.length})</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <tr style="background:#fef9c3">
        <th style="padding:8px;text-align:left;border:1px solid #fde68a">Inquilino</th>
        <th style="padding:8px;text-align:left;border:1px solid #fde68a">Imóvel</th>
        <th style="padding:8px;text-align:center;border:1px solid #fde68a">Término</th>
        <th style="padding:8px;text-align:center;border:1px solid #fde68a">Dias Restantes</th>
      </tr>
      ${contratos.map(c => `
      <tr>
        <td style="padding:8px;border:1px solid #fde68a">${c.inquilino||'—'}</td>
        <td style="padding:8px;border:1px solid #fde68a">${c.imovel||'—'}</td>
        <td style="padding:8px;text-align:center;border:1px solid #fde68a">${c.termino ? new Date(c.termino+'T12:00:00').toLocaleDateString('pt-BR') : '—'}</td>
        <td style="padding:8px;text-align:center;border:1px solid #fde68a;font-weight:600;color:#92400e">${c._diasRestantes} dias</td>
      </tr>`).join('')}
    </table>` : '';

  const secaoManutencoes = manutencoes.length ? `
    <h2 style="color:#1e40af;margin:24px 0 8px">🔧 Manutenções Preventivas com Alerta (${manutencoes.length})</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <tr style="background:#dbeafe">
        <th style="padding:8px;text-align:left;border:1px solid #93c5fd">Descrição</th>
        <th style="padding:8px;text-align:left;border:1px solid #93c5fd">Imóvel</th>
        <th style="padding:8px;text-align:center;border:1px solid #93c5fd">Próxima Data</th>
        <th style="padding:8px;text-align:center;border:1px solid #93c5fd">Situação</th>
      </tr>
      ${manutencoes.map(m => `
      <tr>
        <td style="padding:8px;border:1px solid #93c5fd">${m.descricao||m.tipo||'—'}</td>
        <td style="padding:8px;border:1px solid #93c5fd">${m.imovel||'—'}</td>
        <td style="padding:8px;text-align:center;border:1px solid #93c5fd">${m.dataProxima ? new Date(m.dataProxima+'T12:00:00').toLocaleDateString('pt-BR') : '—'}</td>
        <td style="padding:8px;text-align:center;border:1px solid #93c5fd;font-weight:600;color:${m._vencida?'#b91c1c':'#1e40af'}">${m._vencida ? 'Vencida' : `${m._diasRestantes}d restantes`}</td>
      </tr>`).join('')}
    </table>` : '';

  return {
    subject: `📋 Relatório Diário — ${empresaNome} — ${new Date().toLocaleDateString('pt-BR')}`,
    html: `
    <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;color:#1f2937">
      <div style="background:#1a56db;padding:20px 28px;border-radius:8px 8px 0 0">
        <h1 style="color:#fff;margin:0;font-size:20px">📋 Relatório Diário do Sistema</h1>
        <p style="color:#bfdbfe;margin:4px 0 0;font-size:13px">${hoje}</p>
      </div>
      <div style="background:#fff;padding:24px 28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
        <p style="color:#4b5563;margin:0 0 8px">Empresa: <strong>${empresaNome}</strong></p>
        <div style="display:flex;gap:12px;margin-bottom:16px">
          ${cobrancas.length ? `<span style="background:#fee2e2;color:#b91c1c;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700">💰 ${cobrancas.length} cobrança(s)</span>` : ''}
          ${contratos.length ? `<span style="background:#fef9c3;color:#92400e;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700">📄 ${contratos.length} contrato(s)</span>` : ''}
          ${manutencoes.length ? `<span style="background:#dbeafe;color:#1e40af;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700">🔧 ${manutencoes.length} manutenção(ões)</span>` : ''}
        </div>
        ${secaoCobrancas}
        ${secaoContratos}
        ${secaoManutencoes}
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">
        <p style="color:#9ca3af;font-size:12px;text-align:center;margin:0">
          Acesse o sistema para detalhes e ações: <a href="${appUrl}" style="color:#1a56db">${appUrl}</a>
        </p>
      </div>
    </div>`,
  };
}

async function rodarAlertas(filtroEmpresaId = null) {
  const data = await carregarDBAlerta();
  if (!data || !Array.isArray(data.empresas)) {
    console.log('[Alertas] Nenhum dado disponível para processar.');
    return { enviados: 0, erros: [] };
  }

  const hoje  = new Date(); hoje.setHours(0,0,0,0);
  const d30   = new Date(hoje); d30.setDate(d30.getDate() + 30);
  const d7    = new Date(hoje); d7.setDate(d7.getDate() + 7);
  const resultados = [];

  for (const emp of data.empresas) {
    if (!emp.ativo) continue;
    if (filtroEmpresaId && emp.id !== filtroEmpresaId) continue;

    const smtp = emp.emailConfig;
    if (!smtp?.user || !smtp?.pass) {
      console.log(`[Alertas] Empresa ${emp.nome}: sem e-mail configurado, pulando.`);
      continue;
    }

    // Destinatários: admins e usuários da empresa com e-mail
    const destinatarios = (data.usuarios || [])
      .filter(u => u.ativo && u.empresaId === emp.id && u.email && u.perfil !== 'inquilino')
      .map(u => u.email);
    if (!destinatarios.length) {
      console.log(`[Alertas] Empresa ${emp.nome}: sem usuários com e-mail, pulando.`);
      continue;
    }

    // 1. Cobranças pendentes/atrasadas
    // Campo real: dataPagamento (não "vencimento"). Pago = baixaManual+valorRecebido >= total OU Asaas confirmado.
    const cobrancas = (data.financeiro || [])
      .filter(f => {
        if (f.empresaId !== emp.id) return false;
        if (!f.dataPagamento || f.tipo === 'caucao') return false;
        const isFinPago = (f.baixaManual && (f.valorRecebido||0) >= (f.totalGeral||f.valorContrato||1))
          || f.asaasStatus === 'RECEIVED' || f.asaasStatus === 'CONFIRMED';
        return !isFinPago && (f.totalGeral||f.valorContrato||0) > 0;
      })
      .map(f => {
        const venc = new Date(f.dataPagamento + 'T12:00:00'); venc.setHours(0,0,0,0);
        const diff = Math.round((hoje - venc) / 86400000);
        if (venc > hoje) return null; // futuro, ignora
        return { ...f, _atraso: diff > 0, _diasAtraso: diff };
      })
      .filter(Boolean);

    // 2. Contratos vencendo em 30 dias
    // Campo real: dataTermino (não "termino")
    const contratos = (data.contratos || [])
      .filter(c => {
        const _termino = c.dataTermino || c.termino;
        return c.empresaId === emp.id && (c.status||'').toUpperCase() === 'ATIVO' && _termino;
      })
      .map(c => {
        const _termino = c.dataTermino || c.termino;
        const term = new Date(_termino + 'T12:00:00'); term.setHours(0,0,0,0);
        const diff = Math.round((term - hoje) / 86400000);
        if (diff < 0 || diff > 30) return null;
        return { ...c, _diasRestantes: diff };
      })
      .filter(Boolean);

    // 3. Manutenções preventivas com alerta
    // Campo real: proximaExecucao (não "dataProxima")
    const manutencoes = (data.manutencaoPreventiva || [])
      .filter(m => m.empresaId === emp.id && m.alertar && (m.proximaExecucao || m.dataProxima))
      .map(m => {
        const _prox = m.proximaExecucao || m.dataProxima;
        const prox = new Date(_prox + 'T12:00:00'); prox.setHours(0,0,0,0);
        const diff = Math.round((prox - hoje) / 86400000);
        if (diff > 7) return null; // alerta só até 7 dias antes
        return { ...m, _vencida: diff < 0, _diasRestantes: Math.abs(diff) };
      })
      .filter(Boolean);

    if (!cobrancas.length && !contratos.length && !manutencoes.length) {
      console.log(`[Alertas] Empresa ${emp.nome}: nenhum alerta para enviar.`);
      continue;
    }

    const appUrl = smtp.appUrl || emailCfg.appUrl || 'https://imobiliario.autoprimetech.com.br';
    const { subject, html } = htmlAlerta({ empresaNome: emp.nome, cobrancas, contratos, manutencoes, appUrl });
    const transporter = makeTransporter(smtp);

    for (const dest of destinatarios) {
      try {
        await transporter.sendMail({ from: smtp.from || smtp.user, to: dest, subject, html });
        console.log(`[Alertas] Email enviado → ${dest} (${emp.nome})`);
        resultados.push({ ok: true, empresa: emp.nome, dest });
      } catch (err) {
        console.error(`[Alertas] Falha ao enviar para ${dest}:`, err.message);
        resultados.push({ ok: false, empresa: emp.nome, dest, erro: err.message });
      }
    }
  }
  return { enviados: resultados.filter(r=>r.ok).length, erros: resultados.filter(r=>!r.ok) };
}

// Agenda: roda todo dia às 08:00
function agendarAlertaDiario() {
  const agora = new Date();
  const alvo  = new Date();
  alvo.setHours(8, 0, 0, 0);
  if (agora >= alvo) alvo.setDate(alvo.getDate() + 1);
  const ms = alvo - agora;
  setTimeout(async () => {
    console.log('[Alertas] Rodando alertas diários...');
    const res = await rodarAlertas();
    console.log(`[Alertas] Concluído: ${res.enviados} enviado(s), ${res.erros.length} erro(s).`);
    agendarAlertaDiario(); // reagenda para amanhã
  }, ms);
  console.log(`[Alertas] Próximo envio: ${alvo.toLocaleString('pt-BR')}`);
}

// Rota manual: testar alertas agora
app.post('/api/alertas/testar', async (req, res) => {
  try {
    const { empresaId } = req.body || {};
    const resultado = await rodarAlertas(empresaId || null);
    res.json({ ok: true, ...resultado });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Inicia servidor ─────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║   🏢 Sistema de Gestão de Imóveis           ║');
  console.log('╠══════════════════════════════════════════════╣');
  console.log(`║   Acesse: ${url.padEnd(35)}║`);
  console.log(`║   Asaas:  ${cfg.env.padEnd(35)}║`);
  console.log(`║   Webhook: ${(url+'/webhook/asaas').padEnd(33)}║`);
  console.log('╚══════════════════════════════════════════════╝\n');
  if (!cfg.key) console.warn('⚠️  Chave Asaas não configurada — acesse Configurações no sistema\n');
  agendarAlertaDiario();
});
