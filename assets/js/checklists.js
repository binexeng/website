// Global state
let currentUser = 'jean';
let currentType = 'diario';

const checklistsData = {
  'jean-diario': [
    { text: 'Dedicar no mínimo 5h/dia aos projetos pesados e complexos (estrutural grande, incêndio, compatibilização).', completed: false, obs: '' },
    { text: 'Avançar 1 etapa crítica por dia (ex.: lançar todas vigas de um pavimento, dimensionar 1 bloco, concluir rede hidráulica completa).', completed: false, obs: '' },
    { text: 'Registrar avanço em planilha (% concluído e dias restantes de cada projeto).', completed: false, obs: '' },
    { text: 'Antecipar possíveis gargalos técnicos e já buscar solução.', completed: false, obs: '' },
    { text: 'Lançar todas as entradas e saídas do dia no caixa.', completed: false, obs: '' },
    { text: 'Registrar se o dia fechou positivo ou negativo e justificar.', completed: false, obs: '' },
    { text: 'Checar se valores a receber estão em dia e sinalizar atrasos.', completed: false, obs: '' },
    { text: 'Atualizar previsão de fluxo de caixa semanal.', completed: false, obs: '' },
    { text: 'Coletar e cadastrar no mínimo 5 novos leads/dia.', completed: false, obs: '' },
    { text: 'Classificar leads em quente, morno, frio.', completed: false, obs: '' },
    { text: 'Separar 3 melhores leads do dia para ação imediata.', completed: false, obs: '' },
    { text: 'Planejar tarefas do Alef (detalhamento, dimensionamento, revisão).', completed: false, obs: '' },
    { text: 'Checar no meio do dia se Alef está no ritmo → realinhar se necessário.', completed: false, obs: '' },
    { text: 'Revisar entregas do Alef e apontar erros em planilha.', completed: false, obs: '' },
    { text: 'Registrar número de erros e tempo gasto (planilha de evolução).', completed: false, obs: '' },
    { text: 'Fazer feedback objetivo: o que foi certo, errado e o que deve corrigir amanhã.', completed: false, obs: '' },
    { text: 'Definir 1 melhoria de processo/dia (ex.: prancha, checklist, nome de arquivos).', completed: false, obs: '' },
    { text: 'Registrar aprendizados técnicos do dia.', completed: false, obs: '' },
    { text: 'Estudar 30 min de norma/software/processo.', completed: false, obs: '' },
  ],
  'alef-diario': [
    { text: 'Dedicar no mínimo 6h/dia em execução de projetos.', completed: false, obs: '' },
    { text: 'Entregar parcial diário do que foi feito (rascunho ou avanço de planta).', completed: false, obs: '' },
    { text: 'Zerar pendências de correções no mesmo dia.', completed: false, obs: '' },
    { text: 'Trabalhar sempre com prazos de 14 dias/projeto como referência.', completed: false, obs: '' },
    { text: 'Registrar avanço em planilha de status (% concluído + dias restantes).', completed: false, obs: '' },
    { text: 'Auxiliar Jean na coleta de 5 leads/dia.', completed: false, obs: '' },
    { text: 'Preencher planilha de leads (nome, tel, responsável, endereço).', completed: false, obs: '' },
    { text: 'Destacar potenciais clientes para Luis atacar na semana.', completed: false, obs: '' },
    { text: 'Nomear e salvar arquivos conforme padrão (CLIENTE_TIPO_DATA).', completed: false, obs: '' },
    { text: 'Atualizar pastas do projeto e checklist técnico.', completed: false, obs: '' },
    { text: 'Registrar em planilha: disciplina, status, prazo, revisor.', completed: false, obs: '' },
    { text: 'Estudar 30 min/dia da disciplina que está trabalhando.', completed: false, obs: '' },
    { text: 'Registrar dúvidas para tirar com Jean no feedback.', completed: false, obs: '' },
    { text: 'Anotar pontos aprendidos em caderno de processos.', completed: false, obs: '' },
    { text: 'Resumir o que foi feito e enviar resumo diário para Jean.', completed: false, obs: '' },
  ],
  'jean-semanal': [
    { text: 'Entregar no mínimo 25 leads novos organizados.', completed: false, obs: '' },
    { text: 'Garantir ≥95% dos leads com dados completos.', completed: false, obs: '' },
    { text: 'Classificar leads em quente, morno, frio.', completed: false, obs: '' },
    { text: 'Preparar relatório da semana: novos x acumulados, % de leads completos.', completed: false, obs: '' },
    { text: 'Destacar os 10 melhores leads da semana com justificativa.', completed: false, obs: '' },
    { text: 'Preparar 3 mini-briefings dos leads mais quentes.', completed: false, obs: '' },
    { text: 'Relatório de projetos entregues na semana (quantos e quais).', completed: false, obs: '' },
    { text: 'Atualizar status de todos os projetos em andamento.', completed: false, obs: '' },
    { text: 'Levantar taxa de erros do Alef e apresentar evolução.', completed: false, obs: '' },
    { text: 'Meta: ≥95% dos projetos entregues em até 14 dias.', completed: false, obs: '' },
    { text: 'Meta: Alef ≤10% de erros.', completed: false, obs: '' },
    { text: 'Definir 3 prioridades de projeto para próxima semana.', completed: false, obs: '' },
    { text: 'Consolidar entradas e saídas da semana.', completed: false, obs: '' },
    { text: 'Apresentar saldo de caixa atualizado.', completed: false, obs: '' },
    { text: 'Comparar caixa real com meta de faturamento semanal.', completed: false, obs: '' },
    { text: 'Identificar valores pendentes e lista de cobrança.', completed: false, obs: '' },
    { text: 'Classificar semana em semáforo financeiro (verde, amarelo, vermelho).', completed: false, obs: '' },
    { text: 'Preparar material para Luis: planilha de leads limpa, propostas revisadas.', completed: false, obs: '' },
    { text: 'Anotar observações de clientes relevantes.', completed: false, obs: '' },
    { text: 'Sugerir 3 ações comerciais da semana seguinte.', completed: false, obs: '' },
    { text: 'Apresentar relatórios completos em reunião com Luis.', completed: false, obs: '' },
    { text: 'Definir top 3 prioridades e alvo comercial da semana.', completed: false, obs: '' },
    { text: 'Registrar decisões em ata curta.', completed: false, obs: '' },
  ],
  'alef-semanal': [
    { text: 'Entregar no mínimo 2 projetos completos.', completed: false, obs: '' },
    { text: 'Registrar tempo planejado x tempo real.', completed: false, obs: '' },
    { text: 'Avaliar ganho de velocidade em relação à semana anterior.', completed: false, obs: '' },
    { text: 'Apresentar plano da próxima semana (projetos e prazos).', completed: false, obs: '' },
    { text: 'Revisar erros apontados por Jean.', completed: false, obs: '' },
    { text: 'Atualizar planilha de controle de erros (%).', completed: false, obs: '' },
    { text: 'Garantir que erros corrigidos não se repitam.', completed: false, obs: '' },
    { text: 'Criar/atualizar pelo menos 1 checklist técnico por semana.', completed: false, obs: '' },
    { text: 'Testar checklist em projeto real.', completed: false, obs: '' },
    { text: 'Registrar feedback de uso do checklist.', completed: false, obs: '' },
    { text: 'Revisar 25 leads/semana junto com Jean.', completed: false, obs: '' },
    { text: 'Completar dados faltantes dos leads.', completed: false, obs: '' },
    { text: 'Destacar 5 melhores leads para Luis.', completed: false, obs: '' },
    { text: 'Registrar quadro de evolução: projetos entregues, erros corrigidos, checklist criado, leads revisados.', completed: false, obs: '' },
    { text: 'Levar quadro para revisão com Jean.', completed: false, obs: '' },
    { text: 'Definir ponto específico a melhorar para próxima semana.', completed: false, obs: '' },
  ],
  'jean-mensal': [
    { text: 'Revisar fluxo de caixa completo do mês.', completed: false, obs: '' },
    { text: 'Calcular saldo final do mês.', completed: false, obs: '' },
    { text: 'Comparar meta x realizado (entradas, saídas, lucro).', completed: false, obs: '' },
    { text: 'Apresentar variação em % sobre mês anterior.', completed: false, obs: '' },
    { text: 'Ajustar precificação padrão se necessário.', completed: false, obs: '' },
    { text: 'Preparar relatório financeiro mensal.', completed: false, obs: '' },
    { text: 'Preparar projeção de caixa para próximo mês.', completed: false, obs: '' },
    { text: 'Consolidar leads do mês.', completed: false, obs: '' },
    { text: 'Relatório de leads quentes, mornos e frios.', completed: false, obs: '' },
    { text: 'Calcular taxa de conversão do mês.', completed: false, obs: '' },
    { text: 'Destacar segmentos mais promissores.', completed: false, obs: '' },
    { text: 'Relatório de projetos entregues no mês.', completed: false, obs: '' },
    { text: 'Comparar prazo planejado x real.', completed: false, obs: '' },
    { text: 'Calcular SLA mensal (% dentro de 14 dias).', completed: false, obs: '' },
    { text: 'Medir evolução de Alef (erros em %).', completed: false, obs: '' },
    { text: 'Identificar top 3 gargalos técnicos e soluções.', completed: false, obs: '' },
    { text: 'Revisar checklists técnicos e administrativos criados.', completed: false, obs: '' },
    { text: 'Atualizar/ajustar se necessário.', completed: false, obs: '' },
    { text: 'Consolidar manual interno atualizado.', completed: false, obs: '' },
    { text: 'Definir 1 melhoria estrutural de processo por mês.', completed: false, obs: '' },
  ],
  'alef-mensal': [
    { text: 'Outubro: entregar 3 projetos completos (1 estrutural, 1 hidro, 1 elétrico).', completed: false, obs: '' },
    { text: 'Criar 3 checklists técnicos.', completed: false, obs: '' },
    { text: 'Erros ≤25%.', completed: false, obs: '' },
    { text: 'Registrar tempo médio por projeto.', completed: false, obs: '' },
    { text: 'Produzir resumo de aprendizados do mês.', completed: false, obs: '' },
    { text: 'Novembro: entregar 4 projetos (incluindo incêndio).', completed: false, obs: '' },
    { text: 'Criar 2 checklists técnicos.', completed: false, obs: '' },
    { text: 'Erros ≤20%.', completed: false, obs: '' },
    { text: 'Reduzir tempo médio em 10%.', completed: false, obs: '' },
    { text: 'Apoiar Jean em 1 compatibilização parcial.', completed: false, obs: '' },
    { text: 'Dezembro: entregar 5 projetos (1 compatibilizado).', completed: false, obs: '' },
    { text: 'Criar checklist de compatibilização.', completed: false, obs: '' },
    { text: 'Erros ≤10%.', completed: false, obs: '' },
    { text: 'Reduzir tempo médio em 10%.', completed: false, obs: '' },
    { text: 'Apresentar manual interno resumido (compilando checklists criados).', completed: false, obs: '' },
  ],
  'jean-estrategico': [
    { text: 'Estudar pelo menos 1 nova norma/técnica por mês.', completed: false, obs: '' },
    { text: 'Testar 1 nova ferramenta ou processo por mês.', completed: false, obs: '' },
    { text: 'Preparar resumo prático e compartilhar com Alef.', completed: false, obs: '' },
    { text: 'Registrar gargalos da operação e propor soluções.', completed: false, obs: '' },
    { text: 'Participar de 1 capacitação externa/curso/treinamento por trimestre.', completed: false, obs: '' },
    { text: 'Dar feedback semanal ao Alef (30 min).', completed: false, obs: '' },
    { text: 'Medir evolução do Alef (tempo médio, taxa de erros, entregas).', completed: false, obs: '' },
    { text: 'Criar base de treinamentos internos.', completed: false, obs: '' },
    { text: 'Treinar Alef para revisar futuros funcionários (meta até jun/2026).', completed: false, obs: '' },
    { text: 'Definir e monitorar metas individuais de cada funcionário.', completed: false, obs: '' },
    { text: 'Registrar em diário semanal papel de gestor vs. projetista.', completed: false, obs: '' },
    { text: 'Trabalhar para dedicar ≥60% do tempo em gestão até 2026.', completed: false, obs: '' },
    { text: 'Reforçar disciplina de empresário.', completed: false, obs: '' },
    { text: 'Participar de decisões estratégicas (sala, contratações, metas financeiras).', completed: false, obs: '' },
    { text: 'Definir metas pessoais e empresariais anuais com Luis.', completed: false, obs: '' },
    { text: 'Apresentar 1 sugestão estratégica por mês.', completed: false, obs: '' },
  ],
  'alef-estrategico': [], // Alef não tem checklist estratégico
  'luis-diario': [
    { text: 'Contatar no mínimo 8 novos leads/dia (telefone, WhatsApp, visita) 9:30h às 10:45h.', completed: false, obs: '' },
    { text: 'Realizar pelo menos 1 reunião/dia (presencial ou online).', completed: false, obs: '' },
    { text: 'Fazer 3 follow-ups/dia em contatos antigos.', completed: false, obs: '' },
    { text: 'Separar 1 lead quente/dia para fechamento rápido.', completed: false, obs: '' },
    { text: 'Solicitar ao Jean/Alef dados técnicos de 1 projeto/dia.', completed: false, obs: '' },
    { text: 'Preparar/enviar no mínimo 1 orçamento/dia (mesmo simples).', completed: false, obs: '' },
    { text: 'Atualizar planilha de orçamentos (cliente, valor, status).', completed: false, obs: '' },
    { text: 'Revisar orçamentos enviados há 7 dias e cobrar retorno.', completed: false, obs: '' },
    { text: 'Gerar 1 conteúdo bruto/dia (foto, vídeo, bastidor).', completed: false, obs: '' },
    { text: 'Enviar para Eliezer editar/postar.', completed: false, obs: '' },
    { text: 'Publicar 1 story espontâneo/dia (mostrando rotina).', completed: false, obs: '' },
    { text: 'Acompanhar resultados de postagens.', completed: false, obs: '' },
    { text: 'Conferir leads novos enviados pelo Jean (mín. 5/dia).', completed: false, obs: '' },
    { text: 'Selecionar 2 leads para atacar imediatamente.', completed: false, obs: '' },
    { text: 'Validar meta de faturamento diário.', completed: false, obs: '' },
    { text: '1 follow-up em 5 min: meta de amanhã.', completed: false, obs: '' },
    { text: 'Estudar 20 min/dia sobre vendas B2B.', completed: false, obs: '' },
    { text: 'Mapear 1 contato estratégico/dia.', completed: false, obs: '' },
    { text: 'Revisar checklist antes de encerrar o dia.', completed: false, obs: '' }
  ],
  'luis-semanal': [
    { text: '25 a 40 contatos novos.', completed: false, obs: '' },
    { text: '5 a 7 reuniões confirmadas (mín. 2 presenciais).', completed: false, obs: '' },
    { text: '7 a 10 follow-ups.', completed: false, obs: '' },
    { text: '7 a 10 orçamentos enviados.', completed: false, obs: '' },
    { text: '1 lead fechado/semana.', completed: false, obs: '' },
    { text: 'Publicar 2 posts + 1 story/semana.', completed: false, obs: '' },
    { text: 'Revisar calendário com Eliezer.', completed: false, obs: '' },
    { text: '1 story/dia de rotina.', completed: false, obs: '' },
    { text: 'Separar próximos cases.', completed: false, obs: '' },
    { text: 'Conferir taxa de conversão.', completed: false, obs: '' },
    { text: 'Comparar resultados com meta mensal.', completed: false, obs: '' },
    { text: 'Listar gargalos.', completed: false, obs: '' },
    { text: 'Definir 3 ajustes imediatos.', completed: false, obs: '' },
    { text: 'Mapear 5 contatos estratégicos.', completed: false, obs: '' },
    { text: 'Registrar 1 insight de mercado.', completed: false, obs: '' },
    { text: 'Definir alvo comercial da próxima semana.', completed: false, obs: '' }
  ],
  'luis-mensal': [
    { text: 'Leads: novos, quentes/mornos/frios, 3 quentes para próxima semana.', completed: false, obs: '' },
    { text: 'Projetos: entregues, prazo planejado x real, erros.', completed: false, obs: '' },
    { text: 'Financeiro: entradas, saídas, saldo atual.', completed: false, obs: '' },
    { text: 'Orçamentos: enviados, em negociação, fechados.', completed: false, obs: '' },
    { text: 'Marketing: posts feitos, próximos cases.', completed: false, obs: '' },
    { text: 'Pendências e gargalos: onde travou, plano de ação imediato.', completed: false, obs: '' }
  ],
  'luis-estrategico': [
    { text: 'Atualizar planilha de fornecedores fotovoltaicos.', completed: false, obs: '' },
    { text: 'Solicitar cotações semanais (placas, inversores, estruturas, cabos).', completed: false, obs: '' },
    { text: 'Registrar prazos médios de entrega e condições comerciais.', completed: false, obs: '' },
    { text: 'Preencher dados da fatura do cliente na planilha solar.', completed: false, obs: '' },
    { text: 'Gerar simulação com gráficos (consumo x geração, payback).', completed: false, obs: '' },
    { text: 'Exportar proposta PDF com layout Binex.', completed: false, obs: '' },
    { text: 'Registrar na planilha de orçamentos.', completed: false, obs: '' },
    { text: 'Follow-up de propostas abertas em até 7 dias.', completed: false, obs: '' },
    { text: 'Conferir compatibilidade do telhado (estrutura, sombreamento).', completed: false, obs: '' },
    { text: 'Validar projeto elétrico (SPDA, quadro de distribuição).', completed: false, obs: '' },
    { text: 'Emitir ART de execução.', completed: false, obs: '' },
    { text: 'Checklist de materiais antes da instalação.', completed: false, obs: '' },
    { text: 'Treinar cliente no app de monitoramento.', completed: false, obs: '' },
    { text: 'Follow-up 30 dias após instalação.', completed: false, obs: '' },
    { text: 'Registrar economia real vs prevista.', completed: false, obs: '' }
  ]
};

