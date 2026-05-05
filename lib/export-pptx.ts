import PptxGenJS from "pptxgenjs"

// Slide data definitions for PPTX export
const slidesData = [
  {
    title: "Control Tower Monitoring LM",
    subtitle: "Área Tática & Estratégica",
    type: "cover",
    content: "Da operação reativa à inteligência proativa: uma nova forma de monitorar a última milha",
    footer: "Abril 2026 | Mercado Libre | Envíos"
  },
  {
    title: "Validação POC",
    subtitle: "Os primeiros 8 dias do POC já nos dão um sinal claro",
    type: "data",
    content: [
      { group: "Grupo A (BAU)", value: "97.2%", description: "MELI monitora" },
      { group: "Grupo B (MLP)", value: "97.4%", description: "Sem capacitação" },
      { group: "Grupo C (MLP+)", value: "97.5%", description: "Com capacitação" }
    ],
    footer: "A delegação aos MLPs não prejudica o DS, e pode melhorá-lo"
  },
  {
    title: "O POC",
    subtitle: "O Ponto de Partida",
    type: "content",
    content: "Os primeiros 8 dias do POC já nos dão um sinal claro\n\n• MLPs com ferramentas superam BAU em +0.30pp\n• Volume MLP é 16% maior que BAU\n• A delegação aos MLPs não prejudica o DS"
  },
  {
    title: "A Oportunidade",
    subtitle: "O momento é agora",
    type: "content",
    content: "O POC valida que é possível delegar o monitoramento operacional aos MLPs sem perder qualidade.\n\nIsso abre espaço para a área Control Tower focar em inteligência tática e estratégica."
  },
  {
    title: "Missão da Nova Área",
    subtitle: "Missão e Posicionamento",
    type: "mission",
    content: "\"Ser a fonte única de inteligência end-to-end da operação Last Mile, gerando visibilidade, alertas antecipados e decisões orientadas a dados para reduzir custos, melhorar o DS e governar os MLPs — sem atuar na execução operacional do dia a dia.\"",
    footer: "Importante: A área NÃO faz monitoramento de rota no dia a dia. Faz inteligência sobre o monitoramento."
  },
  {
    title: "As 4 Frentes de Atuação",
    subtitle: "O que a Área Faz",
    type: "quadrants",
    content: [
      { number: "1", title: "INTELIGÊNCIA DE DADOS LM", items: ["Dashboard end-to-end", "Análise de padrões de falha e custo", "Visão consolidada por SVC, MLP, região", "KPIs semanais/mensais"] },
      { number: "2", title: "INTERFACE COM ROTEIRIZAÇÃO", items: ["Feedback de performance das rotas", "Inputs para otimização de roteiros", "Alertas de desvio sistêmico de rota"] },
      { number: "3", title: "GOVERNANÇA DE MLPs", items: ["Scorecard por MLP", "Acompanhamento de tarefas críticas", "Planos de melhoria", "Penalização/premiação"] },
      { number: "4", title: "DECISÕES ESTRATÉGICAS", items: ["Alocação de volume por MLP/região", "Subsídios para renegociação contratual", "Expansão/retração de parceiros"] }
    ]
  },
  {
    title: "Roteirização",
    subtitle: "Interface com a área de Roteirização",
    type: "content",
    content: "A Frente 2 (Interface com Roteirização) é o diferencial.\n\nPela primeira vez haverá um canal formal entre o resultado na rua e quem desenhou a rota.\n\n• Feedback de performance das rotas geradas\n• Inputs para otimização de roteiros\n• Alertas de desvio sistêmico de rota"
  },
  {
    title: "Tarefas",
    subtitle: "Divisão de Responsabilidades",
    type: "content",
    content: "Divisão clara entre tarefas operacionais delegadas aos MLPs e tarefas táticas/estratégicas retidas na Control Tower.\n\n• MLPs: Monitoramento de rota no dia a dia\n• Control Tower: Inteligência sobre o monitoramento"
  },
  {
    title: "Stakeholders",
    subtitle: "Com quem a área se relaciona",
    type: "content",
    content: "• MLPs (parceiros logísticos)\n• Área de Roteirização\n• Operações LM\n• Planejamento de Capacidade\n• Comercial de Parcerias"
  },
  {
    title: "Produtos",
    subtitle: "Entregas da área",
    type: "content",
    content: "Cada frente gera um produto concreto:\n\n• Dashboard de Inteligência LM\n• Relatórios de Feedback para Roteirização\n• Scorecard de MLPs\n• Análises Estratégicas para alocação de volume"
  },
  {
    title: "Rituais",
    subtitle: "Cadência de atuação",
    type: "content",
    content: "• Diário: Acompanhamento de indicadores\n• Semanal: Revisão de performance de MLPs\n• Mensal: Análise de tendências e planos de ação\n• Trimestral: Revisão estratégica com liderança"
  },
  {
    title: "Estrutura da Área",
    subtitle: "Time proposto",
    type: "content",
    content: "Estrutura enxuta e focada:\n\n• 1 Líder de área\n• 2-3 Analistas de dados/inteligência\n• 1-2 Analistas de governança de MLPs\n\nTotal: 4-6 pessoas"
  },
  {
    title: "Impacto Esperado",
    subtitle: "Por que investir nessa área?",
    type: "table",
    content: [
      { alavanca: "Delegação operacional aos MLPs", estimativa: "Liberação de HC para funções estratégicas" },
      { alavanca: "Feedback loop com Roteirização", estimativa: "Redução de rotas problemáticas" },
      { alavanca: "Scorecard + governança de MLPs", estimativa: "Redução na taxa de insucesso" },
      { alavanca: "Alocação de volume baseada em dados", estimativa: "Redução no custo médio/entrega" },
      { alavanca: "Antecipação de crises de MLPs", estimativa: "Redução de custo emergencial" }
    ],
    footer: "O baseline para medir impacto deve ser capturado AGORA, antes de escalar o modelo."
  },
  {
    title: "Próximos Passos",
    subtitle: "O que fazer agora",
    type: "steps",
    content: [
      "Finalizar análise do POC",
      "Definir estrutura e headcount",
      "Aprovar criação da área",
      "Recrutar/realocar time",
      "Definir KPIs e metas",
      "Iniciar operação"
    ]
  }
]

