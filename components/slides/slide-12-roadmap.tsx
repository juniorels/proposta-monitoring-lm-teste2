import { Route, CheckCircle2, ArrowRight, Flag } from "lucide-react"

export default function Slide12Roadmap() {
  const fases = [
    {
      fase: "FASE 1",
      titulo: "FUNDAÇÃO",
      periodo: "Agora → Mai",
      color: "#3483FA",
      bgColor: "#E3F2FD",
      items: [
        "Concluir POC (4 semanas)",
        "Definir KPIs e produtos da área",
        "Estruturar Dashboard baseado no POC dashboard",
        "Definir estrutura da equipe"
      ],
      marco: "Dados POC validados"
    },
    {
      fase: "FASE 2",
      titulo: "GOVERNANÇA",
      periodo: "Jun → Jul",
      color: "#00A650",
      bgColor: "#E8F5E9",
      items: [
        "Lançar Scorecard MLP oficial",
        "Iniciar feedback loop com Roteirização",
        "Dashboard end-to-end v1 live",
        "1° Business Review LM completo"
      ],
      marco: "Scorecard + Dashboard live"
    },
    {
      fase: "FASE 3",
      titulo: "ESCALA",
      periodo: "Ago → Out",
      color: "#FF9800",
      bgColor: "#FFF8E1",
      items: [
        "Expandir POC para todos os SVCs",
        "Formalizar rituais com Roteirização",
        "Consolidar produtos da área",
        "1° Análise de custo por MLP"
      ],
      marco: "Área consolidada"
    },
    {
      fase: "FASE 4",
      titulo: "MATURIDADE",
      periodo: "Nov+",
      color: "#9C27B0",
      bgColor: "#F3E5F5",
      items: [
        "Modelos preditivos de DS e custo",
        "Alertas automáticos de degradação de MLP",
        "Scorecard contratual com MLPs",
        "Simulações de cenário (what-if)"
      ],
      marco: "Previsão de DS/custo"
    }
  ]

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 lg:pt-8 pb-2 lg:pb-4">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <Route className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Roadmap de Implantação</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          Roadmap — da conclusão do POC à área em plena operação
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base xl:text-lg">
          Construído sobre a fundação que o POC já está criando
        </p>
      </div>

      {/* Main Content - Timeline */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-4 min-h-0">
        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 h-full">
          {fases.map((fase, index) => (
            <div key={index} className="flex flex-col">
              {/* Phase Card */}
              <div
                className="rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-5 flex-1 flex flex-col"
                style={{ backgroundColor: fase.bgColor }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span
                    className="text-[8px] sm:text-[10px] lg:text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded"
                    style={{ backgroundColor: fase.color, color: 'white' }}
                  >
                    {fase.fase}
                  </span>
                  {index < fases.length - 1 && (
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#999999]" />
                  )}
                </div>

                <h3 className="font-bold text-[#1A1A2E] text-xs sm:text-sm lg:text-lg mb-0.5 lg:mb-1">{fase.titulo}</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666] mb-2 lg:mb-4">{fase.periodo}</p>

                {/* Items */}
                <div className="space-y-1 lg:space-y-2 flex-1">
                  {fase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-1 lg:gap-2">
                      <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4 mt-0.5 shrink-0" style={{ color: fase.color }} />
                      <span className="text-[8px] sm:text-[10px] lg:text-xs text-[#333333]">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Marco */}
                <div
                  className="mt-2 lg:mt-4 p-1.5 sm:p-2 lg:p-3 rounded-lg border-2"
                  style={{ borderColor: fase.color, backgroundColor: 'white' }}
                >
                  <div className="flex items-center gap-1 lg:gap-2">
                    <Flag className="w-3 h-3 lg:w-4 lg:h-4" style={{ color: fase.color }} />
                    <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold" style={{ color: fase.color }}>MARCO:</span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#333333] mt-0.5 lg:mt-1 font-medium">{fase.marco}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 sm:px-8 lg:px-12 py-1 lg:py-2 shrink-0">
        <div className="flex items-center gap-1 lg:gap-2">
          {fases.map((fase, index) => (
            <div key={index} className="flex-1 flex items-center">
              <div
                className={`h-1 lg:h-2 flex-1 rounded-full ${index === 0 ? 'opacity-100' : 'opacity-30'}`}
                style={{ backgroundColor: fase.color }}
              />
              {index < fases.length - 1 && (
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#CCCCCC] mx-0.5 lg:mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-4 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2">
          <Flag className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
          <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
            A <span className="text-[#FFE600] font-medium">Fase 1 está acontecendo agora</span> — o POC é a fundação de tudo que vem depois.
          </p>
        </div>
      </div>
    </div>
  )
}
