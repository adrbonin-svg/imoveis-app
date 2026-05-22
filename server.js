require('dotenv').config();
const express      = require('express');
const path         = require('path');
const fs           = require('fs');
const { MongoClient } = require('mongodb');
const nodemailer   = require('nodemailer');

// ── MongoDB (persistência permanente entre deploys) ─────
let _mongo = null;

async function getCol() {
  if (!process.env.MONGODB_URI) return null;
  try {
    if (!_mongo) {
      const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
      await client.connect();
      _mongo = client.db('imoveis').collection('appdata');
    }
    return _mongo;
  } catch (e) {
    console.error('[MongoDB] Conexão falhou:', e.message);
    _mongo = null;
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
    _transporter = nodemailer.createTransport({
      host:   emailCfg.host,
      port:   emailCfg.port,
      secure: emailCfg.secure,
      auth:   { user: emailCfg.user, pass: emailCfg.pass },
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
const DB_FILE = path.join(__dirname, 'db.json');

app.get('/api/db', async (req, res) => {
  const col = await getCol();
  if (col) {
    const doc = await col.findOne({ _id: 'main' });
    if (doc) { const { _id, ...data } = doc; return res.json(data); }
    return res.status(404).json({ error: 'Sem dados' });
  }
  // Fallback: arquivo local (apagado a cada deploy — apenas dev)
  try {
    res.json(JSON.parse(fs.readFileSync(DB_FILE, 'utf8')));
  } catch {
    res.status(404).json({ error: 'Sem dados salvos' });
  }
});

app.post('/api/db', async (req, res) => {
  const col = await getCol();
  if (col) {
    await col.replaceOne({ _id: 'main' }, { _id: 'main', ...req.body }, { upsert: true });
    return res.json({ ok: true });
  }
  // Fallback: arquivo local
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(req.body), 'utf8');
    res.json({ ok: true });
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

// ── Helper Asaas ────────────────────────────────────────
async function asaasRequest(method, endpoint, body) {
  const res = await fetch(`${asaasBase()}${endpoint}`, {
    method,
    headers: {
      'access_token': cfg.key,
      'Content-Type': 'application/json',
      'User-Agent': 'imoveis-app/1.0',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
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
  if (!cfg.key) return res.json({ ok: false, error: 'Chave API não configurada' });
  try {
    const data = await asaasRequest('GET', '/myAccount');
    res.json({ ok: !data.errors, env: cfg.env, account: data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Clientes ────────────────────────────────────────────
app.post('/api/asaas/customer', async (req, res) => {
  try {
    const { name, cpfCnpj, email, mobilePhone } = req.body;

    if (cpfCnpj) {
      const search = await asaasRequest('GET', `/customers?cpfCnpj=${encodeURIComponent(cpfCnpj.replace(/\D/g,''))}`);
      if (search.data && search.data.length > 0) {
        return res.json({ ok: true, customer: search.data[0] });
      }
    }

    const payload = { name };
    if (cpfCnpj)     payload.cpfCnpj     = cpfCnpj.replace(/\D/g, '');
    if (email)       payload.email       = email;
    if (mobilePhone) payload.mobilePhone = mobilePhone.replace(/\D/g, '');

    const customer = await asaasRequest('POST', '/customers', payload);
    if (customer.errors) return res.json({ ok: false, errors: customer.errors });
    res.json({ ok: true, customer });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Cobranças (Boleto) ──────────────────────────────────
app.post('/api/asaas/payment', async (req, res) => {
  try {
    const payment = await asaasRequest('POST', '/payments', req.body);
    if (payment.errors) return res.json({ ok: false, errors: payment.errors });

    // Envia e-mail de notificação de boleto em background (não bloqueia a resposta)
    const { emailInquilino, nomeInquilino, contrato } = req.body._emailMeta || {};
    if (emailInquilino && emailCfg.user) {
      const valor    = payment.value?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '—';
      const venc     = payment.dueDate
        ? new Date(payment.dueDate + 'T12:00:00').toLocaleDateString('pt-BR')
        : '—';
      const { subject, html } = emailTemplates.boleto({
        nome: nomeInquilino || 'Inquilino',
        contrato: contrato || payment.description || '—',
        valor,
        vencimento: venc,
        linkBoleto: payment.bankSlipUrl || payment.invoiceUrl || '',
        appUrl: emailCfg.appUrl,
      });
      enviarEmail({ to: emailInquilino, subject, html })
        .then(() => console.log(`[Email] Boleto enviado para ${emailInquilino}`))
        .catch(e => console.error('[Email] Falha ao enviar boleto:', e.message));
    }

    res.json({ ok: true, payment });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/asaas/payment/:id', async (req, res) => {
  try {
    const data = await asaasRequest('GET', `/payments/${req.params.id}`);
    res.json({ ok: true, payment: data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.delete('/api/asaas/payment/:id', async (req, res) => {
  try {
    const data = await asaasRequest('DELETE', `/payments/${req.params.id}`);
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/asaas/payment/:id/line', async (req, res) => {
  try {
    const data = await asaasRequest('GET', `/payments/${req.params.id}/identificationField`);
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/asaas/payment/:id/bankslip', async (req, res) => {
  try {
    const data = await asaasRequest('GET', `/payments/${req.params.id}/viewBankSlip`);
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Abre o PDF do boleto diretamente no navegador
app.get('/api/asaas/payment/:id/pdf', async (req, res) => {
  try {
    // Busca os dados do pagamento — o objeto já contém bankSlipUrl
    const payment = await asaasRequest('GET', `/payments/${req.params.id}`);

    const pdfUrl = payment.bankSlipUrl;

    if (!pdfUrl) {
      return res.status(404).send(`
        <h3>PDF do boleto ainda não disponível</h3>
        <p>O Asaas pode levar alguns minutos para gerar o PDF após a criação do boleto.</p>
        <p>Aguarde 1-2 minutos e tente novamente.</p>
        <button onclick="window.close()">Fechar</button>
      `);
    }

    // Redireciona para a URL pública do boleto no Asaas
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
  try {
    await enviarEmail({
      to: emailCfg.user,
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
    const { template, to, dados } = req.body;
    if (!emailTemplates[template]) return res.status(400).json({ ok: false, error: 'Template inválido' });
    const { subject, html } = emailTemplates[template]({ ...dados, appUrl: emailCfg.appUrl });
    await enviarEmail({ to, subject, html });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
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
});
