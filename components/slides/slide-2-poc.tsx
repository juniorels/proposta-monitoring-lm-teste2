import { TrendingUp, Package, CheckCircle2 } from "lucide-react"

export default function Slide2POC() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-10 pb-3 lg:pb-6">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>O Ponto de Partida</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          Os primeiros 8 dias do POC já nos dão um sinal claro
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base xl:text-lg">
          A delegação aos MLPs não prejudica o DS, e pode melhorá-lo
        </p>
      </div>

      {/* Main Content - 3 Cards */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 pb-3 lg:pb-6 min-h-0">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 h-full">
          {/* Card A - BAU */}
          <div className="bg-[#F5F5F5] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col border-2 border-[#DDDDDD]">
            <div className="flex items-center justify-between mb-2 lg:mb-4">
              <span className="bg-[#666666] text-white text-[8px] sm:text-[10px] lg:text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-full">
                GRUPO A
              </span>
              <span className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">BAU</span>
            </div>
            <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-[#333333] mb-1 lg:mb-2">MELI monitora</h3>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-center py-2 sm:py-4 lg:py-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#333333]">97.2%</p>
                <p className="text-[8px] sm:text-[10px] lg:text-sm text-[#666666] mt-1">DS (Delivery Success)</p>
              </div>
              <div className="space-y-1 lg:space-y-2 mt-2 lg:mt-4">
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">vs Baseline</span>
                  <span className="text-[#00A650] font-semibold">+0.83pp</span>
                </div>
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">Pacotes</span>
                  <span className="text-[#333333] font-medium">294.7k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card B - MLP sem capacitação */}
          <div className="bg-[#FFF8E1] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col border-2 border-[#FFE600]">
            <div className="flex items-center justify-between mb-2 lg:mb-4">
              <span className="bg-[#FFE600] text-[#1A1A2E] text-[8px] sm:text-[10px] lg:text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-full">
                GRUPO B
              </span>
              <span className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">MLP</span>
            </div>
            <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-[#333333] mb-1 lg:mb-2">Sem capacitação</h3>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-center py-2 sm:py-4 lg:py-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#333333]">97.4%</p>
                <p className="text-[8px] sm:text-[10px] lg:text-sm text-[#666666] mt-1">DS (Delivery Success)</p>
              </div>
              <div className="space-y-1 lg:space-y-2 mt-2 lg:mt-4">
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">vs Grupo A</span>
                  <span className="text-[#00A650] font-semibold">+0.20pp</span>
                </div>
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">vs Baseline</span>
                  <span className="text-[#00A650] font-semibold">+0.54pp</span>
                </div>
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">Pacotes</span>
                  <span className="text-[#333333] font-medium">340.8k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card C - MLP+ com capacitação */}
          <div className="bg-[#E8F5E9] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col border-2 border-[#00A650]">
            <div className="flex items-center justify-between mb-2 lg:mb-4">
              <span className="bg-[#00A650] text-white text-[8px] sm:text-[10px] lg:text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-full">
                GRUPO C
              </span>
              <span className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">MLP+</span>
            </div>
            <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-[#333333] mb-1 lg:mb-2">Com capacitação</h3>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-center py-2 sm:py-4 lg:py-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00A650]">97.5%</p>
                <p className="text-[8px] sm:text-[10px] lg:text-sm text-[#666666] mt-1">DS (Delivery Success)</p>
              </div>
              <div className="space-y-1 lg:space-y-2 mt-2 lg:mt-4">
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">vs Grupo A</span>
                  <span className="text-[#00A650] font-semibold">+0.30pp</span>
                </div>
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">vs Baseline</span>
                  <span className="text-[#00A650] font-semibold">+0.43pp</span>
                </div>
                <div className="flex justify-between text-[8px] sm:text-[10px] lg:text-sm">
                  <span className="text-[#666666]">Pacotes</span>
                  <span className="text-[#333333] font-medium">343.7k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Insights */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-5 bg-[#1A1A2E] shrink-0">
        <div className="flex flex-wrap items-start gap-3 sm:gap-4 lg:gap-8">
          <div className="flex items-center gap-1.5 lg:gap-2 text-[#FFE600] text-[8px] sm:text-[10px] lg:text-sm shrink-0">
            <Package className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">MLB – Brasil | Semanas 06/04 – 14/04</span>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-[8px] sm:text-[10px] lg:text-sm text-white/80">
            <div className="flex items-center gap-1.5 lg:gap-2">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#00A650]" />
              <span>MLPs com ferramentas superam BAU em +0.30pp</span>
            </div>
            <div className="flex items-center gap-1.5 lg:gap-2">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#00A650]" />
              <span>Volume MLP é 16% maior que BAU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