// Mercado Libre brand colors
const COLORS = {
  dark: "1A1A2E",
  yellow: "FFE600",
  blue: "3483FA",
  green: "00A650",
  orange: "FF9800",
  pink: "E91E63",
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

  // Define master slide
  pptx.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { color: COLORS.white },
    objects: [
      // Yellow top line
      { rect: { x: 0, y: 0, w: "100%", h: 0.05, fill: { color: COLORS.yellow } } },
      // Footer
      { rect: { x: 0, y: 5.3, w: "100%", h: 0.2, fill: { color: COLORS.dark } } },
      { text: { text: "Control Tower Monitoring LM | Mercado Libre", options: { x: 0.5, y: 5.35, fontSize: 8, color: COLORS.gray } } }
    ]
  })

  // Create slides
  slidesData.forEach((slideData, index) => {
    const slide = pptx.addSlide()

    if (slideData.type === "cover") {
      // Cover slide - dark background
      slide.background = { color: COLORS.dark }

      // Yellow top line
      slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.08, fill: { color: COLORS.yellow } })

      // Badge
      slide.addText("Mercado Libre | Envíos", {
        x: 0.5, y: 0.8, w: 2, h: 0.35,
        fill: { color: COLORS.yellow },
        color: COLORS.dark,
        fontSize: 10,
        bold: true,
        align: "center"
      })

      // Title
      slide.addText(slideData.title, {
        x: 0.5, y: 1.8, w: 9, h: 0.8,
        fontSize: 40,
        bold: true,
        color: COLORS.white
      })

      // Subtitle
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 2.6, w: 9, h: 0.6,
        fontSize: 32,
        bold: true,
        color: COLORS.yellow
      })

      // Description
      slide.addText(slideData.content as string, {
        x: 0.5, y: 3.4, w: 8, h: 0.5,
        fontSize: 16,
        color: "AAAAAA"
      })

      // Footer info
      slide.addText(slideData.footer || "", {
        x: 0.5, y: 4.8, w: 4, h: 0.3,
        fontSize: 12,
        color: COLORS.gray
      })
    } else if (slideData.type === "data") {
      // Data comparison slide
      slide.background = { color: COLORS.white }

      // Header
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 0.3, w: 9, h: 0.3,
        fontSize: 12,
        color: COLORS.blue,
        bold: true
      })

      slide.addText(slideData.title, {
        x: 0.5, y: 0.6, w: 9, h: 0.6,
        fontSize: 28,
        bold: true,
        color: COLORS.dark
      })

      // Data cards
      const dataContent = slideData.content as Array<{ group: string; value: string; description: string }>
      const cardWidth = 2.8
      const startX = 0.7

      dataContent.forEach((item, i) => {
        const x = startX + i * (cardWidth + 0.3)
        const bgColor = i === 0 ? COLORS.lightGray : i === 1 ? "FFF8E1" : "E8F5E9"
        const borderColor = i === 0 ? "DDDDDD" : i === 1 ? COLORS.yellow : COLORS.green

        // Card background
        slide.addShape("rect", {
          x, y: 1.5, w: cardWidth, h: 2.8,
          fill: { color: bgColor },
          line: { color: borderColor, width: 2 }
        })

        // Group label
        slide.addText(item.group, {
          x, y: 1.6, w: cardWidth, h: 0.3,
          fontSize: 11,
          bold: true,
          align: "center",
          color: COLORS.dark
        })

        // Description
        slide.addText(item.description, {
          x, y: 1.9, w: cardWidth, h: 0.25,
          fontSize: 10,
          align: "center",
          color: COLORS.gray
        })

        // Value
        slide.addText(item.value, {
          x, y: 2.4, w: cardWidth, h: 0.8,
          fontSize: 44,
          bold: true,
          align: "center",
          color: i === 2 ? COLORS.green : COLORS.dark
        })

        // DS Label
        slide.addText("DS (Delivery Success)", {
          x, y: 3.2, w: cardWidth, h: 0.25,
          fontSize: 9,
          align: "center",
          color: COLORS.gray
        })
      })

      // Footer
      slide.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
      slide.addText(slideData.footer || "", {
        x: 0.5, y: 5.0, w: 9, h: 0.3,
        fontSize: 11,
        color: COLORS.yellow
      })
    } else if (slideData.type === "mission") {
      // Mission slide - yellow background
      slide.background = { color: COLORS.yellow }

      // Header
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 0.3, w: 9, h: 0.3,
        fontSize: 12,
        color: COLORS.dark + "AA",
        bold: true
      })

      slide.addText(slideData.title, {
        x: 0.5, y: 0.6, w: 9, h: 0.6,
        fontSize: 32,
        bold: true,
        color: COLORS.dark
      })

      // Mission box
      slide.addShape("rect", {
        x: 0.5, y: 1.5, w: 9, h: 2,
        fill: { color: COLORS.dark }
      })

      slide.addText(slideData.content as string, {
        x: 0.7, y: 1.7, w: 8.6, h: 1.6,
        fontSize: 14,
        color: COLORS.white,
        valign: "middle"
      })

      // Footer
      slide.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
      slide.addText(slideData.footer || "", {
        x: 0.5, y: 5.0, w: 9, h: 0.3,
        fontSize: 10,
        color: COLORS.yellow
      })
    } else if (slideData.type === "quadrants") {
      // 4 quadrants slide
      slide.background = { color: COLORS.white }

      // Header
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 0.2, w: 9, h: 0.25,
        fontSize: 11,
        color: COLORS.blue,
        bold: true
      })

      slide.addText(slideData.title, {
        x: 0.5, y: 0.45, w: 9, h: 0.45,
        fontSize: 24,
        bold: true,
        color: COLORS.dark
      })

      // Quadrants
      const quadrants = slideData.content as Array<{ number: string; title: string; items: string[] }>
      const quadColors = [COLORS.blue, COLORS.orange, COLORS.green, COLORS.pink]
      const bgColors = ["E3F2FD", "FFF3E0", "E8F5E9", "FCE4EC"]

      quadrants.forEach((quad, i) => {
        const row = Math.floor(i / 2)
        const col = i % 2
        const x = 0.3 + col * 4.8
        const y = 1.0 + row * 2.1
        const w = 4.5
        const h = 2.0

        // Card background
        slide.addShape("rect", {
          x, y, w, h,
          fill: { color: bgColors[i] }
        })

        // Left border
        slide.addShape("rect", {
          x, y, w: 0.08, h,
          fill: { color: quadColors[i] }
        })

        // Number badge
        slide.addText(quad.number, {
          x: x + 0.15, y: y + 0.1, w: 0.35, h: 0.35,
          fill: { color: quadColors[i] },
          color: COLORS.white,
          fontSize: 14,
          bold: true,
          align: "center",
          valign: "middle"
        })

        // Title
        slide.addText(quad.title, {
          x: x + 0.6, y: y + 0.12, w: 3.7, h: 0.3,
          fontSize: 11,
          bold: true,
          color: COLORS.dark
        })

        // Items
        quad.items.forEach((item, j) => {
          slide.addText(`• ${item}`, {
            x: x + 0.2, y: y + 0.5 + j * 0.35, w: 4.1, h: 0.35,
            fontSize: 9,
            color: COLORS.dark
          })
        })
      })
    } else if (slideData.type === "table") {
      // Table slide - yellow background
      slide.background = { color: COLORS.yellow }

      // Header
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 0.3, w: 9, h: 0.3,
        fontSize: 12,
        color: COLORS.dark + "AA",
        bold: true
      })

      slide.addText(slideData.title, {
        x: 0.5, y: 0.55, w: 9, h: 0.5,
        fontSize: 26,
        bold: true,
        color: COLORS.dark
      })

      // Table
      const tableData = slideData.content as Array<{ alavanca: string; estimativa: string }>

      // Table header
      slide.addShape("rect", { x: 0.5, y: 1.2, w: 9, h: 0.4, fill: { color: COLORS.dark } })
      slide.addText("ALAVANCA", { x: 0.6, y: 1.25, w: 4.5, h: 0.3, fontSize: 10, bold: true, color: COLORS.white })
      slide.addText("ESTIMATIVA", { x: 5.2, y: 1.25, w: 4.2, h: 0.3, fontSize: 10, bold: true, color: COLORS.white })

      // Table rows
      tableData.forEach((row, i) => {
        const y = 1.6 + i * 0.55
        slide.addShape("rect", { x: 0.5, y, w: 9, h: 0.55, fill: { color: i % 2 === 0 ? COLORS.white : COLORS.lightGray } })
        slide.addText(row.alavanca, { x: 0.6, y: y + 0.1, w: 4.5, h: 0.35, fontSize: 10, color: COLORS.dark })
        slide.addText(row.estimativa, { x: 5.2, y: y + 0.1, w: 4.2, h: 0.35, fontSize: 10, color: COLORS.green, bold: true })
      })

      // Footer
      slide.addShape("rect", { x: 0, y: 4.8, w: "100%", h: 0.7, fill: { color: COLORS.dark } })
      slide.addText(slideData.footer || "", {
        x: 0.5, y: 5.0, w: 9, h: 0.3,
        fontSize: 10,
        color: COLORS.yellow
      })
    } else if (slideData.type === "steps") {
      // Steps slide
      slide.background = { color: COLORS.dark }

      // Yellow top line
      slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.yellow } })

      // Header
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 0.4, w: 9, h: 0.3,
        fontSize: 12,
        color: COLORS.yellow,
        bold: true
      })

      slide.addText(slideData.title, {
        x: 0.5, y: 0.7, w: 9, h: 0.6,
        fontSize: 32,
        bold: true,
        color: COLORS.white
      })

      // Steps
      const steps = slideData.content as string[]
      steps.forEach((step, i) => {
        const y = 1.6 + i * 0.55

        // Number circle
        slide.addText(String(i + 1), {
          x: 0.5, y, w: 0.4, h: 0.4,
          fill: { color: COLORS.yellow },
          color: COLORS.dark,
          fontSize: 14,
          bold: true,
          align: "center",
          valign: "middle"
        })

        // Step text
        slide.addText(step, {
          x: 1.1, y: y + 0.05, w: 8, h: 0.35,
          fontSize: 16,
          color: COLORS.white
        })
      })
    } else {
      // Default content slide
      slide.background = { color: COLORS.white }

      // Yellow top line
      slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: COLORS.yellow } })

      // Header
      slide.addText(slideData.subtitle, {
        x: 0.5, y: 0.3, w: 9, h: 0.3,
        fontSize: 12,
        color: COLORS.blue,
        bold: true
      })

      slide.addText(slideData.title, {
        x: 0.5, y: 0.6, w: 9, h: 0.6,
        fontSize: 28,
        bold: true,
        color: COLORS.dark
      })

      // Content
      slide.addText(slideData.content as string, {
        x: 0.5, y: 1.4, w: 9, h: 3,
        fontSize: 14,
        color: COLORS.dark,
        valign: "top"
      })

      // Footer
      slide.addShape("rect", { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: COLORS.dark } })
    }

    // Slide number (except cover)
    if (index > 0) {
      slide.addText(String(index), {
        x: 9.2, y: 5.05, w: 0.5, h: 0.3,
        fontSize: 10,
        color: COLORS.gray
      })
    }
  })

  // Download the file
  await pptx.writeFile({ fileName: "Control_Tower_Monitoring_LM.pptx" })
}
