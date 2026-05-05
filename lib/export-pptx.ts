import PptxGenJS from "pptxgenjs"

// Mercado Libre brand colors
const COLORS = {
  dark: "1A1A2E",
  yellow: "FFE600",
  blue: "3483FA",
  green: "00A650",
  orange: "FF9800",
  pink: "E91E63",
  red: "F44336",
  white: "FFFFFF",
  gray: "666666",
  lightGray: "F5F5F5"
}

export async function exportToPptx() {
  const pptx = new PptxGenJS()

  // Set presentation properties
  pptx.author = "Control Tower Monitoring LM"
  pptx.title = "Control Tower Monitoring LM - Proposta de Estrutura"
  pptx.subject = "Área Tática & Estratégica"
  pptx.company = "Mercado Libre"

  // =====================
  // SLIDE 1: CAPA
  // =====================
  const slide1 = pptx.addSlide()
  slide1.background = { color: COLORS.dark }
  
  // Yellow top line
  slide1.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.08, fill: { color: COLORS.yellow } })
  
  // Badge
  slide1.addText("Mercado Libre | Envíos", {
    x: 0.5, y: 0.8, w: 2, h: 0.35,
    fill: { color: COLORS.yellow },
    color: COLORS.dark,
    fontSize: 10,
    bold: true,
    align: "center"
  })
  
  // Title
  slide1.addText("Control Tower Monitoring LM", {
    x: 0.5, y: 1.8, w: 9, h: 0.8,
    fontSize: 40,
    bold: true,
    color: COLORS.white
  })
  
  // Subtitle
  slide1.addText("Área Tática & Estratégica", {
    x: 0.5, y: 2.6, w: 9, h: 0.6,
    fontSize: 32,
    bold: true,
    color: COLORS.yellow
  })
  
  // Description
  slide1.addText("Da operação reativa à inteligência proativa: uma nova forma de monitorar a última milha", {
    x: 0.5, y: 3.4, w: 8, h: 0.5,
    fontSize: 16,
    color: "AAAAAA"
  })
  
  // Footer info
  slide1.addText("Maio 2026 | Mercado Libre | Envíos", {
    x: 0.5, y: 4.8, w: 4, h: 0.3,
    fontSize: 12,
    color: COLORS.gray
  })

  // =====================
  // SLIDE 2: RESUMO JORNADA (Storytelling)
  // =====================
  const slide2 = pptx.addSlide()
  slide2.background = { color: COLORS.white }
  
  // Yellow top line
  slide2.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.yellow } })
  
  // Header
  slide2.addText("A Jornada de Transformação", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 24,
    bold: true,
    color: COLORS.dark
  })
  
  // 5 columns: Contexto → Metas → Sucesso POC → Decisões → Ferramentas
  const columnWidth = 1.7
  const columnGap = 0.15
  const startX = 0.3
  const columnY = 0.9
  const columnHeight = 4.2
  
  const columns = [
    { 
      num: "1", 
      title: "CONTEXTO", 
      color: COLORS.blue, 
      bg: "E3F2FD",
      items: [
        "POC validou delegação aos MLPs",
        "Time atual 80% reativo",
        "Sem governança centralizada"
      ]
    },
    { 
      num: "2", 
      title: "METAS", 
      color: COLORS.orange, 
      bg: "FFF3E0",
      items: [
        "DS ≥ 97%",
        "Custo -5% por entrega",
        "Scorecard para 100% MLPs"
      ]
    },
    { 
      num: "3", 
      title: "SUCESSO POC", 
      color: COLORS.green, 
      bg: "E8F5E9",
      items: [
        "Grupo A (BAU): 97.2%",
        "Grupo B (MLP): 97.4%",
        "Grupo C (MLP+): 97.5%",
        "Melhor cenário: C"
      ]
    },
    { 
      num: "4", 
      title: "DECISÕES", 
      color: COLORS.pink, 
      bg: "FCE4EC",
      items: [
        "Delegar: Monitoramento operacional",
        "Reter: Governança e inteligência",
        "Transformar: Dashboards e Scorecard"
      ]
    },
    { 
      num: "5", 
      title: "FERRAMENTAS", 
      color: COLORS.dark, 
      bg: COLORS.lightGray,
      items: [
        "Dashboard de Inteligência LM",
        "Scorecard MLP",
        "Interface Roteirização"
      ]
    }
  ]
  
  columns.forEach((col, i) => {
    const x = startX + i * (columnWidth + columnGap)
    
    // Background
    slide2.addShape("rect", {
      x, y: columnY, w: columnWidth, h: columnHeight,
      fill: { color: col.bg },
      line: { color: col.color, width: 1, dashType: "solid" }
    })
    
    // Top border highlight
    slide2.addShape("rect", {
      x, y: columnY, w: columnWidth, h: 0.08,
      fill: { color: col.color }
    })
    
    // Number badge
    slide2.addText(col.num, {
      x: x + 0.05, y: columnY + 0.15, w: 0.3, h: 0.3,
      fill: { color: col.color },
      color: COLORS.white,
      fontSize: 12,
      bold: true,
      align: "center",
      valign: "middle"
    })
    
    // Title
    slide2.addText(col.title, {
      x: x + 0.4, y: columnY + 0.15, w: columnWidth - 0.5, h: 0.3,
      fontSize: 9,
      bold: true,
      color: COLORS.dark
    })
    
    // Items
    col.items.forEach((item, j) => {
      slide2.addText(`• ${item}`, {
        x: x + 0.1, y: columnY + 0.6 + j * 0.5, w: columnWidth - 0.2, h: 0.45,
        fontSize: 8,
        color: COLORS.dark
      })
    })
    
    // Arrow (except last)
    if (i < columns.length - 1) {
      slide2.addText("→", {
        x: x + columnWidth, y: columnY + columnHeight / 2 - 0.2, w: columnGap, h: 0.4,
        fontSize: 16,
        bold: true,
        color: COLORS.gray,
        align: "center",
        valign: "middle"
      })
    }
  })
  
  // Footer
  slide2.addShape("rect", { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: COLORS.dark } })
  slide2.addText("1", {
    x: 9.2, y: 5.2, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.white
  })

  // =====================
  // SLIDE 3: PIRÂMIDE (Antes vs Depois)
  // =====================
  const slide3 = pptx.addSlide()
  slide3.background = { color: COLORS.white }
  
  // Yellow top line
  slide3.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.yellow } })
  
  // Header
  slide3.addText("Inversão da Pirâmide Operacional", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 24,
    bold: true,
    color: COLORS.dark
  })
  
  // Left side: ANTES (pyramid with Operations at base)
  slide3.addText("ANTES", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 16,
    bold: true,
    color: COLORS.red,
    align: "center"
  })
  
  // Pyramid ANTES - Inverted (Operational at base = bad)
  // Top: Estratégico (small)
  slide3.addShape("rect", {
    x: 1.5, y: 1.5, w: 1.8, h: 0.6,
    fill: { color: "E8F5E9" },
    line: { color: COLORS.green, width: 1 }
  })
  slide3.addText("Estratégico\n5%", {
    x: 1.5, y: 1.55, w: 1.8, h: 0.5,
    fontSize: 9,
    align: "center",
    valign: "middle",
    color: COLORS.dark
  })
  
  // Middle: Tático (medium)
  slide3.addShape("rect", {
    x: 1.0, y: 2.2, w: 2.8, h: 0.8,
    fill: { color: "FFF3E0" },
    line: { color: COLORS.orange, width: 1 }
  })
  slide3.addText("Tático\n15%", {
    x: 1.0, y: 2.3, w: 2.8, h: 0.6,
    fontSize: 10,
    align: "center",
    valign: "middle",
    color: COLORS.dark
  })
  
  // Bottom: Operacional (large - problem!)
  slide3.addShape("rect", {
    x: 0.5, y: 3.1, w: 3.8, h: 1.4,
    fill: { color: "FFEBEE" },
    line: { color: COLORS.red, width: 2 }
  })
  slide3.addText("Operacional\n80%", {
    x: 0.5, y: 3.2, w: 3.8, h: 1.2,
    fontSize: 14,
    bold: true,
    align: "center",
    valign: "middle",
    color: COLORS.red
  })
  
  slide3.addText("INSUSTENTÁVEL", {
    x: 0.5, y: 4.6, w: 3.8, h: 0.3,
    fontSize: 10,
    bold: true,
    align: "center",
    color: COLORS.red
  })
  
  // Arrow in the middle
  slide3.addText("→", {
    x: 4.5, y: 2.8, w: 1, h: 0.6,
    fontSize: 40,
    bold: true,
    color: COLORS.blue,
    align: "center",
    valign: "middle"
  })
  
  // Right side: DEPOIS (pyramid with Tactics at base)
  slide3.addText("DEPOIS", {
    x: 5.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 16,
    bold: true,
    color: COLORS.green,
    align: "center"
  })
  
  // Pyramid DEPOIS - Correct (Tático at base = good)
  // Top: Operacional (small - delegated)
  slide3.addShape("rect", {
    x: 6.5, y: 1.5, w: 1.8, h: 0.6,
    fill: { color: COLORS.lightGray },
    line: { color: COLORS.gray, width: 1 }
  })
  slide3.addText("Operacional\n10% (MLP)", {
    x: 6.5, y: 1.55, w: 1.8, h: 0.5,
    fontSize: 8,
    align: "center",
    valign: "middle",
    color: COLORS.gray
  })
  
  // Middle: Estratégico (medium)
  slide3.addShape("rect", {
    x: 6.0, y: 2.2, w: 2.8, h: 0.8,
    fill: { color: "E8F5E9" },
    line: { color: COLORS.green, width: 1 }
  })
  slide3.addText("Estratégico\n20%", {
    x: 6.0, y: 2.3, w: 2.8, h: 0.6,
    fontSize: 10,
    align: "center",
    valign: "middle",
    color: COLORS.dark
  })
  
  // Bottom: Tático (large - now the focus!)
  slide3.addShape("rect", {
    x: 5.5, y: 3.1, w: 3.8, h: 1.4,
    fill: { color: "E3F2FD" },
    line: { color: COLORS.blue, width: 2 }
  })
  slide3.addText("Tático\n70%", {
    x: 5.5, y: 3.2, w: 3.8, h: 1.2,
    fontSize: 14,
    bold: true,
    align: "center",
    valign: "middle",
    color: COLORS.blue
  })
  
  slide3.addText("ESCALÁVEL", {
    x: 5.5, y: 4.6, w: 3.8, h: 0.3,
    fontSize: 10,
    bold: true,
    align: "center",
    color: COLORS.green
  })
  
  // Footer
  slide3.addShape("rect", { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: COLORS.dark } })
  slide3.addText("2", {
    x: 9.2, y: 5.2, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.white
  })

  // =====================
  // SLIDE 4: VALIDAÇÃO POC
  // =====================
  const slide4 = pptx.addSlide()
  slide4.background = { color: COLORS.white }
  
  // Header
  slide4.addText("Os primeiros 8 dias do POC já nos dão um sinal claro", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 12,
    color: COLORS.blue,
    bold: true
  })
  
  slide4.addText("Validação POC", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28,
    bold: true,
    color: COLORS.dark
  })
  
  // Data cards
  const dataContent = [
    { group: "Grupo A (BAU)", value: "97.2%", description: "MELI monitora" },
    { group: "Grupo B (MLP)", value: "97.4%", description: "+0.20pp vs A" },
    { group: "Grupo C (MLP+)", value: "97.5%", description: "+0.30pp vs A" }
  ]
  const cardWidth = 2.8
  const cardStartX = 0.7
  
  dataContent.forEach((item, i) => {
    const x = cardStartX + i * (cardWidth + 0.3)
    const bgColor = i === 0 ? COLORS.lightGray : i === 1 ? "FFF8E1" : "E8F5E9"
    const borderColor = i === 0 ? "DDDDDD" : i === 1 ? COLORS.yellow : COLORS.green
    
    // Card background
    slide4.addShape("rect", {
      x, y: 1.5, w: cardWidth, h: 2.8,
      fill: { color: bgColor },
      line: { color: borderColor, width: 2 }
    })
    
    // Group label
    slide4.addText(item.group, {
      x, y: 1.6, w: cardWidth, h: 0.3,
      fontSize: 11,
      bold: true,
      align: "center",
      color: COLORS.dark
    })
    
    // Description
    slide4.addText(item.description, {
      x, y: 1.9, w: cardWidth, h: 0.25,
      fontSize: 10,
      align: "center",
      color: COLORS.gray
    })
    
    // Value
    slide4.addText(item.value, {
      x, y: 2.4, w: cardWidth, h: 0.8,
      fontSize: 44,
      bold: true,
      align: "center",
      color: i === 2 ? COLORS.green : COLORS.dark
    })
    
    // DS Label
    slide4.addText("DS (Delivery Success)", {
      x, y: 3.2, w: cardWidth, h: 0.25,
      fontSize: 9,
      align: "center",
      color: COLORS.gray
    })
    
    // Highlight best scenario
    if (i === 2) {
      slide4.addText("Melhor cenário", {
        x, y: 3.5, w: cardWidth, h: 0.25,
        fontSize: 10,
        bold: true,
        align: "center",
        color: COLORS.green
      })
    }
  })
  
  // Footer
  slide4.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
  slide4.addText("A delegação aos MLPs não prejudica o DS, e pode melhorá-lo", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11,
    color: COLORS.yellow
  })
  slide4.addText("3", {
    x: 9.2, y: 5.05, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.white
  })

  // =====================
  // SLIDE 5: MISSÃO
  // =====================
  const slide5 = pptx.addSlide()
  slide5.background = { color: COLORS.yellow }
  
  // Header
  slide5.addText("Missão e Posicionamento", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 12,
    color: COLORS.dark + "AA",
    bold: true
  })
  
  slide5.addText("Missão da Nova Área", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32,
    bold: true,
    color: COLORS.dark
  })
  
  // Mission box
  slide5.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 2,
    fill: { color: COLORS.dark }
  })
  
  slide5.addText("\"Ser a fonte única de inteligência end-to-end da operação Last Mile, gerando visibilidade, alertas antecipados e decisões orientadas a dados para reduzir custos, melhorar o DS e governar os MLPs — sem atuar na execução operacional do dia a dia.\"", {
    x: 0.7, y: 1.7, w: 8.6, h: 1.6,
    fontSize: 14,
    color: COLORS.white,
    valign: "middle"
  })
  
  // Footer
  slide5.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
  slide5.addText("Importante: A área NÃO faz monitoramento de rota no dia a dia. Faz inteligência sobre o monitoramento.", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 10,
    color: COLORS.yellow
  })
  slide5.addText("4", {
    x: 9.2, y: 5.05, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.white
  })

  // =====================
  // SLIDE 6: 4 FRENTES
  // =====================
  const slide6 = pptx.addSlide()
  slide6.background = { color: COLORS.white }
  
  // Header
  slide6.addText("O que a Área Faz", {
    x: 0.5, y: 0.2, w: 9, h: 0.25,
    fontSize: 11,
    color: COLORS.blue,
    bold: true
  })
  
  slide6.addText("As 4 Frentes de Atuação", {
    x: 0.5, y: 0.45, w: 9, h: 0.45,
    fontSize: 24,
    bold: true,
    color: COLORS.dark
  })
  
  // Quadrants
  const quadrants = [
    { number: "1", title: "INTELIGÊNCIA DE DADOS LM", items: ["Dashboard end-to-end", "Análise de padrões de falha", "Visão consolidada MLP/região", "KPIs semanais/mensais"], color: COLORS.blue, bg: "E3F2FD" },
    { number: "2", title: "INTERFACE COM ROTEIRIZAÇÃO", items: ["Feedback de performance", "Inputs para otimização", "Alertas de desvio sistêmico"], color: COLORS.orange, bg: "FFF3E0" },
    { number: "3", title: "GOVERNANÇA DE MLPs", items: ["Scorecard por MLP", "Tarefas críticas", "Planos de melhoria", "Penalização/premiação"], color: COLORS.green, bg: "E8F5E9" },
    { number: "4", title: "DECISÕES ESTRATÉGICAS", items: ["Alocação de volume", "Renegociação contratual", "Expansão/retração parceiros"], color: COLORS.pink, bg: "FCE4EC" }
  ]
  
  quadrants.forEach((quad, i) => {
    const row = Math.floor(i / 2)
    const col = i % 2
    const x = 0.3 + col * 4.8
    const y = 1.0 + row * 2.1
    const w = 4.5
    const h = 2.0
    
    // Card background
    slide6.addShape("rect", {
      x, y, w, h,
      fill: { color: quad.bg }
    })
    
    // Left border
    slide6.addShape("rect", {
      x, y, w: 0.08, h,
      fill: { color: quad.color }
    })
    
    // Number badge
    slide6.addText(quad.number, {
      x: x + 0.15, y: y + 0.1, w: 0.35, h: 0.35,
      fill: { color: quad.color },
      color: COLORS.white,
      fontSize: 14,
      bold: true,
      align: "center",
      valign: "middle"
    })
    
    // Title
    slide6.addText(quad.title, {
      x: x + 0.6, y: y + 0.12, w: 3.7, h: 0.3,
      fontSize: 11,
      bold: true,
      color: COLORS.dark
    })
    
    // Items
    quad.items.forEach((item, j) => {
      slide6.addText(`• ${item}`, {
        x: x + 0.2, y: y + 0.5 + j * 0.35, w: 4.1, h: 0.35,
        fontSize: 9,
        color: COLORS.dark
      })
    })
  })
  
  // Footer
  slide6.addShape("rect", { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: COLORS.dark } })
  slide6.addText("5", {
    x: 9.2, y: 5.2, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.white
  })

  // =====================
  // SLIDE 7: IMPACTO
  // =====================
  const slide7 = pptx.addSlide()
  slide7.background = { color: COLORS.yellow }
  
  // Header
  slide7.addText("Por que investir nessa área?", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 12,
    color: COLORS.dark + "AA",
    bold: true
  })
  
  slide7.addText("Impacto Esperado", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 26,
    bold: true,
    color: COLORS.dark
  })
  
  // Table
  const tableData = [
    { alavanca: "Delegação operacional aos MLPs", estimativa: "Liberação de HC para funções estratégicas" },
    { alavanca: "Feedback loop com Roteirização", estimativa: "Redução de rotas problemáticas" },
    { alavanca: "Scorecard + governança de MLPs", estimativa: "Redução na taxa de insucesso" },
    { alavanca: "Alocação de volume baseada em dados", estimativa: "Redução no custo médio/entrega" },
    { alavanca: "Antecipação de crises de MLPs", estimativa: "Redução de custo emergencial" }
  ]
  
  // Table header
  slide7.addShape("rect", { x: 0.5, y: 1.2, w: 9, h: 0.4, fill: { color: COLORS.dark } })
  slide7.addText("ALAVANCA", { x: 0.6, y: 1.25, w: 4.5, h: 0.3, fontSize: 10, bold: true, color: COLORS.white })
  slide7.addText("ESTIMATIVA", { x: 5.2, y: 1.25, w: 4.2, h: 0.3, fontSize: 10, bold: true, color: COLORS.white })
  
  // Table rows
  tableData.forEach((row, i) => {
    const y = 1.6 + i * 0.55
    slide7.addShape("rect", { x: 0.5, y, w: 9, h: 0.55, fill: { color: i % 2 === 0 ? COLORS.white : COLORS.lightGray } })
    slide7.addText(row.alavanca, { x: 0.6, y: y + 0.1, w: 4.5, h: 0.35, fontSize: 10, color: COLORS.dark })
    slide7.addText(row.estimativa, { x: 5.2, y: y + 0.1, w: 4.2, h: 0.35, fontSize: 10, color: COLORS.green, bold: true })
  })
  
  // Footer
  slide7.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
  slide7.addText("O baseline para medir impacto deve ser capturado AGORA, antes de escalar o modelo.", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 10,
    color: COLORS.yellow
  })
  slide7.addText("6", {
    x: 9.2, y: 5.05, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.white
  })

  // =====================
  // SLIDE 8: PRÓXIMOS PASSOS
  // =====================
  const slide8 = pptx.addSlide()
  slide8.background = { color: COLORS.dark }
  
  // Yellow top line
  slide8.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.yellow } })
  
  // Header
  slide8.addText("O que fazer agora", {
    x: 0.5, y: 0.4, w: 9, h: 0.3,
    fontSize: 12,
    color: COLORS.yellow,
    bold: true
  })
  
  slide8.addText("Próximos Passos", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 32,
    bold: true,
    color: COLORS.white
  })
  
  // Steps
  const steps = [
    "Finalizar análise do POC",
    "Definir estrutura e headcount",
    "Aprovar criação da área",
    "Recrutar/realocar time",
    "Definir KPIs e metas",
    "Iniciar operação"
  ]
  
  steps.forEach((step, i) => {
    const y = 1.6 + i * 0.55
    
    // Number circle
    slide8.addText(String(i + 1), {
      x: 0.5, y, w: 0.4, h: 0.4,
      fill: { color: COLORS.yellow },
      color: COLORS.dark,
      fontSize: 14,
      bold: true,
      align: "center",
      valign: "middle"
    })
    
    // Step text
    slide8.addText(step, {
      x: 1.1, y: y + 0.05, w: 8, h: 0.35,
      fontSize: 16,
      color: COLORS.white
    })
  })
  
  // Footer
  slide8.addShape("rect", { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: COLORS.yellow } })
  slide8.addText("7", {
    x: 9.2, y: 5.2, w: 0.5, h: 0.25,
    fontSize: 10,
    color: COLORS.dark
  })

  // Download the file
  await pptx.writeFile({ fileName: "Control_Tower_Monitoring_LM.pptx" })
}