// Utility functions
function getCurrentChecklistKey() {
  return `${currentUser}-${currentType}`;
}

// CORRIGIDO: Salva e carrega todos os tipos, inclusive projetos
function saveToLocalStorage() {
  const key = getCurrentChecklistKey();
  localStorage.setItem(`checklist-${key}`, JSON.stringify(checklistsData[key]));
}

function loadFromLocalStorage() {
  // Lista todos os tipos possíveis, incluindo projetos
  const users = ['jean', 'alef', 'luis'];
  const types = [
    'diario', 'semanal', 'mensal', 'estrategico',
    'proj-eletrico', 'proj-hidrosanitario', 'proj-estrutural'
  ];
  users.forEach(user => {
    types.forEach(type => {
      const key = `${user}-${type}`;
      const savedData = localStorage.getItem(`checklist-${key}`);
      if (savedData) {
        checklistsData[key] = JSON.parse(savedData);
      }
    });
  });
}

// User selection
function selectUser(user) {
  currentUser = user;
  
  // Update UI
  document.querySelectorAll('.user-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.${user}-btn`).classList.add('active');
  
  // Hide strategic option for Alef
  const strategicBtn = document.querySelector('[data-type="estrategico"]');
  if (user === 'alef') {
    strategicBtn.style.display = 'none';
    if (currentType === 'estrategico') {
      selectChecklistType('diario');
    }
  } else {
    strategicBtn.style.display = 'flex';
  }
  
  updateChecklist();
}

// Checklist type selection
function selectChecklistType(type) {
  // Don't allow strategic for Alef
  if (currentUser === 'alef' && type === 'estrategico') {
    return;
  }
  
  currentType = type;
  
  // Update UI
  document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-type="${type}"]`).classList.add('active');
  
  updateChecklist();
}

// Update checklist display
function updateChecklist() {
  const key = getCurrentChecklistKey();
  const checklist = checklistsData[key] || [];
  
  // Adicione os títulos dos projetos para exibição correta
  const titles = {
    'jean-diario': 'Jean - Diário',
    'jean-semanal': 'Jean - Semanal', 
    'jean-mensal': 'Jean - Mensal',
    'jean-estrategico': 'Jean - Estratégico',
    'jean-proj-eletrico': 'Jean - Projeto Elétrico',
    'jean-proj-hidrosanitario': 'Jean - Projeto Hidrossanitário',
    'jean-proj-estrutural': 'Jean - Projeto Estrutural',
    'alef-diario': 'Alef - Diário',
    'alef-semanal': 'Alef - Semanal',
    'alef-mensal': 'Alef - Mensal',
    'alef-proj-eletrico': 'Alef - Projeto Elétrico',
    'alef-proj-hidrosanitario': 'Alef - Projeto Hidrossanitário',
    'alef-proj-estrutural': 'Alef - Projeto Estrutural',
    'luis-diario': 'Luis - Diário',
    'luis-semanal': 'Luis - Semanal',
    'luis-mensal': 'Luis - Mensal',
    'luis-estrategico': 'Luis - Estratégico',
    'luis-proj-eletrico': 'Luis - Projeto Elétrico',
    'luis-proj-hidrosanitario': 'Luis - Projeto Hidrossanitário',
    'luis-proj-estrutural': 'Luis - Projeto Estrutural'
  };
  
  document.getElementById('current-checklist-title').textContent = titles[key] || 'Checklist';
  
  // Render checklist items
  renderChecklistItems(checklist);
  
  // Update progress
  updateProgress();
}

// Render checklist items
function renderChecklistItems(checklist) {
  const container = document.getElementById('dynamic-checklist');
  container.innerHTML = '';
  
  if (!checklist || checklist.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Nenhum item encontrado para este checklist.</p>';
    return;
  }
  
  checklist.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `checklist-item ${item.completed ? 'completed' : ''}`;
    
    itemDiv.innerHTML = `
      <input type="checkbox" 
             id="item-${index}" 
             ${item.completed ? 'checked' : ''} 
             onchange="toggleItem(${index})">
      <div class="checklist-item-content">
        <label for="item-${index}">${item.text}</label>
        <textarea placeholder="Observações..." 
                  onchange="updateObservation(${index}, this.value)">${item.obs}</textarea>
      </div>
      <div class="item-actions">
        <button class="item-action-btn edit" onclick="editItem(${index})" title="Editar">✏️</button>
        <button class="item-action-btn delete" onclick="deleteItem(${index})" title="Excluir">🗑️</button>
      </div>
    `;
    
    container.appendChild(itemDiv);
  });
}

// Toggle item completion
function toggleItem(index) {
  const key = getCurrentChecklistKey();
  checklistsData[key][index].completed = !checklistsData[key][index].completed;
  
  saveToLocalStorage();
  updateChecklist();
  
  // Add animation effect
  const item = document.getElementById(`item-${index}`).closest('.checklist-item');
  item.style.transform = 'scale(1.02)';
  setTimeout(() => {
    item.style.transform = '';
  }, 200);
}

// Update observation
function updateObservation(index, value) {
  const key = getCurrentChecklistKey();
  checklistsData[key][index].obs = value;
  saveToLocalStorage();
}

// Edit item
function editItem(index) {
  const key = getCurrentChecklistKey();
  const newText = prompt('Editar tarefa:', checklistsData[key][index].text);
  
  if (newText !== null && newText.trim()) {
    checklistsData[key][index].text = newText.trim();
    saveToLocalStorage();
    updateChecklist();
  }
}

// Delete item
function deleteItem(index) {
  if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
    const key = getCurrentChecklistKey();
    checklistsData[key].splice(index, 1);
    saveToLocalStorage();
    updateChecklist();
  }
}

// Add new item
function addChecklistItem() {
  const newText = prompt('Digite a nova tarefa:');
  
  if (newText && newText.trim()) {
    const key = getCurrentChecklistKey();
    if (!checklistsData[key]) {
      checklistsData[key] = [];
    }
    
    checklistsData[key].push({
      text: newText.trim(),
      completed: false,
      obs: ''
    });
    
    saveToLocalStorage();
    updateChecklist();
  }
}

// Mark all tasks
function markAllTasks() {
  const key = getCurrentChecklistKey();
  const checklist = checklistsData[key];
  
  if (checklist) {
    checklist.forEach(item => item.completed = true);
    saveToLocalStorage();
    updateChecklist();
  }
}

// Clear all tasks
function clearAllTasks() {
  if (confirm('Tem certeza que deseja desmarcar todas as tarefas?')) {
    const key = getCurrentChecklistKey();
    const checklist = checklistsData[key];
    
    if (checklist) {
      checklist.forEach(item => item.completed = false);
      saveToLocalStorage();
      updateChecklist();
    }
  }
}

// Export to PDF
function exportToPdf() {
  const key = getCurrentChecklistKey();
  const checklist = checklistsData[key];
  
  if (!checklist || checklist.length === 0) {
    alert('Nenhum item para exportar!');
    return;
  }
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const titles = {
    'jean-diario': 'Jean - Checklist Diário',
    'jean-semanal': 'Jean - Checklist Semanal', 
    'jean-mensal': 'Jean - Checklist Mensal',
    'jean-estrategico': 'Jean - Checklist Estratégico',
    'alef-diario': 'Alef - Checklist Diário',
    'alef-semanal': 'Alef - Checklist Semanal',
    'alef-mensal': 'Alef - Checklist Mensal'
  };
  
  const title = titles[key] || 'Checklist';
  
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  
  doc.setFontSize(12);
  let y = 35;
  
  checklist.forEach((item, index) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    
    const status = item.completed ? '[✓]' : '[ ]';
    const text = `${status} ${item.text}`;
    
    // Split long text into multiple lines
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 14, y);
    y += lines.length * 7;
    
    if (item.obs && item.obs.trim()) {
      y += 3;
      doc.setFontSize(10);
      doc.setTextColor(100);
      const obsLines = doc.splitTextToSize(`Obs: ${item.obs}`, 170);
      doc.text(obsLines, 20, y);
      y += obsLines.length * 5;
      doc.setFontSize(12);
      doc.setTextColor(0);
    }
    
    y += 5;
  });
  
  const filename = `${title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
}

// Update progress displays
function updateProgress() {
  const key = getCurrentChecklistKey();
  const checklist = checklistsData[key] || [];
  
  const total = checklist.length;
  const completed = checklist.filter(item => item.completed).length;
  const remaining = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  // Update progress circle
  const progressRing = document.querySelector('.progress-ring-progress');
  const circumference = 2 * Math.PI * 52; // radius = 52
  const offset = circumference - (percentage / 100) * circumference;
  
  progressRing.style.strokeDashoffset = offset;
  progressRing.style.stroke = percentage >= 80 ? '#4CAF50' : percentage >= 50 ? '#FF9800' : '#F44336';
  
  // Update progress text
  document.querySelector('.progress-percentage').textContent = `${percentage}%`;
  
  // Update stats
  document.getElementById('completed-tasks').textContent = completed;
  document.getElementById('total-tasks').textContent = total;
  document.getElementById('remaining-tasks').textContent = remaining;
  
  // Update checklist progress bar
  const progressFill = document.getElementById('checklist-progress-fill');
  const progressText = document.getElementById('checklist-progress-text');
  
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}% Concluído`;
  
  // Change color based on progress
  if (percentage >= 80) {
    progressFill.style.background = 'linear-gradient(90deg, #4CAF50, #66bb6a)';
    progressText.style.color = '#4CAF50';
  } else if (percentage >= 50) {
    progressFill.style.background = 'linear-gradient(90deg, #FF9800, #ffb74d)';
    progressText.style.color = '#FF9800';
  } else {
    progressFill.style.background = 'linear-gradient(90deg, #F44336, #ef5350)';
    progressText.style.color = '#F44336';
  }
}

// Calculate overall progress for all checklists of current user
function calculateOverallProgress() {
  const userTypes = currentUser === 'jean' 
    ? ['diario', 'semanal', 'mensal', 'estrategico']
    : ['diario', 'semanal', 'mensal'];
  
  let totalTasks = 0;
  let completedTasks = 0;
  
  userTypes.forEach(type => {
    const key = `${currentUser}-${type}`;
    const checklist = checklistsData[key] || [];
    totalTasks += checklist.length;
    completedTasks += checklist.filter(item => item.completed).length;
  });
  
  return {
    total: totalTasks,
    completed: completedTasks,
    percentage: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  };
}

// Initialize the application
function initializeApp() {
  loadFromLocalStorage();
  
  // Set initial user selection
  selectUser('jean');
  
  // Set initial type selection  
  selectChecklistType('diario');
  
  // Initial render
  updateChecklist();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
