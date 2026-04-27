import { Target, Eye, BarChart3, Navigation, ChevronDown } from "lucide-react"

export default function Slide4Missao() {
  return (
    <div className="w-full h-full bg-[#FFE600] flex flex-col relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 lg:top-10 right-5 lg:right-10 w-20 lg:w-40 h-20 lg:h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 lg:bottom-20 left-5 lg:left-10 w-16 lg:w-32 h-16 lg:h-32 bg-white/10 rounded-full blur-2xl" />

      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-10 pb-2 lg:pb-4 relative z-10">
        <div className="flex items-center gap-2 text-[#1A1A2E]/70 text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <Target className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Missão e Posicionamento</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          Missão da Nova Área
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-4 flex flex-col justify-center items-center relative z-10">
        {/* Mission Statement */}
        <div className="bg-[#1A1A2E] rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-3 lg:mb-5 max-w-4xl">
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white leading-relaxed">
            &ldquo;Ser a <span className="text-[#FFE600] font-semibold">fonte única de inteligência end-to-end</span> da
            operação Last Mile, gerando visibilidade, alertas
            antecipados e decisões orientadas a dados para
            reduzir custos, melhorar o DS e governar os MLPs —{" "}
            <span className="text-white/70">sem atuar na execução operacional do dia a dia.</span>&rdquo;
          </p>
        </div>

        {/* Positioning Diagram */}
        <div className="flex flex-col items-center">
          {/* Main Box */}
          <div className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-5 shadow-lg border-2 border-[#1A1A2E] w-full max-w-xl">
            <div className="text-center">
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#1A1A2E] mb-1 lg:mb-2">
                ÁREA TÁTICA & ESTRATÉGICA CTM LM
              </h3>
              <div className="flex items-center justify-center gap-2 lg:gap-4 text-[#3483FA]">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="font-medium text-[10px] sm:text-xs lg:text-sm">Enxerga</span>
                </div>
                <span className="text-[#1A1A2E] text-xs">▸</span>
                <div className="flex items-center gap-1 lg:gap-2">
                  <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="font-medium text-[10px] sm:text-xs lg:text-sm">Analisa</span>
                </div>
                <span className="text-[#1A1A2E] text-xs">▸</span>
                <div className="flex items-center gap-1 lg:gap-2">
                  <Navigation className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="font-medium text-[10px] sm:text-xs lg:text-sm">Direciona</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center my-1 lg:my-2">
            <ChevronDown className="w-4 h-4 lg:w-6 lg:h-6 text-[#1A1A2E]" />
            <span className="text-[#1A1A2E]/70 text-[8px] sm:text-[10px] lg:text-xs font-medium">governa / orienta</span>
          </div>

          {/* MLPs Box */}
          <div className="bg-white/80 rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-lg border border-[#1A1A2E]/20 w-full max-w-xl">
            <div className="text-center">
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#1A1A2E] mb-0.5 lg:mb-1">
                MLPs (Execução)
              </h3>
              <p className="text-[#666666] text-[8px] sm:text-[10px] lg:text-xs">
                Monitoram, gerenciam alertas e reportam para a CTM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-5 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#FFE600] rounded-full shrink-0" />
          <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
            <span className="text-[#FFE600] font-medium">Importante:</span> A área NÃO faz monitoramento de rota no dia a dia. Faz inteligência sobre o monitoramento.
          </p>
        </div>
      </div>
    </div>
  )
}
