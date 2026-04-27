import { Users, ArrowRight, Settings, Code, MapPin, Star, Truck } from "lucide-react"

export default function Slide8Stakeholders() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-3 sm:pt-4 lg:pt-6 pb-1 lg:pb-2">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-1 lg:mb-2">
          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Mapa de Stakeholders e Interações</span>
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#1A1A2E] mb-0.5 lg:mb-1">
          A CTM como hub de inteligência entre todos os stakeholders
        </h2>
        <p className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">
          Cada stakeholder recebe e entrega algo específico
        </p>
      </div>

      {/* Main Content - Radial Diagram */}
      <div className="flex-1 px-4 sm:px-6 lg:px-10 py-1 lg:py-2 flex items-center justify-center min-h-0">
        <div className="relative w-full max-w-3xl h-full min-h-[200px] lg:min-h-[320px]">
          {/* Center - CT */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 bg-[#FFE600] rounded-full flex items-center justify-center shadow-xl border-2 lg:border-3 border-[#1A1A2E]">
              <div className="text-center">
                <p className="font-bold text-[#1A1A2E] text-[8px] sm:text-[10px] lg:text-sm">CTM</p>
                <p className="font-bold text-[#1A1A2E] text-[8px] sm:text-[10px] lg:text-sm">ÁREA</p>
                <p className="font-bold text-[#1A1A2E] text-[8px] sm:text-[10px] lg:text-sm">TÁTICA &</p>
                <p className="font-bold text-[#1A1A2E] text-[8px] sm:text-[10px] lg:text-sm">ESTRATÉG.</p>
              </div>
            </div>
          </div>

          {/* Top - Roteirização */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="bg-[#1A1A2E] rounded-lg p-1.5 sm:p-2 lg:p-2.5 w-24 sm:w-32 lg:w-40">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                <Settings className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-[#FFE600]" />
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">ROTEIRIZAÇÃO</h4>
              </div>
              <div className="space-y-0.5 text-[7px] sm:text-[8px] lg:text-[10px]">
                <p className="text-[#FFE600]">◄ Feedback de desvio</p>
                <p className="text-white/70">► Parâmetros ajustados</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-3 lg:h-6 bg-[#1A1A2E]" />
            </div>
          </div>

          {/* Left - SVC */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <div className="bg-[#3483FA] rounded-lg p-1.5 sm:p-2 lg:p-2.5 w-20 sm:w-24 lg:w-32">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-white" />
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">SVC</h4>
              </div>
              <div className="space-y-0.5 text-[7px] sm:text-[8px] lg:text-[10px]">
                <p className="text-white/90">(Operações)</p>
                <p className="text-white/70">Alertas táticos</p>
              </div>
            </div>
          </div>

          {/* Right - MLPs */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <div className="bg-[#00A650] rounded-lg p-1.5 sm:p-2 lg:p-2.5 w-20 sm:w-24 lg:w-32">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                <Truck className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-white" />
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">MLPs</h4>
              </div>
              <div className="space-y-0.5 text-[7px] sm:text-[8px] lg:text-[10px]">
                <p className="text-white/90">Scorecard</p>
                <p className="text-white/70">Governança</p>
                <p className="text-white/70">Treinamento</p>
              </div>
            </div>
          </div>

          {/* Bottom Left - IT */}
          <div className="absolute bottom-1 lg:bottom-2 left-4 sm:left-8 lg:left-12">
            <div className="bg-[#9C27B0] rounded-lg p-1.5 sm:p-2 lg:p-2.5 w-16 sm:w-20 lg:w-28">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-white" />
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">IT</h4>
              </div>
              <div className="space-y-0.5 text-[7px] sm:text-[8px] lg:text-[10px]">
                <p className="text-white/70">Pipelines</p>
                <p className="text-white/70">APIs</p>
              </div>
            </div>
          </div>

          {/* Bottom Center - NODOS / MELI EXTRA */}
          <div className="absolute bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2">
            <div className="bg-[#FF9800] rounded-lg p-1.5 sm:p-2 lg:p-2.5 w-20 sm:w-24 lg:w-32">
              <div className="flex items-center justify-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-white" />
              </div>
              <div className="flex flex-col items-center text-center mb-0.5 lg:mb-1">
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">NODOS</h4>
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">"MELI EXTRA"</h4>
              </div>
              <div className="space-y-0.5 text-[7px] sm:text-[8px] lg:text-[10px] text-center">
                <p className="text-white/70">Alertas</p>
                <p className="text-white/70">Share por loyalty</p>
              </div>
            </div>
          </div>

          {/* Bottom Right - NODOs */}
          <div className="absolute bottom-1 lg:bottom-2 right-4 sm:right-8 lg:right-12">
            <div className="bg-[#607D8B] rounded-lg p-1.5 sm:p-2 lg:p-2.5 w-20 sm:w-24 lg:w-32">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-white" />
                <h4 className="font-bold text-white text-[8px] sm:text-[10px] lg:text-xs">NODOs</h4>
              </div>
              <div className="space-y-0.5 text-[7px] sm:text-[8px] lg:text-[10px]">
                <p className="text-white/70">XPT+PLACES</p>
                <p className="text-white/70">Tempos de permanencias</p>
              </div>
            </div>
          </div>

          {/* Connection Lines - Visual only */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Top - Roteirização to Center */}
            <line x1="50%" y1="18%" x2="50%" y2="38%" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="4,4" />
            {/* Left - SVC to Center */}
            <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="4,4" />
            {/* Right - MLPs to Center */}
            <line x1="80%" y1="50%" x2="60%" y2="50%" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="4,4" />
            {/* Bottom Left - IT to Center */}
            <line x1="18%" y1="82%" x2="42%" y2="58%" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="4,4" />
            {/* Bottom Center - NODOS/MELI EXTRA to Center */}
            <line x1="50%" y1="82%" x2="50%" y2="62%" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="4,4" />
            {/* Bottom Right - NODOs to Center */}
            <line x1="82%" y1="82%" x2="58%" y2="58%" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="4,4" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-3 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
          <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
            O diferencial desta área é ser o <span className="text-[#FFE600] font-medium">único ponto que enxerga TODOS os fluxos simultaneamente</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
