const DB = {
  inquilinos: [
    { id: 1, nome: "Alexa", cpf: "XXXX", celular: "11 9999XXXX", telefone: "", email: "", observacoes: "" },
    { id: 2, nome: "Adilson José (Pousada)", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
    { id: 3, nome: "Kizzy Adriana Pereira dos Santos", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
    { id: 4, nome: "Tatiane Santos Souza", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
    { id: 5, nome: "Renata da Silva Gomes", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
    { id: 6, nome: "Thor participações", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
    { id: 7, nome: "Gustavo Albano de A Rocha", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
    { id: 8, nome: "Gabriella Albano de A A Rocha", cpf: "", celular: "", telefone: "", email: "", observacoes: "" },
  ],

  predios: [
    { id: 1, nome: "Brotas", endereco: "Rua de 19 de maio Nº2 D", bairro: "Brotas", cidade: "Salvador", uf: "BA", cep: "40285-870", observacoes: "" },
    { id: 2, nome: "Predio Sede", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-725", observacoes: "" },
    { id: 3, nome: "Predio Anexo", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-733", observacoes: "" },
  ],

  imoveis: [
    { id: 1, predioId: 1, nome: "Brotas - apt 003", endereco: "Rua de 19 de maio Nº2 D", bairro: "Brotas", cidade: "Salvador", uf: "BA", cep: "40285-870", tipo: "Apartamento", medidor: "7060076477 - 1200542050", andar: "Sub-solo", observacoes: "incluso agua", valorAluguel: 550.00, taxasExtras: 0, total: 550.00, status: "OCUPADO" },
    { id: 2, predioId: 1, nome: "Brotas - apt 004", endereco: "Rua de 19 de maio Nº2 D", bairro: "Brotas", cidade: "Salvador", uf: "BA", cep: "40285-871", tipo: "Apartamento", medidor: "7061155095 - 1200541851", andar: "Sub-solo", observacoes: "incluso agua", valorAluguel: 650.00, taxasExtras: 0, total: 650.00, status: "DISPONÍVEL" },
    { id: 3, predioId: 1, nome: "Brotas - apt 002 externo", endereco: "Rua de 19 de maio Nº2 D", bairro: "Brotas", cidade: "Salvador", uf: "BA", cep: "40285-872", tipo: "Apartamento", medidor: "7072753083 - 1200541991", andar: "Térreo", observacoes: "incluso agua", valorAluguel: 550.00, taxasExtras: 0, total: 550.00, status: "DISPONÍVEL" },
    { id: 4, predioId: 2, nome: "Predio Sede - casa 001", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-725", tipo: "Casa", medidor: "SOLAR - 943", andar: "Térreo", observacoes: "taxa agua R$ 75,00", valorAluguel: 780.87, taxasExtras: 420.74, total: 1201.61, status: "DISPONÍVEL" },
    { id: 5, predioId: 2, nome: "Predio Sede - apt 001", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-726", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 6, predioId: 2, nome: "Predio Sede -apt 002", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-727", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 7, predioId: 2, nome: "Predio Sede - apt 003", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-728", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 8, predioId: 2, nome: "Predio Sede - apt 004", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-729", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 9, predioId: 2, nome: "Predio Sede - EMPRESA 101", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-730", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 10, predioId: 2, nome: "Predio Sede - apt 201", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-731", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 11, predioId: 2, nome: "Predio Sede - apt 202", endereco: "R. Meire Teixeira do Nascimento, Nº 290 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-732", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 12, predioId: 3, nome: "Predio anexo - loja 01", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-733", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 13, predioId: 3, nome: "Predio anexo - loja 02", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-734", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 14, predioId: 3, nome: "Predio anexo -101", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-735", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 15, predioId: 3, nome: "Predio anexo -201", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-736", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 16, predioId: 3, nome: "Predio anexo -202", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-737", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 17, predioId: 3, nome: "Predio anexo -203", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-738", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 18, predioId: 3, nome: "Predio anexo -204", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-739", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 19, predioId: 3, nome: "Predio anexo -205", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-740", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 20, predioId: 3, nome: "Predio anexo -301", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-741", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 21, predioId: 3, nome: "Predio anexo -302", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-742", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 22, predioId: 3, nome: "Predio anexo -303", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-743", tipo: "Apartamento", medidor: "", andar: "", observacoes: "taxa agua R$ 75,00", valorAluguel: 1200.00, taxasExtras: 0, total: 1200.00, status: "DISPONÍVEL" },
    { id: 23, predioId: 3, nome: "Predio anexo -304", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-744", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 24, predioId: 3, nome: "Predio anexo -305", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-745", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
    { id: 25, predioId: 3, nome: "Predio anexo -401", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-746", tipo: "", medidor: "", andar: "", observacoes: "taxa agua R$ 65,00", valorAluguel: 850.00, taxasExtras: 0, total: 850.00, status: "DISPONÍVEL" },
    { id: 26, predioId: 3, nome: "Predio anexo -402", endereco: "R. Meire Teixeira do Nascimento, Nº 34 Jardim Jaraguá, quadra A", bairro: "Itinga", cidade: "Lauro de Freitas", uf: "BA", cep: "42.738-746", tipo: "", medidor: "", andar: "", observacoes: "", valorAluguel: 0, taxasExtras: 0, total: 0, status: "DISPONÍVEL" },
  ],

  contratos: [
    { id: 1, codigo: "CT001", imovel: "Brotas - apt 003", inquilino: "Adilson José (Pousada)", dataInicio: "2025-01-28", dataTermino: "2026-01-28", valorMensal: 550.00, ajustes: "Reajuste anual pelo IPCA", status: "ATIVO" },
    { id: 2, codigo: "CT002", imovel: "Brotas - apt 003", inquilino: "Adilson José (Pousada)", dataInicio: "2025-01-28", dataTermino: "2026-01-28", valorMensal: 550.00, ajustes: "", status: "ATIVO" },
    { id: 3, codigo: "CT003", imovel: "Brotas - apt 004", inquilino: "", dataInicio: "", dataTermino: "", valorMensal: 650.00, ajustes: "", status: "ATIVO" },
    { id: 4, codigo: "CT004", imovel: "Predio Sede - casa 001", inquilino: "Kizzy Adriana Pereira dos Santos", dataInicio: "2025-03-04", dataTermino: "2026-03-04", valorMensal: 1201.61, ajustes: "", status: "ATIVO" },
    { id: 5, codigo: "CT005", imovel: "Predio anexo -303", inquilino: "Tatiane Santos Souza", dataInicio: "2026-05-10", dataTermino: "2027-05-10", valorMensal: 1200.00, ajustes: "", status: "ATIVO" },
    { id: 6, codigo: "CT006", imovel: "Predio anexo -401", inquilino: "Renata da Silva Gomes", dataInicio: "2026-04-05", dataTermino: "2027-04-05", valorMensal: 850.00, ajustes: "", status: "ATIVO" },
  ],

  financeiro: [
    { id: 1, dataPagamento: "2026-01-01", contrato: "CT002", inquilino: "Adilson José (Pousada)", valorContrato: 550.00, totalGeral: 550.00, valorRecebido: 550.00, baixaManual: true, observacoes: "" },
    { id: 2, dataPagamento: "2026-02-01", contrato: "CT001", inquilino: "Adilson José (Pousada)", valorContrato: 550.00, totalGeral: 550.00, valorRecebido: 535.00, baixaManual: true, observacoes: "" },
    { id: 3, dataPagamento: "2026-02-01", contrato: "CT003", inquilino: "", valorContrato: 650.00, totalGeral: 650.00, valorRecebido: 670.00, baixaManual: true, observacoes: "" },
  ],

  manutencao: [
    { id: 1, imovel: "Ed Camargo Sala 10", tipoServico: "Reparos Elétricos", prestador: "Messias", dataServico: "2026-05-11", custo: 240.57, status: "Concluído", observacoes: "paliativo, necessita de revisão" },
  ],

  manutencaoPreventiva: [],

  auditoria: [],

  empresas: [],
  cobrancasEmpresas: [],

  usuarios: [
    {
      id: 1,
      nome: 'Administrador',
      usuario: 'admin',
      senha: 'admin',
      perfil: 'admin',
      permissoes: {
        dashboard:   { ver: true },
        imoveis:     { ver: true, criar: true, editar: true, excluir: true },
        inquilinos:  { ver: true, criar: true, editar: true, excluir: true },
        contratos:   { ver: true, criar: true, editar: true, excluir: true },
        financeiro:  { ver: true, criar: true, editar: true, excluir: true },
        manutencao:  { ver: true, criar: true, editar: true, excluir: true },
        relatorios:  { ver: true },
        config:      { ver: true, editar: true },
        usuarios:    { ver: true },
      },
      ativo: true,
    }
  ],

  config: {
    tiposImovel: ["Apartamento", "Casa", "Sala Comercial", "Cobertura", "Flat", "Loja Comercial", "Apartamento Duplex", "Chácara", "Kitnet"],
    despesasAssociadas: ["IPTU", "Manutenção", "Taxa de Administração", "Água", "Luz"],
    tiposServico: ["Limpeza Geral", "Reparos Hidráulicos", "Pintura", "Manutenção Elétrica", "Limpeza Pós-Obra", "Jardinagem", "Instalação de Ar", "Reparos Elétricos", "Manutenção de Telhado"],
    statusContrato: ["ATIVO", "ENCERRADO", "SUSPENSO"],
    statusImovel: ["OCUPADO", "DISPONÍVEL", "EM MANUTENÇÃO"],
    statusManutencao: ["Concluído", "Em andamento", "Pendente"],
    camposExtras: {
      inquilino:  [],
      imovel:     [],
      contrato:   [],
      financeiro: [],
      manutencao: []
    },
    camposExtrasNextId: 1,
    asaas: {
      ativo: false,
      autoGerar: false,
      nomeBeneficiario: '',
    },
    energia: {
      tipo: 'solar',
      valorKwh: 0,
    },
    locador: {
      nome: 'Adriano Bonin dos Santos',
      estadoCivil: 'casado',
      profissao: 'Empresário',
      rg: '',
      cpf: '',
      endereco: 'Lauro de Freitas - BA',
      telefone: '75 99932-4505',
      email: '',
    },
    modeloContrato: `CONTRATO DE LOCAÇÃO RESIDENCIAL — {{IMOVEL_NOME}}

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
CPF:`,
  }
};

// Remove auditoria e todos os dados binários (base64) antes de gravar no localStorage.
// Fotos, documentos, comprovantes e arquivos ficam APENAS no servidor.
function _dbParaLocal(db) {
  const { auditoria: _aud, ...copia } = db;
  const strip = obj => {
    if (!obj) return obj;
    const r = { ...obj };
    if (Array.isArray(r.documentos))     r.documentos     = r.documentos.map(d => ({ ...d, dados: null }));
    if (Array.isArray(r.fotos))          r.fotos          = r.fotos.map(f => ({ ...f, dados: null }));
    if (Array.isArray(r.checklistFotos)) r.checklistFotos = r.checklistFotos.map(f => ({ ...f, dados: null }));
    if (Array.isArray(r.comprovantes))   r.comprovantes   = r.comprovantes.map(c => ({ ...c, dados: null }));
    if (r.comprovante?.dados)            r.comprovante    = { ...r.comprovante, dados: null };
    if (r.arquivo?.dados)               r.arquivo        = { ...r.arquivo, dados: null };
    return r;
  };
  if (Array.isArray(copia.inquilinos)) copia.inquilinos = copia.inquilinos.map(strip);
  if (Array.isArray(copia.imoveis))   copia.imoveis   = copia.imoveis.map(strip);
  if (Array.isArray(copia.financeiro))copia.financeiro = copia.financeiro.map(strip);
  if (Array.isArray(copia.contratos)) copia.contratos  = copia.contratos.map(strip);
  if (Array.isArray(copia.manutencao))copia.manutencao = copia.manutencao.map(strip);
  return copia;
}

// Versão (rev) do banco no servidor — usada para trava otimista e evitar que uma
// aba defasada sobrescreva dados criados por outra sessão.
let _dbRev = 0;

// Persistência no localStorage (sem binários) + backup completo no servidor
function saveData() {
  const json = JSON.stringify({ ...DB, _rev: _dbRev });
  try {
    localStorage.setItem('imoveis_db', JSON.stringify(_dbParaLocal(DB)));
  } catch (e) {
    // Mesmo sem binários não coube — apaga e deixa o servidor como fonte de verdade
    try { localStorage.removeItem('imoveis_db'); } catch {}
  }
  fetch('/api/db', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json,
  })
    .then(r => (r.ok ? r.json() : null))
    .then(resp => { if (resp && typeof resp._rev === 'number') { _dbRev = resp._rev; _persistRev(_dbRev); } })
    .catch(() => {});
}

// Persiste a versão sincronizada para detectar mudanças entre recarregamentos.
function _persistRev(rev) {
  try { localStorage.setItem('imoveis_db_rev', String(rev)); } catch {}
}
function _lerRevPersistido() {
  const v = parseInt(localStorage.getItem('imoveis_db_rev') || '0', 10);
  return isNaN(v) ? 0 : v;
}

// Re-renderiza a página atualmente ativa (após adotar dados novos do servidor).
function _reRenderAtual() {
  try {
    const ativa = document.querySelector('.page.active');
    if (ativa && ativa.id && ativa.id.indexOf('page-') === 0 && typeof renderPage === 'function') {
      renderPage(ativa.id.slice('page-'.length));
    }
  } catch {}
}

// Sincroniza com o servidor após o paint instantâneo do localStorage.
// - Se o servidor tem uma versão (_rev) diferente da local, ADOTA o estado completo
//   e re-renderiza a tela — assim atualizações de outra sessão/dispositivo aparecem
//   sozinhas, SEM precisar limpar cache/cookies.
// - Se a versão é a mesma, apenas completa os binários (fotos/docs) que faltam no cache.
function _syncFromServer() {
  fetch('/api/db').then(r => r.ok ? r.json() : null).then(srv => {
    if (!srv || srv.error) return;
    const srvRev = (typeof srv._rev === 'number') ? srv._rev : null;

    if (srvRev !== null && srvRev !== _dbRev) {
      // Servidor é a fonte da verdade (protegido por trava _rev) → adota tudo.
      _applyParsedData(srv, true); // grava cache (sem binários) e atualiza _dbRev
      _persistRev(_dbRev);
      _reRenderAtual();
      return;
    }

    // Mesma versão: completa apenas binários ausentes no cache local.
    const merge = (localArr, srvArr) => {
      if (!Array.isArray(localArr) || !Array.isArray(srvArr)) return;
      localArr.forEach(loc => {
        const s = srvArr.find(x => x.id === loc.id);
        if (!s) return;
        if (!loc.documentos?.some(d => d.dados))     loc.documentos     = s.documentos     || loc.documentos;
        if (!loc.fotos?.some(f => f.dados))           loc.fotos          = s.fotos          || loc.fotos;
        if (!loc.checklistFotos?.some(f => f.dados))  loc.checklistFotos = s.checklistFotos || loc.checklistFotos;
        if (!loc.comprovantes?.some(c => c.dados))    loc.comprovantes   = s.comprovantes   || loc.comprovantes;
        if (!loc.comprovante?.dados && s.comprovante?.dados) loc.comprovante = s.comprovante;
        if (!loc.arquivo?.dados && s.arquivo?.dados)        loc.arquivo     = s.arquivo;
      });
    };
    merge(DB.inquilinos, srv.inquilinos);
    merge(DB.imoveis,    srv.imoveis);
    merge(DB.financeiro, srv.financeiro);
    merge(DB.contratos,  srv.contratos);
    merge(DB.manutencao, srv.manutencao);
    if (Array.isArray(srv.auditoria)) DB.auditoria = srv.auditoria;
    if (srvRev !== null) { _dbRev = srvRev; _persistRev(srvRev); }
  }).catch(() => {});
}

// Aplica dados carregados (localStorage ou servidor) ao DB com migrações
function _applyParsedData(parsed, persistLocalStorage) {
  // Captura a versão do servidor (trava otimista) e remove do objeto de dados.
  if (typeof parsed._rev === 'number') _dbRev = parsed._rev;
  delete parsed._rev;
  if (parsed.config) {
    parsed.config = Object.assign({}, DB.config, parsed.config);
    if (!parsed.config.modeloContrato)     parsed.config.modeloContrato     = DB.config.modeloContrato;
    if (!parsed.config.locador)            parsed.config.locador            = DB.config.locador;
    if (!parsed.config.camposExtras)       parsed.config.camposExtras       = DB.config.camposExtras;
    if (!parsed.config.camposExtrasNextId) parsed.config.camposExtrasNextId = 1;
    if (!parsed.config.asaas)             parsed.config.asaas              = DB.config.asaas;
    if (parsed.config.asaas && parsed.config.asaas.nomeBeneficiario === undefined)
      parsed.config.asaas.nomeBeneficiario = '';
    if (!parsed.config.energia) parsed.config.energia = DB.config.energia;
  }
  Object.assign(DB, parsed);
  if (!Array.isArray(DB.manutencaoPreventiva)) DB.manutencaoPreventiva = [];
  if (!Array.isArray(DB.predios))              DB.predios = [];
  if (!Array.isArray(DB.auditoria))            DB.auditoria = [];
  if (Array.isArray(DB.imoveis))
    DB.imoveis.forEach(im  => { if (!Array.isArray(im.checklistFotos))  im.checklistFotos  = []; });
  if (Array.isArray(DB.inquilinos))
    DB.inquilinos.forEach(inq => { if (!Array.isArray(inq.checklistFotos)) inq.checklistFotos = []; });
  if (!Array.isArray(DB.usuarios) || DB.usuarios.length === 0)
    DB.usuarios = [{ id: 1, nome: 'Administrador', usuario: 'admin', senha: 'admin', perfil: 'admin',
      permissoes: ['dashboard','imoveis','inquilinos','contratos','financeiro','manutencao','relatorios','config','usuarios'], ativo: true }];
  const oldAdm = DB.usuarios.find(u => u.usuario === 'adm' && u.senha === 'adm' && u.perfil === 'admin');
  if (oldAdm) { oldAdm.usuario = 'admin'; oldAdm.senha = 'admin'; }

  // Migração: inquilinoId em contratos
  if (Array.isArray(DB.contratos) && Array.isArray(DB.inquilinos)) {
    const norm = s => (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
    DB.contratos.forEach(c => {
      if (!c.inquilinoId && c.inquilino) {
        const match = DB.inquilinos.find(i => norm(i.nome) === norm(c.inquilino));
        if (match) c.inquilinoId = match.id;
      }
    });
  }
  // Migração: totalGeral e baixaManual no financeiro
  if (Array.isArray(DB.financeiro)) {
    DB.financeiro.forEach(f => {
      if (f.totalGeral == null)
        f.totalGeral = (f.valorContrato||0)+(f.consumoAgua||0)+(f.taxaManutencao||0)
                      +(f.taxasExtras||0)+(f.totalEnergia||0)+(f.valorMulta||0)+(f.valorMora||0);
      if (f.baixaManual == null && (f.valorRecebido || 0) > 0) f.baixaManual = true;
    });
  }
  // Multi-empresa: inicialização
  if (!Array.isArray(DB.empresas)) DB.empresas = [];
  if (!Array.isArray(DB.cobrancasEmpresas)) DB.cobrancasEmpresas = [];

  // Migration: criar empresa padrão com dados existentes
  if (DB.empresas.length === 0) {
    DB.empresas.push({
      id: 1,
      nome: DB.config.locador?.nome || 'Empresa Principal',
      cnpj: '',
      email: DB.config.locador?.email || '',
      telefone: DB.config.locador?.telefone || '',
      endereco: DB.config.locador?.endereco || '',
      logo: null,
      ativo: true,
      plano: 'mensal',
      valorPlano: 0,
      vencimentoPlano: '',
      criadoEm: new Date().toISOString().split('T')[0]
    });
  }

  // Migration: adicionar empresaId = 1 em todos os registros existentes
  ['inquilinos','imoveis','contratos','financeiro','manutencao','predios','manutencaoPreventiva','auditoria'].forEach(k => {
    if (Array.isArray(DB[k])) DB[k].forEach(x => { if (!x.empresaId) x.empresaId = 1; });
  });

  // Adicionar usuário também deve ter empresaId (exceto supermaster)
  if (Array.isArray(DB.usuarios)) {
    DB.usuarios.forEach(u => {
      if (u.perfil !== 'supermaster' && !u.empresaId) u.empresaId = 1;
    });
  }

  // Garantir que supermaster existe e está ativo com credenciais válidas
  const smExistente = DB.usuarios.find(u => u.perfil === 'supermaster');
  if (!smExistente) {
    const smId = DB.usuarios.length > 0 ? Math.max(...DB.usuarios.map(x => x.id)) + 1 : 1;
    DB.usuarios.push({
      id: smId, nome: 'Super Master', usuario: 'master', senha: 'Master@2026',
      perfil: 'supermaster', empresaId: null, permissoes: {}, ativo: true,
    });
  } else {
    smExistente.ativo = true;
    if (!smExistente.usuario) smExistente.usuario = 'master';
    if (!smExistente.senha)   smExistente.senha   = 'Master@2026';
  }

  if (persistLocalStorage) {
    try { localStorage.setItem('imoveis_db', JSON.stringify(_dbParaLocal(DB))); } catch(e) {}
  }
}

// Promise resolvida quando os dados estiverem prontos (usada em _initApp)
let _dataReadyResolve;
const _dataReady = new Promise(resolve => { _dataReadyResolve = resolve; });

async function loadData() {
  // 1ª tentativa: localStorage (dados sem binários — carregamento instantâneo)
  const saved = localStorage.getItem('imoveis_db');
  if (saved) {
    try {
      _applyParsedData(JSON.parse(saved), false);
      _dbRev = _lerRevPersistido(); // versão conhecida do cache p/ comparar com o servidor
      _dataReadyResolve();
      // Sincroniza com o servidor: adota dados novos (outra sessão) e/ou hidrata binários
      _syncFromServer();
      return;
    } catch (e) {
      console.warn('[loadData] localStorage corrompido, tentando servidor...', e);
    }
  }

  // 2ª tentativa: servidor (MongoDB / db.json) — dados completos
  try {
    const res = await fetch('/api/db');
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && !serverData.error) {
        _applyParsedData(serverData, true); // salva versão sem binários no localStorage
        _persistRev(_dbRev);
        console.info('[loadData] Dados carregados do servidor.');
      }
    }
  } catch (e) {
    console.error('[loadData] Falha ao carregar dados do servidor:', e);
  }
  _dataReadyResolve();
}

function nextId(arr) {
  // ID globalmente único (timestamp + aleatório) para evitar colisão entre abas/
  // dispositivos editando ao mesmo tempo — causa-raiz da perda de registros, pois
  // o Math.max+1 fazia duas sessões gerarem o MESMO id e um sobrescrevia o outro.
  const list = Array.isArray(arr) ? arr : [];
  const existing = new Set(list.map(x => x.id));
  let id = Date.now() * 1000 + Math.floor(Math.random() * 1000);
  while (existing.has(id)) id++;
  return id;
}

loadData();
