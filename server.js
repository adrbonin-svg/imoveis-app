require('dotenv').config();
const express = require('express');
const path    = require('path');
const fs      = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── Config mutável (pode ser atualizada pelo painel) ────
const cfg = {
  key:  process.env.ASAAS_API_KEY || '',
  env:  process.env.ASAAS_ENV     || 'sandbox',
  webhookToken: process.env.ASAAS_WEBHOOK_TOKEN || '',
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
