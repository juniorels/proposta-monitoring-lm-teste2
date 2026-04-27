import { XCircle, ArrowRight, Check, Sparkles, ListTodo } from "lucide-react"

export default function Slide7Tarefas() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 lg:pt-8 pb-2 lg:pb-4">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <ListTodo className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Tarefas — Apagar | Delegar | Manter | Transformar</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          O que a CTM faz hoje e o que fará amanhã
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base xl:text-lg">
          A transição é gradual, mas o destino é claro
        </p>
      </div>

      {/* Main Content - 4 Columns */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-4 min-h-0">
        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 h-full">
          {/* APAGAR */}
          <div className="bg-[#FFEBEE] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-5 flex flex-col">
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#F44336] rounded-lg flex items-center justify-center">
                <XCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#F44336] text-[10px] sm:text-xs lg:text-sm">APAGAR</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">CTM para de fazer</p>
              </div>
            </div>

            <div className="flex-1 space-y-1.5 lg:space-y-3">
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#FFCDD2]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Push direto a drivers</p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#FFCDD2]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Gestão de alertas individuais de rota</p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#FFCDD2]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Rotinas operacionais de WhatsApp para MLP/drivers</p>
              </div>
            </div>
          </div>

          {/* DELEGAR */}
          <div className="bg-[#FFF8E1] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-5 flex flex-col">
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#FFB300] rounded-lg flex items-center justify-center">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#FFB300] text-[10px] sm:text-xs lg:text-sm">DELEGAR</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">CTM passa para MLP</p>
              </div>
            </div>

            <div className="flex-1 space-y-1.5 lg:space-y-3">
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#FFE082]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Monitoreo rutas LM <span className="text-[8px] lg:text-xs text-[#ff5e00]">(já em POC)</span></p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Coletas Places</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">PNR</p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#FFE082]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Gestão comentários em rota</p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#FFE082]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Alertas: Veíc. inativos, entregas demoradas, sacas DC/NEx</p>
              </div>
            </div>
          </div>

          {/* MANTER */}
          <div className="bg-[#E8F5E9] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-5 flex flex-col">
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#00A650] rounded-lg flex items-center justify-center">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#00A650] text-[10px] sm:text-xs lg:text-sm">MANTER</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">ONE OPS retém</p>
              </div>
            </div>

            <div className="flex-1 space-y-1.5 lg:space-y-3">
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#A5D6A7]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">Tarefas críticas:</p>
                <ul className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666] mt-1 space-y-0.5 lg:space-y-1">
                  <li>• RTS</li>
                  <li>• Sinistros</li>
                  <li>• Ambulâncias</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#A5D6A7]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Operação Meli EXTRA</p>
              </div>
            </div>
          </div>

          {/* TRANSFORMAR */}
          <div className="bg-[#E3F2FD] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-5 flex flex-col border-2 border-[#3483FA]">
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#3483FA] rounded-lg flex items-center justify-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#3483FA] text-[10px] sm:text-xs lg:text-sm">TRANSFORMAR</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">CTM eleva o nível</p>
              </div>
            </div>

            <div className="flex-1 space-y-1.5 lg:space-y-3">
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#90CAF9]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Análise de dados LM → <span className="font-medium text-[#3483FA]">Riscos MLP/SVC</span></p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#90CAF9]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Relatório semanal de risco → <span className="font-medium text-[#3483FA]">Input p/ Roteirização</span></p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#90CAF9]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">Dashboard end-to-end → <span className="font-medium text-[#3483FA]"> Desde Gaiolas a RTS</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-4 bg-[#F5F5F5] border-t border-[#E0E0E0] shrink-0">
        <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-[10px] sm:text-xs lg:text-sm">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650]" />
            <span className="text-[#666666]"><span className="font-medium text-[#333333]">Manter:</span> tarefas críticas mapeadas no POC</span>
          </div>
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA]" />
            <span className="text-[#666666]"><span className="font-medium text-[#333333]">Transformar:</span> coração da nova área</span>
          </div>
        </div>
      </div>
    </div>
  )
}
