// Recuperação cirúrgica: DILIANA FREITAS DOS SANTOS + contratos CT-0012/CT-0013/CT-014
// + financeiro associado, sem colidir com os IDs atuais. Idempotente: aborta se já existir.
const fs = require('fs');

const DB_FILE = './db.json';
const BK_FILE = './backups/db-2026-06-10T18-12-14-395Z.json'; // pico: inq16 con14 c/ Diliana

const cur = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
const bk  = JSON.parse(fs.readFileSync(BK_FILE, 'utf8'));

// Guard de idempotência
if (cur.inquilinos.some(i => /dilian/i.test(i.nome || ''))) {
  console.log('ABORT: Diliana já existe no db.json atual. Nada a fazer.');
  process.exit(0);
}

const log = [];

// 1) DILIANA — id novo livre (atual maxInq=20 → 21). Mantém empresaId, documentos, etc.
const dilBk = bk.inquilinos.find(i => i.id === 18 && /dilian/i.test(i.nome));
if (!dilBk) { console.error('ERRO: Diliana não encontrada no backup'); process.exit(1); }
const NEW_INQ_ID = 21;
const diliana = { ...dilBk, id: NEW_INQ_ID };
cur.inquilinos.push(diliana);
log.push(`+ inquilino ${NEW_INQ_ID} ${diliana.nome} (era id 18 no backup)`);

// 2) CONTRATOS sumidos. IDs 18/19/20 estão livres nos contratos atuais (vão até 17).
//    Ajusta inquilinoId da Diliana de 18 -> 21. Renata(5) e Mathues(19) mantêm.
const contratosBk = [18, 19, 20].map(id => bk.contratos.find(c => c.id === id)).filter(Boolean);
const remapInq = { 18: NEW_INQ_ID }; // só a Diliana muda de id
for (const c of contratosBk) {
  const novo = { ...c };
  if (remapInq[novo.inquilinoId] != null) novo.inquilinoId = remapInq[novo.inquilinoId];
  // valida imóvel ainda existe
  if (novo.imovelId != null && !cur.imoveis.some(im => im.id === novo.imovelId)) {
    log.push(`! AVISO: imóvel ${novo.imovelId} do contrato ${novo.codigo} não existe no atual`);
  }
  cur.contratos.push(novo);
  log.push(`+ contrato ${novo.id} ${novo.codigo} inqId:${novo.inquilinoId} imovelId:${novo.imovelId}`);
}

// 3) FINANCEIRO dos 3 contratos. Reatribui o campo id (próprio) para não colidir;
//    mantém contratoId (18/19/20 reinseridos) e ajusta inquilinoId da Diliana.
let nextFinId = Math.max(...cur.financeiro.map(f => f.id)) + 1;
const codes = new Set(['CT-0012', 'CT-0013', 'CT-014']);
const conIds = new Set([18, 19, 20]);
const finBk = (bk.financeiro || []).filter(f => conIds.has(f.contratoId) || codes.has(f.contrato));
let addedFin = 0;
for (const f of finBk) {
  const novo = { ...f, id: nextFinId++ };
  if (remapInq[novo.inquilinoId] != null) novo.inquilinoId = remapInq[novo.inquilinoId];
  cur.financeiro.push(novo);
  addedFin++;
}
log.push(`+ ${addedFin} parcelas financeiras (ids ${nextFinId - addedFin}..${nextFinId - 1})`);

// 4) Incrementa _rev para forçar todos os clientes a re-sincronizar.
cur._rev = (cur._rev || 0) + 1;
log.push(`_rev: ${cur._rev}`);

fs.writeFileSync(DB_FILE, JSON.stringify(cur), 'utf8');
console.log('RECUPERAÇÃO CONCLUÍDA:');
console.log(log.join('\n'));
console.log('\nContagens finais -> inquilinos:', cur.inquilinos.length,
  '| contratos:', cur.contratos.length, '| financeiro:', cur.financeiro.length);
