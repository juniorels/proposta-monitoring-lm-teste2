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
  purple: "9C27B0",
  white: "FFFFFF",
  gray: "666666",
  lightGray: "F5F5F5",
  darkGray: "333333"
}

export async function exportToPptx() {
  const pptx = new PptxGenJS()

  // Set presentation properties
  pptx.author = "Control Tower Monitoring LM"
  pptx.title = "Control Tower Monitoring LM - Proposta de Estrutura"
  pptx.subject = "Área Tática & Estratégica"
  pptx.company = "Mercado Libre"
  pptx.layout = "LAYOUT_16x9"

  let slideNumber = 0

  // Helper function to add footer with page number
  const addFooter = (slide: PptxGenJS.Slide, bgColor: string = COLORS.dark, textColor: string = COLORS.white) => {
    slideNumber++
    slide.addShape("rect", { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: bgColor } })
    slide.addText(String(slideNumber), {
      x: 9.2, y: 5.22, w: 0.5, h: 0.25,
      fontSize: 10,
      color: textColor
    })
  }

  // =====================
  // SLIDE 1: CAPA
  // =====================
  const slide1 = pptx.addSlide()
  slide1.background = { color: COLORS.dark }
  
  // Yellow top line
  slide1.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.08, fill: { color: COLORS.yellow } })
  
  // Badge
  slide1.addText("Mercado Libre | Envíos", {
    x: 0.5, y: 0.8, w: 2.2, h: 0.35,
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
  
  // Info boxes
  slide1.addText("Control Tower — Proposta de Estrutura", {
    x: 0.5, y: 4.2, w: 3.5, h: 0.35,
    fill: { color: "FFFFFF10" },
    color: "CCCCCC",
    fontSize: 10
  })
  
  slide1.addText("Abril 2026", {
    x: 4.2, y: 4.2, w: 1.5, h: 0.35,
    fill: { color: "FFFFFF10" },
    color: "CCCCCC",
    fontSize: 10
  })
  
  addFooter(slide1)

  // =====================
  // SLIDE 2: RESUMO JORNADA
  // =====================
  const slide2 = pptx.addSlide()
  slide2.background = { color: COLORS.white }
  
  // Yellow border
  slide2.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.08, fill: { color: COLORS.yellow } })
  
  // Header
  slide2.addText("A Jornada da CTM: De Centro Operacional para Torre de Inteligência", {
    x: 0.4, y: 0.2, w: 9.2, h: 0.45,
    fontSize: 20,
    bold: true,
    color: COLORS.dark
  })
  
  // 5 columns
  const colW = 1.8
  const colGap = 0.1
  const colStartX = 0.25
  const colY = 0.75
  const colH = 4.2
  
  const journeyColumns = [
    { num: "1", title: "CONTEXTO", color: COLORS.gray, bg: "F5F5F5", items: ["CTM Atual: Monitoramento reativo", "Oportunidade: Delegar operacional aos MLPs", "POC validou: MLPs +0.30pp DS vs BAU"] },
    { num: "2", title: "METAS", color: COLORS.blue, bg: "E3F2FD", items: ["DS Target: Manter ou melhorar DS", "Custo: Reduzir custo/entrega via dados", "Governança: Scorecard + feedback loop"] },
    { num: "3", title: "SUCESSO POC", color: COLORS.green, bg: "E8F5E9", items: ["Grupo A (BAU): DS 97.2%", "Grupo B (MLP): DS 97.4% (+0.20pp)", "Grupo C (MLP+): DS 97.5% (+0.30pp)", "Melhor cenário: Grupo C"] },
    { num: "4", title: "DECISÕES", color: COLORS.orange, bg: "FFF3E0", items: ["Delegar: Monitoreo LM, PNR, Coletas", "Reter: RTS, Sinistros, Ambulâncias", "Transformar: Análise → Inteligência LM"] },
    { num: "5", title: "FERRAMENTAS", color: COLORS.pink, bg: "FCE4EC", items: ["Dashboard E2E: Gaiolas até RTS", "Scorecard MLP: Governança ativa", "Interface Roteirização: Feedback loop"] }
  ]
  
  journeyColumns.forEach((col, i) => {
    const x = colStartX + i * (colW + colGap)
    
    // Background
    slide2.addShape("rect", { x, y: colY, w: colW, h: colH, fill: { color: col.bg } })
    
    // Top border
    slide2.addShape("rect", { x, y: colY, w: colW, h: 0.06, fill: { color: col.color } })
    
    // Number badge
    slide2.addText(col.num, {
      x: x + 0.08, y: colY + 0.12, w: 0.28, h: 0.28,
      fill: { color: col.color },
      color: COLORS.white,
      fontSize: 10,
      bold: true,
      align: "center",
      valign: "middle"
    })
    
    // Title
    slide2.addText(col.title, {
      x: x + 0.4, y: colY + 0.12, w: colW - 0.5, h: 0.28,
      fontSize: 8,
      bold: true,
      color: COLORS.dark
    })
    
    // Items
    col.items.forEach((item, j) => {
      slide2.addShape("rect", {
        x: x + 0.06, y: colY + 0.5 + j * 0.75, w: colW - 0.12, h: 0.65,
        fill: { color: COLORS.white },
        line: { color: "E0E0E0", width: 0.5 }
      })
      slide2.addText(item, {
        x: x + 0.1, y: colY + 0.55 + j * 0.75, w: colW - 0.2, h: 0.55,
        fontSize: 7,
        color: COLORS.darkGray
      })
    })
  })
  
  // Flow arrows
  for (let i = 0; i < 4; i++) {
    const x = colStartX + (i + 1) * colW + i * colGap + colGap / 2
    slide2.addText("→", {
      x: x - 0.05, y: colY + colH / 2 - 0.15, w: colGap + 0.1, h: 0.3,
      fontSize: 14,
      bold: true,
      color: COLORS.yellow,
      align: "center"
    })
  }
  
  addFooter(slide2)

  // =====================
  // SLIDE 3: PIRÂMIDE
  // =====================
  const slide3 = pptx.addSlide()
  slide3.background = { color: COLORS.dark }
  
  // Header
  slide3.addText("A Nova Estrutura da CTM", {
    x: 0.5, y: 0.2, w: 9, h: 0.25,
    fontSize: 10,
    color: COLORS.yellow,
    bold: true
  })
  
  slide3.addText("Inversão da Pirâmide: Da Base Operacional para Base Tática", {
    x: 0.5, y: 0.45, w: 9, h: 0.45,
    fontSize: 22,
    bold: true,
    color: COLORS.white
  })
  
  // AS IS - Left
  slide3.addText("AS IS — CTM Operacional", {
    x: 0.3, y: 1.0, w: 4.2, h: 0.3,
    fontSize: 11,
    color: "AAAAAA",
    align: "center"
  })
  
  // Pyramid AS IS (Operations at base = problem)
  slide3.addShape("rect", { x: 1.5, y: 1.4, w: 1.5, h: 0.6, fill: { color: COLORS.pink } })
  slide3.addText("ESTRATÉGICO\n5%", { x: 1.5, y: 1.45, w: 1.5, h: 0.5, fontSize: 8, align: "center", color: COLORS.white })
  
  slide3.addShape("rect", { x: 1.0, y: 2.1, w: 2.5, h: 0.7, fill: { color: COLORS.orange } })
  slide3.addText("TÁTICO\n15%", { x: 1.0, y: 2.2, w: 2.5, h: 0.5, fontSize: 9, align: "center", color: COLORS.white })
  
  slide3.addShape("rect", { x: 0.5, y: 2.9, w: 3.5, h: 1.3, fill: { color: COLORS.red } })
  slide3.addText("OPERACIONAL\n80% do tempo", { x: 0.5, y: 3.0, w: 3.5, h: 0.5, fontSize: 11, bold: true, align: "center", color: COLORS.white })
  slide3.addText("Push direto drivers | Monitoramento reativo | Apagar incêndios", { x: 0.5, y: 3.5, w: 3.5, h: 0.5, fontSize: 7, align: "center", color: "FFFFFFAA" })
  
  slide3.addText("INSUSTENTÁVEL", { x: 0.5, y: 4.3, w: 3.5, h: 0.25, fontSize: 10, bold: true, align: "center", color: COLORS.red })
  
  // Arrow
  slide3.addShape("rect", { x: 4.5, y: 2.6, w: 0.8, h: 0.6, fill: { color: COLORS.yellow } })
  slide3.addText("→", { x: 4.5, y: 2.6, w: 0.8, h: 0.6, fontSize: 24, bold: true, align: "center", valign: "middle", color: COLORS.dark })
  
  // TO BE - Right
  slide3.addText("TO BE — CTM Inteligência", {
    x: 5.5, y: 1.0, w: 4.2, h: 0.3,
    fontSize: 11,
    color: COLORS.green,
    align: "center"
  })
  
  // Pyramid TO BE (Tactics at base = correct)
  slide3.addShape("rect", { x: 6.5, y: 1.4, w: 1.5, h: 0.6, fill: { color: COLORS.gray }, line: { color: "AAAAAA", width: 1, dashType: "dash" } })
  slide3.addText("OPERACIONAL\nDelegado MLPs", { x: 6.5, y: 1.45, w: 1.5, h: 0.5, fontSize: 7, align: "center", color: "AAAAAA" })
  
  slide3.addShape("rect", { x: 6.0, y: 2.1, w: 2.5, h: 0.7, fill: { color: COLORS.pink } })
  slide3.addText("ESTRATÉGICO\n30%", { x: 6.0, y: 2.2, w: 2.5, h: 0.5, fontSize: 9, align: "center", color: COLORS.white })
  
  slide3.addShape("rect", { x: 5.5, y: 2.9, w: 3.5, h: 1.3, fill: { color: COLORS.blue }, line: { color: COLORS.yellow, width: 2 } })
  slide3.addText("TÁTICO\n70% do tempo", { x: 5.5, y: 3.0, w: 3.5, h: 0.5, fontSize: 11, bold: true, align: "center", color: COLORS.white })
  slide3.addText("Dashboard end-to-end | Governança MLPs | Feedback Roteirização", { x: 5.5, y: 3.5, w: 3.5, h: 0.5, fontSize: 7, align: "center", color: "FFFFFFCC" })
  
  slide3.addText("ESCALÁVEL", { x: 5.5, y: 4.3, w: 3.5, h: 0.25, fontSize: 10, bold: true, align: "center", color: COLORS.green })
  
  // Key message box
  slide3.addShape("rect", { x: 0.3, y: 4.7, w: 9.4, h: 0.45, fill: { color: COLORS.yellow } })
  slide3.addText("A Inversão da Pirâmide: O Tático se torna a base da atuação da CTM. O Operacional é delegado aos MLPs.", {
    x: 0.4, y: 4.75, w: 9.2, h: 0.35,
    fontSize: 10,
    bold: true,
    color: COLORS.dark
  })
  
  addFooter(slide3)

  // =====================
  // SLIDE 4: VALIDAÇÃO POC
  // =====================
  const slide4 = pptx.addSlide()
  slide4.background = { color: COLORS.white }
  
  // Header
  slide4.addText("Validação do POC — Como Decidimos Escalar", {
    x: 0.5, y: 0.2, w: 9, h: 0.25,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide4.addText("O POC nos dará a evidência para escalar (ou não)", {
    x: 0.5, y: 0.45, w: 9, h: 0.45,
    fontSize: 22,
    bold: true,
    color: COLORS.dark
  })
  
  slide4.addText("Decisão baseada em dados, não em feeling", {
    x: 0.5, y: 0.9, w: 9, h: 0.25,
    fontSize: 11,
    color: COLORS.gray
  })
  
  // Left: Principle & Thresholds
  slide4.addShape("rect", { x: 0.3, y: 1.25, w: 4.6, h: 1.1, fill: { color: "E3F2FD" } })
  slide4.addShape("rect", { x: 0.3, y: 1.25, w: 0.06, h: 1.1, fill: { color: COLORS.blue } })
  slide4.addText("PRINCÍPIO BASE", { x: 0.45, y: 1.3, w: 4.3, h: 0.25, fontSize: 10, bold: true, color: COLORS.dark })
  slide4.addText("Comparamos DS intra-tripleta (B ou C vs A), não DS absoluto.\n→ Se A cai junto: fator externo, não pausar\n→ Se só B/C caem: tratamento negativo → agir", {
    x: 0.45, y: 1.55, w: 4.3, h: 0.7,
    fontSize: 8,
    color: COLORS.darkGray
  })
  
  // Decision thresholds
  slide4.addShape("rect", { x: 0.3, y: 2.45, w: 4.6, h: 0.3, fill: { color: COLORS.dark } })
  slide4.addText("UMBRAIS DE DECISÃO", { x: 0.4, y: 2.48, w: 4.4, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  
  const thresholds = [
    { level: "ALERTA", condition: "DS B/C cai ≥ 1.5pp vs A durante 1 semana", action: "→ Investigar causa", color: "FFB300", bg: "FFF8E1" },
    { level: "PAUSA", condition: "DS B/C cai ≥ 2pp vs A durante 2 semanas", action: "→ Pausar tripleta", color: COLORS.orange, bg: "FFF3E0" },
    { level: "IMEDIATA", condition: "DS absoluto < 95% em qualquer semana", action: "→ Pausar sem esperar", color: COLORS.red, bg: "FFEBEE" }
  ]
  
  thresholds.forEach((t, i) => {
    const y = 2.8 + i * 0.6
    slide4.addShape("rect", { x: 0.3, y, w: 4.6, h: 0.55, fill: { color: t.bg } })
    slide4.addText(t.level, { x: 0.4, y: y + 0.05, w: 1, h: 0.2, fontSize: 8, bold: true, color: t.color })
    slide4.addText(t.condition, { x: 0.4, y: y + 0.25, w: 4.4, h: 0.15, fontSize: 7, color: COLORS.darkGray })
    slide4.addText(t.action, { x: 0.4, y: y + 0.4, w: 4.4, h: 0.15, fontSize: 7, color: COLORS.gray })
  })
  
  // Right: Status
  slide4.addShape("rect", { x: 5.1, y: 1.25, w: 4.6, h: 3.55, fill: { color: "E8F5E9" }, line: { color: COLORS.green, width: 2 } })
  slide4.addText("STATUS ATUAL (semana 1 — MLB)", { x: 5.2, y: 1.35, w: 4.4, h: 0.25, fontSize: 10, bold: true, color: COLORS.dark })
  
  // Grupo B status
  slide4.addShape("rect", { x: 5.25, y: 1.7, w: 4.3, h: 0.7, fill: { color: COLORS.white } })
  slide4.addText("Grupo B: +0.20pp acima do A → SEM alerta", { x: 5.35, y: 1.85, w: 4.1, h: 0.4, fontSize: 9, color: COLORS.green })
  
  // Grupo C status
  slide4.addShape("rect", { x: 5.25, y: 2.5, w: 4.3, h: 0.7, fill: { color: COLORS.white } })
  slide4.addText("Grupo C: +0.30pp acima do A → SEM alerta", { x: 5.35, y: 2.65, w: 4.1, h: 0.4, fontSize: 9, color: COLORS.green })
  
  // Decision box
  slide4.addShape("rect", { x: 5.25, y: 3.3, w: 4.3, h: 0.7, fill: { color: COLORS.green } })
  slide4.addText("DECISÃO: CONTINUAR POC conforme planejado", { x: 5.35, y: 3.5, w: 4.1, h: 0.3, fontSize: 10, bold: true, color: COLORS.white })
  
  // Note
  slide4.addText("Dados de apenas 1 semana — ainda não conclusivos — mas validam a direção.", {
    x: 5.25, y: 4.1, w: 4.3, h: 0.5,
    fontSize: 7,
    italic: true,
    color: COLORS.gray
  })
  
  addFooter(slide4)

  // =====================
  // SLIDE 5: O POC (Resultados detalhados)
  // =====================
  const slide5 = pptx.addSlide()
  slide5.background = { color: COLORS.white }
  
  // Header
  slide5.addText("O Ponto de Partida", {
    x: 0.5, y: 0.2, w: 9, h: 0.25,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide5.addText("Os primeiros 8 dias do POC já nos dão um sinal claro", {
    x: 0.5, y: 0.45, w: 9, h: 0.45,
    fontSize: 22,
    bold: true,
    color: COLORS.dark
  })
  
  slide5.addText("A delegação aos MLPs não prejudica o DS, e pode melhorá-lo", {
    x: 0.5, y: 0.9, w: 9, h: 0.25,
    fontSize: 12,
    color: COLORS.gray
  })
  
  // 3 Cards
  const cards = [
    { group: "GRUPO A", label: "BAU", title: "MELI monitora", ds: "97.2%", vsA: "-", vsBaseline: "+0.83pp", packets: "294.7k", color: COLORS.gray, bg: "F5F5F5", border: "DDDDDD" },
    { group: "GRUPO B", label: "MLP", title: "Sem capacitação", ds: "97.4%", vsA: "+0.20pp", vsBaseline: "+0.54pp", packets: "340.8k", color: COLORS.dark, bg: "FFF8E1", border: COLORS.yellow },
    { group: "GRUPO C", label: "MLP+", title: "Com capacitação", ds: "97.5%", vsA: "+0.30pp", vsBaseline: "+0.43pp", packets: "343.7k", color: COLORS.green, bg: "E8F5E9", border: COLORS.green }
  ]
  
  cards.forEach((card, i) => {
    const x = 0.4 + i * 3.15
    const w = 2.95
    
    slide5.addShape("rect", { x, y: 1.3, w, h: 3.2, fill: { color: card.bg }, line: { color: card.border, width: 2 } })
    
    // Group badge
    slide5.addText(card.group, {
      x: x + 0.1, y: 1.4, w: 1.2, h: 0.3,
      fill: { color: card.border === "DDDDDD" ? COLORS.gray : card.border },
      color: COLORS.white,
      fontSize: 9,
      bold: true,
      align: "center"
    })
    
    slide5.addText(card.label, { x: x + 1.4, y: 1.45, w: 1.4, h: 0.25, fontSize: 9, color: COLORS.gray })
    
    slide5.addText(card.title, { x: x + 0.1, y: 1.8, w: w - 0.2, h: 0.25, fontSize: 10, bold: true, color: COLORS.darkGray })
    
    // DS Value
    slide5.addText(card.ds, {
      x: x + 0.1, y: 2.2, w: w - 0.2, h: 0.7,
      fontSize: 36,
      bold: true,
      align: "center",
      color: card.color
    })
    
    slide5.addText("DS (Delivery Success)", { x: x + 0.1, y: 2.9, w: w - 0.2, h: 0.2, fontSize: 8, align: "center", color: COLORS.gray })
    
    // Stats
    if (card.vsA !== "-") {
      slide5.addText(`vs Grupo A: ${card.vsA}`, { x: x + 0.1, y: 3.2, w: w - 0.2, h: 0.2, fontSize: 8, color: COLORS.green })
    }
    slide5.addText(`vs Baseline: ${card.vsBaseline}`, { x: x + 0.1, y: 3.45, w: w - 0.2, h: 0.2, fontSize: 8, color: COLORS.green })
    slide5.addText(`Pacotes: ${card.packets}`, { x: x + 0.1, y: 3.7, w: w - 0.2, h: 0.2, fontSize: 8, color: COLORS.darkGray })
    
    // Highlight best
    if (i === 2) {
      slide5.addText("Melhor cenário", { x: x + 0.1, y: 4.0, w: w - 0.2, h: 0.25, fontSize: 9, bold: true, align: "center", color: COLORS.green })
    }
  })
  
  // Footer
  slide5.addShape("rect", { x: 0, y: 4.7, w: "100%", h: 0.5, fill: { color: COLORS.dark } })
  slide5.addText("MLB – Brasil | Semanas 06/04 – 14/04", { x: 0.4, y: 4.8, w: 4, h: 0.25, fontSize: 9, color: COLORS.yellow })
  slide5.addText("MLPs com ferramentas superam BAU em +0.30pp | Volume MLP é 16% maior que BAU", { x: 4.5, y: 4.8, w: 5.3, h: 0.25, fontSize: 8, color: "CCCCCC" })
  
  addFooter(slide5, COLORS.dark, COLORS.white)

  // =====================
  // SLIDE 6: A OPORTUNIDADE
  // =====================
  const slide6 = pptx.addSlide()
  slide6.background = { color: COLORS.white }
  
  // Yellow left line
  slide6.addShape("rect", { x: 0, y: 0, w: 0.08, h: "100%", fill: { color: COLORS.yellow } })
  
  // Header
  slide6.addText("A Oportunidade", {
    x: 0.5, y: 0.2, w: 9, h: 0.25,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide6.addText("A delegação cria um espaço estratégico que não existia antes", {
    x: 0.5, y: 0.45, w: 9, h: 0.45,
    fontSize: 20,
    bold: true,
    color: COLORS.dark
  })
  
  // Before/After
  // ANTES
  slide6.addShape("rect", { x: 0.3, y: 1.1, w: 4.5, h: 3.5, fill: { color: "F8F8F8" }, line: { color: "E0E0E0", width: 1 } })
  slide6.addText("ANTES — CTM hoje", { x: 0.4, y: 1.2, w: 4.3, h: 0.35, fontSize: 14, bold: true, color: COLORS.darkGray })
  
  const beforeItems = ["Monitoramento reativo", "Push direto para drivers/MLPs", "Foco no dia a dia", "Sem tempo para análise", "Apaga incêndio", "Dados fragmentados", "Sem interface com Roteirização"]
  beforeItems.forEach((item, i) => {
    slide6.addText(`• ${item}`, { x: 0.5, y: 1.6 + i * 0.38, w: 4.2, h: 0.35, fontSize: 9, color: COLORS.gray })
  })
  
  // DEPOIS
  slide6.addShape("rect", { x: 5.2, y: 1.1, w: 4.5, h: 3.5, fill: { color: "E8F5E9" }, line: { color: COLORS.green, width: 2 } })
  slide6.addText("DEPOIS — CTM proposta", { x: 5.3, y: 1.2, w: 4.3, h: 0.35, fontSize: 14, bold: true, color: COLORS.darkGray })
  
  const afterItems = ["Inteligência e governança", "Decisões baseadas em dados", "Visão semanal, mensal, preditiva", "Análise de padrões e tendências", "Previne o incêndio", "Visão end-to-end consolidada", "Interação formal com Roteirização"]
  afterItems.forEach((item, i) => {
    slide6.addText(`✓ ${item}`, { x: 5.4, y: 1.6 + i * 0.38, w: 4.2, h: 0.35, fontSize: 9, bold: true, color: COLORS.darkGray })
  })
  
  // Footer result
  slide6.addShape("rect", { x: 0, y: 4.7, w: "100%", h: 0.5, fill: { color: COLORS.yellow } })
  slide6.addText("RESULTADO: A CTM deixa de ser Centro Operacional e passa a ser Torre de Inteligência da Última Milha.", {
    x: 0.4, y: 4.8, w: 9.2, h: 0.3,
    fontSize: 11,
    bold: true,
    color: COLORS.dark
  })
  
  addFooter(slide6)

  // =====================
  // SLIDE 7: MISSÃO
  // =====================
  const slide7 = pptx.addSlide()
  slide7.background = { color: COLORS.yellow }
  
  // Header
  slide7.addText("Missão e Posicionamento", {
    x: 0.5, y: 0.3, w: 9, h: 0.25,
    fontSize: 11,
    color: COLORS.dark + "AA",
    bold: true
  })
  
  slide7.addText("Missão da Nova Área", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32,
    bold: true,
    color: COLORS.dark
  })
  
  // Mission box
  slide7.addShape("rect", { x: 0.4, y: 1.4, w: 9.2, h: 1.8, fill: { color: COLORS.dark } })
  slide7.addText("\"Ser a fonte única de inteligência end-to-end da operação Last Mile, gerando visibilidade, alertas antecipados e decisões orientadas a dados para reduzir custos, melhorar o DS e governar os MLPs — sem atuar na execução operacional do dia a dia.\"", {
    x: 0.6, y: 1.6, w: 8.8, h: 1.4,
    fontSize: 14,
    color: COLORS.white,
    valign: "middle"
  })
  
  // Positioning diagram
  slide7.addShape("rect", { x: 2.5, y: 3.4, w: 5, h: 0.6, fill: { color: COLORS.white }, line: { color: COLORS.dark, width: 2 } })
  slide7.addText("ÁREA TÁTICA & ESTRATÉGICA CTM LM", { x: 2.5, y: 3.5, w: 5, h: 0.4, fontSize: 10, bold: true, align: "center", color: COLORS.dark })
  
  slide7.addText("↓ governa / orienta ↓", { x: 2.5, y: 4.05, w: 5, h: 0.25, fontSize: 9, align: "center", color: COLORS.dark + "AA" })
  
  slide7.addShape("rect", { x: 2.5, y: 4.35, w: 5, h: 0.5, fill: { color: COLORS.white + "CC" }, line: { color: COLORS.dark + "40", width: 1 } })
  slide7.addText("MLPs (Execução)", { x: 2.5, y: 4.45, w: 5, h: 0.3, fontSize: 10, bold: true, align: "center", color: COLORS.dark })
  
  // Footer
  slide7.addShape("rect", { x: 0, y: 5.0, w: "100%", h: 0.5, fill: { color: COLORS.dark } })
  slide7.addText("Importante: A área NÃO faz monitoramento de rota no dia a dia. Faz inteligência sobre o monitoramento.", {
    x: 0.4, y: 5.1, w: 9.2, h: 0.3,
    fontSize: 9,
    color: COLORS.yellow
  })
  
  addFooter(slide7, COLORS.dark, COLORS.white)

  // =====================
  // SLIDE 8: 4 FRENTES
  // =====================
  const slide8 = pptx.addSlide()
  slide8.background = { color: COLORS.white }
  
  // Header
  slide8.addText("O que a Área Faz", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide8.addText("As 4 frentes de atuação da área", {
    x: 0.5, y: 0.35, w: 9, h: 0.4,
    fontSize: 22,
    bold: true,
    color: COLORS.dark
  })
  
  // 4 quadrants
  const frentes = [
    { n: "1", title: "INTELIGÊNCIA DE DADOS LM", color: COLORS.blue, bg: "E3F2FD", items: ["Dashboard end-to-end", "Análise de padrões de falha e custo", "Visão consolidada por SVC, MLP, região", "KPIs semanais/mensais"] },
    { n: "2", title: "INTERFACE COM ROTEIRIZAÇÃO", color: COLORS.orange, bg: "FFF3E0", items: ["Feedback de performance das rotas", "Inputs para otimização de roteiros", "Alertas de desvio sistêmico de rota"] },
    { n: "3", title: "GOVERNANÇA DE MLPs", color: COLORS.green, bg: "E8F5E9", items: ["Scorecard por MLP", "Tarefas críticas delegadas vs retidas", "Planos de melhoria", "Penalização/premiação"] },
    { n: "4", title: "DECISÕES ESTRATÉGICAS", color: COLORS.pink, bg: "FCE4EC", items: ["Alocação de volume por MLP/região", "Subsídios para renegociação", "Expansão/retração de parceiros"] }
  ]
  
  frentes.forEach((f, i) => {
    const row = Math.floor(i / 2)
    const col = i % 2
    const x = 0.3 + col * 4.85
    const y = 0.85 + row * 2.15
    const w = 4.65
    const h = 2.05
    
    slide8.addShape("rect", { x, y, w, h, fill: { color: f.bg } })
    slide8.addShape("rect", { x, y, w: 0.07, h, fill: { color: f.color } })
    
    // Number
    slide8.addText(f.n, {
      x: x + 0.15, y: y + 0.1, w: 0.35, h: 0.35,
      fill: { color: f.color },
      color: COLORS.white,
      fontSize: 14,
      bold: true,
      align: "center",
      valign: "middle"
    })
    
    // Title
    slide8.addText(f.title, { x: x + 0.6, y: y + 0.15, w: 3.9, h: 0.3, fontSize: 10, bold: true, color: COLORS.dark })
    
    // Items
    f.items.forEach((item, j) => {
      slide8.addText(`• ${item}`, { x: x + 0.2, y: y + 0.55 + j * 0.35, w: 4.3, h: 0.32, fontSize: 9, color: COLORS.darkGray })
    })
  })
  
  addFooter(slide8)

  // =====================
  // SLIDE 9: INTERFACE ROTEIRIZAÇÃO
  // =====================
  const slide9 = pptx.addSlide()
  slide9.background = { color: COLORS.white }
  
  slide9.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.05, fill: { color: COLORS.blue } })
  
  slide9.addText("Interface com Roteirização — Detalhe", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide9.addText("A interface com Roteirização é a principal alavanca", {
    x: 0.5, y: 0.35, w: 9, h: 0.4,
    fontSize: 20,
    bold: true,
    color: COLORS.dark
  })
  
  // Two columns
  // Left - Roteirização
  slide9.addShape("rect", { x: 0.3, y: 0.9, w: 3.8, h: 2.5, fill: { color: "F5F5F5" } })
  slide9.addText("ROTEIRIZAÇÃO", { x: 0.4, y: 1.0, w: 3.6, h: 0.3, fontSize: 12, bold: true, color: COLORS.dark })
  slide9.addText("Planejamento", { x: 0.4, y: 1.3, w: 3.6, h: 0.2, fontSize: 9, color: COLORS.gray })
  slide9.addText("• Gera rotas, parâmetros, tempos médios\n• Ajusta algoritmos e restrições\n• Recebe alertas de risco antecipado", {
    x: 0.4, y: 1.6, w: 3.6, h: 1.6,
    fontSize: 9,
    color: COLORS.darkGray
  })
  
  // Arrow
  slide9.addText("← Feedback →", { x: 4.2, y: 1.9, w: 1.4, h: 0.4, fontSize: 10, bold: true, align: "center", color: COLORS.blue })
  
  // Right - CTM LM
  slide9.addShape("rect", { x: 5.7, y: 0.9, w: 4, h: 2.5, fill: { color: "E3F2FD" }, line: { color: COLORS.blue, width: 2 } })
  slide9.addText("ÁREA CTM LM", { x: 5.8, y: 1.0, w: 3.8, h: 0.3, fontSize: 12, bold: true, color: COLORS.dark })
  slide9.addText("Execução & Análise", { x: 5.8, y: 1.3, w: 3.8, h: 0.2, fontSize: 9, color: COLORS.gray })
  slide9.addText("• Reporta: % desvio real vs planejado\n• Reporta: rotas com alertas sistêmicos\n• Sinaliza: padrões de falha de rota", {
    x: 5.8, y: 1.6, w: 3.8, h: 1.6,
    fontSize: 9,
    color: COLORS.darkGray
  })
  
  // Ritual & Impact
  slide9.addShape("rect", { x: 0.3, y: 3.5, w: 4.5, h: 1.2, fill: { color: "FFF8E1" }, line: { color: COLORS.yellow, width: 1 } })
  slide9.addText("RITUAL PROPOSTO", { x: 0.4, y: 3.6, w: 4.3, h: 0.25, fontSize: 10, bold: true, color: COLORS.orange })
  slide9.addText("• Reunião quinzenal: CTM LM + Roteirização\n• Pauta: top 5 desvios de rota\n• Entrega: ajuste de parâmetros", {
    x: 0.4, y: 3.9, w: 4.3, h: 0.7,
    fontSize: 8,
    color: COLORS.darkGray
  })
  
  slide9.addShape("rect", { x: 5.2, y: 3.5, w: 4.5, h: 1.2, fill: { color: "E8F5E9" }, line: { color: COLORS.green, width: 1 } })
  slide9.addText("IMPACTO ESPERADO", { x: 5.3, y: 3.6, w: 4.3, h: 0.25, fontSize: 10, bold: true, color: COLORS.green })
  slide9.addText("Redução de rotas cronicamente problemáticas via feedback loop entre execução e planejamento.\n\n✓ Hoje esse feedback loop não existe formalmente", {
    x: 5.3, y: 3.9, w: 4.3, h: 0.7,
    fontSize: 8,
    color: COLORS.darkGray
  })
  
  addFooter(slide9)

  // =====================
  // SLIDE 10: TAREFAS
  // =====================
  const slide10 = pptx.addSlide()
  slide10.background = { color: COLORS.white }
  
  slide10.addText("Tarefas — Apagar | Delegar | Manter | Transformar", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide10.addText("O que a CTM faz hoje e o que fará amanhã", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 20,
    bold: true,
    color: COLORS.dark
  })
  
  // 4 columns
  const taskCols = [
    { title: "APAGAR", subtitle: "CTM para de fazer", color: COLORS.red, bg: "FFEBEE", items: ["Push direto a drivers", "Gestão de alertas individuais", "Rotinas WhatsApp"] },
    { title: "DELEGAR", subtitle: "CTM passa para MLP", color: "FFB300", bg: "FFF8E1", items: ["Monitoreo rutas LM (em POC)", "Coletas Places", "PNR", "Gestão comentários"] },
    { title: "MANTER", subtitle: "ONE OPS retém", color: COLORS.green, bg: "E8F5E9", items: ["RTS", "Sinistros", "Ambulâncias"] },
    { title: "TRANSFORMAR", subtitle: "CTM eleva o nível", color: COLORS.blue, bg: "E3F2FD", items: ["Análise de dados → Riscos", "Relatório de risco semanal", "Dashboard end-to-end", "Operação Meli EXTRA"] }
  ]
  
  taskCols.forEach((col, i) => {
    const x = 0.25 + i * 2.45
    const w = 2.35
    const h = 4.2
    
    slide10.addShape("rect", { x, y: 0.8, w, h, fill: { color: col.bg }, line: { color: i === 3 ? COLORS.blue : undefined, width: i === 3 ? 2 : 0 } })
    
    slide10.addText(col.title, { x, y: 0.9, w, h: 0.25, fontSize: 10, bold: true, align: "center", color: col.color })
    slide10.addText(col.subtitle, { x, y: 1.15, w, h: 0.2, fontSize: 8, align: "center", color: COLORS.gray })
    
    col.items.forEach((item, j) => {
      slide10.addShape("rect", { x: x + 0.08, y: 1.5 + j * 0.6, w: w - 0.16, h: 0.5, fill: { color: COLORS.white }, line: { color: col.color + "40", width: 0.5 } })
      slide10.addText(item, { x: x + 0.12, y: 1.55 + j * 0.6, w: w - 0.24, h: 0.4, fontSize: 8, color: COLORS.darkGray })
    })
  })
  
  addFooter(slide10)

  // =====================
  // SLIDE 11: STAKEHOLDERS
  // =====================
  const slide11 = pptx.addSlide()
  slide11.background = { color: COLORS.white }
  
  slide11.addText("Mapa de Stakeholders e Interações", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide11.addText("A CTM como hub de inteligência entre todos os stakeholders", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 20,
    bold: true,
    color: COLORS.dark
  })
  
  // Center - CTM
  slide11.addShape("ellipse", { x: 3.8, y: 2.0, w: 2.2, h: 1.3, fill: { color: COLORS.yellow }, line: { color: COLORS.dark, width: 2 } })
  slide11.addText("CTM\nÁREA TÁTICA\n& ESTRATÉG.", { x: 3.8, y: 2.15, w: 2.2, h: 1.0, fontSize: 9, bold: true, align: "center", valign: "middle", color: COLORS.dark })
  
  // Stakeholders around
  const stakeholders = [
    { label: "ROTEIRIZAÇÃO", x: 3.8, y: 0.85, w: 2.2, h: 0.5, color: COLORS.dark },
    { label: "SVC", x: 0.5, y: 2.2, w: 1.3, h: 0.6, color: COLORS.blue },
    { label: "MLPs", x: 8.0, y: 2.2, w: 1.3, h: 0.6, color: COLORS.green },
    { label: "IT", x: 1.0, y: 4.0, w: 1.0, h: 0.5, color: COLORS.purple },
    { label: "NODOs", x: 4.4, y: 4.0, w: 1.0, h: 0.5, color: COLORS.orange },
    { label: "MELI\nEXTRA", x: 7.5, y: 4.0, w: 1.0, h: 0.5, color: "607D8B" }
  ]
  
  stakeholders.forEach((s) => {
    slide11.addShape("rect", { x: s.x, y: s.y, w: s.w, h: s.h, fill: { color: s.color } })
    slide11.addText(s.label, { x: s.x, y: s.y + 0.05, w: s.w, h: s.h - 0.1, fontSize: 8, bold: true, align: "center", valign: "middle", color: COLORS.white })
  })
  
  // Footer
  slide11.addShape("rect", { x: 0, y: 4.7, w: "100%", h: 0.5, fill: { color: COLORS.dark } })
  slide11.addText("O diferencial desta área é ser o único ponto que enxerga TODOS os fluxos simultaneamente.", {
    x: 0.4, y: 4.82, w: 9.2, h: 0.25,
    fontSize: 9,
    color: COLORS.yellow
  })
  
  addFooter(slide11, COLORS.dark, COLORS.white)

  // =====================
  // SLIDE 12: PRODUTOS
  // =====================
  const slide12 = pptx.addSlide()
  slide12.background = { color: COLORS.white }
  
  slide12.addText("Produtos da Área", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide12.addText("O que a área entrega — produtos concretos, não só reuniões", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.dark
  })
  
  // Table header
  slide12.addShape("rect", { x: 0.3, y: 0.8, w: 9.4, h: 0.35, fill: { color: COLORS.dark } })
  slide12.addText("PRODUTO", { x: 0.4, y: 0.85, w: 3, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  slide12.addText("PERIODICIDADE", { x: 3.4, y: 0.85, w: 2, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  slide12.addText("AUDIÊNCIA", { x: 5.4, y: 0.85, w: 2.2, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  slide12.addText("IMPACTO", { x: 7.6, y: 0.85, w: 2, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  
  const produtos = [
    { nome: "Dashboard LM End-to-End", periodo: "Tempo real (diário)", audiencia: "CT + Lideranças", impacto: "Visibilidade consolidada", color: COLORS.blue },
    { nome: "Scorecard MLP", periodo: "Quinzenal", audiencia: "SRM + MLPs", impacto: "Governança e accountability", color: COLORS.green },
    { nome: "Relatório de Risco LM", periodo: "Semanal", audiencia: "CT + Roteirização", impacto: "Antecipar riscos", color: COLORS.orange },
    { nome: "Análise de Custo por MLP", periodo: "Mensal", audiencia: "Sr Mgrs", impacto: "Input renegociação", color: COLORS.pink },
    { nome: "Feedback Loop Roteirização", periodo: "Quinzenal", audiencia: "Roteirização", impacto: "Melhoria de rotas", color: COLORS.purple },
    { nome: "Report POC (MLB/MLM/MLA)", periodo: "4 semanas", audiencia: "Governance", impacto: "Decisão escalar/pausar", color: "607D8B" }
  ]
  
  produtos.forEach((p, i) => {
    const y = 1.2 + i * 0.55
    slide12.addShape("rect", { x: 0.3, y, w: 9.4, h: 0.5, fill: { color: i % 2 === 0 ? COLORS.white : "F9F9F9" } })
    slide12.addText(p.nome, { x: 0.4, y: y + 0.1, w: 2.9, h: 0.3, fontSize: 9, bold: true, color: COLORS.darkGray })
    slide12.addText(p.periodo, { x: 3.4, y: y + 0.1, w: 1.9, h: 0.3, fontSize: 8, color: COLORS.gray })
    slide12.addText(p.audiencia, { x: 5.4, y: y + 0.1, w: 2.1, h: 0.3, fontSize: 8, color: COLORS.gray })
    slide12.addText(p.impacto, { x: 7.6, y: y + 0.1, w: 2, h: 0.3, fontSize: 8, bold: true, color: p.color })
  })
  
  addFooter(slide12)

  // =====================
  // SLIDE 13: RITUAIS
  // =====================
  const slide13 = pptx.addSlide()
  slide13.background = { color: COLORS.white }
  
  slide13.addText("Rituais e Cadência", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide13.addText("Rituais que mantêm a área conectada aos stakeholders", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.dark
  })
  
  const rituais = [
    { ritual: "Daily LM (15min)", freq: "Diário", part: "CTM interna", obj: "Alinhamento do dia", color: COLORS.blue, bg: "E3F2FD" },
    { ritual: "Review Semanal Risco", freq: "Semanal", part: "CTM + SVC + NODOs", obj: "Top riscos + ação", color: COLORS.orange, bg: "FFF8E1" },
    { ritual: "Feedback Roteirização", freq: "Quinzenal", part: "CTM + Roteirização", obj: "Desvios → ajustes", color: COLORS.purple, bg: "F3E5F5" },
    { ritual: "Scorecard MLP Review", freq: "Quinzenal", part: "CTM + SRM + MLPs", obj: "Performance + plano", color: COLORS.green, bg: "E8F5E9" },
    { ritual: "Business Review LM", freq: "Mensal", part: "Todos stakeholders", obj: "Decisões estratégicas", color: COLORS.pink, bg: "FCE4EC" },
    { ritual: "POC Review", freq: "Semanal (4sem)", part: "Governance", obj: "Decidir pausa/escala", color: "607D8B", bg: "ECEFF1" }
  ]
  
  rituais.forEach((r, i) => {
    const row = Math.floor(i / 3)
    const col = i % 3
    const x = 0.3 + col * 3.2
    const y = 0.8 + row * 2.1
    const w = 3.05
    const h = 2.0
    
    slide13.addShape("rect", { x, y, w, h, fill: { color: r.bg } })
    
    slide13.addText(r.freq, {
      x: x + w - 1.1, y: y + 0.1, w: 1, h: 0.25,
      fill: { color: r.color },
      color: COLORS.white,
      fontSize: 7,
      bold: true,
      align: "center"
    })
    
    slide13.addText(r.ritual, { x: x + 0.1, y: y + 0.45, w: w - 0.2, h: 0.3, fontSize: 10, bold: true, color: COLORS.dark })
    slide13.addText(`Participantes: ${r.part}`, { x: x + 0.1, y: y + 0.85, w: w - 0.2, h: 0.25, fontSize: 8, color: COLORS.gray })
    slide13.addText(`Objetivo: ${r.obj}`, { x: x + 0.1, y: y + 1.15, w: w - 0.2, h: 0.25, fontSize: 8, bold: true, color: r.color })
  })
  
  addFooter(slide13)

  // =====================
  // SLIDE 14: ESTRUTURA
  // =====================
  const slide14 = pptx.addSlide()
  slide14.background = { color: COLORS.white }
  
  slide14.addText("Estrutura Proposta da Área", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide14.addText("Uma área enxuta com perfil analítico — não operacional", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.dark
  })
  
  // Head
  slide14.addShape("rect", { x: 3.5, y: 0.85, w: 3, h: 0.6, fill: { color: COLORS.dark } })
  slide14.addText("Head / Referência Estratégica CTM LM", { x: 3.5, y: 0.95, w: 3, h: 0.4, fontSize: 9, bold: true, align: "center", color: COLORS.white })
  
  // Branches
  const branches = [
    { title: "Analytics & BI", color: COLORS.blue, bg: "E3F2FD", items: ["Dashboards", "KPIs/métricas", "Relatório risco", "Análise custo"] },
    { title: "Governança MLP", color: COLORS.green, bg: "E8F5E9", items: ["Scorecard MLP", "Tarefas críticas", "Planos de melhoria"] },
    { title: "Interface Roteirização", color: COLORS.orange, bg: "FFF3E0", items: ["Feedback loop", "Análise de desvio", "Input p/ algoritmo"] }
  ]
  
  branches.forEach((b, i) => {
    const x = 0.5 + i * 3.2
    const w = 3.0
    
    slide14.addShape("rect", { x, y: 1.7, w, h: 1.8, fill: { color: b.bg }, line: { color: b.color, width: 2 } })
    slide14.addText(b.title, { x, y: 1.8, w, h: 0.3, fontSize: 10, bold: true, align: "center", color: COLORS.dark })
    
    b.items.forEach((item, j) => {
      slide14.addText(`• ${item}`, { x: x + 0.1, y: 2.15 + j * 0.3, w: w - 0.2, h: 0.28, fontSize: 8, color: COLORS.darkGray })
    })
  })
  
  // Profiles
  slide14.addShape("rect", { x: 0.3, y: 3.7, w: 9.4, h: 0.9, fill: { color: "F5F5F5" } })
  slide14.addText("PERFIS-CHAVE:", { x: 0.4, y: 3.8, w: 9.2, h: 0.25, fontSize: 9, bold: true, color: COLORS.dark })
  slide14.addText("• Analista de Dados / BI com experiência logística   • Analista de Performance de Transportadores   • Analista de Operações com interface técnica", {
    x: 0.4, y: 4.1, w: 9.2, h: 0.4,
    fontSize: 8,
    color: COLORS.darkGray
  })
  
  // Footer
  slide14.addShape("rect", { x: 0, y: 4.7, w: "100%", h: 0.5, fill: { color: COLORS.yellow } })
  slide14.addText("HEADCOUNT: escala com a maturidade do POC", { x: 0.4, y: 4.82, w: 9.2, h: 0.25, fontSize: 10, bold: true, color: COLORS.dark })
  
  addFooter(slide14, COLORS.yellow, COLORS.dark)

  // =====================
  // SLIDE 15: ROADMAP
  // =====================
  const slide15 = pptx.addSlide()
  slide15.background = { color: COLORS.white }
  
  slide15.addText("Roadmap de Implantação", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide15.addText("Roadmap — da conclusão do POC à área em plena operação", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.dark
  })
  
  const fases = [
    { fase: "FASE 1", titulo: "FUNDAÇÃO", periodo: "Agora → Mai", color: COLORS.blue, bg: "E3F2FD", items: ["Concluir POC", "Definir KPIs", "Dashboard POC", "Estrutura equipe"], marco: "Dados POC validados" },
    { fase: "FASE 2", titulo: "GOVERNANÇA", periodo: "Jun → Jul", color: COLORS.green, bg: "E8F5E9", items: ["Scorecard MLP", "Feedback Roteirização", "Dashboard v1 live", "1° Business Review"], marco: "Scorecard + Dashboard live" },
    { fase: "FASE 3", titulo: "ESCALA", periodo: "Ago → Out", color: COLORS.orange, bg: "FFF8E1", items: ["Expandir POC", "Rituais formais", "Produtos consolidados", "Análise custo"], marco: "Área consolidada" },
    { fase: "FASE 4", titulo: "MATURIDADE", periodo: "Nov+", color: COLORS.purple, bg: "F3E5F5", items: ["Modelos preditivos", "Alertas automáticos", "Scorecard contratual", "Simulações what-if"], marco: "Previsão DS/custo" }
  ]
  
  fases.forEach((f, i) => {
    const x = 0.25 + i * 2.45
    const w = 2.35
    
    slide15.addShape("rect", { x, y: 0.8, w, h: 3.6, fill: { color: f.bg } })
    
    slide15.addText(f.fase, {
      x: x + 0.1, y: 0.9, w: 0.9, h: 0.25,
      fill: { color: f.color },
      color: COLORS.white,
      fontSize: 8,
      bold: true,
      align: "center"
    })
    
    slide15.addText(f.titulo, { x: x + 0.1, y: 1.2, w: w - 0.2, h: 0.3, fontSize: 11, bold: true, color: COLORS.dark })
    slide15.addText(f.periodo, { x: x + 0.1, y: 1.5, w: w - 0.2, h: 0.2, fontSize: 8, color: COLORS.gray })
    
    f.items.forEach((item, j) => {
      slide15.addText(`✓ ${item}`, { x: x + 0.1, y: 1.8 + j * 0.35, w: w - 0.2, h: 0.32, fontSize: 8, color: COLORS.darkGray })
    })
    
    // Marco
    slide15.addShape("rect", { x: x + 0.1, y: 3.5, w: w - 0.2, h: 0.8, fill: { color: COLORS.white }, line: { color: f.color, width: 2 } })
    slide15.addText("MARCO:", { x: x + 0.15, y: 3.55, w: w - 0.3, h: 0.2, fontSize: 7, bold: true, color: f.color })
    slide15.addText(f.marco, { x: x + 0.15, y: 3.8, w: w - 0.3, h: 0.4, fontSize: 8, bold: true, color: COLORS.darkGray })
  })
  
  // Footer
  slide15.addShape("rect", { x: 0, y: 4.5, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
  slide15.addText("A Fase 1 está acontecendo agora — o POC é a fundação de tudo que vem depois.", {
    x: 0.4, y: 4.65, w: 9.2, h: 0.3,
    fontSize: 10,
    color: COLORS.yellow
  })
  
  addFooter(slide15, COLORS.dark, COLORS.white)

  // =====================
  // SLIDE 16: IMPACTO
  // =====================
  const slide16 = pptx.addSlide()
  slide16.background = { color: COLORS.yellow }
  
  slide16.addText("Impacto Esperado", {
    x: 0.5, y: 0.2, w: 9, h: 0.25,
    fontSize: 10,
    color: COLORS.dark + "AA",
    bold: true
  })
  
  slide16.addText("Por que investir nessa área? Porque o retorno é mensurável", {
    x: 0.5, y: 0.45, w: 9, h: 0.45,
    fontSize: 20,
    bold: true,
    color: COLORS.dark
  })
  
  // Table
  slide16.addShape("rect", { x: 0.4, y: 1.0, w: 9.2, h: 0.35, fill: { color: COLORS.dark } })
  slide16.addText("ALAVANCA", { x: 0.5, y: 1.05, w: 4, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  slide16.addText("ESTIMATIVA", { x: 4.6, y: 1.05, w: 3, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  slide16.addText("COMO MEDIR", { x: 7.6, y: 1.05, w: 2, h: 0.25, fontSize: 9, bold: true, color: COLORS.white })
  
  const alavancas = [
    { alavanca: "Delegação operacional aos MLPs (via POC)", estimativa: "Liberação de HC para funções estratégicas", como: "Headcount antes vs depois" },
    { alavanca: "Feedback loop com Roteirização", estimativa: "Redução de rotas cronicamente problemáticas", como: "% rotas com alerta recorrente" },
    { alavanca: "Scorecard + governança ativa de MLPs", estimativa: "Redução na taxa de insucesso", como: "Taxa de insucesso por MLP" },
    { alavanca: "Alocação de volume baseada em dados", estimativa: "Redução no custo médio/entrega", como: "Custo por entrega por MLP" },
    { alavanca: "Antecipação de crises de MLPs", estimativa: "Redução de custo emergencial", como: "Eventos de ruptura por mês" }
  ]
  
  alavancas.forEach((a, i) => {
    const y = 1.4 + i * 0.55
    slide16.addShape("rect", { x: 0.4, y, w: 9.2, h: 0.5, fill: { color: COLORS.white } })
    slide16.addText(a.alavanca, { x: 0.5, y: y + 0.1, w: 4, h: 0.3, fontSize: 8, color: COLORS.darkGray })
    slide16.addText(a.estimativa, { x: 4.6, y: y + 0.1, w: 3, h: 0.3, fontSize: 8, bold: true, color: COLORS.green })
    slide16.addText(a.como, { x: 7.6, y: y + 0.1, w: 2, h: 0.3, fontSize: 7, color: COLORS.gray })
  })
  
  // Footer
  slide16.addShape("rect", { x: 0, y: 4.2, w: "100%", h: 1.0, fill: { color: COLORS.dark } })
  slide16.addText("O baseline para medir impacto deve ser capturado AGORA, antes de escalar o modelo. O POC cria essa oportunidade.", {
    x: 0.4, y: 4.4, w: 9.2, h: 0.3,
    fontSize: 10,
    color: COLORS.yellow
  })
  
  addFooter(slide16, COLORS.dark, COLORS.white)

  // =====================
  // SLIDE 17: PRÓXIMOS PASSOS
  // =====================
  const slide17 = pptx.addSlide()
  slide17.background = { color: COLORS.white }
  
  slide17.addShape("rect", { x: 0, y: 0, w: 0.08, h: "100%", fill: { color: COLORS.yellow } })
  
  slide17.addText("Próximos Passos", {
    x: 0.5, y: 0.15, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.blue,
    bold: true
  })
  
  slide17.addText("O que precisamos decidir e fazer nas próximas 2 semanas", {
    x: 0.5, y: 0.35, w: 9, h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.dark
  })
  
  slide17.addText("O POC termina em 03/05 — a janela de decisão é agora", {
    x: 0.5, y: 0.7, w: 9, h: 0.2,
    fontSize: 10,
    color: COLORS.gray
  })
  
  // Table header
  slide17.addShape("rect", { x: 0.3, y: 1.0, w: 9.4, h: 0.3, fill: { color: COLORS.dark } })
  slide17.addText("#", { x: 0.4, y: 1.03, w: 0.4, h: 0.24, fontSize: 8, bold: true, color: COLORS.white, align: "center" })
  slide17.addText("AÇÃO", { x: 0.85, y: 1.03, w: 4.5, h: 0.24, fontSize: 8, bold: true, color: COLORS.white })
  slide17.addText("RESPONSÁVEL", { x: 5.4, y: 1.03, w: 2.5, h: 0.24, fontSize: 8, bold: true, color: COLORS.white })
  slide17.addText("PRAZO", { x: 7.95, y: 1.03, w: 1.7, h: 0.24, fontSize: 8, bold: true, color: COLORS.white })
  
  const acoes = [
    { num: 1, acao: "Validar estrutura e escopo da área proposta", resp: "FM&LM Director (Will) + CT Lead", prazo: "Semana 1" },
    { num: 2, acao: "Aprovar definição de headcount/perfis", resp: "FM&LM Sr Mgr (Natalia)", prazo: "Semana 1" },
    { num: 3, acao: "Acompanhar semanas 2-4 do POC", resp: "CT + Governance completo", prazo: "Contínuo até 03/05" },
    { num: 4, acao: "Preparar Dashboard end-to-end v1", resp: "IT + Produto (Guido + Lucia)", prazo: "Semana 2-3" },
    { num: 5, acao: "Definir ritual quinzenal com Roteirização", resp: "CT + Roteirização", prazo: "Semana 2" },
    { num: 6, acao: "Capturar baseline de custo por entrega atual", resp: "Analytics CT", prazo: "Semana 1" },
    { num: 7, acao: "Preparar proposta de scorecard MLP v1", resp: "SRM Focais", prazo: "Semana 3-4" }
  ]
  
  acoes.forEach((a, i) => {
    const y = 1.35 + i * 0.48
    slide17.addShape("rect", { x: 0.3, y, w: 9.4, h: 0.45, fill: { color: i % 2 === 0 ? COLORS.white : "F9F9F9" } })
    
    slide17.addText(String(a.num), {
      x: 0.4, y: y + 0.08, w: 0.3, h: 0.28,
      fill: { color: COLORS.blue },
      color: COLORS.white,
      fontSize: 8,
      bold: true,
      align: "center",
      valign: "middle"
    })
    
    slide17.addText(a.acao, { x: 0.85, y: y + 0.1, w: 4.5, h: 0.28, fontSize: 8, color: COLORS.darkGray })
    slide17.addText(a.resp, { x: 5.4, y: y + 0.1, w: 2.5, h: 0.28, fontSize: 7, color: COLORS.gray })
    slide17.addText(a.prazo, { x: 7.95, y: y + 0.1, w: 1.7, h: 0.28, fontSize: 7, color: i === 2 ? COLORS.orange : COLORS.gray })
  })
  
  // Footer
  slide17.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
  slide17.addText("O POC está acontecendo agora. A proposta precisa caminhar junto para que a transição seja fluida.", {
    x: 0.4, y: 4.95, w: 9.2, h: 0.35,
    fontSize: 10,
    color: COLORS.white
  })
  
  addFooter(slide17, COLORS.dark, COLORS.white)

  // Download the file
  await pptx.writeFile({ fileName: "Control_Tower_Monitoring_LM.pptx" })
}
