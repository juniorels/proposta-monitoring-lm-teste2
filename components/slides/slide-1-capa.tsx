import { Truck, BarChart3, Target } from "lucide-react"

export default function Slide1Capa() {
  return (
    <div className="w-full h-full bg-[#1A1A2E] flex flex-col relative overflow-hidden">
      {/* Yellow accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 lg:h-1.5 bg-[#FFE600]" />

      {/* Decorative elements */}
      <div className="absolute top-10 lg:top-20 right-10 lg:right-20 w-32 lg:w-64 h-32 lg:h-64 bg-[#FFE600]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 lg:bottom-20 left-10 lg:left-20 w-24 lg:w-48 h-24 lg:h-48 bg-[#3483FA]/10 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-6 lg:py-12 relative z-10">
        {/* Top badge */}
        <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-8">
          <div className="flex items-center gap-1.5 lg:gap-2 bg-[#FFE600] text-[#1A1A2E] px-2 sm:px-3 lg:px-4 py-1 lg:py-2 rounded-full">
            <Truck className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            <span className="font-semibold text-[10px] sm:text-xs lg:text-sm">Mercado Libre | Envíos</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 lg:mb-6 max-w-4xl">
          <span className="text-white block">Control Tower Monitoring LM</span>
          <span className="text-[#FFE600] block">Área Tática & Estratégica</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/70 mb-6 lg:mb-12 max-w-3xl">
          Da operação reativa à inteligência proativa: uma nova forma de monitorar a última milha
        </p>

        {/* Info cards */}
        <div className="flex flex-wrap gap-3 lg:gap-6">
          <div className="flex items-center gap-2 lg:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-3 lg:px-5 py-2 lg:py-3 rounded-lg">
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#3483FA]" />
            <span className="text-white/80 text-[10px] sm:text-xs lg:text-sm">Control Tower — Proposta de Estrutura</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-3 lg:px-5 py-2 lg:py-3 rounded-lg">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00A650]" />
            <span className="text-white/80 text-[10px] sm:text-xs lg:text-sm">Abril 2026</span>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-6 sm:px-10 lg:px-16 py-3 lg:py-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFE600] rounded-lg flex items-center justify-center">
              <span className="font-bold text-[#1A1A2E] text-xs sm:text-sm lg:text-lg">M</span>
            </div>
            <div>
              <p className="text-white/40 text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-wider">Contexto</p>
              <p className="text-white/70 text-[10px] sm:text-xs lg:text-sm">
                POC de delegação do monitoreo operacional aos MLPs em andamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
