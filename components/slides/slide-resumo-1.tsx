import { Target, TrendingUp, CheckCircle2, Compass, Wrench, ArrowRight } from "lucide-react"

export default function SlideResumo1() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pt-3 sm:pt-4 lg:pt-6 pb-1 lg:pb-2 shrink-0 border-b-4 border-[#FFE600]">
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#1A1A2E]">
          A Jornada da CTM: De Centro Operacional para Torre de Inteligência
        </h2>
      </div>

      {/* Main Content - Flow */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-2 lg:py-4 min-h-0">
        <div className="grid grid-cols-5 gap-2 lg:gap-3 h-full">
          
          {/* 1. CONTEXTO */}
          <div className="bg-[#F5F5F5] rounded-lg p-2 lg:p-3 flex flex-col border-t-4 border-[#666666]">
            <div className="flex items-center gap-1.5 mb-2 lg:mb-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#666666] rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold">
                1
              </div>
              <h3 className="font-bold text-[#333333] text-[10px] lg:text-xs">CONTEXTO</h3>
            </div>
            
            <div className="space-y-1.5 lg:space-y-2 flex-1">
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#E0E0E0]">
                <p className="text-[8px] lg:text-[10px] text-[#333333] font-medium">CTM Atual</p>
                <p className="text-[8px] lg:text-[10px] text-[#666666]">Monitoramento reativo, foco no dia a dia</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#E0E0E0]">
                <p className="text-[8px] lg:text-[10px] text-[#333333] font-medium">Oportunidade</p>
                <p className="text-[8px] lg:text-[10px] text-[#666666]">Delegar operacional aos MLPs libera espaço estratégico</p>
              </div>
              <div className="bg-[#E8F5E9] rounded p-1.5 lg:p-2 border border-[#00A650]">
                <p className="text-[8px] lg:text-[10px] text-[#00A650] font-medium">POC validou:</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">MLPs +0.30pp DS vs BAU</p>
              </div>
            </div>
          </div>

          {/* 2. METAS & MÉTRICAS */}
          <div className="bg-[#E3F2FD] rounded-lg p-2 lg:p-3 flex flex-col border-t-4 border-[#3483FA]">
            <div className="flex items-center gap-1.5 mb-2 lg:mb-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#3483FA] rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold">
                2
              </div>
              <Target className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA]" />
              <h3 className="font-bold text-[#333333] text-[10px] lg:text-xs">METAS</h3>
            </div>
            
            <div className="space-y-1.5 lg:space-y-2 flex-1">
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#90CAF9]">
                <p className="text-[8px] lg:text-[10px] text-[#3483FA] font-medium">DS Target</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Manter ou melhorar DS com delegação</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#90CAF9]">
                <p className="text-[8px] lg:text-[10px] text-[#3483FA] font-medium">Custo</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Reduzir custo/entrega via dados</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#90CAF9]">
                <p className="text-[8px] lg:text-[10px] text-[#3483FA] font-medium">Governança</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Scorecard + feedback loop</p>
              </div>
            </div>
          </div>

          {/* 3. CRITÉRIOS DE SUCESSO */}
          <div className="bg-[#E8F5E9] rounded-lg p-2 lg:p-3 flex flex-col border-t-4 border-[#00A650]">
            <div className="flex items-center gap-1.5 mb-2 lg:mb-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#00A650] rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold">
                3
              </div>
              <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650]" />
              <h3 className="font-bold text-[#333333] text-[10px] lg:text-xs">SUCESSO</h3>
            </div>
            
            <div className="space-y-1.5 lg:space-y-2 flex-1">
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#A5D6A7]">
                <p className="text-[8px] lg:text-[10px] text-[#00A650] font-bold">Alerta</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">DS B/C cai ≥1.5pp vs A (1 sem)</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#A5D6A7]">
                <p className="text-[8px] lg:text-[10px] text-[#FF9800] font-bold">Pausa</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">DS B/C cai ≥2pp vs A (2 sem)</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#A5D6A7]">
                <p className="text-[8px] lg:text-[10px] text-[#F44336] font-bold">Stop</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">DS absoluto &lt; 95%</p>
              </div>
            </div>
          </div>

          {/* 4. DECISÕES */}
          <div className="bg-[#FFF3E0] rounded-lg p-2 lg:p-3 flex flex-col border-t-4 border-[#FF9800]">
            <div className="flex items-center gap-1.5 mb-2 lg:mb-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#FF9800] rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold">
                4
              </div>
              <Compass className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF9800]" />
              <h3 className="font-bold text-[#333333] text-[10px] lg:text-xs">DECISÕES</h3>
            </div>
            
            <div className="space-y-1.5 lg:space-y-2 flex-1">
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#FFE082]">
                <p className="text-[8px] lg:text-[10px] text-[#FF9800] font-medium">Delegar</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Monitoreo LM, PNR, Coletas</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#FFE082]">
                <p className="text-[8px] lg:text-[10px] text-[#FF9800] font-medium">Reter</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">RTS, Sinistros, Ambulâncias</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#FFE082]">
                <p className="text-[8px] lg:text-[10px] text-[#FF9800] font-medium">Transformar</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Análise → Inteligência LM</p>
              </div>
            </div>
          </div>

          {/* 5. PRINCÍPIOS & FERRAMENTAS */}
          <div className="bg-[#FCE4EC] rounded-lg p-2 lg:p-3 flex flex-col border-t-4 border-[#E91E63]">
            <div className="flex items-center gap-1.5 mb-2 lg:mb-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#E91E63] rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold">
                5
              </div>
              <Wrench className="w-3 h-3 lg:w-4 lg:h-4 text-[#E91E63]" />
              <h3 className="font-bold text-[#333333] text-[10px] lg:text-xs">FERRAMENTAS</h3>
            </div>
            
            <div className="space-y-1.5 lg:space-y-2 flex-1">
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#F8BBD9]">
                <p className="text-[8px] lg:text-[10px] text-[#E91E63] font-medium">Dashboard E2E</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Gaiolas até RTS</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#F8BBD9]">
                <p className="text-[8px] lg:text-[10px] text-[#E91E63] font-medium">Scorecard MLP</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Governança ativa</p>
              </div>
              <div className="bg-white rounded p-1.5 lg:p-2 border border-[#F8BBD9]">
                <p className="text-[8px] lg:text-[10px] text-[#E91E63] font-medium">Interface Roteirização</p>
                <p className="text-[8px] lg:text-[10px] text-[#333333]">Feedback loop formal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Arrows (visual connection) */}
        <div className="flex justify-center items-center mt-2 lg:mt-3 gap-2">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-8 lg:w-12 h-0.5 bg-[#FFE600]" />
              <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-2 lg:py-3 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
          <p className="text-white/80 text-[9px] sm:text-[10px] lg:text-xs">
            <span className="text-[#FFE600] font-medium">Resultado:</span> CTM deixa de ser Centro Operacional e passa a ser{" "}
            <span className="text-white font-bold">Torre de Inteligência da Última Milha</span>
          </p>
        </div>
      </div>
    </div>
  )
}
