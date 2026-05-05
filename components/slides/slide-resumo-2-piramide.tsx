import { ArrowRight, Layers, Cog, Brain, Target, TrendingUp, AlertTriangle } from "lucide-react"

export default function SlideResumo2Piramide() {
  return (
    <div className="w-full h-full bg-[#1A1A2E] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pt-3 sm:pt-4 lg:pt-6 pb-1 lg:pb-2 shrink-0">
        <div className="flex items-center gap-2 text-[#FFE600] text-[10px] sm:text-xs lg:text-sm font-medium mb-1 lg:mb-2">
          <Layers className="w-3 h-3 lg:w-4 lg:h-4" />
          <span>A Nova Estrutura da CTM</span>
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white">
          Inversão da Pirâmide: Da Base Operacional para Base Tática
        </h2>
      </div>

      {/* Main Content - Two Pyramids */}
      <div className="flex-1 px-4 sm:px-6 lg:px-10 py-2 lg:py-4 min-h-0">
        <div className="grid grid-cols-2 gap-4 lg:gap-8 h-full items-center">
          
          {/* ANTES - Pirâmide Normal */}
          <div className="flex flex-col items-center">
            <h3 className="text-white/60 text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-4 uppercase tracking-wide">
              Antes — CTM Operacional
            </h3>
            
            <div className="relative w-full max-w-xs">
              {/* Topo - Estratégico (pequeno) */}
              <div className="flex justify-center mb-1">
                <div className="bg-[#E91E63] rounded-t-lg px-4 lg:px-6 py-2 lg:py-3 text-center w-24 lg:w-32">
                  <Brain className="w-3 h-3 lg:w-4 lg:h-4 text-white mx-auto mb-0.5" />
                  <p className="text-white text-[8px] lg:text-[10px] font-bold">ESTRATÉGICO</p>
                  <p className="text-white/70 text-[7px] lg:text-[8px]">5%</p>
                </div>
              </div>
              
              {/* Meio - Tático (médio) */}
              <div className="flex justify-center mb-1">
                <div className="bg-[#FF9800] px-6 lg:px-10 py-2 lg:py-3 text-center w-36 lg:w-48">
                  <Target className="w-3 h-3 lg:w-4 lg:h-4 text-white mx-auto mb-0.5" />
                  <p className="text-white text-[8px] lg:text-[10px] font-bold">TÁTICO</p>
                  <p className="text-white/70 text-[7px] lg:text-[8px]">15%</p>
                </div>
              </div>
              
              {/* Base - Operacional (grande) */}
              <div className="flex justify-center">
                <div className="bg-[#F44336] rounded-b-lg px-8 lg:px-14 py-3 lg:py-4 text-center w-full">
                  <Cog className="w-4 h-4 lg:w-5 lg:h-5 text-white mx-auto mb-0.5" />
                  <p className="text-white text-[9px] lg:text-xs font-bold">OPERACIONAL</p>
                  <p className="text-white/70 text-[8px] lg:text-[9px]">80% do tempo</p>
                  <div className="mt-1 lg:mt-2 space-y-0.5 text-[7px] lg:text-[8px] text-white/60">
                    <p>Push direto drivers</p>
                    <p>Monitoramento reativo</p>
                    <p>Apagar incêndios</p>
                  </div>
                </div>
              </div>
              
              {/* Indicator */}
              <div className="absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <AlertTriangle className="w-4 h-4 lg:w-5 lg:h-5 text-[#F44336]" />
                  <p className="text-[#F44336] text-[7px] lg:text-[8px] font-medium -rotate-90 origin-center whitespace-nowrap" style={{marginTop: "220px", marginBottom: "54px", marginRight: "-14px", paddingTop: "-41px", paddingBottom: "90px", paddingLeft: "-90px", paddingRight: "-85px"}}>INSUSTENTÁVEL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow de Transição */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center">
            <div className="bg-[#FFE600] rounded-full p-2 lg:p-3 shadow-lg">
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#1A1A2E]" />
            </div>
            <p className="text-[#FFE600] text-[8px] lg:text-[10px] font-bold mt-1 lg:mt-2 uppercase">POC</p>
          </div>

          {/* DEPOIS - Pirâmide Invertida */}
          <div className="flex flex-col items-center">
            <h3 className="text-[#00A650] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-4 uppercase tracking-wide">
              Depois — CTM Inteligência
            </h3>
            
            <div className="relative w-full max-w-xs">
              {/* Topo - Operacional (pequeno, delegado) */}
              <div className="flex justify-center mb-1">
                <div className="bg-[#666666]/50 rounded-t-lg px-4 lg:px-6 py-2 lg:py-3 text-center w-24 lg:w-32 border border-dashed border-white/30">
                  <Cog className="w-3 h-3 lg:w-4 lg:h-4 text-white/50 mx-auto mb-0.5" />
                  <p className="text-white/50 text-[8px] lg:text-[10px] font-bold">OPERACIONAL</p>
                  <p className="text-white/40 text-[7px] lg:text-[8px]">Delegado aos MLPs</p>
                </div>
              </div>
              
              {/* Meio - Estratégico (médio) */}
              <div className="flex justify-center mb-1">
                <div className="bg-[#E91E63] px-6 lg:px-10 py-2 lg:py-3 text-center w-36 lg:w-48">
                  <Brain className="w-3 h-3 lg:w-4 lg:h-4 text-white mx-auto mb-0.5" />
                  <p className="text-white text-[8px] lg:text-[10px] font-bold">ESTRATÉGICO</p>
                  <p className="text-white/70 text-[7px] lg:text-[8px]">30%</p>
                  <p className="text-white/60 text-[7px] lg:text-[8px]">Decisões de alocação</p>
                </div>
              </div>
              
              {/* Base - Tático (grande, nova base) */}
              <div className="flex justify-center">
                <div className="bg-[#3483FA] rounded-b-lg px-8 lg:px-14 py-3 lg:py-4 text-center w-full border-2 border-[#FFE600]">
                  <Target className="w-4 h-4 lg:w-5 lg:h-5 text-white mx-auto mb-0.5" />
                  <p className="text-white text-[9px] lg:text-xs font-bold">TÁTICO</p>
                  <p className="text-[#FFE600] text-[8px] lg:text-[9px] font-medium">70% do tempo</p>
                  <div className="mt-1 lg:mt-2 space-y-0.5 text-[7px] lg:text-[8px] text-white/80">
                    <p>Dashboard end-to-end</p>
                    <p>Governança MLPs</p>
                    <p>Feedback Roteirização</p>
                  </div>
                </div>
              </div>
              
              {/* Indicator */}
              <div className="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-[#00A650]" />
                  <p className="text-[#00A650] text-[7px] lg:text-[8px] font-medium rotate-90 origin-center whitespace-nowrap" style={{marginTop: "66px", marginBottom: "-35px", marginLeft: "-117px", marginRight: "-132px", paddingBottom: "6px", paddingLeft: "104px"}}>ESCALÁVEL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="px-4 sm:px-6 lg:px-10 py-2 lg:py-3">
        <div className="bg-[#FFE600] rounded-lg p-2 lg:p-3">
          <div className="flex items-center gap-2 lg:gap-3">
            <Layers className="w-4 h-4 lg:w-5 lg:h-5 text-[#1A1A2E] shrink-0" />
            <div>
              <p className="text-[#1A1A2E] font-bold text-[10px] sm:text-xs lg:text-sm">A Inversão da Pirâmide</p>
              <p className="text-[#333333] text-[9px] sm:text-[10px] lg:text-xs">
                O <span className="font-bold">Tático</span> se torna a base da atuação da CTM. O Operacional é delegado aos MLPs. 
                O Estratégico ganha espaço para decisões de alto impacto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - 4 Frentes */}
      <div className="px-4 sm:px-6 lg:px-10 py-2 lg:py-3 bg-white/5 border-t border-white/10 shrink-0">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] sm:text-[9px] lg:text-[10px]">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#3483FA] rounded-full" />
              <span className="text-white/80">Inteligência de Dados</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#FF9800] rounded-full" />
              <span className="text-white/80">Interface Roteirização</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#00A650] rounded-full" />
              <span className="text-white/80">Governança MLPs</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#E91E63] rounded-full" />
              <span className="text-white/80">Decisões Estratégicas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
