import { CheckCircle2, AlertTriangle, XCircle, Shield, TrendingUp, Database } from "lucide-react"

export default function Slide13Validacao() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pt-3 sm:pt-4 lg:pt-6 pb-1 lg:pb-2 shrink-0">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-1 lg:mb-2">
          <Shield className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          <span>Validação do POC — Como Decidimos Escalar</span>
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#1A1A2E] mb-0.5 lg:mb-1">
          O POC nos dará a evidência para escalar (ou não)
        </h2>
        <p className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">
          Decisão baseada em dados, não em feeling
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 sm:px-8 lg:px-10 py-1 lg:py-2 min-h-0">
        <div className="grid grid-cols-2 gap-3 lg:gap-5 h-full">
          {/* Left Column - Principle & Decision Table */}
          <div className="flex flex-col gap-2 lg:gap-3">
            {/* Principle Box */}
            <div className="bg-[#E3F2FD] rounded-lg p-2 lg:p-3 border-l-4 border-[#3483FA]">
              <div className="flex items-center gap-1.5 lg:gap-2 mb-1 lg:mb-2">
                <Database className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA]" />
                <h3 className="font-bold text-[#1A1A2E] text-[10px] sm:text-xs lg:text-sm">PRINCÍPIO BASE</h3>
              </div>
              <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#333333] mb-1 lg:mb-2">
                Comparamos DS <span className="font-bold">intra-tripleta</span> (B ou C vs A), não DS absoluto.
              </p>
              <div className="space-y-0.5 lg:space-y-1 text-[9px] sm:text-[10px] lg:text-xs text-[#666666]">
                <p>→ Se A cai junto: <span className="text-[#3483FA] font-medium">fator externo, não pausar</span></p>
                <p>→ Se só B/C caem: <span className="text-[#F44336] font-medium">tratamento negativo → agir</span></p>
              </div>
            </div>

            {/* Decision Table */}
            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden flex-1">
              <div className="bg-[#1A1A2E] text-white text-[9px] sm:text-[10px] lg:text-xs font-medium px-2 lg:px-3 py-1.5 lg:py-2">
                UMBRAIS DE DECISÃO
              </div>
              <div className="divide-y divide-[#E0E0E0]">
                {/* Alert Level */}
                <div className="p-2 lg:p-2.5 flex items-start gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#FFF8E1] rounded-lg flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFB300]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-[#FFB300] text-[9px] sm:text-[10px] lg:text-xs">ALERTA</span>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#333333]">
                      DS B/C cai <span className="font-bold">≥ 1.5pp vs A</span> durante 1 semana
                    </p>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666]">→ Investigar causa</p>
                  </div>
                </div>

                {/* Pause Level */}
                <div className="p-2 lg:p-2.5 flex items-start gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#FFF3E0] rounded-lg flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF9800]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-[#FF9800] text-[9px] sm:text-[10px] lg:text-xs">PAUSA</span>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#333333]">
                      DS B/C cai <span className="font-bold">≥ 2pp vs A</span> durante 2 semanas consecutivas
                    </p>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666]">→ Pausar tripleta</p>
                  </div>
                </div>

                {/* Immediate Pause Level */}
                <div className="p-2 lg:p-2.5 flex items-start gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#FFEBEE] rounded-lg flex items-center justify-center shrink-0">
                    <XCircle className="w-3 h-3 lg:w-4 lg:h-4 text-[#F44336]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-[#F44336] text-[9px] sm:text-[10px] lg:text-xs">PAUSA IMEDIATA</span>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#333333]">
                      DS absoluto <span className="font-bold">{"< 95%"}</span> em qualquer semana
                    </p>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666]">→ Pausar sem esperar 2ª semana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Current Status */}
          <div className="flex flex-col">
            <div className="bg-[#E8F5E9] rounded-lg p-2.5 lg:p-4 flex-1 border-2 border-[#00A650] flex flex-col">
              <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
                <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650]" />
                <h3 className="font-bold text-[#1A1A2E] text-[10px] sm:text-xs lg:text-sm">STATUS ATUAL (semana 1 — MLB)</h3>
              </div>

              {/* Status Cards */}
              <div className="space-y-1.5 lg:space-y-2 mb-2 lg:mb-3">
                <div className="bg-white rounded-lg p-2 lg:p-2.5 flex items-center gap-2 lg:gap-3">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-[#00A650]" />
                  <div>
                    <p className="font-bold text-[#333333] text-[10px] sm:text-xs lg:text-sm">Grupo B</p>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#00A650]">+0.20pp acima do A</p>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666]">→ SEM alerta</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-2 lg:p-2.5 flex items-center gap-2 lg:gap-3">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-[#00A650]" />
                  <div>
                    <p className="font-bold text-[#333333] text-[10px] sm:text-xs lg:text-sm">Grupo C</p>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#00A650]">+0.30pp acima do A</p>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666]">→ SEM alerta</p>
                  </div>
                </div>
              </div>

              {/* Decision */}
              <div className="bg-[#00A650] rounded-lg p-2 lg:p-3 text-white">
                <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5 lg:mb-1">
                  <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="font-bold text-[10px] sm:text-xs lg:text-sm">DECISÃO</span>
                </div>
                <p className="text-[9px] sm:text-[10px] lg:text-xs">
                  CONTINUAR POC conforme planejado
                </p>
              </div>

              {/* Note */}
              <div className="mt-auto pt-1.5 lg:pt-2">
                <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666] italic bg-white/50 rounded p-1.5 lg:p-2">
                  Dados de apenas 1 semana — ainda não conclusivos — mas validam a direção. A hipótese central se sustenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-10 py-2 lg:py-3 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2">
          <Shield className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#FFE600]" />
          <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
            Compartilhar os <span className="text-[#FFE600] font-medium">dados do dashboard ao vivo</span> durante a apresentação.
          </p>
        </div>
      </div>
    </div>
  )
}
